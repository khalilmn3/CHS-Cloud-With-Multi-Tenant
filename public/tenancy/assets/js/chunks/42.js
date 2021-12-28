(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update.js");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "./node_modules/ag-grid-community/dist/styles/ag-grid.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ag_grid_community_dist_styles_ag_theme_material_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-theme-material.css */ "./node_modules/ag-grid-community/dist/styles/ag-theme-material.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_theme_material_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_theme_material_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_marketing_roomRateDynamic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/marketing/roomRateDynamic.js */ "./resources/js/src/api/marketing/roomRateDynamic.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_checklist_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/checklist.js */ "./resources/js/src/views/pages/components/ag_grid-framework/checklist.js");


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









var roomRateDynamicResource = new _api_marketing_roomRateDynamic_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DynamicRate',
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null,
      rowData: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      fromDate: null,
      vNight: 10,
      tempDate: '',
      tempNight: '',
      showBedType: false,
      simpleMode: true,
      vModel: {},
      mainPopUp: false,
      paramsData: {},
      // ------------------need setting manual-----------------//
      // save disable button
      btnSaveDisabled1: false,
      saved: false,
      activeTab: 1,
      title: '',
      titleForm: 'Dynamic Rate',
      modeDataValue: ''
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update__WEBPACK_IMPORTED_MODULE_2__["default"],
      cekIconRenderer: _views_pages_components_ag_grid_framework_checklist_js__WEBPACK_IMPORTED_MODULE_9__["default"]
    };
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    handleCellDoubleClicked: function handleCellDoubleClicked(params) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var value, date, field;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.value;

              case 2:
                value = _context.sent;
                _context.next = 5;
                return params.colDef.colId;

              case 5:
                date = _context.sent;
                _context.next = 8;
                return params.colDef.field;

              case 8:
                field = _context.sent;
                _context.next = 11;
                return params.data;

              case 11:
                _this.paramsData = _context.sent;

                if (field.includes('Date')) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                _this.showModal(_this.paramsData, value, date);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    refreshData: function refreshData() {
      this.$loadingIndicator(this);
      this.getAvailability();
    },
    getAvailability: function getAvailability() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var params, _yield$roomRateDynami, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.fromDate && _this2.vNight > 0 && _this2.vNight <= 30)) {
                  _context2.next = 14;
                  break;
                }

                _this2.tempDate = _this2.fromDate;
                _this2.tempNight = _this2.vNight;
                params = {
                  fromDate: _this2.fromDate,
                  night: _this2.vNight,
                  filter: _this2.filter
                };
                _context2.next = 6;
                return roomRateDynamicResource.list(params);

              case 6:
                _yield$roomRateDynami = _context2.sent;
                data = _yield$roomRateDynami.data;
                _this2.rowData = data.data;
                data.header.forEach(function (element) {
                  if (element.valueFormatter == "formatNumber") {
                    element.valueFormatter = _utils_format_js__WEBPACK_IMPORTED_MODULE_6__["formatNumber"];
                  }
                });
                _this2.columnDefs = data.header; // this.$nextTick(()=>{this.setStyle();})

                _this2.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 15;
                break;

              case 14:
                if (!_this2.fromDate) {
                  _this2.fromDate = _this2.tempDate;
                } else if (_this2.vNight <= 0 || _this2.vNight > 30) {
                  _this2.vNight = _this2.tempNight;
                }

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleSimpleMode: function handleSimpleMode() {
      if (this.simpleMode) {
        this.filter = [1, 2];
      } else {
        this.filter = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13];
      }

      ;
      this.refreshData();
    },
    resetData: function resetData() {
      this.vModel = {
        room_rate_code: '',
        start_date: this.fromDate,
        end_date: this.fromDate,
        "default": false,
        amount: 0,
        user_id: this.global.userInfo.code
      };
      this.dbErrors = {};
      this.dataTracking = null;
      this.saved = false;
      this.btnSaveDisabled1 = false;
      this.resetValidator();
    },
    showModal: function showModal(params, value, date) {
      this.resetData();
      this.vModel.room_rate_code = params.code;

      if (value && date) {
        this.vModel.start_date = "".concat(date);
        this.vModel.end_date = "".concat(date);
        this.vModel.amount = value;
      } else {
        this.vModel.start_date = this.fromDate;
        this.vModel.end_date = this.fromDate;
        this.vModel.amount = 0;
      }

      this.mainPopUp = true;
    },
    changeDefault: function changeDefault(value) {
      if (value) {
        this.vModel.percentage = 100;
      }
    },
    changeStartDate: function changeStartDate() {
      if (this.vModel.end_date < this.vModel.start_date) {
        this.vModel.end_date = this.vModel.start_date;
      }
    },
    changeEndDate: function changeEndDate() {
      if (this.vModel.end_date < this.vModel.start_date) {
        this.vModel.start_date = this.vModel.end_date;
      }
    },
    update: function update() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.btnSaveDisabled1 = true;
                _context3.next = 4;
                return roomRateDynamicResource.store(_this3.vModel);

              case 4:
                _this3.btnSaveDisabled1 = false;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                _this3.btnSaveDisabled1 = false;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    saveData: function saveData() {
      var _this4 = this;

      this.$validator.validateAll().then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(result) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!result) {
                    _context4.next = 6;
                    break;
                  }

                  _this4.vModel.user_id = _this4.global.userInfo.code;
                  _context4.next = 4;
                  return _this4.update();

                case 4:
                  _this4.mainPopUp = false;

                  _this4.refreshData();

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    resetValidator: function resetValidator() {
      var _this5 = this;

      this.$validator.pause();
      this.$nextTick(function () {
        _this5.$validator.errors.clear();

        _this5.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this5.$validator.fields.items.forEach(function (field) {
          return _this5.errors.remove(field);
        });

        _this5.$validator.resume();
      });
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  },
  created: function created() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this6.$store.dispatch('getAuditDate');

            case 2:
              _context5.next = 4;
              return _this6.auditDate;

            case 4:
              _this6.fromDate = _context5.sent;

              _this6.refreshData();

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".availability .filter span {\n  font-size: 0.8rem;\n}\n.availability .filter .con-vs-checkbox {\n  font-size: 0.8rem;\n}\n.availability .vs__selected-options {\n  flex-wrap: nowrap !important;\n  overflow-x: auto;\n}\n.availability .vs__selected {\n  line-height: 1;\n  white-space: nowrap;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicRate.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4& ***!
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
    { staticClass: "dynamic-rate" },
    [
      _c(
        "vx-card",
        { staticClass: "filter" },
        [
          _c(
            "vs-row",
            {
              attrs: {
                "vs-w": "12",
                "vs-type": "flex",
                "vs-align": "center",
                "vs-justify": "flex-start",
              },
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-lg": "3",
                  },
                },
                [
                  _c("span", { staticStyle: { "margin-right": "5px" } }, [
                    _vm._v(_vm._s(_vm.$t("availability.filter.fromDate"))),
                  ]),
                  _vm._v(" "),
                  _c("date-picker", {
                    staticClass: "w-full",
                    staticStyle: { "margin-right": "5px" },
                    attrs: {
                      id: "date",
                      clearable: false,
                      lang: _vm.$t("lang"),
                      "value-type": "YYYY-MM-DD",
                      placeholder: "DD/MM/YYYY",
                      format: "DD/MM/YYYY",
                      label: "name",
                    },
                    on: {
                      input: function ($event) {
                        return _vm.refreshData()
                      },
                    },
                    model: {
                      value: _vm.fromDate,
                      callback: function ($$v) {
                        _vm.fromDate = $$v
                      },
                      expression: "fromDate",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-xs": "6",
                    "vs-sm": "6",
                    "vs-lg": "3",
                  },
                },
                [
                  _c("vs-input-number", {
                    staticStyle: {
                      width: "100px",
                      "min-width": "100px",
                      "margin-left": "-0.5px",
                    },
                    attrs: {
                      id: "night",
                      max: 30,
                      min: 1,
                      "icon-inc": "expand_less",
                      "icon-dec": "expand_more",
                    },
                    on: {
                      input: function ($event) {
                        return _vm.refreshData()
                      },
                    },
                    model: {
                      value: _vm.vNight,
                      callback: function ($$v) {
                        _vm.vNight = $$v
                      },
                      expression: "vNight",
                    },
                  }),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "margin-right": "5px" } }, [
                    _vm._v(_vm._s(_vm.$t("availability.filter.night"))),
                  ]),
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
          staticClass: "mt-3 vs-con-loading__container",
          attrs: { id: "main-container" },
        },
        [
          _c("ag-grid-vue", {
            class: _vm.global.themeAgGrid,
            style: _vm.global.styleAgGridFrame,
            attrs: {
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              enableRangeSelection: true,
              suppressMenu: true,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.global.defColDef,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellDoubleClicked: _vm.handleCellDoubleClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title: _vm.global.modeDataName.edit + _vm.titleForm,
          width: 500,
          active: _vm.mainPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled1,
        },
        on: {
          button1: function ($event) {
            return _vm.saveData()
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
                          [
                            _c(
                              "vs-col",
                              { attrs: { "vs-lg": "12", "vs-xs": "12" } },
                              [
                                _c(
                                  "vs-row",
                                  {
                                    staticClass: "mt-3",
                                    attrs: {
                                      "vs-type": "flex",
                                      "vs-justify": "center",
                                    },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "wrap-form-select w-full md:w-1/4",
                                      },
                                      [
                                        _c("vs-row", [
                                          _vm._v(
                                            _vm._s(_vm.$t("common.startDate"))
                                          ),
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
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                lang: _vm.$t("lang"),
                                                type: "date",
                                                clearable: false,
                                                "not-before": "",
                                                "value-type": "YYYY-MM-DD",
                                                format: "DD/MM/YYYY",
                                                label: "name",
                                                name: "start date",
                                              },
                                              on: {
                                                change: _vm.changeStartDate,
                                              },
                                              model: {
                                                value: _vm.vModel.start_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "start_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.start_date",
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
                                          "wrap-form-select w-full md:w-1/4",
                                      },
                                      [
                                        _c("vs-row", [
                                          _vm._v(
                                            _vm._s(_vm.$t("common.endDate"))
                                          ),
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
                                                  expression: "'required'",
                                                },
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                lang: _vm.$t("lang"),
                                                type: "date",
                                                clearable: false,
                                                "not-before": "",
                                                "value-type": "YYYY-MM-DD",
                                                format: "DD/MM/YYYY",
                                                label: "name",
                                                name: "end date",
                                              },
                                              on: { change: _vm.changeEndDate },
                                              model: {
                                                value: _vm.vModel.end_date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.vModel,
                                                    "end_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "vModel.end_date",
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
                                      "vs-justify": "center",
                                    },
                                  },
                                  [
                                    _c(
                                      "vs-checkbox",
                                      {
                                        staticClass:
                                          "w-full md:w-6/12 checkbox-3col",
                                        on: { change: _vm.changeDefault },
                                        model: {
                                          value: _vm.vModel.default,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.vModel, "default", $$v)
                                          },
                                          expression: "vModel.default",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("common.default")))]
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
                                      "vs-justify": "center",
                                    },
                                  },
                                  [
                                    _c("input-number", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'",
                                        },
                                      ],
                                      staticClass: "w-full md:w-1/2",
                                      attrs: {
                                        disabled: _vm.vModel.default,
                                        label: _vm.$t("common.amount"),
                                        placeholder: _vm.$t("common.weekday"),
                                        name: "percentage",
                                      },
                                      model: {
                                        value: _vm.vModel.amount,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.vModel, "amount", $$v)
                                        },
                                        expression: "vModel.amount",
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

/***/ "./resources/js/src/api/marketing/roomRateDynamic.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/api/marketing/roomRateDynamic.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoomRateDynamicResource; });
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resource */ "./resources/js/src/api/resource.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var uri = 'roomrate/dynamicrate';

var RoomRateDynamicResource = /*#__PURE__*/function (_Resource) {
  _inherits(RoomRateDynamicResource, _Resource);

  var _super = _createSuper(RoomRateDynamicResource);

  function RoomRateDynamicResource() {
    _classCallCheck(this, RoomRateDynamicResource);

    return _super.call(this, uri);
  }

  return RoomRateDynamicResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicRate.vue?vue&type=template&id=c90cc0e4& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4&");
/* harmony import */ var _DynamicRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicRate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicRate.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DynamicRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicRate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicRate.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DynamicRate.vue?vue&type=template&id=c90cc0e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/DynamicRate.vue?vue&type=template&id=c90cc0e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DynamicRate_vue_vue_type_template_id_c90cc0e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showModal(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    activeDeactive: function activeDeactive() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleActiveDeactive(this.params.data);
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

/***/ })

}]);