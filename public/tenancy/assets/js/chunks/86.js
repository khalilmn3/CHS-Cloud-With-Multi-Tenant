(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_tree_halower_dist_halower_tree_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-tree-halower/dist/halower-tree.min.css */ "./node_modules/vue-tree-halower/dist/halower-tree.min.css");
/* harmony import */ var vue_tree_halower_dist_halower_tree_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_tree_halower_dist_halower_tree_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_tools_user_setting_userSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting */ "./resources/js/src/api/tools/user-setting/userSetting.js");


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












var userSettingResource = new _api_tools_user_setting_userSetting__WEBPACK_IMPORTED_MODULE_12__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'User',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('common.filter.name'),
        value: '0'
      }, {
        text: this.$t('common.filter.email'),
        value: '1'
      }, {
        text: this.$t('common.filter.group'),
        value: '2'
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
      // sideBar: null,
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
      updateData: {},
      userList: null,
      lookupUserGroup: [],
      // data error handling from laravel validation//
      dbErrors: {},
      btnSaveDisabled: false
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
    }, // { headerName: this.$t('table.id'), field: 'id', width: 90 },
    {
      headerName: this.$t('user.code'),
      field: 'code',
      width: 180
    }, {
      headerName: this.$t('user.full_name'),
      field: 'name',
      width: 220
    }, {
      headerName: this.$t('user.email'),
      field: 'email',
      width: 220
    }, {
      headerName: this.$t('user.role'),
      field: 'group_code',
      width: 150
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 120
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_3__["default"]
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
    }; // this.sideBar = {
    //     toolPanels: [
    //         {id: 'columns', labelDefault: 'Columns', labelKey: 'columns', iconKey: 'columns', toolPanel: 'agColumnsToolPanel'},
    //         {id: 'filters', labelDefault: 'Filters', labelKey: 'filters', iconKey: 'filter', toolPanel: 'agFiltersToolPanel'}
    //     ]
    // };

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
      }

      var result = [{
        name: this.$t('common.contextMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_9__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 2);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.code == vm.paramsData.code) {
          node.setSelected(true, true);
        }
      });
    },
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      this.search = search;
      this.getUserList();
    },
    getUserList: function getUserList() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$userSettingRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this2.$vs.loading({
                  container: '#layout--main',
                  scale: _this2.scaleLoadingLayout
                });

                _context.next = 4;
                return userSettingResource.userList(_this2.search);

              case 4:
                _yield$userSettingRes = _context.sent;
                data = _yield$userSettingRes.data;
                _this2.userList = data;

                _this2.$vs.loading.close('#layout--main>.con-vs-loading');

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

                _this2.$vs.loading.close('#layout--main>.con-vs-loading');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    getUserGroup: function getUserGroup() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$userSettingRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return userSettingResource.userGroup();

              case 3:
                _yield$userSettingRes2 = _context2.sent;
                data = _yield$userSettingRes2.data;
                _this3.lookupUserGroup = data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    editUser: function editUser() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$userSettingRes3, data, decryptPassword;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return userSettingResource.editUser(_this4.idData.id);

              case 3:
                _yield$userSettingRes3 = _context3.sent;
                data = _yield$userSettingRes3.data;
                _this4.vModel = data;
                decryptPassword = CryptoJS.AES.decrypt(data.password, _this4.global._CRYPTO_KEY, {
                  format: CryptoJSAesJson
                }).toString(CryptoJS.enc.Utf8);
                _this4.vModel.password = decryptPassword;
                _this4.vModel.c_password = decryptPassword;
                _this4.mainPopUp = true;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }))();
    },
    updateUser: function updateUser() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var encryptPassword, encryptCPassword, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                encryptPassword = CryptoJS.AES.encrypt(_this5.vModel.password, _this5.global._CRYPTO_KEY, {
                  format: CryptoJSAesJson
                }).toString();
                encryptCPassword = CryptoJS.AES.encrypt(_this5.vModel.c_password, _this5.global._CRYPTO_KEY, {
                  format: CryptoJSAesJson
                }).toString();
                _this5.updatedData = _this5.vModel;
                _this5.updatedData.password = encryptPassword;
                _this5.updatedData.c_password = encryptCPassword;
                _context4.next = 8;
                return userSettingResource.updateUser(_this5.updatedData);

              case 8:
                _this5.mainPopUp = false;

                _this5.refreshData();

                _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this5.btnSaveDisabled = false;
                _context4.next = 21;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](0);

                _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this5.btnSaveDisabled = false;
                message = _context4.t0.response.data.error;
                _this5.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorSaveDataAlert(message);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 14]]);
      }))();
    },
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  id: idData.id,
                  user_id: _this6.global.userInfo.code
                };
                _context5.prev = 1;
                _context5.next = 4;
                return userSettingResource.deleteUser(params);

              case 4:
                _this6.refreshData();

                _context5.next = 10;
                break;

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 7]]);
      }))();
    },
    insertUser: function insertUser() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$userSettingRes4, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return userSettingResource.addUser(_this7.vModel);

              case 3:
                _yield$userSettingRes4 = _context6.sent;
                data = _yield$userSettingRes4.data;

                _this7.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this7.mainPopUp = false;

                _this7.refreshData(_this7.search);

                _this7.btnSaveDisabled = false;
                _context6.next = 18;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](0);

                _this7.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this7.btnSaveDisabled = false;
                message = _context6.t0.response.data.error;
                _this7.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorSaveDataAlert(message);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 11]]);
      }))();
    },
    resetData: function resetData() {
      this.vModel = {
        code: '',
        name: '',
        email: '',
        password: '',
        c_password: '',
        user_id: this.global.userInfo.code
      };
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
    },
    showModal: function showModal(idData, modeData) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.$vs.loading({
                  container: '#layout--main',
                  scale: _this8.scaleLoadingLayout
                });

                _this8.resetData(_this8.search);

                _this8.idData = idData;
                _this8.modeDataValue = modeData;
                _context7.next = 6;
                return _this8.getUserGroup();

              case 6:
                _this8.mainPopUp = modeData == _this8.global.modeData.insert || modeData == _this8.global.modeData.tracking;

                if (modeData == _this8.global.modeData.edit) {
                  _this8.editUser();
                } else if (modeData == _this8.global.modeData.tracking) {
                  _this8.trackingData(idData);
                } else if (modeData == _this8.global.modeData.insert) {
                  setTimeout(function () {
                    _this8.$vs.loading.close('#layout--main>.con-vs-loading');
                  }, 100);
                }

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    saveData: function saveData() {
      var _this9 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this9.btnSaveDisabled = true;
          _this9.vModel.user_id = _this9.global.userInfo.code;

          if (_this9.modeDataValue == 1) {
            _this9.$vs.loading({
              container: '#button-save-main',
              scale: _this9.global.scaleLoadingButton
            });

            _this9.updateUser();
          } else {
            _this9.$vs.loading({
              container: '#button-save-main',
              scale: _this9.global.scaleLoadingButton
            });

            _this9.insertUser();
          }
        }
      });
    },
    trackingData: function trackingData(idData) {
      var _this10 = this;

      var data = {
        id_log: idData.id_log,
        table: this.mainTableName
      };
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('tracking/datagrid', data).then(function (result) {
        _this10.dataTracking = result.data.modelGrid;
        setTimeout(function () {
          _this10.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      })["catch"](function () {
        _this10.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_7__["default"].errorFetchDataAlert();
      });
    }
  },
  // get id user active//
  computed: {
    userId: {
      get: function get() {
        return this.$store.state.auth.accountCode;
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              enableRangeSelection: true,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              getContextMenuItems: _vm.getContextMenu,
              rowSelection: _vm.rowSelection,
              rowData: _vm.userList,
              defaultColDef: _vm.global.defColDef,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              cellContextMenu: _vm.handleRowRightClicked,
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
              ? _vm.global.modeDataName.tracking + _vm.idData.code
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: 500,
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
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [_vm._v(_vm._s(_vm.$t("user.code")))]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-w": "4" } },
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
                                    maxLength: 20,
                                    disabled:
                                      _vm.modeDataValue ==
                                      _vm.global.modeData.edit,
                                    type: "text",
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("code") ||
                                        _vm.dbErrors.code
                                    ),
                                    name: "code",
                                  },
                                  on: {
                                    input: function (v) {
                                      _vm.vModel.code = v.toUpperCase()
                                    },
                                  },
                                  model: {
                                    value: _vm.vModel.code,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vModel, "code", $$v)
                                    },
                                    expression: "vModel.code",
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
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("user.full_name"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-w": "9" } },
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
                                    maxLength: 100,
                                    type: "text",
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("full name") ||
                                        _vm.dbErrors.name
                                    ),
                                    name: "full name",
                                  },
                                  model: {
                                    value: _vm.vModel.name,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vModel, "name", $$v)
                                    },
                                    expression: "vModel.name",
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
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("user.email"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-w": "9" } },
                              [
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|email",
                                      expression: "'required|email'",
                                    },
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    maxLength: 255,
                                    disabled:
                                      _vm.modeDataValue ==
                                      _vm.global.modeData.edit,
                                    type: "text",
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("email") ||
                                        _vm.dbErrors.email
                                    ),
                                    name: "email",
                                  },
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
                          {
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [_vm._v(_vm._s(_vm.$t("user.role")))]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "wrap-form-select",
                                attrs: { "vs-w": "9" },
                              },
                              [
                                _c("v-select", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'",
                                    },
                                  ],
                                  staticClass: "w-full height100",
                                  attrs: {
                                    id: "form-select",
                                    placeholder: _vm.$t("placeholder.select"),
                                    label: "code",
                                    reduce: function (value) {
                                      return value.code
                                    },
                                    options: _vm.lookupUserGroup,
                                    name: "group code",
                                  },
                                  model: {
                                    value: _vm.vModel.group_code,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vModel, "group_code", $$v)
                                    },
                                    expression: "vModel.group_code",
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
                                        value: _vm.errors.has("group code"),
                                        expression: "errors.has('group code')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("group code"))
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
                        _c(
                          "vs-row",
                          {
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("user.password"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-w": "9" } },
                              [
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
                                  staticClass: "w-full",
                                  attrs: {
                                    type: "password",
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("password") ||
                                        _vm.dbErrors.password
                                    ),
                                    name: "password",
                                  },
                                  model: {
                                    value: _vm.vModel.password,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vModel, "password", $$v)
                                    },
                                    expression: "vModel.password",
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
                            staticClass: "mb-3",
                            attrs: { "vs-type": "flex", "vs-align": "center" },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-w": "3" } }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("user.confirmPassword"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-w": "9" } },
                              [
                                _c("vs-input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value:
                                        "required|confirmed:password|min:6",
                                      expression:
                                        "'required|confirmed:password|min:6'",
                                    },
                                  ],
                                  staticClass: "w-full",
                                  attrs: {
                                    type: "password",
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("confirm password") ||
                                        _vm.dbErrors.c_password
                                    ),
                                    name: "confirm password",
                                    "data-vv-as": "password",
                                  },
                                  model: {
                                    value: _vm.vModel.c_password,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vModel, "c_password", $$v)
                                    },
                                    expression: "vModel.c_password",
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

/***/ "./resources/js/src/views/pages/Tools/user-setting/user.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/user.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=0160c133& */ "./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/user-setting/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=0160c133& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/user.vue?vue&type=template&id=0160c133&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_0160c133___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                           <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\">\n                        <vs-button @click=\"openAlert()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n               </div>\n            ",
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