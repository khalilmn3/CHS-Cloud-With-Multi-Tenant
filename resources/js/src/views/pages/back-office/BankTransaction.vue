<template>
    <div>
        <navigation-header insertButton :insertButtonDisabled="search.is_reconciliated == '-1' || rowData == null || rowData.length == 0" @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}">{{ $t('bankTransaction.insertReconciliation') }}</navigation-header>
        <filter-header ref="filterHeader" :formType="formType" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
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
                @cellContextMenu="handleRowRightClicked"
                @rowDoubleClicked="handleRowDobleClicked"
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <BankTransactionForm ref="bankTransactionForm" :formType="formType" @refreshData="$refs.filterHeader.onRefreshData()"/>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import BankTransactionResource from '@/api/back-office/bankTransaction';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_menu_tracking';
import ActionGridEditor from '@/views/pages/components/ag_grid-framework/action_grid_update_delete_editor';
import NavigationHeader from './components/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import FilterHeader from './components/FilterHeader';
import BankTransactionForm from './components/BankTransactionForm';

const bankTransactionResource = new BankTransactionResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'BankTransaction',

    props: {
        formType: String,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        FilterHeader,
        NavigationHeader,
        BankTransactionForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: 0,
            searchFilterData: [
                { text: this.$t('common.filter.account'), value: 0 },
                { text: this.$t('common.filter.folioNumber'), value: 1 },
                { text: this.$t('common.filter.roomNumber'), value: 2 },
                { text: this.$t('common.filter.guestName'), value: 3 },
                { text: this.$t('common.filter.transactionID'), value: 4 },
                { text: this.$t('common.filter.cardBank'), value: 5 },
                { text: this.$t('common.filter.cardType'), value: 6 },
                { text: this.$t('common.filter.cardHolder'), value: 7 },
                { text: this.$t('common.filter.remark'), value: 8 },
                { text: this.$t('common.filter.documentNumber'), value: 9 },
                { text: this.$t('common.filter.lastUpdate'), value: 10 },
            ],
            // query data search
            limitPageSize: 0,
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
            },
            // Ag-Grid
            columnDefs: null,
            rowData: [],
            gridOptions: null,
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
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            // data error handling from laravel validation//
            dbErrors: {},
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };

        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'TransactionID', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 70,},
            { headerName: this.$t('bankTransaction.table.account'), field: 'Account', width: 200 },
            { headerName: this.$t('bankTransaction.table.number'), field: 'Number', width: 130 },
            { headerName: this.$t('bankTransaction.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('bankTransaction.table.guestName'), field: 'GuestName', width: 200 },
            { headerName: this.$t('bankTransaction.table.transactionID'), field: 'TransactionID', width: 125 },
            { headerName: this.$t('bankTransaction.table.auditDate'), field: 'audit_date', width: 153, valueFormatter: formatDate, },
            { headerName: this.$t('bankTransaction.table.reconciliationDate'), field: 'ReconsiliatedDate', width: 150, valueFormatter: formatDate, },
            { headerName: this.$t('bankTransaction.table.amount'), field: 'Amount', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('bankTransaction.table.cardBank'), field: 'CardBank', width: 100 },
            { headerName: this.$t('bankTransaction.table.cardType'), field: 'CardType', width: 100 },
            { headerName: this.$t('bankTransaction.table.cardHolder'), field: 'card_holder', width: 200 },
            { headerName: this.$t('bankTransaction.table.validThru'), field: 'ValidThru', width: 120 },
            { headerName: this.$t('bankTransaction.table.remark'), field: 'remark', width: 200 },
            { headerName: this.$t('bankTransaction.table.documentNumber'), field: 'document_number', width: 140 },
            { headerName: this.$t('bankTransaction.table.departureDate'), field: 'DepartureDate', width: 120, valueFormatter: formatDate, },
            { headerName: this.$t('bankTransaction.table.arrivalDate'), field: 'ArrivalDate', width: 120, valueFormatter: formatDate, },
            { headerName: this.$t('bankTransaction.table.refNumber'), field: 'RefNumber', width: 120 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
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
            let type = '';
            if (node) {
                this.paramsData = node.data;
                type = node.data.type;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.insertReconciliation'),
                    disabled: !this.paramsData || this.paramsData.IsReconsiliated == '-1',
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showModal(this.paramsData, 0),
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
                        if (node.data.TransactionID == vm.paramsData.TransactionID) {
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
                rowSelectedAfterRefresh(this, selectedNodes, 'TransactionID');
            });
        },

        async getData(params) {
            try {
                this.$loadingIndicator(this);
                const { data } = await bankTransactionResource.list(params);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async showModal(idData, modeData) {
            if(modeData == this.global.modeData.edit) {
                this.$refs.bankTransactionForm.showUpdateDirectBill(idData);
            } else {
                this.$refs.bankTransactionForm.showModal(idData, modeData);
            }
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
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    },
};
</script>
