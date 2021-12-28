<template>
    <div>
        <dialog-prompt
            scroll-off
            :title="title"
            :width="80"
            :active="modalMain"
            @close="val=>modalMain = val">
            <template #body>
                <div class="flex">
                    <vx-card class="md:w-1/3" :title="$t('transaction.detailTransaction')">
                        <component :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                            <!-- <vs-divider>{{ $t('transaction.detailTransaction') }}</vs-divider> -->
                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <vs-input :label="$t('transaction.transactionID')" class="mr-2" v-model="vInformation.id_log"/>
                                <vs-input :label="$t('transaction.userID')" v-model="vInformation.user_id"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                <vs-input :label="$t('transaction.directBillTo')" class="w-full" v-model="vInformation.company"/>
                            </vs-row>
                            <vs-divider>{{ $t('transaction.folioInformation') }}</vs-divider>
                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-align="center" vs-justify="space-between">
                                <vs-input class="md:w-1/3" :label="$t('transaction.folioNumber')" v-model="vInformation.folio_number"/>
                                <vs-input class="md:w-1/3" :label="$t('transaction.subFolio')" v-model="vInformation.sub_folio"/>
                                <vs-input class="md:w-1/3" :label="$t('transaction.roomNumber')" v-model="vInformation.room_number"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation.full_name"/>
                            </vs-row>
                            <vs-divider>{{ $t('transaction.belongsTo') }}</vs-divider>
                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <vs-input :label="$t('transaction.folioNumber')" v-model="vInformation.belongs_to"/>
                                <vs-input :label="$t('transaction.roomNumber')" v-model="vInformation.room_number_original"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation.full_name_origin"/>
                            </vs-row>
                            <vs-divider>{{ $t('transaction.information') }}</vs-divider>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                <vs-input class="w-full" :label="$t('transaction.account')" v-model="vInformation.account"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                <vs-input class="w-full" :label="$t('transaction.subDepartment')" v-model="vInformation.sub_department"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="space-between">
                                <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation.default_currency_code}`" v-model="vInformation.total_amount"/>
                                <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation.type"/>
                                <input-number class="md:w-1/3" :label="$t('transaction.exchangeRate')" v-model="vInformation.exchange_rate"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation.currency_code}`" v-model="vInformation.total_amount_foreign"/>
                                <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation.type"/>
                                <vs-input class="md:w-1/3" :label="$t('transaction.auditDate')" v-model="vInformation.audit_date"/>
                            </vs-row>
                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                <vs-input class="w-full" :label="$t('transaction.remark')" v-model="vInformation.remark"/>
                            </vs-row>
                        </component>
                    </vx-card>
                    <vx-card class="md:w-2/3" :title="$t('transaction.breakdownDetail')">
                        <component :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
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
                                :rowData="rowData"
                                :defaultColDef="global.defColDef"
                                :getContextMenuItems="getContextMenu"
                                :animateRows="global.animatedRows"
                                :suppressDragLeaveHidesColumns="true"
                                :suppressMakeColumnVisibleAfterUnGroup="true"
                                :rowGroupPanelShow="rowGroupPanelShow"
                                :enableCellChangeFlash="true"
                                :rowSelection="rowSelection"
                                :statusBar="statusBar"
                                :pinnedBottomRowData="bottomRowTotal"
                                :rowClassRules="rowClassRules"
                                @rowDoubleClicked="handleRowDobleClicked1"
                            ></ag-grid-vue>
                        </component>
                    </vx-card>
                </div>
                <update-dialog ref="updateType" :formType="global.formType.transaction" :isShowCorrectionOrProperties="true" @refreshData="getProperties1(idLog)"/>
                <dialog-prompt
                    scroll-off
                    :child="1"
                    :title="title2"
                    :width="80"
                    :active="modalChild"
                    @close="val=>modalChild = val">
                    <template #body>
                        <div class="flex">
                            <vx-card class="md:w-1/3" :title="$t('transaction.detailTransaction')">
                                <component :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <!-- <vs-divider>{{ $t('transaction.detailTransaction') }}</vs-divider> -->
                                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <vs-input :label="$t('transaction.transactionID')" class="mr-2" v-model="vInformation2.id_log"/>
                                        <vs-input :label="$t('transaction.userID')" v-model="vInformation2.user_id"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                        <vs-input :label="$t('transaction.directBillTo')" class="w-full" v-model="vInformation2.company"/>
                                    </vs-row>
                                    <vs-divider>{{ $t('transaction.folioInformation') }}</vs-divider>
                                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-align="center" vs-justify="space-between">
                                        <vs-input class="md:w-1/3" :label="$t('transaction.folioNumber')" v-model="vInformation2.folio_number"/>
                                        <vs-input class="md:w-1/3" :label="$t('transaction.subFolio')" v-model="vInformation2.sub_folio"/>
                                        <vs-input class="md:w-1/3" :label="$t('transaction.roomNumber')" v-model="vInformation2.room_number"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                        <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation2.full_name"/>
                                    </vs-row>
                                    <vs-divider>{{ $t('transaction.belongsTo') }}</vs-divider>
                                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <vs-input :label="$t('transaction.folioNumber')" v-model="vInformation2.belongs_to"/>
                                        <vs-input :label="$t('transaction.roomNumber')" v-model="vInformation2.room_number_original"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                        <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation2.full_name_origin"/>
                                    </vs-row>
                                    <vs-divider>{{ $t('transaction.information') }}</vs-divider>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                        <vs-input class="w-full" :label="$t('transaction.account')" v-model="vInformation2.account"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                        <vs-input class="w-full" :label="$t('transaction.subDepartment')" v-model="vInformation2.sub_department"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="space-between">
                                        <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation2.default_currency_code}`" v-model="vInformation2.total_amount"/>
                                        <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation2.type"/>
                                        <input-number class="md:w-1/3" :label="$t('transaction.exchangeRate')" v-model="vInformation2.exchange_rate"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                        <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation2.currency_code}`" v-model="vInformation2.total_amount_foreign"/>
                                        <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation2.type"/>
                                        <vs-input class="md:w-1/3" :label="$t('transaction.auditDate')" v-model="vInformation2.audit_date"/>
                                    </vs-row>
                                    <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                        <vs-input class="w-full" :label="$t('transaction.remark')" v-model="vInformation2.remark"/>
                                    </vs-row>
                                </component>
                            </vx-card>
                            <vx-card class="md:w-2/3" :title="$t('transaction.breakdownDetail')">
                                <component :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                    <ag-grid-vue
                                        :style="global.styleAgGridFrame3"
                                        :class="global.themeAgGrid"
                                        pagination="true"
                                        :paginationPageSize="paginationPageSize"
                                        :enableRangeSelection="true"
                                        :gridOptions="gridOptions2"
                                        @grid-ready="onGridReady"
                                        :context="context"
                                        :columnDefs="columnDefs2"
                                        :frameworkComponents="frameworkComponents"
                                        :rowData="rowData2"
                                        :defaultColDef="global.defColDef"
                                        :getContextMenuItems="getContextMenu2"
                                        :animateRows="global.animatedRows"
                                        :suppressDragLeaveHidesColumns="true"
                                        :suppressMakeColumnVisibleAfterUnGroup="true"
                                        :rowGroupPanelShow="rowGroupPanelShow"
                                        :enableCellChangeFlash="true"
                                        :rowSelection="rowSelection"
                                        :statusBar="statusBar"
                                        :pinnedBottomRowData="bottomRowTotal"
                                        :rowClassRules="rowClassRules"
                                        @rowDoubleClicked="handleRowDobleClicked2"
                                    ></ag-grid-vue>
                                </component>
                            </vx-card>
                        </div>
                        <dialog-prompt
                            scroll-off
                            :child="2"
                            :title="title3"
                            :width="500"
                            :active="modalChild2"
                            @close="val=>modalChild2 = val">
                            <template #body>
                                <div class="flex">
                                    <vx-card class="w-full" :title="$t('transaction.detailTransaction')">
                                        <component :is="scrollbarTag" class="scroll-area-popup-form pt-2" :settings="global.perfectScrollbarSettings">
                                            <!-- <vs-divider>{{ $t('transaction.detailTransaction') }}</vs-divider> -->
                                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('transaction.transactionID')" class="mr-2" v-model="vInformation3.id_log"/>
                                                <vs-input :label="$t('transaction.userID')" v-model="vInformation3.user_id"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="flex-start">
                                                <vs-input :label="$t('transaction.directBillTo')" class="w-full" v-model="vInformation3.company"/>
                                            </vs-row>
                                            <vs-divider>{{ $t('transaction.folioInformation') }}</vs-divider>
                                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-align="center" vs-justify="space-between">
                                                <vs-input class="md:w-1/3" :label="$t('transaction.folioNumber')" v-model="vInformation3.folio_number"/>
                                                <vs-input class="md:w-1/3" :label="$t('transaction.subFolio')" v-model="vInformation3.sub_folio"/>
                                                <vs-input class="md:w-1/3" :label="$t('transaction.roomNumber')" v-model="vInformation3.room_number"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                                <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation3.full_name"/>
                                            </vs-row>
                                            <vs-divider>{{ $t('transaction.belongsTo') }}</vs-divider>
                                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                <vs-input :label="$t('transaction.folioNumber')" v-model="vInformation3.belongs_to"/>
                                                <vs-input :label="$t('transaction.roomNumber')" v-model="vInformation3.room_number_original"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                                <vs-input :label="$t('transaction.guestName')" class="w-full" v-model="vInformation3.full_name_origin"/>
                                            </vs-row>
                                            <vs-divider>{{ $t('transaction.information') }}</vs-divider>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                                <vs-input class="w-full" :label="$t('transaction.account')" v-model="vInformation3.account"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                                <vs-input class="w-full" :label="$t('transaction.subDepartment')" v-model="vInformation3.sub_department"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="space-between">
                                                <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation3.default_currency_code}`" v-model="vInformation3.total_amount"/>
                                                <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation3.type"/>
                                                <input-number class="md:w-1/3" :label="$t('transaction.exchangeRate')" v-model="vInformation3.exchange_rate"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" vs-type="flex" vs-justify="space-between">
                                                <input-number class="md:w-1/3" :label="`${$t('transaction.amount')}  ${vInformation3.currency_code}`" v-model="vInformation3.total_amount_foreign"/>
                                                <vs-input class="md:w-1/3" :label="$t('transaction.type')" v-model="vInformation3.type"/>
                                                <vs-input class="md:w-1/3" :label="$t('transaction.auditDate')" v-model="vInformation3.audit_date"/>
                                            </vs-row>
                                            <vs-row :class="global.formConfig.rowMarginBottom" class="w-full" vs-type="flex" vs-justify="flex-start">
                                                <vs-input class="w-full" :label="$t('transaction.remark')" v-model="vInformation3.remark"/>
                                            </vs-row>
                                        </component>
                                    </vx-card>
                                </div>
                            </template>
                        </dialog-prompt>
                    </template>
                </dialog-prompt>
            </template>
        </dialog-prompt>
    </div>
</template>
<script>
import { formatNumber, formatDate, formatDateTime } from '@/utils/format.js';
import { generateIconContextMenuAgGrid } from '@/utils/general.js';
import ActionGrid1 from '@/views/pages/components/ag_grid-framework/action_grid_properties1'
import ActionGrid2 from '@/views/pages/components/ag_grid-framework/action_grid_properties2'
import TransactionResource from '@/api/transaction';
import UpdateDialog from './UpdateDialog'

const transactionResource = new TransactionResource();
// import StatusBarTotal from './statusbar_total';

export default {
    name: 'Properties',
    components: {
        UpdateDialog,
    },
    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            columnDefs2: null,
            rowData: null,
            rowData2: null,
            gridOptions: null,
            gridOptions2: null,
            gridApi: null,
            columnApi: null,
            gridApi2: null,
            columnApi2: null,
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
            title: '',
            title2: '',
            title3: '',
            idLog: '',
            modalMain: false,
            modalChild: false,
            modalChild2: false,
            vInformation: {},
            vInformation2: {},
            vInformation3: {},
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, rowGroup: false, cellRenderer: 'actionGrid1', colId: 'params', width: 62 },
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 200, },
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 250 },
            { headerName: this.$t('transaction.table.debit'), field: 'debit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.credit'), field: 'credit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.currency'), field: 'default_currency', width: 100 },
            { headerName: this.$t('transaction.table.debitForeign'), field: 'debit_foreign', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.creditForeign'), field: 'credit_foreign', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.currencyForeign'), field: 'currency_code', width: 100 },
            { headerName: this.$t('transaction.table.exchangeRate'), field: 'exchange_rate', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.directBillOrCompany'), field: 'company', width: 200 },
        ];
        this.columnDefs2 = [
            { headerName: this.$t('common.table.action'), field: 'number', enableRowGroup: false, suppressMenu: true, resizable: false, filter: false, sortable: false, rowGroup: false, cellRenderer: 'actionGrid2', colId: 'params', width: 62 },
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 200 },
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 250 },
            { headerName: this.$t('transaction.table.debit'), field: 'debit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.credit'), field: 'credit', width: 100, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.currency'), field: 'default_currency', width: 100 },
            { headerName: this.$t('transaction.table.debitForeign'), field: 'debit_foreign', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.creditForeign'), field: 'credit_foreign', width: 115, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
            { headerName: this.$t('transaction.table.currencyForeign'), field: 'currency_code', width: 100 },
            { headerName: this.$t('transaction.table.exchangeRate'), field: 'exchange_rate', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, },
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            actionGrid1: ActionGrid1,
            actionGrid2: ActionGrid2,
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
                    name: this.$t('common.contextMenu.properties'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('properties_icon24'),
                    action: () => this.handleShowProperties2(this.paramsData.id_log),
                },
                {
                    name: this.$t('common.contextMenu.updateDirectBillOrCompany'),
                    disabled: !this.paramsData || this.paramsData.sub_group_code !== this.global.subGroupAccount.accountPayable,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 4),
                },
                {
                    name: this.$t('common.contextMenu.updateSubDepartment'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('edit_icon24'),
                    action: () => this.handleUpdateType(this.paramsData, 1),
                },
            ];
            return result;
        },

        getContextMenu2(params) {
            const { node } = params;
            if (node) {
                this.paramsData = node.data;
            } else {
                this.paramsData = null;
            }
            const result = [
                {
                    name: this.$t('common.contextMenu.properties'),
                    disabled: !this.paramsData,
                    icon: generateIconContextMenuAgGrid('properties_icon24'),
                    action: () => this.handleShowProperties3(this.paramsData.id_log),
                },
            ];
            return result;
        },

        handleRowRightClicked() {
            if(this.paramsData) {
                const vm = this;
                vm.gridApi.forEachNode((node) => {
                    if (node.data.id_log == vm.paramsData.id_log) {
                        node.setSelected(true, true);
                        // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
                    }
                });
            }
        },

        handleRowRightClicked2() {
            if(this.paramsData) {
                const vm = this;
                vm.gridApi2.forEachNode((node) => {
                    if (node.data.id_log == vm.paramsData.id_log) {
                        node.setSelected(true, true);
                        // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
                    }
                });
            }
        },

        async handleRowDobleClicked1(params) {
            this.paramsData = await params.data;
            this.handleShowProperties2(this.paramsData.id_log);
        },

        async handleRowDobleClicked2(params) {
            this.paramsData = await params.data;
            this.handleShowProperties3(this.paramsData.id_log);
        },


        handleUpdateType(params, type) {
            this.$refs.updateType.handleUpdateType(params, type);
        },

        handleClose(t) {
            if(t == 1) {
                this.modalMain = false;
            } else {
                this.modalChild = false;
            }
        },

        formatDate(date) {
            return formatDate(date);
        },

        async handleShowProperties(idLog) {
            this.idLog = idLog;
            this.$loadingIndicator(this);
            await this.getProperties1(idLog);
            this.modalMain = true;
        },

        async getProperties1(idLog) {
            const { data } = await transactionResource.getProperties1(idLog);
            this.vInformation = data.information;
            this.rowData = data.list;
            this.$closeLoadingIndicator(this);
        },

        async handleShowProperties2(idLog) {
            this.$loadingIndicator(this);
            await this.getProperties2(idLog);
            this.modalChild = true;
        },

        async getProperties2(idLog) {
            const { data } = await transactionResource.getProperties2(idLog);
            this.vInformation2 = data.information;
            this.rowData2 = data.list;
            this.$closeLoadingIndicator(this);
        },

        async handleShowProperties3(idLog) {
            this.$loadingIndicator(this);
            await this.getProperties3(idLog);
            this.modalChild2 = true;
        },

        async getProperties3(idLog) {
            const { data } = await transactionResource.getProperties3(idLog);
            this.vInformation3 = data.information;
            this.$closeLoadingIndicator(this);
        },
    },
    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.gridApi2 = this.gridOptions2.api;
        this.ColumnApi2 = this.gridOptions2.columnApi;
    },
    computed: {
        scrollbarTag() { return this.$store.getters.scrollbarTag; },
    },

}
</script>
