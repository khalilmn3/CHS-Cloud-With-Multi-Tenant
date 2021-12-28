<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :enableRangeSelection="true"
                :statusBar="statusBar"
                :sideBar="sideBar"
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
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="600"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <!-- additional :theData -->
                    <tracking v-bind:idData="idData" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                </div>
                <div v-else>
                    <vs-row vs-type="flex" vs-justify="space-between">
                        <div class="sm:w-1/3">
                            <vs-input ref="number" :disabled="(modeDataValue == global.modeData.edit)" class="w-full" :label="$t('common.number')"  v-model="vModel.number" :maxLength="6"
                                :description-text="errors.first('number') || dbErrors.number | toString" v-validate="'required'" name="number" />
                        </div>
                        <vs-input ref="lock" class="w-full sm:w-1/3" :label="$t('common.lock')+'#'" v-model="vModel.lock_number" :maxLength="6"
                        />
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <vs-input :disabled="true" class="w-full md:w-1/2" :label="$t('common.name')" v-model="vModel.name" />
                        <vs-input class="w-full md:w-1/2" :label="$t('common.phoneNumber')" v-model="vModel.phone_number"
                        />
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full md:w-1/2">
                            <vs-row>{{$t('common.roomType')}}</vs-row>
                            <vs-row>
                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="roomTypes" v-model="vModel.room_type_code" v-validate="'required'" name="room type"></v-select>
                                <span class="error-text text-danger" v-show="errors.has('room type')">{{ errors.first('room type') }}</span>
                            </vs-row>
                        </div>
                        <div class="wrap-form-select w-full md:w-1/2">
                            <vs-row>{{$t('common.bedType')}}</vs-row>
                            <vs-row>
                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="bedTypes" v-model="vModel.bed_type_code" v-validate="'required'" name="bed type"></v-select>
                                <span  class="error-text text-danger" v-show="errors.has('bed type')" >{{ errors.first('bed type') }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full md:w-1/2">
                            <vs-row>{{$t('common.roomView')}}</vs-row>
                            <vs-row>
                                <v-select id="form-select" class="w-full" label="name" :reduce="value => value.code" :options="roomViews" v-model="vModel.view_code" ></v-select>
                            </vs-row>
                        </div>
                        <div class="wrap-form-select w-full md:w-1/2">
                            <vs-row>{{ $t('common.startDate') }}</vs-row>
                            <vs-row>
                                <!-- <datepicker id="form-select" format="yyyy-MM-dd" :placeholder="$t('common.startDate')" class="w-full" v-model="vModel.start_date" v-validate="'required'" name="start date" >{{$t('common.startDate')}}</datepicker> -->
                                <date-picker
                                    :clearable="false"
                                    type="date"
                                    confirm
                                    confirm-text="ok"
                                    :lang="$t('lang')"
                                    value-type="YYYY-MM-DD"
                                    format="DD/MM/YYYY"
                                    placeholder="DD/MM/YYYY"
                                    label="name"
                                    class="w-full"
                                    v-model="vModel.start_date" v-validate="'required'" name="start date">
                                </date-picker>
                                <span class="error-text text-danger" v-show="errors.has('start date')">{{ errors.first('start date') }}</span>
                            </vs-row>
                        </div>
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                        <div class="wrap-form-select w-full md:w-1/2">
                            <vs-row>{{$t('common.owner')}}</vs-row>
                            <vs-row>
                                <v-select id="form-select" :reduce="value => value.code" label="name" class="w-full" :options="owners" v-model="vModel.owner_code" ></v-select>
                            </vs-row>
                        </div>
                        <vs-input class="w-full md:w-1/2" :label="$t('common.description')" v-model="vModel.description" />
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex">
                        <vs-checkbox class="w-full md:w-1/3" v-model="vModel.is_smoking" >{{ $t('common.smokingRoom') }}</vs-checkbox>
                        <vs-input class="w-full md:w-1/3" :label="$t('common.building')"  v-model="vModel.building" :description-text="errors.first('building')" v-validate="'required'" name="building"  />
                        <vs-input class="w-full md:w-1/3" :label="$t('common.floor')"  v-model="vModel.floor" :description-text="errors.first('floor')" v-validate="'required'" name="floor"  />
                    </vs-row>
                    <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-around" vs-w="12">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                            <vs-input-number :label="$t('common.maxAdult')+':'" v-model="vModel.max_adult" min="1" v-validate="'required'" name="adult"/>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                            <vs-input-number :label="$t('common.tvQty')+':'" v-model="vModel.tv_quantity" min="1" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                            <vs-input-number :label="$t('common.idSort')+':'" v-model="vModel.id_sort" min="0" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mt-3" vs-w="12" vs-type="flex" vs-justify="center">
                        <div class="text-center image-container">
                            <img v-if="imageUrl" class="image-content" :src="imageUrl" />
                            <span onclick="document.getElementById('image-upload').click()" v-if="!imageUrl" class="upload-text" >{{ $t('common.clickImage')}}</span>
                            <div class="delete-image" @click="deleteImage">
                                <vs-icon v-if="imageUrl" icon="clear"></vs-icon>
                            </div>
                            <vs-input id="image-upload" type="file" @change="handleAddImage"></vs-input>
                        </div>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import request from '@/utils/request.js';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
// <!------------------additional element---------------------->
// render icon for ag-grid//
import IconRenderer from '@/views/pages/components/ag_grid-framework/room_status_icon.js';
import SmokeRenderer from '@/views/pages/components/ag_grid-framework/smoke_icon';
// ------for format----- //
import { formatDate } from '@/utils/format.js';
// <!------------------end additional element---------------------->

export default {
    name: 'Room',

    props: {
        titleForm: String,
        routeApi: String,
        mainTableName: String,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        FilterHeader,
        NavigationHeader,
        tracking: Tracking,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.number'), value: '0' },
                { text: this.$t('common.filter.name'), value: '1' },
                { text: this.$t('common.filter.lockNumber'), value: '2' },
                { text: this.$t('common.filter.roomType'), value: '3' },
                { text: this.$t('common.filter.bedType'), value: '4' },
                { text: this.$t('common.filter.building'), value: '5' },
                { text: this.$t('common.filter.floor'), value: '6' },
                { text: this.$t('common.filter.roomView'), value: '7name' },
                { text: this.$t('common.filter.smokingRoom'), value: '8' },
                { text: this.$t('common.filter.description'), value: '9' },
                { text: this.$t('common.filter.phoneNumber'), value: '10' },
                { text: this.$t('common.filter.owner'), value: '11' },
                { text: this.$t('common.filter.lastUpdate'), value: '12' },
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
            // Parameter From Child
            idData: '',
            paramsData: {},
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {},
            // ------------------additional-------------------------//
            // src image uploader//
            imageUrl: null,
            // Data Lookup//
            roomTypes: [],
            roomViews: [],
            bedTypes: [],
            owners: [],
            // ------------------end need setting manual-----------------//

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
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.statusIcon'), field: 'status', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, editable: false,  width: 40, cellRenderer: 'iconRenderer' },
            { headerName: this.$t('common.table.number'), field: 'number', width: 100 },
            { headerName: this.$t('common.table.lockNumber'), field: 'lock_number', width: 120 },
            { headerName: this.$t('common.table.roomType'), field: 'room_type', width: 200 },
            { headerName: this.$t('common.table.building'), field: 'building', width: 90 },
            { headerName: this.$t('common.table.floor'), field: 'floor', width: 80 },
            { headerName: this.$t('common.table.roomView'), field: 'room_view', width: 120 },
            { headerName: this.$t('common.table.smokingRoom'), field: 'is_smoking', width: 126, cellRenderer: 'smokeRenderer' },
            { headerName: this.$t('common.table.maxAdult'), field: 'max_adult', width: 100 },
            { headerName: this.$t('common.table.description'), field: 'description', width: 250 },
            { headerName: this.$t('common.table.phoneNumber'), field: 'phone_number', width: 200 },
            { headerName: this.$t('common.table.startDate'), field: 'start_date', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('common.table.owner'), field: 'owner', width: 150 },
            { headerName: this.$t('common.table.idSort'), field: 'id_sort', width: 80 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', editable: false, width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            iconRenderer: IconRenderer,
            smokeRenderer: SmokeRenderer,
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
        onGridReady() {},

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        //---
        // ------------------------additional for context menu ag-Grid-----------//
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
                    action: () => this.showModal('', 0),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showModal(this.paramsData, 1),
                },
                {
                    name: this.$t('common.contextMenu.delete'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleDeleteData(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showModal(this.paramsData, 2),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            const vm = this;
            vm.gridApi.forEachNode((node) => {
                if (node.data.number == vm.paramsData.number) {
                    node.setSelected(true, true);
                }
            });
        },
        // ------------------need setting manual for crud-----------------//
        refreshData(search) {
            this.search = search;
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            this.$loadingIndicator(this)
            request
                .get(`${this.routeApi}/table/datagrid`, { params: search })
                .then((result) => {
                    this.rowData = result.data.modelGrid;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    this.$nextTick(() => {
                        rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
                    });
                }).catch(() => {
                    $alert.errorFetchDataAlert();
                });
        },

        resetData() {
            this.vModel = {
                number: '',
                name: '',
                lock_number: '',
                room_type_code: '',
                bed_type_code: '',
                view_code: '',
                is_smoking: false,
                building: '',
                floor: '',
                max_adult: 1,
                description: '',
                phone_number: '',
                tv_quantity: 1,
                start_date: Date.now(),
                owner_code: '',
                image: '',
                id_sort: 0,
                user_id: '',
            };
            this.dbErrors = {};
            this.imageUrl = '';
            this.dataTracking = null;
            this.btnSaveDisabled = false;
            this.$validator.reset();
        },

        showModal(idData, modeData) {
            this.$loadingIndicator(this)
            this.resetData();
            this.idData = idData.number;
            this.modeDataValue = modeData;
            this.mainPopUp = modeData == this.global.modeData.insert || modeData == this.global.modeData.tracking;
            if (modeData == this.global.modeData.edit) {
                this.editData();
                this.getDataLookUp();
            } else if (modeData == this.global.modeData.insert) {
                this.getDataLookUp();
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            } else if (modeData == this.global.modeData.tracking) {
                this.trackingData(idData);
            }
        },

        editData() {
            request
                .get(`${this.routeApi}/${this.idData}/edit`)
                .then((response) => {
                    const { data } = response;
                    this.vModel = data;
                    this.mainPopUp = true;
                    if (data.image !== null) {
                        this.imageUrl = `data:image/jpeg;base64, ${data.image}`;
                    }
				    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }).catch((error) => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        updateData(data) {
            data.append('_method', 'PUT');
            request
                .post(`${this.routeApi}/${this.idData}`, data)
                .then(() => {
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.mainPopUp = false;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                })
                .catch((error) => {
                    this.btnSaveDisabled = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        insertData(data) {
            request
                .post(this.routeApi, data)
                .then(() => {
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.mainPopUp = false;
				    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                })
                .catch((error) => {
                    this.btnSaveDisabled = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        saveData() {
            this.vModel.image = (this.vModel.image == 'null' ? '' : this.vModel.image);
            const formData = new FormData();
            formData.append('number', this.vModel.number);
            formData.append('name', this.vModel.name);
            formData.append('lock_number', this.vModel.lock_number);
            formData.append('room_type_code', this.vModel.room_type_code);
            formData.append('bed_type_code', this.vModel.bed_type_code);
            formData.append('view_code', this.vModel.view_code);
            formData.append('is_smoking', this.vModel.is_smoking);
            formData.append('building', this.vModel.building);
            formData.append('floor', this.vModel.floor);
            formData.append('max_adult', this.vModel.max_adult);
            formData.append('description', this.vModel.description);
            formData.append('phone_number', this.vModel.phone_number);
            formData.append('tv_quantity', this.vModel.tv_quantity);
            formData.append('start_date', this.vModel.start_date);
            formData.append('owner_code', this.vModel.owner_code);
            formData.append('image', this.vModel.image);
            formData.append('id_sort', this.vModel.id_sort);
            formData.append('user_id', this.global.userInfo.code);
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    if (this.modeDataValue == 1) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.updateData(formData);
                    } else {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.insertData(formData);
                    }
                }
            });
        },

        handleDeleteData(data) {
            $dialog.confirmationDelete(this, 'deleteData', data);
        },

        deleteData(idData) {
            this.$nextTick(() => {
                this.modeDataValue = this.global.modeData.delete;
                getRowIndexBefore(this);
            });
            const data = {
                code: idData.number,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            request.post(`${this.routeApi}/delete`, data).then(() => {
                this.refreshData(this.search);
                $alert.deleteAlertSuccess();
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },
        trackingData(idData) {
            const data = {
                id_log: idData.id_log,
                table: this.mainTableName,
            };
            request
                .post('tracking/datagrid', data)
                .then((result) => {
                    this.dataTracking = result.data.modelGrid;
                    setTimeout(() => {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }, 100);
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        // ------------------additional load data lookup----------------------//
        getDataLookUp() {
            request.get('/room/form/datalookup')
                .then((response) => {
                    this.roomTypes = response.data.room_type;
                    this.bedTypes = response.data.bed_type;
                    this.owners = response.data.owner;
                    this.roomViews = response.data.view;
				    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                });
        },

        //  DATEPICKER CONFIGURATION //
        dateTodayDisable(date) {
            const audit = new Date(this.auditDate);
            audit.setDate(audit.getDate() - 1);
            return date < audit;
        },

        // ------------------end need setting manual for crud-----------------//
        // ------------------method image uploader----------------------------//
        handleAddImage(e) {
            const file = e.target.files[0];
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';

            if (isJPG || isPNG) {
                this.imageUrl = URL.createObjectURL(file);
                this.vModel.image = file;
            } else {
                this.$vs.notify({
                    color: 'danger',
                    title: this.$t('message.errorTitle'),
                    text: this.$t('message.imageFormat'),
                });
            }
        },
        deleteImage() {
            this.imageUrl = '';
            this.vModel.image = '';
        },
        // ------------------end method image uploader----------------------------//
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },

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
