(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/pages/configurations/general.scss */ "./resources/sass/vuexy/pages/configurations/general.scss");
/* harmony import */ var _sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_pages_configurations_general_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _api_configurations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/configurations */ "./resources/js/src/api/configurations.js");


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





var configurationResource = new _api_configurations__WEBPACK_IMPORTED_MODULE_5__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vLookup: [],
      vModel: {},
      vTemp: {},
      resetOptionChange: false
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
                return configurationResource.getCompanyInformation();

              case 2:
                _yield$configurationR = _context.sent;
                data = _yield$configurationR.data;
                _this.vModel = data.data;
                _this.vTemp = data.data;
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.vModel.user_id = _this2.global.userInfo.code;
                _this2.vTemp = _this2.vModel;

                _this2.$validator.validateAll().then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!result) {
                              _context2.next = 14;
                              break;
                            }

                            _context2.prev = 1;

                            _this2.$vs.loading({
                              container: '#layout--main',
                              scale: _this2.global.scaleLoadingMainLayout
                            });

                            _context2.next = 5;
                            return configurationResource.updateCompanyInformation(_this2.vModel);

                          case 5:
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();

                            _this2.$vs.loading.close('#layout--main>.con-vs-loading');

                            _context2.next = 12;
                            break;

                          case 9:
                            _context2.prev = 9;
                            _context2.t0 = _context2["catch"](1);
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorSaveDataAlert();

                          case 12:
                            _context2.next = 15;
                            break;

                          case 14:
                            _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].inputRequiredAlert();

                          case 15:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[1, 9]]);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getLookup: function getLookup() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$configurationR2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return configurationResource.getCompanyInformationLookup({
                  country_code: _this3.vModel.country_code
                });

              case 2:
                _yield$configurationR2 = _context4.sent;
                data = _yield$configurationR2.data;
                _this3.vLookup = data;

              case 5:
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130& ***!
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
    { staticClass: "configuration company-information" },
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "mb-3",
          attrs: { title: "Company Information", collapseAction: "" },
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "6", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "required",
                          attrs: { "vs-lg": "3", "vs-xs": "12" },
                        },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.code"
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
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'",
                              },
                            ],
                            staticClass: "w-full",
                            attrs: { disabled: "", name: "code" },
                            model: {
                              value: _vm.vModel.code,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "code", $$v)
                              },
                              expression: "vModel.code",
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
                                  value: _vm.errors.has("code"),
                                  expression: "errors.has('code')",
                                },
                              ],
                              staticClass: "error-text text-danger",
                            },
                            [_vm._v(_vm._s(_vm.errors.first("code")))]
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          staticClass: "required",
                          attrs: { "vs-lg": "3", "vs-xs": "12" },
                        },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.name"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'",
                              },
                            ],
                            staticClass: "w-full",
                            attrs: { disabled: "", name: "name" },
                            model: {
                              value: _vm.vModel.name,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "name", $$v)
                              },
                              expression: "vModel.name",
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
                                  value: _vm.errors.has("name"),
                                  expression: "errors.has('name')",
                                },
                              ],
                              staticClass: "error-text text-danger",
                            },
                            [_vm._v(_vm._s(_vm.errors.first("name")))]
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.street"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: { disabled: "" },
                            model: {
                              value: _vm.vModel.street,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "street", $$v)
                              },
                              expression: "vModel.street",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.city"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            attrs: { disabled: "" },
                            model: {
                              value: _vm.vModel.city,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "city", $$v)
                              },
                              expression: "vModel.city",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.country"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full",
                            attrs: {
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.country,
                            },
                            on: {
                              input: function ($event) {
                                _vm.getLookup()
                                _vm.resetOptionChange = true
                              },
                            },
                            model: {
                              value: _vm.vModel.country_code,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "country_code", $$v)
                              },
                              expression: "vModel.country_code",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.state"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("v-select", {
                            staticClass: "w-full",
                            attrs: {
                              resetOnOptionsChange: _vm.resetOptionChange,
                              label: "name",
                              reduce: function (value) {
                                return value.code
                              },
                              options: _vm.vLookup.state,
                            },
                            model: {
                              value: _vm.vModel.state_code,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "state_code", $$v)
                              },
                              expression: "vModel.state_code",
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
                { staticClass: "mb-2", attrs: { "vs-lg": "6", "vs-xs": "12" } },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.postCode"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.postal_code,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "postal_code", $$v)
                              },
                              expression: "vModel.postal_code",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.phone"
                                  ) + "1"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.phone1,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "phone1", $$v)
                              },
                              expression: "vModel.phone1",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.phone"
                                  ) + "2"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.phone2,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "phone2", $$v)
                              },
                              expression: "vModel.phone2",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.fax"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.fax,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "fax", $$v)
                              },
                              expression: "vModel.fax",
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
                      staticClass: "mb-2",
                      attrs: { "vs-type": "flex", "vs-align": "center" },
                    },
                    [
                      _c(
                        "vs-col",
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.email"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "email", $$v)
                              },
                              expression: "vModel.email",
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
                        { attrs: { "vs-lg": "3", "vs-xs": "12" } },
                        [
                          _c("vs-row", [
                            _c("label", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "configurations.companyInformation.website"
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
                        { attrs: { "vs-lg": "8", "vs-xs": "12" } },
                        [
                          _c("vs-input", {
                            staticClass: "w-full",
                            model: {
                              value: _vm.vModel.website,
                              callback: function ($$v) {
                                _vm.$set(_vm.vModel, "website", $$v)
                              },
                              expression: "vModel.website",
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
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: false,
              expression: "false",
            },
          ],
          staticClass: "mb-3",
          attrs: { title: "Logo", collapseAction: "" },
        },
        [_c("vs-row")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyInformation.vue?vue&type=template&id=794c0130& */ "./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130&");
/* harmony import */ var _CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyInformation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyInformation.vue?vue&type=template&id=794c0130& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/CompanyInformation.vue?vue&type=template&id=794c0130&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyInformation_vue_vue_type_template_id_794c0130___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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