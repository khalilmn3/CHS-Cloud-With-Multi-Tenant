<template>
    <div class="RoomAvailability">
        <filter-header ref="filterHeader" :formType="global.formType.roomAvailability"  @search="refreshData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                :rowData="rowData"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :defaultColDef="global.defColDef"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :statusBar="statusBar"
				:suppressKeyboardEvent="suppressKeyboardEvent"
                @cellDoubleClicked="handleCellDoubleClicked"
            ></ag-grid-vue>
        </vx-card>
		<!-----------start need setting manual---------------->
			<registration-form v-if="destroyComponent" ref="registrationForm" :titleForm="titleFormReg" :isGuestInHouse="isGuestInHouse" :isReservation="isReservation" :isFromAvailability="true" @refreshData="$refs.filterHeader.onRefreshData()"></registration-form>
            <housekeeping-form v-if="destroyComponent" ref="housekeepingForm" @refreshData="$refs.filterHeader.onRefreshData()"/>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import StatusRenderer from '@/views/pages/components/ag_grid-framework/hk_status.js';
import ColorStatusRenderer from '@/views/pages/components/ag_grid-framework/availability_status.js';
import RegistrationForm from '@/views/pages/components/registrationForm/RegistrationForm.vue';
import HousekeepingForm from '@/views/pages/housekeeping/components/HousekeepingForm.vue';
import { formatDateTimeDatabase } from '@/utils/format.js';
import $alert from '@/utils/alert'

import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid';
import AvailabilityResource from '@/api/reservation/availability.js';

const availabilityResource = new AvailabilityResource();

