(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/pages/configurations/general.scss */ "./resources/sass/vuexy/pages/configurations/general.scss");
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _api_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/configurations */ "./resources/js/src/api/configurations.js");


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



var configurationResource = new _api_configurations__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vLookup: [],
      vModel: {},
      vTemp: {}
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$configurationR, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return configurationResource.getGlobalParameter();

              case 2:
                _yield$configurationR = _context.sent;
                data = _yield$configurationR.data;
                _this.vModel = data.data.value;
                _this.vTemp = data.data.value;
                _this.vLookup = data.lookup;

                _this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    saveData: function saveData() {
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

                _this2.vModel.user_id = _this2.global.userInfo.code;
                _this2.vTemp = _this2.vModel;
                _context2.next = 5;
                return configurationResource.updateGlobalParameter(_this2.vModel);

              case 5:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].acceptAlertSucces();

                _this2.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getLookup: function getLookup() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$configurationR2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return configurationResource.getGlobalParameterLookup();

              case 2:
                _yield$configurationR2 = _context3.sent;
                data = _yield$configurationR2.data;
                _this3.vLookup = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setDefaultValue: function setDefaultValue() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$configurationR3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$vs.loading({
                  container: '#layout--main',
                  scale: _this4.global.scaleLoadingMainLayout
                });

                _context4.next = 3;
                return configurationResource.getGlobalParameter();

              case 3:
                _yield$configurationR3 = _context4.sent;
                data = _yield$configurationR3.data;
                _this4.vModel = data.defaultValue;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {
    this.$vs.loading({
      container: '#layout--main',
      scale: this.global.scaleLoadingMainLayout
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (JSON.stringify(this.vModel) === JSON.stringify(this.vTemp)) {
      next();
    } else {
      this.$vs.dialog({
        color: 'danger',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: 'Are you sure you want to exit without saving?',
        acceptText: 'Yes',
        cancelText: 'No',
        accept: function accept() {
          next();
        }
      });
      next(false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/configurations/general.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/pages/configurations/general.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".configuration {\n  font-size: 0.8rem;\n}\n\n.configuration .vs-input--input.normal {\n  font-size: 0.8rem;\n}\n\n.configuration .wrap-form-select {\n  margin-top: 4px;\n  position: relative;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.configuration .vs__search, .configuration .vs__search:focus {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  line-height: 2;\n}\n\n.configuration .vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: initial;\n  padding: 0 2px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.configuration .vs__selected {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  min-width: 1px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6& ***!
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
    { staticClass: "configuration global-paramater" },
    [
      _c(
        "vs-row",
        { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
        [
          _c(
            "vs-button",
            {
              staticClass: "mb-3 mr-3",
              attrs: { color: "success" },
              on: {
                click: function ($event) {
                  return _vm.saveData()
                },
              },
            },
            [_vm._v("Save")]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "mb-3",
              attrs: { color: "danger" },
              on: {
                click: function ($event) {
                  return _vm.setDefaultValue()
                },
              },
            },
            [_vm._v("Restore Default")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Global Account", collapseAction: "" },
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.roomCharge"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_room_charge,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_room_charge", $$v)
                              },
                              expression: "vModel.account_room_charge",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.extraBed"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_extra_bed,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_extra_bed", $$v)
                              },
                              expression: "vModel.account_extra_bed",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.cancellationFee"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_cancellation_fee,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_cancellation_fee",
                                  $$v
                                )
                              },
                              expression: "vModel.account_cancellation_fee",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.noShow"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_no_show,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_no_show", $$v)
                              },
                              expression: "vModel.account_no_show",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.breakfast"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_breakfast,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_breakfast", $$v)
                              },
                              expression: "vModel.account_breakfast",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.apRefundDeposit"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_ap_refund_deposit,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_ap_refund_deposit",
                                  $$v
                                )
                              },
                              expression: "vModel.account_ap_refund_deposit",
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
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.apCommission"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_ap_commission,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_ap_commission",
                                  $$v
                                )
                              },
                              expression: "vModel.account_ap_commission",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.ccAdmin"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_cc_admin,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_cc_admin", $$v)
                              },
                              expression: "vModel.account_cc_admin",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.globalParameter.cash")
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_cash,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_cash", $$v)
                              },
                              expression: "vModel.account_cash",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.cityLedger"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_city_ledger,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_city_ledger", $$v)
                              },
                              expression: "vModel.account_city_ledger",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("configurations.globalParameter.tax")
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_tax,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_tax", $$v)
                              },
                              expression: "vModel.account_tax",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.service"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_service,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_service", $$v)
                              },
                              expression: "vModel.account_service",
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
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.transferDepositReservation"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value:
                                _vm.vModel.account_transfer_deposit_reservation,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_transfer_deposit_reservation",
                                  $$v
                                )
                              },
                              expression:
                                "vModel.account_transfer_deposit_reservation",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.transferDepositToFolio"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value:
                                _vm.vModel
                                  .account_transfer_deposit_reservation_to_folio,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_transfer_deposit_reservation_to_folio",
                                  $$v
                                )
                              },
                              expression:
                                "vModel.account_transfer_deposit_reservation_to_folio",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.transferCharge"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_transfer_charge,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_transfer_charge",
                                  $$v
                                )
                              },
                              expression: "vModel.account_transfer_charge",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.transferPaymentDeposit"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_transfer_payment,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_transfer_payment",
                                  $$v
                                )
                              },
                              expression: "vModel.account_transfer_payment",
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
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                      ],
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.voucher"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_voucher,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "account_voucher", $$v)
                              },
                              expression: "vModel.account_voucher",
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
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                      ],
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.voucherCompliment"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.account,
                            },
                            model: {
                              value: _vm.vModel.account_voucher_compliment,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.vModel,
                                  "account_voucher_compliment",
                                  $$v
                                )
                              },
                              expression: "vModel.account_voucher_compliment",
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
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Global Department", collapseAction: "" },
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.foodBeverage"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.department,
                            },
                            model: {
                              value: _vm.vModel.food_and_beverage,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "food_and_beverage", $$v)
                              },
                              expression: "vModel.food_and_beverage",
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
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Global Sub Department", collapseAction: "" },
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.frontOffice"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.sub_department,
                            },
                            model: {
                              value: _vm.vModel.front_office,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "front_office", $$v)
                              },
                              expression: "vModel.front_office",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.housekeeping"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.sub_department,
                            },
                            model: {
                              value: _vm.vModel.housekeeping,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "housekeeping", $$v)
                              },
                              expression: "vModel.housekeeping",
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
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                      ],
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.banquet"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.sub_department,
                            },
                            model: {
                              value: _vm.vModel.banquet,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "banquet", $$v)
                              },
                              expression: "vModel.banquet",
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
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false",
                        },
                      ],
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.accounting"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.sub_department,
                            },
                            model: {
                              value: _vm.vModel.accounting,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "accounting", $$v)
                              },
                              expression: "vModel.accounting",
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
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Other Global Parameter", collapseAction: "" },
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.paymentType"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.payment_type,
                            },
                            model: {
                              value: _vm.vModel.payment_type,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "payment_type", $$v)
                              },
                              expression: "vModel.payment_type",
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
                    { attrs: { "vs-type": "flex", "vs-align": "center" } },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "5", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.globalParameter.travelAgentType"
                                  )
                                )
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full wrap-form-select height200",
                            attrs: {
                              clearable: false,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.travel_agent_type,
                            },
                            model: {
                              value: _vm.vModel.travel_agent_type,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "travel_agent_type", $$v)
                              },
                              expression: "vModel.travel_agent_type",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalParameter.vue?vue&type=template&id=c0e562c6& */ "./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6&");
/* harmony import */ var _GlobalParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalParameter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GlobalParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalParameter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalParameter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GlobalParameter.vue?vue&type=template&id=c0e562c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/GlobalParameter.vue?vue&type=template&id=c0e562c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GlobalParameter_vue_vue_type_template_id_c0e562c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/vuexy/pages/configurations/general.scss":
/*!****************************************************************!*\
  !*** ./resources/sass/vuexy/pages/configurations/general.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./general.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/pages/configurations/general.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);