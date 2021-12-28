<template>
    <div class="guest-in-house">
        <navigation-header :insertButton="true" @showModal="showForm" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}">{{ $t('button.walkIn') }}</navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
                ref="mainContainer"
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :enableRangeSelection="false"
                :statusBar="statusBar"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :rowData="rowData"
                :defaultColDef="global.defColDef"
                :pinnedBottomRowData="pinnedBottomRowData"
                :getContextMenuItems="getContextMenu"
                @rowDoubleClicked="handleRowDobleClicked"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
        </vx-card>
<!-----------start need setting manual--------------->
    <registration-form ref="registrationForm" @refreshData="$refs.filterHeader.onRefreshData()" :isReservation='false' :isGuestInHouse="true"></registration-form>
    <!----------- START SIDEBAR OPTION -------------->
        <vs-sidebar hidden-background position-right parent="#main-container" default-index="1"  color="primary" class="sidebarx" spacer v-model="sidebarOption">
            <div class="header-sidebar" slot="header">
                <h4>
                {{ $t('guestInHouse.menu.title') }}
                </h4>
            </div>
            <div class="body-sidebar">
                 <vs-sidebar-item @click="handleTransaction" index="1">
                     <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/transaction_icon24.png"/>
                    {{ $t('guestInHouse.menu.transaction') }}
                </vs-sidebar-item>
                <!-- <vs-sidebar-item index="2" icon="gavel"><img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_in_icon24.png"/>
                    KEYLOCK
                </vs-sidebar-item> -->
                <vs-sidebar-item @click="handleComplimentHu(global.roomStatus.compliment)" index="3">
                    <img v-if="paramsDataComplimentHu !== global.roomStatus.compliment" :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" :src="'/images/icons/compliment_icon24.png'"/>
                    <span v-if="paramsDataComplimentHu === global.roomStatus.compliment">DEFAULT GUEST</span>
                    <span v-else>{{ $t('guestInHouse.menu.compliment') }}</span>
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handleComplimentHu(global.roomStatus.houseUse)" index="4">
                    <img v-if="paramsDataComplimentHu !== global.roomStatus.houseUse" :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/house_use_icon24.png"/>
                    <span v-if="paramsDataComplimentHu === global.roomStatus.houseUse">{{ $t('guestInHouse.menu.defaultGuest') }}</span>
                    <span v-else>{{ $t('guestInHouse.menu.houseUse') }}</span>
                </vs-sidebar-item>
                <!-- <vs-sidebar-group title="Other">
                    <vs-sidebar-item @click="handlePostingRoomCharge()" index="2.1">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/autopost_icon24.png"/>
                        {{ $t('guestInHouse.menu.autoPostingRoomCharge') }}
                    </vs-sidebar-item>
                    <vs-sidebar-item @click="handleMoveRoom()" index="2.2">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/move_room_icon24.png"/>
                        {{ $t('guestInHouse.menu.moveRoom') }}
                    </vs-sidebar-item>
                    <vs-sidebar-item @click="handleSwitchRoom()" index="2.3">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/switch_room_icon24.png"/>
                        {{ $t('guestInHouse.menu.switchRoom') }}
                    </vs-sidebar-item>
                    <vs-sidebar-item @click="handleLockFolio('-1')" index="2.4">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" :src="'/images/icons/'+(paramsDataIsLock == '-1' ? 'unlock_icon24.png' : 'lock_icon24.png')"/>
                        <span v-if="paramsDataIsLock == '-1'">{{ $t('guestInHouse.menu.unlock') }}</span>
                        <span v-else>{{ $t('guestInHouse.menu.lock') }}</span>
                    </vs-sidebar-item>
                    <vs-sidebar-item @click="handleIncognito('-1')" index="2.5">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/incognito_icon24.png"/>
                        <span v-if="paramsDataIsIncognito == true">{{ $t('guestInHouse.menu.removeIncognito') }}</span>
                        <span v-else>{{ $t('guestInHouse.menu.setIncognito') }}</span>
                    </vs-sidebar-item>
                    <vs-sidebar-item @click="handleCancelCheckIn()" index="2.6">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/cancel_icon24.png"/>
                        {{ $t('guestInHouse.menu.cancelCheckIn') }}
                    </vs-sidebar-item>
                    <vs-sidebar-item index="2.7" icon="verified_user"><img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_in_icon24.png"/>
                        {{ $t('guestInHouse.menu.message') }}
                    </vs-sidebar-item>
                    <vs-sidebar-item index="7" icon="verified_user"><img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_in_icon24.png"/>
                        {{ $t('guestInHouse.menu.toDo') }}
                    </vs-sidebar-item>
                </vs-sidebar-group> -->

                <vs-divider position="center"/>

                <vs-sidebar-item @click="handleCheckOut()" index="5">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_out_icon24.png"/>
                    {{ $t('guestInHouse.menu.checkOut') }}
                </vs-sidebar-item>
                <!-- <vs-divider position="center">{{ $t('guestInHouse.menu.print') }}</vs-divider>
                <vs-sidebar-item @click="handlePrintFolio()" index="6">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('guestInHouse.menu.printFolio') }}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handlePrintRegistrationForm()" index="7">
                     <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('guestInHouse.menu.printRegistrationForm') }}
                </vs-sidebar-item> -->
            </div>
            <div class="footer-sidebar" slot="footer">

            </div>
        </vs-sidebar>
    <!----------- END SIDEBAR OPTION ---------------->
    <!--------- START POPUP MOVE ROOM-------------------->
    <dialog-prompt button1
        :title="$t('guestInHouse.moveRoom.title')+': '+vModel.room_number"
        :width="500"
        :active="modalMoveRoom"
        :idButton1="'button-save-move'"
        :buttonDisabled1="btnSaveMoveDisabled"
        @button1="handleSaveMoveRoom()"
        @close="val=>modalMoveRoom = val">
        <template #body>
            <div>
                <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                    <div class="wrap-form-select w-full md:w-1/2 required">
                        <vs-row><label>{{$t('guestInHouse.moveRoom.roomType')}}</label></vs-row>
                        <vs-row>
                            <v-select class="w-full" id="form-select" @input="getRoomNumber(null,vMoveRoom); resetOptionsChangeMoveRoom=true" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.room_type" v-model="vMoveRoom.room_type_code" v-validate="'required'" name="room type" data-vv-scope="moveRoom"></v-select>
                            <span class="error-text text-danger" v-show="errors.has('moveRoom.room type')">{{ errors.first('moveRoom.room type') }}</span>
                        </vs-row>
                    </div>
                    <div class="wrap-form-select w-full md:w-1/2 required">
                        <vs-row><label>{{$t('guestInHouse.moveRoom.bedType')}}</label></vs-row>
                        <vs-row>
                            <v-select  class="w-full" id="form-select" @input="getRoomNumber('bed_type',vMoveRoom)" :resetOnOptionsChange="resetOptionsChangeMoveRoom" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.bed_type" v-model="vMoveRoom.bed_type_code" v-validate="'required'" name="bed type" data-vv-scope="moveRoom"/>
                            <span class="error-text text-danger" v-show="errors.has('moveRoom.bed type')">{{ errors.first('moveRoom.bed type') }}</span>
                        </vs-row>
                    </div>
                </vs-row>
                <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                    <div class="wrap-form-select w-full md:w-1/2 required">
                        <vs-row><label>{{$t('guestInHouse.moveRoom.room')}}</label></vs-row>
                        <vs-row>
                            <v-select class="w-full" id="form-select" :resetOptionsChange="true" :clearable="false" label="number" :reduce="value => value.number" :options="roomNumber" v-model="vMoveRoom.new_room_number" v-validate="'required'" name="room number" data-vv-scope="moveRoom"></v-select>
                            <span class="error-text text-danger" v-show="errors.has('moveRoom.room number')">{{ errors.first('guestInHouse.moveRoom.room number') }}</span>
                        </vs-row>
                    </div>
                </vs-row>
                <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                    <input-number disabled class="w-full md:w-1/2" :label="$t('guestInHouse.moveRoom.currentWeekday')" v-model="vMoveRoom.current_weekday"/>
                    <input-number disabled class="w-full md:w-1/2" :label="$t('guestInHouse.moveRoom.currentWeekend')" v-model="vMoveRoom.current_weekend"/>
                </vs-row>
                <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                    <div class="wrap-form-select w-full md:w-1/2 required">
                        <vs-row>
                            <vs-row><label>{{$t('guestInHouse.moveRoom.roomRate')}}</label></vs-row>
                            <v-select  class="w-full" id="form-select" @input="getDailyRate(vMoveRoom); handleChangeRate()" :resetOnOptionsChange="resetOptionsChangeMoveRoom" :clearable="false" label="name" :reduce="value => value.code" :options="dataLookup.room_rate" v-model="vMoveRoom.room_rate_code" v-validate="'required'" name="room rate" data-vv-scope="moveRoom"/>
                            <span class="error-text text-danger" v-show="errors.has('moveRoom.room rate')">{{ errors.first('moveRoom.room rate') }}</span>
                        </vs-row>
                    </div>
                    <div class="wrap-form-select w-full md:w-1/2">
                        <vs-row>.</vs-row>
                        <vs-row class="wrap-form-select w-full">
                            <vs-checkbox class="w-full" style="padding:0px; margin: inherit;" v-model="vMoveRoom.change_rate" @input="handleChangeRate()">{{ $t('guestInHouse.moveRoom.changeRate') }}</vs-checkbox>
                        </vs-row>
                    </div>
                </vs-row>
                <vs-row :class="rowMarginBottom" vs-type="flex" vs-justify="space-between">
                    <input-number disabled class="w-full md:w-1/2" :label="$t('guestInHouse.moveRoom.newWeekday')" v-model="vMoveRoom.weekday_rate"/>
                    <input-number disabled class="w-full md:w-1/2" :label="$t('guestInHouse.moveRoom.newWeekend')" v-model="vMoveRoom.weekend_rate"/>
                </vs-row>
                <vs-divider>{{$t('guestInHouse.moveRoom.roomStatusMoveRoom')}}</vs-divider>
                <vs-row class="mb-3" vs-type="flex" vs-justify="space-between">
                    <vs-radio v-model="vMoveRoom.room_status" :vs-value=global.roomStatus.ready>{{$t('roomStatus.ready')}}</vs-radio>
                    <vs-radio color="success" v-model="vMoveRoom.room_status" :vs-value=global.roomStatus.clean>{{$t('roomStatus.clean')}}</vs-radio>
                    <vs-radio color="brown" v-model="vMoveRoom.room_status" :vs-value=global.roomStatus.dirty>{{$t('roomStatus.dirty')}}</vs-radio>
                    <!-- <vs-radio disabled color="danger" v-model="vMoveRoom.room_status" :vs-value=global.roomStatus.outOfOrder>{{$t('global.roomStatus.outOfOrder')}}</vs-radio> -->
                </vs-row>
            </div>
        </template>
    </dialog-prompt>
    <!--------- END POPUP MOVE ROOM---------------------->
    <!--------- START POPUP SWITCH ROOM-------------------->
    <dialog-prompt button1
        :title="$t('guestInHouse.switchRoom.title')"
        :width="500"
        :active="modalSwitchRoom"
        :idButton1="'button-save-switch'"
        :buttonDisabled1="btnSaveMoveDisabled"
        @button1="handleSaveSwitchRoom()"
        @close="val=>modalSwitchRoom = val">
        <template #body>
            <div>
                <vs-divider>{{$t('guestInHouse.switchRoom.switchFrom')}}</vs-divider>
                <vs-row vs-type="flex" vs-justify="space-between">
                    <vs-input disabled class="w-full md:w-1/2" :label="$t('guestInHouse.switchRoom.room')" v-model="vSwitchRoom.room_number_from"/>
                    <vs-input disabled class="w-full md:w-1/2" :label="$t('guestInHouse.switchRoom.fullName')" v-model="vSwitchRoom.full_name_from"/>
                </vs-row>
                <vs-row class="mt-3 mb-3" vs-type="flex" vs-justify="space-between">
                    <vs-input disabled class="w-full md:w-1/2" :label="$t('guestInHouse.switchRoom.roomType')" v-model="vSwitchRoom.room_type_from"/>
                    <vs-input disabled class="w-full md:w-1/2" :label="$t('guestInHouse.switchRoom.roomRate')" v-model="vSwitchRoom.room_rate_from"/>
                </vs-row>
                <vs-divider>{{$t('guestInHouse.switchRoom.switchTo')}}</vs-divider>
                <switch-room :data="switchRooms" @selected="value=>Object.assign(vSwitchRoom, ...value)"/>
            </div>
        </template>
    </dialog-prompt>
    <!--------- END POPUP SWITCH ROOM---------------------->
