(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_dashboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/dashboard.js */ "./resources/js/src/api/dashboard.js");
/* harmony import */ var _component_ExpectedArrival_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/ExpectedArrival.vue */ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue");
/* harmony import */ var _component_ExpectedDeparture_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/ExpectedDeparture.vue */ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue");
/* harmony import */ var _component_RoomStatistic_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/RoomStatistic.vue */ "./resources/js/src/views/dashboard/component/RoomStatistic.vue");


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





var dashboardResource = new _api_dashboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Apexchart: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    ExpectedArrival: _component_ExpectedArrival_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ExpectedDeparture: _component_ExpectedDeparture_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    RoomStatistic: _component_RoomStatistic_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      resolutionHeight: null,
      resolutionWidth: null,
      roomAvailableList: null,
      expectedArrival: null,
      expectedDeparture: null,
      roomDataStatistic: null,
      arrival: {
        actual: {
          rooms: 0
        },
        expected: {
          rooms: 0
        }
      },
      departure: {
        actual: {
          rooms: 0
        },
        expected: {
          rooms: 0
        }
      },
      reservation: {
        rooms: 0
      },
      guestInHouse: {
        rooms: 0
      },
      // OCCUPANCY RADIAL
      rseries: [],
      rplotOptions: {
        stroke: {
          lineCap: 'round'
        },
        labels: ['Occupancy'],
        radialBar: {
          dataLabels: {
            name: {
              show: true
            },
            hollow: {
              margin: 15,
              size: '100%'
            },
            value: {
              show: true,
              fontSize: '14px',
              formatter: function formatter(val) {
                return "".concat(val, "%");
              }
            },
            total: {
              show: true,
              label: 'Total'
            }
          }
        },
        dataLabels: {
          showOn: 'always',
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '10px'
          },
          value: {
            color: '#111',
            fontSize: '10px',
            show: true
          }
        }
      },
      // OCCUPIED CHART
      oSeries: [],
      oChartOptions: {
        labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        chart: {
          type: 'area',
          height: 350,
          stacked: true,
          events: {
            selection: function selection(chart, e) {
              console.log(new Date(e.xaxis.min));
            }
          }
        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        },
        xaxis: {
          type: 'datetime'
        }
      },
      // ROOM STATUS DONUT
      dseries: [],
      dchartOptions: {
        labels: ['Compliment', 'Reserved', 'House Use', 'Unavailable', 'Available', 'Sold'],
        dataLabels: {
          enabled: false,
          formatter: function formatter(val) {
            return "".concat(val, "%");
          }
        },
        plotOptions: {
          pie: {
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            expandOnClick: true,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10
                },
                value: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function formatter(val) {
                    return val;
                  }
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function formatter(w) {
                    var data = w.globals.seriesTotals;
                    var total = data.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                    var sold = data[0] + data[5];
                    var saleable = total - data[2] - data[3];
                    return total; // return  ((sold / saleable) * 100).toFixed(2) + '%';
                  }
                }
              }
            }
          }
        }
      },
      // ROOM AVAILABLE BAR STACKED
      roomCategories: {},
      roomSeries: [],
      roomChartOptions: {
        chart: {
          type: 'bar',
          height: 300,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: [],
          labels: {
            formatter: function formatter(val) {
              return val;
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        },
        fill: {
          opacity: 1
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          offsetX: 1
        }
      }
    };
  },
  methods: {
    roomStatistic: function roomStatistic() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$dashboardResou, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$vs.loading({
                  container: '#available-list',
                  scale: _this.scaleLoadingContainer
                });

                _this.$vs.loading({
                  container: '#room',
                  scale: _this.scaleLoadingContainer
                });

                _context.next = 4;
                return dashboardResource.roomStatistic();

              case 4:
                _yield$dashboardResou = _context.sent;
                data = _yield$dashboardResou.data;
                _this.roomAvailableList = data.dataTable;
                _this.roomDataStatistic = data;
                _this.dseries = data.graphic;
                _this.rseries = [data.occupancy];

                _this.$vs.loading.close('#available-list>.con-vs-loading');

                _this.$vs.loading.close('#room>.con-vs-loading');

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    roomSold: function roomSold() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$dashboardResou2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: '#occupied-chart',
                  scale: _this2.scaleLoadingContainer
                });

                _context2.next = 3;
                return dashboardResource.roomSold();

              case 3:
                _yield$dashboardResou2 = _context2.sent;
                data = _yield$dashboardResou2.data;
                _this2.oSeries = data;

                _this2.$vs.loading.close('#occupied-chart>.con-vs-loading');

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    housekeepingStatus: function housekeepingStatus() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$dashboardResou3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.$vs.loading({
                  container: '#room-status-bar',
                  scale: _this3.scaleLoadingContainer
                });

                _context3.next = 3;
                return dashboardResource.roomStatus();

              case 3:
                _yield$dashboardResou3 = _context3.sent;
                data = _yield$dashboardResou3.data;
                _this3.roomSeries = data.series;
                _this3.roomChartOptions.xaxis.categories = data.categories;
                _this3.roomCategories = _this3.roomChartOptions;

                _this3.$vs.loading.close('#room-status-bar>.con-vs-loading');

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    expectedArrivalDeparture: function expectedArrivalDeparture() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$dashboardResou4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$vs.loading({
                  container: '#expected-arrival-list',
                  scale: _this4.scaleLoadingContainer
                });

                _this4.$vs.loading({
                  container: '#expected-departure-list',
                  scale: _this4.scaleLoadingContainer
                });

                _context4.next = 4;
                return dashboardResource.expectedArrivalDeparture();

              case 4:
                _yield$dashboardResou4 = _context4.sent;
                data = _yield$dashboardResou4.data;
                _this4.expectedArrival = data.expected_arrival;
                _this4.expectedDeparture = data.expected_departure;

                _this4.$vs.loading.close('#expected-departure-list>.con-vs-loading');

                _this4.$vs.loading.close('#expected-arrival-list>.con-vs-loading');

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    roomStatistic2: function roomStatistic2() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$dashboardResou5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.$vs.loading({
                  container: '.arrival',
                  scale: _this5.scaleLoadingContainer
                }); // this.$vs.loading({container:'.departure',scale:this.scaleLoadingContainer});
                // this.$vs.loading({container:'.reservation',scale:this.scaleLoadingContainer});
                // this.$vs.loading({container:'.guest-in-house',scale:this.scaleLoadingContainer});


                _context5.next = 3;
                return dashboardResource.roomStatistic2();

              case 3:
                _yield$dashboardResou5 = _context5.sent;
                data = _yield$dashboardResou5.data;
                _this5.arrival.actual = data.arrival != undefined ? data.arrival : {};
                _this5.arrival.expected = data.expected != undefined ? data.expected : {};
                _this5.departure.actual = data.departure != undefined ? data.departure : {};
                _this5.departure.expected = data.expected_departure != undefined ? data.expected_departure : {};
                _this5.reservation = data.reservation != undefined ? data.reservation : {};
                _this5.guestInHouse = data.in_house != undefined ? data.in_house : {};

                _this5.$vs.loading.close('.arrival>.con-vs-loading'); // this.$vs.loading.close('.departure>.con-vs-loading');
                // this.$vs.loading.close('.reservation>.con-vs-loading');
                // this.$vs.loading.close('.guest-in-house>.con-vs-loading');


              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    loadData: function loadData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // this.$vs.loading({container:'#layout--main',scale:this.global.scaleLoadingMainLayout});
                _this6.$vs.loading.close('#page-login>.con-vs-loading');

                _this6.roomStatistic();

                _this6.roomStatistic2();

                _this6.housekeepingStatus();

                _this6.expectedArrivalDeparture();

                _context6.next = 7;
                return _this6.roomSold();

              case 7:
                _this6.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getResolution: function getResolution() {
      this.resolutionWidth = screen.width;
    }
  },
  computed: {
    occupiedCurrent: function occupiedCurrent() {
      if (this.roomDataStatistic) {
        return this.roomDataStatistic.dataTable[6].rooms;
      }

      return 0;
    },
    occupiedTonight: function occupiedTonight() {
      if (this.roomDataStatistic) {
        return this.roomDataStatistic.dataTable[6].rooms - this.roomDataStatistic.dataTable[4].rooms + this.roomDataStatistic.dataTable[3].rooms;
      }

      return 0;
    },
    availableTonight: function availableTonight() {
      if (this.roomDataStatistic) {
        return this.roomDataStatistic.saleableRoom - this.occupiedTonight;
      }

      return 0;
    },
    availableCurrent: function availableCurrent() {
      if (this.roomDataStatistic) {
        return this.roomDataStatistic.saleableRoom - this.occupiedCurrent;
      }

      return 0;
    },
    occupancyTonight: function occupancyTonight() {
      if (this.roomDataStatistic) {
        return this.occupiedTonight / this.roomDataStatistic.saleableRoom * 100;
      }

      return 0;
    },
    occupancyCurrent: function occupancyCurrent() {
      if (this.roomDataStatistic) {
        return this.occupiedCurrent / this.roomDataStatistic.saleableRoom * 100;
      }

      return 0;
    }
  },
  mounted: function mounted() {
    this.loadData();
    window.addEventListener('resize', this.getResolution());
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "./node_modules/ag-grid-community/dist/styles/ag-grid.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../sass/ag-grid.scss */ "./resources/sass/ag-grid.scss");
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rowData: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: 35
    };
    this.columnDefs = [{
      headerName: this.$t('dashboard.expectedArrival.table.reservationNumber'),
      resizable: true,
      field: 'number',
      width: 90
    }, {
      headerName: this.$t('dashboard.expectedArrival.table.fullName'),
      resizable: true,
      field: 'full_name',
      width: 150
    }, {
      headerName: this.$t('dashboard.expectedArrival.table.arrival'),
      resizable: true,
      field: 'arrival',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_3__["formatDate"]
    }, {
      headerName: this.$t('dashboard.expectedArrival.table.departure'),
      resizable: true,
      field: 'departure',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_3__["formatDate"]
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "./node_modules/ag-grid-community/dist/styles/ag-grid.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../sass/ag-grid.scss */ "./resources/sass/ag-grid.scss");
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rowData: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: 35
    };
    this.columnDefs = [{
      headerName: this.$t('dashboard.expectedDeparture.table.folioNumber'),
      resizable: true,
      field: 'number',
      width: 90
    }, {
      headerName: this.$t('dashboard.expectedDeparture.table.fullName'),
      resizable: true,
      field: 'full_name',
      width: 150
    }, {
      headerName: this.$t('dashboard.expectedDeparture.table.arrival'),
      resizable: true,
      field: 'arrival',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_3__["formatDate"]
    }, {
      headerName: this.$t('dashboard.expectedDeparture.table.departure'),
      resizable: true,
      field: 'departure',
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_3__["formatDate"]
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-community/dist/styles/ag-grid.css */ "./node_modules/ag-grid-community/dist/styles/ag-grid.css");
/* harmony import */ var ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_community_dist_styles_ag_grid_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../sass/ag-grid.scss */ "./resources/sass/ag-grid.scss");
/* harmony import */ var _sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_ag_grid_scss__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rowData: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      defaultColDef: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: 35
    };
    this.columnDefs = [{
      headerName: this.$t('common.table.description'),
      field: 'Code',
      width: 250
    }, {
      headerName: this.$t('common.table.room'),
      field: 'rooms',
      width: 100
    }, {
      headerName: this.$t('common.table.pax'),
      field: 'pax',
      width: 100
    } // { headerName: this.$t('table.percent'), field: 'percent', width: 100},
    ]; //------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/ag-grid.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/ag-grid.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ag-theme-balham {\n  -webkit-font-smoothing: antialiased;\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  line-height: normal;\n}\n\n@font-face {\n  font-family: \"agGridBalham\";\n\n  src: url(\"data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABX4AAsAAAAAJ8wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAlEAAAReXgFf/09TLzIAAANcAAAAPgAAAFZWTFJaY21hcAAAA5wAAAHtAAAFgFIH7gFnbHlmAAAFjAAADLgAABYYNphscGhlYWQAABJEAAAALwAAADZ2zsSBaGhlYQAAEnQAAAAbAAAAJAfTBC1obXR4AAASkAAAABIAAAEUp/gAAGxvY2EAABKkAAAAZAAAAIwBFQakbWF4cAAAEwgAAAAfAAAAIAFbAHNuYW1lAAATKAAAATUAAAJG0OP3eXBvc3QAABRgAAABlwAAAlqez14KeJx9k09yElEQxr9hCBKISYwxloga/0bjOAwM/yQQCFKWZWXhwoULN3GhpZVylRO49gCWB/AUnsBy6coDeADLA/jrZpCYRXjFzJvur7/+ul8/BZJKSrSr3OTx/nMtHx4cvVdFeU1/5j++Dw7fvjlQcfaFL+/vooLwj5Z1Qy90pG+BgtfB51whzIW74X74IfwU/lAIalMx6LIesGLVeEZkr6uhVDkVsMXsm2qBDnm23bqmC1pwz1AjrZMzJmbkjNt6qptahWfgPH31QCUs4+zzHLNuaeUURKrb8NdR08VqrFUyrGpRe2jso6NDdAvvCr4dMkfEDPANdA68ofLexyd6iaI1r80i6xku4R/TZfuO/KvMmqHa8DfgN74tss7sDTLViLgHex3Uw6yH27pGdAOePmwdj256dBlkDYWJrrKzympUtkT9PT3TK8+6m8X0vYvTmrdQP7cPnC+l2uPWDlxjsHfRMLfaidwhV6QJ/pI2eL/TR33RV33XT/3Sb53B2sVrFfTg3jm1M0X6dxI9xNv+Z7VKC5zPSdT/iEXqbnhvYnyjrIOWrYxO603CPsKaOL6ETsMPUZNyGnlyRJ63hnWB1eU7Bn02m8YWa8n7PGIGbAIqdKfB05im85bS4Usw2W6qa8O71YLnop+W9dRu0rJ/2czbKVfAXOYdUVnd+/MI7xUsxjS3VD0qRbVx3MefonaezVRVUdX02bXJmvgtGJJpkzqmSmrcXLsBE5+q6yioZzdyndMw9Z3spM47LvaoAM1RdpMT75lN8gBtNhXjv2nbY10AAAB4nGNgZMpnnMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4Muh8NmF8AuVFgEqgRRAAAy9AKRgAAeJy102dSWzEUhuHXhW56TaN3Y2wwvRkb/rAM0hlSGNKZrDI70QZCvnPPyQLITDTz+Ls6o6srjSygDSjImhQhXySHtd+q5rJ6ge6sXuSX+iU6yeu5whU33KXa/b2qFS655jblst7fltPoEk9ZZEe9I811oKdjqrT0xh4b7LPLCXU2OWWdbWo0OGeLQ5qc6f28vl7UGtvp0He7tJIezdhLH/0MMMgQw4wwyhjjTPCYJ/raM42ZZIppZpjVuDnmWdAalvTcwzIr+l1Vr6wFtvOwdvTA8dbWDnaOq63Knna7e1Lf1Ea3a43zrcPm2T9M9h9ayX4KP6N3gZ2ms91eBvt/PA8H8iLYyb4Mx/IqVOV1aMmbYPO+DXtyFTbkOuzLu7Ar78OJfAh1+Rg25Sacym1Yl09hWz6HmnwJDfkazuVb2JLv4VB+hKbcBR1gyjm7KynvsCw4u1up6Ox+pTZn9y61Oyw7HJadDssuh2W3s/uYehyWJWcnmXodln0Oy36H5YDDctBhOeSwHHZYjjgsRx2WYw7LcYflhMPykdPdJAXdUlLQfSUF3VxSyPY16bCcclhOOyxnHJazDss5l+133mG1BYfVFh1WW3JYbdlhtRWXzbPqsrWVHTZ2zWFjKy4bs+6w96oum7PmKP8BU32drwAAAHic7RhpcBvVeb+3lmRZsm5pJdk6V4ety9YdS/Zu7MTGdu7DCRlC0jQHDTFH0tAwIYJCaCAhDDSZcEwzFDoDGZgpw7TTDNMmpUMZMFNi0hQ6JTD9AbQNaRtCyXQGFy393molxybl+l1pd9/33vve9773ve96j2EZ/LHPss8yHJNm1jMMeAlnYQ1E0xROkSixCqQYUgXVRlDbbZwXuKawAEULm4JohA+qVXyetzs45a/WyH97Np+1B6K5YqGIuIViIRKl/3yANXcMxqCpCWKDHdJ70nvTNfBIfwvPAWCbSI4HL3j5HNHpEF65de5/4CFxCqw6v9fg0JlanEZ/xMBNidJ+aNLYDf0Gu1rt9XVbPAC72KevRBo8cm2gEF77+JIfXF8nrUzDslMia7ToHQ691dI+4Gh1egycSazouuwhm75bbzWa250hm5+fR0UFsrweYR9hfAxj5TTRIqcJmOUiag7IRTFglgvOPDGcOHw4MQytM0vpY6X+5pXbG/2tynzkZdbGNGNFmYeHN/clz5xJ7hPI0X2JM2cS+6Q5lC2Zt23sNsbGdDJ5xA/S7bDRrcnQfcjRfdBkaN1Ge+R9KdAeK9JFykg/WoRLW1aPZbLZzNjq1+rAlrGRoVg8HhsaeYYCEENo7MnkU08ln5S/7LYZ6DIgzESXIenj+gj8Mg2enawTIQ2jQ5lmzTx9i1k7f7pSOb9z5we33EK2SteR4erzU1PTYz5gzzFWJsogmU4IpiBvzgmQDWS8YDfbDMAGggYKeWmbQHtToAGUH7C56vfTK7q7V6RJreyqVjwZDz5kr1x2SOteyz4KN01jpOUR7E88aU91D37wIXfj5yPEzDwKN8/mKf7VeWIDaBdfxlF/9SXS++XsSKlhWV1m8MJAfXo+0GBJdSVOcpcRp5PdNYsL9tzlvbQcms2BIodb2U2MCjXWyTBa0HBaYIs+qPkGmyNTyFNFJH+X1pc2SlUQJiZeeU6ncxkd6cG0w+iCF+GJMnZIv4W+iQmhtdXbFnEF0+mgK9zupeSb5DmSrEHRGSPDhHlz1qq8QN/jovgrQTghitVTgvA2yVQnp9+GHZPDrAr5RB6p3pND0sXE++8n4FKtVNayCO3JyvBMN52lLsByQ6gsekEEHNhSwK4Izi7vuT2A7eSnl+Ij8dhIghbxkcinkUJB/khNc2MjcTgiXRfOV7APsjJCXDqFH5IpRKSXKCr0RgqSnljiw3ExH57m+2XyMrUVmGG1l5kj8V9uZjN9iOKbssSq+BBYWPMhMDFbLrh1Gi2QQygM6SKYyJ+odExgQhSVLJtjbAkl08MsZMaYdYhfKGYxfNSiAOXMANGa7y/KXgbZ5AxgBDlY0KpaFmiuCAKIkCI4ppClgrVpwqgpqJwZEVBbUsAHNcCv32pZ+/SdoVazpc3tj/QlRhY8s2zl/GVpk1Wr05lMCbE3IXQv5CCybMmGzWsdtvbSSO+mcgLu6V7AgXfnkR8v4Esj5c2luDTpjl8V74om3LHhWFeUfJRm2cX3Xt0e9MbaAy4kHLbY7N3lVW0pm9PutffF+xIP+67OkzVCn83uVbe0x8ubyiMl6ff+NXkyfGMfGwxiS+9I6WxHF1J0J6JdcSymdfUYyzNtTIopo6TkCKuISH25eDBWcgZSl05NIhqUBioZSgmViqOSQLv1AIqGWi1UG/JYcMP1N+1YszSjyEL8zTgsvP9GnyKLZXfyVADDpQ2l0oadG3p6NvwxNrxyOCZ/WL6x+MUh3mCcW1qtLHxsU5NI+sYHawv3uG9ZQlfr60ESNTp/gBglEiO1ouF7kmwS8wn0gqCs0wOaYkFZbKQPAiqbkjPYi/maahTybBI6nQNFZ/MJAAIaZ2HA1Um2V081yxCqSK2XnIt2e8rdbq3+uwfHdpR0za50n7c7NCiate50n6c7tLdrRUe3p5R2a80KP2RK1mdtXaNVZt5MPlG0WvqW0FBsh6SHS4y+tgZyoeFfrLiaNoz4vOzbuximyOez3GVv+EvqU7IvmvZIV65MVWo/USkFpUR2mmfkaXm0uT6mnxlkRr5uxmZFblQYc8Kzym+Ymx2tVGCX9Ar0SPsbkB6hS9IoHP9m6Vj1n4IgiMrbiGfTe1jz1tTLk7jisf8sCHWvXf037mBdD3ewbSg5M913dMh061muGMXVFqMkKsJ+aZd4QDoLkcnJdAXelbyVNHlQOCEcgAhEpLOTGdyBTJ3WdowDMWa1rNMoVg0KGN0blWpBhHwkmkY9NwCqtBdzXhHVFVXdGpSxsJF6u5TSQUfbsAOb07Ldy1R44sRYGWhraWkf96zoCOU0aofLomctYVO70WDi43t6Yr7xpNPDxTbFFnm2dXHtXNzbDJqwy66z0CHxInA2C+hYC29ot7Xo5qUinWRQq1e1Le+MeLZ5rK2tfRF+yG1h+bAlZI9u7E6H4m2c0b8tdU855QOtH6neXe72e7U6lW9TkkOqVoNxScqTt8ljAtbQtcn0Eqvp/zK5kkxqNnofe9/n/AZDrYzGaRW+ssXhW1TqGoTRaoWbJxIT8GJiIgGuqanq5NTUAoTJOmxF77FuyocAPokMWsU6LPGZeHpq2j6qpMqoGTwyWH3UQDThLsDsoPgP9q2hHct2wO+UcuIsS8vHaoWS4yTJ6/X8G9A66n82WX0APbDygktEexDrex/EmCbPp0ykTAuvN8kT/bA237/easJiO7zwFju0ffkOZewzmLvV7LKejaA51w43UDqYevts6mA//KIfobe7DsLSvfFTp+J74WR1Ek7WYJyZ0rmL3cU4mAQzh5kr5yAMUFXjHLLaoa5R7SoKhKNVjVrRQwxEsm4hGm2NRrpACw45BnWBwwcgjyoUOTlyccUITF27atkNLfpYZNHI81dfO69vLiFh/4339S8dnn+NVhuOLF98cvFYjG9uXjM0uvqCX61e0jcwmktHYbf0YXa8M2Y0W08O9HRI+0I6p7tQWq4Vchm7w/KZj/0eyaWPrdt8zdI5+bDdIfQ8tnL1aP/GgkgSsfuXji1akoqrYslVI2PLHownX+0bGaoEQxqV2wG3SQ+b2sKRXKn8GvE6pH3iof55nUmVwHZ29Arlz1qUfR1nb0Pt62B6UTLy4U8+ENr5zyf/vCbjsKmDkVwBAsEINhXKYA/ksxkHIqrJdr3B5Vvlcxn0lWBPEB+4VCunzC5X0OUCnaR3h0JuEXYJ7nCY9VhsToPFYnDaLIgkjSqDjuPH7PQ78ak+HnbBcXeoUgm5pVFXuOGz9yDPQYxuDNSzxgLuAS1EoNuloXkD9TRoTzS98IEmgquC2v4VOUdWTi1h2SEgTSqtp9RV3Nhs1LssnA289rmD38HsgrXZk9xDGDj+YtXqm01HCx0ZM7ibOQLN5Ehzi85osJjegNsPYS5l1HfotLoNbq+zzWoxSO+2j+k3q1WufLyb0yEF8oDJZDU4jhpYtk36q9oWdeYsD2Gk0zRb3qDLabksbvtxJ/qZIWYBs5K5htnAbPkfsTtgdsgXJyoavn2Y5tUsw46JoIavXTk4ZMGEbVw2H1VrsvliDFAiWUw87Fmq3WE1r7FnixHenv2iwA67q698eAGjrrbaDBiD/fDLlsTYyoQ2NtSxU5sYG0u0zA1l3F6ovgp7bgOoiLkFmAnsFuHkboqP4uiJ3fHCnKvu+MJQ/2n1VbUW0S+cMptwMrgNjDJx7c0dV8WJNrES5wGVxuqIeYfm3P7r0fwdnxTC68U9e4I0IQDYU4HbG/pxDs+19H5Dud0wUXXwU3GYZt1uBGmdXkIV4NK9O7fPmz9/3vadYKpD9+7asrHU21vauOUCAuUyAuw52iFdnIkszMChQG/9vF/nRfha3My6e5FxviqL8NwVblW+Mt/S6NjMkZTY7FyJ5lfo/DEwcZg0oWePstulswdEaRfsFw+kK5IX3q2kJycx4zp7gGZLB2iaNDmp0BnHnKAVvTID5gDm2TYHOhk8Gavqnp51Vp9fkQ6S4WBa+vl46fTp0vhKJPUOhKR36CkfQu3j5dOny+NwuHHfpiKH5XM6KXJFtkm6KKd6ZAtN3xFgZuMBPRNjvpqopfV31coGzov1Mz+HONKhn+HRd4AcQSB5Dww0aCWJje6yFWVwQg6AVqFx93QDO477Hsf8m7EGMdHG0wxGHXpYRS+LscWK+Y2XoMOKaqbzoSjQzIeTTZteltZgGqT4Y4SECPkRzDlPVDIkTZwnphTncSz/9saQkBT4rTFnQNNsdwtJeKJzsQebzElX1yqL2exD2OdXO9o2zmG34WAVOSpNfIAEQU2OQvE8kW7FVAbxfTIhfZsp1R4abUNCo36ZjoNVZRIda5CO6Fu1tiNdxhX+FyXYf3Z4nGNgZGBgAOJNb47Mjue3+crAzfwCKBDF+XhfA4JmYGB+CRJn4GBgAvEAeqIMgAB4nGNgZGBgfsHAACH//2d+ycDIgApcAXBnBQgAeJxjYGBgYH4xdDA9AADYnCd6AAB4nGNgAIIZDBcYnjE6MEYxLmF8xaTBFMVUw9THdIPpEzMHswzzBhYNlgKWLpYrrEGsOayT2GTYlrE9Ymdgl2K3YI9hf8PhxrGBM4xzDhcTlxpXAFcKVxlXF9cMbh7SIQDoHxaseJxjYGRgYHBlSGfgYQABJiDmAkIGhv9gPgMAGrQBzwB4nHWPP07DMBjFX2haRIsQEhJiwxMLUvpnYOjYodk7dGBzGydtlcSR41bqxjE4Acdg5AicgkPwEr6hQqotOT///N4nBcAtvhCgWQGu27NZF7jk7Y87pDvhkPwo3MUAz8I9+hfhPu1MeMBmwQlBeEXzgDfhC9zgXbhD/yEckj+Fu7jHt3CP/ke4j2UQCg/wFLzqLHbbZKbzjS4WJtvn2p2qU14aV29tqcbR6FTHpjROe5Oo1VHVh2zifapSZws1t6U3eW5V5ezOrH208b6aDoep+GhtC2hkiOGwRcI/18ix4VlgAcOXPe+ar+dS5/ySbYea3qKEwhgRRmfTMdNl29Dw/CZsrHDkWePAzoTWI+U9ZcayoTBvJzfpnNvSVO3bjmZNH3F206owxZA7/ZePmOKkX1qXaMkAAAB4nG2R6W7bMBCE/cWSrThp47ptet/3obbpfadX+h40RclEJFIgKR95+hJ1ESBA9w9nBsvZWbK30VvXqPf/OmCDPgkpA4ZkbDJii21OcZodxpxhwlnOcZ5dLnCRS1zmCle5xnVucJNb3OYOd7nHfR7wkEc85glPyXnGc16wx0te8Zo3vOUd7/nARz7xmS98ZZ9vfOcHP/nFAb97W6KqnKpE0NYMhHN24fvCy4EURqo6lTPhwljOlDyc2mX+F6hi91jQplBBuUYbEdTkWO7Mv85taWvr8lZH4oaRdI3xI2lNcEIGVSTStqtUOut9UigvM7VsRfQsNtVK5b4WftaPaFDqOo5JS+18SCqn27RytmuT2BCSWpVhUGsT52XrI98b1lYU2lRZI5a60UcqaZTpshh0zYw1asvYkIu6tgtVpG10Uv1Wm7TVcxvGLl63+bQLwZrcluXOScGkTlezkHgxVyPfRJe8sAuTrWFMFuLKk+CUOvlGWWfWERFUOBQBjcWwwCOpmXHIlGX8zYKGjpYVJUfMe70/6zKeWwA=\") format(\"woff\");\n\n  font-weight: normal;\n\n  font-style: normal;\n}\n\n.ag-theme-balham .ag-icon {\n  font-family: \"agGridBalham\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ag-theme-balham .ag-icon-aggregation:before {\n  content: \"\\f101\";\n}\n\n.ag-theme-balham .ag-icon-arrows:before {\n  content: \"\\f102\";\n}\n\n.ag-theme-balham .ag-icon-asc:before {\n  content: \"\\f103\";\n}\n\n.ag-theme-balham .ag-icon-cancel:before {\n  content: \"\\f104\";\n}\n\n.ag-theme-balham .ag-icon-chart:before {\n  content: \"\\f105\";\n}\n\n.ag-theme-balham .ag-icon-color-picker:before {\n  content: \"\\f109\";\n}\n\n.ag-theme-balham .ag-icon-columns:before {\n  content: \"\\f10a\";\n}\n\n.ag-theme-balham .ag-icon-contracted:before {\n  content: \"\\f10b\";\n}\n\n.ag-theme-balham .ag-icon-copy:before {\n  content: \"\\f10c\";\n}\n\n.ag-theme-balham .ag-icon-cross:before {\n  content: \"\\f10d\";\n}\n\n.ag-theme-balham .ag-icon-desc:before {\n  content: \"\\f10e\";\n}\n\n.ag-theme-balham .ag-icon-expanded:before {\n  content: \"\\f10f\";\n}\n\n.ag-theme-balham .ag-icon-eye-slash:before {\n  content: \"\\f110\";\n}\n\n.ag-theme-balham .ag-icon-eye:before {\n  content: \"\\f111\";\n}\n\n.ag-theme-balham .ag-icon-filter:before {\n  content: \"\\f112\";\n}\n\n.ag-theme-balham .ag-icon-first:before {\n  content: \"\\f113\";\n}\n\n.ag-theme-balham .ag-icon-grip:before {\n  content: \"\\f114\";\n}\n\n.ag-theme-balham .ag-icon-group:before {\n  content: \"\\f115\";\n}\n\n.ag-theme-balham .ag-icon-last:before {\n  content: \"\\f116\";\n}\n\n.ag-theme-balham .ag-icon-left:before {\n  content: \"\\f117\";\n}\n\n.ag-theme-balham .ag-icon-linked:before {\n  content: \"\\f118\";\n}\n\n.ag-theme-balham .ag-icon-loading:before {\n  content: \"\\f119\";\n}\n\n.ag-theme-balham .ag-icon-maximize:before {\n  content: \"\\f11a\";\n}\n\n.ag-theme-balham .ag-icon-menu:before {\n  content: \"\\f11b\";\n}\n\n.ag-theme-balham .ag-icon-minimize:before {\n  content: \"\\f11c\";\n}\n\n.ag-theme-balham .ag-icon-next:before {\n  content: \"\\f11d\";\n}\n\n.ag-theme-balham .ag-icon-none:before {\n  content: \"\\f11e\";\n}\n\n.ag-theme-balham .ag-icon-not-allowed:before {\n  content: \"\\f11f\";\n}\n\n.ag-theme-balham .ag-icon-paste:before {\n  content: \"\\f120\";\n}\n\n.ag-theme-balham .ag-icon-pin:before {\n  content: \"\\f121\";\n}\n\n.ag-theme-balham .ag-icon-pivot:before {\n  content: \"\\f122\";\n}\n\n.ag-theme-balham .ag-icon-previous:before {\n  content: \"\\f123\";\n}\n\n.ag-theme-balham .ag-icon-right:before {\n  content: \"\\f126\";\n}\n\n.ag-theme-balham .ag-icon-save:before {\n  content: \"\\f127\";\n}\n\n.ag-theme-balham .ag-icon-small-down:before {\n  content: \"\\f128\";\n}\n\n.ag-theme-balham .ag-icon-small-left:before {\n  content: \"\\f129\";\n}\n\n.ag-theme-balham .ag-icon-small-right:before {\n  content: \"\\f12a\";\n}\n\n.ag-theme-balham .ag-icon-small-up:before {\n  content: \"\\f12b\";\n}\n\n.ag-theme-balham .ag-icon-tick:before {\n  content: \"\\f12c\";\n}\n\n.ag-theme-balham .ag-icon-tree-closed:before {\n  content: \"\\f12d\";\n}\n\n.ag-theme-balham .ag-icon-tree-indeterminate:before {\n  content: \"\\f12e\";\n}\n\n.ag-theme-balham .ag-icon-tree-open:before {\n  content: \"\\f12f\";\n}\n\n.ag-theme-balham .ag-icon-unlinked:before {\n  content: \"\\f130\";\n}\n\n.ag-theme-balham .ag-icon-row-drag:before {\n  content: \"\\f114\";\n}\n\n.ag-theme-balham .ag-right-arrow:before {\n  content: \"\\f117\";\n}\n\n.ag-theme-balham .ag-right-arrow:before {\n  content: \"\\f126\";\n}\n\n.ag-theme-balham .ag-root-wrapper {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham [class^=ag-], .ag-theme-balham [class^=ag-]:focus, .ag-theme-balham [class^=ag-]:after, .ag-theme-balham [class^=ag-]:before {\n  box-sizing: border-box;\n  outline: none;\n}\n\n.ag-theme-balham [class^=ag-]::-ms-clear {\n  display: none;\n}\n\n.ag-theme-balham .ag-checkbox .ag-input-wrapper,\n.ag-theme-balham .ag-radio-button .ag-input-wrapper {\n  overflow: visible;\n}\n\n.ag-theme-balham .ag-range-field .ag-input-wrapper {\n  height: 100%;\n}\n\n.ag-theme-balham .ag-toggle-button {\n  flex: none;\n  width: unset;\n  min-width: unset;\n}\n\n.ag-theme-balham .ag-ltr .ag-label-align-right .ag-label {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-label-align-right .ag-label {\n  margin-right: 4px;\n}\n\n.ag-theme-balham input[class^=ag-] {\n  margin: 0;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham textarea[class^=ag-],\n.ag-theme-balham select[class^=ag-] {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham input[class^=ag-]:not([type]),\n.ag-theme-balham input[class^=ag-][type=text],\n.ag-theme-balham input[class^=ag-][type=number],\n.ag-theme-balham input[class^=ag-][type=tel],\n.ag-theme-balham input[class^=ag-][type=date],\n.ag-theme-balham input[class^=ag-][type=datetime-local],\n.ag-theme-balham textarea[class^=ag-] {\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #95A5A6;\n  border-color: var(--ag-input-border-color, #95A5A6);\n}\n\n.ag-theme-balham input[class^=ag-]:not([type]):disabled,\n.ag-theme-balham input[class^=ag-][type=text]:disabled,\n.ag-theme-balham input[class^=ag-][type=number]:disabled,\n.ag-theme-balham input[class^=ag-][type=tel]:disabled,\n.ag-theme-balham input[class^=ag-][type=date]:disabled,\n.ag-theme-balham input[class^=ag-][type=datetime-local]:disabled,\n.ag-theme-balham textarea[class^=ag-]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n  background-color: #ebebeb;\n  background-color: var(--ag-input-disabled-background-color, #ebebeb);\n  border-color: rgba(149, 165, 166, 0.3);\n  border-color: var(--ag-input-disabled-border-color, rgba(149, 165, 166, 0.3));\n}\n\n.ag-theme-balham input[class^=ag-]:not([type]):focus,\n.ag-theme-balham input[class^=ag-][type=text]:focus,\n.ag-theme-balham input[class^=ag-][type=number]:focus,\n.ag-theme-balham input[class^=ag-][type=tel]:focus,\n.ag-theme-balham input[class^=ag-][type=date]:focus,\n.ag-theme-balham input[class^=ag-][type=datetime-local]:focus,\n.ag-theme-balham textarea[class^=ag-]:focus {\n  outline: none;\n  box-shadow: 0 0 2px 1px #719ECE;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham input[class^=ag-][type=number] {\n  -moz-appearance: textfield;\n}\n\n.ag-theme-balham input[class^=ag-][type=number]::-webkit-outer-spin-button, .ag-theme-balham input[class^=ag-][type=number]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.ag-theme-balham input[class^=ag-][type=range] {\n  padding: 0;\n}\n\n.ag-theme-balham input[class^=ag-][type=button]:focus, .ag-theme-balham button[class^=ag-]:focus {\n  box-shadow: 0 0 2px 1px #719ECE;\n}\n\n.ag-theme-balham .ag-drag-handle {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-list-item, .ag-theme-balham .ag-virtual-list-item {\n  height: 28px;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-virtual-list-item:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-virtual-list-item:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-select-list {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.ag-theme-balham .ag-list-item {\n  display: flex;\n  align-items: center;\n}\n\n.ag-theme-balham .ag-list-item.ag-active-item {\n  background-color: #ECF0F1;\n  background-color: var(--ag-row-hover-color, #ECF0F1);\n}\n\n.ag-theme-balham .ag-select-list-item {\n  padding-left: 4px;\n  padding-right: 4px;\n  cursor: default;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.ag-theme-balham .ag-select-list-item span {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.ag-theme-balham .ag-select .ag-picker-field-wrapper {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  min-height: 28px;\n  cursor: default;\n}\n\n.ag-theme-balham .ag-select:not(.ag-cell-editor) {\n  height: 28px;\n}\n\n.ag-theme-balham .ag-select .ag-picker-field-display {\n  margin: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-theme-balham .ag-select .ag-picker-field-icon {\n  display: flex;\n  align-items: center;\n}\n\n.ag-theme-balham .ag-select.ag-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-rich-select {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n}\n\n.ag-theme-balham .ag-rich-select-list {\n  width: 100%;\n  min-width: 200px;\n  height: 182px;\n}\n\n.ag-theme-balham .ag-rich-select-value {\n  padding: 0 4px 0 12px;\n  height: 28px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-rich-select-virtual-list-item {\n  cursor: default;\n  height: 28px;\n}\n\n.ag-theme-balham .ag-rich-select-virtual-list-item:hover {\n  background-color: #ECF0F1;\n  background-color: var(--ag-row-hover-color, #ECF0F1);\n}\n\n.ag-theme-balham .ag-rich-select-row {\n  padding-left: 12px;\n}\n\n.ag-theme-balham .ag-rich-select-row-selected {\n  background-color: #b7e4ff;\n  background-color: var(--ag-selected-row-background-color, #b7e4ff);\n}\n\n.ag-theme-balham .ag-row-drag,\n.ag-theme-balham .ag-selection-checkbox,\n.ag-theme-balham .ag-group-expanded,\n.ag-theme-balham .ag-group-contracted {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-ltr .ag-row-drag, .ag-theme-balham .ag-ltr .ag-selection-checkbox, .ag-theme-balham .ag-ltr .ag-group-expanded, .ag-theme-balham .ag-ltr .ag-group-contracted {\n  margin-right: 12px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-drag, .ag-theme-balham .ag-rtl .ag-selection-checkbox, .ag-theme-balham .ag-rtl .ag-group-expanded, .ag-theme-balham .ag-rtl .ag-group-contracted {\n  margin-left: 12px;\n}\n\n.ag-theme-balham .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {\n  height: 26px;\n  display: flex;\n  align-items: center;\n  flex: none;\n}\n\n.ag-theme-balham .ag-group-expanded,\n.ag-theme-balham .ag-group-contracted {\n  cursor: pointer;\n}\n\n.ag-theme-balham .ag-group-title-bar-icon {\n  cursor: pointer;\n  flex: none;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-ltr .ag-group-child-count {\n  margin-left: 2px;\n}\n\n.ag-theme-balham .ag-rtl .ag-group-child-count {\n  margin-right: 2px;\n}\n\n.ag-theme-balham .ag-group-title-bar {\n  background-color: #e2e9eb;\n  background-color: var(--ag-subheader-background-color, #e2e9eb);\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-group-toolbar {\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-disabled-group-title-bar, .ag-theme-balham .ag-disabled-group-container {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .group-item {\n  margin: 2px 0;\n}\n\n.ag-theme-balham .ag-label {\n  white-space: nowrap;\n}\n\n.ag-theme-balham .ag-ltr .ag-label {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-label {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-label-align-top .ag-label {\n  margin-bottom: 2px;\n}\n\n.ag-theme-balham .ag-ltr .ag-slider-field, .ag-theme-balham .ag-ltr .ag-angle-select-field {\n  margin-right: 8px;\n}\n\n.ag-theme-balham .ag-rtl .ag-slider-field, .ag-theme-balham .ag-rtl .ag-angle-select-field {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-angle-select-parent-circle {\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham .ag-angle-select-child-circle {\n  top: 4px;\n  left: 12px;\n  width: 6px;\n  height: 6px;\n  margin-left: -3px;\n  margin-top: -4px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.54);\n  background-color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-picker-field-wrapper {\n  border: 1px solid;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 5px;\n}\n\n.ag-theme-balham .ag-picker-field-wrapper:focus {\n  box-shadow: 0 0 2px 1px #719ECE;\n}\n\n.ag-theme-balham .ag-picker-field-button {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-dialog.ag-color-dialog {\n  border-radius: 5px;\n}\n\n.ag-theme-balham .ag-color-picker .ag-picker-field-display {\n  height: 16px;\n}\n\n.ag-theme-balham .ag-color-panel {\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-spectrum-color {\n  background-color: red;\n  border-radius: 2px;\n}\n\n.ag-theme-balham .ag-spectrum-tools {\n  padding: 10px;\n}\n\n.ag-theme-balham .ag-spectrum-sat {\n  background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));\n}\n\n.ag-theme-balham .ag-spectrum-val {\n  background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));\n}\n\n.ag-theme-balham .ag-spectrum-dragger {\n  border-radius: 12px;\n  height: 12px;\n  width: 12px;\n  border: 1px solid white;\n  background: black;\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);\n}\n\n.ag-theme-balham .ag-spectrum-hue-background {\n  border-radius: 2px;\n}\n\n.ag-theme-balham .ag-spectrum-alpha-background {\n  border-radius: 2px;\n}\n\n.ag-theme-balham .ag-spectrum-tool {\n  margin-bottom: 10px;\n  height: 11px;\n  border-radius: 2px;\n}\n\n.ag-theme-balham .ag-spectrum-slider {\n  margin-top: -12px;\n  width: 13px;\n  height: 13px;\n  border-radius: 13px;\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n\n.ag-theme-balham .ag-recent-color {\n  margin: 0 3px;\n}\n\n.ag-theme-balham .ag-recent-color:first-child {\n  margin-left: 0;\n}\n\n.ag-theme-balham .ag-recent-color:last-child {\n  margin-right: 0;\n}\n\n.ag-theme-balham.ag-dnd-ghost {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  z-index: 10;\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n  height: 32px !important;\n  line-height: 32px;\n  margin: 0;\n  padding: 0 8px;\n  transform: translateY(8px);\n}\n\n.ag-theme-balham .ag-dnd-ghost-icon {\n  margin-right: 4px;\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n}\n\n.ag-theme-balham .ag-popup-child:not(.ag-tooltip-custom) {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n.ag-dragging-range-handle .ag-theme-balham .ag-dialog, .ag-dragging-fill-handle .ag-theme-balham .ag-dialog {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-dialog {\n  border-radius: 2px;\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-panel {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham .ag-panel-title-bar {\n  background-color: #f5f7f7;\n  background-color: var(--ag-header-background-color, #f5f7f7);\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-header-foreground-color, rgba(0, 0, 0, 0.54));\n  height: 32px;\n  padding: 4px 12px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-ltr .ag-panel-title-bar-button {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-panel-title-bar-button {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-tooltip {\n  background-color: #f5f7f7;\n  background-color: var(--ag-header-background-color, #f5f7f7);\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n  padding: 4px;\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 2px;\n  transition: opacity 1s;\n}\n\n.ag-theme-balham .ag-tooltip.ag-tooltip-hiding {\n  opacity: 0;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-1 {\n  padding-left: 20px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-1 {\n  padding-right: 20px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-2 {\n  padding-left: 40px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-2 {\n  padding-right: 40px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-3 {\n  padding-left: 60px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-3 {\n  padding-right: 60px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-4 {\n  padding-left: 80px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-4 {\n  padding-right: 80px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-5 {\n  padding-left: 100px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-5 {\n  padding-right: 100px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-6 {\n  padding-left: 120px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-6 {\n  padding-right: 120px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-7 {\n  padding-left: 140px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-7 {\n  padding-right: 140px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-8 {\n  padding-left: 160px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-8 {\n  padding-right: 160px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-indent-9 {\n  padding-left: 180px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-indent-9 {\n  padding-right: 180px;\n}\n\n.ag-theme-balham .ag-column-select-header-icon {\n  cursor: pointer;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-header-icon:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-header-icon:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 0px;\n  left: 0px;\n  display: block;\n  width: calc(100% - 0px);\n  height: calc(100% - 0px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-balham .ag-ltr .ag-column-select-column-label:not(:last-child) {\n  margin-right: 6px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-balham .ag-rtl .ag-column-select-column-label:not(:last-child) {\n  margin-left: 6px;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-column-group:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-column-group:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: -2px;\n  left: -2px;\n  display: block;\n  width: calc(100% - -4px);\n  height: calc(100% - -4px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-column:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-column:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: -2px;\n  left: -2px;\n  display: block;\n  width: calc(100% - -4px);\n  height: calc(100% - -4px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-column-select-column-group:not(:last-child),\n.ag-theme-balham .ag-column-select-column:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.ag-theme-balham .ag-column-select-column-readonly,\n.ag-theme-balham .ag-column-select-column-group-readonly {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-select-add-group-indent {\n  margin-left: 24px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-select-add-group-indent {\n  margin-right: 24px;\n}\n\n.ag-theme-balham .ag-column-select-list {\n  padding: 6px 6px;\n}\n\n.ag-theme-balham .ag-rtl {\n  text-align: right;\n}\n\n.ag-theme-balham .ag-root-wrapper {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 2px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {\n  padding-left: 40px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {\n  padding-right: 40px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-1 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-1 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {\n  padding-left: 68px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {\n  padding-right: 68px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 56px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 56px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-2 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-2 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {\n  padding-left: 96px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {\n  padding-right: 96px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 84px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 84px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-3 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-3 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {\n  padding-left: 124px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {\n  padding-right: 124px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 112px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 112px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-4 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-4 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {\n  padding-left: 152px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {\n  padding-right: 152px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 140px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 140px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-5 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-5 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {\n  padding-left: 180px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {\n  padding-right: 180px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 168px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 168px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-6 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-6 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {\n  padding-left: 208px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {\n  padding-right: 208px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 196px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 196px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-7 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-7 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {\n  padding-left: 236px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {\n  padding-right: 236px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 224px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 224px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-8 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-8 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {\n  padding-left: 264px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {\n  padding-right: 264px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 252px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 252px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-9 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-9 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {\n  padding-left: 292px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {\n  padding-right: 292px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 280px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 280px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-10 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-10 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {\n  padding-left: 320px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {\n  padding-right: 320px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 308px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 308px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-11 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-11 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {\n  padding-left: 348px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {\n  padding-right: 348px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 336px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 336px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-12 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-12 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {\n  padding-left: 376px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {\n  padding-right: 376px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 364px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 364px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-13 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-13 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {\n  padding-left: 404px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {\n  padding-right: 404px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 392px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 392px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-14 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-14 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {\n  padding-left: 432px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {\n  padding-right: 432px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 420px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 420px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-15 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-15 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {\n  padding-left: 460px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {\n  padding-right: 460px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 448px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 448px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-16 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-16 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {\n  padding-left: 488px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {\n  padding-right: 488px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 476px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 476px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-17 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-17 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {\n  padding-left: 516px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {\n  padding-right: 516px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 504px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 504px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-18 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-18 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {\n  padding-left: 544px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {\n  padding-right: 544px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 532px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 532px;\n}\n\n.ag-theme-balham .ag-ltr .ag-row-level-19 .ag-row-group-leaf-indent {\n  margin-left: 28px;\n}\n\n.ag-theme-balham .ag-rtl .ag-row-level-19 .ag-row-group-leaf-indent {\n  margin-right: 28px;\n}\n\n.ag-theme-balham .ag-cell {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n.ag-theme-balham .ag-value-change-delta {\n  padding-right: 2px;\n}\n\n.ag-theme-balham .ag-value-change-delta-up {\n  color: #43a047;\n  color: var(--ag-value-change-delta-up-color, #43a047);\n}\n\n.ag-theme-balham .ag-value-change-delta-down {\n  color: #e53935;\n  color: var(--ag-value-change-delta-down-color, #e53935);\n}\n\n.ag-theme-balham .ag-value-change-value {\n  background-color: transparent;\n  border-radius: 1px;\n  padding-left: 1px;\n  padding-right: 1px;\n  transition: background-color 1s;\n}\n\n.ag-theme-balham .ag-value-change-value-highlight {\n  background-color: rgba(22, 160, 133, 0.5);\n  background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5));\n  transition: background-color 0.1s;\n}\n\n.ag-theme-balham .ag-cell-data-changed {\n  background-color: rgba(22, 160, 133, 0.5) !important;\n  background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5)) !important;\n}\n\n.ag-theme-balham .ag-cell-data-changed-animation {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-cell-highlight {\n  background-color: #0091EA !important;\n  background-color: var(--ag-range-selection-highlight-color, #0091EA) !important;\n}\n\n.ag-theme-balham .ag-row {\n  height: 28px;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  color: #000;\n  color: var(--ag-data-color, var(--ag-foreground-color, #000));\n  border-width: 1px;\n  border-color: #d9dcde;\n  border-color: var(--ag-row-border-color, #d9dcde);\n}\n\n.ag-theme-balham .ag-row:not(.ag-row-first) {\n  border-top-style: solid;\n}\n\n.ag-theme-balham .ag-row.ag-row-last {\n  border-bottom-style: solid;\n}\n\n.ag-theme-balham .ag-row-highlight-above::after, .ag-theme-balham .ag-row-highlight-below::after {\n  content: \"\";\n  position: absolute;\n  width: calc(100% - 1px);\n  height: 1px;\n  background-color: #0091EA;\n  background-color: var(--ag-range-selection-border-color, #0091EA);\n  left: 1px;\n}\n\n.ag-theme-balham .ag-row-highlight-above::after {\n  top: -1px;\n}\n\n.ag-theme-balham .ag-row-highlight-above.ag-row-first::after {\n  top: 0;\n}\n\n.ag-theme-balham .ag-row-highlight-below::after {\n  bottom: 0px;\n}\n\n.ag-theme-balham .ag-row-odd {\n  background-color: #fcfdfe;\n  background-color: var(--ag-odd-row-background-color, #fcfdfe);\n}\n\n.ag-theme-balham .ag-horizontal-left-spacer:not(.ag-scroller-corner) {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-horizontal-right-spacer:not(.ag-scroller-corner) {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-row-hover {\n  background-color: #ECF0F1;\n  background-color: var(--ag-row-hover-color, #ECF0F1);\n}\n\n.ag-theme-balham .ag-ltr .ag-right-aligned-cell {\n  text-align: right;\n}\n\n.ag-theme-balham .ag-rtl .ag-right-aligned-cell {\n  text-align: left;\n}\n\n.ag-theme-balham .ag-ltr .ag-right-aligned-cell .ag-cell-value {\n  margin-left: auto;\n}\n\n.ag-theme-balham .ag-rtl .ag-right-aligned-cell .ag-cell-value {\n  margin-right: auto;\n}\n\n.ag-theme-balham .ag-cell {\n  border: 1px solid transparent;\n  line-height: 26px;\n  padding-left: 11px;\n  padding-right: 11px;\n}\n\n.ag-theme-balham .ag-row > .ag-cell-wrapper {\n  padding-left: 11px;\n  padding-right: 11px;\n}\n\n.ag-theme-balham .ag-row-dragging {\n  cursor: move;\n}\n\n.ag-theme-balham .ag-row-dragging {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-cell-inline-editing {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n  padding: 0;\n  height: 28px;\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n}\n\n.ag-theme-balham .ag-popup-editor {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n  padding: 0;\n}\n\n.ag-theme-balham .ag-large-text-input {\n  height: auto;\n  padding: 12px;\n}\n\n.ag-theme-balham .ag-details-row {\n  padding: 20px;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n}\n\n.ag-theme-balham .ag-overlay-loading-wrapper {\n  background-color: rgba(255, 255, 255, 0.66);\n  background-color: var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66));\n}\n\n.ag-theme-balham .ag-overlay-loading-center {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n  padding-top: 30px;\n}\n\n.ag-theme-balham .ag-loading {\n  padding-left: 12px;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n\n.ag-theme-balham .ag-loading-icon {\n  padding-right: 12px;\n}\n\n.ag-theme-balham .ag-icon-loading {\n  -webkit-animation-name: spin;\n          animation-name: spin;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.ag-theme-balham .ag-floating-top {\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-floating-bottom {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-ltr .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n.ag-theme-balham .ag-rtl .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-cell {\n  border-right-width: 1px;\n}\n\n.ag-theme-balham .ag-rtl .ag-cell {\n  border-left-width: 1px;\n}\n\n.ag-theme-balham .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-row-selected {\n  background-color: #b7e4ff;\n  background-color: var(--ag-selected-row-background-color, #b7e4ff);\n}\n\n.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus) {\n  background-color: rgba(0, 145, 234, 0.2);\n  background-color: var(--ag-range-selection-background-color, rgba(0, 145, 234, 0.2));\n}\n\n.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n  background-color: var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1));\n}\n\n.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n  background-color: var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1));\n}\n\n.ag-theme-balham .ag-cell-range-selected-1:not(.ag-cell-focus) {\n  background-color: rgba(0, 145, 234, 0.2);\n  background-color: var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(0, 145, 234, 0.2)));\n}\n\n.ag-theme-balham .ag-cell-range-selected-2:not(.ag-cell-focus) {\n  background-color: rgba(0, 145, 234, 0.36);\n  background-color: var(--ag-range-selection-background-color-2, rgba(0, 145, 234, 0.36));\n}\n\n.ag-theme-balham .ag-cell-range-selected-3:not(.ag-cell-focus) {\n  background-color: rgba(0, 145, 234, 0.488);\n  background-color: var(--ag-range-selection-background-color-3, rgba(0, 145, 234, 0.488));\n}\n\n.ag-theme-balham .ag-cell-range-selected-4:not(.ag-cell-focus) {\n  background-color: rgba(0, 145, 234, 0.5904);\n  background-color: var(--ag-range-selection-background-color-4, rgba(0, 145, 234, 0.5904));\n}\n\n.ag-theme-balham .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #0091EA;\n  border-top-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #0091EA;\n  border-right-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #0091EA;\n  border-bottom-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #0091EA;\n  border-left-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-balham .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-balham .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-balham .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-balham .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-balham .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {\n  border: 1px solid;\n  border-color: #0091EA;\n  border-color: var(--ag-range-selection-border-color, #0091EA);\n  outline: initial;\n}\n\n.ag-theme-balham .ag-cell.ag-selection-fill-top,\n.ag-theme-balham .ag-cell.ag-selection-fill-top.ag-cell-range-selected {\n  border-top: 1px dashed;\n  border-top-color: #0091EA;\n  border-top-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-balham .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {\n  border-right: 1px dashed;\n  border-right-color: #0091EA;\n  border-right-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-balham .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {\n  border-left: 1px dashed;\n  border-left-color: #0091EA;\n  border-left-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-cell.ag-selection-fill-bottom,\n.ag-theme-balham .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {\n  border-bottom: 1px dashed;\n  border-bottom-color: #0091EA;\n  border-bottom-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-balham .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {\n  border-left: 1px dashed;\n  border-left-color: #0091EA;\n  border-left-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-balham .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {\n  border-right: 1px dashed;\n  border-right-color: #0091EA;\n  border-right-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-range-handle, .ag-theme-balham .ag-fill-handle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n  background-color: #0091EA;\n  background-color: var(--ag-range-selection-border-color, #0091EA);\n}\n\n.ag-theme-balham .ag-ltr .ag-range-handle, .ag-theme-balham .ag-ltr .ag-fill-handle {\n  right: -1px;\n}\n\n.ag-theme-balham .ag-rtl .ag-range-handle, .ag-theme-balham .ag-rtl .ag-fill-handle {\n  left: -1px;\n}\n\n.ag-theme-balham .ag-fill-handle {\n  cursor: cell;\n}\n\n.ag-theme-balham .ag-range-handle {\n  cursor: nwse-resize;\n}\n\n.ag-theme-balham .ag-cell-inline-editing {\n  border-color: #719ECE !important;\n  border-color: var(--ag-input-focus-border-color, #719ECE) !important;\n}\n\n.ag-theme-balham .ag-menu {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n  padding: 0;\n}\n\n.ag-theme-balham .ag-menu-list {\n  cursor: default;\n  width: 100%;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.ag-theme-balham .ag-menu-option-part {\n  padding-top: 6px;\n  padding-bottom: 6px;\n  line-height: 16px;\n}\n\n.ag-theme-balham .ag-menu-option-active {\n  background-color: #ECF0F1;\n  background-color: var(--ag-row-hover-color, #ECF0F1);\n}\n\n.ag-theme-balham .ag-menu-option-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-menu-option-text {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-menu-option-icon {\n  padding-left: 8px;\n  padding-right: 4px;\n  min-width: 24px;\n}\n\n.ag-theme-balham .ag-menu-option-shortcut {\n  padding-left: 8px;\n}\n\n.ag-theme-balham .ag-menu-separator {\n  height: 8px;\n}\n\n.ag-theme-balham .ag-menu-separator-cell:after {\n  content: \"\";\n  display: block;\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-menu-option-popup-pointer {\n  width: 24px;\n  text-align: center;\n}\n\n.ag-theme-balham .ag-tabs-header {\n  min-width: 220px;\n  width: 100%;\n  display: flex;\n}\n\n.ag-theme-balham .ag-tab {\n  border-bottom: 0 solid transparent;\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-tab:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-tab:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-tab-selected {\n  border-bottom-color: #0091EA;\n  border-bottom-color: var(--ag-selected-tab-underline-color, #0091EA);\n}\n\n.ag-theme-balham .ag-menu-header {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-filter-condition-operator {\n  height: 17px;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-condition-operator-or {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-condition-operator-or {\n  margin-right: 8px;\n}\n\n.ag-theme-balham .ag-set-filter-select-all {\n  padding-top: 6px;\n}\n\n.ag-theme-balham .ag-set-filter-list {\n  height: 168px;\n}\n\n.ag-theme-balham .ag-set-filter-filter {\n  margin-top: 6px;\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.ag-theme-balham .ag-filter-to {\n  margin-top: 4px;\n}\n\n.ag-theme-balham .ag-mini-filter {\n  margin: 6px 6px;\n  margin-bottom: 0;\n}\n\n.ag-theme-balham .ag-set-filter-item {\n  margin: 0px 6px;\n}\n\n.ag-theme-balham .ag-ltr .ag-set-filter-item-value {\n  margin-left: 6px;\n}\n\n.ag-theme-balham .ag-rtl .ag-set-filter-item-value {\n  margin-right: 6px;\n}\n\n.ag-theme-balham .ag-filter-header-container {\n  padding-bottom: 6px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-filter-apply-panel {\n  padding: 6px 6px;\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-filter-apply-panel-button {\n  line-height: 1.5;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-apply-panel-button {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-apply-panel-button {\n  margin-right: 8px;\n}\n\n.ag-theme-balham .ag-simple-filter-body-wrapper {\n  padding: 6px 6px;\n  padding-bottom: 2px;\n}\n\n.ag-theme-balham .ag-simple-filter-body-wrapper > * {\n  margin-bottom: 4px;\n}\n\n.ag-theme-balham .ag-filter-no-matches {\n  margin: 6px 6px;\n}\n\n.ag-theme-balham .ag-side-bar {\n  position: relative;\n}\n\n.ag-theme-balham .ag-tool-panel-wrapper {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n}\n\n.ag-theme-balham .ag-side-buttons {\n  padding-top: 16px;\n  width: 20px;\n  position: relative;\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n  overflow: hidden;\n}\n\n.ag-theme-balham button.ag-side-button-button {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  background: transparent;\n  padding: 8px 0 8px 0;\n  width: calc(100% + 1px);\n  margin: 0;\n  min-height: 72px;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n  border: none;\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham button.ag-side-button-button:focus {\n  box-shadow: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-side-button-button:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-side-button-button:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-selected .ag-side-button-button {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-side-button-icon-wrapper {\n  margin-bottom: 3px;\n}\n\n.ag-theme-balham .ag-ltr .ag-side-bar-left,\n.ag-theme-balham .ag-rtl .ag-side-bar-right {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-ltr .ag-side-bar-left .ag-tool-panel-wrapper,\n.ag-theme-balham .ag-rtl .ag-side-bar-right .ag-tool-panel-wrapper {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-ltr .ag-side-bar-left .ag-side-button-button,\n.ag-theme-balham .ag-rtl .ag-side-bar-right .ag-side-button-button {\n  border-right: 0 solid transparent;\n  margin-right: -1px;\n  padding-right: 1px;\n}\n\n.ag-theme-balham .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button,\n.ag-theme-balham .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button {\n  border-right-color: #0091EA;\n  border-right-color: var(--ag-selected-tab-underline-color, #0091EA);\n}\n\n.ag-theme-balham .ag-rtl .ag-side-bar-left,\n.ag-theme-balham .ag-ltr .ag-side-bar-right {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-rtl .ag-side-bar-left .ag-tool-panel-wrapper,\n.ag-theme-balham .ag-ltr .ag-side-bar-right .ag-tool-panel-wrapper {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-rtl .ag-side-bar-left .ag-side-button-button,\n.ag-theme-balham .ag-ltr .ag-side-bar-right .ag-side-button-button {\n  border-left: 0 solid transparent;\n  margin-left: -1px;\n  padding-left: 1px;\n}\n\n.ag-theme-balham .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button,\n.ag-theme-balham .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button {\n  border-left-color: #0091EA;\n  border-left-color: var(--ag-selected-tab-underline-color, #0091EA);\n}\n\n.ag-theme-balham .ag-filter-toolpanel-header {\n  height: 24px;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-header, .ag-theme-balham .ag-ltr .ag-filter-toolpanel-search {\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-header, .ag-theme-balham .ag-rtl .ag-filter-toolpanel-search {\n  padding-right: 4px;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-filter-toolpanel-header:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-filter-toolpanel-header:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n  font-family: \"agGridBalham\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f112\";\n  position: absolute;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n  padding-right: 4px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-0-header {\n  height: 32px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-item {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-search {\n  height: 32px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-search-input {\n  flex-grow: 1;\n  height: 16px;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-search-input {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-search-input {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-0 {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-title-bar-icon {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-title-bar-icon {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {\n  padding-left: 20px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {\n  padding-right: 20px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {\n  padding-left: 36px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {\n  padding-right: 36px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {\n  padding-left: 52px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {\n  padding-right: 52px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {\n  padding-left: 68px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {\n  padding-right: 68px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {\n  padding-left: 84px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {\n  padding-right: 84px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {\n  padding-left: 100px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {\n  padding-right: 100px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {\n  padding-left: 116px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {\n  padding-right: 116px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {\n  padding-left: 132px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {\n  padding-right: 132px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {\n  padding-left: 148px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {\n  padding-right: 148px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar {\n  background-color: transparent;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {\n  padding-left: 164px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {\n  padding-right: 164px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-instance-filter {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n  padding-top: 4px;\n}\n\n.ag-theme-balham .ag-ltr .ag-filter-toolpanel-instance-header-icon {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-filter-toolpanel-instance-header-icon {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-pivot-mode-panel {\n  height: 32px;\n  display: flex;\n}\n\n.ag-theme-balham .ag-pivot-mode-select {\n  display: flex;\n  align-items: center;\n}\n\n.ag-theme-balham .ag-ltr .ag-pivot-mode-select {\n  margin-left: 6px;\n}\n\n.ag-theme-balham .ag-rtl .ag-pivot-mode-select {\n  margin-right: 6px;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-header:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-column-select-header:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-column-select-header {\n  height: 32px;\n  align-items: center;\n  padding: 0 6px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-column-panel-column-select {\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-column-group-icons,\n.ag-theme-balham .ag-column-select-header-icon {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-header {\n  background-color: #f5f7f7;\n  background-color: var(--ag-header-background-color, #f5f7f7);\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-header-row {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-header-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-pinned-right-header {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-pinned-left-header {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-header-row {\n  height: 32px;\n}\n\n.ag-theme-balham .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-header-cell,\n.ag-theme-balham .ag-header-group-cell {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.ag-theme-balham .ag-header-cell.ag-header-cell-moving,\n.ag-theme-balham .ag-header-group-cell.ag-header-cell-moving {\n  background-color: white;\n  background-color: var(--ag-header-cell-moving-background-color, white);\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-header-cell:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-header-cell:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-header-group-cell:focus {\n  outline: none;\n}\n\n.ag-theme-balham .ag-keyboard-focus .ag-header-group-cell:focus:after {\n  content: \"\";\n  position: absolute;\n  background-color: transparent;\n  pointer-events: none;\n  top: 4px;\n  left: 4px;\n  display: block;\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  border: 1px solid;\n  border-color: #719ECE;\n  border-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham .ag-header-icon {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-header-expand-icon {\n  cursor: pointer;\n}\n\n.ag-theme-balham .ag-ltr .ag-header-expand-icon {\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-header-expand-icon {\n  padding-right: 4px;\n}\n\n.ag-theme-balham .ag-header-row:not(:first-child) .ag-header-cell,\n.ag-theme-balham .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-header-cell::after,\n.ag-theme-balham .ag-header-group-cell::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  display: block;\n  width: 1px;\n  height: 50%;\n  top: calc(50% - 25%);\n  background-color: rgba(189, 195, 199, 0.5);\n  background-color: var(--ag-header-column-separator-color, rgba(189, 195, 199, 0.5));\n}\n\n.ag-theme-balham .ag-ltr .ag-header-cell::after, .ag-theme-balham .ag-ltr .ag-header-group-cell::after {\n  right: 0;\n}\n\n.ag-theme-balham .ag-rtl .ag-header-cell::after, .ag-theme-balham .ag-rtl .ag-header-group-cell::after {\n  left: 0;\n}\n\n.ag-theme-balham .ag-ltr .ag-header-select-all {\n  margin-right: 12px;\n}\n\n.ag-theme-balham .ag-rtl .ag-header-select-all {\n  margin-left: 12px;\n}\n\n.ag-theme-balham .ag-ltr .ag-floating-filter-button {\n  margin-left: 12px;\n}\n\n.ag-theme-balham .ag-rtl .ag-floating-filter-button {\n  margin-right: 12px;\n}\n\n.ag-theme-balham .ag-floating-filter-button-button {\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border: none;\n  height: 16px;\n  padding: 0;\n  width: 16px;\n}\n\n.ag-theme-balham .ag-filter-loading {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n  height: 100%;\n  padding: 6px 6px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n\n.ag-theme-balham .ag-paging-panel {\n  border-top: 1px solid;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n  height: 32px;\n}\n\n.ag-theme-balham .ag-paging-panel > * {\n  margin: 0 12px;\n}\n\n.ag-theme-balham .ag-paging-button {\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  width: 16px;\n}\n\n.ag-theme-balham .ag-disabled .ag-paging-button {\n  cursor: default;\n}\n\n.ag-theme-balham .ag-paging-button-wrapper.ag-disabled {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n  cursor: default;\n}\n\n.ag-theme-balham .ag-paging-button-wrapper, .ag-theme-balham .ag-paging-description {\n  margin: 0 4px;\n}\n\n.ag-theme-balham .ag-status-bar {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-border-color, #BDC3C7);\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n  padding-right: 16px;\n  padding-left: 16px;\n  line-height: 1.5;\n}\n\n.ag-theme-balham .ag-status-name-value-value {\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n}\n\n.ag-theme-balham .ag-status-bar-center {\n  text-align: center;\n}\n\n.ag-theme-balham .ag-status-name-value {\n  margin-left: 4px;\n  margin-right: 4px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.ag-theme-balham .ag-column-drop-cell {\n  background: #dde4e6;\n  background: var(--ag-chip-background-color, #dde4e6);\n  border-radius: 16px;\n  height: 16px;\n  padding: 0 2px;\n}\n\n.ag-theme-balham .ag-column-drop-cell-text {\n  margin: 0 4px;\n}\n\n.ag-theme-balham .ag-column-drop-cell-button {\n  min-width: 16px;\n  margin: 0 2px;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-column-drop-cell-drag-handle {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-column-drop-cell-ghost {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-column-drop-horizontal {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n  height: 28px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-ltr .ag-column-drop-horizontal {\n  padding-left: 12px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal {\n  padding-right: 12px;\n}\n\n.ag-theme-balham .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child) {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child) {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-column-drop-horizontal-cell-separator {\n  margin: 0 4px;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-column-drop-horizontal-empty-message {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n}\n\n.ag-theme-balham .ag-ltr .ag-column-drop-horizontal-icon {\n  margin-right: 12px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-drop-horizontal-icon {\n  margin-left: 12px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-list {\n  padding-bottom: 4px;\n  padding-right: 4px;\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-cell {\n  margin-top: 4px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical {\n  min-height: 50px;\n  max-height: 150px;\n  border-bottom: solid 1px;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-column-drop-vertical.ag-last-column-drop {\n  border-bottom: none;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-icon {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-list {\n  position: relative;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-empty-message {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n  margin-top: 4px;\n}\n\n.ag-theme-balham .ag-select-agg-func-popup {\n  border: solid 1px;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  background: white;\n  background: var(--ag-background-color, white);\n  border-radius: 2px;\n  box-shadow: none;\n  padding: 4px;\n  background: white;\n  background: var(--ag-background-color, white);\n  height: 70px;\n  padding: 0;\n}\n\n.ag-theme-balham .ag-select-agg-func-virtual-list-item {\n  cursor: default;\n  line-height: 20px;\n  padding-left: 8px;\n}\n\n.ag-theme-balham .ag-select-agg-func-virtual-list-item:hover {\n  background-color: #b7e4ff;\n  background-color: var(--ag-selected-row-background-color, #b7e4ff);\n}\n\n.ag-theme-balham .ag-chart-menu {\n  border-radius: 2px;\n  background: white;\n  background: var(--ag-background-color, white);\n}\n\n.ag-theme-balham .ag-chart-menu-icon {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 2px;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-chart-menu-icon:hover {\n  opacity: 1;\n}\n\n.ag-theme-balham .ag-chart-mini-thumbnail {\n  border: 1px solid;\n  border-color: #BDC3C7;\n  border-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n  border-radius: 5px;\n  margin: 5px;\n}\n\n.ag-theme-balham .ag-chart-mini-thumbnail:nth-last-child(3), .ag-theme-balham .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ag-theme-balham .ag-ltr .ag-chart-mini-thumbnail:first-child {\n  margin-left: 0;\n}\n\n.ag-theme-balham .ag-rtl .ag-chart-mini-thumbnail:first-child {\n  margin-right: 0;\n}\n\n.ag-theme-balham .ag-ltr .ag-chart-mini-thumbnail:last-child {\n  margin-right: 0;\n}\n\n.ag-theme-balham .ag-rtl .ag-chart-mini-thumbnail:last-child {\n  margin-left: 0;\n}\n\n.ag-theme-balham .ag-chart-mini-thumbnail.ag-selected {\n  border-color: #0091EA;\n  border-color: var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, #0091EA));\n}\n\n.ag-theme-balham .ag-chart-settings-card-item {\n  background: #000;\n  background: var(--ag-foreground-color, #000);\n  width: 8px;\n  height: 8px;\n  border-radius: 4px;\n}\n\n.ag-theme-balham .ag-chart-settings-card-item.ag-selected {\n  background-color: #0091EA;\n  background-color: var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, #0091EA));\n}\n\n.ag-theme-balham .ag-chart-data-column-drag-handle {\n  margin-left: 4px;\n}\n\n.ag-theme-balham .ag-charts-settings-group-title-bar,\n.ag-theme-balham .ag-charts-data-group-title-bar,\n.ag-theme-balham .ag-charts-format-top-level-group-title-bar {\n  border-top: solid 1px;\n  border-top-color: #BDC3C7;\n  border-top-color: var(--ag-secondary-border-color, var(--ag-border-color, #BDC3C7));\n}\n\n.ag-theme-balham .ag-charts-settings-group-container {\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-charts-data-group-container {\n  padding: 6px 6px;\n  padding-bottom: 2px;\n}\n\n.ag-theme-balham .ag-charts-data-group-container > * {\n  margin-bottom: 4px;\n}\n\n.ag-theme-balham .ag-charts-format-top-level-group-container {\n  margin-left: 8px;\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-charts-format-top-level-group-item {\n  margin: 4px 0;\n}\n\n.ag-theme-balham .ag-charts-format-sub-level-group-container {\n  padding: 6px 6px;\n  padding-bottom: 2px;\n}\n\n.ag-theme-balham .ag-charts-format-sub-level-group-container > * {\n  margin-bottom: 4px;\n}\n\n.ag-theme-balham .ag-charts-group-container.ag-group-container-horizontal {\n  padding: 4px;\n}\n\n.ag-theme-balham .ag-chart-data-section,\n.ag-theme-balham .ag-chart-format-section {\n  display: flex;\n  margin: 0;\n}\n\n.ag-theme-balham .ag-chart-menu-panel {\n  background-color: #f5f7f7;\n  background-color: var(--ag-control-panel-background-color, #f5f7f7);\n}\n\n.ag-theme-balham .ag-ltr .ag-chart-menu-panel {\n  border-left: solid 1px;\n  border-left-color: #BDC3C7;\n  border-left-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-rtl .ag-chart-menu-panel {\n  border-right: solid 1px;\n  border-right-color: #BDC3C7;\n  border-right-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-date-time-list-page-title {\n  flex-grow: 1;\n  text-align: center;\n}\n\n.ag-theme-balham .ag-date-time-list-page-column-label {\n  text-align: center;\n}\n\n.ag-theme-balham .ag-date-time-list-page-entry {\n  text-align: center;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper {\n  font-family: \"agGridBalham\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  background-color: var(--ag-checkbox-background-color, white);\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: middle;\n  flex: none;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper input, .ag-theme-balham .ag-checkbox-input-wrapper input {\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper:focus-within, .ag-theme-balham .ag-checkbox-input-wrapper:active {\n  outline: none;\n  box-shadow: 0 0 2px 1px #719ECE;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper.ag-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper::after {\n  content: \"\\f108\";\n  color: #7F8C8D;\n  color: var(--ag-checkbox-unchecked-color, #7F8C8D);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper.ag-checked::after {\n  content: \"\\f106\";\n  color: #0091EA;\n  color: var(--ag-checkbox-checked-color, #0091EA);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-checkbox-input-wrapper.ag-indeterminate::after {\n  content: \"\\f107\";\n  color: #7F8C8D;\n  color: var(--ag-checkbox-indeterminate-color, #7F8C8D);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper {\n  box-sizing: border-box;\n  width: 32px;\n  height: 16px;\n  background-color: #7F8C8D;\n  background-color: var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #7F8C8D));\n  border-radius: 8px;\n  position: relative;\n  flex: none;\n  border: 1px solid;\n  border-color: #7F8C8D;\n  border-color: var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #7F8C8D));\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper input {\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper:focus-within {\n  outline: none;\n  box-shadow: 0 0 2px 1px #719ECE;\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper.ag-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper.ag-checked {\n  background-color: #0091EA;\n  background-color: var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, #0091EA));\n  border-color: #0091EA;\n  border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, #0091EA));\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper::before {\n  content: \" \";\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  display: block;\n  box-sizing: border-box;\n  height: 16px;\n  width: 16px;\n  background-color: white;\n  background-color: var(--ag-toggle-button-switch-background-color, var(--ag-background-color, white));\n  border-radius: 8px;\n  transition: left 100ms;\n  border: 1px solid;\n  border-color: #7F8C8D;\n  border-color: var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #7F8C8D)));\n}\n\n.ag-theme-balham .ag-toggle-button-input-wrapper.ag-checked::before {\n  left: calc(100% - 16px );\n  border-color: #0091EA;\n  border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, #0091EA));\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper {\n  font-family: \"agGridBalham\";\n  font-size: 16px;\n  line-height: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  background-color: var(--ag-checkbox-background-color, white);\n  border-radius: 3px;\n  display: inline-block;\n  vertical-align: middle;\n  flex: none;\n  border-radius: 16px;\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper input, .ag-theme-balham .ag-radio-button-input-wrapper input {\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper:focus-within, .ag-theme-balham .ag-radio-button-input-wrapper:active {\n  outline: none;\n  box-shadow: 0 0 2px 1px #719ECE;\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper.ag-disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper::after {\n  content: \"\\f124\";\n  color: #7F8C8D;\n  color: var(--ag-checkbox-unchecked-color, #7F8C8D);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.ag-theme-balham .ag-radio-button-input-wrapper.ag-checked::after {\n  content: \"\\f125\";\n  color: #0091EA;\n  color: var(--ag-checkbox-checked-color, #0091EA);\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.ag-theme-balham input[class^=ag-][type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 100%;\n  background: none;\n  overflow: visible;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-webkit-slider-runnable-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #BDC3C7;\n  background-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 2px;\n  border-radius: 3px;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-moz-range-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #BDC3C7;\n  background-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 2px;\n  border-radius: 3px;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-ms-track {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #BDC3C7;\n  background-color: var(--ag-border-color, #BDC3C7);\n  border-radius: 2px;\n  border-radius: 3px;\n  color: transparent;\n  width: calc(100% - 2px);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-webkit-slider-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  border: 1px solid;\n  border-color: #7F8C8D;\n  border-color: var(--ag-checkbox-unchecked-color, #7F8C8D);\n  border-radius: 16px;\n  transform: translateY(-6.5px);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-ms-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  border: 1px solid;\n  border-color: #7F8C8D;\n  border-color: var(--ag-checkbox-unchecked-color, #7F8C8D);\n  border-radius: 16px;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]::-moz-ag-range-thumb {\n  margin: 0;\n  padding: 0;\n  -webkit-appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  border: 1px solid;\n  border-color: #7F8C8D;\n  border-color: var(--ag-checkbox-unchecked-color, #7F8C8D);\n  border-radius: 16px;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:focus {\n  outline: none;\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 2px 1px #719ECE;\n  border-color: #0091EA;\n  border-color: var(--ag-checkbox-checked-color, #0091EA);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:focus::-ms-thumb {\n  box-shadow: 0 0 2px 1px #719ECE;\n  border-color: #0091EA;\n  border-color: var(--ag-checkbox-checked-color, #0091EA);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:focus::-moz-ag-range-thumb {\n  box-shadow: 0 0 2px 1px #719ECE;\n  border-color: #0091EA;\n  border-color: var(--ag-checkbox-checked-color, #0091EA);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:active::-webkit-slider-runnable-track {\n  background-color: #719ECE;\n  background-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:active::-moz-ag-range-track {\n  background-color: #719ECE;\n  background-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:active::-ms-track {\n  background-color: #719ECE;\n  background-color: var(--ag-input-focus-border-color, #719ECE);\n}\n\n.ag-theme-balham input[class^=ag-][type=range]:disabled {\n  opacity: 0.5;\n}\n\n.ag-theme-balham .ag-filter-toolpanel-header,\n.ag-theme-balham .ag-filter-toolpanel-search,\n.ag-theme-balham .ag-status-bar,\n.ag-theme-balham .ag-header-row {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-header-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-ltr input[class^=ag-]:not([type]),\n.ag-theme-balham .ag-ltr input[class^=ag-][type=text],\n.ag-theme-balham .ag-ltr input[class^=ag-][type=number],\n.ag-theme-balham .ag-ltr input[class^=ag-][type=tel],\n.ag-theme-balham .ag-ltr input[class^=ag-][type=date],\n.ag-theme-balham .ag-ltr input[class^=ag-][type=datetime-local],\n.ag-theme-balham .ag-ltr textarea[class^=ag-] {\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-rtl input[class^=ag-]:not([type]),\n.ag-theme-balham .ag-rtl input[class^=ag-][type=text],\n.ag-theme-balham .ag-rtl input[class^=ag-][type=number],\n.ag-theme-balham .ag-rtl input[class^=ag-][type=tel],\n.ag-theme-balham .ag-rtl input[class^=ag-][type=date],\n.ag-theme-balham .ag-rtl input[class^=ag-][type=datetime-local],\n.ag-theme-balham .ag-rtl textarea[class^=ag-] {\n  padding-right: 4px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-empty-message, .ag-theme-balham .ag-status-bar {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n}\n\n.ag-theme-balham .ag-dnd-ghost {\n  font-weight: 600;\n}\n\n.ag-theme-balham .ag-tab {\n  border: 1px solid transparent;\n  padding: 4px 8px;\n  margin: 4px;\n  margin-bottom: -1px;\n}\n\n.ag-theme-balham .ag-tab-selected {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  border-bottom-color: transparent;\n}\n\n.ag-theme-balham .ag-tabs-header {\n  border-bottom: 1px solid;\n  border-bottom-color: #BDC3C7;\n  border-bottom-color: var(--ag-border-color, #BDC3C7);\n}\n\n.ag-theme-balham .ag-column-drop-cell {\n  height: 24px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-title {\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n}\n\n.ag-theme-balham .ag-column-drop-vertical-cell {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-cell-text {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical-icon {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--ag-secondary-foreground-color, rgba(0, 0, 0, 0.54));\n}\n\n.ag-theme-balham .ag-ltr .ag-column-drop-vertical-empty-message {\n  padding-left: 24px;\n  padding-right: 4px;\n}\n\n.ag-theme-balham .ag-rtl .ag-column-drop-vertical-empty-message {\n  padding-right: 24px;\n  padding-left: 4px;\n}\n\n.ag-theme-balham .ag-column-drop-horizontal {\n  height: 32px;\n}\n\n.ag-theme-balham .ag-column-drop-empty {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--ag-disabled-foreground-color, rgba(0, 0, 0, 0.38));\n}\n\n.ag-theme-balham .ag-column-drop-horizontal-cell-text {\n  margin-left: 8px;\n}\n\n.ag-theme-balham .ag-column-drop-vertical {\n  padding-top: 8px;\n}\n\n.ag-theme-balham .ag-menu-header {\n  background-color: #f5f7f7;\n  background-color: var(--ag-header-background-color, #f5f7f7);\n}\n\n.ag-theme-balham .ag-overlay-loading-center {\n  background-color: white;\n  background-color: var(--ag-background-color, white);\n  border: 1px solid;\n  border-color: #BDC3C7;\n  border-color: var(--ag-border-color, #BDC3C7);\n  color: #000;\n  color: var(--ag-foreground-color, #000);\n  padding: 16px;\n}\n\n.ag-theme-balham .ag-tooltip {\n  border: none;\n  background-color: #cbd0d3;\n}\n\n.ag-theme-balham .ag-panel-title-bar-button-icon {\n  font-size: 20px;\n}\n\n.ag-theme-balham .ag-chart-data-section,\n.ag-theme-balham .ag-chart-format-section {\n  padding-bottom: 2px;\n}\n\n.ag-theme-balham .ag-group-toolbar {\n  background-color: rgba(226, 233, 235, 0.5);\n  background-color: var(--ag-subheader-toolbar-background-color, rgba(226, 233, 235, 0.5));\n}\n\n.ag-theme-balham .ag-chart-tab {\n  padding-top: 2px;\n}\n\n.ag-theme-balham .ag-charts-format-sub-level-group-item {\n  margin-bottom: 6px;\n}\n\n.ag-theme-material .ag-cell {\n  line-height: 34px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dashboard .con-vs-card[data-v-eab2f1c2] {\n  margin-bottom: 0px;\n}\n@media only screen and (min-width: 900px) {\n.dashboard .right-item[data-v-eab2f1c2] {\n    padding-left: 10px;\n}\n}\n.dashboard .statistic-1 .occupancy #actual-data[data-v-eab2f1c2] {\n  color: #775dd0;\n}\n.dashboard .statistic-1 .occupied #actual-data[data-v-eab2f1c2] {\n  color: #008ffb;\n}\n.dashboard .statistic-1 .available #actual-data[data-v-eab2f1c2] {\n  color: #00e396;\n}\n.dashboard .statistic-1 .con-vs-card[data-v-eab2f1c2] {\n  padding: 10px;\n}\n.dashboard .statistic-1 #title[data-v-eab2f1c2] {\n  font-weight: 600;\n  font-size: 15px;\n}\n.dashboard .statistic-1 #actual-data[data-v-eab2f1c2] {\n  font-size: 40px;\n  font-weight: bolder;\n}\n.dashboard .statistic-1 #expected-data[data-v-eab2f1c2] {\n  font-size: 40px;\n  font-weight: bolder;\n  color: #464545;\n}\n@media only screen and (max-width: 900px) {\n.dashboard .statistic-1.small-size #background[data-v-eab2f1c2] {\n    background: rgba(var(--vs-primary), 1);\n    height: 75px;\n    width: 103%;\n    margin-left: -6%;\n    margin-top: -50px;\n    position: absolute;\n}\n}\n.dashboard .statistic-1.small-size #row-data[data-v-eab2f1c2] {\n  align-items: baseline;\n}\n.dashboard .statistic-1.small-size #occupancy[data-v-eab2f1c2] {\n  border-style: solid;\n  border-color: #8080804d;\n  border-width: 0px;\n  border-right-width: 1px;\n}\n.dashboard .statistic-1.small-size #occupancy #actual-data[data-v-eab2f1c2] {\n  color: #775dd0;\n}\n.dashboard .statistic-1.small-size #occupied[data-v-eab2f1c2] {\n  border-style: solid;\n  border-color: #8080804d;\n  border-width: 0px;\n  border-right-width: 1px;\n}\n.dashboard .statistic-1.small-size #occupied #actual-data[data-v-eab2f1c2] {\n  color: #008ffb;\n}\n.dashboard .statistic-1.small-size #available[data-v-eab2f1c2] {\n  border-style: solid;\n  border-color: #8080804d;\n  border-width: 0px;\n  border-right-width: 1px;\n}\n.dashboard .statistic-1.small-size #available #actual-data[data-v-eab2f1c2] {\n  color: #00e396;\n}\n.dashboard .statistic-1.small-size .con-vs-card[data-v-eab2f1c2] {\n  padding: 10px;\n}\n.dashboard .statistic-1.small-size #title[data-v-eab2f1c2] {\n  font-weight: 600;\n  font-size: 10px;\n}\n.dashboard .statistic-1.small-size #actual-data[data-v-eab2f1c2] {\n  font-size: 20px;\n  font-weight: bolder;\n}\n.dashboard .statistic-1.small-size #expected-data[data-v-eab2f1c2] {\n  font-size: 15px;\n  font-weight: bolder;\n  color: #464545;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dashboard" },
    [
      _vm.resolutionWidth > 900
        ? _c(
            "vs-row",
            {
              staticClass: "statistic-1",
              attrs: { "vs-type": "flex", "vs-justify": "space-between" },
            },
            [
              _c(
                "vs-col",
                { attrs: { "vs-lg": "4", "vs-xs": "12" } },
                [
                  _c(
                    "vs-card",
                    {
                      staticClass: "arrival vs-con-loading__container",
                      attrs: { id: "statistic-card" },
                    },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("dashboard.percentOccupancy")) +
                              " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "occupancy mt-6",
                          attrs: { "vs-type": "flex", "vs-justify": "center" },
                        },
                        [
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("currency_format")(
                                          _vm.occupancyCurrent || 0
                                        )
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.currentOccupancy")
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm._f("currency_format")(
                                          _vm.occupancyTonight || 0
                                        )
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.tonightOccupancy")
                                      ) +
                                      " "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "right-item",
                  attrs: { "vs-lg": "4", "vs-xs": "12" },
                },
                [
                  _c(
                    "vs-card",
                    {
                      staticClass: "departure vs-con-loading__container",
                      attrs: { id: "statistic-card" },
                    },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " + _vm._s(_vm.$t("dashboard.occupied")) + " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-6 occupied",
                          attrs: { "vs-type": "flex", "vs-justify": "center" },
                        },
                        [
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.occupiedCurrent || 0) + " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.currentOccupied")
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " + _vm._s(_vm.occupiedTonight || 0) + " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.tonightOccupied")
                                      ) +
                                      " "
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "right-item",
                  attrs: { "vs-lg": "4", "vs-xs": "12" },
                },
                [
                  _c(
                    "vs-card",
                    {
                      staticClass: "departure vs-con-loading__container",
                      attrs: { id: "statistic-card" },
                    },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("dashboard.roomAvailable")) +
                              " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-6 available",
                          attrs: { "vs-type": "flex", "vs-justify": "center" },
                        },
                        [
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.availableCurrent || 0) +
                                      " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "actual-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.currentRoomAvailable")
                                      ) +
                                      " "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            { attrs: { "vs-lg": "6" } },
                            [
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-data",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.availableTonight || 0) +
                                      " "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-row",
                                {
                                  attrs: {
                                    "vs-type": "flex",
                                    "vs-justify": "center",
                                    id: "expected-label",
                                  },
                                },
                                [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("dashboard.tonightRoomAvailable")
                                      ) +
                                      " "
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
                ],
                1
              ),
            ],
            1
          )
        : _c(
            "vs-row",
            {
              staticClass: "statistic-1 small-size",
              attrs: { "vs-type": "flex", "vs-justify": "space-between" },
            },
            [
              _c(
                "vs-card",
                {
                  staticClass: "arrival vs-con-loading__container",
                  attrs: { id: "statistic-card" },
                },
                [
                  _c(
                    "vs-col",
                    { attrs: { id: "occupancy", "vs-lg": "4", "vs-xs": "4" } },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("dashboard.percentOccupancy")) +
                              " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-1",
                          attrs: {
                            id: "row-data",
                            "vs-type": "flex",
                            "vs-justify": "center",
                          },
                        },
                        [
                          _c("span", { attrs: { id: "actual-data" } }, [
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm._f("currency_format")(
                                    _vm.occupancyCurrent || 0
                                  )
                                )
                            ),
                          ]),
                          _vm._v(" "),
                          _c("span", { attrs: { id: "expected-data" } }, [
                            _vm._v(
                              "/" +
                                _vm._s(
                                  _vm._f("currency_format")(
                                    _vm.occupancyTonight || 0
                                  )
                                )
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { id: "occupied", "vs-lg": "4", "vs-xs": "4" } },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " + _vm._s(_vm.$t("dashboard.occupied")) + " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-1",
                          attrs: {
                            id: "row-data",
                            "vs-type": "flex",
                            "vs-justify": "center",
                          },
                        },
                        [
                          _c("span", { attrs: { id: "actual-data" } }, [
                            _vm._v(" " + _vm._s(_vm.occupiedCurrent || 0)),
                          ]),
                          _vm._v(" "),
                          _c("span", { attrs: { id: "expected-data" } }, [
                            _vm._v("/" + _vm._s(_vm.occupiedTonight || 0)),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    { attrs: { id: "available", "vs-lg": "4", "vs-xs": "4" } },
                    [
                      _c(
                        "vs-row",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-justify": "center",
                            id: "title",
                          },
                        },
                        [
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("dashboard.roomAvailable")) +
                              " "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-row",
                        {
                          staticClass: "mt-1",
                          attrs: {
                            id: "row-data",
                            "vs-type": "flex",
                            "vs-justify": "center",
                          },
                        },
                        [
                          _c("span", { attrs: { id: "actual-data" } }, [
                            _vm._v(" " + _vm._s(_vm.availableCurrent || 0)),
                          ]),
                          _vm._v(" "),
                          _c("span", { attrs: { id: "expected-data" } }, [
                            _vm._v("/" + _vm._s(_vm.availableTonight || 0)),
                          ]),
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
        { staticClass: "statistic-2" },
        [
          _c(
            "vs-col",
            {
              staticClass: "mt-3",
              attrs: {
                id: "card-1",
                "vs-lg": "5",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: {
                    id: "room",
                    title: _vm.$t("dashboard.roomOccupancyGraphic.title"),
                  },
                },
                [
                  _c("apexchart", {
                    attrs: {
                      type: "donut",
                      height: "250",
                      options: _vm.dchartOptions,
                      series: _vm.dseries,
                    },
                  }),
                  _vm._v(" "),
                  _c("apexchart", {
                    attrs: {
                      type: "radialBar",
                      height: "250",
                      options: _vm.rplotOptions,
                      series: _vm.rseries,
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
              staticClass: "mt-3 right-item",
              attrs: {
                id: "card-2",
                "vs-lg": "7",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: { id: "available-list" },
                },
                [
                  _c("room-statistic", {
                    attrs: { rowData: _vm.roomAvailableList },
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
        "vs-row",
        { staticClass: "mt-3" },
        [
          _c(
            "vs-col",
            {
              staticClass: "mt-3",
              attrs: {
                id: "card-1",
                "vs-lg": "6",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: {
                    id: "occupied-chart",
                    title: _vm.$t("dashboard.roomSoldStatistic"),
                  },
                },
                [
                  _c("apexchart", {
                    attrs: {
                      type: "area",
                      height: "350",
                      options: _vm.oChartOptions,
                      series: _vm.oSeries,
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
              staticClass: "mt-3 right-item",
              attrs: {
                id: "card-2",
                "vs-lg": "6",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: {
                    id: "room-status-bar",
                    title: _vm.$t("dashboard.housekeepingStatus"),
                  },
                },
                [
                  _c("apexchart", {
                    attrs: {
                      type: "bar",
                      height: "350",
                      options: _vm.roomCategories,
                      series: _vm.roomSeries,
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
        "vs-row",
        { staticClass: "statistic-2" },
        [
          _c(
            "vs-col",
            {
              staticClass: "mt-3",
              attrs: {
                id: "card-1",
                "vs-lg": "6",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: {
                    id: "expected-arrival-list",
                    title: _vm.$t("dashboard.expectedArrival.title"),
                  },
                },
                [
                  _c("expected-arrival", {
                    attrs: { rowData: _vm.expectedArrival },
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
              staticClass: "mt-3 right-item",
              attrs: {
                id: "card-2",
                "vs-lg": "6",
                "vs-sm": "12",
                "vs-xs": "12",
              },
            },
            [
              _c(
                "vx-card",
                {
                  staticClass: "vs-con-loading__container",
                  attrs: {
                    id: "expected-departure-list",
                    title: _vm.$t("dashboard.expectedDeparture.title"),
                  },
                },
                [
                  _c("expected-departure", {
                    attrs: { rowData: _vm.expectedDeparture },
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        staticClass: "ag-theme-material",
        staticStyle: { width: "100%", height: "350px" },
        attrs: {
          id: "myGrid",
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.rowData,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        staticClass: "ag-theme-material",
        staticStyle: { width: "100%", height: "350px" },
        attrs: {
          id: "myGrid",
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.rowData,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("ag-grid-vue", {
        staticClass: "ag-theme-material",
        staticStyle: { width: "100%", height: "490px" },
        attrs: {
          id: "myGrid",
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.rowData,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/dashboard.js":
/*!*******************************************!*\
  !*** ./resources/js/src/api/dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuditDateResource; });
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



var uri = 'dashboard';

var AuditDateResource = /*#__PURE__*/function (_Resource) {
  _inherits(AuditDateResource, _Resource);

  var _super = _createSuper(AuditDateResource);

  function AuditDateResource() {
    _classCallCheck(this, AuditDateResource);

    return _super.call(this, uri);
  }

  _createClass(AuditDateResource, [{
    key: "roomStatistic",
    value: function roomStatistic(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/roomstatistic',
        method: 'post'
      });
    }
  }, {
    key: "roomStatistic2",
    value: function roomStatistic2(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/roomstatistic2',
        method: 'post'
      });
    }
  }, {
    key: "expectedArrivalDeparture",
    value: function expectedArrivalDeparture(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/expected-arrival-departure',
        method: 'post'
      });
    }
  }, {
    key: "roomStatus",
    value: function roomStatus(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/room-status',
        method: 'post'
      });
    }
  }, {
    key: "roomSold",
    value: function roomSold(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/room-sold',
        method: 'post'
      });
    }
  }]);

  return AuditDateResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/views/dashboard/Dashboard.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/dashboard/Dashboard.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true& */ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& */ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eab2f1c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=style&index=0&id=eab2f1c2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_eab2f1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/Dashboard.vue?vue&type=template&id=eab2f1c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_eab2f1c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedArrival.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpectedArrival.vue?vue&type=template&id=1446ee1a& */ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a&");
/* harmony import */ var _ExpectedArrival_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpectedArrival.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpectedArrival_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/component/ExpectedArrival.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedArrival_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpectedArrival.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedArrival_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpectedArrival.vue?vue&type=template&id=1446ee1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedArrival.vue?vue&type=template&id=1446ee1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedArrival_vue_vue_type_template_id_1446ee1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedDeparture.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpectedDeparture.vue?vue&type=template&id=6d693f55& */ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55&");
/* harmony import */ var _ExpectedDeparture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpectedDeparture.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExpectedDeparture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/component/ExpectedDeparture.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedDeparture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpectedDeparture.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedDeparture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpectedDeparture.vue?vue&type=template&id=6d693f55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/ExpectedDeparture.vue?vue&type=template&id=6d693f55&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpectedDeparture_vue_vue_type_template_id_6d693f55___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/dashboard/component/RoomStatistic.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/RoomStatistic.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomStatistic.vue?vue&type=template&id=23609e24& */ "./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24&");
/* harmony import */ var _RoomStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomStatistic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/component/RoomStatistic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomStatistic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomStatistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomStatistic.vue?vue&type=template&id=23609e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/component/RoomStatistic.vue?vue&type=template&id=23609e24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomStatistic_vue_vue_type_template_id_23609e24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/ag-grid.scss":
/*!*************************************!*\
  !*** ./resources/sass/ag-grid.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./ag-grid.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/ag-grid.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);