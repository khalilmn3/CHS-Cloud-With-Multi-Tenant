<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :enableRangeSelection="true"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :getContextMenuItems="getContextMenu"
                @cellContextMenu="handleRowRightClicked"
                :rowSelection="rowSelection"
                :rowData="userList"
                :defaultColDef="global.defColDef"
            ></ag-grid-vue>
        </vx-card>
        <!-----------start need setting manual---------------->
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.code : (modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="500"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
                <div v-if="modeDataValue == global.modeData.tracking">
                    <!-- additional :theData -->
                    <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                </div>
                <div v-else>
                    <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.code') }}</span>
                        </vs-col>
                        <vs-col vs-w="4">
                            <vs-input :maxLength="20" @input="v => { vModel.code = v.toUpperCase()}" v-bind:disabled="(modeDataValue == global.modeData.edit)" class="w-full" type="text" v-model="vModel.code" :description-text="errors.first('code') || dbErrors.code | toString" v-validate="'required'" name="code" />
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.full_name') }}</span>
                        </vs-col>
                        <vs-col vs-w="9">
                            <vs-input :maxLength="100" class="w-full" type="text" v-model="vModel.name" :description-text="errors.first('full name') || dbErrors.name | toString" v-validate="'required'" name="full name" />
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.email') }}</span>
                        </vs-col>
                        <vs-col vs-w="9">
                            <vs-input :maxLength="255" v-bind:disabled="(modeDataValue == global.modeData.edit)" class="w-full" type="text" v-model="vModel.email" :description-text="errors.first('email') || dbErrors.email | toString" v-validate="'required|email'" name="email" />
                        </vs-col>
                    </vs-row>
                     <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.role') }}</span>
                        </vs-col>
                        <vs-col class="wrap-form-select" vs-w="9">
                            <v-select id="form-select" :placeholder="$t('placeholder.select')" class="w-full height100" label="code" :reduce="value => value.code" :options="lookupUserGroup" v-model="vModel.group_code" v-validate="'required'" name="group code"></v-select>
                            <span class="error-text text-danger" v-show="errors.has('group code')">{{ errors.first('group code') }}</span>
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.password') }}</span>
                        </vs-col>
                        <vs-col vs-w="9">
                            <vs-input class="w-full" type="password" v-model="vModel.password" :description-text="errors.first('password') || dbErrors.password | toString" v-validate="'required|min:6'" name="password" ref="password"/>
                        </vs-col>
                    </vs-row>
                    <vs-row vs-type="flex" vs-align="center" class="mb-3">
                        <vs-col vs-w="3">
                            <span>{{ $t('user.confirmPassword') }}</span>
                        </vs-col>
                        <vs-col vs-w="9">
                            <vs-input class="w-full" type="password" v-model="vModel.c_password" :description-text="errors.first('confirm password') || dbErrors.c_password | toString" v-validate="'required|confirmed:password|min:6'" name="confirm password" data-vv-as="password"/>
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
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
import 'vue-tree-halower/dist/halower-tree.min.css';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

import UserSettingResource from '@/api/tools/user-setting/userSetting';

const userSettingResource = new UserSettingResource();

export default {
    name: 'User',

    props: {
        titleForm: String,
        routeApi: String,
        mainTableName: String,
    },

    components: {
        AgGridVue,
        Tracking,
        FilterHeader,
        NavigationHeader,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.name'), value: '0' },
                { text: this.$t('common.filter.email'), value: '1' },
                { text: this.$t('common.filter.group'), value: '2' },
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
            updateData: {},
            userList: null,
            lookupUserGroup: [],
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
            // { headerName: this.$t('table.id'), field: 'id', width: 90 },
            { headerName: this.$t('user.code'), field: 'code', width: 180 },
            { headerName: this.$t('user.full_name'), field: 'name', width: 220 },
            { headerName: this.$t('user.email'), field: 'email', width: 220 },
            { headerName: this.$t('user.role'), field: 'group_code', width: 150 },
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
        onGridReady() {},

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        // ------------------------additional for context menu ag-Grid-----------//
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
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
                if (node.data.code == vm.paramsData.code) {
                    node.setSelected(true, true);
                }
            });
        },
        // ------------------need setting manual for crud-----------------//
        refreshData(search) {
            this.search = search;
            this.getUserList();
        },

        async getUserList() {
            try {
                this.$vs.loading({ container: ('#layout--main'), scale: this.scaleLoadingLayout });
                const { data } = await userSettingResource.userList(this.search);
                this.userList = data;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async getUserGroup() {
            try {
                const { data } = await userSettingResource.userGroup();
                this.lookupUserGroup = data;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async editUser() {
            try {
                const { data } = await userSettingResource.editUser(this.idData.id);
                this.vModel = data;
                const decryptPassword = CryptoJS.AES.decrypt(data.password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8);
                this.vModel.password = decryptPassword;
                this.vModel.c_password = decryptPassword;
                this.mainPopUp = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        async updateUser() {
            try {
                const encryptPassword = CryptoJS.AES.encrypt(this.vModel.password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString();
                const encryptCPassword = CryptoJS.AES.encrypt(this.vModel.c_password, this.global._CRYPTO_KEY, { format: CryptoJSAesJson }).toString();
                this.updatedData = this.vModel;
                this.updatedData.password = encryptPassword;
                this.updatedData.c_password = encryptCPassword;
                await userSettingResource.updateUser(this.updatedData);
                this.mainPopUp = false;
                this.refreshData();
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.btnSaveDisabled = false;
            } catch (error) {
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.btnSaveDisabled = false;
                const message = error.response.data.error;
                this.dbErrors = message == undefined ? '' : message;
                $alert.errorSaveDataAlert(message);
            }
        },

        handleDeleteData(data) {
            $dialog.confirmationDelete(this, 'deleteData', data);
        },

        async deleteData(idData) {
            const params = {
                id: idData.id,
                user_id: this.global.userInfo.code,
            };
            try {
                await userSettingResource.deleteUser(params);
                this.refreshData();
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async insertUser() {
            try {
                const { data } = await userSettingResource.addUser(this.vModel);
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.mainPopUp = false;
                this.refreshData(this.search);
                this.btnSaveDisabled = false;
            } catch (error) {
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.btnSaveDisabled = false;
                const message = error.response.data.error;
                this.dbErrors = message == undefined ? '' : message;
                $alert.errorSaveDataAlert(message);
            }
        },

        resetData() {
            this.vModel = {
                code: '',
                name: '',
                email: '',
                password: '',
                c_password: '',
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
        },

        async showModal(idData, modeData) {
            this.$vs.loading({ container: ('#layout--main'), scale: this.scaleLoadingLayout });
            this.resetData(this.search);
            this.idData = idData;
            this.modeDataValue = modeData;
            await this.getUserGroup();
            this.mainPopUp = modeData == this.global.modeData.insert || modeData == this.global.modeData.tracking;
            if (modeData == this.global.modeData.edit) {
                this.editUser();
            } else if (modeData == this.global.modeData.tracking) {
                this.trackingData(idData);
            } else if (modeData == this.global.modeData.insert) {
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            }
        },

        saveData() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.btnSaveDisabled = true;
                    this.vModel.user_id = this.global.userInfo.code;
                    if (this.modeDataValue == 1) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.updateUser();
                    } else {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.insertUser();
                    }
                }
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
    },
    // get id user active//
    computed: {
        userId: {
            get() {
                return this.$store.state.auth.accountCode;
            },
        },
    },
    // ------------------end need setting manual for crud-----------------//
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
};
</script>
