<template>
    <div>
        <dialog-prompt :button1="modeDataValue !== global.modeData.tracking"
            :title="(modeDataValue == 2 ? global.modeDataName.tracking + idData:(modeDataValue == 0 ? global.modeDataName.insert : global.modeDataName.edit) + titleForm)"
            :width="800"
            :active="mainPopUp"
            :idButton1="'button-save-main'"
            :buttonDisabled1="btnSaveDisabled"
            :textButton1="$t('button.save')"
            @button1="saveData()"
            @close="val=>mainPopUp = val">
            <template #body>
            <div v-if="modeDataValue == global.modeData.tracking">
                <tracking v-bind:idData="idData" :rowData="dataTracking" :theData="dataTracking" v-bind:tableName="mainTableName"></tracking>
            </div>
                <div v-else>
                    <vs-row vs-type="flex" vs-justify="space-around">
                        <vs-col class="w-full lg:w-1/2">
                            <vx-card style="height:100%">
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full">
                                        <vs-row><label>{{$t('budget.period')}}</label></vs-row>
                                        <vs-row class="wrap-form-select">
                                            <v-select class="w-1/3 height200" id="form-select" :clearable="false" :options="period" v-model="vModel.period" v-validate="'required'" name="period" data-vv-scope="folio"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('folio.period')">{{ errors.first('folio.period') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row v-if="formType == global.formType.incomeBudget" class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full">
                                        <vs-row><label>{{$t('budget.subDepartment')}}</label></vs-row>
                                        <vs-row class="wrap-form-select">
                                            <v-select class="w-full height200" id="form-select" label="name" :clearable="false" @input="handleChangeSubDepartment" :reduce="value => value.code" :options="dlSubDepartment" v-model="vModel.sub_department_code" v-validate="'required'" name="sub department" data-vv-scope="folio"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('folio.sub department')">{{ errors.first('folio.sub department') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3 w-full" vs-type="flex" vs-justify="space-between">
                                    <div class="w-full">
                                        <vs-row><label>{{$t('budget.account')}}</label></vs-row>
                                        <vs-row class="wrap-form-select">
                                            <v-select class="w-2/3 height200" id="form-select" label="name" :clearable="false" resetOptionsOnChange :options="dlAccount" :reduce="value => value.code" v-model="vModel.account_code" v-validate="'required'" name="account" data-vv-scope="folio"></v-select>
                                            <span class="error-text text-danger" v-show="errors.has('folio.account')">{{ errors.first('folio.account') }}</span>
                                        </vs-row>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{ $t('budget.remark') }}</label></vs-row>
                                    <vs-row>
                                        <vs-input class="w-full" type="text" v-model="vModel.remark" :description="errors.first('folio.remark') || dbErrors.remark | toString" v-validate="'required'" name="remark" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-between">
                                    <vs-row><label>{{$t('budget.amount')}}</label></vs-row>
                                    <vs-row>
                                        <input-number showZeroNumber :disabled="vModel.type_code == 'M'" class="w-1/2" type="text" @input="calculateAmount()" v-model="vModel.amount" :description="errors.first('folio.amount') || dbErrors.amount | toString" v-validate="'required'" name="amount" data-vv-scope="folio"/>
                                    </vs-row>
                                </vs-row>
                                <vs-divider>{{$t('budget.budgetType')}}</vs-divider>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-around">
                                    <div class="w-1/2">
                                        <vs-radio v-model="vModel.type_code" @change="calculateAmount()" vs-value="M">{{ $t('budget.manual') }}</vs-radio>
                                    </div>
                                    <div class="w-1/2">
                                        <vs-radio v-model="vModel.type_code" @change="calculateAmount()" vs-value="A">{{ $t('budget.average') }}</vs-radio>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-justify="space-around">
                                    <div class="w-1/2">
                                        <vs-radio v-model="vModel.type_code" @change="calculateAmount()" vs-value="P">{{ $t('budget.percentage') }}</vs-radio>
                                    </div>
                                    <div class="w-1/2">
                                        <vs-radio v-model="vModel.type_code" @change="calculateAmount()" vs-value="D">{{ $t('budget.daily') }}</vs-radio>
                                    </div>
                                </vs-row>
                            </vx-card>
                        </vs-col>
                        <vs-col class="w-full lg:w-1/2">
                            <vx-card>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.january')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3"  type="text" v-model="vModel.M01"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p01"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.february')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M02"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p02"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.march')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M03"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p03"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.april')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M04"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p04"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.may')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M05"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p05"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.june')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M06"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p06"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.july')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M07"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p07"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.august')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M08"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p08"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.september')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M09"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p09"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.october')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M10"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p10"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.november')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M11"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p11"/>
                                    </div>
                                </vs-row>
                                <vs-row class="mt-3" vs-type="flex" vs-align="center" vs-justify="space-between">
                                    <div class="w-full md:w-1/4">
                                        <label>{{$t('budget.december')}}</label>
                                    </div>
                                    <div class="flex w-full md:w-2/3">
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'M'" @input="calculateAmount()" class="w-2/3" type="text" v-model="vModel.M12"/>
                                        <input-number :comma="2" showZeroNumber :disabled="vModel.type_code !== 'P'" @input="calculateAmount()" class="w-1/3" type="text" v-model="vModel.p12"/>
                                    </div>
                                </vs-row>
                            </vx-card>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
    </div>
