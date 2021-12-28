<template>
    <div>
        <dialog-prompt
            button1
            :title="''"
            :width="800"
            :active="activeModal"
            :idButton1="'button-save'"
            :buttonDisabled1="btnSaveDisabled"
            @button1="handleSave()"
            @close="val=>activeModal = val">
            <template #body>
                <vs-row vs-type="flex" vs-align="center" vs-justify="space-between">
                    <div class="w-32">
                        <vs-row>
                            <label>{{$t('transaction.auditDate')}}</label>
                        </vs-row>
                        <date-picker
                            disabled
                            :clearable="false"
                            type="date"
                            confirm
                            confirm-text="ok"
                            :lang="$t('lang')"
                            value-type="YYYY-MM-DD"
                            format="DD/MM/YYYY"
                            label="name"
                            class="w-full"
                            v-model="vModel.audit_date">
                        </date-picker>
                    </div>
                    <input-number disabled class="w-48" :label="$t('transaction.totalAmountBefore')" v-model="vModel.amount"/>
                    <vs-radio class="mr-1" @change="changedData.fixed_total_amount = isFixedAmount" v-model="isFixedAmount" vs-value="true">{{ $t('transaction.fixedTotalAmount') }}</vs-radio>
                    <vs-radio class="mr-1" @change="changedData.fixed_total_amount = isFixedAmount" v-model="isFixedAmount" vs-value="false">{{ $t('transaction.changeTotalAmount') }}</vs-radio>
                    <vs-button @click="handleReset()">{{ $t('button.reset') }}</vs-button>
                </vs-row>
                <vs-row class="mt-2">
                    <ag-grid-vue
                        :style="global.styleAgGridFrame1"
                        :class="global.themeAgGrid"
                        :gridOptions="gridOptions"
                        @grid-ready="onGridReady"
                        :columnDefs="columnDefs"
                        :rowData="rowData"
                        :stopEditingWhenGridLosesFocus="true"
                        :suppressRowClickSelection="true"
                        :frameworkComponents="frameworkComponents"
                        :rowSelection="rowSelection"
                        :defaultColDef="global.colDef1"
                        :pinnedBottomRowData="totalAmountAfter"
                        @cellEditingStopped="handleValueChanged"
                    ></ag-grid-vue>
                </vs-row>
            </template>
        </dialog-prompt>

    </div>
</template>
<script>
import { AgGridVue, RichSelectModule } from 'ag-grid-vue';
// <!------------------additional element---------------------->
// ------for format----- //
import { formatNumber } from '@/utils/format.js';
import TransactionResource from '@/api/transaction';
import ChecklistRenderer from '@/views/pages/components/ag_grid-framework/checklist2';
import $dialog from '@/utils/dialog.js';
// import { RichSelectModule } from 'ag-grid-enterprise/rich-select';

