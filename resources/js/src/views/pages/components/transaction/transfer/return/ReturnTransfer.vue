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

export default {
    name: 'ReturnTransferTable',

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
            { headerName: this.$t('transaction.table.folioNumber'), field: 'folio', width: 150, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, },
            { headerName: this.$t('transaction.table.roomNumber'), field: 'room_number', width: 150 },
            { headerName: this.$t('transaction.table.fullName'), field: 'full_name', width: 300 },
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
            const selected = array.map((result) => result.folio);
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
        this.selectAll();
    },
};
</script>
