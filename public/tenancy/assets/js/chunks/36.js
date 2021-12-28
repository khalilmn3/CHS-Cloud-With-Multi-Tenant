(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_bankTransaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/bankTransaction */ "./resources/js/src/api/back-office/bankTransaction.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_menu_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_menu_tracking */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_menu_tracking.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_delete_editor */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/back-office/components/FilterHeader.vue");
/* harmony import */ var _components_BankTransactionForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/BankTransactionForm */ "./resources/js/src/views/pages/back-office/components/BankTransactionForm.vue");


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













var bankTransactionResource = new _api_back_office_bankTransaction__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BankTransaction',
  props: {
    formType: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    BankTransactionForm: _components_BankTransactionForm__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: 0,
      searchFilterData: [{
        text: this.$t('common.filter.account'),
        value: 0
      }, {
        text: this.$t('common.filter.folioNumber'),
        value: 1
      }, {
        text: this.$t('common.filter.roomNumber'),
        value: 2
      }, {
        text: this.$t('common.filter.guestName'),
        value: 3
      }, {
        text: this.$t('common.filter.transactionID'),
        value: 4
      }, {
        text: this.$t('common.filter.cardBank'),
        value: 5
      }, {
        text: this.$t('common.filter.cardType'),
        value: 6
      }, {
        text: this.$t('common.filter.cardHolder'),
        value: 7
      }, {
        text: this.$t('common.filter.remark'),
        value: 8
      }, {
        text: this.$t('common.filter.documentNumber'),
        value: 9
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: 10
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
      rowData: [],
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
    }; // ------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'TransactionID',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 70
    }, {
      headerName: this.$t('bankTransaction.table.account'),
      field: 'Account',
      width: 200
    }, {
      headerName: this.$t('bankTransaction.table.number'),
      field: 'Number',
      width: 130
    }, {
      headerName: this.$t('bankTransaction.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('bankTransaction.table.guestName'),
      field: 'GuestName',
      width: 200
    }, {
      headerName: this.$t('bankTransaction.table.transactionID'),
      field: 'TransactionID',
      width: 125
    }, {
      headerName: this.$t('bankTransaction.table.auditDate'),
      field: 'audit_date',
      width: 153,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('bankTransaction.table.reconciliationDate'),
      field: 'ReconsiliatedDate',
      width: 150,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('bankTransaction.table.amount'),
      field: 'Amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('bankTransaction.table.cardBank'),
      field: 'CardBank',
      width: 100
    }, {
      headerName: this.$t('bankTransaction.table.cardType'),
      field: 'CardType',
      width: 100
    }, {
      headerName: this.$t('bankTransaction.table.cardHolder'),
      field: 'card_holder',
      width: 200
    }, {
      headerName: this.$t('bankTransaction.table.validThru'),
      field: 'ValidThru',
      width: 120
    }, {
      headerName: this.$t('bankTransaction.table.remark'),
      field: 'remark',
      width: 200
    }, {
      headerName: this.$t('bankTransaction.table.documentNumber'),
      field: 'document_number',
      width: 140
    }, {
      headerName: this.$t('bankTransaction.table.departureDate'),
      field: 'DepartureDate',
      width: 120,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('bankTransaction.table.arrivalDate'),
      field: 'ArrivalDate',
      width: 120,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('bankTransaction.table.refNumber'),
      field: 'RefNumber',
      width: 120
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_menu_tracking__WEBPACK_IMPORTED_MODULE_4__["default"]
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
      var type = '';

      if (node) {
        this.paramsData = node.data;
        type = node.data.type;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.insertReconciliation'),
        disabled: !this.paramsData || this.paramsData.IsReconsiliated == '-1',
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 0);
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
            if (node.data.TransactionID == vm.paramsData.TransactionID) {
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

                _this2.showModal(_this2.paramsData, _this2.global.modeData.insert);

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
                _this3.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'TransactionID');
                });

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
        var _yield$bankTransactio, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.$loadingIndicator(_this4);

                _context3.next = 4;
                return bankTransactionResource.list(params);

              case 4:
                _yield$bankTransactio = _context3.sent;
                data = _yield$bankTransactio.data;
                _this4.rowData = data;

                _this4.$closeLoadingIndicator(_this4);

                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);

                _this4.$closeLoadingIndicator(_this4);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    showModal: function showModal(idData, modeData) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (modeData == _this5.global.modeData.edit) {
                  _this5.$refs.bankTransactionForm.showUpdateDirectBill(idData);
                } else {
                  _this5.$refs.bankTransactionForm.showModal(idData, modeData);
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    insertButtonDisabled: Boolean,
    insertButton: Boolean,
    printButtonDropdown1: Boolean,
    dropdown1Button1: Boolean,
    dropdown1Button2: Boolean,
    dropdown1Button3: Boolean,
    dropdown1Button4: Boolean,
    printButtonDropdown2: Boolean,
    dropdown2Button1: Boolean,
    dropdown2Button2: Boolean,
    dropdown2Button3: Boolean,
    dropdown2Button4: Boolean
  },
  data: function data() {
    return {
      vLimit: 0
    };
  },
  methods: {
    onRefreshData: function onRefreshData() {
      this.vLimit = this.vLimit == '' ? 0 : this.vLimit;
      this.$emit('refreshData', this.vLimit);
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  mounted: function mounted() {
    // Assign limit data with variable Global
    this.vLimit = this.global.limitDefaultPageSize;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['idData', 'theData'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('tracking.logDate'),
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDate"]
    }, {
      headerName: this.$t('tracking.logTime'),
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"]
    }, {
      headerName: this.$t('tracking.mode'),
      field: 'mode',
      width: 100
    }, {
      headerName: this.$t('tracking.userID'),
      field: 'user_id',
      width: 120
    }, {
      headerName: this.$t('tracking.tableName'),
      field: 'table_name_log',
      width: 150
    }, {
      headerName: this.$t('tracking.data'),
      field: 'data_query',
      width: 350
    }];
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
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "navigation-header",
        {
          attrs: {
            insertButton: "",
            insertButtonDisabled:
              _vm.search.is_reconciliated == "-1" ||
              _vm.rowData == null ||
              _vm.rowData.length == 0,
          },
          on: {
            showModal: _vm.showModal,
            refreshData: function (val) {
              _vm.limitPageSize = parseFloat(val)
              _vm.$refs.filterHeader.onRefreshData(val)
            },
          },
        },
        [_vm._v(_vm._s(_vm.$t("bankTransaction.insertReconciliation")))]
      ),
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
      _vm._v(" "),
      _c("BankTransactionForm", {
        ref: "bankTransactionForm",
        attrs: { formType: _vm.formType },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-header " },
    [
      _c(
        "vs-row",
        {
          staticClass: "navigation mb-2",
          attrs: {
            "vs-w": "12",
            "vs-type": "flex",
            "vs-justify": "space-between",
          },
        },
        [
          _c("vs-input-number", {
            attrs: {
              step: 100,
              "icon-inc": "expand_less",
              "icon-dec": "expand_more",
            },
            on: {
              input: function ($event) {
                return _vm.onRefreshData()
              },
            },
            model: {
              value: _vm.vLimit,
              callback: function ($$v) {
                _vm.vLimit = $$v
              },
              expression: "vLimit",
            },
          }),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-lg": "10",
                "vs-md": "10",
                "vs-xs": "12",
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-align": "flex-end",
              },
            },
            [
              _vm.printButtonDropdown1
                ? _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-trigger-click": "" },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "success",
                            type: "filled",
                            icon: "print",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("handleButtonPrint1")
                            },
                          },
                        },
                        [
                          _vm._t("default", [
                            _vm._v(_vm._s(_vm.$t("button.print"))),
                          ]),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _vm.dropdown1Button1
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdownButtonPrint1"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown1Button2
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdownButtonPrint2"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown1Button3
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdownButtonPrint3"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown1Button4
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdownButtonPrint4"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.printButtonDropdown2
                ? _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-trigger-click": "" },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "success",
                            type: "filled",
                            icon: "print",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("handleButtonPrint2")
                            },
                          },
                        },
                        [
                          _vm._t("default", [
                            _vm._v(_vm._s(_vm.$t("button.print"))),
                          ]),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _vm.dropdown2Button1
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdown2ButtonPrint1"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown2Button2
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdown2ButtonPrint2"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown2Button3
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdown2ButtonPrint3"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.dropdown2Button4
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit(
                                        "handleDropdown2ButtonPrint4"
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._t("default", [
                                    _vm._v(_vm._s(_vm.$t("button.print"))),
                                  ]),
                                ],
                                2
                              )
                            : _vm._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.insertButton
                ? _c(
                    "vs-button",
                    {
                      attrs: {
                        disabled: _vm.insertButtonDisabled,
                        "vs-justify": "flex-end",
                        color: _vm.global.buttonColor.insert,
                        type: "filled",
                        icon: "add",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("showModal", "", 0)
                        },
                      },
                    },
                    [
                      _vm._t("default", [
                        _vm._v(_vm._s(_vm.$t("button.insert"))),
                      ]),
                    ],
                    2
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
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
    { staticStyle: { "min-width": "800px" } },
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
          columnDefs: _vm.columnDefs,
          enableCellChangeFlash: true,
          rowSelection: _vm.rowSelection,
          rowData: _vm.theData,
          defaultColDef: _vm.global.defColDef,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/BankTransaction.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/BankTransaction.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BankTransaction.vue?vue&type=template&id=3a60dad0& */ "./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0&");
/* harmony import */ var _BankTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BankTransaction.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BankTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/BankTransaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BankTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BankTransaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BankTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BankTransaction.vue?vue&type=template&id=3a60dad0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/BankTransaction.vue?vue&type=template&id=3a60dad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BankTransaction_vue_vue_type_template_id_3a60dad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/NavigationHeader.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=fe240ab0& */ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=fe240ab0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/NavigationHeader.vue?vue&type=template&id=fe240ab0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_fe240ab0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracking.vue?vue&type=template&id=ba816e6a& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony import */ var _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tracking.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/Tracking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=template&id=ba816e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_menu_tracking.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_menu_tracking.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n               </div>\n            ",
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
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
    }
  }
}));

/***/ })

}]);