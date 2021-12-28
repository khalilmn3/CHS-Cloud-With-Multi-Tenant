(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_front_desk_lostAndFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/front-desk/lostAndFound */ "./resources/js/src/api/front-desk/lostAndFound.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/lost-and-found/components/action_grid.js");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_color_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/color.js */ "./resources/js/src/views/pages/components/ag_grid-framework/color.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_checklist_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/checklist.js */ "./resources/js/src/views/pages/components/ag_grid-framework/checklist.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue-color */ "./node_modules/vue-color/dist/vue-color.min.js");
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue_color__WEBPACK_IMPORTED_MODULE_16__);


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
















var lostAndFoundResource = new _api_front_desk_lostAndFound__WEBPACK_IMPORTED_MODULE_1__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'LostAndFound',
  props: {
    titleForm: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_3__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_6__["default"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_12__["default"],
    'color-picker': vue_color__WEBPACK_IMPORTED_MODULE_16__["Slider"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: 1,
      searchFilterData: [{
        text: this.$t('common.filter.type'),
        value: 0
      }, {
        text: this.$t('common.filter.item'),
        value: 1
      }, {
        text: this.$t('common.filter.location'),
        value: 2
      }, {
        text: this.$t('common.filter.whoReported'),
        value: 3
      }, {
        text: this.$t('common.filter.currentLocation'),
        value: 4
      }, {
        text: this.$t('common.filter.returnBy'),
        value: 5
      }, {
        text: this.$t('common.filter.owner'),
        value: 6
      }, {
        text: this.$t('common.filter.phone'),
        value: 7
      }, {
        text: this.$t('common.filter.notes'),
        value: 8
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: 9
      }],
      // query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0
      },
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
      // Parameter From Child
      idData: '',
      paramsData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      // Pop Up
      mainPopUp: false,
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      dataLookup: [],
      // data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false,
      mainTableName: '',
      style: {},
      colors: ''
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'code',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 100
    }, {
      headerName: this.$t('common.table.type'),
      field: 'type',
      width: 90
    }, {
      headerName: this.$t('common.table.itemLostOrFound'),
      field: 'item',
      width: 200
    }, {
      headerName: this.$t('common.table.itemColor'),
      field: 'color',
      width: 120,
      cellRenderer: 'colorRenderer'
    }, {
      headerName: this.$t('common.table.locationLostOrFound'),
      field: 'location',
      width: 200
    }, {
      headerName: this.$t('common.table.value'),
      field: 'value',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('common.table.currentLocation'),
      field: 'current_location',
      width: 200
    }, {
      headerName: this.$t('common.table.dateLostOrFound'),
      field: 'date_posting',
      width: 133,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('common.table.isReturned'),
      field: 'is_return',
      width: 153,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checkListRenderer'
    }, {
      headerName: this.$t('common.table.dateReturn'),
      field: 'date_return',
      width: 133,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDate"]
    }, {
      headerName: this.$t('common.table.returnBy'),
      field: 'return_by',
      width: 200
    }, {
      headerName: this.$t('common.table.owner'),
      field: 'owner',
      width: 200
    }, {
      headerName: this.$t('common.table.phone'),
      field: 'phone',
      width: 200
    }, {
      headerName: this.$t('common.table.notes'),
      field: 'notes',
      width: 200
    }, {
      headerName: this.$t('common.table.active'),
      field: 'is_active',
      width: 80,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checkListRenderer'
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_4__["default"],
      colorRenderer: _views_pages_components_ag_grid_framework_color_js__WEBPACK_IMPORTED_MODULE_13__["default"],
      checkListRenderer: _views_pages_components_ag_grid_framework_checklist_js__WEBPACK_IMPORTED_MODULE_14__["default"]
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
    this.limitPageSize = this.global.limitDefaultPageSize;
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    // ------------------------additional for context menu ag-Grid-----------//
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.paramsData.is_active == true ? this.$t('common.contextMenu.deactive') : this.$t('common.contextMenu.active'),
        disabled: !this.paramsData,
        // icon: generateIconContextMenuAgGrid('delete_icon24'),
        action: function action() {
          return _this.handleActiveDeactive(_this.paramsData);
        }
      }, {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 2);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi.forEachNode(function (node) {
          if (node.data) {
            if (node.data.id_log == vm.paramsData.id_log) {
              node.setSelected(true, true);
            }
          }
        });
      }
    },
    handleRowDobleClicked: function handleRowDobleClicked(params) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this2.paramsData = _context.sent;

                _this2.showModal(_this2.paramsData, _this2.global.modeData.edit);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.search = search;
                selectedNodes = _this3.gridApi != null ? _this3.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return _this3.getData(search);

              case 5:
                _this3.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'id_log');
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getData: function getData(params) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$lostAndFoundRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.$loadingIndicator(_this4);

                _context3.next = 4;
                return lostAndFoundResource.list(params);

              case 4:
                _yield$lostAndFoundRe = _context3.sent;
                data = _yield$lostAndFoundRe.data;
                _this4.rowData = data;

                _this4.$closeLoadingIndicator(_this4);

                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);

                _this4.$closeLoadingIndicator(_this4);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }))();
    },
    resetData: function resetData() {
      this.vModel = {
        is_lost: '-1',
        item: '',
        date_posting: '',
        location: '',
        who: '',
        value: 0,
        current_location: '',
        color: '',
        is_return: false,
        date_return: '',
        return_by: '',
        owner: '',
        phone: '',
        notes: '',
        user_id: this.global.userInfo.code
      };
      this.colors = '';
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
    },
    showModal: function showModal(idData, modeData) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // this.$loadingIndicator(this);
                _this5.resetData(_this5.search);

                _this5.idData = idData.id_log;
                _this5.modeDataValue = modeData;

                if (!(modeData == _this5.global.modeData.edit)) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 6;
                return _this5.editData();

              case 6:
                _this5.$closeLoadingIndicator(_this5);

                _context4.next = 16;
                break;

              case 9:
                if (!(modeData == _this5.global.modeData.tracking)) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 12;
                return _this5.trackingData(idData);

              case 12:
                _this5.mainPopUp = true;
                _context4.next = 16;
                break;

              case 15:
                if (modeData == _this5.global.modeData.insert) {
                  // this.$loadingIndicator(this);
                  // await this.getDataLookup();
                  // this.$closeLoadingIndicator(this);
                  _this5.mainPopUp = true;
                }

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    editData: function editData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _yield$lostAndFoundRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return lostAndFoundResource.get(_this6.idData);

              case 3:
                _yield$lostAndFoundRe2 = _context5.sent;
                data = _yield$lostAndFoundRe2.data;
                _this6.vModel = data;
                _this6.colors = data.color;

                _this6.setColor(_this6.colors);

                _this6.mainPopUp = true;
                _context5.next = 14;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }))();
    },
    handleActiveDeactive: function handleActiveDeactive(paramsData) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirmation(this, 'updateActive', paramsData);
    },
    updateActive: function updateActive(paramsData) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _yield$lostAndFoundRe3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  is_active: paramsData.is_active !== true,
                  id_log: paramsData.id_log,
                  user_id: _this7.global.userInfo.code
                };
                _context6.prev = 1;

                _this7.$loadingIndicator(_this7);

                _context6.next = 5;
                return lostAndFoundResource.updateActive(params);

              case 5:
                _yield$lostAndFoundRe3 = _context6.sent;
                data = _yield$lostAndFoundRe3.data;
                _context6.next = 9;
                return _this7.refreshData(_this7.search);

              case 9:
                _this7.$closeLoadingIndicator(_this7);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].acceptAlertSucces();
                _context6.next = 17;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](1);

                _this7.$closeLoadingIndicator(_this7);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert();

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 13]]);
      }))();
    },
    updateData: function updateData() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _yield$lostAndFoundRe4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;

                _this8.$loadingIndicator(_this8);

                _context7.next = 4;
                return lostAndFoundResource.update(_this8.vModel);

              case 4:
                _yield$lostAndFoundRe4 = _context7.sent;
                data = _yield$lostAndFoundRe4.data;
                _context7.next = 8;
                return _this8.refreshData(_this8.search);

              case 8:
                _this8.$closeLoadingIndicator(_this8);

                _this8.mainPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].acceptAlertSucces();
                _this8.btnSaveDisabled = false;
                _context7.next = 19;
                break;

              case 14:
                _context7.prev = 14;
                _context7.t0 = _context7["catch"](0);
                _this8.btnSaveDisabled = false;

                _this8.$closeLoadingIndicator(_this8);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert();

              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 14]]);
      }))();
    },
    insertData: function insertData() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$lostAndFoundRe5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;

                _this9.$loadingIndicator(_this9);

                _context8.next = 4;
                return lostAndFoundResource.store(_this9.vModel);

              case 4:
                _yield$lostAndFoundRe5 = _context8.sent;
                data = _yield$lostAndFoundRe5.data;
                _context8.next = 8;
                return _this9.refreshData(_this9.search);

              case 8:
                _this9.$closeLoadingIndicator(_this9);

                _this9.mainPopUp = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].acceptAlertSucces();
                _this9.btnSaveDisabled = false;
                _context8.next = 19;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](0);
                _this9.btnSaveDisabled = false;

                _this9.$closeLoadingIndicator(_this9);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorSaveDataAlert();

              case 19:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 14]]);
      }))();
    },
    saveData: function saveData() {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this10.$validator.validateAll().then( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(result) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (!result) {
                              _context9.next = 14;
                              break;
                            }

                            _this10.btnSaveDisabled = true;
                            _this10.vModel.user_id = _this10.global.userInfo.code;

                            if (!(_this10.modeDataValue == 1)) {
                              _context9.next = 10;
                              break;
                            }

                            _this10.$vs.loading({
                              container: '#button-save-main',
                              scale: _this10.global.scaleLoadingButton
                            });

                            _context9.next = 7;
                            return _this10.updateData();

                          case 7:
                            _this10.$vs.loading.close('#button-save-main>.con-vs-loading');

                            _context9.next = 14;
                            break;

                          case 10:
                            _this10.$vs.loading({
                              container: '#button-save-main',
                              scale: _this10.global.scaleLoadingButton
                            });

                            _context9.next = 13;
                            return _this10.insertData();

                          case 13:
                            _this10.$vs.loading.close('#button-save-main>.con-vs-loading');

                          case 14:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_9__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this11.$nextTick(function () {
                  _this11.modeDataValue = _this11.global.modeData["delete"];
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_11__["getRowIndexBefore"])(_this11);
                });

                data = {
                  id_log: idData.id_log,
                  user_id: _this11.global.userInfo.code
                };

                _this11.$loadingIndicator(_this11);

                _context11.prev = 3;
                _context11.next = 6;
                return lostAndFoundResource["delete"](data);

              case 6:
                _this11.refreshData(_this11.search);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].deleteAlertSuccess();
                _context11.next = 14;
                break;

              case 10:
                _context11.prev = 10;
                _context11.t0 = _context11["catch"](3);

                _this11.$closeLoadingIndicator(_this11);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorDeleteDataAlert();

              case 14:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[3, 10]]);
      }))();
    },
    pickColor: function pickColor(val) {
      this.vModel.color = val.hex;
      this.setColor(val.hex);
    },
    setColor: function setColor(val) {
      this.style = {
        backgroundColor: val
      };
    },
    trackingData: function trackingData(idData) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this12.global.tableName.lostAndFound
                };

                _this12.$loadingIndicator(_this12);

                _context12.prev = 2;
                _context12.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context12.sent;
                data = _yield$trackingDataRe.data;
                _this12.dataTracking = data.modelGrid;
                _context12.next = 13;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_8__["default"].errorFetchDataAlert();

              case 13:
                _this12.$closeLoadingIndicator(_this12);

              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[2, 10]]);
      }))();
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.mainPopUp) {
      this.mainPopUp = false;
      next(false);
    } else {
      next();
    }
  },
  // ------------------end need setting manual for crud-----------------//
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.global.paginationDataPerPage);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#color[data-v-00d993d6]{\n  height: 40px;\n  width: 100px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true& ***!
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
    [
      _c("navigation-header", {
        attrs: { insertButton: "" },
        on: {
          showModal: _vm.showModal,
          refreshData: function (val) {
            _vm.limitPageSize = parseFloat(val)
            _vm.$refs.filterHeader.onRefreshData(val)
          },
        },
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          formType: _vm.global.formType.lostAndFound,
          limitPageSize: _vm.limitPageSize,
          searchOption: _vm.searchFilterData,
          searchDefault: _vm.vModelDefaultSearchData,
        },
        on: { search: _vm.refreshData },
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container",
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
              rowGroupPanelShow: _vm.rowGroupPanelShow,
              enableRangeSelection: true,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.global.defColDef,
              getContextMenuItems: _vm.getContextMenu,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellContextMenu: _vm.handleRowRightClicked,
              rowDoubleClicked: _vm.handleRowDobleClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: _vm.modeDataValue == _vm.global.modeData.tracking ? 800 : 80,
          active: _vm.mainPopUp,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
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
                            rowData: _vm.dataTracking,
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
                          {
                            attrs: {
                              "vs-type": "flex",
                              "vs-justify": "space-between",
                            },
                          },
                          [
                            _c(
                              "vs-col",
                              { staticClass: "w-full lg:w-1/2" },
                              [
                                _c(
                                  "vx-card",
                                  {
                                    staticClass: "w-full",
                                    attrs: {
                                      title: _vm.$t("common.itemInformation"),
                                    },
                                  },
                                  [
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c(
                                              "vs-radio",
                                              {
                                                attrs: { "vs-value": "-1" },
                                                model: {
                                                  value: _vm.vModel.is_lost,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "is_lost",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.is_lost",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("common.lost"))
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c(
                                              "vs-radio",
                                              {
                                                attrs: { "vs-value": "0" },
                                                model: {
                                                  value: _vm.vModel.is_lost,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "is_lost",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.is_lost",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.$t("common.found"))
                                                ),
                                              ]
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
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("common.item"))
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
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
                                                  attrs: {
                                                    type: "text",
                                                    "description-text": _vm._f(
                                                      "toString"
                                                    )(
                                                      _vm.errors.first(
                                                        "item"
                                                      ) || _vm.dbErrors.item
                                                    ),
                                                    name: "item",
                                                  },
                                                  model: {
                                                    value: _vm.vModel.item,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "item",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.item",
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
                                              "wrap-form-select w-full md:w-1/2",
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(_vm.$t("common.date"))
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
                                                    type: "date",
                                                    confirm: "",
                                                    "confirm-text": "Ok",
                                                    lang: _vm.$t("lang"),
                                                    "value-type": "YYYY-MM-DD",
                                                    format: "DD/MM/YYYY",
                                                    label: "name",
                                                    placeholder: "DD/MM/YYYY",
                                                    name: "date posting",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.date_posting,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "date_posting",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.date_posting",
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
                                                          _vm.errors.has(
                                                            "date posting"
                                                          ),
                                                        expression:
                                                          "errors.has('date posting')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f("toString")(
                                                          _vm.errors.first(
                                                            "date posting"
                                                          ) ||
                                                            _vm.dbErrors
                                                              .date_posting
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("common.location")
                                                  )
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value: _vm.vModel.location,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "location",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.location",
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
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(_vm.$t("common.who"))
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value: _vm.vModel.who,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "who",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.who",
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
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("common.value"))
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("input-number", {
                                                  staticClass: "w-full",
                                                  attrs: {
                                                    "show-zero-number": "",
                                                    type: "text",
                                                  },
                                                  model: {
                                                    value: _vm.vModel.value,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "value",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.value",
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
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "common.currentLocation"
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .current_location,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "current_location",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.current_location",
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
                                          "vs-align": "center",
                                          "vs-type": "flex",
                                          "vs-justify": "flex-start",
                                          "vs-w": "12",
                                        },
                                      },
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "w-full",
                                            attrs: { "vs-lg": "3" },
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(_vm.$t("common.color"))
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full",
                                            attrs: { "vs-lg": "6" },
                                          },
                                          [
                                            _c("color-picker", {
                                              staticStyle: { width: "100%" },
                                              on: { input: _vm.pickColor },
                                              model: {
                                                value: _vm.colors,
                                                callback: function ($$v) {
                                                  _vm.colors = $$v
                                                },
                                                expression: "colors",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full",
                                            attrs: { "vs-lg": "2" },
                                          },
                                          [
                                            _c("div", {
                                              style: _vm.style,
                                              attrs: { id: "color" },
                                            }),
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
                              "vs-col",
                              { staticClass: "w-full lg:w-1/2" },
                              [
                                _c(
                                  "vx-card",
                                  {
                                    staticClass: "w-full",
                                    attrs: {
                                      title: _vm.$t("common.returnInformation"),
                                    },
                                  },
                                  [
                                    _c(
                                      "vs-row",
                                      {
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c(
                                              "vs-checkbox",
                                              {
                                                model: {
                                                  value: _vm.vModel.is_return,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "is_return",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.is_return",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t(
                                                      "common.returnedToOwner"
                                                    )
                                                  )
                                                ),
                                              ]
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
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "wrap-form-select w-full md:w-1/2",
                                          },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("common.returnDate")
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("date-picker", {
                                                  staticClass: "w-full",
                                                  attrs: {
                                                    type: "date",
                                                    confirm: "",
                                                    "confirm-text": "Ok",
                                                    lang: _vm.$t("lang"),
                                                    "value-type": "YYYY-MM-DD",
                                                    format: "DD/MM/YYYY",
                                                    label: "name",
                                                    placeholder: "DD/MM/YYYY",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.date_return,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "date_return",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.date_return",
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
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("common.returnBy")
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value: _vm.vModel.return_by,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "return_by",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.return_by",
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
                                        staticClass: "mt-3 w-full",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(_vm.$t("common.owner"))
                                                ),
                                              ]),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value: _vm.vModel.owner,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "owner",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.owner",
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
                                          { staticClass: "w-full md:w-1/2" },
                                          [
                                            _c("vs-row", [
                                              _vm._v(
                                                _vm._s(_vm.$t("common.phone"))
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "vs-row",
                                              [
                                                _c("vs-input", {
                                                  staticClass: "w-full",
                                                  attrs: { type: "text" },
                                                  model: {
                                                    value: _vm.vModel.phone,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "phone",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "vModel.phone",
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
                                        staticClass: "mt-3 mb-2",
                                        attrs: {
                                          "vs-type": "flex",
                                          "vs-justify": "space-between",
                                        },
                                      },
                                      [
                                        _c("vs-textarea", {
                                          staticClass: "w-full",
                                          attrs: {
                                            label: _vm.$t("common.notes"),
                                          },
                                          model: {
                                            value: _vm.vModel.notes,
                                            callback: function ($$v) {
                                              _vm.$set(_vm.vModel, "notes", $$v)
                                            },
                                            expression: "vModel.notes",
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

/***/ "./resources/js/src/api/front-desk/lostAndFound.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/front-desk/lostAndFound.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LostAndFoundResource; });
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



var uri = 'lost-and-found';

var LostAndFoundResource = /*#__PURE__*/function (_Resource) {
  _inherits(LostAndFoundResource, _Resource);

  var _super = _createSuper(LostAndFoundResource);

  function LostAndFoundResource() {
    _classCallCheck(this, LostAndFoundResource);

    return _super.call(this, uri);
  }

  _createClass(LostAndFoundResource, [{
    key: "updateActive",
    value: function updateActive(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/active"),
        method: 'post',
        data: data
      });
    }
  }]);

  return LostAndFoundResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/trackingData.js":
/*!**********************************************!*\
  !*** ./resources/js/src/api/trackingData.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrackingDataResource; });
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



var uri = 'tracking';

var TrackingDataResource = /*#__PURE__*/function (_Resource) {
  _inherits(TrackingDataResource, _Resource);

  var _super = _createSuper(TrackingDataResource);

  function TrackingDataResource() {
    _classCallCheck(this, TrackingDataResource);

    return _super.call(this, uri);
  }

  _createClass(TrackingDataResource, [{
    key: "getData",
    value: function getData(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "".concat(uri, "/datagrid"),
        method: 'post',
        data: data
      });
    }
  }]);

  return TrackingDataResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/color.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/color.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  components: {},
  template: "\n    <div v-if=\"params.data\">\n        <div id=\"col\" :style=\"style\"></div>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      style: {
        height: '27px',
        width: '65px',
        backgroundColor: ''
      }
    };
  },
  computed: {},
  beforeMount: function beforeMount() {},
  created: function created() {// this.setColor()
  },
  mounted: function mounted() {
    if (this.params.data) {
      this.data = this.params.data.color;
      this.style.backgroundColor = this.data;
    }
  },
  methods: {
    setColor: function setColor() {
      var div = document.getElementById('col');

      if (div !== null) {
        div.style.backgroundColor = 'red';
      }
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/lost-and-found/LostAndFound.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true& */ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true&");
/* harmony import */ var _LostAndFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LostAndFound.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& */ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LostAndFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00d993d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/lost-and-found/LostAndFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LostAndFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=style&index=0&id=00d993d6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_style_index_0_id_00d993d6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/lost-and-found/LostAndFound.vue?vue&type=template&id=00d993d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LostAndFound_vue_vue_type_template_id_00d993d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/lost-and-found/components/action_grid.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/lost-and-found/components/action_grid.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item v-if=\"params.data.is_active != undefined\" @click=\"activeDeactive()\">{{ params.data.is_active == true ? $t('common.menu.deactive') : $t('common.menu.active') }}</vs-dropdown-item>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\">\n                        <vs-button @click=\"openAlert()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
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
    },
    mounted: function mounted() {}
  }
}));

/***/ })

}]);