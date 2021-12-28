<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card  id="main-container" class="vs-con-loading__container">
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
            scrollOff
            userGroupForm
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="600"
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
                    <vs-row vs-type="flex" vs-align="center" vs-justify="flex-start" class="mt-2 ml-4">
                        <vs-col vs-lg="1">
                            <span>{{ $t('common.code') }}</span>
                        </vs-col>
                        <vs-col vs-lg="7">
                            <vs-input :maxLength="20" @input="v => { vModel.code = v.toUpperCase()}" v-bind:disabled="(modeDataValue == global.modeData.edit)" type="text" v-model="vModel.code" :description-text="errors.first('code') || dbErrors.code | toString" v-validate="'required'" name="code" />
                        </vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col class="w-full">
                            <vs-tabs v-model="vModel.tabIndex">
                                <vs-tab label="Menu Access"  value="0">
                                    <component :is="scrollbarTag" class="scroll-area" :settings="global.perfectScrollbarSettings">
                                        <vs-row>
                                            <vs-col class="w-full ml-4 pr-4">
                                                <v-tree ref="tree" :data='menuList' :halfcheck='true' :radio="true" :multiple="true" @node-select="menuSelectTab1()" @node-check="menuCheckTab1()"/>
                                            </vs-col>
                                        </vs-row>
                                    </component>
                                </vs-tab>
                                <vs-tab label="Report Access" value="1">
                                    <component :is="scrollbarTag" class="scroll-area" :settings="global.perfectScrollbarSettings">
                                        <vs-row>
                                            <vs-col class="w-full ml-4 pr-4">
                                                <v-tree ref="tree" :data='reportList' :halfcheck='true' :radio="true" :multiple="true" @node-select="menuSelectTab2()" @node-check="menuCheckTab2()"/>
                                            </vs-col>
                                        </vs-row>
                                    </component>
                                </vs-tab>
                                <vs-tab label="Special Access" value="2">
                                    <component :is="scrollbarTag" class="scroll-area" :settings="global.perfectScrollbarSettings">
                                        <vs-row>
                                            <vs-col class="w-full ml-4 pr-4">
                                                <v-tree id="special-access-tree" ref="tree" :data='specialAccessList' :halfcheck='true' :radio="true" :multiple="true" @node-select="menuSelectTab3()" @node-check="menuCheckTab3()"/>
                                            </vs-col>
                                        </vs-row>
                                    </component>
                                </vs-tab>
                                <vs-tab label="Other Access" value="3">
                                    <component :is="scrollbarTag" class="scroll-area" :settings="global.perfectScrollbarSettings">
                                        <vs-row>
                                            <vs-col class="w-full ml-4 pr-4">
                                                <v-tree id="other-access-tree" ref="tree" :data='otherAccessList' :halfcheck='true' :radio="true" :multiple="true" @node-select="menuSelectTab4()" @node-check="menuCheckTab4()"/>
                                            </vs-col>
                                        </vs-row>
                                    </component>
                                </vs-tab>
                            </vs-tabs>
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
import Tracking from '@/views/pages/components/Tracking.vue';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
import { VSelectTree, VTree } from 'vue-tree-halower';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

import UserSetting from '@/api/tools/user-setting/userSetting.js';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import FilterHeader from '@/views/pages/components/header/FilterHeader';

const userSetting = new UserSetting();

