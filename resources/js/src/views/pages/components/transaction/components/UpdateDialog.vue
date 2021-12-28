<template>
    <div>
        <dialog-prompt
            button1
            :title="title"
            :child="1"
            :width="500"
            :active="modalMain"
            :idButton1="'button-save'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSaveData()"
            @close="val=>modalMain = val">
            <template #body>
                <div v-if="updateType == 1">
                    <vs-row vs-align="center" class="wrap-form-select" vs-type="flex" vs-justify="flex-start">
                        <label class="md:w-1/3 w-full">{{ $t('transaction.subDepartment') }}</label>
                        <v-select class="md:w-2/3 w-full" id="form-select" @keyup.enter="handleSaveData()" append-to-body :clearable="false" label="name" :reduce="value => value.code" :options="dlSubDepartment" v-model="vModel.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="subDepartment"/>
                        <span class="error-text text-danger" v-show="errors.has('subDepartment.sub department')">{{ errors.first('subDepartment.sub department') || dbErrors.sub_department_code | toString  }}</span>
                    </vs-row>
                </div>
                <div v-if="updateType == 2">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start">
                        <label class="md:w-1/3 w-full">{{ $t('transaction.remark') }}</label>
                        <vs-input class="md:w-2/3 w-full" @keyup.enter="handleSaveData()" v-model="vModel.remark"/>
                    </vs-row>
                </div>
                <div v-if="updateType == 3">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start">
                        <label class="md:w-1/3 w-full">{{ $t('transaction.docNumber') }}</label>
                        <vs-input class="md:w-2/3 w-full" @keyup.enter="handleSaveData()" v-model="vModel.document_number"/>
                    </vs-row>
                </div>
                <div v-if="updateType == 4">
                    <vs-row vs-align="center" class="wrap-form-select" vs-type="flex" vs-justify="flex-start">
                        <label class="md:w-1/3 w-full">{{ $t('transaction.directBillOrCompany') }}</label>
                        <v-select class="md:w-2/3 w-full" id="form-select" @keyup.enter="handleSaveData()" append-to-body :clearable="false" label="name" :reduce="value => value.code" :options="dlCompany" v-model="vModel.company_code" v-validate="'required'" name="company" data-vv-scope="company"/>
                        <span class="error-text text-danger" v-show="errors.has('company.company')">{{ errors.first('company.company') || dbErrors.company_code | toString  }}</span>
                    </vs-row>
                </div>
            </template>

        </dialog-prompt>
    </div>
</template>
<script>
import DepositResource from '@/api/reservation/deposit'
import TransactionResource from '@/api/transaction'
import $alert from '@/utils/alert';

