<template>
    <div class="guest-in-house">
        <navigation-header @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" :formType="global.formType.folioHistory" @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
        <registration-form ref="registrationForm" :isFolioHistory="true" @refreshData="$refs.filterHeader.onRefreshData()"></registration-form>
        <vx-card id="main-container" class="vs-con-loading__container">
            <ag-grid-vue
            ref="mainContainer"
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
                :pinnedBottomRowData="pinnedBottomRowData"
                @rowDoubleClicked="handleRowDobleClicked"
                @cellContextMenu="handleRowRightClicked"
            ></ag-grid-vue>
        </vx-card>
<!-----------start need setting manual---------------->
    <!----------- START SIDEBAR OPTION -------------->
        <vs-sidebar ref="sidebar" hidden-background position-right parent="#main-container" default-index="1"  color="primary" class="sidebarx" spacer v-model="sidebarOption">
            <div class="header-sidebar" slot="header">
                <h4>
                {{ titleForm +' '+$t('folio.menu.option') }}
                </h4>
            </div>
            <div class="body-sidebar">
                 <vs-sidebar-item @click="handleTransaction" index="1">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/transaction_icon24.png"/>
                    {{ $t('folio.menu.transaction') }}
                </vs-sidebar-item>
                <vs-divider position="center"/>

                <vs-sidebar-item @click="handleCancelCheckOut()" index="2">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_out_icon24.png"/>
                   {{ $t('folio.menu.cancelCheckOut') }}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handlePrintFolio()" index="3">
                        <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                   {{ $t('folio.menu.printFolio') }}
                </vs-sidebar-item>
            </div>
        </vs-sidebar>
    <!----------- END SIDEBAR OPTION ---------------->
    <!--------- START PROMPT CREDENTIAL----------->
         <credential :value="credential"
            :specialAccessType="specialAccessType"
            :activeCredential="activeCredentialPrompt"
            :isCredential="isCredential"
            :isReason="true"
            :title="credentialTitle"
            @update:active-credential="val=>activeCredentialPrompt = val"
            @acceptReason="acceptReason"
            @input="(newValue)=>{ credential = newValue }"/>
    <!--------- START PROMPT CREDENTIAL----------->
<!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import RegistrationForm from '@/views/pages/components/registrationForm/RegistrationForm.vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import Credential from '@/views/pages/components/Credential';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import { sidebarConfig } from '@/utils/formConfig';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';

// <!------------------additional element---------------------->
import { formatNumber, formatDate } from '@/utils/format.js';
// API
import FolioHistoryResource from '@/api/folioHistory';

