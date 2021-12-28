<template>
    <div>
        <navigation-header insertButton @showModal="showModal" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <vx-card id="layout--main" class="vs-con-loading__container">
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
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking && activeTab == 1"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.code : (modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="600"
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
                    <vs-tabs class="popup-container" vs-position="left">
                        <vs-tab id="package" @click="activeTab = 1" :label="$t('configuration.title.package')"  data-vv-scope="package">
                            <vs-row vs-type="flex" vs-justify="space-between">
                                <vs-row class="label">{{$t('common.code')}}</vs-row>
                                <vs-row>
                                    <vs-input :disabled="(modeDataValue == global.modeData.edit)" @input="v => { vModel.code = v.toUpperCase()}" class="md:w-4/12 w-full" :placeholder="$t('common.code')" v-model="vModel.code" :maxLength="10"
                                    :description-text="errors.first('package.code') || dbErrors.code | toString" v-validate="'required'" name="code" data-vv-scope="package"/>
                                    <vs-checkbox class="w-full md:w-2/12" v-model="vModel.is_active" >{{ $t('common.active') }}</vs-checkbox>
                                    <vs-checkbox class="w-full md:w-2/12" v-model="vModel.is_online" >{{ $t('common.online') }}</vs-checkbox>
                                    <vs-checkbox class="w-full md:w-4/12" v-model="vModel.show_in_transaction" >{{ $t('common.showInTransaction') }}</vs-checkbox>
                                </vs-row>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <vs-input class="w-full md:w-1/2" :label="$t('common.name')" :placeholder="$t('common.name')" v-model="vModel.name"
                                :description-text="errors.first('package.name') || dbErrors.name | toString" v-validate="'required'" name="name" data-vv-scope="package" />
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.subDepartment')}}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" :clearable="false" :placeholder="$t('common.select')" label="name" :reduce="value => value.code" :options="dataLookup.sub_department" v-model="vModel.sub_department_code" @input="changeSubDepartment" v-validate="'required'" name="sub department" data-vv-scope="package"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('package.sub department')">{{ errors.first('package.sub department') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.account')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" label="name" :clearable="false" class="w-full height150" :reduce="value => value.code" :options="accounts" v-model="vModel.account_code" v-validate="'required'" name="account" data-vv-scope="package">
                                            <template slot="option" slot-scope="option">
                                                {{ option.code }} | {{ option.name }}
                                            </template>
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('package.account')">{{ errors.first('package.account') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.taxAndService')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" :clearable="false" class="w-full height150" label="name" :reduce="value => value.code" :options="dataLookup.tax_and_service" v-model="vModel.tax_and_service_code" v-validate="'required'" name="tax and service" data-vv-scope="package"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('package.tax and service')">{{ errors.first('package.tax and service') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number class="w-full md:w-1/2" :label="$t('common.amount')" :placeholder="$t('common.amount')" v-model="vModel.amount" :description="errors.first('package.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="package" />
                                <input-number :disabled="vModel.per_pax" ref="quantity" class="w-full sm:w-1/4" :label="$t('common.quantity')" :placeholder="$t('common.quantity')" v-model="vModel.quantity" :description-text="errors.first('package.quantity') || dbErrors.quantity | toString" v-validate="'required'" name="quantity" data-vv-scope="package" />
                                <div class="w-full sm:w-1/4">
                                    <vs-row class="check-box-pax">
                                        <vs-checkbox class="w-full" v-model="pPerPax" @input="changePerPax" >{{ $t('common.perPax') }}</vs-checkbox>
                                    </vs-row>
                                    <vs-row>
                                        <vs-checkbox :disabled="!vModel.per_pax" class="w-full" v-model="vModel.include_child">{{ $t('common.includeChild') }}</vs-checkbox>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.chargeFrequency')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :reduce="value => value.code" :clearable="false" label="name" class="w-full height100" :options="dataLookup.charge_frequency" v-model="vModel.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="package"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('package.charge frequency')">{{ errors.first('package.charge frequency') }}</span>
                                    </vs-row>
                                </div>
                                <vs-input disabled class="w-full md:w-1/2" :label="$t('common.description')" :placeholder="$t('common.description')" v-model="vModel.description" />
                                </vs-row>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                <vs-divider>Extra Pax</vs-divider>
                                <vs-row vs-type="flex" vs-justify="space-between">
                                    <vs-input-number class="number-input md:w-3/12" :label="$t('common.maxPax')+':'" v-model="vModel.max_pax" min="1" v-validate="'required'" name="adult"/>
                                    <input-number class="w-full md:w-4/12" :label="$t('common.extraPax')" :placeholder="$t('common.extraPax')" v-model="vModel.extra_pax" />
                                    <vs-checkbox class="checkbox-3col w-full md:w-3/12" v-model="vModel.per_pax_extra">{{ $t('common.perPax') }}</vs-checkbox>
                                </vs-row>
                                <vs-divider class="mt-5"></vs-divider>
                            </vs-row>
                        </vs-tab>
                        <vs-tab :disabled="breakdownTab" @click="activeTab = 2" id="breakdown" :label="$t('configuration.title.breakdown')">
                            <!-- BREAKDOWN TABLE COMPONENT -->
                            <breakdown :table="true" @showModal="popActive" @delete="handleDeleteBreakdown" :data="breakdowns"></breakdown>
                        </vs-tab>
                        <vs-tab :disabled="businessSourcesTab" @click="activeTab = 3" id="business" :label="$t('configuration.title.businessSource')">
                            <!-- BUSINESS TABLE COMPONENT -->
                            <business-source :table="true" @showModal="showBusinessSource" type="package" @delete="handleDeleteBusinessSource" :data="businessSources"></business-source>
                        </vs-tab>
                    </vs-tabs>
                </div>

            </template>
        </dialog-prompt>
        <!----------- POPUP BREAKDOWN ------------------>
                <!-- <dialog-prompt button1 -------- //:button1="(modeChildValue === global.modeBreakdown.insert || modeChildValue === global.modeBreakdown.edit) || (modeChildValue === global.modeBusinessSource.insert || modeChildValue === global.modeBusinessSource.edit)" -->
                <dialog-prompt :button1="modeChildValue !== global.modeBreakdown.tracking && modeChildValue !== global.modeBusinessSource.tracking"
                    :title="title"
                    :width="modeChildValue === global.modeBreakdown.insert || modeChildValue === global.modeBreakdown.edit ? 600 : ''"
                    :active="childPopup"
                    :idButton1="'button-save-child'"
                    :buttonDisabled1="btnSaveDisabled2"
                    @button1="saveData()"
                    @close="val=>childPopup = val">
                    <template #body>
                        <div v-if="modeChildValue === global.modeBreakdown.tracking || modeChildValue === global.modeBusinessSource.tracking ">
                            <tracking :idData="idData" :theData="dataTracking" :tableName="mainTableName"></tracking>
                        </div>
                        <div v-else-if="modeChildValue === global.modeBreakdown.insert || modeChildValue === global.modeBreakdown.edit">
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.subDepartment')}}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" :clearable="false" id="form-select" :placeholder="$t('common.select')" label="name" :reduce="value => value.code" :options="dataLookup.sub_department" v-model="vBreakdown.sub_department_code" @input="changeSubDepartment" v-validate="'required'" name="sub department" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.sub department')">{{ errors.first('breakdown.sub department') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.account')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" label="name" class="w-full height200" :clearable="false" :options="accounts2" v-model="account_code" @input="changeAccount2" v-validate="'required'" name="account" data-vv-scope="breakdown">
                                            <template slot="option" slot-scope="option">
                                                {{ option.code }} | {{ option.name }}
                                            </template>
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.account')">{{ errors.first('breakdown.account') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.businessSource')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :disabled="account_code.sub_group_code !== global.subGroupAccount.accountPayable" :placeholder="$t('common.select')" label="name" :clearable="false" class="w-full height200" :reduce="value => value.code" :options="dataLookup.company" v-model="vBreakdown.company_code" v-validate="account_code.sub_group_code === global.subGroupAccount.accountPayable ? 'required' : ''" name="company" data-vv-scope="breakdown">
                                            <template slot="option" slot-scope="option">
                                            </template>
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.company')">{{ errors.first('breakdown.company') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.taxAndService')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" :clearable="false" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.tax_and_service" v-model="vBreakdown.tax_and_service_code" v-validate="'required'" name="tax and service" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.tax and service')">{{ errors.first('breakdown.tax and service') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number ref="quantity" class="w-full sm:w-1/4" :label="$t('common.amount')" :placeholder="$t('common.amount')" v-model="vBreakdown.amount" :description="errors.first('breakdown.amount') || dbErrors.quantity | toString" v-validate="'required'" name="amount" data-vv-scope="breakdown" />
                                <div class="w-full sm:w-1/4">
                                    <vs-row class="check-box-pax">
                                        <vs-radio class="w-full" v-model="vBreakdown.is_amount_percent" vs-name="percent_amount" vs-value="-1" >%</vs-radio>
                                    </vs-row>
                                    <vs-row class="check-box-pax">
                                        <vs-radio class="w-full" v-model="vBreakdown.is_amount_percent" vs-name="" vs-value="0">{{ $t('common.amount') }}</vs-radio>
                                    </vs-row>
                                </div>
                                <input-number :disabled="vBreakdown.per_pax" ref="quantity" class="w-full sm:w-1/4" :label="$t('common.quantity')" :placeholder="$t('common.quantity')" v-model="vBreakdown.quantity" :description="errors.first('breakdown.quantity') || dbErrors.quantity | toString" v-validate="'required'" name="quantity" data-vv-scope="breakdown"/>
                                <div class="w-full sm:w-1/4">
                                    <vs-row class="check-box-pax">
                                        <vs-checkbox class="w-full" v-model="bPerPax" @input="changePerPax" >{{ $t('common.perPax') }}</vs-checkbox>
                                    </vs-row>
                                    <vs-row>
                                        <vs-checkbox :disabled="!vBreakdown.per_pax" class="w-full" v-model="vBreakdown.include_child">{{ $t('common.includeChild') }}</vs-checkbox>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.chargeFrequency')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :reduce="value => value.code" label="name" :clearable="false" class="w-full height100" :options="dataLookup.charge_frequency" v-model="vBreakdown.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.charge frequency')">{{ errors.first('breakdown.charge frequency') }}</span>
                                    </vs-row>
                                </div>
                                <vs-input class="w-full md:w-1/2" :label="$t('common.remark')" :placeholder="$t('common.remark')" v-model="vBreakdown.remark" />
                            </vs-row>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                <vs-divider>Extra Pax</vs-divider>
                                <vs-row vs-type="flex" vs-justify="space-between">
                                    <vs-input-number class="number-input md:w-3/12" :label="$t('common.maxPax')+':'" v-model="vBreakdown.max_pax" min="1" />
                                    <input-number class="w-full md:w-4/12" :label="$t('common.extraPax')" :placeholder="$t('common.extraPax')" v-model="vBreakdown.extra_pax" />
                                    <vs-checkbox class="checkbox-3col w-full md:w-3/12" v-model="vBreakdown.per_pax_extra">{{ $t('common.perPax') }}</vs-checkbox>
                                </vs-row>
                                <vs-divider class="mt-5"></vs-divider>
                            </vs-row>
                        </div>
                        <!-- END POPUP BREAKDOWN -->
                        <!-- POPUP BUSINESS SOURCE -->
                        <div v-else-if="modeChildValue === global.modeBusinessSource.insert || modeChildValue === global.modeBusinessSource.edit">
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.account')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" label="name" class="w-full height200" :reduce="value => value.code" :options="accounts3" v-model="vBusiness.account_code" v-validate="'required'" name="account" data-vv-scope="business">
                                            <template slot="option" slot-scope="option">
                                                {{ option.code }} | {{ option.name }}
                                            </template>
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('business.account')">{{ errors.first('business.account') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.businessSource')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" label="name" class="w-full height150" :reduce="value => value.code" :options="dataLookup.company" v-model="vBusiness.company_code" v-validate="'required'" name="business source" data-vv-scope="business">
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('business.business source')">{{ errors.first('business.business source') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.commissionType')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('common.select')" label="name" class="w-full height100" :reduce="value => value.code" :options="dataLookup.commission_type" v-model="vBusiness.commission_type_code" v-validate="'required'" name="commission type" data-vv-scope="business">
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('business.commission type')">{{ errors.first('business.commission type') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number class="w-full sm:w-1/2" :label="$t('common.commissionValue')" :placeholder="$t('common.commissionValue')" v-model="vBusiness.commission_value" :description="errors.first('business.commission value') || dbErrors.quantity | toString" v-validate="'required'" name="commission value" data-vv-scope="business" />
                            </vs-row>
                        </div>
                    </template>
                </dialog-prompt>
                <!-- </vs-popup> -->
                <!--------- END POPUP BUSINESSSOURCE ------------->
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
import Breakdown from '@/views/pages/Tools/configurations/tab-components/Breakdown.vue';
import BusinessSource from '@/views/pages/Tools/configurations/tab-components/BusinessSource.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import { rowSelectedAfterRefresh, getRowIndexBefore, generateIconContextMenuAgGrid } from '@/utils/general.js';
// <!------------------additional element---------------------->
// inputnumber//
import InputNumber from '@/views/pages/components/Number';
// render icon for ag-grid//
import SmokeRenderer from '@/views/pages/components/ag_grid-framework/smoke_icon';
import ChecklistRenderer from '@/views/pages/components/ag_grid-framework/checklist.js';
// ------for format----- //
import { formatNumber } from '@/utils/format.js';
// <!------------------end additional element---------------------->

