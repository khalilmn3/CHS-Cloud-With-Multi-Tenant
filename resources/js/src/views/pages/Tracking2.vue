<template>
    <ag-grid-vue :style="global.styleAgGridFrame"
        class="ag-theme-balham"
        pagination=true
        :paginationPageSize="paginationPageSize"
        :suppressDragLeaveHidesColumns="true"
        :suppressMakeColumnVisibleAfterUnGroup="true"
        :rowGroupPanelShow="rowGroupPanelShow"
        :enableRangeSelection="true"
        :statusBar="statusBar"
        :sideBar="sideBar"
        :columnDefs="columnDefs"
        :enableCellChangeFlash="true"
        :rowSelection="rowSelection"
        :rowData="rowData">
    </ag-grid-vue>
</template>

<script>
import {AgGridVue} from 'ag-grid-vue';
export default {
	props: ['idData', 'tableName'],
	components: {
		'ag-grid-vue': AgGridVue,
	},

	data() {
		return {
			columnDefs: null,
			rowData: null,
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
		//------------------need setting manual for column table-----------------//
		this.columnDefs = [
			{headerName: 'Log Date', field: 'logDate', sortable: true, filter: true, enableRowGroup: true, width: 100},
			{headerName: 'Log Time', field: 'logTime', sortable: true, filter: true, enableRowGroup: true, width: 100},
			{headerName: 'Mode', field: 'mode', sortable: true, filter: true, enableRowGroup: true, width: 100},
			{headerName: 'User ID', field: 'user_id', sortable: true, filter: true, enableRowGroup: true, width: 120},
			{headerName: 'Table Name', field: 'table_name_log', sortable: true, filter: true, enableRowGroup: true, width: 150},
			{headerName: 'Data', field: 'data_query', sortable: true, filter: true, enableRowGroup: true, width: 350},
		];

		fetch('/api/tracking/datagrid/' + this.idData +'/' + this.tableName)
			.then(result => result.json())
			.then(rowData => this.rowData = rowData.modelGrid);

		this.rowGroupPanelShow = 'always';
		this.statusBar = {
			statusPanels: [
				{statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left'},
				{statusPanel: 'agTotalRowCountComponent',align: 'center'},
				{statusPanel: 'agFilteredRowCountComponent' },
				{statusPanel: 'agSelectedRowCountComponent' },
				{statusPanel: 'agAggregationComponent' }
			]
		};
		this.sideBar = {
			toolPanels: [
				{id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel'},
				{id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel'}
			]
		};
		this.paginationPageSize = this.global.limitDefaultPageSize;
		this.rowSelection = 'single';
	},
};
</script>
