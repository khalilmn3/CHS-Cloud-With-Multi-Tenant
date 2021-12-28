(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sass/vuexy/components/datepicker.scss */ "./resources/sass/vuexy/components/datepicker.scss");
/* harmony import */ var _sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_components_datepicker_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/lock_icon.js */ "./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_expected_arrival_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/expected_arrival.js */ "./resources/js/src/views/pages/components/ag_grid-framework/expected_arrival.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_expected_departure_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/expected_departure.js */ "./resources/js/src/views/pages/components/ag_grid-framework/expected_departure.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_hk_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/hk_status.js */ "./resources/js/src/views/pages/components/ag_grid-framework/hk_status.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/reservation/guestGroup */ "./resources/js/src/api/reservation/guestGroup.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_masterFolio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/api/masterFolio */ "./resources/js/src/api/masterFolio.js");
/* harmony import */ var _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/api/reservation/deposit */ "./resources/js/src/api/reservation/deposit.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js");
/* harmony import */ var _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _components_reservation_status_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/reservation-status.js */ "./resources/js/src/views/pages/reservations/components/reservation-status.js");
/* harmony import */ var _components_GroupCheckInForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/GroupCheckInForm */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue");
/* harmony import */ var _components_CancelReservation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/CancelReservation */ "./resources/js/src/views/pages/reservations/components/CancelReservation.vue");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue");


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







 // <!------------------additional element---------------------->




 // ------for format----- //


 // <!------------------end additional element---------------------->












