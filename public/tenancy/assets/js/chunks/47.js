(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_tools_user_setting_userSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting */ "./resources/js/src/api/tools/user-setting/userSetting.js");


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

var userSettingResource = new _api_tools_user_setting_userSetting__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      password: {
        current_password: "",
        new_password: "",
        confirm_password: ""
      },
      dialog: false,
      dbErrors: {}
    };
  },
  methods: {
    handleChangePassword: function handleChangePassword() {
      var _this = this;

      this.$validator.validateAll().then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(result) {
          var encryptCurrentPassword, encryptNewPassword, encryptConfirmPassword, params, _yield$userSettingRes, data, message;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!result) {
                    _context.next = 21;
                    break;
                  }

                  encryptCurrentPassword = CryptoJS.AES.encrypt(_this.password.current_password, _this.global._CRYPTO_KEY, {
                    format: CryptoJSAesJson
                  }).toString();
                  encryptNewPassword = CryptoJS.AES.encrypt(_this.password.new_password, _this.global._CRYPTO_KEY, {
                    format: CryptoJSAesJson
                  }).toString();
                  encryptConfirmPassword = CryptoJS.AES.encrypt(_this.password.confirm_password, _this.global._CRYPTO_KEY, {
                    format: CryptoJSAesJson
                  }).toString();
                  params = {
                    current_password: encryptCurrentPassword,
                    new_password: encryptNewPassword,
                    confirm_password: encryptConfirmPassword
                  };
                  _context.prev = 5;
                  _this.dbErrors = {};

                  _this.$vs.loading({
                    container: '#change-password',
                    scale: _this.scaleLoadingLayout
                  });

                  _context.next = 10;
                  return userSettingResource.changePassword(params);

                case 10:
                  _yield$userSettingRes = _context.sent;
                  data = _yield$userSettingRes.data;

                  _this.$vs.loading.close('#change-password>.con-vs-loading');

                  _this.dialog = true; // this.successDialog()

                  _context.next = 21;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](5);

                  _this.$vs.loading.close('#change-password>.con-vs-loading');

                  message = _context.t0.response.data.error;
                  _this.dbErrors = message == undefined ? '' : message; // this.errorDialog(message)

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[5, 16]]);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    errorDialog: function errorDialog(message) {
      var text = message ? message : 'error';
      this.$vs.dialog({
        color: 'danger',
        title: 'information',
        text: text,
        acceptText: 'Ok'
      });
    },
    successDialog: function successDialog() {
      var _this2 = this;

      var text = 'Password has successfuly changed';
      this.$vs.dialog({
        color: 'danger',
        title: 'information',
        text: text,
        acceptText: 'Ok',
        cancel: function cancel() {
          _this2.logout();
        },
        accept: function accept() {
          _this2.logout();
        }
      });
    },
    logout: function logout() {
      this.$vs.loading({
        container: '#change-password',
        scale: this.scaleLoadingLayout
      });
      this.$store.dispatch('logout', true);
    }
  },
  computed: {
    isAuth: function isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  created: function created() {
    if (!this.isAuth) {
      this.$router.push({
        name: 'login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#change-password .social-login-buttons .bg-facebook {\n  background-color: #1551b1;\n}\n#change-password .social-login-buttons .bg-twitter {\n  background-color: #00aaff;\n}\n#change-password .social-login-buttons .bg-google {\n  background-color: #4285F4;\n}\n#change-password .social-login-buttons .bg-github {\n  background-color: #333;\n}\n#change-password .error-text {\n  font-size: 0.7rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      attrs: { id: "change-password" },
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4",
        },
        [
          _c("vx-card", [
            _c(
              "div",
              {
                staticClass: "full-page-bg-color",
                attrs: { slot: "no-body" },
                slot: "no-body",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "vx-row no-gutter justify-center items-center",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "vx-col hidden lg:block lg:w-1/2" },
                      [
                        _c("img", {
                          staticClass: "mx-auto",
                          attrs: {
                            src: __webpack_require__(/*! @assets/images/pages/login.png */ "./resources/assets/images/pages/login.png"),
                            alt: "login",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg",
                      },
                      [
                        _c("div", { staticClass: "p-8 login-tabs-container" }, [
                          _c("div", { staticClass: "vx-card__title mb-4" }, [
                            _c("h4", { staticClass: "mb-4" }, [
                              _vm._v("Change Password"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
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
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  name: "current password",
                                  "icon-no-border": "",
                                  icon: "icon icon-lock",
                                  "icon-pack": "feather",
                                  "label-placeholder": "Current Password",
                                },
                                model: {
                                  value: _vm.password.current_password,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.password,
                                      "current_password",
                                      $$v
                                    )
                                  },
                                  expression: "password.current_password",
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
                                        _vm.errors.has("current password") ||
                                        _vm.dbErrors,
                                      expression:
                                        "errors.has('current password') || dbErrors ",
                                    },
                                  ],
                                  staticClass: "error-text text-danger",
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first("current password") ||
                                          _vm.dbErrors.current_password
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|min:6",
                                    expression: "'required|min:6'",
                                  },
                                ],
                                ref: "password",
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  name: "password",
                                  "icon-no-border": "",
                                  icon: "icon icon-lock",
                                  "icon-pack": "feather",
                                  "label-placeholder": "New Password",
                                },
                                model: {
                                  value: _vm.password.new_password,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.password, "new_password", $$v)
                                  },
                                  expression: "password.new_password",
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
                                        _vm.errors.has("password") ||
                                        _vm.dbErrors,
                                      expression:
                                        "errors.has('password') || dbErrors",
                                    },
                                  ],
                                  staticClass: "error-text text-danger",
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first("password") ||
                                          _vm.dbErrors.new_password
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("vs-input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|confirmed:password",
                                    expression: "'required|confirmed:password'",
                                  },
                                ],
                                staticClass: "w-full mt-6",
                                attrs: {
                                  type: "password",
                                  name: "confirm password",
                                  "icon-no-border": "",
                                  icon: "icon icon-lock",
                                  "icon-pack": "feather",
                                  "label-placeholder": "Confirm Password",
                                  "data-vv-as": "password",
                                },
                                model: {
                                  value: _vm.password.confirm_password,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.password,
                                      "confirm_password",
                                      $$v
                                    )
                                  },
                                  expression: "password.confirm_password",
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
                                        _vm.errors.has("confirm password") ||
                                        _vm.dbErrors,
                                      expression:
                                        "errors.has('confirm password') || dbErrors",
                                    },
                                  ],
                                  staticClass: "error-text text-danger",
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toString")(
                                        _vm.errors.first("confirm password") ||
                                          _vm.dbErrors.confirm_password
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "mt-6" },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: { type: "border" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$router.go(-1)
                                        },
                                      },
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "float-right",
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.handleChangePassword()
                                        },
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
                                          return _vm.handleChangePassword()
                                        },
                                      },
                                    },
                                    [_vm._v("Change Password")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            type: "confirm",
            "buttons-hidden": "",
            title: "Information",
            active: _vm.dialog,
          },
          on: {
            "update:active": function ($event) {
              _vm.dialog = $event
            },
          },
        },
        [
          _c("div", [
            _c("span", [_vm._v(" Password has successfuly changed ")]),
          ]),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              staticClass: "mt-6",
              attrs: { "vs-type": "flex", "vs-justify": "flex-end" },
            },
            [
              _c(
                "vs-button",
                {
                  attrs: { color: "danger" },
                  on: {
                    click: function ($event) {
                      _vm.logout()
                      _vm.dialog = false
                    },
                  },
                },
                [_vm._v("OK")]
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

/***/ "./resources/assets/images/pages/login.png":
/*!*************************************************!*\
  !*** ./resources/assets/images/pages/login.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/login.png?d814adb752d2d047b8292d6de603025f";

/***/ }),

/***/ "./resources/js/src/views/pages/ChangePassword.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/ChangePassword.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=55e76d80& */ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=55e76d80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ChangePassword.vue?vue&type=template&id=55e76d80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_55e76d80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);