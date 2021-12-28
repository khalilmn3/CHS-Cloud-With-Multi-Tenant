<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" :formType="global.formType.lostAndFound" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
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
                    <vs-row vs-type="flex" vs-justify="space-between">
                        <vs-col class="w-full lg:w-1/2">
                            <vx-card class="w-full" :title="$t('common.itemInformation')">
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-radio v-model="vModel.is_lost" vs-value="-1">{{ $t('common.lost') }}</vs-radio>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <vs-radio v-model="vModel.is_lost" vs-value="0">{{ $t('common.found') }}</vs-radio>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-row><label>{{$t('common.item')}}</label></vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.item" :description-text="errors.first('item') || dbErrors.item | toString" v-validate="'required'" name="item"/>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.date')}}</vs-row>
                                        <vs-row>
                                            <date-picker
                                                type="date"
                                                confirm
                                                confirm-text="Ok"
                                                :lang="$t('lang')"
                                                value-type="YYYY-MM-DD"
                                                format="DD/MM/YYYY"
                                                label="name"
                                                class="w-full"
                                                placeholder="DD/MM/YYYY"
                                                v-model="vModel.date_posting"
                                                v-validate="'required'" name="date posting">
                                            </date-picker>
                                            <span class="error-text text-danger" v-show="errors.has('date posting')">{{ errors.first('date posting') || dbErrors.date_posting | toString  }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-row><label>{{$t('common.location')}}</label></vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.location"/>
                                        </vs-row>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <vs-row>{{$t('common.who')}}</vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.who"/>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-row><label>{{$t('common.value')}}</label></vs-row>
                                        <vs-row>
                                            <input-number show-zero-number class="w-full" type="text" v-model="vModel.value"/>
                                        </vs-row>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <vs-row>{{$t('common.currentLocation')}}</vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.current_location"/>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mt-3" vs-w="12">
                                    <vs-col vs-lg="3" class="w-full">
                                        <span>{{ $t('common.color') }}</span>
                                    </vs-col>
                                    <vs-col vs-lg="6" class="wrap-form-select w-full">
                                        <color-picker style="width:100%" v-model="colors" @input="pickColor"></color-picker>
                                    </vs-col>
                                    <vs-col vs-lg="2" class="wrap-form-select w-full">
                                        <div id="color" :style="style">
                                        </div>
                                    </vs-col>
                                </vs-row>
                            </vx-card>
                        </vs-col>
                        <vs-col class="w-full lg:w-1/2">
                            <vx-card class="w-full" :title="$t('common.returnInformation')">
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-checkbox v-model="vModel.is_return">{{ $t('common.returnedToOwner') }}</vs-checkbox>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.returnDate')}}</vs-row>
                                        <vs-row>
                                            <date-picker
                                                type="date"
                                                confirm
                                                confirm-text="Ok"
                                                :lang="$t('lang')"
                                                value-type="YYYY-MM-DD"
                                                format="DD/MM/YYYY"
                                                label="name"
                                                class="w-full"
                                                placeholder="DD/MM/YYYY"
                                                v-model="vModel.date_return">
                                            </date-picker>
                                        </vs-row>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <vs-row>{{$t('common.returnBy')}}</vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.return_by"/>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full md:w-1/2">
                                        <vs-row><label>{{$t('common.owner')}}</label></vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.owner"/>
                                        </vs-row>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <vs-row>{{$t('common.phone')}}</vs-row>
                                        <vs-row>
                                            <vs-input class="w-full" type="text" v-model="vModel.phone"/>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row vs-type="flex" class="mt-3 mb-2" vs-justify="space-between">
                                    <vs-textarea class="w-full" :label="$t('common.notes')" v-model="vModel.notes" />
                                </vs-row>
                            </vx-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
        <!-----------end need setting manual---------------->
    </div>
</template>

<script>
import LostAndFoundResource from '@/api/front-desk/lostAndFound';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from './components/action_grid';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { formatNumber, formatDate, formatDateTime } from '@/utils/format.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
import DatePicker from 'vue2-datepicker';
import ColorRenderer from '@/views/pages/components/ag_grid-framework/color.js';
import CheckListRenderer from '@/views/pages/components/ag_grid-framework/checklist.js';
import '@sass/vuexy/components/datepicker.scss';

import { Slider } from 'vue-color';

const lostAndFoundResource = new LostAndFoundResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'LostAndFound',

    props: {
        titleForm: String,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        FilterHeader,
        NavigationHeader,
        tracking: Tracking,
        DatePicker,
        'color-picker': Slider,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: 1,
            searchFilterData: [
                { text: this.$t('common.filter.type'), value: 0 },
                { text: this.$t('common.filter.item'), value: 1 },
                { text: this.$t('common.filter.location'), value: 2 },
                { text: this.$t('common.filter.whoReported'), value: 3 },
                { text: this.$t('common.filter.currentLocation'), value: 4 },
                { text: this.$t('common.filter.returnBy'), value: 5 },
                { text: this.$t('common.filter.owner'), value: 6 },
                { text: this.$t('common.filter.phone'), value: 7 },
                { text: this.$t('common.filter.notes'), value: 8 },
                { text: this.$t('common.filter.lastUpdate'), value: 9 },
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
            style: {},
            colors: '',
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'code', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.type'), field: 'type', width: 90 },
            { headerName: this.$t('common.table.itemLostOrFound'), field: 'item', width: 200 },
            { headerName: this.$t('common.table.itemColor'), field: 'color', width: 120, cellRenderer: 'colorRenderer' },
            { headerName: this.$t('common.table.locationLostOrFound'), field: 'location', width: 200 },
            { headerName: this.$t('common.table.value'), field: 'value', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('common.table.currentLocation'), field: 'current_location', width: 200 },
            { headerName: this.$t('common.table.dateLostOrFound'), field: 'date_posting', width: 133, valueFormatter: formatDate },
            { headerName: this.$t('common.table.isReturned'), field: 'is_return', width: 153, cellStyle: { textAlign: 'center' }, cellRenderer: 'checkListRenderer' },
            { headerName: this.$t('common.table.dateReturn'), field: 'date_return', width: 133, valueFormatter: formatDate },
            { headerName: this.$t('common.table.returnBy'), field: 'return_by', width: 200 },
            { headerName: this.$t('common.table.owner'), field: 'owner', width: 200 },
            { headerName: this.$t('common.table.phone'), field: 'phone', width: 200 },
            { headerName: this.$t('common.table.notes'), field: 'notes', width: 200 },
            { headerName: this.$t('common.table.active'), field: 'is_active', width: 80, cellStyle: { textAlign: 'center' }, cellRenderer: 'checkListRenderer' },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            colorRenderer: ColorRenderer,
            checkListRenderer: CheckListRenderer,
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
                    name: this.paramsData.is_active == true ? this.$t('common.contextMenu.deactive') : this.$t('common.contextMenu.active'),
                    disabled: !this.paramsData,
                    // icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleActiveDeactive(this.paramsData),
                },
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
                const { data } = await lostAndFoundResource.list(params);
                this.rowData = data;
                this.$closeLoadingIndicator(this);
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorFetchDataAlert();
            }
        },

        resetData() {
            this.vModel = {
                is_lost: '-1',
                item: '',
                date_posting: '',
                location: '',
                who: '',
                value: 0,
                current_location: '',
                color: '',
                is_return: false,
                date_return: '',
                return_by: '',
                owner: '',
                phone: '',
                notes: '',
                user_id: this.global.userInfo.code,
            };
            this.colors = '';
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
        },

        async showModal(idData, modeData) {
            // this.$loadingIndicator(this);
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                // this.$loadingIndicator(this);
                await this.editData();
                this.$closeLoadingIndicator(this);
            } else if (modeData == this.global.modeData.tracking) {
                await this.trackingData(idData);
                this.mainPopUp = true;
            } else if (modeData == this.global.modeData.insert) {
                // this.$loadingIndicator(this);
                // await this.getDataLookup();
                // this.$closeLoadingIndicator(this);
                this.mainPopUp = true;
            }
        },

        async editData() {
            try{
                const { data } = await lostAndFoundResource.get(this.idData);
                this.vModel = data;
                this.colors = data.color;
                this.setColor(this.colors);
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        handleActiveDeactive(paramsData) {
            $dialog.confirmation(this, 'updateActive', paramsData);
        },

        async updateActive(paramsData) {
            const params = {
                is_active: paramsData.is_active !== true,
                id_log: paramsData.id_log,
                user_id: this.global.userInfo.code,
            };
            try{
                this.$loadingIndicator(this);
                const { data } = await lostAndFoundResource.updateActive(params);
                await this.refreshData(this.search);
                this.$closeLoadingIndicator(this);
                $alert.acceptAlertSucces();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async updateData() {
            try{
                this.$loadingIndicator(this);
                const { data } = await lostAndFoundResource.update(this.vModel);
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
                const { data } = await lostAndFoundResource.store(this.vModel);
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
                await lostAndFoundResource.delete(data);
                this.refreshData(this.search);
                $alert.deleteAlertSuccess();
            } catch (error) {
                this.$closeLoadingIndicator(this);
                $alert.errorDeleteDataAlert();
            }
        },

        pickColor(val) {
            this.vModel.color = val.hex;
            this.setColor(val.hex);
        },
        setColor(val) {
            this.style = {
                backgroundColor: val,
            };
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.lostAndFound,
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
<style scoped>
#color{
    height: 40px;
    width: 100px;
}
</style>