export default {
    name: 'RoomAvailability',

    props: ['titleForm'],

    components: {
        AgGridVue,
        RegistrationForm,
        HousekeepingForm,
        FilterHeader,
    },

    data() {
        return {
            search: '',
            fromDate: '',
            fromDateTemp: '',
            headerAgGrid: [],
            isReservation: false,
            isGuestInHouse: false,
            key: 1,
            event: null,
            titleFormReg: '',
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
            defColDef: null,
            getRowNodeId: null,
            suppressKeyboardEvent: null,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            dataLookUp: [],
            destroyComponent: false,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            statusRenderer: StatusRenderer,
            colorStatusRenderer: ColorStatusRenderer,
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
        this.rowModelType = 'serverSide';
        this.suppressKeyboardEvent = (params) => {
            const KEY_SHIFT = 16;
            const KEY_ZERO = 0;

            this.event = params.event;
            if (this.key === 0) {
                this.key = KEY_ZERO;
            } else {
                this.key = event.which;
            }
            const keysToSuppress = [];

            if (event.ctrlKey || event.metaKey) {
                keysToSuppress.push(KEY_SHIFT);
            }
        };
    },

    methods: {
        rowSelectedAfterRefresh() {
            const vm = this;
            this.gridApi.forEachNode((node) => {
                if ((vm.vModel.room_number === undefined || vm.vModel.room_number === null) && node.rowIndex === 0) {
                    node.setSelected(true, true);
                    return false;
                }
                if (node.data.room_number === vm.vModel.room_number) {
                    vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
                    node.setSelected(true, true);
                    return false;
                }
            });
        },

        async getDataAvailability(search) {
            try {
                const { data } = await availabilityResource.roomAvailabilityForm(search);
                this.columnDefs = data.header;
                this.rowData = data.roomJson;
                this.key = 1;
                setTimeout(() => {
                    this.rowSelectedAfterRefresh();
                }, 100);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            this.getDataAvailability(search);
        },
        onGridReady(params) {},

        async handleCellDoubleClicked(params) {
            this.isGuestInHouse = false;
            this.ignoreHeader = params.colDef.field;
            if (this.ignoreHeader === 'room_number' || this.ignoreHeader === 'status_code' || this.ignoreHeader === 'block_status_code' || this.ignoreHeader === 'room_type_code'
			    || this.ignoreHeader === 'RoomView' || this.ignoreHeader === 'Smoking' || this.ignoreHeader === 'RoomType') {
                return;
            }
            const cellValue = await params.value;
            const rowValue = await params.data;

            if (this.key === 0) {
                this.key = 1;
            }

            // set variable vModel.room_number for selected & scrolling in ag Grid
            this.vModel.room_number = rowValue.room_number;
            if (cellValue) {
                this.valueCellData = cellValue.split('|');
                if (this.valueCellData[2] === 'R') {
                    this.paramsData = { reservation_number: this.valueCellData[1], folio_number: this.valueCellData[1] };
                    this.titleFormReg = this.$t('roomAvailability.popupTitle.editReservation') + this.valueCellData[1];
                    this.isReservation = true;
                    this.showForm(this.paramsData, this.global.modeData.edit, this.isReservation);
                } else if (this.valueCellData[2] === 'O' || this.valueCellData[2] === 'ED') {
                    this.paramsData = { reservation_number: this.valueCellData[1], folio_number: this.valueCellData[1] };
                    this.titleFormReg = this.$t('roomAvailability.popupTitle.editGuestInHouse') + this.valueCellData[1];
                    this.isReservation = false;
                    this.isGuestInHouse = true;
                    this.showForm(this.paramsData, this.global.modeData.edit, this.isReservation);
                } else if (this.valueCellData[2] === 'U') {
                    this.showHousekeepingForm(rowValue, this.valueCellData[3]);
                }
            } else {
                if (this.ignoreHeader === 'ED') {
                    return;
                }

                if (rowValue.status_code === 'VR' && this.key != 16) {
                    this.paramsData = { room_type_code: rowValue.room_type_code, bed_type_code: rowValue.bed_type_code, room_number: rowValue.room_number };
                    this.titleFormReg = this.$t('roomAvailability.popupTitle.newWalkIn');
                    this.isReservation = false;
                    this.showForm(this.paramsData, this.global.modeData.insert, this.isReservation);
                    this.key = 1;
                } else if (this.key === 16) {
                    // Get Arrival Date form header Cell Click
                    this.ColDefHeader = params.colDef.headerName.split(' ');
                    this.arrivalDateString = this.ColDefHeader[1].split('/');
                    this.arrivalDate = new Date(this.arrivalDateString[2], parseInt(this.arrivalDateString[1]) - 1, this.arrivalDateString[0]);
                    this.departureDate = new Date(this.arrivalDateString[2], parseInt(this.arrivalDateString[1]) - 1, parseInt(this.arrivalDateString[0]) + 1);
                    if (this.arrivalDate < this.auditDate) {
                        this.arrivalDate = this.auditDate;
                    }
                    // get Hour, Minute, Second from SysDate
                    const sysDate = new Date();
                    this.arrivalDate.setHours(sysDate.getHours(), sysDate.getMinutes(), sysDate.getSeconds());
                    this.departureDate.setHours(13);
                    this.paramsData = {
                        room_type_code: rowValue.room_type_code, bed_type_code: rowValue.bed_type_code, room_number: rowValue.room_number, ready: false, arrival: formatDateTimeDatabase(this.arrivalDate), departure: formatDateTimeDatabase(this.departureDate),
                    };
                    this.titleFormReg = this.$t('roomAvailability.popupTitle.insertReservation');
                    this.isReservation = true;
                    this.showForm(this.paramsData, this.global.modeData.insert, this.isReservation);
                    this.key = 0;
                }
            }
        },
        // CRUD Function
        async showForm(idData, modeData, isReservation) {
            this.$loadingIndicator(this)
            this.destroyComponent = false;
            setTimeout(() => {
                this.destroyComponent = true;
                setTimeout(() => {
                    this.$refs.registrationForm.showForm(idData, modeData, isReservation);
                }, 100);
            }, 100);
        },

        async showHousekeepingForm(idData, modeData) {
            this.$loadingIndicator(this)
            this.destroyComponent = false;
            setTimeout(() => {
                this.destroyComponent = true;
                setTimeout(() => {
                    this.$refs.housekeepingForm.showModalUnavailable(idData, modeData, '', this.global.hkMode.roomUnavailable);
                }, 100);
            }, 100);
        },
    },
    computed: {
        auditDate() {
            return this.$store.state.auditLog.auditDate;
        },
    },
    // ------------------end need setting manual for crud-----------------//
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
     },
};

</script>
