(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_delete_editor */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ARCityLedgerForm',
  props: {
    titleForm: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
      columnDefs2: null,
      rowData: null,
      rowDataInsert: [],
      gridOptions: null,
      gridOptions2: null,
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
      paramsDataEditor: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataEditor: 0,
      modeDataValueTracking: 0,
      // Pop Up
      mainPopUp: false,
      directBillPopUp: false,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      vFolioData: {},
      vFolioDataOld: {},
      vFolioDataInsert: {},
      vDirectBill: {},
      vCurrency: {},
      dataLookup: [],
      folioList: [],
      folioListTemp: [],
      companyCodeTemp: '',
      // data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false,
      mainTableName: '',
      form: 1
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions2 = {
      rowHeight: this.global.rowHeightDefault
    };
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
      headerName: this.$t('arCityLedger.table.folioNumber'),
      field: 'folio_number',
      width: 120
    }, {
      headerName: this.$t('arCityLedger.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('arCityLedger.table.auditDate'),
      field: 'audit_date',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatDate"]
    }, {
      headerName: this.$t('arCityLedger.table.guestName'),
      field: 'full_name',
      width: 120
    }, {
      headerName: this.$t('arCityLedger.table.amount'),
      field: 'amount_old',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.amountCharged'),
      field: 'amount',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currency'),
      field: 'default_currency_code',
      width: 90
    }, {
      headerName: this.$t('arCityLedger.table.amountChargedForeign'),
      field: 'amount_foreign',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.currencyForeign'),
      field: 'currency_code',
      width: 110
    }, {
      headerName: this.$t('arCityLedger.table.exchangeRate'),
      field: 'exchange_rate',
      width: 133,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatNumber"]
    }, {
      headerName: this.$t('arCityLedger.table.remark'),
      field: 'remark',
      width: 200
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGridEditor: _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.updateDiractBill'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
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
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$emit('refreshData');

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
        issued_date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatDateDatabase"])(this.auditDate),
        due_date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatDateDatabaseAddWeek"])(this.auditDate, 1),
        user_id: this.global.userInfo.code
      };
      this.vFolioData = {
        default_currency_code: this.defaultCurrency,
        user_id: this.global.userInfo.code
      };
      this.rowDataInsert = [];
      this.form = 1;
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
      this.modeDataEditor = this.global.modeData.insert;
    },
    dateDisable: function dateDisable(date) {
      if (this.vModel.issued_date) {
        var dateX = new Date(this.vModel.issued_date);
        dateX.setDate(dateX.getDate());
        return date < dateX;
      }
    },
    handleChangeIssuedDate: function handleChangeIssuedDate() {
      if (this.vModel.issued_date) {
        if (this.vModel.issued_date > this.vModel.due_date) {
          this.vModel.due_date = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_8__["formatDateDatabaseAddWeek"])(this.vModel.issued_date, 1);
        }
      }
    },
    getDataLookup: function getDataLookup() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var params, _yield$arCityLedgerRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  country_code: _this3.vModel.country_code,
                  state_code: _this3.vModel.state_code
                };
                _context2.next = 3;
                return arCityLedgerResource.dataLookup(params);

              case 3:
                _yield$arCityLedgerRe = _context2.sent;
                data = _yield$arCityLedgerRe.data;
                _this3.dataLookup = data;
                _this3.vCurrency = data.currency[0];

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showModal: function showModal(idData, modeData) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.resetData(_this4.search);

                _this4.idData = idData.id_log;
                _this4.paramsData = idData;
                _this4.modeDataValue = modeData;

                if (!(modeData == _this4.global.modeData.edit)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 7;
                return _this4.editData();

              case 7:
                _context3.next = 21;
                break;

              case 9:
                if (!(modeData == _this4.global.modeData.tracking)) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 12;
                return _this4.trackingData(idData);

              case 12:
                _this4.mainPopUp = true;
                _context3.next = 21;
                break;

              case 15:
                if (!(modeData == _this4.global.modeData.insert)) {
                  _context3.next = 21;
                  break;
                }

                _this4.$loadingIndicator(_this4);

                _context3.next = 19;
                return _this4.getDataLookup();

              case 19:
                _this4.$closeLoadingIndicator(_this4);

                _this4.mainPopUp = true;

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getCurrencyOnEditData: function getCurrencyOnEditData() {
      var _this5 = this;

      if (this.rowDataInsert.length > 0) {
        this.dataLookup.currency.forEach(function (element) {
          if (element.code == _this5.rowDataInsert[0].currency_code) {
            _this5.vCurrency = element;
          }
        });
      }
    },
    editData: function editData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$arCityLedgerRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                _this6.$loadingIndicator(_this6);

                _context4.next = 4;
                return arCityLedgerResource.get(_this6.paramsData.number);

              case 4:
                _yield$arCityLedgerRe2 = _context4.sent;
                data = _yield$arCityLedgerRe2.data;

                _this6.$closeLoadingIndicator(_this6);

                if (!(data > 0)) {
                  _context4.next = 11;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this6.$t("responseStatus.cityLedgerInvoice.".concat(data)));
                _context4.next = 18;
                break;

              case 11:
                _this6.vModel = data.invoice;
                _this6.companyCodeTemp = _this6.vModel.company_code;
                _this6.rowDataInsert = data.invoiceItem;
                _context4.next = 16;
                return _this6.getDataLookup();

              case 16:
                _this6.getCurrencyOnEditData();

                _this6.mainPopUp = true;

              case 18:
                _context4.next = 24;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](0);

                _this6.$closeLoadingIndicator(_this6);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 20]]);
      }))();
    },
    showUpdateDirectBill: function showUpdateDirectBill(params) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this7.paramsData = params;
                _context5.next = 3;
                return _this7.handleUpdateDirectBill();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    handleUpdateDirectBill: function handleUpdateDirectBill() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this8.resetDirectBill();

                _this8.$loadingIndicator(_this8);

                _this8.getDataLookup();

                _context6.next = 5;
                return _this8.editDirectBill();

              case 5:
                _this8.directBillPopUp = true;

                _this8.$closeLoadingIndicator(_this8);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    insertData: function insertData() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$arCityLedgerRe3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;

                _this9.$loadingIndicator(_this9);

                _this9.vModel.data = _this9.getAllRows();
                _context7.next = 5;
                return arCityLedgerResource.store(_this9.vModel);

              case 5:
                _yield$arCityLedgerRe3 = _context7.sent;
                data = _yield$arCityLedgerRe3.data;
                _context7.next = 9;
                return _this9.refreshData(_this9.search);

              case 9:
                _this9.$closeLoadingIndicator(_this9);

                _this9.mainPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
                _this9.btnSaveDisabled = false;
                _context7.next = 20;
                break;

              case 15:
                _context7.prev = 15;
                _context7.t0 = _context7["catch"](0);
                _this9.btnSaveDisabled = false;

                _this9.$closeLoadingIndicator(_this9);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert();

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 15]]);
      }))();
    },
    handleNext: function handleNext() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this10.$validator.validateAll('information').then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!result) {
                              _context8.next = 8;
                              break;
                            }

                            _this10.vFolioData = {
                              default_currency_code: _this10.defaultCurrency,
                              currency_code: _this10.vCurrency ? _this10.vCurrency.code : '',
                              exchange_rate: _this10.vCurrency ? _this10.vCurrency.exchange_rate : 0
                            };

                            if (_this10.vModel.company_code != _this10.companyCodeTemp) {
                              _this10.rowDataInsert = [];
                            }

                            _this10.companyCodeTemp = _this10.vModel.company_code;
                            _context8.next = 6;
                            return _this10.getFolio();

                          case 6:
                            _this10.removeDataLookupFolioOnInsert();

                            _this10.form = 2;

                          case 8:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    handleBack: function handleBack() {
      this.btnSaveDisabled = false;
      this.form = 1;
    },
    getTotalAmount: function getTotalAmount() {
      this.vFolioData.amount = this.vFolioData.amount_foreign * this.vCurrency.exchange_rate;
    },
    handleChangeCurrency: function handleChangeCurrency() {
      this.vFolioDataOld.exchange_rate = this.vCurrency.exchange_rate;
      this.vFolioDataOld.currency_code = this.vCurrency.code;
      this.vFolioData.exchange_rate = this.vCurrency.exchange_rate;
      this.vFolioData.currency_code = this.vCurrency.code;

      if (this.vFolioData.amount > 0) {
        this.vFolioData.amount_foreign = this.vFolioDataOld.amount / this.vCurrency.exchange_rate;
        this.vFolioData.amount_old = this.vFolioDataOld.amount / this.vCurrency.exchange_rate;
        this.getTotalAmount();
      }

      if (this.vCurrency.exchange_rate == '') {
        this.vCurrency.exchange_rate = 1;
      }
    },
    handleChangeFolio: function handleChangeFolio() {
      if (this.vFolioData.folio) {
        var _this$cloneObject = this.cloneObject(this.vFolioData),
            folio = _this$cloneObject.folio;

        this.vFolioDataOld.folio_number = folio.folio_number;
        this.vFolioDataOld.amount_old = folio.total_amount;
        this.vFolioDataOld.amount = folio.total_amount;
        this.vFolioDataOld.full_name = folio.full_name;
        this.vFolioDataOld.room_number = folio.room_number;
        this.vFolioDataOld.audit_date = folio.audit_date;
        this.vFolioData.folio_number = folio.folio_number;
        this.vFolioData.amount = folio.total_amount;
        this.vFolioData.full_name = folio.full_name;
        this.vFolioData.room_number = folio.room_number;
        this.vFolioData.audit_date = folio.audit_date;
        this.handleChangeCurrency();
      }
    },
    convertFolioDataForInsert: function convertFolioDataForInsert() {
      var folio = this.vFolioData;
      var folioOld = this.vFolioDataOld;
      this.vFolioDataInsert.folio_number = folio.folio_number;
      this.vFolioDataInsert.amount_old = folioOld.amount_old;
      this.vFolioDataInsert.full_name = folioOld.full_name;
      this.vFolioDataInsert.room_number = folioOld.room_number;
      this.vFolioDataInsert.audit_date = folioOld.audit_date;
      this.vFolioDataInsert.currency_code = folio.currency_code;
      this.vFolioDataInsert.exchange_rate = this.vCurrency.exchange_rate;
      this.vFolioDataInsert.default_currency_code = this.defaultCurrency;
      this.vFolioDataInsert.amount_foreign = folio.amount_foreign;
      this.vFolioDataInsert.amount = folio.amount;
      this.vFolioDataInsert.remark = folio.remark;
    },
    getAllRows: function getAllRows() {
      var rowData = [];
      this.gridOptions2.api.forEachNode(function (node) {
        return rowData.push(node.data);
      });
      return rowData;
    },
    cloneObject: function cloneObject(object) {
      var clone = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) // ensure not adding inherited props
          {
            clone[key] = object[key];
          }
      }

      return clone;
    },
    handleInsertFolio: function handleInsertFolio() {
      var _this11 = this;

      this.$validator.validateAll('folio').then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(result) {
          var isExist, selectedData;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!result) {
                    _context10.next = 22;
                    break;
                  }

                  if (!(_this11.vFolioData.folio_number != null)) {
                    _context10.next = 22;
                    break;
                  }

                  isExist = false;

                  _this11.gridOptions2.api.forEachNode(function (rowNode, index) {
                    if (_this11.modeDataEditor == _this11.global.modeData.insert) {
                      if (rowNode.data.folio_number == _this11.vFolioData.folio_number) {
                        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this11.$t('responseStatus.cityLedgerEditor.0'));
                        isExist = true;
                      }

                      ;
                    } else {
                      if (rowNode.data.folio_number !== _this11.paramsDataEditor.folio_number) {
                        if (rowNode.data.folio_number == _this11.vFolioData.folio_number) {
                          _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this11.$t('responseStatus.cityLedgerEditor.0'));
                          isExist = true;
                        }
                      }

                      ;
                    }
                  });

                  if (!(_this11.vFolioData.amount > 0)) {
                    _context10.next = 22;
                    break;
                  }

                  _this11.convertFolioDataForInsert();

                  if (isExist) {
                    _context10.next = 22;
                    break;
                  }

                  if (!_this11.validateAmount(_this11.vFolioDataOld.amount_old, _this11.vFolioData.amount)) {
                    _context10.next = 21;
                    break;
                  }

                  if (_this11.modeDataEditor == _this11.global.modeData.edit) {
                    selectedData = _this11.gridOptions2.api.getSelectedRows();

                    _this11.gridOptions2.api.updateRowData({
                      remove: selectedData
                    });

                    _this11.folioList = _this11.folioListTemp.slice();
                  }

                  if (_this11.rowDataInsert == null) {
                    _this11.rowDataInsert = [];
                  } else {
                    _this11.rowDataInsert = _this11.getAllRows();
                  }

                  if (_this11.rowDataInsert.length >= 0) {
                    _this11.vFolioDataInsert.index = _this11.rowDataInsert.length;
                  }

                  _context10.next = 13;
                  return _this11.rowDataInsert.push(_this11.cloneObject(_this11.vFolioDataInsert));

                case 13:
                  _this11.removeDataLookupFolioOnInsert();

                  _this11.vFolioData = {};
                  _this11.vFolioDataInsert = {};
                  _this11.vFolioData.folio = '';

                  _this11.$validator.reset();

                  _this11.modeDataEditor = _this11.global.modeData.insert;
                  _context10.next = 22;
                  break;

                case 21:
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this11.$t('responseStatus.cityLedgerEditor.1'));

                case 22:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    removeDataLookupFolioOnInsert: function removeDataLookupFolioOnInsert() {
      var _this12 = this;

      if (this.folioList && this.rowDataInsert) {
        (function () {
          var folioX = _this12.rowDataInsert;
          var folio = _this12.folioList;

          var _loop = function _loop(i) {
            folioX.forEach(function (element) {
              if (folio[i].folio_number == element.folio_number) {
                _this12.folioList.splice(i, 1);
              }
            });
          };

          for (var i = 0; i < folio.length; i++) {
            _loop(i);
          }
        })();
      }
    },
    validateAmount: function validateAmount(oldValue, newValue) {
      if (newValue <= oldValue) {
        return true;
      }

      return false;
    },
    getFolio: function getFolio() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var params, _yield$arCityLedgerRe4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                params = {
                  company_code: _this13.vModel.company_code,
                  invoice_number: _this13.modeDataValue == _this13.global.modeData.edit ? _this13.paramsData.number : '',
                  mode: _this13.modeDataValue
                };
                _context11.prev = 1;

                _this13.$loadingIndicator(_this13);

                _context11.next = 5;
                return arCityLedgerResource.getFolio(params);

              case 5:
                _yield$arCityLedgerRe4 = _context11.sent;
                data = _yield$arCityLedgerRe4.data;
                _this13.folioListTemp = data; // save data to temp

                _this13.folioList = data.slice(); // clone data array

                _this13.$closeLoadingIndicator(_this13);

                _context11.next = 16;
                break;

              case 12:
                _context11.prev = 12;
                _context11.t0 = _context11["catch"](1);

                _this13.$closeLoadingIndicator(_this13);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 12]]);
      }))();
    },
    updateData: function updateData() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _yield$arCityLedgerRe5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;

                _this14.$loadingIndicator(_this14);

                _this14.vModel.data = _this14.getAllRows();
                _this14.vModel.invoice_number = _this14.paramsData.number;
                _context12.next = 6;
                return arCityLedgerResource.update(_this14.vModel);

              case 6:
                _yield$arCityLedgerRe5 = _context12.sent;
                data = _yield$arCityLedgerRe5.data;
                _context12.next = 10;
                return _this14.refreshData(_this14.search);

              case 10:
                _this14.$closeLoadingIndicator(_this14);

                _this14.mainPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
                _this14.btnSaveDisabled = false;
                _context12.next = 21;
                break;

              case 16:
                _context12.prev = 16;
                _context12.t0 = _context12["catch"](0);
                _this14.btnSaveDisabled = false;

                _this14.$closeLoadingIndicator(_this14);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert();

              case 21:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 16]]);
      }))();
    },
    saveData: function saveData() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _this15.$validator.validateAll('information').then( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(result) {
                    var folio, i, issuedDate, issuedTime, date, time;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            if (!result) {
                              _context13.next = 33;
                              break;
                            }

                            console.log(_this15.rowDataInsert);

                            if (!(_this15.rowDataInsert != null && _this15.rowDataInsert.length > 0)) {
                              _context13.next = 32;
                              break;
                            }

                            _this15.btnSaveDisabled = true;
                            _this15.vModel.user_id = _this15.global.userInfo.code;
                            folio = _this15.getAllRows();
                            i = 0;

                          case 7:
                            if (!(i < folio.length)) {
                              _context13.next = 19;
                              break;
                            }

                            issuedDate = new Date(_this15.vModel.issued_date);
                            issuedTime = issuedDate.getTime();
                            date = new Date(folio[i].audit_date);
                            time = date.getTime();

                            if (!(time > issuedTime)) {
                              _context13.next = 16;
                              break;
                            }

                            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this15.$t('responseStatus.cityLedgerEditor.2'));
                            _this15.btnSaveDisabled = false;
                            return _context13.abrupt("return");

                          case 16:
                            i++;
                            _context13.next = 7;
                            break;

                          case 19:
                            if (!(_this15.modeDataValue == 1)) {
                              _context13.next = 26;
                              break;
                            }

                            _this15.$vs.loading({
                              container: '#button-save-main',
                              scale: _this15.global.scaleLoadingButton
                            });

                            _context13.next = 23;
                            return _this15.updateData();

                          case 23:
                            _this15.$vs.loading.close('#button-save-main>.con-vs-loading');

                            _context13.next = 30;
                            break;

                          case 26:
                            _this15.$vs.loading({
                              container: '#button-save-main',
                              scale: _this15.global.scaleLoadingButton
                            });

                            _context13.next = 29;
                            return _this15.insertData();

                          case 29:
                            _this15.$vs.loading.close('#button-save-main>.con-vs-loading');

                          case 30:
                            _context13.next = 33;
                            break;

                          case 32:
                            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_7__["default"].information(_this15.$t('responseStatus.cityLedgerEditor.4'));

                          case 33:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    resetDirectBill: function resetDirectBill() {
      this.vDirectBill = {
        direct_bill_code_after: '',
        direct_bill_code_before: this.paramsData.direct_bill_code,
        folio_number: this.paramsData.folio_number,
        user_id: this.global.userInfo.code
      };
    },
    handleSaveDirectBill: function handleSaveDirectBill() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _this16.$validator.validateAll('directBill').then( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            if (!result) {
                              _context15.next = 3;
                              break;
                            }

                            _context15.next = 3;
                            return _this16.updateDirectBill();

                          case 3:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    updateDirectBill: function updateDirectBill() {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var _yield$arCityLedgerRe6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;

                _this17.$loadingIndicator(_this17);

                _context17.next = 4;
                return arCityLedgerResource.updateDirectBill(_this17.vDirectBill);

              case 4:
                _yield$arCityLedgerRe6 = _context17.sent;
                data = _yield$arCityLedgerRe6.data;

                _this17.refreshData(_this17.search);

                _this17.directBillPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
                _context17.next = 15;
                break;

              case 11:
                _context17.prev = 11;
                _context17.t0 = _context17["catch"](0);

                _this17.$closeLoadingIndicator(_this17);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert();

              case 15:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[0, 11]]);
      }))();
    },
    editDirectBill: function editDirectBill() {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var _yield$arCityLedgerRe7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return arCityLedgerResource.editDirectBill({
                  id_log: _this18.paramsData.id_log
                });

              case 2:
                _yield$arCityLedgerRe7 = _context18.sent;
                data = _yield$arCityLedgerRe7.data;
                _this18.vDirectBill.direct_bill_code_after = data.direct_bill_code;

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    // update item invoice
    handleUpdateEditor: function handleUpdateEditor(params) {
      this.paramsDataEditor = this.cloneObject(params);
      this.modeDataEditor = this.global.modeData.edit;
      this.vFolioData = this.cloneObject(params);
      this.vFolioDataOld = this.cloneObject(params);
      this.vCurrency.code = params.currency_code;
      this.vCurrency.exchange_rate = params.exchange_rate;
      this.vFolioData.folio = params.folio_number; // calculate

      if (this.vFolioData.amount > 0) {
        this.vFolioData.amount_foreign = this.vFolioDataOld.amount / this.vCurrency.exchange_rate;
        this.vFolioData.amount_old = this.vFolioDataOld.amount / this.vCurrency.exchange_rate;
        this.getTotalAmount();
      }
    },
    handleDeleteEditor: function handleDeleteEditor() {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var selectedData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                selectedData = _this19.gridOptions2.api.getSelectedRows();

                _this19.gridOptions2.api.updateRowData({
                  remove: selectedData
                });

                _this19.rowDataInsert = _this19.getAllRows();
                _this19.folioList = _this19.folioListTemp.slice();

                _this19.removeDataLookupFolioOnInsert();

                _this19.$validator.reset();

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    handleCancel: function handleCancel() {
      this.paramsDataEditor = {};
      this.modeDataEditor = this.global.modeData.insert;
      this.vFolioData = {};
      this.vFolioDataOld = {};
      this.$validator.reset();
    },
    trackingData: function trackingData(idData) {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this20.global.tableName.subFolio
                };

                _this20.$loadingIndicator(_this20);

                _context20.prev = 2;
                _context20.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context20.sent;
                data = _yield$trackingDataRe.data;
                _this20.dataTracking = data.modelGrid;
                _context20.next = 13;
                break;

              case 10:
                _context20.prev = 10;
                _context20.t0 = _context20["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();

              case 13:
                _this20.$closeLoadingIndicator(_this20);

              case 14:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[2, 10]]);
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
    this.gridApi = this.gridOptions2.api;
    this.ColumnApi = this.gridOptions2.columnApi;
  },
  watch: {
    mainPopUp: function mainPopUp() {
      if (!this.mainPopUp) {
        this.refreshData(this.search);
      }
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20& ***!
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
    [
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          title: "Update Direct Bill",
          width: 600,
          active: _vm.directBillPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveDirectBill()
          },
          close: function (val) {
            return (_vm.directBillPopUp = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "vs-row",
                  {
                    staticClass: "mt-3",
                    attrs: { "vs-type": "flex", "vs-justify": "space-between" },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "w-full wrap-form-select" },
                      [
                        _c("vs-row", [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("arCityLedger.company"))),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          [
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'",
                                },
                              ],
                              staticClass: "w-full height200",
                              attrs: {
                                id: "form-select",
                                appendToBody: "",
                                label: "name",
                                clearable: false,
                                reduce: function (value) {
                                  return value.code
                                },
                                options: _vm.dataLookup.company,
                                name: "company",
                                "data-vv-scope": "directBill",
                              },
                              model: {
                                value: _vm.vDirectBill.direct_bill_code_after,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.vDirectBill,
                                    "direct_bill_code_after",
                                    $$v
                                  )
                                },
                                expression:
                                  "vDirectBill.direct_bill_code_after",
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has("directBill.company"),
                                    expression:
                                      "errors.has('directBill.company')",
                                  },
                                ],
                                staticClass: "error-text text-danger",
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("toString")(
                                      _vm.errors.first("directBill.company") ||
                                        _vm.dbErrors.direct_bill_code_after
                                    )
                                  )
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) +
                _vm.$t("arCityLedger.invoice"),
          width: _vm.form == 1 ? 600 : 80,
          active: _vm.mainPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
          textButton1: _vm.form == 1 ? "Next" : "Save",
        },
        on: {
          button1: function ($event) {
            _vm.form == 1 ? _vm.handleNext() : _vm.saveData()
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
                              "vs-justify": "space-between",
                            },
                          },
                          [
                            _c("vs-col", { staticClass: "w-full" }, [
                              _vm.form == 1
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "vx-card",
                                        { staticClass: "w-full" },
                                        [
                                          _c(
                                            "vs-row",
                                            {
                                              staticClass: "mt-3 w-full",
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "arCityLedger.issuedDate"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("date-picker", {
                                                        directives: [
                                                          {
                                                            name: "validate",
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "date",
                                                          confirm: "",
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD",
                                                          format: "DD/MM/YYYY",
                                                          label: "name",
                                                          placeholder:
                                                            "DD/MM/YYYY",
                                                          name: "issued date",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        on: {
                                                          input:
                                                            _vm.handleChangeIssuedDate,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .issued_date,
                                                          callback: function (
                                                            $$v
                                                          ) {
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
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.errors.has(
                                                                  "information.issued date"
                                                                ),
                                                              expression:
                                                                "errors.has('information.issued date')",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  "information.issued date"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .issued_date
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "arCityLedger.dueDate"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("date-picker", {
                                                        directives: [
                                                          {
                                                            name: "validate",
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "date",
                                                          confirm: "",
                                                          "disabled-date":
                                                            _vm.dateDisable,
                                                          "confirm-text": "Ok",
                                                          lang: _vm.$t("lang"),
                                                          "value-type":
                                                            "YYYY-MM-DD",
                                                          format: "DD/MM/YYYY",
                                                          label: "name",
                                                          placeholder:
                                                            "DD/MM/YYYY",
                                                          name: "due date",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.due_date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "due_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.due_date",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.errors.has(
                                                                  "information.due date"
                                                                ),
                                                              expression:
                                                                "errors.has('information.due date')",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  "information.due date"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .due_date
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
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
                                              _c(
                                                "div",
                                                { staticClass: "w-full" },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.company"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        directives: [
                                                          {
                                                            name: "validate",
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "form-select",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .company,
                                                          name: "company",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .company_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "company_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.company_code",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "show",
                                                              rawName: "v-show",
                                                              value:
                                                                _vm.errors.has(
                                                                  "information.company"
                                                                ),
                                                              expression:
                                                                "errors.has('information.company')",
                                                            },
                                                          ],
                                                          staticClass:
                                                            "error-text text-danger",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "toString"
                                                              )(
                                                                _vm.errors.first(
                                                                  "information.company"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .company_code
                                                              )
                                                            )
                                                          ),
                                                        ]
                                                      ),
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.contactPerson"
                                                          )
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
                                                            rawName:
                                                              "v-validate",
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "text",
                                                          "description-text":
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                "information.contact person"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .full_name
                                                            ),
                                                          name: "contact person",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .full_name,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "full_name",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.full_name",
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
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.street"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { type: "text" },
                                                        model: {
                                                          value:
                                                            _vm.vModel.street,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "street",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.street",
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.country"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "form-select",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .country,
                                                        },
                                                        on: {
                                                          input:
                                                            _vm.getDataLookup,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .country_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "country_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.country_code",
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
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.state"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "form-select",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .state,
                                                        },
                                                        on: {
                                                          input:
                                                            _vm.getDataLookup,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .state_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "state_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.state_code",
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.city"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    {
                                                      staticClass:
                                                        "wrap-form-select",
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "form-select",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup.city,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .city_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "city_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.city_code",
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
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [_vm._v(".")]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled:
                                                            _vm.vModel
                                                              .city_code !=
                                                            "OTH",
                                                          type: "text",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.city,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "city",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.city",
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.postalCode"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { type: "text" },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .postal_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "postal_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.postal_code",
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
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.phone"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { type: "text" },
                                                        model: {
                                                          value:
                                                            _vm.vModel.phone1,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "phone1",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.phone1",
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
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.fax"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { type: "text" },
                                                        model: {
                                                          value: _vm.vModel.fax,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "fax",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.fax",
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
                                                "div",
                                                {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "arCityLedger.remark"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("vs-input", {
                                                        staticClass: "w-full",
                                                        attrs: { type: "text" },
                                                        model: {
                                                          value:
                                                            _vm.vModel.remark,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "remark",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.remark",
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
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    [
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full lg:w-1/3" },
                                        [
                                          _c(
                                            "vs-row",
                                            {
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c(
                                                "vs-button",
                                                {
                                                  staticClass: "mb-2",
                                                  attrs: {
                                                    color:
                                                      _vm.global.buttonColor
                                                        .back,
                                                  },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.handleBack()
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("button.back")
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-button",
                                                {
                                                  staticClass: "mb-2",
                                                  attrs: { icon: "add" },
                                                  on: {
                                                    click: function ($event) {
                                                      return _vm.handleInsertFolio()
                                                    },
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.modeDataEditor ==
                                                        _vm.global.modeData
                                                          .insert
                                                        ? _vm.$t(
                                                            "button.insert"
                                                          )
                                                        : _vm.$t("button.save")
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.modeDataEditor ==
                                              _vm.global.modeData.edit
                                                ? _c(
                                                    "vs-button",
                                                    {
                                                      staticClass: "mb-2",
                                                      attrs: {
                                                        color:
                                                          _vm.global.buttonColor
                                                            .cancel,
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.handleCancel()
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "button.cancel"
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vx-card",
                                            [
                                              _c(
                                                "vs-row",
                                                {
                                                  staticClass: "mt-3 w-full",
                                                  attrs: {
                                                    "vs-type": "flex",
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "w-full" },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.folioNumber"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-row",
                                                        {
                                                          staticClass:
                                                            "wrap-form-select",
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            directives: [
                                                              {
                                                                name: "validate",
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full height200",
                                                            attrs: {
                                                              id: "form-select",
                                                              label:
                                                                "folio_number",
                                                              resetOnOptionsChange: true,
                                                              clearable: false,
                                                              options:
                                                                _vm.folioList,
                                                              name: "folio number",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.handleChangeFolio()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .folio,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "folio",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.folio",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.errors.has(
                                                                      "folio.folio number"
                                                                    ),
                                                                  expression:
                                                                    "errors.has('folio.folio number')",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "error-text text-danger",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toString"
                                                                  )(
                                                                    _vm.errors.first(
                                                                      "folio.folio number"
                                                                    ) ||
                                                                      _vm
                                                                        .dbErrors
                                                                        .folio_number
                                                                  )
                                                                )
                                                              ),
                                                            ]
                                                          ),
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
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.guestName"
                                                              )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                              "description-text":
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.guest name"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .full_name
                                                                ),
                                                              name: "guest name",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .full_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "full_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.full_name",
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
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.roomNumber"
                                                              )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                              "description-text":
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.room number"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .room_number
                                                                ),
                                                              name: "room number",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .room_number,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "room_number",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.room_number",
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
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.amount"
                                                              )
                                                            )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                              description:
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.amount old"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .amount
                                                                ),
                                                              name: "amount old",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .amount_old,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "amount_old",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.amount_old",
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
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "arCityLedger.auditDate"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-row",
                                                        {
                                                          staticClass:
                                                            "wrap-form-select",
                                                        },
                                                        [
                                                          _c("date-picker", {
                                                            directives: [
                                                              {
                                                                name: "validate",
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "date",
                                                              confirm: "",
                                                              "confirm-text":
                                                                "Ok",
                                                              lang: _vm.$t(
                                                                "lang"
                                                              ),
                                                              "value-type":
                                                                "YYYY-MM-DD",
                                                              format:
                                                                "DD/MM/YYYY",
                                                              label: "name",
                                                              name: "audit date",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .audit_date,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "audit_date",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.audit_date",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.errors.has(
                                                                      "folio.audit date"
                                                                    ),
                                                                  expression:
                                                                    "errors.has('folio.audit date')",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "error-text text-danger",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toString"
                                                                  )(
                                                                    _vm.errors.first(
                                                                      "folio.audit date"
                                                                    ) ||
                                                                      _vm
                                                                        .dbErrors
                                                                        .audit_date
                                                                  )
                                                                )
                                                              ),
                                                            ]
                                                          ),
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
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.currency"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-row",
                                                        {
                                                          staticClass:
                                                            "wrap-form-select",
                                                        },
                                                        [
                                                          _c("v-select", {
                                                            directives: [
                                                              {
                                                                name: "validate",
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full height200",
                                                            attrs: {
                                                              disabled:
                                                                _vm
                                                                  .rowDataInsert
                                                                  .length > 0,
                                                              id: "form-select",
                                                              label: "code",
                                                              clearable: false,
                                                              options:
                                                                _vm.dataLookup
                                                                  .currency,
                                                              name: "currency",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.handleChangeCurrency()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vCurrency,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.vCurrency =
                                                                    $$v
                                                                },
                                                              expression:
                                                                "vCurrency",
                                                            },
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    _vm.errors.has(
                                                                      "folio.currency"
                                                                    ),
                                                                  expression:
                                                                    "errors.has('folio.currency')",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "error-text text-danger",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "toString"
                                                                  )(
                                                                    _vm.errors.first(
                                                                      "folio.currency"
                                                                    ) ||
                                                                      _vm
                                                                        .dbErrors
                                                                        .type
                                                                  )
                                                                )
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.exchangeRate"
                                                              )
                                                            )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled:
                                                                _vm
                                                                  .rowDataInsert
                                                                  .length > 0,
                                                              type: "text",
                                                              comma: 2,
                                                              description:
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.exchange rate"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .exchange_rate
                                                                ),
                                                              name: "exchange rate",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.handleChangeCurrency()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vCurrency
                                                                  .exchange_rate,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vCurrency,
                                                                    "exchange_rate",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vCurrency.exchange_rate",
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
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.amount"
                                                              ) +
                                                                " " +
                                                                _vm.vCurrency
                                                                  .code
                                                            )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              type: "text",
                                                              description:
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.amount foreign"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .item
                                                                ),
                                                              name: "amount foreign",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.getTotalAmount()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .amount_foreign,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "amount_foreign",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.amount_foreign",
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
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "w-full md:w-1/2",
                                                    },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.amount"
                                                              ) +
                                                                " " +
                                                                _vm.defaultCurrency
                                                            )
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
                                                                rawName:
                                                                  "v-validate",
                                                                value:
                                                                  "required",
                                                                expression:
                                                                  "'required'",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                              description:
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.amount"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .item
                                                                ),
                                                              name: "amount",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .amount,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "amount",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.amount",
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
                                                    "vs-justify":
                                                      "space-between",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "w-full" },
                                                    [
                                                      _c("vs-row", [
                                                        _c("label", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "arCityLedger.remark"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-row",
                                                        {
                                                          staticClass:
                                                            "wrap-form-select",
                                                        },
                                                        [
                                                          _c("vs-textarea", {
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              type: "text",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .remark,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "remark",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.remark",
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
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        { staticClass: "w-full lg:w-2/3" },
                                        [
                                          _c(
                                            "vx-card",
                                            [
                                              _c("ag-grid-vue", {
                                                class: _vm.global.themeAgGrid,
                                                style:
                                                  _vm.global.styleAgGridFrame3,
                                                attrs: {
                                                  pagination: "true",
                                                  paginationPageSize:
                                                    _vm.paginationPageSize,
                                                  suppressDragLeaveHidesColumns: true,
                                                  suppressMakeColumnVisibleAfterUnGroup: true,
                                                  rowGroupPanelShow: false,
                                                  statusBar: _vm.statusBar,
                                                  gridOptions: _vm.gridOptions2,
                                                  context: _vm.context,
                                                  columnDefs: _vm.columnDefs2,
                                                  frameworkComponents:
                                                    _vm.frameworkComponents,
                                                  enableCellChangeFlash: true,
                                                  rowSelection:
                                                    _vm.rowSelection,
                                                  rowData: _vm.rowDataInsert,
                                                  defaultColDef:
                                                    _vm.global.defColDef,
                                                  getContextMenuItems:
                                                    _vm.getContextMenu,
                                                },
                                                on: {
                                                  "grid-ready": _vm.onGridReady,
                                                  cellContextMenu:
                                                    _vm.handleRowRightClicked,
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
                            ]),
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

/***/ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ARCityLedgerForm.vue?vue&type=template&id=d0327e20& */ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20&");
/* harmony import */ var _ARCityLedgerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ARCityLedgerForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ARCityLedgerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedgerForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ARCityLedgerForm.vue?vue&type=template&id=d0327e20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/ARCityLedgerForm.vue?vue&type=template&id=d0327e20&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ARCityLedgerForm_vue_vue_type_template_id_d0327e20___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"handleUpdate()\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\">\n                        <vs-button @click=\"handleDelete()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
  methods: {
    handleUpdate: function handleUpdate() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleUpdateEditor(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    handleDelete: function handleDelete() {
      if (this.params.data !== undefined) {
        this.params.node.setSelected(true, true);
        this.params.context.componentParent.handleDeleteEditor(this.params.data);
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
    }
  }
}));

/***/ })

}]);