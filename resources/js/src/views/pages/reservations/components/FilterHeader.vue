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
                    <vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
                        <vs-col vs-type="flex" vs-align="center" vs-lg="5" vs-sm="6" vs-xs="12">
                            <vs-col vs-lg="2" vs-sm="2" vs-xs="2">
                                <span >From:</span>
                            </vs-col>
                            <vs-col vs-lg="10" vs-sm="10" vs-xs="10">
                                <date-picker v-model="date.from" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                            </vs-col>
                        </vs-col>
                        <vs-col vs-type="flex" vs-align="center" vs-lg="5" vs-sm="6" vs-xs="12">
                            <vs-col vs-lg="2" vs-sm="2" vs-xs="2">
                                <span>To:</span>
                            </vs-col>
                            <vs-col vs-lg="10" vs-sm="10" vs-xs="10">
                                <date-picker vs-lg="10" vs-sm="10" vs-xs="10" v-model="date.to" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"  />
                            </vs-col>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col v-if="!groupCheckIn" class="lg:w-1/2 filter-part">
                    <div class="room-filter">
                        <div class="reservation-status-filter">
                            <vs-row class="mb-2" vs-align="flex-start" vs-type="flex" vs-justify="flext-start">
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#00C1B0">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="N">Reserved</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#004481">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="W">Wait List</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#2494C6">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="I">Checked In</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#FF83A5">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="O">Checked Out</vs-radio>
                                    </vs-chip>
                                </vs-col>
                            </vs-row>
                            <vs-row vs-align="flex-start" vs-type="flex" vs-justify="flext-start">
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#FF002A">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="C">Canceled</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#FF8A00">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="S">No Show</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#C62583">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="V">Voided</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-sm="3" vs-xs="6">
                                    <vs-chip color="#31FD4B">
                                        <vs-radio @change="onRefreshData()" color="white" v-model="mFilter" vs-value="All">Select All</vs-radio>
                                    </vs-chip>
                                </vs-col>
                            </vs-row>
                        </div>
                    </div>
                </vs-col>
                <vs-col v-else vs-w="6">
                    <vs-row>
                        <vs-col  vs-type="flex" vs-align="center" vs-lg="2" vs-sm="2" vs-xs="2">
                            <span>Group:</span>
                        </vs-col>
                        <vs-col vs-lg="10" vs-sm="10" vs-xs="10">
                            <v-select :reduce="searchOption => searchOption.code" v-model="vGroup" label="name" :options="groupList" @input="onRefreshData()"></v-select>
                        </vs-col>
                    </vs-row>
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
        groupCheckIn: Boolean,
        groupList: Array,
        limitPageSize: Number,
    },
    data() {
        return {
            mFilter: 'N',
            arrival: true,
            departure: false,
            all: false,
            date: {
                from: '',
                to: '',
            },
            vModelSelectLimitData: 1000,
            vModelSearchData: '',
            vModelTextSearchData: '',
            vGroup: '',
        };
    },

    methods: {
        async onRefreshData(limit) {
            const search = {
                searchBy: this.vModelSearchData,
                keyword: this.vModelTextSearchData,
                group: this.vGroup,
                limit: limit >= 0 ? limit : this.limitPageSize,
                date_from: this.date.from,
                date_to: this.date.to,
                filter: this.mFilter,
                arrival: this.arrival,
                departure: this.departure,
            };
            setTimeout(() => {
                this.$emit('search', search);
            }, 200);
        },
        onEnter() {
            this.onRefreshData();
        },

    },

    beforeMount() {
        	// Assign limit data with variable Global
        this.vModelSearchData = this.searchDefault;
        this.vModelSelectLimitData = this.global.limitDefaultPageSize;
        this.onRefreshData();
    },
    watch: {
        groupCheckIn() {
            if (this.groupCheckIn == false) {
                this.vGroup = '';
                this.onRefreshData();
            } else if (this.groupList.length > 0) {
                this.vGroup = this.groupList[0].code;
                this.onRefreshData();
            }
        },
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
