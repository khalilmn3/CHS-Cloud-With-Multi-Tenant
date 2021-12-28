<template>
    <div id="main-report-editor" class="vs-con-loading__container">
        <vs-card class="box">
            <vs-row class="box-body">
                <vs-col vs-justify="center" vs-align="center" vs-w="3">
                    <vs-row class="mb-2">
                        <vs-input  v-validate="'required'" name="name" :label-placeholder="$t('report.editor.templateName')" v-model="vModel.name"/>
                        <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    </vs-row>
                    <vs-row>
                        <vs-input :label-placeholder="$t('report.editor.headerRemark')" v-model="vModel.header_remark"/>
                    </vs-row>
                </vs-col>
                <vs-col vs-justify="center" vs-align="center" vs-w="3">
                    <vs-row class="mb-1">
                        <span>{{ $t('report.editor.pageSize') }}</span>
                    </vs-row>
                    <vs-row class="mb-1">
                        <v-select v-validate="'required'" name="paper_size" v-on:input="handleInputPaperSize()" :clearable="false" :reduce="dataLookUpPageSize => dataLookUpPageSize.value" v-model="vModel.paper_size" label="text" :options="dataLookUpPageSize"></v-select>
                        <span class="text-danger text-sm" v-show="errors.has('paper_size')">{{ errors.first('paper_size') }}</span>
                    </vs-row>
                    <vs-row>
                        <vs-input-number v-validate="'required'" name="paper_width" min="0" v-model="vModel.paper_width" :label="$t('report.editor.width')"/>
                        <span class="text-danger text-sm" v-show="errors.has('paper_width')">{{ errors.first('paper_width') }}</span>
                        <vs-input-number v-validate="'required'" name="paper_height" min="0" v-model="vModel.paper_height" :label="$t('report.editor.height')"/>
                        <span class="text-danger text-sm" v-show="errors.has('paper_height')">{{ errors.first('paper_heigh') }}</span>
                    </vs-row>
                </vs-col>
                <vs-col vs-justify="center" vs-align="center" vs-w="3">
                    <vs-row class="mb-2 pt-5">
                        <vs-input-number v-validate="'required'" name="header_height" min="0" v-model="vModel.header_row_height" :label="$t('report.editor.headerHeight')"/>
                        <span class="text-danger text-sm" v-show="errors.has('header_height')">{{ errors.first('header_height') }}</span>
                    </vs-row>
                    <vs-row>
                        <vs-input-number v-validate="'required'" name="data_height" min="0" v-model="vModel.row_height" :label="$t('report.editor.rowHeight')"/>
                        <span class="text-danger text-sm" v-show="errors.has('data_height')">{{ errors.first('data_height') }}</span>
                    </vs-row>
                </vs-col>
                <vs-col vs-justify="center" vs-align="center" vs-w="3">
                    <vs-row class="pt-5 mb-2">
                        <vs-checkbox v-model="vModelShowFooter">{{ $t('report.editor.showFooter') }}</vs-checkbox>
                    </vs-row>
                    <vs-row class="mb-1">
                        <vs-checkbox v-model="vModelHorizontalBorder">{{ $t('report.editor.horizontalBorder') }}</vs-checkbox>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-checkbox v-model="vModelVerticalBorder">{{ $t('report.editor.verticalBorder') }}</vs-checkbox>
                    </vs-row>
                    <vs-row vs-type="flex">
                        <vs-radio class="ml-1 mr-3" v-model="vModel.is_portrait" vs-name="radios1" vs-value="-1">{{ $t('report.editor.portrait') }}</vs-radio>
                        <vs-radio v-model="vModel.is_portrait" vs-name="radios1" vs-value="0">{{ $t('report.editor.landscape') }}</vs-radio>
                    </vs-row>
                </vs-col>
            </vs-row>
        </vs-card>
        <vs-row>
            <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
                <ag-grid-vue
                    style="width: 95%; height: 495px;"
                    :class="global.themeAgGrid"
                    id="Grid1"
                    :gridOptions="gridOptions"
                    :columnDefs="columnDefs"
                    :defaultColDef="defaultColDef"
                    :rowData="rowData"
                    :rowDragManaged="true"
                    :animateRows="true">
                </ag-grid-vue>
            </vs-row>
            <vs-row vs-justify="center" vs-align="center" vs-w="3">
                <vs-row class="mb-2">
                    <div style="width: 98%; height: 140px;" v-on:dragover="onDragOver($event)" v-on:drop="onDropReportGroup($event)">
                        <ag-grid-vue
                            style="width: 98%; height: 140px;"
                            :class="global.themeAgGrid"
                            id="Grid21"
                            :gridOptions="gridOptions2"
                            :columnDefs="columnDefs2"
                            :defaultColDef="defaultColDef"
                            :rowData="rowData2"
                            :rowDragManaged="true"
                            :animateRows="true"
                            :allowContextMenuWithControlKey="true"
                            :getContextMenuItems="getContextMenuItems2">
                        </ag-grid-vue>
                    </div>
                </vs-row>
                <vs-row class="mb-2">
                    <div style="width: 98%; height: 155px;" v-on:dragover="onDragOver($event)" v-on:drop="onDropReportOrder($event)">
                        <ag-grid-vue
                            style="width: 98%; height: 155px;"
                            :class="global.themeAgGrid"
                            id="Grid22"
                            :gridOptions="gridOptions3"
                            :columnDefs="columnDefs3"
                            :defaultColDef="defaultColDef"
                            :rowData="rowData3"
                            :rowDragManaged="true"
                            :animateRows="true"
                            :allowContextMenuWithControlKey="true"
                            :getContextMenuItems="getContextMenuItems3">
                        </ag-grid-vue>
                    </div>
                </vs-row>
                <vs-row class="mb-2">
                    <vs-input-number min="0" max="3" v-model="vModel.group_level" :label="$t('report.editor.groupingLevel')"/>
                </vs-row>
                <vs-row>
                    <div style="width: 98%; height: 140px;" v-on:dragover="onDragOver($event)" v-on:drop="onDropReportGrouping($event)">
                        <ag-grid-vue
                            style="width: 98%; height: 140px;"
                            :class="global.themeAgGrid"
                            id="Grid23"
                            :gridOptions="gridOptions4"
                            :columnDefs="columnDefs4"
                            :defaultColDef="defaultColDef"
                            :rowData="rowData4"
                            :rowDragManaged="true"
                            :animateRows="true"
                            :allowContextMenuWithControlKey="true"
                            :getContextMenuItems="getContextMenuItems4">
                        </ag-grid-vue>
                    </div>
                </vs-row>
            </vs-row>
            <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <div style="width: 100%; height: 495px;" v-on:dragover="onDragOver($event)" v-on:drop="onDropReportField($event)">
                    <ag-grid-vue
                        style="width: 100%; height: 495px;"
                        :class="global.themeAgGrid"
                        id="Grid3"
                        :gridOptions="gridOptions5"
                        :columnDefs="columnDefs5"
                        :defaultColDef="defaultColDef"
                        :rowSelection="rowSelection5"
                        :rowData="rowData5"
                        :rowDragManaged="true"
                        :animateRows="true"
                        :allowContextMenuWithControlKey="true"
                        :getContextMenuItems="getContextMenuItems5">
                    </ag-grid-vue>
                </div>
            </vs-row>
        </vs-row>
        <vs-row>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="9">
                <vs-button v-if="(modeDataEditor == 1)" id="button-default-template" class="vs-con-loading__container mt-4" v-on:click="setAsDefaultTemplate()"  color="primary" type="filled">{{ $t('report.editor.setAsDefault') }}</vs-button>
                <vs-button v-if="(modeDataEditor == 1 && global.userInfo.groupCode == 'SYSTEM')" id="button-default-system" class="vs-con-loading__container mt-4 ml-2 mr-2" v-on:click="setAsSystemDefaultTemplate('-1')"  color="primary" type="filled">{{ $t('report.editor.setAsSystemDefault') }}</vs-button>
                <vs-button v-if="(modeDataEditor == 1 && global.userInfo.groupCode == 'SYSTEM')" id="button-default-system-clear" class="vs-con-loading__container mt-4" v-on:click="setAsSystemDefaultTemplate('0')"  color="primary" type="filled">{{ $t('report.editor.clearAsSystemDefault') }}</vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-end" vs-align="center" vs-w="3">
                <vs-button :disabled="disabledButtonSave" id="button-save-main" class="vs-con-loading__container mt-4 mr-3" v-on:click="saveReportTemplate()" icon="save" :color="global.buttonColor.save" type="filled">{{ $t('button.save') }}</vs-button>
                <vs-button class="mt-4" v-on:click="closeReportTemplateEditor()"  :color="global.buttonColor.close" icon="close" type="filled">{{ $t('button.close') }}</vs-button>
            </vs-col>
        </vs-row>
        <dialog-three ref="dialogthree"></dialog-three>
    </div>