export default {
    name: 'UserGroup',

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
        VTree,
        VSelectTree,
        VuePerfectScrollbar,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.code'), value: '0' },
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
            // sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
            dataTracking: null,
            rowIndexBeforeDelete: undefined,
            // Parameter From Child
            idData: '',
            paramsData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            trackingPopup: false,
            firstDialog: 'firstDialog',
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            // Access Menu
            menuList: [],
            checkMenu: [],
            // 1234567890123456789012345678901234567890123456789012
            defaultAccessForm: '0000000000000000000000000000000000000000000000000000',
            // Access Report
            reportList: [],
            checkReport: [],
            // 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
            defaultAccessReport: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            // SPECIAL ACCESS
            //    1234567890123456789012
            defaultAccessSpecial: '0000000000000000000000',
            checkSpecialAccess: [],
            specialAccessList: [],

            // OTHER ACCESS
            //    1234567890123456789012
            defaultOtherAccess: '00000000000000000000000000',
            checkOtherAccess: [],
            otherAccessList: [],

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
            { headerName: this.$t('common.table.code'), field: 'code', width: 200 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 120 },
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
        // this.sideBar = {
        //     toolPanels: [
        //         {id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel'},
        //         {id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel'}
        //     ]
        // };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
        this.limitPageSize = this.global.limitDefaultPageSize;
    },

    methods: {
        addDialogCloseButton(elementID) {
            if (this.global.dialog.typeDialog === 'confirm') {
                const firstDialog = document.getElementById(elementID);
                if (firstDialog !== null) {
                    const headerDialog = firstDialog.getElementsByClassName('vs-dialog');

                    const vm = this;
                    const newElement = document.createElement('i');
                    newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
                    newElement.id = 'first-icon-dialog-close';
                    newElement.innerText = 'close';
                    newElement.addEventListener('click', () => {
                        vm.mainPopUp = false;
                    });
                    headerDialog[0].children[0].appendChild(newElement);
                }
            }
        },

        onGridReady() {
        },

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

        rowSelectedAfterRefresh() {
            const countRowdata = this.gridApi.getDisplayedRowCount();
            const vm = this;
            this.gridApi.forEachNode((node) => {
                if ((vm.vModel.code === undefined || vm.vModel.code === null) && node.rowIndex === 0 && vm.modeDataValue !== vm.global.modeData.delete) {
                    node.setSelected(true, true);
                    return false;
                }
                if (node.data.code === vm.vModel.code) {
                    if (vm.modeDataValue !== vm.global.modeData.delete) {
                        vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
                        node.setSelected(true, true);
                        return false;
                    }
                } else if (vm.modeDataValue === vm.global.modeData.delete && countRowdata > 0 && (vm.global.rowIndexBeforeDelete === node.rowIndex || (vm.global.rowIndexBeforeDelete - 1) === node.rowIndex)) {
                    node.setSelected(true, true);
                    vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
                    return false;
                }
            });
        },

        getRowIndexBeforeDelete() {
            const vm = this;
            this.gridApi.forEachNode((node) => {
                if (node.isSelected()) {
                    vm.global.rowIndexBeforeDelete = node.rowIndex;
                }
            });
        },
        // ------------------need setting manual for crud-----------------//
        refreshData(search) {
            this.search = search;
            this.$vs.loading({ container: ('#layout--main'), scale: this.scaleLoadingLayout });
            request
                .get(`${this.routeApi}/table/datagrid`, { params: search })
                .then((result) => {
                    this.rowData = result.data.modelGrid;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    setTimeout(() => {
                        this.rowSelectedAfterRefresh();
                    }, 100);
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetData() {
            this.vModel = {
                code: '',
                name: '',
                id_sort: 0,
                tabIndex: 1,
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
            this.mainPopUp = modeData == this.global.modeData.insert;
            if (modeData == this.global.modeData.edit) {
                this.editData();
            } else if (modeData == this.global.modeData.tracking) {
                this.trackingData(idData);
            } else if (modeData == this.global.modeData.insert) {
                setTimeout(() => {
                    this.setMenuList();
                    this.setAccessSpecialList();
                    this.setOtherAccessList();
                    this.setReportList(this.global.userInfo.groupCode, true);
                    this.vModel.tabIndex = 0;
                    if (this.global.dialog.isAddHeaderCloseButton) {
                        this.addDialogCloseButton(this.firstDialog);
                    }
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            }
        },

        editData() {
            request
                .get(`${this.routeApi}/${this.idData}/edit`)
                .then((response) => {
                    this.vModel = response.data.data;
                    this.vModel.access_form = response.data.accessMenu;
                    this.vModel.access_report = response.data.accessReport;
                    this.vModel.access_special = response.data.accessSpecial;
                    this.vModel.other_access = response.data.otherAccess;
                    this.setMenuList();
                    this.setAccessSpecialList();
                    this.setOtherAccessList();
                    this.setReportList(this.idData, false);
                    this.vModel.tabIndex = 0;
                    this.mainPopUp = true;
                    if (this.global.dialog.isAddHeaderCloseButton) {
                        setTimeout(() => {
                            this.addDialogCloseButton(this.firstDialog);
                        }, 100);
                    }
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
            setTimeout(() => {
                this.modeDataValue = this.global.modeData.delete;
                this.getRowIndexBeforeDelete();
            }, 100);

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
                    this.trackingPopup = true;
                    setTimeout(() => {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }, 100);
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        // Access main menu
        setMenuList() {
            if (this.vModel.access_form == undefined || this.vModel.access_form == null) {
                this.vModel.access_form = this.defaultAccessForm;
            }
            this.menuList = [
                {
                    id: 1000,
                    title: 'Front Desk',
                    expanded: true,
                    children: [
                        { id: this.global.accessUserMenuOrder.dashboard, title: this.$t('menuNameList.dashboard'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.dashboard] === '1') },
                        { id: this.global.accessUserMenuOrder.availability, title: this.$t('menuNameList.availability'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.availability] === '1') },
                        { id: this.global.accessUserMenuOrder.roomAvailability, title: this.$t('menuNameList.roomAvailability'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.roomAvailability] === '1') },
                        { id: this.global.accessUserMenuOrder.reservation, title: this.$t('menuNameList.reservation'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.reservation] === '1') },
                        { id: this.global.accessUserMenuOrder.guestGroup, title: this.$t('menuNameList.guestGroup'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.guestGroup] === '1') },
                        { id: this.global.accessUserMenuOrder.guestInHouse, title: this.$t('menuNameList.guestInHouse'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.guestInHouse] === '1') },
                        { id: this.global.accessUserMenuOrder.masterFolio, title: this.$t('menuNameList.masterFolio'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.masterFolio] === '1') },
                        { id: this.global.accessUserMenuOrder.deskFolio, title: this.$t('menuNameList.deskFolio'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.deskFolio] === '1') },
                        { id: this.global.accessUserMenuOrder.folioHistory, title: this.$t('menuNameList.folioHistory'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.folioHistory] === '1') },
                        { id: this.global.accessUserMenuOrder.houseKeeping, title: this.$t('menuNameList.houseKeeping'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.houseKeeping] === '1') },
                        { id: this.global.accessUserMenuOrder.lostAndFound, title: this.$t('menuNameList.lostAndFound'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.lostAndFound] === '1') },
                        { id: this.global.accessUserMenuOrder.cashierReport, title: this.$t('menuNameList.cashierReport'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.cashierReport] === '1'),},
                    ],
                },
                {
                    id: 1001,
                    title: 'Night Audit',
                    expanded: true,
                    children: [
                        { id: this.global.accessUserMenuOrder.autoPostTransaction, title: this.$t('menuNameList.autoPostTransaction'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.autoPostTransaction] === '1') },
                        { id: this.global.accessUserMenuOrder.dayendClose, title: this.$t('menuNameList.dayendClose'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.dayendClose] === '1') },
                    ],
                },
                {
                    id: 1004,
                    title: 'Marketing',
                    expanded: true,
                    children: [
                        { id: this.global.accessUserMenuOrder.company, title: this.$t('menuNameList.company'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.company] === '1') },
                        { id: this.global.accessUserMenuOrder.package, title: this.$t('menuNameList.package'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.package] === '1') },
                        { id: this.global.accessUserMenuOrder.roomRate, title: this.$t('menuNameList.roomRate'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.roomRate] === '1') },
                        { id: this.global.accessUserMenuOrder.phoneBook, title: this.$t('menuNameList.phoneBook'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.phoneBook] === '1') },
                    ],
                },
                {
                    id: 1002,
                    title: 'Back Office',
                    expanded: true,
                    children: [
                        { id: this.global.accessUserMenuOrder.apRefundDeposit, title: this.$t('menuNameList.apRefundDeposit'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.apRefundDeposit] === '1') },
                        { id: this.global.accessUserMenuOrder.apCommissionAndOther, title: this.$t('menuNameList.apCommissionAndOther'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.apCommissionAndOther] === '1') },
                        { id: this.global.accessUserMenuOrder.arCityLedger, title: this.$t('menuNameList.arCityLedger'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.arCityLedger] === '1') },
                        { id: this.global.accessUserMenuOrder.arCityLedgerInvoice, title: this.$t('menuNameList.arCityLedgerInvoice'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.arCityLedgerInvoice] === '1') },
                        { id: this.global.accessUserMenuOrder.bankTransaction, title: this.$t('menuNameList.bankTransaction'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.bankTransaction] === '1') },
                        { id: this.global.accessUserMenuOrder.bankReconciliation, title: this.$t('menuNameList.bankReconciliation'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.bankReconciliation] === '1') },
                        { id: this.global.accessUserMenuOrder.receipt, title: this.$t('menuNameList.receipt'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.receipt] === '1') },
                        { id: this.global.accessUserMenuOrder.incomeBudget, title: this.$t('menuNameList.incomeBudget'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.incomeBudget] === '1') },
                        { id: this.global.accessUserMenuOrder.budgetStatistic, title: this.$t('menuNameList.budgetStatistic'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.budgetStatistic] === '1') },
                        { id: this.global.accessUserMenuOrder.report, title: this.$t('menuNameList.report'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.report] === '1') },
                    ],
                },
                {
                    id: 1003,
                    title: 'Tools',
                    expanded: true,
                    children: [
                        { id: this.global.accessUserMenuOrder.user, title: this.$t('menuNameList.user'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.user] === '1') },
                        { id: this.global.accessUserMenuOrder.userGroup, title: this.$t('menuNameList.userGroup'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.userGroup] === '1') },
                        { id: this.global.accessUserMenuOrder.configuration, title: this.$t('menuNameList.configuration'), checked: (this.vModel.access_form[this.global.accessUserMenuOrder.configuration] === '1') },
                    ],
                },
            ];
            // this.menuCheckTab1();
        },

        setAccessMenu(menuChecked) {
            let tempAccesForm = this.defaultAccessForm;
            for (let i = 0; i < menuChecked.length; i++) {
                if (menuChecked[i].id < 1000) { // Filter root, we only get children
                    const index = menuChecked[i].id;
                    tempAccesForm = tempAccesForm.split('');
                    tempAccesForm.splice(index, 1, '1');
                    tempAccesForm = tempAccesForm.join('');
                }
            }
            if (tempAccesForm != this.defaultAccessForm) {
                this.vModel.access_form = tempAccesForm;
            }
        },

        menuCheckTab1() {
            this.checkMenu = this.$refs.tree.getCheckedNodes();
            this.setAccessMenu(this.checkMenu);
        },
        menuSelectTab1() {
            this.menuCheckTab1();
        },
        // Access Report
        async setReportList(groupCode, isNew) {
            // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            const { data } = await userSetting.reportListData({ code: groupCode, isNew });
            this.reportList = data.dataTree;
            // this.$vs.loading.close('#layout--main>.con-vs-loading');
        },
        setAccessReport(reportChecked) {
            let tempAccesReport = this.defaultAccessReport;
            for (let i = 0; i < reportChecked.length; i++) {
                if (reportChecked[i].tagOrder < 1000) { // Filter root, we only get children
                    const index = reportChecked[i].tagOrder;
                    tempAccesReport = tempAccesReport.split('');
                    tempAccesReport.splice(index, 1, '1');
                    tempAccesReport = tempAccesReport.join('');
                }
            }
            if (tempAccesReport != this.defaultAccessReport) {
                this.vModel.access_report = tempAccesReport;
            }
        },
        menuCheckTab2() {
            this.checkReport = this.$refs.tree.getCheckedNodes();
            this.setAccessReport(this.checkReport);
        },
        menuSelectTab2() {
            this.menuCheckTab2();
        },

        // SPECIAL ACCESS
        setAccessSpecialList() {
            if (this.vModel.access_special == undefined || this.vModel.access_special == null) {
                this.vModel.access_special = this.defaultAccessSpecial;
            }
            this.specialAccessList = [
                { id: this.global.accessSpecialOrder.unlockReservation, title: this.$t('specialAccessList.unlockReservation'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.unlockReservation] === '1') },
                { id: this.global.accessSpecialOrder.voidReservation, title: this.$t('specialAccessList.voidReservation'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.voidReservation] === '1') },
                { id: this.global.accessSpecialOrder.voidDeposit, title: this.$t('specialAccessList.voidDeposit'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.voidDeposit] === '1') },
                { id: this.global.accessSpecialOrder.correctDeposit, title: this.$t('specialAccessList.correctDeposit'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.correctDeposit] === '1') },
                { id: this.global.accessSpecialOrder.decreaseStay, title: this.$t('specialAccessList.decreaseStay'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.decreaseStay] === '1') },
                { id: this.global.accessSpecialOrder.scheduledRate, title: this.$t('specialAccessList.scheduledRate'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.scheduledRate] === '1') },
                { id: this.global.accessSpecialOrder.breakdown, title: this.$t('specialAccessList.breakdown'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.breakdown] === '1') },
                { id: this.global.accessSpecialOrder.extraCharge, title: this.$t('specialAccessList.extraCharge'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.extraCharge] === '1') },
                { id: this.global.accessSpecialOrder.complimentGuest, title: this.$t('specialAccessList.complimentGuest'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.complimentGuest] === '1') },
                { id: this.global.accessSpecialOrder.houseUseGuest, title: this.$t('specialAccessList.houseUseGuest'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.houseUseGuest] === '1') },
                { id: this.global.accessSpecialOrder.moveRoom, title: this.$t('specialAccessList.moveRoom'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.moveRoom] === '1') },
                { id: this.global.accessSpecialOrder.voidSubFolio, title: this.$t('specialAccessList.voidSubFolio'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.voidSubFolio] === '1') },
                { id: this.global.accessSpecialOrder.correctSubFolio, title: this.$t('specialAccessList.correctSubFolio'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.correctSubFolio] === '1') },
                { id: this.global.accessSpecialOrder.cancelCheckIn, title: this.$t('specialAccessList.cancelCheckIn'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.cancelCheckIn] === '1') },
                { id: this.global.accessSpecialOrder.cancelCheckOut, title: this.$t('specialAccessList.cancelCheckOut'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.cancelCheckOut] === '1') },
                { id: this.global.accessSpecialOrder.createMasterFolio, title: this.$t('specialAccessList.createMasterFolio'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.createMasterFolio] === '1') },
                { id: this.global.accessSpecialOrder.printMoreInvoice, title: this.$t('specialAccessList.printMoreInvoice'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.printMoreInvoice] === '1') },
                { id: this.global.accessSpecialOrder.modifyClosedJournal, title: this.$t('specialAccessList.modifyClosedJournal'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.modifyClosedJournal] === '1') },
                { id: this.global.accessSpecialOrder.transfertoDeskFolio, title: this.$t('specialAccessList.transfertoDeskFolio'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.transfertoDeskFolio] === '1') },
                { id: this.global.accessSpecialOrder.transfertoMasterFolio, title: this.$t('specialAccessList.transfertoMasterFolio'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.transfertoMasterFolio] === '1') },
                { id: this.global.accessSpecialOrder.businessSource, title: this.$t('specialAccessList.businessSource'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.businessSource] === '1') },
                { id: this.global.accessSpecialOrder.overrideRateDiscount, title: this.$t('specialAccessList.overrideRateDiscount'), checked: (this.vModel.access_special[this.global.accessSpecialOrder.overrideRateDiscount] === '1') },
            ];
        },
        setAccessSpecial(checked) {
            let tempAccesSpecial = this.defaultAccessSpecial;
            for (let i = 0; i < checked.length; i++) {
                if (checked[i].id < 1000) { // Filter root, we only get children
                    const index = checked[i].id;
                    tempAccesSpecial = tempAccesSpecial.split('');
                    tempAccesSpecial.splice(index, 1, '1');
                    tempAccesSpecial = tempAccesSpecial.join('');
                }
            }
            if (tempAccesSpecial != this.defaultAccessSpecial) {
                this.vModel.access_special = tempAccesSpecial;
            }
        },

        menuCheckTab3() {
            this.checkSpecialAccess = this.$refs.tree.getCheckedNodes();
            this.setAccessSpecial(this.checkSpecialAccess);
        },
        menuSelectTab3() {
            this.menuCheckTab3();
        },

        // Other Access
        setOtherAccessList() {
            if (this.vModel.other_access == undefined || this.vModel.other_access == null) {
                this.vModel.other_access = this.defaultOtherAccess.slice(0, 26);
            }
            this.otherAccessList = [
                {
                    id: 2000,
                    title: 'Deposit Tool',
                    expanded: true,
                    children: [
                        {id: this.global.otherAccessOrder.insertDeposit, title: this.$t('otherAccessList.insertDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.insertDeposit] === '1')},
                        { id: this.global.otherAccessOrder.cashDeposit, title: this.$t('otherAccessList.cashDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cashDeposit] === '1') },
                        { id: this.global.otherAccessOrder.cardDeposit, title: this.$t('otherAccessList.cardDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cardDeposit] === '1') },
                        { id: this.global.otherAccessOrder.cashRefundDeposit, title: this.$t('otherAccessList.cashRefundDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cashRefundDeposit] === '1') },
                        { id: this.global.otherAccessOrder.voidDeposit, title: this.$t('otherAccessList.voidDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.voidDeposit] === '1') },
                        { id: this.global.otherAccessOrder.correctionDeposit, title: this.$t('otherAccessList.correctionDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.correctionDeposit] === '1') },
                        { id: this.global.otherAccessOrder.transferDeposit, title: this.$t('otherAccessList.transferDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.transferDeposit] === '1') },
                        { id: this.global.otherAccessOrder.updateSubDepartmentDeposit, title: this.$t('otherAccessList.updateSubDepartmentDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateSubDepartmentDeposit] === '1') },
                        { id: this.global.otherAccessOrder.updateRemarkDeposit, title: this.$t('otherAccessList.updateRemarkDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateRemarkDeposit] === '1') },
                        { id: this.global.otherAccessOrder.updateDocumentNumberDeposit, title: this.$t('otherAccessList.updateDocumentNumberDeposit'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateDocumentNumberDeposit] === '1') },
                    ],
                },
                {
                    id: 2001,
                    title: 'Folio Transaction',
                    expanded: true,
                    children: [
                        { id: this.global.otherAccessOrder.chargeTransaction, title: this.$t('otherAccessList.chargeTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.chargeTransaction] === '1') },
                        { id: this.global.otherAccessOrder.cashTransaction, title: this.$t('otherAccessList.cashTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cashTransaction] === '1') },
                        { id: this.global.otherAccessOrder.cardTransaction, title: this.$t('otherAccessList.cardTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cardTransaction] === '1') },
                        { id: this.global.otherAccessOrder.directBillTransaction, title: this.$t('otherAccessList.directBillTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.directBillTransaction] === '1') },
                        { id: this.global.otherAccessOrder.updateDirectBillTransaction, title: this.$t('otherAccessList.updateDirectBillTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateDirectBillTransaction] === '1') },
                        { id: this.global.otherAccessOrder.cashRefundTransaction, title: this.$t('otherAccessList.cashRefundTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.cashRefundTransaction] === '1') },
                        { id: this.global.otherAccessOrder.otherPaymentTransaction, title: this.$t('otherAccessList.otherPaymentTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.otherPaymentTransaction] === '1') },
                        { id: this.global.otherAccessOrder.voidTransaction, title: this.$t('otherAccessList.voidTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.voidTransaction] === '1') },
                        { id: this.global.otherAccessOrder.correctionTransaction, title: this.$t('otherAccessList.correctionTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.correctionTransaction] === '1') },
                        { id: this.global.otherAccessOrder.transferTransaction, title: this.$t('otherAccessList.transferTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.transferTransaction] === '1') },
                        { id: this.global.otherAccessOrder.updateSubDepartmentTransaction, title: this.$t('otherAccessList.updateSubDepartmentTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateSubDepartmentTransaction] === '1') },
                        { id: this.global.otherAccessOrder.updateRemarkTransaction, title: this.$t('otherAccessList.updateRemarkTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateRemarkTransaction] === '1') },
                        { id: this.global.otherAccessOrder.updateDocumentNumberTransaction, title: this.$t('otherAccessList.updateDocumentNumberTransaction'), checked: (this.vModel.other_access[this.global.otherAccessOrder.updateDocumentNumberTransaction] === '1') },
                        { id: this.global.otherAccessOrder.checkOut, title: this.$t('otherAccessList.checkOut'), checked: (this.vModel.other_access[this.global.otherAccessOrder.checkOut] === '1') },
                        { id: this.global.otherAccessOrder.printFolio, title: this.$t('otherAccessList.printFolio'), checked: (this.vModel.other_access[this.global.otherAccessOrder.printFolio] === '1') },
                    ],
                },
                {
                    id: 2002,
                    title: 'Preview Report',
                    expanded: true,
                    children: [
                        // {id: this.global.otherAccessOrder.editReport, title: this.$t('otherAccessList.editReport'), checked: (this.vModel.other_access[this.global.otherAccessOrder.editReport] === '1')},
                        { id: this.global.otherAccessOrder.exportReport, title: this.$t('otherAccessList.exportReport'), checked: (this.vModel.other_access[this.global.otherAccessOrder.exportReport] === '1') },
                        { id: this.global.otherAccessOrder.customizeReport, title: this.$t('otherAccessList.customizeReport'), checked: (this.vModel.other_access[this.global.otherAccessOrder.customizeReport] === '1') },
                    ],
                },
            ];
            // this.menuCheckTab1();
        },

        setOtherAccess(menuChecked) {
            let tempOtherAccess = this.defaultOtherAccess;
            for (let i = 0; i < menuChecked.length; i++) {
                if (menuChecked[i].id < 1000) { // Filter root, we only get children
                    const index = menuChecked[i].id;
                    tempOtherAccess = tempOtherAccess.split('');
                    tempOtherAccess.splice(index, 1, '1');
                    tempOtherAccess = tempOtherAccess.join('');
                }
            }
            if (tempOtherAccess != this.defaultOtherAccess) {
                this.vModel.other_access = tempOtherAccess;
            }
        },

        menuCheckTab4() {
            this.checkOtherAccess = this.$refs.tree.getCheckedNodes();
            this.setOtherAccess(this.checkOtherAccess);
        },
        menuSelectTab4() {
            this.menuCheckTab4();
        },
        //
        back() {
            this.mainPopUp = false;
        },

    },
    // ------------------end need setting manual for crud-----------------//
    computed: {
        scrollbarTag() { return this.$store.getters.scrollbarTag; },
    },

    created() {
        // Handle Back Button & forward on browser create hook
        const unregisterRouterGuard = this.$router.beforeEach((to, from, next) => {
            if (this.mainPopUp) {
                this.back();
                next(false);
            } else {
                next();
            }
        });

        // Destroyed hook
        this.$once('hook:destroyed', () => {
            unregisterRouterGuard();
        });
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
};
</script>
<style>
.halo-tree #special-access-tree .tree-expand {
    display: none !important;
}
</style>