const transactionResource = new TransactionResource();
// <!------------------end additional element---------------------->
export default {
    name: 'AdvancedCorrection',

    components: {
        AgGridVue,
    },

    data() {
        return {
            // Ag-Grid
            columnDefs: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            rowSelection: null,
            rowData: [],
            rowDataTemp: null,
            pinnedBottomRowData: null,

            vModel: {},
            vTemp: {},
            isFixedAmount: 'true',
            activeModal: false,
            btnSaveDisabled: false,
            totalAmountAfter: 0,
            totalAmountBefore: 0,
            changedData: {},
            canProsesAmount: true,
            dataHasChanged: false,
            idData: '',
            modules: {
                RichSelectModule
            }

        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,

        };
        // ------------------need setting manual for column table-----------------//
        // use this.$t("value") for transaltion localization------//
        // see value in @/lang/en.js //
        this.columnDefs = [
            { headerName: this.$t('transaction.table.subDepartment'), field: 'sub_department', width: 150, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.account'), field: 'account', width: 180, cellStyle: { textAlign: 'right' }, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.amountBefore'), field: 'amount_before', width: 165, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false,},
            { headerName: this.$t('transaction.table.amount'), field: 'amount', width: 165, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false, editable: true},
            { headerName: this.$t('transaction.table.fixedAmount'), field: 'fixed_amount',width: 102, enableRowGroup: false, suppressMenu: true, filter: false, sortable: false, rowGroup: false, editable: true, cellRenderer: 'checklistRenderer', cellEditor: 'agRichSelectCellEditor', cellEditorParams: { values: [true, false], cellRenderer: 'checklistRenderer', },},
        ];

        // ------------------end need setting manual for column table-----------------//
        this.context = { componentParent: this };
        this.frameworkComponents = {
            checklistRenderer: ChecklistRenderer,
        };
        this.paginationPageSize = this.global.limitDefaultPageSize;
        this.rowSelection = 'multiple';
        this.rowModelType = 'serverSide';
    },

    methods: {

        onGridReady() {
            this.pinnedBottomRowData = this.getPinnedBottomData();
        },

        async handleShowAdvancedCorrection(id) {
            this.$loadingIndicator(this);
            this.handleReset();
            this.isFixedAmount = 'true';
            await this.getBreakdownData(id);
            this.$closeLoadingIndicator(this);
            this.activeModal = true;
        },

        async getBreakdownData(id) {
            this.idData = id;
            const { data } = await transactionResource.getAdvancedCorrectionBreakdown(id);
            this.vModel = data;
            this.vTemp = data;
            this.rowData = await data.data || [];
            this.rowDataTemp = data.data || [];
            this.totalAmountBefore = data.amount;
            this.totalAmountAfter = [{
                amount: data.amount
            }]
        },

        getPinnedBottomData() {
            // this.gridOptions.api.forEachNode((rowNode, index) => {
            //     amount += rowNode.data.amount;
            // });
            return [
                {
                    amount: this.vModel.amount,
                },
            ];
        },

        handleReset() {
            this.dataHasChanged = false;
            this.changedData = {};
            if(this.rowData.length > 0 && this.activeModal) {
                this.gridOptions.api.forEachNode((rowNode, index)=>{
                    rowNode.setDataValue('amount', rowNode.data.amount_before);
                });

                this.gridOptions.api.setPinnedBottomRowData([{amount:this.totalAmountBefore}]);
            }
        },

        handleSave() {
            this.gridOptions.api.stopEditing();
            if(this.dataHasChanged) {
                this.updateData(this.changedData);
            } else {
                $dialog.information(this.$t('responseStatus.advancedCorrection.3'));
            }
        },

        async updateData(params) {
            try{
                this.$loadingIndicator(this);
                const { data } = await transactionResource.updateAdvancedCorrection(params);
                if(data === 0) {
                    this.refreshData();
                    this.activeModal = false;
                } else if(data > 0) {
                    $dialog.information(this.$t(`responseStatus.advancedCorrection.${data}`));
                    this.$closeLoadingIndicator(this);
                }
            } catch (error) {
                this.$closeLoadingIndicator(this);
            }
        },

        handleValueChanged(params) {
            if(this.canProsesAmount) {
                let amount = 0;
                let data = [];
                const rowData = this.getAllRows();
                if(this.isFixedAmount == 'true') {
                    this.canProsesAmount = false;
                    let totalFixedAmount = 0;
                    let totalNonFixedAmount = 0;
                    this.gridOptions.api.forEachNode((rowNode, index)=>{
                        if(rowNode.data.fixed_amount || (rowNode.data.id == params.data.id) ) {
                            totalFixedAmount += parseFloat(rowNode.data.amount);
                        } else {
                            totalNonFixedAmount += parseFloat(rowNode.data.amount_before);
                        }
                    });

                    if(totalFixedAmount > this.totalAmountBefore) {
                        $dialog.information(this.$t('responseStatus.advancedCorrection.4'));
                    } else {
                        let firstRowNode = null;
                        let totalAmountTemp = this.totalAmountBefore - totalFixedAmount;
                        this.gridOptions.api.forEachNode((rowNode, index)=>{
                            const amountBefore = parseFloat(rowNode.data.amount_before);
                            if(!rowNode.data.fixed_amount && (rowNode.data.id != params.data.id)) {
                                if(firstRowNode == null) {
                                    firstRowNode = rowNode;
                                }
                                const newVal = parseFloat((amountBefore / totalNonFixedAmount) * (this.totalAmountBefore - totalFixedAmount)).toFixed(3);
                                rowNode.setDataValue('amount', newVal);
                                totalAmountTemp = parseFloat(totalAmountTemp).toFixed(3) - parseFloat(newVal).toFixed(3);
                            }
                        });

                        if(firstRowNode != null && (totalAmountTemp != 0)) {
                            firstRowNode.setDataValue('amount', parseFloat(firstRowNode.data.amount_before) + parseFloat(totalAmountTemp).toFixed(3));
                        }
                    }
                }
                this.gridOptions.api.forEachNode((rowNode, index) => {
                    const newVal = parseFloat(rowNode.data.amount);

                    if(isNaN(newVal)) {
                        amount += 0;
                    } else {
                        amount += parseFloat(rowNode.data.amount);
                    }
                    data.push({
                        id: rowNode.data.id,
                        breakdown2: rowNode.data.breakdown2,
                        amount_before: rowNode.data.amount_before,
                        amount_after: newVal,
                    });
                });
                this.gridOptions.api.setPinnedBottomRowData([{amount: parseFloat(amount).toFixed(3)}]);
                this.dataHasChanged = true;
                this.changedData = {
                    id: this.idData,
                    fixed_total_amount: this.isFixedAmount,
                    amount_before: this.totalAmountBefore,
                    amount_after: parseFloat(amount).toFixed(3),
                    user_id: this.global.userInfo.code,
                    data
                }
                this.canProsesAmount = true;
            }
        },

        getDataValue(id, status) { // use on group check in form
            const rowNode = this.gridApi.getRowNode(id);
            rowNode.setDataValue('result', this.$t(`responseStatus.checkInReservation.${status}`));
        },

        getAllRows() {
            const rowData = [];
            this.gridOptions.api.forEachNode((node) => rowData.push(node.data));
            return rowData;
        },

        refreshData() {
            this.$emit('refreshData');
        },
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },
};
</script>