const folioHistoryResource = new FolioHistoryResource();
// <!------------------end additional element---------------------->
export default {
    name: 'FolioHistory',

    props: {
        titleForm: String,
    },

    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        Credential,
        RegistrationForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.folioNumber'), value: '0' },
                { text: this.$t('common.filter.reservationNumber'), value: '1' },
                { text: this.$t('common.filter.room'), value: '2' },
                { text: this.$t('common.filter.roomType'), value: '3' },
                { text: this.$t('common.filter.fullName'), value: '5' },
                { text: this.$t('common.filter.reservationBy'), value: '4' },
                { text: this.$t('common.filter.group'), value: '6' },
                { text: this.$t('common.filter.roomRate'), value: '7' },
                { text: this.$t('common.filter.address'), value: '10' },
                { text: this.$t('common.filter.phone'), value: '11' },
                { text: this.$t('common.filter.company'), value: '8' },
                { text: this.$t('common.filter.guestType'), value: '13' },
                { text: this.$t('common.filter.status'), value: '12' },
                { text: this.$t('common.filter.insertBy'), value: '14' },
                { text: this.$t('common.filter.checkOutBy'), value: '15' },
                { text: this.$t('common.filter.cancelBy'), value: '16' },
                { text: this.$t('common.filter.lastUpdate'), value: '17' },
            ],

            // query data search
            limitPageSize: 0,
            search: {
                searchBy: '',
                keyword: '',
                limit: 0,
                filter: [],
            },
            sidebarConfig,
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
            pinnedBottomRowData: null,
            // ------------------need setting manual-----------------//
            folioNumber: '',
            sidebarOption: false,
            // ------------------additional-------------------------//
            // ------CREDENTIAL-------//
            activeCredentialPrompt: false,
            isCredential: false,
            specialAccessType: 1000,
            credentialTitle: '',
            credential: {
                user: '',
                pass: '',
            },
            paramsData: '',
            // ------------------end need setting manual-----------------//

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
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, resizable: true, filter: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 63 },
            { headerName: this.$t('folio.table.folioType'), field: 'folio_type', width: 100 },
            { headerName: this.$t('folio.table.fullName'), field: 'FullName', width: 230 },
            { headerName: this.$t('folio.table.folioNumber'), field: 'folio_number', width: 90 },
            { headerName: this.$t('folio.table.reservationNumber'), field: 'reservation_number', width: 90 },
            { headerName: this.$t('folio.table.roomNumber'), field: 'room_number', width: 90 },
            { headerName: this.$t('folio.table.arrivalDate'), field: 'date_arrival', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('folio.table.estimateTimeArrival'), field: 'time_arrival', width: 112 },
            { headerName: this.$t('folio.table.departureDate'), field: 'date_departure', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('folio.table.estimateTimeDeparture'), field: 'time_departure', width: 130 },
            { headerName: this.$t('folio.table.roomRate'), field: 'room_rate', width: 180 },
            { headerName: this.$t('folio.table.weekdayRate'), field: 'weekday_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('folio.table.weekendRate'), field: 'weekend_rate', width: 130, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('folio.table.balance'), field: 'balance', width: 110, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('folio.table.company'), field: 'company', width: 110 },
            { headerName: this.$t('folio.table.group'), field: 'guest_group', width: 110 },
            { headerName: this.$t('folio.table.adult'), field: 'adult', width: 75 },
            { headerName: this.$t('folio.table.child'), field: 'child', width: 70 },
            { headerName: this.$t('folio.table.billInstruction'), field: 'bill_instruction', width: 200 },
            { headerName: this.$t('folio.table.note'), field: 'notes', width: 200 },
            { headerName: this.$t('folio.table.hkNote'), field: 'hk_note', width: 200 },
            { headerName: this.$t('folio.table.voucherNumberTA'), field: 'voucher_number_ta', width: 160 },
            { headerName: this.$t('folio.table.insertBy'), field: 'insert_by', width: 110 },
            { headerName: this.$t('folio.table.checkOutBy'), field: 'check_out_by', width: 115 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
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
        onGridReady() {
        },

        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },

        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
                this.folioNumber = this.paramsData ? this.paramsData.folio_number : '';
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('folioHistory.contexMenu.transaction'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('transaction_icon24'),
                    action: () => this.handleTransaction(),
                },
                'separator',
                {
                    name: this.$t('folioHistory.contexMenu.cancelCheckOut'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('cancel_icon24'),
                    action: () => this.handleCancelCheckOut(),
                },
                {
                    name: this.$t('folioHistory.contexMenu.printFolio'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintFolio(),
                },
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.tracking),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if (this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data) {
                        if (node.data.folio_number == vm.paramsData.folio_number) {
                            node.setSelected(true, true);
                        }
                    }
                });
            }
        },

        async handleRowDobleClicked(params) {
            this.paramsData = await params.data;
            this.handleTransaction();
        },

        // ------------------need setting manual for crud-----------------//
        // ------------------ START Folio History CRUD----------------//
        async getFolioHistoryList(search) {
            this.search = search;
            try {
                const { data } = await folioHistoryResource.list(search);
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async trackingData(id) {
            try {
                const { data } = await folioHistoryResource.log(id.id_log);
                this.dataTracking = data.modelGrid;
                setTimeout(() => {
                    this.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            this.getFolioHistoryList(search);
        },
        // ------------------ END Folio History CRUD------------------//

        // ------------------START SIDEBARR OPTIONS-------------------//
        handleSidebarOption(data) {
            this.folioNumber = data.folio_number;
            this.paramsData = data;
            this.sidebarOption = true;
        },

        // ------------------END SIDEBARR OPTIONS---------------------//

        // ------------------START OTHER OPTION-----------------------//
        async handleTransaction() {
            this.$loadingIndicator(this)
            const { data } = await folioHistoryResource.get(this.paramsData.folio_number);
            this.$router.push({ name: 'transaction', params: { form: this.global.formType.folioHistory, stayInformations: data.list } });
        },

        handlePrintFolio() {
            this.sidebarOption = false;
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.folio}&folioNumber=${this.paramsData.folio_number}&template=${this.global.stimulsoftReportFileDirectory.folio}` });
            window.open(newTabReport.href, '_blank');
        },

        async handleCancelCheckOut() {
            if (this.paramsData.folioType == this.global.folioType.guestFolio) {
                this.showCredential(true, this.global.accessSpecialOrder.cancelCheckOut);
            } else {
                $dialog.information(this.$t('responseStatus.cancelCheckOut.2'));
            }
        },

        async cancelCheckOut() {
            this.$loadingIndicator(this)
            const params = {
                folio_number: this.paramsData.folio_number,
                user_id: this.global.userInfo.code,
                reason: this.credential.reason,
                user_by: this.credential.user,
            };
            try {
                const { data } = await folioHistoryResource.cancelCheckOut(params);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                if (data == 0) {
                    $alert.acceptAlertSucces();
                } else if (data > 0) {
                    $dialog.information(this.$t(`responseStatus.cancelCheckOut.${data}`));
                }
                this.sidebarOption = false;
                this.refreshData(this.search);
                return data;
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorSaveDataAlert();
            }
        },

        async showForm(idData, modeData) {
            if(idData.folioType === this.global.folioType.guestFolio) {
                this.$refs.registrationForm.showForm(idData, modeData);
            } else {
                //
            }
        },

        // ------------------END OTHER OPTION-------------------------//

        // ------------------end need setting manual for crud-------------//

        // --------------------CREDENTIAL-----------------------------//
        showCredential(isCredential, type) {
            this.credential = {};
            this.activeCredentialPrompt = true;
            this.specialAccessType = type;
            this.isCredential = isCredential;
            this.credentialTitle = 'Cancel Check Out';
        },

        acceptReason() {
            if (this.specialAccessType == this.global.accessSpecialOrder.cancelCheckOut) {
                this.cancelCheckOut(false);
            }
        },
    // --------------------CREDENTIAL-----------------------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        //
    },
    watch: {
        sidebarOption() {
            if (this.sidebarOption == false) {
                document.getElementById('main-container').click();
            }
        },
    },
};

</script>
