<template>
    <div>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            title="Update Direct Bill"
            :width="600"
            :active="directBillPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSaveDirectBill()"
            @close="val=>directBillPopUp = val">
            <template #body>
                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                    <div class="w-full wrap-form-select">
                        <vs-row><label>{{$t('arCityLedger.company')}}</label></vs-row>
                        <vs-row>
                            <v-select class="w-full height200" id="form-select" appendToBody label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.company" v-model="vDirectBill.direct_bill_code_after" v-validate="'required'" name="company" data-vv-scope="directBill"></v-select>
                            <span class="error-text text-danger" v-show="errors.has('directBill.company')">{{ errors.first('directBill.company') || dbErrors.direct_bill_code_after | toString  }}</span>
                        </vs-row>
                    </div>
                </vs-row>
            </template>
        </dialog-prompt>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + $t('arCityLedger.invoice'))"
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
                                <!-- <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit">
                                    <tab-content title="Step 1" class="mb-5"> -->
                                    <div v-if="form == 1">
                                        <vx-card class="w-full">
                                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row>{{$t('arCityLedger.issuedDate')}}</vs-row>
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
                                                            @input="handleChangeIssuedDate"
                                                            v-model="vModel.issued_date"
                                                            v-validate="'required'" name="issued date"
                                                            data-vv-scope="information">
                                                        </date-picker>
                                                        <span class="error-text text-danger" v-show="errors.has('information.issued date')">{{ errors.first('information.issued date') || dbErrors.issued_date | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row>{{$t('arCityLedger.dueDate')}}</vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <date-picker
                                                            type="date"
                                                            confirm
                                                            :disabled-date="dateDisable"
                                                            confirm-text="Ok"
                                                            :lang="$t('lang')"
                                                            value-type="YYYY-MM-DD"
                                                            format="DD/MM/YYYY"
                                                            label="name"
                                                            class="w-full"
                                                            placeholder="DD/MM/YYYY"
                                                            v-model="vModel.due_date"
                                                            v-validate="'required'" name="due date"
                                                            data-vv-scope="information">
                                                        </date-picker>
                                                        <span class="error-text text-danger" v-show="errors.has('information.due date')">{{ errors.first('information.due date') || dbErrors.due_date | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full">
                                                    <vs-row><label>{{$t('arCityLedger.company')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code" v-validate="'required'" name="company" data-vv-scope="information"></v-select>
                                                        <span class="error-text text-danger" v-show="errors.has('information.company')">{{ errors.first('information.company') || dbErrors.company_code | toString  }}</span>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.contactPerson')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.full_name" :description-text="errors.first('information.contact person') || dbErrors.full_name | toString" v-validate="'required'" name="contact person" data-vv-scope="information"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.street')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.street"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.country')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" label="name" @input="getDataLookup" :clearable="false" :reduce="value => value.code" :options="dataLookup.country" v-model="vModel.country_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.state')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" label="name" @input="getDataLookup" :clearable="false" :reduce="value => value.code" :options="dataLookup.state" v-model="vModel.state_code"></v-select>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.city')}}</label></vs-row>
                                                    <vs-row class="wrap-form-select">
                                                        <v-select class="w-full height200" id="form-select" label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.city" v-model="vModel.city_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>.</label></vs-row>
                                                    <vs-row>
                                                        <vs-input :disabled="vModel.city_code != 'OTH'" class="w-full" type="text" v-model="vModel.city"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.postalCode')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.postal_code"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.phone')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.phone1"/>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.fax')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.fax"/>
                                                    </vs-row>
                                                </div>
                                                <div class="w-full md:w-1/2">
                                                    <vs-row><label>{{$t('arCityLedger.remark')}}</label></vs-row>
                                                    <vs-row>
                                                        <vs-input class="w-full" type="text" v-model="vModel.remark"/>
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
                                                        <vs-row><label>{{$t('arCityLedger.folioNumber')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <v-select class="w-full height200" id="form-select" label="folio_number" @input="handleChangeFolio()" :resetOnOptionsChange="true" :clearable="false" :options="folioList" v-model="vFolioData.folio" v-validate="'required'" name="folio number" data-vv-scope="folio"></v-select>
                                                            <span class="error-text text-danger" v-show="errors.has('folio.folio number')">{{ errors.first('folio.folio number') || dbErrors.folio_number | toString  }}</span>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('arCityLedger.guestName')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.full_name" :description-text="errors.first('folio.guest name') || dbErrors.full_name | toString" v-validate="'required'" name="guest name" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('arCityLedger.roomNumber')}}</label></vs-row>
                                                        <vs-row>
                                                            <vs-input disabled class="w-full" type="text" v-model="vFolioData.room_number" :description-text="errors.first('folio.room number') || dbErrors.room_number | toString" v-validate="'required'" name="room number" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('arCityLedger.amount')}}</label></vs-row>
                                                        <vs-row>
                                                            <input-number disabled class="w-full" type="text" v-model="vFolioData.amount_old" :description="errors.first('folio.amount old') || dbErrors.amount | toString" v-validate="'required'" name="amount old" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row>{{$t('arCityLedger.auditDate')}}</vs-row>
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
                                                                v-model="vFolioData.audit_date"
                                                                v-validate="'required'" name="audit date"
                                                                data-vv-scope="folio">
                                                            </date-picker>
                                                            <span class="error-text text-danger" v-show="errors.has('folio.audit date')">{{ errors.first('folio.audit date') || dbErrors.audit_date | toString  }}</span>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('arCityLedger.currency')}}</label></vs-row>
                                                        <vs-row class="wrap-form-select">
                                                            <v-select :disabled="rowDataInsert.length > 0" class="w-full height200" id="form-select" label="code" @input="handleChangeCurrency()" :clearable="false" :options="dataLookup.currency" v-model="vCurrency" v-validate="'required'" name="currency" data-vv-scope="folio"></v-select>
                                                            <span class="error-text text-danger" v-show="errors.has('folio.currency')">{{ errors.first('folio.currency') || dbErrors.type | toString  }}</span>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{$t('arCityLedger.exchangeRate')}}</label></vs-row>
                                                        <vs-row>
                                                            <input-number :disabled="rowDataInsert.length > 0" class="w-full" type="text" :comma="2" @input="handleChangeCurrency()" v-model="vCurrency.exchange_rate" :description="errors.first('folio.exchange rate') || dbErrors.exchange_rate | toString" v-validate="'required'" name="exchange rate" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{ `${$t('arCityLedger.amount')} ${vCurrency.code}` }}</label></vs-row>
                                                        <vs-row>
                                                            <input-number class="w-full" type="text" v-model="vFolioData.amount_foreign" @input="getTotalAmount()" :description="errors.first('folio.amount foreign') || dbErrors.item | toString" v-validate="'required'" name="amount foreign" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                    <div class="w-full md:w-1/2">
                                                        <vs-row><label>{{ `${$t('arCityLedger.amount')} ${defaultCurrency}` }}</label></vs-row>
                                                        <vs-row>
                                                            <input-number disabled class="w-full" type="text" v-model="vFolioData.amount" :description="errors.first('folio.amount') || dbErrors.item | toString" v-validate="'required'" name="amount" data-vv-scope="folio"/>
                                                        </vs-row>
                                                    </div>
                                                </vs-row>
                                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                                    <div class="w-full">
                                                        <vs-row><label>{{$t('arCityLedger.remark')}}</label></vs-row>
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
                                    <!-- </tab-content> -->
                                    </div>
                                <!-- </form-wizard> -->
                            </vx-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import ARCityLedgerResource from '@/api/back-office/arCityLedger';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGridEditor from '@/views/pages/components/ag_grid-framework/action_grid_update_delete_editor';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate, formatDateTime, formatDateDatabase, formatDateDatabaseAddWeek } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import DatePicker from 'vue2-datepicker';

