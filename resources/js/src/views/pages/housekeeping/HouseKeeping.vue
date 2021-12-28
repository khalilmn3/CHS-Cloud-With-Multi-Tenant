<template>
    <div class="housekeeping">
        <navigation-header :printHKButton="true" @printCheckList="handlePrintCheckList" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" :formType="global.formType.housekeeping"  @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <!-- <print-report @printCheckList="handlePrintCheckList" :selected="selectedRoom" :titleForm="titleForm" @showModal="showModal" @refreshData="refreshData" :searchFilterData="searchFilterData" :vModelDefaultSearchData="vModelDefaultSearchData"></print-report> -->
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :statusBar="statusBar"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                @selection-changed="onSelectionChanged"
                :rowData="rowData"
                :defaultColDef="global.defColDef"
                :getContextMenuItems="getContextMenu"
                :rowClassRules="rowClassRules"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <modal-housekeeping ref="modalHk" :idData="idData" @refreshData="$refs.filterHeader.onRefreshData()"/>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import { AgGridVue } from 'ag-grid-vue';
import $alert from '@/utils/alert.js';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid } from '@/utils/general.js';
import '@sass/vuexy/components/datepicker.scss';

import { formatTime, formatDate } from '@/utils/format.js';
// cell Renderer
import ColorRenderer from '@/views/pages/components/ag_grid-framework/color.js';
import SmokeRenderer from '@/views/pages/components/ag_grid-framework/smoke_icon';
import StatusRenderer from '@/views/pages/components/ag_grid-framework/hk_status.js';

import HousekeepingResource from '@/api/housekeeping.js';
import Tracking from '../components/Tracking.vue';
import ActionGrid from './components/action_grid';
import ModalHousekeeping from './components/HousekeepingForm';

const housekeepingResource = new HousekeepingResource();

