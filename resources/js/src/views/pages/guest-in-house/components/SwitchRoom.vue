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
            :rowSelection="rowSelection"
            :defaultColDef="global.colDef1"
        ></ag-grid-vue>
    </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue';

export default {
    name: 'switchRoomTable',

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
            selectedRow: null,

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
            { headerName: this.$t('guestInHouse.switchRoom.table.room'), field: 'room_number_to', width: 80 },
            { headerName: this.$t('guestInHouse.switchRoom.table.fullName'), field: 'full_name_to', width: 200 },
            { headerName: this.$t('guestInHouse.switchRoom.table.roomType'), field: 'room_type_to', width: 170 },
            { headerName: this.$t('guestInHouse.switchRoom.table.roomRate'), field: 'room_rate_to', width: 170 },
            { headerName: this.$t('guestInHouse.switchRoom.table.folioNumber'), field: 'folio_number_to', width: 120 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {

        onGridReady() {
        },
        getSelectedRow() {
            const [selected] = this.gridApi.getSelectedRows();
            this.$emit('selected', selected);
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};
</script>