const arCityLedgerResource = new ARCityLedgerResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'ARCityLedgerForm',

    props: {
        titleForm: String,
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
            folioList: [],
            folioListTemp: [],
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
            { headerName: this.$t('arCityLedger.table.folioNumber'), field: 'folio_number', width: 120 },
            { headerName: this.$t('arCityLedger.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('arCityLedger.table.auditDate'), field: 'audit_date', width: 110, valueFormatter: formatDate },
            { headerName: this.$t('arCityLedger.table.guestName'), field: 'full_name', width: 120 },
            { headerName: this.$t('arCityLedger.table.amount'), field: 'amount_old', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('arCityLedger.table.amountCharged'), field: 'amount', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('arCityLedger.table.currency'), field: 'default_currency_code', width: 90 },
            { headerName: this.$t('arCityLedger.table.amountChargedForeign'), field: 'amount_foreign', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('arCityLedger.table.currencyForeign'), field: 'currency_code', width: 110 },
            { headerName: this.$t('arCityLedger.table.exchangeRate'), field: 'exchange_rate', width: 133, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('arCityLedger.table.remark'), field: 'remark', width: 200 }
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
        async refreshData() {
            this.$emit('refreshData');
        },

        resetData() {
            this.vModel = {
                issued_date: formatDateDatabase(this.auditDate),
                due_date: formatDateDatabaseAddWeek(this.auditDate, 1),
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

        handleChangeIssuedDate() {
            if(this.vModel.issued_date) {
                if(this.vModel.issued_date > this.vModel.due_date) {
                    this.vModel.due_date = formatDateDatabaseAddWeek(this.vModel.issued_date, 1);
                }
            }
        },

        async getDataLookup() {
            const params = {
                country_code: this.vModel.country_code,
                state_code: this.vModel.state_code,
            };
            const { data } = await arCityLedgerResource.dataLookup(params);
            this.dataLookup = data;
            this.vCurrency = data.currency[0];
        },

        async showModal(idData, modeData) {
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.paramsData = idData;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                await this.editData();
            } else if (modeData == this.global.modeData.tracking) {
                await this.trackingData(idData);
                this.mainPopUp = true;
            } else if (modeData == this.global.modeData.insert) {
                this.$loadingIndicator(this);
                await this.getDataLookup();
                this.$closeLoadingIndicator(this);
                this.mainPopUp = true;
            }
        },

        getCurrencyOnEditData() {
            if(this.rowDataInsert.length > 0) {
                this.dataLookup.currency.forEach(element => {
                    if(element.code == this.rowDataInsert[0].currency_code) {
                        this.vCurrency = element;
                    }
                });
            }
        },

        async editData() {
            try{
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.get(this.paramsData.number);
                this.$closeLoadingIndicator(this);
                if(data > 0) {
                    $dialog.information(this.$t(`responseStatus.cityLedgerInvoice.${data}`));
                } else {
                    this.vModel = data.invoice;
                    this.companyCodeTemp = this.vModel.company_code;
                    this.rowDataInsert = data.invoiceItem;
                    await this.getDataLookup();
                    this.getCurrencyOnEditData();
                    this.mainPopUp = true;
                }
            } catch(error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async showUpdateDirectBill(params) {
            this.paramsData = params
            await this.handleUpdateDirectBill();
        },

        async handleUpdateDirectBill() {
            this.resetDirectBill();
            this.$loadingIndicator(this);
            this.getDataLookup();
            await this.editDirectBill();
            this.directBillPopUp = true;
            this.$closeLoadingIndicator(this);
        },

        async insertData() {
            try{
                this.$loadingIndicator(this);
                this.vModel.data = this.getAllRows();
                const { data } = await arCityLedgerResource.store(this.vModel);
                await this.refreshData(this.search);
                this.$closeLoadingIndicator(this);
                this.mainPopUp = false;
                $alert.acceptAlertSucces();
                this.btnSaveDisabled = false;
            } catch (error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async handleNext() {
            this.$validator.validateAll('information').then(async (result) => {
                if(result) {
                    this.vFolioData = {
                        default_currency_code: this.defaultCurrency,
                        currency_code: this.vCurrency ? this.vCurrency.code : '',
                        exchange_rate: this.vCurrency ? this.vCurrency.exchange_rate : 0,
                    };
                    if(this.vModel.company_code != this.companyCodeTemp) {
                        this.rowDataInsert = [];
                    }
                    this.companyCodeTemp = this.vModel.company_code;
                    await this.getFolio();
                    this.removeDataLookupFolioOnInsert();
                    this.form = 2;
                }
            });
        },

        handleBack() {
            this.btnSaveDisabled = false;
            this.form = 1;
        },

        getTotalAmount() {
            this.vFolioData.amount = (this.vFolioData.amount_foreign * this.vCurrency.exchange_rate);
        },

        handleChangeCurrency() {
            this.vFolioDataOld.exchange_rate = this.vCurrency.exchange_rate;
            this.vFolioDataOld.currency_code = this.vCurrency.code;

            this.vFolioData.exchange_rate = this.vCurrency.exchange_rate;
            this.vFolioData.currency_code = this.vCurrency.code;
            if(this.vFolioData.amount > 0) {
                this.vFolioData.amount_foreign = (this.vFolioDataOld.amount / this.vCurrency.exchange_rate);
                this.vFolioData.amount_old = (this.vFolioDataOld.amount / this.vCurrency.exchange_rate);
                this.getTotalAmount();
            }

            if(this.vCurrency.exchange_rate == '') {
                this.vCurrency.exchange_rate = 1;
            }
        },

        handleChangeFolio() {
            if (this.vFolioData.folio) {
                const { folio } = this.cloneObject(this.vFolioData);

                this.vFolioDataOld.folio_number = folio.folio_number;
                this.vFolioDataOld.amount_old = folio.total_amount;
                this.vFolioDataOld.amount = folio.total_amount;
                this.vFolioDataOld.full_name = folio.full_name;
                this.vFolioDataOld.room_number = folio.room_number;
                this.vFolioDataOld.audit_date = folio.audit_date;

                this.vFolioData.folio_number = folio.folio_number;
                this.vFolioData.amount = folio.total_amount;
                this.vFolioData.full_name = folio.full_name;
                this.vFolioData.room_number = folio.room_number;
                this.vFolioData.audit_date = folio.audit_date;
                this.handleChangeCurrency();
            }
        },

        convertFolioDataForInsert() {
            const folio = this.vFolioData;
            const folioOld = this.vFolioDataOld;

            this.vFolioDataInsert.folio_number = folio.folio_number;
            this.vFolioDataInsert.amount_old = folioOld.amount_old;
            this.vFolioDataInsert.full_name = folioOld.full_name;
            this.vFolioDataInsert.room_number = folioOld.room_number;
            this.vFolioDataInsert.audit_date = folioOld.audit_date;
            this.vFolioDataInsert.currency_code = folio.currency_code;
            this.vFolioDataInsert.exchange_rate = this.vCurrency.exchange_rate;
            this.vFolioDataInsert.default_currency_code = this.defaultCurrency;
            this.vFolioDataInsert.amount_foreign = folio.amount_foreign;
            this.vFolioDataInsert.amount = folio.amount;
            this.vFolioDataInsert.remark = folio.remark;
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
                    if(this.vFolioData.folio_number != null) {
                        let isExist = false;
                        this.gridOptions2.api.forEachNode((rowNode, index)=> {
                            if(this.modeDataEditor == this.global.modeData.insert) {
                                if(rowNode.data.folio_number == this.vFolioData.folio_number) {
                                    $dialog.information(this.$t('responseStatus.cityLedgerEditor.0'));
                                    isExist = true;
                                };
                            } else {
                                if(rowNode.data.folio_number !== this.paramsDataEditor.folio_number) {
                                    if(rowNode.data.folio_number == this.vFolioData.folio_number) {
                                        $dialog.information(this.$t('responseStatus.cityLedgerEditor.0'));
                                        isExist = true;
                                    }
                                };
                            }
                        });
                        if(this.vFolioData.amount > 0) {
                            this.convertFolioDataForInsert();
                            if(!isExist) {
                                if(this.validateAmount(this.vFolioDataOld.amount_old, this.vFolioData.amount)) {
                                    if(this.modeDataEditor == this.global.modeData.edit) {
                                        const selectedData = this.gridOptions2.api.getSelectedRows();
                                        this.gridOptions2.api.updateRowData({ remove: selectedData });
                                        this.folioList = this.folioListTemp.slice();
                                    }
                                    if (this.rowDataInsert == null) {
                                        this.rowDataInsert = [];
                                    } else {
                                        this.rowDataInsert = this.getAllRows();
                                    }
                                    if (this.rowDataInsert.length >= 0) {
                                        this.vFolioDataInsert.index = this.rowDataInsert.length;
                                    }
                                    await this.rowDataInsert.push(this.cloneObject(this.vFolioDataInsert));
                                    this.removeDataLookupFolioOnInsert();
                                    this.vFolioData = {};
                                    this.vFolioDataInsert = {};
                                    this.vFolioData.folio = '';
                                    this.$validator.reset();
                                    this.modeDataEditor = this.global.modeData.insert;
                                } else {
                                    $dialog.information(this.$t('responseStatus.cityLedgerEditor.1'));
                                }
                            }
                        }
                    }
                }
            });
        },

        removeDataLookupFolioOnInsert() {
            if(this.folioList && this.rowDataInsert) {
                let folioX = this.rowDataInsert;
                let folio = this.folioList;
                for(let i = 0; i < folio.length; i++) {
                    folioX.forEach(element => {
                        if(folio[i].folio_number == element.folio_number) {
                            this.folioList.splice(i, 1);
                        }
                    });
                }
            }
        },

        validateAmount(oldValue, newValue) {
            if(newValue <= oldValue) {
                return true;
            }
            return false;
        },

        async getFolio() {
            const params = {
                company_code: this.vModel.company_code,
                invoice_number: this.modeDataValue == this.global.modeData.edit ? this.paramsData.number : '',
                mode: this.modeDataValue,
            };
            try{
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.getFolio(params);
                this.folioListTemp = data; // save data to temp
                this.folioList = data.slice(); // clone data array
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async updateData() {
            try{
                this.$loadingIndicator(this);
                this.vModel.data = this.getAllRows();
                this.vModel.invoice_number = this.paramsData.number;
                const { data } = await arCityLedgerResource.update(this.vModel);
                await this.refreshData(this.search);
                this.$closeLoadingIndicator(this);
                this.mainPopUp = false;
                $alert.acceptAlertSucces();
                this.btnSaveDisabled = false;
            } catch (error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async saveData() {
            this.$validator.validateAll('information').then(async (result) => {
                if (result) {
                    console.log(this.rowDataInsert)
                    if(this.rowDataInsert != null && this.rowDataInsert.length > 0) {
                        this.btnSaveDisabled = true;
                        this.vModel.user_id = this.global.userInfo.code;

                        const folio = this.getAllRows();
                        for(let i = 0; i < folio.length; i++) {
                            const issuedDate = new Date(this.vModel.issued_date);
                            const issuedTime = issuedDate.getTime();
                            const date = new Date(folio[i].audit_date);
                            const time = date.getTime();

                            if(time > issuedTime) {
                                $dialog.information(this.$t('responseStatus.cityLedgerEditor.2'));
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
                        $dialog.information(this.$t('responseStatus.cityLedgerEditor.4'));
                    }
                }
            });
        },

        resetDirectBill() {
            this.vDirectBill = {
                direct_bill_code_after: '',
                direct_bill_code_before: this.paramsData.direct_bill_code,
                folio_number: this.paramsData.folio_number,
                user_id: this.global.userInfo.code,
            }
        },

        async handleSaveDirectBill() {
            this.$validator.validateAll('directBill').then(async (result)=>{
                if(result){
                    await this.updateDirectBill();
                }
            })
        },

        async updateDirectBill() {
            try{
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.updateDirectBill(this.vDirectBill);
                this.refreshData(this.search);
                this.directBillPopUp = false;
                $alert.acceptAlertSucces();
            } catch(error) {
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async editDirectBill() {
            const { data } = await arCityLedgerResource.editDirectBill({id_log: this.paramsData.id_log});
            this.vDirectBill.direct_bill_code_after = data.direct_bill_code;
        },

        // update item invoice
        handleUpdateEditor(params) {
            this.paramsDataEditor = this.cloneObject(params);
            this.modeDataEditor = this.global.modeData.edit;
            this.vFolioData = this.cloneObject(params);
            this.vFolioDataOld = this.cloneObject(params);
            this.vCurrency.code = params.currency_code;
            this.vCurrency.exchange_rate = params.exchange_rate;
            this.vFolioData.folio = params.folio_number;

            // calculate
            if(this.vFolioData.amount > 0) {
                this.vFolioData.amount_foreign = (this.vFolioDataOld.amount / this.vCurrency.exchange_rate);
                this.vFolioData.amount_old = (this.vFolioDataOld.amount / this.vCurrency.exchange_rate);
                this.getTotalAmount();
            }
        },

        async handleDeleteEditor() {
            const selectedData = this.gridOptions2.api.getSelectedRows();
            this.gridOptions2.api.updateRowData({ remove: selectedData });
            this.rowDataInsert = this.getAllRows();
            this.folioList = this.folioListTemp.slice();
            this.removeDataLookupFolioOnInsert();
            this.$validator.reset();
        },

        handleCancel() {
            this.paramsDataEditor = {};
            this.modeDataEditor = this.global.modeData.insert;
            this.vFolioData = {};
            this.vFolioDataOld = {};
            this.$validator.reset();
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
    },

    watch: {
        mainPopUp() {
            if(!this.mainPopUp) {
                this.refreshData(this.search);
            }
        }
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    }
};
</script>
