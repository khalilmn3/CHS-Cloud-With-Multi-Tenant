<template>
    <div>
        <div class="popup-body vs-con-loading__container">
            <div class="form-container">
                <div ref="popupContainer" class="popup-container" vs-position="left">
                    <VuePerfectScrollbar class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                        <vs-collapse type="border">
                            <vs-collapse-item :open='openCollapseItemGuestList'>
                                <div slot="header">
                                    {{ $t('reservation.group.guestList.title') }}
                                </div>
                                <group-check-in-table ref="groupCheckInTable" :rowData="reservationList"></group-check-in-table>
                            </vs-collapse-item>
                            <vs-collapse-item :open='true'>
                                <div slot="header">
                                    {{ $t('reservation.group.routingAccount.title') }}
                                </div>
                                <vs-row class="mb-2">
                                    <vs-col class="wrap-form-select form-group row" vs-lg="2" vs-xs="12">
                                        <label for="master-folio-night">{{ $t('reservation.group.routingAccount.masterFolioNight') }}</label>
                                        <vs-row>
                                            <input class="vs-inputx vs-input--input normal hasValue" type="number" v-model="vMasterFolio.night" min="1" id="master-folio-night">
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                        <label>{{ $t('reservation.group.routingAccount.currency') }}</label>
                                        <vs-row>
                                            <v-select @input="vMasterFolio.exchange_rate = vMasterFolio.currency.exchange_rate" :clearable="false" label="code" class="w-full height200" :options="currency" v-model="vMasterFolio.currency" v-validate="'required'" name="folio type" data-vv-scope="masterFolio"/>
                                            <span class="error-text text-danger" v-show="errors.has('routing.folio type')">{{ errors.first('routing.folio type') }}</span>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="3" vs-xs="12">
                                        <vs-row>
                                            <input-number disabled :label="$t('reservation.group.routingAccount.masterFolioNight')" v-model="vMasterFolio.exchange_rate"/>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="4" vs-xs="12">
                                        <vs-button :disabled="saveDisabled" id="btn-add-routing" class="btn-bottom vs-con-loading__container" :color="global.buttonColor.createMasterFolio" @click="handleCreateMasterFolio">{{ $t('button.createNewMasterFolio') }}</vs-button>
                                    </vs-col>
                                </vs-row>
                                 <vs-row vs-align="center" vs-type="flex" vs-justify="flex-start" class="mb-3" vs-w="12">
                                    <vs-col class="wrap-form-select" vs-lg="3" vs-xs="12">
                                        <label>{{ $t('reservation.group.routingAccount.account') }}</label>
                                        <vs-row>
                                            <v-select :clearable="false" label="name" class="w-full height200" :options="accounts" v-model="vRouting.account" v-validate="'required'" name="account" data-vv-scope="routing"/>
                                            <span class="error-text text-danger" v-show="errors.has('routing.account')">{{ errors.first('routing.account') }}</span>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                        <label>{{ $t('reservation.group.routingAccount.folioType') }}</label>
                                        <vs-row>
                                            <v-select @input="$emit('getFolioList',vRouting.folio_type,null)" :clearable="false" :reduce="value => value.code" label="name" class="w-full height200" :options="folioType" v-model="vRouting.folio_type"/>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="4" vs-xs="12">
                                        <label>{{ $t('reservation.group.routingAccount.folio') }}</label>
                                        <vs-row>
                                            <v-select :clearable="false" :resetOnOptionsChange="true" :reduce="value => value.number" label="folio" class="w-full height200" :options="listFolio" v-model="vRouting.folio_transfer" v-validate="'required'" name="folio" data-vv-scope="routing"/>
                                            <span class="error-text text-danger" v-show="errors.has('routing.folio')">{{ errors.first('routing.folio') }}</span>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="2" vs-xs="12">
                                        <label>{{ $t('reservation.group.routingAccount.subFolio') }}</label>
                                        <vs-row>
                                            <v-select :clearable="false" class="sub-folio w-full" :options="global.subFolioGroup" v-model="vRouting.sub_folio" v-validate="'required'" name="sub folio" data-vv-scope="routing"/>
                                            <span class="error-text text-danger" v-show="errors.has('routing.sub folio')">{{ errors.first('routing.sub folio') }}</span>
                                        </vs-row>
                                    </vs-col>
                                    <vs-col class="wrap-form-select" vs-lg="1" vs-xs="12">
                                        <vs-button :disabled="saveDisabled" id="btn-add-routing" class="btn-bottom vs-con-loading__container" icon="add" :color="global.buttonColor.addRoutingAccount" @click="handleInsertRoutingAccount()"></vs-button>
                                    </vs-col>
                                </vs-row>
                                <ag-grid-vue
                                    ref="mainContainer"
                                        :style="global.styleAgGridFrame0"
                                        :class="global.themeAgGrid"
                                        :suppressDragLeaveHidesColumns="true"
                                        :enableRangeSelection="true"
                                        :gridOptions="gridOptions"
                                        @grid-ready="onGridReady"
                                        :context="context"
                                        :columnDefs="columnDefs"
                                        :frameworkComponents="frameworkComponents"
                                        :enableCellChangeFlash="true"
                                        :suppressContextMenu="true"
                                        :rowSelection="rowSelection"
                                        :rowData="routingAccount"
                                        :defaultColDef="global.defColDef"
                                    ></ag-grid-vue>
                            </vs-collapse-item>
                        </vs-collapse>
                    </VuePerfectScrollbar>
                </div>
            </div>
        </div>
        <footer class="footer" >
            <vs-row vs-type="flex" vs-justify="flex-end">
                <vs-button :disabled="saveDisabled" id="button-save-main" class="vs-con-loading__container" icon="save" :color="global.buttonColor.save" style="float:right" @click="handleCheckIn(); saveDisabled = true">{{ $t('button.save') }}</vs-button>
            </vs-row>
        </footer>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';