<!-----------end need setting manual----------------->

    <!--------- START PROMPT CREDENTIAL-------------->
        <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="isCredential"
            :isReason="true"
            :title="credentialTitle"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @acceptReason="acceptReason()"
            @input="(newValue)=>{ credential = newValue }"/>
    <!--------- START PROMPT CREDENTIAL-------------->
    </div>
</template>

<script>
import FilterHeader from '@/views/pages/components/header/FilterHeader.vue';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader.vue';
import RegistrationForm from '@/views/pages/components/registrationForm/RegistrationForm.vue';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import { formConfig, sidebarConfig } from '@/utils/formConfig.js';
import Credential from '@/views/pages/components/Credential';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid, addDialogCloseButton } from '@/utils/general.js';
// <!------------------additional element---------------------->
import InputNumber from '@/views/pages/components/Number.vue';
import IconLockRenderer from '@/views/pages/components/ag_grid-framework/lock_icon.js';
import IconCompHuRenderer from '@/views/pages/components/ag_grid-framework/comp_hu_icon.js';
import ExpectedArrivalRenderer from '@/views/pages/components/ag_grid-framework/expected_arrival.js';
import ExpectedDepartureRenderer from '@/views/pages/components/ag_grid-framework/expected_departure.js';
import {
    formatNumber, formatDate, formatDateDatabase, formatDateTimeDatabase,
} from '@/utils/format.js';
// API
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import TransactionResource from '@/api/transaction';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar';
import IconStatusRenderer from '@/views/pages/components/ag_grid-framework/source-status';
import IconIncognitoRenderer from '@/views/pages/components/ag_grid-framework/incognito_icon';
import SwitchRoom from './components/SwitchRoom.vue';

