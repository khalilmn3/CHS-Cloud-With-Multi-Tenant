<template>
    <div class="transaction-search-bar mb-3">
        <vx-card class="box">
            <vs-row class="box-body" vs-align="start" vs-type="flex" vs-justify="space-between" vs-w="12">
                <vs-col class="lg:w-4/12 search-part">
                    <vs-row vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col vs-lg="5" vs-md="5" vs-xs="12">
                            <v-select class="transaction-search" :clearable="false" :reduce="searchOption => searchOption.code" v-model="vModelSearchData" label="name" :options="searchOption"></v-select>
                        </vs-col>
                        <vs-col vs-lg="7" vs-md="7" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="vModelTextSearchData" placeholder="Search" id="filter-text-box" @keyup.enter="onEnter()"/>
                                <template slot="append">
                                    <div class="append-text btn-addon">
                                    <vs-button icon="search" @click="onRefreshData" color="primary"></vs-button>
                                    </div>
                                </template>
                            </vx-input-group>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col class="filter-checkbox" vs-lg="2" vs-md="2" vs-xs="12">
                    <vs-checkbox @change="onRefreshData" v-model="vPossession">{{ $t('transaction.filter.possessionOnly') }}</vs-checkbox>
                    <vs-checkbox @change="onRefreshData" v-model="vTransfered">{{ $t('transaction.filter.showTransfered') }}</vs-checkbox>
                </vs-col>
                <vs-col class="filter-checkbox" vs-lg="2" vs-md="2" vs-xs="12">
                    <vs-checkbox @change="onRefreshData" v-model="vCorrection">{{ $t('transaction.filter.showCorrection') }}</vs-checkbox>
                    <vs-checkbox @change="onRefreshData" v-model="vVoid">{{ $t('transaction.filter.showVoid') }}</vs-checkbox>
                </vs-col>
                <vs-col vs-lg="2" vs-md="2" vs-xs="12">
                    <v-select class="transaction-search" @input="onRefreshData" :clearable="false" :reduce="data => data.code" v-model="vSubFolio" label="name" :options="subFolio"></v-select>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
export default {
    props: {
        searchOption: Array,
        searchDefault: String,
    },
    data() {
        return {
            mWalkedIn: true,
            mCheckedIn: true,
            mDeparture: true,
            all: true,
            vPossession: false,
            vTransfered: false,
            vCorrection: false,
            vVoid: false,
            vModelSelectLimitData: 0,
            vModelSearchData: '',
            vModelTextSearchData: '',
            vSubFolio: 'All',
            subFolio:
            [
                { code: 'All', name: 'All Sub Folio' },
                { code: 'A', name: 'Sub Folio A' },
                { code: 'B', name: 'Sub Folio B' },
                { code: 'C', name: 'Sub Folio C' },
                { code: 'D', name: 'Sub Folio D' },
            ],
        };
    },

    methods: {
        onRefreshData() {
            const search = {
                searchBy: this.vModelSearchData,
                keyword: this.vModelTextSearchData,
                limit: this.vModelSelectLimitData,
                subFolio: this.vSubFolio,
                possession: this.vPossession,
                transfered: this.vTransfered,
                void: this.vVoid,
                correction: this.vCorrection,
            };
            setTimeout(() => {
                this.$emit('search', search);
            }, 200);
        },
        selectAll() {
            this.mWalkedIn = !!this.all;
            this.mCheckedIn = !!this.all;
            this.mDeparture = !!this.all;
            this.onRefreshData();
        },
        onEnter() {
            this.onRefreshData();
        },

    },

    beforeMount() {
        // Assign limit data with variable Global
        this.vModelSearchData = this.searchDefault;
        this.vModelSelectLimitData = this.global.limitDefaultPageSize;
        // this.onRefreshData()
    },
};
</script>
