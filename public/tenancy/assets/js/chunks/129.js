(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_ag_grid_framework_hk_status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/hk_status.js */ "./resources/js/src/views/pages/components/ag_grid-framework/hk_status.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_availability_status_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/availability_status.js */ "./resources/js/src/views/pages/components/ag_grid-framework/availability_status.js");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_housekeeping_components_HousekeepingForm_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/housekeeping/components/HousekeepingForm.vue */ "./resources/js/src/views/pages/housekeeping/components/HousekeepingForm.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid.js");
/* harmony import */ var _api_reservation_availability_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/reservation/availability.js */ "./resources/js/src/api/reservation/availability.js");


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










var availabilityResource = new _api_reservation_availability_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RoomAvailability',
  props: ['titleForm'],
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    HousekeepingForm: _views_pages_housekeeping_components_HousekeepingForm_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      search: '',
      fromDate: '',
      fromDateTemp: '',
      headerAgGrid: [],
      isReservation: false,
      isGuestInHouse: false,
      key: 1,
      event: null,
      titleFormReg: '',
      // Ag-Grid
      columnDefs: null,
      rowData: null,
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
      defColDef: null,
      getRowNodeId: null,
      suppressKeyboardEvent: null,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      dataLookUp: [],
      destroyComponent: false
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_9__["default"],
      statusRenderer: _views_pages_components_ag_grid_framework_hk_status_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      colorStatusRenderer: _views_pages_components_ag_grid_framework_availability_status_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
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
    this.rowModelType = 'serverSide';

    this.suppressKeyboardEvent = function (params) {
      var KEY_SHIFT = 16;
      var KEY_ZERO = 0;
      _this.event = params.event;

      if (_this.key === 0) {
        _this.key = KEY_ZERO;
      } else {
        _this.key = event.which;
      }

      var keysToSuppress = [];

      if (event.ctrlKey || event.metaKey) {
        keysToSuppress.push(KEY_SHIFT);
      }
    };
  },
  methods: {
    rowSelectedAfterRefresh: function rowSelectedAfterRefresh() {
      var vm = this;
      this.gridApi.forEachNode(function (node) {
        if ((vm.vModel.room_number === undefined || vm.vModel.room_number === null) && node.rowIndex === 0) {
          node.setSelected(true, true);
          return false;
        }

        if (node.data.room_number === vm.vModel.room_number) {
          vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
          node.setSelected(true, true);
          return false;
        }
      });
    },
    getDataAvailability: function () {
      var _getDataAvailability = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(search) {
        var _this2 = this;

        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return availabilityResource.roomAvailabilityForm(search);

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.columnDefs = data.header;
                this.rowData = data.roomJson;
                this.key = 1;
                setTimeout(function () {
                  _this2.rowSelectedAfterRefresh();
                }, 100);
                this.$vs.loading.close('#layout--main>.con-vs-loading');
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                _utils_alert__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();
                this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function getDataAvailability(_x) {
        return _getDataAvailability.apply(this, arguments);
      }

      return getDataAvailability;
    }(),
    refreshData: function refreshData(search) {
      this.search = search;
      this.$loadingIndicator(this);
      this.getDataAvailability(search);
    },
    onGridReady: function onGridReady(params) {},
    handleCellDoubleClicked: function () {
      var _handleCellDoubleClicked = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
        var cellValue, rowValue, sysDate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isGuestInHouse = false;
                this.ignoreHeader = params.colDef.field;

                if (!(this.ignoreHeader === 'room_number' || this.ignoreHeader === 'status_code' || this.ignoreHeader === 'block_status_code' || this.ignoreHeader === 'room_type_code' || this.ignoreHeader === 'RoomView' || this.ignoreHeader === 'Smoking' || this.ignoreHeader === 'RoomType')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.next = 6;
                return params.value;

              case 6:
                cellValue = _context2.sent;
                _context2.next = 9;
                return params.data;

              case 9:
                rowValue = _context2.sent;

                if (this.key === 0) {
                  this.key = 1;
                } // set variable vModel.room_number for selected & scrolling in ag Grid


                this.vModel.room_number = rowValue.room_number;

                if (!cellValue) {
                  _context2.next = 17;
                  break;
                }

                this.valueCellData = cellValue.split('|');

                if (this.valueCellData[2] === 'R') {
                  this.paramsData = {
                    reservation_number: this.valueCellData[1],
                    folio_number: this.valueCellData[1]
                  };
                  this.titleFormReg = this.$t('roomAvailability.popupTitle.editReservation') + this.valueCellData[1];
                  this.isReservation = true;
                  this.showForm(this.paramsData, this.global.modeData.edit, this.isReservation);
                } else if (this.valueCellData[2] === 'O' || this.valueCellData[2] === 'ED') {
                  this.paramsData = {
                    reservation_number: this.valueCellData[1],
                    folio_number: this.valueCellData[1]
                  };
                  this.titleFormReg = this.$t('roomAvailability.popupTitle.editGuestInHouse') + this.valueCellData[1];
                  this.isReservation = false;
                  this.isGuestInHouse = true;
                  this.showForm(this.paramsData, this.global.modeData.edit, this.isReservation);
                } else if (this.valueCellData[2] === 'U') {
                  this.showHousekeepingForm(rowValue, this.valueCellData[3]);
                }

                _context2.next = 20;
                break;

              case 17:
                if (!(this.ignoreHeader === 'ED')) {
                  _context2.next = 19;
                  break;
                }

                return _context2.abrupt("return");

              case 19:
                if (rowValue.status_code === 'VR' && this.key != 16) {
                  this.paramsData = {
                    room_type_code: rowValue.room_type_code,
                    bed_type_code: rowValue.bed_type_code,
                    room_number: rowValue.room_number
                  };
                  this.titleFormReg = this.$t('roomAvailability.popupTitle.newWalkIn');
                  this.isReservation = false;
                  this.showForm(this.paramsData, this.global.modeData.insert, this.isReservation);
                  this.key = 1;
                } else if (this.key === 16) {
                  // Get Arrival Date form header Cell Click
                  this.ColDefHeader = params.colDef.headerName.split(' ');
                  this.arrivalDateString = this.ColDefHeader[1].split('/');
                  this.arrivalDate = new Date(this.arrivalDateString[2], parseInt(this.arrivalDateString[1]) - 1, this.arrivalDateString[0]);
                  this.departureDate = new Date(this.arrivalDateString[2], parseInt(this.arrivalDateString[1]) - 1, parseInt(this.arrivalDateString[0]) + 1);

                  if (this.arrivalDate < this.auditDate) {
                    this.arrivalDate = this.auditDate;
                  } // get Hour, Minute, Second from SysDate


                  sysDate = new Date();
                  this.arrivalDate.setHours(sysDate.getHours(), sysDate.getMinutes(), sysDate.getSeconds());
                  this.departureDate.setHours(13);
                  this.paramsData = {
                    room_type_code: rowValue.room_type_code,
                    bed_type_code: rowValue.bed_type_code,
                    room_number: rowValue.room_number,
                    ready: false,
                    arrival: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatDateTimeDatabase"])(this.arrivalDate),
                    departure: Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatDateTimeDatabase"])(this.departureDate)
                  };
                  this.titleFormReg = this.$t('roomAvailability.popupTitle.insertReservation');
                  this.isReservation = true;
                  this.showForm(this.paramsData, this.global.modeData.insert, this.isReservation);
                  this.key = 0;
                }

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleCellDoubleClicked(_x2) {
        return _handleCellDoubleClicked.apply(this, arguments);
      }

      return handleCellDoubleClicked;
    }(),
    // CRUD Function
    showForm: function () {
      var _showForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(idData, modeData, isReservation) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.$loadingIndicator(this);
                this.destroyComponent = false;
                setTimeout(function () {
                  _this3.destroyComponent = true;
                  setTimeout(function () {
                    _this3.$refs.registrationForm.showForm(idData, modeData, isReservation);
                  }, 100);
                }, 100);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function showForm(_x3, _x4, _x5) {
        return _showForm.apply(this, arguments);
      }

      return showForm;
    }(),
    showHousekeepingForm: function () {
      var _showHousekeepingForm = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(idData, modeData) {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.$loadingIndicator(this);
                this.destroyComponent = false;
                setTimeout(function () {
                  _this4.destroyComponent = true;
                  setTimeout(function () {
                    _this4.$refs.housekeepingForm.showModalUnavailable(idData, modeData, '', _this4.global.hkMode.roomUnavailable);
                  }, 100);
                }, 100);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function showHousekeepingForm(_x6, _x7) {
        return _showHousekeepingForm.apply(this, arguments);
      }

      return showHousekeepingForm;
    }()
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    }
  },
  // ------------------end need setting manual for crud-----------------//
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "RoomAvailability" },
    [
      _c("filter-header", {
        ref: "filterHeader",
        attrs: { formType: _vm.global.formType.roomAvailability },
        on: { search: _vm.refreshData }
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container",
          attrs: { id: "main-container" }
        },
        [
          _c("ag-grid-vue", {
            class: _vm.global.themeAgGrid,
            style: _vm.global.styleAgGridFrame,
            attrs: {
              rowData: _vm.rowData,
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              defaultColDef: _vm.global.defColDef,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              statusBar: _vm.statusBar,
              suppressKeyboardEvent: _vm.suppressKeyboardEvent
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellDoubleClicked: _vm.handleCellDoubleClicked
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("registration-form", {
            ref: "registrationForm",
            attrs: {
              titleForm: _vm.titleFormReg,
              isGuestInHouse: _vm.isGuestInHouse,
              isReservation: _vm.isReservation,
              isFromAvailability: true
            },
            on: {
              refreshData: function($event) {
                return _vm.$refs.filterHeader.onRefreshData()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.destroyComponent
        ? _c("housekeeping-form", {
            ref: "housekeepingForm",
            on: {
              refreshData: function($event) {
                return _vm.$refs.filterHeader.onRefreshData()
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/reservation/availability.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/api/reservation/availability.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AvailabilityResource; });
/* harmony import */ var _api_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/resource */ "./resources/js/src/api/resource.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./resources/js/src/utils/request.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var uri = 'reservation/availability';

var AvailabilityResource =
/*#__PURE__*/
function (_Resource) {
  _inherits(AvailabilityResource, _Resource);

  function AvailabilityResource() {
    _classCallCheck(this, AvailabilityResource);

    return _possibleConstructorReturn(this, _getPrototypeOf(AvailabilityResource).call(this, uri));
  }

  _createClass(AvailabilityResource, [{
    key: "availability",
    value: function availability(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri,
        method: 'post',
        data: params
      });
    }
  }, {
    key: "roomAvailabilityForm",
    value: function roomAvailabilityForm(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/roomavailability',
        method: 'post',
        data: params
      });
    }
  }, {
    key: "roomAvailabilityFormLookUp",
    value: function roomAvailabilityFormLookUp() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/roomavailability/lookup',
        method: 'post'
      });
    }
  }]);

  return AvailabilityResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/availability_status.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/availability_status.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div v-if=\"params.data\">\n                <div v-if=\"typeX === 'R'\"> <span :style=\"style\"><b>{{data}}</b></span> </div>\n                <div v-if=\"typeX === 'O'\"> <span :style=\"style\"><b>{{data}}</b></span> </div>\n                <div v-if=\"typeX === 'ED'\"><span :style=\"style\"><b>{{data}}</b></span> </div>\n                <div v-if=\"typeX === 'U'\">\n                    <div v-if=\"statusCode2 === 'OO'\"> <span :style=\"style\"><b>{{data}}</b></span> </div>\n                    <div v-if=\"statusCode2 === 'OF'\"> <span :style=\"style\"><b>{{data}}</b></span> </div>\n                    <div v-if=\"statusCode2 === 'UC'\"> <span :style=\"style\"><b>{{data}}</b></span> </div>\n                </div>\n            </div>\n         ",
  data: function data() {
    return {
      data: null,
      dataArray: [],
      typeX: '',
      statusCode2: '',
      style: {
        padding: '17px',
        paddingRight: '180px',
        marginLeft: '-15px',
        backgroundColor: ''
      }
    };
  },
  computed: {},
  beforeMount: function beforeMount() {},
  created: function created() {},
  mounted: function mounted() {
    this.data = "".concat(this.params.value);

    if (this.data != '') {
      this.dataArray = this.data.split('|');
      this.typeX = this.dataArray[2];

      if (this.typeX == 'U') {
        this.statusCode2 = this.dataArray[3];

        if (this.statusCode2 == 'OO') {
          // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOutOfOrder)>>>0).toString(16)).slice(-6);
          this.style.backgroundColor = 'Red';
        } else if (this.statusCode2 == 'OF') {
          // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOfficeUse)>>>0).toString(16)).slice(-6);
          this.style.backgroundColor = 'Purple';
        } else if (this.statusCode2 == 'UC') {
          // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorUnderConstruction)>>>0).toString(16)).slice(-6);
          this.style.backgroundColor = 'Sienna';
        }
      } else if (this.typeX == 'R') {
        this.style.backgroundColor = 'DodgerBlue'; // this.style.backgroundColor = "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorReserved)>>>0).toString(16)).slice(-6);
      } else if (this.typeX == 'O') {
        this.style.backgroundColor = 'DarkGoldenRod'; // this.style.backgroundColor =  "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOccupied)>>>0).toString(16)).slice(-6);
      } else if (this.typeX == 'ED') {
        //                this.style.backgroundColor =  "#"+ ('000000' + ((this.$store.state.configurations.roomStatusColorOccupied)>>>0).toString(16)).slice(-6);
        this.style.backgroundColor = 'yellow';
      }
    }
  },
  methods: {
    dec2hexString: function dec2hexString(dec) {
      return "0x".concat((dec + 0x10000).toString(16).substr(-4).toUpperCase());
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomAvailability.vue?vue&type=template&id=0e17e012& */ "./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012&");
/* harmony import */ var _RoomAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomAvailability.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/availability/RoomAvailability.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomAvailability.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAvailability_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomAvailability.vue?vue&type=template&id=0e17e012& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/availability/RoomAvailability.vue?vue&type=template&id=0e17e012&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomAvailability_vue_vue_type_template_id_0e17e012___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);