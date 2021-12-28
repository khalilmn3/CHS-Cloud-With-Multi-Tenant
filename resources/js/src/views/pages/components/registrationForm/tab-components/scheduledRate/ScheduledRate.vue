<template>
    <div>
        <div v-if="table">
            <ag-grid-vue
                :style="global.styleAgGridFrame3"
                :class="global.themeAgGrid"
                pagination="true"
                :rowData="data"
                :columnDefs="columnDefs"
                :paginationPageSize="paginationPageSize"
                :enableRangeSelection="true"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :defaultColDef="global.defColDef"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :statusBar="statusBar"
                :rowGroupPanelShow="rowGroupPanelShow"
                :getContextMenuItems="getContextMenu"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
        </div>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import IconCompHuRenderer from '@/views/pages/components/ag_grid-framework/comp_hu_icon';
import Tracking from '@/views/pages/components/Tracking';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid } from '@/utils/general';
// ------for format----- //
import { formatNumber } from '@/utils/format';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid';
// <!------------------end additional element---------------------->

export default {
    name: 'ScheduledRate',

    props: {
        table: Boolean,
        data: Array,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        tracking: Tracking,
    },

    data() {
        return {
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
            paramsData: null,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,

        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), cellRenderer: 'actionGrid', colId: 'params', width: 100 },
            { headerName: this.$t('registrationForm.scheduledRate.table.complimentIcon'), field: 'compliment_hu', width: 50, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconCompHuRenderer' },
            { headerName: this.$t('registrationForm.scheduledRate.table.fromDate'), field: 'from_date', width: 100 },
            { headerName: this.$t('registrationForm.scheduledRate.table.toDate'), field: 'to_date', width: 100 },
            { headerName: this.$t('registrationForm.scheduledRate.table.roomRate'), field: 'room_rate', width: 200 },
            { headerName: this.$t('registrationForm.scheduledRate.table.rate'), field: 'rate', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('registrationForm.scheduledRate.table.compliment'), field: 'ComplimentHu', width: 150 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            iconCompHuRenderer: IconCompHuRenderer,
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
        this.sideBar = {
            toolPanels: [
                { id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel' },
                { id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
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
        // ------------------need setting manual for crud-----------------//
        showModal(idData, modeData) {
            this.$emit('showModal', idData, modeData);
        },

        async refreshData() {
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            await this.$emit('refreshData');
            setTimeout(() => {
                rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
            }, 500);
        },
        deleteData(val) {
            this.$emit('delete', val);
        },
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.refreshData();
    },
};
</script>
