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
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking && activeTab == 1"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData.code : (modeDataValue == 0 ? global.modeDataName.insert:global.modeDataName.edit) + titleForm)"
            :width="modeDataValue === global.modeData.tracking ? 600 : 80"
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
                        <vs-tab id="roomrate" @click="activeTab = 1" :label="$t('configuration.title.roomRate')"  data-vv-scope="roomrate">
                            <vs-row>
                                <vs-col vs-lg="6" vs-xs="12" class="content-left">
                                    <vs-row vs-type="flex" vs-justify="space-between">
                                        <vs-col vs-lg="6" vs-xs="6"><span style="font-weight:bold">{{$t('configuration.title.rateInformation')}}</span></vs-col>
                                        <vs-col vs-lg="4" vs-xs="6"><vs-input-number class="number-input" :label="$t('common.idSort')+':'" v-model="vModel.id_sort" /></vs-col>
                                    </vs-row>
                                <vs-row vs-type="flex" vs-justify="space-between">
                                    <vs-row class="label mt-6">{{$t('common.code')}}</vs-row>
                                    <vs-row>
                                        <vs-input :disabled="(modeDataValue == global.modeData.edit)" class="md:w-4/12 w-full" v-model="vModel.code" :maxLength="8"
                                        :description-text="errors.first('roomrate.code') || dbErrors.code | toString" v-validate="'required'" name="code" data-vv-scope="roomrate"/>
                                        <vs-checkbox class="w-full md:w-3/12" v-model="vModel.is_active" >{{ $t('common.active') }}</vs-checkbox>
                                        <vs-checkbox class="w-full md:w-4/12" v-model="vModel.is_rate_structure" >{{ $t('common.rateStructure') }}</vs-checkbox>
                                    </vs-row>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-input class="w-full md:w-1/2" :label="$t('common.name')"  v-model="vModel.name"
                                    :description-text="errors.first('roomrate.name') || dbErrors.name | toString" v-validate="'required'" name="name" data-vv-scope="roomrate" />
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.roomType')}}</vs-row>
                                        <vs-row>
                                            <v-select class="w-full height200" id="form-select" multiple :placeholder="$t('placeholder.select')" label="name" :reduce="value => value.code" :options="dataLookup.room_type" v-model="vModel.room_type_code" v-validate="'required'" name="room type" data-vv-scope="roomrate"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('roomrate.room type')">{{ errors.first('roomrate.room type') || dbErrors.room_type_code | toString  }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.dateRange')}}</vs-row>
                                        <vs-row>
                                            <date-picker :lang="$t('lang')" range type="date" not-before value-type="YYYY-MM-DD" format="DD/MM/YYYY" label="name" class="w-full" v-model="date_range" v-validate="'required'" name="date range" data-vv-scope="roomrate">
                                            </date-picker>
                                            <span class="error-text text-danger" v-show="errors.has('roomrate.account')">{{ errors.first('roomrate.account')}}</span>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.subCategory')}}</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" :placeholder="$t('placeholder.select')" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.sub_category" v-model="vModel.sub_category_code" ></v-select>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.company')}}</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height200" :reduce="value => value.code" :options="dataLookup.company" v-model="vModel.company_code">
                                            </v-select>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.market')}}</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" :placeholder="$t('placeholder.select')" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.market" v-model="vModel.market_code"></v-select>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.dynamicRate')}}</vs-row>
                                        <vs-row>
                                            <v-select id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height200" :reduce="value => value.code" :options="dataLookup.dynamic_rate_type" v-model="vModel.dynamic_rate_type_code" v-validate="'required'" name="dynamic rate" data-vv-scope="roomrate"></v-select>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>
                                            <vs-input class="w-full" :label="$t('common.invCode')" :placeholder="$t('common.amount')" v-model="vModel.cm_inv_code" />
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-col vs-lg="3" vs-sm="6" class="checkbox-3col"><vs-checkbox class="w-full" v-model="vModel.is_online" >{{ $t('common.online') }}</vs-checkbox></vs-col>
                                    <vs-col vs-lg="3" vs-sm="6" class="checkbox-3col"><vs-checkbox class="w-full" v-model="vModel.cm_stop_sell">{{ $t('common.cmStop') }}</vs-checkbox></vs-col>
                                    <vs-col vs-lg="3" vs-sm="6" class="checkbox-3col"><vs-checkbox class="w-full" v-model="vModel.is_last_deal">{{ $t('common.lastDeal') }}</vs-checkbox></vs-col>
                                </vs-row>
                                <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                    <vs-divider>{{$t('common.rateAvailability')}}</vs-divider>
                                    <vs-row vs-type="flex" vs-justify="space-between">
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day1" >{{ $t('day.monday') }}</vs-checkbox>
                                        </vs-col>
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day2" >{{ $t('day.tuesday') }}</vs-checkbox>
                                        </vs-col>
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day3" >{{ $t('day.wednesday') }}</vs-checkbox>
                                        </vs-col>
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day4" >{{ $t('day.thursday') }}</vs-checkbox>
                                        </vs-col>
                                    </vs-row>
                                    <vs-row vs-type="flex" vs-justify="flex-start">
                                        <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day5" >{{ $t('day.friday') }}</vs-checkbox>
                                        </vs-col>
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day6" >{{ $t('day.saturday') }}</vs-checkbox>
                                        </vs-col>
                                            <vs-col vs-lg="3" vs-sm="6" vs-xs="6">
                                            <vs-checkbox class="w-full" v-model="vModel.day7" >{{ $t('day.sunday') }}</vs-checkbox>
                                        </vs-col>
                                    </vs-row>
                                    <vs-divider class="mt-5"></vs-divider>
                                </vs-row>
                                <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                    <vs-textarea class="w-full" :label="$t('common.note')" :placeholder="$t('common.note')" v-model="vModel.notes" />
                                </vs-row>
                            </vs-col>
                            <vs-col vs-lg="6" vs-xs="12" class="content-right">
                                <span style="font-weight:bold">{{$t('common.rateAmount')}}</span>
                                <vs-row style="margin-top:23px" vs-type="flex" vs-justify="space-between">
                                    <vs-checkbox class="w-full md:w-6/12 checkbox-3col" v-model="vModel.is_compliment" @click=formDisabled>{{ $t('common.complimentRate') }}</vs-checkbox>
                                    <vs-checkbox class="w-full md:w-6/12 checkbox-3col" v-model="vModel.include_breakfast">{{ $t('common.includeBreakfast') }}</vs-checkbox>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                        <vs-divider class="divider-title">One Pax</vs-divider>
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekday')" :placeholder="$t('common.weekday')" v-model="vModel.weekday_rate1" />
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekend')" :placeholder="$t('common.weekend')" v-model="vModel.weekend_rate1" />
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                        <vs-divider class="divider-title">Two Pax</vs-divider>
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekday')" :placeholder="$t('common.weekday')" v-model="vModel.weekday_rate2" />
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekend')" :placeholder="$t('common.weekend')" v-model="vModel.weekend_rate2" />
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                        <vs-divider class="divider-title">Three Pax</vs-divider>
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekday')" :placeholder="$t('common.weekday')" v-model="vModel.weekday_rate3" />
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekend')" :placeholder="$t('common.weekend')" v-model="vModel.weekend_rate3" />
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                        <vs-divider class="divider-title">Four Pax</vs-divider>
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekday')" :placeholder="$t('common.weekday')" v-model="vModel.weekday_rate4" />
                                    <input-number :disabled="vModel.is_compliment" class="w-full md:w-1/2" :label="$t('common.weekend')" :placeholder="$t('common.weekend')" v-model="vModel.weekend_rate4" />
                                </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.taxService')}}</vs-row>
                                        <vs-row>
                                            <v-select :disabled="vModel.is_compliment" id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height150" :reduce="value => value.code" :options="dataLookup.tax_and_service" v-model="vModel.tax_and_service_code"/>
                                        </vs-row>
                                    </div>
                                    <div class="wrap-form-select w-full md:w-1/2">
                                        <vs-row>{{$t('common.chargeFrequency')}}</vs-row>
                                        <vs-row>
                                            <v-select :disabled="vModel.is_compliment" id="form-select" :placeholder="$t('placeholder.select')" class="w-full height150" label="name" :reduce="value => value.code" :options="dataLookup.charge_frequency" v-model="vModel.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="roomrate"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('roomrate.charge frequency')">{{ errors.first('roomrate.charge frequency') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                    <vs-divider>{{ $t('common.extraCharge') }}</vs-divider>
                                    <vs-row vs-type="flex" vs-justify="space-between">
                                        <vs-col vs-lg="6" vs-sm="12"><input-number class="number-input" :label="$t('common.extraPax')+':'" v-model="vModel.extra_pax" min="1" /></vs-col>
                                        <vs-col vs-lg="3" vs-sm="6" class="checkbox-3col"><vs-checkbox class="w-full" v-model="vModel.per_pax" @click="changePerPax">{{ $t('common.perPax') }}</vs-checkbox></vs-col>
                                        <vs-col vs-lg="3" vs-sm="6" class="checkbox-3col"><vs-checkbox :disabled="!vModel.per_pax" class="w-full" v-model="vModel.include_chlid">{{ $t('common.includeChild') }}</vs-checkbox></vs-col>
                                    </vs-row>
                                    <vs-divider class="mt-5"></vs-divider>
                                </vs-row>
                            </vs-col>
                            </vs-row>

                        </vs-tab>
                        <vs-tab :disabled="breakdownTab" @click="activeTab = 2" id="breakdown" :label="$t('configuration.title.breakdown')">
                            <!-- BREAKDOWN TABLE COMPONENT -->
                            <breakdown :table="true" @showModal="popActive" @delete="handleDeleteBreakdown" :data="breakdowns"></breakdown>
                        </vs-tab>
                        <vs-tab :disabled="businessSourceTab" @click="activeTab = 3" id="business" :label="$t('configuration.title.businessSource')">
                            <!-- BUSINESS TABLE COMPONENT -->
                            <business-source :table="true" @showModal="showBusinessSource" @delete="handleDeleteBusinessSource" :data="businessSources"></business-source>
                        </vs-tab>
                        <vs-tab :disabled="currencyTab" @click="activeTab = 4" id="currency" :label="$t('configuration.title.currency')">
                            <!-- CURRENCY TABLE COMPONENT -->
                            <currency :table="true" @showModal="showCurrency" @delete="handleDeleteCurrency" :data="currencies"></currency>
                        </vs-tab>
                    </vs-tabs>
                </div>

            </template>
        </dialog-prompt>
        <dialog-prompt :button1="modeChildValue !== global.modeBreakdown.tracking && modeChildValue !== global.modeBusinessSource.tracking && modeChildValue !== global.modeCurrency.tracking"
                    :title="title"
                    :width="modeChildValue === global.modeBreakdown.insert || modeChildValue === global.modeBreakdown.edit || modeChildValue === global.modeBreakdown.tracking && modeChildValue === global.modeBusinessSource.tracking && modeChildValue === global.modeCurrency.tracking ? 600 : ''"
                    :active="childPopUp"
                    :idButton1="'button-save-child'"
                    :buttonDisabled1="btnSaveDisabled2"
                    @button1="saveData()"
                    @close="val=>childPopUp = val">
                    <template #body>
                        <div v-if="modeChildValue === global.modeBreakdown.tracking || modeChildValue === global.modeBusinessSource.tracking || modeChildValue === global.modeCurrency.tracking ">
                            <tracking v-bind:idData="idData" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
                        </div>
                    <!----------- POPUP BREAKDOWN ------------------>
                        <div v-else-if="modeChildValue === global.modeBreakdown.insert || modeChildValue === global.modeBreakdown.edit">
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.subDepartment')}}</vs-row>
                                    <vs-row>
                                        <v-select class="w-full height200" id="form-select" :placeholder="$t('placeholder.select')" label="name" :reduce="value => value.code" :options="dataLookup.sub_department" v-model="vBreakdown.sub_department_code" @input="changeSubDepartment" v-validate="'required'" name="sub department" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.sub department')">{{ errors.first('breakdown.sub department') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.account')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height200" :options="accounts2" v-model="account_code" @input="changeAccount2" v-validate="'required'" name="account" data-vv-scope="breakdown">
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
                                        <v-select id="form-select" :disabled="account_code.sub_group_code !== 'ACPY'" :placeholder="$t('placeholder.select')" label="name" class="w-full height200" :reduce="value => value.code" :options="dataLookup.company" v-model="vBreakdown.company_code" v-validate="account_code.sub_group_code === 'ACPY' ? 'required' : ''" name="company" data-vv-scope="breakdown">
                                            <template slot="option" slot-scope="option">
                                            </template>
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.company')">{{ errors.first('breakdown.company') }}</span>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/2">
                                    <vs-row>{{$t('common.taxService')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('placeholder.select')" class="w-full height200" label="name" :reduce="value => value.code" :options="dataLookup.tax_and_service" v-model="vBreakdown.tax_and_service_code" v-validate="'required'" name="tax and service" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.tax and service')">{{ errors.first('breakdown.tax and service') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number class="w-full sm:w-1/4" :label="$t('common.amount')" :placeholder="$t('common.amount')" v-model="vBreakdown.amount" :description="errors.first('breakdown.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="breakdown" />
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
                                        <vs-checkbox class="w-full" v-model="vBreakdown.per_pax" @input="changePerPax" >{{ $t('common.perPax') }}</vs-checkbox>
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
                                        <v-select id="form-select" :reduce="value => value.code" label="name" class="w-full height150" :options="dataLookup.charge_frequency" v-model="vBreakdown.charge_frequency_code" v-validate="'required'" name="charge frequency" data-vv-scope="breakdown"></v-select>
                                        <span class="error-text text-danger" v-show="errors.has('breakdown.charge frequency')">{{ errors.first('breakdown.charge frequency') }}</span>
                                    </vs-row>
                                </div>
                                <vs-input class="w-full md:w-1/2" :label="$t('common.remark')" v-model="vBreakdown.remark" />
                            </vs-row>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="space-between">
                                <vs-divider>Extra Charge</vs-divider>
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
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.businessSource')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height100" :reduce="value => value.code" :options="dataLookup.company" v-model="vBusiness.company_code" v-validate="'required'" name="business source" data-vv-scope="business">
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('business.business source')">{{ errors.first('business.business source') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                                <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.commissionType')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :placeholder="$t('placeholder.select')" label="name" class="w-full height100" :reduce="value => value.code" :options="dataLookup.commission_type" v-model="vBusiness.commission_type_code" v-validate="'required'" name="commission type" data-vv-scope="business">
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('business.commission type')"> {{ errors.first('business.commission type') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number class="w-full sm:w-1/2" :label="$t('common.commissionValue')" :placeholder="$t('common.commissionValue')" v-model="vBusiness.commission_value" :description="errors.first('business.commission value') || dbErrors.quantity | toString" v-validate="'required'" name="commission value" data-vv-scope="business" />
                            </vs-row>
                        </div>
                    <!--------- END POPUP BUSINESSSOURCE ------------->
                        <!-- POPUP CURRENCY -->
                        <div v-else-if="modeChildValue === global.modeCurrency.insert || modeChildValue === global.modeCurrency.edit">
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="space-between">
                                <div class="wrap-form-select w-full">
                                    <vs-row>{{$t('common.currency')}}</vs-row>
                                    <vs-row>
                                        <v-select id="form-select" :clearable="false" :placeholder="$t('placeholder.select')" label="code" class="w-full height100" :reduce="value => value.code" :options="currency" v-model="vCurrency.currency_code" v-validate="'required'" name="currency" data-vv-scope="currency">
                                        </v-select>
                                        <span class="error-text text-danger" v-show="errors.has('currency.currency')"> {{ errors.first('currency.currency') }}</span>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                <input-number class="w-full sm:w-1/2" :label="$t('common.exchangeRate')" :placeholder="$t('common.exchangeRate')" v-model="vCurrency.exchange_rate" :description="errors.first('currency.exchange rate') || dbErrors.quantity | toString" v-validate="'required'" name="exchange rate" data-vv-scope="currency" />
                            </vs-row>
                        </div>
                    <!--------- END POPUP CURRENCY ------------->
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
import Breakdown from '@/views/pages/Tools/configurations/tab-components/Breakdown.vue';
import BusinessSource from '@/views/pages/Tools/configurations/tab-components/BusinessSource.vue';
import Currency from '@/views/pages/Tools/configurations/tab-components/Currency.vue';
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
import {
    formatNumber, formatDate, formatDateDatabase,
} from '@/utils/format.js';
import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
// <!------------------end additional element---------------------->

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
        Breakdown,
        BusinessSource,
        Currency,
        DatePicker,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.code'), value: '0' },
                { text: this.$t('common.filter.name'), value: '1' },
                { text: this.$t('common.filter.roomType'), value: '2' },
                { text: this.$t('common.filter.subCategory'), value: '3' },
                { text: this.$t('common.filter.company'), value: '4' },
                { text: this.$t('common.filter.market'), value: '5' },
                { text: this.$t('common.filter.cmInv'), value: '6' },
                { text: this.$t('common.filter.taxAndService'), value: '7' },
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
            childPopUp: false, // popup breakdown & business source
            // ------------------need setting manual-----------------//
            // for vModel Data
            vModel: {}, // package
            vBreakdown: {}, // breakdown
            vBusiness: {},
            vCurrency: {},
            roomRateCode: '',
            account_code: '',
            date_range: [],
            // ------------------additional-------------------------//
            // Data Lookup//
            dataLookup: {},
            currency: [],
            accounts: [],
            accounts2: [],
            accounts3: [],
            // Data table//
            breakdowns: [],
            businessSources: [],
            currencies: [],
            breakdownTab: true,
            businessSourceTab: true,
            currencyTab: true,
            // save disable button
            btnSaveDisabled1: false,
            btnSaveDisabled2: false,
            saved: false,
            activeTab: 1,
            // api//
            breakdownApi: 'roomratebreakdown',
            businessSourcesApi: 'roomratebusiness',
            currencyApi: 'roomratecurrency',
            tableBreakdown: 'cfg_init_room_rate_breakdown',
            tableBusinessSource: 'cfg_init_room_rate_business_source',
            tableCurrency: 'cfg_init_room_rate_currency',
            // title popup//
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
            { headerName: this.$t('common.table.action'), field: 'code', enableRowGroup: false, resizable: false, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, },
            { headerName: this.$t('common.table.code'), field: 'code', width: 110 },
            { headerName: this.$t('common.table.name'), field: 'name', width: 300 },
            { headerName: this.$t('common.table.roomType'), field: 'room_type_code', width: 250 },
            { headerName: this.$t('common.table.fromDate'), field: 'from_date', width: 100, valueFormatter: formatDate, },
            { headerName: this.$t('common.table.toDate'), field: 'to_date', width: 100, valueFormatter: formatDate, },
            { headerName: this.$t('common.table.subCategory'), field: 'sub_category', width: 200 },
            { headerName: this.$t('common.table.company'), field: 'company', width: 200 },
            { headerName: this.$t('common.table.market'), field: 'market', width: 200 },
            { headerName: this.$t('common.table.cmInv'), field: 'cm_inv_code', width: 200 },
            { headerName: this.$t('common.table.rateStructure'), field: 'is_rate_structure', width: 123, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.per_pax', },
            { headerName: this.$t('common.table.compliment'), field: 'is_compliment', width: 110, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.per_pax', },
            { headerName: `${this.$t('common.table.weekdayRate')} 1`, field: 'weekday_rate1', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekdayRate')} 2`, field: 'weekday_rate2', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekdayRate')} 3`, field: 'weekday_rate3', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekdayRate')} 4`, field: 'weekday_rate4', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekendRate')} 1`, field: 'weekend_rate1', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekendRate')} 2`, field: 'weekend_rate2', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekendRate')} 3`, field: 'weekend_rate3', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: `${this.$t('common.table.weekendRate')} 4`, field: 'weekend_rate4', width: 200, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('common.table.taxAndService'), field: 'tax_and_service', width: 250 },
            { headerName: this.$t('common.table.chargeFrequency'), field: 'charge_frequency', width: 140 },
            { headerName: this.$t('common.table.extraPax'), field: 'extra_pax', width: 150, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('common.table.perPax'), field: 'per_pax', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.per_pax', },
            { headerName: this.$t('common.table.includeChild'), field: 'include_child', width: 115, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.include_child', },
            { headerName: this.$t('common.table.note'), field: 'notes', width: 250 },
            { headerName: this.$t('common.table.idSort'), field: 'id_sort', width: 80, cellStyle: { textAlign: 'right' }, },
            { headerName: this.$t('common.table.showInTransaction'), field: 'show_in_transaction', width: 153, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.show_in_transaction', },
            { headerName: this.$t('common.table.active'), field: 'is_active', width: 100, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.is_active', },
            { headerName: this.$t('common.table.cmStop'), field: 'cm_stop_sell', width: 100, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.is_active', },
            { headerName: this.$t('common.table.online'), field: 'is_online', width: 100, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', cellRendererParams: 'params.data.is_active', },
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
            this.$loadingIndicator(this)
            let selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
            selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
            request
                .get(`${this.routeApi}/table/datagrid`, { params: search })
                .then((result) => {
                    this.rowData = result.data.modelGrid;
                    this.$nextTick(() => {
                        rowSelectedAfterRefresh(this, selectedNodes, 'id_log');
                    });
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        resetData() {
            this.vModel = {
                code: '',
                name: '',
                room_type_code: '',
                from_date: '',
                to_date: '',
                sub_category_code: '',
                company_code: '',
                market_code: '',
                dynamic_rate_type_code: '',
                is_last_deal: false,
                is_rate_structure: false,
                is_compliment: false,
                include_breakfast: false,
                weekday_rate1: 0,
                weekday_rate2: 0,
                weekday_rate3: 0,
                weekday_rate4: 0,
                weekend_rate1: 0,
                weekend_rate2: 0,
                weekend_rate3: 0,
                weekend_rate4: 0,
                weekday_rate_child1: 0,
                weekday_rate_child2: 0,
                weekday_rate_child3: 0,
                weekday_rate_child4: 0,
                weekend_rate_child1: 0,
                weekend_rate_child2: 0,
                weekend_rate_child3: 0,
                weekend_rate_child4: 0,
                tax_and_service_code: '',
                charge_frequency_code: '1',
                extra_pax: 0,
                per_pax: false,
                include_chlid: false,
                day1: true,
                day2: true,
                day3: true,
                day4: true,
                day5: true,
                day6: true,
                day7: true,
                notes: '',
                id_sort: 0,
                is_active: true,
                cm_inv_code: '',
                cm_stop_sell: false,
                is_online: false,
                user_id: this.global.userInfo.code,
            };
            this.date_range = [formatDateDatabase(this.auditDate), this.secondYear()];
            this.roomRateCode = '';
            this.breakdowns = [];
            this.businessSources = [];
            this.dbErrors = {};
            this.dataTracking = null;
            this.saved = false;
            this.activeTab = 1;
            this.btnSaveDisabled1 = false;
            this.btnSaveDisabled2 = false;
            this.resetValidator();
        },
        secondYear() {
            const years = new Date(formatDateDatabase(this.auditDate)).getFullYear() + 1;
            let month = new Date(formatDateDatabase(this.auditDate)).getMonth() + 1;
            let day = new Date(formatDateDatabase(this.auditDate)).getDate();
            if (month < 10 && month > 0) {
                month = `0${month}`;
            }
            if (day < 10 && day > 0) {
                day = `0${day}`;
            }

            return formatDateDatabase(`${years}-${month}-${day}`);
        },
        showModal(idData, modeData) {
            this.$loadingIndicator(this)
            this.btnSaveDisabled1 = false;
            this.resetData();
            this.idData = idData;
            this.modeDataValue = modeData;
            this.breakdownTab = modeData === this.global.modeData.insert;
            this.businessSourceTab = modeData === this.global.modeData.insert;
            this.currencyTab = modeData === this.global.modeData.insert;
            // setTimeout(() => {
            //     if (document.getElementById('breakdown') !== null) {
            //         document.getElementById('roomrate').click();
            //     }
            // }, 150);
            if (modeData === this.global.modeData.edit) {
                this.editData();
                this.getDataLookUp();
            } else if (modeData === this.global.modeData.insert) {
                this.activeTab = 1;
                this.tabActive();
                this.getDataLookUp();
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            } else if (modeData === this.global.modeData.tracking) {
                this.trackingData(idData);
            }
            this.mainPopUp = modeData === this.global.modeData.insert;
        },
        // event click checkbox perpax
        changePerPax(val) {
            if (this.childPopUp) {
                this.vBreakdown.max_pax = val ? 1000 : 1;
                this.vBreakdown.quantity = val ? 1 : 1;
                this.vBreakdown.include_child = false;
            } else {
                this.vModel.include_chlid = false;
            }
        },
        tabActive() {
            this.btnSaveDisabled1 = this.activeTab == 1 ? (!!this.saved) : true;
        },

        editData() {
            request
                .get(`${this.routeApi}/${this.idData.code}/edit`)
                .then((response) => {
                    const { data } = response;
                    this.vModel = data;
                    this.date_range = [data.from_date, data.to_date];
                    this.roomRateCode = data.code;
                    this.mainPopUp = true;
                    this.getBreakdown();
                    this.getBusinessSource();
                    this.getCurrency();
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
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
                    this.btnSaveDisabled1 = true;
                    this.saved = true;
                    document.getElementById('breakdown').click();
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
                    this.roomRateCode = response.data.room_rate_code;
                    this.saved = true;
                    this.refreshData(this.search);
                    $alert.acceptAlertSucces();
                    this.getBreakdown();
                    this.getBusinessSource();
                    this.breakdownTab = false;
                    this.businessSourceTab = false;
                    this.currencyTab = false;
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

        saveData() {
            const validate = this.childPopUp === false ? 'roomrate' : (this.modePopUp == 1 ? 'breakdown' : (this.modePopUp == 2 ? 'business' : 'currency')); // validation SCOPE
            this.$validator.validateAll(validate).then((result) => {
                if (result) {
                    this.vModel.user_id = this.global.userInfo.code;
                    this.vModel.from_date = formatDateDatabase(this.date_range[0]);
                    this.vModel.to_date = formatDateDatabase(this.date_range[1]);
                    this.vBreakdown.user_id = this.global.userInfo.code;
                    this.vBreakdown.room_rate_code = this.roomRateCode;
                    this.vBreakdown.account_code = this.account_code.code === undefined ? this.account_code : this.account_code.code;

                    if (!this.childPopUp) {
                        this.btnSaveDisabled1 = true;
                        if (this.modeDataValue === this.global.modeData.insert) {
                            this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                            this.insertData(this.vModel);
					    } else if (this.modeDataValue === this.global.modeData.edit) {
                            this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                            this.updateData(this.vModel);
                        }
                    } else {
                        this.btnSaveDisabled2 = true;
                        if (this.modeChildValue == this.global.modeBreakdown.insert) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.insertBreakdown();
                        } else if (this.modeChildValue == this.global.modeBreakdown.edit) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.updateBreakdown();
                        } else if (this.modeChildValue == this.global.modeBusinessSource.insert) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.insertBusinessSource();
                        } else if (this.modeChildValue == this.global.modeBusinessSource.edit) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.updateBusinessSource();
                        } else if (this.modeChildValue == this.global.modeCurrency.insert) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.insertCurrency();
                        } else if (this.modeChildValue == this.global.modeCurrency.edit) {
                            this.$vs.loading({ container: '#button-save-child', scale: this.global.scaleLoadingButton });
                            this.updateCurrency();
                        }
                    }
                }
            });
        },

        handleDeleteData(data) {
            $dialog.confirmationDelete(this, 'deleteData', data);
        },

        deleteData(idData) {
            const data = {
                id: idData.code,
                user_id: this.global.userInfo.code,
            };
            this.$loadingIndicator(this)
            request.post(`${this.routeApi}/delete`, data).then((response) => {
                const { data } = response;
                if (data == 0) {
                    this.modeDataValue = this.global.modeData.delete;
                    getRowIndexBefore(this);
                    this.refreshData(this.search);
                    $alert.deleteAlertSuccess();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.deletedData.${data}`));
                }
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            })
                .catch((error) => {
                    const message = error.response.data.error;
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
        formDisabled() {
            this.vModel.tax_and_service_code = '';
            this.vModel.charge_frequency_code = '1';
            this.vModel.weekday_rate1 = 0;
            this.vModel.weekday_rate2 = 0;
            this.vModel.weekday_rate3 = 0;
            this.vModel.weekday_rate4 = 0;
            this.vModel.weekend_rate1 = 0;
            this.vModel.weekend_rate2 = 0;
            this.vModel.weekend_rate3 = 0;
            this.vModel.weekend_rate4 = 0;
            this.vModel.weekday_rate_child1 = 0;
            this.vModel.weekday_rate_child2 = 0;
            this.vModel.weekday_rate_child3 = 0;
            this.vModel.weekday_rate_child4 = 0;
            this.vModel.weekend_rate_child1 = 0;
            this.vModel.weekend_rate_child2 = 0;
            this.vModel.weekend_rate_child3 = 0;
            this.vModel.weekend_rate_child4 = 0;
        },
        // ------------------additional load data lookup----------------------//

        getDataLookUp() {
            request.get(`${this.routeApi}/form/datalookup`)
                .then((response) => {
                    this.dataLookup = response.data;
                    this.getAccount2();
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                });
        },

        changeSubDepartment(val) {
            if (!this.childPopUp) {

            } else {
                this.account_code = '';
                this.vBreakdown.account_code = '';
                this.getAccount2();
            }
        },

        changeAccount2() {
            this.vBreakdown.company_code = this.account_code.sub_group_code ? '' : this.vBreakdown.company_code;
        },

        getAccount() {
            const data = {
                sub_department_code: this.vModel.sub_department_code,
            };
            request.get(`${this.routeApi}/form/account`, { params: data })
                .then((response) => {
                    this.accounts = response.data;
                });
        },
        // --------------------------- CRUD FOR BREAKDOWN-------------------------------//
        // get Account Form Breakdown//
        getAccount2() {
            const data = {
                sub_department_code: this.vBreakdown.sub_department_code,
            };
            request.get(`${this.routeApi}/form/account`, { params: data })
                .then((response) => {
                    this.accounts2 = response.data;
                });
        },

        getBreakdown() {
            request.get(`${this.breakdownApi}/table/datagrid/${this.roomRateCode}`)
                .then((response) => {
                    this.breakdowns = response.data;
                });
        },
        insertBreakdown() {
            console.log('insert');
            this.vBreakdown.account_code = this.account_code.code;
            this.vBreakdown.room_rate_code = this.roomRateCode;
            request.post(this.breakdownApi, this.vBreakdown)
                .then(() => {
                    this.getBreakdown();
                    this.childPopUp = false;
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
            console.log('update');
            request.put(`${this.breakdownApi}/${this.vBreakdown.id_log}`, this.vBreakdown)
                .then(() => {
                    this.getBreakdown();
                    $alert.acceptAlertSucces();
                    this.childPopUp = false;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        editBreakdown(val) {
            request.get(`${this.breakdownApi}/${val.id_log}/edit`).then((response) => {
                const { data } = response;
                this.vBreakdown = data.breakdown;
                this.account_code = data.account;
                this.childPopUp = true;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            }).catch(() => {
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.errorFetchDataAlert();
            });
        },

        handleDeleteBreakdown(data) {
            $dialog.confirmationDelete(this, 'deleteBreakdown', data);
        },

        deleteBreakdown(val) {
            const data = {
                id: val.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$vs.loading({ container: '.popup-body', scale: 0.6 });
            request.post(`${this.breakdownApi}/delete`, data).then(() => {
                this.getBreakdown();
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.deleteAlertSuccess();
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },

        trackingBreakdown(val) {
            const data = {
                id_log: val.id_log,
                table: this.tableBreakdown,
            };
            request.post('tracking/datagrid', data)
                .then((response) => {
                    this.dataTracking = response.data.modelGrid;
                    this.childPopUp = true;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch((error) => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetBreakdown() {
            this.vBreakdown = {
                room_rate_code: this.roomRateCode,
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
            this.account_code = '';
            this.btnSaveDisabled2 = false;
            this.resetValidator();
            this.dbErrors = {};
        },

        popActive(val, modeData) {
            this.$vs.loading({
                container: ('.popup-body'),
                scale: 0.6,
            });
            this.modePopUp = 1;
            this.resetBreakdown();
            this.modeChildValue = modeData;
            this.childPopUp = modeData === this.global.modeBreakdown.insert;
            if (this.modeChildValue === this.global.modeBreakdown.edit) {
                this.title = this.$t('configuration.title.updateBreakdown');
                this.editBreakdown(val);
                this.getDataLookUp();
            } else if (this.modeChildValue === this.global.modeBreakdown.insert) {
                this.title = this.$t('configuration.title.insertBreakdown');
                this.getDataLookUp();
            } else if (this.modeChildValue === this.global.modeBreakdown.tracking) {
                this.title = this.$t('tracking.title');
                this.trackingBreakdown(val);
            }
        },
        // ------------------END CRUD BREAKDOWN-------------------------------//

        // ---------------------- START CRUD BUSINESS SOUCER-------------------//
        getBusinessSource() {
            request.get(`${this.businessSourcesApi}/table/datagrid/${this.roomRateCode}`)
                .then((response) => {
                    this.businessSources = response.data;
                });
        },
        getLookUp() {
            request.get(`${this.businessSourcesApi}/form/datalookup`)
                .then((response) => {
                    const { data } = response;
                    this.dataLookup.commission_type = data.commission_type;
                    this.dataLookup.company = data.company;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        insertBusinessSource() {
            request.post(this.businessSourcesApi, this.vBusiness)
                .then((response) => {
                    if (response.data == 0) {
                        this.getBusinessSource();
                        this.childPopUp = false;
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
                });
        },
        updateBusinessSource() {
            request.put(`${this.businessSourcesApi}/${this.vBusiness.id_log}`, this.vBusiness)
                .then(() => {
                    this.getBusinessSource();
                    $alert.acceptAlertSucces();
                    this.childPopUp = false;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('#button-save-child>.con-vs-loading');
                    $alert.errorSaveDataAlert(message);
                });
        },

        editBusinessSource(val) {
            request.get(`${this.businessSourcesApi}/${val.id_log}/edit`).then((response) => {
                const { data } = response;
                this.vBusiness = data;
                this.childPopUp = true;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            }).catch((error) => {
                const message = error.response.data.errors;
                this.dbErrors = message == undefined ? '' : message;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.errorFetchDataAlert(message);
            });
        },

        handleDeleteBusinessSource(data) {
            $dialog.confirmationDelete(this, 'deleteBusinessSource', data);
        },

        deleteBusinessSource(val) {
            const data = {
                id: val.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$vs.loading({ container: '.popup-body', scale: 0.6 });
            request.post(`${this.businessSourcesApi}/delete`, data).then(() => {
                this.getBusinessSource();
                $alert.deleteAlertSuccess();
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },

        trackingBusinessSource(val) {
            const data = {
                id_log: val.id_log,
                table: this.tableBusinessSource,
            };
            request.post('tracking/datagrid', data)
                .then((response) => {
                    this.dataTracking = response.data.modelGrid;
                    this.childPopUp = true;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetBusinessSource() {
            this.vBusiness = {
                room_rate_code: this.roomRateCode,
                account_code: '',
                company_code: '',
                commission_type_code: '',
                commission_value: 0,
                user_id: this.global.userInfo.code,

            };
            this.account_code = '';
            this.btnSaveDisabled2 = false;
            this.resetValidator();
            this.dbErrors = {};
        },
        showBusinessSource(val, modeData) {
            this.$vs.loading({
                container: ('.popup-body'),
                scale: 0.6,
            });
            this.modePopUp = 2;
            this.resetBusinessSource();
            this.modeChildValue = modeData;
            if (this.modeChildValue === this.global.modeBusinessSource.edit) {
                this.title = this.$t('configuration.title.updateBusinessSource');
                this.editBusinessSource(val);
                this.getLookUp();
            } else if (this.modeChildValue === this.global.modeBusinessSource.insert) {
                this.title = this.$t('configuration.title.insertBusinessSource');
                this.getLookUp();
            } else if (this.modeChildValue === this.global.modeBusinessSource.tracking) {
                this.title = this.$t('tracking.title');
                this.trackingBusinessSource(val);
            }
            this.childPopUp = modeData === this.global.modeBusinessSource.insert;
        },
        // ---------------------- END CRUD BUSINESS SOURCE-------------------//

        // ---------------------- START CRUD CURRENCY-------------------//
        getCurrency() {
            request.get(`${this.currencyApi}/table/datagrid/${this.roomRateCode}`)
                .then((response) => {
                    this.currencies = response.data;
                });
        },
        getLookUpCurrency() {
            request.get(`${this.currencyApi}/form/datalookup/${this.idData.code}`)
                .then((response) => {
                    const { data } = response;
                    this.currency = data.currency;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },
        insertCurrency() {
            request.post(this.currencyApi, this.vCurrency)
                .then((response) => {
                    if (response.data == 0) {
                        this.getCurrency();
                        this.childPopUp = false;
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
                });
        },
        updateCurrency() {
            request.put(`${this.currencyApi}/${this.vCurrency.id_log}`, this.vCurrency)
                .then(() => {
                    this.getCurrency();
                    this.childPopUp = false;
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

        editCurrency(val) {
            request.get(`${this.currencyApi}/${val.id_log}/edit`).then((response) => {
                const { data } = response;
                this.vCurrency = data;
                this.childPopUp = true;
                this.$vs.loading.close('.popup-body>.con-vs-loading');
            }).catch(() => {
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.errorFetchDataAlert();
            });
        },

        handleDeleteCurrency(data) {
            $dialog.confirmationDelete(this, 'deleteCurrency', data);
        },

        deleteCurrency(val) {
            const data = {
                id: val.id_log,
                user_id: this.global.userInfo.code,
            };
            this.$vs.loading({
                container: '.popup-body',
                scale: 0.6,
            });
            request.post(`${this.currencyApi}/delete`, data).then(() => {
                this.getCurrency();
                this.$vs.loading.close('.popup-body>.con-vs-loading');
                $alert.deleteAlertSuccess();
            })
                .catch((error) => {
                    const message = error.response.data.errors;
                    this.dbErrors = message == undefined ? '' : message;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorDeleteDataAlert(message);
                });
        },

        trackingCurrency(val) {
            const data = {
                id_log: val.id_log,
                table: this.tableCurrency,
            };
            request.post('tracking/datagrid', data)
                .then((response) => {
                    this.dataTracking = response.data.modelGrid;
                    this.childPopUp = true;
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                }).catch(() => {
                    this.$vs.loading.close('.popup-body>.con-vs-loading');
                    $alert.errorFetchDataAlert();
                });
        },

        resetCurrency() {
            this.vCurrency = {
                room_rate_code: this.roomRateCode,
                currency_code: '',
                exchange_rate: 0,
                user_id: this.global.userInfo.code,

            };
            this.resetValidator();
            this.dbErrors = {};
        },
        showCurrency(val, modeData) {
            this.$vs.loading({
                container: ('.popup-body'),
                scale: 0.6,
            });
            this.modePopUp = 3;
            this.resetCurrency();
            this.btnSaveDisabled2 = false;
            this.modeChildValue = modeData;
            if (this.modeChildValue === this.global.modeCurrency.edit) {
                this.title = this.$t('configuration.title.updateCurrency');
                this.editCurrency(val);
                this.getLookUpCurrency();
            } else if (this.modeChildValue === this.global.modeCurrency.insert) {
                this.title = this.$t('configuration.title.insertCurrency');
                this.getLookUpCurrency();
            } else if (this.modeChildValue === this.global.modeCurrency.tracking) {
                this.title = this.$t('tracking.title');
                this.trackingCurrency(val);
            }
            this.childPopUp = modeData === this.global.modeCurrency.insert;
        },
        // ---------------------- END CRUD CURRENCY-------------------//
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
    },
    watch: {
        activeTab() {
            this.tabActive();
        },
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
