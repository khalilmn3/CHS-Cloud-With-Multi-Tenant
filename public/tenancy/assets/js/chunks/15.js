(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_back_office_apRefundDeposit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/back-office/apRefundDeposit */ "./resources/js/src/api/back-office/apRefundDeposit.js");
/* harmony import */ var _api_back_office_apCommissionAndOther__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/back-office/apCommissionAndOther */ "./resources/js/src/api/back-office/apCommissionAndOther.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_delete_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_delete_editor */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_delete_editor.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");


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











var apRefundDepositResource = new _api_back_office_apRefundDeposit__WEBPACK_IMPORTED_MODULE_1__["default"]();
var apCommissionAndOtherResource = new _api_back_office_apCommissionAndOther__WEBPACK_IMPORTED_MODULE_2__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'APPaymentForm',
  props: {
    titleForm: String,
    formType: {
      required: true
    }
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_4__["AgGridVue"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_11__["default"]
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
      getRowNodeId: null,
      paginationPageSize: null,
      rowSelection: null,
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
      directBillPopUp: false,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      vFolioData: {},
      vFolioDataOld: {},
      vFolioDataInsert: {},
      vDirectBill: {},
      vCurrency: {},
      dataLookup: [],
      vTransaction: null,
      transactionIDList: [],
      transactionIDListTemp: [],
      companyCodeTemp: '',
      // data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false,
      mainTableName: '',
      form: 1,
      // double click handler
      delay: 700,
      clicks: 0,
      timer: null,
      buttonEnable: true,
      apiResource: ''
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions2 = {
      rowHeight: this.global.rowHeightDefault
    };

    this.getRowNodeId = function (data) {
      return data.id_log;
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
      headerName: this.$t('apPayment.table.id'),
      field: 'id_log',
      width: 120
    }, {
      headerName: this.$t('apPayment.table.auditDate'),
      field: 'audit_date',
      width: 120
    }, {
      headerName: this.$t('apPayment.table.folioNumber'),
      field: 'folio_number',
      width: 120
    }, {
      headerName: this.$t('apPayment.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('apPayment.table.guestName'),
      field: 'guest_name',
      width: 200
    }, {
      headerName: this.$t('apPayment.table.outstanding'),
      field: 'outstanding',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.amount'),
      field: 'amount',
      width: 135,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatNumber"]
    }, {
      headerName: this.$t('apPayment.table.result'),
      field: 'result',
      width: 250
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
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
    this.rowModelType = 'clientSide'; // this.getRowNodeId();
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
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.handleUpdateEditor(_this.paramsData);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleDeleteEditor(_this.paramsData);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        vm.gridOptions2.apiaq.forEachNode(function (node) {
          if (node.data) {
            if (node.data.id_log == vm.paramsData.id_log) {
              node.setSelected(true, true);
            }
          }
        });
      }
    },
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
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
        date: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatDateDatabase"])(this.auditDate),
        discount: 0,
        discount_journal_account_code: '',
        bank_administration: 0,
        journal_account_code: '',
        other_expense: 0,
        oe_journal_account_code: '',
        remark: '',
        user_id: this.global.userInfo.code
      };
      this.vFolioData = {
        user_id: this.global.userInfo.code
      };
      this.rowDataInsert = [];
      this.form = 1;
      this.dbErrors = {};
      this.$validator.reset();
      this.buttonEnable = true;
      this.updateEditor = false;
      this.dataTracking = null;
      this.vTransaction = null;
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
    handleChangeDate: function handleChangeDate() {
      if (this.vModel.issued_date) {
        if (this.vModel.issued_date > this.vModel.due_date) {
          this.vModel.due_date = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_9__["formatDateDatabaseAddWeek"])(this.vModel.issued_date, 1);
        }
      }
    },
    showModal: function showModal(idData, modeData) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.resetData(_this3.search);

                _this3.idData = idData.id_log;
                _this3.paramsData = idData;
                _this3.modeDataValue = modeData;

                if (!(modeData == _this3.global.modeData.edit)) {
                  _context2.next = 13;
                  break;
                }

                _this3.$loadingIndicator(_this3);

                _this3.getLookupTransaction();

                _this3.getLookupAccount();

                _context2.next = 10;
                return _this3.editData(idData);

              case 10:
                _this3.$closeLoadingIndicator(_this3);

                _context2.next = 27;
                break;

              case 13:
                if (!(modeData == _this3.global.modeData.tracking)) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 16;
                return _this3.trackingData(idData);

              case 16:
                _this3.mainPopUp = true;
                _context2.next = 27;
                break;

              case 19:
                if (!(modeData == _this3.global.modeData.insert)) {
                  _context2.next = 27;
                  break;
                }

                _this3.$loadingIndicator(_this3);

                _this3.getLookupTransaction();

                _context2.next = 24;
                return _this3.getLookupAccount();

              case 24:
                _this3.setSelectedTransaction(idData);

                _this3.$closeLoadingIndicator(_this3);

                _this3.mainPopUp = true;

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setSelectedTransaction: function setSelectedTransaction(params) {
      var _this4 = this;

      if (params && this.transactionIDList) {
        this.transactionIDList.forEach(function (element) {
          if (element.id_log == params.TransactionID) {
            _this4.vTransaction = element;

            _this4.handleChangeTransactionID();
          }

          ;
        });
      }
    },
    saveData: function saveData() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.$validator.validateAll('information').then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(result) {
                    var folio, i, issuedDate, issuedTime, date, time;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!result) {
                              _context3.next = 33;
                              break;
                            }

                            if (!(_this5.rowDataInsert != null && _this5.rowDataInsert.length > 0)) {
                              _context3.next = 32;
                              break;
                            }

                            _this5.btnSaveDisabled = true;
                            _this5.vModel.data = _this5.rowDataInsert;
                            _this5.vModel.user_id = _this5.global.userInfo.code;
                            folio = _this5.rowDataInsert;
                            i = 0;

                          case 7:
                            if (!(i < folio.length)) {
                              _context3.next = 19;
                              break;
                            }

                            issuedDate = new Date(_this5.vModel.date);
                            issuedTime = issuedDate.getTime();
                            date = new Date(folio[i].audit_date);
                            time = date.getTime();

                            if (!(time > issuedTime)) {
                              _context3.next = 16;
                              break;
                            }

                            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this5.$t('message.paymentDateCannotLowerThanIssuedDate'));
                            _this5.btnSaveDisabled = false;
                            return _context3.abrupt("return");

                          case 16:
                            i++;
                            _context3.next = 7;
                            break;

                          case 19:
                            if (!(_this5.modeDataValue == 1)) {
                              _context3.next = 26;
                              break;
                            }

                            _this5.$vs.loading({
                              container: '#button-save-main',
                              scale: _this5.global.scaleLoadingButton
                            });

                            _context3.next = 23;
                            return _this5.updateData();

                          case 23:
                            _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                            _context3.next = 30;
                            break;

                          case 26:
                            _this5.$vs.loading({
                              container: '#button-save-main',
                              scale: _this5.global.scaleLoadingButton
                            });

                            _context3.next = 29;
                            return _this5.insertData();

                          case 29:
                            _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                          case 30:
                            _context3.next = 33;
                            break;

                          case 32:
                            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this5.$t('message.informationNoDetailData'));

                          case 33:
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
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$_this6$apiReso, data, start;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _this6.apiResource.store(_this6.vModel);

              case 3:
                _yield$_this6$apiReso = _context7.sent;
                data = _yield$_this6$apiReso.data;

                if (data == 0) {
                  _this6.mainPopUp = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this6.$t("responseStatus.apPayment.".concat(data)));
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information("Success: ".concat(data.success, "\r\n Failed: ").concat(data.failed, ", Please see detail on table list!"));

                  start = /*#__PURE__*/function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              _context6.next = 2;
                              return Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["asyncForEach"])(data.result, /*#__PURE__*/function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(element) {
                                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                                    while (1) {
                                      switch (_context5.prev = _context5.next) {
                                        case 0:
                                          _this6.updateResult(element.id_log, element.status);

                                        case 1:
                                        case "end":
                                          return _context5.stop();
                                      }
                                    }
                                  }, _callee5);
                                }));

                                return function (_x2) {
                                  return _ref3.apply(this, arguments);
                                };
                              }());

                            case 2:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6);
                    }));

                    return function start() {
                      return _ref2.apply(this, arguments);
                    };
                  }();

                  start();
                  _this6.form = 1;
                  _this6.buttonEnable = false;
                }

                _this6.btnSaveDisabled = false;
                _context7.next = 14;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                _this6.btnSaveDisabled = false;

                _this6.$closeLoadingIndicator(_this6);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    updateData: function updateData() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var _yield$_this7$apiReso, data, vm, result, start;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return _this7.apiResource.update(_this7.vModel);

              case 3:
                _yield$_this7$apiReso = _context10.sent;
                data = _yield$_this7$apiReso.data;

                if (!(data == 0)) {
                  _context10.next = 10;
                  break;
                }

                _this7.mainPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].acceptAlertSucces();
                _context10.next = 23;
                break;

              case 10:
                if (!(data > 0)) {
                  _context10.next = 14;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this7.$t("responseStatus.apPayment.".concat(data)));
                _context10.next = 23;
                break;

              case 14:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information("Success: ".concat(data.success, "\r\n Failed: ").concat(data.failed, ", Please see detail on table list!"));
                vm = _this7;
                result = data.result;
                _context10.next = 19;
                return 1;

              case 19:
                _this7.form = _context10.sent;

                start = /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            _context9.next = 2;
                            return Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_10__["asyncForEach"])(data.result, /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(element) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
                                  while (1) {
                                    switch (_context8.prev = _context8.next) {
                                      case 0:
                                        vm.updateResult(element.id_log, element.status);

                                      case 1:
                                      case "end":
                                        return _context8.stop();
                                    }
                                  }
                                }, _callee8);
                              }));

                              return function (_x3) {
                                return _ref5.apply(this, arguments);
                              };
                            }());

                          case 2:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function start() {
                    return _ref4.apply(this, arguments);
                  };
                }();

                start();
                _this7.buttonEnable = false;

              case 23:
                _this7.btnSaveDisabled = true;
                _context10.next = 31;
                break;

              case 26:
                _context10.prev = 26;
                _context10.t0 = _context10["catch"](0);
                _this7.btnSaveDisabled = false;

                _this7.$closeLoadingIndicator(_this7);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorSaveDataAlert();

              case 31:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 26]]);
      }))();
    },
    updateResult: function updateResult(id, status) {
      var _this8 = this;

      setTimeout(function () {
        var rowNode = _this8.gridOptions2.api.getRowNode(id);

        rowNode.setDataValue('result', _this8.$t("responseStatus.apPaymentResult.".concat(status)));
      }, 200);
    },
    editData: function editData(params) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var _yield$_this9$apiReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this9.apiResource.get(params.ref_number);

              case 3:
                _yield$_this9$apiReso = _context11.sent;
                data = _yield$_this9$apiReso.data;
                _this9.vModel = data.payment;
                _this9.rowDataInsert = data.detail;
                _this9.mainPopUp = true;
                _context11.next = 13;
                break;

              case 10:
                _context11.prev = 10;
                _context11.t0 = _context11["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 10]]);
      }))();
    },
    getLookupAccount: function getLookupAccount() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _yield$_this10$apiRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _this10.apiResource.dataLookup();

              case 2:
                _yield$_this10$apiRes = _context12.sent;
                data = _yield$_this10$apiRes.data;
                _this10.dataLookup.bank_account = data.bank_account;
                _this10.dataLookup.income_account = data.income_account;
                _this10.dataLookup.expense_account = data.expense_account;

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    getLookupTransaction: function getLookupTransaction() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var params, _yield$_this11$apiRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                params = {
                  ref_number: _this11.modeDataValue == _this11.global.modeData.edit ? _this11.paramsData.ref_number : ''
                };
                _context13.next = 3;
                return _this11.apiResource.lookupTransaction(params);

              case 3:
                _yield$_this11$apiRes = _context13.sent;
                data = _yield$_this11$apiRes.data;
                _this11.transactionIDList = data.slice();
                _this11.transactionIDListTemp = data.slice();

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    handleChangeAccount: function handleChangeAccount() {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _this12.getLookupTransaction();

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    handleChangeTransactionID: function handleChangeTransactionID() {
      if (this.vTransaction) {
        this.vFolioData.folio_number = this.vTransaction.folio_number;
        this.vFolioData.amount = this.vTransaction.outstanding;
        this.vFolioData.outstanding = this.vTransaction.outstanding;
        this.vFolioData.id_log = this.vTransaction.id_log;
        this.vFolioData.audit_date = this.vTransaction.audit_date;
        this.vFolioData.journal_account_code = this.vTransaction.journal_account_code;
        this.vFolioData.room_number = this.vTransaction.room_number;
        this.vFolioData.guest_name = this.vTransaction.guest_name;
        this.vFolioData.type = this.vTransaction.type;
      } else {
        this.vFolioData = {};
      }
    },
    handleNext: function handleNext() {
      var _this13 = this;

      this.$validator.validateAll('information').then(function (result) {
        if (_this13.rowDataInsert !== null && _this13.rowDataInsert.length > 0) {
          _this13.calculateSubTotal();

          _this13.calculateTotalAmount();

          _this13.form = 2;
        } else {
          _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this13.$t('message.informationNoDetailProcess'));
        }
      });
    },
    handleBack: function handleBack() {
      this.btnSaveDisabled = false;
      this.form = 1;
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
      var _this14 = this;

      this.$validator.validateAll('folio').then( /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(result) {
          var isExist, selectedData;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  if (!result) {
                    _context15.next = 22;
                    break;
                  }

                  if (!(_this14.vFolioData.id_log != null)) {
                    _context15.next = 22;
                    break;
                  }

                  isExist = false;

                  _this14.gridOptions2.api.forEachNode(function (rowNode, index) {
                    if (!_this14.updateEditor) {
                      if (rowNode.data.id_log == _this14.vFolioData.id_log) {
                        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this14.$t('message.dataIsAlreadyExist'));
                        isExist = true;
                      }

                      ;
                    } else {
                      if (rowNode.data.id_log !== _this14.paramsDataEditor.id_log) {
                        if (rowNode.data.id_log == _this14.vFolioData.id_log) {
                          _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this14.$t('message.dataIsAlreadyExist'));
                          isExist = true;
                        }
                      }

                      ;
                    }
                  });

                  if (!(_this14.vFolioData.amount > 0)) {
                    _context15.next = 22;
                    break;
                  }

                  if (!(_this14.vFolioData.amount <= _this14.vFolioData.outstanding)) {
                    _context15.next = 21;
                    break;
                  }

                  if (isExist) {
                    _context15.next = 19;
                    break;
                  }

                  if (_this14.modeDataEditor == _this14.global.modeData.edit) {
                    selectedData = _this14.gridOptions2.api.getSelectedRows();

                    _this14.gridOptions2.api.applyTransaction({
                      remove: selectedData
                    });

                    _this14.transactionIDList = _this14.transactionIDListTemp.slice();
                  }

                  if (_this14.rowDataInsert == null) {
                    _this14.rowDataInsert = [];
                  } else {
                    _this14.rowDataInsert = _this14.getAllRows();
                  }

                  if (_this14.rowDataInsert.length >= 0) {
                    _this14.vFolioDataInsert.index = _this14.rowDataInsert.length;
                  }

                  _context15.next = 12;
                  return _this14.rowDataInsert.push(_this14.cloneObject(_this14.vFolioData));

                case 12:
                  _this14.removeDataLookupFolioOnInsert();

                  _this14.vFolioData = {};
                  _this14.vTransaction = null;
                  _this14.vFolioDataInsert = {};
                  _this14.vFolioData.folio = '';

                  _this14.$validator.reset();

                  _this14.modeDataEditor = _this14.global.modeData.insert;

                case 19:
                  _context15.next = 22;
                  break;

                case 21:
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].information(_this14.$t('message.amountCaanotGreatherThanOutstanding'));

                case 22:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15);
        }));

        return function (_x4) {
          return _ref6.apply(this, arguments);
        };
      }());
    },
    removeDataLookupFolioOnInsert: function removeDataLookupFolioOnInsert() {
      var _this15 = this;

      if (this.transactionIDList && this.rowDataInsert) {
        (function () {
          var folioX = _this15.rowDataInsert;
          var folio = _this15.transactionIDList;

          var _loop = function _loop(i) {
            folioX.forEach(function (element) {
              if (folio[i].id_log == element.id_log) {
                _this15.transactionIDList.splice(i, 1);
              }
            });
          };

          for (var i = 0; i < folio.length; i++) {
            _loop(i);
          }
        })();
      }
    },
    handleUpdateEditor: function handleUpdateEditor(params) {
      this.updateEditor = true;
      this.paramsDataEditor = this.cloneObject(params);
      this.modeDataEditor = this.global.modeData.edit;
      this.vFolioData = this.cloneObject(params);
      this.vFolioDataOld = this.cloneObject(params);
      this.vFolioData.folio = params.folio_number;
      this.vTransaction = this.cloneObject(params);
    },
    handleDeleteEditor: function handleDeleteEditor() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var selectedData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                selectedData = _this16.gridOptions2.api.getSelectedRows();

                _this16.gridOptions2.api.applyTransaction({
                  remove: selectedData
                });

                _this16.rowDataInsert = _this16.getAllRows();
                _this16.transactionIDList = _this16.transactionIDListTemp.slice();

                _this16.removeDataLookupFolioOnInsert();

                _this16.$validator.reset();

              case 6:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    handleCancel: function handleCancel() {
      this.paramsDataEditor = {};
      this.modeDataEditor = this.global.modeData.insert;
      this.vFolioData = {};
      this.vTransaction = null;
      this.vFolioDataOld = {};
      this.$validator.reset();
    },
    calculateSubTotal: function calculateSubTotal() {
      var total = 0;
      this.rowDataInsert.forEach(function (element) {
        total += parseFloat(element.amount);
      });
      this.vModel.sub_total = total;
      console.log(this.vModel.sub_total);
    },
    calculateTotalAmount: function calculateTotalAmount() {
      if (this.vModel.sub_total > 0) {
        this.vModel.total_amount = parseFloat(this.vModel.sub_total);
      }

      if (this.vModel.discount > 0) {
        this.vModel.total_amount -= parseFloat(this.vModel.discount);
      }

      if (this.vModel.bank_administration > 0) {
        this.vModel.total_amount += parseFloat(this.vModel.bank_administration);
      }

      if (this.vModel.other_expense > 0) {
        this.vModel.total_amount += parseFloat(this.vModel.other_expense);
      }
    },
    oneClick: function oneClick(event) {
      this.clicks++;

      if (this.clicks === 1) {
        var self = this;
        this.timer = setTimeout(function () {
          self.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        this.handleDoubleClickAmount();
        this.clicks = 0;
      }
    },
    handleDoubleClickAmount: function handleDoubleClickAmount() {
      this.vFolioData.amount = parseFloat(this.vFolioData.outstanding);
    },
    trackingData: function trackingData(idData) {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this17.global.tableName.subFolio
                };

                _this17.$loadingIndicator(_this17);

                _context17.prev = 2;
                _context17.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context17.sent;
                data = _yield$trackingDataRe.data;
                _this17.dataTracking = data.modelGrid;
                _context17.next = 13;
                break;

              case 10:
                _context17.prev = 10;
                _context17.t0 = _context17["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 13:
                _this17.$closeLoadingIndicator(_this17);

              case 14:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[2, 10]]);
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
    this.apiResource = this.formType == this.global.formType.apRefundDeposit ? apRefundDepositResource : apCommissionAndOtherResource;
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
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
          button1:
            _vm.modeDataValue !== _vm.global.modeData.tracking &&
            _vm.buttonEnable,
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) +
                (_vm.formType == _vm.global.formType.apRefundDeposit
                  ? _vm.$t("apPayment.apRefundDepositMultiPayment")
                  : _vm.$t("apPayment.apCommissionMultiPayment")),
          width: _vm.form == 1 ? 80 : 800,
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
                                                                "apPayment.transactionID"
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
                                                              label: "id_log",
                                                              clearable: false,
                                                              options:
                                                                _vm.transactionIDList,
                                                              name: "transaction id",
                                                              "data-vv-scope":
                                                                "folio",
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                return _vm.handleChangeTransactionID()
                                                              },
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vTransaction,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.vTransaction =
                                                                    $$v
                                                                },
                                                              expression:
                                                                "vTransaction",
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
                                                                      "folio.transaction id"
                                                                    ),
                                                                  expression:
                                                                    "errors.has('folio.transaction id')",
                                                                },
                                                              ],
                                                              staticClass:
                                                                "error-text text-danger",
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.errors.first(
                                                                    "folio.transaction id"
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
                                                                "apPayment.guestName"
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
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .guest_name,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "guest_name",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.guest_name",
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
                                                              "apPayment.auditDate"
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
                                                                "apPayment.folioNumber"
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
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .folio_number,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "folio_number",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.folio_number",
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
                                                        _c(
                                                          "label",
                                                          {
                                                            on: {
                                                              click: function (
                                                                $event
                                                              ) {
                                                                return _vm.oneClick()
                                                              },
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "apPayment.roomNumber"
                                                                )
                                                              )
                                                            ),
                                                          ]
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "vs-row",
                                                        [
                                                          _c("vs-input", {
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
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
                                                                "apPayment.amount"
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
                                                              allowZeroAmount:
                                                                "",
                                                              type: "text",
                                                              description:
                                                                _vm._f(
                                                                  "toString"
                                                                )(
                                                                  _vm.errors.first(
                                                                    "folio.amount"
                                                                  ) ||
                                                                    _vm.dbErrors
                                                                      .amount
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
                                                                "apPayment.outstanding"
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
                                                            staticClass:
                                                              "w-full",
                                                            attrs: {
                                                              disabled: "",
                                                              type: "text",
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.vFolioData
                                                                  .outstanding,
                                                              callback:
                                                                function ($$v) {
                                                                  _vm.$set(
                                                                    _vm.vFolioData,
                                                                    "outstanding",
                                                                    $$v
                                                                  )
                                                                },
                                                              expression:
                                                                "vFolioData.outstanding",
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
                                                  getRowNodeId:
                                                    _vm.getRowNodeId,
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
                                          _c(
                                            "vs-button",
                                            {
                                              staticClass: "mb-2",
                                              attrs: {
                                                color:
                                                  _vm.global.buttonColor.back,
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.handleBack()
                                                },
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("button.back"))
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("apPayment.date")
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
                                                            _vm.handleChangeDate,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.date,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.date",
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
                                                                  "information.date"
                                                                ),
                                                              expression:
                                                                "errors.has('information.date')",
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
                                                                  "information.date"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .date
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.subTotal"
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
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled: "",
                                                          type: "text",
                                                          description: _vm._f(
                                                            "toString"
                                                          )(
                                                            _vm.errors.first(
                                                              "information.sub total"
                                                            ) ||
                                                              _vm.dbErrors
                                                                .sub_total
                                                          ),
                                                          name: "sub total",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .sub_total,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "sub_total",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.sub_total",
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.discount"
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
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "text",
                                                          showZeroNumber: "",
                                                        },
                                                        on: {
                                                          inputCustom:
                                                            function ($event) {
                                                              return _vm.calculateTotalAmount()
                                                            },
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel.discount,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "discount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.discount",
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
                                                    "w-full md:w-2/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.discountAccount"
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
                                                          disabled:
                                                            _vm.vModel
                                                              .discount <= 0 ||
                                                            _vm.vModel
                                                              .discount == null,
                                                          id: "form-select",
                                                          appendToBody: "",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .income_account,
                                                          "v-validate":
                                                            _vm.vModel
                                                              .discount > 0
                                                              ? "required"
                                                              : "",
                                                          name: "discount account",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .discount_journal_account_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "discount_journal_account_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.discount_journal_account_code",
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
                                                                  "information.discount"
                                                                ),
                                                              expression:
                                                                "errors.has('information.discount')",
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
                                                                  "information.discount"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .discount
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.bankAdministration"
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
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "text",
                                                          showZeroNumber: "",
                                                        },
                                                        on: {
                                                          inputCustom:
                                                            function ($event) {
                                                              return _vm.calculateTotalAmount()
                                                            },
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .bank_administration,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "bank_administration",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.bank_administration",
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
                                                    "w-full md:w-2/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.bankAdminAccount"
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
                                                          disabled:
                                                            _vm.vModel
                                                              .bank_administration <=
                                                              0 ||
                                                            _vm.vModel
                                                              .bank_administration ==
                                                              null,
                                                          id: "form-select",
                                                          appendToBody: "",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .expense_account,
                                                          "v-validate":
                                                            _vm.vModel
                                                              .bank_administration >
                                                            0
                                                              ? "required"
                                                              : "",
                                                          name: "bank admin account",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .ba_journal_account_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "ba_journal_account_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.ba_journal_account_code",
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
                                                                  "information.bank admin account"
                                                                ),
                                                              expression:
                                                                "errors.has('information.bank admin account')",
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
                                                                  "information.bank admin account"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .bank_admin_account
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.otherExpense"
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
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          type: "text",
                                                          showZeroNumber: "",
                                                        },
                                                        on: {
                                                          inputCustom:
                                                            function ($event) {
                                                              return _vm.calculateTotalAmount()
                                                            },
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .other_expense,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "other_expense",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.other_expense",
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
                                                    "w-full md:w-2/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.otherExpenseAccount"
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
                                                          disabled:
                                                            _vm.vModel
                                                              .other_expense <=
                                                              0 ||
                                                            _vm.vModel
                                                              .other_expense <=
                                                              "",
                                                          id: "form-select",
                                                          appendToBody: "",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .expense_account,
                                                          "v-validate":
                                                            _vm.vModel
                                                              .other_expense > 0
                                                              ? "required"
                                                              : "",
                                                          name: "other expense account",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .oe_journal_account_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "oe_journal_account_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.oe_journal_account_code",
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
                                                                  "information.other expense account"
                                                                ),
                                                              expression:
                                                                "errors.has('information.other expense account')",
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
                                                                  "information.other expense account"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .other_expense_account
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
                                                    "w-full md:w-1/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.total"
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
                                                            value: "required",
                                                            expression:
                                                              "'required'",
                                                          },
                                                        ],
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          disabled: "",
                                                          type: "text",
                                                          description: _vm._f(
                                                            "toString"
                                                          )(
                                                            _vm.errors.first(
                                                              "information.total"
                                                            ) ||
                                                              _vm.dbErrors.total
                                                          ),
                                                          name: "total",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .total_amount,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "total_amount",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.total_amount",
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
                                                    "w-full md:w-2/3",
                                                },
                                                [
                                                  _c("vs-row", [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "apPayment.bankAccount"
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
                                                          appendToBody: "",
                                                          label: "name",
                                                          clearable: false,
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.journal_account_code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .bank_account,
                                                          name: "bank account",
                                                          "data-vv-scope":
                                                            "information",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .journal_account_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "journal_account_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.journal_account_code",
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
                                                                  "information.bank account"
                                                                ),
                                                              expression:
                                                                "errors.has('information.bank account')",
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
                                                                  "information.bank account"
                                                                ) ||
                                                                  _vm.dbErrors
                                                                    .bank_account_code
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
                                                            "apPayment.remark"
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

/***/ "./resources/js/src/api/back-office/apCommissionAndOther.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/api/back-office/apCommissionAndOther.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APRefundDepositResource; });
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



var uri = 'ap-commission';

var APRefundDepositResource = /*#__PURE__*/function (_Resource) {
  _inherits(APRefundDepositResource, _Resource);

  var _super = _createSuper(APRefundDepositResource);

  function APRefundDepositResource() {
    _classCallCheck(this, APRefundDepositResource);

    return _super.call(this, uri);
  }

  _createClass(APRefundDepositResource, [{
    key: "getPaymentList",
    value: function getPaymentList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/payment/index"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "deletePayment",
    value: function deletePayment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/payment/delete"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lookupTransaction",
    value: function lookupTransaction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/lookup/transaction"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "dataLookup",
    value: function dataLookup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/datalookup"),
        method: 'post',
        data: data
      });
    }
  }]);

  return APRefundDepositResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/back-office/apRefundDeposit.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/api/back-office/apRefundDeposit.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return APRefundDepositResource; });
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



var uri = 'ap-refund-deposit';

var APRefundDepositResource = /*#__PURE__*/function (_Resource) {
  _inherits(APRefundDepositResource, _Resource);

  var _super = _createSuper(APRefundDepositResource);

  function APRefundDepositResource() {
    _classCallCheck(this, APRefundDepositResource);

    return _super.call(this, uri);
  }

  _createClass(APRefundDepositResource, [{
    key: "getPaymentList",
    value: function getPaymentList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/payment/index"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "deletePayment",
    value: function deletePayment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/payment/delete"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lookupTransaction",
    value: function lookupTransaction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/lookup/transaction"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "dataLookup",
    value: function dataLookup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/datalookup"),
        method: 'post',
        data: data
      });
    }
  }]);

  return APRefundDepositResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a& */ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a&");
/* harmony import */ var _APRefundDepositPaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APRefundDepositPaymentForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _APRefundDepositPaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_APRefundDepositPaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./APRefundDepositPaymentForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_APRefundDepositPaymentForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/back-office/components/APRefundDepositPaymentForm.vue?vue&type=template&id=2858845a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_APRefundDepositPaymentForm_vue_vue_type_template_id_2858845a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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