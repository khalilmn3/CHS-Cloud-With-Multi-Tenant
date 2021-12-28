(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_apCommissionAndOther__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/apCommissionAndOther */ "./resources/js/src/api/back-office/apCommissionAndOther.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_menu_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_menu_tracking */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_menu_tracking.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_delete_editor */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/back-office/components/FilterHeader.vue");
/* harmony import */ var _components_APRefundDepositPaymentForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/APRefundDepositPaymentForm */ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue");


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













var apCommissionAndOtherResource = new _api_back_office_apCommissionAndOther__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'APCommissionAndOther',
  props: {
    formType: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_12__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    APRefundDepositPaymentForm: _components_APRefundDepositPaymentForm__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: 0,
      searchFilterData: [{
        text: this.$t('common.filter.folioNumber'),
        value: 0
      }, {
        text: this.$t('common.filter.roomNumber'),
        value: 1
      }, {
        text: this.$t('common.filter.guestName'),
        value: 2
      }, {
        text: this.$t('common.filter.remark'),
        value: 3
      }, {
        text: this.$t('common.filter.insertBy'),
        value: 4
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
      width: 70
    }, {
      headerName: this.$t('apPayment.table.account'),
      field: 'Account',
      width: 200
    }, {
      headerName: this.$t('apPayment.table.company'),
      field: 'company',
      width: 250
    }, {
      headerName: this.$t('apPayment.table.folioNumber'),
      field: 'folio_number',
      width: 120
    }, {
      headerName: this.$t('apPayment.table.roomNumber'),
      field: 'room_number',
      width: 130
    }, {
      headerName: this.$t('apPayment.table.guestName'),
      field: 'GuestName',
      width: 250
    }, {
      headerName: this.$t('apPayment.table.id'),
      field: 'id_log',
      width: 70
    }, {
      headerName: this.$t('apPayment.table.amount'),
      field: 'Amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.totalPaid'),
      field: 'TotalPaid',
      width: 140,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.outstanding'),
      field: 'Outstanding',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.auditDate'),
      field: 'audit_date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('apPayment.table.arrivalDate'),
      field: 'ArrivalDate',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('apPayment.table.departureDate'),
      field: 'DepartureDate',
      width: 130,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('apPayment.table.remark'),
      field: 'remark',
      width: 370
    }, {
      headerName: this.$t('common.table.insertBy'),
      field: 'insert_by',
      width: 120
    }];
    this.columnDefs2 = [{
      headerName: this.$t('common.table.action'),
      field: 'index',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGridEditor',
      colId: 'params',
      width: 100
    }, {
      headerName: this.$t('apPayment.table.refNumber'),
      field: 'ref_number',
      width: 110
    }, {
      headerName: this.$t('apPayment.table.date'),
      field: 'date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('apPayment.table.amount'),
      field: 'amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.account'),
      field: 'JournalAccount',
      width: 200
    }, {
      headerName: this.$t('apPayment.table.remark'),
      field: 'remark',
      width: 150
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 120
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_menu_tracking__WEBPACK_IMPORTED_MODULE_4__["default"],
      actionGridEditor: _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        name: this.$t('apPayment.insertPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
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
    getContextMenu2: function getContextMenu2(params) {
      var _this2 = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this2.showModal(_this2.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this2.handleDeleteEditor(_this2.paramsData);
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
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this3.paramsData = _context.sent;

                _this3.showModal(_this3.paramsData, _this3.global.modeData.insert);

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
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.search = search;
                selectedNodes = _this4.gridApi != null ? _this4.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return _this4.getData(search);

              case 5:
                setTimeout(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this4, selectedNodes, 'id_log');
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
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$apCommissionAn, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this5.$loadingIndicator(_this5);

                _context3.next = 4;
                return apCommissionAndOtherResource.list(params);

              case 4:
                _yield$apCommissionAn = _context3.sent;
                data = _yield$apCommissionAn.data;
                _this5.rowData = data;
                _this5.rowData2 = [];

                _this5.$closeLoadingIndicator(_this5);

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);

                _this5.$closeLoadingIndicator(_this5);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    handleSelectionChange: function handleSelectionChange() {
      var params = this.gridApi.getSelectedRows();
      this.rowData2 = null;

      if (params.length > 0) {
        this.getPaymentDetail(params[0]);
      } else {
        this.rowData2 = [];
      }
    },
    getPaymentDetail: function getPaymentDetail(params) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$apCommissionAn2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return apCommissionAndOtherResource.getPaymentList({
                  id: params.id_log
                });

              case 2:
                _yield$apCommissionAn2 = _context4.sent;
                data = _yield$apCommissionAn2.data;
                _this6.rowData2 = data;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    showModal: function showModal(idData, modeData) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this7.$refs.apRefundDepositPaymentForm.showModal(idData, modeData);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    handleUpdateEditor: function handleUpdateEditor(idData) {
      this.$refs.apRefundDepositPaymentForm.showModal(idData, this.global.modeData.edit);
    },
    handleDeleteEditor: function handleDeleteEditor(params) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirmationDelete(this, 'deleteData', params);
    },
    deleteData: function deleteData(params) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$apCommissionAn3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;

                _this8.$loadingIndicator(_this8);

                _context6.next = 4;
                return apCommissionAndOtherResource.deletePayment({
                  ref_number: params.ref_number,
                  user_id: _this8.global.userInfo.code
                });

              case 4:
                _yield$apCommissionAn3 = _context6.sent;
                data = _yield$apCommissionAn3.data;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteAlertSuccess();

                _this8.refreshData(_this8.search);

                _context6.next = 14;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);

                _this8.$closeLoadingIndicator(_this8);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorDeleteDataAlert();

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
          attrs: { insertButton: "" },
          on: {
            showModal: _vm.showModal,
            refreshData: function (val) {
              _vm.limitPageSize = parseFloat(val)
              _vm.$refs.filterHeader.onRefreshData(val)
            },
          },
        },
        [_vm._v(_vm._s(_vm.$t("apPayment.insertPayment")))]
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
                  getContextMenuItems: _vm.getContextMenu,
                },
                on: {
                  "grid-ready": _vm.onGridReady,
                  "selection-changed": _vm.handleSelectionChange,
                  cellContextMenu: _vm.handleRowRightClicked,
                  rowDoubleClicked: _vm.handleRowDobleClicked,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "w-full md:w-1/3" },
            [
              _c("span", { staticClass: "p-2" }, [
                _vm._v(_vm._s(_vm.$t("apPayment.payment"))),
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
                  getContextMenuItems: _vm.getContextMenu2,
                },
                on: { cellContextMenu: _vm.handleRowRightClicked2 },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("APRefundDepositPaymentForm", {
        ref: "apRefundDepositPaymentForm",
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

/***/ "./resources/js/src/views/pages/back-office/APCommissionAndOther.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/APCommissionAndOther.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APCommissionAndOther.vue?vue&type=template&id=732f46d6& */ "./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6&");
/* harmony import */ var _APCommissionAndOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APCommissionAndOther.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _APCommissionAndOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/APCommissionAndOther.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_APCommissionAndOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./APCommissionAndOther.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_APCommissionAndOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./APCommissionAndOther.vue?vue&type=template&id=732f46d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/APCommissionAndOther.vue?vue&type=template&id=732f46d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APCommissionAndOther_vue_vue_type_template_id_732f46d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);