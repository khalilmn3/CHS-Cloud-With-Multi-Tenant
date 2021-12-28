(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_receipt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/receipt */ "./resources/js/src/api/back-office/receipt.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_action_grid_receipt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action_grid_receipt */ "./resources/js/src/views/pages/back-office/components/action_grid_receipt.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/back-office/components/FilterHeader.vue");
/* harmony import */ var _components_ReceiptForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ReceiptForm */ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var receiptResource = new _api_back_office_receipt__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BudgetStatistic',
  props: {
    formType: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_11__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    ReceiptForm: _components_ReceiptForm__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: 0,
      searchFilterData: [{
        text: this.$t('common.filter.number'),
        value: 0
      }, {
        text: this.$t('common.filter.receiveFrom'),
        value: 1
      }, {
        text: this.$t('common.filter.forPayment'),
        value: 2
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: 3
      }],
      // query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0
      },
      // Ag-Grid
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs2: null,
      rowData2: null,
      gridOptions2: null,
      gridApi2: null,
      columnApi2: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      // Parameter From Child
      idData: '',
      paramsData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      // Pop Up
      mainPopUp: false,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      // data error handling from laravel validation//
      dbErrors: {}
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions2 = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'index',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 110
    }, {
      headerName: this.$t('receipt.number'),
      field: 'number',
      width: 125
    }, {
      headerName: this.$t('receipt.receiveFrom'),
      field: 'receive_from',
      width: 200
    }, {
      headerName: this.$t('receipt.amount'),
      field: 'amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.issuedDate'),
      field: 'issued_date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatDate"]
    }, {
      headerName: this.$t('receipt.forPayment'),
      field: 'for_payment',
      width: 200
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 120
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid_receipt__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.rowGroupPanelShow = 'always';
    this.statusBar = {
      statusPanels: [{
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left'
      }, {
        statusPanel: 'agTotalRowCountComponent',
        align: 'center'
      }, {
        statusPanel: 'agFilteredRowCountComponent'
      }, {
        statusPanel: 'agSelectedRowCountComponent'
      }, {
        statusPanel: 'agAggregationComponent'
      }]
    };
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
    this.limitPageSize = this.global.limitDefaultPageSize;
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    // ------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDelete(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.printReceipt'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintReceipt(_this.paramsData);
        }
      }, {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 2);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi.forEachNode(function (node) {
          if (node.data) {
            if (node.data.id_log == vm.paramsData.id_log) {
              node.setSelected(true, true);
            }
          }
        });
      }
    },
    handleRowRightClicked2: function handleRowRightClicked2() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi.forEachNode(function (node) {
          if (node.data) {
            if (node.data.ref_number == vm.paramsData.ref_number) {
              node.setSelected(true, true);
            }
          }
        });
      }
    },
    handleRowDobleClicked: function handleRowDobleClicked(params) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this2.paramsData = _context.sent;

                _this2.showModal(_this2.paramsData, _this2.global.modeData.edit);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.search = search;
                selectedNodes = _this3.gridApi != null ? _this3.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return _this3.getData(search);

              case 5:
                setTimeout(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'id_log');
                }, 500);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getData: function getData(params) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$receiptResourc, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.$loadingIndicator(_this4);

                _context3.next = 4;
                return receiptResource.list(params);

              case 4:
                _yield$receiptResourc = _context3.sent;
                data = _yield$receiptResourc.data;
                _this4.rowData = data;
                _this4.rowData2 = [];

                _this4.$closeLoadingIndicator(_this4);

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);

                _this4.$closeLoadingIndicator(_this4);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    showModal: function showModal(idData, modeData) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.$refs.receiptForm.showModal(idData, modeData);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    handleDelete: function handleDelete(params) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmationDelete(this, 'deleteData', params);
    },
    // PRINT
    handlePrint: function handlePrint(id, reportDirectory) {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.receipt, "&number=").concat(id, "&template=").concat(reportDirectory)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt(paramsData) {
      if (paramsData !== undefined) {
        this.handlePrint(paramsData.number, this.global.stimulsoftReportFileDirectory.receipt);
      }
    },
    deleteData: function deleteData(params) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$receiptResourc2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                _this6.$loadingIndicator(_this6);

                _context5.next = 4;
                return receiptResource["delete"]({
                  number: params.number,
                  user_id: _this6.global.userInfo.code
                });

              case 4:
                _yield$receiptResourc2 = _context5.sent;
                data = _yield$receiptResourc2.data;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].deleteAlertSuccess();

                _this6.refreshData(_this6.search);

                _context5.next = 14;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);

                _this6.$closeLoadingIndicator(_this6);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorDeleteDataAlert();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 10]]);
      }))();
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mainPopUp) {
      this.mainPopUp = false;
      next(false);
    } else {
      next();
    }
  },
  // ------------------end need setting manual for crud-----------------//
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.global.paginationDataPerPage);
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_receipt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/receipt */ "./resources/js/src/api/back-office/receipt.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var receiptResource = new _api_back_office_receipt__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BudgetForm',
  props: {
    titleForm: String,
    formType: {
      required: true
    }
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      dataTracking: null,
      // getRowNodeId: null,
      // Parameter From Child
      idData: '',
      paramsData: '',
      paramsDataEditor: '',
      updateEditor: false,
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataEditor: 0,
      modeDataValueTracking: 0,
      // Pop Up
      mainPopUp: false,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      dlAccount: [],
      dlSubDepartment: [],
      period: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040],
      // data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false,
      mainTableName: ''
    };
  },
  methods: {
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$emit('refreshData');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    resetData: function resetData() {
      this.vModel = {
        number: '',
        receive_from: '',
        for_payment: '',
        amount: 0,
        issued_date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_5__["formatDateDatabase"])(this.auditDate),
        user_id: this.global.userInfo.code
      };
      this.dlAccount = [];
      this.dlSubDepartment = [];
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
      this.modeDataEditor = this.global.modeData.insert;
    },
    showModal: function showModal(idData, modeData) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.resetData(_this2.search);

                _this2.idData = idData.id_log;
                _this2.paramsData = idData;
                _this2.modeDataValue = modeData;

                if (!(modeData == _this2.global.modeData.edit)) {
                  _context2.next = 11;
                  break;
                }

                _this2.$loadingIndicator(_this2);

                _context2.next = 8;
                return _this2.editData(idData);

              case 8:
                _this2.$closeLoadingIndicator(_this2);

                _context2.next = 23;
                break;

              case 11:
                if (!(modeData == _this2.global.modeData.tracking)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 14;
                return _this2.trackingData(idData);

              case 14:
                _this2.mainPopUp = true;
                _context2.next = 23;
                break;

              case 17:
                if (!(modeData == _this2.global.modeData.insert)) {
                  _context2.next = 23;
                  break;
                }

                _this2.$loadingIndicator(_this2);

                _context2.next = 21;
                return _this2.getReceiptNumber();

              case 21:
                _this2.$closeLoadingIndicator(_this2);

                _this2.mainPopUp = true;

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveData: function saveData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this3.$validator.validateAll('information').then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!result) {
                              _context3.next = 12;
                              break;
                            }

                            if (!(_this3.modeDataValue == 1)) {
                              _context3.next = 8;
                              break;
                            }

                            _this3.$vs.loading({
                              container: '#button-save-main',
                              scale: _this3.global.scaleLoadingButton
                            });

                            _context3.next = 5;
                            return _this3.updateData();

                          case 5:
                            _this3.$vs.loading.close('#button-save-main>.con-vs-loading');

                            _context3.next = 12;
                            break;

                          case 8:
                            _this3.$vs.loading({
                              container: '#button-save-main',
                              scale: _this3.global.scaleLoadingButton
                            });

                            _context3.next = 11;
                            return _this3.insertData();

                          case 11:
                            _this3.$vs.loading.close('#button-save-main>.con-vs-loading');

                          case 12:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    insertData: function insertData() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$_this4$apiReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this4.apiResource.store(_this4.vModel);

              case 3:
                _yield$_this4$apiReso = _context5.sent;
                data = _yield$_this4$apiReso.data;

                if (data == 0) {
                  _this4.mainPopUp = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this4.$t("responseStatus.budget.".concat(data)));
                }

                _this4.btnSaveDisabled = false;
                _context5.next = 14;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                _this4.btnSaveDisabled = false;

                _this4.$closeLoadingIndicator(_this4);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }))();
    },
    updateData: function updateData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$_this5$apiReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this5.apiResource.update(_this5.vModel);

              case 3:
                _yield$_this5$apiReso = _context6.sent;
                data = _yield$_this5$apiReso.data;

                if (data == 0) {
                  _this5.mainPopUp = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this5.$t("responseStatus.budget.".concat(data)));
                }

                _this5.btnSaveDisabled = true;
                _context6.next = 14;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                _this5.btnSaveDisabled = false;

                _this5.$closeLoadingIndicator(_this5);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    editData: function editData(params) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$_this6$apiReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this6.apiResource.get(params.number);

              case 3:
                _yield$_this6$apiReso = _context7.sent;
                data = _yield$_this6$apiReso.data;
                _this6.vModel = data;
                _this6.mainPopUp = true;
                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    getReceiptNumber: function getReceiptNumber() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$_this7$apiReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _this7.apiResource.getReceiptNumber();

              case 2:
                _yield$_this7$apiReso = _context8.sent;
                data = _yield$_this7$apiReso.data;
                _this7.vModel.number = data;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this8.global.tableName.receipt
                };

                _this8.$loadingIndicator(_this8);

                _context9.prev = 2;
                _context9.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context9.sent;
                data = _yield$trackingDataRe.data;
                _this8.dataTracking = data.modelGrid;
                _context9.next = 13;
                break;

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();

              case 13:
                _this8.$closeLoadingIndicator(_this8);

              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[2, 10]]);
      }))();
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mainPopUp) {
      this.mainPopUp = false;
      next(false);
    } else {
      next();
    }
  },
  // ------------------end need setting manual for crud-----------------//
  mounted: function mounted() {
    this.apiResource = receiptResource;
  },
  watch: {
    mainPopUp: function mainPopUp() {
      if (!this.mainPopUp) {
        this.refreshData();
      }
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation-header", {
        attrs: { insertButton: "" },
        on: {
          showModal: _vm.showModal,
          refreshData: function (val) {
            _vm.limitPageSize = parseFloat(val)
            _vm.$refs.filterHeader.onRefreshData(val)
          },
        },
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          formType: _vm.formType,
          limitPageSize: _vm.limitPageSize,
          searchOption: _vm.searchFilterData,
          searchDefault: _vm.vModelDefaultSearchData,
        },
        on: { search: _vm.refreshData },
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container",
          attrs: { id: "main-container" },
        },
        [
          _c(
            "vs-col",
            { staticClass: "w-full", attrs: { "vs-type": "flex" } },
            [
              _c("ag-grid-vue", {
                class: _vm.global.themeAgGrid,
                style: _vm.global.styleAgGridFrame,
                attrs: {
                  pagination: "true",
                  paginationPageSize: _vm.paginationPageSize,
                  suppressDragLeaveHidesColumns: true,
                  suppressMakeColumnVisibleAfterUnGroup: true,
                  rowGroupPanelShow: _vm.rowGroupPanelShow,
                  enableRangeSelection: true,
                  statusBar: _vm.statusBar,
                  gridOptions: _vm.gridOptions,
                  context: _vm.context,
                  columnDefs: _vm.columnDefs,
                  frameworkComponents: _vm.frameworkComponents,
                  enableCellChangeFlash: true,
                  rowSelection: _vm.rowSelection,
                  rowData: _vm.rowData,
                  defaultColDef: _vm.global.defColDef,
                  getContextMenuItems: _vm.getContextMenu,
                },
                on: {
                  "grid-ready": _vm.onGridReady,
                  cellContextMenu: _vm.handleRowRightClicked,
                  rowDoubleClicked: _vm.handleRowDobleClicked,
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("ReceiptForm", {
        ref: "receiptForm",
        attrs: { titleForm: _vm.$t("receipt.receipt"), formType: _vm.formType },
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: 600,
          active: _vm.mainPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
          textButton1: _vm.$t("button.save"),
        },
        on: {
          button1: function ($event) {
            return _vm.saveData()
          },
          close: function (val) {
            return (_vm.mainPopUp = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _vm.modeDataValue == _vm.global.modeData.tracking
                  ? _c(
                      "div",
                      [
                        _c("tracking", {
                          attrs: {
                            idData: _vm.idData,
                            rowData: _vm.dataTracking,
                            theData: _vm.dataTracking,
                            tableName: _vm.mainTableName,
                          },
                        }),
                      ],
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c(
                          "vs-row",
                          {
                            attrs: {
                              "vs-type": "flex",
                              "vs-justify": "space-around",
                            },
                          },
                          [
                            _c(
                              "vs-col",
                              { staticClass: "w-full" },
                              [
                                _c(
                                  "vx-card",
                                  { staticStyle: { height: "100%" } },
                                  [
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("vs-row", [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(_vm.$t("receipt.number"))
                                            ),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-row",
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full lg:w-1/3",
                                              attrs: {
                                                disabled: "",
                                                type: "text",
                                                description: _vm._f("toString")(
                                                  _vm.errors.first(
                                                    "folio.remark"
                                                  ) || _vm.dbErrors.remark
                                                ),
                                                name: "remark",
                                                "data-vv-scope": "folio",
                                              },
                                              model: {
                                                value: _vm.vModel.number,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "number",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.number",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("vs-row", [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("receipt.receiveFrom")
                                              )
                                            ),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-row",
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                type: "text",
                                                description: _vm._f("toString")(
                                                  _vm.errors.first(
                                                    "folio.remark"
                                                  ) || _vm.dbErrors.remark
                                                ),
                                                name: "remark",
                                                "data-vv-scope": "folio",
                                              },
                                              model: {
                                                value: _vm.vModel.receive_from,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "receive_from",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vModel.receive_from",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("vs-row", [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(_vm.$t("receipt.amount"))
                                            ),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-row",
                                          [
                                            _c("input-number", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full lg:w-1/2",
                                              attrs: {
                                                showZeroNumber: "",
                                                type: "text",
                                                description: _vm._f("toString")(
                                                  _vm.errors.first(
                                                    "folio.amount"
                                                  ) || _vm.dbErrors.amount
                                                ),
                                                name: "amount",
                                                "data-vv-scope": "folio",
                                              },
                                              model: {
                                                value: _vm.vModel.amount,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "amount",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.amount",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("receipt.issuedDate")
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              {
                                                staticClass: "wrap-form-select",
                                              },
                                              [
                                                _c("date-picker", {
                                                  staticClass: "w-full",
                                                  attrs: {
                                                    type: "date",
                                                    confirm: "",
                                                    "confirm-text": "Ok",
                                                    lang: _vm.$t("lang"),
                                                    "value-type": "YYYY-MM-DD",
                                                    format: "DD/MM/YYYY",
                                                    label: "name",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.issued_date,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "issued_date",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.issued_date",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("vs-row", [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("receipt.forPayment")
                                              )
                                            ),
                                          ]),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "vs-row",
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                type: "text",
                                                description: _vm._f("toString")(
                                                  _vm.errors.first(
                                                    "folio.remark"
                                                  ) || _vm.dbErrors.remark
                                                ),
                                                name: "remark",
                                                "data-vv-scope": "folio",
                                              },
                                              model: {
                                                value: _vm.vModel.for_payment,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "for_payment",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vModel.for_payment",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/back-office/receipt.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/api/back-office/receipt.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReceiptResource; });
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resource */ "./resources/js/src/api/resource.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./resources/js/src/utils/request.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var uri = 'receipt';

var ReceiptResource = /*#__PURE__*/function (_Resource) {
  _inherits(ReceiptResource, _Resource);

  var _super = _createSuper(ReceiptResource);

  function ReceiptResource() {
    _classCallCheck(this, ReceiptResource);

    return _super.call(this, uri);
  }

  _createClass(ReceiptResource, [{
    key: "dataLookup",
    value: function dataLookup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/datalookup"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "getReceiptNumber",
    value: function getReceiptNumber(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/number"),
        method: 'get'
      });
    }
  }]);

  return ReceiptResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/Receipt.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/Receipt.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Receipt.vue?vue&type=template&id=04203df4& */ "./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4&");
/* harmony import */ var _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Receipt.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/Receipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Receipt.vue?vue&type=template&id=04203df4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/Receipt.vue?vue&type=template&id=04203df4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Receipt_vue_vue_type_template_id_04203df4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ReceiptForm.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReceiptForm.vue?vue&type=template&id=311d00f6& */ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6&");
/* harmony import */ var _ReceiptForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReceiptForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReceiptForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/components/ReceiptForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReceiptForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReceiptForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReceiptForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReceiptForm.vue?vue&type=template&id=311d00f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ReceiptForm.vue?vue&type=template&id=311d00f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReceiptForm_vue_vue_type_template_id_311d00f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/action_grid_receipt.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/action_grid_receipt.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"handlePrint\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>{{ $t('common.menu.printReceipt') }}</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\">\n                        <vs-button @click=\"openAlert()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    handlePrint: function handlePrint() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintReceipt(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    activeDeactive: function activeDeactive() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleActiveDeactive(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    openAlert: function openAlert() {
      if (this.params.data !== undefined) {
        this.openConfirm();
      } else {
        this.openUndefinedAlert();
      }
    },
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('button.close')
      });
    },
    openConfirm: function openConfirm() {
      var _this = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          return _this.params.context.componentParent.deleteData(_this.params.data);
        }
      });
    },
    mounted: function mounted() {}
  }
}));

/***/ })

}]);