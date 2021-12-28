<template>
    <div>
        <div id="report-viewer"></div>
    </div>
</template>
<script>
import $alert from '@/utils/alert.js';
import $dialog from '@/utils/dialog.js';
import ReportResource from '@/api/report.js';
import UserSettingResource from '@/api/tools/user-setting/userSetting.js';

const reportResource = new ReportResource();
const userSettingResource = new UserSettingResource();

export default {
    props: {
        query: Object,
    },
    data() {
        return {
            jsonObjectReport: {},
            exportReportAccess: '',
        };
    },

    methods: {
        async print(params, reportDirectory) {
            // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
            const report = new Stimulsoft.Report.StiReport();
            const options = new Stimulsoft.Viewer.StiViewerOptions();

            options.appearance.backgroundColor = Stimulsoft.System.Drawing.Color.gray;
            options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.yellow;

            options.appearance.fullScreenMode = this.global.stimulsoftReportSetting.fullScreenMode;
            options.appearance.scrollbarsMode = this.global.stimulsoftReportSetting.scrollbarsMode;
            options.appearance.showTooltips = this.global.stimulsoftReportSetting.showTooltips;
            options.toolbar.printDestination = Stimulsoft.Viewer.StiPrintDestination.Pdf;

            options.toolbar.backgroundColor = Stimulsoft.System.Drawing.Color.white;
            options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.gray;
            options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.Continuous;
            options.toolbar.showPrintButton = this.global.stimulsoftReportSetting.showPrintButton;
            options.toolbar.showDesignButton = this.global.stimulsoftReportSetting.showDesignButton;
            options.toolbar.showAboutButton = this.global.stimulsoftReportSetting.showAboutButton;
            options.toolbar.showOpenButton = this.global.stimulsoftReportSetting.showOpenButton;
            options.toolbar.showSaveButton = this.global.stimulsoftReportSetting.showSaveButton;
            options.toolbar.showSendEmailButton = this.global.stimulsoftReportSetting.showSendEmailButton;

            options.exports.showExportToPdf = this.global.stimulsoftReportSetting.showExportToPdf;
            options.exports.showExportToDocument = this.global.stimulsoftReportSetting.showExportToDocument;
            options.exports.showExportToHtml = this.global.stimulsoftReportSetting.showExportToHtml;
            options.exports.showExportToHtml5 = this.global.stimulsoftReportSetting.showExportToHtml5;
            options.exports.ShowExportToWord2007 = this.global.stimulsoftReportSetting.ShowExportToWord2007;
            options.exports.showExportToExcel2007 = this.global.stimulsoftReportSetting.showExportToExcel2007;

            const viewer = new window.Stimulsoft.Viewer.StiViewer(options, 'StiViewer', false);

            report.dictionary.databases.clear();
            try {
                const dataSet = new Stimulsoft.System.Data.DataSet();
                if (params.templateID > 0) {
                    const { data } = await reportResource.processReportTemplate(params);
                    // console.log(data);
                    if (data.data.length > 0) {
                        // data.fieldData[0] = Header Title
                        // data.fieldData[1] = Databand Text
                        // data.fieldData[2] = Format Code Databand
                        // data.fieldData[3] = Format Value Databand
                        // data.fieldData[4] = width Header & Databand & Footer
                        // data.fieldData[5] = Header Font Size
                        // data.fieldData[6] = Data Band Font Size
                        // data.fieldData[7] = Header Font Color
                        // data.fieldData[8] = Data Band Font Color
                        // data.fieldData[9] = Header Aligment
                        // data.fieldData[10] = Data Band Aligment
                        // data.fieldData[11] = Font Header & data band & Footer
                        // data.fieldData[12] = Footer
                        // data.template[0] = Template report

                        const jsonData = data;
                        dataSet.readJson(jsonData);
                        const dataCompany = dataSet.tables.getByIndex(0);
                        const dataReport = dataSet.tables.getByIndex(1);
                        // Add data to datastore
                        report.regData('dataReport', '', dataSet);

                        const listDataSource = {
                            data1: dataReport.tableName,
                            data2: dataReport.tableName,
                            data3: dataReport.tableName,
                            data4: dataReport.tableName,
                            data5: dataReport.tableName,
                            data6: dataReport.tableName,
                            data7: dataReport.tableName,
                            data8: dataReport.tableName,
                            data9: dataReport.tableName,
                            data10: dataReport.tableName,
                            data11: dataReport.tableName,
                            data12: dataReport.tableName,
                            data13: dataReport.tableName,
                            data14: dataReport.tableName,
                            data15: dataReport.tableName,
                            data16: dataReport.tableName,
                            data17: dataReport.tableName,
                            data18: dataReport.tableName,
                            data19: dataReport.tableName,
                            data20: dataReport.tableName,
                        };

                        // Fill dictionary Max 20 Column Allowed
                        const dataSource = new Stimulsoft.Report.Dictionary.StiDataTableSource(listDataSource.data1, listDataSource.data2, listDataSource.data3, listDataSource.data4, listDataSource.data5,
                            listDataSource.data6, listDataSource.data7, listDataSource.data8, listDataSource.data9, listDataSource.data10,
                            listDataSource.data11, listDataSource.data12, listDataSource.data13, listDataSource.data14, listDataSource.data15,
                            listDataSource.data16, listDataSource.data17, listDataSource.data18, listDataSource.data19, listDataSource.data20);

                        // Add All Column Select Field
                        for (const i in dataReport.columns.list) {
                            const dataColumn = dataReport.columns.list[i];
                            dataSource.columns.add(new Stimulsoft.Report.Dictionary.StiDataColumn(dataColumn.columnName, dataColumn.columnName, dataColumn.columnName));
                        }
                        // Asign to datasource
                        report.dictionary.dataSources.add(dataSource);

                        const page = report.pages.getByIndex(0);
                        // Setup Paper Size
                        let { pageWidth } = data.template[0];
                        let { pageHeight } = data.template[0];
                        let pageDifferent = 0;

                        // page.paperSize 0 = Custom, 1 = A4, 2=Letter, 3=Legal 4=Folio;
                        if (data.template[0].pageSize == 1) {
                            page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.A4;
                        } else if (data.template[0].pageSize == 2) {
                            page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Letter;
                        } else if (data.template[0].pageSize == 3) {
                            page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Legal;
                        } else if (data.template[0].pageSize == 4) {
                            page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Folio;
                        } else {
                            page.paperSize = Stimulsoft.System.Drawing.Printing.PaperKind.Custom;
                        }
                        // Orientation '-1' = Portrait, '0' = Landscape
                        if (data.template[0].orientation == '-1') {
                            page.orientation = Stimulsoft.Report.Components.StiPageOrientation.Portrait;
                            if (data.template[0].pageSize == 0) {
                                page.pageHeight = parseFloat(pageHeight);
                                page.PageWidth = parseFloat(pageWidth);
                            }
                            pageWidth = page.pageWidth;
                            pageHeight = page.pageHeight;
                        } else {
                            page.orientation = Stimulsoft.Report.Components.StiPageOrientation.Landscape;
                            if (data.template[0].pageSize == 0) {
                                page.pageHeight = parseFloat(pageWidth);
                                page.pageWidth = parseFloat(pageHeight);
                            }
                            pageWidth = page.pageWidth;
                            pageHeight = page.pageHeight;
                            pageDifferent = (pageWidth - pageHeight) - (marginLeft + marginRight);
                        }

                        // Setup page Margin
                        let marginLeft = 1;
                        let marginRight = 1;
                        const marginTop = 1;
                        const marginBottom = 1;
                        page.margins.left = marginLeft;
                        page.margins.right = marginRight;
                        page.margins.top = marginTop;
                        page.margins.bottom = marginBottom;

                        const pageWidthSizeHalf = (pageWidth - marginLeft - marginRight) / 2;
                        // Create ReportTitleBand1
                        const reportTitleBand = new Stimulsoft.Report.Components.StiReportTitleBand();
                        reportTitleBand.height = 1.8;
                        reportTitleBand.name = 'ReportTitleBand';
                        page.components.add(reportTitleBand);

                        // Create stiText Title Report
                        const reportTitle = new Stimulsoft.Report.Components.StiText();
                        reportTitle.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, pageWidthSizeHalf, 0.6);
                        reportTitle.font = new Font('Arial', 12, Stimulsoft.System.Drawing.FontStyle.Bold);
                        reportTitle.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                        reportTitle.text = data.template[0].reportName;
                        reportTitle.name = 'reportTitle';
                        reportTitle.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        reportTitle.growToHeight = true;
                        reportTitle.wordWrap = true;
                        reportTitleBand.components.add(reportTitle);

                        // Create stitext Description Report
                        const reportDescription = new Stimulsoft.Report.Components.StiText();
                        reportDescription.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0.6, pageWidthSizeHalf, 0.8);
                        reportDescription.font = new Font('Arial', 9);
                        reportDescription.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                        reportDescription.text = params.dateDescription;
                        reportDescription.name = 'reportDescription';
                        reportDescription.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        reportDescription.growToHeight = true;
                        reportDescription.wordWrap = true;
                        reportTitleBand.components.add(reportDescription);

                        // Create stiText company name
                        const companyName = new Stimulsoft.Report.Components.StiText();
                        companyName.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0, pageWidthSizeHalf, 0.6);
                        companyName.font = new Font('Arial', 12, Stimulsoft.System.Drawing.FontStyle.Bold);
                        companyName.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                        companyName.text = data.company.name;
                        companyName.name = 'companyName';
                        companyName.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        companyName.growToHeight = true;
                        companyName.wordWrap = true;
                        reportTitleBand.components.add(companyName);

                        // Create stitext Street company
                        const companyStreet = new Stimulsoft.Report.Components.StiText();
                        companyStreet.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0.6, pageWidthSizeHalf, 0.8);
                        companyStreet.font = new Font('Arial', 9);
                        companyStreet.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                        companyStreet.text = data.company.CityStreet;
                        companyStreet.name = 'companyStreet';
                        companyStreet.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        companyStreet.growToHeight = true;
                        companyStreet.wordWrap = true;
                        reportTitleBand.components.add(companyStreet);

                        const divColumnWidth = 37.8;
                        // Create HeaderBand
                        const headerBand = new Stimulsoft.Report.Components.StiHeaderBand();
                        headerBand.height = data.template[0].headerHeight / divColumnWidth;
                        headerBand.name = 'HeaderBand';
                        page.components.add(headerBand);

                        // Group Header Band 1
                        if (data.template[0].reportGroupLevel > 0) {
                            var groupHeaderBand1 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                            groupHeaderBand1.dataSourceName = dataReport.tableName;
                            groupHeaderBand1.height = 0.8;// data.template[0].headerHeight/divColumnWidth;
                            groupHeaderBand1.condition = data.groupingField[0].match(' ') == null ? `{data.${data.groupingField[0]}}` : `{data.[${data.groupingField[0]}]}`;
                            groupHeaderBand1.name = 'GroupHeaderBand1';
                            page.components.add(groupHeaderBand1);

                            // Add stitext
                            var textGroupHeader1 = new Stimulsoft.Report.Components.StiText();
                            textGroupHeader1.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, (pageWidth - marginLeft - marginRight), groupHeaderBand1.height);
                            textGroupHeader1.font = new Font('Arial', 9, Stimulsoft.System.Drawing.FontStyle.Bold);
                            textGroupHeader1.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                            textGroupHeader1.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Bottom;
                            const valueGroupHeader1 = data.groupingField[0].match(' ') == null ? `{data.${data.groupingField[0]}}` : `{data.[${data.groupingField[0]}]}`;
                            textGroupHeader1.text = `${data.groupingField[0]}: ${valueGroupHeader1}`;
                            textGroupHeader1.name = 'textGroupHeader1';
                            if (data.template[0].verticalBorder == '-1') {
                                textGroupHeader1.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Left | Stimulsoft.Base.Drawing.StiBorderSides.Right;
                            } else {
                                textGroupHeader1.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Top;
                            }
                            groupHeaderBand1.components.add(textGroupHeader1);
                        }
                        // Group Header Band 2
                        if (data.template[0].reportGroupLevel > 1) {
                            const groupHeaderBand2 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                            groupHeaderBand2.dataSourceName = groupHeaderBand1.dataSourceName;
                            groupHeaderBand2.height = groupHeaderBand1.height;
                            groupHeaderBand2.condition = data.groupingField[1].match(' ') == null ? `{data.${data.groupingField[1]}}` : `{data.[${data.groupingField[1]}]}`;
                            groupHeaderBand2.name = 'groupHeaderBand2';
                            page.components.add(groupHeaderBand2);

                            // Add stitext
                            var textGroupHeader2 = new Stimulsoft.Report.Components.StiText();
                            textGroupHeader2.clientRectangle = textGroupHeader1.clientRectangle;
                            textGroupHeader2.font = textGroupHeader1.font;
                            textGroupHeader2.horAlignment = textGroupHeader1.horAlignment;
                            textGroupHeader2.vertAlignment = textGroupHeader1.vertAlignment;
                            const valueGroupHeader2 = data.groupingField[1].match(' ') == null ? `{data.${data.groupingField[1]}}` : `{data.[${data.groupingField[1]}]}`;
                            textGroupHeader2.text = `     ${data.groupingField[1]}: ${valueGroupHeader2}`;
                            textGroupHeader2.name = 'textGroupHeader2';
                            textGroupHeader2.border.side = textGroupHeader1.border.side;
                            groupHeaderBand2.components.add(textGroupHeader2);
                        }
                        // Group Header Band 3
                        if (data.template[0].reportGroupLevel > 2) {
                            const groupHeaderBand3 = new Stimulsoft.Report.Components.StiGroupHeaderBand();
                            groupHeaderBand3.dataSourceName = groupHeaderBand1.dataSourceName;
                            groupHeaderBand3.height = groupHeaderBand1.height;
                            groupHeaderBand3.condition = data.groupingField[2].match(' ') == null ? `{data.${data.groupingField[2]}}` : `{data.[${data.groupingField[2]}]}`;
                            groupHeaderBand3.name = 'groupHeaderBand3';
                            page.components.add(groupHeaderBand3);

                            // Add stitext
                            var textGroupHeader3 = new Stimulsoft.Report.Components.StiText();
                            textGroupHeader3.clientRectangle = textGroupHeader1.clientRectangle;
                            textGroupHeader3.font = textGroupHeader1.font;
                            textGroupHeader3.horAlignment = textGroupHeader1.horAlignment;
                            textGroupHeader3.vertAlignment = textGroupHeader1.vertAlignment;
                            const valueGroupHeader3 = data.groupingField[2].match(' ') == null ? `{data.${data.groupingField[2]}}` : `{data.[${data.groupingField[2]}]}`;
                            textGroupHeader3.text = `          ${data.groupingField[2]}: ${valueGroupHeader3}`;
                            textGroupHeader3.name = 'textGroupHeader3';
                            textGroupHeader3.border.side = textGroupHeader1.border.side;
                            groupHeaderBand3.components.add(textGroupHeader3);
                        }

                        // Create Databand
                        const dataBand = new Stimulsoft.Report.Components.StiDataBand();
                        dataBand.dataSourceName = dataReport.tableName;
                        dataBand.height = data.template[0].rowHeight / divColumnWidth;
                        dataBand.name = 'DataBand';
                        page.components.add(dataBand);
                        // Create Group Footer Band 3
                        if (data.template[0].reportGroupLevel > 2) {
                            var groupFooterBand3 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                            groupFooterBand3.dataSourceName = dataReport.tableName;
                            groupFooterBand3.height = dataBand.height;
                            groupFooterBand3.name = 'groupFooterBand3';
                            page.components.add(groupFooterBand3);
                        }
                        // Create Group Footer Band 2
                        if (data.template[0].reportGroupLevel > 1) {
                            var groupFooterBand2 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                            groupFooterBand2.dataSourceName = dataReport.tableName;
                            groupFooterBand2.height = dataBand.height;
                            groupFooterBand2.name = 'groupFooterBand2';
                            page.components.add(groupFooterBand2);
                        }
                        // Create Group Footer Band 1
                        if (data.template[0].reportGroupLevel > 0) {
                            var groupFooterBand1 = new Stimulsoft.Report.Components.StiGroupFooterBand();
                            groupFooterBand1.dataSourceName = dataReport.tableName;
                            groupFooterBand1.height = dataBand.height;
                            groupFooterBand1.name = 'groupFooterBand1';
                            page.components.add(groupFooterBand1);
                        }
                        // Create FooterBand
                        const footerBand = new Stimulsoft.Report.Components.StiFooterBand();
                        footerBand.height = data.template[0].rowHeight / divColumnWidth;
                        footerBand.name = 'FooterBand';
                        page.components.add(footerBand);

                        let pos = 0;
                        let columnWidth = 0;
                        let posFooter = 0;
                        let columnWidthFooter = 0;
                        const groupFooterBorderSide = (data.template[0].verticalBorder == '-1') ? Stimulsoft.Base.Drawing.StiBorderSides.All : Stimulsoft.Base.Drawing.StiBorderSides.None;
                        let isTextTotalFooter = false;
                        let nameIndex = 1;

                        for (const index in data.fieldData[0]) {
                            // ---------------------Header-------------------------------------------------------------------------------
                            if (pos < (pageWidth - (marginLeft + marginRight)) && index == data.fieldData[0].length - 1) { // Last column
                                columnWidth = (pageWidth - pos - (marginLeft + marginRight));
                            } else {
                                columnWidth = data.fieldData[4][index] / divColumnWidth;
                            }
                            const headerText = new Stimulsoft.Report.Components.StiText();
                            headerText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pos, 0, columnWidth, headerBand.height);
                            headerText.text = data.fieldData[0][index];
                            if (data.fieldData[9][index] == 0) {
                                headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                            } else if (data.fieldData[9][index] == 1) {
                                headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                            } else {
                                headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            }

                            if (data.template[0].verticalBorder == '-1') {
                                headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                            } else {
                                headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                            }

                            headerText.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            headerText.margins.top = 1;
                            headerText.margins.bottom = 1;
                            headerText.margins.left = 3;
                            headerText.margins.right = 3;
                            headerText.font = new Font(data.fieldData[11][index], data.fieldData[5][index]);
                            headerText.name = `HeaderText${nameIndex.toString()}`;
                            headerText.growToHeight = true;
                            headerText.wordWrap = true;
                            headerBand.components.add(headerText);

                            // ---------------------DataBand-------------------------------------------------------------------------------
                            const dataText = new Stimulsoft.Report.Components.StiText();
                            dataText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pos, 0, columnWidth, dataBand.height);
                            let dataTextValue = '';
                            if (data.fieldData[1][index] == '(Number)') {
                                dataTextValue = '{Line}';
                            } else if (data.fieldData[1][index] != '(EmptyField)') {
                                dataTextValue = data.fieldData[1][index].match(' ') == null ? `{${dataReport.tableName}.${data.fieldData[1][index]}}` : `{${dataReport.tableName}.[${data.fieldData[1][index]}]}`;
                                if (data.fieldData[2][index] >= 1 && data.fieldData[2][index] <= 4) { // Numeric
                                    dataText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiNumberFormatService(0, 3, ',', (data.fieldData[2][index] - 1), '.', 3, true, false, 0);
                                } else if (data.fieldData[2][index] >= 5 && data.fieldData[2][index] <= 14) { // DateTime
                                    dataText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiDateFormatService(data.fieldData[3][index], '');
                                }
                            }
                            dataText.text = dataTextValue;

                            if (data.fieldData[10][index] == 0) {
                                dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                            } else if (data.fieldData[10][index] == 1) {
                                dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                            } else {
                                dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                            }

                            if (data.template[0].verticalBorder == '-1' && data.template[0].horizontalBorder == '-1') {
                                dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                            } else if (data.template[0].horizontalBorder == '-1') {
                                dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                            } else if (data.template[0].verticalBorder == '-1') {
                                dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Left | Stimulsoft.Base.Drawing.StiBorderSides.Right;
                            } else {
                                dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                            }
                            dataText.font = new Font(data.fieldData[11][index], data.fieldData[6][index]);
                            dataText.margins.top = 1;
                            dataText.margins.bottom = 1;
                            dataText.margins.left = 3;
                            dataText.margins.right = 3;
                            dataText.name = `DataText${nameIndex.toString()}`;
                            dataText.growToHeight = true;
                            dataText.wordWrap = true;
                            dataBand.components.add(dataText);

                            // ---------------------Footer-------------------------------------------------------------------------------
                            if (data.template[0].showFooter == '-1') {
                                columnWidthFooter += columnWidth;
                                if (data.fieldData[12][index] == 1) {
                                    isTextTotalFooter = true;
                                }
                                if (data.fieldData[12][index] > 1 || index == data.fieldData[0].length - 1) {
                                    // Footer Component
                                    const footerText = new Stimulsoft.Report.Components.StiText();
                                    let footerTextValue = '';
                                    if (data.fieldData[12][index] > 1) {
                                        if (data.fieldData[12][index] == 2) {
                                            footerText.textFormat = new Stimulsoft.Report.Components.TextFormats.StiNumberFormatService(0, 3, ',', (data.fieldData[2][index] - 1), '.', 3, true, false, 0);
                                            footerTextValue = data.fieldData[1][index].match(' ') == null ? `{Sum(DataBand, data.${data.fieldData[1][index]})}` : `{Sum(DataBand, data.[${data.fieldData[1][index]}])}`;
                                        } else if (data.fieldData[12][index] == 3) {
                                            footerTextValue = '{Count()}';
                                        } else if (data.fieldData[12][index] == 4) {
                                            footerTextValue = data.fieldData[1][index].match(' ') == null ? `{CountIf(DataBand, data.${data.fieldData[1][index]} != "")}` : `{CountIf(DataBand, data.[${data.fieldData[1][index]}] != "")}`;
                                        } else if (data.fieldData[12][index] == 5) {
                                            footerTextValue = data.fieldData[1][index].match(' ') == null ? `{CountIf(DataBand, data.${data.fieldData[1][index]} != 0)}` : `{CountIf(DataBand, data.[${data.fieldData[1][index]}] != 0)}`;
                                        }
                                    }

                                    if (data.fieldData[10][index] == 0) {
                                        footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                                    } else if (data.fieldData[10][index] == 1) {
                                        footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                                    } else {
                                        footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                    }
                                    if (data.template[0].verticalBorder == '-1') {
                                        footerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
                                    } else {
                                        footerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.Bottom | Stimulsoft.Base.Drawing.StiBorderSides.Top;
                                    }
                                    footerText.vertAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                    footerText.font = new Font(data.fieldData[11][index], data.fieldData[6][index], Stimulsoft.System.Drawing.FontStyle.Bold);
                                    footerText.text = footerTextValue;
                                    footerText.margins.top = 1;
                                    footerText.margins.bottom = 1;
                                    footerText.margins.left = 3;
                                    footerText.margins.right = 3;
                                    footerText.name = `FooterText${nameIndex.toString()}`;
                                    footerText.growToHeight = true;
                                    footerText.wordWrap = true;

                                    // Setup Text Total & Sub Total
                                    if (isTextTotalFooter) {
                                        isTextTotalFooter = false;
                                        // Footer Total Text
                                        const footerTextTotal = new Stimulsoft.Report.Components.StiText();
                                        footerTextTotal.border.side = footerText.border.side;
                                        footerTextTotal.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(posFooter, 0, (columnWidthFooter - columnWidth), footerBand.height);
                                        footerTextTotal.font = footerText.font;
                                        footerTextTotal.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                        footerTextTotal.vertAlignment = footerText.vertAlignment;
                                        footerTextTotal.growToHeight = true;
                                        footerTextTotal.wordWrap = true;
                                        footerTextTotal.margins.top = footerText.margins.top;
                                        footerTextTotal.margins.bottom = footerText.margins.bottom;
                                        footerTextTotal.margins.left = footerText.margins.left;
                                        footerTextTotal.margins.right = footerText.margins.right;
                                        footerTextTotal.text = 'Total';
                                        footerTextTotal.name = `FooterTextTotal${nameIndex.toString()}`;
                                        footerBand.components.add(footerTextTotal);

                                        // Group Footer Sub Total 3
                                        if (data.template[0].reportGroupLevel > 2) {
                                            const groupFooterTextTotal3 = new Stimulsoft.Report.Components.StiText();
                                            groupFooterTextTotal3.border.side = groupFooterBorderSide;
                                            groupFooterTextTotal3.clientRectangle = footerTextTotal.clientRectangle;
                                            groupFooterTextTotal3.font = footerText.font;
                                            groupFooterTextTotal3.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                            groupFooterTextTotal3.vertAlignment = footerTextTotal.vertAlignment;
                                            groupFooterTextTotal3.growToHeight = true;
                                            groupFooterTextTotal3.wordWrap = true;
                                            groupFooterTextTotal3.margins.top = footerText.margins.top;
                                            groupFooterTextTotal3.margins.bottom = footerText.margins.bottom;
                                            groupFooterTextTotal3.margins.left = footerText.margins.left;
                                            groupFooterTextTotal3.margins.right = footerText.margins.right;
                                            groupFooterTextTotal3.text = `Sub Total(${textGroupHeader3.text})`;
                                            groupFooterTextTotal3.name = `groupFooterTextTotal3${nameIndex.toString()}`;
                                            groupFooterBand3.components.add(groupFooterTextTotal3);
                                        }
                                        // Group Footer Sub Total 2
                                        if (data.template[0].reportGroupLevel > 1) {
                                            const groupFooterTextTotal2 = new Stimulsoft.Report.Components.StiText();
                                            groupFooterTextTotal2.border.side = groupFooterBorderSide;
                                            groupFooterTextTotal2.clientRectangle = footerTextTotal.clientRectangle;
                                            groupFooterTextTotal2.font = footerText.font;
                                            groupFooterTextTotal2.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                            groupFooterTextTotal2.vertAlignment = footerTextTotal.vertAlignment;
                                            groupFooterTextTotal2.growToHeight = true;
                                            groupFooterTextTotal2.wordWrap = true;
                                            groupFooterTextTotal2.margins.top = footerText.margins.top;
                                            groupFooterTextTotal2.margins.bottom = footerText.margins.bottom;
                                            groupFooterTextTotal2.margins.left = footerText.margins.left;
                                            groupFooterTextTotal2.margins.right = footerText.margins.right;
                                            groupFooterTextTotal2.text = `Sub Total(${textGroupHeader2.text})`;
                                            groupFooterTextTotal2.name = `groupFooterTextTotal2${nameIndex.toString()}`;
                                            groupFooterBand2.components.add(groupFooterTextTotal2);
                                        }
                                        // Group Footer Sub Total 1
                                        if (data.template[0].reportGroupLevel > 0) {
                                            const groupFooterTextTotal1 = new Stimulsoft.Report.Components.StiText();
                                            groupFooterTextTotal1.border.side = groupFooterBorderSide;
                                            groupFooterTextTotal1.clientRectangle = footerTextTotal.clientRectangle;
                                            groupFooterTextTotal1.font = footerText.font;
                                            groupFooterTextTotal1.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
                                            groupFooterTextTotal1.vertAlignment = footerTextTotal.vertAlignment;
                                            groupFooterTextTotal1.growToHeight = true;
                                            groupFooterTextTotal1.wordWrap = true;
                                            groupFooterTextTotal1.margins.top = footerText.margins.top;
                                            groupFooterTextTotal1.margins.bottom = footerText.margins.bottom;
                                            groupFooterTextTotal1.margins.left = footerText.margins.left;
                                            groupFooterTextTotal1.margins.right = footerText.margins.right;
                                            groupFooterTextTotal1.text = `Sub Total(${textGroupHeader1.text})`;
                                            groupFooterTextTotal1.name = `groupFooterTextTotal1${nameIndex.toString()}`;
                                            groupFooterBand1.components.add(groupFooterTextTotal1);
                                        }

                                        posFooter += (columnWidthFooter - columnWidth);
                                        columnWidthFooter = columnWidth;
                                    }

                                    // Add Footer (Wait position left & width from text total, position must be below from Text)
                                    footerText.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(posFooter, 0, columnWidthFooter, footerBand.height);
                                    footerBand.components.add(footerText);

                                    // Group Footer 3
                                    if (data.template[0].reportGroupLevel > 2) {
                                        const textGroupFooter3 = new Stimulsoft.Report.Components.StiText();
                                        textGroupFooter3.clientRectangle = footerText.clientRectangle;
                                        textGroupFooter3.font = footerText.font;
                                        textGroupFooter3.horAlignment = footerText.horAlignment;
                                        textGroupFooter3.vertAlignment = footerText.vertAlignment;
                                        textGroupFooter3.text = footerText.text;
                                        textGroupFooter3.name = `textGroupFooter3${nameIndex.toString()}`;
                                        textGroupFooter3.margins.top = footerText.margins.top;
                                        textGroupFooter3.margins.bottom = footerText.margins.bottom;
                                        textGroupFooter3.margins.left = footerText.margins.left;
                                        textGroupFooter3.margins.right = footerText.margins.right;
                                        textGroupFooter3.textFormat = dataText.textFormat;
                                        textGroupFooter3.border.side = groupFooterBorderSide;
                                        groupFooterBand3.components.add(textGroupFooter3);
                                    }

                                    // Group Footer 2
                                    if (data.template[0].reportGroupLevel > 1) {
                                        const textGroupFooter2 = new Stimulsoft.Report.Components.StiText();
                                        textGroupFooter2.clientRectangle = footerText.clientRectangle;
                                        textGroupFooter2.font = footerText.font;
                                        textGroupFooter2.horAlignment = footerText.horAlignment;
                                        textGroupFooter2.vertAlignment = footerText.vertAlignment;
                                        textGroupFooter2.text = footerText.text;
                                        textGroupFooter2.name = `textGroupFooter2${nameIndex.toString()}`;
                                        textGroupFooter2.margins.top = footerText.margins.top;
                                        textGroupFooter2.margins.bottom = footerText.margins.bottom;
                                        textGroupFooter2.margins.left = footerText.margins.left;
                                        textGroupFooter2.margins.right = footerText.margins.right;
                                        textGroupFooter2.textFormat = dataText.textFormat;
                                        textGroupFooter2.border.side = groupFooterBorderSide;
                                        groupFooterBand2.components.add(textGroupFooter2);
                                    }

                                    // Group Footer 1
                                    if (data.template[0].reportGroupLevel > 0) {
                                        const textGroupFooter1 = new Stimulsoft.Report.Components.StiText();
                                        textGroupFooter1.clientRectangle = footerText.clientRectangle;
                                        textGroupFooter1.font = footerText.font;
                                        textGroupFooter1.horAlignment = footerText.horAlignment;
                                        textGroupFooter1.vertAlignment = footerText.vertAlignment;
                                        textGroupFooter1.text = footerText.text;
                                        textGroupFooter1.name = `textGroupFooter1${nameIndex.toString()}`;
                                        textGroupFooter1.margins.top = footerText.margins.top;
                                        textGroupFooter1.margins.bottom = footerText.margins.bottom;
                                        textGroupFooter1.margins.left = footerText.margins.left;
                                        textGroupFooter1.margins.right = footerText.margins.right;
                                        textGroupFooter1.textFormat = dataText.textFormat;
                                        textGroupFooter1.border.side = groupFooterBorderSide;
                                        groupFooterBand1.components.add(textGroupFooter1);
                                    }

                                    posFooter += columnWidthFooter;
                                    columnWidthFooter = 0;
                                }
                            }

                            pos += columnWidth;
                            nameIndex++;
                        }

                        // Create Page Footer Band
                        const pageFooterBand = new Stimulsoft.Report.Components.StiPageFooterBand();
                        pageFooterBand.height = data.template[0].rowHeight / divColumnWidth;
                        pageFooterBand.name = 'PageFooterBand';
                        page.components.add(pageFooterBand);

                        // Create stiText Printed page footer band
                        const pageFooterPrinter = new Stimulsoft.Report.Components.StiText();
                        pageFooterPrinter.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(0, 0, pageWidthSizeHalf, 0.6);
                        pageFooterPrinter.font = new Font('Arial', 8);
                        pageFooterPrinter.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Left;
                        pageFooterPrinter.text = 'Printed: {Format("{0:dd/MM/yyyy hh:mm:ss}", Today)}';
                        pageFooterPrinter.name = 'pageFooterPrinter';
                        pageFooterPrinter.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        pageFooterBand.components.add(pageFooterPrinter);

                        // Create Stitext Page count Page Footer band
                        const pageFooterPages = new Stimulsoft.Report.Components.StiText();
                        pageFooterPages.clientRectangle = new Stimulsoft.Base.Drawing.RectangleD(pageWidthSizeHalf, 0, pageWidthSizeHalf, 0.6);
                        pageFooterPages.font = new Font('Arial', 8);
                        pageFooterPages.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
                        pageFooterPages.text = 'page {PageNumber} of {TotalPageCount}';
                        pageFooterPages.name = 'pageFooterPages';
                        pageFooterPages.border.side = Stimulsoft.Base.Drawing.StiBorderSides.None;
                        pageFooterBand.components.add(pageFooterPages);

                        // Render Report
                        viewer.report = report;
                        viewer.renderHtml('report-viewer');
                    } else {
                        $dialog.reportDataNotFound();
                    }
                } else {
                    report.loadFile(reportDirectory);
                    if(report.script == '') {
                        return $dialog.reportTemplateNotFound();
                    }

                    const { data } = await reportResource.preview(params);
                    if (data.data) {
                        if (params.reportId == this.global.reportID.folio) {
                            if (data.other.transaction == null || data.other.transaction == '') {
                                $dialog.reportDataNotFound();
                                return;
                            }
                        } else if(data.data == null || data.data == [] || data.data == '') {
                            $dialog.reportDataNotFound();
                            return;
                        }
                        dataSet.readJson(data);
                        report.regData(dataSet.dataSetName, '', dataSet);
                        viewer.report = report;
                        viewer.renderHtml('report-viewer');
                    } else {
                        $dialog.reportDataNotFound();
                    }
                }
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            } catch (error) {
                $alert.errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');
            }
        },

        // Preview report access
        async getPreviewReportAccess() {
            const { data } = await userSettingResource.getOtherAccess({ code: this.userID });
            if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                this.exportReportAccess = data.otherAccess[this.global.otherAccessOrder.exportReport];
                this.setExportReportAccess(this.exportReportAccess);
            }
        },

        setExportReportAccess(access) {
            this.global.stimulsoftReportSetting.showExportToPdf = access == 1;
            this.global.stimulsoftReportSetting.showExportToDocument = access == 1;
            this.global.stimulsoftReportSetting.showExportToHtml = access == 1;
            this.global.stimulsoftReportSetting.showExportToHtml5 = access == 1;
            this.global.stimulsoftReportSetting.showExportToExcel2007 = access == 1;
            this.global.stimulsoftReportSetting.showSaveButton = access == 1;
            this.global.stimulsoftReportSetting.showSendEmailButton = access == 1;
        },
    },
    async mounted() {
        // Setup Licenci Stimulsoft
        Stimulsoft.Base.StiLicense.key = "6vJhGtLLLz2GNviWmUTrhSqnOItdDwjBylQzQcAOiHkcgIvwL0jnpsDqRpWg5FI5kt2G7A0tYIcUygBh1sPs7plofUOqPB1a4HBIXJB621mau2oiAIj+ysU7gKUXfjn/D5BocmduNB+ZMiDGPxFrAp3PoD0nYNkkWh8r7gBZ1v/JZSXGE3bQDrCQCNSy6mgby+iFAMV8/PuZ1z77U+Xz3fkpbm6MYQXYp3cQooLGLUti7k1TFWrnawT0iEEDJ2iRcU9wLqn2g9UiWesEZtKwI/UmEI2T7nv5NbgV+CHguu6QU4WWzFpIgW+3LUnKCT/vCDY+ymzgycw9A9+HFSzARiPzgOaAuQYrFDpzhXV+ZeX31AxWlnzjDWqpfluygSNPtGul5gyNt2CEoJD1Yom0VN9fvRonYsMsimkFFx2AwyVpPcs+JfVBtpPbTcZscnzUdmiIvxv8Gcin6sNSibM6in/uUKFt3bVgW/XeMYa7MLGF53kvBSwi78poUDigA2n12SmghLR0AHxyEDIgZGOTbNI33GWu7ZsPBeUdGu55R8w=";

        const data = this.$route.query;
        const { template } = data;
        await this.getPreviewReportAccess();
        if (data.reportId != undefined && data.reportId != null) {
            if (template != undefined && data.reportId != null) {
                this.print(data, template);
            } else {
                this.print(data, '');
            }
        }
    },
    computed: {
        userID() { return this.$store.state.auth.accountCode; },
    },
};
</script>
