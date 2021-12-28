<template>
    <div>
        <ag-grid-vue
            style="width: 100%; height: 490px;"
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
export default {
    props:{
        rowData: Array
    },
    components:{
        AgGridVue
    },

    data() {
        return {

            gridOptions: null,
            gridApi: null,
            columnApi: null,
            columnDefs: null,
            defaultColDef: null,
        }
    },
    beforeMount() {
		this.gridOptions = {
			rowHeight: 35
        };
        this.columnDefs = [
			{ headerName: this.$t('common.table.description'), field: 'Code', width: 250},
            { headerName: this.$t('common.table.room'), field: 'rooms', width: 100 },
			{ headerName: this.$t('common.table.pax'), field: 'pax', width: 100},
            // { headerName: this.$t('table.percent'), field: 'percent', width: 100},
        ];

		//------------------end need setting manual for column table-----------------//
		this.context = { componentParent: this };
		this.frameworkComponents = {
        };

		this.rowSelection = 'single';
		this.rowModelType = 'serverSide';
    },
    mounted() {
		this.gridApi = this.gridOptions.api;
		this.ColumnApi = this.gridOptions.columnApi;
	}
}
</script>
