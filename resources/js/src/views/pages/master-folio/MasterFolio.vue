<template>
    <div class="guest-in-house">
        <navigation-header :insertButton="true" @showModal="showForm" @refreshData="(val)=>{limitPageSize=parseFloat(val);$refs.filterHeader.onRefreshData(val)}"></navigation-header>
        <filter-header ref="filterHeader" :formType="global.formType.masterFolio"  @search="refreshData" :limitPageSize="limitPageSize" :searchOption="searchFilterData" :searchDefault="vModelDefaultSearchData"></filter-header>
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
    <!----------- START POPUP MAIN -------------->
    <folio-form ref="folioForm" :titleForm="'Master Folio'" :formType="global.formType.masterFolio" @refreshData="$refs.filterHeader.onRefreshData()"/>
    <!----------- END POPUP MAIN ---------------->

    <!----------- START SIDEBAR OPTION -------------->
        <vs-sidebar hidden-background position-right parent="#main-container" default-index="1"  color="primary" class="sidebarx" spacer v-model="sidebarOption">
            <div class="header-sidebar" slot="header">
                <h4>
                {{ titleForm + $t('folio.menu.option') }}
                </h4>
            </div>
            <div class="body-sidebar">
                <vs-sidebar-item @click="handleTransaction" index="1">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/transaction_icon24.png"/>
                    {{ $t('folio.menu.transaction') }}
                </vs-sidebar-item>

                <vs-divider position="center"/>

                <vs-sidebar-item @click="handleCheckOut()" index="8">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/check_out_icon24.png"/>
                    {{ $t('folio.menu.checkOut') }}
                </vs-sidebar-item>
                 <vs-sidebar-item @click="handlePrintFolio()" index="9">
                    <img :class="sidebarConfig.iconMarginRight+' '+sidebarConfig.iconMarginLeft" :border="sidebarConfig.iconBorder" :width="sidebarConfig.iconWidth" :height="sidebarConfig.iconHeight" src="/images/icons/print_icon24.png"/>
                    {{ $t('folio.menu.printFolio') }}
                </vs-sidebar-item>
            </div>
        </vs-sidebar>
    <!----------- END SIDEBAR OPTION ---------------->
<!-----------end need setting manual---------------->
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar';
import FilterHeader from '@/views/pages/components/header/FilterHeader';
import NavigationHeader from '@/views/pages/components/header/NavigationHeader';
import Tracking from '@/views/pages/components/Tracking.vue';
import $dialog from '@/utils/dialog.js';
import $alert from '@/utils/alert.js';
import { rowSelectedAfterRefresh, generateIconContextMenuAgGrid } from '@/utils/general.js';
import FolioForm from '@/views/pages/components/folioForm/FolioForm.vue';

// <!------------------additional element---------------------->
import IconLockRenderer from '@/views/pages/components/ag_grid-framework/lock_icon.js';
import { formatNumber, formatDate } from '@/utils/format.js';
import { sidebarConfig } from '@/utils/formConfig.js';
// API
import MasterFolioResource from '@/api/masterFolio';
import GuestInHouseResource from '@/api/guestinhouse/guestInHouse';
import TransactionResource from '@/api/transaction.js';
import TrackingDataResource from '@/api/trackingData'; 

