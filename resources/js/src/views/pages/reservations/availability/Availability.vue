<template>
    <div class="availability">
        <vx-card class="filter">
            <vs-row vs-w="12" vs-type="flex" vs-align="center" vs-justify="flex-start" >
                <!-- <div class="wrap-form-select" vs-type="flex" vs-justify="space-around" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12"> -->
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="12" vs-lg="3">
                        <span style="margin-right:5px">{{ $t('availability.filter.fromDate') }}</span>
                        <date-picker class="w-full" id="date" style="margin-right:5px" @input="loadAvailibility()" :clearable="false" v-model="fromDate" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="6" vs-lg="3">
                        <vs-input-number id="night" v-model="vNight" @input="loadAvailibility()" :max="30" :min="1" icon-inc="expand_less" icon-dec="expand_more" style="width:100px;min-width:100px;font-size=4px;margin-left:-0.5px;"/>
                        <span style="margin-right:5px">{{ $t('availability.filter.night') }}</span>
                    </vs-col>
                    <vs-col style="height:37px" vs-type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="6" vs-lg="3">
                        <vs-checkbox @input="loadAvailibility()" id="show-bed-type" style="padding:0px; margin: inherit;" v-model="showBedType">{{ $t('availability.filter.showBedType') }}</vs-checkbox>
                    </vs-col>
                <!-- </div> -->
            </vs-row>
            <vs-row class="mt-3">
                <vs-col style="max-height:37px" vs-type="flex" vs-justify="flex-start" vs-align="center" vs-xs="6" vs-sm="6" vs-lg="6">
                    <span>{{ `${$t('availability.filter.filter')}` }}</span>
                    <v-select :disabled="simpleMode" class="w-full pl-1" @input="loadAvailibility()" multiple label="name" :reduce="value => value.code" :options="dlFilter" v-model="filter"/>
                </vs-col>
                <vs-col style="height:37px" vs-type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="6" vs-lg="3">
                    <vs-checkbox @input="handleSimpleMode()" id="show-bed-type" style="padding:0px; margin: inherit;" v-model="simpleMode">{{ $t('availability.filter.simpleMode') }}</vs-checkbox>
                </vs-col>
            </vs-row>
        </vx-card>
        <vx-card id="main-container" class="mt-3 vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                class="ag-theme-material"
                id="ag-grid-availability"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :rowData="rowData"
            ></ag-grid-vue>
        </vx-card>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import DatePicker from 'vue2-datepicker';
import '@sass/vuexy/components/datepicker.scss';
import AvailabilityResource from '@/api/reservation/availability.js';

const availabilityResource = new AvailabilityResource();
export default {
    name: 'Availability',

    components: {
        AgGridVue,
        DatePicker,
    },

    data() {
        return {
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            columnDefs: null,
            defaultColDef: null,
            rowData: null,
            fromDate: null,
            vNight: 10,
            tempDate: '',
            tempNight: '',
            showBedType: false,
            dlFilter: [
                { code: 1, name: 'Reservation' },
                { code: 2, name: 'Room Sold' },
                { code: 3, name: 'Room Compliment' },
                { code: 4, name: 'House Use' },
                { code: 5, name: 'Out of Order' },
                { code: 6, name: 'Office Use' },
                { code: 7, name: 'Under Construction' },
                // { code: 8, name: 'Available' },
                { code: 9, name: 'Expected Arrival' },
                { code: 10, name: 'Check In' },
                { code: 11, name: 'Walk In' },
                { code: 12, name: 'Expected Departure' },
                { code: 13, name: 'Check Out' }
            ],
            filter: [1,2],
            simpleMode: true,
        };
    },
    beforeMount() {
        this.gridOptions = {
            // rowHeight: this.global.rowHeightDefault
        };

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
        };

        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        loadAvailibility() {
            this.$loadingIndicator(this)
            this.getAvailability();
        },

        async getAvailability() {
            if (this.fromDate && this.vNight > 0 && this.vNight <= 30) {
                this.tempDate = this.fromDate;
                this.tempNight = this.vNight;
                const params = {
                    fromDate: this.fromDate,
                    night: this.vNight,
                    isBedType: this.showBedType,
                    filter: this.filter,
                };
                const { data } = await availabilityResource.availability(params);
                this.rowData = data.data;
                this.columnDefs = data.header;
                // this.$nextTick(()=>{this.setStyle();})
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } else if (!this.fromDate) {
                this.fromDate = this.tempDate;
            } else if (this.vNight <= 0 || this.vNight > 30) {
                this.vNight = this.tempNight;
            }
        },

        handleSimpleMode() {
            if (this.simpleMode) {
                this.filter = [1,2];
            } else {
                this.filter = [1,2,3,4,5,6,7,9,10,11,12,13];
            };
            this.loadAvailibility();
        },

        setStyle() {
            const elmnt = document.getElementsByClassName('ag-header-group-cell');
            const elmnt0 = document.getElementsByClassName('ag-header-group-cell')[0];
            const elmnt1 = document.getElementsByClassName('ag-header-group-cell')[1];
            const elmnt7 = document.getElementsByClassName('ag-header-group-cell')[7];
            const elmnt8 = document.getElementsByClassName('ag-header-group-cell')[8];
            const attr0 = elmnt0.getElementsByClassName('ag-header-group-cell-label');
            const attr1 = elmnt1.getElementsByClassName('ag-header-group-cell-label');
            const attr7 = elmnt7.getElementsByClassName('ag-header-group-cell-label');
            const attr8 = elmnt8.getElementsByClassName('ag-header-group-cell-label');

            const elmnt4 = document.getElementsByClassName('ag-header-group-cell')[4];
            const elmnt5 = document.getElementsByClassName('ag-header-group-cell')[5];
            const attr4 = elmnt4.getElementsByClassName('ag-header-group-cell-label');
            const attr5 = elmnt5.getElementsByClassName('ag-header-group-cell-label');

            attr0[0].style.borderTop = 'none';
            attr1[0].style.borderTop = 'none';
            if(this.simpleMode) {
                attr7[0].style.borderTop = 'none';
                attr8[0].style.borderTop = 'none';

                attr4[0].style.borderTop = '';
                attr5[0].style.borderTop = '';
            } else {
                attr4[0].style.borderTop = 'none';
                attr5[0].style.borderTop = 'none';

                attr7[0].style.borderTop = '';
                attr8[0].style.borderTop = '';
            }

            console.log(elmnt);
        }

    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
    async created() {
        await this.$store.dispatch('getAuditDate');
        this.fromDate = await this.auditDate;
        this.getAvailability();
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};

</script>
<style lang="scss">
#ag-grid-availability {

    .ag-header-icon {
        display: none !important;
    }
    .ag-header-group-cell-label, .ag-header-cell-label {
        justify-content: center;
        border-top: ridge;
    }
    .header-av{
        background: rgb(117, 250, 117);
    }

    //hide bottom:

}
.availability{
    .filter{
        span{
            font-size: 0.8rem;
        }
        .con-vs-checkbox{
            font-size: 0.8rem;
        }
    }
    .vs__selected-options {
        flex-wrap: nowrap !important;
        overflow-x: auto;
    }
    .vs__selected {
        line-height: 1;
        white-space: nowrap;
    }
}
</style>
