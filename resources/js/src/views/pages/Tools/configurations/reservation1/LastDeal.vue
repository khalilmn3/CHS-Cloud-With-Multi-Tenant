<template>
    <div>
        <navigation-header @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <!-- <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize"></filter-header> -->
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :enableRangeSelection="true"
                :suppressMenu="true"
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
                @cellDoubleClicked="handleCellDoubleClicked"
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking && activeTab == 1"
            :title="global.modeDataName.edit + titleForm"
            :width="500"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled1"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <tracking v-bind:idData="idData" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                </div>
                <div v-else>
                    <vs-row>
                        <vs-col vs-lg="12" vs-xs="12">
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="center">
                                <div class="wrap-form-select w-full md:w-1/4">
                                    <vs-row>{{$t('common.startTime')}}</vs-row>
                                    <vs-row>
                                        <date-picker :lang="$t('lang')" type="time" :clearable="false" not-before value-type="HH:mm:ss" format="HH:mm:ss" label="name" class="w-full" v-model="vModel.start_time" v-validate="'required'" name="start time"/>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/4">
                                    <vs-row>{{$t('common.endTime')}}</vs-row>
                                    <vs-row>
                                        <date-picker :lang="$t('lang')" type="time" :clearable="false" not-before value-type="HH:mm:ss" format="HH:mm:ss" label="name" class="w-full" v-model="vModel.end_time" v-validate="'required'" name="end time"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="center">
                                <vs-checkbox @change="changeDefault" class="w-full md:w-6/12 checkbox-3col" v-model="vModel.default">{{ $t('common.default') }}</vs-checkbox>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="center">
                                <input-number :disabled="vModel.default" class="w-full md:w-1/2" :label="$t('common.percentage')" :placeholder="$t('common.weekday')" v-model="vModel.percentage" v-validate="'required'" name="percentage"/>
                            </vs-row>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
import LastDealResource from '@/api/marketing/lastDeal.js';
// <!------------------additional element---------------------->
// inputnumber//
import InputNumber from '@/views/pages/components/Number';
// render icon for ag-grid//
import SmokeRenderer from '@/views/pages/components/ag_grid-framework/smoke_icon';
import ChecklistRenderer from '@/views/pages/components/ag_grid-framework/checklist.js';
// ------for format----- //
import {  formatNumber } from '@/utils/format.js';
import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
// <!------------------end additional element---------------------->

const lastDealResource = new LastDealResource();

export default {
    name: 'RoomType',

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
        InputNumber,
        DatePicker,
    },

    data() {
        return {
            // Filter Data on Page Size

            // query data search
            limitPageSize: 0,
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
            paramsData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modePopUp: 0,
            modeDataValueTracking: 0,
            modeChildValue: '',
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            mainPopUp: false, // poopup package
            childPopUp: false, // popup breakdown & business source
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {},
            // save disable button
            btnSaveDisabled1: false,
            saved: false,
            activeTab: 1,
            title: '',
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
            { headerName: this.$t('common.table.action'), field: 'code',  pinned: 'left', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 50, },
            { headerName: this.$t('common.code'), field: 'code', pinned: 'left', suppressMenu: true, width: 110 },
            { headerName: this.$t('common.name'), field: 'name', suppressMenu: true, width: 300 },
            { headerName: this.$t('common.invCode2'), field: 'inv_cm_code', suppressMenu: true, width: 100 },
            { headerName: this.$t('common.online'), field: 'is_online', width: 80, suppressMenu: true, cellRenderer: 'checklistRenderer' },
            { headerName: this.$t('common.weekdayRate1'), field: 'weekday_rate1', width: 150, suppressMenu: true, valueFormatter: formatNumber },
            { headerName: '00:00', field: '00:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '01:00', field: '01:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '02:00', field: '02:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '03:00', field: '03:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '04:00', field: '04:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '05:00', field: '05:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '06:00', field: '06:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '07:00', field: '07:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '08:00', field: '08:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '09:00', field: '09:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '10:00', field: '10:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '11:00', field: '11:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '12:00', field: '12:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '13:00', field: '13:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '14:00', field: '14:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '15:00', field: '15:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '16:00', field: '16:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '17:00', field: '17:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '18:00', field: '18:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '19:00', field: '19:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '20:00', field: '20:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '21:00', field: '21:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '22:00', field: '22:00', width: 100, valueFormatter: formatNumber, editable: true },
            { headerName: '23:00', field: '23:00', width: 100, valueFormatter: formatNumber, editable: true },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            checklistRenderer: ChecklistRenderer,
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
        // ------------------------additional for context menu ag-Grid-----------//

        async handleCellDoubleClicked(params) {
            const value = await params.value;
            const time = await params.colDef.field;
            this.paramsData = await params.data;
            if(!time.includes(':')){
                return;
            }
            this.showModal(this.paramsData, value, time);
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this);
            try{
                const { data } = await lastDealResource.list();
                this.rowData = data.data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
            }
        },

        resetData() {
            this.vModel = {
                room_rate_code: '',
                start_time: '00:00:00',
                end_time: '00:00:00',
                default: false,
                percentage: 0,
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.dataTracking = null;
            this.saved = false;
            this.btnSaveDisabled1 = false;
            this.resetValidator();
        },

        showModal(params, value, time) {
            this.resetData();
            this.vModel.room_rate_code = params.code;
            if(value && time) {
                this.vModel.start_time = `${time}:00`;
                this.vModel.end_time = `${time}:00`;
                this.vModel.percentage = value;
            } else {
                this.vModel.start_time = '00:00:00';
                this.vModel.end_time = '00:00:00';
                this.vModel.percentage = 0;
            }
            this.mainPopUp = true;
        },

        changeDefault(value) {
            if (value) {
                this.vModel.percentage = 100;
            }
        },

        async update() {
            try{
                this.btnSaveDisabled1 = true;
                await lastDealResource.store(this.vModel);
                this.btnSaveDisabled1 = false;
            } catch (e) {
                this.btnSaveDisabled1 = false;
            }
        },

        saveData() {
            this.$validator.validateAll().then(async (result) => {
                if (result) {
                    this.vModel.user_id = this.global.userInfo.code;
                    await this.update();
                    this.mainPopUp = false;
                    this.refreshData();
                }
            });
        },
        resetValidator() {
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
        },
        // ------------------end need setting manual for crud-----------------//

    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
        this.refreshData();
    },
    beforeRouteLeave(to, from, next) {
        if (this.mainPopUp) {
            next(false);
            if (this.childPopUp) {
                this.childPopUp = false;
                return;
            }
            this.mainPopUp = false;
        } else {
            next();
        }
    },
};
</script>
