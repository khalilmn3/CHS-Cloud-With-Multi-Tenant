<template>
    <div>
        <div v-if="table">
            <ag-grid-vue
                :style="global.styleAgGridFrame3"
                :class="global.themeAgGrid"
                pagination="true"
                :paginationPageSize="paginationPageSize"
                :enableRangeSelection="true"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :context="context"
                :columnDefs="columnDefs"
                :frameworkComponents="frameworkComponents"
                :rowData="data"
                :defaultColDef="global.defColDef"
                :getContextMenuItems="getContextMenu"
                @cellContextMenu="handleRowRightClicked"
                :animateRows="global.animatedRows"
                :suppressDragLeaveHidesColumns="true"
                :suppressMakeColumnVisibleAfterUnGroup="true"
                :rowGroupPanelShow="rowGroupPanelShow"
                :enableCellChangeFlash="true"
                :rowSelection="rowSelection"
                :statusBar="statusBar"
                :pinnedBottomRowData="bottomRowTotal"
                :rowClassRules="rowClassRules"
            ></ag-grid-vue>
        </div>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
import Tracking from '@/views/pages/components/Tracking.vue';
// <!------------------additional element---------------------->
// render icon for ag-grid//
import ChecklistRenderer from '@/views/pages/components/ag_grid-framework/checklist.js';
// ------for format----- //
import { formatNumber, formatDate, formatDateTime } from '@/utils/format.js';
import ActionGrid from '@/views/pages/components/ag_grid-framework/action_grid_transaction';
import StatusBarTotal from './statusbar_total';
// <!------------------end additional element---------------------->
export default {
    name: 'Deposit',
    props: {
        titleForm: String,
        table: Boolean,
        data: Array,
        dataLookUp: Array,
        total: Array,
        showVoid: Boolean,
        showCorrection: Boolean,
        userAccess: Object,
    },

    components: {
        'ag-grid-vue': AgGridVue,
        tracking: Tracking,
    },

    data() {
        return {
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
            paginationPageSize: null,
            rowSelection: null,
            bottomRowTotal: [],
            showType: null,
            rowClassRules: null,
            paramsData: null,

        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };

        this.rowClassRules = {
            correction: 'data.is_correction === true',
            void: 'data.void === true',
        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'id_log', enableRowGroup: false, resizable: false, suppressMenu: true, sortable: false, cellRenderer: 'actionGrid', colId: 'params', width: 100, pinnedRowCellRenderer: 'statusBarTotal', pinnedRowCellRendererParams: { style: { display: 'none' } }},
            { headerName: this.$t('common.table.id'), field: 'id_log', width: 80 },
            { headerName: this.$t('common.table.auditDate'), field: 'audit_date', width: 100, valueFormatter: formatDate },
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 250 },
            { headerName: this.$t('transaction.table.debit'), field: 'debit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.credit'), field: 'credit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.currency'), field: 'default_currency', width: 100 },
            { headerName: this.$t('transaction.table.debitForeign'), field: 'debitForeign', width: 122, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.creditForeign'), field: 'creditForeign', width: 122, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.currencyForeign'), field: 'currency', width: 100 },
            { headerName: this.$t('transaction.table.exchangeRate'), field: 'exchange_rate', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
            { headerName: this.$t('transaction.table.type'), field: 'type', width: 90 },
            { headerName: this.$t('transaction.table.remark'), field: 'remark', width: 150 },
            { headerName: this.$t('transaction.table.documentNumber'), field: 'document_number', width: 150 },
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 200 },
            { headerName: this.$t('transaction.table.void'), field: 'void', width: 90, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', pinnedRowCellRenderer: 'statusBarTotal', pinnedRowCellRendererParams: { style: { display: 'none' } }},
            { headerName: this.$t('transaction.table.correction'), field: 'is_correction', width: 105, cellStyle: { textAlign: 'center' }, cellRenderer: 'checklistRenderer', pinnedRowCellRenderer: 'statusBarTotal', pinnedRowCellRendererParams: { style: { display: 'none' } }},
            { headerName: this.$t('transaction.table.refNumber'), field: 'ref_number', width: 130, cellStyle: { textAlign: 'right' } },
            { headerName: this.$t('transaction.table.insertBy'), field: 'insert_by', width: 150 },
            { headerName: this.$t('transaction.table.voidDate'), field: 'void_date', width: 150, valueFormatter: formatDateTime, pinnedRowCellRenderer: 'statusBarTotal' },
            { headerName: this.$t('transaction.table.voidBy'), field: 'void_by', width: 150 },
            { headerName: this.$t('transaction.table.voidReason'), field: 'void_reason', width: 200 },
            { headerName: this.$t('common.table.lastUpdate'), field: 'user_id', width: 150 },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            statusBarTotal: StatusBarTotal,
            actionGrid: ActionGrid,
            checklistRenderer: ChecklistRenderer,
        };
        this.rowGroupPanelShow = 'always';
        this.statusBar = {
            statusPanels: [
                { statusPanel: 'agFilteredRowCountComponent', align: 'left' },
                { statusPanel: 'agAggregationComponent' },
            ],
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'single';
        this.rowModelType = 'serverSide';
    },

    methods: {

        onGridReady() {
            this.bottomRowTotal = this.total;
        },
        onPageSizeChanged(newPageSize) {
            this.gridApi.paginationSetPageSize(newPageSize);
        },
        // ------------------------additional for context menu ag-Grid-----------//
        getContextMenu(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.cashPayment'),
                    icon: generateIconContextMenuAgGrid('cash_icon24'),
                    disabled: !this.userAccess.cash,
                    action: () => this.showModal('', this.global.modeDeposit.cash),
                },
                {
                    name: this.$t('common.contextMenu.cashRefund'),
                    icon: generateIconContextMenuAgGrid('cash_refund_icon24'),
                    disabled: !this.userAccess.cashRefund,
                    action: () => this.showModal('', this.global.modeDeposit.refund),
                },
                {
                    name: this.$t('common.contextMenu.creditOrDebitCardPayment'),
                    icon: generateIconContextMenuAgGrid('card_icon24'),
                    disabled: !this.userAccess.card,
                    action: () => this.showModal('', this.global.modeDeposit.card),
                },
                {
                    name: this.$t('common.contextMenu.otherPayment'),
                    icon: generateIconContextMenuAgGrid('other_payment_icon24'),
                    disabled: !this.userAccess.otherPayment,
                    action: () => this.showModal('', this.global.modeDeposit.other),
                },
                {
                    name: this.$t('common.contextMenu.transfer'),
                    icon: generateIconContextMenuAgGrid('transfer_icon24'),
                    disabled: !this.userAccess.transfer,
                    action: () => this.handleTransferDeposit(this.paramsData, true),
                },
                {
                    name: this.$t('common.contextMenu.printReceipt'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('print_icon24'),
                    action: () => this.handlePrintReceipt(this.paramsData),
                },
                'separator',
                {
                    name: this.$t('common.contextMenu.void'),
                    disabled: !this.paramsData || !this.userAccess.void,
                    icon: generateIconContextMenuAgGrid('delete_icon24'),
                    action: () => this.handleCorrectionVoid(this.paramsData, false),
                },
                {
                    name: this.$t('common.contextMenu.correction'),
                    disabled: !this.paramsData || !this.userAccess.correction,
                    icon: generateIconContextMenuAgGrid('correction_icon24'),
                    action: () => this.handleCorrectionVoid(this.paramsData, true),
                },
                {
                    name: this.$t('common.contextMenu.updateSubDepartment'),
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    disabled: !this.paramsData || !this.userAccess.updateSubDepartment,
                    action: () => this.handleUpdateType(this.paramsData, 1),
                },
                {
                    name: this.$t('common.contextMenu.updateRemark'),
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    disabled: !this.paramsData || !this.userAccess.updateRemark,
                    action: () => this.handleUpdateType(this.paramsData, 2),
                },
                {
                    name: this.$t('common.contextMenu.updateDocumentNumber'),
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    disabled: !this.paramsData || !this.userAccess.updateDocumentNumber,
                    action: () => this.handleUpdateType(this.paramsData, 3),
                },
                {
                    name: this.$t('common.contextMenu.trackingData'),
                    icon: generateIconContextMenuAgGrid('tracking_icon24'),
                    disabled: !this.paramsData,
                    action: () => this.showModal(this.paramsData, this.global.modeData.tracking),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            const vm = this;
            vm.gridApi.forEachNode((node) => {
                if (node.data.id_log == vm.paramsData.id_log) {
                    node.setSelected(true, true);
                    // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
                }
            });
        },
        // ------------------need setting manual for crud-----------------//

        handleCorrectionVoid(paramsData, isCorrection) {
            if((isCorrection && this.userAccess.correction) || (!isCorrection && this.userAccess.void)) {
                const transactionDate = paramsData.audit_date;
                if (isCorrection && transactionDate != this.auditDate) {
                    this.showCredential(paramsData, isCorrection);
                } else if (!isCorrection && transactionDate == this.auditDate) {
                    this.showCredential(paramsData, isCorrection);
                } else {
                    this.cannotCorrectionVoidDialog(isCorrection);
                }
            }
        },

        cannotCorrectionVoidDialog(isCorrection) {
            const message = isCorrection ? this.$t('transaction.popup.cannotCorrection') : this.$t('transaction.popup.cannotVoid');
            this.$vs.dialog({
                color: 'warning',
                title: this.$t('message.informationTitle'),
                text: message,
                acceptText: this.$t('button.close'),
            });
        },

        showModal(idData, modeData) {
            this.$emit('showModal', idData, modeData);
        },
        showCredential(data, isCorrection) {
            this.$emit('credential', data, isCorrection);
        },
        handlePrintReceipt(params) {
            this.$emit('printReceipt', params);
        },
        handleTransferDeposit(params) {
            this.$emit('handleTransferDeposit', params);
        },

        // UPDATE SUB DEPARTMENT/REMARK/DOC NUMBER
        handleUpdateType(params, type) {
            this.$emit('handleUpdateType', params, type);
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
    watch: {
        total() {
            this.bottomRowTotal = this.total;
        },
    },
    computed: {
        auditDate() { return this.$store.state.auditLog.auditDate; },
    },
};;
</script>
<style>
.ag-theme-balham .correction{
    background-color: yellow;
}
.ag-theme-balham .void{
    background-color: rgb(255, 104, 104);
}
</style>
