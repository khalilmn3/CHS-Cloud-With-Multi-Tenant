/* eslint-disable eqeqeq */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-unresolved */
<template>
    <div class="reservation">
        <navigation-header :reservationButton="true" @groupCheckIn="handleGroupCheckIn" @checkIn="handleCheckIn()" :groupCheckInBoolean="groupCheckIn" @showModal="showForm" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :groupCheckIn="groupCheckIn" :groupList="groupList" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
            ref="mainContainer"
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                :rowData="rowData"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :pinnedBottomRowData="pinnedBottomRowData"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :defaultColDef="global.defColDef"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :getContextMenuItems="getContextMenu"
                :statusBar="statusBar"
                @rowDoubleClicked="handleRowDobleClicked"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
                <!--  -->
        </vx-card>
<!-----------start need setting manual---------------->
    <registration-form ref="registrationForm" :isReservation="true" @refreshData="$refs.filterHeader.onRefreshData()"></registration-form>
    <!----------- START POPUP CANCEL DEPOSIT RESERVATION ---------------->
    <cancel-reservation ref="cancelReservation" @refreshData="$refs.filterHeader.onRefreshData()"/>
    <!----------- END POPUP CANCEL DEPOSIT RESERVATION ---------------->

    <!----------- START CHECK IN GROUP ---------------->
        <vs-popup class="width-80" :active.sync="modalGroupCheckIn" :title="$t('reservation.group.title.checkInGroup')">
            <group-check-in-form
                :listFolio="listFolio"
                :masterFolio="masterFolio"
                :reservationList="reservationGroupList"
                :resvNumber="reservationNumber"
                :exchRateValue="parseInt(vDeposit.exchange_rate)"
                @checkIn="handleSaveCheckInGroup"
                @getExchRate="getExchangeRate"
                @createMasterFolio="handleCreateMasterFolio"
                :currency="dataLookupDeposit.currency"
                :accounts="accounts"
                @getFolioList="getFolioList"
                ref="groupCheckInForm">
            </group-check-in-form>
        </vs-popup>
    <!----------- END CHECK IN GROUP ---------------->

    <!----------- START SIDEBAR OPTION -------------->
        <vs-sidebar ref="sideBarOption" hidden-background position-right parent="#main-container" default-index="1" color="primary" class="sidebarx" spacer v-model="sidebarOption">
            <div class="header-sidebar" slot="header">
                <h4>
                {{ $t('reservation.menu.title')}}
                </h4>
            </div>
            <div class="body-sidebar">
                <vs-sidebar-item @click="handleCheckIn" index="1">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_in_icon24.png"/>
                    {{ $t('reservation.menu.checkIn') }}
                </vs-sidebar-item>
                <vs-sidebar-item v-if="paramsDataStatusCode == global.reservationStatus.new || paramsDataStatusCode == global.reservationStatus.waitList" @click="handleSetWaitList()" index="2">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/wait_list_icon24.png"/>
                    {{(paramsDataStatusCode == global.reservationStatus.new ? $t('reservation.menu.setAsWaitList') : (paramsDataStatusCode == global.reservationStatus.waitList ? $t('reservation.menu.unsetWaitList') : ''))}}
                </vs-sidebar-item>
                <vs-sidebar-item @click="showCancelReservation(global.reservationStatus.cancel); credentialTitle = $t('credential.title.cancelReservation') + reservationNumber" index="3">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/cancel_icon24.png"/>
                    {{ $t('reservation.menu.cancel')}}
                </vs-sidebar-item>
                <vs-sidebar-item @click="showCancelReservation(global.reservationStatus.noShow); credentialTitle = $t('credential.title.noShowReservation') + reservationNumber" index="4">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/no_show_icon24.png"/>
                    {{ $t('reservation.menu.noShow')}}
                </vs-sidebar-item>
                <vs-sidebar-item @click="showCancelReservation(global.reservationStatus.void); credentialTitle = $t('credential.title.voidReservation') + reservationNumber" index="5">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/delete_icon24.png"/>
                    {{ $t('reservation.menu.void')}}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handleAutoAssignRoom()" index="6">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/auto_assign_icon24.png"/>
                    {{ $t('reservation.menu.autoAssignRoom')}}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handleRemoveAssignRoom" index="7">
                    {{ $t('reservation.menu.removeAutoAssignRoom')}}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handleLockReservation" index="8">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" :src="'/images/icons/'+(paramsDataIsLock == '-1' ? 'unlock_icon24.png' : 'lock_icon24.png')"/>
                    {{paramsDataIsLock == '-1' ? $t('reservation.menu.unlockReservation') : $t('reservation.menu.lockReservation') }}
                </vs-sidebar-item>
                <!-- <vs-divider position="center">
                    {{ $t('reservation.menu.print')}}
                </vs-divider>
                <vs-sidebar-item @click="handlePrintRegistrationForm()" index="9">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('reservation.menu.printRegistrationForm')}}
                </vs-sidebar-item>
                <vs-sidebar-item @click="handlePrintConfirmationLetter()" index="10">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('reservation.menu.printConfirmLetter')}}
                </vs-sidebar-item>
                <vs-sidebar-item @click="handlePrintProformaInvoice()" index="11">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('reservation.menu.printProformaInvoice')}}
                </vs-sidebar-item> -->
            </div>
            <div class="footer-sidebar" slot="footer">
            </div>
        </vs-sidebar>
    <!----------- END SIDEBAR OPTION ---------------->
    <!-- PROMPT AUTO ASSIGN -->
        <vs-prompt
            color="primary"
            title="Auto Assign Room"
            accept-text="Ready"
            cancel-text="All"
            @accept="autoAssignRoom(1)"
            @cancel="autoAssignRoom(0)"
            :active.sync="showAutoAssign">
            <div class="con-exemple-prompt">
                {{ $t('reservation.popup.selectRoomStatus')}}
            </div>
        </vs-prompt>
    <!-- PROMPT AUTO ASSIGN -->
    <!--------- START PROMPT CREDENTIAL----------->
     <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="isCredential"
            :isReason="isReason"
            :title="credentialTitle"
            @acceptCredential="acceptCredential"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @input="(newValue)=>{ credential = newValue }"/>
