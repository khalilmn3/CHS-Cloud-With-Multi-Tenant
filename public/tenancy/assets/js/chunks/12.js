(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_deskFolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/deskFolio */ "./resources/js/src/api/deskFolio.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");


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


 // <!------------------additional element---------------------->

 // API






var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_5__["default"]();
var deskFolioResource = new _api_deskFolio__WEBPACK_IMPORTED_MODULE_7__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_6__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_8__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FolioForm',
  props: {
    formType: String,
    titleForm: String,
    isDayendClosed: Boolean
  },
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      // data error handling from laravel validation//
      dbErrors: {},
      // Pop Up
      modalMain: false,
      modalPreventClose: false,
      // ------------------need setting manual-----------------//
      // for vModel Data
      vModel: {
        full_name: ''
      },
      nights: 1,
      tempNights: 1,
      discount: 0,
      folioNumber: '',
      city: [],
      state: [],
      weekday_rate_discount: 0,
      weekend_rate_discount: 0,
      sidebarOption: false,
      btnSaveDisabled: false,
      resetOnOptionsChangeState: false,
      resetOnOptionsChangeCity: false,
      // ------------------additional-------------------------//
      // Data Lookup//
      dataLookup: {},
      // validation scope//
      scope1: 'stayInformation',
      showTimeRangePanel: false,
      activeTab: 1,
      resetOnChange: false,
      // title popup//
      title: '',
      balance: 0 // ------------------end need setting manual-----------------//

    };
  },
  methods: {
    // ------------------need setting manual for crud-----------------//
    // MASTER FOLIO CRUD
    editMasterFolio: function editMasterFolio(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$guestInHouseRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _yield$guestInHouseRe = _context.sent;
                data = _yield$guestInHouseRe.data;
                _this.vModel = data.list;
                _this.dataLookup.room_rate = data.room_rate;
                _this.dataLookup.bed_type = data.bed_type;

                _this.$vs.loading.close('#layout--main>.con-vs-loading');

                _this.getTotalDays();

                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);

                _this.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    updateMasterFolio: function updateMasterFolio(data) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return masterFolioResource.update(data);

              case 3:
                _this2.modalMain = false;

                _this2.$vs.loading.close('#button-save-main>.con-vs-loading');

                if (!_this2.isDayendClosed) {
                  _context2.next = 8;
                  break;
                }

                _this2.precheckDayendClosed();

                return _context2.abrupt("return");

              case 8:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context2.next = 17;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                message = _context2.t0;
                _this2.dbErrors = message == undefined ? '' : message;

                _this2.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }))();
    },
    insertMasterFolio: function insertMasterFolio(resource) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$masterFolioRes, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return masterFolioResource.store(resource);

              case 3:
                _yield$masterFolioRes = _context3.sent;
                data = _yield$masterFolioRes.data;
                _this3.modalMain = false;
                _this3.folioNumber = data;

                _this3.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context3.next = 17;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                message = _context3.t0;
                _this3.dbErrors = message == undefined ? '' : message;

                _this3.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    // DESK FOLIO CRUD
    editDeskFolio: function editDeskFolio(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$guestInHouseRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _yield$guestInHouseRe2 = _context4.sent;
                data = _yield$guestInHouseRe2.data;
                _this4.vModel = data.list;
                _this4.dataLookup.room_rate = data.room_rate;
                _this4.dataLookup.bed_type = data.bed_type;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _this4.modalMain = true;

                _this4.getTotalDays();

                _context4.next = 17;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }))();
    },
    updateDeskFolio: function updateDeskFolio(data) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return masterFolioResource.update(data);

              case 3:
                _this5.modalMain = false;

                _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                if (!_this5.isDayendClosed) {
                  _context5.next = 8;
                  break;
                }

                _this5.precheckDayendClosed();

                return _context5.abrupt("return");

              case 8:
                _this5.refreshData();

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context5.next = 18;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                message = _context5.t0;
                _this5.dbErrors = message == undefined ? '' : message;

                _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }))();
    },
    insertDeskFolio: function insertDeskFolio(resource) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$deskFolioResou, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return deskFolioResource.store(resource);

              case 3:
                _yield$deskFolioResou = _context6.sent;
                data = _yield$deskFolioResou.data;
                _this6.modalMain = false;

                _this6.resetData();

                _this6.refreshData();

                _this6.folioNumber = data;

                _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].acceptAlertSucces();
                _context6.next = 19;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](0);
                message = _context6.t0;
                _this6.dbErrors = message == undefined ? '' : message;

                _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorSaveDataAlert(message);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 13]]);
      }))();
    },
    // FORM OPTION
    showForm: function showForm(idData, modeData) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.resetData();

                _this7.idData = idData;
                _this7.modeDataValue = modeData;
                _this7.resetOnChange = false;

                _this7.$loadingIndicator(_this7);

                if (!(_this7.formType == _this7.global.formType.masterFolio)) {
                  _context7.next = 29;
                  break;
                }

                if (!(modeData === _this7.global.modeData.edit || modeData === _this7.global.modeData.duplicate)) {
                  _context7.next = 17;
                  break;
                }

                _this7.folioNumber = idData.folio_number;

                _this7.getDataLookUp();

                _context7.next = 11;
                return _this7.editMasterFolio(idData);

              case 11:
                if (modeData == _this7.global.modeData.duplicate) {
                  _this7.vModel.folio_number = '';
                }

                _this7.getState(true);

                _this7.modalMain = true;
                _this7.vModel.birth_date = _this7.vModel.birth_date == '0000-00-00' ? '' : _this7.vModel.birth_date;
                _context7.next = 27;
                break;

              case 17:
                if (!(modeData === _this7.global.modeData.insert)) {
                  _context7.next = 24;
                  break;
                }

                _this7.activeTab = 1;
                _context7.next = 21;
                return _this7.getDataLookUp();

              case 21:
                _this7.modalMain = true;
                _context7.next = 27;
                break;

              case 24:
                if (!(modeData === _this7.global.modeData.tracking)) {
                  _context7.next = 27;
                  break;
                }

                _context7.next = 27;
                return _this7.trackingData(idData);

              case 27:
                _context7.next = 48;
                break;

              case 29:
                if (!(_this7.formType == _this7.global.formType.deskFolio)) {
                  _context7.next = 48;
                  break;
                }

                if (!(modeData === _this7.global.modeData.edit)) {
                  _context7.next = 38;
                  break;
                }

                _this7.folioNumber = idData.folio_number;

                _this7.getDataLookUp();

                _context7.next = 35;
                return _this7.editDeskFolio(idData);

              case 35:
                _this7.vModel.birth_date = _this7.vModel.birth_date == '0000-00-00' ? '' : _this7.vModel.birth_date;
                _context7.next = 48;
                break;

              case 38:
                if (!(modeData === _this7.global.modeData.insert)) {
                  _context7.next = 45;
                  break;
                }

                _this7.activeTab = 1;
                _context7.next = 42;
                return _this7.getDataLookUp();

              case 42:
                _this7.modalMain = true;
                _context7.next = 48;
                break;

              case 45:
                if (!(modeData === _this7.global.modeData.tracking)) {
                  _context7.next = 48;
                  break;
                }

                _context7.next = 48;
                return _this7.trackingData(idData);

              case 48:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                params = {
                  id_log: idData.folio_number,
                  table: _this8.global.tableName.folio
                };

                _this8.$loadingIndicator(_this8);

                _context8.prev = 2;
                _context8.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context8.sent;
                data = _yield$trackingDataRe.data;
                _this8.dataTracking = data.modelGrid;
                _this8.modalMain = true;
                _context8.next = 14;
                break;

              case 11:
                _context8.prev = 11;
                _context8.t0 = _context8["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 14:
                _this8.$closeLoadingIndicator(_this8);

              case 15:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[2, 11]]);
      }))();
    },
    refreshData: function refreshData() {
      this.$emit('refreshData');
    },
    resetData: function resetData() {
      this.vModel = {
        arrival: this.getDateTimeArrival(),
        departure: this.departureDate,
        adult: 1,
        child: 0,
        full_name: '',
        payment_type_code: this.cash,
        market_code: this.defaultMarket,
        audit_date: this.auditDate,
        folio_number: 0,
        balance: 0,
        user_id: this.global.userInfo.code
      };
      this.nights = 1;
      this.resetOnOptionsChangeState = false;
      this.resetOnOptionsChangeCity = false;
      this.weekday_rate_discount = 0;
      this.weekend_rate_discount = 0;
      this.dbErrors = {};
      this.dataTracking = null;
      this.btnSaveDisabled = false;
      this.$validator.reset();
    },
    handleSaveForm: function handleSaveForm() {
      var _this9 = this;

      var validate = this.scope1;
      this.$validator.validateAll(validate).then(function (result) {
        if (result) {
          _this9.btnSaveDisabled = true;

          if (_this9.modeDataValue === _this9.global.modeData.insert || _this9.modeDataValue === _this9.global.modeData.duplicate) {
            _this9.$vs.loading({
              container: '#button-save-main',
              scale: _this9.global.scaleLoadingButton
            });

            if (_this9.formType == _this9.global.formType.masterFolio) {
              _this9.insertMasterFolio(_this9.vModel);
            } else if (_this9.formType == _this9.global.formType.deskFolio) {
              _this9.insertDeskFolio(_this9.vModel);
            }
          } else if (_this9.modeDataValue === _this9.global.modeData.edit) {
            _this9.$vs.loading({
              container: '#button-save-main',
              scale: _this9.global.scaleLoadingButton
            });

            if (_this9.formType == _this9.global.formType.masterFolio) {
              _this9.updateMasterFolio(_this9.vModel);
            } else if (_this9.formType == _this9.global.formType.deskFolio) {
              _this9.updateDeskFolio(_this9.vModel);
            }
          }
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].inputRequiredAlert();
        }
      });
    },
    // ------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function getDataLookUp() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _yield$guestInHouseRe3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return guestInHouseResource.dataLookup();

              case 3:
                _yield$guestInHouseRe3 = _context9.sent;
                data = _yield$guestInHouseRe3.data;
                _this10.dataLookup = data;
                _this10.city = data.city;

                _this10.$vs.loading.close('#layout--main>.con-vs-loading');

                _this10.$vs.loading.close('.popup-body>.con-vs-loading');

                _context9.next = 15;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](0);

                _this10.$vs.loading.close('.popup-body>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 11]]);
      }))();
    },
    getState: function getState(state) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var params, _yield$guestInHouseRe4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!_this11.vModel.country_code) {
                  _context10.next = 13;
                  break;
                }

                params = {
                  country: _this11.vModel.country_code,
                  state: _this11.vModel.state_code
                };
                _context10.prev = 2;
                _context10.next = 5;
                return guestInHouseResource.state(params);

              case 5:
                _yield$guestInHouseRe4 = _context10.sent;
                data = _yield$guestInHouseRe4.data;

                if (state == true) {
                  _this11.state = data.state;
                  _this11.city = data.city;
                } else {
                  _this11.city = data.city;
                }

                _context10.next = 13;
                break;

              case 10:
                _context10.prev = 10;
                _context10.t0 = _context10["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_1__["default"].errorFetchDataAlert(_context10.t0);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[2, 10]]);
      }))();
    },
    // ------------------END POPULATE SELECT OPTIONS----------------------//
    //  DATEPICKER CONFIGURATION //
    dateTodayDisable: function dateTodayDisable(date) {
      var audit = new Date(this.auditDate);
      audit.setDate(audit.getDate() - 1);
      return date < audit;
    },
    dateArrivalDisable: function dateArrivalDisable(date) {
      var arrival = new Date(this.vModel.arrival);
      return date < arrival;
    },
    toggleTimeRangePanel: function toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    getTotalDays: function getTotalDays() {
      var date1 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(this.vModel.arrival)).getTime();
      var date2 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(this.vModel.departure)).getTime();
      var auditDate = new Date(this.auditDate).getTime();

      if (date1 >= date2) {
        this.vModel.departure = this.departureDate2;
      }

      if (date1 < auditDate && this.modeDataValue === this.global.modeData.insert) {
        this.vModel.arrival = this.getDateTimeArrival();
      }

      var date3 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(this.vModel.arrival));
      var date4 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(this.vModel.departure)); // To calculate the time difference of two dates

      var diffInTime = date4.getTime() - date3.getTime(); // To calculate the no. of days between two dates

      var diffInDays = diffInTime / (1000 * 3600 * 24); // restrict negatif departure

      this.nights = diffInDays;

      if (this.nights > 0) {
        this.tempNights = this.nights;
      }
    },
    addZeroHour: function addZeroHour(i) {
      if (i < 10) {
        i = "0".concat(i);
      }

      return i;
    },
    handleChangeNight: function handleChangeNight() {
      if (this.nights > 0) {
        this.tempNights = this.nights;
        var departure = new Date(this.vModel.arrival);
        var time = new Date(this.vModel.departure);
        var h = this.addZeroHour(time.getHours());
        var m = this.addZeroHour(time.getMinutes());
        var s = this.addZeroHour(time.getSeconds());
        var times = "".concat(h, ":").concat(m, ":").concat(s);
        var arrivalDate = new Date(this.vModel.arrival).getDate();
        var departureDate = parseInt(arrivalDate) + parseInt(this.nights);
        departure.setDate(departureDate);
        departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(departure);

        if (departure >= this.auditDate) {
          this.vModel.departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])("".concat(departure, " ").concat(times));
        } else {
          this.getTotalDays();
        }
      } else {
        this.nights = this.tempNights;
      }
    },
    getDateTimeArrival: function getDateTimeArrival() {
      var time = new Date();
      var h = this.addZeroHour(time.getHours());
      var m = this.addZeroHour(time.getMinutes());
      var s = this.addZeroHour(time.getSeconds());
      var times = "".concat(h, ":").concat(m, ":").concat(s);
      var arrResv = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(times));
      return arrResv;
    },
    resetDate: function resetDate() {
      this.vModel.arrival = this.getDateTimeArrival();
      this.vModel.departure = this.departureDate;
      this.nights = 1;
    },
    //  END DATEPICKER CONFIGURATION //
    precheckDayendClosed: function precheckDayendClosed() {
      this.$emit('precheck');
    } // ------------------end need setting manual for crud-----------------//

  },
  watch: {
    modalPreventClose: function modalPreventClose() {
      this.modalPreventClose = this.modalMain;
    },
    modalMain: function modalMain() {
      this.modalPreventClose = this.modalMain;

      if (!this.modalMain) {
        this.refreshData();
      }
    }
  },
  computed: {
    departureDate: function departureDate() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(this.checkOutTime)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])(departure);
    },
    departureDate2: function departureDate2() {
      var arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateDatabase"])(this.vModel.arrival);
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])("".concat(arrival, " ").concat(this.checkOutTime)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_4__["formatDateTimeDatabase"])(departure);
    },
    // INPUT FIELD REQUIRED
    isTitleRequired: function isTitleRequired() {
      return this.$store.getters.isTitleRequired;
    },
    isTAVoucherRequired: function isTAVoucherRequired() {
      return this.$store.getters.isTAVoucherRequired;
    },
    isStateRequired: function isStateRequired() {
      return this.$store.getters.isStateRequired;
    },
    isRoomNumberRequired: function isRoomNumberRequired() {
      return this.$store.getters.isRoomNumberRequired;
    },
    isPhone1Required: function isPhone1Required() {
      return this.$store.getters.isPhone1Required;
    },
    isNationalityRequired: function isNationalityRequired() {
      return this.$store.getters.isNationalityRequired;
    },
    isMarketRequired: function isMarketRequired() {
      return this.$store.getters.isMarketRequired;
    },
    isHKNoteRequired: function isHKNoteRequired() {
      return this.$store.getters.isHKNoteRequired;
    },
    isEmailRequired: function isEmailRequired() {
      return this.$store.getters.isEmailRequired;
    },
    isCompanyRequired: function isCompanyRequired() {
      return this.$store.getters.isCompanyRequired;
    },
    isCityRequired: function isCityRequired() {
      return this.$store.getters.isCityRequired;
    },
    isBusinessSourceRequired: function isBusinessSourceRequired() {
      return this.$store.getters.isBusinessSourceRequired;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    cash: function cash() {
      return this.$store.getters.cash;
    },
    checkOutTime: function checkOutTime() {
      return this.$store.getters.checkOutLimit;
    },
    defaultMarket: function defaultMarket() {
      return this.$store.getters.dvMarket;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData.number
              : _vm.modeDataValue == _vm.global.modeData.insert
              ? "Insert " + _vm.titleForm
              : _vm.modeDataValue == _vm.global.modeData.edit
              ? "Update " + _vm.titleForm + ": " + _vm.idData.folio_number
              : _vm.modeDataValue == _vm.global.modeData.duplicate
              ? "Duplicate " + _vm.titleForm + ": " + _vm.idData.folio_number
              : _vm.titleForm,
          width: 80,
          active: _vm.modalMain,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveForm()
          },
          close: function (val) {
            return (_vm.modalMain = val)
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
                          },
                        }),
                      ],
                      1
                    )
                  : _c("div", { ref: "parentSidebar" }, [
                      _c("div", { staticClass: "form-container" }, [
                        _c(
                          "div",
                          {
                            ref: "popupContainer",
                            staticClass: "popup-container",
                            attrs: { "vs-position": "left" },
                          },
                          [
                            _c(
                              "vx-card",
                              {
                                attrs: {
                                  icon: "date_range",
                                  title: "Booking Information",
                                  collapseAction: "",
                                },
                              },
                              [
                                _c(
                                  "vs-row",
                                  {
                                    staticClass: "md:w-1/2",
                                    attrs: {
                                      "vs-type": "flex",
                                      "vs-justify": "space-between",
                                    },
                                  },
                                  [
                                    _c(
                                      "vs-col",
                                      { attrs: { "vs-lg": "6", "vs-xs": "6" } },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              "font-weight": "bold",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "folio.form.dateInformation"
                                                )
                                              )
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-col",
                                      { attrs: { "vs-lg": "4", "vs-xs": "6" } },
                                      [
                                        _c("vs-input-number", {
                                          staticClass: "number-input mr-3",
                                          attrs: {
                                            min: "1",
                                            label:
                                              _vm.$t("folio.form.days") + ":",
                                          },
                                          on: {
                                            input: function ($event) {
                                              return _vm.handleChangeNight()
                                            },
                                          },
                                          model: {
                                            value: _vm.nights,
                                            callback: function ($$v) {
                                              _vm.nights = $$v
                                            },
                                            expression: "nights",
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
                                  [
                                    _c(
                                      "vs-col",
                                      { staticClass: "content-left lg:w-1/2" },
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
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "required",
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.$t(
                                                                "folio.form.arrivalDate"
                                                              )
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("date-picker", {
                                                      directives: [
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'",
                                                        },
                                                      ],
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        clearable: false,
                                                        disabled: "",
                                                        "disabled-date":
                                                          _vm.dateTodayDisable,
                                                        type: "datetime",
                                                        confirm: "",
                                                        "confirm-text": "ok",
                                                        "show-time-panel":
                                                          _vm.showTimeRangePanel,
                                                        lang: _vm.$t("lang"),
                                                        "value-type":
                                                          "YYYY-MM-DD HH:mm:ss",
                                                        format:
                                                          "DD/MM/YYYY HH:mm:ss",
                                                        label: "name",
                                                        name: "arrival",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      on: {
                                                        close: function (
                                                          $event
                                                        ) {
                                                          _vm.showTimeRangePanel = false
                                                        },
                                                        input: _vm.getTotalDays,
                                                      },
                                                      scopedSlots: _vm._u([
                                                        {
                                                          key: "footer",
                                                          fn: function () {
                                                            return [
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "mx-btn mx-btn-text",
                                                                  on: {
                                                                    click:
                                                                      _vm.resetDate,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                reset\n                                                            "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "mx-btn mx-btn-text",
                                                                  on: {
                                                                    click:
                                                                      _vm.toggleTimeRangePanel,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                " +
                                                                      _vm._s(
                                                                        _vm.showTimeRangePanel
                                                                          ? "select date"
                                                                          : "select time"
                                                                      ) +
                                                                      "\n                                                            "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          },
                                                          proxy: true,
                                                        },
                                                      ]),
                                                      model: {
                                                        value:
                                                          _vm.vModel.arrival,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "arrival",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.arrival",
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
                                                                _vm.scope1 +
                                                                  ".arrival"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.arrival')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              _vm.scope1 +
                                                                ".arrival"
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass: "required",
                                                      },
                                                      [
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.$t(
                                                                "folio.form.departureDate"
                                                              )
                                                            )
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("date-picker", {
                                                      directives: [
                                                        {
                                                          name: "validate",
                                                          rawName: "v-validate",
                                                          value: "required",
                                                          expression:
                                                            "'required'",
                                                        },
                                                      ],
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        clearable: false,
                                                        "disabled-date":
                                                          _vm.dateArrivalDisable,
                                                        type: "datetime",
                                                        confirm: "",
                                                        "confirm-text": "ok",
                                                        "show-time-panel":
                                                          _vm.showTimeRangePanel,
                                                        lang: _vm.$t("lang"),
                                                        "value-type":
                                                          "YYYY-MM-DD HH:mm:ss",
                                                        format:
                                                          "DD/MM/YYYY HH:mm:ss",
                                                        label: "name",
                                                        name: "departure",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      on: {
                                                        close: function (
                                                          $event
                                                        ) {
                                                          _vm.showTimeRangePanel = false
                                                        },
                                                        input: _vm.getTotalDays,
                                                      },
                                                      scopedSlots: _vm._u([
                                                        {
                                                          key: "footer",
                                                          fn: function () {
                                                            return [
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "mx-btn mx-btn-text",
                                                                  on: {
                                                                    click:
                                                                      _vm.resetDate,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "common.datepicker.reset"
                                                                        )
                                                                      ) +
                                                                      "\n                                                            "
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "mx-btn mx-btn-text",
                                                                  on: {
                                                                    click:
                                                                      _vm.toggleTimeRangePanel,
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                                " +
                                                                      _vm._s(
                                                                        _vm.showTimeRangePanel
                                                                          ? _vm.$t(
                                                                              "common.datepicker.selectDate"
                                                                            )
                                                                          : _vm.$t(
                                                                              "common.datepicker.selectTime"
                                                                            )
                                                                      ) +
                                                                      "\n                                                            "
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          },
                                                          proxy: true,
                                                        },
                                                      ]),
                                                      model: {
                                                        value:
                                                          _vm.vModel.departure,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "departure",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.departure",
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
                                                                _vm.scope1 +
                                                                  ".arrival"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.arrival')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.errors.first(
                                                              _vm.scope1 +
                                                                ".arrival"
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
                                              "vs-col",
                                              {
                                                attrs: {
                                                  "vs-lg": "6",
                                                  "vs-xs": "6",
                                                },
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      "font-weight": "bold",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.generalInformation"
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                              ]
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
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                                class: {
                                                  required:
                                                    _vm.isMarketRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.market"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isMarketRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isMarketRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup.market,
                                                        name: "market",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .market_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "market_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.market_code",
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
                                                                _vm.scope1 +
                                                                  ".market"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.market')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".market"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .market
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.bookingSource"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup
                                                            .booking_source,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .booking_source_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "booking_source_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.booking_source_code",
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("folio.form.group")
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup.group,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.group_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "group_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.group_code",
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.marketing"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup
                                                            .marketing,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .marketing_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "marketing_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.marketing_code",
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
                                    _vm._v(" "),
                                    _c(
                                      "vs-col",
                                      { staticClass: "content-right lg:w-1/2" },
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
                                            _c("vs-input", {
                                              staticClass: "w-full",
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.doc") +
                                                  " #",
                                                maxLength: 50,
                                              },
                                              model: {
                                                value:
                                                  _vm.vModel.document_number,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "document_number",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vModel.document_number",
                                              },
                                            }),
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
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass:
                                                      "wrap-form-select w-full",
                                                  },
                                                  [
                                                    _c(
                                                      "vs-checkbox",
                                                      {
                                                        staticClass: "w-full",
                                                        staticStyle: {
                                                          padding: "0px",
                                                          margin: "inherit",
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .show_notes,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "show_notes",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.show_notes",
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "folio.form.showNotesAtCheckIn"
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
                                            staticClass:
                                              "wrap-form-select mt-3",
                                            attrs: {
                                              "vs-type": "flex",
                                              "vs-justify": "space-between",
                                            },
                                          },
                                          [
                                            _c("vs-textarea", {
                                              staticClass: "w-full",
                                              staticStyle: {
                                                "margin-bottom": "0px",
                                              },
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.notes"),
                                                placeholder:
                                                  _vm.$t("placeholder.notes"),
                                              },
                                              model: {
                                                value: _vm.vModel.notes,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "notes",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.notes",
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
                            _vm._v(" "),
                            _c(
                              "vx-card",
                              {
                                staticClass: "mt-3",
                                attrs: {
                                  icon: "date_range",
                                  title: _vm.$t(
                                    "folio.form.personalInformation"
                                  ),
                                  collapseAction: "",
                                },
                              },
                              [
                                _c(
                                  "vs-row",
                                  [
                                    _c(
                                      "vs-col",
                                      {
                                        staticClass: "content-left",
                                        attrs: { "vs-lg": "6", "vs-xs": "12" },
                                      },
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
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "wrap-form-select sm:w-6/12 md:w-4/12",
                                                class: {
                                                  required: _vm.isTitleRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.title"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isTitleRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isTitleRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "w-full height200",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "code",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup.title,
                                                        name: "title",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.title_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "title_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.title_code",
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
                                                                _vm.scope1 +
                                                                  ".title"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.title')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".title"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .title
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
                                                staticClass: "md:w-8/12 w-full",
                                              },
                                              [
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass:
                                                      "wrap-form-select required",
                                                  },
                                                  [
                                                    _c("label", [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "folio.form.fullname"
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
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
                                                          expression:
                                                            "'required'",
                                                        },
                                                      ],
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        name: "fullname",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.full_name,
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
                                                                _vm.scope1 +
                                                                  ".fullname"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.fullname')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".fullname"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .full_name
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.member"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "height200 w-full",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup.member,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .member_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "member_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.member_code",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.street"),
                                                maxLength: 100,
                                              },
                                              model: {
                                                value: _vm.vModel.street,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "street",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.street",
                                              },
                                            }),
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
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.country"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "w-full height150",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
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
                                                        input: function (
                                                          $event
                                                        ) {
                                                          _vm.getState(true)
                                                          _vm.resetOnOptionsChangeState = true
                                                        },
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
                                                  "wrap-form-select w-full md:w-1/2",
                                                class: {
                                                  required: _vm.isStateRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.state"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isStateRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isStateRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "height150 w-full",
                                                      attrs: {
                                                        id: "form-select",
                                                        resetOnOptionsChange:
                                                          _vm.resetOnOptionsChangeState,
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options: _vm.state,
                                                        name: "state",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      on: {
                                                        input: function (
                                                          $event
                                                        ) {
                                                          _vm.getState(false)
                                                          _vm.resetOnOptionsChangeCity = true
                                                        },
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.state_code,
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
                                                                _vm.scope1 +
                                                                  ".state"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.state')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".state"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .state
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
                                                  "wrap-form-select w-full md:w-1/2",
                                                class: {
                                                  required: _vm.isCityRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.city"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isCityRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isCityRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "w-full height150",
                                                      attrs: {
                                                        id: "city",
                                                        resetOnOptionsChange:
                                                          _vm.resetOnOptionsChangeCity,
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options: _vm.city,
                                                        name: "city",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.city_code,
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
                                                                _vm.scope1 +
                                                                  ".city"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.city')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".city"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .city
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
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                disabled:
                                                  _vm.vModel.city_code !==
                                                  "OTH",
                                                label: ".",
                                              },
                                              model: {
                                                value: _vm.vModel.city,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "city",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.city",
                                              },
                                            }),
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
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                                class: {
                                                  required:
                                                    _vm.isNationalityRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.nationality"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isNationalityRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isNationalityRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "w-full height100",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup
                                                            .nationality,
                                                        name: "nationality",
                                                        "data-vv-scope":
                                                          _vm.scope1,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .nationality_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "nationality_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.nationality_code",
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
                                                                _vm.scope1 +
                                                                  ".nationality"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.nationality')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".nationality"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .nationality
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
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                label: _vm.$t(
                                                  "folio.form.postCode"
                                                ),
                                                maxLength: 10,
                                              },
                                              model: {
                                                value: _vm.vModel.postal_code,
                                                callback: function ($$v) {
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
                                      "vs-col",
                                      {
                                        staticClass: "content-right",
                                        attrs: { "vs-lg": "6", "vs-xs": "12" },
                                      },
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
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: _vm.isPhone1Required
                                                    ? "required"
                                                    : "",
                                                  expression:
                                                    "isPhone1Required ? 'required' : ''",
                                                },
                                              ],
                                              staticClass: "w-full md:w-1/2",
                                              class: {
                                                required: _vm.isPhone1Required,
                                              },
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.phone") +
                                                  " 1",
                                                placeholder: "+62xxxxxxxxx",
                                                maxLength: 50,
                                                "description-text": _vm._f(
                                                  "toString"
                                                )(
                                                  _vm.errors.first(
                                                    _vm.scope1 + ".phone1"
                                                  ) || _vm.dbErrors.phone1
                                                ),
                                                name: "phone1",
                                                "data-vv-scope": _vm.scope1,
                                              },
                                              model: {
                                                value: _vm.vModel.phone1,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "phone1",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.phone1",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("vs-input", {
                                              staticClass: "w-full md:w-1/2",
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.phone") +
                                                  " 2",
                                                placeholder: "+62xxxxxxxxx",
                                                maxLength: 50,
                                              },
                                              model: {
                                                value: _vm.vModel.phone2,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "phone2",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.phone2",
                                              },
                                            }),
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
                                            _c("vs-input", {
                                              staticClass: "w-full md:w-1/2",
                                              attrs: {
                                                label: _vm.$t("folio.form.fax"),
                                                maxLength: 20,
                                              },
                                              model: {
                                                value: _vm.vModel.fax,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "fax",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.fax",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: _vm.isEmailRequired
                                                    ? "required"
                                                    : "",
                                                  expression:
                                                    "isEmailRequired ? 'required' : ''",
                                                },
                                              ],
                                              staticClass: "w-full md:w-1/2",
                                              class: {
                                                required: _vm.isEmailRequired,
                                              },
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.email"),
                                                placeholder:
                                                  "anonym@somewhere.com",
                                                maxLength: 50,
                                                "description-text": _vm._f(
                                                  "toString"
                                                )(
                                                  _vm.errors.first(
                                                    _vm.scope1 + ".email"
                                                  ) || _vm.dbErrors.email
                                                ),
                                                name: "email",
                                                "data-vv-scope": _vm.scope1,
                                              },
                                              model: {
                                                value: _vm.vModel.email,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "email",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.email",
                                              },
                                            }),
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
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                label:
                                                  _vm.$t("folio.form.website"),
                                                placeholder:
                                                  "www.something.com",
                                                maxLength: 50,
                                              },
                                              model: {
                                                value: _vm.vModel.website,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "website",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.website",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                                class: {
                                                  required:
                                                    _vm.isCompanyRequired,
                                                },
                                              },
                                              [
                                                _c("vs-row", [
                                                  _c("label", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "folio.form.company"
                                                        )
                                                      )
                                                    ),
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
                                                          value:
                                                            _vm.isCompanyRequired
                                                              ? "required"
                                                              : "",
                                                          expression:
                                                            "isCompanyRequired ? 'required' : ''",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "height150 w-full",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
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
                                                          _vm.scope1,
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
                                                                _vm.scope1 +
                                                                  ".company"
                                                              ),
                                                            expression:
                                                              "errors.has(scope1+'.company')",
                                                          },
                                                        ],
                                                        staticClass:
                                                          "error-text text-danger",
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm._f("toString")(
                                                              _vm.errors.first(
                                                                _vm.scope1 +
                                                                  ".company"
                                                              ) ||
                                                                _vm.dbErrors
                                                                  .company
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
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.guestType"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "height150 w-full",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup
                                                            .guest_type,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .guest_type_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "guest_type_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.guest_type_code",
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
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.idCardType"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("v-select", {
                                                      staticClass:
                                                        "height100 w-full",
                                                      attrs: {
                                                        id: "form-select",
                                                        label: "name",
                                                        reduce: function (
                                                          value
                                                        ) {
                                                          return value.code
                                                        },
                                                        options:
                                                          _vm.dataLookup
                                                            .id_card,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel
                                                            .id_card_code,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "id_card_code",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.id_card_code",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                label: _vm.$t(
                                                  "folio.form.idCardNumber"
                                                ),
                                                maxLength: 25,
                                              },
                                              model: {
                                                value:
                                                  _vm.vModel.id_card_number,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "id_card_number",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vModel.id_card_number",
                                              },
                                            }),
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
                                            _c("vs-input", {
                                              staticClass:
                                                "wrap-form-select w-full md:w-1/2",
                                              attrs: {
                                                label: _vm.$t(
                                                  "folio.form.birthPlace"
                                                ),
                                                maxLength: 50,
                                              },
                                              model: {
                                                value: _vm.vModel.birth_place,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "birth_place",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "vModel.birth_place",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "wrap-form-select w-full md:w-1/2",
                                              },
                                              [
                                                _c("vs-row", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "folio.form.birthDate"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  [
                                                    _c("date-picker", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        lang: _vm.$t("lang"),
                                                        "value-type":
                                                          "YYYY-MM-DD",
                                                        clearable: "",
                                                        format: "DD/MM/YYYY",
                                                        placeholder:
                                                          "DD/MM/YYYY",
                                                        label: "name",
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vModel.birth_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vModel,
                                                            "birth_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vModel.birth_date",
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
                          ],
                          1
                        ),
                      ]),
                    ]),
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

/***/ "./resources/js/src/api/deskFolio.js":
/*!*******************************************!*\
  !*** ./resources/js/src/api/deskFolio.js ***!
  \*******************************************/
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
var uri = 'deskfolio';

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

  return DeskFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/masterFolio.js":
/*!*********************************************!*\
  !*** ./resources/js/src/api/masterFolio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterFolioResource; });
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
var uri = 'masterfolio';

var MasterFolioResource = /*#__PURE__*/function (_Resource) {
  _inherits(MasterFolioResource, _Resource);

  var _super = _createSuper(MasterFolioResource);

  function MasterFolioResource() {
    _classCallCheck(this, MasterFolioResource);

    return _super.call(this, uri);
  }

  _createClass(MasterFolioResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "createMasterFolioGroup",
    value: function createMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "isFolioGroupExist",
    value: function isFolioGroupExist(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroupexist',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "getMasterFolioGroup",
    value: function getMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup/getmaster',
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

  return MasterFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolioForm.vue?vue&type=template&id=2648cfb2& */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&");
/* harmony import */ var _FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolioForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/folioForm/FolioForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FolioForm.vue?vue&type=template&id=2648cfb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/folioForm/FolioForm.vue?vue&type=template&id=2648cfb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolioForm_vue_vue_type_template_id_2648cfb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);