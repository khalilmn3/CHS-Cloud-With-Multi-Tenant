<template>
    <div>
        <ag-grid-vue
            :style="global.styleAgGridFrame2"
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

export default {
    name: 'AutomaticRoutingTable',

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
            {  headerName: this.$t('transaction.table.id'), field: 'code', width: 80, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, },
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 250 },
            { headerName: this.$t('transaction.folio'), field: 'folio', width: 250 },
            { headerName: this.$t('transaction.sf'), field: 'sub_folio', width: 80 },
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
            const selected = array.map((result) => result.id_log);
            this.$emit('selected', selected);
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
    watch: {
    },
    computed: {
    },
};
</script>