const transactionResource = new TransactionResource();
const guestInHouseResource = new GuestInHouseResource();
// <!------------------end additional element---------------------->
export default {
    name: 'GuestInHouse',

    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        InputNumber,
        SwitchRoom,
        RegistrationForm,
        Credential,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '4',
            searchFilterData: [
                { text: this.$t('common.filter.folioNumber'), value: '0' },
                { text: this.$t('common.filter.reservationNumber'), value: '1' },
                { text: this.$t('common.filter.roomNumber'), value: '2' },
                { text: this.$t('common.filter.roomType'), value: '3' },
                // {text: this.$t('common.filter.transferTo'), value:'reservation.reservation_by'},
                { text: this.$t('common.filter.fullName'), value: '4' },
                { text: this.$t('common.filter.group'), value: '5' },
                { text: this.$t('common.filter.roomRate'), value: '6' },
                { text: this.$t('common.filter.voucherNumber'), value: '7' },
                { text: this.$t('common.filter.voucherNumberTA'), value: '8' },
                { text: this.$t('common.filter.billInstruction'), value: '9' },
                { text: this.$t('common.filter.notes'), value: '10' },
                { text: this.$t('common.filter.hkNote'), value: '11' },
                { text: this.$t('common.filter.state'), value: '12' },
                { text: this.$t('common.filter.country'), value: '13' },
                { text: this.$t('common.filter.phone'), value: '14' },
                { text: this.$t('common.filter.company'), value: '15' },
                { text: this.$t('common.filter.guestType'), value: '16' },
                { text: this.$t('common.filter.transferTo'), value: '17' },
                // { text: this.$t('common.filter.transferBy'), value: '18' },
                { text: this.$t('common.filter.status'), value: '19' },
                { text: this.$t('common.filter.insertBy'), value: '20' },
                { text: this.$t('common.filter.lastUpdate'), value: '21' },
            ],
            // form config
            rowMarginBottom: formConfig.rowMarginBottom,
            sidebarConfig,
            // query data search
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
                filter: [],
            },
            // Ag-Grid
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            pinnedBottomRowData: null,
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
            modePopUp: 0,
            modeDataValueTracking: 0,
            modeChildValue: '',
            modeScheduledRate: 0,
            modeExtraCharge: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            modalMain: false,
            modalChild: false,
            modalCancelReservation: false,
            modalMoveRoom: false,
            modalSwitchRoom: false,

            btnSaveMoveDisabled: false,
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {
                full_name: '',
            },
            // vModel
            vMoveRoom: {}, // move room
            vSwitchRoom: {}, // switch room
            vComplimentStatus: {},
            rate: {
                weekend: 0,
                weekday: 0,
            },
            discount: 0,
            roomNumber: [],
            roomRate: [],
            folioNumber: '',
            readyRoom: true,
            sidebarOption: false,
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            // Data table//
            switchRooms: [],
            resetOptionsChangeMoveRoom: false,
            // ------CREDENTIAL-------//
            activeCredentialPrompt: false,
            credentialTitle: '',
            isCredential: false,
            specialAccessType: 1000,
            credential: {
                user: '',
                pass: '',
            },
            paramsData: null,
            paramsDataComplimentHu: null,
            paramsDataIsIncognito: null,
            paramsDataIsLock: null,
            balance: 0,
            // ------------------end need setting manual-----------------//

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
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, rowGroup: false, cellRenderer: 'actionGrid', colId: 'params', width: 70 },
            { headerName: this.$t('guestInHouse.table.isLockIcon'), field: 'is_lock', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, width: 30, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconLockRenderer' },
            { headerName: this.$t('guestInHouse.table.guestStatusIcon'), field: 'compliment_hu', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, width: 40, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconCompHuRenderer' },
            { headerName: this.$t('guestInHouse.table.incognitoIcon'), field: 'is_incognito', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, width: 40, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconIncognitoRenderer' },
            { headerName: this.$t('guestInHouse.table.fullName'), field: 'FullName', width: 230 },
            { headerName: this.$t('guestInHouse.table.reservationNumber'), field: 'reservation_number', width: 90 },
            { headerName: this.$t('guestInHouse.table.folioNumber'), field: 'folio_number', width: 90 },
            { headerName: this.$t('guestInHouse.table.roomNumber'), field: 'room_number', width: 85 },
            { headerName: this.$t('guestInHouse.table.arrivalDate'), field: 'date_arrival', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('guestInHouse.table.estimateTimeArrival'), field: 'time_arrival', width: 112 },
            { headerName: this.$t('guestInHouse.table.departureDate'), field: 'date_departure', width: 100, cellStyle: { textAlign: 'center' }, cellRenderer: 'expectedDepartureRenderer' },
            { headerName: this.$t('guestInHouse.table.estimateTimeDeparture'), field: 'time_departure', width: 130 },
            { headerName: this.$t('guestInHouse.table.roomType'), field: 'RoomType', width: 180 },
            { headerName: this.$t('guestInHouse.table.balance'), field: 'balance', width: 110, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('guestInHouse.table.roomRate'), field: 'room_rate', width: 180 },
            { headerName: this.$t('guestInHouse.table.weekdayRate'), field: 'weekday_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('guestInHouse.table.weekendRate'), field: 'weekend_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            // { headerName: this.$t('guestInHouse.table.reservationBy'), field: 'reservation_by', width: 200 },
            { headerName: this.$t('guestInHouse.table.company'), field: 'company', width: 110 },
            { headerName: this.$t('guestInHouse.table.group'), field: 'guest_group', width: 110 },
            { headerName: this.$t('guestInHouse.table.adult'), field: 'adult', width: 75 },
            { headerName: this.$t('guestInHouse.table.child'), field: 'child', width: 70 },
            { headerName: this.$t('guestInHouse.table.address'), field: 'Address', width: 200 },
            // { headerName: this.$t('guestInHouse.table.market'), field: 'market', width: 120 },
            { headerName: this.$t('guestInHouse.table.guestType'), field: 'guest_type', width: 120 },
            // { headerName: this.$t('guestInHouse.table.folioStatus'), field: 'folio_status', width: 120 },
            { headerName: this.$t('guestInHouse.table.nationality'), field: 'nationality', width: 120 },
            { headerName: this.$t('guestInHouse.table.state'), field: 'state', width: 120 },
            { headerName: this.$t('guestInHouse.table.country'), field: 'country', width: 120 },
            { headerName: this.$t('guestInHouse.table.billInstruction'), field: 'bill_instruction', width: 200 },
            { headerName: this.$t('guestInHouse.table.note'), field: 'notes', width: 200 },
            { headerName: this.$t('guestInHouse.table.hkNote'), field: 'hk_note', width: 200 },
            { headerName: this.$t('guestInHouse.table.voucherNumber'), field: 'voucher_number', width: 140 },
            { headerName: this.$t('guestInHouse.table.voucherNumberTA'), field: 'voucher_number_ta', width: 160 },
            { headerName: this.$t('guestInHouse.table.insertBy'), field: 'insert_by', width: 110 },
            { headerName: this.$t('guestInHouse.table.status'), width: 110, field: 'folio_number', cellStyle: { textAlign: 'center' }, cellRenderer: 'iconStatusRenderer' },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            iconLockRenderer: IconLockRenderer,
            iconStatusRenderer: IconStatusRenderer,
            iconCompHuRenderer: IconCompHuRenderer,
            iconIncognitoRenderer: IconIncognitoRenderer,
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
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
        this.limitPageSize = this.global.limitDefaultPageSize;

        this.$store.dispatch('getAuditDate');
    },

    methods: {
        onGridReady() {
        },
        // onPinnedRowBottomCount() {
        //     var footerRowsToFloat = document.getElementById('bottom-row-count').value;
        //     var count = Number(footerRowsToFloat);
        //     var rows = createData(count, 'Bottom');
        //     this.gridApi.setPinnedBottomRowData(rows);
        // },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
                this.folioNumber = this.paramsData ? this.paramsData.folio_number : '';
                this.paramsDataComplimentHu = this.paramsData ? this.paramsData.compliment_hu : '';
                this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
                this.paramsDataIsIncognito = this.paramsData ? this.paramsData.is_incognito : '';
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.walkin'),
                    icon: generateIconContextMenuAgGrid('walkin_icon24'),
                    action: () => this.showForm('', this.global.modeData.insert),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.edit),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.transaction'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('transaction_icon24'),
                    action: () => this.handleTransaction(this.paramsData),
                },
                // 'separator',
                // {
                // 	name: this.$t('guestInHouse.keylock'),
                // disabled: !this.paramsData,
                // 	action: () =>
                // },
                {
                    name: this.paramsDataComplimentHu == this.global.roomStatus.compliment ? this.$t('common.contextMenu.defaultGuest') : this.$t('common.contextMenu.compliment'),
                    disabled: !this.paramsData,
                    icon: this.paramsDataComplimentHu == this.global.roomStatus.compliment ? '' : generateIconContextMenuAgGrid('compliment_icon24'),
                    action: () => this.handleComplimentHu(this.global.roomStatus.compliment),
                },
                {
                    name: this.paramsDataComplimentHu == this.global.roomStatus.houseUse ? this.$t('common.contextMenu.defaultGuest') : this.$t('common.contextMenu.houseUse'),
                    disabled: !this.paramsData,
                    icon: this.paramsDataComplimentHu == this.global.roomStatus.houseUse ? '' : generateIconContextMenuAgGrid('house_use_icon24'),
                    action: () => this.handleComplimentHu(this.global.roomStatus.houseUse),
                },
                // 'separator',
                {
                    name: this.$t('common.contextMenu.autoPostRoomCharge'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('autopost_icon24'),
                    action: () => $dialog.confirmation(this, 'handlePostingRoomCharge'),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.moveRoom'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('move_room_icon24'),
                    action: () => this.handleMoveRoom(),
                },
                // {
                //     name: this.$t('common.contextMenu.switchRoom'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('switch_room_icon24'),
                //     action: () => this.handleSwitchRoom(),
                // },
                'separator',
                // {
                //     name: this.paramsDataIsLock == '-1' ? this.$t('common.contextMenu.unlock') : this.$t('common.contextMenu.lock'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid(this.paramsDataIsLock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
                //     action: () => this.handleLockFolio('-1'),
                // },
                {
                    name: this.paramsDataIsIncognito == true ? this.$t('common.contextMenu.removeIncognito') : this.$t('common.contextMenu.setIncognito'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('incognito_icon24'),
                    action: () => this.handleIncognito('-1'),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.cancelCheckIn'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('cancel_icon24'),
                    action: () => this.handleCancelCheckIn(),
                },
                // {
                // 	name: this.$t('common.contextMenu.message'),
                // disabled: !this.paramsData,
                // 	action: () =>
                // },
                // {
                // 	name: this.$t('common.contextMenu.toDo'),
                // disabled: !this.paramsData,
                // 	action: () =>
                // },
                {
                    name: this.$t('common.contextMenu.checkOut'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('check_out_icon24'),
                    action: () => this.handleCheckOut(),
                },
                'separator',
                // {
                //     name: this.$t('common.contextMenu.printFolio'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('print_icon24'),
                //     action: () => this.handlePrintFolio(),
                // },
                // {
                //     name: this.$t('common.contextMenu.printRegistrationForm'),
                //     disabled: !this.paramsData,
                //     icon: generateIconContextMenuAgGrid('print_icon24'),
                //     action: () => this.handlePrintRegistrationForm(),
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
            if(this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.folio_number == vm.paramsData.folio_number) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.handleTransaction();
        },

        // ------------------need setting manual for crud-----------------//
        // ------------------ Guest In House CRUD------------------//
        async getGuestInHouseList(search) {
            try {
                let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                const { data } = await guestInHouseResource.list(this.search);
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'folio_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                const status = error.response;
                $alert.errorFetchDataAlert(status);
            }
        },

        async editGuestInHouse(id) {
            try {
                const { data } = await guestInHouseResource.get(id.folio_number);
                this.vModel = data.list;
                this.dataLookup.room_rate = data.room_rate;
                this.dataLookup.bed_type = data.bed_type;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        handleDuplicate(params) {
            this.$refs.registrationForm.handleDuplicate(params);
        },


        async trackingData(id) {
            try {
                const { data } = await guestInHouseResource.log(id.id_log);
                this.dataTracking = data.modelGrid;
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            this.getGuestInHouseList(search);
        },

        resetData() {
            this.vModel = {
                arrival: this.getDateTimeArrival(),
                departure: this.departureResv,
                adult: 1,
                child: 0,
                full_name: '',
                commission_value: 0,
                room_type_code: '',
                weekday_rate: 0,
                weekend_rate: 0,
                discount_percent: '-1',
                payment_type_code: 'CASH',
                market_code: this.dvMarket,
                discount: 0,
                is_male: '-1',
                is_incognito: false,
                audit_date: this.auditDate,
                folio_number: 0,
                balance: 0,
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.dataTracking = null;
            this.resetOptionsChangeMoveRoom = false; // prevent reloading input select change Move Room
            this.$validator.reset();
        },

        async showForm(idData, modeData) {
            this.$refs.registrationForm.showForm(idData, modeData, false);
        },
        // ------------------ END Guest In House CRUD------------------//

        // ------------------POPULATE SELECT OPTIONS----------------------//

        async getDataLookUp() {
            try {
                const { data } = await guestInHouseResource.dataLookup();
                this.dataLookup = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async getRoomNumber(type, model) {
            this.btnSaveMoveDisabled = true;
            const params = {
                room_type_code: model.room_type_code,
                bed_type_code: model.bed_type_code,
                ready: this.readyRoom,
                arrival: this.vModel.arrival,
                departure: this.vModel.departure,
            };
            try {
                const { data } = await guestInHouseResource.roomNumber(params);
                this.vMoveRoom.new_room_number = null;
                this.roomNumber = data.room;
                // prevent reloading data selection
                if (type !== 'bed_type') {
                    this.dataLookup.bed_type = data.bed_type;
                    this.getRoomRate(model);
                }
                this.btnSaveMoveDisabled = false;
            } catch (error) {
                this.btnSaveMoveDisabled = false;
                $alert.errorFetchDataAlert();
            }
        },

        async getRoomRate(model) {
            if (model.room_type_code != null) {
                const params = {
                    room_type: model.room_type_code,
                    arrival: this.vModel.arrival,
                    departure: this.vModel.departure,
                    business_source: this.vModel.business_source_code,
                };
                try {
                    const { data } = await guestInHouseResource.roomRate(params);
                    this.dataLookup.room_rate = data;
                } catch (error) {
                    $alert.errorFetchDataAlert();
                }
            }
        },

        async getDailyRate(model) {
            const params = {
                adult: this.vModel.adult,
                room_rate: model.room_rate_code,
            };
            try {
                const { data } = await guestInHouseResource.dailyRate(params);
                this.rate = {
                    weekday: parseFloat(data.weekday_rate),
                    weekend: parseFloat(data.weekend_rate),
                };
                if (model == this.vModel) {
                    this.vModel.weekday_rate = this.rate.weekday;
                    this.vModel.weekend_rate = this.rate.weekend;
                } else if (model == this.vMoveRoom && this.vMoveRoom.change_rate == true) {
                    this.vMoveRoom.weekday_rate = this.rate.weekday;
                    this.vMoveRoom.weekend_rate = this.rate.weekend;
                }
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },
        // ------------------END POPULATE SELECT OPTIONS----------------------//
        //  END DATEPICKER CONFIGURATION //

        // ------------------START SIDEBARR OPTIONS-------------------------------//
        handleSidebarOption(data) {
            this.folioNumber = data.folio_number;
            this.paramsData = data;
            this.sidebarOption = true;
        },

        // ------------------END SIDEBARR OPTIONS-------------------------------//

        // ------------------POSTING AUTO ROOM CHARGE---------------------------//
        handlePostingRoomCharge() {
            this.autoPostingRoomCharge();
        },

        async autoPostingRoomCharge() {
            const params = {
                folio_number: this.folioNumber,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                const { data } = await guestInHouseResource.autoRoomCharge(params);
                if (data >= 0) {
                    $dialog.information(this.$t(`responseStatus.postingRoomCharge.${data}`));
                }
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorSaveDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        // ------------------END POSTING AUTO ROOM CHARGE-----------------------//

        // ----------------START CRUD MOVE ROOM ------------------//

        async handleMoveRoom() {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            await this.editGuestInHouse(this.paramsData);
            this.resetMoveRoom();
            this.getDataLookUp();
            this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
            this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
            this.modalMoveRoom = true;
        },

        handleSaveMoveRoom() {
            this.$validator.validateAll('moveRoom').then((result) => {
                if (result) {
                    this.modalMoveRoom = false;
                    this.showCredential(true, this.global.accessSpecialOrder.moveRoom);
                }
            });
        },

        handleChangeRate() {
            this.vMoveRoom.weekday_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekday : this.rate.weekday;
            this.vMoveRoom.weekend_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekend : this.rate.weekend;
        },

        resetMoveRoom() {
            this.vMoveRoom = {
                folio_number: this.folioNumber,
                guest_detail_id: this.vModel.guest_detail_id,
                new_room_number: null,
                old_room_number: this.vModel.room_number,
                room_type_code: '',
                bed_type_code: '',
                old_room_rate_code: this.vModel.room_rate_code,
                room_rate_code: '',
                current_weekday: 0,
                current_weekend: 0,
                weekday_rate: 0,
                weekend_rate: 0,
                change_rate: true,
                room_status: this.global.roomStatus.dirty,
                user_id: this.global.userInfo.code,
            };
            this.dataLookup = {};
            this.readyRoom = true;
            this.$validator.reset();
        },

        async moveRoom() {
            this.vMoveRoom.userBy = this.credential.user;
            this.vMoveRoom.reason = this.credential.reason;
            try {
                this.$loadingIndicator(this)
                const { data } = await guestInHouseResource.moveRoom(this.vMoveRoom);
                this.refreshData(this.search);
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.moveRoom.${data}`));
                }
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },

        // ----------------END CRUD MOVE ROOM------------------//

        // ----------------START CRUD SWITCH ROOM ------------------//

        async handleSwitchRoom() {
            this.resetSwitchRoom();
            await this.getSwitchRoomList();
            this.vSwitchRoom.user_id = this.global.userInfo.code;
            this.vMoveRoom.current_weekday = this.vModel.weekday_rate;
            this.vMoveRoom.current_weekend = this.vModel.weekend_rate;
            this.modalSwitchRoom = true;
            this.sidebarOption = false;
        },

        handleSaveSwitchRoom() {
            if (this.vSwitchRoom.guest_detail_id_to) {
                this.$loadingIndicator(this)
                this.switchRoom(this.vSwitchRoom);
            } else {
                $dialog.information(this.$t('message.selectSwitchRoom'));
            }
        },

        resetSwitchRoom() {
            this.vSwitchRoom = {
                guest_detail_id_from: '',
                room_number_from: '',
                room_type_code_from: null,
                bed_type_code_from: '',
                room_rate_code_from: '',
                weekday_rate_from: 0,
                weekend_rate_from: 0,
                user_id: this.global.userInfo.code,
            };
        },

        async getSwitchRoomList() {
            try {
                this.$loadingIndicator(this)
                const { data } = await guestInHouseResource.listSwitchRoom({number: this.folioNumber});
                this.vSwitchRoom = data.from;
                this.switchRooms = data.to;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async switchRoom(data) {
            try {
                await guestInHouseResource.switchRoom(data);
                this.modalSwitchRoom = false;
                this.refreshData(this.search);
                $alert.acceptAlertSucces();
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },

        // ----------------END CRUD SWITCH ROOM------------------//

        // ----------------START COMPLIMENT HOUSE USE---------------//
        async handleComplimentHu(status) {
            this.$loadingIndicator(this)
            await this.editGuestInHouse(this.paramsData);
            if (this.vModel.compliment_hu == status) {
                status = null;
            }
            this.vComplimentStatus = {
                number: this.folioNumber,
                compliment_hu: status,
                user_id: this.global.userInfo.code,
            };
            const accessType = status == this.global.roomStatus.houseUse ? this.global.accessSpecialOrder.houseUseGuest : this.global.accessSpecialOrder.complimentGuest;
            this.showCredential(true, accessType);
            this.$vs.loading.close('#layout--main>.con-vs-loading');

        },

        async setComplimentHu() {
            this.sidebarOption = false;
            this.vComplimentStatus.reason = this.credential.reason;
            this.vComplimentStatus.userBy = this.credential.user;
            try {
                this.$loadingIndicator(this)
                await guestInHouseResource.complimentHu(this.vComplimentStatus);
                this.refreshData(this.search);
                $alert.acceptAlertSucces();
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },
        // ----------------END COMPLIMENT HOUSE USE-----------------//

        // ----------------START LOCK FOLIO---------------//
        async handleLockFolio(value) {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            await this.editGuestInHouse(this.paramsData);
            $dialog.confirmation(this, 'lockFolio', value);
        },

        async lockFolio(value) {
            if (this.vModel.is_lock == value) {
                value = '0';
            }
            const data = {
                number: this.folioNumber,
                is_lock: value,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            await guestInHouseResource.lock(data);
            this.refreshData(this.search);
        },
        // ----------------END LOCK FOLIO-----------------//

        // ----------------START INCOGNITO---------------//
        async handleIncognito(value) {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            await this.editGuestInHouse(this.paramsData);
            $dialog.confirmation(this, 'setIncognito', value);
        },

        async setIncognito(value) {
            if (this.vModel.is_incognito == true) {
                value = '0';
            }
            const data = {
                number: this.folioNumber,
                is_incognito: value,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            await guestInHouseResource.incognito(data);
            this.refreshData(this.search);
        },
        // ----------------END INCOGNITO-----------------//

        // ----------------START CANCEL CHECK IN---------------//
        async handleCancelCheckIn() {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            await this.editGuestInHouse(this.paramsData);
            if (formatDateDatabase(this.vModel.arrival) == this.auditDate) {
                $dialog.confirmation(this, 'showCredential', true, this.global.accessSpecialOrder.cancelCheckIn);
            } else {
                $dialog.information(this.$t('message.canNotCancelCheckIn'));
            }
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        async cancelCheckIn() {
            const params = {
                arrival: this.vModel.arrival,
                departure: this.vModel.departure,
                reservation_number: this.vModel.reservation_number,
                number: this.folioNumber,
                reason: this.credential.reason,
                user_by: this.credential.user,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            const { data } = await guestInHouseResource.cancelCheckIn(params);
            if (data.value == 0) {
                $alert.acceptAlertSuccesCancelCheckIn();
            } else if (data.value > 0) {
                if (data.value == 1) {
                    $dialog.information(this.$t('message.canNotCancelCheckIn'));
                } else if (data.value == 2) {
                    $dialog.information(this.$t('message.canNotCancelCheckInResponseValue2'));
                } else if (data.value == 3) {
                    $dialog.information(this.$t('message.folioTransferMessage') + data.transferMessage);
                } else if (data.value == 4) {
                    $dialog.information(this.$t('message.folioHaveTransferMessage') + data.transferMessage);
                }
            }
            this.sidebarOption = false;
            this.refreshData(this.search);
        },
        // ----------------END COMPLIMENT HOUSE USE-----------------//

        // ----------------START CHECK OUT---------------//
        async handleCheckOut() {
            this.sidebarOption = false;
            await this.getBalance();
            const { balance } = this;
            if (balance === 'null' || balance == null) {
                $dialog.confirmationW8Text(this.$t('message.checkOutWithoutTransaction'), this, 'checkOut');
            } else if (balance < 0 || balance > 0) {
                $dialog.information(this.$t('message.cannotCheckFolioUnbalance'));
            } else if (balance == 0) {
                $dialog.confirmation(this, 'checkOut');
            }
        },

        async checkOut() {
            const params = {
                number: this.folioNumber,
                user_id: this.global.userInfo.code,
            };
            const { data } = await guestInHouseResource.checkOut(params);
            if (data.value === 0) {
                $alert.acceptAlertSuccesWithText(this.$t('responseStatus.checkOut.0'));
            } else if (data.value > 0) {
                $dialog.information(`${this.$t(`responseStatus.checkOut.${data.value}`)}\n${data.message}`);
            }
            this.refreshData(this.search);
        },

        async getBalance() {
            this.$loadingIndicator(this)
            const { data } = await transactionResource.balance({ q: this.folioNumber });
            this.balance = data.balance;
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },
        // ----------------END CHECK OUT---------------//

        // ----------------START OTHER OPTION------------------//
        async handleTransaction() {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            const { data } = await guestInHouseResource.get(this.paramsData.folio_number);
            this.$router.push({ name: 'transaction', params: { form: this.global.formType.guestInHouse, stayInformations: data.list } });
        },

        // PRINT,
        handlePrintRegistrationForm() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.registrationFormInHouse}&folioNumber=${this.paramsData.folio_number}&template=${this.global.stimulsoftReportFileDirectory.registrationFormInHouse}` });
            window.open(newTabReport.href, '_blank');
        },

        handlePrintFolio() {
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.folio}&folioNumber=${this.paramsData.folio_number}&template=${this.global.stimulsoftReportFileDirectory.folio}` });
            window.open(newTabReport.href, '_blank');
        },

        getDateTimeArrival() {
            let time = new Date();
            let h = this.addZeroHour(time.getHours());
            let m = this.addZeroHour(time.getMinutes());
            let s = this.addZeroHour(time.getSeconds());
            let times = `${h}:${m}:${s}`;
            let arrResv = formatDateTimeDatabase(`${this.auditDate} ${times}`);
            return arrResv;
        },

        // ----------------END OTHER OPTION------------------//

        // ------------------end need setting manual for crud-----------------//

        // --------------------CREDENTIAL----------------------------------------//
        showCredential(isCredential, type) {
            this.credential = {};
            this.activeCredentialPrompt = true;
            this.isCredential = isCredential;
            this.specialAccessType = type;
        },

        acceptReason() {
            if (this.specialAccessType == this.global.accessSpecialOrder.moveRoom) {
                this.moveRoom();
            } else if (this.specialAccessType == this.global.accessSpecialOrder.cancelCheckIn) {
                this.cancelCheckIn();
            } else if (this.specialAccessType == this.global.accessSpecialOrder.complimentGuest || this.specialAccessType == this.global.accessSpecialOrder.houseUseGuest) {
                this.setComplimentHu();
            }
        },
    // --------------------CREDENTIAL----------------------------------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },

    watch: {
        sidebarOption() {
            if (!this.sidebarOption) {
                document.getElementById('main-container').click();
            }
        },
        modalSwitchRoom() {
            if (this.modalSwitchRoom) {
                this.$nextTick(() => { addDialogCloseButton(this, 'switch_room', 'modalSwitchRoom'); });
            }
        },
        modalMoveRoom() {
            if (this.modalMoveRoom) {
                this.$nextTick(() => { addDialogCloseButton(this, 'move_room', 'modalMoveRoom'); });
            }
        },
    },
    computed: {
        departureResv() {
            const departure = new Date(formatDateTimeDatabase(`${this.auditDate} ${this.checkOutLimit}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
        auditDate() { return this.$store.state.auditLog.auditDate; },
        dvMarket() { return this.$store.getters.dvMarket; },
        checkOutLimit() { return this.$store.getters.checkOutLimit; },

    },
};

</script>
