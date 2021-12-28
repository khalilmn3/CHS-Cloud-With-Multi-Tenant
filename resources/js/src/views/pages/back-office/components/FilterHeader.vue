<template>
    <div class="reservation-search-bar mb-3">
        <vx-card class="box">
            <vs-row class="box-body">
                <vs-col class="lg:w-1/2 search-part">
                    <vs-row class="mb-2" vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col vs-lg="5" vs-sm="5" vs-xs="12">
                            <v-select :clearable="false" :reduce="searchOption => searchOption.value" v-model="vModelSearchData" label="text" :options="searchOption"></v-select>
                        </vs-col>
                        <vs-col vs-lg="7" vs-sm="7" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="vModelTextSearchData" placeholder="Search" id="filter-text-box" v-on:keyup.enter="onEnter()"/>
                                <template slot="append">
                                    <div class="append-text btn-addon">
                                    <vs-button icon="search" @click="onRefreshData" color="primary"></vs-button>
                                    </div>
                                </template>
                            </vx-input-group>
                        </vs-col>
                    </vs-row>
                    <vs-row v-if="formType == global.formType.arCityLedger || formType == global.formType.arCityLedgerInvoice || formType == global.formType.apRefundDeposit || formType == global.formType.apCommissionAndOther" vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
                        <vs-col vs-type="flex" vs-align="center" vs-lg="5" vs-sm="6" vs-xs="12">
                            <vs-col vs-lg="2" vs-sm="2" vs-xs="2">
                                <span >From:</span>
                            </vs-col>
                            <vs-col vs-lg="10" vs-sm="10" vs-xs="10">
                                <date-picker @input="onRefreshData(); handleChangeFromDate()" v-model="date.from" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                            </vs-col>
                        </vs-col>
                        <vs-col vs-type="flex" vs-align="center" vs-lg="5" vs-sm="6" vs-xs="12">
                            <vs-col vs-lg="2" vs-sm="2" vs-xs="2">
                                <span>To:</span>
                            </vs-col>
                            <vs-col vs-lg="10" vs-sm="10" vs-xs="10">
                                <date-picker @input="onRefreshData" :disabled-date="dateDisable" vs-lg="10" vs-sm="10" vs-xs="10" v-model="date.to" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"  />
                            </vs-col>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col v-if="formType == global.formType.arCityLedger || formType == global.formType.arCityLedgerInvoice || formType == global.formType.apRefundDeposit || formType == global.formType.apCommissionAndOther" class="lg:w-1/2 filter-part">
                    <div class="pl-3">
                        <vs-row class="mb-2" v-if="formType == global.formType.arCityLedgerInvoice">
                            <vs-col vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-row><label>{{$t('common.filter.companyType')}}</label></vs-row>
                                <v-select :clearable="true" @input="onRefreshData" :reduce="searchOption => searchOption.code" v-model="vCompanyType" label="name" :options="companyTypeOptions"></v-select>
                            </vs-col>
                        </vs-row>
                        <vs-row>
                            <vs-col vs-type="flex" v-if="formType == global.formType.arCityLedgerInvoice || formType == global.formType.apRefundDeposit || formType == global.formType.apCommissionAndOther" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-radio class="mr-2" v-model="vIsPaid" @change="onRefreshData()" vs-value="0">{{$t('common.filter.checkList.unpaid')}}</vs-radio>
                                <vs-radio v-model="vIsPaid" @change="onRefreshData()" vs-value="-1">{{$t('common.filter.checkList.paid')}}</vs-radio>
                            </vs-col>
                        </vs-row>
                    </div>
                </vs-col>
                <vs-col v-if="formType == global.formType.bankTransaction" class="lg:w-1/2 filter-part">
                    <div class="pl-3">
                        <vs-row>
                            <vs-col vs-type="flex" vs-lg="5" vs-sm="5" vs-xs="12">
                                <vs-radio class="mr-2" v-model="vIsReconciliated" @change="onRefreshData()" vs-value="0">{{$t('common.filter.checkList.unreconciliated')}}</vs-radio>
                                <vs-radio v-model="vIsReconciliated" @change="onRefreshData()" vs-value="-1">{{$t('common.filter.checkList.reconciliated')}}</vs-radio>
                            </vs-col>
                        </vs-row>
                    </div>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
