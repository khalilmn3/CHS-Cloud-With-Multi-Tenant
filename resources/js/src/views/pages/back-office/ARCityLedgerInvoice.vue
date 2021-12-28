<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}">{{ $t('arCityLedger.createInvoice') }}</navigation-header>
        <filter-header ref="filterHeader" :formType="formType" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <vs-col vs-type="flex" class="w-full md:w-2/3">
                <ag-grid-vue
                    :style="global.styleAgGridFrame"
                    :class="global.themeAgGrid"
                    pagination="true"
                    :paginationPageSize="paginationPageSize"
                    :suppressDragLeaveHidesColumns="true"
                    :suppressMakeColumnVisibleAfterUnGroup="true"
                    :rowGroupPanelShow="rowGroupPanelShow"
                    :enableRangeSelection="true"
                    :statusBar="statusBar"
                    :gridOptions="gridOptions"
                    @grid-ready="onGridReady"
                    :context="context"
                    :columnDefs="columnDefs"
                    :frameworkComponents="frameworkComponents"
                    :enableCellChangeFlash="true"
                    :rowSelection="rowSelection"
                    :rowData="rowData"
                    :defaultColDef="global.defColDef"
                    :getContextMenuItems="getContextMenu"
                    @selection-changed="handleSelectionChange"
                    @cellContextMenu="handleRowRightClicked"
                    @rowDoubleClicked="handleRowDobleClicked"
                ></ag-grid-vue>
            </vs-col>
            <vs-col class="w-full md:w-1/3">
                <span class="p-2">{{ $t('arCityLedger.paymentDetail') }}</span>
                <ag-grid-vue
                    :style="global.styleAgGridFrame"
                    :class="global.themeAgGrid"
                    pagination="true"
                    :paginationPageSize="paginationPageSize"
                    :statusBar="statusBar"
                    :gridOptions="gridOptions2"
                    :context="context"
                    :rowSelection="rowSelection"
                    :columnDefs="columnDefs2"
                    :frameworkComponents="frameworkComponents"
                    :rowData="rowData2"
                    :defaultColDef="global.defColDef"
                    @cellContextMenu="handleRowRightClicked2"
                    :getContextMenuItems="getContextMenu2"
                    ></ag-grid-vue>
            </vs-col>
        </vx-card>
        <ar-city-ledger-form ref="arCityLedgerForm" @refreshData="$refs.filterHeader.onRefreshData()"/>
         <dialog-prompt button1
            :title="$t('arCityLedger.insertPayment')"
            :width="600"
            :active="paymentPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSavePayment()"
            @close="val=>paymentPopUp = val">
            <template #body>
                <div>
                    <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                        <div class="w-full md:w-1/2">
                            <vs-row>{{$t('arCityLedger.date')}}</vs-row>
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
                                    v-model="vPayment.date"
                                    v-validate="'required'" name="date"
                                    data-vv-scope="information">
                                </date-picker>
                                <span class="error-text text-danger" v-show="errors.has('information.date')">{{ errors.first('information.issued date') || dbErrors.date | toString  }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                        <div class="w-full md:w-1/2">
                            <vs-row>{{$t('arCityLedger.issuedDate')}}</vs-row>
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
                                    placeholder="DD/MM/YYYY"
                                    v-model="vPayment.issued_date"
                                    v-validate="'required'" name="issued date"
                                    data-vv-scope="information">
                                </date-picker>
                                <span class="error-text text-danger" v-show="errors.has('information.issued date')">{{ errors.first('information.issued date') || dbErrors.issued_date | toString  }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full">
                            <vs-row><label>{{$t('arCityLedger.subDepartment')}}</label></vs-row>
                            <vs-row class="wrap-form-select">
                                <v-select class="w-full height200" id="form-select" label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.sub_department" v-model="vPayment.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="information"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('information.sub department')">{{ errors.first('information.sub department') || dbErrors.sub_department_code | toString  }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full">
                            <vs-row><label>{{$t('arCityLedger.bankAccount')}}</label></vs-row>
                            <vs-row class="wrap-form-select">
                                <v-select class="w-full height200" id="form-select" label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.bank_account" v-model="vPayment.bank_account_code" v-validate="'required'" name="bank account" data-vv-scope="information"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('information.bank account')">{{ errors.first('information.bank account') || dbErrors.bank_account_code | toString  }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full md:w-1/2">
                            <vs-row><label>{{$t('arCityLedger.currency')}}</label></vs-row>
                            <vs-row class="wrap-form-select">
                                <v-select class="w-full height200" id="form-select" label="code" @input="handleChangeCurrency()" :clearable="false" :options="dataLookup.currency" v-model="vCurrency" v-validate="'required'" name="currency" data-vv-scope="information"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('information.currency')">{{ errors.first('information.currency') || dbErrors.type | toString  }}</span>
                            </vs-row>
                        </div>
                        <div class="w-full md:w-1/2">
                            <vs-row><label>{{$t('arCityLedger.exchangeRate')}}</label></vs-row>
                            <vs-row>
                                <input-number disabled class="w-full" type="text" :comma="2" @input="handleChangeExchangeRate()" v-model="vPayment.exchange_rate" :description="errors.first('information.exchange rate') || dbErrors.exchange_rate | toString" v-validate="'required'" name="exchange rate" data-vv-scope="information"/>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full md:w-1/2">
                            <vs-row><label>{{ `${$t('arCityLedger.amount')} ${vCurrency.code}` }}</label></vs-row>
                            <vs-row>
                                <input-number class="w-full" type="text" v-model="vPayment.amount_foreign" @input="handleChangeAmount()" :description="errors.first('folio.amount foreign') || dbErrors.item | toString" v-validate="'required'" name="amount foreign" data-vv-scope="information"/>
                            </vs-row>
                        </div>
                        <div class="w-full md:w-1/2">
                            <vs-row><label>{{ `${$t('arCityLedger.amount')} ${paramsData.currency_code}` }}</label></vs-row>
                            <vs-row>
                                <input-number disabled class="w-full" type="text" v-model="vPayment.amount" :description="errors.first('folio.amount') || dbErrors.item | toString" v-validate="'required'" name="amount" data-vv-scope="information"/>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full md:w-1/2">
                            <vs-row><label>{{ `${$t('arCityLedger.outstanding')} ${paramsData.currency_code}` }}</label></vs-row>
                            <vs-row>
                                <input-number disabled class="w-full" type="text" v-model="vPayment.outstanding" :description="errors.first('information.outstanding') || dbErrors.outstanding | toString" v-validate="'required'" name="outstanding" data-vv-scope="information"/>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="w-full">
                            <vs-row><label>{{$t('arCityLedger.remark')}}</label></vs-row>
                            <vs-row class="wrap-form-select">
                                <vs-textarea class="w-full" type="text" v-model="vPayment.remark"/>
                            </vs-row>
                        </div>
                    </vs-row>
                </div>
            </template>
         </dialog-prompt>
    </div>
</template>

<script>
import ARCityLedgerResource from '@/api/back-office/arCityLedger';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from './components/action_grid';
import ActionGridReceipt from '@/views/pages/components/ag_grid-framework/action_grid_print';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate, formatDateDatabase } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import FilterHeader from './components/FilterHeader';
import ARCityLedgerForm from './components/ARCityLedgerForm';

const arCityLedgerResource = new ARCityLedgerResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'ARCityLedgerInvoice',

    props: {
        formType: String,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        FilterHeader,
        NavigationHeader,
        'ar-city-ledger-form': ARCityLedgerForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: 0,
            searchFilterData: [
                { text: this.$t('common.filter.number'), value: 0 },
                { text: this.$t('common.filter.company'), value: 1 },
                { text: this.$t('common.filter.contactPerson'), value: 2 },
                { text: this.$t('common.filter.address'), value: 3 },
                { text: this.$t('common.filter.phone'), value: 4 },
                { text: this.$t('common.filter.fax'), value: 5 },
                { text: this.$t('common.filter.remark'), value: 6 },
                { text: this.$t('common.filter.refNumber'), value: 7 },
                { text: this.$t('common.filter.lastUpdate'), value: 8 },
            ],
            // query data search
            limitPageSize: 0,
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
            },
            // Ag-Grid-Invoice
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,

            // Ag-Grid-Payment
            columnDefs2: null,
            rowData2: [],
            gridOptions2: null,
            gridApi2: null,
            columnApi2: null,

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
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vPayment-----------------//
            vPayment: {},
            vCurrency: {},
            // data error handling from laravel validation//
            dbErrors: {},

            // Payment
            paramsData2: {},
            paymentPopUp: false,
            btnSaveDisabled: false,
            dataLookup: {},
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };

        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };

        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100,},
            { headerName: this.$t('arCityLedger.table.number'), field: 'number', width: 110 },
            { headerName: this.$t('arCityLedger.table.issuedDate'), field: 'issued_date', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('arCityLedger.table.dueDate'), field: 'due_date', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('arCityLedger.table.company'), field: 'company', width: 200 },
            {  headerName: this.$t('arCityLedger.table.totalAmount'), field: 'TotalAmount', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber,},
            { headerName: this.$t('arCityLedger.table.totalPaid'), field: 'TotalPaid', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.outstanding'), field: 'OutStanding', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.currency'), field: 'default_currency_code', width: 70 },
            {  headerName: this.$t('arCityLedger.table.totalAmountForeign'), field: 'TotalAmountForeign', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            {  headerName: this.$t('arCityLedger.table.totalPaidForeign'), field: 'TotalPaidForeign', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            {  headerName: this.$t('arCityLedger.table.outstandingForeign'), field: 'OutStandingForeign', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            {  headerName: this.$t('arCityLedger.table.currencyForeign'), field: 'currency_code', width: 75 },
            {  headerName: this.$t('arCityLedger.table.contactPerson'), field: 'full_name', width: 200, },
            {  headerName: this.$t('arCityLedger.table.address'), field: 'Address', width: 200 },
            {  headerName: this.$t('arCityLedger.table.phone'), field: 'phone', width: 150 },
            {  headerName: this.$t('arCityLedger.table.fax'), field: 'fax', width: 150 },
            {  headerName: this.$t('arCityLedger.table.remark'), field: 'remark', width: 200 },
            {  headerName: this.$t('arCityLedger.table.refNumber'), field: 'ref_number', width: 110 },
            {  headerName: this.$t('arCityLedger.table.printCount'), field: 'print_count', width: 105, cellStyle: { textAlign: 'right' } },
            {  headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        this.columnDefs2 = [
            { headerName: 'P', field: 'number', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGridReceipt', colId: 'params', width: 50,},
            { headerName: this.$t('arCityLedger.table.date'), field: 'date', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('arCityLedger.table.refNumber'), field: 'ref_number', width: 110 },
            { headerName: this.$t('arCityLedger.table.amount'), field: 'Amount', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber,},
            { headerName: this.$t('arCityLedger.table.currency'), field: 'default_currency_code', width: 70 },
            { headerName: this.$t('arCityLedger.table.amountForeign'), field: 'AmountForeign', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.currencyForeign'), field: 'currency_code', width: 90 },
            { headerName: this.$t('arCityLedger.table.exchangeRate'), field: 'exchange_rate', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.amountActual'), field: 'amount_actual', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.plCurrency'), field: 'PLCurrency', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.exchangeRateActual'), field: 'exchange_rate_actual', width: 135, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('arCityLedger.table.remark'), field: 'remark', width: 150 }
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            actionGridReceipt: ActionGridReceipt,
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
                this.paramsData = {};
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.createInvoice'),
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showModal('', 0),
                },
                {
                    name: this.$t('common.contextMenu.updateInvoice'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.modeData.edit),
                },
                {
                    name: this.$t('common.contextMenu.deleteInvoice'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeleteData(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.insertPayment'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.handleInsertPayment(this.paramsData),
                },
                {
                    name: this.$t('common.contextMenu.deletePayment'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeletePayment(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.printInvoice'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintInvoice(this.paramsData, false),
                },
                {
                    name: this.$t('common.contextMenu.printARStatement'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintInvoice(this.paramsData, true),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showModal(this.paramsData, 2),
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

        getContextMenu2(params) {
            const { node } = params;
            if (node) {
                this.paramsData2 = node.data;
            } else {
                this.paramsData2 = {};
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.printReceipt'),
                    disabled: !this.paramsData2,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintReceipt(this.paramsData2),
                },
            ];
            return result;
        },

        handleRowRightClicked2() {
            if (this.paramsData2) {
                const vm = this;
                vm.gridApi2.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.id_log == vm.paramsData2.id_log) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.showModal(this.paramsData, this.global.modeData.insert);
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.search = search;
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            await this.getData(search);
            this.$nextTick(() => {
                rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
            });
        },

        async getData(params) {
            try {
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.getInvoiceList(params);
                this.rowData = data;
                if(data.length === 0) {
                    this.rowData2 = [];
                }
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async showModal(idData, modeData) {
            this.$refs.arCityLedgerForm.showModal(idData, modeData);
        },

        handleDeleteData(data) {
            $dialog.confirmationDelete(this, 'deleteData', data);
        },

        async deleteData(dataX) {
            try{
                this.$loadingIndicator(this);
                const params = {
                    number: dataX.number,
                    ref_number: dataX.ref_number,
                    user_id: this.global.userInfo.code,
                };
                const { data } = await arCityLedgerResource.delete(params);
                if(data == 0) {
                    this.refreshData(this.search);
                    $alert.deleteAlertSuccess();
                } else if(data > 0) {
                    this.$closeLoadingIndicator(this);
                    $dialog.information(this.$t(`responseStatus.cityLedgerInvoice.${data}`));
                }
            } catch(error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        handleSelectionChange() {
            const params = this.gridApi.getSelectedRows();
            if(params.length > 0) {
                this.getInvoicePayment(params[0]);
            } else {
                this.rowData2 = [];
            }
        },

        // Payment
        async getInvoicePayment(params) {
            const { data } = await arCityLedgerResource.getPayment({number: params.number});
            this.rowData2 = data;
        },

        async handleInsertPayment(params) {
            await this.getDataLookupPayment();
            await this.getInvoiceDetail(params);
            if(this.paramsData.is_paid == '-1') {
                $dialog.information(this.$t('responseStatus.cityLedgerInvoice.2'));
                return;
            }
            this.resetPayment(this.paramsData);
            this.handleChangeCurrency();
            this.paymentPopUp = true;
        },

        async getInvoiceDetail(params) {
            const { data } = await arCityLedgerResource.getInvoiceDetail({number: params.number});
            this.paramsData = data;
        },

        async handleSavePayment() {
            this.$validator.validateAll('information').then((result)=>{
                if(result) {
                    this.insertPayment();
                }
            });
        },

        async insertPayment() {
            this.$loadingIndicator(this);
            this.vPayment.currency_code = this.vCurrency.code;
            try{
                const { data } = await arCityLedgerResource.insertPayment(this.vPayment);
                if( data == 0) {
                    this.paymentPopUp = false;
                    this.refreshData(this.search);
                } else if(data > 0) {
                    this.$closeLoadingIndicator(this);
                    $dialog.information(this.$t(`responseStatus.cityLedgerInvoice.${data}`));
                }
            } catch(error) {
                this.$$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async getDataLookupPayment() {
            try{
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.dataLookupPayment();
                this.dataLookup = data;
                this.$closeLoadingIndicator(this);
            } catch(error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        getTotalAmount() {
            this.vPayment.amount = (this.vPayment.amount_foreign / this.vCurrency.exchange_rate);
        },

        getExchangeRateCurrency(currencyCode) {
            let exchRate = 1;
            if(this.dataLookup.currency.length > 0) {
                const currency = this.dataLookup.currency;
                currency.forEach((element)=> {
                    if(element.code == currencyCode) {
                        exchRate = element.exchange_rate;
                    }
                });
            }
            return exchRate;
        },

        handleChangeCurrency() {
            if(this.paramsData.currency_code == this.defaultCurrency) {
                this.vPayment.exchange_rate = this.vCurrency.exchange_rate;
            } else {
                this.vPayment.exchange_rate = this.getExchangeRateCurrency(this.paramsData.currency_code);
            }
            this.handleChangeExchangeRate();
        },

        handleChangeExchangeRate() {
            if (this.vCurrency.code == this.paramsData.currency_code) {
                this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
            } else {
                if (this.paramsData.currency_code == this.defaultCurrency) {
                    if (this.vPayment.exchange_rate > 0) {
                        this.vPayment.amount_foreign = this.paramsData.OutStandingForeign / this.vPayment.exchange_rate;
                    } else {
                        this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
                    }
                } else {
                    if (this.vPayment.exchange_rate > 0) {
                        this.vPayment.amount_foreign = this.paramsData.OutStandingForeign * this.vPayment.exchange_rate;
                    } else {
                        this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
                    }
                }
            }
            this.vPayment.amount = this.paramsData.OutStandingForeign;
        },

        handleChangeAmount() {
            if(this.vCurrency.code == this.paramsData.currency_code) {
                this.vPayment.amount = this.vPayment.amount_foreign;
            } else {
                if(this.paramsData.currency_code == this.defaultCurrency) {
                    if(this.vPayment.exchange_rate > 0) {
                        this.vPayment.amount = this.vPayment.amount_foreign * this.vPayment.exchange_rate;
                    } else {
                        this.vPayment.amount = this.vPayment.amount_foreign;
                    }
                } else {
                    if(this.vPayment.exchange_rate > 0) {
                        this.vPayment.amount = this.vPayment.amount_foreign / this.vPayment.exchange_rate
                    } else {
                        this.vPayment.amount = this.vPayment.amount_foreign;
                    }
                }
            }
        },

        resetPayment(params) {
            let invoiceCurrency = {};
            if(this.dataLookup.currency.length > 0) {
                this.dataLookup.currency.forEach((element)=> {
                    if(element.code == params.currency_code) {
                        invoiceCurrency = element;
                    };
                });
            }
            this.vCurrency = invoiceCurrency;
            this.vPayment = {
                invoice_number: params.number,
                date: formatDateDatabase(new Date()),
                exchange_rate: invoiceCurrency.exchange_rate,
                amount: params.OutStandingForeign,
                amount_foreign: params.OutStandingForeign,
                issued_date: params.issued_date,
                company_code: params.company_code,
                outstanding: params.OutStandingForeign,
                sub_department_code: this.dataLookup.default_sub_department_accounting,
                user_id: this.global.userInfo.code,
            };
        },

        handleDeletePayment(params) {
            if(params.TotalPaid == 0) {
                $dialog.information(this.$t('responseStatus.cityLedgerInvoice.3'));
            } else {
                $dialog.confirmationDelete(this, 'deletePayment', params);
            }
        },

        async deletePayment(params) {
            try{
                this.$loadingIndicator(this);
                const { data } = await arCityLedgerResource.deletePayment({number: params.number, user_id: this.global.userInfo.code});
                if( data == 0) {
                    this.refreshData(this.search);
                } else if(data > 0) {
                    this.$closeLoadingIndicator(this);
                    $dialog.information(this.$t(`responseStatus.cityLedgerInvoice.${data}`));
                }
            } catch(error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        // Print
        handlePrintInvoice(params, isStatement) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.cityLedgerInvoice}&number=${params.number}&isStatement=${isStatement}&template=${this.global.stimulsoftReportFileDirectory.cityLedgerInvoice}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintReceipt(params) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.invoicePaymentReceive}&number=${params.ref_number}&template=${this.global.stimulsoftReportFileDirectory.invoicePaymentReceive}` });
            window.open(newTabReport.href, '_blank');
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
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;

        this.gridApi2 = this.gridOptions2.api;
        this.ColumnApi2 = this.gridOptions2.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    },
};
</script>
