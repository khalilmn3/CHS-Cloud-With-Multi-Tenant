(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/alert */ "./resources/js/src/utils/alert.js");


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



var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_1__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    formType: String,
    isShowCorrectionOrProperties: Boolean
  },
  data: function data() {
    return {
      dbErrors: {},
      // error message handling
      modalMain: false,
      btnSaveDisabled: false,
      dlSubDepartment: [],
      dlCompany: [],
      title: '',
      updateType: '',
      vModel: {}
    };
  },
  methods: {
    handleUpdateType: function handleUpdateType(params, type) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.title = type === 1 ? _this.$t('transaction.title.updateSubDepartment') : type === 2 ? _this.$t('transaction.title.updateRemark') : type === 3 ? _this.$t('transaction.title.updateDocumentNumber') : '';
                _this.updateType = type;

                _this.resetData(params.id_log);

                _this.$loadingIndicator(_this);

                if (!(type === 1)) {
                  _context.next = 10;
                  break;
                }

                _this.getLookupSubDepartment(params.id_log);

                _context.next = 8;
                return _this.editSubDepartment(params.id_log);

              case 8:
                _context.next = 24;
                break;

              case 10:
                if (!(type === 2)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 13;
                return _this.editRemark(params.id_log);

              case 13:
                _context.next = 24;
                break;

              case 15:
                if (!(type === 3)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 18;
                return _this.editDocumentNumber(params.id_log);

              case 18:
                _context.next = 24;
                break;

              case 20:
                if (!(type === 4)) {
                  _context.next = 24;
                  break;
                }

                _this.getLookupCompany(params.id_log);

                _context.next = 24;
                return _this.editDirectBill(params.id_log);

              case 24:
                _this.$closeLoadingIndicator(_this);

                _this.modalMain = true;

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getLookupSubDepartment: function getLookupSubDepartment(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = [];

                if (!(_this2.formType === _this2.global.formType.reservation)) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return depositResource.getSubDepartment(id);

              case 4:
                data = _context2.sent;
                _context2.next = 11;
                break;

              case 7:
                if (!(_this2.formType === _this2.global.formType.transaction)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 10;
                return transactionResource.getSubDepartment(id);

              case 10:
                data = _context2.sent;

              case 11:
                _this2.dlSubDepartment = data.data;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getLookupCompany: function getLookupCompany(idLog) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return transactionResource.getCompany(idLog);

              case 2:
                _yield$transactionRes = _context3.sent;
                data = _yield$transactionRes.data;
                _this3.dlCompany = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    editSubDepartment: function editSubDepartment(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = [];

                if (!(_this4.formType === _this4.global.formType.reservation)) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return depositResource.editSubDepartment(id);

              case 4:
                data = _context4.sent;
                _context4.next = 11;
                break;

              case 7:
                if (!(_this4.formType === _this4.global.formType.transaction)) {
                  _context4.next = 11;
                  break;
                }

                _context4.next = 10;
                return transactionResource.editSubDepartment(id);

              case 10:
                data = _context4.sent;

              case 11:
                _this4.vModel.sub_department_code = _this4.dlSubDepartment.length > 0 ? data.data.sub_department_code : '';

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    editRemark: function editRemark(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = [];

                if (!(_this5.formType === _this5.global.formType.reservation)) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 4;
                return depositResource.editRemark(id);

              case 4:
                data = _context5.sent;
                _context5.next = 11;
                break;

              case 7:
                if (!(_this5.formType === _this5.global.formType.transaction)) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 10;
                return transactionResource.editRemark(id);

              case 10:
                data = _context5.sent;

              case 11:
                _this5.vModel.remark = data.data.remark;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    editDocumentNumber: function editDocumentNumber(id) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = [];

                if (!(_this6.formType === _this6.global.formType.reservation)) {
                  _context6.next = 7;
                  break;
                }

                _context6.next = 4;
                return depositResource.editDocumentNumber(id);

              case 4:
                data = _context6.sent;
                _context6.next = 11;
                break;

              case 7:
                if (!(_this6.formType === _this6.global.formType.transaction)) {
                  _context6.next = 11;
                  break;
                }

                _context6.next = 10;
                return transactionResource.editDocumentNumber(id);

              case 10:
                data = _context6.sent;

              case 11:
                _this6.vModel.document_number = data.data.document_number;

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    editDirectBill: function editDirectBill(id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$transactionRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return transactionResource.editDirectBill(id);

              case 2:
                _yield$transactionRes2 = _context7.sent;
                data = _yield$transactionRes2.data;
                _this7.vModel.company_code = _this7.dlCompany.length > 0 ? data.direct_bill_code : '';

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    handleSaveData: function handleSaveData() {
      var _this8 = this;

      if (this.updateType === 1 || this.updateType === 4) {
        var scope = this.updateType === 1 ? 'subDepartment' : 'company';
        this.$validator.validateAll(scope).then(function (result) {
          if (result) {
            _this8.saveData();
          }

          ;
        });
      } else {
        this.saveData();
      }
    },
    saveData: function saveData() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var data, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this9.btnSaveDisabled = true;

                _this9.$loadingIndicator(_this9);

                _context8.prev = 2;
                data = null;

                if (!(_this9.formType == _this9.global.formType.reservation)) {
                  _context8.next = 23;
                  break;
                }

                if (!(_this9.updateType === 1)) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 8;
                return depositResource.updateSubDepartment(_this9.vModel);

              case 8:
                data = _context8.sent;
                _context8.next = 21;
                break;

              case 11:
                if (!(_this9.updateType === 2)) {
                  _context8.next = 17;
                  break;
                }

                _context8.next = 14;
                return depositResource.updateRemark(_this9.vModel);

              case 14:
                data = _context8.sent;
                _context8.next = 21;
                break;

              case 17:
                if (!(_this9.updateType === 3)) {
                  _context8.next = 21;
                  break;
                }

                _context8.next = 20;
                return depositResource.updateDocumentNumber(_this9.vModel);

              case 20:
                data = _context8.sent;

              case 21:
                _context8.next = 46;
                break;

              case 23:
                if (!(_this9.formType === _this9.global.formType.transaction)) {
                  _context8.next = 46;
                  break;
                }

                if (!(_this9.updateType === 1)) {
                  _context8.next = 30;
                  break;
                }

                _context8.next = 27;
                return transactionResource.updateSubDepartment(_this9.vModel);

              case 27:
                data = _context8.sent;
                _context8.next = 46;
                break;

              case 30:
                if (!(_this9.updateType === 2)) {
                  _context8.next = 36;
                  break;
                }

                _context8.next = 33;
                return transactionResource.updateRemark(_this9.vModel);

              case 33:
                data = _context8.sent;
                _context8.next = 46;
                break;

              case 36:
                if (!(_this9.updateType === 3)) {
                  _context8.next = 42;
                  break;
                }

                _context8.next = 39;
                return transactionResource.updateDocumentNumber(_this9.vModel);

              case 39:
                data = _context8.sent;
                _context8.next = 46;
                break;

              case 42:
                if (!(_this9.updateType === 4)) {
                  _context8.next = 46;
                  break;
                }

                _context8.next = 45;
                return transactionResource.updateDirectBill(_this9.vModel);

              case 45:
                data = _context8.sent;

              case 46:
                if (!(data.data === 0)) {
                  _context8.next = 53;
                  break;
                }

                _utils_alert__WEBPACK_IMPORTED_MODULE_3__["default"].acceptAlertSucces();
                _context8.next = 50;
                return _this9.refreshData();

              case 50:
                _this9.modalMain = false;
                _context8.next = 55;
                break;

              case 53:
                _this9.$closeLoadingIndicator(_this9);

                _utils_alert__WEBPACK_IMPORTED_MODULE_3__["default"].errorSaveDataAlert();

              case 55:
                _this9.btnSaveDisabled = false;
                _context8.next = 61;
                break;

              case 58:
                _context8.prev = 58;
                _context8.t0 = _context8["catch"](2);

                if (_context8.t0.response) {
                  message = _context8.t0.response.data.error;
                  _this9.dbErrors = message == undefined ? '' : message;
                  _utils_alert__WEBPACK_IMPORTED_MODULE_3__["default"].errorSaveDataAlert(message);

                  _this9.$closeLoadingIndicator(_this9);

                  _this9.btnSaveDisabled = false;
                }

              case 61:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[2, 58]]);
      }))();
    },
    refreshData: function refreshData() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this10.$emit('refreshData');

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    resetData: function resetData(idLog) {
      this.dlSubDepartment = [];
      this.vModel = {
        id_log: idLog,
        sub_department_code: '',
        remark: '',
        document_number: '',
        is_show_correction: this.isShowCorrection,
        user_id: this.global.userInfo.code
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
          button1: "",
          title: _vm.title,
          child: 1,
          width: 500,
          active: _vm.modalMain,
          idButton1: "button-save",
          buttonDisabled1: _vm.btnSaveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveData()
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
                _vm.updateType == 1
                  ? _c(
                      "div",
                      [
                        _c(
                          "vs-row",
                          {
                            staticClass: "wrap-form-select",
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("label", { staticClass: "md:w-1/3 w-full" }, [
                              _vm._v(
                                _vm._s(_vm.$t("transaction.subDepartment"))
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'",
                                },
                              ],
                              staticClass: "md:w-2/3 w-full",
                              attrs: {
                                id: "form-select",
                                "append-to-body": "",
                                clearable: false,
                                label: "name",
                                reduce: function (value) {
                                  return value.code
                                },
                                options: _vm.dlSubDepartment,
                                name: "sub department",
                                "data-vv-scope": "subDepartment",
                              },
                              on: {
                                keyup: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.handleSaveData()
                                },
                              },
                              model: {
                                value: _vm.vModel.sub_department_code,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.vModel,
                                    "sub_department_code",
                                    $$v
                                  )
                                },
                                expression: "vModel.sub_department_code",
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
                                    value: _vm.errors.has(
                                      "subDepartment.sub department"
                                    ),
                                    expression:
                                      "errors.has('subDepartment.sub department')",
                                  },
                                ],
                                staticClass: "error-text text-danger",
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("toString")(
                                      _vm.errors.first(
                                        "subDepartment.sub department"
                                      ) || _vm.dbErrors.sub_department_code
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
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.updateType == 2
                  ? _c(
                      "div",
                      [
                        _c(
                          "vs-row",
                          {
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("label", { staticClass: "md:w-1/3 w-full" }, [
                              _vm._v(_vm._s(_vm.$t("transaction.remark"))),
                            ]),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "md:w-2/3 w-full",
                              on: {
                                keyup: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.handleSaveData()
                                },
                              },
                              model: {
                                value: _vm.vModel.remark,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vModel, "remark", $$v)
                                },
                                expression: "vModel.remark",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.updateType == 3
                  ? _c(
                      "div",
                      [
                        _c(
                          "vs-row",
                          {
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("label", { staticClass: "md:w-1/3 w-full" }, [
                              _vm._v(_vm._s(_vm.$t("transaction.docNumber"))),
                            ]),
                            _vm._v(" "),
                            _c("vs-input", {
                              staticClass: "md:w-2/3 w-full",
                              on: {
                                keyup: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.handleSaveData()
                                },
                              },
                              model: {
                                value: _vm.vModel.document_number,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vModel, "document_number", $$v)
                                },
                                expression: "vModel.document_number",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.updateType == 4
                  ? _c(
                      "div",
                      [
                        _c(
                          "vs-row",
                          {
                            staticClass: "wrap-form-select",
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("label", { staticClass: "md:w-1/3 w-full" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("transaction.directBillOrCompany")
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'",
                                },
                              ],
                              staticClass: "md:w-2/3 w-full",
                              attrs: {
                                id: "form-select",
                                "append-to-body": "",
                                clearable: false,
                                label: "name",
                                reduce: function (value) {
                                  return value.code
                                },
                                options: _vm.dlCompany,
                                name: "company",
                                "data-vv-scope": "company",
                              },
                              on: {
                                keyup: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.handleSaveData()
                                },
                              },
                              model: {
                                value: _vm.vModel.company_code,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vModel, "company_code", $$v)
                                },
                                expression: "vModel.company_code",
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
                                    value: _vm.errors.has("company.company"),
                                    expression: "errors.has('company.company')",
                                  },
                                ],
                                staticClass: "error-text text-danger",
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("toString")(
                                      _vm.errors.first("company.company") ||
                                        _vm.dbErrors.company_code
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
                    )
                  : _vm._e(),
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

/***/ "./resources/js/src/api/reservation/deposit.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/api/reservation/deposit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DepositResource; });
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



var tableName = 'guest_deposit';
var uri = 'reservation/guestdeposit';

var DepositResource = /*#__PURE__*/function (_Resource) {
  _inherits(DepositResource, _Resource);

  var _super = _createSuper(DepositResource);

  function DepositResource() {
    _classCallCheck(this, DepositResource);

    return _super.call(this, uri);
  }

  _createClass(DepositResource, [{
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
    key: "lookupTransfer",
    value: function lookupTransfer(reservationNumber) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/lookup/transfer/' + reservationNumber,
        method: 'get'
      });
    }
  }, {
    key: "transferDeposit",
    value: function transferDeposit(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "editSubDepartment",
    value: function editSubDepartment(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/subdepartment/' + id,
        method: 'get'
      });
    }
  }, {
    key: "editRemark",
    value: function editRemark(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/remark/' + id,
        method: 'get'
      });
    }
  }, {
    key: "editDocumentNumber",
    value: function editDocumentNumber(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/documentnumber/' + id,
        method: 'get'
      });
    }
  }, {
    key: "getSubDepartment",
    value: function getSubDepartment(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/lookup/subdepartment/' + id,
        method: 'get'
      });
    }
  }, {
    key: "updateSubDepartment",
    value: function updateSubDepartment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/subdepartment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "updateRemark",
    value: function updateRemark(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/remark',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "updateDocumentNumber",
    value: function updateDocumentNumber(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/update/documentnumber',
        method: 'post',
        data: data
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
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
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
  }, {
    key: "amountBefore",
    value: function amountBefore(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction/amountbefore',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "balance",
    value: function balance(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/balance',
        method: 'get',
        params: params
      });
    }
  }]);

  return DepositResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_transaction.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_transaction.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item v-if=\"params.data.folio_number\" @click=\"handleProperties()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/properties_icon24.png\"/>{{ $t('transaction.menu.properties') }}</vs-dropdown-item>\n                            <vs-dropdown-item :disabled=\"!paramsParent.userAccess.updateSubDepartment\" @click=\"handleUpdateType(1)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateSubDepartment') }}</vs-dropdown-item>\n                            <vs-dropdown-item :disabled=\"!paramsParent.userAccess.updateRemark\" @click=\"handleUpdateType(2)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateRemark') }}</vs-dropdown-item>\n                            <vs-dropdown-item :disabled=\"!paramsParent.userAccess.updateDocumentNumber\" @click=\"handleUpdateType(3)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateDocumentNumber') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.data.folio_number && params.data.sub_group_code === global.subGroupAccount.accountReceiveable\" @click=\"handleUpdateType(4)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateDirectBillOrCompany') }}</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"handlePrint()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/print_icon24.png\"/>{{ $t('transaction.menu.printReceipt') }}</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Correction data selected\"><vs-button :disabled=\"!paramsParent.userAccess.correction\" @click=\"handleCorrectionVoid(true)\" :color=\"global.iconActionColor.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/correction_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Void data selected\"><vs-button :disabled=\"!paramsParent.userAccess.void\" @click=\"handleCorrectionVoid(false)\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n                </div>\n            ",
  data: function data() {
    return {
      data: ''
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    handlePrint: function handlePrint() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handlePrintReceipt(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    handleUpdateType: function handleUpdateType(type) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleUpdateType(this.params.data, type);
      } else {
        this.openUndefinedAlert();
      }
    },
    handleProperties: function handleProperties() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleShowProperties(this.params.data.id_log);
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
    handleCorrectionVoid: function handleCorrectionVoid(isCorrection) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleCorrectionVoid(this.params.data, isCorrection);
      } else {
        this.openUndefinedAlert();
      }
    }
  },
  computed: {
    paramsParent: function paramsParent() {
      return this.params.context.componentParent;
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/checklist.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/checklist.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:3px\">\n        <check-square-icon size=\"1.5x\" class=\"custom-class\" v-if=\"data === true || data === '-1'\"></check-square-icon>\n        <x-square-icon size=\"1.5x\" class=\"custom-class\" v-else></x-square-icon>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  computed: {},
  components: {
    XSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["XSquareIcon"],
    CheckSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CheckSquareIcon"]
  },
  beforeMount: function beforeMount() {},
  created: function created() {},
  mounted: function mounted() {
    this.data = this.params.value;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateDialog.vue?vue&type=template&id=bb37c116& */ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116&");
/* harmony import */ var _UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateDialog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UpdateDialog.vue?vue&type=template&id=bb37c116& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue?vue&type=template&id=bb37c116&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateDialog_vue_vue_type_template_id_bb37c116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);