var masterFolioResource = new _api_masterFolio__WEBPACK_IMPORTED_MODULE_17__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_16__["default"]();
var guestGroupResource = new _api_reservation_guestGroup__WEBPACK_IMPORTED_MODULE_15__["default"]();
var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_14__["default"]();
var depositResource = new _api_reservation_deposit__WEBPACK_IMPORTED_MODULE_18__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Reservation',
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_24__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader__WEBPACK_IMPORTED_MODULE_20__["default"],
    GroupCheckInForm: _components_GroupCheckInForm__WEBPACK_IMPORTED_MODULE_22__["default"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_3__["default"],
    CancelReservation: _components_CancelReservation__WEBPACK_IMPORTED_MODULE_23__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '14',
      searchFilterData: [{
        text: this.$t('common.filter.status'),
        value: '0'
      }, {
        text: this.$t('common.filter.reservationBy'),
        value: '1'
      }, {
        text: this.$t('common.filter.address'),
        value: '2'
      }, {
        text: this.$t('common.filter.state'),
        value: '3'
      }, {
        text: this.$t('common.filter.country'),
        value: '4'
      }, {
        text: this.$t('common.filter.phone'),
        value: '5'
      }, {
        text: this.$t('common.filter.fax'),
        value: '6'
      }, {
        text: this.$t('common.filter.documentNumber'),
        value: '7'
      }, {
        text: this.$t('common.filter.bookingCode'),
        value: '8'
      }, {
        text: this.$t('common.filter.note'),
        value: '9'
      }, {
        text: this.$t('common.filter.hkNote'),
        value: '10'
      }, {
        text: this.$t('common.filter.roomStatus'),
        value: '11'
      }, {
        text: this.$t('common.filter.insertBy'),
        value: '12'
      }, {
        text: this.$t('common.filter.cancelBy'),
        value: '13'
      }, {
        text: this.$t('common.filter.fullName'),
        value: '14'
      }, {
        text: this.$t('common.filter.number'),
        value: '15'
      }, {
        text: this.$t('common.filter.room'),
        value: '16'
      }, {
        text: this.$t('common.filter.roomType'),
        value: '17'
      }, {
        text: this.$t('common.filter.bedType'),
        value: '18'
      }, {
        text: this.$t('common.filter.roomRate'),
        value: '19'
      }, {
        text: this.$t('common.filter.taVoucher'),
        value: '20'
      }, {
        text: this.$t('common.filter.group'),
        value: '21'
      }, {
        text: this.$t('common.filter.company'),
        value: '22'
      }, {
        text: this.$t('common.filter.market'),
        value: '23'
      }, {
        text: this.$t('common.filter.billInstruction'),
        value: '24'
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: '25'
      }],
      // form config
      rowMarginBottom: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_7__["formConfig"].rowMarginBottom,
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_7__["sidebarConfig"],
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
      pinnedBottomRowData: null,
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
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      // data error handling from laravel validation//
      dbErrors: {},
      // Pop Up
      modalGroupCheckIn: false,
      showAutoAssign: false,
      // ------------------need setting manual-----------------//
      vDeposit: {},
      // deposit
      reservationNumber: '',
      sidebarOption: false,
      // ------------------additional-------------------------//
      // Data Lookup//
      dataLookup: {},
      accounts: [],
      dataLookupDeposit: {},
      // ------CREDENTIAL-------//
      activeCredentialPrompt: false,
      credentialTitle: '',
      specialAccessType: 1000,
      isCredential: false,
      isReason: false,
      credential: {
        user: '',
        pass: ''
      },
      paramsData: '',
      paramsDataStatusCode: '',
      paramsDataIsLock: '',
      groupCheckIn: false,
      groupList: [],
      listFolio: [],
      reservationNumberList: [],
      reservationGroupList: [],
      masterFolio: null,
      sideBarDestroy: false,
      // ------------------end need setting manual-----------------//
      reservationStatus: '',
      unlockReservationStatus: ''
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
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 110
    }, {
      headerName: this.$t('reservation.table.roomStatusIcon'),
      width: 40,
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      field: 'RoomStatus',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'roomStatusRenderer'
    }, {
      headerName: this.$t('reservation.table.isLockIcon'),
      field: 'is_lock',
      enableRowGroup: false,
      resizable: false,
      filter: false,
      suppressMenu: true,
      sortable: false,
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: this.$t('reservation.table.reservationStatus'),
      field: 'ReservationStatus',
      width: 110
    }, {
      headerName: this.$t('reservation.table.fullName'),
      field: 'FullName',
      width: 230
    }, {
      headerName: this.$t('reservation.table.reservationNumber'),
      field: 'reservation_number',
      width: 90
    }, {
      headerName: this.$t('reservation.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('reservation.table.arrivalDate'),
      field: 'DateArrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatDate"],
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedArrivalRenderer'
    }, {
      headerName: this.$t('reservation.table.estimateTimeArrival'),
      field: 'TimeArrival',
      width: 112
    }, {
      headerName: this.$t('reservation.table.departureDate'),
      field: 'DateDeparture',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatDate"],
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedDepartureRenderer'
    }, {
      headerName: this.$t('reservation.table.estimateTimeDeparture'),
      field: 'TimeDeparture',
      width: 130
    }, {
      headerName: this.$t('reservation.table.roomType'),
      field: 'RoomType',
      width: 180
    }, {
      headerName: this.$t('reservation.table.deposit'),
      field: 'Deposit',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.roomRate'),
      field: 'RoomRate',
      width: 180
    }, {
      headerName: this.$t('reservation.table.weekdayRate'),
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.weekendRate'),
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.status'),
      width: 110,
      field: 'status_code',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconStatusRenderer'
    }, {
      headerName: this.$t('reservation.table.reservationBy'),
      field: 'reservation_by',
      width: 180
    }, {
      headerName: this.$t('reservation.table.market'),
      field: 'market',
      width: 150
    }, {
      headerName: this.$t('reservation.table.guestGroup'),
      field: 'GuestGroup',
      width: 200
    }, {
      headerName: this.$t('reservation.table.bookingCode'),
      field: 'booking_code',
      width: 130
    }, {
      headerName: this.$t('reservation.table.company'),
      field: 'Company',
      width: 110
    }, {
      headerName: this.$t('reservation.table.discount'),
      field: 'Discount',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatNumber"]
    }, {
      headerName: this.$t('reservation.table.percentOrAmount'),
      field: 'DiscountPercent',
      width: 110
    }, {
      headerName: this.$t('reservation.table.adult'),
      field: 'adult',
      width: 80
    }, {
      headerName: this.$t('reservation.table.child'),
      field: 'child',
      width: 80
    }, {
      headerName: this.$t('reservation.table.billInstruction'),
      field: 'BillInstruction',
      width: 250
    }, {
      headerName: this.$t('reservation.table.note'),
      field: 'notes',
      width: 200
    }, {
      headerName: this.$t('reservation.table.hkNote'),
      field: 'hk_note',
      width: 200
    }, {
      headerName: this.$t('reservation.table.address'),
      field: 'Address',
      width: 250
    }, {
      headerName: this.$t('reservation.table.state'),
      field: 'State',
      width: 150
    }, {
      headerName: this.$t('reservation.table.company'),
      field: 'Country',
      width: 180
    }, {
      headerName: this.$t('reservation.table.nationality'),
      field: 'Nationality',
      width: 180
    }, {
      headerName: this.$t('reservation.table.phone'),
      field: 'Phone',
      width: 110
    }, {
      headerName: this.$t('reservation.table.fax'),
      field: 'fax',
      width: 110
    }, {
      headerName: this.$t('reservation.table.documentNumber'),
      field: 'document_number',
      width: 110
    }, {
      headerName: this.$t('reservation.table.voucherNumberTA'),
      field: 'voucher_number_ta',
      width: 180
    }, {
      headerName: this.$t('reservation.table.firstInsert'),
      field: 'first_insert',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatDateTime"]
    }, {
      headerName: this.$t('reservation.table.insertBy'),
      field: 'insert_by',
      width: 110
    }, {
      headerName: this.$t('reservation.table.cancelDate'),
      field: 'cancel_date',
      width: 150,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatDateTime"]
    }, {
      headerName: this.$t('reservation.table.cancelBy'),
      field: 'cancel_by',
      width: 110
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_19__["default"],
      iconLockRenderer: _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      iconStatusRenderer: _components_reservation_status_js__WEBPACK_IMPORTED_MODULE_21__["default"],
      roomStatusRenderer: _views_pages_components_ag_grid_framework_hk_status_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      expectedArrivalRenderer: _views_pages_components_ag_grid_framework_expected_arrival_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      expectedDepartureRenderer: _views_pages_components_ag_grid_framework_expected_departure_js__WEBPACK_IMPORTED_MODULE_11__["default"]
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
    this.rowSelection = 'multiple';
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
        this.reservationNumber = this.paramsData ? this.paramsData.reservation_number : '';
        this.paramsDataStatusCode = this.paramsData ? this.paramsData.status_code : '';
        this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.insert'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('add_icon24'),
        action: function action() {
          return _this.showForm('', _this.global.modeData.insert);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.edit);
        }
      }, // {
      //     name: this.$t('common.contextMenu.duplicate'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('duplicate_icon24'),
      //     action: () => this.handleDuplicate(this.paramsData),
      // },
      'separator', {
        name: this.$t('common.contextMenu.checkIn'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('check_in_icon24'),
        action: function action() {
          return _this.handleCheckIn();
        }
      }, {
        name: this.paramsDataStatusCode == this.global.reservationStatus["new"] ? this.$t('common.contextMenu.setWaitList') : this.paramsDataStatusCode == this.global.reservationStatus.waitList ? this.$t('common.contextMenu.unsetWaitList') : '',
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('wait_list_icon24'),
        action: function action() {
          return _this.handleSetWaitList();
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.cancel'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.global.reservationStatus.cancel);
        }
      }, {
        name: this.$t('common.contextMenu.noShow'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('no_show_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.global.reservationStatus.noShow);
        }
      }, {
        name: this.$t('common.contextMenu.void'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.showCancelReservation(_this.global.reservationStatus["void"]);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.autoAssignRoom'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])('auto_assign_ready_icon24'),
        action: function action() {
          _this.handleAutoAssignRoom();
        }
      }, {
        name: this.$t('common.contextMenu.removeAutoAssignRoom'),
        disabled: !this.paramsData,
        action: function action() {
          return _this.handleRemoveAssignRoom();
        }
      }, {
        name: this.paramsDataIsLock == '-1' ? this.$t('common.contextMenu.unlockReservation') : this.$t('common.contextMenu.lockReservation'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["generateIconContextMenuAgGrid"])(this.paramsDataIsLock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
        action: function action() {
          return _this.handleLockReservation();
        }
      } // 'separator',
      // {
      //     name: this.$t('common.contextMenu.printRegistrationForm'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('print_icon24'),
      //     action: () => this.handlePrintRegistrationForm(),
      // },
      // {
      //     name: this.$t('common.contextMenu.printConfirmLetter'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('print_icon24'),
      //     action: () => this.handlePrintConfirmationLetter(),
      // },
      // {
      //     name: this.$t('common.contextMenu.printProformaInvoice'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('print_icon24'),
      //     action: () => this.handlePrintProformaInvoice(),
      // },
      // 'separator',
      // {
      //     name: this.$t('common.contextMenu.trackingData'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('tracking_icon24'),
      //     action: () => this.showForm(this.paramsData, 2),
      // },
      ];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        var selectedRow = this.gridApi.getSelectedRows();
        this.getReservationNumber(selectedRow);
        var count = 0;
        this.reservationNumberList.forEach(function (element) {
          if (element == vm.paramsData.reservation_number) {
            count += 1;
          }
        });

        if (count == 0) {
          vm.gridApi.forEachNode(function (node) {
            if (node.data.reservation_number == vm.paramsData.reservation_number) {
              node.setSelected(true, true);
            }
          });
        }
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
    checkReservationStatusLock: function checkReservationStatusLock() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var status;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.$loadingIndicator(_this3);

                _context2.next = 3;
                return _this3.getReservationStatus();

              case 3:
                status = _context2.sent;

                _this3.resetCredential();

                if (!(status.is_lock === '-1' && status.user_id !== _this3.global.userInfo.code)) {
                  _context2.next = 12;
                  break;
                }

                _this3.credentialTitle = _this3.$t('credential.title.unlockReservation');
                _this3.specialAccessType = _this3.global.accessSpecialOrder.unlockReservation;
                _this3.isReason = false;
                _this3.isCredential = true;
                _this3.activeCredentialPrompt = true;
                return _context2.abrupt("return", true);

              case 12:
                return _context2.abrupt("return", false);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    acceptCredential: function acceptCredential() {
      if (this.specialAccessType === this.global.accessSpecialOrder.unlockReservation) {
        if (this.unlockReservationStatus == 1) {
          this.$refs.registrationForm.showForm(this.idData, this.modeDataValue, true, this.reservationStatus);
        } else if (this.unlockReservationStatus == 2) {
          this.lockReservation();
        }
      }

      this.unlockReservationStatus = 0;
    },
    resetCredential: function resetCredential() {
      this.specialAccessType = 1000;
      this.isReason = false;
      this.isCredential = true;
      this.credential = {
        user: '',
        pass: ''
      };
    },
    // --------------------GROUP CHECK IN--------------------//
    handleGroupCheckIn: function handleGroupCheckIn() {
      this.groupCheckIn = !this.groupCheckIn;

      if (this.groupCheckIn) {
        this.getGroupList();
      }
    },
    getGroupList: function getGroupList() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$guestGroupReso, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return guestGroupResource.list();

              case 2:
                _yield$guestGroupReso = _context3.sent;
                data = _yield$guestGroupReso.data;
                _this4.groupList = data;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getFolioList: function getFolioList(type, number) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var params, _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {
                  type: type,
                  number: number
                };
                _context4.next = 3;
                return transactionResource.listFolio(params);

              case 3:
                _yield$transactionRes = _context4.sent;
                data = _yield$transactionRes.data;
                _this5.listFolio = data;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getRoutingAccount: function getRoutingAccount() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var params, _yield$transactionRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  group: _this6.global.groupAccount.charge
                };
                _context5.prev = 1;
                _context5.next = 4;
                return transactionResource.account(params);

              case 4:
                _yield$transactionRes2 = _context5.sent;
                data = _yield$transactionRes2.data;
                _this6.accounts = data;
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 9]]);
      }))();
    },
    getMasterFolio: function getMasterFolio() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var dataArray, params, _yield$masterFolioRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dataArray = _this7.gridApi.getSelectedRows();

                if (!(dataArray.length > 0)) {
                  _context6.next = 10;
                  break;
                }

                params = {
                  group: dataArray[0].group_code
                };
                _context6.next = 5;
                return masterFolioResource.getMasterFolioGroup(params);

              case 5:
                _yield$masterFolioRes = _context6.sent;
                data = _yield$masterFolioRes.data;

                if (data === '') {
                  data = null;
                }

                _this7.masterFolio = data;
                return _context6.abrupt("return", data);

              case 10:
                return _context6.abrupt("return", '');

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getReservationNumber: function getReservationNumber(dataArray) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var resvNumber;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.reservationNumberList = [];

                if (dataArray.length > 0) {
                  resvNumber = dataArray[0].reservation_number;
                  _this8.reservationNumber = resvNumber;
                  _this8.reservationNumberList = dataArray.map(function (result) {
                    return result.reservation_number;
                  });
                }

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getReservationGroupList: function getReservationGroupList() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var params, _yield$reservationRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                params = {
                  reservation_number: _this9.reservationNumberList
                };
                _context8.prev = 1;
                _context8.next = 4;
                return reservationResource.reservationGroupList(params);

              case 4:
                _yield$reservationRes = _context8.sent;
                data = _yield$reservationRes.data;
                _this9.reservationGroupList = data;

                _this9.$vs.loading.close('#layout--main>.con-vs-loading');

                _context8.next = 14;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](1);

                _this9.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[1, 10]]);
      }))();
    },
    handleCreateMasterFolio: function handleCreateMasterFolio(data) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var isExist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this10.isFolioGroupExist();

              case 2:
                isExist = _context9.sent;

                if (isExist === true) {
                  _this10.$vs.dialog({
                    color: 'danger',
                    type: 'confirm',
                    title: _this10.$t('reservation.popup.existMasterFolio.title'),
                    text: _this10.$t('reservation.popup.existMasterFolio.text'),
                    acceptText: _this10.$t('reservation.popup.existMasterFolio.acceptText'),
                    cancelText: _this10.$t('reservation.popup.existMasterFolio.cancelText'),
                    accept: function accept() {
                      _this10.createMasterFolio(data);
                    }
                  });
                } else {
                  _this10.createMasterFolio(data);
                }

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    isFolioGroupExist: function isFolioGroupExist() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var params, _yield$masterFolioRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = {
                  reservation_number: _this11.reservationNumber,
                  user_id: _this11.global.userInfo.code
                };
                _context10.prev = 1;
                _context10.next = 4;
                return masterFolioResource.isFolioGroupExist(params);

              case 4:
                _yield$masterFolioRes2 = _context10.sent;
                data = _yield$masterFolioRes2.data;
                return _context10.abrupt("return", data);

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();
                return _context10.abrupt("return", false);

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 9]]);
      }))();
    },
    createMasterFolio: function createMasterFolio(datax) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var params, _yield$masterFolioRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                params = {
                  reservation_number: _this12.reservationNumber,
                  night: datax.night,
                  user_id: _this12.global.userInfo.code
                };
                _context11.prev = 1;
                _context11.next = 4;
                return masterFolioResource.createMasterFolioGroup(params);

              case 4:
                _yield$masterFolioRes3 = _context11.sent;
                data = _yield$masterFolioRes3.data;
                _context11.next = 8;
                return _this12.getFolioList(_this12.global.folioType.masterFolio, null);

              case 8:
                setTimeout(function () {
                  _this12.getMasterFolio();
                }, 200);
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].dialogInsertMasterSuccessfully(null, data);
                _context11.next = 15;
                break;

              case 12:
                _context11.prev = 12;
                _context11.t0 = _context11["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 12]]);
      }))();
    },
    getExchangeRate: function getExchangeRate(datax) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var params, _yield$depositResourc, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                params = {
                  currency_code: datax || _this13.vDeposit.currency_code
                };
                _context12.prev = 1;
                _context12.next = 4;
                return depositResource.exchangeRate(params);

              case 4:
                _yield$depositResourc = _context12.sent;
                data = _yield$depositResourc.data;
                _this13.vDeposit.exchange_rate = data;
                _this13.vDeposit.amount = _this13.vDeposit.amount_foreign * _this13.vDeposit.exchange_rate;
                _context12.next = 13;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 10]]);
      }))();
    },
    getLookupDeposit: function getLookupDeposit() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var _yield$depositResourc2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                _context13.next = 3;
                return depositResource.lookup();

              case 3:
                _yield$depositResourc2 = _context13.sent;
                data = _yield$depositResourc2.data;
                _this14.dataLookupDeposit = data;

                if (_this14.vDeposit.currency_code) {
                  _this14.getExchangeRate();
                }

                _this14.$vs.loading.close('#layout--main>.con-vs-loading');

                _context13.next = 13;
                break;

              case 10:
                _context13.prev = 10;
                _context13.t0 = _context13["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert(_context13.t0);

              case 13:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[0, 10]]);
      }))();
    },
    handleSaveCheckInGroup: function handleSaveCheckInGroup(routing) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var resvNumber, params, _yield$reservationRes2, data, start;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                resvNumber = _this15.reservationNumberList;
                params = {
                  reservation_number: resvNumber,
                  routing_account: routing,
                  user_id: _this15.global.userInfo.code
                };
                _context16.prev = 2;
                _context16.next = 5;
                return reservationResource.checkIn(params);

              case 5:
                _yield$reservationRes2 = _context16.sent;
                data = _yield$reservationRes2.data;
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information("Success: ".concat(data.status.success, "\r\n Failed: ").concat(data.status.failed, ", Please see detail on guest group list!"));

                start = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.next = 2;
                            return Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["asyncForEach"])(data.data, /*#__PURE__*/function () {
                              var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(element) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
                                  while (1) {
                                    switch (_context14.prev = _context14.next) {
                                      case 0:
                                        _this15.$refs.groupCheckInForm.updateCheckInResult(element.number, element.status);

                                      case 1:
                                      case "end":
                                        return _context14.stop();
                                    }
                                  }
                                }, _callee14);
                              }));

                              return function (_x) {
                                return _ref2.apply(this, arguments);
                              };
                            }());

                          case 2:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function start() {
                    return _ref.apply(this, arguments);
                  };
                }();

                start();

                _this15.refreshData(_this15.search);

                _context16.next = 16;
                break;

              case 13:
                _context16.prev = 13;
                _context16.t0 = _context16["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 16:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[2, 13]]);
      }))();
    },
    // ------------------END GROUP CHECK IN------------------//
    // ------------------ RESERVATION CRUD------------------//
    getReservationList: function getReservationList(search) {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var selectedNodes, _yield$reservationRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                selectedNodes = _this16.gridApi != null ? _this16.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context17.next = 5;
                return reservationResource.list(search);

              case 5:
                _yield$reservationRes3 = _context17.sent;
                data = _yield$reservationRes3.data;
                _this16.rowData = data.data;
                _this16.pinnedBottomRowData = data.total;

                _this16.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["rowSelectedAfterRefresh"])(_this16, selectedNodes, 'reservation_number');
                });

                _this16.$vs.loading.close('#layout--main>.con-vs-loading');

                _context17.next = 17;
                break;

              case 13:
                _context17.prev = 13;
                _context17.t0 = _context17["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

                _this16.$vs.loading.close('#layout--main>.con-vs-loading');

              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[0, 13]]);
      }))();
    },
    refreshData: function refreshData(search, hideLoadingIndicator) {
      this.search = search;
      if (!hideLoadingIndicator) this.$loadingIndicator(this);
      this.getReservationList(search);
    },
    showForm: function showForm(idData, modeData, isReservation, reservationStatus) {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _this17.idData = idData;
                _this17.paramsData = idData;
                _this17.modeDataValue = modeData;
                _this17.reservationStatus = reservationStatus;

                if (!(modeData === _this17.global.modeData.edit && reservationStatus !== _this17.global.reservationStatus.checkIn)) {
                  _context18.next = 11;
                  break;
                }

                _context18.next = 7;
                return _this17.checkReservationStatusLock();

              case 7:
                if (!_context18.sent) {
                  _context18.next = 11;
                  break;
                }

                _this17.$vs.loading.close('#layout--main>.con-vs-loading');

                _this17.unlockReservationStatus = 1;
                return _context18.abrupt("return");

              case 11:
                _this17.$refs.registrationForm.showForm(idData, modeData, isReservation, reservationStatus);

              case 12:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    //  END DATEPICKER CONFIGURATION //
    // ------------------START SIDEBARR OPTIONS-------------------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      var _this18 = this;

      this.reservationNumber = data.reservation_number;
      this.paramsData = data;
      this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
      this.paramsDataStatusCode = this.paramsData ? this.paramsData.status_code : '';

      if (this.sidebarOption) {
        this.sidebarOption = false;
        setTimeout(function () {
          _this18.sidebarOption = true;
        }, 100);
      } else {
        this.sidebarOption = true;
      } // this.handleRowRightClicked();

    },
    // ------------------END SIDEBARR OPTIONS-------------------------------//
    // ------------------START DEPOSIT CANCEL RESERVATION CRUD-------------//
    showCancelReservation: function showCancelReservation(status) {
      var _this19 = this;

      this.$refs.cancelReservation.showCancelReservation(status, this.reservationNumber);
      this.$nextTick(function () {
        _this19.modeDataValue = _this19.global.modeData["delete"];
        Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_4__["getRowIndexBefore"])(_this19);
      });
      this.sidebarOption = false;
    },
    // ------------------END DEPOSIT CANCEL RESERVATION CRUD-------------//
    // ----------------START OTHER OPTION------------------//
    handleCheckIn: function handleCheckIn() {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var status, selected, dateArrival;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _this20.sidebarOption = false;
                status = {};
                _context19.next = 4;
                return _this20.gridApi.getSelectedRows();

              case 4:
                selected = _context19.sent;

                if (!_this20.groupCheckIn) {
                  _context19.next = 24;
                  break;
                }

                _context19.next = 8;
                return _this20.getReservationNumber(selected);

              case 8:
                if (!(_this20.search.group && _this20.reservationNumberList.length > 0)) {
                  _context19.next = 21;
                  break;
                }

                _this20.$loadingIndicator(_this20);

                _context19.next = 12;
                return _this20.getFolioList(_this20.global.folioType.masterFolio, null);

              case 12:
                _this20.getLookupDeposit();

                _this20.getRoutingAccount();

                _this20.getMasterFolio(); // set master folio group exist


                _context19.next = 17;
                return _this20.getReservationGroupList();

              case 17:
                _this20.$refs.groupCheckInForm.resetRouting();

                _this20.modalGroupCheckIn = true;
                _context19.next = 22;
                break;

              case 21:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].selectField();

              case 22:
                _context19.next = 30;
                break;

              case 24:
                _this20.$loadingIndicator(_this20);

                _context19.next = 27;
                return _this20.getReservationStatus();

              case 27:
                status = _context19.sent;
                // this.$vs.loading.close('#layout--main>.con-vs-loading');
                dateArrival = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_13__["formatDateDatabase"])(status.DateArrival);

                if (dateArrival == _this20.auditDate) {
                  if (status.room_number == '' || status.room_number == null || status.room_number == undefined || status.room_number == ' ') {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this20.$t('reservation.popup.pleaseAssignRoom'));

                    _this20.$closeLoadingIndicator(_this20);
                  } else if (status.room_status !== _this20.global.roomStatus.ready) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information("Room ".concat(status.room_number, " not Ready"));

                    _this20.$closeLoadingIndicator(_this20);
                  } else {
                    _this20.showForm(_this20.paramsData, _this20.global.modeData.edit, true, _this20.global.reservationStatus.checkIn);
                  }
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this20.$t('reservation.popup.dateNotEqualWithAuditDate'));

                  _this20.$closeLoadingIndicator(_this20);
                }

              case 30:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    handleDuplicate: function handleDuplicate(params) {
      this.$refs.registrationForm.handleDuplicate(params);
    },
    getReservationStatus: function getReservationStatus() {
      var _this21 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var _yield$reservationRes4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return reservationResource.reservationStatus(_this21.paramsData.reservation_number);

              case 2:
                _yield$reservationRes4 = _context20.sent;
                data = _yield$reservationRes4.data;
                return _context20.abrupt("return", data);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }))();
    },
    handleSetWaitList: function handleSetWaitList() {
      this.sidebarOption = false;
      _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(this, 'onAcceptSetWaitList');
    },
    onAcceptSetWaitList: function onAcceptSetWaitList() {
      if (this.paramsData) {
        if (this.paramsData.status_code == this.global.reservationStatus["new"]) {
          this.setWaitList();
        } else if (this.paramsData.status_code == this.global.reservationStatus.waitList) {
          this.unsetWaitList();
        }
      }
    },
    setWaitList: function setWaitList() {
      var _this22 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var params, _yield$reservationRes5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                params = {
                  number: _this22.reservationNumber,
                  user_id: _this22.global.userInfo.code
                };
                _context21.prev = 1;
                _context21.next = 4;
                return reservationResource.setWaitList(params);

              case 4:
                _yield$reservationRes5 = _context21.sent;
                data = _yield$reservationRes5.data;

                _this22.refreshData(_this22.search);

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this22.$t("responseStatus.waitList.".concat(data)));
                }

                _context21.next = 13;
                break;

              case 10:
                _context21.prev = 10;
                _context21.t0 = _context21["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, null, [[1, 10]]);
      }))();
    },
    unsetWaitList: function unsetWaitList() {
      var _this23 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var params, _yield$reservationRes6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                params = {
                  number: _this23.reservationNumber,
                  user_id: _this23.global.userInfo.code
                };
                _context22.prev = 1;
                _context22.next = 4;
                return reservationResource.unsetWaitList(params);

              case 4:
                _yield$reservationRes6 = _context22.sent;
                data = _yield$reservationRes6.data;

                _this23.refreshData(_this23.search);

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this23.$t("responseStatus.waitList.".concat(data)));
                }

                _context22.next = 13;
                break;

              case 10:
                _context22.prev = 10;
                _context22.t0 = _context22["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[1, 10]]);
      }))();
    },
    handleAutoAssignRoom: function handleAutoAssignRoom(status) {
      var _this24 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var selected, statusX;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return _this24.gridApi.getSelectedRows();

              case 2:
                selected = _context23.sent;
                _context23.next = 5;
                return _this24.getReservationNumber(selected);

              case 5:
                if (!(_this24.reservationNumberList.length == 1)) {
                  _context23.next = 22;
                  break;
                }

                _this24.$loadingIndicator(_this24);

                _context23.next = 9;
                return _this24.getReservationStatus();

              case 9:
                statusX = _context23.sent;

                _this24.$vs.loading.close('#layout--main>.con-vs-loading');

                if (!(statusX.room_number == null)) {
                  _context23.next = 19;
                  break;
                }

                _this24.sidebarOption = false;

                if (!(statusX.is_lock === '-1')) {
                  _context23.next = 16;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].informationError(_this24.$t('message.reservationIsLock'));
                return _context23.abrupt("return");

              case 16:
                _this24.showAutoAssign = true;
                _context23.next = 20;
                break;

              case 19:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].informationError(_this24.$t('responseStatus.autoAssignRoom.1'));

              case 20:
                _context23.next = 23;
                break;

              case 22:
                if (_this24.reservationNumberList.length > 1) {
                  _this24.showAutoAssign = true;
                }

              case 23:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }))();
    },
    autoAssignRoom: function autoAssignRoom(status) {
      var _this25 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var params, _yield$reservationRes7, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                params = {
                  ready: status,
                  // 0=>all, 1=>ready
                  reservation_number: _this25.reservationNumberList,
                  user_id: _this25.global.userInfo.code
                };
                _context24.prev = 1;

                _this25.$loadingIndicator(_this25);

                _context24.next = 5;
                return reservationResource.autoAssignRoom(params);

              case 5:
                _yield$reservationRes7 = _context24.sent;
                data = _yield$reservationRes7.data;
                _context24.next = 9;
                return _this25.refreshData(_this25.search);

              case 9:
                if (!(_this25.reservationNumberList.length == 1)) {
                  _context24.next = 16;
                  break;
                }

                if (!(data[0].status == 0)) {
                  _context24.next = 13;
                  break;
                }

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                return _context24.abrupt("return");

              case 13:
                if (data[0].status > 0) {
                  _this25.$vs.loading.close('#layout--main>.con-vs-loading');

                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].information(_this25.$t("responseStatus.autoAssignRoom.".concat(data[0].status)));
                }

                _context24.next = 17;
                break;

              case 16:
                if (_this25.reservationNumberList.length > 1) {}

              case 17:
                _context24.next = 25;
                break;

              case 19:
                _context24.prev = 19;
                _context24.t0 = _context24["catch"](1);
                message = _context24.t0.response.data.errors;
                _this25.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert(message);

                _this25.$vs.loading.close('#layout--main>.con-vs-loading');

              case 25:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, null, [[1, 19]]);
      }))();
    },
    handleRemoveAssignRoom: function handleRemoveAssignRoom() {
      var _this26 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var selected, statusX;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return _this26.gridApi.getSelectedRows();

              case 2:
                selected = _context25.sent;
                _context25.next = 5;
                return _this26.getReservationNumber(selected);

              case 5:
                if (!(_this26.reservationNumberList.length == 1)) {
                  _context25.next = 19;
                  break;
                }

                _this26.$loadingIndicator(_this26);

                _context25.next = 9;
                return _this26.getReservationStatus();

              case 9:
                statusX = _context25.sent;

                _this26.$vs.loading.close('#layout--main>.con-vs-loading');

                _this26.sidebarOption = false;

                if (!(statusX.room_number > 0)) {
                  _context25.next = 17;
                  break;
                }

                if (!(statusX.is_lock === '-1')) {
                  _context25.next = 16;
                  break;
                }

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].informationError(_this26.$t('message.reservationIsLock'));
                return _context25.abrupt("return");

              case 16:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(_this26, 'removeAssignRoom');

              case 17:
                _context25.next = 20;
                break;

              case 19:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(_this26, 'removeAssignRoom');

              case 20:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }))();
    },
    removeAssignRoom: function removeAssignRoom() {
      var _this27 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var params, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(_this27.paramsData.room_number !== '')) {
                  _context26.next = 17;
                  break;
                }

                params = {
                  reservation_number: _this27.reservationNumberList,
                  is_remove: '-1',
                  user_id: _this27.global.userInfo.code
                };
                _context26.prev = 2;

                _this27.$loadingIndicator(_this27);

                _context26.next = 6;
                return reservationResource.autoAssignRoom(params);

              case 6:
                _this27.$vs.loading.close('#layout--main>.con-vs-loading');

                _this27.refreshData(_this27.search);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                _context26.next = 17;
                break;

              case 11:
                _context26.prev = 11;
                _context26.t0 = _context26["catch"](2);
                message = _context26.t0.response.data.errors;
                _this27.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert(message);

                _this27.$vs.loading.close('#layout--main>.con-vs-loading');

              case 17:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, null, [[2, 11]]);
      }))();
    },
    handleLockReservation: function handleLockReservation() {
      var _this28 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _this28.sidebarOption = false;

                _this28.$loadingIndicator(_this28);

                _context27.next = 4;
                return _this28.checkReservationStatusLock();

              case 4:
                if (!_context27.sent) {
                  _context27.next = 8;
                  break;
                }

                _this28.$vs.loading.close('#layout--main>.con-vs-loading');

                _this28.unlockReservationStatus = 2;
                return _context27.abrupt("return");

              case 8:
                _this28.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_6__["default"].confirmation(_this28, 'lockReservation');

              case 10:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }))();
    },
    lockReservation: function lockReservation() {
      var _this29 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var params, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                params = {
                  reservation_number: _this29.reservationNumber,
                  is_lock: _this29.paramsData.is_lock == '0' ? '-1' : '0',
                  user_id: _this29.global.userInfo.code
                };
                _context28.prev = 1;
                _context28.next = 4;
                return reservationResource.lockReservation(params);

              case 4:
                _this29.refreshData(_this29.search);

                _context28.next = 12;
                break;

              case 7:
                _context28.prev = 7;
                _context28.t0 = _context28["catch"](1);
                message = _context28.t0.response.data.errors;
                _this29.dbErrors = message == undefined ? '' : message;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert(message);

              case 12:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, null, [[1, 7]]);
      }))();
    },
    // ----------------END OTHER OPTION------------------//
    // PRINT,
    handlePrintRegistrationForm: function handlePrintRegistrationForm() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.registrationFormReservation, "&reservationNumber=").concat(this.reservationNumber, "&template=").concat(this.global.stimulsoftReportFileDirectory.registrationFormReservation)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintProformaInvoice: function handlePrintProformaInvoice() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.proformaInvoice, "&reservationNumber=").concat(this.reservationNumber, "&template=").concat(this.global.stimulsoftReportFileDirectory.proformaInvoice)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintConfirmationLetter: function handlePrintConfirmationLetter() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.confirmationLetter, "&reservationNumber=").concat(this.reservationNumber, "&template=").concat(this.global.stimulsoftReportFileDirectory.confirmationLetter)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.receiptDeposit, "&guestDepositId=").concat(this.paramsData.idLog, "&template=").concat(this.global.stimulsoftReportFileDirectory.receiptDeposit)
      });
      window.open(newTabReport.href, '_blank');
    } // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    ccAdmin: function ccAdmin() {
      return this.$store.getters.cCAdmin;
    }
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (!this.sidebarOption) {
        document.getElementById('main-container').click();
      }
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.modalGroupCheckIn) {
      this.back();
      next(false);
    } else {
      next();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    searchOption: Array,
    searchDefault: String,
    groupCheckIn: Boolean,
    groupList: Array,
    limitPageSize: Number
  },
  data: function data() {
    return {
      mFilter: 'N',
      arrival: true,
      departure: false,
      all: false,
      date: {
        from: '',
        to: ''
      },
      vModelSelectLimitData: 1000,
      vModelSearchData: '',
      vModelTextSearchData: '',
      vGroup: ''
    };
  },
  methods: {
    onRefreshData: function onRefreshData(limit) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var search;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                search = {
                  searchBy: _this.vModelSearchData,
                  keyword: _this.vModelTextSearchData,
                  group: _this.vGroup,
                  limit: limit >= 0 ? limit : _this.limitPageSize,
                  date_from: _this.date.from,
                  date_to: _this.date.to,
                  filter: _this.mFilter,
                  arrival: _this.arrival,
                  departure: _this.departure
                };
                setTimeout(function () {
                  _this.$emit('search', search);
                }, 200);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  beforeMount: function beforeMount() {
    // Assign limit data with variable Global
    this.vModelSearchData = this.searchDefault;
    this.vModelSelectLimitData = this.global.limitDefaultPageSize;
    this.onRefreshData();
  },
  watch: {
    groupCheckIn: function groupCheckIn() {
      if (this.groupCheckIn == false) {
        this.vGroup = '';
        this.onRefreshData();
      } else if (this.groupList.length > 0) {
        this.vGroup = this.groupList[0].code;
        this.onRefreshData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/reservation/reservation */ "./resources/js/src/api/reservation/reservation.js");
/* harmony import */ var _table_GroupCheckInTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/GroupCheckInTable */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue");


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



 // <!------------------additional element---------------------->
// inputnumber//


 // <!------------------end additional element---------------------->



var reservationResource = new _api_reservation_reservation__WEBPACK_IMPORTED_MODULE_7__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GroupCheckInForm',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String,
    vModel: Object,
    masterFolio: Number,
    listFolio: Array,
    accounts: Array,
    currency: Array,
    exchRateValue: Number,
    reservationList: Array
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_5__["default"],
    GroupCheckInTable: _table_GroupCheckInTable__WEBPACK_IMPORTED_MODULE_8__["default"]
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
      // ------------------need setting manual-----------------//
      account: null,
      // ------------------additional-------------------------//
      // save disable button
      saveDisabled: false,
      // ------------------end need setting manual-----------------//
      vRouting: {},
      vFolioType: '',
      folioType: [{
        name: 'Guest Folio',
        code: 'F'
      }, {
        name: 'Master Folio',
        code: 'M'
      }, {
        name: 'Desk Folio',
        code: 'D'
      }],
      vMasterFolio: {
        night: 1,
        currency: this.defaultCurrency,
        exchange_rate: 1
      },
      routingAccount: [],
      openCollapseItemGuestList: false
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('reservation.group.routingAccount.table.id'),
      field: 'account_code',
      width: 80,
      hide: true
    }, {
      headerName: this.$t('reservation.group.routingAccount.table.account'),
      field: 'account_name',
      width: 250
    }, {
      headerName: this.$t('reservation.group.routingAccount.table.folio'),
      field: 'folio_transfer',
      width: 250
    }, {
      headerName: this.$t('reservation.group.routingAccount.table.subFolio'),
      field: 'sub_folio',
      width: 100
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
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
    this.sideBar = {
      toolPanels: [{
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel'
      }, {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel'
      }]
    };
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    // ------------------need setting manual for crud-----------------//
    // ------------------ START ROUTING ACCOUNT------------------//
    handleInsertRoutingAccount: function handleInsertRoutingAccount() {
      var _this = this;

      this.$validator.validateAll('routing').then(function (result) {
        if (result) {
          var account = _this.vRouting.account;
          var arr = _this.routingAccount;
          var exist = false;
          _this.vRouting.account_code = account.code;
          _this.vRouting.account_name = account.name;
          arr.forEach(function (element) {
            if (element.account_code == account.code) {
              _utils_dialog_js__WEBPACK_IMPORTED_MODULE_3__["default"].existAccount();
              exist = true;
            }
          });

          if (!exist) {
            _this.routingAccount.push(Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_6__["cloneObject"])(_this.vRouting));

            _this.vRouting.account = [];
          }
        }
      });
    },
    handleCreateMasterFolio: function handleCreateMasterFolio() {
      this.$emit('createMasterFolio', this.vMasterFolio);
    },
    resetRouting: function resetRouting() {
      this.vRouting = {
        folio_type: this.global.folioType.masterFolio,
        account: [],
        folio_transfer: this.masterFolio,
        sub_folio: this.global.subFolio.A
      };
      this.vMasterFolio = {
        night: 1,
        currency: this.defaultCurrency,
        exchange_rate: 1
      };
      this.$validator.reset();
      this.saveDisabled = false;
      this.routingAccount = [];
    },
    getAllRows: function getAllRows() {
      var rowData = [];
      this.gridApi.forEachNode(function (node) {
        return rowData.push(node.data);
      });
      return rowData;
    },
    // ------------------ END ROUTING ACCOUNT------------------//
    cloneObject: function cloneObject(object) {
      var clone = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          clone[key] = object[key];
        }
      }

      return clone;
    },
    handleSaveData: function handleSaveData() {
      this.insertReservationGroup();
    },
    insertReservationGroup: function insertReservationGroup() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var rowData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                rowData = _this2.getAllRows();

                if (!(rowData.length > 0)) {
                  _context2.next = 14;
                  break;
                }

                _context2.prev = 2;

                _this2.$vs.loading({
                  container: '#button-save-main',
                  scale: _this2.global.scaleLoadingButton
                });

                _context2.next = 6;
                return rowData.forEach( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(element) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return reservationResource.insertReservationGroup(element);

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 6:
                _this2.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this2.$emit('showForm', false);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].acceptAlertSucces();
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].errorSaveDataAlert();

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 11]]);
      }))();
    },
    handleCheckIn: function handleCheckIn() {
      var data = this.getAllRows();
      this.$emit('checkIn', data);
    },
    updateCheckInResult: function updateCheckInResult(id, status) {
      this.$refs.groupCheckInTable.updateCheckInResult(id, status);
      this.openCollapseItemGuestList = true;
    } // ----------------END OTHER OPTION------------------//
    // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    masterFolio: function masterFolio() {
      this.resetRouting();
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
    defaultMarket: function defaultMarket() {
      return this.$store.getters.dvMarket;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'GroupCheckInTable',
  props: {
    rowData: Array
  },
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
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
      getRowNodeId: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    };

    this.getRowNodeId = function (data) {
      return data.number;
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //


    this.columnDefs = [{
      headerName: this.$t('reservation.group.guestList.table.reservationNo'),
      field: 'number',
      width: 80
    }, {
      headerName: this.$t('reservation.group.guestList.table.roomNo'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('reservation.group.guestList.table.roomType'),
      field: 'room_type',
      width: 110
    }, {
      headerName: this.$t('reservation.group.guestList.table.fullName'),
      field: 'full_name',
      width: 150
    }, {
      headerName: this.$t('reservation.group.guestList.table.arrivalDate'),
      field: 'arrival',
      width: 140
    }, {
      headerName: this.$t('reservation.group.guestList.table.departureDate'),
      field: 'departure',
      width: 140
    }, // { headerName: this.$t('reservation.deposit'), field: 'deposit', width: 120, cellStyle: { textAlign: 'right' }, valueFormatter: formatNumber },
    {
      headerName: this.$t('reservation.group.guestList.table.result'),
      field: 'result',
      width: 250
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
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
    this.rowModelType = 'clientSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    updateCheckInResult: function updateCheckInResult(id, status) {
      // use on group check in form
      var rowNode = this.gridApi.getRowNode(id);
      rowNode.setDataValue('result', this.$t("responseStatus.checkInReservation.".concat(status)));
    } // ------------------end need setting manual for crud-----------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".room-filter .reservation-status-filter .vs-radio--circle {\n  background: rgba(0, 0, 0, 0.38) !important;\n  box-shadow: white 0px 0px 1px 0px !important;\n}\n.room-filter .reservation-status-filter .vs-radio--borde {\n  border: 0px solid #c8c8c8 !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-bottom[data-v-08e19d90]{\n  bottom: 0;\n  margin-top: 11px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          reservationButton: true,
          groupCheckInBoolean: _vm.groupCheckIn,
        },
        on: {
          groupCheckIn: _vm.handleGroupCheckIn,
          checkIn: function ($event) {
            return _vm.handleCheckIn()
          },
          showModal: _vm.showForm,
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
          groupCheckIn: _vm.groupCheckIn,
          groupList: _vm.groupList,
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
              rowData: _vm.rowData,
              pagination: "true",
              paginationPageSize: _vm.paginationPageSize,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              pinnedBottomRowData: _vm.pinnedBottomRowData,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              defaultColDef: _vm.global.defColDef,
              suppressDragLeaveHidesColumns: true,
              suppressMakeColumnVisibleAfterUnGroup: true,
              rowGroupPanelShow: _vm.rowGroupPanelShow,
              getContextMenuItems: _vm.getContextMenu,
              statusBar: _vm.statusBar,
            },
            on: {
              "grid-ready": _vm.onGridReady,
              rowDoubleClicked: _vm.handleRowDobleClicked,
              cellContextMenu: _vm.handleRowRightClicked,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("registration-form", {
        ref: "registrationForm",
        attrs: { isReservation: true },
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
      }),
      _vm._v(" "),
      _c("cancel-reservation", {
        ref: "cancelReservation",
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
      }),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "width-80",
          attrs: {
            active: _vm.modalGroupCheckIn,
            title: _vm.$t("reservation.group.title.checkInGroup"),
          },
          on: {
            "update:active": function ($event) {
              _vm.modalGroupCheckIn = $event
            },
          },
        },
        [
          _c("group-check-in-form", {
            ref: "groupCheckInForm",
            attrs: {
              listFolio: _vm.listFolio,
              masterFolio: _vm.masterFolio,
              reservationList: _vm.reservationGroupList,
              resvNumber: _vm.reservationNumber,
              exchRateValue: parseInt(_vm.vDeposit.exchange_rate),
              currency: _vm.dataLookupDeposit.currency,
              accounts: _vm.accounts,
            },
            on: {
              checkIn: _vm.handleSaveCheckInGroup,
              getExchRate: _vm.getExchangeRate,
              createMasterFolio: _vm.handleCreateMasterFolio,
              getFolioList: _vm.getFolioList,
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
          ref: "sideBarOption",
          staticClass: "sidebarx",
          attrs: {
            "hidden-background": "",
            "position-right": "",
            parent: "#main-container",
            "default-index": "1",
            color: "primary",
            spacer: "",
          },
          model: {
            value: _vm.sidebarOption,
            callback: function ($$v) {
              _vm.sidebarOption = $$v
            },
            expression: "sidebarOption",
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "header-sidebar",
              attrs: { slot: "header" },
              slot: "header",
            },
            [
              _c("h4", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("reservation.menu.title")) +
                    "\n                "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "body-sidebar" },
            [
              _c(
                "vs-sidebar-item",
                { attrs: { index: "1" }, on: { click: _vm.handleCheckIn } },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/check_in_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.checkIn")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.paramsDataStatusCode == _vm.global.reservationStatus.new ||
              _vm.paramsDataStatusCode == _vm.global.reservationStatus.waitList
                ? _c(
                    "vs-sidebar-item",
                    {
                      attrs: { index: "2" },
                      on: {
                        click: function ($event) {
                          return _vm.handleSetWaitList()
                        },
                      },
                    },
                    [
                      _c("img", {
                        class:
                          _vm.sidebarConfig.iconMarginRight +
                          " " +
                          _vm.sidebarConfig.iconMarginLeft,
                        attrs: {
                          border: _vm.sidebarConfig.iconBorder,
                          width: _vm.sidebarConfig.iconWidth,
                          height: _vm.sidebarConfig.iconHeight,
                          src: "/images/icons/wait_list_icon24.png",
                        },
                      }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.paramsDataStatusCode ==
                              _vm.global.reservationStatus.new
                              ? _vm.$t("reservation.menu.setAsWaitList")
                              : _vm.paramsDataStatusCode ==
                                _vm.global.reservationStatus.waitList
                              ? _vm.$t("reservation.menu.unsetWaitList")
                              : ""
                          ) +
                          "\n                "
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
                  on: {
                    click: function ($event) {
                      _vm.showCancelReservation(
                        _vm.global.reservationStatus.cancel
                      )
                      _vm.credentialTitle =
                        _vm.$t("credential.title.cancelReservation") +
                        _vm.reservationNumber
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/cancel_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.cancel")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "4" },
                  on: {
                    click: function ($event) {
                      _vm.showCancelReservation(
                        _vm.global.reservationStatus.noShow
                      )
                      _vm.credentialTitle =
                        _vm.$t("credential.title.noShowReservation") +
                        _vm.reservationNumber
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/no_show_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.noShow")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "5" },
                  on: {
                    click: function ($event) {
                      _vm.showCancelReservation(
                        _vm.global.reservationStatus.void
                      )
                      _vm.credentialTitle =
                        _vm.$t("credential.title.voidReservation") +
                        _vm.reservationNumber
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/delete_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.void")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "6" },
                  on: {
                    click: function ($event) {
                      return _vm.handleAutoAssignRoom()
                    },
                  },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src: "/images/icons/auto_assign_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.autoAssignRoom")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "7" },
                  on: { click: _vm.handleRemoveAssignRoom },
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("reservation.menu.removeAutoAssignRoom")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "8" },
                  on: { click: _vm.handleLockReservation },
                },
                [
                  _c("img", {
                    class:
                      _vm.sidebarConfig.iconMarginRight +
                      " " +
                      _vm.sidebarConfig.iconMarginLeft,
                    attrs: {
                      border: _vm.sidebarConfig.iconBorder,
                      width: _vm.sidebarConfig.iconWidth,
                      height: _vm.sidebarConfig.iconHeight,
                      src:
                        "/images/icons/" +
                        (_vm.paramsDataIsLock == "-1"
                          ? "unlock_icon24.png"
                          : "lock_icon24.png"),
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.paramsDataIsLock == "-1"
                          ? _vm.$t("reservation.menu.unlockReservation")
                          : _vm.$t("reservation.menu.lockReservation")
                      ) +
                      "\n                "
                  ),
                ]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", {
            staticClass: "footer-sidebar",
            attrs: { slot: "footer" },
            slot: "footer",
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            color: "primary",
            title: "Auto Assign Room",
            "accept-text": "Ready",
            "cancel-text": "All",
            active: _vm.showAutoAssign,
          },
          on: {
            accept: function ($event) {
              return _vm.autoAssignRoom(1)
            },
            cancel: function ($event) {
              return _vm.autoAssignRoom(0)
            },
            "update:active": function ($event) {
              _vm.showAutoAssign = $event
            },
          },
        },
        [
          _c("div", { staticClass: "con-exemple-prompt" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.$t("reservation.popup.selectRoomStatus")) +
                "\n            "
            ),
          ]),
        ]
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
          acceptCredential: _vm.acceptCredential,
          "update:active-credential": function (val) {
            return (_vm.activeCredentialPrompt = val)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "reservation-search-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            { staticClass: "box-body" },
            [
              _c(
                "vs-col",
                { staticClass: "lg:w-1/2 search-part" },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "mb-2",
                      attrs: {
                        "vs-align": "start",
                        "vs-type": "flex",
                        "vs-justify": "flext-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-lg": "5", "vs-sm": "5", "vs-xs": "12" },
                        },
                        [
                          _c("v-select", {
                            attrs: {
                              clearable: false,
                              reduce: function (searchOption) {
                                return searchOption.value
                              },
                              label: "text",
                              options: _vm.searchOption,
                            },
                            model: {
                              value: _vm.vModelSearchData,
                              callback: function ($$v) {
                                _vm.vModelSearchData = $$v
                              },
                              expression: "vModelSearchData",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: { "vs-lg": "7", "vs-sm": "7", "vs-xs": "12" },
                        },
                        [
                          _c(
                            "vx-input-group",
                            [
                              _c("vs-input", {
                                attrs: {
                                  placeholder: "Search",
                                  id: "filter-text-box",
                                },
                                on: {
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
                                    return _vm.onEnter()
                                  },
                                },
                                model: {
                                  value: _vm.vModelTextSearchData,
                                  callback: function ($$v) {
                                    _vm.vModelTextSearchData = $$v
                                  },
                                  expression: "vModelTextSearchData",
                                },
                              }),
                              _vm._v(" "),
                              _c("template", { slot: "append" }, [
                                _c(
                                  "div",
                                  { staticClass: "append-text btn-addon" },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        icon: "search",
                                        color: "primary",
                                      },
                                      on: { click: _vm.onRefreshData },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            2
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
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-around",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-type": "flex",
                            "vs-align": "center",
                            "vs-lg": "5",
                            "vs-sm": "6",
                            "vs-xs": "12",
                          },
                        },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2",
                              },
                            },
                            [_c("span", [_vm._v("From:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10",
                              },
                            },
                            [
                              _c("date-picker", {
                                attrs: {
                                  lang: _vm.$t("lang"),
                                  "value-type": "YYYY-MM-DD",
                                  placeholder: "DD/MM/YYYY",
                                  format: "DD/MM/YYYY",
                                  label: "name",
                                },
                                model: {
                                  value: _vm.date.from,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.date, "from", $$v)
                                  },
                                  expression: "date.from",
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
                          attrs: {
                            "vs-type": "flex",
                            "vs-align": "center",
                            "vs-lg": "5",
                            "vs-sm": "6",
                            "vs-xs": "12",
                          },
                        },
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2",
                              },
                            },
                            [_c("span", [_vm._v("To:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10",
                              },
                            },
                            [
                              _c("date-picker", {
                                attrs: {
                                  "vs-lg": "10",
                                  "vs-sm": "10",
                                  "vs-xs": "10",
                                  lang: _vm.$t("lang"),
                                  "value-type": "YYYY-MM-DD",
                                  placeholder: "DD/MM/YYYY",
                                  format: "DD/MM/YYYY",
                                  label: "name",
                                },
                                model: {
                                  value: _vm.date.to,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.date, "to", $$v)
                                  },
                                  expression: "date.to",
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
              !_vm.groupCheckIn
                ? _c("vs-col", { staticClass: "lg:w-1/2 filter-part" }, [
                    _c("div", { staticClass: "room-filter" }, [
                      _c(
                        "div",
                        { staticClass: "reservation-status-filter" },
                        [
                          _c(
                            "vs-row",
                            {
                              staticClass: "mb-2",
                              attrs: {
                                "vs-align": "flex-start",
                                "vs-type": "flex",
                                "vs-justify": "flext-start",
                              },
                            },
                            [
                              _c(
                                "vs-col",
                                {
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#00C1B0" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "N",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Reserved")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#004481" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "W",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Wait List")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#2494C6" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "I",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Checked In")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF83A5" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "O",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Checked Out")]
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
                              attrs: {
                                "vs-align": "flex-start",
                                "vs-type": "flex",
                                "vs-justify": "flext-start",
                              },
                            },
                            [
                              _c(
                                "vs-col",
                                {
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF002A" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "C",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Canceled")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#FF8A00" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "S",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("No Show")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#C62583" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "V",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Voided")]
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
                                  attrs: {
                                    "vs-lg": "3",
                                    "vs-sm": "3",
                                    "vs-xs": "6",
                                  },
                                },
                                [
                                  _c(
                                    "vs-chip",
                                    { attrs: { color: "#31FD4B" } },
                                    [
                                      _c(
                                        "vs-radio",
                                        {
                                          attrs: {
                                            color: "white",
                                            "vs-value": "All",
                                          },
                                          on: {
                                            change: function ($event) {
                                              return _vm.onRefreshData()
                                            },
                                          },
                                          model: {
                                            value: _vm.mFilter,
                                            callback: function ($$v) {
                                              _vm.mFilter = $$v
                                            },
                                            expression: "mFilter",
                                          },
                                        },
                                        [_vm._v("Select All")]
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
                  ])
                : _c(
                    "vs-col",
                    { attrs: { "vs-w": "6" } },
                    [
                      _c(
                        "vs-row",
                        [
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-type": "flex",
                                "vs-align": "center",
                                "vs-lg": "2",
                                "vs-sm": "2",
                                "vs-xs": "2",
                              },
                            },
                            [_c("span", [_vm._v("Group:")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              attrs: {
                                "vs-lg": "10",
                                "vs-sm": "10",
                                "vs-xs": "10",
                              },
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  reduce: function (searchOption) {
                                    return searchOption.code
                                  },
                                  label: "name",
                                  options: _vm.groupList,
                                },
                                on: {
                                  input: function ($event) {
                                    return _vm.onRefreshData()
                                  },
                                },
                                model: {
                                  value: _vm.vGroup,
                                  callback: function ($$v) {
                                    _vm.vGroup = $$v
                                  },
                                  expression: "vGroup",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
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
                  { attrs: { type: "border" } },
                  [
                    _c(
                      "vs-collapse-item",
                      { attrs: { open: _vm.openCollapseItemGuestList } },
                      [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.$t("reservation.group.guestList.title")
                                ) +
                                "\n                            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("group-check-in-table", {
                          ref: "groupCheckInTable",
                          attrs: { rowData: _vm.reservationList },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-collapse-item",
                      { attrs: { open: true } },
                      [
                        _c(
                          "div",
                          { attrs: { slot: "header" }, slot: "header" },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.$t(
                                    "reservation.group.routingAccount.title"
                                  )
                                ) +
                                "\n                            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mb-2" },
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "wrap-form-select form-group row",
                                attrs: { "vs-lg": "2", "vs-xs": "12" },
                              },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "master-folio-night" } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "reservation.group.routingAccount.masterFolioNight"
                                        )
                                      )
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c("vs-row", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.vMasterFolio.night,
                                        expression: "vMasterFolio.night",
                                      },
                                    ],
                                    staticClass:
                                      "vs-inputx vs-input--input normal hasValue",
                                    attrs: {
                                      type: "number",
                                      min: "1",
                                      id: "master-folio-night",
                                    },
                                    domProps: { value: _vm.vMasterFolio.night },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.vMasterFolio,
                                          "night",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "2", "vs-xs": "12" },
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "reservation.group.routingAccount.currency"
                                      )
                                    )
                                  ),
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
                                      staticClass: "w-full height200",
                                      attrs: {
                                        clearable: false,
                                        label: "code",
                                        options: _vm.currency,
                                        name: "folio type",
                                        "data-vv-scope": "masterFolio",
                                      },
                                      on: {
                                        input: function ($event) {
                                          _vm.vMasterFolio.exchange_rate =
                                            _vm.vMasterFolio.currency.exchange_rate
                                        },
                                      },
                                      model: {
                                        value: _vm.vMasterFolio.currency,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.vMasterFolio,
                                            "currency",
                                            $$v
                                          )
                                        },
                                        expression: "vMasterFolio.currency",
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
                                                "routing.folio type"
                                              ),
                                            expression:
                                              "errors.has('routing.folio type')",
                                          },
                                        ],
                                        staticClass: "error-text text-danger",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "routing.folio type"
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
                                attrs: { "vs-lg": "3", "vs-xs": "12" },
                              },
                              [
                                _c(
                                  "vs-row",
                                  [
                                    _c("input-number", {
                                      attrs: {
                                        disabled: "",
                                        label: _vm.$t(
                                          "reservation.group.routingAccount.masterFolioNight"
                                        ),
                                      },
                                      model: {
                                        value: _vm.vMasterFolio.exchange_rate,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.vMasterFolio,
                                            "exchange_rate",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "vMasterFolio.exchange_rate",
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
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "4", "vs-xs": "12" },
                              },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass:
                                      "btn-bottom vs-con-loading__container",
                                    attrs: {
                                      disabled: _vm.saveDisabled,
                                      id: "btn-add-routing",
                                      color:
                                        _vm.global.buttonColor
                                          .createMasterFolio,
                                    },
                                    on: { click: _vm.handleCreateMasterFolio },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t("button.createNewMasterFolio")
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
                            _c(
                              "vs-col",
                              {
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "3", "vs-xs": "12" },
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "reservation.group.routingAccount.account"
                                      )
                                    )
                                  ),
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
                                      staticClass: "w-full height200",
                                      attrs: {
                                        clearable: false,
                                        label: "name",
                                        options: _vm.accounts,
                                        name: "account",
                                        "data-vv-scope": "routing",
                                      },
                                      model: {
                                        value: _vm.vRouting.account,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.vRouting, "account", $$v)
                                        },
                                        expression: "vRouting.account",
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
                                              _vm.errors.has("routing.account"),
                                            expression:
                                              "errors.has('routing.account')",
                                          },
                                        ],
                                        staticClass: "error-text text-danger",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("routing.account")
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
                                attrs: { "vs-lg": "2", "vs-xs": "12" },
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "reservation.group.routingAccount.folioType"
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
                                        clearable: false,
                                        reduce: function (value) {
                                          return value.code
                                        },
                                        label: "name",
                                        options: _vm.folioType,
                                      },
                                      on: {
                                        input: function ($event) {
                                          return _vm.$emit(
                                            "getFolioList",
                                            _vm.vRouting.folio_type,
                                            null
                                          )
                                        },
                                      },
                                      model: {
                                        value: _vm.vRouting.folio_type,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.vRouting,
                                            "folio_type",
                                            $$v
                                          )
                                        },
                                        expression: "vRouting.folio_type",
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
                                staticClass: "wrap-form-select",
                                attrs: { "vs-lg": "4", "vs-xs": "12" },
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "reservation.group.routingAccount.folio"
                                      )
                                    )
                                  ),
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
                                      staticClass: "w-full height200",
                                      attrs: {
                                        clearable: false,
                                        resetOnOptionsChange: true,
                                        reduce: function (value) {
                                          return value.number
                                        },
                                        label: "folio",
                                        options: _vm.listFolio,
                                        name: "folio",
                                        "data-vv-scope": "routing",
                                      },
                                      model: {
                                        value: _vm.vRouting.folio_transfer,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.vRouting,
                                            "folio_transfer",
                                            $$v
                                          )
                                        },
                                        expression: "vRouting.folio_transfer",
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
                                              _vm.errors.has("routing.folio"),
                                            expression:
                                              "errors.has('routing.folio')",
                                          },
                                        ],
                                        staticClass: "error-text text-danger",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("routing.folio")
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
                                attrs: { "vs-lg": "2", "vs-xs": "12" },
                              },
                              [
                                _c("label", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "reservation.group.routingAccount.subFolio"
                                      )
                                    )
                                  ),
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
                                      staticClass: "sub-folio w-full",
                                      attrs: {
                                        clearable: false,
                                        options: _vm.global.subFolioGroup,
                                        name: "sub folio",
                                        "data-vv-scope": "routing",
                                      },
                                      model: {
                                        value: _vm.vRouting.sub_folio,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.vRouting,
                                            "sub_folio",
                                            $$v
                                          )
                                        },
                                        expression: "vRouting.sub_folio",
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
                                                "routing.sub folio"
                                              ),
                                            expression:
                                              "errors.has('routing.sub folio')",
                                          },
                                        ],
                                        staticClass: "error-text text-danger",
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "routing.sub folio"
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
                                attrs: { "vs-lg": "1", "vs-xs": "12" },
                              },
                              [
                                _c("vs-button", {
                                  staticClass:
                                    "btn-bottom vs-con-loading__container",
                                  attrs: {
                                    disabled: _vm.saveDisabled,
                                    id: "btn-add-routing",
                                    icon: "add",
                                    color:
                                      _vm.global.buttonColor.addRoutingAccount,
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.handleInsertRoutingAccount()
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
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
                            suppressContextMenu: true,
                            rowSelection: _vm.rowSelection,
                            rowData: _vm.routingAccount,
                            defaultColDef: _vm.global.defColDef,
                          },
                          on: { "grid-ready": _vm.onGridReady },
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
          { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
          [
            _c(
              "vs-button",
              {
                staticClass: "vs-con-loading__container",
                staticStyle: { float: "right" },
                attrs: {
                  disabled: _vm.saveDisabled,
                  id: "button-save-main",
                  icon: "save",
                  color: _vm.global.buttonColor.save,
                },
                on: {
                  click: function ($event) {
                    _vm.handleCheckIn()
                    _vm.saveDisabled = true
                  },
                },
              },
              [_vm._v(_vm._s(_vm.$t("button.save")))]
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
        ref: "mainContainer",
        class: _vm.global.themeAgGrid,
        style: _vm.global.styleAgGridFrame0,
        attrs: {
          suppressDragLeaveHidesColumns: true,
          suppressContextMenu: true,
          enableRangeSelection: true,
          gridOptions: _vm.gridOptions,
          context: _vm.context,
          columnDefs: _vm.columnDefs,
          frameworkComponents: _vm.frameworkComponents,
          enableCellChangeFlash: true,
          rowSelection: _vm.rowSelection,
          rowData: _vm.rowData,
          defaultColDef: _vm.global.defColDef,
          getRowNodeId: _vm.getRowNodeId,
        },
        on: { "grid-ready": _vm.onGridReady },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/api/masterFolio.js":
/*!*********************************************!*\
  !*** ./resources/js/src/api/masterFolio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasterFolioResource; });
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



var tableName = 'folio';
var uri = 'masterfolio';

var MasterFolioResource = /*#__PURE__*/function (_Resource) {
  _inherits(MasterFolioResource, _Resource);

  var _super = _createSuper(MasterFolioResource);

  function MasterFolioResource() {
    _classCallCheck(this, MasterFolioResource);

    return _super.call(this, uri);
  }

  _createClass(MasterFolioResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/tracking/log/' + tableName + '/' + id,
        method: 'get'
      });
    }
  }, {
    key: "createMasterFolioGroup",
    value: function createMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "isFolioGroupExist",
    value: function isFolioGroupExist(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroupexist',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "getMasterFolioGroup",
    value: function getMasterFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/mastergroup/getmaster',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lookup",
    value: function lookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/lookup',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "account",
    value: function account(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/account',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "folioType",
    value: function folioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/foliotype',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listRouting",
    value: function listRouting() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/routing',
        method: 'get'
      });
    }
  }, {
    key: "listFolio",
    value: function listFolio(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/list/folio',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transfer",
    value: function transfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/transfer/transaction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/form/exchrate',
        method: 'get',
        params: params
      });
    }
  }, {
    key: "charge",
    value: function charge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/charge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "payment",
    value: function payment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/payment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "correction",
    value: function correction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/correction',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "void",
    value: function _void(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/void',
        method: 'post',
        data: data
      });
    }
  }]);

  return MasterFolioResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div>\n                <div v-if=\"params.data && (params.data.folio_number > 0 || params.data.reservation_number > 0)\" class=\"flex action-button\">\n                    <vx-tooltip class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.menu')\">\n                        <vs-button @click=\"showSidebar\" :color=\"global.iconActionColor.menuColor\" type=\"flat\">\n                            <vs-icon icon=\"menu\" size=\"small\"></vs-icon>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip v-if=\"params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In'\" class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.edit')\">\n                        <vs-button @click=\"showPopUp(global.modeData.edit)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                    <vx-tooltip v-if=\"params.data.folio_status != 'Closed' && params.data.folio_status != 'Cancel Check In' && params.data.folio_status != 'Open'\" class=\"flex\" style=\"height:30px\" :text=\"$t('tooltip.duplicate')\">\n                        <vs-button @click=\"showPopUp(global.modeData.duplicate)\" :color=\"global.iconActionColor.editColor\" type=\"flat\">\n                            <img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/duplicate_icon24.png\"/>\n                        </vs-button>\n                    </vx-tooltip>\n                </div>\n            </div>\n            ",
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
    duplicate: function duplicate() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleDuplicate(this.params.data);
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
    showSidebar: function showSidebar() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleSidebarOption(this.params.data);
      } else {
        this.openUndefinedAlert();
      }
    },
    openUndefinedAlert: function openUndefinedAlert() {
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.undefinedText'),
        acceptText: this.$t('placeholder.close')
      });
    },
    openConfirm: function openConfirm() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.deleteTitleConfirm'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: this.acceptAlert
      });
    },
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.deleteTitleSuccess'),
        text: this.$t('message.deleteSuccess'),
        accept: this.params.context.componentParent.deleteData(this.params.data)
      });
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/expected_arrival.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/expected_arrival.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n        <vs-chip v-if=\"(date.arrival == $store.state.auditLog.auditDate) && (status == global.reservationStatus.new ||  status == global.reservationStatus.waitList)\" color=\"#FF002A\">\n            {{data | fulldate}}\n        </vs-chip>\n        <span v-else>{{data | fulldate}}</span>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      status: null,
      date: {
        arrival: null,
        departure: null
      },
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;

    if (this.params.data) {
      this.status = this.params.data.status_code;
      this.date = {
        arrival: this.params.data.DateArrival,
        departure: this.params.data.DateDeparture
      };
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/expected_departure.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/expected_departure.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n    <vs-chip v-if=\"(data <= $store.state.auditLog.auditDate)\" color=\"#FF002A\">\n        {{data | fulldate}}\n    </vs-chip>\n    <span v-else>{{data | fulldate}}</span>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      status: null,
      date: {
        arrival: null,
        departure: null
      },
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;

    if (this.params.data) {
      this.status = this.params.data ? this.params.data.status_code : '';
      this.date = {
        arrival: this.params.data.DateArrival,
        departure: this.params.data.DateDeparture
      };
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:3px\">\n        <vs-icon icon=\"lock\" v-if=\"data == '-1'\"></vs-icon>\n        <vs-icon icon=\"lock_open\" v-else-if=\"data == '0'\"></vs-icon>\n    </div>\n         ",
  data: function data() {
    return {
      data: null,
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reservation.vue?vue&type=template&id=31acdc8e& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&");
/* harmony import */ var _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reservation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/Reservation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reservation.vue?vue&type=template&id=31acdc8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/Reservation.vue?vue&type=template&id=31acdc8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reservation_vue_vue_type_template_id_31acdc8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=436fac2b& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=436fac2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/FilterHeader.vue?vue&type=template&id=436fac2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_436fac2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&");
/* harmony import */ var _GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "08e19d90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=style&index=0&id=08e19d90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_style_index_0_id_08e19d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/GroupCheckInForm.vue?vue&type=template&id=08e19d90&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInForm_vue_vue_type_template_id_08e19d90_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/reservation-status.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/reservation-status.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n        <div v-if=\"params.data\" style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n            <vs-chip v-if=\"data == 'W'\" color=\"#004481\">\n                Wait List\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'I'\" color=\"#2494C6\">\n                Checked In\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'O'\" color=\"#FF83A5\">\n                Checked Out\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'N'\" color=\"#00C1B0\">\n                Reserved\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'C'\" color=\"#FF002A\">\n                Canceled\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'S'\" color=\"#FF8A00\">\n                No Show\n            </vs-chip>\n            <vs-chip v-else-if=\"data == 'V'\" color=\"#C62583\">\n                Void\n            </vs-chip>\n        </div>\n         ",
  data: function data() {
    return {
      data: null,
      date: {
        arrival: null,
        departure: null
      },
      "true": true,
      "false": false
    };
  },
  mounted: function mounted() {
    this.data = this.params.value;

    if (this.params.data) {
      this.date = {
        arrival: this.params.data.DateArrival,
        departure: this.params.data.DateDeparture
      };
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupCheckInTable.vue?vue&type=template&id=79aef209& */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&");
/* harmony import */ var _GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupCheckInTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GroupCheckInTable.vue?vue&type=template&id=79aef209& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/reservations/components/table/GroupCheckInTable.vue?vue&type=template&id=79aef209&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupCheckInTable_vue_vue_type_template_id_79aef209___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);