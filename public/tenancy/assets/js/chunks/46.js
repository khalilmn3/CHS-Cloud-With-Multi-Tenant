(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dialog */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _api_cashierReport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/cashierReport */ "./resources/js/src/api/cashierReport.js");


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


var cashierReportResource = new _api_cashierReport__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalPreventMain: false,
      modalMain: false,
      data: [],
      shiftInfo: {
        user_id: '',
        shift: '',
        start_date: '',
        end_date: ''
      },
      paymentInHouse: [],
      depositReservation: [],
      refundInHouse: [],
      refundReservation: [],
      balance: [],
      totalCashIn: [],
      totalCashOut: [],
      totalBalance: [],
      btnDisabled: false
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$cashierReportR, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$vs.loading({
                  container: '#layout--main',
                  scale: _this.global.scaleLoadingMainLayout
                });

                _context.next = 3;
                return cashierReportResource.list({
                  user_id: _this.userID
                });

              case 3:
                _yield$cashierReportR = _context.sent;
                data = _yield$cashierReportR.data;
                _this.paymentInHouse = data.paymentInHouse;
                _this.depositReservation = data.depositReservation;
                _this.refundInHouse = data.refundInHouse;
                _this.refundReservation = data.refundReservation;
                _this.balance = data.balance;
                _this.totalBalance = data.totalBalance;
                _this.totalCashIn = data.totalCashIn;
                _this.totalCashOut = data.totalCashOut;

                if (!(data.shiftInfo == null || data.shiftInfo == undefined)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 16;
                return _this.$store.dispatch('logout');

              case 16:
                _this.shiftInfo = data.shiftInfo;
                _this.modalMain = true;
                _this.btnDisabled = false;

                _this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleCloseShift: function handleCloseShift() {
      if (this.shiftInfo) {
        _utils_dialog__WEBPACK_IMPORTED_MODULE_1__["default"].confirmation(this, 'closeShift');
      }
    },
    closeShift: function closeShift() {
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

                _this2.btnDisabled = true;
                _context2.prev = 2;
                _context2.next = 5;
                return cashierReportResource.closeShift({
                  id: _this2.shiftInfo.id
                });

              case 5:
                _this2.$store.dispatch('logout');

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                _this2.btnDisabled = false;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 8]]);
      }))();
    },
    handleClose: function handleClose() {
      var _this3 = this;

      this.modalMain = false;
      setTimeout(function () {
        _this3.$router.push({
          name: 'home'
        });
      }, 10);
    },
    handlePrint: function handlePrint() {
      var newTabReport = this.$router.resolve({
        path: '/report/preview?reportId=' + this.global.reportID.cashierReport + '&userId=' + this.userID + '&template=' + this.global.stimulsoftReportFileDirectory.cashierReport
      });
      window.open(newTabReport.href, '_blank');
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  computed: {
    totalPayment: function totalPayment() {
      var sum = 0;
      this.paymentInHouse.forEach(function (element) {
        sum += parseFloat(element.amount);
      });
      return sum;
    },
    totalDeposit: function totalDeposit() {
      var sum = 0;
      this.depositReservation.forEach(function (element) {
        sum += parseFloat(element.amount);
      });
      return sum;
    },
    totalRefund: function totalRefund() {
      var sum = 0;
      this.totalCashOut.forEach(function (element) {
        sum += parseFloat(element.amount);
      });
      return sum;
    },
    userID: function userID() {
      return this.$store.state.auth.accountCode;
    },
    dateNow: function dateNow() {
      return new Date();
    }
  },
  watch: {
    modalPreventMain: function modalPreventMain() {
      this.modalPreventMain = this.modalMain;
    },
    modalMain: function modalMain() {
      this.modalPreventMain = this.modalMain;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.modalMain) {
      this.modalMain = false;
      setTimeout(function () {
        next();
      }, 10);
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (min-width: 763px) {\n.container[data-v-45dce14a] {\n    padding-left: 20px;\n    padding-right: 20px;\n}\n.container .data-container[data-v-45dce14a] {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.shift-information .date[data-v-45dce14a] {\n    display: flex;\n    justify-content: flex-end;\n}\n}\n.container .data-container[data-v-45dce14a] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.container .vs-divider[data-v-45dce14a] {\n  margin: 0 !important;\n  background: rgba(var(--vs-primary), 1);\n}\n.con-vs-dialog .vs-dialog footer .vs-button[data-v-45dce14a]:last-of-type {\n  margin-left: 0 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "width-600p",
          attrs: {
            "button-close-hidden": "",
            type: "confirm",
            active: _vm.modalPreventMain,
            title: _vm.$t("cashierReport.title"),
          },
          on: {
            "update:active": function ($event) {
              _vm.modalPreventMain = $event
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
                  staticClass: "scroll-area-popup-form pt-2 pl-3 pr-3",
                  attrs: { settings: _vm.global.perfectScrollbarSettings },
                },
                [
                  _c(
                    "vx-card",
                    { staticClass: "shift-information" },
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
                            "div",
                            { staticClass: "sm:w-6/12" },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "flex-start",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "sm:w-4/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.$t("cashierReport.userId"))
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "sm:w-8/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        ": " + _vm._s(_vm.shiftInfo.user_id)
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "flex-start",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "sm:w-4/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.$t("cashierReport.shift"))
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "sm:w-8/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        ": " + _vm._s(_vm.shiftInfo.shift)
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "sm:w-6/12" },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "flex-start",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "sm:w-4/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.$t("cashierReport.timeIn"))
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "date sm:w-8/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        ": " +
                                          _vm._s(
                                            _vm._f("datetime")(
                                              _vm.shiftInfo.start_date
                                            )
                                          )
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "flex-start",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "sm:w-4/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(_vm.$t("cashierReport.timeOut"))
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "date sm:w-8/12" }, [
                                    _c("span", [
                                      _vm._v(
                                        ": " +
                                          _vm._s(
                                            _vm._f("datetime")(_vm.dateNow)
                                          )
                                      ),
                                    ]),
                                  ]),
                                ]
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
                  _c("vx-card", { staticClass: "mt-2" }, [
                    _c(
                      "div",
                      { staticClass: "container w-full" },
                      [
                        _c(
                          "vs-row",
                          [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("cashierReport.payment"))),
                            ]),
                            _vm._v(" "),
                            _c("vs-row", [
                              _c("ul", { staticClass: "w-full" }, [
                                _c(
                                  "div",
                                  { staticClass: "data-container" },
                                  [
                                    _vm._l(
                                      _vm.paymentInHouse,
                                      function (tr, indextr) {
                                        return _c(
                                          "li",
                                          { key: indextr },
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
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.paymentInHouse[
                                                          indextr
                                                        ].account
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.paymentInHouse[
                                                          indextr
                                                        ].amount
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    _vm._v(" "),
                                    _c("vs-divider"),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "font-bold",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("cashierReport.total")
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency_format")(
                                                _vm.totalPayment
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-2" },
                          [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cashierReport.depositReservation")
                                )
                              ),
                            ]),
                            _vm._v(" "),
                            _c("vs-row", [
                              _c("ul", { staticClass: "w-full" }, [
                                _c(
                                  "div",
                                  { staticClass: "data-container" },
                                  [
                                    _vm._l(
                                      _vm.depositReservation,
                                      function (tr, indextr) {
                                        return _c(
                                          "li",
                                          { key: indextr },
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
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.depositReservation[
                                                          indextr
                                                        ].account
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.depositReservation[
                                                          indextr
                                                        ].amount
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    _vm._v(" "),
                                    _c("vs-divider"),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "font-bold",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("cashierReport.total")
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency_format")(
                                                _vm.totalDeposit
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-2" },
                          [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("cashierReport.refund"))),
                            ]),
                            _vm._v(" "),
                            _c("vs-row", [
                              _c("ul", { staticClass: "w-full" }, [
                                _c(
                                  "div",
                                  { staticClass: "data-container" },
                                  [
                                    _vm._l(
                                      _vm.totalCashOut,
                                      function (tr, indextr) {
                                        return _c(
                                          "li",
                                          { key: indextr },
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
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.totalCashOut[
                                                          indextr
                                                        ].account
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("currency_format")(
                                                        _vm.totalCashOut[
                                                          indextr
                                                        ].amount
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    _vm._v(" "),
                                    _c("vs-divider"),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "font-bold",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("cashierReport.total")
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency_format")(
                                                _vm.totalRefund
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-2" },
                          [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v(_vm._s(_vm.$t("cashierReport.balance"))),
                            ]),
                            _vm._v(" "),
                            _c("vs-row", [
                              _c("ul", { staticClass: "w-full" }, [
                                _c(
                                  "div",
                                  { staticClass: "data-container" },
                                  [
                                    _vm._l(_vm.balance, function (tr, indextr) {
                                      return _c(
                                        "li",
                                        { key: indextr },
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
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("currency_format")(
                                                      _vm.balance[indextr]
                                                        .account
                                                    )
                                                  )
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm._f("currency_format")(
                                                      _vm.balance[indextr]
                                                        .amount
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("vs-divider"),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "font-bold",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("cashierReport.total")
                                            )
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency_format")(
                                                _vm.totalBalance
                                              )
                                            )
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("vx-card", { staticClass: "mt-2" }),
                ],
                1
              ),
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
                  staticClass: "mt-2",
                  attrs: { "vs-type": "flex", "vs-justify": "space-between" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "w-full md:w-5/12 pr-1 pl-1 mt-1" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          on: {
                            click: function ($event) {
                              return _vm.handlePrint()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("cashierReport.printCashier")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-5/12 pr-1 pl-1 mt-1" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { disabled: _vm.btnDisabled, color: "danger" },
                          on: {
                            click: function ($event) {
                              return _vm.handleCloseShift()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("cashierReport.closeShift")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "w-full md:w-2/12 pr-1 pl-1 mt-1" },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { color: "grey" },
                          on: {
                            click: function ($event) {
                              return _vm.handleClose()
                            },
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("button.close")))]
                      ),
                    ],
                    1
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

/***/ "./resources/js/src/api/cashierReport.js":
/*!***********************************************!*\
  !*** ./resources/js/src/api/cashierReport.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CashierReportResource; });
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



var uri = 'cashier-report';

var CashierReportResource = /*#__PURE__*/function (_Resource) {
  _inherits(CashierReportResource, _Resource);

  var _super = _createSuper(CashierReportResource);

  function CashierReportResource() {
    _classCallCheck(this, CashierReportResource);

    return _super.call(this, uri);
  }

  _createClass(CashierReportResource, [{
    key: "closeShift",
    value: function closeShift(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/close-shift',
        method: 'post',
        data: data
      });
    }
  }]);

  return CashierReportResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/utils/dialog.js":
/*!******************************************!*\
  !*** ./resources/js/src/utils/dialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lang */ "./resources/js/src/lang/index.js");


var vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  i18n: _lang__WEBPACK_IMPORTED_MODULE_1__["default"],
  methods: {
    completeField: function completeField(message) {
      var text = message || this.$t('message.completeText');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    selectField: function selectField(message) {
      var text = message || this.$t('message.selectData');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    noRoomAvailable: function noRoomAvailable(message) {
      var text = message || this.$t('message.roomNotAvailable');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNumberNotAvailable: function roomNumberNotAvailable(message) {
      var text = message || this.$t('message.roomNumberNotAvailable');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    existAccount: function existAccount(message) {
      var text = message || this.$t('message.existAccount');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    existData: function existData(message, procedure) {
      var text = message || this.$t('message.existAccount');
      this.$vs.dialog({
        color: 'danger',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.yes'),
        accept: function accept() {
          if (procedure) procedure;
        }
      });
    },
    dialogInsertMasterSuccessfully: function dialogInsertMasterSuccessfully(message, data) {
      var text = message || this.$t('message.insertMasterSuccessfully') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNumberCannotExtend: function roomNumberCannotExtend(message, data) {
      var text = message || this.$t('message.roomNumberCannotExtend') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    information: function information(message, thisData, event, data1, data2) {
      var text = message || this.$t('message.informationTitle');
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    informationError: function informationError(message, thisData, event, data1, data2) {
      var text = message || this.$t('message.errorTitle');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: text,
        acceptText: this.$t('button.ok'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    confirmation: function confirmation(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: this.$t('message.confirmTitle'),
        text: this.$t('message.confirmation'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    confirmationW8Text: function confirmationW8Text(message, thisData, event, data1, data2, data3) {
      var text = message || this.$t('message.confirmTitle');
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: this.$t('message.confirmTitle'),
        text: text,
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2, data3);
        }
      });
    },
    confirmationDelete: function confirmationDelete(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.confirmTitle'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    informationNoDetail: function informationNoDetail(message) {
      var text = message || this.$t('message.informationNoDetailData');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNotAvailable: function roomNotAvailable(message, data) {
      var text = message || this.$t('message.roomNotAvailable') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    statusCheckInReservation: function statusCheckInReservation(message) {
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message,
        acceptText: this.$t('button.ok')
      });
    },
    reservationSaveSuccess: function reservationSaveSuccess(message, data, procedure) {
      this.$vs.dialog({
        color: 'primary',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: 'Reservation successfully saved, continue?',
        acceptText: this.$t('button.yes'),
        cancelText: this.$t('button.no'),
        cancel: function cancel() {
          procedure;
        }
      });
    },
    reportTemplateNotFound: function reportTemplateNotFound(message, data) {
      var text = message || this.$t('message.reportTemplateNotFound');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    reportDataNotFound: function reportDataNotFound(message, data) {
      var text = message || this.$t('message.reportDataNotFound');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    unauthorized: function unauthorized(message, data) {
      var text = message || this.$t('message.unauthorized') + data;
      this.$vs.dialog({
        color: 'warning',
        title: 'Unauthorized',
        text: text,
        acceptText: this.$t('button.ok')
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ }),

/***/ "./resources/js/src/views/pages/cashier-report/CashierReport.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/cashier-report/CashierReport.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CashierReport.vue?vue&type=template&id=45dce14a&scoped=true& */ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true&");
/* harmony import */ var _CashierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CashierReport.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& */ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CashierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45dce14a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/cashier-report/CashierReport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CashierReport.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=style&index=0&id=45dce14a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_style_index_0_id_45dce14a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CashierReport.vue?vue&type=template&id=45dce14a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/cashier-report/CashierReport.vue?vue&type=template&id=45dce14a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CashierReport_vue_vue_type_template_id_45dce14a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);