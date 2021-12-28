<template>
    <div class="dynamic-rate">
        <vx-card class="filter">
            <vs-row vs-w="12" vs-type="flex" vs-align="center" vs-justify="flex-start" >
                <!-- <div class="wrap-form-select" vs-type="flex" vs-justify="space-around" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12"> -->
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="12" vs-sm="12" vs-lg="3">
                        <span style="margin-right:5px">{{ $t('availability.filter.fromDate') }}</span>
                        <date-picker class="w-full" id="date" style="margin-right:5px" @input="refreshData()" :clearable="false" v-model="fromDate" :lang="$t('lang')" value-type="YYYY-MM-DD" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" label="name"/>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="6" vs-lg="3">
                        <vs-input-number id="night" v-model="vNight" @input="refreshData()" :max="30" :min="1" icon-inc="expand_less" icon-dec="expand_more" style="width:100px;min-width:100px;font-size=4px;margin-left:-0.5px;"/>
                        <span style="margin-right:5px">{{ $t('availability.filter.night') }}</span>
                    </vs-col>
            </vs-row>
        </vx-card>
        <vx-card id="main-container" class="mt-3 vs-con-loading__container">
            <ag-grid-vue
                :style="global.styleAgGridFrame"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :enableRangeSelection="true"
                :suppressMenu="true"
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
                @cellDoubleClicked="handleCellDoubleClicked"
            ></ag-grid-vue>
        </vx-card>

        <!-- // POPUP -->
        <dialog-prompt button1
            :title="global.modeDataName.edit + titleForm"
            :width="500"
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
                    <vs-row>
                        <vs-col vs-lg="12" vs-xs="12">
                            <vs-row  class="mt-3" vs-type="flex" vs-justify="center">
                                <div class="wrap-form-select w-full md:w-1/4">
                                    <vs-row>{{$t('common.startDate')}}</vs-row>
                                    <vs-row>
                                        <date-picker @change="changeStartDate" :lang="$t('lang')" type="date" :clearable="false" not-before value-type="YYYY-MM-DD" format="DD/MM/YYYY" label="name" class="w-full" v-model="vModel.start_date" v-validate="'required'" name="start date"/>
                                    </vs-row>
                                </div>
                                <div class="wrap-form-select w-full md:w-1/4">
                                    <vs-row>{{$t('common.endDate')}}</vs-row>
                                    <vs-row>
                                        <date-picker @change="changeEndDate" :lang="$t('lang')" type="date" :clearable="false" not-before value-type="YYYY-MM-DD" format="DD/MM/YYYY" label="name" class="w-full" v-model="vModel.end_date" v-validate="'required'" name="end date"/>
                                    </vs-row>
                                </div>
                            </vs-row>
                            <vs-row vs-type="flex" class="mt-3" vs-justify="center">
                                <vs-checkbox @change="changeDefault" class="w-full md:w-6/12 checkbox-3col" v-model="vModel.default">{{ $t('common.default') }}</vs-checkbox>
                            </vs-row>
                            <vs-row class="mt-3" vs-type="flex" vs-justify="center">
                                <input-number :disabled="vModel.default" class="w-full md:w-1/2" :label="$t('common.amount')" :placeholder="$t('common.weekday')" v-model="vModel.amount" v-validate="'required'" name="percentage"/>
                            </vs-row>
                        </vs-col>
                    </vs-row>
                </div>
            </template>
        </dialog-prompt>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import DatePicker from 'vue2-datepicker';
import { formatNumber } from '@/utils/format.js';
import '@sass/vuexy/components/datepicker.scss';
import RoomRateDynamicResource from '@/api/marketing/roomRateDynamic.js';
import CekIconRenderer from '@/views/pages/components/ag_grid-framework/checklist.js';

const roomRateDynamicResource = new RoomRateDynamicResource();
export default {
    name: 'DynamicRate',

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
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            sideBar: null,
            paginationPageSize: null,
            rowSelection: null,
            dataTracking: null,
            fromDate: null,
            vNight: 10,
            tempDate: '',
            tempNight: '',
            showBedType: false,
            simpleMode: true,
            vModel:{},
            mainPopUp: false,
            paramsData: {},
            // ------------------need setting manual-----------------//
            // save disable button
            btnSaveDisabled1: false,
            saved: false,
            activeTab: 1,
            title: '',
            titleForm: 'Dynamic Rate',
            modeDataValue: '',
        };
    },
    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault
        };

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            cekIconRenderer: CekIconRenderer,
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

         async handleCellDoubleClicked(params) {
            const value = await params.value;
            const date = await params.colDef.colId;
            const field = await params.colDef.field;
            this.paramsData = await params.data;
            if(!field.includes('Date')){
                return;
            }
            this.showModal(this.paramsData, value, date);
        },

        refreshData() {
            this.$loadingIndicator(this);
            this.getAvailability();
        },

        async getAvailability() {
            if (this.fromDate && this.vNight > 0 && this.vNight <= 30) {
                this.tempDate = this.fromDate;
                this.tempNight = this.vNight;
                const params = {
                    fromDate: this.fromDate,
                    night: this.vNight,
                    filter: this.filter,
                };
                const { data } = await roomRateDynamicResource.list(params);
                this.rowData = data.data;
                data.header.forEach(element => {
                    if(element.valueFormatter == "formatNumber"){
                        element.valueFormatter = formatNumber
                    }
                });
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
            this.refreshData();
        },

        resetData() {
            this.vModel = {
                room_rate_code: '',
                start_date: this.fromDate,
                end_date: this.fromDate,
                default: false,
                amount: 0,
                user_id: this.global.userInfo.code,
            };
            this.dbErrors = {};
            this.dataTracking = null;
            this.saved = false;
            this.btnSaveDisabled1 = false;
            this.resetValidator();
        },

        showModal(params, value, date) {
            this.resetData();
            this.vModel.room_rate_code = params.code;
            if(value && date) {
                this.vModel.start_date = `${date}`;
                this.vModel.end_date = `${date}`;
                this.vModel.amount = value;
            } else {
                this.vModel.start_date = this.fromDate;
                this.vModel.end_date = this.fromDate;
                this.vModel.amount = 0;
            }
            this.mainPopUp = true;
        },

        changeDefault(value) {
            if (value) {
                this.vModel.percentage = 100;
            }
        },


        changeStartDate() {
            if(this.vModel.end_date < this.vModel.start_date) {
                this.vModel.end_date = this.vModel.start_date;
            }
        },

        changeEndDate() {
            if(this.vModel.end_date < this.vModel.start_date) {
                this.vModel.start_date = this.vModel.end_date;
            }
        },

        async update() {
            try{
                this.btnSaveDisabled1 = true;
                await roomRateDynamicResource.store(this.vModel);
                this.btnSaveDisabled1 = false;
            } catch (e) {
                this.btnSaveDisabled1 = false;
            }
        },

        saveData() {
            this.$validator.validateAll().then(async (result) => {
                if (result) {
                    this.vModel.user_id = this.global.userInfo.code;
                    await this.update();
                    this.mainPopUp = false;
                    this.refreshData();
                }
            });
        },

        resetValidator() {
            this.$validator.pause();
            this.$nextTick(() => {
                this.$validator.errors.clear();
                this.$validator.fields.items.forEach((field) => field.reset());
                this.$validator.fields.items.forEach((field) => this.errors.remove(field));
                this.$validator.resume();
            });
        },
    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
    async created() {
        await this.$store.dispatch('getAuditDate');
        this.fromDate = await this.auditDate;
        this.refreshData();
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};

</script>
<style lang="scss">

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