</template>

<script>

import { AgGridVue } from 'ag-grid-vue';
import ReportResource from '@/api/report.js';
import DialogThree from '@/views/pages/components/DialogSecond.vue';
import $alert from '@/utils/alert.js';

const reportResource = new ReportResource();
export default {
    components: {
        AgGridVue,
        DialogThree,
    },

    props: ['modeDataEditor', 'idLogTemplate', 'reportCodeInt'],

    data() {
        return {
            radiosOrientation: 1,
            dataLookUpPageSize: [
                { value: 0, text: '(Custom)' },
                { value: 1, text: 'A4' },
                { value: 2, text: 'Letter' },
                { value: 3, text: 'Legal' },
                { value: 4, text: 'Folio' },
            ],
            vModel: {},
            vModelShowFooter: false,
            vModelHorizontalBorder: false,
            vModelVerticalBorder: false,
            disabledPaperHeightWidth: false,
            disabledButtonSave: false,
            // Validators
            regex: '',
            // Ag-Grid 1
            columnDefs: null,
            rowData: null,
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            rowSelection: null,
            // Ag-Grid 2
            columnDefs2: null,
            rowData2: null,
            gridOptions2: null,
            gridApi2: null,
            columnApi2: null,
            rowSelection2: null,
            // Ag-Grid 3
            columnDefs3: null,
            rowData3: null,
            gridOptions3: null,
            gridApi3: null,
            columnApi3: null,
            rowSelection3: null,
            // Ag-Grid 4
            columnDefs4: null,
            rowData4: null,
            gridOptions4: null,
            gridApi4: null,
            columnApi4: null,
            rowSelection4: null,
            // Ag-Grid 5
            columnDefs5: null,
            rowData5: null,
            gridOptions5: null,
            gridApi5: null,
            columnApi5: null,
            rowSelection5: null,
            // Footer Type Cell Lookup
            footerTypeCellLookUp: {
                0: '(None)',
                1: 'Text "Total"',
                2: 'SUM',
                3: 'COUNT',
                4: 'COUNT IF <> ""',
                5: 'COUNT IF <> 0',
            },
            // Const Format Cell Lookup
            constReportFormatCellLookup: {
                0: '(None)',
                1: '%2.0n',
                2: '%2.1n',
                3: '%2.2n',
                4: '%2.3n',
                5: 'dd/MM/yyyy',
                6: 'dd/MM/yy',
                7: 'dd-MM-yyyy',
                8: 'dd-MM-yy',
                9: 'dd/MM/yyyy HH:mm:ss',
                10: 'dd/MM/yy HH:mm:ss',
                11: 'dd/MM/yyyy HH:mm',
                12: 'dd/MM/yy HH:mm',
                13: 'HH:mm:ss',
                14: 'HH:mm',
            },
            // const Format Font Cell Lookup
            constReportFormatFontCellLookup: {
                0: 'Arial',
                1: 'Tahoma',
                2: 'Verdana',
                3: 'Microsoft Sans Serif',
                4: 'Times New Roman',
                5: 'Comic Sans MS',
                6: 'Lucida Console',
            },
            // const Aligment Cell LookUp
            constAligmentCellLookUp: {
                0: 'Left',
                1: 'Right',
                2: 'Center',
            },
            // Const Is Ascending Lookup
            constIsAscendingCellLookUp: {
                '-1': 'ASC',
                0: 'DESC',
            },
        };
    },

    beforeMount() {
        this.gridOptions = {
            rowHeight: this.global.rowHeightDefault,
        };
        this.gridOptions2 = {
            rowHeight: this.global.rowHeightDefault,
        };
        this.gridOptions3 = {
            rowHeight: this.global.rowHeightDefault,
        };
        this.gridOptions4 = {
            rowHeight: this.global.rowHeightDefault,
        };
        this.gridOptions5 = {
            rowHeight: this.global.rowHeightDefault,
        };
        // Ag grid
        this.defaultColDef = {
            // sortable: true,
            // filter: true,
            resizable: true,
        };
        // Ag grid 1
        this.columnDefs = [
            {
                headerName: '', valueGetter: "'Drag'", dndSource: true, suppressMenu: true, width: 40,
            },
            {
                headerName: this.$t('report.editor.table.availableFieldList'), field: 'field_name', suppressMenu: true, width: 170,
            },
        ];
        // Ag grid 2
        this.columnDefs2 = [
            {
                headerName: this.$t('report.editor.table.groupFieldName'), field: 'field_name', suppressMenu: true, width: 180, rowDrag: true,
            },
        ];
        // Ag grid 3
        this.columnDefs3 = [
            {
                headerName: this.$t('report.editor.table.orderFieldName'), field: 'field_name', suppressMenu: true, width: 123, rowDrag: true,
            },
            {
                headerName: '',
                field: 'is_ascending',
                width: 60,
                suppressMenu: true,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.constIsAscendingCellLookUp) },
                refData: this.constIsAscendingCellLookUp,
            },
        ];
        // Ag grid 4
        this.columnDefs4 = [
            {
                headerName: this.$t('report.editor.table.reportGrouping'), field: 'field_name', suppressMenu: true, width: 180, rowDrag: true,
            },
        ];
        // Ag grid 5
        this.columnDefs5 = [
            {
                headerName: this.$t('report.editor.table.fieldName'), field: 'field_name', width: 120, suppressMenu: true, rowDrag: true,
            },
            {
                headerName: this.$t('report.editor.table.headerName'), field: 'header_name', width: 120, suppressMenu: true, editable: true,
            },
            {
                headerName: this.$t('report.editor.table.footerType'),
                field: 'footer_type',
                width: 120,
                suppressMenu: true,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.footerTypeCellLookUp) },
                refData: this.footerTypeCellLookUp,
            },
            {
                headerName: this.$t('report.editor.table.format'),
                field: 'format_code',
                width: 120,
                suppressMenu: true,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.constReportFormatCellLookup) },
                refData: this.constReportFormatCellLookup,
            },
            {
                headerName: this.$t('report.editor.table.width'), field: 'width', width: 120, suppressMenu: true, editable: true,
            },
            {
                headerName: this.$t('report.editor.table.font'),
                field: 'font',
                width: 120,
                suppressMenu: true,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.constReportFormatFontCellLookup) },
                refData: this.constReportFormatFontCellLookup,
            },
            {
                headerName: this.$t('report.editor.table.fontSize'), field: 'font_size', width: 120, suppressMenu: true, editable: true,
            },
            { headerName: 'Font Color', field: 'font_color', width: 120 },
            {
                headerName: this.$t('report.editor.table.alignment'),
                field: 'alignment',
                width: 120,
                suppressMenu: true,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.constAligmentCellLookUp) },
                refData: this.constAligmentCellLookUp,
            },
            {
                headerName: this.$t('report.editor.table.headerFontSize'), field: 'header_font_size', suppressMenu: true, width: 150, editable: true,
            },
            {
                headerName: this.$t('report.editor.table.headerFontColor'), field: 'header_font_color', suppressMenu: true, width: 150,
            },
            {
                headerName: this.$t('report.editor.table.headerAlignment'),
                field: 'header_alignment',
                suppressMenu: true,
                width: 150,
                editable: true,
                cellEditor: 'agRichSelectCellEditor',
                cellEditorParams: { values: this.extractValues(this.constAligmentCellLookUp) },
                refData: this.constAligmentCellLookUp,
            }];
    },

    methods: {
        onDragOver(event) {
            const dragSupported = event.dataTransfer.length;
            if (dragSupported) {
                event.dataTransfer.dropEffect = 'move';
            }
            event.preventDefault();
        },

        onDropReportGroup(event) {
            const { userAgent } = window.navigator;
            const isIE = userAgent.indexOf('Trident/') >= 0;
            const jsonData = event.dataTransfer.getData(
                isIE ? 'text' : 'application/json',
            );
            const data = JSON.parse(jsonData);
            const newData = { field_name: data.field_name };

            const transaction = {
                add: [newData],
            };

            this.gridApi2.applyTransaction(transaction);
            event.preventDefault();
        },

        onDropReportOrder(event) {
            const { userAgent } = window.navigator;
            const isIE = userAgent.indexOf('Trident/') >= 0;
            const jsonData = event.dataTransfer.getData(
                isIE ? 'text' : 'application/json',
            );
            const data = JSON.parse(jsonData);
            const newData = { field_name: data.field_name, is_ascending: '-1' };

            const transaction = {
                add: [newData],
            };

            this.gridApi3.applyTransaction(transaction);
            event.preventDefault();
        },

        onDropReportGrouping(event) {
            const { userAgent } = window.navigator;
            const isIE = userAgent.indexOf('Trident/') >= 0;
            const jsonData = event.dataTransfer.getData(
                isIE ? 'text' : 'application/json',
            );
            const data = JSON.parse(jsonData);
            const newData = { field_name: data.field_name };

            const transaction = {
                add: [newData],
            };

            this.gridApi4.applyTransaction(transaction);
            event.preventDefault();
        },

        onDropReportField(event) {
            const { userAgent } = window.navigator;
            const isIE = userAgent.indexOf('Trident/') >= 0;
            const jsonData = event.dataTransfer.getData(
                isIE ? 'text' : 'application/json',
            );
            const data = JSON.parse(jsonData);
            const newData = {
                field_name: data.field_name,
                header_name: data.field_name,
                footer_type: 0,
                format_code: 0,
                width: 100,
                font: 0,
                font_size: 9,
                font_color: 0,
                alignment: 0,
                header_font_size: 9,
                header_font_color: 0,
                header_alignment: 0,
            };

            const transaction = {
                add: [newData],
            };

            this.gridApi5.applyTransaction(transaction);
            event.preventDefault();
        },

        onGridReady(params) {},

        async editReportEditor() {
            try {
                const { data } = await reportResource.editReportEditor({ id_log: this.idLogTemplate });
                this.vModel = data.reportTemplate;
                this.vModelShowFooter = (this.vModel.show_footer == '-1');
                this.vModelHorizontalBorder = (this.vModel.horizontal_border == '-1');
                this.vModelVerticalBorder = (this.vModel.vertical_border == '-1');
                this.disabledPaperHeightWidth = (this.vModel.paper_size !== 0);
                // Set data Ag Grid
                this.rowData = data.reportDefaultField;
                if (this.modeDataEditor == this.global.modeData.edit || this.modeDataEditor == this.global.modeData.duplicate) {
                    this.rowData2 = data.reportGroupField;
                    this.rowData3 = data.reportOrderField;
                    this.rowData4 = data.reportGroupingField;
                    this.rowData5 = data.reportTemplateField;
                }
                if (this.modeDataEditor == this.global.modeData.insert) {
                    this.rowData2 = [];
                    this.rowData3 = [];
                    this.rowData4 = [];
                    this.rowData5 = [];
                    this.vModel.group_level = 0;
                    this.vModelShowFooter = true;
                    this.vModelHorizontalBorder = false;
                    this.vModelVerticalBorder = false;
                    this.vModel.paper_size = 1;
                    this.vModel.is_portrait = '-1';
                }
            } catch (error) {
                this.$refs.dialogthree.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.errorFetchData'), 'dialog-three');
            }
        },

        handleInputPaperSize() {
            this.disabledPaperHeightWidth = (this.vModel.paper_size !== 0);
        },

        async setAsDefaultTemplate() {
            this.$vs.loading({ container: '#button-default-template', scale: this.global.scaleLoadingButton });
            try {
                await reportResource.setAsDefaultTemplate({ report_code: this.reportCodeInt, id_log: this.idLogTemplate, user_id: this.global.userInfo.code });
                this.$vs.loading.close('#button-default-template>.con-vs-loading');
                $alert.acceptAlertSucces();
            } catch (error) {
                this.$vs.loading.close('#button-default-template>.con-vs-loading');
            }
        },

        async setAsSystemDefaultTemplate(isSystem) {
            if (isSystem == '-1') {
                this.$vs.loading({ container: '#button-default-system', scale: this.global.scaleLoadingButton });
            } else {
                this.$vs.loading({ container: '#button-default-system-clear', scale: this.global.scaleLoadingButton });
            }

            try {
                await reportResource.setAsSystemDefaultTemplate({
                    report_code: this.reportCodeInt, is_system: isSystem, id_log: this.idLogTemplate, user_id: this.global.userInfo.code,
                });
                $alert.acceptAlertSucces();
                this.$vs.loading.close('#button-default-system>.con-vs-loading');
                this.$vs.loading.close('#button-default-system-clear>.con-vs-loading');
            } catch (error) {
                this.$vs.loading.close('#button-default-system>.con-vs-loading');
                this.$vs.loading.close('#button-default-system-clear>.con-vs-loading');
            }
        },

        async saveAtributReportTemplate(templateId) {
            // Report Group
            const reportGroup = [];
            this.gridApi2.forEachNode((node, index) => {
                node.data.template_id = templateId;
                node.data.id_sort = index + 1;
                reportGroup.push(node.data);
            });
            // Report Order
            const reportOrder = [];
            this.gridApi3.forEachNode((node, index) => {
                node.data.template_id = templateId;
                node.data.id_sort = index + 1;
                reportOrder.push(node.data);
            });
            // Report Grouping
            const reportGrouping = [];
            this.gridApi4.forEachNode((node, index) => {
                node.data.template_id = templateId;
                node.data.id_sort = index + 1;
                reportGrouping.push(node.data);
            });
            // Report Default Field
            const reportField = [];
            this.gridApi5.forEachNode((node, index) => {
                node.data.template_id = templateId;
                node.data.id_sort = index + 1;
                node.data.alignment = node.data.alignment.toString();
                node.data.header_alignment = node.data.header_alignment.toString();
                reportField.push(node.data);
            });

            try {
                await reportResource.updateTemplateDefaultReport({
                    templateId, reportGroup, reportOrder, reportGrouping, reportField,
                });
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                $alert.acceptAlertSucces();
                this.closeReportTemplateEditor();
                this.closeModalReportParent();
                this.disabledButtonSave = false;
            } catch (error) {
                this.$vs.loading.close('#button-save-main>.con-vs-loading');
                this.disabledButtonSave = false;
            }
        },

        async saveReportTemplate() {
            if (this.gridApi4.getDisplayedRowCount() != this.vModel.group_level) {
                this.$refs.dialogthree.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportGroupLevel'), 'dialog-three');
            } else {
                this.$validator.validateAll().then(async (result) => {
                    if (result) {
                        this.disabledButtonSave = true;
                        // Change Variable Report Template
                        this.$vs.loading({ container: '#button-save-main', scale: this.global.scaleLoadingButton });
                        this.vModel.show_footer = (this.vModelShowFooter) ? '-1' : '0';
                        this.vModel.horizontal_border = (this.vModelHorizontalBorder) ? '-1' : '0';
                        this.vModel.vertical_border = (this.vModelVerticalBorder) ? '-1' : '0';
                        this.vModel.user_id = this.global.userInfo.code;
                        if (this.modeDataEditor == this.global.modeData.edit) {
                            const { data } = await reportResource.updateTemplateReport(this.vModel);
                            if (data.status == 0) {
                                this.saveAtributReportTemplate(this.idLogTemplate);
                            }
                        } else if (this.modeDataEditor == this.global.modeData.insert || this.modeDataEditor == this.global.modeData.duplicate) {
                            const { data } = await reportResource.insertTemplateReport(this.vModel);
                            if (data.status == 0) {
                                await this.saveAtributReportTemplate(data.templateId);
                            }
                        }
                    } else {
                        this.$refs.dialogthree.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.required'), 'dialog-three');
                    }
                });
            }
        },

        closeReportTemplateEditor() {
            this.$emit('showReportEditor');
        },

        closeModalReportParent() {
            this.$emit('closeModalReport');
        },

        getContextMenuItems2(params) {
            const vm = this;
            const result = [
                {
                    name: this.$t('report.editor.deleteField'),
                    action: () => {
                        const dataSelected = [];
                        dataSelected.push(params.node.data);
                        vm.gridApi2.applyTransaction({ remove: dataSelected });
                    },
                },
            ];
            return result;
        },

        getContextMenuItems3(params) {
            const vm = this;
            const result = [
                {
                    name: this.$t('report.editor.deleteField'),
                    action: () => {
                        const dataSelected = [];
                        dataSelected.push(params.node.data);
                        vm.gridApi3.applyTransaction({ remove: dataSelected });
                    },
                },
            ];
            return result;
        },

        getContextMenuItems4(params) {
            const vm = this;
            const result = [
                {
                    name: this.$t('report.editor.deleteField'),
                    action: () => {
                        const dataSelected = [];
                        dataSelected.push(params.node.data);
                        vm.gridApi4.applyTransaction({ remove: dataSelected });
                    },
                },
            ];
            return result;
        },

        getContextMenuItems5(params) {
            const vm = this;
            const result = [
                {
                    name: this.$t('report.editor.deleteField'),
                    action: () => {
                        const dataSelected = [];
                        dataSelected.push(params.node.data);
                        vm.gridApi5.applyTransaction({ remove: dataSelected });
                    },
                },
            ];
            return result;
        },

        extractValues(mappings) {
            return Object.keys(mappings);
        },
    },

    async created() {
        await this.editReportEditor();
    },

    mounted() {
        this.gridApi = this.gridOptions.api;
        this.ColumnApi = this.gridOptions.columnApi;
        this.gridApi2 = this.gridOptions2.api;
        this.ColumnApi2 = this.gridOptions2.columnApi;
        this.gridApi3 = this.gridOptions3.api;
        this.ColumnApi3 = this.gridOptions3.columnApi;
        this.gridApi4 = this.gridOptions4.api;
        this.ColumnApi4 = this.gridOptions4.columnApi;
        this.gridApi5 = this.gridOptions5.api;
        this.ColumnApi5 = this.gridOptions5.columnApi;
    },
};

window.extractValues = function extractValues(mappings) {
    return Object.keys(mappings);
};

</script>

<style scoped>
    .drop-col {
        padding-left: 10px;
        box-sizing: border-box;
        flex: 1 1 0px;
        display: flex;
        flex-direction: column;
    }
</style>
