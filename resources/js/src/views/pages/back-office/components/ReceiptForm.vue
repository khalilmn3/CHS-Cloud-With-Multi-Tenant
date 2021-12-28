<template>
    <div>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert : global.modeDataName.edit) + titleForm)"
            :width="600"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            :textButton1="$t('button.save')"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
            </div>
                <div v-else>
                    <vs-row vs-type="flex" vs-justify="space-around">
                        <vs-col class="w-full">
                            <vx-card style="height:100%">
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{ $t('receipt.number') }}</label></vs-row>
                                    <vs-row>
                                        <vs-input disabled class="w-full lg:w-1/3" type="text" v-model="vModel.number" :description="errors.first('folio.remark') || dbErrors.remark | toString" v-validate="'required'" name="remark" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{ $t('receipt.receiveFrom') }}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.receive_from" :description="errors.first('folio.remark') || dbErrors.remark | toString" v-validate="'required'" name="remark" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{$t('receipt.amount')}}</label></vs-row>
                                    <vs-row>
                                        <input-number showZeroNumber class="w-full lg:w-1/2" type="text" v-model="vModel.amount" :description="errors.first('folio.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-row>{{$t('receipt.issuedDate')}}</vs-row>
                                        <vs-row class="wrap-form-select">
                                            <date-picker
                                                type="date"
                                                confirm
                                                confirm-text="Ok"
                                                :lang="$t('lang')"
                                                value-type="YYYY-MM-DD"
                                                format="DD/MM/YYYY"
                                                label="name"
                                                class="w-full"
                                                v-model="vModel.issued_date">
                                            </date-picker>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{ $t('receipt.forPayment') }}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.for_payment" :description="errors.first('folio.remark') || dbErrors.remark | toString" v-validate="'required'" name="remark" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                            </vx-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
    </div>
</template>

<script>
import ReceiptResource from '@/api/back-office/receipt';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import Tracking from '@/views/pages/components/Tracking.vue';
import { formatNumber, formatDate, formatDateTime, formatDateDatabase, formatDateDatabaseAddWeek } from '@/utils/format.js';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import DatePicker from 'vue2-datepicker';

const receiptResource = new ReceiptResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'BudgetForm',

    props: {
        titleForm: String,
        formType: {
            required: true,
        },
    },

    components: {
        'ag-grid-vue': AgGridVue,
        tracking: Tracking,
        DatePicker
    },

    data() {
        return {
            dataTracking: null,
            // getRowNodeId: null,

            // Parameter From Child
            idData: '',
            paramsData: '',
            paramsDataEditor: '',
            updateEditor: false,
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataEditor: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            dlAccount: [],
            dlSubDepartment: [],
            period: [ 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
                2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
            mainTableName: '',
        };
    },

    methods: {
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.$emit('refreshData');
        },

        resetData() {
            this.vModel = {
                number: '',
                receive_from: '',
                for_payment: '',
                amount: 0,
                issued_date: formatDateDatabase(this.auditDate),
                user_id: this.global.userInfo.code,
            };
            this.dlAccount = [];
            this.dlSubDepartment = [];
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
            this.modeDataEditor = this.global.modeData.insert;
        },

        async showModal(idData, modeData) {
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.paramsData = idData;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                this.$loadingIndicator(this);
                await this.editData(idData);
                this.$closeLoadingIndicator(this);
            } else if (modeData == this.global.modeData.tracking) {
                await this.trackingData(idData);
                this.mainPopUp = true;
            } else if (modeData == this.global.modeData.insert) {
                this.$loadingIndicator(this);
                await this.getReceiptNumber();
                this.$closeLoadingIndicator(this);
                this.mainPopUp = true;
            }
        },

        async saveData() {
            this.$validator.validateAll('information').then(async (result) => {
                if (result) {
                    if (this.modeDataValue == 1) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        await this.updateData();
                        this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    } else {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        await this.insertData();
                        this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    }
                }
            });
        },

        async insertData() {
            try{
                const { data } = await this.apiResource.store(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.budget.${data}`));
                }
                this.btnSaveDisabled = false;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async updateData() {
            try{
                const { data } = await this.apiResource.update(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.budget.${data}`));
                }
                this.btnSaveDisabled = true;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async editData(params) {
            try{
                const { data } = await this.apiResource.get(params.number);
                this.vModel = data;
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getReceiptNumber() {
            const { data } = await this.apiResource.getReceiptNumber();
            this.vModel.number = data;
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.receipt,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },

    },
    beforeRouteLeave(to, from, next) {
        if (this.mainPopUp) {
            this.mainPopUp = false;
            next(false);
        } else {
            next();
        }
    },
    // ------------------end need setting manual for crud-----------------//
    mounted() {
        this.apiResource = receiptResource;
    },

    watch: {
        mainPopUp() {
            if(!this.mainPopUp) {
                this.refreshData();
            }
        },
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    }
};
</script>
