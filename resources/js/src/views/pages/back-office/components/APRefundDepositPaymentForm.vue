<template>
    <div>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking && buttonEnable"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert : global.modeDataName.edit) + (formType == global.formType.apRefundDeposit ?  $t('apPayment.apRefundDepositMultiPayment') : $t('apPayment.apCommissionMultiPayment') ))"
            :width="form == 1 ? 80 : 800"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            :textButton1="form == 1 ? 'Next' : 'Save'"
            @button1="form == 1 ? handleNext() : saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
            </div>
                <div v-else>
                    <vs-row vs-type="flex" vs-justify="space-between">
                        <vs-col class="w-full">
                                    <div v-if="form == 1">
                                        <vs-col class="w-full lg:w-1/3">
                                            <vs-row vs-type="flex" vs-justify="space-between">
                                                <vs-button class="mb-2" icon="add" @click="handleInsertFolio()">{{ modeDataEditor == global.modeData.insert ? $t('button.insert') : $t('button.save') }}</vs-button>
                                                <vs-button v-if="modeDataEditor == global.modeData.edit" class="mb-2" @click="handleCancel();" :color="global.buttonColor.cancel">{{ $t('button.cancel') }}</vs-button>
                                            </vs-row>
                                            <vx-card>
                                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full">
                                                        <vs-row><label>{{$t('apPayment.transactionID')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <v-select class="w-full height200" id="form-select" label="id_log" :clearable="false" @input="handleChangeTransactionID()" :options="transactionIDList" v-model="vTransaction" v-validate="'required'" name="transaction id" data-vv-scope="folio"></v-select>
                                                            <span class="error-text text-danger" v-show="errors.has('folio.transaction id')">{{ errors.first('folio.transaction id') }}</span>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('apPayment.guestName')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.guest_name"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row>{{$t('apPayment.auditDate')}}</vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <date-picker
                                                                disabled
                                                                type="date"
                                                                confirm
                                                                confirm-text="Ok"
                                                                :lang="$t('lang')"
                                                                value-type="YYYY-MM-DD"
                                                                format="DD/MM/YYYY"
                                                                label="name"
                                                                class="w-full"
                                                                v-model="vFolioData.audit_date">
                                                            </date-picker>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{ $t('apPayment.folioNumber') }}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.folio_number"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label @click="oneClick()">{{$t('apPayment.roomNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.room_number"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('apPayment.amount')}}</label></vs-row>
                                                        <vs-row>
                                                            <input-number allowZeroAmount  class="w-full" type="text" v-model="vFolioData.amount" :description="errors.first('folio.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('apPayment.outstanding')}}</label></vs-row>
                                                        <vs-row>
                                                            <input-number disabled class="w-full" type="text" v-model="vFolioData.outstanding"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                            </vx-card>
                                        </vs-col>
                                        <vs-col class="w-full lg:w-2/3">
                                            <vx-card>
                                                <ag-grid-vue
                                                    :style="global.styleAgGridFrame3"
                                                    :class="global.themeAgGrid"
                                                    pagination="true"
                                                    :paginationPageSize="paginationPageSize"
                                                    :suppressDragLeaveHidesColumns="true"
                                                    :suppressMakeColumnVisibleAfterUnGroup="true"
                                                    :rowGroupPanelShow="false"
                                                    :statusBar="statusBar"
                                                    :gridOptions="gridOptions2"
                                                    @grid-ready="onGridReady"
                                                    :context="context"
                                                    :columnDefs="columnDefs2"
                                                    :frameworkComponents="frameworkComponents"
                                                    :enableCellChangeFlash="true"
                                                    :rowSelection="rowSelection"
                                                    :getRowNodeId="getRowNodeId"
                                                    :rowData="rowDataInsert"
                                                    :defaultColDef="global.defColDef"
                                                    :getContextMenuItems="getContextMenu"
                                                    @cellContextMenu="handleRowRightClicked"
                                                ></ag-grid-vue>
                                            </vx-card>
                                        </vs-col>
                                    </div>
                                    <div v-else>
                                        <vs-row vs-type="flex" vs-justify="space-between">
                                            <vs-button class="mb-2" @click="handleBack();" :color="global.buttonColor.back">{{ $t('button.back') }}</vs-button>
                                        </vs-row>
                                        <vx-card class="w-full">
                                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/3">
                                                    <vs-row>{{$t('apPayment.date')}}</vs-row>
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
                                                            placeholder="DD/MM/YYYY"
                                                            @input="handleChangeDate"
                                                            v-model="vModel.date"
                                                            v-validate="'required'" name="issued date"
                                                            data-vv-scope="information">
                                                        </date-picker>
                                                        <span class="error-text text-danger" v-show="errors.has('information.date')">{{ errors.first('information.date') || dbErrors.date | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/3">
                                                    <vs-row><label>{{$t('apPayment.subTotal')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number disabled class="w-full" type="text" v-model="vModel.sub_total" :description="errors.first('information.sub total') || dbErrors.sub_total | toString" v-validate="'required'" name="sub total" data-vv-scope="information"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/3">
                                                    <vs-row><label>{{$t('apPayment.discount')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number class="w-full" type="text" showZeroNumber @inputCustom="calculateTotalAmount()" v-model="vModel.discount"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-2/3">
                                                    <vs-row><label>{{$t('apPayment.discountAccount')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select :disabled="vModel.discount <= 0 || vModel.discount == null" class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.income_account" v-model="vModel.discount_journal_account_code" :v-validate="vModel.discount > 0 ? 'required' : ''" name="discount account" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.discount')">{{ errors.first('information.discount') || dbErrors.discount | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/3">
                                                    <vs-row><label>{{$t('apPayment.bankAdministration')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number class="w-full" type="text" showZeroNumber @inputCustom="calculateTotalAmount()" v-model="vModel.bank_administration"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-2/3">
                                                    <vs-row><label>{{$t('apPayment.bankAdminAccount')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select :disabled="vModel.bank_administration <= 0 || vModel.bank_administration ==  null" class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.expense_account" v-model="vModel.ba_journal_account_code" :v-validate="vModel.bank_administration > 0 ? 'required' : ''" name="bank admin account" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.bank admin account')">{{ errors.first('information.bank admin account') || dbErrors.bank_admin_account | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/3">
                                                    <vs-row><label>{{$t('apPayment.otherExpense')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number class="w-full" type="text" showZeroNumber @inputCustom="calculateTotalAmount()" v-model="vModel.other_expense"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-2/3">
                                                    <vs-row><label>{{$t('apPayment.otherExpenseAccount')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select :disabled="vModel.other_expense <= 0 || vModel.other_expense <= ''" class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.expense_account" v-model="vModel.oe_journal_account_code" :v-validate="vModel.other_expense > 0 ? 'required' : ''" name="other expense account" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.other expense account')">{{ errors.first('information.other expense account') || dbErrors.other_expense_account | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/3">
                                                    <vs-row><label>{{$t('apPayment.total')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number disabled class="w-full" type="text" v-model="vModel.total_amount" :description="errors.first('information.total') || dbErrors.total | toString" v-validate="'required'" name="total" data-vv-scope="information"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-2/3">
                                                    <vs-row><label>{{$t('apPayment.bankAccount')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.journal_account_code" :options="dataLookup.bank_account" v-model="vModel.journal_account_code" v-validate="'required'" name="bank account" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.bank account')">{{ errors.first('information.bank account') || dbErrors.bank_account_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full">
                                                    <vs-row><label>{{$t('apPayment.remark')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <vs-textarea class="w-full" type="text" v-model="vModel.remark"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                        </vx-card>
                                    </div>
                            </vx-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
    </div>
</template>

<script>
import APRefundDepositResource from '@/api/back-office/apRefundDeposit';
import APCommissionAndOtherResource from '@/api/back-office/apCommissionAndOther';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGridEditor from '@/views/pages/components/ag_grid-framework/action_grid_update_delete_editor';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate, formatDateTime, formatDateDatabase, formatDateDatabaseAddWeek } from '@/utils/format.js';
import { asyncForEach, rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import DatePicker from 'vue2-datepicker';

const apRefundDepositResource = new APRefundDepositResource();
const apCommissionAndOtherResource = new APCommissionAndOtherResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'APPaymentForm',

    props: {
        titleForm: String,
        formType: {
            required: true,
        }
    },

    components: {
        'ag-grid-vue': AgGridVue,
        tracking: Tracking,
        DatePicker,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            columnDefs2: null,
            rowData: null,
            rowDataInsert: [],
            gridOptions: null,
            gridOptions2: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            getRowNodeId: null,
            paginationPageSize: null,
            rowSelection: null,
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
            directBillPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            vFolioData: {},
            vFolioDataOld: {},
            vFolioDataInsert: {},
            vDirectBill: {},
            vCurrency: {},
            dataLookup: [],
            vTransaction: null,
            transactionIDList: [],
            transactionIDListTemp: [],
            companyCodeTemp: '',
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
            mainTableName: '',
            form: 1,
            // double click handler
            delay: 700,
            clicks: 0,
            timer: null,
            buttonEnable: true,
            apiResource: '',
        };
    },

    beforeMount() {
        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };

        this.getRowNodeId = (data) => data.id_log;

        this.columnDefs2 = [
            { headerName: this.$t('common.table.action'), field: 'index', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGridEditor', colId: 'params', width: 100, },
            { headerName: this.$t('apPayment.table.id'), field: 'id_log', width: 120 },
            { headerName: this.$t('apPayment.table.auditDate'), field: 'audit_date', width: 120 },
            { headerName: this.$t('apPayment.table.folioNumber'), field: 'folio_number', width: 120 },
            { headerName: this.$t('apPayment.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('apPayment.table.guestName'), field: 'guest_name', width: 200 },
            { headerName: this.$t('apPayment.table.outstanding'), field: 'outstanding', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('apPayment.table.amount'), field: 'amount', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('apPayment.table.result'), field: 'result', width: 250 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGridEditor: ActionGridEditor,
        };
        this.rowGroupPanelShow = 'always';
        this.statusBar = {
            statusPanels: [
                { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
                { statusPanel: 'agTotalRowCountComponent', align: 'center' },
                { statusPanel: 'agFilteredRowCountComponent' },
                { statusPanel: 'agSelectedRowCountComponent' },
                { statusPanel: 'agAggregationComponent' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'clientSide';
        // this.getRowNodeId();
    },

    methods: {
        onGridReady() {},

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        // ------------------------additional for context menu ag-Grid-----------//
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.handleUpdateEditor(this.paramsData),
                },
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleDeleteEditor(this.paramsData),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                vm.gridOptions2.apiaq.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.id_log == vm.paramsData.id_log) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.$emit('refreshData');
        },

        resetData() {
            this.vModel = {
                date: formatDateDatabase(this.auditDate),
                discount: 0,
                discount_journal_account_code: '',
                bank_administration: 0,
                journal_account_code: '',
                other_expense: 0,
                oe_journal_account_code: '',
                remark: '',
                user_id: this.global.userInfo.code,
            };
            this.vFolioData = {
                user_id: this.global.userInfo.code,
            };
            this.rowDataInsert = [];
            this.form = 1;
            this.dbErrors = {};
            this.$validator.reset();
            this.buttonEnable = true;
            this.updateEditor = false;
            this.dataTracking = null;
            this.vTransaction = null;
            this.btnSaveDisabled = false;
            this.modeDataEditor = this.global.modeData.insert;
        },

        dateDisable(date) {
            if(this.vModel.issued_date) {
                const dateX = new Date(this.vModel.issued_date);
                dateX.setDate(dateX.getDate());
                return date < dateX;
            }
        },

        handleChangeDate() {
            if(this.vModel.issued_date) {
                if(this.vModel.issued_date > this.vModel.due_date) {
                    this.vModel.due_date = formatDateDatabaseAddWeek(this.vModel.issued_date, 1);
                }
            }
        },

        async showModal(idData, modeData) {
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.paramsData = idData;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                this.$loadingIndicator(this);
                this.getLookupTransaction();
                this.getLookupAccount();
                await this.editData(idData);
                this.$closeLoadingIndicator(this);
            } else if (modeData == this.global.modeData.tracking) {
                await this.trackingData(idData);
                this.mainPopUp = true;
            } else if (modeData == this.global.modeData.insert) {
                this.$loadingIndicator(this);
                this.getLookupTransaction();
                await this.getLookupAccount();
                this.setSelectedTransaction(idData);
                this.$closeLoadingIndicator(this);
                this.mainPopUp = true;
            }
        },

        setSelectedTransaction(params) {
            if(params && this.transactionIDList) {
                this.transactionIDList.forEach((element)=> {
                    if(element.id_log == params.TransactionID) {
                        this.vTransaction = element;
                        this.handleChangeTransactionID();
                    };
                })
            }
        },

        async saveData() {
            this.$validator.validateAll('information').then(async (result) => {
                if (result) {
                    if(this.rowDataInsert != null && this.rowDataInsert.length > 0) {
                        this.btnSaveDisabled = true;
                        this.vModel.data = this.rowDataInsert;
                        this.vModel.user_id = this.global.userInfo.code;

                        const folio = this.rowDataInsert;
                        for(let i = 0; i < folio.length; i++) {
                            const issuedDate = new Date(this.vModel.date);
                            const issuedTime = issuedDate.getTime();
                            const date = new Date(folio[i].audit_date);
                            const time = date.getTime();

                            if(time > issuedTime) {
                                $dialog.information(this.$t('message.paymentDateCannotLowerThanIssuedDate'));
                                this.btnSaveDisabled = false;
                                return;
                            }
                        }
                        if (this.modeDataValue == 1) {
                            this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                            await this.updateData();
                            this.$vs.loading.close('#button-save-main>.con-vs-loading');
                        } else {
                            this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                            await this.insertData();
                            this.$vs.loading.close('#button-save-main>.con-vs-loading');
                        }
                    } else {
                        $dialog.information(this.$t('message.informationNoDetailData'));
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
                    $dialog.information(this.$t(`responseStatus.apPayment.${data}`));
                } else {
                    $dialog.information(`Success: ${data.success}\r\n Failed: ${data.failed}, Please see detail on table list!`);
                    const start = async () => {
                        await asyncForEach(data.result, async (element) => {
                            this.updateResult(element.id_log, element.status);
                        });
                    };
                    start();
                    this.form = 1;
                    this.buttonEnable = false;
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
                    $dialog.information(this.$t(`responseStatus.apPayment.${data}`));
                } else {
                    $dialog.information(`Success: ${data.success}\r\n Failed: ${data.failed}, Please see detail on table list!`);
                    const vm = this;
                    const result = data.result
                    this.form = await 1;
                    const start = async () => {
                        await asyncForEach(data.result, async (element) => {
                            vm.updateResult(element.id_log, element.status);
                        });
                    };
                    start();
                    this.buttonEnable = false;
                }
                this.btnSaveDisabled = true;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        updateResult(id, status) {
            setTimeout(()=>{
                const rowNode = this.gridOptions2.api.getRowNode(id);
                rowNode.setDataValue('result', this.$t(`responseStatus.apPaymentResult.${status}`));
            }, 200)
        },

        async editData(params) {
            try{
                const { data } = await this.apiResource.get(params.ref_number);
                this.vModel = data.payment;
                this.rowDataInsert = data.detail;
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getLookupAccount() {
            const { data } = await this.apiResource.dataLookup();
            this.dataLookup.bank_account = data.bank_account;
            this.dataLookup.income_account = data.income_account;
            this.dataLookup.expense_account = data.expense_account;
        },

        async getLookupTransaction() {
            const params = {
                ref_number: this.modeDataValue == this.global.modeData.edit ? this.paramsData.ref_number : '',
            };
            const { data } = await this.apiResource.lookupTransaction(params);
            this.transactionIDList = data.slice();
            this.transactionIDListTemp = data.slice();
        },
        async handleChangeAccount() {
            this.getLookupTransaction();
        },

        handleChangeTransactionID() {
            if(this.vTransaction) {
                this.vFolioData.folio_number = this.vTransaction.folio_number;
                this.vFolioData.amount = this.vTransaction.outstanding;
                this.vFolioData.outstanding = this.vTransaction.outstanding;
                this.vFolioData.id_log = this.vTransaction.id_log;
                this.vFolioData.audit_date = this.vTransaction.audit_date;
                this.vFolioData.journal_account_code = this.vTransaction.journal_account_code;
                this.vFolioData.room_number = this.vTransaction.room_number;
                this.vFolioData.guest_name = this.vTransaction.guest_name;
                this.vFolioData.type = this.vTransaction.type;
            } else {
                this.vFolioData = {};
            }
        },

        handleNext() {
            this.$validator.validateAll('information').then((result)=> {
                if(this.rowDataInsert !== null && this.rowDataInsert.length > 0) {
                    this.calculateSubTotal();
                    this.calculateTotalAmount();
                    this.form = 2;
                } else {
                    $dialog.information(this.$t('message.informationNoDetailProcess'));
                }
            })
        },

        handleBack() {
            this.btnSaveDisabled = false;
            this.form = 1;
        },

        getAllRows() {
            const rowData = [];
            this.gridOptions2.api.forEachNode((node) => rowData.push(node.data));
            return rowData;
        },

        cloneObject(object) {
            const clone = {};
            for (const key in object) {
                if (object.hasOwnProperty(key)) // ensure not adding inherited props
                { clone[key] = object[key]; }
            }
            return clone;
        },

        handleInsertFolio() {
            this.$validator.validateAll('folio').then(async (result)=>{
                if(result) {
                    if(this.vFolioData.id_log != null) {
                        let isExist = false;
                        this.gridOptions2.api.forEachNode((rowNode, index)=> {
                            if(!this.updateEditor) {
                                if(rowNode.data.id_log == this.vFolioData.id_log) {
                                    $dialog.information(this.$t('message.dataIsAlreadyExist'));
                                    isExist = true;
                                };
                            } else {
                                if(rowNode.data.id_log !== this.paramsDataEditor.id_log) {
                                    if(rowNode.data.id_log == this.vFolioData.id_log) {
                                    $dialog.information(this.$t('message.dataIsAlreadyExist'));
                                        isExist = true;
                                    }
                                };
                            }
                        });
                        if(this.vFolioData.amount > 0) {
                            if(this.vFolioData.amount <= this.vFolioData.outstanding) {
                                if(!isExist) {
                                    if(this.modeDataEditor == this.global.modeData.edit) {
                                        const selectedData = this.gridOptions2.api.getSelectedRows();
                                        this.gridOptions2.api.applyTransaction({ remove: selectedData });
                                        this.transactionIDList = this.transactionIDListTemp.slice();
                                    }
                                    if (this.rowDataInsert == null) {
                                        this.rowDataInsert = [];
                                    } else {
                                        this.rowDataInsert = this.getAllRows();
                                    }
                                    if (this.rowDataInsert.length >= 0) {
                                        this.vFolioDataInsert.index = this.rowDataInsert.length;
                                    }
                                    await this.rowDataInsert.push(this.cloneObject(this.vFolioData));
                                    this.removeDataLookupFolioOnInsert();
                                    this.vFolioData = {};
                                    this.vTransaction = null;
                                    this.vFolioDataInsert = {};
                                    this.vFolioData.folio = '';
                                    this.$validator.reset();
                                    this.modeDataEditor = this.global.modeData.insert;
                                }
                            } else {
                                $dialog.information(this.$t('message.amountCaanotGreatherThanOutstanding'));
                            }
                        }
                    }
                }
            });
        },

        removeDataLookupFolioOnInsert() {
            if(this.transactionIDList && this.rowDataInsert) {
                let folioX = this.rowDataInsert;
                let folio = this.transactionIDList;
                for(let i = 0; i < folio.length; i++) {
                    folioX.forEach(element => {
                        if(folio[i].id_log == element.id_log) {
                            this.transactionIDList.splice(i, 1);
                        }
                    });
                }
            }
        },

        handleUpdateEditor(params) {
            this.updateEditor = true;
            this.paramsDataEditor = this.cloneObject(params);
            this.modeDataEditor = this.global.modeData.edit;
            this.vFolioData = this.cloneObject(params);
            this.vFolioDataOld = this.cloneObject(params);
            this.vFolioData.folio = params.folio_number;
            this.vTransaction = this.cloneObject(params);
        },

        async handleDeleteEditor() {
            const selectedData = this.gridOptions2.api.getSelectedRows();
            this.gridOptions2.api.applyTransaction({ remove: selectedData });
            this.rowDataInsert = this.getAllRows();
            this.transactionIDList = this.transactionIDListTemp.slice();
            this.removeDataLookupFolioOnInsert();
            this.$validator.reset();
        },

        handleCancel() {
            this.paramsDataEditor = {};
            this.modeDataEditor = this.global.modeData.insert;
            this.vFolioData = {};
            this.vTransaction = null;
            this.vFolioDataOld = {};
            this.$validator.reset();
        },

        calculateSubTotal() {
            let total = 0;
            this.rowDataInsert.forEach((element) => {
                total += parseFloat(element.amount);
            });
            this.vModel.sub_total = total;
            console.log(this.vModel.sub_total)
        },

        calculateTotalAmount() {
            if(this.vModel.sub_total > 0){
                this.vModel.total_amount = parseFloat(this.vModel.sub_total);
            }
            if(this.vModel.discount > 0) {
                this.vModel.total_amount -= parseFloat(this.vModel.discount);
            }
            if(this.vModel.bank_administration > 0) {
                this.vModel.total_amount += parseFloat(this.vModel.bank_administration);
            }
            if(this.vModel.other_expense > 0) {
                this.vModel.total_amount += parseFloat(this.vModel.other_expense);
            }
        },

        oneClick(event) {
            this.clicks++
            if(this.clicks === 1) {
                var self = this
                this.timer = setTimeout(function() {
                self.clicks = 0
                }, this.delay);
            } else{
                clearTimeout(this.timer);
                this.handleDoubleClickAmount();
                this.clicks = 0;
            }
        },

        handleDoubleClickAmount() {
            this.vFolioData.amount = parseFloat(this.vFolioData.outstanding);
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.subFolio,
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
        this.gridApi = this.gridOptions2.api;
        this.ColumnApi = this.gridOptions2.columnApi;
        this.apiResource = this.formType == this.global.formType.apRefundDeposit ? apRefundDepositResource : apCommissionAndOtherResource;
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
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    }
};
</script>
