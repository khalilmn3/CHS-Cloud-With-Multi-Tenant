<template>
    <div>
        <ag-grid-vue
            style="width: 100%; height: 350px;"
            class="ag-theme-material"
            id="myGrid"
            :gridOptions="gridOptions"
            :columnDefs="columnDefs"
            :rowData="rowData">
        </ag-grid-vue>
    </div>
</template>
<script>
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import '../../../../../sass/ag-grid.scss'
import { formatDate } from '@/utils/format.js'
export default {
    props: {
        rowData: Array,
    },
    components: {
        AgGridVue,
    },

    data() {
        return {

            gridOptions: null,
            gridApi: null,
            columnApi: null,
            columnDefs: null,
            defaultColDef: null,
        };
    },
    beforeMount() {
        this.gridOptions = {
            rowHeight: 35
        };
        this.columnDefs = [
            { headerName: this.$t('dashboard.expectedDeparture.table.folioNumber'), resizable: true, field: 'number', width: 90 },
            { headerName: this.$t('dashboard.expectedDeparture.table.fullName'), resizable: true, field: 'full_name', width: 150 },
            { headerName: this.$t('dashboard.expectedDeparture.table.arrival'), resizable: true, field: 'arrival', width: 110, valueFormatter: formatDate},
            { headerName: this.$t('dashboard.expectedDeparture.table.departure'), resizable: true, field: 'departure', width: 110, valueFormatter: formatDate},
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
        };

        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
};
</script>