export default {
    name: 'Package',

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
        Breakdown,
        BusinessSource,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.code'), value: '0' },
                { text: this.$t('common.filter.name'), value: '1' },
                { text: this.$t('common.filter.outlet'), value: '2' },
                { text: this.$t('common.filter.product'), value: '3' },
                { text: this.$t('common.filter.subDepartment'), value: '4' },
                { text: this.$t('common.filter.account'), value: '5' },
                { text: this.$t('common.filter.taxAndService'), value: '6' },
                { text: this.$t('common.filter.chargeFrequency'), value: '7' },
                { text: this.$t('common.filter.lastUpdate'), value: '8' },
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
            modePopUp: 0,
            modeDataValueTracking: 0,
            modeChildValue: '',
            // data error handling from laravel validation//
            dbErrors: {},
            // Pop Up
            mainPopUp: false, // poopup package
            childPopup: false, // popup breakdown & business source
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {}, // package
            vBreakdown: {}, // breakdown
            vBusiness: {},
            packageCode: '',
            account_code: {},
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            accounts: [],
            accounts2: [],
            accounts3: [],
            // Data table//
            breakdowns: [],
            businessSources: [],
            // For watch disable Input if pPerPax active
            pPerPax: false,
            bPerPax: false,
            // save disable button
            btnSaveDisabled1: false,
            btnSaveDisabled2: false,
            activeTab: 0,
            saved: false,
            // api//
            breakdownApi: 'packagebreakdown',
            businessSourcesApi: 'business',
            // title popup//
            title: '',
            breakdownTab: true,
            businessSourcesTab: true,
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
            { headerName: this.$t('common.table.action'), field: 'code', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.code'), field: 'code', width: 110 },
            { headerName: this.$t('common.table.name'), field: 'name', width: 300 },
            { headerName: this.$t('common.table.outlet'), field: 'outlet', width: 250 },
            { headerName: this.$t('common.table.product'), field: 'product', width: 250 },
            { headerName: this.$t('common.table.subDepartment'), field: 'sub_department', width: 200 },
            { headerName: this.$t('common.table.account'), field: 'account', width: 200 },
            { headerName: this.$t('common.table.quantity'), field: 'quantity', width: 92, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('common.table.amount'), field: 'amount', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('common.table.perPax'), field: 'per_pax', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.per_pax' },
            { headerName: this.$t('common.table.includeChild'), field: 'include_child', width: 115, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.include_child' },
            { headerName: this.$t('common.table.taxAndService'), field: 'tax_and_service', width: 250 },
            { headerName: this.$t('common.table.chargeFrequency'), field: 'charge_frequency', width: 143 },
            { headerName: this.$t('common.table.maxPax'), field: 'max_pax', width: 90 },
            { headerName: this.$t('common.table.extraPax'), field: 'extra_pax', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: `${this.$t('common.table.perPax')}2`, field: 'per_pax_extra', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.per_pax_extra' },
            { headerName: this.$t('common.table.showInTransaction'), field: 'show_in_transaction', width: 155, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.show_in_transaction' },
            { headerName: this.$t('common.table.active'), field: 'is_active', width: 100, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.is_active' },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            smokeRenderer: SmokeRenderer,
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
                outlet_code: '',
                product_code: '',
                sub_department_code: 'FRON',
                account_code: '',
                quantity: 1,
                amount: 0,
                per_pax: false,
                include_child: false,
                tax_and_service_code: '',
                charge_frequency_code: '1',
                max_pax: 1,
                extra_pax: 0,
                per_pax_extra: false,
                show_in_transaction: true,
                is_online: false,
                is_active: true,
            };

            this.packageCode = '';
            this.breakdowns = [],
            this.businessSources = [],
            this.dbErrors = {};
            this.dataTracking = null;
            this.btnSaveDisabled1 = false;
            this.saved = false;
            this.pPerPax = false;
            this.resetValidator();
        },

        async showModal(idData, modeData) {
            this.$vs.loading({
                container: ('#layout--main'),
                scale: this.global.scaleLoadingMainLayout,
            });
            this.resetData();
            this.idData = idData;
            this.modeDataValue = modeData;
            this.breakdownTab = modeData !== this.global.modeData.edit;
            this.businessSourcesTab = modeData !== this.global.modeData.edit;
            // this.$nextTick(() => { document.getElementById('package').click(); });
            if (modeData === this.global.modeData.edit) {
                this.activeTab = 1;
                await this.editData();
                await this.getDataLookUp();
                this.mainPopUp = true;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                this.getBreakdown();
                this.getBusinessSource();
            } else if (modeData === this.global.modeData.insert) {
                this.activeTab = 1;
                this.tabActive();
                await this.getDataLookUp();
                this.mainPopUp = true;
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            } else if (modeData === this.global.modeData.tracking) {
                this.trackingData(idData);
            }
        },
        // event click checkbox perpax
        changePerPax(val) {
            if (this.childPopup) {
                if (val) {
                    this.vBreakdown.max_pax = 1000;
                    this.vBreakdown.quantity = 1;
                    this.vBreakdown.per_pax = val;
                } else {
                    this.vBreakdown.max_pax = 1;
                    this.vBreakdown.per_pax = val;
                }
            } else if (val) {
                this.vModel.max_pax = 1000;
                this.vModel.quantity = 1;
                this.vModel.per_pax = val;
            } else {
                this.vModel.max_pax = 1;
                this.vModel.per_pax = val;
            }
        },

        tabActive() {
            this.btnSaveDisabled1 = this.activeTab == 1 ? (!!this.saved) : true;
        },

        async editData() {
            this.btnSaveDisabled1 = false;
            request
                .get(`${this.routeApi}/${this.idData.code}/edit`)
                .then(async (response) => {
                    const { data } = await response;
                    this.vModel = data;
                    this.packageCode = data.code;
                    this.pPerPax = data.per_pax;
                }).catch((error) => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        updateData(data) {
            request
                .put(`${this.routeApi}/${this.idData.code}`, data)
                .then(() => {
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.saved = true;
                    this.$nextTick(()=>{document.getElementById('breakdown').click();})
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                })
                .catch((error) => {
                    this.btnSaveDisabled1 = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        insertData(data) {
            request.post(this.routeApi, data)
                .then((response) => {
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    this.saved = true;
                    this.packageCode = response.data.package_code;
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.breakdownTab = false;
                    this.businessSourcesTab = false;
                    this.$nextTick(()=>{document.getElementById('breakdown').click();})
                    this.getBreakdown();
                    this.getBusinessSource();
                })
                .catch((error) => {
                    this.btnSaveDisabled1 = false;
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        saveData() {
            const validate = this.childPopup === false ? 'package' : (this.modePopUp == 1 ? 'breakdown' : 'business'); // validation SCOPE
            this.$validator.validateAll(validate).then((result) => {
                if (result) {
                    this.vModel.user_id = this.global.userInfo.code;
                    this.vBreakdown.user_id = this.global.userInfo.code;
                    this.vBreakdown.package_code = this.packageCode;
                    this.vBreakdown.account_code = this.account_code.code === undefined ? this.account_code : this.account_code.code;
                    if (!this.childPopup) {
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.btnSaveDisabled1 = true;
                        if (this.modeDataValue === this.global.modeData.insert) {
                            this.insertData(this.vModel);
					    } else if (this.modeDataValue === this.global.modeData.edit) {
                            this.updateData(this.vModel);
                        }
                    } else {
                        this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                        this.btnSaveDisabled2 = true;
                        if (this.modeChildValue == this.global.modeBreakdown.insert) {
                            this.insertBreakdown();
                        } else if (this.modeChildValue == this.global.modeBreakdown.edit) {
                            this.updateBreakdown();
                        } else if (this.modeChildValue == this.global.modeBusinessSource.insert) {
                            this.insertBusinessSource();
                        } else if (this.modeChildValue == this.global.modeBusinessSource.edit) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.updateBusinessSource();
                        }
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
                id: idData.code,
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
            request.post('tracking/datagrid', data)
                .then((result) => {
                    this.dataTracking = result.data.modelGrid;
                    this.mainPopUp = true;
                    setTimeout(() => {
                        this.$vs.loading.close('#layout--main>.con-vs-loading');
                    }, 100);
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        // ------------------additional load data lookup----------------------//

        async getDataLookUp() {
            const {data} = await request.get(`${this.routeApi}/form/datalookup`);
            this.dataLookup = data;
            if (this.activeTab > 1) {
                await this.getAccount2();
            } else {
                await this.getAccount();
            }
        },

        changeSubDepartment(val) {
            if (!this.childPopup) {
                this.vModel.account_code = '';
                this.getAccount();
            } else {
                this.account_code = '';
                this.vBreakdown.account_code = '';
                this.getAccount2();
            }
        },

        changeAccount2() {
            this.vBreakdown.company_code = this.account_code.sub_group_code ? '' : this.vBreakdown.company_code;
        },

        async getAccount() {
            const datax = {
                sub_department_code: this.vModel.sub_department_code,
            };
            const { data } = await request.get(`${this.routeApi}/form/account`, { params: datax });
            this.accounts = data;
        },
        // --------------------------- CRUD FOR BREAKDOWN-------------------------------//
        // get Account Form Breakdown//
        async getAccount2() {
            const datax = {
                sub_department_code: this.vBreakdown.sub_department_code,
            };
            const { data } = await request.get(`${this.routeApi}/form/account`, { params: datax });
            this.$nextTick(()=>{this.accounts2 = data;});
        },

        getBreakdown() {
            request.get(`${this.breakdownApi}/table/datagrid/${this.packageCode}`)
                .then((response) => {
                    this.breakdowns = response.data;
                });
        },
        insertBreakdown() {
            this.vBreakdown.account_code = this.account_code.code;
            this.vBreakdown.package_code = this.packageCode;
            request.post(this.breakdownApi, this.vBreakdown)
                .then(() => {
                    this.getBreakdown();
                    this.childPopup = false;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.acceptAlertSucces();
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },
        updateBreakdown() {
            request.put(`${this.breakdownApi}/${this.vBreakdown.id_log}`, this.vBreakdown)
                .then(() => {
                    this.getBreakdown();
                    $alert.acceptAlertSucces();
                    this.childPopup = false;
				    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        async editBreakdown(val) {
            this.btnSaveDisabled2 = false;
            const { data } = await request.get(`${this.breakdownApi}/${val.id_log}/edit`);
            this.vBreakdown = data.breakdown;
            this.account_code = data.account;
            this.bPerPax = data.breakdown.per_pax;
        },

        handleDeleteBreakdown(data) {
            $dialog.confirmationDelete(this, 'deleteBreakdown', data);
        },

        deleteBreakdown(val) {
            const data = {
                id: val.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            request.post(`${this.breakdownApi}/delete`, data).then(() => {
                this.getBreakdown();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.deleteAlertSuccess();
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },

        trackingBreakdown(val) {
            const data = {
                id_log: val.id_log,
                table: 'cfg_init_package_breakdown',
            };
            request.post('tracking/datagrid', data)
                .then((response) => {
                    this.dataTracking = response.data.modelGrid;
                    this.childPopup = true;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }).catch((error) => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetBreakdown() {
            this.vBreakdown = {
                package_code: this.packageCode,
                outlet_code: '',
                product_code: '',
                sub_department_code: 'FRON',
                account_code: '',
                company_code: '',
                quantity: 1,
                is_amount_percent: '0',
                amount: 0,
                per_pax: false,
                include_child: false,
                remark: '',
                tax_and_service_code: '',
                charge_frequency_code: '1',
                max_pax: 1,
                extra_pax: 0,
                per_pax_extra: false,
                user_id: this.global.userInfo.code,
            };
            this.btnSaveDisabled2 = false;
            this.account_code = '';
            this.resetValidator();
            this.dbErrors = {};
        },
        async popActive(val, modeData) {
            this.$vs.loading({ container: '#layout--main', scale: this.global.scaleLoadingMainLayout })
            this.modePopUp = 1;
            this.resetBreakdown();
            this.modeChildValue = modeData;
            if (this.modeChildValue === this.global.modeBreakdown.edit) {
                this.title = this.$t('configuration.title.updateBreakdown');
                await this.editBreakdown(val);
                await this.getDataLookUp();
                this.childPopup = true;
            } else if (this.modeChildValue === this.global.modeBreakdown.insert) {
                this.title = this.$t('configuration.title.insertBreakdown');
                await this.getDataLookUp();
                this.childPopup = true;
            } else if (this.modeChildValue === this.global.modeBreakdown.tracking) {
                this.title = this.$t('tracking.title');
                this.trackingBreakdown(val);
            }
            this.$vs.loading.close('#layout--main>.con-vs-loading');

        },
        // ------------------END CRUD BREAKDOWN-------------------------------//

        // ---------------------- START CRUD BUSINESS SOUCER-------------------//
        getBusinessSource() {
            request.get(`${this.businessSourcesApi}/table/datagrid/${this.packageCode}`)
                .then((response) => {
                    this.businessSources = response.data;
                });
        },
        async getLookUp() {
            const { data } = await request.get(`${this.businessSourcesApi}/form/datalookup`);
            this.accounts3 = data.account;
            this.dataLookup.commission_type = data.commission_type;
            this.dataLookup.company = data.company;

        },
        insertBusinessSource() {
            request.post(this.businessSourcesApi, this.vBusiness)
                .then((response) => {
                    if(response.data == 0) {
                        this.getBusinessSource();
                        this.childPopup = false;
                        this.$vs.loading.close('#button-save-child>.con-vs-loading');
                        $alert.acceptAlertSucces();
                    } else if (response.data > 0) {
                        this.btnSaveDisabled2 = false;
                        this.$vs.loading.close('#button-save-child>.con-vs-loading');
                        $alert.errorSaveExistAccountData();
                    }
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                    this.btnSaveDisabled2 = false;
                });
        },
        updateBusinessSource() {
            request.put(`${this.businessSourcesApi}/${this.vBusiness.id_log}`, this.vBusiness)
                .then(() => {
                    this.getBusinessSource();
                    $alert.acceptAlertSucces();
                    this.childPopup = false;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

       async editBusinessSource(val) {
            this.btnSaveDisabled2 = false;
            const { data } = await request.get(`${this.businessSourcesApi}/${val.id_log}/edit`);
            this.vBusiness = data;

        },

        handleDeleteBusinessSource(data) {
            $dialog.confirmationDelete(this, 'deleteBusinessSource', data);
        },

        deleteBusinessSource(val) {
            const data = {
                id: val.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            request.post(`${this.businessSourcesApi}/delete`, data).then(() => {
                this.getBusinessSource();
                $alert.deleteAlertSuccess();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },

        trackingBusinessSource(val) {
            const data = {
                id_log: val.id_log,
                table: 'cfg_init_package_business_source',
            };
            request.post('tracking/datagrid', data)
                .then((response) => {
                    this.dataTracking = response.data.modelGrid;
                    this.childPopup = true;
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetBusinessSource() {
            this.vBusiness = {
                package_code: this.packageCode,
                account_code: '',
                company_code: '',
                commission_type_code: '',
                commission_value: 0,
                user_id: this.global.userInfo.code,

            };
            this.btnSaveDisabled2 = false;
            this.account_code = '';
            this.dbErrors = {};
            this.resetValidator();
        },

        async showBusinessSource(val, modeData) {
            this.$loadingIndicator(this)
            this.modePopUp = 2;
            this.resetBusinessSource();
            this.modeChildValue = modeData;
            if (this.modeChildValue === this.global.modeBusinessSource.edit) {
                this.title = this.$t('configuration.title.updateBusinessSource');
                await this.editBusinessSource(val);
                this.getLookUp();
                this.childPopup = true;
            } else if (this.modeChildValue === this.global.modeBusinessSource.insert) {
                this.title = this.$t('configuration.title.insertBusinessSource');
                await this.getLookUp();
                this.childPopup = true;
            } else if (this.modeChildValue === this.global.modeBusinessSource.tracking) {
                this.title = this.$t('tracking.title');
                this.trackingBusinessSource(val);
            }
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },
        // ---------------------- END CRUD BUSINESS SOUCER-------------------//

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

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.onPageSizeChanged(this.global.paginationDataPerPage);
    },
    watch: {
        activeTab() {
            this.tabActive();
            this.resetValidator();
        },
    },
    beforeRouteLeave(to, from, next) {
        if (this.mainPopUp) {
            next(false);
            if (this.childPopup) {
                this.childPopup = false;
                return;
            }
            this.mainPopUp = false;
        } else {
            next();
        }
    },

};
</script>