import ARCityLedgerResource from '@/api/back-office/arCityLedger';
import { formatDateDatabase, formatDateDatabaseAddWeek } from '@/utils/format';

const arCityLedgerResource = new ARCityLedgerResource();
export default {
    props: {
        formType: String,
        searchDefault: [String, Number],
        searchOption: Array,
        limitPageSize: Number,
    },
    data() {
        return {
            date: {
                from: '',
                to: '',
            },
            vModelSelectLimitData: 1000,
            vModelSearchData: '',
            vModelTextSearchData: '',
            companyTypeOptions: [],
            vCompanyType: '',
            vIsPaid: '0',
            vIsReconciliated: '0',
        };
    },

    methods: {
        async onRefreshData(limit) {
            let search = {
                searchBy: this.vModelSearchData,
                keyword: this.vModelTextSearchData,
                limit: limit >= 0 ? limit : this.limitPageSize,
                date_from: this.date.from,
                date_to: this.date.to,
            };
            if(this.formType == this.global.formType.arCityLedger || this.formType == this.global.formType.arCityLedgerInvoice || this.formType == this.global.formType.apRefundDeposit
                || this.formType == this.global.formType.apCommissionAndOther) {
               if(this.formType == this.global.formType.arCityLedger || this.formType == this.global.formType.arCityLedgerInvoice) {
                    search.company_type = this.vCompanyType;
               }
                if(this.formType == this.global.formType.arCityLedgerInvoice || this.formType == this.global.formType.apRefundDeposit || this.formType == this.global.formType.apCommissionAndOther) {
                    search.is_paid = this.vIsPaid;
                }
            }

            if(this.formType == this.global.formType.bankTransaction) {
                search.is_reconciliated = this.vIsReconciliated;
            }
            setTimeout(() => {
                this.$emit('search', search);
            }, 200);
        },

        getDateOfTheMonth() {
            const date = new Date(); const y = date.getFullYear(); const m = date.getMonth();
            const firstDay = new Date(y, m, 1);
            const lastDay = new Date(y, m + 1, 0);
            this.date.from = formatDateDatabase(firstDay);
            this.date.to = formatDateDatabase(lastDay);
        },

        async getCompanyType() {
            const { data } = await arCityLedgerResource.getCompanyType();
            this.companyTypeOptions = data;
        },

        dateDisable(date) {
            if(this.date.from) {
                const dateX = new Date(this.date.from);
                dateX.setDate(dateX.getDate());
                return date < dateX;
            }
        },

        handleChangeFromDate() {
            if(this.date.from) {
                if(this.date.from > this.date.to) {
                    this.date.to = formatDateDatabaseAddWeek(this.date.from, 4);
                }
            }
        },

        onEnter() {
            this.onRefreshData();
        },

    },

    beforeMount() {
        	// Assign limit data with variable Global
        this.vModelSearchData = this.searchDefault;
        this.vModelSelectLimitData = this.global.limitDefaultPageSize;
        if(this.formType == this.global.formType.arCityLedger || this.formType == this.global.formType.arCityLedgerInvoice ||
            this.formType == this.global.formType.bankTransaction || this.formType === this.global.formType.bankReconciliation || this.formType === this.global.formType.apRefundDeposit
            || this.formType == this.global.formType.apCommissionAndOther) {
                if(this.formType == this.global.formType.arCityLedger || this.formType == this.global.formType.arCityLedgerInvoice){
                    this.getCompanyType();
                }

            this.getDateOfTheMonth();
        }
        this.onRefreshData();
    },
    watch: {
    },
};
</script>
<style lang="scss">
.room-filter .reservation-status-filter {
    .vs-radio--circle {
        background: rgba(0, 0, 0, 0.38) !important;
        box-shadow: white 0px 0px 1px 0px !important;
    }
    .vs-radio--borde {
        border: 0px solid #c8c8c8 !important;
    }
}

</style>
