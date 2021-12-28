<template>
<div class="dashboard">
    <vs-row v-if="resolutionWidth > 900" class="statistic-1" vs-type="flex" vs-justify="space-between">
        <vs-col vs-lg="4" vs-xs="12">
            <vs-card id="statistic-card" class="arrival vs-con-loading__container">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.percentOccupancy') }} </vs-row>
                <vs-row class="occupancy mt-6" vs-type="flex" vs-justify="center">
                    <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="actual-data"> {{ (occupancyCurrent || 0) | currency_format }} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="actual-label"> {{ $t('dashboard.currentOccupancy') }} </vs-row>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="expected-data"> {{ (occupancyTonight || 0) | currency_format }} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="expected-label"> {{ $t('dashboard.tonightOccupancy') }} </vs-row>
                    </vs-col>
                </vs-row>
            </vs-card>
        </vs-col>
        <vs-col class="right-item" vs-lg="4" vs-xs="12">
            <vs-card id="statistic-card" class="departure vs-con-loading__container">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.occupied') }} </vs-row>
                <vs-row class="mt-6 occupied" vs-type="flex" vs-justify="center">
                    <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="actual-data"> {{occupiedCurrent || 0}} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="actual-label"> {{ $t('dashboard.currentOccupied') }} </vs-row>
                    </vs-col>
                     <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="expected-data"> {{occupiedTonight || 0}} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="expected-label"> {{ $t('dashboard.tonightOccupied') }} </vs-row>
                    </vs-col>
                </vs-row>
            </vs-card>
        </vs-col>
        <vs-col class="right-item" vs-lg="4" vs-xs="12">
            <vs-card id="statistic-card" class="departure vs-con-loading__container">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.roomAvailable') }} </vs-row>
                <vs-row class="mt-6 available" vs-type="flex" vs-justify="center">
                    <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="actual-data"> {{ availableCurrent || 0 }} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="actual-label"> {{ $t('dashboard.currentRoomAvailable') }} </vs-row>
                    </vs-col>
                     <vs-col vs-lg="6">
                        <vs-row vs-type="flex" vs-justify="center" id="expected-data"> {{ availableTonight || 0 }} </vs-row>
                        <vs-row vs-type="flex" vs-justify="center" id="expected-label"> {{ $t('dashboard.tonightRoomAvailable') }} </vs-row>
                    </vs-col>
                </vs-row>
            </vs-card>
        </vs-col>
    </vs-row>
    <!-- //SCREEN < 900 -->
    <vs-row v-else class="statistic-1 small-size" vs-type="flex" vs-justify="space-between">
        <!-- <div id="background"></div> -->
        <vs-card id="statistic-card" class="arrival vs-con-loading__container">
            <vs-col id="occupancy" vs-lg="4" vs-xs="4">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.percentOccupancy') }} </vs-row>
                <vs-row id="row-data" class="mt-1" vs-type="flex" vs-justify="center">
                    <span id="actual-data"> {{ (occupancyCurrent || 0) | currency_format }}</span>
                    <span id="expected-data">/{{ (occupancyTonight || 0) | currency_format }}</span>
                </vs-row>
            </vs-col>
                <vs-col id="occupied" vs-lg="4" vs-xs="4">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.occupied') }} </vs-row>
                <vs-row id="row-data" class="mt-1" vs-type="flex" vs-justify="center">
                    <span id="actual-data"> {{ occupiedCurrent || 0 }}</span>
                    <span id="expected-data">/{{ occupiedTonight || 0 }}</span>
                </vs-row>
            </vs-col>
            </vs-col>
                <vs-col id="available" vs-lg="4" vs-xs="4">
                <vs-row vs-type="flex" vs-justify="center" id="title"> {{ $t('dashboard.roomAvailable') }} </vs-row>
                <vs-row id="row-data" class="mt-1" vs-type="flex" vs-justify="center">
                    <span id="actual-data"> {{ availableCurrent || 0 }}</span>
                    <span id="expected-data">/{{ availableTonight || 0 }}</span>
                </vs-row>
            </vs-col>
        </vs-card>
    </vs-row>

    <vs-row class="statistic-2">
        <vs-col class="mt-3" id="card-1" vs-lg="5" vs-sm="12" vs-xs="12">
            <vx-card id="room" :title="$t('dashboard.roomOccupancyGraphic.title')" class="vs-con-loading__container">
                <apexchart type="donut" height="250" :options="dchartOptions" :series="dseries"></apexchart>
                <apexchart type="radialBar" height="250" :options="rplotOptions" :series="rseries"></apexchart>
            </vx-card>
        </vs-col>
        <vs-col class="mt-3 right-item" id="card-2" vs-lg="7" vs-sm="12" vs-xs="12">
            <vx-card id="available-list" class="vs-con-loading__container">
                <room-statistic :rowData="roomAvailableList"/>
            </vx-card>
         </vs-col>
    </vs-row>
    <vs-row class="mt-3">
         <vs-col class="mt-3" id="card-1" vs-lg="6" vs-sm="12" vs-xs="12">
            <vx-card id="occupied-chart" :title="$t('dashboard.roomSoldStatistic')" class="vs-con-loading__container">
                <apexchart type="area" height="350" :options="oChartOptions" :series="oSeries"></apexchart>
            </vx-card>
        </vs-col>
        <vs-col class="mt-3 right-item" id="card-2" vs-lg="6" vs-sm="12" vs-xs="12">
            <vx-card id="room-status-bar" :title="$t('dashboard.housekeepingStatus')" class="vs-con-loading__container">
                <apexchart type="bar" height="350" :options="roomCategories" :series="roomSeries"></apexchart>
            </vx-card>
         </vs-col>
    </vs-row>
    <vs-row class="statistic-2">
        <vs-col class="mt-3" id="card-1" vs-lg="6" vs-sm="12" vs-xs="12">
            <vx-card id="expected-arrival-list" class="vs-con-loading__container" :title="$t('dashboard.expectedArrival.title')">
                <expected-arrival :rowData="expectedArrival"/>
            </vx-card>
        </vs-col>
        <vs-col class="mt-3 right-item" id="card-2" vs-lg="6" vs-sm="12" vs-xs="12">
            <vx-card id="expected-departure-list" class="vs-con-loading__container" :title="$t('dashboard.expectedDeparture.title')">
                <expected-departure :rowData="expectedDeparture"/>
            </vx-card>
         </vs-col>
    </vs-row>
