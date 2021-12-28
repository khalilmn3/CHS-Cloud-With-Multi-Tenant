<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" :formType="formType" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <vs-col vs-type="flex" class="w-full">
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
            </vs-col>
        </vx-card>
        <!-----------start need setting manual---------------->
        <ReceiptForm ref="receiptForm" :titleForm="$t('receipt.receipt')" :formType="formType" @refreshData="$refs.filterHeader.onRefreshData()"/>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import ReceiptResource from '@/api/back-office/receipt';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from './components/action_grid_receipt';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import FilterHeader from './components/FilterHeader';
import ReceiptForm from './components/ReceiptForm';

const receiptResource = new ReceiptResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'BudgetStatistic',

    props: {
        formType: String,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        FilterHeader,
        NavigationHeader,
        ReceiptForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: 0,
            searchFilterData: [
                { text: this.$t('common.filter.number'), value: 0 },
                { text: this.$t('common.filter.receiveFrom'), value: 1 },
                { text: this.$t('common.filter.forPayment'), value: 2 },
                { text: this.$t('common.filter.lastUpdate'), value: 3 },
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

            columnDefs2: null,
            rowData2: null,
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

        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };

        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'index', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 110,},
            { headerName: this.$t('receipt.number'), field: 'number', width: 125 },
            { headerName: this.$t('receipt.receiveFrom'), field: 'receive_from', width: 200 },
            { headerName: this.$t('receipt.amount'), field: 'amount', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('apPayment.issuedDate'), field: 'issued_date', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('receipt.forPayment'), field: 'for_payment', width: 200 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 120 },
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
                    name: this.$t('common.contextMenu.insert'),
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showModal('', 0),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showModal(this.paramsData, 1),
                },
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDelete(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.printReceipt'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintReceipt(this.paramsData),
                },
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

        handleRowRightClicked2() {
            if (this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.ref_number == vm.paramsData.ref_number) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.showModal(this.paramsData, this.global.modeData.edit);
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.search = search;
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            await this.getData(search);
            setTimeout(()=>{rowSelectedAfterRefresh(this, selectedNodes, 'id_log')},500);
        },

        async getData(params) {
            try {
                this.$loadingIndicator(this);
                const { data } = await receiptResource.list(params);
                this.rowData = data;
                this.rowData2 = [];
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async showModal(idData, modeData) {
            this.$refs.receiptForm.showModal(idData, modeData);
        },

        handleDelete(params) {
            $dialog.confirmationDelete(this, 'deleteData', params);
        },

        // PRINT
        handlePrint(id, reportDirectory) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.receipt}&number=${id}&template=${reportDirectory}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintReceipt(paramsData) {
            if (paramsData !== undefined) {
                this.handlePrint(paramsData.number, this.global.stimulsoftReportFileDirectory.receipt);
            }

        },

        async deleteData(params) {
            try{
                this.$loadingIndicator(this);
                const { data } = await receiptResource.delete({number: params.number, user_id: this.global.userInfo.code});
                $alert.deleteAlertSuccess();
                this.refreshData(this.search);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
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
