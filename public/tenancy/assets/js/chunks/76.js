(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request.js */ "./resources/js/src/utils/request.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid.js");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RoomType',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '0',
      searchFilterData: [{
        text: this.$t('common.filter.code'),
        value: '0'
      }, {
        text: this.$t('common.filter.name'),
        value: '1'
      }, {
        text: this.$t('common.filter.lastUpdate'),
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
      sideBar: null,
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
      firstDialog: 'firstDialog',
      // ------------------need setting manual for vModel-----------------//
      vModel: {},
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
      width: 110
    }, {
      headerName: this.$t('common.table.name'),
      field: 'name',
      width: 350
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 210
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    // ------------------need setting manual for crud-----------------//
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
    refreshData: function refreshData(search) {
      var _this2 = this;

      this.search = search;
      var selectedNodes = this.gridApi != null ? this.gridApi.getSelectedRows() : [];
      selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
      this.$loadingIndicator(this);
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(this.routeApi, "/table/datagrid"), {
        params: search
      }).then(function (result) {
        _this2.rowData = result.data.modelGrid;

        _this2.$vs.loading.close('#layout--main>.con-vs-loading');

        setTimeout(function () {
          _this2.rowSelectedAfterRefresh(_this2, selectedNodes, 'id_log');
        }, 100);
      })["catch"](function () {
        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    resetData: function resetData() {
      this.vModel = {
        code: '',
        name: '',
        id_sort: 0
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
      this.mainPopUp = modeData == this.global.modeData.insert || modeData == this.global.modeData.tracking;

      if (modeData == this.global.modeData.edit) {
        this.editData();
      } else if (modeData == this.global.modeData.tracking) {
        this.trackingData(idData);
        setTimeout(function () {
          if (_this3.global.dialog.isAddHeaderCloseButton) {
            _this3.addDialogCloseButton(_this3.firstDialog);
          }

          _this3.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      } else if (modeData == this.global.modeData.insert) {
        setTimeout(function () {
          if (_this3.global.dialog.isAddHeaderCloseButton) {
            _this3.addDialogCloseButton(_this3.firstDialog);
          }

          _this3.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      }
    },
    editData: function editData() {
      var _this4 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(this.routeApi, "/").concat(this.idData, "/edit")).then(function (response) {
        _this4.vModel = response.data;
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

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].put("".concat(this.routeApi, "/").concat(this.idData), this.vModel).then(function () {
        _this5.refreshData(_this5.search);

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].acceptAlertSucces();
        _this5.mainPopUp = false;

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');
      })["catch"](function (error) {
        _this5.btnSaveDisabled = false;

        _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    insertData: function insertData() {
      var _this6 = this;

      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post(this.routeApi, this.vModel).then(function () {
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
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_8__["default"].confirmationDelete(this, 'deleteData', data);
    },
    deleteData: function deleteData(idData) {
      var _this8 = this;

      this.$nextTick(function () {
        _this8.modeDataValue = _this8.global.modeData["delete"];

        _this8.getRowIndexBefore(_this8);
      });
      var data = {
        code: idData.code,
        user_id: this.global.userInfo.code
      };
      this.$loadingIndicator(this);
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(this.routeApi, "/delete"), data).then(function () {
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
      _utils_request_js__WEBPACK_IMPORTED_MODULE_0__["default"].post('tracking/datagrid', data).then(function (result) {
        _this9.dataTracking = result.data.modelGrid;
        setTimeout(function () {
          _this9.$vs.loading.close('#layout--main>.con-vs-loading');
        }, 100);
      })["catch"](function () {
        _this9.$vs.loading.close('#layout--main>.con-vs-loading');

        _utils_alert_js__WEBPACK_IMPORTED_MODULE_6__["default"].errorFetchDataAlert();
      });
    },
    back: function back() {
      this.mainPopUp = false;
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
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    currencyFormat: function currencyFormat() {
      return this.$store.state.configurations.currencyFormat;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c& ***!
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
          title:
            _vm.modeDataValue == 2
              ? _vm.global.modeDataName.tracking + _vm.idData
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: 500,
          active: _vm.mainPopUp,
          idButton1: "button-save-main",
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
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-w": "12",
                            },
                          },
                          [
                            _c("vs-col", { staticClass: "sm:w-1/6 w-full" }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("common.code"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { staticClass: "sm:w-2/5 w-full" },
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
                                    maxLength: 4,
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
                            attrs: {
                              "vs-align": "center",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-w": "12",
                            },
                          },
                          [
                            _c("vs-col", { staticClass: "sm:w-1/6 w-full" }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("common.name"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { staticClass: "sm:w-5/6 w-full" },
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
                                    "description-text": _vm._f("toString")(
                                      _vm.errors.first("name") ||
                                        _vm.dbErrors.name
                                    ),
                                    name: "name",
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

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Owner.vue?vue&type=template&id=5e6fb87c& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c&");
/* harmony import */ var _Owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Owner.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Owner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Owner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Owner.vue?vue&type=template&id=5e6fb87c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Tools/configurations/reservation1/Owner.vue?vue&type=template&id=5e6fb87c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Owner_vue_vue_type_template_id_5e6fb87c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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