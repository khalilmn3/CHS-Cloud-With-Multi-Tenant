(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_formConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/formConfig */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_folioHistory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/folioHistory */ "./resources/js/src/api/folioHistory.js");


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










 // <!------------------additional element---------------------->

 // API


var folioHistoryResource = new _api_folioHistory__WEBPACK_IMPORTED_MODULE_13__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FolioHistory',
  props: {
    titleForm: String
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__["default"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('common.filter.folioNumber'),
        value: '0'
      }, {
        text: this.$t('common.filter.reservationNumber'),
        value: '1'
      }, {
        text: this.$t('common.filter.room'),
        value: '2'
      }, {
        text: this.$t('common.filter.roomType'),
        value: '3'
      }, {
        text: this.$t('common.filter.fullName'),
        value: '5'
      }, {
        text: this.$t('common.filter.reservationBy'),
        value: '4'
      }, {
        text: this.$t('common.filter.group'),
        value: '6'
      }, {
        text: this.$t('common.filter.roomRate'),
        value: '7'
      }, {
        text: this.$t('common.filter.address'),
        value: '10'
      }, {
        text: this.$t('common.filter.phone'),
        value: '11'
      }, {
        text: this.$t('common.filter.company'),
        value: '8'
      }, {
        text: this.$t('common.filter.guestType'),
        value: '13'
      }, {
        text: this.$t('common.filter.status'),
        value: '12'
      }, {
        text: this.$t('common.filter.insertBy'),
        value: '14'
      }, {
        text: this.$t('common.filter.checkOutBy'),
        value: '15'
      }, {
        text: this.$t('common.filter.cancelBy'),
        value: '16'
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
      sidebarConfig: _utils_formConfig__WEBPACK_IMPORTED_MODULE_10__["sidebarConfig"],
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
      // ------------------need setting manual-----------------//
      folioNumber: '',
      sidebarOption: false,
      // ------------------additional-------------------------//
      // ------CREDENTIAL-------//
      activeCredentialPrompt: false,
      isCredential: false,
      specialAccessType: 1000,
      credentialTitle: '',
      credential: {
        user: '',
        pass: ''
      },
      paramsData: '' // ------------------end need setting manual-----------------//

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
      enableRowGroup: false,
      resizable: true,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 63
    }, {
      headerName: this.$t('folio.table.folioType'),
      field: 'folio_type',
      width: 100
    }, {
      headerName: this.$t('folio.table.fullName'),
      field: 'FullName',
      width: 230
    }, {
      headerName: this.$t('folio.table.folioNumber'),
      field: 'folio_number',
      width: 90
    }, {
      headerName: this.$t('folio.table.reservationNumber'),
      field: 'reservation_number',
      width: 90
    }, {
      headerName: this.$t('folio.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('folio.table.arrivalDate'),
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_12__["formatDate"]
    }, {
      headerName: this.$t('folio.table.estimateTimeArrival'),
      field: 'time_arrival',
      width: 112
    }, {
      headerName: this.$t('folio.table.departureDate'),
      field: 'date_departure',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_12__["formatDate"]
    }, {
      headerName: this.$t('folio.table.estimateTimeDeparture'),
      field: 'time_departure',
      width: 130
    }, {
      headerName: this.$t('folio.table.roomRate'),
      field: 'room_rate',
      width: 180
    }, {
      headerName: this.$t('folio.table.weekdayRate'),
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_12__["formatNumber"]
    }, {
      headerName: this.$t('folio.table.weekendRate'),
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_12__["formatNumber"]
    }, {
      headerName: this.$t('folio.table.balance'),
      field: 'balance',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_12__["formatNumber"]
    }, {
      headerName: this.$t('folio.table.company'),
      field: 'company',
      width: 110
    }, {
      headerName: this.$t('folio.table.group'),
      field: 'guest_group',
      width: 110
    }, {
      headerName: this.$t('folio.table.adult'),
      field: 'adult',
      width: 75
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
      headerName: this.$t('folio.table.hkNote'),
      field: 'hk_note',
      width: 200
    }, {
      headerName: this.$t('folio.table.voucherNumberTA'),
      field: 'voucher_number_ta',
      width: 160
    }, {
      headerName: this.$t('folio.table.insertBy'),
      field: 'insert_by',
      width: 110
    }, {
      headerName: this.$t('folio.table.checkOutBy'),
      field: 'check_out_by',
      width: 115
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"]
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
        name: this.$t('folioHistory.contexMenu.transaction'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction();
        }
      }, 'separator', {
        name: this.$t('folioHistory.contexMenu.cancelCheckOut'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.handleCancelCheckOut();
        }
      }, {
        name: this.$t('folioHistory.contexMenu.printFolio'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('tracking_icon24'),
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
    // ------------------ START Folio History CRUD----------------//
    getFolioHistoryList: function getFolioHistoryList(search) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$folioHistoryRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.search = search;
                _context2.prev = 1;
                _context2.next = 4;
                return folioHistoryResource.list(search);

              case 4:
                _yield$folioHistoryRe = _context2.sent;
                data = _yield$folioHistoryRe.data;
                _this3.rowData = data.data;
                _this3.pinnedBottomRowData = data.total;

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 11]]);
      }))();
    },
    trackingData: function trackingData(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$folioHistoryRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return folioHistoryResource.log(id.id_log);

              case 3:
                _yield$folioHistoryRe2 = _context3.sent;
                data = _yield$folioHistoryRe2.data;
                _this4.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this4.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    refreshData: function refreshData(search) {
      this.search = search;
      this.$loadingIndicator(this);
      this.getFolioHistoryList(search);
    },
    // ------------------ END Folio History CRUD------------------//
    // ------------------START SIDEBARR OPTIONS-------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    // ------------------END SIDEBARR OPTIONS---------------------//
    // ------------------START OTHER OPTION-----------------------//
    handleTransaction: function handleTransaction() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$folioHistoryRe3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.$loadingIndicator(_this5);

                _context4.next = 3;
                return folioHistoryResource.get(_this5.paramsData.folio_number);

              case 3:
                _yield$folioHistoryRe3 = _context4.sent;
                data = _yield$folioHistoryRe3.data;

                _this5.$router.push({
                  name: 'transaction',
                  params: {
                    form: _this5.global.formType.folioHistory,
                    stayInformations: data.list
                  }
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    handlePrintFolio: function handlePrintFolio() {
      this.sidebarOption = false;
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.folio, "&folioNumber=").concat(this.paramsData.folio_number, "&template=").concat(this.global.stimulsoftReportFileDirectory.folio)
      });
      window.open(newTabReport.href, '_blank');
    },
    handleCancelCheckOut: function handleCancelCheckOut() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this6.paramsData.folioType == _this6.global.folioType.guestFolio) {
                  _this6.showCredential(true, _this6.global.accessSpecialOrder.cancelCheckOut);
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this6.$t('responseStatus.cancelCheckOut.2'));
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    cancelCheckOut: function cancelCheckOut() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _yield$folioHistoryRe4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.$loadingIndicator(_this7);

                params = {
                  folio_number: _this7.paramsData.folio_number,
                  user_id: _this7.global.userInfo.code,
                  reason: _this7.credential.reason,
                  user_by: _this7.credential.user
                };
                _context6.prev = 2;
                _context6.next = 5;
                return folioHistoryResource.cancelCheckOut(params);

              case 5:
                _yield$folioHistoryRe4 = _context6.sent;
                data = _yield$folioHistoryRe4.data;

                _this7.$vs.loading.close('#layout--main>.con-vs-loading');

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this7.$t("responseStatus.cancelCheckOut.".concat(data)));
                }

                _this7.sidebarOption = false;

                _this7.refreshData(_this7.search);

                return _context6.abrupt("return", data);

              case 14:
                _context6.prev = 14;
                _context6.t0 = _context6["catch"](2);

                _this7.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_9__["default"].errorSaveDataAlert();

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[2, 14]]);
      }))();
    },
    showForm: function showForm(idData, modeData) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (idData.folioType === _this8.global.folioType.guestFolio) {
                  _this8.$refs.registrationForm.showForm(idData, modeData);
                } else {//
                }

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // ------------------END OTHER OPTION-------------------------//
    // ------------------end need setting manual for crud-------------//
    // --------------------CREDENTIAL-----------------------------//
    showCredential: function showCredential(isCredential, type) {
      this.credential = {};
      this.activeCredentialPrompt = true;
      this.specialAccessType = type;
      this.isCredential = isCredential;
      this.credentialTitle = 'Cancel Check Out';
    },
    acceptReason: function acceptReason() {
      if (this.specialAccessType == this.global.accessSpecialOrder.cancelCheckOut) {
        this.cancelCheckOut(false);
      }
    } // --------------------CREDENTIAL-----------------------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi; //
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (this.sidebarOption == false) {
        document.getElementById('main-container').click();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        on: {
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
          formType: _vm.global.formType.folioHistory,
          limitPageSize: _vm.limitPageSize,
          searchOption: _vm.searchFilterData,
          searchDefault: _vm.vModelDefaultSearchData,
        },
        on: { search: _vm.refreshData },
      }),
      _vm._v(" "),
      _c("registration-form", {
        ref: "registrationForm",
        attrs: { isFolioHistory: true },
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
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
      _c(
        "vs-sidebar",
        {
          ref: "sidebar",
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
                    _vm._s(_vm.titleForm + " " + _vm.$t("folio.menu.option")) +
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
                  attrs: { index: "2" },
                  on: {
                    click: function ($event) {
                      return _vm.handleCancelCheckOut()
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
                    "\n                   " +
                      _vm._s(_vm.$t("folio.menu.cancelCheckOut")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
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
                    "\n                   " +
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
      _vm._v(" "),
      _c("credential", {
        attrs: {
          value: _vm.credential,
          specialAccessType: _vm.specialAccessType,
          activeCredential: _vm.activeCredentialPrompt,
          isCredential: _vm.isCredential,
          isReason: true,
          title: _vm.credentialTitle,
        },
        on: {
          "update:active-credential": function (val) {
            return (_vm.activeCredentialPrompt = val)
          },
          acceptReason: _vm.acceptReason,
          input: function (newValue) {
            _vm.credential = newValue
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

/***/ "./resources/js/src/api/folioHistory.js":
/*!**********************************************!*\
  !*** ./resources/js/src/api/folioHistory.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionResource; });
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



var tableName = 'folio';
var uri = 'foliohistory';

var TransactionResource = /*#__PURE__*/function (_Resource) {
  _inherits(TransactionResource, _Resource);

  var _super = _createSuper(TransactionResource);

  function TransactionResource() {
    _classCallCheck(this, TransactionResource);

    return _super.call(this, uri);
  }

  _createClass(TransactionResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "cancelCheckOut",
    value: function cancelCheckOut(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/cancelcheckout',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lookup",
    value: function lookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/lookup',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "account",
    value: function account(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/account',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "folioType",
    value: function folioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/foliotype',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listRouting",
    value: function listRouting() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/routing',
        method: 'get'
      });
    }
  }, {
    key: "listFolio",
    value: function listFolio(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/folio',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transfer",
    value: function transfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/transaction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "charge",
    value: function charge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/charge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "payment",
    value: function payment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/payment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "correction",
    value: function correction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "void",
    value: function _void(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/void',
        method: 'post',
        data: data
      });
    }
  }]);

  return TransactionResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolioHistory.vue?vue&type=template&id=57681ebf& */ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&");
/* harmony import */ var _FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolioHistory.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/folio-history/FolioHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioHistory.vue?vue&type=template&id=57681ebf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/folio-history/FolioHistory.vue?vue&type=template&id=57681ebf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioHistory_vue_vue_type_template_id_57681ebf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);