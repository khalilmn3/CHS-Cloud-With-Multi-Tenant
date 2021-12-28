(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dialog */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _api_night_audit_dayendClose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/night-audit/dayendClose */ "./resources/js/src/api/night-audit/dayendClose.js");
/* harmony import */ var _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ErrorList.vue */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue");


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



var dayendCloseResource = new _api_night_audit_dayendClose__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DayendClose',
  components: {
    ErrorList: _components_ErrorList_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      status: {
        step: 0,
        status: 0,
        auditStep: 0
      },
      auditStep: 0,
      start: 'START',
      lastDayendClose: '',
      isStart: false,
      result: '',
      progress: 0,
      showPopup: false,
      showAudit: false,
      popupTitle: '',
      isWarningError: false,
      destroyComponent: false,
      errorList: [],
      rollBack: false,
      dialogShow: false
    };
  },
  methods: {
    handleStart: function handleStart(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.reset();

                if (_this.start == _this.$t('nightAudit.start')) {
                  _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].confirmationW8Text(_this.$t('message.processDayendClose'), _this, 'begin');
                } else if (_this.isStart == true) {
                  _this.reset();

                  _this.$vs.loading.close('#layout--main>.con-vs-loading');
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    begin: function begin() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: '#layout--main',
                  scale: _this2.global.scaleLoadingMainLayout
                });

                _this2.isStart = true;
                _context2.next = 4;
                return _this2.precheck();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleClose: function handleClose() {
      if (this.isWarningError) {
        this.showPopup = false;
      } else {
        _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].confirmationW8Text(this.$t('message.abortProcessDayend'), this, 'closePopup');
      }
    },
    closePopup: function closePopup() {
      this.reset();
      this.$vs.loading.close('#layout--main>.con-vs-loading');
    },
    reset: function reset() {
      this.auditStep = 0;
      this.result = ''; // this.$refs.errorList.showAutoPosting = false;

      this.showPopup = false;
      this.isStart = false;
      this.progress = 0;
      this.status = {
        status: 0,
        step: 0,
        auditStep: 0
      };
    },
    precheck: function precheck() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$dayendCloseRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return dayendCloseResource.precheck();

              case 2:
                _yield$dayendCloseRes = _context3.sent;
                data = _yield$dayendCloseRes.data;
                _this3.status = data;

                if (data.status == 3) {
                  _this3.closePopup();

                  _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].information(_this3.$t('message.cannotProcessDayendClose'));
                } else if (_this3.isStart && data.finalStep == 1 && data.step == 6) {
                  _this3.showPopup = false;
                  _this3.showAudit = true;

                  _this3.processAudit();

                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                } else if (_this3.isStart && data.status == 0 && data.step < 6) {
                  _this3.progress = 20 * data.step;
                  _this3.showPopup = false;

                  _this3.precheck();
                } else if (_this3.isStart && data.status == 0 && data.step == 5) {
                  _this3.progress = 100;
                  _this3.isStart = false;
                  _this3.showPopup = false;
                  _this3.result = _this3.$t('nightAudit.done');

                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                } else if (_this3.isStart && data.status == 1) {
                  _this3.isWarningError = data.step >= 5;
                  _this3.errorList = data.data;
                  _this3.showPopup = true;
                  _this3.popupTitle = _this3.$t("nightAudit.title.".concat(data.step));

                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                } else if (!_this3.isStart) {
                  _this3.result = _this3.$t('nightAudit.aborted');
                }

                if (data.step == 5) {
                  _this3.popupTitle = _this3.$t('nightAudit.title.7');
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    processAudit: function processAudit() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var params, _yield$dayendCloseRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {
                  user_id: _this4.global.userInfo.code
                };
                _context4.prev = 1;
                _context4.next = 4;
                return dayendCloseResource.audit(params);

              case 4:
                _yield$dayendCloseRes2 = _context4.sent;
                data = _yield$dayendCloseRes2.data;
                _this4.auditStep = data.auditStep;
                console.log(_this4.auditStep);

                if (_this4.auditStep == 1) {
                  setTimeout(function () {
                    _this4.processAudit();
                  }, 1000);
                } else if (_this4.auditStep == 2) {
                  setTimeout(function () {
                    _this4.processAudit();
                  }, 1000);
                } else if (_this4.auditStep == 3) {
                  setTimeout(function () {
                    _this4.processAudit();
                  }, 1000);
                } else if (_this4.auditStep == 4) {
                  setTimeout(function () {
                    _this4.processAudit();
                  }, 1000);
                } else if (_this4.auditStep == 5) {
                  _this4.progress = 100;
                  _this4.isStart = false;

                  _this4.$store.dispatch('getAuditDate');

                  _this4.result = _this4.$t('nightAudit.finished');
                  setTimeout(function () {
                    _this4.showAudit = false;
                    setTimeout(function () {
                      _this4.finishedDayendClose();
                    }, 100);
                  }, 2000);
                } else {
                  _this4.rollBack = true;
                  _this4.isStart = false;
                  _this4.auditStep = 0;
                  _this4.progress = 0;
                  _this4.status = {
                    status: 0,
                    step: 0,
                    auditStep: 0
                  };
                  setTimeout(function () {
                    _this4.showAudit = false;
                  }, 2500);
                  _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].informationNoDetail('Oops, Error while parsing the data!');
                }

                _context4.next = 20;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                _this4.rollBack = true;
                _this4.isStart = false;
                _this4.auditStep = 0;
                _this4.progress = 0;
                _this4.status = {
                  status: 0,
                  step: 0,
                  auditStep: 0
                };
                setTimeout(function () {
                  _this4.showAudit = false;
                }, 2500);
                _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].informationNoDetail('Oops, Error while parsing the data!');

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },
    finishedDayendClose: function finishedDayendClose() {
      this.$store.dispatch('logout');
    },
    getLastDayendClose: function getLastDayendClose() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$dayendCloseRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.$loadingIndicator(_this5);

                _context5.next = 3;
                return dayendCloseResource.lastDayendClose();

              case 3:
                _yield$dayendCloseRes3 = _context5.sent;
                data = _yield$dayendCloseRes3.data;
                _this5.lastDayendClose = data;

                _this5.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  },
  computed: {
    userId: function userId() {
      return this.global.userInfo.code;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  },
  watch: {
    showPopup: function showPopup() {
      if (this.status.status == 1 && this.isStart && this.showPopup == false && this.isWarningError == false) {
        this.showPopup = true;
      } else if (this.showPopup == false && this.isWarningError == true) {
        this.showPopup = false;
        this.precheck();
      }
    },
    // showAudit() {
    //     if (this.showAudit == false && this.auditStep < 5) {
    //         this.showAudit = true;
    //     } else if() {
    //         this.showAudit = false;
    //     }
    // },
    isStart: function isStart(val) {
      this.start = val ? this.$t('nightAudit.stop') : this.$t('nightAudit.start');
    }
  },
  created: function created() {
    this.$store.dispatch('getAuditDate'); // this.$vs.loading.close('#layout--main>.con-vs-loading');
  },
  mounted: function mounted() {
    this.getLastDayendClose();
    this.destroyComponent = true;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.auditStep > 0 && this.showAudit) {
      _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].information(this.$t('nightAudit.dayendCloseOnProgress'));
      next(false);
    } else if (to.name !== 'transaction') {
      if (this.showAudit || this.showPopup) {
        this.handleClose();
        next(false);
      } else {
        this.destroyComponent = false; // fix sidebar error

        setTimeout(function () {
          next();
        }, 10);
      }
    } else {
      this.closePopup();
      setTimeout(function () {
        next();
      }, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _views_pages_night_audit_auto_post_transaction_AutoPostTransaction_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue */ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/folioForm/FolioForm.vue */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue");
/* harmony import */ var _views_pages_reservations_components_CancelReservation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/reservations/components/CancelReservation */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_folio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/folio */ "./resources/js/src/api/folio.js");


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









var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_8__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_7__["default"]();
var folioResource = new _api_folio__WEBPACK_IMPORTED_MODULE_9__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ErrorList',
  props: {
    rowData: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AutoPosting: _views_pages_night_audit_auto_post_transaction_AutoPostTransaction_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FolioForm: _views_pages_components_folioForm_FolioForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CancelReservation: _views_pages_reservations_components_CancelReservation__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
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
      //-----------------
      showAutoPosting: false,
      number: null,
      popupTitle: '',
      folioStatus: {},
      folioFormType: '',
      folioTitleForm: '',
      //-----------------
      // <!-- <FORM REGISTRATION> -->
      isReservation: false,
      // <!-- </FORM REGISTRATION> -->
      paramsData: '',
      isCheckOut: false,
      isGuestInHouse: false,
      destroyComponent: false,
      destroyComponent2: false // ------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('nightAudit.table.type'),
      field: 'type',
      width: 100
    }, {
      headerName: '#',
      field: 'number',
      width: 80
    }, {
      headerName: this.$t('nightAudit.table.roomNumber'),
      field: 'room_number',
      width: 80
    }, {
      headerName: this.$t('nightAudit.table.guestName'),
      field: 'full_name',
      width: 180
    }, {
      headerName: this.$t('nightAudit.table.description'),
      field: 'description',
      width: 250
    }, {
      headerName: "".concat(this.$t('nightAudit.table.solution'), "1"),
      field: 'solution1',
      width: 110
    }, {
      headerName: "".concat(this.$t('nightAudit.table.solution'), "2"),
      field: 'solution2',
      width: 110
    }, {
      headerName: "".concat(this.$t('nightAudit.table.solution'), "3"),
      field: 'solution3',
      width: 110
    }, {
      headerName: "".concat(this.$t('nightAudit.table.solution'), "4"),
      field: 'solution4',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    handleRowDobleClicked: function handleRowDobleClicked(params) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this.paramsData = _context.sent;

                _this.getValueCell();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ========================================================
    onCellClicked: function onCellClicked(event) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var solution, number;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.resetData();

                solution = event.value;
                number = event.data.number;
                _this2.number = number;

                if (!(solution == _this2.global.solutionCriticalErrorDayendClose.autoAssign)) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 7;
                return _this2.autoAssign(number);

              case 7:
                _context2.next = 10;
                break;

              case 9:
                if (solution === _this2.global.solutionCriticalErrorDayendClose.checkIn) {
                  _this2.checkIn();
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.cancel) {
                  _this2.$loadingIndicator(_this2);

                  _this2.$refs.cancelReservation.showCancelReservation(_this2.global.reservationStatus.cancel, number);
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.changeArrival) {
                  _this2.changeArrival();
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.noShow) {
                  _this2.$loadingIndicator(_this2);

                  _this2.$refs.cancelReservation.showCancelReservation(_this2.global.reservationStatus.noShow, number);
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.checkOut) {
                  _this2.checkOut();
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.extend) {
                  _this2.extend();
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.autoPosting) {
                  _this2.destroyComponent2 = true;
                  _this2.showAutoPosting = true;
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.showFolio) {
                  _this2.handleTransaction(_this2.global.formType.folioHistory);
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.showDeposit) {
                  _this2.showDeposit();
                } else if (solution === _this2.global.solutionCriticalErrorDayendClose.unsetWaitList) {
                  _this2.unsetWaitList(_this2.number);
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    resetData: function resetData() {
      this.number = null;
      this.isCheckOut = false;
      this.isReservation = false;
      this.isGuestInHouse = false;
    },
    closePopup: function closePopup() {
      this.$emit('closePopup');
    },
    precheck: function precheck() {
      this.$emit('precheck');
      this.destroyComponent2 = false;
    },
    handleTransaction: function handleTransaction(formType) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$guestInHouseRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$loadingIndicator(_this3);

                _this3.closePopup();

                _context3.next = 4;
                return guestInHouseResource.get(_this3.number);

              case 4:
                _yield$guestInHouseRe = _context3.sent;
                data = _yield$guestInHouseRe.data;

                _this3.$router.push({
                  name: 'transaction',
                  params: {
                    stayInformations: data.list,
                    isDayendClose: true,
                    isCheckOut: _this3.isCheckOut,
                    form: formType
                  }
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    autoAssign: function autoAssign(number) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$reservationRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$loadingIndicator(_this4);

                _context4.next = 3;
                return reservationResource.autoAssignRoom({
                  reservation_number: number,
                  ready: 1,
                  user_id: _this4.userId
                });

              case 3:
                _yield$reservationRes = _context4.sent;
                data = _yield$reservationRes.data;

                if (data == 0) {
                  _this4.precheck();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__["default"].information(_this4.$t("responseStatus.autoAssignRoom.".concat(data)));
                }

                _this4.$vs.loading.close('.layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    unsetWaitList: function unsetWaitList(number) {
      var _this5 = this;

      this.destroyComponent = false;
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this5.destroyComponent = true;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _this5.$loadingIndicator(_this5);

                          _context5.next = 3;
                          return _this5.$refs.registrationForm.unsetWaitList(number);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                })), 200);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })), 200);
    },
    changeArrival: function changeArrival() {
      var data = {
        reservation_number: this.number
      };
      this.isReservation = true;
      this.showRegistrationForm(data, this.global.modeData.edit, true);
    },
    checkIn: function checkIn() {
      var _this6 = this;

      var data = {
        reservation_number: this.number
      };
      this.isReservation = true;
      this.destroyComponent = false;
      setTimeout(function () {
        _this6.destroyComponent = true;
        setTimeout(function () {
          _this6.$refs.registrationForm.handleCheckIn(data);
        }, 100);
      }, 100);
    },
    checkOut: function checkOut() {
      this.isCheckOut = true;
      this.handleTransaction(this.global.formType.guestInHouse);
    },
    extend: function extend() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.$loadingIndicator(_this7);

                data = {
                  folio_number: _this7.number
                };
                _context7.next = 4;
                return _this7.cekFolioStatus(_this7.number);

              case 4:
                if (_this7.folioStatus.type_code === _this7.global.folioType.guestFolio) {
                  _this7.isGuestInHouse = true;

                  _this7.showRegistrationForm(data, _this7.global.modeData.edit, false);
                } else if (_this7.folioStatus.type_code === _this7.global.folioType.deskFolio || _this7.folioStatus.type_code === _this7.global.folioType.masterFolio) {
                  _this7.folioFormType = _this7.folioStatus.type_code;
                  _this7.folioTitleForm = _this7.folioStatus.type_code == _this7.global.folioType.deskFolio ? 'Desk Folio' : 'Master Folio';

                  _this7.showFolioForm(data, _this7.global.modeData.edit);
                }

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    cekFolioStatus: function cekFolioStatus(folioNumber) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$folioResource$, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return folioResource.folioStatus(folioNumber);

              case 2:
                _yield$folioResource$ = _context8.sent;
                data = _yield$folioResource$.data;
                _this8.folioStatus = data;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    showDeposit: function showDeposit() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = {
                  reservation_number: _this9.number
                };
                _this9.isReservation = true;
                _context9.next = 4;
                return _this9.showRegistrationForm(data, _this9.global.modeData.edit, true);

              case 4:
                setTimeout(function () {
                  document.getElementById('deposit').click();
                }, 500);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    showFolioForm: function showFolioForm(idData, modeData) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this10.destroyComponent = false;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _this10.destroyComponent = true;
                          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    _context10.next = 2;
                                    return _this10.$refs.folioForm.showForm(idData, modeData);

                                  case 2:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10);
                          })), 200);

                        case 2:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                })), 200);

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    showRegistrationForm: function showRegistrationForm(idData, modeData, isReservation) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _this11.destroyComponent = false;
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          _this11.destroyComponent = true;
                          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    _context13.next = 2;
                                    return _this11.$refs.registrationForm.showForm(idData, modeData, isReservation);

                                  case 2:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13);
                          })), 100);

                        case 2:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                })), 100);

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    } // ========================================================

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    showAutoPosting: function showAutoPosting() {
      if (this.showAutoPosting == false) {
        this.precheck();
      }
    }
  },
  computed: {
    userId: function userId() {
      return this.global.userInfo.code;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyComponent = false;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".item-progress {\n  width: 500px;\n}\n@media screen and (max-width: 600px) {\n.item-progress {\n    font-size: 0.7rem;\n}\n}\n@media screen and (min-width: 600px) {\n.item-progress {\n    padding: 20px;\n}\n}\n.audit-progress {\n  padding: 20px;\n}\n.item .success {\n  color: #00da00;\n}\n.item .error {\n  color: #e40000;\n}\n.item div:last-child {\n  font-weight: bolder;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".night-audit .ag-theme-balham .ag-header {\n  font-size: 11px;\n}\n.night-audit .ag-theme-balham {\n  font-size: 11px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dayend-closed" },
    [
      _c(
        "vx-card",
        { staticClass: "mb-3" },
        [
          _c(
            "vs-row",
            { attrs: { "vs-type": "flex", "vs-justify": "space-between" } },
            [
              _c(
                "vs-col",
                {
                  staticClass: "md:w-3/4 flex",
                  attrs: { "vs-justify": "flex-start" },
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "w-48 font-bold",
                      attrs: { for: "lastdayend" },
                    },
                    [_vm._v(_vm._s(_vm.$t("nightAudit.lastDayendClose")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "w-full", attrs: { id: "lastdayend" } },
                    [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm._f("full_datetime")("  " + _vm.lastDayendClose)
                          )
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "md:w-1/4 flex",
                  attrs: { "vs-justify": "flex-end" },
                },
                [
                  _c(
                    "label",
                    {
                      staticClass: "w-48 font-bold",
                      attrs: { for: "auditdate" },
                    },
                    [_vm._v(_vm._s(_vm.$t("nightAudit.auditDate")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "w-full", attrs: { id: "auditdate" } },
                    [_vm._v(_vm._s(_vm._f("fulldate")(_vm.auditDate)))]
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
        "vx-card",
        { attrs: { "vs-type": "flex", "vs-justify": "center" } },
        [
          _c(
            "vs-row",
            {
              staticClass: "mb-5",
              attrs: { "vs-type": "flex", "vs-justify": "center" },
            },
            [
              _c("span", [
                _vm._v(_vm._s(_vm.$t("nightAudit.processDayendClose"))),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-5",
              attrs: { "vs-type": "flex", "vs-justify": "center" },
            },
            [
              _c(
                "vs-button",
                {
                  attrs: { color: !_vm.isStart ? "success" : "danger" },
                  on: {
                    click: function ($event) {
                      return _vm.handleStart($event)
                    },
                  },
                },
                [_vm._v(" " + _vm._s(_vm.start) + " ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-6",
              attrs: { "vs-type": "flex", "vs-justify": "center" },
            },
            [
              _c("span", [
                _vm._v(
                  _vm._s(_vm.$t("nightAudit.progress") + " " + _vm.progress) +
                    "%"
                ),
              ]),
              _vm._v(" "),
              _c(
                "vs-progress",
                {
                  attrs: { height: 8, percent: _vm.progress, color: "primary" },
                },
                [_vm._v("primary")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mb-6",
              attrs: { "vs-type": "flex", "vs-justify": "center" },
            },
            [
              _vm.isStart
                ? _c(
                    "div",
                    { staticClass: "item-progress" },
                    [
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.$t("nightAudit.eaNotCheckIn"))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              (_vm.status.step >= 1 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 2
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 1 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.$t("nightAudit.edNotCheckOut"))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              (_vm.status.step >= 2 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 3
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 2 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.$t("nightAudit.captainOrderOpen"))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              (_vm.status.step >= 3 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 4
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.status.step == 3 && this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.$t("nightAudit.postingRoomCharge"))
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              (_vm.status.step >= 4 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 5
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm.status.step == 4 &&
                                  this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("ERROR"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.$t(
                                      "nightAudit.folioReservationNotBalance"
                                    )
                                  )
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              (_vm.status.step >= 5 &&
                                this.status.status == 0) ||
                              _vm.status.step >= 6
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm.status.step == 5 &&
                                  this.status.status == 1
                                ? _c("span", { staticClass: "error" }, [
                                    _vm._v("WARNING"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        { staticClass: "item" },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "8",
                                "vs-type": "flex",
                                "vs-justify": "flex-start",
                              },
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("nightAudit.audit"))),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "3",
                                "vs-type": "flex",
                                "vs-justify": "flex-end",
                              },
                            },
                            [
                              _vm.status.step >= 5 && this.status.status == 0
                                ? _c("span", { staticClass: "success" }, [
                                    _vm._v("OK"),
                                  ])
                                : _vm._e(),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-5",
                          staticStyle: { "font-weight": "bolder" },
                          attrs: { "vs-type": "flex", "vs-justify": "center" },
                        },
                        [_c("span", [_vm._v(_vm._s(_vm.result))])]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          iconButton1: "",
          textButton1: _vm.isWarningError
            ? _vm.$t("button.continue")
            : _vm.$t("button.abort"),
          buttonCloseHidden: true,
          title: _vm.popupTitle,
          width: 80,
          active: _vm.showPopup,
        },
        on: {
          button1: function ($event) {
            return _vm.handleClose()
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _vm.destroyComponent
                  ? _c("error-list", {
                      ref: "errorList",
                      attrs: { rowData: _vm.errorList },
                      on: {
                        precheck: function ($event) {
                          return _vm.precheck()
                        },
                        closePopup: function ($event) {
                          return _vm.closePopup()
                        },
                      },
                    })
                  : _vm._e(),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          buttonCloseHidden: true,
          title: "Audit",
          width: 500,
          active: _vm.showAudit,
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "div",
                  { staticClass: "audit-progress" },
                  [
                    _c(
                      "vs-row",
                      { staticClass: "item" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "8",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("nightAudit.updateRoomStatus"))
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-end",
                            },
                          },
                          [
                            _vm.auditStep >= 1
                              ? _c("span", { staticClass: "success" }, [
                                  _vm._v("Done"),
                                ])
                              : _vm.auditStep < 1
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.$t("nightAudit.inProgress"))
                                  ),
                                ])
                              : _vm.roolBack & (_vm.auditStep >= 1)
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.$t("nightAudit.rollBack"))),
                                ])
                              : _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.$t("nightAudit.inProgress"))
                                  ),
                                ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "item" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "8",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("nightAudit.generateReport"))
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-end",
                            },
                          },
                          [
                            _vm.auditStep >= 2
                              ? _c("span", { staticClass: "success" }, [
                                  _vm._v("Done"),
                                ])
                              : _vm.auditStep < 2
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.$t("nightAudit.inProgress"))
                                  ),
                                ])
                              : _vm.roolBack & (_vm.auditStep >= 2)
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.$t("nightAudit.rollBack"))),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "item" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "8",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("nightAudit.closeAllOpenShift"))
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-end",
                            },
                          },
                          [
                            _vm.auditStep >= 3
                              ? _c("span", { staticClass: "success" }, [
                                  _vm._v("Done"),
                                ])
                              : _vm.auditStep < 3
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.$t("nightAudit.inProgress"))
                                  ),
                                ])
                              : _vm.roolBack & (_vm.auditStep >= 3)
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.$t("nightAudit.rollBack"))),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "item" },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "8",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("nightAudit.rollAuditDate"))
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-end",
                            },
                          },
                          [
                            _vm.auditStep >= 4
                              ? _c("span", { staticClass: "success" }, [
                                  _vm._v("Done"),
                                ])
                              : _vm.auditStep < 4
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.$t("nightAudit.inProgress"))
                                  ),
                                ])
                              : _vm.roolBack & (_vm.auditStep >= 4)
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.$t("nightAudit.rollBack"))),
                                ])
                              : _vm._e(),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-5",
                        staticStyle: { "font-weight": "bolder" },
                        attrs: { "vs-type": "flex", "vs-justify": "center" },
                      },
                      [
                        _vm.result
                          ? _c(
                              "vs-button",
                              { attrs: { type: "border", icon: "check" } },
                              [_vm._v(_vm._s(_vm.result))]
                            )
                          : _c("img", {
                              attrs: { src: "/images/gif/loading-drop.gif" },
                            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "night-audit" },
    [
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
            style: _vm.global.styleAgGridFrame3,
            attrs: {
              gridOptions: _vm.gridOptions,
              columnDefs: _vm.columnDefs,
              defaultColDef: _vm.global.defColDef,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellDoubleClicked: _vm.onCellClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("folio-form", {
            ref: "folioForm",
            attrs: {
              formType: _vm.folioFormType,
              titleForm: _vm.folioTitleForm,
              isDayendClosed: true,
            },
            on: {
              precheck: function ($event) {
                return _vm.precheck()
              },
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("registration-form", {
            ref: "registrationForm",
            attrs: {
              isDayendClose: true,
              isGuestInHouse: _vm.isGuestInHouse,
              isReservation: _vm.isReservation,
            },
            on: {
              precheck: function ($event) {
                return _vm.precheck()
              },
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c("cancel-reservation", {
        ref: "cancelReservation",
        attrs: { isDayendClose: true },
        on: {
          precheck: function ($event) {
            return _vm.precheck()
          },
        },
      }),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          title: _vm.popupTitle,
          width: 80,
          active: _vm.showAutoPosting,
        },
        on: {
          close: function (v) {
            return (_vm.showAutoPosting = v)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [_vm.destroyComponent2 ? _c("auto-posting") : _vm._e()]
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

/***/ "./resources/js/src/api/folio.js":
/*!***************************************!*\
  !*** ./resources/js/src/api/folio.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeskFolioResource; });
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
var uri = 'folio';

var DeskFolioResource = /*#__PURE__*/function (_Resource) {
  _inherits(DeskFolioResource, _Resource);

  var _super = _createSuper(DeskFolioResource);

  function DeskFolioResource() {
    _classCallCheck(this, DeskFolioResource);

    return _super.call(this, uri);
  }

  _createClass(DeskFolioResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "folioStatus",
    value: function folioStatus(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/status/' + id,
        method: 'get'
      });
    }
  }]);

  return DeskFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/night-audit/dayendClose.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/night-audit/dayendClose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DayendCloseResource; });
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



var uri = 'nightaudit/dayend';

var DayendCloseResource = /*#__PURE__*/function (_Resource) {
  _inherits(DayendCloseResource, _Resource);

  var _super = _createSuper(DayendCloseResource);

  function DayendCloseResource() {
    _classCallCheck(this, DayendCloseResource);

    return _super.call(this, uri);
  }

  _createClass(DayendCloseResource, [{
    key: "precheck",
    value: function precheck(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/precheck/critical',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "post",
    value: function post(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/post',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "audit",
    value: function audit(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/audit',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lastDayendClose",
    value: function lastDayendClose() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/lastdayend',
        method: 'get'
      });
    }
  }]);

  return DayendCloseResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=template&id=07ed6732& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&");
/* harmony import */ var _DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DayendClose.vue?vue&type=template&id=07ed6732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/DayendClose.vue?vue&type=template&id=07ed6732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DayendClose_vue_vue_type_template_id_07ed6732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=template&id=eb0f5f38& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&");
/* harmony import */ var _ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorList.vue?vue&type=template&id=eb0f5f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/dayend-close/components/ErrorList.vue?vue&type=template&id=eb0f5f38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorList_vue_vue_type_template_id_eb0f5f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);