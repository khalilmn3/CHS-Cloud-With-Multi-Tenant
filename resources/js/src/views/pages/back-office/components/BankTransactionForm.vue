<template>
    <div>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + $t('bankTransaction.bankReconciliation'))"
            :width="form == 1 ? 600 : 80"
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
                                        <vx-card class="w-full">
                                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row>{{$t('bankTransaction.date')}}</vs-row>
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
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full">
                                                    <vs-row><label>{{$t('bankTransaction.bankAccount')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.journal_account_code" :options="dataLookup.bank_account" v-model="vModel.journal_account_code" v-validate="'required'" name="bank account" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.bank account')">{{ errors.first('information.bank account') || dbErrors.bank_account_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('bankTransaction.amountReceive')}}</label></vs-row>
                                                    <vs-row>
                                                        <input-number class="w-full" type="text" v-model="vModel.amount_received" :description="errors.first('information.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="information"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full">
                                                    <vs-row><label>{{$t('bankTransaction.remark')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <vs-textarea class="w-full" type="text" v-model="vModel.remark"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                        </vx-card>
                                    </div>
                                    <div v-else>
                                        <vs-col class="w-full lg:w-1/3">
                                            <vs-row vs-type="flex" vs-justify="space-between">
                                                <vs-button class="mb-2" @click="handleBack();" :color="global.buttonColor.back">{{ $t('button.back') }}</vs-button>
                                                <vs-button class="mb-2" icon="add" @click="handleInsertFolio()">{{ modeDataEditor == global.modeData.insert ? $t('button.insert') : $t('button.save') }}</vs-button>
                                                <vs-button v-if="modeDataEditor == global.modeData.edit" class="mb-2" @click="handleCancel();" :color="global.buttonColor.cancel">{{ $t('button.cancel') }}</vs-button>
                                            </vs-row>
                                            <vx-card>
                                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full">
                                                        <vs-row><label>{{$t('bankTransaction.account')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <v-select class="w-full height200" id="form-select" label="name" @input="handleChangeAccount(); vTransaction = null; vFolioData = {}" :resetOnOptionsChange="true" :clearable="false" :reduce="value => value.code" :options="dataLookup.account" v-model="vFolioData.account_code"></v-select>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full">
                                                        <vs-row><label>{{$t('bankTransaction.transactionID')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <v-select class="w-full height200" id="form-select" label="transaction_id" :clearable="false" @input="handleChangeTransactionID()" :options="transactionIDList" v-model="vTransaction" v-validate="'required'" name="transaction id" data-vv-scope="folio"></v-select>
                                                            <span class="error-text text-danger" v-show="errors.has('folio.transaction id')">{{ errors.first('folio.transaction id') }}</span>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{ vFolioData.type == 'F' ? $t('bankTransaction.folioNumber') : $t('bankTransaction.reservationNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.number"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.roomNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.room_number"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.guestName')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.guest_name"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.cardHolder')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.card_holder"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.documentNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.document_number"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.ccNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.card_number"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('bankTransaction.amount')}}</label></vs-row>
                                                        <vs-row>
                                                            <input-number disabled class="w-full" type="text" v-model="vFolioData.amount"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row>{{$t('bankTransaction.auditDate')}}</vs-row>
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
                                                    <div class="w-full">
                                                        <vs-row><label>{{$t('bankTransaction.remark')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <vs-textarea class="w-full" type="text" v-model="vFolioData.remark"/>
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
                                                    :rowData="rowDataInsert"
                                                    :defaultColDef="global.defColDef"
                                                    :getContextMenuItems="getContextMenu"
                                                    @cellContextMenu="handleRowRightClicked"
                                                ></ag-grid-vue>
                                            </vx-card>
                                        </vs-col>
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
import BankTransactionResource from '@/api/back-office/bankTransaction';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGridEditor from '@/views/pages/components/ag_grid-framework/action_grid_update_delete_editor';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate, formatDateTime, formatDateDatabase, formatDateDatabaseAddWeek } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import DatePicker from 'vue2-datepicker';

const bankTransactionResource = new BankTransactionResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'ARCityLedgerForm',

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
            paginationPageSize: null,
            rowSelection: null,
            dataTracking: null,

            // Parameter From Child
            idData: '',
            paramsData: '',
            paramsDataEditor: '',
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
        };
    },

    beforeMount() {
        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };

        this.columnDefs2 = [
            { headerName: this.$t('common.table.action'), field: 'index', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGridEditor', colId: 'params', width: 100, },
            { headerName: this.$t('bankTransaction.table.ID'), field: 'transaction_id', width: 120 },
            { headerName: this.$t('bankTransaction.table.folioNumber'), field: 'number', width: 120 },
            { headerName: this.$t('bankTransaction.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('bankTransaction.table.amount'), field: 'amount', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('bankTransaction.table.guestName'), field: 'guest_name', width: 120 },
            { headerName: this.$t('bankTransaction.table.documentNumber'), field: 'document_number', width: 90 },
            { headerName: this.$t('bankTransaction.table.ccNumber'), field: 'cc_number', width: 90 },
            { headerName: this.$t('bankTransaction.table.auditDate'), field: 'audit_date', width: 110, valueFormatter: formatDate },
            { headerName: this.$t('bankTransaction.table.remark'), field: 'remark', width: 200 }
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
        this.rowModelType = 'serverSide';
        this.limitPageSize = this.global.limitDefaultPageSize;
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
                    name: this.$t('common.contextMenu.createInvoice'),
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showModal('', 0),
                },
                {
                    name: this.$t('common.contextMenu.updateDiractBill'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showModal(this.paramsData, 1),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
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
                user_id: this.global.userInfo.code
            };
            this.vFolioData = {
                default_currency_code: this.defaultCurrency,
                user_id: this.global.userInfo.code,
            };
            this.rowDataInsert = [];
            this.form = 1;
            this.dbErrors = {};
            this.$validator.reset();
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
                    if(element.transaction_id == params.TransactionID) {
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

                        const folio = this.getAllRows();
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
                const { data } = await bankTransactionResource.store(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.bankTransaction.${data}`));
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
                const { data } = await bankTransactionResource.update(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.bankTransaction.${data}`));
                }
                this.btnSaveDisabled = false;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
         },

        async editData(params) {
            try{
                const { data } = await bankTransactionResource.get(params.id_log);
                this.vModel = data.reconciliation;
                this.rowDataInsert = data.detail;
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getLookupAccount() {
            const { data } = await bankTransactionResource.lookupAccount();
            this.dataLookup.bank_account = data.bank_account;
            this.dataLookup.account = data.account;
        },

        async getLookupTransaction() {
            const params = {
                code: this.vFolioData.account_code,
                id: this.modeDataValue == this.global.modeData.edit ? this.paramsData.id_log : '',
            };
            const { data } = await bankTransactionResource.lookupTransaction(params);
            this.transactionIDList = data.slice();
            this.transactionIDListTemp = data.slice();
        },
        async handleChangeAccount() {
            this.getLookupTransaction();
        },

        handleChangeTransactionID() {
            if(this.vTransaction) {
                this.vFolioData.number = this.vTransaction.number;
                this.vFolioData.transaction_id = this.vTransaction.transaction_id;
                this.vFolioData.audit_date = this.vTransaction.audit_date;
                this.vFolioData.journal_account_code = this.vTransaction.journal_account_code;
                this.vFolioData.room_number = this.vTransaction.room_number;
                this.vFolioData.guest_name = this.vTransaction.guest_name;
                this.vFolioData.card_holder = this.vTransaction.card_holder;
                this.vFolioData.card_number = this.vTransaction.card_number;
                this.vFolioData.document_number = this.vTransaction.document_number;
                this.vFolioData.amount = this.vTransaction.amount;
                this.vFolioData.type = this.vTransaction.type;
            } else {
                this.vFolioData = {};
            }
        },

        handleNext() {
            this.$validator.validateAll('information').then((result)=> {
                if(result) {
                    this.form = 2;
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
                    if(this.vFolioData.transaction_id != null) {
                        let isExist = false;
                        this.gridOptions2.api.forEachNode((rowNode, index)=> {
                            if(this.modeDataEditor == this.global.modeData.insert) {
                                if(rowNode.data.transaction_id == this.vFolioData.transaction_id) {
                                    $dialog.information(this.$t('responseStatus.cityLedgerEditor.0'));
                                    isExist = true;
                                };
                            } else {
                                if(rowNode.data.transaction_id !== this.paramsDataEditor.transaction_id) {
                                    if(rowNode.data.transaction_id == this.vFolioData.transaction_id) {
                                        $dialog.information(this.$t('responseStatus.cityLedgerEditor.0'));
                                        isExist = true;
                                    }
                                };
                            }
                        });
                        if(this.vFolioData.amount > 0) {
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
                        if(folio[i].transaction_id == element.transaction_id) {
                            this.transactionIDList.splice(i, 1);
                        }
                    });
                }
            }
        },

        // update item invoice
        handleUpdateEditor(params) {
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

        async trackingData(idData) {
            let table = '';
            if(this.formType == this.global.formType.bankTransaction) {
                if(idData.type == 'F') {
                    table = this.global.tableName.subFolio;
                } else if (idData.type == 'R') {
                    table = this.global.tableName.guestDeposit;
                }
            } else if ( this.formType == this.global.formType.bankReconciliation) {
                table = this.global.tableName.accCreditCardRecon;
            }
            const params = {
                id_log: idData.id_log,
                table,
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
    },

    watch: {
        mainPopUp() {
            if(!this.mainPopUp) {
                this.refreshData();
            }
        }
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    }
};
</script>
