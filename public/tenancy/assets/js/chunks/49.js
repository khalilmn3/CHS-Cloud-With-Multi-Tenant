(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-tree-halower */ "./node_modules/vue-tree-halower/dist/v2-tree.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_tree_halower__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting.js */ "./resources/js/src/api/tools/user-setting/userSetting.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");


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












var userSetting = new _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserGroup',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_2__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_12__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_11__["default"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_8__["VTree"],
    VSelectTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_8__["VSelectTree"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9___default.a
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('common.filter.code'),
        value: '0'
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
      rowIndexBeforeDelete: undefined,
      // Parameter From Child
      idData: '',
      paramsData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      // Pop Up
      mainPopUp: false,
      trackingPopup: false,
      firstDialog: 'firstDialog',
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
      // Access Menu
      menuList: [],
      checkMenu: [],
      // 1234567890123456789012345678901234567890123456789012
      defaultAccessForm: '0000000000000000000000000000000000000000000000000000',
      // Access Report
      reportList: [],
      checkReport: [],
      // 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345
      defaultAccessReport: '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      // SPECIAL ACCESS
      //    1234567890123456789012
      defaultAccessSpecial: '0000000000000000000000',
      checkSpecialAccess: [],
      specialAccessList: [],
      // OTHER ACCESS
      //    1234567890123456789012
      defaultOtherAccess: '00000000000000000000000000',
      checkOtherAccess: [],
      otherAccessList: [],
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
    }, {
      headerName: this.$t('common.table.code'),
      field: 'code',
      width: 200
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
    addDialogCloseButton: function addDialogCloseButton(elementID) {
      if (this.global.dialog.typeDialog === 'confirm') {
        var firstDialog = document.getElementById(elementID);

        if (firstDialog !== null) {
          var headerDialog = firstDialog.getElementsByClassName('vs-dialog');
          var vm = this;
          var newElement = document.createElement('i');
          newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
          newElement.id = 'first-icon-dialog-close';
          newElement.innerText = 'close';
          newElement.addEventListener('click', function () {
            vm.mainPopUp = false;
          });
          headerDialog[0].children[0].appendChild(newElement);
        }
      }
    },
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
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_7__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showModal('', 0);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_7__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showModal(_this.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_7__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_7__["generateIconContextMenuAgGrid"])('tracking_icon24'),
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
    rowSelectedAfterRefresh: function rowSelectedAfterRefresh() {
      var countRowdata = this.gridApi.getDisplayedRowCount();
      var vm = this;
      this.gridApi.forEachNode(function (node) {
        if ((vm.vModel.code === undefined || vm.vModel.code === null) && node.rowIndex === 0 && vm.modeDataValue !== vm.global.modeData["delete"]) {
          node.setSelected(true, true);
          return false;
        }

        if (node.data.code === vm.vModel.code) {
          if (vm.modeDataValue !== vm.global.modeData["delete"]) {
            vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
            node.setSelected(true, true);
            return false;
          }
        } else if (vm.modeDataValue === vm.global.modeData["delete"] && countRowdata > 0 && (vm.global.rowIndexBeforeDelete === node.rowIndex || vm.global.rowIndexBeforeDelete - 1 === node.rowIndex)) {
          node.setSelected(true, true);
          vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
          return false;
        }
      });
    },
    getRowIndexBeforeDelete: function getRowIndexBeforeDelete() {
      var vm = this;
      this.gridApi.forEachNode(function (node) {
        if (node.isSelected()) {
          vm.global.rowIndexBeforeDelete = node.rowIndex;
        }
      });
    },
    // ------------------need setting manual for crud-----------------//
    refreshData: function refreshData(search) {
      var _this2 = this;

      this.search = search;
      this.$vs.loading({
        container: '#layout--main',
        scale: this.scaleLoadingLayout
      });
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(this.routeApi, "/table/datagrid"), {
        params: search
      }).then(function (result) {
        _this2.rowData = result.data.modelGrid;

        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        setTimeout(function () {
          _this2.rowSelectedAfterRefresh();
        }, 100);
      })["catch"](function () {
        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    resetData: function resetData() {
      this.vModel = {
        code: '',
        name: '',
        id_sort: 0,
        tabIndex: 1
      };
      this.dbErrors = {};
      this.$validator.reset();
      this.dataTracking = null;
      this.btnSaveDisabled = false;
    },
    showModal: function showModal(idData, modeData) {
      var _this3 = this;

      this.$loadingIndicator(this);
      this.resetData(this.search);
      this.idData = idData.code;
      this.modeDataValue = modeData;
      this.mainPopUp = modeData == this.global.modeData.insert;

      if (modeData == this.global.modeData.edit) {
        this.editData();
      } else if (modeData == this.global.modeData.tracking) {
        this.trackingData(idData);
      } else if (modeData == this.global.modeData.insert) {
        setTimeout(function () {
          _this3.setMenuList();

          _this3.setAccessSpecialList();

          _this3.setOtherAccessList();

          _this3.setReportList(_this3.global.userInfo.groupCode, true);

          _this3.vModel.tabIndex = 0;

          if (_this3.global.dialog.isAddHeaderCloseButton) {
            _this3.addDialogCloseButton(_this3.firstDialog);
          }

          _this3.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      }
    },
    editData: function editData() {
      var _this4 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(this.routeApi, "/").concat(this.idData, "/edit")).then(function (response) {
        _this4.vModel = response.data.data;
        _this4.vModel.access_form = response.data.accessMenu;
        _this4.vModel.access_report = response.data.accessReport;
        _this4.vModel.access_special = response.data.accessSpecial;
        _this4.vModel.other_access = response.data.otherAccess;

        _this4.setMenuList();

        _this4.setAccessSpecialList();

        _this4.setOtherAccessList();

        _this4.setReportList(_this4.idData, false);

        _this4.vModel.tabIndex = 0;
        _this4.mainPopUp = true;

        if (_this4.global.dialog.isAddHeaderCloseButton) {
          setTimeout(function () {
            _this4.addDialogCloseButton(_this4.firstDialog);
          }, 100);
        }

        _this4.$vs.loading.close('#layout--main>.con-vs-loading');
      })["catch"](function (error) {
        _this4.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    updateData: function updateData() {
      var _this5 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].put("".concat(this.routeApi, "/").concat(this.idData), this.vModel).then(function () {
        _this5.refreshData(_this5.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this5.mainPopUp = false;
      })["catch"](function (error) {
        _this5.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this5.dbErrors = message == undefined ? '' : message;

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert(message);
      });
    },
    insertData: function insertData() {
      var _this6 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post(this.routeApi, this.vModel).then(function () {
        _this6.refreshData(_this6.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _this6.mainPopUp = false;
      })["catch"](function (error) {
        _this6.btnSaveDisabled = false;
        var message = error.response.data.errors;
        _this6.dbErrors = message == undefined ? '' : message;

        _this6.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorSaveDataAlert(message);
      });
    },
    saveData: function saveData() {
      var _this7 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this7.btnSaveDisabled = true;
          _this7.vModel.user_id = _this7.global.userInfo.code;

          if (_this7.modeDataValue == 1) {
            _this7.$vs.loading({
              container: '#button-save-main',
              scale: _this7.global.scaleLoadingButton
            });

            _this7.updateData();
          } else {
            _this7.$vs.loading({
              container: '#button-save-main',
              scale: _this7.global.scaleLoadingButton
            });

            _this7.insertData();
          }
        }
      });
    },
    handleDeleteData: function handleDeleteData(data) {
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this8 = this;

      setTimeout(function () {
        _this8.modeDataValue = _this8.global.modeData["delete"];

        _this8.getRowIndexBeforeDelete();
      }, 100);
      var data = {
        code: idData.code,
        user_id: this.global.userInfo.code
      };
      this.$loadingIndicator(this);
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("".concat(this.routeApi, "/delete"), data).then(function () {
        _this8.refreshData(_this8.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].deleteAlertSuccess();
      })["catch"](function (error) {
        var message = error.response.data.errors;
        _this8.dbErrors = message == undefined ? '' : message;

        _this8.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorDeleteDataAlert(message);
      });
    },
    trackingData: function trackingData(idData) {
      var _this9 = this;

      var data = {
        id_log: idData.id_log,
        table: this.mainTableName
      };
      _utils_request_js__WEBPACK_IMPORTED_MODULE_1__["default"].post('tracking/datagrid', data).then(function (result) {
        _this9.dataTracking = result.data.modelGrid;
        _this9.trackingPopup = true;
        setTimeout(function () {
          _this9.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      })["catch"](function () {
        _this9.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    // Access main menu
    setMenuList: function setMenuList() {
      if (this.vModel.access_form == undefined || this.vModel.access_form == null) {
        this.vModel.access_form = this.defaultAccessForm;
      }

      this.menuList = [{
        id: 1000,
        title: 'Front Desk',
        expanded: true,
        children: [{
          id: this.global.accessUserMenuOrder.dashboard,
          title: this.$t('menuNameList.dashboard'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.dashboard] === '1'
        }, {
          id: this.global.accessUserMenuOrder.availability,
          title: this.$t('menuNameList.availability'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.availability] === '1'
        }, {
          id: this.global.accessUserMenuOrder.roomAvailability,
          title: this.$t('menuNameList.roomAvailability'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.roomAvailability] === '1'
        }, {
          id: this.global.accessUserMenuOrder.reservation,
          title: this.$t('menuNameList.reservation'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.reservation] === '1'
        }, {
          id: this.global.accessUserMenuOrder.guestGroup,
          title: this.$t('menuNameList.guestGroup'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.guestGroup] === '1'
        }, {
          id: this.global.accessUserMenuOrder.guestInHouse,
          title: this.$t('menuNameList.guestInHouse'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.guestInHouse] === '1'
        }, {
          id: this.global.accessUserMenuOrder.masterFolio,
          title: this.$t('menuNameList.masterFolio'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.masterFolio] === '1'
        }, {
          id: this.global.accessUserMenuOrder.deskFolio,
          title: this.$t('menuNameList.deskFolio'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.deskFolio] === '1'
        }, {
          id: this.global.accessUserMenuOrder.folioHistory,
          title: this.$t('menuNameList.folioHistory'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.folioHistory] === '1'
        }, {
          id: this.global.accessUserMenuOrder.houseKeeping,
          title: this.$t('menuNameList.houseKeeping'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.houseKeeping] === '1'
        }, {
          id: this.global.accessUserMenuOrder.lostAndFound,
          title: this.$t('menuNameList.lostAndFound'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.lostAndFound] === '1'
        }, {
          id: this.global.accessUserMenuOrder.cashierReport,
          title: this.$t('menuNameList.cashierReport'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.cashierReport] === '1'
        }]
      }, {
        id: 1001,
        title: 'Night Audit',
        expanded: true,
        children: [{
          id: this.global.accessUserMenuOrder.autoPostTransaction,
          title: this.$t('menuNameList.autoPostTransaction'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.autoPostTransaction] === '1'
        }, {
          id: this.global.accessUserMenuOrder.dayendClose,
          title: this.$t('menuNameList.dayendClose'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.dayendClose] === '1'
        }]
      }, {
        id: 1004,
        title: 'Marketing',
        expanded: true,
        children: [{
          id: this.global.accessUserMenuOrder.company,
          title: this.$t('menuNameList.company'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.company] === '1'
        }, {
          id: this.global.accessUserMenuOrder["package"],
          title: this.$t('menuNameList.package'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder["package"]] === '1'
        }, {
          id: this.global.accessUserMenuOrder.roomRate,
          title: this.$t('menuNameList.roomRate'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.roomRate] === '1'
        }, {
          id: this.global.accessUserMenuOrder.phoneBook,
          title: this.$t('menuNameList.phoneBook'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.phoneBook] === '1'
        }]
      }, {
        id: 1002,
        title: 'Back Office',
        expanded: true,
        children: [{
          id: this.global.accessUserMenuOrder.apRefundDeposit,
          title: this.$t('menuNameList.apRefundDeposit'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.apRefundDeposit] === '1'
        }, {
          id: this.global.accessUserMenuOrder.apCommissionAndOther,
          title: this.$t('menuNameList.apCommissionAndOther'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.apCommissionAndOther] === '1'
        }, {
          id: this.global.accessUserMenuOrder.arCityLedger,
          title: this.$t('menuNameList.arCityLedger'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.arCityLedger] === '1'
        }, {
          id: this.global.accessUserMenuOrder.arCityLedgerInvoice,
          title: this.$t('menuNameList.arCityLedgerInvoice'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.arCityLedgerInvoice] === '1'
        }, {
          id: this.global.accessUserMenuOrder.bankTransaction,
          title: this.$t('menuNameList.bankTransaction'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.bankTransaction] === '1'
        }, {
          id: this.global.accessUserMenuOrder.bankReconciliation,
          title: this.$t('menuNameList.bankReconciliation'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.bankReconciliation] === '1'
        }, {
          id: this.global.accessUserMenuOrder.receipt,
          title: this.$t('menuNameList.receipt'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.receipt] === '1'
        }, {
          id: this.global.accessUserMenuOrder.incomeBudget,
          title: this.$t('menuNameList.incomeBudget'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.incomeBudget] === '1'
        }, {
          id: this.global.accessUserMenuOrder.budgetStatistic,
          title: this.$t('menuNameList.budgetStatistic'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.budgetStatistic] === '1'
        }, {
          id: this.global.accessUserMenuOrder.report,
          title: this.$t('menuNameList.report'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.report] === '1'
        }]
      }, {
        id: 1003,
        title: 'Tools',
        expanded: true,
        children: [{
          id: this.global.accessUserMenuOrder.user,
          title: this.$t('menuNameList.user'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.user] === '1'
        }, {
          id: this.global.accessUserMenuOrder.userGroup,
          title: this.$t('menuNameList.userGroup'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.userGroup] === '1'
        }, {
          id: this.global.accessUserMenuOrder.configuration,
          title: this.$t('menuNameList.configuration'),
          checked: this.vModel.access_form[this.global.accessUserMenuOrder.configuration] === '1'
        }]
      }]; // this.menuCheckTab1();
    },
    setAccessMenu: function setAccessMenu(menuChecked) {
      var tempAccesForm = this.defaultAccessForm;

      for (var i = 0; i < menuChecked.length; i++) {
        if (menuChecked[i].id < 1000) {
          // Filter root, we only get children
          var index = menuChecked[i].id;
          tempAccesForm = tempAccesForm.split('');
          tempAccesForm.splice(index, 1, '1');
          tempAccesForm = tempAccesForm.join('');
        }
      }

      if (tempAccesForm != this.defaultAccessForm) {
        this.vModel.access_form = tempAccesForm;
      }
    },
    menuCheckTab1: function menuCheckTab1() {
      this.checkMenu = this.$refs.tree.getCheckedNodes();
      this.setAccessMenu(this.checkMenu);
    },
    menuSelectTab1: function menuSelectTab1() {
      this.menuCheckTab1();
    },
    // Access Report
    setReportList: function setReportList(groupCode, isNew) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$userSetting$re, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return userSetting.reportListData({
                  code: groupCode,
                  isNew: isNew
                });

              case 2:
                _yield$userSetting$re = _context.sent;
                data = _yield$userSetting$re.data;
                _this10.reportList = data.dataTree; // this.$vs.loading.close('#layout--main>.con-vs-loading');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setAccessReport: function setAccessReport(reportChecked) {
      var tempAccesReport = this.defaultAccessReport;

      for (var i = 0; i < reportChecked.length; i++) {
        if (reportChecked[i].tagOrder < 1000) {
          // Filter root, we only get children
          var index = reportChecked[i].tagOrder;
          tempAccesReport = tempAccesReport.split('');
          tempAccesReport.splice(index, 1, '1');
          tempAccesReport = tempAccesReport.join('');
        }
      }

      if (tempAccesReport != this.defaultAccessReport) {
        this.vModel.access_report = tempAccesReport;
      }
    },
    menuCheckTab2: function menuCheckTab2() {
      this.checkReport = this.$refs.tree.getCheckedNodes();
      this.setAccessReport(this.checkReport);
    },
    menuSelectTab2: function menuSelectTab2() {
      this.menuCheckTab2();
    },
    // SPECIAL ACCESS
    setAccessSpecialList: function setAccessSpecialList() {
      if (this.vModel.access_special == undefined || this.vModel.access_special == null) {
        this.vModel.access_special = this.defaultAccessSpecial;
      }

      this.specialAccessList = [{
        id: this.global.accessSpecialOrder.unlockReservation,
        title: this.$t('specialAccessList.unlockReservation'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.unlockReservation] === '1'
      }, {
        id: this.global.accessSpecialOrder.voidReservation,
        title: this.$t('specialAccessList.voidReservation'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.voidReservation] === '1'
      }, {
        id: this.global.accessSpecialOrder.voidDeposit,
        title: this.$t('specialAccessList.voidDeposit'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.voidDeposit] === '1'
      }, {
        id: this.global.accessSpecialOrder.correctDeposit,
        title: this.$t('specialAccessList.correctDeposit'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.correctDeposit] === '1'
      }, {
        id: this.global.accessSpecialOrder.decreaseStay,
        title: this.$t('specialAccessList.decreaseStay'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.decreaseStay] === '1'
      }, {
        id: this.global.accessSpecialOrder.scheduledRate,
        title: this.$t('specialAccessList.scheduledRate'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.scheduledRate] === '1'
      }, {
        id: this.global.accessSpecialOrder.breakdown,
        title: this.$t('specialAccessList.breakdown'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.breakdown] === '1'
      }, {
        id: this.global.accessSpecialOrder.extraCharge,
        title: this.$t('specialAccessList.extraCharge'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.extraCharge] === '1'
      }, {
        id: this.global.accessSpecialOrder.complimentGuest,
        title: this.$t('specialAccessList.complimentGuest'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.complimentGuest] === '1'
      }, {
        id: this.global.accessSpecialOrder.houseUseGuest,
        title: this.$t('specialAccessList.houseUseGuest'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.houseUseGuest] === '1'
      }, {
        id: this.global.accessSpecialOrder.moveRoom,
        title: this.$t('specialAccessList.moveRoom'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.moveRoom] === '1'
      }, {
        id: this.global.accessSpecialOrder.voidSubFolio,
        title: this.$t('specialAccessList.voidSubFolio'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.voidSubFolio] === '1'
      }, {
        id: this.global.accessSpecialOrder.correctSubFolio,
        title: this.$t('specialAccessList.correctSubFolio'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.correctSubFolio] === '1'
      }, {
        id: this.global.accessSpecialOrder.cancelCheckIn,
        title: this.$t('specialAccessList.cancelCheckIn'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.cancelCheckIn] === '1'
      }, {
        id: this.global.accessSpecialOrder.cancelCheckOut,
        title: this.$t('specialAccessList.cancelCheckOut'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.cancelCheckOut] === '1'
      }, {
        id: this.global.accessSpecialOrder.createMasterFolio,
        title: this.$t('specialAccessList.createMasterFolio'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.createMasterFolio] === '1'
      }, {
        id: this.global.accessSpecialOrder.printMoreInvoice,
        title: this.$t('specialAccessList.printMoreInvoice'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.printMoreInvoice] === '1'
      }, {
        id: this.global.accessSpecialOrder.modifyClosedJournal,
        title: this.$t('specialAccessList.modifyClosedJournal'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.modifyClosedJournal] === '1'
      }, {
        id: this.global.accessSpecialOrder.transfertoDeskFolio,
        title: this.$t('specialAccessList.transfertoDeskFolio'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.transfertoDeskFolio] === '1'
      }, {
        id: this.global.accessSpecialOrder.transfertoMasterFolio,
        title: this.$t('specialAccessList.transfertoMasterFolio'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.transfertoMasterFolio] === '1'
      }, {
        id: this.global.accessSpecialOrder.businessSource,
        title: this.$t('specialAccessList.businessSource'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.businessSource] === '1'
      }, {
        id: this.global.accessSpecialOrder.overrideRateDiscount,
        title: this.$t('specialAccessList.overrideRateDiscount'),
        checked: this.vModel.access_special[this.global.accessSpecialOrder.overrideRateDiscount] === '1'
      }];
    },
    setAccessSpecial: function setAccessSpecial(checked) {
      var tempAccesSpecial = this.defaultAccessSpecial;

      for (var i = 0; i < checked.length; i++) {
        if (checked[i].id < 1000) {
          // Filter root, we only get children
          var index = checked[i].id;
          tempAccesSpecial = tempAccesSpecial.split('');
          tempAccesSpecial.splice(index, 1, '1');
          tempAccesSpecial = tempAccesSpecial.join('');
        }
      }

      if (tempAccesSpecial != this.defaultAccessSpecial) {
        this.vModel.access_special = tempAccesSpecial;
      }
    },
    menuCheckTab3: function menuCheckTab3() {
      this.checkSpecialAccess = this.$refs.tree.getCheckedNodes();
      this.setAccessSpecial(this.checkSpecialAccess);
    },
    menuSelectTab3: function menuSelectTab3() {
      this.menuCheckTab3();
    },
    // Other Access
    setOtherAccessList: function setOtherAccessList() {
      if (this.vModel.other_access == undefined || this.vModel.other_access == null) {
        this.vModel.other_access = this.defaultOtherAccess.slice(0, 26);
      }

      this.otherAccessList = [{
        id: 2000,
        title: 'Deposit Tool',
        expanded: true,
        children: [{
          id: this.global.otherAccessOrder.insertDeposit,
          title: this.$t('otherAccessList.insertDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.insertDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.cashDeposit,
          title: this.$t('otherAccessList.cashDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cashDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.cardDeposit,
          title: this.$t('otherAccessList.cardDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cardDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.cashRefundDeposit,
          title: this.$t('otherAccessList.cashRefundDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cashRefundDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.voidDeposit,
          title: this.$t('otherAccessList.voidDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.voidDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.correctionDeposit,
          title: this.$t('otherAccessList.correctionDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.correctionDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.transferDeposit,
          title: this.$t('otherAccessList.transferDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.transferDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.updateSubDepartmentDeposit,
          title: this.$t('otherAccessList.updateSubDepartmentDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateSubDepartmentDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.updateRemarkDeposit,
          title: this.$t('otherAccessList.updateRemarkDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateRemarkDeposit] === '1'
        }, {
          id: this.global.otherAccessOrder.updateDocumentNumberDeposit,
          title: this.$t('otherAccessList.updateDocumentNumberDeposit'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateDocumentNumberDeposit] === '1'
        }]
      }, {
        id: 2001,
        title: 'Folio Transaction',
        expanded: true,
        children: [{
          id: this.global.otherAccessOrder.chargeTransaction,
          title: this.$t('otherAccessList.chargeTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.chargeTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.cashTransaction,
          title: this.$t('otherAccessList.cashTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cashTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.cardTransaction,
          title: this.$t('otherAccessList.cardTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cardTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.directBillTransaction,
          title: this.$t('otherAccessList.directBillTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.directBillTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.updateDirectBillTransaction,
          title: this.$t('otherAccessList.updateDirectBillTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateDirectBillTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.cashRefundTransaction,
          title: this.$t('otherAccessList.cashRefundTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.cashRefundTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.otherPaymentTransaction,
          title: this.$t('otherAccessList.otherPaymentTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.otherPaymentTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.voidTransaction,
          title: this.$t('otherAccessList.voidTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.voidTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.correctionTransaction,
          title: this.$t('otherAccessList.correctionTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.correctionTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.transferTransaction,
          title: this.$t('otherAccessList.transferTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.transferTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.updateSubDepartmentTransaction,
          title: this.$t('otherAccessList.updateSubDepartmentTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateSubDepartmentTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.updateRemarkTransaction,
          title: this.$t('otherAccessList.updateRemarkTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateRemarkTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.updateDocumentNumberTransaction,
          title: this.$t('otherAccessList.updateDocumentNumberTransaction'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.updateDocumentNumberTransaction] === '1'
        }, {
          id: this.global.otherAccessOrder.checkOut,
          title: this.$t('otherAccessList.checkOut'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.checkOut] === '1'
        }, {
          id: this.global.otherAccessOrder.printFolio,
          title: this.$t('otherAccessList.printFolio'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.printFolio] === '1'
        }]
      }, {
        id: 2002,
        title: 'Preview Report',
        expanded: true,
        children: [// {id: this.global.otherAccessOrder.editReport, title: this.$t('otherAccessList.editReport'), checked: (this.vModel.other_access[this.global.otherAccessOrder.editReport] === '1')},
        {
          id: this.global.otherAccessOrder.exportReport,
          title: this.$t('otherAccessList.exportReport'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.exportReport] === '1'
        }, {
          id: this.global.otherAccessOrder.customizeReport,
          title: this.$t('otherAccessList.customizeReport'),
          checked: this.vModel.other_access[this.global.otherAccessOrder.customizeReport] === '1'
        }]
      }]; // this.menuCheckTab1();
    },
    setOtherAccess: function setOtherAccess(menuChecked) {
      var tempOtherAccess = this.defaultOtherAccess;

      for (var i = 0; i < menuChecked.length; i++) {
        if (menuChecked[i].id < 1000) {
          // Filter root, we only get children
          var index = menuChecked[i].id;
          tempOtherAccess = tempOtherAccess.split('');
          tempOtherAccess.splice(index, 1, '1');
          tempOtherAccess = tempOtherAccess.join('');
        }
      }

      if (tempOtherAccess != this.defaultOtherAccess) {
        this.vModel.other_access = tempOtherAccess;
      }
    },
    menuCheckTab4: function menuCheckTab4() {
      this.checkOtherAccess = this.$refs.tree.getCheckedNodes();
      this.setOtherAccess(this.checkOtherAccess);
    },
    menuSelectTab4: function menuSelectTab4() {
      this.menuCheckTab4();
    },
    //
    back: function back() {
      this.mainPopUp = false;
    }
  },
  // ------------------end need setting manual for crud-----------------//
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  created: function created() {
    var _this11 = this;

    // Handle Back Button & forward on browser create hook
    var unregisterRouterGuard = this.$router.beforeEach(function (to, from, next) {
      if (_this11.mainPopUp) {
        _this11.back();

        next(false);
      } else {
        next();
      }
    }); // Destroyed hook

    this.$once('hook:destroyed', function () {
      unregisterRouterGuard();
    });
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.global.paginationDataPerPage);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".halo-tree #special-access-tree .tree-expand {\n  display: none !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          scrollOff: "",
          userGroupForm: "",
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: 600,
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
                            staticClass: "mt-2 ml-4",
                            attrs: {
                              "vs-type": "flex",
                              "vs-align": "center",
                              "vs-justify": "flex-start",
                            },
                          },
                          [
                            _c("vs-col", { attrs: { "vs-lg": "1" } }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("common.code"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { attrs: { "vs-lg": "7" } },
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
                          [
                            _c(
                              "vs-col",
                              { staticClass: "w-full" },
                              [
                                _c(
                                  "vs-tabs",
                                  {
                                    model: {
                                      value: _vm.vModel.tabIndex,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.vModel, "tabIndex", $$v)
                                      },
                                      expression: "vModel.tabIndex",
                                    },
                                  },
                                  [
                                    _c(
                                      "vs-tab",
                                      {
                                        attrs: {
                                          label: "Menu Access",
                                          value: "0",
                                        },
                                      },
                                      [
                                        _c(
                                          _vm.scrollbarTag,
                                          {
                                            tag: "component",
                                            staticClass: "scroll-area",
                                            attrs: {
                                              settings:
                                                _vm.global
                                                  .perfectScrollbarSettings,
                                            },
                                          },
                                          [
                                            _c(
                                              "vs-row",
                                              [
                                                _c(
                                                  "vs-col",
                                                  {
                                                    staticClass:
                                                      "w-full ml-4 pr-4",
                                                  },
                                                  [
                                                    _c("v-tree", {
                                                      ref: "tree",
                                                      attrs: {
                                                        data: _vm.menuList,
                                                        halfcheck: true,
                                                        radio: true,
                                                        multiple: true,
                                                      },
                                                      on: {
                                                        "node-select":
                                                          function ($event) {
                                                            return _vm.menuSelectTab1()
                                                          },
                                                        "node-check": function (
                                                          $event
                                                        ) {
                                                          return _vm.menuCheckTab1()
                                                        },
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
                                    _vm._v(" "),
                                    _c(
                                      "vs-tab",
                                      {
                                        attrs: {
                                          label: "Report Access",
                                          value: "1",
                                        },
                                      },
                                      [
                                        _c(
                                          _vm.scrollbarTag,
                                          {
                                            tag: "component",
                                            staticClass: "scroll-area",
                                            attrs: {
                                              settings:
                                                _vm.global
                                                  .perfectScrollbarSettings,
                                            },
                                          },
                                          [
                                            _c(
                                              "vs-row",
                                              [
                                                _c(
                                                  "vs-col",
                                                  {
                                                    staticClass:
                                                      "w-full ml-4 pr-4",
                                                  },
                                                  [
                                                    _c("v-tree", {
                                                      ref: "tree",
                                                      attrs: {
                                                        data: _vm.reportList,
                                                        halfcheck: true,
                                                        radio: true,
                                                        multiple: true,
                                                      },
                                                      on: {
                                                        "node-select":
                                                          function ($event) {
                                                            return _vm.menuSelectTab2()
                                                          },
                                                        "node-check": function (
                                                          $event
                                                        ) {
                                                          return _vm.menuCheckTab2()
                                                        },
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
                                    _vm._v(" "),
                                    _c(
                                      "vs-tab",
                                      {
                                        attrs: {
                                          label: "Special Access",
                                          value: "2",
                                        },
                                      },
                                      [
                                        _c(
                                          _vm.scrollbarTag,
                                          {
                                            tag: "component",
                                            staticClass: "scroll-area",
                                            attrs: {
                                              settings:
                                                _vm.global
                                                  .perfectScrollbarSettings,
                                            },
                                          },
                                          [
                                            _c(
                                              "vs-row",
                                              [
                                                _c(
                                                  "vs-col",
                                                  {
                                                    staticClass:
                                                      "w-full ml-4 pr-4",
                                                  },
                                                  [
                                                    _c("v-tree", {
                                                      ref: "tree",
                                                      attrs: {
                                                        id: "special-access-tree",
                                                        data: _vm.specialAccessList,
                                                        halfcheck: true,
                                                        radio: true,
                                                        multiple: true,
                                                      },
                                                      on: {
                                                        "node-select":
                                                          function ($event) {
                                                            return _vm.menuSelectTab3()
                                                          },
                                                        "node-check": function (
                                                          $event
                                                        ) {
                                                          return _vm.menuCheckTab3()
                                                        },
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
                                    _vm._v(" "),
                                    _c(
                                      "vs-tab",
                                      {
                                        attrs: {
                                          label: "Other Access",
                                          value: "3",
                                        },
                                      },
                                      [
                                        _c(
                                          _vm.scrollbarTag,
                                          {
                                            tag: "component",
                                            staticClass: "scroll-area",
                                            attrs: {
                                              settings:
                                                _vm.global
                                                  .perfectScrollbarSettings,
                                            },
                                          },
                                          [
                                            _c(
                                              "vs-row",
                                              [
                                                _c(
                                                  "vs-col",
                                                  {
                                                    staticClass:
                                                      "w-full ml-4 pr-4",
                                                  },
                                                  [
                                                    _c("v-tree", {
                                                      ref: "tree",
                                                      attrs: {
                                                        id: "other-access-tree",
                                                        data: _vm.otherAccessList,
                                                        halfcheck: true,
                                                        radio: true,
                                                        multiple: true,
                                                      },
                                                      on: {
                                                        "node-select":
                                                          function ($event) {
                                                            return _vm.menuSelectTab4()
                                                          },
                                                        "node-check": function (
                                                          $event
                                                        ) {
                                                          return _vm.menuCheckTab4()
                                                        },
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

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=template&id=77e97b9c& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&");
/* harmony import */ var _UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/user-setting/UserGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserGroup.vue?vue&type=template&id=77e97b9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/user-setting/UserGroup.vue?vue&type=template&id=77e97b9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserGroup_vue_vue_type_template_id_77e97b9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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