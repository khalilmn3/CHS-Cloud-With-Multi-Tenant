(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dialog */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/format */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_night_audit_autoPostTransaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/night-audit/autoPostTransaction */ "./resources/js/src/api/night-audit/autoPostTransaction.js");
/* harmony import */ var _api_guestinhouse_guestInHouse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse.js */ "./resources/js/src/api/guestinhouse/guestInHouse.js");


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



 // <!------------------additional element---------------------->

 // API



var guestInHouseResource = new _api_guestinhouse_guestInHouse_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
var autoPostTransactionResource = new _api_night_audit_autoPostTransaction__WEBPACK_IMPORTED_MODULE_6__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AutoPostTransaction',
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
      rowData: [],
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      paginationPageSize: null,
      rowSelection: null,
      //-----------------
      showPrePost: false,
      post: {
        allow_zero_amount: false,
        reposting: false
      },
      // ------CREDENTIAL-------//
      activeCredentialPrompt: false,
      credentialTitle: '',
      specialAccessType: 1000,
      credential: {
        user: '',
        pass: ''
      },
      paramsData: '',
      idLog: '' // ------------------end need setting manual-----------------//

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
      headerName: this.$t('nightAudit.table.folioNumber'),
      field: 'folio_number',
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
      headerName: this.$t('nightAudit.table.roomRateCode'),
      field: 'room_rate_code',
      width: 130
    }, {
      headerName: this.$t('nightAudit.table.amount'),
      field: 'amount',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('nightAudit.table.amountWillPost'),
      field: 'amount_post',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('nightAudit.table.amountPosted'),
      field: 'amount_posted',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"]
    }, {
      headerName: this.$t('nightAudit.table.result'),
      field: 'result',
      width: 200
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.rowGroupPanelShow = 'always';
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
        var formType;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this.paramsData = _context.sent;
                formType = '';

                if (_this.paramsData.type == 'Room Charge' || _this.paramsData.type == 'Extra Charge') {
                  formType = _this.global.formType.guestInHouse;
                } else if (_this.paramsData.type == 'Desk Folio') {
                  formType = _this.global.formType.deskFolio;
                } else if (_this.paramsData.type == 'Master Folio') {
                  formType = _this.global.formType.masterFolio;
                }

                _this.handleTransaction(formType);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    handlePrecheckAutoPostTransaction: function handlePrecheckAutoPostTransaction() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$autoPostTransa, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$loadingIndicator(_this2);

                _context2.prev = 1;
                _context2.next = 4;
                return autoPostTransactionResource.precheck(_this2.post);

              case 4:
                _yield$autoPostTransa = _context2.sent;
                data = _yield$autoPostTransa.data;
                _this2.rowData = data;

                _this2.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                _utils_alert__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 10]]);
      }))();
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

                _context3.next = 3;
                return guestInHouseResource.get(_this3.paramsData.folio_number);

              case 3:
                _yield$guestInHouseRe = _context3.sent;
                data = _yield$guestInHouseRe.data;

                _this3.$router.push({
                  name: 'transaction',
                  params: {
                    form: formType,
                    stayInformations: data ? data.list : _this3.stayInformations
                  }
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    handleAutoPostTransaction: function handleAutoPostTransaction() {
      if (this.post.reposting) {
        this.showCredential('', this.$t('credential.title.voidSubFolio'), this.global.accessSpecialOrder.voidSubFolio);
      } else {
        _utils_dialog__WEBPACK_IMPORTED_MODULE_3__["default"].confirmation(this, 'postTransaction');
      }
    },
    postTransaction: function postTransaction() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$autoPostTransa2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$loadingIndicator(_this4);

                _context4.prev = 1;
                _context4.next = 4;
                return autoPostTransactionResource.post(_this4.post);

              case 4:
                _yield$autoPostTransa2 = _context4.sent;
                data = _yield$autoPostTransa2.data;
                _this4.rowData = data;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](1);
                _utils_alert__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 10]]);
      }))();
    },
    resetPost: function resetPost() {
      this.post = {
        allow_zero_amount: this.allowZeroAmount,
        reposting: false,
        user_id: this.global.userInfo.code
      };
    },
    // --------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(val, title, accessType) {
      this.resetCredential();
      this.specialAccessType = accessType;
      this.activeCredentialPrompt = true;
      this.idLog = val.id_log;
      this.credentialTitle = title;
    },
    acceptCredential: function acceptCredential() {
      this.postTransaction();
    },
    resetCredential: function resetCredential() {
      this.credential = {
        user: '',
        pass: ''
      };
    } // --------------------CREDENTIAL----------------------------------------//

  },
  mounted: function mounted() {
    var _this5 = this;

    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.$vs.loading.close('#layout--main>.con-vs-loading');
    setTimeout(function () {
      _this5.resetPost();
    }, 1000);
  },
  computed: {
    allowZeroAmount: function allowZeroAmount() {
      return this.$store.getters.allowZeroAmount;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.showPrePost || this.activeCredentialPrompt) {
      this.showPrePost = false;
      this.activeCredentialPrompt = false;
      next(false);
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".night-audit .ag-theme-balham .ag-header {\n  font-size: 11px;\n}\n.night-audit .ag-theme-balham {\n  font-size: 11px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoPostTransaction.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
        "vs-row",
        {
          staticClass: "navigation mb-2",
          attrs: { "vs-w": "12", "vs-type": "flex" },
        },
        [
          _c(
            "vs-button",
            {
              attrs: {
                "vs-xs": "12",
                "vs-type": "flex",
                color: "success",
                type: "filled",
                icon: "people_alt",
              },
              on: { click: _vm.handlePrecheckAutoPostTransaction },
            },
            [_vm._v(_vm._s(this.$t("button.precheckAutoPost")))]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-2",
              attrs: {
                "vs-xs": "12",
                "vs-type": "flex",
                color: "success",
                type: "filled",
                icon: "person",
              },
              on: { click: _vm.handleAutoPostTransaction },
            },
            [_vm._v(_vm._s(this.$t("button.post")))]
          ),
          _vm._v(" "),
          _c(
            "vs-checkbox",
            {
              staticClass: "ml-2",
              model: {
                value: _vm.post.allow_zero_amount,
                callback: function ($$v) {
                  _vm.$set(_vm.post, "allow_zero_amount", $$v)
                },
                expression: "post.allow_zero_amount",
              },
            },
            [_vm._v(_vm._s(_vm.$t("nightAudit.allowZeroAmount")))]
          ),
          _vm._v(" "),
          _c(
            "vs-checkbox",
            {
              model: {
                value: _vm.post.reposting,
                callback: function ($$v) {
                  _vm.$set(_vm.post, "reposting", $$v)
                },
                expression: "post.reposting",
              },
            },
            [_vm._v(_vm._s(_vm.$t("nightAudit.reposting")))]
          ),
        ],
        1
      ),
      _vm._v(" "),
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
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.global.defColDef,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              rowDoubleClicked: _vm.handleRowDobleClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("credential", {
        attrs: {
          value: _vm.credential,
          specialAccessType: _vm.specialAccessType,
          activeCredential: _vm.activeCredentialPrompt,
          isCredential: true,
          isReason: false,
          title: _vm.credentialTitle,
        },
        on: {
          "update:active-credential": function (val) {
            return (_vm.activeCredentialPrompt = val)
          },
          acceptCredential: _vm.acceptCredential,
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

/***/ "./resources/js/src/api/night-audit/autoPostTransaction.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/api/night-audit/autoPostTransaction.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoPostTransactionResource; });
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



var uri = 'nightaudit/autopost';

var AutoPostTransactionResource = /*#__PURE__*/function (_Resource) {
  _inherits(AutoPostTransactionResource, _Resource);

  var _super = _createSuper(AutoPostTransactionResource);

  function AutoPostTransactionResource() {
    _classCallCheck(this, AutoPostTransactionResource);

    return _super.call(this, uri);
  }

  _createClass(AutoPostTransactionResource, [{
    key: "precheck",
    value: function precheck(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/precheck',
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
  }]);

  return AutoPostTransactionResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoPostTransaction.vue?vue&type=template&id=ea804b7e& */ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e&");
/* harmony import */ var _AutoPostTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoPostTransaction.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoPostTransaction.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AutoPostTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoPostTransaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoPostTransaction.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutoPostTransaction.vue?vue&type=template&id=ea804b7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/night-audit/auto-post-transaction/AutoPostTransaction.vue?vue&type=template&id=ea804b7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutoPostTransaction_vue_vue_type_template_id_ea804b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);