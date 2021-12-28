<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}">{{ $t('arCityLedger.createInvoice') }}</navigation-header>
        <filter-header ref="filterHeader" :formType="global.formType.arCityLedger" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
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
        <ar-city-ledger-form ref="arCityLedgerForm" @refreshData="$refs.filterHeader.onRefreshData()"/>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import ARCityLedgerResource from '@/api/back-office/arCityLedger';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update_menu_dropdown';
import ActionGridEditor from '@/views/pages/components/ag_grid-framework/action_grid_update_delete_editor';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import FilterHeader from './components/FilterHeader';
import ARCityLedgerForm from './components/ARCityLedgerForm';

const arCityLedgerResource = new ARCityLedgerResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'ARCityLedger',

    props: {
        titleForm: String,
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
                { text: this.$t('common.filter.directBill'), value: 0 },
                { text: this.$t('common.filter.companyType'), value: 1 },
                { text: this.$t('common.filter.account'), value: 2 },
                { text: this.$t('common.filter.folioNumber'), value: 3 },
                { text: this.$t('common.filter.room'), value: 4 },
                { text: this.$t('common.filter.guestName'), value: 5 },
                { text: this.$t('common.filter.roomRate'), value: 6 },
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
            rowData: null,
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
            {
                headerName: this.$t('common.table.action'), field: 'folio_number', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100,
            },
            { headerName: this.$t('arCityLedger.table.directBill'), field: 'DirectBill', width: 200 },
            { headerName: this.$t('arCityLedger.table.companyType'), field: 'CompanyType', width: 130 },
            { headerName: this.$t('arCityLedger.table.account'), field: 'Account', width: 200 },
            {
                headerName: this.$t('arCityLedger.table.amount'), field: 'Amount', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber,
            },
            {
                headerName: this.$t('arCityLedger.table.folioNumber'), field: 'folio_number', width: 135, cellStyle: { textAlign: 'right' },
            },
            { headerName: this.$t('arCityLedger.table.roomNumber'), field: 'room_number', width: 100 },
            { headerName: this.$t('arCityLedger.table.guestName'), field: 'GuestName', width: 200 },
            {
                headerName: this.$t('arCityLedger.table.arrivalDate'), field: 'ArrivalDate', width: 133, valueFormatter: formatDate,
            },
            {
                headerName: this.$t('arCityLedger.table.departureDate'), field: 'DepartureDate', width: 153, valueFormatter: formatDate,
            },
            { headerName: this.$t('arCityLedger.table.roomRate'), field: 'RoomRate', width: 133 },
            { headerName: this.$t('arCityLedger.table.taVoucherNumber'), field: 'voucher_number_ta', width: 200 },
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
                const { data } = await arCityLedgerResource.list(params);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async showModal(idData, modeData) {
            if(modeData == this.global.modeData.edit) {
                this.$refs.arCityLedgerForm.showUpdateDirectBill(idData);
            } else {
                this.$refs.arCityLedgerForm.showModal(idData, modeData);
            }
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
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    },
};
</script>
