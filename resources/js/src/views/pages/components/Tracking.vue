<template>
<div style="min-width:800px">
  <ag-grid-vue
    :style="global.styleAgGridFrame"
    :class="global.themeAgGrid"
    pagination="true"
    :paginationPageSize="paginationPageSize"
    :suppressDragLeaveHidesColumns="true"
    :suppressMakeColumnVisibleAfterUnGroup="true"
    :rowGroupPanelShow="rowGroupPanelShow"
    :columnDefs="columnDefs"
    :enableCellChangeFlash="true"
    :rowSelection="rowSelection"
    :rowData="theData"
    :defaultColDef="global.defColDef"
  ></ag-grid-vue>
</div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import { formatDate, formatTime } from '@/utils/format.js';

export default {
    props: ['idData', 'theData'],
    components: {
        'ag-grid-vue': AgGridVue,
    },

    data() {
        return {
            columnDefs: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('tracking.logDate'), field: 'log_date', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('tracking.logTime'), field: 'log_date', width: 100, valueFormatter: formatTime },
            { headerName: this.$t('tracking.mode'), field: 'mode', width: 100 },
            { headerName: this.$t('tracking.userID'), field: 'user_id', width: 120 },
            { headerName: this.$t('tracking.tableName'), field: 'table_name_log', width: 150 },
            { headerName: this.$t('tracking.data'), field: 'data_query', width: 350 },
        ];
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
    },
};
</script>
