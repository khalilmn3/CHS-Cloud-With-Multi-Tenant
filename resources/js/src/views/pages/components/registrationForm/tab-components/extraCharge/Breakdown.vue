<template>
    <div>
        <vs-row vs-type="flex" vs-justify="flex-end" vs-align="center">
            <vs-button class="ml-2" @click="showModal('', global.modeData.insert)" icon="add">{{ $t('button.insert') }}</vs-button>
        </vs-row>
        <br/>
        <ag-grid-vue
            :style="global.styleAgGridFrame3"
            :class="global.themeAgGrid"
            pagination="true"
            :columnDefs="columnDefs"
            :rowData="data"
            :paginationPageSize="paginationPageSize"
            :enableRangeSelection="true"
            :gridOptions="gridOptions"
            @grid-ready="onGridReady"
            :context="context"
            :rowSelection="rowSelection"
            :frameworkComponents="frameworkComponents"
            :enableCellChangeFlash="true"
            :defaultColDef="global.defColDef"
            :getContextMenuItems="getContextMenu"
            :suppressDragLeaveHidesColumns="true"
            :suppressMakeColumnVisibleAfterUnGroup="true"
            @cellContextMenu="handleRowRightClicked"
            @rowDoubleClicked="handleRowDobleClicked"
        ></ag-grid-vue>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid } from '@/utils/general.js';
import Tracking from '@/views/pages/components/Tracking.vue';
// ------for format---5-- //
import { formatNumber } from '@/utils/format.js';
import ActionGrid from './action_grid';

export default {
    name: 'BreakdownExtraCharge',
    props: {
        data: Array,
    },
    components: {
        AgGridVue,
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
            { headerName: this.$t('common.table.action'), cellRenderer: 'actionGrid', colId: 'params', width: 150},
            { headerName: this.$t('transaction.table.outlet'), field: 'outlet', width: 200},
            { headerName: this.$t('transaction.table.product'), field: 'product', width: 200},
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 200},
            { headerName: this.$t('transaction.table.account'), field: 'Account', width: 200},
            { headerName: this.$t('transaction.table.quantity'), field: 'quantity', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.amount'), field: 'amount', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.taxAndService'), field: 'tax_and_service', width: 200},
            { headerName: this.$t('transaction.table.chargeFrequency'), field: 'charge_frequency', width: 150},
            { headerName: this.$t('transaction.table.maxPax'), field: 'max_pax', width: 100},
		    { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
        };
        this.rowGroupPanelShow = 'always';
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
        
        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.showModal(this.paramsData, this.global.modeData.edit);
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
        delete(val) {
            this.$emit('delete', val);
        },
        
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.refreshData();
    },
    computed:{
        userId: {
            get() {
                return this.$store.state.AppActiveUser.id;
            },
        },
    },
};
</script>
