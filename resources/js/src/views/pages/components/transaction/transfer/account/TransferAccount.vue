<template>
    <div>
        <ag-grid-vue
            :style="global.styleAgGridFrame1"
            :class="global.themeAgGrid"
            :gridOptions="gridOptions"
            @grid-ready="onGridReady"
            @selection-changed="getSelectedRow"
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
    name: 'TransferAccountTable',

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
            { headerName: this.$t('common.table.id'), field: 'id_log', width: 80, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, },
            { headerName: this.$t('common.table.auditDate'), field: 'audit_date', width: 100 },
            { headerName: this.$t('common.table.subFolio'), field: 'group_code', width: 70 },
            { headerName: `${this.$t('common.table.room')}#`, field: 'room_number', width: 80 },
            { headerName: this.$t('common.table.account'), field: 'account' },
            { headerName: this.$t('common.table.debit'), field: 'debit', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('common.table.credit'), field: 'credit', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('common.table.subDepartment'), field: 'sub_department', width: 200 },
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
        getSelectedRow() {
            const array = this.gridApi.getSelectedRows();
            const selected = array.map((result) => result.correction_breakdown);
            this.$emit('selected', selected);
        },
        selectAll() {
            this.gridApi.selectAll();
        },
        deselectAll() {
            this.gridApi.deselectAll();
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};
</script>
