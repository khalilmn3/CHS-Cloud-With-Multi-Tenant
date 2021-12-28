(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_arCityLedger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/arCityLedger */ "./resources/js/src/api/back-office/arCityLedger.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/back-office/components/action_grid.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_print */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_print.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/back-office/components/FilterHeader.vue");
/* harmony import */ var _components_ARCityLedgerForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ARCityLedgerForm */ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue");


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













var arCityLedgerResource = new _api_back_office_arCityLedger__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ARCityLedgerInvoice',
  props: {
    formType: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    'ar-city-ledger-form': _components_ARCityLedgerForm__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: 0,
      searchFilterData: [{
        text: this.$t('common.filter.number'),
        value: 0
      }, {
        text: this.$t('common.filter.company'),
        value: 1
      }, {
        text: this.$t('common.filter.contactPerson'),
        value: 2
      }, {
        text: this.$t('common.filter.address'),
        value: 3
      }, {
        text: this.$t('common.filter.phone'),
        value: 4
      }, {
        text: this.$t('common.filter.fax'),
        value: 5
      }, {
        text: this.$t('common.filter.remark'),
        value: 6
      }, {
        text: this.$t('common.filter.refNumber'),
        value: 7
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: 8
      }],
      // query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0
      },
      // Ag-Grid-Invoice
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      // Ag-Grid-Payment
      columnDefs2: null,
      rowData2: [],
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
      // ------------------need setting manual for vPayment-----------------//
      vPayment: {},
      vCurrency: {},
      // data error handling from laravel validation//
      dbErrors: {},
      // Payment
      paramsData2: {},
      paymentPopUp: false,
      btnSaveDisabled: false,
      dataLookup: {}
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
      field: 'number',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: this.$t('arCityLedger.table.number'),
      field: 'number',
      width: 110
    }, {
      headerName: this.$t('arCityLedger.table.issuedDate'),
      field: 'issued_date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.dueDate'),
      field: 'due_date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.company'),
      field: 'company',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.totalAmount'),
      field: 'TotalAmount',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.totalPaid'),
      field: 'TotalPaid',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.outstanding'),
      field: 'OutStanding',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currency'),
      field: 'default_currency_code',
      width: 70
    }, {
      headerName: this.$t('arCityLedger.table.totalAmountForeign'),
      field: 'TotalAmountForeign',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.totalPaidForeign'),
      field: 'TotalPaidForeign',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.outstandingForeign'),
      field: 'OutStandingForeign',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currencyForeign'),
      field: 'currency_code',
      width: 75
    }, {
      headerName: this.$t('arCityLedger.table.contactPerson'),
      field: 'full_name',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.address'),
      field: 'Address',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.phone'),
      field: 'phone',
      width: 150
    }, {
      headerName: this.$t('arCityLedger.table.fax'),
      field: 'fax',
      width: 150
    }, {
      headerName: this.$t('arCityLedger.table.remark'),
      field: 'remark',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.refNumber'),
      field: 'ref_number',
      width: 110
    }, {
      headerName: this.$t('arCityLedger.table.printCount'),
      field: 'print_count',
      width: 105,
      cellStyle: {
        textAlign: 'right'
      }
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 150
    }];
    this.columnDefs2 = [{
      headerName: 'P',
      field: 'number',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGridReceipt',
      colId: 'params',
      width: 50
    }, {
      headerName: this.$t('arCityLedger.table.date'),
      field: 'date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.refNumber'),
      field: 'ref_number',
      width: 110
    }, {
      headerName: this.$t('arCityLedger.table.amount'),
      field: 'Amount',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currency'),
      field: 'default_currency_code',
      width: 70
    }, {
      headerName: this.$t('arCityLedger.table.amountForeign'),
      field: 'AmountForeign',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currencyForeign'),
      field: 'currency_code',
      width: 90
    }, {
      headerName: this.$t('arCityLedger.table.exchangeRate'),
      field: 'exchange_rate',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.amountActual'),
      field: 'amount_actual',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.plCurrency'),
      field: 'PLCurrency',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.exchangeRateActual'),
      field: 'exchange_rate_actual',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.remark'),
      field: 'remark',
      width: 150
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_4__["default"],
      actionGridReceipt: _views_pages_components_ag_grid_framework_action_grid_print__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        this.paramsData = {};
      }

      var result = [{
        name: this.$t('common.contextMenu.createInvoice'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.updateInvoice'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, _this.global.modeData.edit);
        }
      }, {
        name: this.$t('common.contextMenu.deleteInvoice'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.insertPayment'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.handleInsertPayment(_this.paramsData);
        }
      }, {
        name: this.$t('common.contextMenu.deletePayment'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeletePayment(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.printInvoice'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintInvoice(_this.paramsData, false);
        }
      }, {
        name: this.$t('common.contextMenu.printARStatement'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintInvoice(_this.paramsData, true);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('tracking_icon24'),
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
    getContextMenu2: function getContextMenu2(params) {
      var _this2 = this;

      var node = params.node;

      if (node) {
        this.paramsData2 = node.data;
      } else {
        this.paramsData2 = {};
      }

      var result = [{
        name: this.$t('common.contextMenu.printReceipt'),
        disabled: !this.paramsData2,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this2.handlePrintReceipt(_this2.paramsData2);
        }
      }];
      return result;
    },
    handleRowRightClicked2: function handleRowRightClicked2() {
      if (this.paramsData2) {
        var vm = this;
        vm.gridApi2.forEachNode(function (node) {
          if (node.data) {
            if (node.data.id_log == vm.paramsData2.id_log) {
              node.setSelected(true, true);
            }
          }
        });
      }
    },
    handleRowDobleClicked: function () {
      var _handleRowDobleClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(params) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                this.paramsData = _context.sent;
                this.showModal(this.paramsData, this.global.modeData.insert);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRowDobleClicked(_x) {
        return _handleRowDobleClicked.apply(this, arguments);
      }

      return handleRowDobleClicked;
    }(),
    // ------------------need setting manual for crud-----------------//
    refreshData: function () {
      var _refreshData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(search) {
        var _this3 = this;

        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.search = search;
                selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return this.getData(search);

              case 5:
                this.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'id_log');
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refreshData(_x2) {
        return _refreshData.apply(this, arguments);
      }

      return refreshData;
    }(),
    getData: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(params) {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.$loadingIndicator(this);
                _context3.next = 4;
                return arCityLedgerResource.getInvoiceList(params);

              case 4:
                _ref = _context3.sent;
                data = _ref.data;
                this.rowData = data;

                if (data.length === 0) {
                  this.rowData2 = [];
                }

                this.$closeLoadingIndicator(this);
                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                this.$closeLoadingIndicator(this);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 11]]);
      }));

      function getData(_x3) {
        return _getData.apply(this, arguments);
      }

      return getData;
    }(),
    showModal: function () {
      var _showModal = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(idData, modeData) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$refs.arCityLedgerForm.showModal(idData, modeData);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function showModal(_x4, _x5) {
        return _showModal.apply(this, arguments);
      }

      return showModal;
    }(),
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function () {
      var _deleteData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dataX) {
        var params, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.$loadingIndicator(this);
                params = {
                  number: dataX.number,
                  ref_number: dataX.ref_number,
                  user_id: this.global.userInfo.code
                };
                _context5.next = 5;
                return arCityLedgerResource["delete"](params);

              case 5:
                _ref2 = _context5.sent;
                data = _ref2.data;

                if (data == 0) {
                  this.refreshData(this.search);
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteAlertSuccess();
                } else if (data > 0) {
                  this.$closeLoadingIndicator(this);
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].information(this.$t("responseStatus.cityLedgerInvoice.".concat(data)));
                }

                _context5.next = 14;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                this.$closeLoadingIndicator(this);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorDeleteDataAlert();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function deleteData(_x6) {
        return _deleteData.apply(this, arguments);
      }

      return deleteData;
    }(),
    handleSelectionChange: function handleSelectionChange() {
      var params = this.gridApi.getSelectedRows();

      if (params.length > 0) {
        this.getInvoicePayment(params[0]);
      } else {
        this.rowData2 = [];
      }
    },
    // Payment
    getInvoicePayment: function () {
      var _getInvoicePayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(params) {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return arCityLedgerResource.getPayment({
                  number: params.number
                });

              case 2:
                _ref3 = _context6.sent;
                data = _ref3.data;
                this.rowData2 = data;

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInvoicePayment(_x7) {
        return _getInvoicePayment.apply(this, arguments);
      }

      return getInvoicePayment;
    }(),
    handleInsertPayment: function () {
      var _handleInsertPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(params) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getDataLookupPayment();

              case 2:
                _context7.next = 4;
                return this.getInvoiceDetail(params);

              case 4:
                if (!(this.paramsData.is_paid == '-1')) {
                  _context7.next = 7;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].information(this.$t('responseStatus.cityLedgerInvoice.2'));
                return _context7.abrupt("return");

              case 7:
                this.resetPayment(this.paramsData);
                this.handleChangeCurrency();
                this.paymentPopUp = true;

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function handleInsertPayment(_x8) {
        return _handleInsertPayment.apply(this, arguments);
      }

      return handleInsertPayment;
    }(),
    getInvoiceDetail: function () {
      var _getInvoiceDetail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(params) {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return arCityLedgerResource.getInvoiceDetail({
                  number: params.number
                });

              case 2:
                _ref4 = _context8.sent;
                data = _ref4.data;
                this.paramsData = data;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getInvoiceDetail(_x9) {
        return _getInvoiceDetail.apply(this, arguments);
      }

      return getInvoiceDetail;
    }(),
    handleSavePayment: function () {
      var _handleSavePayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.$validator.validateAll('information').then(function (result) {
                  if (result) {
                    _this4.insertPayment();
                  }
                });

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function handleSavePayment() {
        return _handleSavePayment.apply(this, arguments);
      }

      return handleSavePayment;
    }(),
    insertPayment: function () {
      var _insertPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.$loadingIndicator(this);
                this.vPayment.currency_code = this.vCurrency.code;
                _context10.prev = 2;
                _context10.next = 5;
                return arCityLedgerResource.insertPayment(this.vPayment);

              case 5:
                _ref5 = _context10.sent;
                data = _ref5.data;

                if (data == 0) {
                  this.paymentPopUp = false;
                  this.refreshData(this.search);
                } else if (data > 0) {
                  this.$closeLoadingIndicator(this);
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].information(this.$t("responseStatus.cityLedgerInvoice.".concat(data)));
                }

                _context10.next = 14;
                break;

              case 10:
                _context10.prev = 10;
                _context10.t0 = _context10["catch"](2);
                this.$$closeLoadingIndicator(this);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[2, 10]]);
      }));

      function insertPayment() {
        return _insertPayment.apply(this, arguments);
      }

      return insertPayment;
    }(),
    getDataLookupPayment: function () {
      var _getDataLookupPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var _ref6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                this.$loadingIndicator(this);
                _context11.next = 4;
                return arCityLedgerResource.dataLookupPayment();

              case 4:
                _ref6 = _context11.sent;
                data = _ref6.data;
                this.dataLookup = data;
                this.$closeLoadingIndicator(this);
                _context11.next = 14;
                break;

              case 10:
                _context11.prev = 10;
                _context11.t0 = _context11["catch"](0);
                this.$closeLoadingIndicator(this);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 10]]);
      }));

      function getDataLookupPayment() {
        return _getDataLookupPayment.apply(this, arguments);
      }

      return getDataLookupPayment;
    }(),
    getTotalAmount: function getTotalAmount() {
      this.vPayment.amount = this.vPayment.amount_foreign / this.vCurrency.exchange_rate;
    },
    getExchangeRateCurrency: function getExchangeRateCurrency(currencyCode) {
      var exchRate = 1;

      if (this.dataLookup.currency.length > 0) {
        var currency = this.dataLookup.currency;
        currency.forEach(function (element) {
          if (element.code == currencyCode) {
            exchRate = element.exchange_rate;
          }
        });
      }

      return exchRate;
    },
    handleChangeCurrency: function handleChangeCurrency() {
      if (this.paramsData.currency_code == this.defaultCurrency) {
        this.vPayment.exchange_rate = this.vCurrency.exchange_rate;
      } else {
        this.vPayment.exchange_rate = this.getExchangeRateCurrency(this.paramsData.currency_code);
      }

      this.handleChangeExchangeRate();
    },
    handleChangeExchangeRate: function handleChangeExchangeRate() {
      if (this.vCurrency.code == this.paramsData.currency_code) {
        this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
      } else {
        if (this.paramsData.currency_code == this.defaultCurrency) {
          if (this.vPayment.exchange_rate > 0) {
            this.vPayment.amount_foreign = this.paramsData.OutStandingForeign / this.vPayment.exchange_rate;
          } else {
            this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
          }
        } else {
          if (this.vPayment.exchange_rate > 0) {
            this.vPayment.amount_foreign = this.paramsData.OutStandingForeign * this.vPayment.exchange_rate;
          } else {
            this.vPayment.amount_foreign = this.paramsData.OutStandingForeign;
          }
        }
      }

      this.vPayment.amount = this.paramsData.OutStandingForeign;
    },
    handleChangeAmount: function handleChangeAmount() {
      if (this.vCurrency.code == this.paramsData.currency_code) {
        this.vPayment.amount = this.vPayment.amount_foreign;
      } else {
        if (this.paramsData.currency_code == this.defaultCurrency) {
          if (this.vPayment.exchange_rate > 0) {
            this.vPayment.amount = this.vPayment.amount_foreign * this.vPayment.exchange_rate;
          } else {
            this.vPayment.amount = this.vPayment.amount_foreign;
          }
        } else {
          if (this.vPayment.exchange_rate > 0) {
            this.vPayment.amount = this.vPayment.amount_foreign / this.vPayment.exchange_rate;
          } else {
            this.vPayment.amount = this.vPayment.amount_foreign;
          }
        }
      }
    },
    resetPayment: function resetPayment(params) {
      var invoiceCurrency = {};

      if (this.dataLookup.currency.length > 0) {
        this.dataLookup.currency.forEach(function (element) {
          if (element.code == params.currency_code) {
            invoiceCurrency = element;
          }

          ;
        });
      }

      this.vCurrency = invoiceCurrency;
      this.vPayment = {
        invoice_number: params.number,
        date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(new Date()),
        exchange_rate: invoiceCurrency.exchange_rate,
        amount: params.OutStandingForeign,
        amount_foreign: params.OutStandingForeign,
        issued_date: params.issued_date,
        company_code: params.company_code,
        outstanding: params.OutStandingForeign,
        sub_department_code: this.dataLookup.default_sub_department_accounting,
        user_id: this.global.userInfo.code
      };
    },
    handleDeletePayment: function handleDeletePayment(params) {
      if (params.TotalPaid == 0) {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].information(this.$t('responseStatus.cityLedgerInvoice.3'));
      } else {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirmationDelete(this, 'deletePayment', params);
      }
    },
    deletePayment: function () {
      var _deletePayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(params) {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                this.$loadingIndicator(this);
                _context12.next = 4;
                return arCityLedgerResource.deletePayment({
                  number: params.number,
                  user_id: this.global.userInfo.code
                });

              case 4:
                _ref7 = _context12.sent;
                data = _ref7.data;

                if (data == 0) {
                  this.refreshData(this.search);
                } else if (data > 0) {
                  this.$closeLoadingIndicator(this);
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].information(this.$t("responseStatus.cityLedgerInvoice.".concat(data)));
                }

                _context12.next = 13;
                break;

              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12["catch"](0);
                this.$closeLoadingIndicator(this);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorDeleteDataAlert();

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 9]]);
      }));

      function deletePayment(_x10) {
        return _deletePayment.apply(this, arguments);
      }

      return deletePayment;
    }(),
    // Print
    handlePrintInvoice: function handlePrintInvoice(params, isStatement) {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.cityLedgerInvoice, "&number=").concat(params.number, "&isStatement=").concat(isStatement, "&template=").concat(this.global.stimulsoftReportFileDirectory.cityLedgerInvoice)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt(params) {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.invoicePaymentReceive, "&number=").concat(params.ref_number, "&template=").concat(this.global.stimulsoftReportFileDirectory.invoicePaymentReceive)
      });
      window.open(newTabReport.href, '_blank');
    },
    trackingData: function () {
      var _trackingData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(idData) {
        var params, _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: this.global.tableName.subFolio
                };
                this.$loadingIndicator(this);
                _context13.prev = 2;
                _context13.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _ref8 = _context13.sent;
                data = _ref8.data;
                this.dataTracking = data.modelGrid;
                _context13.next = 13;
                break;

              case 10:
                _context13.prev = 10;
                _context13.t0 = _context13["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 13:
                this.$closeLoadingIndicator(this);

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[2, 10]]);
      }));

      function trackingData(_x11) {
        return _trackingData.apply(this, arguments);
      }

      return trackingData;
    }()
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
    this.gridApi2 = this.gridOptions2.api;
    this.ColumnApi2 = this.gridOptions2.columnApi;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "navigation-header",
        {
          attrs: { insertButton: "" },
          on: {
            showModal: _vm.showModal,
            refreshData: function(val) {
              _vm.limitPageSize = parseFloat(val)
              _vm.$refs.filterHeader.onRefreshData(val)
            }
          }
        },
        [_vm._v(_vm._s(_vm.$t("arCityLedger.createInvoice")))]
      ),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          formType: _vm.formType,
          limitPageSize: _vm.limitPageSize,
          searchOption: _vm.searchFilterData,
          searchDefault: _vm.vModelDefaultSearchData
        },
        on: { search: _vm.refreshData }
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container",
          attrs: { id: "main-container" }
        },
        [
          _c(
            "vs-col",
            { staticClass: "w-full md:w-2/3", attrs: { "vs-type": "flex" } },
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
                  getContextMenuItems: _vm.getContextMenu
                },
                on: {
                  "grid-ready": _vm.onGridReady,
                  "selection-changed": _vm.handleSelectionChange,
                  cellContextMenu: _vm.handleRowRightClicked,
                  rowDoubleClicked: _vm.handleRowDobleClicked
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "w-full md:w-1/3" },
            [
              _c("span", { staticClass: "p-2" }, [
                _vm._v(_vm._s(_vm.$t("arCityLedger.paymentDetail")))
              ]),
              _vm._v(" "),
              _c("ag-grid-vue", {
                class: _vm.global.themeAgGrid,
                style: _vm.global.styleAgGridFrame,
                attrs: {
                  pagination: "true",
                  paginationPageSize: _vm.paginationPageSize,
                  statusBar: _vm.statusBar,
                  gridOptions: _vm.gridOptions2,
                  context: _vm.context,
                  rowSelection: _vm.rowSelection,
                  columnDefs: _vm.columnDefs2,
                  frameworkComponents: _vm.frameworkComponents,
                  rowData: _vm.rowData2,
                  defaultColDef: _vm.global.defColDef,
                  getContextMenuItems: _vm.getContextMenu2
                },
                on: { cellContextMenu: _vm.handleRowRightClicked2 }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("ar-city-ledger-form", {
        ref: "arCityLedgerForm",
        on: {
          refreshData: function($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          }
        }
      }),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title: _vm.$t("arCityLedger.insertPayment"),
          width: 600,
          active: _vm.paymentPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled
        },
        on: {
          button1: function($event) {
            return _vm.handleSavePayment()
          },
          close: function(val) {
            return (_vm.paymentPopUp = val)
          }
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function() {
              return [
                _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3 w-full",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _vm._v(_vm._s(_vm.$t("arCityLedger.date")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("date-picker", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    type: "date",
                                    confirm: "",
                                    "confirm-text": "Ok",
                                    lang: _vm.$t("lang"),
                                    "value-type": "YYYY-MM-DD",
                                    format: "DD/MM/YYYY",
                                    label: "name",
                                    placeholder: "DD/MM/YYYY",
                                    name: "date",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vPayment, "date", $$v)
                                    },
                                    expression: "vPayment.date"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "information.date"
                                        ),
                                        expression:
                                          "errors.has('information.date')"
                                      }
                                    ],
                                    staticClass: "error-text text-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toString")(
                                          _vm.errors.first(
                                            "information.issued date"
                                          ) || _vm.dbErrors.date
                                        )
                                      )
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3 w-full",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _vm._v(_vm._s(_vm.$t("arCityLedger.issuedDate")))
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("date-picker", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    disabled: "",
                                    type: "date",
                                    confirm: "",
                                    "confirm-text": "Ok",
                                    lang: _vm.$t("lang"),
                                    "value-type": "YYYY-MM-DD",
                                    format: "DD/MM/YYYY",
                                    label: "name",
                                    placeholder: "DD/MM/YYYY",
                                    name: "issued date",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.issued_date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vPayment, "issued_date", $$v)
                                    },
                                    expression: "vPayment.issued_date"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "information.issued date"
                                        ),
                                        expression:
                                          "errors.has('information.issued date')"
                                      }
                                    ],
                                    staticClass: "error-text text-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toString")(
                                          _vm.errors.first(
                                            "information.issued date"
                                          ) || _vm.dbErrors.issued_date
                                        )
                                      )
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("arCityLedger.subDepartment"))
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("v-select", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full height200",
                                  attrs: {
                                    id: "form-select",
                                    label: "name",
                                    clearable: false,
                                    reduce: function(value) {
                                      return value.code
                                    },
                                    options: _vm.dataLookup.sub_department,
                                    name: "sub department",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.sub_department_code,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.vPayment,
                                        "sub_department_code",
                                        $$v
                                      )
                                    },
                                    expression: "vPayment.sub_department_code"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "information.sub department"
                                        ),
                                        expression:
                                          "errors.has('information.sub department')"
                                      }
                                    ],
                                    staticClass: "error-text text-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toString")(
                                          _vm.errors.first(
                                            "information.sub department"
                                          ) || _vm.dbErrors.sub_department_code
                                        )
                                      )
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("arCityLedger.bankAccount"))
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("v-select", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full height200",
                                  attrs: {
                                    id: "form-select",
                                    label: "name",
                                    clearable: false,
                                    reduce: function(value) {
                                      return value.code
                                    },
                                    options: _vm.dataLookup.bank_account,
                                    name: "bank account",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.bank_account_code,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.vPayment,
                                        "bank_account_code",
                                        $$v
                                      )
                                    },
                                    expression: "vPayment.bank_account_code"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "information.bank account"
                                        ),
                                        expression:
                                          "errors.has('information.bank account')"
                                      }
                                    ],
                                    staticClass: "error-text text-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toString")(
                                          _vm.errors.first(
                                            "information.bank account"
                                          ) || _vm.dbErrors.bank_account_code
                                        )
                                      )
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("arCityLedger.currency")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("v-select", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full height200",
                                  attrs: {
                                    id: "form-select",
                                    label: "code",
                                    clearable: false,
                                    options: _vm.dataLookup.currency,
                                    name: "currency",
                                    "data-vv-scope": "information"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.handleChangeCurrency()
                                    }
                                  },
                                  model: {
                                    value: _vm.vCurrency,
                                    callback: function($$v) {
                                      _vm.vCurrency = $$v
                                    },
                                    expression: "vCurrency"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "information.currency"
                                        ),
                                        expression:
                                          "errors.has('information.currency')"
                                      }
                                    ],
                                    staticClass: "error-text text-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toString")(
                                          _vm.errors.first(
                                            "information.currency"
                                          ) || _vm.dbErrors.type
                                        )
                                      )
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("arCityLedger.exchangeRate"))
                                )
                              ])
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
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    disabled: "",
                                    type: "text",
                                    comma: 2,
                                    description: _vm._f("toString")(
                                      _vm.errors.first(
                                        "information.exchange rate"
                                      ) || _vm.dbErrors.exchange_rate
                                    ),
                                    name: "exchange rate",
                                    "data-vv-scope": "information"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.handleChangeExchangeRate()
                                    }
                                  },
                                  model: {
                                    value: _vm.vPayment.exchange_rate,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.vPayment,
                                        "exchange_rate",
                                        $$v
                                      )
                                    },
                                    expression: "vPayment.exchange_rate"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("arCityLedger.amount") +
                                      " " +
                                      _vm.vCurrency.code
                                  )
                                )
                              ])
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
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    type: "text",
                                    description: _vm._f("toString")(
                                      _vm.errors.first(
                                        "folio.amount foreign"
                                      ) || _vm.dbErrors.item
                                    ),
                                    name: "amount foreign",
                                    "data-vv-scope": "information"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.handleChangeAmount()
                                    }
                                  },
                                  model: {
                                    value: _vm.vPayment.amount_foreign,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.vPayment,
                                        "amount_foreign",
                                        $$v
                                      )
                                    },
                                    expression: "vPayment.amount_foreign"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("arCityLedger.amount") +
                                      " " +
                                      _vm.paramsData.currency_code
                                  )
                                )
                              ])
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
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    disabled: "",
                                    type: "text",
                                    description: _vm._f("toString")(
                                      _vm.errors.first("folio.amount") ||
                                        _vm.dbErrors.item
                                    ),
                                    name: "amount",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.amount,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vPayment, "amount", $$v)
                                    },
                                    expression: "vPayment.amount"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full md:w-1/2" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t("arCityLedger.outstanding") +
                                      " " +
                                      _vm.paramsData.currency_code
                                  )
                                )
                              ])
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
                                      expression: "'required'"
                                    }
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    disabled: "",
                                    type: "text",
                                    description: _vm._f("toString")(
                                      _vm.errors.first(
                                        "information.outstanding"
                                      ) || _vm.dbErrors.outstanding
                                    ),
                                    name: "outstanding",
                                    "data-vv-scope": "information"
                                  },
                                  model: {
                                    value: _vm.vPayment.outstanding,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vPayment, "outstanding", $$v)
                                    },
                                    expression: "vPayment.outstanding"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between"
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "w-full" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("arCityLedger.remark")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select" },
                              [
                                _c("vs-textarea", {
                                  staticClass: "w-full",
                                  attrs: { type: "text" },
                                  model: {
                                    value: _vm.vPayment.remark,
                                    callback: function($$v) {
                                      _vm.$set(_vm.vPayment, "remark", $$v)
                                    },
                                    expression: "vPayment.remark"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4& */ "./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4&");
/* harmony import */ var _ARCityLedgerInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARCityLedgerInvoice.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ARCityLedgerInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedgerInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedgerInvoice.vue?vue&type=template&id=03a6a0d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerInvoice_vue_vue_type_template_id_03a6a0d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/action_grid.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/action_grid.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item v-if=\"params.data.is_active === true || params.data.is_active === false\" @click=\"activeDeactive()\">{{ params.data.is_active == true ? $t('common.menu.deactive') : $t('common.menu.active') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.context.componentParent.formType == global.formType.arCityLedgerInvoice\" @click=\"insertPayment()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/add_icon24.png\"/>{{ $t('common.menu.insertPayment') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.context.componentParent.formType == global.formType.arCityLedgerInvoice\" @click=\"deletePayment()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>{{ $t('common.menu.deletePayment') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.context.componentParent.formType == global.formType.arCityLedgerInvoice\" @click=\"printInvoice()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>{{ $t('common.menu.printInvoice') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.context.componentParent.formType == global.formType.arCityLedgerInvoice\" @click=\"printARStatement()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>{{ $t('common.menu.printARStatement') }}</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\">\n                        <vs-button @click=\"openAlert()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
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
    // AR City ledger invoice
    insertPayment: function insertPayment() {
      if (this.params.data !== undefined) {
        console.log(this.params.context.componentParent.formType);
        this.params.context.componentParent.handleInsertPayment(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    deletePayment: function deletePayment() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleDeletePayment(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    printInvoice: function printInvoice() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintInvoice(this.params.data, false);
      } else {
        this.openUndefinedAlert();
      }
    },
    printARStatement: function printARStatement() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintInvoice(this.params.data, true);
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
    mounted: function mounted() {
      console.log(this.params.context.componentParent.formType); // this.formType = this.params.context.componentParent.formType;
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_print.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_print.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Print receipt\">\n                        <vs-button @click=\"printInvoiceReceiptPayment()\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
  methods: {
    printInvoiceReceiptPayment: function printInvoiceReceiptPayment() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintReceipt(this.params.data);
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
    beforeMount: function beforeMount() {
      this.formType = this.params.context.componentParent.formType;
    }
  }
}));

/***/ })

}]);