</template>

<script>
import IncomeBudgetResource from '@/api/back-office/incomeBudget';
import BudgetStatisticResource from '@/api/back-office/budgetStatistic';
import TrackingDataResource from '@/api/trackingData';
import { AgGridVue } from 'ag-grid-vue';
import Tracking from '@/views/pages/components/Tracking.vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';

const incomeBudgetResource = new IncomeBudgetResource();
const budgetStatisticResource = new BudgetStatisticResource();
const trackingDataResource = new TrackingDataResource();

export default {
    name: 'BudgetForm',

    props: {
        titleForm: String,
        formType: {
            required: true,
        },
    },

    components: {
        'ag-grid-vue': AgGridVue,
        tracking: Tracking,
    },

    data() {
        return {
            dataTracking: null,
            // getRowNodeId: null,

            // Parameter From Child
            idData: '',
            paramsData: '',
            paramsDataEditor: '',
            updateEditor: false,
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            modeDataEditor: 0,
            modeDataValueTracking: 0,
            // Pop Up
            mainPopUp: false,
            // ------------------need setting manual for vModel-----------------//
            vModel: {},
            dlAccount: [],
            dlSubDepartment: [],
            period: [ 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
                2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
            // data error handling from laravel validation//
            dbErrors: {},
            btnSaveDisabled: false,
            mainTableName: '',
        };
    },

    methods: {
        // ------------------need setting manual for crud-----------------//
        async refreshData(search) {
            this.$emit('refreshData');
        },

        resetData() {
            this.vModel = {
                period: new Date().getFullYear(),
                sub_department_code: '',
                account_code: '',
                remark: '',
                amount: 0,
                type_code: 'M',
                M01: 0,
                p01: 0,
                M02: 0,
                p02: 0,
                M03: 0,
                p03: 0,
                M04: 0,
                p04: 0,
                M05: 0,
                p05: 0,
                M06: 0,
                p06: 0,
                M07: 0,
                p07: 0,
                M08: 0,
                p08: 0,
                M09: 0,
                p09: 0,
                M10: 0,
                p10: 0,
                M11: 0,
                p11: 0,
                M12: 0,
                p12: 0,
                user_id: this.global.userInfo.code,
            };
            this.dlAccount = [];
            this.dlSubDepartment = [];
            this.dbErrors = {};
            this.$validator.reset();
            this.dataTracking = null;
            this.btnSaveDisabled = false;
            this.modeDataEditor = this.global.modeData.insert;
        },

        async showModal(idData, modeData) {
            this.resetData(this.search);
            this.idData = idData.id_log;
            this.paramsData = idData;
            this.modeDataValue = modeData;
            if (modeData == this.global.modeData.edit) {
                this.$loadingIndicator(this);
                this.getDataLookup();
                await this.editData(idData);
                this.calculateAmount();
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

        async saveData() {
            this.$validator.validateAll('information').then(async (result) => {
                if (result) {
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

        calculateAmount() {
            if(this.vModel.type_code == 'M') {
                this.vModel.amount = parseFloat(this.vModel.M01) + parseFloat(this.vModel.M02) + parseFloat(this.vModel.M03) + parseFloat(this.vModel.M04) + parseFloat(this.vModel.M05) + parseFloat(this.vModel.M06)
                    + parseFloat(this.vModel.M07) + parseFloat(this.vModel.M08) + parseFloat(this.vModel.M09) + parseFloat(this.vModel.M10) + parseFloat(this.vModel.M11) + parseFloat(this.vModel.M12);

            } else if(this.vModel.type_code == 'A') {
                this.vModel.M01 = parseFloat(this.vModel.amount) / 12;
                this.vModel.M02 = this.vModel.M01;
                this.vModel.M03 = this.vModel.M01;
                this.vModel.M04 = this.vModel.M01;
                this.vModel.M05 = this.vModel.M01;
                this.vModel.M06 = this.vModel.M01;
                this.vModel.M07 = this.vModel.M01;
                this.vModel.M08 = this.vModel.M01;
                this.vModel.M09 = this.vModel.M01;
                this.vModel.M10 = this.vModel.M01;
                this.vModel.M11 = this.vModel.M01;
                this.vModel.M12 = this.vModel.M01;
            } else if(this.vModel.type_code == 'P') {
                this.setAmountFromPercentage();
            } else if(this.vModel.type_code == 'D') {
                let totalDays = this.getDaysOfYear(this.vModel.period);
                let period = this.vModel.period;
                let amountEachDay = parseFloat(this.vModel.amount) / parseFloat(totalDays);
                this.vModel.M01 = amountEachDay * this.getDaysInMonth(1, period);
                this.vModel.M02 = amountEachDay * this.getDaysInMonth(2, period);
                this.vModel.M03 = amountEachDay * this.getDaysInMonth(3, period);
                this.vModel.M04 = amountEachDay * this.getDaysInMonth(4, period);
                this.vModel.M05 = amountEachDay * this.getDaysInMonth(5, period);
                this.vModel.M06 = amountEachDay * this.getDaysInMonth(6, period);
                this.vModel.M07 = amountEachDay * this.getDaysInMonth(7, period);
                this.vModel.M08 = amountEachDay * this.getDaysInMonth(8, period);
                this.vModel.M09 = amountEachDay * this.getDaysInMonth(9, period);
                this.vModel.M10 = amountEachDay * this.getDaysInMonth(10, period);
                this.vModel.M11 = amountEachDay * this.getDaysInMonth(11, period);
                this.vModel.M12 = amountEachDay * this.getDaysInMonth(12, period);
            }

            if(this.vModel.type_code !== 'P') {
                this.setPercentageFromAmount();
            }
        },

        setPercentageFromAmount() {
            if(this.vModel.amount == 0) {
                this.vModel.p01 = 0;
                this.vModel.p02 = 0;
                this.vModel.p03 = 0;
                this.vModel.p04 = 0;
                this.vModel.p05 = 0;
                this.vModel.p06 = 0;
                this.vModel.p07 = 0;
                this.vModel.p08 = 0;
                this.vModel.p09 = 0;
                this.vModel.p10 = 0;
                this.vModel.p11 = 0;
                this.vModel.p12 = 0;
            } else {
                this.vModel.p01 = parseFloat(this.vModel.M01) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p02 = parseFloat(this.vModel.M02) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p03 = parseFloat(this.vModel.M03) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p04 = parseFloat(this.vModel.M04) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p05 = parseFloat(this.vModel.M05) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p06 = parseFloat(this.vModel.M06) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p07 = parseFloat(this.vModel.M07) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p08 = parseFloat(this.vModel.M08) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p09 = parseFloat(this.vModel.M09) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p10 = parseFloat(this.vModel.M10) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p11 = parseFloat(this.vModel.M11) / parseFloat(this.vModel.amount) * 100;
                this.vModel.p12 = parseFloat(this.vModel.M12) / parseFloat(this.vModel.amount) * 100;
            }
        },

        setAmountFromPercentage() {
            this.vModel.M01 = parseFloat(this.vModel.p01) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M02 = parseFloat(this.vModel.p02) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M03 = parseFloat(this.vModel.p03) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M04 = parseFloat(this.vModel.p04) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M05 = parseFloat(this.vModel.p05) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M06 = parseFloat(this.vModel.p06) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M07 = parseFloat(this.vModel.p07) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M08 = parseFloat(this.vModel.p08) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M09 = parseFloat(this.vModel.p09) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M10 = parseFloat(this.vModel.p10) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M11 = parseFloat(this.vModel.p11) / 100 * parseFloat(this.vModel.amount);
            this.vModel.M12 = parseFloat(this.vModel.p12) / 100 * parseFloat(this.vModel.amount);
        },

        getDaysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        },

        getDaysOfYear(year) {
            return this.isLeapYear(year) ? 366 : 365;
        },

        isLeapYear(year) {
            return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
        },

        async insertData() {
            try{
                const { data } = await this.apiResource.store(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.budget.${data}`));
                }
                this.btnSaveDisabled = false;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async updateData() {
            try{
                const { data } = await this.apiResource.update(this.vModel);
                if(data == 0) {
                    this.mainPopUp = false;
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.budget.${data}`));
                }
                this.btnSaveDisabled = true;
            } catch(error) {
                this.btnSaveDisabled = false;
                this.$closeLoadingIndicator(this);
                $alert.errorSaveDataAlert();
            }
        },

        async editData(params) {
            try{
                const { data } = await this.apiResource.get(params.id_log);
                this.vModel = data;
                this.mainPopUp = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
        },

        async getDataLookup() {
            const { data } = await this.apiResource.dataLookup({code:this.vModel.sub_department_code});
            this.dlAccount = data.account;
            this.dlSubDepartment = data.sub_department;
        },

        async handleChangeSubDepartment() {
            this.getDataLookup();
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.budgetIncome,
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
        this.apiResource = this.formType == this.global.formType.incomeBudget ? incomeBudgetResource : budgetStatisticResource;
    },

    watch: {
        mainPopUp() {
            if(!this.mainPopUp) {
                this.refreshData();
            }
        },
    },

    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    }
};
</script>