<!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import RegistrationForm from '@/views/pages/components/registrationForm/RegistrationForm.vue';
import Credential from '@/views/pages/components/Credential';

import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formConfig, sidebarConfig } from '@/utils/formConfig.js';
import '@sass/vuexy/components/datepicker.scss';

// <!------------------additional element---------------------->
import IconLockRenderer from '@/views/pages/components/ag_grid-framework/lock_icon.js';
import ExpectedArrivalRenderer from '@/views/pages/components/ag_grid-framework/expected_arrival.js';
import ExpectedDepartureRenderer from '@/views/pages/components/ag_grid-framework/expected_departure.js';
import RoomStatusRenderer from '@/views/pages/components/ag_grid-framework/hk_status.js';
// ------for format----- //
import { formatNumber, formatDate, formatDateTime, formatDateDatabase } from '@/utils/format.js';
import { asyncForEach } from '@/utils/general.js';
// <!------------------end additional element---------------------->
import ReservationResource from '@/api/reservation/reservation';
import GuestGroupResource from '@/api/reservation/guestGroup';
import TransactionResource from '@/api/transaction';
import MasterFolioResource from '@/api/masterFolio';
import DepositResource from '@/api/reservation/deposit';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import IconStatusRenderer from './components/reservation-status.js';
import GroupCheckInForm from './components/GroupCheckInForm';
import CancelReservation from './components/CancelReservation';
import FilterHeader from './components/FilterHeader';

const masterFolioResource = new MasterFolioResource();
const transactionResource = new TransactionResource();
const guestGroupResource = new GuestGroupResource();
const reservationResource = new ReservationResource();
const depositResource = new DepositResource();