const transactionResource = new TransactionResource();
const masterFolioResource = new MasterFolioResource();
const guestInHouseResource = new GuestInHouseResource();
const trackingDataResource = new TrackingDataResource();
// <!------------------end additional element---------------------->
export default {
    name: 'MasterFolio',

    props: ['titleForm'],

    components: {
        AgGridVue,
        FilterHeader,
        NavigationHeader,
        Tracking,
        FolioForm,
    },

    data() {
        return {
            // Filter Data on Page Size
            vModelDefaultSearchData: '0',
            searchFilterData: [
                { text: this.$t('common.filter.number'), value: '0' },
                { text: this.$t('common.filter.fullName'), value: '5' },
                { text: this.$t('common.filter.group'), value: '6' },
                { text: this.$t('common.filter.company'), value: '8' },
                { text: this.$t('common.filter.market'), value: '9' },
                { text: this.$t('common.filter.address'), value: '10' },
                { text: this.$t('common.filter.phone'), value: '11' },
                { text: this.$t('common.filter.status'), value: '12' },
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
            // Parameter From Child
            idData: '',
            // Mode Edit Or Insert(assign insert from parent, update from child)
            modeDataValue: 0,
            // ------------------need setting manual-----------------//
            stayInformations: {},
            folioNumber: '',
            sidebarOption: false,
            // ------------------additional-------------------------//
            // title popup//
            title: '',
            paramsData: '',
            balance: 0,
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
            { headerName: this.$t('common.table.action'), field: 'number', resizable: false, filter: false, cellRenderer: 'actionGrid', colId: 'params', width: 100 },
            { headerName: 'L', field: 'is_lock', resizable: false, filter: false, width: 30, cellStyle: { textAlign: 'center' }, cellRenderer: 'iconLockRenderer' },
            { headerName: this.$t('folio.table.fullName'), field: 'full_name', width: 230 },
            { headerName: this.$t('folio.table.number'), field: 'folio_number', width: 90 },
            { headerName: this.$t('folio.table.arrivalDate'), field: 'date_arrival', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('folio.table.estimateTimeArrival'), field: 'time_arrival', width: 112 },
            { headerName: this.$t('folio.table.departureDate'), field: 'date_departure', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('folio.table.estimateTimeDeparture'), field: 'time_departure', width: 130 },
            { headerName: this.$t('folio.table.market'), field: 'market', width: 110 },
            { headerName: this.$t('folio.table.company'), field: 'company', width: 110 },
            { headerName: this.$t('folio.table.group'), field: 'guest_group', width: 110 },
            { headerName: this.$t('folio.table.balance'), field: 'balance', width: 110, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('folio.table.adult'), field: 'adult', width: 80 },
            { headerName: this.$t('folio.table.child'), field: 'child', width: 70 },
            { headerName: this.$t('folio.table.billInstruction'), field: 'bill_instruction', width: 200 },
            { headerName: this.$t('folio.table.note'), field: 'notes', width: 200 },
            { headerName: this.$t('folio.table.insertBy'), field: 'insert_by', width: 110 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 110 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid: ActionGrid,
            iconLockRenderer: IconLockRenderer,
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
                    name: this.$t('common.contextMenu.insert'),
                    icon: generateIconContextMenuAgGrid('add_icon24'),
                    action: () => this.showForm('', this.global.modeData.insert),
                },
                {
                    name: this.$t('common.contextMenu.update'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.edit),
                },
                {
                    name: this.$t('common.contextMenu.duplicate'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('duplicate_icon24'),
                    action: () => this.showForm(this.paramsData, this.global.modeData.duplicate),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.transaction'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('transaction_icon24'),
                    action: () => this.handleTransaction(),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.checkOut'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('check_out_icon24'),
                    action: () => this.handleCheckOut(),
                },
                {
                    name: this.$t('common.contextMenu.printFolio'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintFolio(),
                },
                'separator',
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
        // ------------------ Guest In House CRUD------------------//
        async getMasterFolioList(search) {
            this.search = search;
            try {
                let selectedNodes = this.gridApi.getSelectedRows();
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                const { data } = await masterFolioResource.list(search);
                this.rowData = data.data;
                this.pinnedBottomRowData = data.total;
                this.$nextTick(() => {
                    rowSelectedAfterRefresh(this, selectedNodes, 'folio_number');
                });
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                $alert.errorFetchDataAlert();
            }
        },

        async trackingData(idData) {
            const params = {
                id_log: idData.id_log,
                table: this.global.tableName.guestGroup,
            };
            this.$loadingIndicator(this);
            try {
                const { data } = await trackingDataResource.getData(params);
                this.dataTracking = data.modelGrid;
                this.modalMain = true;
            } catch (error) {
                $alert.errorFetchDataAlert();
            }
            this.$closeLoadingIndicator(this);
        },

        refreshData(search) {
            this.search = search;
            this.$loadingIndicator(this)
            this.getMasterFolioList(search);
        },

        async showForm(idData, modeData) {
            this.$refs.folioForm.showForm(idData, modeData);
        },

        // ------------------ END Guest In House CRUD------------------//
        // ------------------START SIDEBARR OPTIONS-------------------------------//
        // ----------------START CHECK OUT---------------//
        async handleCheckOut() {
            await this.getBalance();
            const { balance } = this;
            if (balance == 'null' || balance == null) {
                $dialog.information(this.$t('message.checkOutWithoutTransaction'), this, 'checkOut');
            } else if (balance < 0 || balance > 0) {
                $dialog.information(this.$t('message.cannotCheckFolioUnbalance'));
            } else if (balance == 0) {
                $dialog.confirmation(this, 'checkOut');
            }
        },

        async checkOut() {
            const params = {
                number: this.folioNumber,
                user_id: this.global.userInfo.code,
            };
            const { data } = await guestInHouseResource.checkOut(params);
            if (data.value === 0) {
                $alert.acceptAlertSuccesWithText(this.$t('responseStatus.checkOut.0'));
            } else if (data.value > 0) {
                $dialog.information(`${this.$t(`responseStatus.checkOut.${data.value}`)}\n${data.message}`);
            }
            this.refreshData(this.search);
        },

        async getBalance() {
            const { data } = await transactionResource.balance({ q: this.folioNumber });
            this.balance = data.balance;
        },
        // ----------------END CHECK OUT---------------//
        handleSidebarOption(data) {
            this.folioNumber = data.folio_number;
            this.paramsData = data;
            this.sidebarOption = true;
        },
        // ------------------END SIDEBARR OPTIONS-------------------------------//

        // ----------------START OTHER OPTION------------------//
        async handleTransaction() {
            this.sidebarOption = false;
            this.$loadingIndicator(this)
            const { data } = await guestInHouseResource.get(this.paramsData.folio_number);
            this.$router.push({ name: 'transaction', params: { stayInformations: data.list } });
        },

        // PRINT
        handlePrintFolio() {
            this.sidebarOption = false;
            const newTabReport = this.$router.resolve({ path: `/report/preview?reportId=${this.global.reportID.folio}&folioNumber=${this.paramsData.folio_number}&template=${this.global.stimulsoftReportFileDirectory.folio}` });
            window.open(newTabReport.href, '_blank');
        },

    // ----------------END OTHER OPTION------------------//
        // ------------------end need setting manual for crud-----------------//
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
    },
    watch: {
        sidebarOption() {
            if (this.sidebarOption == false) {
                document.getElementById('main-container').click();
            }
        },
    },
    computed: {
        userValidation() {
            return (this.credential.user.length > 0 && this.credential.pass.length > 0);
        },
    },
};

</script>
