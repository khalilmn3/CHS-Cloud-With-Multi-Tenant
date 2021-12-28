(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_menu_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_menu_dropdown */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_dropdown.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_delete_editor */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js");
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













var arCityLedgerResource = new _api_back_office_arCityLedger__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ARCityLedger',
  props: {
    titleForm: String
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
        text: this.$t('common.filter.directBill'),
        value: 0
      }, {
        text: this.$t('common.filter.companyType'),
        value: 1
      }, {
        text: this.$t('common.filter.account'),
        value: 2
      }, {
        text: this.$t('common.filter.folioNumber'),
        value: 3
      }, {
        text: this.$t('common.filter.room'),
        value: 4
      }, {
        text: this.$t('common.filter.guestName'),
        value: 5
      }, {
        text: this.$t('common.filter.roomRate'),
        value: 6
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
      field: 'folio_number',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: this.$t('arCityLedger.table.directBill'),
      field: 'DirectBill',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.companyType'),
      field: 'CompanyType',
      width: 130
    }, {
      headerName: this.$t('arCityLedger.table.account'),
      field: 'Account',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.amount'),
      field: 'Amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.folioNumber'),
      field: 'folio_number',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      }
    }, {
      headerName: this.$t('arCityLedger.table.roomNumber'),
      field: 'room_number',
      width: 100
    }, {
      headerName: this.$t('arCityLedger.table.guestName'),
      field: 'GuestName',
      width: 200
    }, {
      headerName: this.$t('arCityLedger.table.arrivalDate'),
      field: 'ArrivalDate',
      width: 133,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.departureDate'),
      field: 'DepartureDate',
      width: 153,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.roomRate'),
      field: 'RoomRate',
      width: 133
    }, {
      headerName: this.$t('arCityLedger.table.taVoucherNumber'),
      field: 'voucher_number_ta',
      width: 200
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update_menu_dropdown__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        name: this.$t('common.contextMenu.createInvoice'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.updateDiractBill'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
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
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'id_log');
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
        var _yield$arCityLedgerRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.$loadingIndicator(_this4);

                _context3.next = 4;
                return arCityLedgerResource.list(params);

              case 4:
                _yield$arCityLedgerRe = _context3.sent;
                data = _yield$arCityLedgerRe.data;
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
                  _this5.$refs.arCityLedgerForm.showUpdateDirectBill(idData);
                } else {
                  _this5.$refs.arCityLedgerForm.showModal(idData, modeData);
                }

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this6.global.tableName.subFolio
                };

                _this6.$loadingIndicator(_this6);

                _context5.prev = 2;
                _context5.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context5.sent;
                data = _yield$trackingDataRe.data;
                _this6.dataTracking = data.modelGrid;
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 13:
                _this6.$closeLoadingIndicator(_this6);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 10]]);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        [_vm._v(_vm._s(_vm.$t("arCityLedger.createInvoice")))]
      ),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          formType: _vm.global.formType.arCityLedger,
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
      _c("ar-city-ledger-form", {
        ref: "arCityLedgerForm",
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

/***/ "./resources/js/src/views/pages/back-office/ARCityLedger.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedger.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARCityLedger.vue?vue&type=template&id=48436f47& */ "./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47&");
/* harmony import */ var _ARCityLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARCityLedger.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ARCityLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/ARCityLedger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedger.vue?vue&type=template&id=48436f47& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/ARCityLedger.vue?vue&type=template&id=48436f47&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedger_vue_vue_type_template_id_48436f47___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_dropdown.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_dropdown.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.data.is_active === true || params.data.is_active === false\" @click=\"activeDeactive()\">{{ params.data.is_active == true ? $t('common.menu.deactive') : $t('common.menu.active') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
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