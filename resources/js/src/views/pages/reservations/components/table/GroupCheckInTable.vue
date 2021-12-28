<template>
    <div>
        <ag-grid-vue
            ref="mainContainer"
            :style="global.styleAgGridFrame0"
            :class="global.themeAgGrid"
            :suppressDragLeaveHidesColumns="true"
            :suppressContextMenu="true"
            :enableRangeSelection="true"
            :gridOptions="gridOptions"
            @grid-ready="onGridReady"
            :context="context"
            :columnDefs="columnDefs"
            :frameworkComponents="frameworkComponents"
            :enableCellChangeFlash="true"
            :rowSelection="rowSelection"
            :rowData="rowData"
            :defaultColDef="global.defColDef"
            :getRowNodeId="getRowNodeId"
        ></ag-grid-vue>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';

export default {
    name: 'GroupCheckInTable',

    props: {
        rowData: Array,
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
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
            getRowNodeId: null,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,

        };
        this.getRowNodeId = (data) => data.number;
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('reservation.group.guestList.table.reservationNo'), field: 'number', width: 80},
            { headerName: this.$t('reservation.group.guestList.table.roomNo'), field: 'room_number', width: 90},
            { headerName: this.$t('reservation.group.guestList.table.roomType'), field: 'room_type', width: 110},
            { headerName: this.$t('reservation.group.guestList.table.fullName'), field: 'full_name', width: 150 },
            { headerName: this.$t('reservation.group.guestList.table.arrivalDate'), field: 'arrival', width: 140},
            { headerName: this.$t('reservation.group.guestList.table.departureDate'), field: 'departure', width: 140},
            // { headerName: this.$t('reservation.deposit'), field: 'deposit', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.group.guestList.table.result'), field: 'result', width: 250 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
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
        this.rowModelType = 'clientSide';
    },

    methods: {
        onGridReady() {},
        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        updateCheckInResult(id, status) { // use on group check in form
            const rowNode = this.gridApi.getRowNode(id);
            rowNode.setDataValue('result', this.$t(`responseStatus.checkInReservation.${status}`));
        },
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
};
</script>