</div>
</template>
<script>
import Apexchart from 'vue-apexcharts';
import DashboardResource from '@/api/dashboard.js';
import ExpectedArrival from './component/ExpectedArrival.vue';
import ExpectedDeparture from './component/ExpectedDeparture.vue';
import RoomStatistic from './component/RoomStatistic.vue';

const dashboardResource = new DashboardResource();
export default {
    components: {
        Apexchart,
        ExpectedArrival,
        ExpectedDeparture,
        RoomStatistic,
    },
    data() {
        return {
            resolutionHeight: null,
            resolutionWidth: null,

            roomAvailableList: null,
            expectedArrival: null,
            expectedDeparture: null,

            roomDataStatistic: null,
            arrival: {
                actual: {
                    rooms: 0,
                },
                expected: {
                    rooms: 0,
                },
            },
            departure: {
                actual: {
                    rooms: 0,
                },
                expected: {
                    rooms: 0,
                },
            },
            reservation: {
                rooms: 0,
            },
            guestInHouse: {
                rooms: 0,
            },

            // OCCUPANCY RADIAL
            rseries: [],
            rplotOptions: {
                stroke: {
                    lineCap: 'round',
                },
                labels: ['Occupancy'],
                radialBar: {
                    dataLabels: {
                        name: {
                            show: true,
                        },
                        hollow: {
                            margin: 15,
                            size: '100%',
                        },
                        value: {
                            show: true,
                            fontSize: '14px',
                            formatter(val) {
                                return `${val}%`;
                            },
                        },
                        total: {
                            show: true,
                            label: 'Total',
                        },
                    },
                },
                dataLabels: {
                    showOn: 'always',
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '10px',
                    },
                    value: {
                        color: '#111',
                        fontSize: '10px',
                        show: true,
                    },
                },
            },

            // OCCUPIED CHART
            oSeries: [
            ],
            oChartOptions: {
                labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true,
                    events: {
                        selection(chart, e) {
                            console.log(new Date(e.xaxis.min));
                        },
                    },
                },
                colors: ['#008FFB', '#00E396', '#CED4DC'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth',
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                },
                xaxis: {
                    type: 'datetime',
                },
            },

            // ROOM STATUS DONUT
            dseries: [],
            dchartOptions: {
                labels: ['Compliment', 'Reserved', 'House Use', 'Unavailable', 'Available', 'Sold'],
                dataLabels: {
                    enabled: false,
                    formatter(val) {
                        return `${val}%`;
                    },
                },
                plotOptions: {
                    pie: {
                        customScale: 1,
                        offsetX: 0,
                        offsetY: 0,
                        expandOnClick: true,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10,
                        },
                        donut: {
                            size: '65%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '22px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 600,
                                    color: undefined,
                                    offsetY: -10,
                                },
                                value: {
                                    show: true,
                                    fontSize: '16px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 400,
                                    color: undefined,
                                    offsetY: 16,
                                    formatter(val) {
                                        return val;
                                    },
                                },
                                total: {
                                    show: true,
                                    showAlways: false,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    fontWeight: 600,
                                    color: '#373d3f',
                                    formatter(w) {
                                        const data = w.globals.seriesTotals;
                                        const total = data.reduce((a, b) => a + b, 0);
                                        const sold = data[0] + data[5];
                                        const saleable = total - data[2] - data[3];
                                        return total;
                                        // return  ((sold / saleable) * 100).toFixed(2) + '%';
                                    },
                                },
                            },
                        },
                    },
                },
            },

            // ROOM AVAILABLE BAR STACKED
            roomCategories: {},
            roomSeries: [],
            roomChartOptions: {
                chart: {
                    type: 'bar',
                    height: 300,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff'],
                },
                xaxis: {
                    categories: [],
                    labels: {
                        formatter(val) {
                            return val;
                        },
                    },
                },
                yaxis: {
                    title: {
                        text: undefined,
                    },
                },
                tooltip: {
                    y: {
                        formatter(val) {
                            return val;
                        },
                    },
                },
                fill: {
                    opacity: 1,
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 1,
                },
            },
        };
    },
    methods: {
        async roomStatistic() {
            this.$vs.loading({ container: '#available-list', scale: this.scaleLoadingContainer });
            this.$vs.loading({ container: '#room', scale: this.scaleLoadingContainer });
            const { data } = await dashboardResource.roomStatistic();
            this.roomAvailableList = data.dataTable;
            this.roomDataStatistic = data;
            this.dseries = data.graphic;
            this.rseries = [data.occupancy];
            this.$vs.loading.close('#available-list>.con-vs-loading');
            this.$vs.loading.close('#room>.con-vs-loading');
        },

        async roomSold() {
            this.$vs.loading({ container: '#occupied-chart', scale: this.scaleLoadingContainer });
            const { data } = await dashboardResource.roomSold();
            this.oSeries = data;
            this.$vs.loading.close('#occupied-chart>.con-vs-loading');
        },

        async housekeepingStatus() {
            this.$vs.loading({ container: '#room-status-bar', scale: this.scaleLoadingContainer });
            const { data } = await dashboardResource.roomStatus();
            this.roomSeries = data.series;
            this.roomChartOptions.xaxis.categories = data.categories;
            this.roomCategories = this.roomChartOptions;
            this.$vs.loading.close('#room-status-bar>.con-vs-loading');
        },

        async expectedArrivalDeparture() {
            this.$vs.loading({ container: '#expected-arrival-list', scale: this.scaleLoadingContainer });
            this.$vs.loading({ container: '#expected-departure-list', scale: this.scaleLoadingContainer });
            const { data } = await dashboardResource.expectedArrivalDeparture();
            this.expectedArrival = data.expected_arrival;
            this.expectedDeparture = data.expected_departure;
            this.$vs.loading.close('#expected-departure-list>.con-vs-loading');
            this.$vs.loading.close('#expected-arrival-list>.con-vs-loading');
        },

        async roomStatistic2() {
            this.$vs.loading({ container: '.arrival', scale: this.scaleLoadingContainer });
            // this.$vs.loading({container:'.departure',scale:this.scaleLoadingContainer});
            // this.$vs.loading({container:'.reservation',scale:this.scaleLoadingContainer});
            // this.$vs.loading({container:'.guest-in-house',scale:this.scaleLoadingContainer});
            const { data } = await dashboardResource.roomStatistic2();
            this.arrival.actual = data.arrival != undefined ? data.arrival : {};
            this.arrival.expected = data.expected  != undefined ? data.expected : {};
            this.departure.actual = data.departure != undefined ? data.departure : {};
            this.departure.expected = data.expected_departure != undefined ? data.expected_departure : {};
            this.reservation = data.reservation != undefined ? data.reservation : {};
            this.guestInHouse = data.in_house != undefined ? data.in_house : {};
            this.$vs.loading.close('.arrival>.con-vs-loading');
            // this.$vs.loading.close('.departure>.con-vs-loading');
            // this.$vs.loading.close('.reservation>.con-vs-loading');
            // this.$vs.loading.close('.guest-in-house>.con-vs-loading');
        },

        async loadData() {
            // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            this.$vs.loading.close('#page-login>.con-vs-loading');
            this.roomStatistic();
            this.roomStatistic2();
            this.housekeepingStatus();
            this.expectedArrivalDeparture();
            await this.roomSold();
            this.$vs.loading.close('#layout--main>.con-vs-loading');
        },

        getResolution() {
            this.resolutionWidth = screen.width;
        },
    },
    computed: {
        occupiedCurrent() {
            if (this.roomDataStatistic) {
                return this.roomDataStatistic.dataTable[6].rooms;
            }
            return 0;
        },
        occupiedTonight() {
            if (this.roomDataStatistic) {
                return (this.roomDataStatistic.dataTable[6].rooms - this.roomDataStatistic.dataTable[4].rooms) + this.roomDataStatistic.dataTable[3].rooms;
            }
            return 0;
        },
        availableTonight() {
            if (this.roomDataStatistic) {
                return this.roomDataStatistic.saleableRoom - this.occupiedTonight;
            }
            return 0;
        },
        availableCurrent() {
            if (this.roomDataStatistic) {
                return this.roomDataStatistic.saleableRoom - this.occupiedCurrent;
            }
            return 0;
        },
        occupancyTonight() {
            if (this.roomDataStatistic) {
                return this.occupiedTonight / this.roomDataStatistic.saleableRoom * 100;
            }
            return 0;
        },
        occupancyCurrent() {
            if (this.roomDataStatistic) {
                return this.occupiedCurrent / this.roomDataStatistic.saleableRoom * 100;
            }
            return 0;
        },
    },
    mounted() {
        this.loadData();
        window.addEventListener('resize', this.getResolution());
    },

    watch: {
    },
};
</script>
<style lang="scss" scoped>
.dashboard{
    .con-vs-card{
        margin-bottom: 0px;
    }
    @media only screen and (min-width: 900px) {
        .right-item{
            padding-left: 10px;;
        }
    }
    .statistic-1{
        .occupancy{
             #actual-data{
                color: rgba(119,93,208,1);
             }
        }
        .occupied{
            #actual-data{
                color: rgba(0,143,251,1);
             }
        }
        .available{
             #actual-data{
                color: rgba(0,227,150,1);
             }
        }
        .con-vs-card{
            padding: 10px;
        }
        #title{
            font-weight: 600;
            font-size: 15px;
        }
        #actual-data{
            font-size: 40px;
            font-weight: bolder;
        }
        #expected-data{
            font-size: 40px;
            font-weight: bolder;
            color: rgb(70, 69, 69);
        }
    }

    .statistic-1.small-size{
        @media only screen and (max-width: 900px) {
            #background{
                background: rgba(var(--vs-primary), 1);
                height: 75px;
                width: 103%;
                margin-left: -6%;
                margin-top: -50px;
                position: absolute;
            }
        }

        #row-data{
            align-items: baseline;
        }
        #occupancy{
            border-style: solid;
            border-color: #8080804d;
            border-width: 0px;
            border-right-width: 1px;
             #actual-data{
                color: rgba(119,93,208,1);
             }
        }
        #occupied{
            border-style: solid;
            border-color: #8080804d;
            border-width: 0px;
            border-right-width: 1px;
            #actual-data{
                color: rgba(0,143,251,1);
             }
        }

        #available{
            border-style: solid;
            border-color: #8080804d;
            border-width: 0px;
            border-right-width: 1px;
             #actual-data{
                color: rgba(0,227,150,1);
             }
        }
        .con-vs-card{
            padding: 10px;
        }
        #title{
            font-weight: 600;
            font-size: 10px;
        }
        #actual-data{
            font-size: 20px;
            font-weight: bolder;
        }
        #expected-data{
            font-size: 15px;
            font-weight: bolder;
            color: rgb(70, 69, 69);
        }
    }
}
</style>
