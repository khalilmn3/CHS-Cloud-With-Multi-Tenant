(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/folioForm/FolioForm.vue */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue");
/* harmony import */ var _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/lock_icon.js */ "./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/transaction.js */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");


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








 // <!------------------additional element---------------------->



 // API





var transactionResource = new _api_transaction_js__WEBPACK_IMPORTED_MODULE_15__["default"]();
var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_13__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_14__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_16__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MasterFolio',
  props: ['titleForm'],
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    FolioForm: _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('common.filter.number'),
        value: '0'
      }, {
        text: this.$t('common.filter.fullName'),
        value: '5'
      }, {
        text: this.$t('common.filter.group'),
        value: '6'
      }, {
        text: this.$t('common.filter.company'),
        value: '8'
      }, {
        text: this.$t('common.filter.market'),
        value: '9'
      }, {
        text: this.$t('common.filter.address'),
        value: '10'
      }, {
        text: this.$t('common.filter.phone'),
        value: '11'
      }, {
        text: this.$t('common.filter.status'),
        value: '12'
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: '17'
      }],
      // query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0,
        filter: []
      },
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_12__["sidebarConfig"],
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
      pinnedBottomRowData: null,
      // Parameter From Child
      idData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      // ------------------need setting manual-----------------//
      stayInformations: {},
      folioNumber: '',
      sidebarOption: false,
      // ------------------additional-------------------------//
      // title popup//
      title: '',
      paramsData: '',
      balance: 0 // ------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'number',
      resizable: false,
      filter: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: 'L',
      field: 'is_lock',
      resizable: false,
      filter: false,
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: this.$t('folio.table.fullName'),
      field: 'full_name',
      width: 230
    }, {
      headerName: this.$t('folio.table.number'),
      field: 'folio_number',
      width: 90
    }, {
      headerName: this.$t('folio.table.arrivalDate'),
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatDate"]
    }, {
      headerName: this.$t('folio.table.estimateTimeArrival'),
      field: 'time_arrival',
      width: 112
    }, {
      headerName: this.$t('folio.table.departureDate'),
      field: 'date_departure',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatDate"]
    }, {
      headerName: this.$t('folio.table.estimateTimeDeparture'),
      field: 'time_departure',
      width: 130
    }, {
      headerName: this.$t('folio.table.market'),
      field: 'market',
      width: 110
    }, {
      headerName: this.$t('folio.table.company'),
      field: 'company',
      width: 110
    }, {
      headerName: this.$t('folio.table.group'),
      field: 'guest_group',
      width: 110
    }, {
      headerName: this.$t('folio.table.balance'),
      field: 'balance',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_11__["formatNumber"]
    }, {
      headerName: this.$t('folio.table.adult'),
      field: 'adult',
      width: 80
    }, {
      headerName: this.$t('folio.table.child'),
      field: 'child',
      width: 70
    }, {
      headerName: this.$t('folio.table.billInstruction'),
      field: 'bill_instruction',
      width: 200
    }, {
      headerName: this.$t('folio.table.note'),
      field: 'notes',
      width: 200
    }, {
      headerName: this.$t('folio.table.insertBy'),
      field: 'insert_by',
      width: 110
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
      iconLockRenderer: _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_10__["default"]
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
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
        this.folioNumber = this.paramsData ? this.paramsData.folio_number : '';
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showForm('', _this.global.modeData.insert);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.edit);
        }
      }, {
        name: this.$t('common.contextMenu.duplicate'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('duplicate_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.duplicate);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.transaction'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction();
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.checkOut'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, {
        name: this.$t('common.contextMenu.printFolio'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.tracking);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi.forEachNode(function (node) {
          if (node.data) {
            if (node.data.folio_number == vm.paramsData.folio_number) {
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

                _this2.handleTransaction();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    // ------------------ Guest In House CRUD------------------//
    getMasterFolioList: function getMasterFolioList(search) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes, _yield$masterFolioRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.search = search;
                _context2.prev = 1;
                selectedNodes = _this3.gridApi.getSelectedRows();
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 6;
                return masterFolioResource.list(search);

              case 6:
                _yield$masterFolioRes = _context2.sent;
                data = _yield$masterFolioRes.data;
                _this3.rowData = data.data;
                _this3.pinnedBottomRowData = data.total;

                _this3.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'folio_number');
                });

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 14]]);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this4.global.tableName.guestGroup
                };

                _this4.$loadingIndicator(_this4);

                _context3.prev = 2;
                _context3.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context3.sent;
                data = _yield$trackingDataRe.data;
                _this4.dataTracking = data.modelGrid;
                _this4.modalMain = true;
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 14:
                _this4.$closeLoadingIndicator(_this4);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 11]]);
      }))();
    },
    refreshData: function refreshData(search) {
      this.search = search;
      this.$loadingIndicator(this);
      this.getMasterFolioList(search);
    },
    showForm: function showForm(idData, modeData) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.$refs.folioForm.showForm(idData, modeData);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    // ------------------ END Guest In House CRUD------------------//
    // ------------------START SIDEBARR OPTIONS-------------------------------//
    // ----------------START CHECK OUT---------------//
    handleCheckOut: function handleCheckOut() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _this6.getBalance();

              case 2:
                balance = _this6.balance;

                if (balance == 'null' || balance == null) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this6.$t('message.checkOutWithoutTransaction'), _this6, 'checkOut');
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this6.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(_this6, 'checkOut');
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    checkOut: function checkOut() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _yield$guestInHouseRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  number: _this7.folioNumber,
                  user_id: _this7.global.userInfo.code
                };
                _context6.next = 3;
                return guestInHouseResource.checkOut(params);

              case 3:
                _yield$guestInHouseRe = _context6.sent;
                data = _yield$guestInHouseRe.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].acceptAlertSuccesWithText(_this7.$t('responseStatus.checkOut.0'));
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information("".concat(_this7.$t("responseStatus.checkOut.".concat(data.value)), "\n").concat(data.message));
                }

                _this7.refreshData(_this7.search);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getBalance: function getBalance() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return transactionResource.balance({
                  q: _this8.folioNumber
                });

              case 2:
                _yield$transactionRes = _context7.sent;
                data = _yield$transactionRes.data;
                _this8.balance = data.balance;

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // ----------------END CHECK OUT---------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    // ------------------END SIDEBARR OPTIONS-------------------------------//
    // ----------------START OTHER OPTION------------------//
    handleTransaction: function handleTransaction() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$guestInHouseRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.sidebarOption = false;

                _this9.$loadingIndicator(_this9);

                _context8.next = 4;
                return guestInHouseResource.get(_this9.paramsData.folio_number);

              case 4:
                _yield$guestInHouseRe2 = _context8.sent;
                data = _yield$guestInHouseRe2.data;

                _this9.$router.push({
                  name: 'transaction',
                  params: {
                    stayInformations: data.list
                  }
                });

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    // PRINT
    handlePrintFolio: function handlePrintFolio() {
      this.sidebarOption = false;
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.folio, "&folioNumber=").concat(this.paramsData.folio_number, "&template=").concat(this.global.stimulsoftReportFileDirectory.folio)
      });
      window.open(newTabReport.href, '_blank');
    } // ----------------END OTHER OPTION------------------//
    // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (this.sidebarOption == false) {
        document.getElementById('main-container').click();
      }
    }
  },
  computed: {
    userValidation: function userValidation() {
      return this.credential.user.length > 0 && this.credential.pass.length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa& ***!
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
    { staticClass: "guest-in-house" },
    [
      _c("navigation-header", {
        attrs: { insertButton: true },
        on: {
          showModal: _vm.showForm,
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
          formType: _vm.global.formType.masterFolio,
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
            ref: "mainContainer",
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
              pinnedBottomRowData: _vm.pinnedBottomRowData,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              rowDoubleClicked: _vm.handleRowDobleClicked,
              cellContextMenu: _vm.handleRowRightClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("folio-form", {
        ref: "folioForm",
        attrs: {
          titleForm: "Master Folio",
          formType: _vm.global.formType.masterFolio,
        },
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
      }),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          staticClass: "sidebarx",
          attrs: {
            "hidden-background": "",
            "position-right": "",
            parent: "#main-container",
            "default-index": "1",
            color: "primary",
            spacer: "",
          },
          model: {
            value: _vm.sidebarOption,
            callback: function ($$v) {
              _vm.sidebarOption = $$v
            },
            expression: "sidebarOption",
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "header-sidebar",
              attrs: { slot: "header" },
              slot: "header",
            },
            [
              _c("h4", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.titleForm + _vm.$t("folio.menu.option")) +
                    "\n                "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "body-sidebar" },
            [
              _c(
                "vs-sidebar-item",
                { attrs: { index: "1" }, on: { click: _vm.handleTransaction } },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/transaction_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("folio.menu.transaction")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "8" },
                  on: {
                    click: function ($event) {
                      return _vm.handleCheckOut()
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/check_out_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("folio.menu.checkOut")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "9" },
                  on: {
                    click: function ($event) {
                      return _vm.handlePrintFolio()
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/print_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("folio.menu.printFolio")) +
                      "\n                "
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div>\n                <div v-if=\"params.data && (params.data.folio_number > 0 || params.data.reservation_number > 0)\" class=\"flex action-button\">\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.menu')\">\n                        <vs-button @click=\"showSidebar\" :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip v-if=\"params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In'\" class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.edit')\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip v-if=\"params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In' && params.data.folio_status != 'Open'\" class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.duplicate')\">\n                        <vs-button @click=\"showPopUp(global.modeData.duplicate)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/duplicate_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                </div>\n            </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showForm(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    duplicate: function duplicate() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleDuplicate(this.params.data);
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
    showSidebar: function showSidebar() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleSidebarOption(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('placeholder.close')
      });
    },
    openConfirm: function openConfirm() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: this.acceptAlert
      });
    },
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.deleteTitleSuccess'),
        text: this.$t('message.deleteSuccess'),
        accept: this.params.context.componentParent.deleteData(this.params.data)
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:3px\">\n        <vs-icon icon=\"lock\" v-if=\"data == '-1'\"></vs-icon>\n        <vs-icon icon=\"lock_open\" v-else-if=\"data == '0'\"></vs-icon>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterFolio.vue?vue&type=template&id=994d23aa& */ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&");
/* harmony import */ var _MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasterFolio.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/master-folio/MasterFolio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterFolio.vue?vue&type=template&id=994d23aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/master-folio/MasterFolio.vue?vue&type=template&id=994d23aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterFolio_vue_vue_type_template_id_994d23aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);