(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/reservation/guestGroup */ "./resources/js/src/api/reservation/guestGroup.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _components_ReservationGroupForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ReservationGroupForm */ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue");
/* harmony import */ var _components_action_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/action_grid */ "./resources/js/src/views/pages/reservations/guest-group/components/action_grid.js");


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





 // <!------------------additional element---------------------->
// ------for format----- //

 // <!------------------end additional element---------------------->







var guestGroupResource = new _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_9__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_8__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GuestGroup',
  props: {
    titleForm: String,
    mainTableName: String
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader__WEBPACK_IMPORTED_MODULE_11__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_10__["default"],
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ReservationGroupForm: _components_ReservationGroupForm__WEBPACK_IMPORTED_MODULE_12__["default"]
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
        text: this.$t('common.filter.contactPerson'),
        value: '2'
      }, {
        text: this.$t('common.filter.address'),
        value: '3'
      }, {
        text: this.$t('common.filter.phone'),
        value: '4'
      }, {
        text: this.$t('common.filter.fax'),
        value: '5'
      }, {
        text: this.$t('common.filter.email'),
        value: '6'
      }, {
        text: this.$t('common.filter.website'),
        value: '7'
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: '8'
      }],
      // query data search
      limitPageSize: 0,
      search: {
        searchBy: '',
        keyword: '',
        limit: 0,
        filter: []
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
      paginationPageSize: null,
      rowSelection: null,
      dataTracking: null,
      // Parameter From Child
      idData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modePopUp: 0,
      modeDataValueTracking: 0,
      modeChildValue: '',
      modeScheduledRate: 0,
      modeExtraCharge: 0,
      // data error handling from laravel validation//
      dbErrors: {},
      // Pop Up
      modalMain: false,
      childModal: false,
      modalReservationForm: false,
      // ------------------need setting manual-----------------//
      // for vModel Data
      vModel: {
        full_name: ''
      },
      // package
      account: null,
      city: [],
      state: [],
      // ------------------additional-------------------------//
      // Data Lookup//
      dataLookup: {},
      // validation scope//
      scope1: 'reservation',
      resetOnChangeState: false,
      resetOnChangeCity: false,
      paramsData: '',
      btnSaveDisabled: false,
      modalPreventClose: false,
      modalPreventClose2: false,
      destroyComponent: false // ------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'number',
      enableRowGroup: false,
      suppressMenu: true,
      resizable: false,
      filter: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 120
    }, {
      headerName: this.$t('common.table.code'),
      field: 'code',
      width: 90
    }, {
      headerName: this.$t('common.table.name'),
      field: 'name',
      width: 200
    }, {
      headerName: this.$t('common.table.resv'),
      field: 'reservation',
      width: 109
    }, {
      headerName: this.$t('common.table.inHouse'),
      field: 'folio',
      width: 109
    }, {
      headerName: this.$t('common.table.contactPerson'),
      field: 'contact_person',
      width: 200
    }, {
      headerName: this.$t('common.table.address'),
      field: 'address',
      width: 200
    }, {
      headerName: "".concat(this.$t('common.table.phone'), "1"),
      field: 'phone1',
      width: 150
    }, {
      headerName: "".concat(this.$t('common.table.phone'), "2"),
      field: 'phone2',
      width: 150
    }, {
      headerName: this.$t('common.table.fax'),
      field: 'fax',
      width: 150
    }, {
      headerName: this.$t('common.table.email'),
      field: 'email',
      width: 150
    }, {
      headerName: this.$t('common.table.website'),
      field: 'website',
      width: 150
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 150
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _components_action_grid__WEBPACK_IMPORTED_MODULE_13__["default"]
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
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showForm('', _this.global.modeData.insert);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.edit);
        }
      }, {
        name: this.$t('common.contextMenu.duplicate'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('duplicate_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.duplicate);
        }
      }, {
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteGuestGroup(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.insertReservation'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.handleShowReservationForm();
        }
      }, {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.tracking);
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

                _this2.showForm(_this2.paramsData, _this2.global.modeData.edit);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    handleShowReservationForm: function handleShowReservationForm() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$guestGroupReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this3.getSelectedRow()) {
                  _context2.next = 15;
                  break;
                }

                _this3.resetData();

                _this3.$loadingIndicator(_this3);

                _context2.next = 5;
                return guestGroupResource.get(_this3.getSelectedRow());

              case 5:
                _yield$guestGroupReso = _context2.sent;
                data = _yield$guestGroupReso.data;
                _this3.vModel.full_name = data.name;
                _this3.vModel.reservation_by = data.name;
                _this3.vModel.group_code = data.code;

                _this3.$refs.reservationForm.resetData();

                _this3.$refs.reservationForm.getDataLookUp();

                _context2.next = 14;
                return _this3.$refs.reservationForm.getRoomNumber(null);

              case 14:
                // this.$closeLoadingIndicator(this);
                _this3.modalReservationForm = true;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getSelectedRow: function getSelectedRow() {
      var row = this.gridApi.getSelectedRows();

      if (row.length > 0) {
        return row[0].code;
      }

      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].selectField();
    },
    showFormReservationGroup: function showFormReservationGroup(result) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (result) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return _this4.refreshData(_this4.search);

              case 3:
                _this4.modalReservationForm = result;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // ------------------ GROUP CRUD------------------//
    getGuestGroupList: function getGuestGroupList(search) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var selectedNodes, _yield$guestGroupReso2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                selectedNodes = _this5.gridApi != null ? _this5.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context4.next = 5;
                return guestGroupResource.list(search);

              case 5:
                _yield$guestGroupReso2 = _context4.sent;
                data = _yield$guestGroupReso2.data;
                _this5.rowData = data;

                _this5.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["rowSelectedAfterRefresh"])(_this5, selectedNodes, 'code');
                });

                _this5.$closeLoadingIndicator(_this5);

                _context4.next = 16;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorFetchDataAlert();

                _this5.$closeLoadingIndicator(_this5);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }))();
    },
    handleDeleteGuestGroup: function handleDeleteGuestGroup(paramsData) {
      var _this6 = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('button.yes'),
        cancelText: this.$t('button.no'),
        accept: function accept() {
          return _this6.deleteGuestGroup(paramsData);
        }
      });
    },
    deleteGuestGroup: function deleteGuestGroup(paramsData) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params, _yield$guestGroupReso3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  code: paramsData.code,
                  id_log: paramsData.id_log,
                  user_id: _this7.global.userInfo.code
                };
                _context5.prev = 1;

                _this7.$loadingIndicator(_this7);

                _context5.next = 5;
                return guestGroupResource["delete"](params);

              case 5:
                _yield$guestGroupReso3 = _context5.sent;
                data = _yield$guestGroupReso3.data;

                if (data == 0) {
                  _this7.refreshData(_this7.search);

                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].deleteAlertSuccess();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].information(_this7.$t("responseStatus.deletedData.".concat(data)));
                }

                _this7.$closeLoadingIndicator(_this7);

                _context5.next = 15;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorDeleteDataAlert();

                _this7.$closeLoadingIndicator(_this7);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 11]]);
      }))();
    },
    editGuestGroup: function editGuestGroup(id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$guestGroupReso4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return guestGroupResource.get(id);

              case 3:
                _yield$guestGroupReso4 = _context6.sent;
                data = _yield$guestGroupReso4.data;
                _this8.vModel = data; // this.$closeLoadingIndicator(this);

                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorFetchDataAlert();

                _this8.$closeLoadingIndicator(_this8);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }))();
    },
    updateGuestGroup: function updateGuestGroup(params) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _this9.btnSaveDisabled = true;
                _context7.next = 4;
                return guestGroupResource.update(params);

              case 4:
                _this9.btnSaveDisabled = false;

                _this9.refreshData(_this9.search);

                _this9.modalMain = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces(); // this.$closeLoadingIndicator(this);

                _context7.next = 17;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](0);
                _this9.btnSaveDisabled = false;
                message = _context7.t0.response.data.errors;
                _this9.dbErrors = message == undefined ? '' : message;

                _this9.$closeLoadingIndicator(_this9);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorSaveDataAlert(message);

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 10]]);
      }))();
    },
    insertGuestGroup: function insertGuestGroup(params) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$guestGroupReso5, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _this10.btnSaveDisabled = true;
                _context8.next = 4;
                return guestGroupResource.store(params);

              case 4:
                _yield$guestGroupReso5 = _context8.sent;
                data = _yield$guestGroupReso5.data;
                _this10.btnSaveDisabled = false;

                _this10.refreshData(_this10.search);

                _this10.modalMain = false; // this.$closeLoadingIndicator(this);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();
                _context8.next = 19;
                break;

              case 12:
                _context8.prev = 12;
                _context8.t0 = _context8["catch"](0);
                _this10.btnSaveDisabled = false;
                message = _context8.t0.response.data.errors;
                _this10.dbErrors = message == undefined ? '' : message;

                _this10.$closeLoadingIndicator(_this10);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorSaveDataAlert(message);

              case 19:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 12]]);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this11.global.tableName.guestGroup
                };

                _this11.$loadingIndicator(_this11);

                _context9.prev = 2;
                _context9.next = 5;
                return trackingDataResource.getData(params);

              case 5:
                _yield$trackingDataRe = _context9.sent;
                data = _yield$trackingDataRe.data;
                _this11.dataTracking = data.modelGrid;
                _this11.modalMain = true;
                _context9.next = 14;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorFetchDataAlert();

              case 14:
                _this11.$closeLoadingIndicator(_this11);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[2, 11]]);
      }))();
    },
    refreshData: function refreshData(search) {
      this.search = search;
      this.$loadingIndicator(this);
      this.getGuestGroupList(search);
    },
    resetData: function resetData() {
      this.vModel = {
        arrival: this.getDateTimeArrival(),
        departure: this.departureResv,
        adult: 1,
        child: 0,
        rooms: 1,
        commission_value: 0,
        room_type_code: this.dvRoomType,
        weekday_rate: 0,
        weekend_rate: 0,
        weekday_rate_discount: 0,
        weekend_rate_discount: 0,
        discount: 0,
        discount_percent: '0',
        payment_type_code: this.dvPaymentType,
        market_code: this.defaultMarket,
        is_incognito: false,
        audit_date: this.auditDate,
        reservation_number: 0,
        balance: 0,
        user_id: this.global.userInfo.code
      };
      this.dbErrors = {};
      this.dataTracking = null;
      this.$validator.reset();
    },
    showForm: function showForm(idData, modeData) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var w1, w2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this12.idData = idData;
                _this12.modeDataValue = modeData;

                _this12.$loadingIndicator(_this12);

                _this12.resetData();

                if (!(modeData === _this12.global.modeData.edit || modeData === _this12.global.modeData.duplicate)) {
                  _context12.next = 15;
                  break;
                }

                _context12.next = 7;
                return _this12.editGuestGroup(_this12.idData.code);

              case 7:
                w1 = new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(resolve, reject) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            _context10.next = 2;
                            return _this12.getDataLookUp();

                          case 2:
                            resolve();

                          case 3:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                w2 = new Promise( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(resolve, reject) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _this12.getState();

                          case 2:
                            resolve();

                          case 3:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x3, _x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
                _context12.next = 11;
                return Promise.all([w1, w2]);

              case 11:
                // wait result
                if (modeData === _this12.global.modeData.duplicate) {
                  _this12.vModel.code = '';
                }

                _this12.modalMain = true;
                _context12.next = 22;
                break;

              case 15:
                if (!(modeData === _this12.global.modeData.insert)) {
                  _context12.next = 21;
                  break;
                }

                _context12.next = 18;
                return _this12.getDataLookUp();

              case 18:
                _this12.modalMain = true;
                _context12.next = 22;
                break;

              case 21:
                if (modeData === _this12.global.modeData.tracking) {
                  _this12.trackingData(idData);
                }

              case 22:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    // checkStatusModal(){
    //     if(this.modalMain === false){
    //         setTimeout(this.checkStatusModal(), 200);
    //     } else {
    //         this.$closeLoadingIndicator(this);
    //     }
    // },
    showReservationForm: function showReservationForm() {
      this.modalReservationForm = true;
    },
    saveData: function saveData() {
      var _this13 = this;

      this.$validator.validateAll(this.scope1).then(function (result) {
        if (result) {
          _this13.$loadingIndicator(_this13);

          _this13.vModel.user_id = _this13.global.userInfo.code;

          if (_this13.modeDataValue === _this13.global.modeData.insert || _this13.modeDataValue === _this13.global.modeData.duplicate) {
            _this13.insertGuestGroup(_this13.vModel);
          } else if (_this13.modeDataValue === _this13.global.modeData.edit) {
            _this13.updateGuestGroup(_this13.vModel);
          }
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].inputRequiredAlert();
        }
      });
    },
    addZeroHour: function addZeroHour(i) {
      var a = i;

      if (a < 10) {
        a = "0".concat(a);
      }

      return a;
    },
    getDateTimeArrival: function getDateTimeArrival() {
      var time = new Date();
      var h = this.addZeroHour(time.getHours());
      var m = this.addZeroHour(time.getMinutes());
      var s = this.addZeroHour(time.getSeconds());
      var times = "".concat(h, ":").concat(m, ":").concat(s);
      var arrResv = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(times));
      return arrResv;
    },
    // ------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function getDataLookUp() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var params, _yield$reservationRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                params = {
                  country: true
                };
                _context13.next = 4;
                return reservationResource.dataLookup(params);

              case 4:
                _yield$reservationRes = _context13.sent;
                data = _yield$reservationRes.data;
                _this14.dataLookup = data; // this.$closeLoadingIndicator(this);

                _context13.next = 13;
                break;

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](0);

                _this14.$closeLoadingIndicator(_this14);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 9]]);
      }))();
    },
    getState: function getState(state) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var params, _yield$reservationRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!_this15.vModel.country_code) {
                  _context14.next = 15;
                  break;
                }

                params = {
                  country_code: _this15.vModel.country_code,
                  state_code: _this15.vModel.state_code,
                  state: true,
                  city: true
                };
                _context14.prev = 2;
                _context14.next = 5;
                return reservationResource.dataLookup(params);

              case 5:
                _yield$reservationRes2 = _context14.sent;
                data = _yield$reservationRes2.data;

                if (state == 'country') {
                  _this15.resetOnChangeState = true;
                } else if (state == 'state') {
                  _this15.resetOnChangeState = false;
                  _this15.resetOnChangeCity = true;
                }

                _this15.state = data.state;
                _this15.city = data.city;
                _context14.next = 15;
                break;

              case 12:
                _context14.prev = 12;
                _context14.t0 = _context14["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[2, 12]]);
      }))();
    } // ------------------END POPULATE SELECT OPTIONS------------------//
    // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.destroyComponent = true;
  },
  watch: {
    modalMain: function modalMain() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (_this16.modalMain) {
                  _context15.next = 3;
                  break;
                }

                _context15.next = 3;
                return _this16.refreshData(_this16.search);

              case 3:
                _this16.$closeLoadingIndicator(_this16);

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    modalPreventClose2: function modalPreventClose2() {
      this.modalPreventClose2 = this.modalReservationForm;
    },
    modalReservationForm: function modalReservationForm() {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _this17.modalPreventClose2 = _this17.modalReservationForm;

                if (_this17.modalReservationForm) {
                  _context16.next = 4;
                  break;
                }

                _context16.next = 4;
                return _this17.refreshData(_this17.search);

              case 4:
                _this17.$closeLoadingIndicator(_this17);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    }
  },
  computed: {
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(this.checkOutLimit)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_7__["formatDateTimeDatabase"])(departure);
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    dvRoomType: function dvRoomType() {
      return this.$store.getters.dvRoomType;
    },
    dvPaymentType: function dvPaymentType() {
      return this.$store.getters.dvPaymentType;
    },
    checkOutLimit: function checkOutLimit() {
      return this.$store.getters.checkOutLimit;
    },
    defaultMarket: function defaultMarket() {
      return this.$store.getters.dvMarket;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.modalMain || this.modalReservationForm) {
      this.modalMain = false;
      this.modalReservationForm = false;
      next(false);
    } else {
      this.destroyComponent = false; // fix sidebar error

      setTimeout(function () {
        next();
      }, 10);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _action_grid_resv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./action_grid_resv */ "./resources/js/src/views/pages/reservations/guest-group/components/action_grid_resv.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// inputnumber//


 // ------for format----- //

 // <!------------------end additional element---------------------->



var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_11__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReservationGroupForm',
  props: {
    titleForm: String,
    vModel: Object,
    showModal: Boolean
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6___default.a,
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_8__["default"],
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_9__["default"]
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
      statusBar: null,
      rowSelection: null,
      // Parameter From Child
      idData: '',
      paramsDate: {},
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modePopUp: 0,
      modeDataValueTracking: 0,
      // data error handling from laravel validation//
      dbErrors: {},
      // ------------------need setting manual-----------------//
      account: null,
      nights: 1,
      tempNights: 1,
      discount: 0,
      availableRoom: 0,
      roomNumber: [],
      roomRate: [],
      city: [],
      state: [],
      readyRoom: false,
      // ------------------additional-------------------------//
      // Data Lookup//
      dataLookup: {},
      roomRates: [],
      rateB4: {},
      bedTypes: [],
      // Data table//
      // validation scope//
      scope1: 'personalInformation',
      scope2: 'stayInformation',
      // save disable button
      showTimeRangePanel: false,
      resetOnChange: false,
      resetOnOptionsChangeCity: false,
      resetOnOptionsChangeState: false,
      // title popup//
      title: '',
      resvStatus: '',
      btnSaveDisabled: false,
      // Credential
      activeCredentialPrompt: false,
      isCredential: false,
      isReason: false,
      credentialTitle: '',
      credential: {
        user: '',
        pass: ''
      },
      specialAccessType: 1000 // ------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('common.table.action'),
      field: 'index',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 80
    }, {
      headerName: this.$t('reservation.table.arrivalDate'),
      field: 'arrival',
      width: 150
    }, {
      headerName: this.$t('reservation.table.departureDate'),
      field: 'departure',
      width: 150
    }, {
      headerName: this.$t('reservation.table.adult'),
      field: 'adult',
      width: 80,
      cellStyle: {
        textAlign: 'right'
      }
    }, {
      headerName: this.$t('reservation.table.child'),
      field: 'child',
      width: 80,
      cellStyle: {
        textAlign: 'right'
      }
    }, {
      headerName: this.$t('reservation.table.roomType'),
      field: 'room_type_code',
      width: 110
    }, {
      headerName: this.$t('reservation.table.bedType'),
      field: 'bed_type_code',
      width: 110
    }, {
      headerName: this.$t('reservation.table.rooms'),
      field: 'rooms',
      width: 80,
      cellStyle: {
        textAlign: 'right'
      }
    }, {
      headerName: this.$t('reservation.table.roomRate'),
      field: 'room_rate_code',
      width: 180
    }, {
      headerName: this.$t('reservation.table.weekdayRate'),
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.weekendRate'),
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.discount'),
      field: 'Discount',
      width: 110
    }, {
      headerName: this.$t('reservation.table.percent'),
      field: 'DiscountPercent',
      width: 110
    }, {
      headerName: this.$t('reservation.table.commission'),
      field: 'CommisssionValue',
      cellStyle: {
        textAlign: 'right'
      },
      width: 110,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.percent'),
      field: 'CommissionPercent',
      width: 110
    }, {
      headerName: this.$t('reservation.table.billInstruction'),
      field: 'BillInstruction',
      width: 250
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _action_grid_resv__WEBPACK_IMPORTED_MODULE_12__["default"]
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
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.delete'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_7__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleDeleteData(_this.paramsData);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      var vm = this;
      vm.gridApi.forEachNode(function (node) {
        if (node.data.index == vm.paramsData.index) {
          node.setSelected(true, true);
        }
      });
    },
    // ------------------need setting manual for crud-----------------//
    // ------------------ RESERVATION CRUD------------------//
    handleInsertReservation2: function handleInsertReservation2() {
      if (this.availableRoom >= this.vModel.rooms) {
        if (this.rowData == null) {
          this.rowData = [];
        } else {
          this.rowData = this.getAllRows();
        }

        if (this.rowData.length >= 0) {
          this.vModel.index = this.rowData.length;
        }

        this.getAvailableRoom();
        this.rowData.push(this.cloneObject(this.vModel));
      } else {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].noRoomAvailable();
      }
    },
    handleInsertReservation: function handleInsertReservation() {
      var _this2 = this;

      this.$validator.validateAll(this.scope2).then(function (result) {
        if (result) {
          if (_this2.vModel.weekday_rate < _this2.rateB4.weekday_rate || _this2.vModel.weekend_rate < _this2.rateB4.weekend_rate || _this2.vModel.discount > _this2.rateB4.discount) {
            _this2.showCredential('', true, false, _this2.global.accessSpecialOrder.overrideRateDiscount, _this2.$t('specialAccessList.overrideRateDiscount'));
          } else {
            _this2.handleInsertReservation2();
          }
        } else {
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].inputRequiredAlert();
        }
      });
    },
    cloneObject: function cloneObject(object) {
      var clone = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) // ensure not adding inherited props
          {
            clone[key] = object[key];
          }
      }

      return clone;
    },
    getAvailableRoom: function getAvailableRoom(type) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, _yield$reservationRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  room_type_code: _this3.vModel.room_type_code,
                  bed_type_code: _this3.vModel.bed_type_code,
                  ready: _this3.readyRoom,
                  arrival: _this3.vModel.arrival,
                  departure: _this3.vModel.departure
                };
                _context.prev = 1;
                _context.next = 4;
                return reservationResource.availableRoom(params);

              case 4:
                _yield$reservationRes = _context.sent;
                data = _yield$reservationRes.data;
                _this3.availableRoom = data - _this3.getTotalRoomReserved(_this3.vModel.room_type_code, _this3.vModel.bed_type_code);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    },
    handleDeleteData: function handleDeleteData() {
      var selectedData = this.gridApi.getSelectedRows();
      this.gridApi.updateRowData({
        remove: selectedData
      });
      this.getAvailableRoom();
    },
    getAllRows: function getAllRows() {
      var rowData = [];
      this.gridApi.forEachNode(function (node) {
        return rowData.push(node.data);
      });
      return rowData;
    },
    getTotalRoomReserved: function getTotalRoomReserved(roomType, bedType) {
      var rowData = this.getAllRows();
      var count = 0;

      if (roomType && !bedType) {
        rowData.forEach(function (element) {
          if (roomType == element.room_type_code) {
            count += element.rooms;
          }
        });
      } else if (roomType && bedType) {
        rowData.forEach(function (element) {
          if (roomType == element.room_type_code && bedType == element.bed_type_code) {
            count += element.rooms;
          }
        });
      }

      return count;
    },
    handleSaveData: function handleSaveData() {
      var _this4 = this;

      this.$validator.validateAll(this.scope1).then(function (result) {
        if (result) {
          _this4.btnSaveDisabled = true;

          _this4.insertReservationGroup();
        } else {
          _this4.btnSaveDisabled = false;
          _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].inputRequiredAlert();
        }
      });
    },
    insertReservationGroup: function insertReservationGroup() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var rowData, _yield$reservationRes2, data, countSuccess, countFailed;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rowData = _this5.getAllRows();

                if (!(rowData.length > 0)) {
                  _context2.next = 25;
                  break;
                }

                _this5.$vs.loading({
                  container: '#button-save-main',
                  scale: _this5.global.scaleLoadingButton
                });

                _context2.prev = 3;
                _context2.next = 6;
                return reservationResource.insertReservationGroup(rowData);

              case 6:
                _yield$reservationRes2 = _context2.sent;
                data = _yield$reservationRes2.data;
                _context2.next = 10;
                return data.countSuccess;

              case 10:
                countSuccess = _context2.sent;
                _context2.next = 13;
                return data.countFailed;

              case 13:
                countFailed = _context2.sent;

                _this5.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this5.$emit('showForm', false);

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].information("Total room reserved: ".concat(countFailed + countSuccess, "  Successful: ").concat(countSuccess, "  Failed:  ").concat(countFailed));
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](3);
                _this5.btnSaveDisabled = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorSaveDataAlert();

              case 23:
                _context2.next = 27;
                break;

              case 25:
                _this5.btnSaveDisabled = false;
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].informationNoDetail();

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 19]]);
      }))();
    },
    resetData: function resetData() {
      this.rowData = null;
      this.btnSaveDisabled = false;
      this.resetOnOptionsChangeCity = false;
      this.resetOnOptionsChangeState = false;
      this.$validator.reset();
    },
    // ------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function getDataLookUp() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var params, _yield$reservationRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = {
                  title: true,
                  member: true,
                  country: true,
                  city: true,
                  nationality: true,
                  company: true,
                  guest_type: true,
                  id_card: true,
                  business_source: true,
                  commission_type: true,
                  market: true,
                  booking_source: true,
                  payment_type: true,
                  room_type: true
                };
                _context3.prev = 1;
                _context3.next = 4;
                return reservationResource.dataLookup(params);

              case 4:
                _yield$reservationRes3 = _context3.sent;
                data = _yield$reservationRes3.data;
                _this6.dataLookup = data;
                _this6.city = data.city;

                _this6.$vs.loading.close('#layout--main>.con-vs-loading');

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](1);

                _this6.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 11]]);
      }))();
    },
    getRoomNumber: function getRoomNumber(type) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var params, _yield$reservationRes4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {
                  room_type_code: _this7.vModel.room_type_code,
                  bed_type_code: _this7.vModel.bed_type_code,
                  ready: _this7.readyRoom,
                  arrival: _this7.vModel.arrival,
                  departure: _this7.vModel.departure
                };
                _context4.prev = 1;
                _context4.next = 4;
                return reservationResource.roomNumber(params);

              case 4:
                _yield$reservationRes4 = _context4.sent;
                data = _yield$reservationRes4.data;
                _this7.roomNumber = data.room;
                _this7.availableRoom = data.available_room - _this7.getTotalRoomReserved(_this7.vModel.room_type_code, _this7.vModel.bed_type_code);

                if (type !== 'bed_type') {
                  _this7.bedTypes = data.bed_type;

                  _this7.getRoomRate();
                }

                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },
    getRoomRate: function getRoomRate() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params, _yield$reservationRes5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this8.vModel.room_type_code) {
                  _context5.next = 13;
                  break;
                }

                params = {
                  room_type: _this8.vModel.room_type_code,
                  arrival: _this8.vModel.arrival,
                  departure: _this8.vModel.departure,
                  business_source: _this8.vModel.business_source_code
                };
                _context5.prev = 2;
                _context5.next = 5;
                return reservationResource.roomRate(params);

              case 5:
                _yield$reservationRes5 = _context5.sent;
                data = _yield$reservationRes5.data;
                _this8.roomRates = data;
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[2, 10]]);
      }))();
    },
    getDailyRate: function getDailyRate() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var params, _yield$reservationRes6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                params = {
                  adult: _this9.vModel.adult,
                  room_rate: _this9.vModel.room_rate_code
                };
                _context6.prev = 1;
                _context6.next = 4;
                return reservationResource.dailyRate(params);

              case 4:
                _yield$reservationRes6 = _context6.sent;
                data = _yield$reservationRes6.data;
                _this9.rateB4 = {
                  weekday_rate: parseFloat(data.weekday_rate),
                  weekend_rate: parseFloat(data.weekend_rate),
                  discount: 0
                };
                _this9.vModel.weekday_rate = parseFloat(data.weekday_rate);
                _this9.vModel.weekend_rate = parseFloat(data.weekend_rate);

                _this9.setDiscountRate();

                _context6.next = 15;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert(_context6.t0);

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 12]]);
      }))();
    },
    getState: function getState(state) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var params, _yield$reservationRes7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!_this10.vModel.country_code) {
                  _context7.next = 13;
                  break;
                }

                params = {
                  country_code: _this10.vModel.country_code,
                  state_code: _this10.vModel.state_code,
                  city: true,
                  state: true
                };
                _context7.prev = 2;
                _context7.next = 5;
                return reservationResource.dataLookup(params);

              case 5:
                _yield$reservationRes7 = _context7.sent;
                data = _yield$reservationRes7.data;

                if (state == true) {
                  _this10.state = data.state;
                } else {
                  _this10.city = data.city;
                }

                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 10]]);
      }))();
    },
    // ------------------END POPULATE SELECT OPTIONS------------------//
    //  DATEPICKER CONFIGURATION //
    dateTodayDisable: function dateTodayDisable(date) {
      var audit = new Date(this.auditDate);
      audit.setDate(audit.getDate() - 1);
      return date < audit;
    },
    toggleTimeRangePanel: function toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    //  END DATEPICKER CONFIGURATION //
    // ----------------END OTHER OPTION------------------//
    setDiscountRate: function setDiscountRate() {
      var discount1;
      var discount2;

      if (this.vModel.discount_percent == '-1') {
        discount1 = this.vModel.weekday_rate * this.vModel.discount / 100;
        discount2 = this.vModel.weekend_rate * this.vModel.discount / 100;
      } else {
        discount1 = this.vModel.discount;
        discount2 = this.vModel.discount;
      }

      this.vModel.weekday_rate_discount = this.vModel.weekday_rate - discount1;
      this.vModel.weekend_rate_discount = this.vModel.weekend_rate - discount2;
    },
    getTotalDays: function getTotalDays() {
      var date1 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.arrival)).getTime();
      var date2 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.departure)).getTime();
      var auditDate = new Date(this.auditDate).getTime();

      if (date1 >= date2) {
        this.vModel.departure = this.departureResv2;
      }

      if (date1 < auditDate && this.modeDataValue === this.global.modeData.insert) {
        this.vModel.arrival = this.getDateTimeArrival();
      }

      var date3 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.arrival));
      var date4 = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.departure)); // To calculate the time difference of two dates

      var diffInTime = date4.getTime() - date3.getTime(); // To calculate the no. of days between two dates

      var diffInDays = diffInTime / (1000 * 3600 * 24); // restrict negatif departure

      this.nights = diffInDays;
    },
    addZeroHour: function addZeroHour(i) {
      var a = i;

      if (a < 10) {
        a = "0".concat(a);
      }

      return a;
    },
    getDateTimeArrival: function getDateTimeArrival() {
      var time = new Date();
      var h = this.addZeroHour(time.getHours());
      var m = this.addZeroHour(time.getMinutes());
      var s = this.addZeroHour(time.getSeconds());
      var times = "".concat(h, ":").concat(m, ":").concat(s);
      var arrResv = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(times));
      return arrResv;
    },
    handleChangeNight: function handleChangeNight() {
      if (this.nights > 0) {
        this.tempNights = this.nights;
        var departure = new Date(this.vModel.arrival);
        var time = new Date(this.vModel.departure);
        var h = this.addZeroHour(time.getHours());
        var m = this.addZeroHour(time.getMinutes());
        var s = this.addZeroHour(time.getSeconds());
        var times = "".concat(h, ":").concat(m, ":").concat(s);
        var arrivalDate = new Date(this.vModel.arrival).getDate();
        var departureDate = parseInt(arrivalDate) + parseInt(this.nights);
        departure.setDate(departureDate);
        departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(departure);

        if (departure >= this.auditDate) {
          this.vModel.departure = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])("".concat(departure, " ").concat(times));
        } else {
          this.getTotalDays();
        }
      } else {
        this.nights = this.tempNights;
      }
    },
    resetDate: function resetDate() {
      this.vModel.arrival = this.getDateTimeArrival();
      this.vModel.departure = this.departureResv;
      this.nights = 1;
    },
    // credential
    showCredential: function showCredential(val, isCredential, isReason, specialAccessType, title) {
      this.resetCredential();
      this.paramsData = val;
      this.activeCredentialPrompt = true;
      this.isCredential = isCredential;
      this.credentialTitle = title || this.$t('credential.title.credential');
      this.specialAccessType = specialAccessType;
      this.isReason = isReason;
    },
    acceptReason: function acceptReason() {
      var _this11 = this;

      if (this.specialAccessType === this.global.accessSpecialOrder.overrideRateDiscount) {
        setTimeout(function () {
          _this11.handleInsertReservation2();
        }, 100);
      }
    },
    resetCredential: function resetCredential() {
      this.credential = {
        user: '',
        pass: '',
        reason: ''
      };
    },
    closedCredential: function closedCredential() {
      this.btnMainSaveDisabled = false;
      this.$vs.loading.close('#button-save-main-form>.con-vs-loading');
    } // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    availableRoom: function availableRoom(value) {
      if (document.getElementById('available')) {
        if (value <= 0) {
          document.getElementById('available').style.color = '#ff0000';
        } else {
          document.getElementById('available').style.color = '';
          document.getElementById('available').classList.remove('apply-shake');
        }
      }
    },
    account: function account() {
      if (this.account !== null) {
        this.vDeposit.account_code = this.account.code;
        this.vDeposit.charge_percent = this.account.charge_percent;
        this.getTotalAmount();
      }
    }
  },
  computed: {
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(this.checkOutLimit)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(departure);
    },
    departureResv2: function departureResv2() {
      var arrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateDatabase"])(this.vModel.arrival);
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])("".concat(arrival, " ").concat(this.checkOutLimit)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_10__["formatDateTimeDatabase"])(departure);
    },
    userId: function userId() {
      return this.global.userInfo.code;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    // INPUT FIELD REQUIRED
    isTitleRequired: function isTitleRequired() {
      return this.$store.getters.isTitleRequired;
    },
    isTAVoucherRequired: function isTAVoucherRequired() {
      return this.$store.getters.isTAVoucherRequired;
    },
    isStateRequired: function isStateRequired() {
      return this.$store.getters.isStateRequired;
    },
    isRoomNumberRequired: function isRoomNumberRequired() {
      return this.$store.getters.isRoomNumberRequired;
    },
    isPhone1Required: function isPhone1Required() {
      return this.$store.getters.isPhone1Required;
    },
    isNationalityRequired: function isNationalityRequired() {
      return this.$store.getters.isNationalityRequired;
    },
    isMarketRequired: function isMarketRequired() {
      return this.$store.getters.isMarketRequired;
    },
    isHKNoteRequired: function isHKNoteRequired() {
      return this.$store.getters.isHKNoteRequired;
    },
    isEmailRequired: function isEmailRequired() {
      return this.$store.getters.isEmailRequired;
    },
    isCompanyRequired: function isCompanyRequired() {
      return this.$store.getters.isCompanyRequired;
    },
    isCityRequired: function isCityRequired() {
      return this.$store.getters.isCityRequired;
    },
    isBusinessSourceRequired: function isBusinessSourceRequired() {
      return this.$store.getters.isBusinessSourceRequired;
    },
    // DEFAULT VARIABLE
    dvRoomType: function dvRoomType() {
      return this.$store.getters.dvRoomType;
    },
    dvRoomRate: function dvRoomRate() {
      return this.$store.getters.dvRoomRate;
    },
    dvSubDepartment: function dvSubDepartment() {
      return this.$store.getters.dvSubDepartment;
    },
    dvPaymentType: function dvPaymentType() {
      return this.$store.getters.dvPaymentType;
    },
    dvComplimentRate: function dvComplimentRate() {
      return this.$store.getters.dvComplimentRate;
    },
    dvHouseUseRate: function dvHouseUseRate() {
      return this.$store.getters.dvHouseUseRate;
    },
    dvMarket: function dvMarket() {
      return this.$store.getters.dvMarket;
    },
    dvIndividualMarket: function dvIndividualMarket() {
      return this.$store.getters.dvIndividualMarket;
    },
    checkOutLimit: function checkOutLimit() {
      return this.$store.getters.checkOutLimit;
    },
    // GLOBAL ACCOUNT
    ccAdmin: function ccAdmin() {
      return this.$store.getters.cCAdmin;
    },
    cash: function cash() {
      return this.$store.getters.cash;
    },
    sdFrontOffice: function sdFrontOffice() {
      return this.$store.getters.sdFrontOffice;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form_deposit_charge.two_column.con-vs-popup .vs-popup {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-popup .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-popup .vs-popup--content {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-dialog {\n  width: auto;\n}\n.form_deposit_charge .vs-dialog .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-dialog .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-dialog .vs-dialog-text {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.payment-option .vs-dialog {\n  width: 450px;\n  max-width: 450px !important;\n}\n.payment-option .box .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  width: 170px;\n}\n@media screen and (min-width: 600px) {\n.payment-option .box #row1 {\n    margin-bottom: 15px;\n}\n.payment-option .box .button1 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button2 {\n    margin-left: 15px !important;\n}\n.payment-option .box .button3 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button4 {\n    margin-left: 15px !important;\n}\n}\n@media screen and (max-width: 579px) {\n.payment-option .box #card {\n    margin-top: 5px;\n}\n.payment-option .box #direct-bill {\n    margin-top: 5px;\n}\n.payment-option .box #other-payment {\n    margin-top: 5px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "reservation" },
    [
      _c("navigation-header", {
        attrs: {
          groupReservationButton: true,
          searchDefault: _vm.vModelDefaultSearchData,
        },
        on: {
          showModal: _vm.showForm,
          showReservation: _vm.handleShowReservationForm,
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
            ref: "mainContainer",
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
              ? _vm.global.modeDataName.tracking + _vm.idData.code
              : (_vm.modeDataValue == 0
                  ? _vm.global.modeDataName.insert
                  : _vm.global.modeDataName.edit) + _vm.titleForm,
          width: _vm.modeDataValue == _vm.global.modeData.tracking ? 600 : 80,
          active: _vm.modalMain,
          idButton1: "button-save-main",
          buttonDisabled1: _vm.btnSaveDisabled,
          textButton1: _vm.$t("button.save"),
        },
        on: {
          button1: function ($event) {
            return _vm.saveData()
          },
          close: function (val) {
            return (_vm.modalMain = val)
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
                      { staticClass: "popup-body vs-con-loading__container" },
                      [
                        _c("div", { staticClass: "form-container" }, [
                          _c(
                            "div",
                            {
                              staticClass: "popup-container",
                              attrs: { "vs-position": "left" },
                            },
                            [
                              _c(
                                "vs-collapse",
                                { attrs: { type: "margin" } },
                                [
                                  _c(
                                    "vs-row",
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          staticClass: "content-left",
                                          attrs: {
                                            "vs-lg": "6",
                                            "vs-xs": "12",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-row",
                                            {
                                              staticClass: "mt-3",
                                              attrs: {
                                                "vs-type": "flex",
                                                "vs-justify": "space-between",
                                              },
                                            },
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
                                                staticClass: "required",
                                                attrs: {
                                                  disabled:
                                                    _vm.modeDataValue ==
                                                    _vm.global.modeData.edit,
                                                  label: _vm.$t("common.code"),
                                                  "vs-lg": "6",
                                                  maxLength: 6,
                                                  "description-text": _vm._f(
                                                    "toString"
                                                  )(
                                                    _vm.errors.first(
                                                      _vm.scope1 + ".code"
                                                    ) || _vm.dbErrors.code
                                                  ),
                                                  name: "code",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value: _vm.vModel.code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "code",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.code",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
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
                                                staticClass: "w-full required",
                                                attrs: {
                                                  label:
                                                    _vm.$t("common.guest.name"),
                                                  maxLength: 50,
                                                  "description-text": _vm._f(
                                                    "toString"
                                                  )(
                                                    _vm.errors.first(
                                                      _vm.scope1 + ".name"
                                                    ) || _vm.dbErrors.name
                                                  ),
                                                  name: "name",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value: _vm.vModel.name,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.name",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "common.guest.contactPerson"
                                                  ),
                                                  maxLength: 50,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.contact_person,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "contact_person",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.contact_person",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "common.guest.street"
                                                  ),
                                                  maxLength: 100,
                                                },
                                                model: {
                                                  value: _vm.vModel.street,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "street",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.street",
                                                },
                                              }),
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
                                                        _vm.$t(
                                                          "common.guest.country"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          label: "name",
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options:
                                                            _vm.dataLookup
                                                              .country,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            return _vm.getState(
                                                              "country"
                                                            )
                                                          },
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .country_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "country_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.country_code",
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
                                                      _vm._s(
                                                        _vm.$t(
                                                          "common.guest.state"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "form-select",
                                                          resetOnOptionsChange:
                                                            _vm.resetOnChangeState,
                                                          label: "name",
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options: _vm.state,
                                                        },
                                                        on: {
                                                          input: function (
                                                            $event
                                                          ) {
                                                            return _vm.getState(
                                                              "state"
                                                            )
                                                          },
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .state_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "state_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.state_code",
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
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          staticClass: "content-right",
                                          attrs: {
                                            "vs-lg": "6",
                                            "vs-xs": "12",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-row",
                                            {
                                              staticClass: "mt-3",
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
                                                        _vm.$t(
                                                          "common.guest.city"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-row",
                                                    [
                                                      _c("v-select", {
                                                        staticClass: "w-full",
                                                        attrs: {
                                                          id: "city",
                                                          resetOnOptionsChange:
                                                            _vm.resetOnChangeCity,
                                                          label: "name",
                                                          reduce: function (
                                                            value
                                                          ) {
                                                            return value.code
                                                          },
                                                          options: _vm.city,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vModel
                                                              .city_code,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vModel,
                                                              "city_code",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vModel.city_code",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  disabled:
                                                    _vm.vModel.city_code !==
                                                    "OTH",
                                                  label: ".",
                                                },
                                                model: {
                                                  value: _vm.vModel.city,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "city",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.city",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "common.guest.website"
                                                  ),
                                                  maxLength: 50,
                                                },
                                                model: {
                                                  value: _vm.vModel.website,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "website",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.website",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "common.guest.postCode"
                                                  ),
                                                  maxLength: 10,
                                                },
                                                model: {
                                                  value: _vm.vModel.postal_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "postal_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.postal_code",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "common.guest.phone"
                                                    ) + " 1",
                                                  maxLength: 20,
                                                },
                                                model: {
                                                  value: _vm.vModel.phone1,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "phone1",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.phone1",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "common.guest.phone"
                                                    ) + " 2",
                                                  maxLength: 20,
                                                },
                                                model: {
                                                  value: _vm.vModel.phone2,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "phone2",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.phone2",
                                                },
                                              }),
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
                                                "vs-justify": "space-between",
                                              },
                                            },
                                            [
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label:
                                                    _vm.$t("common.guest.fax"),
                                                  maxLength: 20,
                                                },
                                                model: {
                                                  value: _vm.vModel.fax,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "fax",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.fax",
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c("vs-input", {
                                                staticClass: "w-full md:w-1/2",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "common.guest.email"
                                                    ),
                                                  maxLength: 50,
                                                },
                                                model: {
                                                  value: _vm.vModel.email,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "email",
                                                      $$v
                                                    )
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
                                    ],
                                    1
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
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "width-80",
          attrs: {
            "button-close-hidden": "",
            active: _vm.modalPreventClose2,
            title: _vm.$t("reservation.group.title.groupReservation"),
          },
          on: {
            "update:active": function ($event) {
              _vm.modalPreventClose2 = $event
            },
          },
        },
        [
          _vm.destroyComponent
            ? _c("reservation-group-form", {
                ref: "reservationForm",
                attrs: {
                  vModel: _vm.vModel,
                  showModal: _vm.modalReservationForm,
                },
                on: { showForm: _vm.showFormReservationGroup },
              })
            : _vm._e(),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "popup-body vs-con-loading__container" }, [
        _c("div", { staticClass: "form-container" }, [
          _c(
            "div",
            {
              ref: "popupContainer",
              staticClass: "popup-container",
              attrs: { "vs-position": "left" },
            },
            [
              _c(
                "VuePerfectScrollbar",
                {
                  staticClass: "scroll-area-popup-form pt-2",
                  attrs: { settings: _vm.global.perfectScrollbarSettings },
                },
                [
                  _c(
                    "vs-collapse",
                    { attrs: { type: "margin" } },
                    [
                      _c(
                        "vs-collapse-item",
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.$t(
                                      "registrationForm.bookingInformation.form.personalInformation"
                                    )
                                  ) +
                                  "\n                                "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                {
                                  staticClass: "content-left",
                                  attrs: { "vs-lg": "6", "vs-xs": "12" },
                                },
                                [
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
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
                                            "wrap-form-select w-full md:w-4/12",
                                          class: {
                                            required: _vm.isTitleRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.title"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isTitleRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      "isTitleRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "code",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options: _vm.dataLookup.title,
                                                  name: "title",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value: _vm.vModel.title_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "title_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.title_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope1 + ".title"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.title')",
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
                                                          _vm.scope1 + ".title"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .title_code
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
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-full vs-input md:w-8/12",
                                        },
                                        [
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
                                                staticClass: "w-full required",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "registrationForm.bookingInformation.form.fullName"
                                                  ),
                                                  maxLength: 200,
                                                  "description-text": _vm._f(
                                                    "toString"
                                                  )(
                                                    _vm.errors.first(
                                                      _vm.scope1 + ".full name"
                                                    ) || _vm.dbErrors.full_name
                                                  ),
                                                  name: "full name",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value: _vm.vModel.full_name,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "full_name",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.full_name",
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
                                        "vs-justify": "space-between",
                                      },
                                    },
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
                                        staticClass: "w-full required",
                                        attrs: {
                                          id: "resv_by",
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.resvBy"
                                          ),
                                          maxLength: 100,
                                          "description-text": _vm._f(
                                            "toString"
                                          )(
                                            _vm.errors.first(
                                              _vm.scope1 + ".resv by"
                                            ) || _vm.dbErrors.reservation_by
                                          ),
                                          name: "resv by",
                                          "data-vv-scope": _vm.scope1,
                                        },
                                        model: {
                                          value: _vm.vModel.reservation_by,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "reservation_by",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.reservation_by",
                                        },
                                      }),
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
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.member"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.member,
                                                },
                                                model: {
                                                  value: _vm.vModel.member_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "member_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.member_code",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.street"
                                          ),
                                          maxLength: 100,
                                        },
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
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
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
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.country"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.country,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    _vm.getState(true)
                                                    _vm.resetOnOptionsChangeState = true
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.country_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "country_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.country_code",
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
                                          class: {
                                            required: _vm.isStateRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.state"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isStateRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isStateRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  resetOnOptionsChange:
                                                    _vm.resetOnOptionsChangeState,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options: _vm.state,
                                                  name: "state",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    _vm.getState(false)
                                                    _vm.resetOnOptionsChangeCity = true
                                                  },
                                                },
                                                model: {
                                                  value: _vm.vModel.state_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "state_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.state_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope1 + ".state"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.state')",
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
                                                          _vm.scope1 + ".state"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .state_code
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
                                      staticClass: "mt-3",
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
                                          class: {
                                            required: _vm.isCityRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.city"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isCityRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isCityRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "city",
                                                  resetOnOptionsChange:
                                                    _vm.resetOnOptionsChangeCity,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options: _vm.city,
                                                  name: "city",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value: _vm.vModel.city_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "city_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.city_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope1 + ".city"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.city')",
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
                                                          _vm.scope1 + ".city"
                                                        ) ||
                                                          _vm.dbErrors.city_code
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
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          disabled:
                                            _vm.vModel.city_code !== "OTH",
                                          label: ".",
                                        },
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
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
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
                                          class: {
                                            required: _vm.isNationalityRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.nationality"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value:
                                                      _vm.isNationalityRequired
                                                        ? "required"
                                                        : "",
                                                    expression:
                                                      " isNationalityRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.nationality,
                                                  name: "nationality",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.nationality_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "nationality_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.nationality_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope1 +
                                                          ".nationality"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.nationality')",
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
                                                          _vm.scope1 +
                                                            ".nationality"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .nationality_code
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
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.postCode"
                                          ),
                                          maxLength: 10,
                                        },
                                        model: {
                                          value: _vm.vModel.postal_code,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "postal_code",
                                              $$v
                                            )
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
                                "vs-col",
                                {
                                  staticClass: "content-right",
                                  attrs: { "vs-lg": "6", "vs-xs": "12" },
                                },
                                [
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("vs-input", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: _vm.isPhone1Required
                                              ? "required"
                                              : "",
                                            expression:
                                              " isPhone1Required ? 'required' : ''",
                                          },
                                        ],
                                        staticClass: "w-full md:w-1/2",
                                        class: {
                                          required: _vm.isPhone1Required,
                                        },
                                        attrs: {
                                          label:
                                            _vm.$t(
                                              "registrationForm.bookingInformation.form.phone"
                                            ) + " 1",
                                          placeholder:
                                            _vm.$t("placeholder.phone"),
                                          maxLength: 50,
                                          "description-text": _vm._f(
                                            "toString"
                                          )(
                                            _vm.errors.first(
                                              _vm.scope1 + ".phone1"
                                            ) || _vm.dbErrors.phone1
                                          ),
                                          name: "phone1",
                                          "data-vv-scope": _vm.scope1,
                                        },
                                        model: {
                                          value: _vm.vModel.phone1,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.vModel, "phone1", $$v)
                                          },
                                          expression: "vModel.phone1",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label:
                                            _vm.$t(
                                              "registrationForm.bookingInformation.form.phone"
                                            ) + " 2",
                                          placeholder:
                                            _vm.$t("placeholder.phone"),
                                          maxLength: 50,
                                        },
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
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.fax"
                                          ),
                                          maxLength: 20,
                                        },
                                        model: {
                                          value: _vm.vModel.fax,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.vModel, "fax", $$v)
                                          },
                                          expression: "vModel.fax",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: _vm.isEmailRequired
                                              ? "required"
                                              : "",
                                            expression:
                                              " isEmailRequired ? 'required' : ''",
                                          },
                                        ],
                                        staticClass: "w-full md:w-1/2",
                                        class: {
                                          required: _vm.isEmailRequired,
                                        },
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.email"
                                          ),
                                          placeholder:
                                            _vm.$t("placeholder.email"),
                                          maxLength: 50,
                                          "description-text": _vm._f(
                                            "toString"
                                          )(
                                            _vm.errors.first(
                                              _vm.scope1 + ".email"
                                            ) || _vm.dbErrors.email
                                          ),
                                          name: "email",
                                          "data-vv-scope": _vm.scope1,
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
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.website"
                                          ),
                                          placeholder: _vm.$t(
                                            "placeholder.website"
                                          ),
                                          maxLength: 50,
                                        },
                                        model: {
                                          value: _vm.vModel.website,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.vModel, "website", $$v)
                                          },
                                          expression: "vModel.website",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2",
                                          class: {
                                            required: _vm.isCompanyRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.company"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: _vm.isCompanyRequired
                                                      ? "required"
                                                      : "",
                                                    expression:
                                                      " isCompanyRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.company,
                                                  name: "company",
                                                  "data-vv-scope": _vm.scope1,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.company_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "company_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.company_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope1 + ".company"
                                                      ),
                                                      expression:
                                                        "errors.has(scope1+'.company')",
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
                                                          _vm.scope1 +
                                                            ".company"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .company_code
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
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.gsType"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.guest_type,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.guest_type_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "guest_type_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.guest_type_code",
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
                                          _c("vs-row", [_vm._v(".")]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            {
                                              staticClass:
                                                "wrap-form-select w-full",
                                            },
                                            [
                                              _c(
                                                "vs-checkbox",
                                                {
                                                  staticClass: "w-full",
                                                  staticStyle: {
                                                    padding: "0px",
                                                    margin: "inherit",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel.is_incognito,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "is_incognito",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.is_incognito",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "registrationForm.bookingInformation.form.incognitoGuest"
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
                                      staticClass: "mt-3",
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
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.idCardType"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.id_card,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.id_card_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "id_card_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.id_card_code",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.idCardNumber"
                                          ),
                                          maxLength: 25,
                                        },
                                        model: {
                                          value: _vm.vModel.id_card_number,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "id_card_number",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.id_card_number",
                                        },
                                      }),
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("vs-input", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.birthPlace"
                                          ),
                                          maxLength: 50,
                                        },
                                        model: {
                                          value: _vm.vModel.birth_place,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "birth_place",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.birth_place",
                                        },
                                      }),
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
                                              _vm._s(
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.birthDate"
                                                )
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
                                                  lang: _vm.$t("lang"),
                                                  "value-type": "YYYY-MM-DD",
                                                  clearable: "",
                                                  format: "DD/MM/YYYY",
                                                  placeholder: "DD/MM/YYYY",
                                                  label: "name",
                                                },
                                                model: {
                                                  value: _vm.vModel.birth_date,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "birth_date",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.birth_date",
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
                      _vm._v(" "),
                      _c(
                        "vx-card",
                        {
                          staticClass: "mb-3",
                          attrs: {
                            icon: "date_range",
                            title: _vm.$t(
                              "registrationForm.bookingInformation.form.stayInformation"
                            ),
                            collapseAction: "",
                          },
                        },
                        [
                          _c(
                            "vs-row",
                            [
                              _c(
                                "vs-col",
                                { staticClass: "content-left lg:w-1/2" },
                                [
                                  _c(
                                    "vs-row",
                                    {
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "end",
                                      },
                                    },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: { "vs-lg": "4", "vs-xs": "6" },
                                        },
                                        [
                                          _c("vs-input-number", {
                                            staticClass: "number-input",
                                            attrs: {
                                              min: "1",
                                              label:
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.night"
                                                ) + ":",
                                            },
                                            on: {
                                              input: function ($event) {
                                                _vm.handleChangeNight()
                                                _vm.getRoomNumber(
                                                  "bed_type",
                                                  _vm.vModel
                                                )
                                              },
                                            },
                                            model: {
                                              value: _vm.nights,
                                              callback: function ($$v) {
                                                _vm.nights = $$v
                                              },
                                              expression: "nights",
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
                                      staticClass: "mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          staticClass: "wrap-form-select",
                                          attrs: {
                                            "vs-lg": "6",
                                            "vs-xs": "12",
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _c(
                                                "span",
                                                { staticClass: "required" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "registrationForm.bookingInformation.form.arrivalDate"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]),
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
                                                  clearable: false,
                                                  "disabled-date":
                                                    _vm.dateTodayDisable,
                                                  type: "datetime",
                                                  "show-time-panel":
                                                    _vm.showTimeRangePanel,
                                                  confirm: "",
                                                  "confirm-text": "ok",
                                                  lang: _vm.$t("lang"),
                                                  "value-type":
                                                    "YYYY-MM-DD HH:mm:ss",
                                                  format: "DD/MM/YYYY HH:mm:ss",
                                                  label: "name",
                                                  name: "arrival",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: {
                                                  close: function ($event) {
                                                    _vm.showTimeRangePanel = false
                                                  },
                                                  input: function ($event) {
                                                    _vm.getTotalDays()
                                                    _vm.getRoomNumber(
                                                      "",
                                                      _vm.vModel
                                                    )
                                                  },
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "footer",
                                                    fn: function () {
                                                      return [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "mx-btn mx-btn-text",
                                                            on: {
                                                              click:
                                                                _vm.resetDate,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "common.datepicker.reset"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "mx-btn mx-btn-text",
                                                            on: {
                                                              click:
                                                                _vm.toggleTimeRangePanel,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.showTimeRangePanel
                                                                    ? _vm.$t(
                                                                        "common.datepicker.selectDate"
                                                                      )
                                                                    : _vm.$t(
                                                                        "common.datepicker.selectTime"
                                                                      )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ]),
                                                model: {
                                                  value: _vm.vModel.arrival,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "arrival",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.arrival",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".arrival"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.arrival')",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "error-text text-danger",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        _vm.scope2 + ".arrival"
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
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          staticClass: "wrap-form-select",
                                          attrs: {
                                            "vs-lg": "6",
                                            "vs-xs": "12",
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _c(
                                                "span",
                                                { staticClass: "required" },
                                                [
                                                  _vm._v(
                                                    " " +
                                                      _vm._s(
                                                        _vm.$t(
                                                          "registrationForm.bookingInformation.form.departureDate"
                                                        )
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]),
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
                                                  clearable: false,
                                                  "disabled-date":
                                                    _vm.dateTodayDisable,
                                                  type: "datetime",
                                                  "show-time-panel":
                                                    _vm.showTimeRangePanel,
                                                  confirm: "",
                                                  "confirm-text": "ok",
                                                  lang: _vm.$t("lang"),
                                                  "value-type":
                                                    "YYYY-MM-DD HH:mm:ss",
                                                  format: "DD/MM/YYYY HH:mm:ss",
                                                  label: "name",
                                                  name: "departure",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: {
                                                  close: function ($event) {
                                                    _vm.showTimeRangePanel = false
                                                  },
                                                  input: function ($event) {
                                                    _vm.getTotalDays()
                                                    _vm.getRoomNumber(
                                                      "",
                                                      _vm.vModel
                                                    )
                                                  },
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "footer",
                                                    fn: function () {
                                                      return [
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "mx-btn mx-btn-text",
                                                            on: {
                                                              click:
                                                                _vm.resetDate,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "common.datepicker.reset"
                                                                  )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "button",
                                                          {
                                                            staticClass:
                                                              "mx-btn mx-btn-text",
                                                            on: {
                                                              click:
                                                                _vm.toggleTimeRangePanel,
                                                            },
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            " +
                                                                _vm._s(
                                                                  _vm.showTimeRangePanel
                                                                    ? _vm.$t(
                                                                        "common.datepicker.selectDate"
                                                                      )
                                                                    : _vm.$t(
                                                                        "common.datepicker.selectTime"
                                                                      )
                                                                ) +
                                                                "\n                                                        "
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    },
                                                    proxy: true,
                                                  },
                                                ]),
                                                model: {
                                                  value: _vm.vModel.departure,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "departure",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.departure",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".arrival"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.arrival')",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "error-text text-danger",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        _vm.scope2 + ".arrival"
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2 required",
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.roomType"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
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
                                                staticClass: "w-full",
                                                attrs: {
                                                  disabled:
                                                    _vm.resvStatus ==
                                                    _vm.global.reservationStatus
                                                      .checkIn,
                                                  id: "form-select",
                                                  clearable: false,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.room_type,
                                                  name: "room type",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    _vm.getRoomNumber()
                                                    _vm.resetOnChange = true
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.room_type_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "room_type_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.room_type_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 +
                                                          ".room type"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.room type')",
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
                                                          _vm.scope2 +
                                                            ".room type"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .room_type_code
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
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-1/2 required",
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.bedType"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
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
                                                staticClass: "w-full",
                                                attrs: {
                                                  disabled:
                                                    _vm.resvStatus ==
                                                    _vm.global.reservationStatus
                                                      .checkIn,
                                                  id: "form-select",
                                                  resetOnOptionsChange:
                                                    _vm.resetOnChange,
                                                  clearable: false,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options: _vm.bedTypes,
                                                  name: "bed type",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    return _vm.getRoomNumber(
                                                      "bed_type"
                                                    )
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel.bed_type_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "bed_type_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.bed_type_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".bed type"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.bed type')",
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
                                                          _vm.scope2 +
                                                            ".bed type"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .bed_type_code
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
                                      staticClass: "mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "mb-3",
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-around",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-col",
                                            {
                                              staticStyle: {
                                                "margin-right": "15px",
                                              },
                                              attrs: {
                                                "vs-w": "3",
                                                "vs-xs": "12",
                                              },
                                            },
                                            [
                                              _c("vs-input-number", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'",
                                                  },
                                                ],
                                                staticClass: "number-input",
                                                attrs: {
                                                  min: "1",
                                                  label:
                                                    _vm.$t(
                                                      "registrationForm.bookingInformation.form.rooms"
                                                    ) + ":",
                                                  name: "adult",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                model: {
                                                  value: _vm.vModel.rooms,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "rooms",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.rooms",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".adult"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.adult')",
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
                                                          _vm.scope2 + ".adult"
                                                        ) || _vm.dbErrors.adult
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              staticStyle: {
                                                "margin-right": "15px",
                                              },
                                              attrs: {
                                                "vs-w": "3",
                                                "vs-xs": "12",
                                              },
                                            },
                                            [
                                              _vm.vModel.room_type_code
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        "margin-right": "5px",
                                                        "margin-top": "auto",
                                                      },
                                                      attrs: {
                                                        id: "available",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "registrationForm.bookingInformation.form.available"
                                                          )
                                                        ) +
                                                          " : " +
                                                          _vm._s(
                                                            _vm.availableRoom
                                                          )
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-around",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-col",
                                            {
                                              staticStyle: {
                                                "margin-right": "15px",
                                              },
                                              attrs: {
                                                "vs-w": "3",
                                                "vs-xs": "12",
                                              },
                                            },
                                            [
                                              _c("vs-input-number", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'",
                                                  },
                                                ],
                                                staticClass: "number-input",
                                                attrs: {
                                                  min: "1",
                                                  label:
                                                    _vm.$t(
                                                      "registrationForm.bookingInformation.form.adult"
                                                    ) + ":",
                                                  name: "adult",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                model: {
                                                  value: _vm.vModel.adult,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "adult",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.adult",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".adult"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.adult')",
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
                                                          _vm.scope2 + ".adult"
                                                        ) || _vm.dbErrors.adult
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-col",
                                            {
                                              staticStyle: {
                                                "margin-right": "15px",
                                              },
                                              attrs: {
                                                "vs-w": "3",
                                                "vs-xs": "12",
                                              },
                                            },
                                            [
                                              _c("vs-input-number", {
                                                staticClass: "number-input",
                                                attrs: {
                                                  label:
                                                    _vm.$t(
                                                      "registrationForm.bookingInformation.form.child"
                                                    ) + ":",
                                                },
                                                model: {
                                                  value: _vm.vModel.child,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "child",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.child",
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
                                    {
                                      staticClass: "mt-3",
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
                                            "wrap-form-select w-full md:w-4/12",
                                          class: {
                                            required:
                                              _vm.isBusinessSourceRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.businessSource"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value:
                                                      _vm.isBusinessSourceRequired
                                                        ? "required"
                                                        : "",
                                                    expression:
                                                      "isBusinessSourceRequired ? 'required' : ''",
                                                  },
                                                ],
                                                staticClass: "w-full height200",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup
                                                      .business_source,
                                                  name: "business source",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    return _vm.getRoomRate(
                                                      _vm.vModel
                                                    )
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel
                                                      .business_source_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "business_source_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.business_source_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 +
                                                          ".business source"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.business source')",
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
                                                          _vm.scope2 +
                                                            ".business source"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .business_source_code
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
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-4/12",
                                        },
                                        [
                                          _c("vs-row", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.commissionType"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full height200",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup
                                                      .commission_type,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel
                                                      .commission_type_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "commission_type_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.commission_type_code",
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
                                            "wrap-form-select w-full md:w-4/12",
                                        },
                                        [
                                          _c("vs-row", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.commissionValue"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("input-number", {
                                                ref: "quantity",
                                                staticClass: "w-full",
                                                model: {
                                                  value:
                                                    _vm.vModel.commission_value,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "commission_value",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.commission_value",
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-6/12",
                                          class: {
                                            required: _vm.isMarketRequired,
                                          },
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.market"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
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
                                                staticClass: "w-full height150",
                                                attrs: {
                                                  clearable: false,
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.market,
                                                  name: "market",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                model: {
                                                  value: _vm.vModel.market_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "market_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.market_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 + ".market"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.market')",
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
                                                          _vm.scope2 + ".market"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .market_code
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
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-6/12",
                                        },
                                        [
                                          _c("vs-row", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "registrationForm.bookingInformation.form.bookingSource"
                                                )
                                              )
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("v-select", {
                                                staticClass: "w-full height150",
                                                attrs: {
                                                  id: "form-select",
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup
                                                      .booking_source,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel
                                                      .booking_source_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "booking_source_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.booking_source_code",
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
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-col",
                                { staticClass: "content-right lg:w-1/2" },
                                [
                                  _c(
                                    "span",
                                    { staticStyle: { "font-weight": "bold" } },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t(
                                            "registrationForm.bookingInformation.form.rateInformation"
                                          )
                                        )
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-6/12 required",
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.roomRate"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
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
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  clearable: false,
                                                  resetOnOptionsChange:
                                                    _vm.resetOnChange,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options: _vm.roomRates,
                                                  name: "room rate",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                on: { input: _vm.getDailyRate },
                                                model: {
                                                  value:
                                                    _vm.vModel.room_rate_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "room_rate_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.room_rate_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 +
                                                          ".room rate"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.room rate')",
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
                                                          _vm.scope2 +
                                                            ".room rate"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .room_rate_code
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
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "w-full md:w-1/2" },
                                        [
                                          _c(
                                            "vs-row",
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "wrap-form-select",
                                                  staticStyle: {
                                                    "margin-right": "5px",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "registrationForm.bookingInformation.form.discount"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-radio",
                                                {
                                                  staticClass:
                                                    "w-full wrap-form-select md:w-4/12",
                                                  attrs: {
                                                    "vs-name": "percent_amount",
                                                    "vs-value": "0",
                                                  },
                                                  on: {
                                                    input: _vm.setDiscountRate,
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .discount_percent,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "discount_percent",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.discount_percent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "registrationForm.bookingInformation.form.amount"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-radio",
                                                {
                                                  staticClass:
                                                    "w-full wrap-form-select md:w-3/12",
                                                  attrs: {
                                                    "vs-name": "percent_amount",
                                                    "vs-value": "-1",
                                                  },
                                                  on: {
                                                    input: _vm.setDiscountRate,
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vModel
                                                        .discount_percent,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vModel,
                                                        "discount_percent",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vModel.discount_percent",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "registrationForm.bookingInformation.form.percent"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
                                            [
                                              _c("input-number", {
                                                staticClass: "w-full",
                                                on: {
                                                  input: _vm.setDiscountRate,
                                                },
                                                model: {
                                                  value: _vm.vModel.discount,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "discount",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "vModel.discount",
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("input-number", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.weekday"
                                          ),
                                        },
                                        on: { input: _vm.setDiscountRate },
                                        model: {
                                          value: _vm.vModel.weekday_rate,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "weekday_rate",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.weekday_rate",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("input-number", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: { disabled: "", label: "." },
                                        model: {
                                          value:
                                            _vm.vModel.weekday_rate_discount,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "weekday_rate_discount",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vModel.weekday_rate_discount",
                                        },
                                      }),
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("input-number", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.weekend"
                                          ),
                                        },
                                        on: { input: _vm.setDiscountRate },
                                        model: {
                                          value: _vm.vModel.weekend_rate,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "weekend_rate",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.weekend_rate",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("input-number", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: { disabled: "", label: "." },
                                        model: {
                                          value:
                                            _vm.vModel.weekend_rate_discount,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "weekend_rate_discount",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vModel.weekend_rate_discount",
                                        },
                                      }),
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
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "wrap-form-select w-full md:w-6/12 required",
                                        },
                                        [
                                          _c("vs-row", [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "registrationForm.bookingInformation.form.paymentType"
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "vs-row",
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
                                                staticClass: "w-full",
                                                attrs: {
                                                  id: "form-select",
                                                  clearable: false,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.payment_type,
                                                  name: "payment type",
                                                  "data-vv-scope": _vm.scope2,
                                                },
                                                model: {
                                                  value:
                                                    _vm.vModel
                                                      .payment_type_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vModel,
                                                      "payment_type_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vModel.payment_type_code",
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
                                                      value: _vm.errors.has(
                                                        _vm.scope2 +
                                                          ".payment type"
                                                      ),
                                                      expression:
                                                        "errors.has(scope2+'.payment type')",
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
                                                          _vm.scope2 +
                                                            ".payment type"
                                                        ) ||
                                                          _vm.dbErrors
                                                            .payment_type_code
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
                                      staticClass: "wrap-form-select mt-3",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c("vs-textarea", {
                                        staticClass: "w-full",
                                        attrs: {
                                          label: _vm.$t(
                                            "registrationForm.bookingInformation.form.billInstruction"
                                          ),
                                        },
                                        model: {
                                          value: _vm.vModel.bill_instruction,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vModel,
                                              "bill_instruction",
                                              $$v
                                            )
                                          },
                                          expression: "vModel.bill_instruction",
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
                        "vx-card",
                        {
                          staticClass: "vs-con-loading__container",
                          attrs: { id: "main-container" },
                        },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                icon: "add",
                                color: _vm.global.buttonColor.insert,
                              },
                              on: { click: _vm.handleInsertReservation },
                            },
                            [_vm._v(_vm._s(_vm.$t("button.insert")))]
                          ),
                          _vm._v(" "),
                          _c("ag-grid-vue", {
                            ref: "mainContainer",
                            class: _vm.global.themeAgGrid,
                            style: _vm.global.styleAgGridFrame0,
                            attrs: {
                              suppressDragLeaveHidesColumns: true,
                              enableRangeSelection: true,
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
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "footer" },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                {
                  staticClass: "w-full flex mt-2",
                  attrs: { "vs-justify": "flex-end" },
                },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mr-2",
                      staticStyle: { float: "right" },
                      attrs: {
                        disabled: _vm.btnSaveDisabled,
                        color: _vm.global.buttonColor.save,
                        id: "button-save-main",
                        icon: "save",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.handleSaveData()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.save")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticStyle: { float: "right" },
                      attrs: {
                        color: _vm.global.buttonColor.close,
                        icon: "close",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("showForm", false)
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.close")))]
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
      _c("credential", {
        attrs: {
          value: _vm.credential,
          specialAccessType: _vm.specialAccessType,
          activeCredential: _vm.activeCredentialPrompt,
          isCredential: _vm.isCredential,
          isReason: _vm.isReason,
          title: _vm.credentialTitle,
        },
        on: {
          "update:active-credential": function (val) {
            return (_vm.activeCredentialPrompt = val)
          },
          acceptReason: _vm.acceptReason,
          acceptCredential: _vm.acceptReason,
          closedCredential: function ($event) {
            return _vm.closedCredential()
          },
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

/***/ "./resources/js/src/api/reservation/guestGroup.js":
/*!********************************************************!*\
  !*** ./resources/js/src/api/reservation/guestGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestGroupResource; });
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



var tableName = 'guest_group';
var uri = 'reservation/guestgroup';

var GuestGroupResource = /*#__PURE__*/function (_Resource) {
  _inherits(GuestGroupResource, _Resource);

  var _super = _createSuper(GuestGroupResource);

  function GuestGroupResource() {
    _classCallCheck(this, GuestGroupResource);

    return _super.call(this, uri);
  }

  _createClass(GuestGroupResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }]);

  return GuestGroupResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/js/src/api/reservation/reservation.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/api/reservation/reservation.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReservationResource; });
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



var tableName = 'reservation';
var uri = 'reservation';

var ReservationResource = /*#__PURE__*/function (_Resource) {
  _inherits(ReservationResource, _Resource);

  var _super = _createSuper(ReservationResource);

  function ReservationResource() {
    _classCallCheck(this, ReservationResource);

    return _super.call(this, uri);
  }

  _createClass(ReservationResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "dataLookup",
    value: function dataLookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/datalookup',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "insertReservationGroup",
    value: function insertReservationGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/guestgroup/reservation',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "autoAssignRoom",
    value: function autoAssignRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/autoassign',
        method: 'put',
        data: data
      });
    }
  }, {
    key: "cancelReservation",
    value: function cancelReservation(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/cancel',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lockReservation",
    value: function lockReservation(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/lock',
        method: 'put',
        data: data
      });
    }
  }, {
    key: "reservationGroupList",
    value: function reservationGroupList(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/reservationgroup',
        method: 'post',
        data: params
      });
    }
  }, {
    key: "checkIn",
    value: function checkIn(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/checkin',
        method: 'put',
        data: data
      });
    }
  }, {
    key: "setWaitList",
    value: function setWaitList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/waitlist/set',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "unsetWaitList",
    value: function unsetWaitList(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/waitlist/unset',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "roomNumber",
    value: function roomNumber(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/roomnumber',
        method: 'post',
        data: params
      });
    }
  }, {
    key: "availableRoom",
    value: function availableRoom(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/availableroom',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "roomRate",
    value: function roomRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/roomrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "dailyRate",
    value: function dailyRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/dailyrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "state",
    value: function state(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/citystate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "guestProfile",
    value: function guestProfile() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/form/guestprofile',
        method: 'get'
      });
    }
  }, {
    key: "reservationStatus",
    value: function reservationStatus(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/status/' + params,
        method: 'get'
      });
    }
  }, {
    key: "print",
    value: function print(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/print/registrationform',
        method: 'get'
      });
    }
  }, {
    key: "logUserUpdateReservation",
    value: function logUserUpdateReservation(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/reservation/loguserupdatereservation',
        method: 'post',
        data: params
      });
    }
  }]);

  return ReservationResource;
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

/***/ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestGroup.vue?vue&type=template&id=334cdc8f& */ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f&");
/* harmony import */ var _GuestGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuestGroup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GuestGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestGroup.vue?vue&type=template&id=334cdc8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/GuestGroup.vue?vue&type=template&id=334cdc8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestGroup_vue_vue_type_template_id_334cdc8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReservationGroupForm.vue?vue&type=template&id=635f1c90& */ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90&");
/* harmony import */ var _ReservationGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationGroupForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReservationGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationGroupForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationGroupForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationGroupForm.vue?vue&type=template&id=635f1c90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/guest-group/components/ReservationGroupForm.vue?vue&type=template&id=635f1c90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationGroupForm_vue_vue_type_template_id_635f1c90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/components/action_grid.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/components/action_grid.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  // ICON MENU MOVE TO THE TEMPLATE TO ENABLE IT
  //     <vs-dropdown vs-trigger-click class="cursor-pointer">
  //     <vs-button :color="global.iconActionColor.menuColor" type="flat"><vs-icon icon="menu" size="small"></vs-icon></vs-button>
  //     <vs-dropdown-menu>
  //         <vs-dropdown-item @click="showPopUp(global.modeBreakdown.tracking)"><vs-icon icon="search" size="small"></vs-icon>Tracking Data</vs-dropdown-item>
  //     </vs-dropdown-menu>
  // </vs-dropdown>
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"showPopUp(global.modeData.tracking)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/tracking_icon24.png\"/>{{ $t('common.menu.trackingData') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Edit data selected\"><vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/></vs-button></vx-tooltip>\n                    <vx-tooltip v-if=\"params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In'\" class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.duplicate')\">\n                        <vs-button @click=\"showPopUp(global.modeData.duplicate)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/duplicate_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" text=\"Delete data selected\"><vs-button @click=\"openAlert()\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/></vs-button></vx-tooltip>\n               </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    showPopUp: function showPopUp(modeData) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.showForm(this.params.data, modeData);
      } else {
        this.openUndefinedAlert();
      }
    },
    openAlert: function openAlert() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleDeleteGuestGroup(this.params.data);
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
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/guest-group/components/action_grid_resv.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/guest-group/components/action_grid_resv.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-button @click=\"deleteData()\" style=\"height:30px\" :color=\"global.iconActionColor.deleteColor\" type=\"flat\">\n                        <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/delete_icon24.png\"/>\n                    </vs-button>\n                </div>\n            ",
  data: function data() {
    return {};
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    deleteData: function deleteData() {
      var _this = this;

      this.params.node.setSelected(true, true);
      setTimeout(function () {
        return _this.params.context.componentParent.handleDeleteData();
      }, 100);
    }
  }
}));

/***/ })

}]);