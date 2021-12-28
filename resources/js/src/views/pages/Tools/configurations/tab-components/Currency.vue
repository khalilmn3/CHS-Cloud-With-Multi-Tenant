<template>
    <div>
        <div v-if="table">
            <vs-row vs-type="flex" vs-justify="flex-end">
                <vs-button @click="showModal('', global.modeCurrency.insert)" icon="add" :color="global.buttonColor.insert">{{ $t('button.insert') }}</vs-button>
            </vs-row>
            <br/>
            <ag-grid-vue
                :style="global.styleAgGridFrame2"
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
                :rowData="data"
                :defaultColDef="global.defColDef"
                :getContextMenuItems="getContextMenu"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
        </div>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/Tools/configurations/tab-components/action_grid3';
import { generateIconContextMenuAgGrid } from '@/utils/general'
// ------for format----- //
import { formatNumber } from '@/utils/format.js';
// <!------------------end additional element---------------------->

export default {
    name: 'Currency',

    props: {
        table: Boolean,
        data: Array
    },
    components: {
        'ag-grid-vue': AgGridVue,
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
            paramsData: {},
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
            { headerName: this.$t('common.table.currency'), field: 'currency', width: 200 },
            { headerName: this.$t('common.table.exchangeRate'), field: 'exchange_rate', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
		    { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 200 },
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
    },

    methods: {

        onGridReady() {},
        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        //---
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
                    action: () => this.showModal('', this.global.modeCurrency.insert),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.modeCurrency.edit),
                },
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeleteData(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.modeCurrency.tracking),
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
        handleDeleteData(val) {
            this.$emit('delete', val);
        },
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
};
</script>
