<template>
    <div class="reservation">
        <navigation-header :groupReservationButton="true" @showModal="showForm" @showReservation="handleShowReservationForm" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}" :searchDefault="vModelDefaultSearchData"></navigation-header>
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
                :enableRangeSelection="true"
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
                :getContextMenuItems="getContextMenu"
                @cellContextMenu="handleRowRightClicked"
                @rowDoubleClicked="handleRowDobleClicked"
            ></ag-grid-vue>
        </vx-card>
<!-----------start need setting manual---------------->
    <!----------- START POPUP MAIN -------------->
    <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.code:(modeDataValue == 0 ? global.modeDataName.insert : global.modeDataName.edit) + titleForm)"
            :width="modeDataValue == global.modeData.tracking ? 600 : 80"
            :active="modalMain"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            :textButton1="$t('button.save')"
            @button1="saveData()"
            @close="val=>modalMain = val">
            <template #body>
        <!---------------- START TRACKING TABLE COMPONENT --------------------->
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
            </div>
        <!---------------- END TRACKING TABLE COMPONENT --------------------->
            <div v-else class="popup-body vs-con-loading__container">
                <div class="form-container">
                    <div class="popup-container" vs-position="left">
                        <!-- <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings"> -->
                            <vs-collapse type="margin">
                                <!-- <vx-card class="mb-3" :title="$t('common.guest.guestGroup')" collapseAction> -->
                                    <vs-row>
                                        <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :disabled="modeDataValue == global.modeData.edit" class="required" :label="$t('common.code')" vs-lg="6" v-model="vModel.code" :maxLength="6"
                                                :description-text="errors.first(scope1+'.code') || dbErrors.code | toString" v-validate="'required'" name="code" :data-vv-scope="scope1"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.name')" class="w-full required" v-model="vModel.name" :maxLength="50"
                                                :description-text="errors.first(scope1+'.name') || dbErrors.name | toString" v-validate="'required'" name="name" :data-vv-scope="scope1"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.contactPerson')" class="w-full" v-model="vModel.contact_person" :maxLength="50"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.street')" class="w-full" v-model="vModel.street" :maxLength="100"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('common.guest.country')}}</vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full" @input="getState('country')" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.country" v-model="vModel.country_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                    <vs-row>{{$t('common.guest.state')}}</vs-row>
                                                    <vs-row>
                                                        <v-select id="form-select" @input="getState('state')" :resetOnOptionsChange="resetOnChangeState" class="w-full" label="name" :reduce="value => value.code" :options="state" v-model="vModel.state_code"></v-select>
                                                    </vs-row>
                                                </div>
                                            </vs-row>
                                        </vs-col>
                                <!-------------------------------- COLOM TWO ---------------------------------->
                                        <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <div class="wrap-form-select w-full md:w-1/2">
                                                <vs-row>{{$t('common.guest.city')}}</vs-row>
                                                    <vs-row>
                                                        <v-select class="w-full" id="city" :resetOnOptionsChange="resetOnChangeCity" label="name" :reduce="value => value.code" :options="city" v-model="vModel.city_code"></v-select>
                                                    </vs-row>
                                                </div>
                                                <vs-input :disabled="vModel.city_code !== 'OTH'" class="w-full md:w-1/2" label="." v-model="vModel.city"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.website')" class="w-full md:w-1/2" v-model="vModel.website" :maxLength="50"/>
                                                <vs-input class="w-full md:w-1/2" :label="$t('common.guest.postCode')" v-model="vModel.postal_code" :maxLength="10"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.phone')+' 1'" class="w-full md:w-1/2" v-model="vModel.phone1" :maxLength="20"/>
                                                <vs-input :label="$t('common.guest.phone')+' 2'" class="w-full md:w-1/2" v-model="vModel.phone2" :maxLength="20"/>
                                            </vs-row>
                                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('common.guest.fax')" class="w-full md:w-1/2" v-model="vModel.fax" :maxLength="20"/>
                                                <vs-input :label="$t('common.guest.email')" class="w-full md:w-1/2" v-model="vModel.email" :maxLength="50"/>
                                            </vs-row>
                                        </vs-col>
                                    </vs-row>
                                <!-- </vx-card> -->
                            </vs-collapse>
                        <!-- </VuePerfectScrollbar> -->
                    </div>
                </div>
            </div>
            </template>
    </dialog-prompt>
    <!----------- END POPUP MAIN ---------------->
    <!--------- START POPUP FORM RESERVATION GROUP--------->
        <vs-popup class="width-80" button-close-hidden :active.sync="modalPreventClose2" :title="$t('reservation.group.title.groupReservation')">
            <reservation-group-form v-if="destroyComponent" ref="reservationForm" :vModel="vModel" :showModal="modalReservationForm" @showForm="showFormReservationGroup"></reservation-group-form>
        </vs-popup>
    <!--------- END POPUP FORM RESERVATION GROUP----------->
