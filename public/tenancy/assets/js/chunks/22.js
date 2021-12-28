(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");


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






var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_5__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_6__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isDayendClose: Boolean
  },
  components: {
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_1__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      vCancel: {},
      modalCancelReservation: false,
      activeCredentialPrompt: false,
      isCredential: false,
      credentialTitle: '',
      specialAccessType: 1000,
      reservationStatusX: '',
      reservationNumber: null,
      credential: {
        user: '',
        pass: '',
        reason: ''
      },
      totalDeposit: 0,
      btnSaveDisabled: false
    };
  },
  methods: {
    // ------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
    showCancelReservation: function showCancelReservation(status, reservationNumber) {
      this.btnSaveDisabled = false;
      this.credential = {};
      this.credentialTitle = status == this.global.reservationStatus.noShow ? this.$t('credential.title.noShowReservation') : status == this.global.reservationStatus["void"] ? this.$t('credential.title.voidReservation') : this.$t('credential.title.cancelReservation');
      this.reservationStatusX = status;
      this.reservationNumber = reservationNumber;
      this.getDepositListDetail(reservationNumber, status);
    },
    getLookupDeposit: function getLookupDeposit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$depositResourc, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return depositResource.lookup();

              case 3:
                _yield$depositResourc = _context.sent;
                data = _yield$depositResourc.data;
                _this.dataLookupDeposit = data;

                _this.getExchangeRate();

                _this.$vs.loading.close('.layout--main>.con-vs-loading');

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    getDepositListDetail: function getDepositListDetail(reservationNumber, status) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$reservationRes, data, balance;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$loadingIndicator(_this2);

                _context2.next = 3;
                return reservationResource.reservationStatus(reservationNumber);

              case 3:
                _yield$reservationRes = _context2.sent;
                data = _yield$reservationRes.data;

                _this2.$vs.loading.close('.layout--main>.con-vs-loading');

                balance = data.balance;
                _this2.vCancel = {
                  full_name: data.full_name,
                  room_number: data.room_number,
                  total_deposit: balance,
                  cancel_fee: 0,
                  cancel_by: _this2.global.userInfo.code,
                  is_ap_refund: '0',
                  refund: balance,
                  document_number: '',
                  is_close_desk_folio: true,
                  reason: '',
                  reservation_number: reservationNumber,
                  status_code: status,
                  user_id: _this2.global.userInfo.code
                };
                _this2.totalDeposit = balance;

                if (!(data.reservation_status == _this2.global.reservationStatus["new"] || data.reservation_status == _this2.global.reservationStatus.waitList)) {
                  _context2.next = 13;
                  break;
                }

                if (status == _this2.global.reservationStatus["void"]) {
                  if (balance > 0) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].information(_this2.$t('message.cannotVoidReservation'));
                  } else {
                    _this2.activeCredentialPrompt = true;
                    _this2.isCredential = true;
                    _this2.specialAccessType = _this2.global.accessSpecialOrder.voidReservation;
                  }
                } else if (status === _this2.global.reservationStatus.cancel || status === _this2.global.reservationStatus.noShow) {
                  if (balance > 0) {
                    _this2.modalCancelReservation = true;
                  } else {
                    _this2.activeCredentialPrompt = true;
                    _this2.isCredential = false;
                  }
                }

                _context2.next = 16;
                break;

              case 13:
                if (!_this2.isDayendClose) {
                  _context2.next = 16;
                  break;
                }

                _this2.precheck();

                return _context2.abrupt("return");

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleSaveCancelReservation: function handleSaveCancelReservation() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$reservationRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.btnSaveDisabled = true;
                _context3.next = 3;
                return reservationResource.reservationStatus(_this3.reservationNumber);

              case 3:
                _yield$reservationRes2 = _context3.sent;
                data = _yield$reservationRes2.data;
                _this3.totalDeposit = -data.balance.balance;

                if (_this3.vCancel.cancel_fee > _this3.totalDeposit) {
                  _this3.$vs.dialog({
                    color: 'danger',
                    title: 'Warning',
                    text: _this3.$t('reservation.popup.cancelReservation.cancellationFeeCannotGreater'),
                    acceptText: _this3.$t('button.ok'),
                    accept: function accept() {
                      _this3.vCancel.cancel_fee = 0;
                      _this3.vCancel.refund = _this3.totalDeposit;
                    }
                  });

                  _this3.btnSaveDisabled = false;
                } else {
                  _this3.modalCancelReservation = false;
                  _this3.activeCredentialPrompt = true;
                  _this3.isCredential = false;
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateCancelReservation: function updateCancelReservation() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.vCancel.reason = _this4.credential.reason;

                if (_this4.reservationStatusX === _this4.global.reservationStatus["void"]) {
                  _this4.vCancel.cancel_by = _this4.credential.user;
                }

                _context4.next = 4;
                return reservationResource.cancelReservation(_this4.vCancel);

              case 4:
                if (!_this4.isDayendClose) {
                  _context4.next = 7;
                  break;
                }

                _this4.precheck();

                return _context4.abrupt("return");

              case 7:
                _this4.$emit('refreshData');

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    precheck: function precheck() {
      this.$emit('precheck');
    },
    closeCredential: function closeCredential() {
      this.$vs.loading.close('.layout--main>.con-vs-loading');
    } // ------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
        "vs-popup",
        {
          staticClass: "width-400p",
          attrs: {
            active: _vm.modalCancelReservation,
            title:
              _vm.reservationStatusX == _vm.global.reservationStatus.noShow
                ? _vm.$t(
                    "reservation.popup.cancelReservation.title.noShowReservation"
                  )
                : _vm.$t(
                    "reservation.popup.cancelReservation.title.cancelReservation"
                  ),
          },
          on: {
            "update:active": function ($event) {
              _vm.modalCancelReservation = $event
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "popup-body" },
            [
              _c(
                "VuePerfectScrollbar",
                {
                  staticClass: "scroll-area-popup-form pt-2",
                  attrs: { settings: _vm.global.perfectScrollbarSettings },
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
                        staticClass: "w-full",
                        attrs: {
                          disabled: "",
                          label: _vm.$t(
                            "reservation.popup.cancelReservation.fullName"
                          ),
                          maxLength: 50,
                        },
                        model: {
                          value: _vm.vCancel.full_name,
                          callback: function ($$v) {
                            _vm.$set(_vm.vCancel, "full_name", $$v)
                          },
                          expression: "vCancel.full_name",
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
                        staticClass: "w-full md:w-4/12",
                        attrs: {
                          disabled: "",
                          label: _vm.$t(
                            "reservation.popup.cancelReservation.room"
                          ),
                          maxLength: 50,
                        },
                        model: {
                          value: _vm.vCancel.room_number,
                          callback: function ($$v) {
                            _vm.$set(_vm.vCancel, "room_number", $$v)
                          },
                          expression: "vCancel.room_number",
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
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          disabled: "",
                          label: _vm.$t(
                            "reservation.popup.cancelReservation.totalDeposit"
                          ),
                        },
                        model: {
                          value: _vm.vCancel.total_deposit,
                          callback: function ($$v) {
                            _vm.$set(_vm.vCancel, "total_deposit", $$v)
                          },
                          expression: "vCancel.total_deposit",
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
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          label: _vm.$t(
                            "reservation.popup.cancelReservation.cancellationFee"
                          ),
                        },
                        on: {
                          input: function ($event) {
                            _vm.vCancel.refund =
                              _vm.vCancel.total_deposit - _vm.vCancel.cancel_fee
                          },
                        },
                        model: {
                          value: _vm.vCancel.cancel_fee,
                          callback: function ($$v) {
                            _vm.$set(_vm.vCancel, "cancel_fee", $$v)
                          },
                          expression: "vCancel.cancel_fee",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.reservationStatusX == _vm.global.reservationStatus.cancel
                    ? _c(
                        "vs-row",
                        [
                          _c(
                            "vs-radio",
                            {
                              staticClass: "w-full wrap-form-select md:w-6/12",
                              attrs: {
                                "vs-name": "is_ap_refund",
                                "vs-value": "0",
                              },
                              model: {
                                value: _vm.vCancel.is_ap_refund,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vCancel, "is_ap_refund", $$v)
                                },
                                expression: "vCancel.is_ap_refund",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "reservation.popup.cancelReservation.refund"
                                  )
                                )
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-radio",
                            {
                              staticClass: "w-full wrap-form-select md:w-6/12",
                              attrs: {
                                "vs-name": "is_ap_refund",
                                "vs-value": "-1",
                              },
                              model: {
                                value: _vm.vCancel.is_ap_refund,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vCancel, "is_ap_refund", $$v)
                                },
                                expression: "vCancel.is_ap_refund",
                              },
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "reservation.popup.cancelReservation.apRefundDeposit"
                                  )
                                )
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
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
                      _c("input-number", {
                        staticClass: "w-full",
                        attrs: {
                          disabled: "",
                          label:
                            _vm.vCancel.is_ap_refund == "-1" ||
                            _vm.reservationStatusX ==
                              _vm.global.reservationStatus.noShow
                              ? _vm.$t(
                                  "reservation.popup.cancelReservation.apRefundDeposit"
                                )
                              : _vm.$t(
                                  "reservation.popup.cancelReservation.refund"
                                ),
                        },
                        model: {
                          value: _vm.vCancel.refund,
                          callback: function ($$v) {
                            _vm.$set(_vm.vCancel, "refund", $$v)
                          },
                          expression: "vCancel.refund",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.reservationStatusX == _vm.global.reservationStatus.cancel
                    ? _c(
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
                              label: _vm.$t(
                                "reservation.popup.cancelReservation.docNumber"
                              ),
                              maxLength: 50,
                            },
                            model: {
                              value: _vm.vCancel.document_number,
                              callback: function ($$v) {
                                _vm.$set(_vm.vCancel, "document_number", $$v)
                              },
                              expression: "vCancel.document_number",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mt-3 wrap-form-select w-full" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          staticClass: "w-full",
                          staticStyle: { padding: "0px", margin: "inherit" },
                          model: {
                            value: _vm.vCancel.is_close_desk_folio,
                            callback: function ($$v) {
                              _vm.$set(_vm.vCancel, "is_close_desk_folio", $$v)
                            },
                            expression: "vCancel.is_close_desk_folio",
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t(
                                "reservation.popup.cancelReservation.closeCreatedFolio"
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
              _c("vs-divider"),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "footer",
            { staticClass: "footer" },
            [
              _c(
                "vs-row",
                {
                  staticClass: "w-full flex",
                  attrs: { "vs-justify": "flex-end" },
                },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        disabled: _vm.btnSaveDisabled,
                        icon: "save",
                        color: _vm.global.buttonColor.save,
                      },
                      on: { click: _vm.handleSaveCancelReservation },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.save")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-2",
                      attrs: {
                        icon: "close",
                        color: _vm.global.buttonColor.close,
                      },
                      on: {
                        click: function ($event) {
                          _vm.modalCancelReservation =
                            !_vm.modalCancelReservation
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.close")))]
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
          closeCredential: _vm.closeCredential,
          acceptReason: _vm.updateCancelReservation,
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

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CancelReservation.vue?vue&type=template&id=3cc3875c& */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&");
/* harmony import */ var _CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CancelReservation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/CancelReservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CancelReservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CancelReservation.vue?vue&type=template&id=3cc3875c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/CancelReservation.vue?vue&type=template&id=3cc3875c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CancelReservation_vue_vue_type_template_id_3cc3875c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);