const depositResource = new DepositResource();
const transactionResource = new TransactionResource();
export default {
    props: {
        formType: String,
        isShowCorrectionOrProperties: Boolean,
    },
    data() {
        return {
            dbErrors: {}, // error message handling
            modalMain: false,
            btnSaveDisabled: false,
            dlSubDepartment: [],
            dlCompany: [],
            title: '',
            updateType: '',
            vModel: {},
        };
    },
    methods: {
        async handleUpdateType(params, type) {
            this.title = type === 1 ? this.$t('transaction.title.updateSubDepartment') : ( type === 2 ? this.$t('transaction.title.updateRemark') : ( type === 3 ? this.$t('transaction.title.updateDocumentNumber') : ''));
            this.updateType = type;
            this.resetData(params.id_log);
            this.$loadingIndicator(this);
            if (type === 1) {
                this.getLookupSubDepartment(params.id_log);
                await this.editSubDepartment(params.id_log);
            } else if (type === 2) {
                await this.editRemark(params.id_log);
            } else if (type === 3) {
                await this.editDocumentNumber(params.id_log);
            } else if (type === 4) {
                this.getLookupCompany(params.id_log);
                await this.editDirectBill(params.id_log);
            }
            this.$closeLoadingIndicator(this);
            this.modalMain = true;
        },

        async getLookupSubDepartment(id) {
            let data = [];
            if(this.formType === this.global.formType.reservation) {
                data = await depositResource.getSubDepartment(id);
            } else if (this.formType === this.global.formType.transaction) {
                data = await transactionResource.getSubDepartment(id);
            }
            this.dlSubDepartment = data.data;
        },

        async getLookupCompany(idLog) {
            const { data } = await transactionResource.getCompany(idLog);
            this.dlCompany = data;
        },

        async editSubDepartment(id) {
            let data = [];
            if(this.formType === this.global.formType.reservation) {
                data = await depositResource.editSubDepartment(id);
            } else if (this.formType === this.global.formType.transaction) {
                data = await transactionResource.editSubDepartment(id);
            }
            this.vModel.sub_department_code = this.dlSubDepartment.length > 0 ? data.data.sub_department_code : '';
        },

        async editRemark(id) {
            let data = [];
            if(this.formType === this.global.formType.reservation) {
                data = await depositResource.editRemark(id);
            } else if (this.formType === this.global.formType.transaction) {
                data = await transactionResource.editRemark(id);
            }
            this.vModel.remark = data.data.remark;
        },

        async editDocumentNumber(id) {
            let data = [];
            if(this.formType === this.global.formType.reservation) {
                data = await depositResource.editDocumentNumber(id);
            } else if (this.formType === this.global.formType.transaction) {
                data = await transactionResource.editDocumentNumber(id);
            }
            this.vModel.document_number = data.data.document_number;
        },

        async editDirectBill(id) {
            const { data } = await transactionResource.editDirectBill(id);
            this.vModel.company_code = this.dlCompany.length > 0 ? data.direct_bill_code : '';
        },

        handleSaveData() {
            if(this.updateType === 1 || this.updateType === 4) {
                const scope = this.updateType === 1 ? 'subDepartment' : 'company';
                this.$validator.validateAll(scope).then((result) => {
                    if (result) {
                        this.saveData();
                    };
                });
            } else {
                this.saveData();
            }
        },

        async saveData() {
            this.btnSaveDisabled = true;
            this.$loadingIndicator(this);
            try{
                let data = null;
                if (this.formType == this.global.formType.reservation) {
                    if (this.updateType === 1) {
                        data = await depositResource.updateSubDepartment(this.vModel);
                    } else if (this.updateType === 2) {
                        data = await depositResource.updateRemark(this.vModel);
                    } else if (this.updateType === 3) {
                        data = await depositResource.updateDocumentNumber(this.vModel);
                    }
                } else if (this.formType === this.global.formType.transaction) {
                    if (this.updateType === 1) {
                        data = await transactionResource.updateSubDepartment(this.vModel);
                    } else if (this.updateType === 2) {
                        data = await transactionResource.updateRemark(this.vModel);
                    } else if (this.updateType === 3) {
                        data = await transactionResource.updateDocumentNumber(this.vModel);
                    } else if (this.updateType === 4) {
                        data = await transactionResource.updateDirectBill(this.vModel);
                    }
                }
                if (data.data === 0) {
                    $alert.acceptAlertSucces();
                    await this.refreshData();
                    this.modalMain = false;
                } else {
                    this.$closeLoadingIndicator(this);
                    $alert.errorSaveDataAlert();
                }
                this.btnSaveDisabled = false;
            } catch (error) {
                if(error.response) {
                    const message = error.response.data.error;
                    this.dbErrors = message == undefined ? '' : message;
                    $alert.errorSaveDataAlert(message);
                    this.$closeLoadingIndicator(this);
                    this.btnSaveDisabled = false;
                }
            }
        },

        async refreshData() {
            await this.$emit('refreshData');
        },

        resetData(idLog) {
            this.dlSubDepartment = [];
            this.vModel = {
                id_log: idLog,
                sub_department_code: '',
                remark: '',
                document_number: '',
                is_show_correction: this.isShowCorrection,
                user_id: this.global.userInfo.code,
            };
        },

    },
};
</script>
