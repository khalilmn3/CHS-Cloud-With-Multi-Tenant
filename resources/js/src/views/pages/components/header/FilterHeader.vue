<template>
    <div class="guestinhouse-search-bar mb-3">
        <vx-card class="box">
            <vs-row class="box-body">
                <vs-col class="lg:w-1/2 search-part">
                    <vs-row v-show="formType !== global.formType.roomAvailability" vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col class="mt-2" vs-lg="4" vs-md="4" vs-xs="12">
                            <v-select :clearable="false" :reduce="searchOption => searchOption.value" v-model="vSearchBy" label="text" :options="searchOption"></v-select>
                        </vs-col>
                        <vs-col class="mt-2" :vs-lg="formType === global.formType.folioHistory ? '5' : '8'" :vs-md="formType === global.formType.folioHistory ? '5' : '8'" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="vSearch.keyword" :placeholder="$t('common.filter.search')" id="filter-text-box" v-on:keyup.enter="onEnter()"/>
                                <template slot="append">
                                    <div class="append-text btn-addon">
                                        <vs-button icon="search" @click="onRefreshData" color="primary"></vs-button>
                                    </div>
                                </template>
                            </vx-input-group>
                        </vs-col>
                        <vs-col class="mt-2" vs-lg="3" vs-md="3" vs-xs="12">
                            <date-picker v-if="formType === global.formType.folioHistory" @input="onRefreshData()" :clearable="false" v-model="vDate" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                        </vs-col>
                    </vs-row>
                    <vs-row v-show="formType === global.formType.roomAvailability" vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/6 mr-3">{{ $t('roomAvailability.filter.fromDate') }}</span>
                            <date-picker class="w-5/6 w-full" @input="onRefreshData()" v-model="vDate" :clearable="false" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                        </vs-col>
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/6 mr-3">{{ $t('roomAvailability.filter.night') }}</span>
                            <vs-input-number class="w-5/6" v-model="vSearch.night" v-on:input="onRefreshData()" :step="1" :max="30" :min="1" icon-inc="expand_less" icon-dec="expand_more"/>
                        </vs-col>
                    </vs-row>
                    <vs-row v-show="formType === global.formType.housekeeping || formType === global.formType.roomAvailability" vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/6 mr-3">{{ $t('common.filter.select.roomType') }}</span>
                            <v-select class="w-5/6 w-full" :reduce="value => value.code" v-model="vSearch.roomTypeCode" v-on:input="onRefreshData()" label="name" :options="dataLookUp.roomType"></v-select>
                        </vs-col>
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/6 mr-3">{{ $t('common.filter.select.bedType') }}</span>
                            <v-select class="w-5/6 w-full" :reduce="value => value.code" v-model="vSearch.bedTypeCode" v-on:input="onRefreshData()" label="name" :options="dataLookUp.bedType"></v-select>
                        </vs-col>
                    </vs-row>
                </vs-col>
                <vs-col class="lg:w-1/2 search-part">
                    <div class="room-filter">
                        <div v-show="formType === global.formType.folioHistory" class="reservation-status-filter">
                            <vs-row vs-align="flex-start" vs-type="flex" vs-justify="flext-start">
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                    <vs-chip color="#31FD4B">
                                        <vs-checkbox @change="onRefreshData()" v-model="vFolioType" :vs-value="global.folioType.deskFolio">{{ $t('common.filter.checkList.deskFolio') }}</vs-checkbox>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#2494C6">
                                    <vs-checkbox @change="onRefreshData()" v-model="vFolioType" :vs-value="global.folioType.masterFolio">{{ $t('common.filter.checkList.masterFolio') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#C62583">
                                    <vs-checkbox @change="onRefreshData()" v-model="vFolioType" :vs-value="global.folioType.guestFolio">{{ $t('common.filter.checkList.guestFolio') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#FF002A">
                                    <vs-checkbox @change="onRefreshData()" v-model="vCancelCheckIn">{{ $t('common.filter.checkList.cancelCheckIn') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                            </vs-row>
                        </div>
                         <div v-show="formType === global.formType.guestInHouse" class="reservation-status-filter">
                            <vs-row vs-align="flex-start" vs-type="flex" vs-justify="flext-start">
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                    <vs-chip color="#C62583">
                                        <vs-checkbox @change="onRefreshData()" v-model="vWalkIn">{{ $t('common.filter.checkList.walkedIn') }}</vs-checkbox>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#2494C6">
                                    <vs-checkbox @change="onRefreshData()" v-model="vCheckedIn">{{ $t('common.filter.checkList.checkedIn') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#FF002A">
                                    <vs-checkbox @change="onRefreshData()" v-model="vDeparture">{{ $t('common.filter.checkList.departure') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#31FD4B">
                                    <vs-checkbox @change="selectAll()" v-model="all" vs-value="C">{{ $t('common.filter.checkList.selectAll') }}</vs-checkbox>
                                </vs-chip>
                                </vs-col>
                            </vs-row>
                        </div>
                         <div v-show="formType === global.formType.lostAndFound" class="reservation-status-filter">
                            <vs-row vs-align="flex-start" vs-type="flex" vs-justify="flext-start">
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                    <vs-chip color="#C62583">
                                        <vs-radio @change="onRefreshData()" v-model="vShow" vs-value="1">{{ $t('common.filter.checkList.all') }}</vs-radio>
                                    </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#2494C6">
                                    <vs-radio @change="onRefreshData()" v-model="vShow" vs-value="2">{{ $t('common.filter.checkList.notReturned') }}</vs-radio>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#FF002A">
                                    <vs-radio @change="onRefreshData()" v-model="vShow" vs-value="3">{{ $t('common.filter.checkList.returned') }}</vs-radio>
                                </vs-chip>
                                </vs-col>
                                <vs-col vs-lg="3" vs-md="3" vs-xs="6">
                                <vs-chip color="#31FD4B">
                                    <vs-radio @change="onRefreshData()" v-model="vShow" vs-value="4">{{ $t('common.filter.checkList.notActive') }}</vs-radio>
                                </vs-chip>
                                </vs-col>
                            </vs-row>
                        </div>
                    </div>
                    <div v-show="formType === global.formType.housekeeping || formType === global.formType.roomAvailability">
                        <vs-row vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/3 mr-3">{{ $t('common.filter.select.roomStatus') }}</span>
                            <v-select class="w-2/3" :reduce="value => value.code" :clearable="false" v-model="vSearch.roomStatusCode" v-on:input="onRefreshData()" label="name" :options="dataLookUp.roomStatus"></v-select>
                        </vs-col>
                        <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                            <span class="w-1/3 mr-3">{{ $t('common.filter.select.smokingRoom') }}</span>
                            <v-select class="w-2/3" v-model="vSearch.smokingRoom" :clearable="false" v-on:input="onRefreshData()" label="name" :options="dataLookUp.smokingRoom"></v-select>
                        </vs-col>
                        </vs-row>
                        <vs-row vs-align="start" vs-type="flex" vs-justify="flext-start" vs-w="12">
                            <div class="building-floor pl-1 pr-1 md:w-1/2 w-full">
                                <vs-col class="mt-2" vs-type="flex" vs-align="center" vs-justify="flext-start" vs-lg="6" vs-sm="6" vs-xs="12">
                                    <span class="w-1/2 mr-3">{{ $t('common.filter.select.building') }}</span>
                                    <v-select class="w-1/2 w-full pr-1" v-model="vSearch.building" :reduce="value => value.building" v-on:input="onRefreshData()" label="building" :options="dataLookUp.building"></v-select>
                                </vs-col>
                                <vs-col class="w-full mt-2" vs-type="flex" vs-align="center" vs-justify="flext-start" vs-lg="6" vs-sm="6" vs-xs="12">
                                    <span class="w-1/3 mr-3">{{ $t('common.filter.select.floor') }}</span>
                                    <v-select class="w-2/3 w-full pl-1" v-model="vSearch.floor" :reduce="value => value.floor" v-on:input="onRefreshData()" label="floor" :options="dataLookUp.floor"></v-select>
                                </vs-col>
                            </div>
                            <vs-col class="pl-1 pr-1 mt-2" vs-type="flex" vs-align="center" vs-lg="6" vs-sm="6" vs-xs="12">
                                <span class="w-1/3 mr-3">{{ $t('common.filter.select.roomView') }}</span>
                                <v-select class="w-2/3" :reduce="value => value.code" v-model="vSearch.roomViewCode" v-on:input="onRefreshData()" label="name" :options="dataLookUp.roomView"></v-select>
                            </vs-col>
                        </vs-row>
                    </div>
                </vs-col>
            </vs-row>
        </vx-card>
    </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
import HousekeepingResource from '@/api/housekeeping.js'
const housekeepingResource = new HousekeepingResource();

export default {
    props: {
        searchOption: Array,
        searchDefault: [String, Number],
        limitPageSize: Number,
        formType: {
            type: String,
            default: '',
        },
    },
    components: {
        DatePicker,
    },
    data() {
        return {
            all: true,
            vModelSelectLimitData: 0,
            vSearchBy: '',
            vSearch: {},
            // folio history
            vDate: '',
            vFolioType: [],
            vDateTemp: '',
            vCancelCheckIn: '',
            // guest in house
            vWalkIn: true,
            vCheckedIn: true,
            vDeparture: true,
            dataLookUp: [],
            // Lost and Found
            vShow: '2',

        };
    },

    methods: {
        onRefreshData(limit) {
            this.vSearch.limit = limit >= 0 ? limit : this.limitPageSize;
            this.vSearch.searchBy = this.vSearchBy;
            if (this.formType === this.global.formType.folioHistory) {
                this.vSearch.date = this.vDate;
                this.vSearch.cancelCheckIn = this.vCancelCheckIn;
                this.vSearch.folioType = this.vFolioType;
                if (this.vDate) {
                    setTimeout(() => { this.$emit('search', this.vSearch); }, 200);
                    this.vDateTemp = this.vDate;
                    return;
                }
                this.vDate = this.vDateTemp;
                return;
            } if (this.formType === this.global.formType.guestInHouse) {
                this.vSearch.walkedIn = this.vWalkIn;
                this.vSearch.checkedIn = this.vCheckedIn;
                this.vSearch.departure = this.vDeparture;
           } else if (this.formType === this.global.formType.roomAvailability) {
                if (this.vDate && this.vDate >= this.auditDate && this.vSearch.night > 0 && this.vSearch.night < 31) {
                    this.vSearch.fromDate = this.vDate;
                    setTimeout(() => { this.$emit('search', this.vSearch); }, 200);
                    this.vDateTemp = this.vDate;
                    return;
                }
                this.vDate = this.vDateTemp;
                return;
           } else if (this.formType === this.global.formType.lostAndFound) {
               this.vSearch.show = this.vShow;
           }
            setTimeout(() => { this.$emit('search', this.vSearch); }, 200);
        },

        async loadDefaultFilter() {
            this.vSearchBy = this.searchDefault;
            this.vDate = await this.auditDate;
            this.vSearch = {
                keyword: '',
                night: 7,
                searchBy: this.vSearchBy,
                limit: this.global.limitDefaultPageSize,
            };
            if (this.formType === this.global.formType.folioHistory) {
                this.vCancelCheckIn = true;
                this.vFolioType = [
                    this.global.folioType.deskFolio, this.global.folioType.masterFolio, this.global.folioType.guestFolio,
                ];
            } else if (this.formType === this.global.formType.housekeeping || this.formType === this.global.formType.roomAvailability) {
                this.vSearch.night = 7;
                this.vSearch.roomStatusCode = this.dataLookUp.roomStatus != '' ? this.dataLookUp.roomStatus[0].code : '';
                this.vSearch.smokingRoom = this.dataLookUp.smokingRoom != '' ? this.dataLookUp.smokingRoom[0] : '';
            } else if (this.formType === this.global.formType.lostAndFound) {
                this.vSearch.show = '2';
            }
        },

        async getDataLookupRoomFilter() {
            const { data } = await housekeepingResource.filterLookup();
            this.dataLookUp.roomType = data.dlRoomType;
            this.dataLookUp.bedType = data.dlBedType;
            this.dataLookUp.building = data.dlBuilding;
            this.dataLookUp.floor = data.dlFloor;
            this.dataLookUp.roomView = data.dlRoomView;
            this.dataLookUp.roomStatus = data.dlRoomStatus;
            this.dataLookUp.smokingRoom = data.dlSmokingRoom;

            this.loadDefaultFilter();
        },

        selectAll() {
            if (this.formType === this.global.formType.folioHistory) {
                this.vWalkIn = !!this.all;
                this.vCheckedIn = !!this.all;
                this.vDeparture = !!this.all;
            }
            this.onRefreshData();
        },

        onEnter() {
            this.onRefreshData();
        },

    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
    async created() {
        await this.$store.dispatch('getAuditDate');
        if (this.formType === this.global.formType.housekeeping || this.formType === this.global.formType.roomAvailability) {
            await this.getDataLookupRoomFilter();
        } else {
            await this.loadDefaultFilter();
        }
        this.onRefreshData();
    },
    beforeMount() {
    },
};
</script>
<style lang="scss">
.housekeeping,.RoomAvailability{
    .box .box-body .search-part .v-select {
    min-width: 60px;

    }
    .vs--searchable .vs__dropdown-toggle {
        cursor: text;
        height: 32px;

    }
    .mx-input{
        height: 30px;
    }

    .vs-input-number {
        margin: 0px;
    }

    @media only screen and (min-width:768px){
        .building-floor{
            display:flex;
            justify-content: space-between
        }
    }
}
.RoomAvailability{
    .box .box-body .search-part .v-select {
    min-width: 60px;

    }
    .vs--searchable .vs__dropdown-toggle {
        cursor: text;
        height: 30px;

    }
    .mx-input{
        height: 30px;
    }

    .vs-input-number {
        margin: 0px;
    }

    @media only screen and (min-width:768px){
        .building-floor{
            display:flex;
            justify-content: space-between
        }
    }
}
</style>