<!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import Tracking from '@/views/pages/components/Tracking.vue';
import TrackingDataResource from '@/api/trackingData';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid } from '@/utils/general.js';
// <!------------------additional element---------------------->
// ------for format----- //
import { formatDateTimeDatabase } from '@/utils/format.js';
// <!------------------end additional element---------------------->
import ReservationResource from '@/api/reservation/reservation';
import GuestGroupResource from '@/api/reservation/guestGroup';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import ReservationGroupForm from './components/ReservationGroupForm';
import ActionGrid from './components/action_grid';

const guestGroupResource = new GuestGroupResource();
const reservationResource = new ReservationResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'GuestGroup',

    props: {
        titleForm: String,
        mainTableName: String,
    },

    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        Tracking,
        ReservationGroupForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.code'), value: '0' },
                { text: this.$t('common.filter.name'), value: '1' },
                { text: this.$t('common.filter.contactPerson'), value: '2' },
                { text: this.$t('common.filter.address'), value: '3' },
                { text: this.$t('common.filter.phone'), value: '4' },
                { text: this.$t('common.filter.fax'), value: '5' },
                { text: this.$t('common.filter.email'), value: '6' },
                { text: this.$t('common.filter.website'), value: '7' },
                { text: this.$t('common.filter.lastUpdate'), value: '8' },
            ],

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
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
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
            childModal: false,
            modalReservationForm: false,
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {
                full_name: '',
            }, // package
            account: null,
            city: [],
            state: [],
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            // validation scope//
            scope1: 'reservation',
            resetOnChangeState: false,
            resetOnChangeCity: false,
            paramsData: '',
            btnSaveDisabled: false,
            modalPreventClose: false,
            modalPreventClose2: false,
            destroyComponent: false,
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
            {headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, cellRenderer: 'actionGrid', colId: 'params', width: 120 },
            { headerName: this.$t('common.table.code'), field: 'code', width: 90 },
            { headerName: this.$t('common.table.name'), field: 'name', width: 200 },
            { headerName: this.$t('common.table.resv'), field: 'reservation', width: 109 },
            { headerName: this.$t('common.table.inHouse'), field: 'folio', width: 109 },
            { headerName: this.$t('common.table.contactPerson'), field: 'contact_person', width: 200 },
            { headerName: this.$t('common.table.address'), field: 'address', width: 200 },
            { headerName: `${this.$t('common.table.phone')}1`, field: 'phone1', width: 150 },
            { headerName: `${this.$t('common.table.phone')}2`, field: 'phone2', width: 150 },
            { headerName: this.$t('common.table.fax'), field: 'fax', width: 150 },
            { headerName: this.$t('common.table.email'), field: 'email', width: 150 },
            { headerName: this.$t('common.table.website'), field: 'website', width: 150 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
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
                {
                    name: this.$t('common.contextMenu.duplicate'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('duplicate_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.duplicate),
                },
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeleteGuestGroup(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.insertReservation'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.handleShowReservationForm(),
                },
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.tracking),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.id_log == vm.paramsData.id_log) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.showForm(this.paramsData, this.global.modeData.edit);
        },
        // ------------------need setting manual for crud-----------------//

        async handleShowReservationForm() {
            if (this.getSelectedRow()) {
                this.resetData();
                this.$loadingIndicator(this)
                const { data } = await guestGroupResource.get(this.getSelectedRow());
                this.vModel.full_name = data.name;
                this.vModel.reservation_by = data.name;
                this.vModel.group_code = data.code;
                this.$refs.reservationForm.resetData();
                this.$refs.reservationForm.getDataLookUp();
                await this.$refs.reservationForm.getRoomNumber(null);
                // this.$closeLoadingIndicator(this);
                this.modalReservationForm = true;
            }
        },

        getSelectedRow() {
            const row = this.gridApi.getSelectedRows();
            if (row.length > 0) {
                return row[0].code;
            }
            $dialog.selectField();
        },

        async showFormReservationGroup(result) {
            if (!result) {
                await this.refreshData(this.search);
            }
            this.modalReservationForm = result;
        },

        // ------------------ GROUP CRUD------------------//

        async getGuestGroupList(search) {
            try {
                let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                const { data } = await guestGroupResource.list(search);
                this.rowData = data;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'code');
                });
                this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$closeLoadingIndicator(this);
            }
        },

        handleDeleteGuestGroup(paramsData) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: this.$t('message.deleteTitleConfirm'),
                text: this.$t('message.deleteConfirm'),
                acceptText: this.$t('button.yes'),
                cancelText: this.$t('button.no'),
                accept: () => this.deleteGuestGroup(paramsData),
            });
        },

        async deleteGuestGroup(paramsData) {
            const params = {
                code: paramsData.code,
                id_log: paramsData.id_log,
                user_id: this.global.userInfo.code,
            };
            try {
                this.$loadingIndicator(this)
                const { data } = await guestGroupResource.delete(params);
                if (data == 0) {
                    this.refreshData(this.search);
                    $alert.deleteAlertSuccess();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.deletedData.${data}`));
                }
                this.$closeLoadingIndicator(this)
            } catch (error) {
                $alert.errorDeleteDataAlert();
                this.$closeLoadingIndicator(this);
            }
        },

        async editGuestGroup(id) {
            try {
                const { data } = await guestGroupResource.get(id);
                this.vModel = data;
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$closeLoadingIndicator(this);
            }
        },

        async updateGuestGroup(params) {
            try {
                this.btnSaveDisabled = true;
                await guestGroupResource.update(params);
                this.btnSaveDisabled = false;
                this.refreshData(this.search);
                this.modalMain = false;
                $alert.acceptAlertSucces();
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                this.btnSaveDisabled = false;
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        async insertGuestGroup(params) {
            try {
                this.btnSaveDisabled = true;
                const { data } = await guestGroupResource.store(params);
                this.btnSaveDisabled = false;
                this.refreshData(this.search);
                this.modalMain = false;
                // this.$closeLoadingIndicator(this);
                $alert.acceptAlertSucces();
            } catch (error) {
                this.btnSaveDisabled = false;
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert(message);
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.guestGroup,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
                this.modalMain = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },

        refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            this.getGuestGroupList(search);
        },

        resetData() {
            this.vModel = {
                arrival: this.getDateTimeArrival(),
                departure: this.departureResv,
                adult: 1,
                child: 0,
                rooms: 1,
                commission_value: 0,
                room_type_code: this.dvRoomType,
                weekday_rate: 0,
                weekend_rate: 0,
                weekday_rate_discount: 0,
                weekend_rate_discount: 0,
                discount: 0,
                discount_percent: '0',
                payment_type_code: this.dvPaymentType,
                market_code: this.defaultMarket,
                is_incognito: false,
                audit_date: this.auditDate,
                reservation_number: 0,
                balance: 0,
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.dataTracking = null;
            this.$validator.reset();
        },

        async showForm(idData, modeData) {
            this.idData = idData;
            this.modeDataValue = modeData;
            this.$loadingIndicator(this)
            this.resetData();
            if (modeData === this.global.modeData.edit || modeData === this.global.modeData.duplicate) {
                await this.editGuestGroup(this.idData.code);
                let w1 = new Promise(async (resolve, reject) => {
                    await this.getDataLookUp();
                    resolve();
                })
                let w2 =  new Promise(async (resolve, reject) => {
                    await this.getState();
                    resolve();
                })
                await Promise.all([w1, w2]); // wait result
                if(modeData === this.global.modeData.duplicate) {
                    this.vModel.code = '';
                }
                this.modalMain = true;
            } else if (modeData === this.global.modeData.insert) {
                await this.getDataLookUp();
                this.modalMain = true;
            } else if (modeData === this.global.modeData.tracking) {
                this.trackingData(idData);
            }
        },

        // checkStatusModal(){
        //     if(this.modalMain === false){
        //         setTimeout(this.checkStatusModal(), 200);
        //     } else {
        //         this.$closeLoadingIndicator(this);
        //     }
        // },

        showReservationForm() {
            this.modalReservationForm = true;
        },

        saveData() {
            this.$validator.validateAll(this.scope1).then((result) => {
                if (result) {
                    this.$loadingIndicator(this)
                    this.vModel.user_id = this.global.userInfo.code;
                    if (this.modeDataValue === this.global.modeData.insert || this.modeDataValue === this.global.modeData.duplicate) {
                        this.insertGuestGroup(this.vModel);
                    } else if (this.modeDataValue === this.global.modeData.edit) {
                        this.updateGuestGroup(this.vModel);
                    }
                } else {
                    $alert.inputRequiredAlert();
                }
            });
        },

        addZeroHour(i) {
            let a = i;
            if (a < 10) {
                a = `0${a}`;
            }
            return a;
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

        // ------------------POPULATE SELECT OPTIONS----------------------//

        async getDataLookUp() {
            try {
                const params = {
                    country: true,
                }
                const { data } = await reservationResource.dataLookup(params);
                this.dataLookup = data;
                // this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        async getState(state) {
            if (this.vModel.country_code) {
                const params = {
                    country_code: this.vModel.country_code,
                    state_code: this.vModel.state_code,
                    state: true,
                    city: true,
                };
                try {
                    const { data } = await reservationResource.dataLookup(params);
                    if (state == 'country') {
                        this.resetOnChangeState = true;
                    } else if (state == 'state') {
                        this.resetOnChangeState = false;
                        this.resetOnChangeCity = true;
                    }
                    this.state = data.state;
                    this.city = data.city;
                } catch (error) {
                    $alert.errorFetchDataAlert();
                }
            }
        },
        // ------------------END POPULATE SELECT OPTIONS------------------//
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.destroyComponent = true;
    },
    watch: {
        async modalMain() {
            if (!this.modalMain) {
                await this.refreshData(this.search);
            }
            this.$closeLoadingIndicator(this);
        },
        modalPreventClose2() {
            this.modalPreventClose2 = this.modalReservationForm;
        },
        async modalReservationForm() {
            this.modalPreventClose2 = this.modalReservationForm;

            if (!this.modalReservationForm) {
                await this.refreshData(this.search);
            }
            this.$closeLoadingIndicator(this);
        },

    },
    computed: {
        departureResv() {
            const departure = new Date(formatDateTimeDatabase(`${this.auditDate} ${this.checkOutLimit}`));
            departure.setDate(departure.getDate() + 1);

            return formatDateTimeDatabase(departure);
        },
        auditDate() { return this.$store.state.auditLog.auditDate },
        dvRoomType() { return this.$store.getters.dvRoomType; },
        dvPaymentType() { return this.$store.getters.dvPaymentType; },
        checkOutLimit() { return this.$store.getters.checkOutLimit; },
        defaultMarket() { return this.$store.getters.dvMarket; },
    },

    beforeRouteLeave(to, from, next) {
        if (this.modalMain || this.modalReservationForm) {
            this.modalMain = false;
            this.modalReservationForm = false;
            next(false);
        } else {
            this.destroyComponent = false; // fix sidebar error
            setTimeout(() => {
                next();
            }, 10);
        }
    },
};

</script>
<style lang="scss">
@import '@sass/vuexy/pages/form_deposit_charge.scss';
</style>
