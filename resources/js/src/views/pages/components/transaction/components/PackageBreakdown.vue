<template>
    <div>
        <ag-grid-vue
            :style="global.styleAgGridFrame1"
            :class="global.themeAgGrid"
            :gridOptions="gridOptions"
            @grid-ready="onGridReady"
            :columnDefs="columnDefs"
            :rowData="data"
            :suppressRowClickSelection="true"
            :rowSelection="rowSelection"
            :defaultColDef="global.colDef1"
        ></ag-grid-vue>
    </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue';
// <!------------------additional element---------------------->
// ------for format----- //
import { formatNumber } from '@/utils/format.js';
// <!------------------end additional element---------------------->
export default {
    name: 'PackageBreakdown',

    props: {
        data: Array,
    },

    components: {
        'ag-grid-vue': AgGridVue,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            rowSelection: null,

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
            { headerName: this.$t('transaction.table.name'), field: 'account', width: 250, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.quantity'), field: 'quantity', width: 115, cellStyle: { textAlign: 'right' }, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.amount'), field: 'amount', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.remark'), field: 'remark', enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'multiple';
        this.rowModelType = 'serverSide';
    },

    methods: {

        onGridReady() {
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};
</script>