import VuePerfectScrollbar from 'vue-perfect-scrollbar';
// <!------------------additional element---------------------->
// inputnumber//
import InputNumber from '@/views/pages/components/Number';
import { cloneObject } from '@/utils/general.js';
// <!------------------end additional element---------------------->
import ReservationResource from '@/api/reservation/reservation';
import GroupCheckInTable from './table/GroupCheckInTable';

const reservationResource = new ReservationResource();

export default {
    name: 'GroupCheckInForm',

    props: {
        titleForm: String,
        routeApi: String,
        mainTableName: String,
        vModel: Object,
        masterFolio: Number,
        listFolio: Array,
        accounts: Array,
        currency: Array,
        exchRateValue: Number,
        reservationList: Array,
    },

    components: {
        AgGridVue,
        VuePerfectScrollbar,
        InputNumber,
        GroupCheckInTable,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            rowData: [],
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            frameworkComponents: null,
            contex: null,
            rowGroupPanelShow: null,
            statusBar: null,
            rowSelection: null,
            // ------------------need setting manual-----------------//
            account: null,
            // ------------------additional-------------------------//
            // save disable button
            saveDisabled: false,
            // ------------------end need setting manual-----------------//
            vRouting: {},
            vFolioType: '',
            folioType: [
                { name: 'Guest Folio', code: 'F' },
                { name: 'Master Folio', code: 'M' },
                { name: 'Desk Folio', code: 'D' },
            ],
            vMasterFolio: {
                night: 1,
                currency: this.defaultCurrency,
                exchange_rate: 1,
            },
            routingAccount: [],
            openCollapseItemGuestList: false,
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightReservation,
        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('reservation.group.routingAccount.table.id'), field: 'account_code', width: 80, hide: true },
            { headerName: this.$t('reservation.group.routingAccount.table.account'), field: 'account_name', width: 250 },
            { headerName: this.$t('reservation.group.routingAccount.table.folio'), field: 'folio_transfer', width: 250 },
            { headerName: this.$t('reservation.group.routingAccount.table.subFolio'), field: 'sub_folio', width: 100 },
        ];
        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
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
        this.sideBar = {
            toolPanels: [
                { id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel' },
                { id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {
        onGridReady() {
        },

        // ------------------need setting manual for crud-----------------//
        // ------------------ START ROUTING ACCOUNT------------------//
        handleInsertRoutingAccount() {
            this.$validator.validateAll('routing').then((result) => {
                if (result) {
                    const { account } = this.vRouting;
                    const arr = this.routingAccount;
                    let exist = false;
                    this.vRouting.account_code = account.code;
                    this.vRouting.account_name = account.name;
                    arr.forEach((element) => {
                        if (element.account_code == account.code) {
                            $dialog.existAccount();
                            exist = true;
                        }
                    });
                    if (!exist) {
                        this.routingAccount.push(cloneObject(this.vRouting));
                        this.vRouting.account = [];
                    }
                }
            });
        },

        handleCreateMasterFolio() {
            this.$emit('createMasterFolio', this.vMasterFolio);
        },

        resetRouting() {
            this.vRouting = {
                folio_type: this.global.folioType.masterFolio,
                account: [],
                folio_transfer: this.masterFolio,
                sub_folio: this.global.subFolio.A,
            };
            this.vMasterFolio = {
                night: 1,
                currency: this.defaultCurrency,
                exchange_rate: 1,
            };
            this.$validator.reset();
            this.saveDisabled = false;
            this.routingAccount = [];
        },

        getAllRows() {
            const rowData = [];
            this.gridApi.forEachNode((node) => rowData.push(node.data));
            return rowData;
        },

        // ------------------ END ROUTING ACCOUNT------------------//
        cloneObject(object) {
            const clone = {};
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    clone[key] = object[key];
                }
            }
            return clone;
        },

        handleSaveData() {
            this.insertReservationGroup();
        },

        async insertReservationGroup() {
            const rowData = this.getAllRows();
            if (rowData.length > 0) {
                try {
                    this.$vs.loading({ container: '#button-save-main',scale: this.global.scaleLoadingButton });
                    await rowData.forEach(async (element) => {
                        await reservationResource.insertReservationGroup(element);
                    });
                    this.$vs.loading.close('#button-save-main>.con-vs-loading');
                    this.$emit('showForm', false);
                    $alert.acceptAlertSucces();
                } catch (error) {
                    $alert.errorSaveDataAlert();
                }
            }
        },

        handleCheckIn() {
            const data = this.getAllRows();
            this.$emit('checkIn', data);
        },

        updateCheckInResult(id,status) {
            this.$refs.groupCheckInTable.updateCheckInResult(id,status);
            this.openCollapseItemGuestList = true;
        },
        // ----------------END OTHER OPTION------------------//

        // ------------------end need setting manual for crud-----------------//

    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
    watch: {
        masterFolio() {
            this.resetRouting();
        },
        account() {
            if (this.account !== null) {
                this.vDeposit.account_code = this.account.code;
                this.vDeposit.charge_percent = this.account.charge_percent;
                this.getTotalAmount();
            }
        },
    },
    computed: {
        defaultMarket() { return this.$store.getters.dvMarket; },
        defaultCurrency() { return this.$store.getters.defaultCurrency; },
    },
};

</script>
<style scoped>
.btn-bottom{
    bottom: 0;
    margin-top: 11px;
}
</style>
