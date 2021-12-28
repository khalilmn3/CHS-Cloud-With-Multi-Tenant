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
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="modeDataValue == global.modeData.tracking ? 800 : 80"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
            </div>
                <div v-else>
                    <div class="flex">
                        <div class="md:w-1/2">
                            <vs-row class="mt-3 w-3/4" vs-type="flex" vs-justify="space-between">
                                <div class="required wrap-form-select w-full">
                                    <vs-row><label>{{$t('common.type')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" label="name" :clearable="false" :reduce="value => value.code" :options="dataLookup.type" v-model="vModel.type_code" v-validate="'required'" name="type"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('type')">{{ errors.first('type') || dbErrors.type | toString  }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/4">
                                    <vs-row><label>{{$t('common.title')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" label="code" :reduce="value => value.code" :options="dataLookup.title" v-model="vModel.title_code"></v-select>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-3/4">
                                    <vs-row>{{$t('common.fullName')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.full_name" :description-text="errors.first('full name') || dbErrors.full_name | toString" v-validate="'required'" name="full name"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-divider/>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.mobilePhone')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.phone1" :description-text="errors.first('mobile phone') || dbErrors.phone1 | toString" v-validate="'required'" name="mobile phone"/>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <vs-row>{{$t('common.workPhone')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.phone2"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.whatsApp')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.whatsapp"/>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <vs-row>{{$t('common.facebook')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.facebook"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.twitter')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.twitter"/>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <vs-row>{{$t('common.yahooMessenger')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.yahoo_messenger"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.email')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.email"/>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <vs-row>{{$t('common.website')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.website"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                        </div>
                        <div class="md:w-1/2">
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.street')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.street"/>
                                    </vs-row>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <vs-row>{{$t('common.city')}}</vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.city"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.country')}}</label></vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" @input="handleChangeCountry" label="name" :reduce="value => value.code" :options="dataLookup.country" v-model="vModel.country_code"></v-select>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.state')}}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" label="name" :reduce="value => value.code" :options="dataLookup.state" v-model="vModel.state_code"></v-select>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.postCode')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.post_code"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-divider/>
                            <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                <div class="w-full md:w-1/2">
                                    <vs-row><label>{{$t('common.jobTitle')}}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.job_title"/>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.company')}}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" label="name" appendToBody :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code"></v-select>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-divider/>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                <vs-textarea class="w-full" :label="$t('common.remark')" v-model="vModel.remark" />
                            </vs-row>
                        </div>
                    </div>
                </div>
            </template>
        </dialog-prompt>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import PhoneBookResource from '@/api/marketing/phoneBook';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';

const phoneBookResource = new PhoneBookResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'PhoneBook',

    props: {
        titleForm: String,
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
            vModelDefaultSearchData: 1,
            searchFilterData: [
                { text: this.$t('common.filter.type'), value: 0 },
                { text: this.$t('common.filter.fullName'), value: 1 },
                { text: this.$t('common.filter.mobilePhone'), value: 2 },
                { text: this.$t('common.filter.workPhone'), value: 3 },
                { text: this.$t('common.filter.whatsApp'), value: 4 },
                { text: this.$t('common.filter.facebook'), value: 5 },
                { text: this.$t('common.filter.twitter'), value: 6 },
                { text: this.$t('common.filter.yahooMessenger'), value: 7 },
                { text: this.$t('common.filter.email'), value: 8 },
                { text: this.$t('common.filter.website'), value: 9 },
                { text: this.$t('common.filter.address'), value: 10 },
                { text: this.$t('common.filter.jobTitle'), value: 11 },
                { text: this.$t('common.filter.company'), value: 12 },
                { text: this.$t('common.filter.remark'), value: 13 },
                { text: this.$t('common.filter.lastUpdate'), value: 14 },
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
            paramsData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            dataLookup: [],
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
            mainTableName: '',
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'code', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.type'), field: 'type', width: 150 },
            { headerName: this.$t('common.table.fullName'), field: 'full_name', width: 200 },
            { headerName: this.$t('common.table.mobilePhone'), field: 'phone1', width: 200 },
            { headerName: this.$t('common.table.workPhone'), field: 'phone2', width: 200 },
            { headerName: this.$t('common.table.whatsApp'), field: 'whatsapp', width: 200 },
            { headerName: this.$t('common.table.facebook'), field: 'facebook', width: 200 },
            { headerName: this.$t('common.table.twitter'), field: 'twitter', width: 200 },
            { headerName: this.$t('common.table.yahooMessenger'), field: 'yahoo_messenger', width: 200 },
            { headerName: this.$t('common.table.email'), field: 'email', width: 200 },
            { headerName: this.$t('common.table.website'), field: 'website', width: 200 },
            { headerName: this.$t('common.table.address'), field: 'address', width: 200 },
            { headerName: this.$t('common.table.jobTitle'), field: 'job_title', width: 100 },
            { headerName: this.$t('common.table.company'), field: 'company', width: 200 },
            { headerName: this.$t('common.table.remark'), field: 'remark', width: 200 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
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
        onGridReady() {},

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
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
            this.showModal(this.paramsData, this.global.modeData.edit);
        },
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.search = search;
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            await this.getData(search);
            this.$nextTick(() => {
                rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
            });
        },

        async getData(params) {
            try{
                this.$loadingIndicator(this)
                const { data } = await phoneBookResource.list(params);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        resetData() {
            this.vModel = {
                type_code: '',
                title_code: '',
                full_name: '',
                phone1: '',
                phone2: '',
                whatsapp: '',
                facebook: '',
                twitter: '',
                yahoo_messenger: '',
                email: '',
                website: '',
                street: '',
                city: '',
                country_code: '',
                state_code: '',
                post_code: '',
                job_title: '',
                company_code: '',
                remark: '',
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
        },

        async handleChangeCountry() {
            await this.getDataLookup();
        },

        async getDataLookup() {
            const params = {
                country_code: this.vModel.country_code,
            }
            const { data } = await phoneBookResource.dataLookup(params);
            this.dataLookup = data;
        },

        async showModal(idData, modeData) {
            this.$loadingIndicator(this);
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                this.$loadingIndicator(this);
                await this.editData();
                this.$closeLoadingIndicator(this);
            } else if (modeData == this.global.modeData.tracking) {
                await this.trackingData(idData);
                this.mainPopUp = true;
            } else if (modeData == this.global.modeData.insert) {
                this.$loadingIndicator(this);
                await this.getDataLookup();
                this.$closeLoadingIndicator(this);
                this.mainPopUp = true;
            }
        },

        async editData() {
            try{
                const { data } = await phoneBookResource.get(this.idData);
                this.vModel = data;
                await this.getDataLookup();
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async updateData() {
            try{
                this.$loadingIndicator(this);
                const { data } = await phoneBookResource.update(this.vModel);
                await this.refreshData(this.search);
                this.$closeLoadingIndicator(this);
                this.mainPopUp = false;
                $alert.acceptAlertSucces();
                this.btnSaveDisabled = false;
            } catch (error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async insertData() {
            try{
                this.$loadingIndicator(this);
                const { data } = await phoneBookResource.store(this.vModel);
                await this.refreshData(this.search);
                this.$closeLoadingIndicator(this);
                this.mainPopUp = false;
                $alert.acceptAlertSucces();
                this.btnSaveDisabled = false;
            } catch (error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async saveData() {
            this.$validator.validateAll().then(async (result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    this.vModel.user_id = this.global.userInfo.code;
                    if (this.modeDataValue == 1) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        await this.updateData();
                        this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    } else {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        await this.insertData();
                        this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    }
                }
            });
        },

        handleDeleteData(data) {
            $dialog.confirmationDelete(this, 'deleteData', data);
        },

        async deleteData(idData) {
            this.$nextTick(() => {
                this.modeDataValue = this.global.modeData.delete;
                getRowIndexBefore(this);
            });
            const data = {
                id_log: idData.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            try{ 
                await phoneBookResource.delete(data);
                this.refreshData(this.search);
                $alert.deleteAlertSuccess();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.phoneBook,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },
    },
    beforeRouteLeave(to, from, next) {
        if (this.mainPopUp) {
            this.mainPopUp = false;
            next(false);
        } else {
            next();
        }
    },
    // ------------------end need setting manual for crud-----------------//
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
};
</script>