export default {
    name: 'HouseKeeping',

    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        ModalHousekeeping,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.roomNumber'), value: '0' },
                { text: this.$t('common.filter.floor'), value: '1' },
                { text: this.$t('common.filter.roomType'), value: '2' },
                { text: this.$t('common.filter.bedType'), value: '3' },
                { text: this.$t('common.filter.guestName'), value: '4' },
                { text: this.$t('common.filter.group'), value: '5' },
                { text: this.$t('common.filter.remark'), value: '6' },
                { text: this.$t('common.filter.hkNote'), value: '7' },
                { text: this.$t('common.filter.newReservationNumber'), value: '8' },
                { text: this.$t('common.filter.newReservationGuestName'), value: '9' },
                { text: this.$t('common.filter.newReservationHKNote'), value: '10' },
                { text: this.$t('common.filter.lastCheckOutNumber'), value: '11' },
                { text: this.$t('common.filter.lastCheckOutGuestName'), value: '12' },
                { text: this.$t('common.filter.lastUpdate'), value: '13' },
            ],
            // query data search
            limitPageSize: 0,
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
            },
            // Ag-Grid
            columnDefs: null,
            rowData: null,
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
            dataTracking: null,
            rowClassRules: null,
            // Parameter From Child
            idData: {},
            paramsData: null,
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            roomBoy: '',
            roomBoys: [],
            icon: '',
            status: '',
            statusBefore: '',
            date_range: '',
            unavailable: {},
            selectedRoom: [],
            mode: '',
            options: {},
            btnDelete: false,
            multiSelected: false,
            // data error handling from laravel validation//
            dbErrors: {},
            disabledOO: false,
            disabledUC: false,
            disabledOF: false,
            disabledGC: false,
            disabledSR: false,
            disabledUR: false,
            disabledAT: true,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('housekeeping.table.room'), field: 'room_number', width: 100, pinned: true, headerCheckboxSelection: true, headerCheckboxSelectionFilteredOnly: true, checkboxSelection: true, suppressMenu: true, },
            { headerName: this.$t('common.table.action'), field: 'code', cellRenderer: 'actionGrid', colId: 'params', width: 100, sortable: false, suppressMenu: true, },
            { headerName: this.$t('housekeeping.table.roomStatusIcon'), field: 'status1', width: 45, cellRenderer: 'statusRenderer', suppressMenu: true, },
            // { headerName: this.$t('housekeeping.table.s1'), field: 'status1', width: 60 },
            // { headerName: this.$t('housekeeping.table.s2'), field: 'status2', width: 60 },
            // { headerName: this.$t('housekeeping.table.s2'), field: 'status2', width: 60 },
            { headerName: this.$t('housekeeping.table.complimentHouseUseIcon'), field: 'compliment', width: 60, cellRenderer: 'statusRenderer', suppressMenu: true, },
            { headerName: this.$t('housekeeping.table.roomBlockIcon'), field: 'room_block', width: 60, cellRenderer: 'statusRenderer', suppressMenu: true, },
            { headerName: this.$t('housekeeping.table.building'), field: 'building', width: 80, suppressMenu: true, },
            { headerName: this.$t('housekeeping.table.floor'), field: 'floor', width: 80, suppressMenu: true, },
            { headerName: this.$t('housekeeping.table.roomType'), field: 'room_type', width: 200 },
            { headerName: this.$t('housekeeping.table.roomView'), field: 'room_view', width: 150 },
            { headerName: this.$t('housekeeping.table.smokingRoom'), field: 'is_smoking', width: 90, cellRenderer: 'smokeRenderer', },
            { headerName: `${this.$t('housekeeping.table.guestName')} / ${this.$t('housekeeping.table.outOfOrderInfo')}`, field: 'guest_info', width: 250 },
            { headerName: this.$t('housekeeping.table.group'), field: 'group', width: 250 },
            { headerName: this.$t('housekeeping.table.arrivalDate'), field: 'date_arrival', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('housekeeping.table.estimateTimeArrival'), field: 'date_arrival', width: 112, valueFormatter: formatTime, },
            { headerName: this.$t('housekeeping.table.departureDate'), field: 'date_departure', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('housekeeping.table.estimateTimeDeparture'), field: 'date_departure', width: 130, valueFormatter: formatTime, },
            { headerName: this.$t('housekeeping.table.remark'), field: 'remark', width: 150 },
            { headerName: this.$t('housekeeping.table.hkNote'), field: 'house_keeping_note', width: 150 },
            { headerName: this.$t('housekeeping.table.newReservationNumber'), field: 'nr_number', width: 110 },
            { headerName: this.$t('housekeeping.table.newReservationGuestName'), field: 'nr_guest_name', width: 200 },
            { headerName: this.$t('housekeeping.table.newReservationArrivalDate'), field: 'nr_arrival_date', width: 110, valueFormatter: formatDate, },
            { headerName: this.$t('housekeeping.table.newReservationEstimateTimeArrival'), field: 'nr_arrival_date', width: 132, valueFormatter: formatTime, },
            { headerName: this.$t('housekeeping.table.newReservationHKNote'), field: 'nr_house_keeping_note', width: 250 },
            { headerName: this.$t('housekeeping.table.lastCheckOutnNumber'), field: 'lc_number', width: 110 },
            { headerName: this.$t('housekeeping.table.lastCheckOutGuestName'), field: 'lc_guest_name', width: 250 },
            { headerName: this.$t('housekeeping.table.lastCheckOutDepartureDate'), field: 'lc_date_departure', width: 115, valueFormatter: formatDate, },
            { headerName: this.$t('housekeeping.table.lastCheckOutEstimateTimeDeparture'), field: 'lc_date_departure', width: 150, valueFormatter: formatTime, },
            { headerName: this.$t('housekeeping.table.roomBlockStatus'), field: 'rb_status', width: 150 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            colorRenderer: ColorRenderer,
            smokeRenderer: SmokeRenderer,
            statusRenderer: StatusRenderer,
        };
        this.rowGroupPanelShow = 'always';
        this.rowClassRules = {
            'room-status-oo': 'data.status1 == "OO"',
            'room-status-of': 'data.status1 == "OF"',
            'room-status-uc': 'data.status1 == "UC"',
            'room-status-oc': 'data.status1 == "OC" || data.status1 == "OD"',
        };
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
        this.rowSelection = 'multiple';
        this.rowModelType = 'serverSide';
        this.limitPageSize = this.global.limitDefaultPageSize;
    },

    methods: {
        onGridReady() {},

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        onSelectionChanged(status) {
            const selectedRows = this.gridApi.getSelectedRows();
            let selectedRowsString = '';
            let count = 0;
            this.multiSelected = false;
            selectedRows.forEach((selectedRow, index) => {
                if (index < 0) {
                    return;
                }
                if(index > 0){
                    this.multiSelected = true;
                }
                if(status == this.global.roomStatus.ready) {
                    if(selectedRow.is_occupied == '0' && selectedRow.is_unavailable == '0' && selectedRow.status2 != this.global.roomStatus.ready) {
                        if (count > 0) {
                            selectedRowsString += ', ';
                        }
                        selectedRowsString += selectedRow.room_number;
                        count += 1;
                    }
                } else if(status == this.global.roomStatus.dirty) {
                    if(selectedRow.is_unavailable == '0' && selectedRow.status2 != this.global.roomStatus.dirty) {
                        if (count > 0) {
                            selectedRowsString += ', ';
                        }
                        selectedRowsString += selectedRow.room_number;
                        count += 1;
                    }
                }  else if(status == this.global.roomStatus.clean) {
                    if(selectedRow.is_unavailable == '0' && selectedRow.status2 != this.global.roomStatus.clean) {
                        if (count > 0) {
                            selectedRowsString += ', ';
                        }
                        selectedRowsString += selectedRow.room_number;
                        count += 1;
                    }
                } else {
                    if (count > 0) {
                        selectedRowsString += ', ';
                    }
                    selectedRowsString += selectedRow.room_number;
                    count += 1;
                }
            });
            this.selectedRoom = selectedRowsString;
        },
        // ------------------------additional for context menu ag-Grid-----------//
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
                this.setDisabledDropDownMenuUnavailableRoom(this.paramsData);
            } else {
                this.setDisabledDropDownMenuUnavailableRoom();
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.ready'),
                    icon: generateIconContextMenuAgGrid('ready_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.roomStatus.ready, '/images/hk-ready.png', this.global.hkMode.roomAvailable),
                },
                {
                    name: this.$t('common.contextMenu.clean'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('clean_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.roomStatus.clean, '/images/hk-clean.png', this.global.hkMode.roomAvailable),
                },
                {
                    name: this.$t('common.contextMenu.dirty'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('dirty_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.roomStatus.dirty, '/images/hk-dirty.png', this.global.hkMode.roomAvailable),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.outOfOrder'),
                    disabled: this.disabledOO,
                    icon: generateIconContextMenuAgGrid('out_of_order_icon24'),
                    action: () => this.showModalUnavailable(this.paramsData, this.global.roomStatus.outOfOrder, '', this.global.hkMode.roomUnavailable),
                },
                {
                    name: this.$t('common.contextMenu.officeUse'),
                    disabled: this.disabledOF,
                    icon: generateIconContextMenuAgGrid('office_use_icon24'),
                    action: () => this.showModalUnavailable(this.paramsData, this.global.roomStatus.officeUse, '', this.global.hkMode.roomUnavailable),
                },
                {
                    name: this.$t('common.contextMenu.underConstruction'),
                    disabled: this.disabledUC,
                    icon: generateIconContextMenuAgGrid('under_construction_icon24'),
                    action: () => this.showModalUnavailable(this.paramsData, this.global.roomStatus.underConstruction, '', this.global.hkMode.roomUnavailable),
                },
                {
                    name: this.$t('common.contextMenu.availableToday'),
                    disabled: this.disabledAT,
                    action: () => this.deleteUnavailable(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.generalCleaning'),
                    disabled: this.disabledGC,
                    icon: generateIconContextMenuAgGrid('general_cleaning_icon24'),
                    action: () => this.handleUpdateRoomBlock(this.paramsData, this.global.roomBlockStatus.generalCleaning, this.global.hkMode.roomBlock),
                },
                {
                    name: this.$t('common.contextMenu.showingRoom'),
                    disabled: this.disabledSR,
                    icon: generateIconContextMenuAgGrid('showing_room_icon24'),
                    action: () => this.handleUpdateRoomBlock(this.paramsData, this.global.roomBlockStatus.showingRoom, this.global.hkMode.roomBlock),
                },
                {
                    name: this.$t('common.contextMenu.unblockRoom'),
                    disabled: this.disabledUR,
                    action: () => this.handleUpdateRoomBlock(this.paramsData, null, this.global.hkMode.roomBlock),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.printCheckList'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintCheckList(),
                },
                {
                    name: this.$t('common.contextMenu.printCheckListSelected'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintCheckList(true),
                },
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showModal(this.paramsData, this.global.modeData.tracking),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            const vm = this;
            const selectedRow = this.selectedRoom.toString().split(', ');
            let count = 0;

            selectedRow.forEach((element) => {
                if (element == vm.paramsData.room_number) {
                    count += 1;
                }
            });
            if (count == 0) {
                vm.gridApi.forEachNode((node) => {
                    if (node.data.room_number == vm.paramsData.room_number) {
                        node.setSelected(true, true);
                    }
                });
            }
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 && selectedNodes != null ? selectedNodes[0] : {};
            try {
                const { data } = await housekeepingResource.list(search);
                this.rowData = data.data;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'room_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async showModal(idData, status, icon, mode) {
            await this.onSelectionChanged(status);
            if(this.selectedRoom) {
                this.$refs.modalHk.showModal(idData, this.selectedRoom, status, icon, mode, this.multiSelected);
            }
        },

        async showModalUnavailable(idData, status, icon, mode) {
            this.$refs.modalHk.showModalUnavailable(idData, status, icon, mode);
        },

        async handleUpdateRoomBlock(idData, status, mode) {
            this.$refs.modalHk.handleUpdateRoomBlock(idData, status, mode);
        },

        async deleteUnavailable(idData) {
            this.$refs.modalHk.deleteUnavailable(idData);
        },

        // PRINT
        handlePrintCheckList(boolean) {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.roomCheckList}&selected=${boolean ? this.selectedRoom : ''}&template=${this.global.stimulsoftReportFileDirectory.roomCheckList}` });
            window.open(newTabReport.href, '_blank');
        },

        setDisabledDropDownMenuUnavailableRoom(params) {
            if (params) {
                if (params.ID_log !== null && params.ID_log !== undefined && params.ID_log > 0) {
                    if (params.status1 === this.global.roomStatus.outOfOrder) {
                        this.disabledOF = true;
                        this.disabledUC = true;
                        this.disabledGC = true;
                        this.disabledSR = true;
                        this.disabledUR = true;
                        this.disabledAT = false;
                    } else if (params.status1 === this.global.roomStatus.officeUse) {
                        this.disabledOO = true;
                        this.disabledUC = true;
                        this.disabledGC = true;
                        this.disabledSR = true;
                        this.disabledUR = true;
                        this.disabledAT = false;
                    } else if (params.status1 === this.global.roomStatus.underConstruction) {
                        this.disabledOO = true;
                        this.disabledOF = true;
                        this.disabledGC = true;
                        this.disabledSR = true;
                        this.disabledUR = true;
                        this.disabledAT = false;
                    }
                } else {
                    this.disabledOO = false;
                    this.disabledOF = false;
                    this.disabledUC = false;
                    this.disabledGC = false;
                    this.disabledSR = false;
                    this.disabledUR = false;
                    this.disabledAT = true;
                }
            } else {
                this.disabledOO = true;
                this.disabledOF = true;
                this.disabledUC = true;
                this.disabledGC = true;
                this.disabledSR = true;
                this.disabledUR = true;
                this.disabledAT = true;
            }
        },

        trackingData(idData) {
            this.$refs.modalHk.trackingData(idData);
        },
    },
    // ------------------end need setting manual for crud-----------------//
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
    beforeRouteLeave(to, from, next) {
        if (this.mainPopUp) {
            this.mainPopUp = false;
            next(false);
        } else {
            next();
        }
    },
};
</script>
<style>
.room-status-oo{
    background-color: rgb(250, 63, 63) !important;
}.room-status-of{
    background-color: rgb(252, 3, 211) !important;
}.room-status-uc{
    background-color: sandybrown !important;
}.room-status-oc{
    background-color: rgb(153, 173, 0) !important;
}
</style>
