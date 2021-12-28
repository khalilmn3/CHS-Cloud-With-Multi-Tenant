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
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="500"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                </div>
                <div v-else class="popup-body vs-con-loading__container pl-2 pr-1">
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                        <vs-col vs-lg="3" class="w-full">
                            <span>{{ $t('common.code') }}</span>
                        </vs-col>
                        <vs-col vs-lg="5" class="w-full">
                            <vs-input :maxLength="4" v-bind:disabled="(modeDataValue == global.modeData.edit)" @input="val => vModel.code = val.toUpperCase()" class="w-full" type="text" v-model="vModel.code" :description-text="errors.first('code') || dbErrors.code | toString" v-validate="'required'" name="code" />
                        </vs-col>
                    </vs-row>
                    <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                        <vs-col vs-lg="3" class="w-full">
                            <span>{{ $t('common.name') }}</span>
                        </vs-col>
                        <vs-col vs-lg="9" class="w-full">
                            <vs-input class="w-full" type="text" v-model="vModel.name" :description-text="errors.first('name') || dbErrors.code | toString" v-validate="'required'" name="name" />
                        </vs-col>
                    </vs-row>
                     <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
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
                     <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                        <vs-col vs-lg="3" class="w-full">
                            <span>{{ $t('common.idSort') }}</span>
                        </vs-col>
                        <vs-col vs-lg="9" class="wrap-form-select w-full">
                            <vs-input-number :label="$t('common.idSort')" class="w-full" v-model="vModel.id_sort"></vs-input-number>
                        </vs-col>
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
import $dialog from '@/utils/dialog.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';

// cell Renderer
import ColorRenderer from '@/views/pages/components/ag_grid-framework/color.js';

import { Slider } from 'vue-color';

export default {
    name: 'GuestType',

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
        'color-picker': Slider,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '1',
            searchFilterData: [
                { text: this.$t('common.filter.code'), value: '0' },
                { text: this.$t('common.filter.name'), value: '1' },
                { text: this.$t('common.filter.lastUpdate'), value: '2' },
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
            colors: '',
            style: {},
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'code', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.code'), field: 'code', width: 110 },
            { headerName: this.$t('common.table.name'), field: 'name', width: 350 },
            { headerName: this.$t('common.table.color'), field: 'color', width: 80, cellRenderer: 'colorRenderer' },
            { headerName: this.$t('common.table.sort'), field: 'id_sort', width: 80 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            colorRenderer: ColorRenderer,
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
                code: '',
                name: '',
                color: '',
                id_sort: 0,
                user_id: this.global.userInfo.code,
            };
            this.colors = {
                hsl: {
                    h: 150, s: 1, l: 0.5, a: 1,
                },
            };
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
        },

        showModal(idData, modeData) {
            this.$loadingIndicator(this)
            this.resetData(this.search);
            this.idData = idData.code;
            this.modeDataValue = modeData;
            this.mainPopUp = modeData == this.global.modeData.insert || modeData == this.global.modeData.tracking;
            if (modeData == this.global.modeData.edit) {
                this.editData();
                this.setColor();
            } else if (modeData == this.global.modeData.tracking) {
                this.trackingData(idData);
            } else if (modeData == this.global.modeData.insert) {
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            }
        },

        editData() {
            request
                .get(`${this.routeApi}/${this.idData}/edit`)
                .then((response) => {
                    this.vModel = response.data;
                    this.colors = response.data.color;
                    this.setColor(this.colors);
                    this.mainPopUp = true;
				    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }).catch((error) => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        updateData() {
            request
                .put(`${this.routeApi}/${this.idData}`, this.vModel)
                .then(() => {
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    this.mainPopUp = false;
                })
                .catch((error) => {
                    this.btnSaveDisabled = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        insertData() {
            request
                .post(this.routeApi, this.vModel)
                .then(() => {
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    this.mainPopUp = false;
                }).catch((error) => {
                    this.btnSaveDisabled = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        saveData() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    this.vModel.user_id = this.global.userInfo.code;
                    if (this.modeDataValue == 1) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.updateData();
                    } else {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.insertData();
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
                code: idData.code,
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

        pickColor(val) {
            this.vModel.color = val.hex;
            this.setColor(val.hex);
        },
        setColor(val) {
            this.style = {
                backgroundColor: val,
            };
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
<style>
#color{
    height: 40px;
    width: 100px;
}
</style>