export default {
    name: 'Reservation',
    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        GroupCheckInForm,
        RegistrationForm,
        Credential,
        CancelReservation,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '14',
            searchFilterData: [
                { text: this.$t('common.filter.status'), value: '0' },
                { text: this.$t('common.filter.reservationBy'), value: '1' },
                { text: this.$t('common.filter.address'), value: '2' },
                { text: this.$t('common.filter.state'), value: '3' },
                { text: this.$t('common.filter.country'), value: '4' },
                { text: this.$t('common.filter.phone'), value: '5' },
                { text: this.$t('common.filter.fax'), value: '6' },
                { text: this.$t('common.filter.documentNumber'), value: '7' },
                { text: this.$t('common.filter.bookingCode'), value: '8' },
                { text: this.$t('common.filter.note'), value: '9' },
                { text: this.$t('common.filter.hkNote'), value: '10' },
                { text: this.$t('common.filter.roomStatus'), value: '11' },
                { text: this.$t('common.filter.insertBy'), value: '12' },
                { text: this.$t('common.filter.cancelBy'), value: '13' },
                { text: this.$t('common.filter.fullName'), value: '14' },
                { text: this.$t('common.filter.number'), value: '15' },
                { text: this.$t('common.filter.room'), value: '16' },
                { text: this.$t('common.filter.roomType'), value: '17' },
                { text: this.$t('common.filter.bedType'), value: '18' },
                { text: this.$t('common.filter.roomRate'), value: '19' },
                { text: this.$t('common.filter.taVoucher'), value: '20' },
                { text: this.$t('common.filter.group'), value: '21' },
                { text: this.$t('common.filter.company'), value: '22' },
                { text: this.$t('common.filter.market'), value: '23' },
                { text: this.$t('common.filter.billInstruction'), value: '24' },
                { text: this.$t('common.filter.lastUpdate'), value: '25' },
            ],

            // form config
            rowMarginBottom: formConfig.rowMarginBottom,
            sidebarConfig,
            // query data search
            limitPageSize: 0,
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
                filter: [],
            },
            // Ag-Grid
            columnDefs: null,
            rowData: null,
            pinnedBottomRowData: null,
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
            // Parameter From Child
            idData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            modalGroupCheckIn: false,
            showAutoAssign: false,
            // ------------------need setting manual-----------------//
            vDeposit: {}, // deposit
            reservationNumber: '',
            sidebarOption: false,
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            accounts: [],
            dataLookupDeposit: {},
            // ------CREDENTIAL-------//
            activeCredentialPrompt: false,
            credentialTitle: '',
            specialAccessType: 1000,
            isCredential: false,
            isReason: false,
            credential: {
                user: '',
                pass: '',
            },
            paramsData: '',
            paramsDataStatusCode: '',
            paramsDataIsLock: '',
            groupCheckIn: false,
            groupList: [],
            listFolio: [],
            reservationNumberList: [],
            reservationGroupList: [],
            masterFolio: null,
            sideBarDestroy: false,
            // ------------------end need setting manual-----------------//
            reservationStatus: '',
            unlockReservationStatus: '',
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightReservation,
        };

        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 110, },
            { headerName: this.$t('reservation.table.roomStatusIcon'), width: 40, enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, field: 'RoomStatus', cellStyle: { textAlign: 'center' }, cellRenderer: 'roomStatusRenderer' },
            { headerName: this.$t('reservation.table.isLockIcon'), field: 'is_lock', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, width: 30, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconLockRenderer' },
            { headerName: this.$t('reservation.table.reservationStatus'), field: 'ReservationStatus', width: 110 },
            { headerName: this.$t('reservation.table.fullName'), field: 'FullName', width: 230 },
            { headerName: this.$t('reservation.table.reservationNumber'), field: 'reservation_number', width: 90 },
            { headerName: this.$t('reservation.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('reservation.table.arrivalDate'), field: 'DateArrival', width: 100, valueFormatter: formatDate, cellStyle: { textAlign: 'center' }, cellRenderer: 'expectedArrivalRenderer' },
            { headerName: this.$t('reservation.table.estimateTimeArrival'), field: 'TimeArrival', width: 112 },
            { headerName: this.$t('reservation.table.departureDate'), field: 'DateDeparture', width: 100, valueFormatter: formatDate, cellStyle: { textAlign: 'center' }, cellRenderer: 'expectedDepartureRenderer' },
            { headerName: this.$t('reservation.table.estimateTimeDeparture'), field: 'TimeDeparture', width: 130 },
            { headerName: this.$t('reservation.table.roomType'), field: 'RoomType', width: 180 },
            { headerName: this.$t('reservation.table.deposit'), field: 'Deposit', width: 110, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.roomRate'), field: 'RoomRate', width: 180 },
            { headerName: this.$t('reservation.table.weekdayRate'), field: 'weekday_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.weekendRate'), field: 'weekend_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.status'), width: 110, field: 'status_code', cellStyle: { textAlign: 'center' }, cellRenderer: 'iconStatusRenderer' },
            { headerName: this.$t('reservation.table.reservationBy'), field: 'reservation_by', width: 180 },
            { headerName: this.$t('reservation.table.market'), field: 'market', width: 150 },
            { headerName: this.$t('reservation.table.guestGroup'), field: 'GuestGroup', width: 200 },
            { headerName: this.$t('reservation.table.bookingCode'), field: 'booking_code', width: 130 },
            { headerName: this.$t('reservation.table.company'), field: 'Company', width: 110 },
            { headerName: this.$t('reservation.table.discount'), field: 'Discount', width: 110, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('reservation.table.percentOrAmount'), field: 'DiscountPercent', width: 110 },
            { headerName: this.$t('reservation.table.adult'), field: 'adult', width: 80 },
            { headerName: this.$t('reservation.table.child'), field: 'child', width: 80 },
            { headerName: this.$t('reservation.table.billInstruction'), field: 'BillInstruction', width: 250 },
            { headerName: this.$t('reservation.table.note'), field: 'notes', width: 200 },
            { headerName: this.$t('reservation.table.hkNote'), field: 'hk_note', width: 200 },
            { headerName: this.$t('reservation.table.address'), field: 'Address', width: 250 },
            { headerName: this.$t('reservation.table.state'), field: 'State', width: 150 },
            { headerName: this.$t('reservation.table.company'), field: 'Country', width: 180 },
            { headerName: this.$t('reservation.table.nationality'), field: 'Nationality', width: 180 },
            { headerName: this.$t('reservation.table.phone'), field: 'Phone', width: 110 },
            { headerName: this.$t('reservation.table.fax'), field: 'fax', width: 110 },
            { headerName: this.$t('reservation.table.documentNumber'), field: 'document_number', width: 110 },
            { headerName: this.$t('reservation.table.voucherNumberTA'), field: 'voucher_number_ta', width: 180 },
            { headerName: this.$t('reservation.table.firstInsert'), field: 'first_insert', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatDateTime },
            { headerName: this.$t('reservation.table.insertBy'), field: 'insert_by', width: 110 },
            { headerName: this.$t('reservation.table.cancelDate'), field: 'cancel_date', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatDateTime },
            { headerName: this.$t('reservation.table.cancelBy'), field: 'cancel_by', width: 110 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            iconLockRenderer: IconLockRenderer,
            iconStatusRenderer: IconStatusRenderer,
            roomStatusRenderer: RoomStatusRenderer,
            expectedArrivalRenderer: ExpectedArrivalRenderer,
            expectedDepartureRenderer: ExpectedDepartureRenderer,
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
        this.rowSelection = 'multiple';
        this.rowModelType = 'serverSide';
        this.limitPageSize = this.global.limitDefaultPageSize;
    },

    methods: {
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
                this.reservationNumber = this.paramsData ? this.paramsData.reservation_number : '';
                this.paramsDataStatusCode = this.paramsData ? this.paramsData.status_code : '';
                this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.insert'),
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showForm('', this.global.modeData.insert),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.edit),
                },
                // {
                //     name: this.$t('common.contextMenu.duplicate'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('duplicate_icon24'),
                //     action: () => this.handleDuplicate(this.paramsData),
                // },
                'separator',
                {
                    name: this.$t('common.contextMenu.checkIn'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('check_in_icon24'),
                    action: () => this.handleCheckIn(),
                },
                {
                    name: (this.paramsDataStatusCode == this.global.reservationStatus.new ? this.$t('common.contextMenu.setWaitList') : (this.paramsDataStatusCode == this.global.reservationStatus.waitList ? this.$t('common.contextMenu.unsetWaitList') : '')),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('wait_list_icon24'),
                    action: () => this.handleSetWaitList(),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.cancel'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('cancel_icon24'),
                    action: () => this.showCancelReservation(this.global.reservationStatus.cancel),
                },
                {
                    name: this.$t('common.contextMenu.noShow'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('no_show_icon24'),
                    action: () => this.showCancelReservation(this.global.reservationStatus.noShow),
                },
                {
                    name: this.$t('common.contextMenu.void'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.showCancelReservation(this.global.reservationStatus.void),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.autoAssignRoom'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('auto_assign_ready_icon24'),
                    action: () => { this.handleAutoAssignRoom() },
                },
                {
                    name: this.$t('common.contextMenu.removeAutoAssignRoom'),
                    disabled: !this.paramsData,
                    action: () => this.handleRemoveAssignRoom(),
                },
                {
                    name: this.paramsDataIsLock == '-1' ? this.$t('common.contextMenu.unlockReservation') : this.$t('common.contextMenu.lockReservation'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid(this.paramsDataIsLock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
                    action: () => this.handleLockReservation(),
                },
                // 'separator',
                // {
                //     name: this.$t('common.contextMenu.printRegistrationForm'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('print_icon24'),
                //     action: () => this.handlePrintRegistrationForm(),
                // },
                // {
                //     name: this.$t('common.contextMenu.printConfirmLetter'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('print_icon24'),
                //     action: () => this.handlePrintConfirmationLetter(),
                // },
                // {
                //     name: this.$t('common.contextMenu.printProformaInvoice'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('print_icon24'),
                //     action: () => this.handlePrintProformaInvoice(),
                // },
                // 'separator',
                // {
                //     name: this.$t('common.contextMenu.trackingData'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('tracking_icon24'),
                //     action: () => this.showForm(this.paramsData, 2),
                // },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                const selectedRow = this.gridApi.getSelectedRows();
                this.getReservationNumber(selectedRow);
                let count = 0;

                this.reservationNumberList.forEach((element) => {
                    if (element == vm.paramsData.reservation_number) {
                        count += 1;
                    }
                });
                if (count == 0) {
                    vm.gridApi.forEachNode((node) => {
                        if (node.data.reservation_number == vm.paramsData.reservation_number) {
                            node.setSelected(true, true);
                        }
                    });
                }
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.showForm(this.paramsData, this.global.modeData.edit);
        },
        // ------------------need setting manual for crud-----------------//

        async checkReservationStatusLock() {
            this.$loadingIndicator(this);
            const status = await this.getReservationStatus();
            this.resetCredential();
            if (status.is_lock === '-1' && status.user_id !== this.global.userInfo.code) {
                this.credentialTitle = this.$t('credential.title.unlockReservation');
                this.specialAccessType = this.global.accessSpecialOrder.unlockReservation;
                this.isReason = false;
                this.isCredential = true;
                this.activeCredentialPrompt = true;
                return true;
            }
            return false;
        },

        acceptCredential() {
            if (this.specialAccessType === this.global.accessSpecialOrder.unlockReservation) {
                if(this.unlockReservationStatus == 1) {
                    this.$refs.registrationForm.showForm(this.idData, this.modeDataValue, true, this.reservationStatus );
                } else if (this.unlockReservationStatus == 2) {
                    this.lockReservation();
                }
            }
            this.unlockReservationStatus = 0;
        },

        resetCredential() {
            this.specialAccessType = 1000;
            this.isReason = false;
            this.isCredential = true;
            this.credential = {
                user: '',
                pass: '',
            };
        },

        // --------------------GROUP CHECK IN--------------------//
        handleGroupCheckIn() {
            this.groupCheckIn = !this.groupCheckIn;
            if (this.groupCheckIn) {
                this.getGroupList();
            }
        },

        async getGroupList() {
            const { data } = await guestGroupResource.list();
            this.groupList = data;
        },

        async getFolioList(type, number) {
            const params = { type, number };
            const { data } = await transactionResource.listFolio(params);
            this.listFolio = data;
        },

        async getRoutingAccount() {
            const params = {
                group: this.global.groupAccount.charge,
            };
            try {
                const { data } = await transactionResource.account(params);
                this.accounts = data;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getMasterFolio() {
            const dataArray = this.gridApi.getSelectedRows();
            if (dataArray.length > 0) {
                const params = {
                    group: dataArray[0].group_code,
                };
                let { data } = await masterFolioResource.getMasterFolioGroup(params);
                if (data === '') {
                    data = null;
                }
                this.masterFolio = data;
                return data;
            }
            return '';
        },

        async getReservationNumber(dataArray) {
            this.reservationNumberList = [];
            if (dataArray.length > 0) {
                const resvNumber = dataArray[0].reservation_number;
                this.reservationNumber = resvNumber;
                this.reservationNumberList = dataArray.map(result => result.reservation_number);
            }
        },

        async getReservationGroupList() {
            const params = {
                reservation_number: this.reservationNumberList,
            };
            try {
                const { data } = await reservationResource.reservationGroupList(params);
                this.reservationGroupList = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async handleCreateMasterFolio(data) {
            const isExist = await this.isFolioGroupExist();
            if (isExist === true) {
                this.$vs.dialog({
                    color: 'danger',
                    type: 'confirm',
                    title: this.$t('reservation.popup.existMasterFolio.title'),
                    text: this.$t('reservation.popup.existMasterFolio.text'),
                    acceptText: this.$t('reservation.popup.existMasterFolio.acceptText'),
                    cancelText: this.$t('reservation.popup.existMasterFolio.cancelText'),
                    accept: (() => {
                        this.createMasterFolio(data);
                    }),
                });
            } else {
                this.createMasterFolio(data);
            }
        },

        async isFolioGroupExist() {
            const params = {
                reservation_number: this.reservationNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await masterFolioResource.isFolioGroupExist(params);
                return data;
            } catch (error) {
                $alert.errorFetchDataAlert();
                return false;
            }
        },

        async createMasterFolio(datax) {
            const params = {
                reservation_number: this.reservationNumber,
                night: datax.night,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await masterFolioResource.createMasterFolioGroup(params);
                await this.getFolioList(this.global.folioType.masterFolio, null);
                setTimeout(() => { this.getMasterFolio(); }, 200);
                $dialog.dialogInsertMasterSuccessfully(null, data);
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getExchangeRate(datax) {
            const params = {
                currency_code: datax || this.vDeposit.currency_code,
            };
            try {
                const { data } = await depositResource.exchangeRate(params);
                this.vDeposit.exchange_rate = data;
                this.vDeposit.amount = (this.vDeposit.amount_foreign * this.vDeposit.exchange_rate);
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getLookupDeposit() {
            try {
                const { data } = await depositResource.lookup();
                this.dataLookupDeposit = data;
                if (this.vDeposit.currency_code) {
                    this.getExchangeRate();
                }
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert(error);
            }
        },

        async handleSaveCheckInGroup(routing) {
            const resvNumber = this.reservationNumberList;
            const params = {
                reservation_number: resvNumber,
                routing_account: routing,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await reservationResource.checkIn(params);
                $dialog.information(`Success: ${data.status.success}\r\n Failed: ${data.status.failed}, Please see detail on guest group list!`);
                const start = async () => {
                    await asyncForEach(data.data, async (element) => {
                        this.$refs.groupCheckInForm.updateCheckInResult(element.number, element.status);
                    });
                };
                start();
                this.refreshData(this.search);
            } catch (error) {
                $alert.errorSaveDataAlert();
            }
        },

        // ------------------END GROUP CHECK IN------------------//

        // ------------------ RESERVATION CRUD------------------//

        async getReservationList(search) {
            try {
                let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                const { data } = await reservationResource.list(search);
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'reservation_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        refreshData(search, hideLoadingIndicator) {
            this.search = search;
            if(!hideLoadingIndicator) this.$loadingIndicator(this);
            this.getReservationList(search);
        },

        async showForm(idData, modeData, isReservation, reservationStatus) {
            this.idData = idData;
            this.paramsData = idData;
            this.modeDataValue = modeData;
            this.reservationStatus = reservationStatus;
            if (modeData === this.global.modeData.edit && reservationStatus !== this.global.reservationStatus.checkIn) {
                if (await this.checkReservationStatusLock()) {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    this.unlockReservationStatus = 1;
                    return;
                }
            }
            this.$refs.registrationForm.showForm(idData, modeData, isReservation, reservationStatus);
        },

        //  END DATEPICKER CONFIGURATION //

        // ------------------START SIDEBARR OPTIONS-------------------------------//
        handleSidebarOption(data) {
            this.reservationNumber = data.reservation_number;
            this.paramsData = data;
            this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
            this.paramsDataStatusCode = this.paramsData ? this.paramsData.status_code : '';
            if(this.sidebarOption){
                this.sidebarOption = false;
                setTimeout(()=>{
                    this.sidebarOption = true;
                }, 100)
            } else {
                this.sidebarOption = true;
            }
            // this.handleRowRightClicked();
        },

        // ------------------END SIDEBARR OPTIONS-------------------------------//

        // ------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
        showCancelReservation(status) {
            this.$refs.cancelReservation.showCancelReservation(status, this.reservationNumber);
            this.$nextTick(() => {
                this.modeDataValue = this.global.modeData.delete;
                getRowIndexBefore(this);
            });
            this.sidebarOption = false;
        },
        // ------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//

        // ----------------START OTHER OPTION------------------//
        async handleCheckIn() {
            this.sidebarOption = false;
            let status = {};
            const selected = await this.gridApi.getSelectedRows();
            if (this.groupCheckIn) {
                await this.getReservationNumber(selected);
                if (this.search.group && this.reservationNumberList.length > 0) {
                    this.$loadingIndicator(this)
                    await this.getFolioList(this.global.folioType.masterFolio, null);
                    this.getLookupDeposit();
                    this.getRoutingAccount();
                    this.getMasterFolio(); // set master folio group exist
                    await this.getReservationGroupList();
                    this.$refs.groupCheckInForm.resetRouting();
                    this.modalGroupCheckIn = true;
                } else {
                    $dialog.selectField();
                }
            } else {
                this.$loadingIndicator(this);
                status = await this.getReservationStatus();
                // this.$vs.loading.close('#layout--main>.con-vs-loading');
                let dateArrival = formatDateDatabase(status.DateArrival);
                if (dateArrival == this.auditDate) {
                    if (status.room_number == '' || status.room_number == null || status.room_number == undefined || status.room_number == ' ') {
                        $dialog.information(this.$t('reservation.popup.pleaseAssignRoom'));
                        this.$closeLoadingIndicator(this);
                    } else if (status.room_status !== this.global.roomStatus.ready) {
                        $dialog.information(`Room ${status.room_number} not Ready`);
                        this.$closeLoadingIndicator(this);
                    } else {
                        this.showForm(this.paramsData, this.global.modeData.edit, true, this.global.reservationStatus.checkIn)
                    }
                } else {
                    $dialog.information(this.$t('reservation.popup.dateNotEqualWithAuditDate'));
                    this.$closeLoadingIndicator(this);
                }
            }
        },

        handleDuplicate(params) {
            this.$refs.registrationForm.handleDuplicate(params);
        },

        async getReservationStatus() {
            const { data } = await reservationResource.reservationStatus(this.paramsData.reservation_number);
            return data;
        },

        handleSetWaitList() {
            this.sidebarOption = false;
            $dialog.confirmation(this, 'onAcceptSetWaitList');
        },

        onAcceptSetWaitList() {
            if(this.paramsData) {
                if (this.paramsData.status_code == this.global.reservationStatus.new) {
                    this.setWaitList();
                } else if (this.paramsData.status_code == this.global.reservationStatus.waitList) {
                    this.unsetWaitList();
                }
            }
        },

        async setWaitList() {
            const params = {
                number: this.reservationNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await reservationResource.setWaitList(params);
                this.refreshData(this.search);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.waitList.${data}`));
                }
            } catch (error) {
                $alert.errorSaveDataAlert();
            }
        },

        async unsetWaitList() {
            const params = {
                number: this.reservationNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                const { data } = await reservationResource.unsetWaitList(params);
                this.refreshData(this.search);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.waitList.${data}`));
                }
            } catch (error) {
                $alert.errorSaveDataAlert();
            }
        },

        async handleAutoAssignRoom(status) {
            const selected = await this.gridApi.getSelectedRows();
            await this.getReservationNumber(selected);
            if(this.reservationNumberList.length == 1) {
                this.$loadingIndicator(this);
                const statusX = await this.getReservationStatus();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                if (statusX.room_number == null) {
                    this.sidebarOption = false;
                    if (statusX.is_lock === '-1') {
                        $dialog.informationError(this.$t('message.reservationIsLock'));
                        return;
                    }
                    this.showAutoAssign = true;
                } else {
                    $dialog.informationError(this.$t('responseStatus.autoAssignRoom.1'));
                }
            } else if (this.reservationNumberList.length > 1) {
                this.showAutoAssign = true;
            }
        },

        async autoAssignRoom(status) {
            const params = {
                ready: status, // 0=>all, 1=>ready
                reservation_number: this.reservationNumberList,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                const { data } = await reservationResource.autoAssignRoom(params);
                await this.refreshData(this.search);
                if (this.reservationNumberList.length == 1) {
                    if (data[0].status == 0) {
                        $alert.acceptAlertSucces();
                        return;
                    }
                    if (data[0].status > 0) {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                        $dialog.information(this.$t(`responseStatus.autoAssignRoom.${data[0].status}`));
                    }
                } else if (this.reservationNumberList.length > 1){

                }
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                $alert.errorSaveDataAlert(message);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async handleRemoveAssignRoom() {
            const selected = await this.gridApi.getSelectedRows();
            await this.getReservationNumber(selected);
            if(this.reservationNumberList.length == 1) {
                this.$loadingIndicator(this);
                const statusX = await this.getReservationStatus();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.sidebarOption = false;
                if (statusX.room_number > 0) {
                    if (statusX.is_lock === '-1') {
                        $dialog.informationError(this.$t('message.reservationIsLock'));
                        return;
                    }
                    $dialog.confirmation(this, 'removeAssignRoom');
                }
            } else {
                $dialog.confirmation(this, 'removeAssignRoom');
            }
        },

        async removeAssignRoom() {
            if (this.paramsData.room_number !== '') {
                const params = {
                    reservation_number: this.reservationNumberList,
                    is_remove: '-1',
                    user_id: this.global.userInfo.code,
                };
                try {
                    this.$loadingIndicator(this)
                    await reservationResource.autoAssignRoom(params);
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                } catch (error) {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    $alert.errorSaveDataAlert(message);
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }
            }
        },

        async handleLockReservation() {
            this.sidebarOption = false;
            this.$loadingIndicator(this);
            if (await this.checkReservationStatusLock()) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.unlockReservationStatus = 2;
                return;
            }
            this.$vs.loading.close('#layout--main>.con-vs-loading');
            $dialog.confirmation(this, 'lockReservation');
        },

        async lockReservation() {
            const params = {
                reservation_number: this.reservationNumber,
                is_lock: this.paramsData.is_lock == '0' ? '-1' : '0',
                user_id: this.global.userInfo.code,
            };
            try {
                await reservationResource.lockReservation(params);
                this.refreshData(this.search);
            } catch (error) {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                $alert.errorFetchDataAlert(message);
            }
        },

        // ----------------END OTHER OPTION------------------//

        // PRINT,

        handlePrintRegistrationForm() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.registrationFormReservation}&reservationNumber=${this.reservationNumber}&template=${this.global.stimulsoftReportFileDirectory.registrationFormReservation}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintProformaInvoice() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.proformaInvoice}&reservationNumber=${this.reservationNumber}&template=${this.global.stimulsoftReportFileDirectory.proformaInvoice}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintConfirmationLetter() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.confirmationLetter}&reservationNumber=${this.reservationNumber}&template=${this.global.stimulsoftReportFileDirectory.confirmationLetter}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintReceipt() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.receiptDeposit}&guestDepositId=${this.paramsData.idLog}&template=${this.global.stimulsoftReportFileDirectory.receiptDeposit}` });
            window.open(newTabReport.href, '_blank');
        },
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
        ccAdmin() { return this.$store.getters.cCAdmin; },
    },
    watch: {
        sidebarOption() {
            if (!this.sidebarOption) {
                document.getElementById('main-container').click();
            }
        },
    },
    beforeRouteLeave(to, from, next) {
        if (this.modalGroupCheckIn) {
            this.back();
            next(false);
        } else {
            next();
        }
    },
};

</script>
