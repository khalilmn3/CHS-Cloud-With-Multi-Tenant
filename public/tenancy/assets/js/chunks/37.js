(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_pages_components_header_FilterHeader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/pages/components/header/FilterHeader.vue */ "./resources/js/src/views/pages/components/header/FilterHeader.vue");
/* harmony import */ var _views_pages_components_header_NavigationHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/header/NavigationHeader.vue */ "./resources/js/src/views/pages/components/header/NavigationHeader.vue");
/* harmony import */ var _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/registrationForm/RegistrationForm.vue */ "./resources/js/src/views/pages/components/registrationForm/RegistrationForm.vue");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/formConfig.js */ "./resources/js/src/utils/formConfig.js");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_Number_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/Number.vue */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/lock_icon.js */ "./resources/js/src/views/pages/components/ag_grid-framework/lock_icon.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/comp_hu_icon.js */ "./resources/js/src/views/pages/components/ag_grid-framework/comp_hu_icon.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_expected_arrival_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/expected_arrival.js */ "./resources/js/src/views/pages/components/ag_grid-framework/expected_arrival.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_expected_departure_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/expected_departure.js */ "./resources/js/src/views/pages/components/ag_grid-framework/expected_departure.js");
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_update_menu_sidebar.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_source_status__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/source-status */ "./resources/js/src/views/pages/components/ag_grid-framework/source-status.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_incognito_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/incognito_icon */ "./resources/js/src/views/pages/components/ag_grid-framework/incognito_icon.js");
/* harmony import */ var _components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/SwitchRoom.vue */ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue");


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







 // <!------------------additional element---------------------->






 // API








var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_16__["default"]();
var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_15__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GuestInHouse',
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_17__["AgGridVue"],
    FilterHeader: _views_pages_components_header_FilterHeader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    NavigationHeader: _views_pages_components_header_NavigationHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    InputNumber: _views_pages_components_Number_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    SwitchRoom: _components_SwitchRoom_vue__WEBPACK_IMPORTED_MODULE_21__["default"],
    RegistrationForm: _views_pages_components_registrationForm_RegistrationForm_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      // Filter Data on Page Size
      vModelDefaultSearchData: '4',
      searchFilterData: [{
        text: this.$t('common.filter.folioNumber'),
        value: '0'
      }, {
        text: this.$t('common.filter.reservationNumber'),
        value: '1'
      }, {
        text: this.$t('common.filter.roomNumber'),
        value: '2'
      }, {
        text: this.$t('common.filter.roomType'),
        value: '3'
      }, // {text: this.$t('common.filter.transferTo'), value:'reservation.reservation_by'},
      {
        text: this.$t('common.filter.fullName'),
        value: '4'
      }, {
        text: this.$t('common.filter.group'),
        value: '5'
      }, {
        text: this.$t('common.filter.roomRate'),
        value: '6'
      }, {
        text: this.$t('common.filter.voucherNumber'),
        value: '7'
      }, {
        text: this.$t('common.filter.voucherNumberTA'),
        value: '8'
      }, {
        text: this.$t('common.filter.billInstruction'),
        value: '9'
      }, {
        text: this.$t('common.filter.notes'),
        value: '10'
      }, {
        text: this.$t('common.filter.hkNote'),
        value: '11'
      }, {
        text: this.$t('common.filter.state'),
        value: '12'
      }, {
        text: this.$t('common.filter.country'),
        value: '13'
      }, {
        text: this.$t('common.filter.phone'),
        value: '14'
      }, {
        text: this.$t('common.filter.company'),
        value: '15'
      }, {
        text: this.$t('common.filter.guestType'),
        value: '16'
      }, {
        text: this.$t('common.filter.transferTo'),
        value: '17'
      }, // { text: this.$t('common.filter.transferBy'), value: '18' },
      {
        text: this.$t('common.filter.status'),
        value: '19'
      }, {
        text: this.$t('common.filter.insertBy'),
        value: '20'
      }, {
        text: this.$t('common.filter.lastUpdate'),
        value: '21'
      }],
      // form config
      rowMarginBottom: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_6__["formConfig"].rowMarginBottom,
      sidebarConfig: _utils_formConfig_js__WEBPACK_IMPORTED_MODULE_6__["sidebarConfig"],
      // query data search
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
      pinnedBottomRowData: null,
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
      modePopUp: 0,
      modeDataValueTracking: 0,
      modeChildValue: '',
      modeScheduledRate: 0,
      modeExtraCharge: 0,
      // data error handling from laravel validation//
      dbErrors: {},
      // Pop Up
      modalMain: false,
      modalChild: false,
      modalCancelReservation: false,
      modalMoveRoom: false,
      modalSwitchRoom: false,
      btnSaveMoveDisabled: false,
      // ------------------need setting manual-----------------//
      // for vModel Data
      vModel: {
        full_name: ''
      },
      // vModel
      vMoveRoom: {},
      // move room
      vSwitchRoom: {},
      // switch room
      vComplimentStatus: {},
      rate: {
        weekend: 0,
        weekday: 0
      },
      discount: 0,
      roomNumber: [],
      roomRate: [],
      folioNumber: '',
      readyRoom: true,
      sidebarOption: false,
      // ------------------additional-------------------------//
      // Data Lookup//
      dataLookup: {},
      // Data table//
      switchRooms: [],
      resetOptionsChangeMoveRoom: false,
      // ------CREDENTIAL-------//
      activeCredentialPrompt: false,
      credentialTitle: '',
      isCredential: false,
      specialAccessType: 1000,
      credential: {
        user: '',
        pass: ''
      },
      paramsData: null,
      paramsDataComplimentHu: null,
      paramsDataIsIncognito: null,
      paramsDataIsLock: null,
      balance: 0 // ------------------end need setting manual-----------------//

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
      sortable: false,
      rowGroup: false,
      cellRenderer: 'actionGrid',
      colId: 'params',
      width: 70
    }, {
      headerName: this.$t('guestInHouse.table.isLockIcon'),
      field: 'is_lock',
      enableRowGroup: false,
      suppressMenu: true,
      resizable: false,
      filter: false,
      sortable: false,
      width: 30,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconLockRenderer'
    }, {
      headerName: this.$t('guestInHouse.table.guestStatusIcon'),
      field: 'compliment_hu',
      enableRowGroup: false,
      suppressMenu: true,
      resizable: false,
      filter: false,
      sortable: false,
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconCompHuRenderer'
    }, {
      headerName: this.$t('guestInHouse.table.incognitoIcon'),
      field: 'is_incognito',
      enableRowGroup: false,
      suppressMenu: true,
      resizable: false,
      filter: false,
      sortable: false,
      width: 40,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconIncognitoRenderer'
    }, {
      headerName: this.$t('guestInHouse.table.fullName'),
      field: 'FullName',
      width: 230
    }, {
      headerName: this.$t('guestInHouse.table.reservationNumber'),
      field: 'reservation_number',
      width: 90
    }, {
      headerName: this.$t('guestInHouse.table.folioNumber'),
      field: 'folio_number',
      width: 90
    }, {
      headerName: this.$t('guestInHouse.table.roomNumber'),
      field: 'room_number',
      width: 85
    }, {
      headerName: this.$t('guestInHouse.table.arrivalDate'),
      field: 'date_arrival',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDate"]
    }, {
      headerName: this.$t('guestInHouse.table.estimateTimeArrival'),
      field: 'time_arrival',
      width: 112
    }, {
      headerName: this.$t('guestInHouse.table.departureDate'),
      field: 'date_departure',
      width: 100,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'expectedDepartureRenderer'
    }, {
      headerName: this.$t('guestInHouse.table.estimateTimeDeparture'),
      field: 'time_departure',
      width: 130
    }, {
      headerName: this.$t('guestInHouse.table.roomType'),
      field: 'RoomType',
      width: 180
    }, {
      headerName: this.$t('guestInHouse.table.balance'),
      field: 'balance',
      width: 110,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('guestInHouse.table.roomRate'),
      field: 'room_rate',
      width: 180
    }, {
      headerName: this.$t('guestInHouse.table.weekdayRate'),
      field: 'weekday_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, {
      headerName: this.$t('guestInHouse.table.weekendRate'),
      field: 'weekend_rate',
      width: 130,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatNumber"]
    }, // { headerName: this.$t('guestInHouse.table.reservationBy'), field: 'reservation_by', width: 200 },
    {
      headerName: this.$t('guestInHouse.table.company'),
      field: 'company',
      width: 110
    }, {
      headerName: this.$t('guestInHouse.table.group'),
      field: 'guest_group',
      width: 110
    }, {
      headerName: this.$t('guestInHouse.table.adult'),
      field: 'adult',
      width: 75
    }, {
      headerName: this.$t('guestInHouse.table.child'),
      field: 'child',
      width: 70
    }, {
      headerName: this.$t('guestInHouse.table.address'),
      field: 'Address',
      width: 200
    }, // { headerName: this.$t('guestInHouse.table.market'), field: 'market', width: 120 },
    {
      headerName: this.$t('guestInHouse.table.guestType'),
      field: 'guest_type',
      width: 120
    }, // { headerName: this.$t('guestInHouse.table.folioStatus'), field: 'folio_status', width: 120 },
    {
      headerName: this.$t('guestInHouse.table.nationality'),
      field: 'nationality',
      width: 120
    }, {
      headerName: this.$t('guestInHouse.table.state'),
      field: 'state',
      width: 120
    }, {
      headerName: this.$t('guestInHouse.table.country'),
      field: 'country',
      width: 120
    }, {
      headerName: this.$t('guestInHouse.table.billInstruction'),
      field: 'bill_instruction',
      width: 200
    }, {
      headerName: this.$t('guestInHouse.table.note'),
      field: 'notes',
      width: 200
    }, {
      headerName: this.$t('guestInHouse.table.hkNote'),
      field: 'hk_note',
      width: 200
    }, {
      headerName: this.$t('guestInHouse.table.voucherNumber'),
      field: 'voucher_number',
      width: 140
    }, {
      headerName: this.$t('guestInHouse.table.voucherNumberTA'),
      field: 'voucher_number_ta',
      width: 160
    }, {
      headerName: this.$t('guestInHouse.table.insertBy'),
      field: 'insert_by',
      width: 110
    }, {
      headerName: this.$t('guestInHouse.table.status'),
      width: 110,
      field: 'folio_number',
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'iconStatusRenderer'
    }, {
      headerName: this.$t('common.table.lastUpdate'),
      field: 'user_id',
      width: 110
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_update_menu_sidebar__WEBPACK_IMPORTED_MODULE_18__["default"],
      iconLockRenderer: _views_pages_components_ag_grid_framework_lock_icon_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      iconStatusRenderer: _views_pages_components_ag_grid_framework_source_status__WEBPACK_IMPORTED_MODULE_19__["default"],
      iconCompHuRenderer: _views_pages_components_ag_grid_framework_comp_hu_icon_js__WEBPACK_IMPORTED_MODULE_11__["default"],
      iconIncognitoRenderer: _views_pages_components_ag_grid_framework_incognito_icon__WEBPACK_IMPORTED_MODULE_20__["default"],
      expectedArrivalRenderer: _views_pages_components_ag_grid_framework_expected_arrival_js__WEBPACK_IMPORTED_MODULE_12__["default"],
      expectedDepartureRenderer: _views_pages_components_ag_grid_framework_expected_departure_js__WEBPACK_IMPORTED_MODULE_13__["default"]
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
    this.$store.dispatch('getAuditDate');
  },
  methods: {
    onGridReady: function onGridReady() {},
    // onPinnedRowBottomCount() {
    //     var footerRowsToFloat = document.getElementById('bottom-row-count').value;
    //     var count = Number(footerRowsToFloat);
    //     var rows = createData(count, 'Bottom');
    //     this.gridApi.setPinnedBottomRowData(rows);
    // },
    onPageSizeChanged: function onPageSizeChanged(newPageSize) {
      this.gridApi.paginationSetPageSize(newPageSize);
    },
    getContextMenu: function getContextMenu(params) {
      var _this = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
        this.folioNumber = this.paramsData ? this.paramsData.folio_number : '';
        this.paramsDataComplimentHu = this.paramsData ? this.paramsData.compliment_hu : '';
        this.paramsDataIsLock = this.paramsData ? this.paramsData.is_lock : '';
        this.paramsDataIsIncognito = this.paramsData ? this.paramsData.is_incognito : '';
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.walkin'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('walkin_icon24'),
        action: function action() {
          return _this.showForm('', _this.global.modeData.insert);
        }
      }, {
        name: this.$t('common.contextMenu.update'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.showForm(_this.paramsData, _this.global.modeData.edit);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.transaction'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('transaction_icon24'),
        action: function action() {
          return _this.handleTransaction(_this.paramsData);
        }
      }, // 'separator',
      // {
      // 	name: this.$t('guestInHouse.keylock'),
      // disabled: !this.paramsData,
      // 	action: () =>
      // },
      {
        name: this.paramsDataComplimentHu == this.global.roomStatus.compliment ? this.$t('common.contextMenu.defaultGuest') : this.$t('common.contextMenu.compliment'),
        disabled: !this.paramsData,
        icon: this.paramsDataComplimentHu == this.global.roomStatus.compliment ? '' : Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('compliment_icon24'),
        action: function action() {
          return _this.handleComplimentHu(_this.global.roomStatus.compliment);
        }
      }, {
        name: this.paramsDataComplimentHu == this.global.roomStatus.houseUse ? this.$t('common.contextMenu.defaultGuest') : this.$t('common.contextMenu.houseUse'),
        disabled: !this.paramsData,
        icon: this.paramsDataComplimentHu == this.global.roomStatus.houseUse ? '' : Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('house_use_icon24'),
        action: function action() {
          return _this.handleComplimentHu(_this.global.roomStatus.houseUse);
        }
      }, // 'separator',
      {
        name: this.$t('common.contextMenu.autoPostRoomCharge'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('autopost_icon24'),
        action: function action() {
          return _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmation(_this, 'handlePostingRoomCharge');
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.moveRoom'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('move_room_icon24'),
        action: function action() {
          return _this.handleMoveRoom();
        }
      }, // {
      //     name: this.$t('common.contextMenu.switchRoom'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('switch_room_icon24'),
      //     action: () => this.handleSwitchRoom(),
      // },
      'separator', // {
      //     name: this.paramsDataIsLock == '-1' ? this.$t('common.contextMenu.unlock') : this.$t('common.contextMenu.lock'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid(this.paramsDataIsLock == '-1' ? 'unlock_icon24' : 'lock_icon24'),
      //     action: () => this.handleLockFolio('-1'),
      // },
      {
        name: this.paramsDataIsIncognito == true ? this.$t('common.contextMenu.removeIncognito') : this.$t('common.contextMenu.setIncognito'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('incognito_icon24'),
        action: function action() {
          return _this.handleIncognito('-1');
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.cancelCheckIn'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('cancel_icon24'),
        action: function action() {
          return _this.handleCancelCheckIn();
        }
      }, // {
      // 	name: this.$t('common.contextMenu.message'),
      // disabled: !this.paramsData,
      // 	action: () =>
      // },
      // {
      // 	name: this.$t('common.contextMenu.toDo'),
      // disabled: !this.paramsData,
      // 	action: () =>
      // },
      {
        name: this.$t('common.contextMenu.checkOut'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, 'separator' // {
      //     name: this.$t('common.contextMenu.printFolio'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('print_icon24'),
      //     action: () => this.handlePrintFolio(),
      // },
      // {
      //     name: this.$t('common.contextMenu.printRegistrationForm'),
      //     disabled: !this.paramsData,
      //     icon: generateIconContextMenuAgGrid('print_icon24'),
      //     action: () => this.handlePrintRegistrationForm(),
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
        vm.gridApi.forEachNode(function (node) {
          if (node.data) {
            if (node.data.folio_number == vm.paramsData.folio_number) {
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

                _this2.handleTransaction();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ------------------need setting manual for crud-----------------//
    // ------------------ Guest In House CRUD------------------//
    getGuestInHouseList: function getGuestInHouseList(search) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes, _yield$guestInHouseRe, data, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                selectedNodes = _this3.gridApi != null ? _this3.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 5;
                return guestInHouseResource.list(_this3.search);

              case 5:
                _yield$guestInHouseRe = _context2.sent;
                data = _yield$guestInHouseRe.data;
                _this3.rowData = data.data;
                _this3.pinnedBottomRowData = data.total;

                _this3.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'folio_number');
                });

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 18;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                status = _context2.t0.response;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert(status);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    },
    editGuestInHouse: function editGuestInHouse(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$guestInHouseRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return guestInHouseResource.get(id.folio_number);

              case 3:
                _yield$guestInHouseRe2 = _context3.sent;
                data = _yield$guestInHouseRe2.data;
                _this4.vModel = data.list;
                _this4.dataLookup.room_rate = data.room_rate;
                _this4.dataLookup.bed_type = data.bed_type;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    handleDuplicate: function handleDuplicate(params) {
      this.$refs.registrationForm.handleDuplicate(params);
    },
    trackingData: function trackingData(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$guestInHouseRe3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return guestInHouseResource.log(id.id_log);

              case 3:
                _yield$guestInHouseRe3 = _context4.sent;
                data = _yield$guestInHouseRe3.data;
                _this5.dataTracking = data.modelGrid;
                setTimeout(function () {
                  _this5.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);
                _context4.next = 13;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);

                _this5.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }))();
    },
    refreshData: function refreshData(search) {
      this.search = search;
      this.$loadingIndicator(this);
      this.getGuestInHouseList(search);
    },
    resetData: function resetData() {
      this.vModel = {
        arrival: this.getDateTimeArrival(),
        departure: this.departureResv,
        adult: 1,
        child: 0,
        full_name: '',
        commission_value: 0,
        room_type_code: '',
        weekday_rate: 0,
        weekend_rate: 0,
        discount_percent: '-1',
        payment_type_code: 'CASH',
        market_code: this.dvMarket,
        discount: 0,
        is_male: '-1',
        is_incognito: false,
        audit_date: this.auditDate,
        folio_number: 0,
        balance: 0,
        user_id: this.global.userInfo.code
      };
      this.dbErrors = {};
      this.dataTracking = null;
      this.resetOptionsChangeMoveRoom = false; // prevent reloading input select change Move Room

      this.$validator.reset();
    },
    showForm: function showForm(idData, modeData) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.$refs.registrationForm.showForm(idData, modeData, false);

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    // ------------------ END Guest In House CRUD------------------//
    // ------------------POPULATE SELECT OPTIONS----------------------//
    getDataLookUp: function getDataLookUp() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$guestInHouseRe4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return guestInHouseResource.dataLookup();

              case 3:
                _yield$guestInHouseRe4 = _context6.sent;
                data = _yield$guestInHouseRe4.data;
                _this7.dataLookup = data;

                _this7.$vs.loading.close('#layout--main>.con-vs-loading');

                _context6.next = 13;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);

                _this7.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }))();
    },
    getRoomNumber: function getRoomNumber(type, model) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var params, _yield$guestInHouseRe5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.btnSaveMoveDisabled = true;
                params = {
                  room_type_code: model.room_type_code,
                  bed_type_code: model.bed_type_code,
                  ready: _this8.readyRoom,
                  arrival: _this8.vModel.arrival,
                  departure: _this8.vModel.departure
                };
                _context7.prev = 2;
                _context7.next = 5;
                return guestInHouseResource.roomNumber(params);

              case 5:
                _yield$guestInHouseRe5 = _context7.sent;
                data = _yield$guestInHouseRe5.data;
                _this8.vMoveRoom.new_room_number = null;
                _this8.roomNumber = data.room; // prevent reloading data selection

                if (type !== 'bed_type') {
                  _this8.dataLookup.bed_type = data.bed_type;

                  _this8.getRoomRate(model);
                }

                _this8.btnSaveMoveDisabled = false;
                _context7.next = 17;
                break;

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](2);
                _this8.btnSaveMoveDisabled = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[2, 13]]);
      }))();
    },
    getRoomRate: function getRoomRate(model) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var params, _yield$guestInHouseRe6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(model.room_type_code != null)) {
                  _context8.next = 13;
                  break;
                }

                params = {
                  room_type: model.room_type_code,
                  arrival: _this9.vModel.arrival,
                  departure: _this9.vModel.departure,
                  business_source: _this9.vModel.business_source_code
                };
                _context8.prev = 2;
                _context8.next = 5;
                return guestInHouseResource.roomRate(params);

              case 5:
                _yield$guestInHouseRe6 = _context8.sent;
                data = _yield$guestInHouseRe6.data;
                _this9.dataLookup.room_rate = data;
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[2, 10]]);
      }))();
    },
    getDailyRate: function getDailyRate(model) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var params, _yield$guestInHouseRe7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                params = {
                  adult: _this10.vModel.adult,
                  room_rate: model.room_rate_code
                };
                _context9.prev = 1;
                _context9.next = 4;
                return guestInHouseResource.dailyRate(params);

              case 4:
                _yield$guestInHouseRe7 = _context9.sent;
                data = _yield$guestInHouseRe7.data;
                _this10.rate = {
                  weekday: parseFloat(data.weekday_rate),
                  weekend: parseFloat(data.weekend_rate)
                };

                if (model == _this10.vModel) {
                  _this10.vModel.weekday_rate = _this10.rate.weekday;
                  _this10.vModel.weekend_rate = _this10.rate.weekend;
                } else if (model == _this10.vMoveRoom && _this10.vMoveRoom.change_rate == true) {
                  _this10.vMoveRoom.weekday_rate = _this10.rate.weekday;
                  _this10.vMoveRoom.weekend_rate = _this10.rate.weekend;
                }

                _context9.next = 13;
                break;

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[1, 10]]);
      }))();
    },
    // ------------------END POPULATE SELECT OPTIONS----------------------//
    //  END DATEPICKER CONFIGURATION //
    // ------------------START SIDEBARR OPTIONS-------------------------------//
    handleSidebarOption: function handleSidebarOption(data) {
      this.folioNumber = data.folio_number;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    // ------------------END SIDEBARR OPTIONS-------------------------------//
    // ------------------POSTING AUTO ROOM CHARGE---------------------------//
    handlePostingRoomCharge: function handlePostingRoomCharge() {
      this.autoPostingRoomCharge();
    },
    autoPostingRoomCharge: function autoPostingRoomCharge() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var params, _yield$guestInHouseRe8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = {
                  folio_number: _this11.folioNumber,
                  user_id: _this11.global.userInfo.code
                };
                _context10.prev = 1;

                _this11.$loadingIndicator(_this11);

                _context10.next = 5;
                return guestInHouseResource.autoRoomCharge(params);

              case 5:
                _yield$guestInHouseRe8 = _context10.sent;
                data = _yield$guestInHouseRe8.data;

                if (data >= 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this11.$t("responseStatus.postingRoomCharge.".concat(data)));
                }

                _this11.$vs.loading.close('#layout--main>.con-vs-loading');

                _context10.next = 15;
                break;

              case 11:
                _context10.prev = 11;
                _context10.t0 = _context10["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

                _this11.$vs.loading.close('#layout--main>.con-vs-loading');

              case 15:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 11]]);
      }))();
    },
    // ------------------END POSTING AUTO ROOM CHARGE-----------------------//
    // ----------------START CRUD MOVE ROOM ------------------//
    handleMoveRoom: function handleMoveRoom() {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _this12.sidebarOption = false;

                _this12.$loadingIndicator(_this12);

                _context11.next = 4;
                return _this12.editGuestInHouse(_this12.paramsData);

              case 4:
                _this12.resetMoveRoom();

                _this12.getDataLookUp();

                _this12.vMoveRoom.current_weekday = _this12.vModel.weekday_rate;
                _this12.vMoveRoom.current_weekend = _this12.vModel.weekend_rate;

                _this12.$vs.loading.close('#layout--main>.con-vs-loading');

                _this12.modalMoveRoom = true;

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    handleSaveMoveRoom: function handleSaveMoveRoom() {
      var _this13 = this;

      this.$validator.validateAll('moveRoom').then(function (result) {
        if (result) {
          _this13.modalMoveRoom = false;

          _this13.showCredential(true, _this13.global.accessSpecialOrder.moveRoom);
        }
      });
    },
    handleChangeRate: function handleChangeRate() {
      this.vMoveRoom.weekday_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekday : this.rate.weekday;
      this.vMoveRoom.weekend_rate = !this.vMoveRoom.change_rate ? this.vMoveRoom.current_weekend : this.rate.weekend;
    },
    resetMoveRoom: function resetMoveRoom() {
      this.vMoveRoom = {
        folio_number: this.folioNumber,
        guest_detail_id: this.vModel.guest_detail_id,
        new_room_number: null,
        old_room_number: this.vModel.room_number,
        room_type_code: '',
        bed_type_code: '',
        old_room_rate_code: this.vModel.room_rate_code,
        room_rate_code: '',
        current_weekday: 0,
        current_weekend: 0,
        weekday_rate: 0,
        weekend_rate: 0,
        change_rate: true,
        room_status: this.global.roomStatus.dirty,
        user_id: this.global.userInfo.code
      };
      this.dataLookup = {};
      this.readyRoom = true;
      this.$validator.reset();
    },
    moveRoom: function moveRoom() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _yield$guestInHouseRe9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _this14.vMoveRoom.userBy = _this14.credential.user;
                _this14.vMoveRoom.reason = _this14.credential.reason;
                _context12.prev = 2;

                _this14.$loadingIndicator(_this14);

                _context12.next = 6;
                return guestInHouseResource.moveRoom(_this14.vMoveRoom);

              case 6:
                _yield$guestInHouseRe9 = _context12.sent;
                data = _yield$guestInHouseRe9.data;

                _this14.refreshData(_this14.search);

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this14.$t("responseStatus.moveRoom.".concat(data)));
                }

                _context12.next = 16;
                break;

              case 12:
                _context12.prev = 12;
                _context12.t0 = _context12["catch"](2);

                _this14.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[2, 12]]);
      }))();
    },
    // ----------------END CRUD MOVE ROOM------------------//
    // ----------------START CRUD SWITCH ROOM ------------------//
    handleSwitchRoom: function handleSwitchRoom() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _this15.resetSwitchRoom();

                _context13.next = 3;
                return _this15.getSwitchRoomList();

              case 3:
                _this15.vSwitchRoom.user_id = _this15.global.userInfo.code;
                _this15.vMoveRoom.current_weekday = _this15.vModel.weekday_rate;
                _this15.vMoveRoom.current_weekend = _this15.vModel.weekend_rate;
                _this15.modalSwitchRoom = true;
                _this15.sidebarOption = false;

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    handleSaveSwitchRoom: function handleSaveSwitchRoom() {
      if (this.vSwitchRoom.guest_detail_id_to) {
        this.$loadingIndicator(this);
        this.switchRoom(this.vSwitchRoom);
      } else {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(this.$t('message.selectSwitchRoom'));
      }
    },
    resetSwitchRoom: function resetSwitchRoom() {
      this.vSwitchRoom = {
        guest_detail_id_from: '',
        room_number_from: '',
        room_type_code_from: null,
        bed_type_code_from: '',
        room_rate_code_from: '',
        weekday_rate_from: 0,
        weekend_rate_from: 0,
        user_id: this.global.userInfo.code
      };
    },
    getSwitchRoomList: function getSwitchRoomList() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var _yield$guestInHouseRe10, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;

                _this16.$loadingIndicator(_this16);

                _context14.next = 4;
                return guestInHouseResource.listSwitchRoom({
                  number: _this16.folioNumber
                });

              case 4:
                _yield$guestInHouseRe10 = _context14.sent;
                data = _yield$guestInHouseRe10.data;
                _this16.vSwitchRoom = data.from;
                _this16.switchRooms = data.to;

                _this16.$vs.loading.close('#layout--main>.con-vs-loading');

                _context14.next = 15;
                break;

              case 11:
                _context14.prev = 11;
                _context14.t0 = _context14["catch"](0);

                _this16.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[0, 11]]);
      }))();
    },
    switchRoom: function switchRoom(data) {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return guestInHouseResource.switchRoom(data);

              case 3:
                _this17.modalSwitchRoom = false;

                _this17.refreshData(_this17.search);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                _context15.next = 12;
                break;

              case 8:
                _context15.prev = 8;
                _context15.t0 = _context15["catch"](0);

                _this17.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[0, 8]]);
      }))();
    },
    // ----------------END CRUD SWITCH ROOM------------------//
    // ----------------START COMPLIMENT HOUSE USE---------------//
    handleComplimentHu: function handleComplimentHu(status) {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var accessType;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _this18.$loadingIndicator(_this18);

                _context16.next = 3;
                return _this18.editGuestInHouse(_this18.paramsData);

              case 3:
                if (_this18.vModel.compliment_hu == status) {
                  status = null;
                }

                _this18.vComplimentStatus = {
                  number: _this18.folioNumber,
                  compliment_hu: status,
                  user_id: _this18.global.userInfo.code
                };
                accessType = status == _this18.global.roomStatus.houseUse ? _this18.global.accessSpecialOrder.houseUseGuest : _this18.global.accessSpecialOrder.complimentGuest;

                _this18.showCredential(true, accessType);

                _this18.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    setComplimentHu: function setComplimentHu() {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this19.sidebarOption = false;
                _this19.vComplimentStatus.reason = _this19.credential.reason;
                _this19.vComplimentStatus.userBy = _this19.credential.user;
                _context17.prev = 3;

                _this19.$loadingIndicator(_this19);

                _context17.next = 7;
                return guestInHouseResource.complimentHu(_this19.vComplimentStatus);

              case 7:
                _this19.refreshData(_this19.search);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSucces();
                _context17.next = 15;
                break;

              case 11:
                _context17.prev = 11;
                _context17.t0 = _context17["catch"](3);

                _this19.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].errorSaveDataAlert();

              case 15:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[3, 11]]);
      }))();
    },
    // ----------------END COMPLIMENT HOUSE USE-----------------//
    // ----------------START LOCK FOLIO---------------//
    handleLockFolio: function handleLockFolio(value) {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _this20.sidebarOption = false;

                _this20.$loadingIndicator(_this20);

                _context18.next = 4;
                return _this20.editGuestInHouse(_this20.paramsData);

              case 4:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmation(_this20, 'lockFolio', value);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }))();
    },
    lockFolio: function lockFolio(value) {
      var _this21 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (_this21.vModel.is_lock == value) {
                  value = '0';
                }

                data = {
                  number: _this21.folioNumber,
                  is_lock: value,
                  user_id: _this21.global.userInfo.code
                };

                _this21.$loadingIndicator(_this21);

                _context19.next = 5;
                return guestInHouseResource.lock(data);

              case 5:
                _this21.refreshData(_this21.search);

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    },
    // ----------------END LOCK FOLIO-----------------//
    // ----------------START INCOGNITO---------------//
    handleIncognito: function handleIncognito(value) {
      var _this22 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _this22.sidebarOption = false;

                _this22.$loadingIndicator(_this22);

                _context20.next = 4;
                return _this22.editGuestInHouse(_this22.paramsData);

              case 4:
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmation(_this22, 'setIncognito', value);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }))();
    },
    setIncognito: function setIncognito(value) {
      var _this23 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (_this23.vModel.is_incognito == true) {
                  value = '0';
                }

                data = {
                  number: _this23.folioNumber,
                  is_incognito: value,
                  user_id: _this23.global.userInfo.code
                };

                _this23.$loadingIndicator(_this23);

                _context21.next = 5;
                return guestInHouseResource.incognito(data);

              case 5:
                _this23.refreshData(_this23.search);

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }))();
    },
    // ----------------END INCOGNITO-----------------//
    // ----------------START CANCEL CHECK IN---------------//
    handleCancelCheckIn: function handleCancelCheckIn() {
      var _this24 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _this24.sidebarOption = false;

                _this24.$loadingIndicator(_this24);

                _context22.next = 4;
                return _this24.editGuestInHouse(_this24.paramsData);

              case 4:
                if (Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDateDatabase"])(_this24.vModel.arrival) == _this24.auditDate) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmation(_this24, 'showCredential', true, _this24.global.accessSpecialOrder.cancelCheckIn);
                } else {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this24.$t('message.canNotCancelCheckIn'));
                }

                _this24.$vs.loading.close('#layout--main>.con-vs-loading');

              case 6:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }))();
    },
    cancelCheckIn: function cancelCheckIn() {
      var _this25 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var params, _yield$guestInHouseRe11, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                params = {
                  arrival: _this25.vModel.arrival,
                  departure: _this25.vModel.departure,
                  reservation_number: _this25.vModel.reservation_number,
                  number: _this25.folioNumber,
                  reason: _this25.credential.reason,
                  user_by: _this25.credential.user,
                  user_id: _this25.global.userInfo.code
                };

                _this25.$loadingIndicator(_this25);

                _context23.next = 4;
                return guestInHouseResource.cancelCheckIn(params);

              case 4:
                _yield$guestInHouseRe11 = _context23.sent;
                data = _yield$guestInHouseRe11.data;

                if (data.value == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSuccesCancelCheckIn();
                } else if (data.value > 0) {
                  if (data.value == 1) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this25.$t('message.canNotCancelCheckIn'));
                  } else if (data.value == 2) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this25.$t('message.canNotCancelCheckInResponseValue2'));
                  } else if (data.value == 3) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this25.$t('message.folioTransferMessage') + data.transferMessage);
                  } else if (data.value == 4) {
                    _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this25.$t('message.folioHaveTransferMessage') + data.transferMessage);
                  }
                }

                _this25.sidebarOption = false;

                _this25.refreshData(_this25.search);

              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }))();
    },
    // ----------------END COMPLIMENT HOUSE USE-----------------//
    // ----------------START CHECK OUT---------------//
    handleCheckOut: function handleCheckOut() {
      var _this26 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _this26.sidebarOption = false;
                _context24.next = 3;
                return _this26.getBalance();

              case 3:
                balance = _this26.balance;

                if (balance === 'null' || balance == null) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmationW8Text(_this26.$t('message.checkOutWithoutTransaction'), _this26, 'checkOut');
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information(_this26.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].confirmation(_this26, 'checkOut');
                }

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }))();
    },
    checkOut: function checkOut() {
      var _this27 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var params, _yield$guestInHouseRe12, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                params = {
                  number: _this27.folioNumber,
                  user_id: _this27.global.userInfo.code
                };
                _context25.next = 3;
                return guestInHouseResource.checkOut(params);

              case 3:
                _yield$guestInHouseRe12 = _context25.sent;
                data = _yield$guestInHouseRe12.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_5__["default"].acceptAlertSuccesWithText(_this27.$t('responseStatus.checkOut.0'));
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_4__["default"].information("".concat(_this27.$t("responseStatus.checkOut.".concat(data.value)), "\n").concat(data.message));
                }

                _this27.refreshData(_this27.search);

              case 7:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }))();
    },
    getBalance: function getBalance() {
      var _this28 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _this28.$loadingIndicator(_this28);

                _context26.next = 3;
                return transactionResource.balance({
                  q: _this28.folioNumber
                });

              case 3:
                _yield$transactionRes = _context26.sent;
                data = _yield$transactionRes.data;
                _this28.balance = data.balance;

                _this28.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }))();
    },
    // ----------------END CHECK OUT---------------//
    // ----------------START OTHER OPTION------------------//
    handleTransaction: function handleTransaction() {
      var _this29 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var _yield$guestInHouseRe13, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _this29.sidebarOption = false;

                _this29.$loadingIndicator(_this29);

                _context27.next = 4;
                return guestInHouseResource.get(_this29.paramsData.folio_number);

              case 4:
                _yield$guestInHouseRe13 = _context27.sent;
                data = _yield$guestInHouseRe13.data;

                _this29.$router.push({
                  name: 'transaction',
                  params: {
                    form: _this29.global.formType.guestInHouse,
                    stayInformations: data.list
                  }
                });

              case 7:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }))();
    },
    // PRINT,
    handlePrintRegistrationForm: function handlePrintRegistrationForm() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.registrationFormInHouse, "&folioNumber=").concat(this.paramsData.folio_number, "&template=").concat(this.global.stimulsoftReportFileDirectory.registrationFormInHouse)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintFolio: function handlePrintFolio() {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.folio, "&folioNumber=").concat(this.paramsData.folio_number, "&template=").concat(this.global.stimulsoftReportFileDirectory.folio)
      });
      window.open(newTabReport.href, '_blank');
    },
    getDateTimeArrival: function getDateTimeArrival() {
      var time = new Date();
      var h = this.addZeroHour(time.getHours());
      var m = this.addZeroHour(time.getMinutes());
      var s = this.addZeroHour(time.getSeconds());
      var times = "".concat(h, ":").concat(m, ":").concat(s);
      var arrResv = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(times));
      return arrResv;
    },
    // ----------------END OTHER OPTION------------------//
    // ------------------end need setting manual for crud-----------------//
    // --------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(isCredential, type) {
      this.credential = {};
      this.activeCredentialPrompt = true;
      this.isCredential = isCredential;
      this.specialAccessType = type;
    },
    acceptReason: function acceptReason() {
      if (this.specialAccessType == this.global.accessSpecialOrder.moveRoom) {
        this.moveRoom();
      } else if (this.specialAccessType == this.global.accessSpecialOrder.cancelCheckIn) {
        this.cancelCheckIn();
      } else if (this.specialAccessType == this.global.accessSpecialOrder.complimentGuest || this.specialAccessType == this.global.accessSpecialOrder.houseUseGuest) {
        this.setComplimentHu();
      }
    } // --------------------CREDENTIAL----------------------------------------//

  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
  },
  watch: {
    sidebarOption: function sidebarOption() {
      if (!this.sidebarOption) {
        document.getElementById('main-container').click();
      }
    },
    modalSwitchRoom: function modalSwitchRoom() {
      var _this30 = this;

      if (this.modalSwitchRoom) {
        this.$nextTick(function () {
          Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["addDialogCloseButton"])(_this30, 'switch_room', 'modalSwitchRoom');
        });
      }
    },
    modalMoveRoom: function modalMoveRoom() {
      var _this31 = this;

      if (this.modalMoveRoom) {
        this.$nextTick(function () {
          Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_8__["addDialogCloseButton"])(_this31, 'move_room', 'modalMoveRoom');
        });
      }
    }
  },
  computed: {
    departureResv: function departureResv() {
      var departure = new Date(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDateTimeDatabase"])("".concat(this.auditDate, " ").concat(this.checkOutLimit)));
      departure.setDate(departure.getDate() + 1);
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_14__["formatDateTimeDatabase"])(departure);
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    dvMarket: function dvMarket() {
      return this.$store.getters.dvMarket;
    },
    checkOutLimit: function checkOutLimit() {
      return this.$store.getters.checkOutLimit;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
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
  name: 'switchRoomTable',
  props: {
    data: Array
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
      rowSelection: null,
      selectedRow: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('guestInHouse.switchRoom.table.room'),
      field: 'room_number_to',
      width: 80
    }, {
      headerName: this.$t('guestInHouse.switchRoom.table.fullName'),
      field: 'full_name_to',
      width: 200
    }, {
      headerName: this.$t('guestInHouse.switchRoom.table.roomType'),
      field: 'room_type_to',
      width: 170
    }, {
      headerName: this.$t('guestInHouse.switchRoom.table.roomRate'),
      field: 'room_rate_to',
      width: 170
    }, {
      headerName: this.$t('guestInHouse.switchRoom.table.folioNumber'),
      field: 'folio_number_to',
      width: 120
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var _this$gridApi$getSele = this.gridApi.getSelectedRows(),
          _this$gridApi$getSele2 = _slicedToArray(_this$gridApi$getSele, 1),
          selected = _this$gridApi$getSele2[0];

      this.$emit('selected', selected);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0& ***!
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
    { staticClass: "guest-in-house" },
    [
      _c(
        "navigation-header",
        {
          attrs: { insertButton: true },
          on: {
            showModal: _vm.showForm,
            refreshData: function (val) {
              _vm.limitPageSize = parseFloat(val)
              _vm.$refs.filterHeader.onRefreshData(val)
            },
          },
        },
        [_vm._v(_vm._s(_vm.$t("button.walkIn")))]
      ),
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
              enableRangeSelection: false,
              statusBar: _vm.statusBar,
              gridOptions: _vm.gridOptions,
              context: _vm.context,
              columnDefs: _vm.columnDefs,
              frameworkComponents: _vm.frameworkComponents,
              enableCellChangeFlash: true,
              rowSelection: _vm.rowSelection,
              rowData: _vm.rowData,
              defaultColDef: _vm.global.defColDef,
              pinnedBottomRowData: _vm.pinnedBottomRowData,
              getContextMenuItems: _vm.getContextMenu,
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
        attrs: { isReservation: false, isGuestInHouse: true },
        on: {
          refreshData: function ($event) {
            return _vm.$refs.filterHeader.onRefreshData()
          },
        },
      }),
      _vm._v(" "),
      _c(
        "vs-sidebar",
        {
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
                    _vm._s(_vm.$t("guestInHouse.menu.title")) +
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
                { attrs: { index: "1" }, on: { click: _vm.handleTransaction } },
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
                      src: "/images/icons/transaction_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("guestInHouse.menu.transaction")) +
                      "\n                "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "3" },
                  on: {
                    click: function ($event) {
                      return _vm.handleComplimentHu(
                        _vm.global.roomStatus.compliment
                      )
                    },
                  },
                },
                [
                  _vm.paramsDataComplimentHu !==
                  _vm.global.roomStatus.compliment
                    ? _c("img", {
                        class:
                          _vm.sidebarConfig.iconMarginRight +
                          " " +
                          _vm.sidebarConfig.iconMarginLeft,
                        attrs: {
                          border: _vm.sidebarConfig.iconBorder,
                          width: _vm.sidebarConfig.iconWidth,
                          height: _vm.sidebarConfig.iconHeight,
                          src: "/images/icons/compliment_icon24.png",
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.paramsDataComplimentHu ===
                  _vm.global.roomStatus.compliment
                    ? _c("span", [_vm._v("DEFAULT GUEST")])
                    : _c("span", [
                        _vm._v(_vm._s(_vm.$t("guestInHouse.menu.compliment"))),
                      ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "4" },
                  on: {
                    click: function ($event) {
                      return _vm.handleComplimentHu(
                        _vm.global.roomStatus.houseUse
                      )
                    },
                  },
                },
                [
                  _vm.paramsDataComplimentHu !== _vm.global.roomStatus.houseUse
                    ? _c("img", {
                        class:
                          _vm.sidebarConfig.iconMarginRight +
                          " " +
                          _vm.sidebarConfig.iconMarginLeft,
                        attrs: {
                          border: _vm.sidebarConfig.iconBorder,
                          width: _vm.sidebarConfig.iconWidth,
                          height: _vm.sidebarConfig.iconHeight,
                          src: "/images/icons/house_use_icon24.png",
                        },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.paramsDataComplimentHu === _vm.global.roomStatus.houseUse
                    ? _c("span", [
                        _vm._v(
                          _vm._s(_vm.$t("guestInHouse.menu.defaultGuest"))
                        ),
                      ])
                    : _c("span", [
                        _vm._v(_vm._s(_vm.$t("guestInHouse.menu.houseUse"))),
                      ]),
                ]
              ),
              _vm._v(" "),
              _c("vs-divider", { attrs: { position: "center" } }),
              _vm._v(" "),
              _c(
                "vs-sidebar-item",
                {
                  attrs: { index: "5" },
                  on: {
                    click: function ($event) {
                      return _vm.handleCheckOut()
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
                      src: "/images/icons/check_out_icon24.png",
                    },
                  }),
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("guestInHouse.menu.checkOut")) +
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
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title:
            _vm.$t("guestInHouse.moveRoom.title") +
            ": " +
            _vm.vModel.room_number,
          width: 500,
          active: _vm.modalMoveRoom,
          idButton1: "button-save-move",
          buttonDisabled1: _vm.btnSaveMoveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveMoveRoom()
          },
          close: function (val) {
            return (_vm.modalMoveRoom = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        class: _vm.rowMarginBottom,
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
                                    _vm.$t("guestInHouse.moveRoom.roomType")
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
                                    options: _vm.dataLookup.room_type,
                                    name: "room type",
                                    "data-vv-scope": "moveRoom",
                                  },
                                  on: {
                                    input: function ($event) {
                                      _vm.getRoomNumber(null, _vm.vMoveRoom)
                                      _vm.resetOptionsChangeMoveRoom = true
                                    },
                                  },
                                  model: {
                                    value: _vm.vMoveRoom.room_type_code,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vMoveRoom,
                                        "room_type_code",
                                        $$v
                                      )
                                    },
                                    expression: "vMoveRoom.room_type_code",
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
                                          _vm.errors.has("moveRoom.room type"),
                                        expression:
                                          "errors.has('moveRoom.room type')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("moveRoom.room type")
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
                                    _vm.$t("guestInHouse.moveRoom.bedType")
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
                                    resetOnOptionsChange:
                                      _vm.resetOptionsChangeMoveRoom,
                                    clearable: false,
                                    label: "name",
                                    reduce: function (value) {
                                      return value.code
                                    },
                                    options: _vm.dataLookup.bed_type,
                                    name: "bed type",
                                    "data-vv-scope": "moveRoom",
                                  },
                                  on: {
                                    input: function ($event) {
                                      return _vm.getRoomNumber(
                                        "bed_type",
                                        _vm.vMoveRoom
                                      )
                                    },
                                  },
                                  model: {
                                    value: _vm.vMoveRoom.bed_type_code,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vMoveRoom,
                                        "bed_type_code",
                                        $$v
                                      )
                                    },
                                    expression: "vMoveRoom.bed_type_code",
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
                                          _vm.errors.has("moveRoom.bed type"),
                                        expression:
                                          "errors.has('moveRoom.bed type')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("moveRoom.bed type")
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
                        class: _vm.rowMarginBottom,
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
                                  _vm._s(_vm.$t("guestInHouse.moveRoom.room"))
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
                                    resetOptionsChange: true,
                                    clearable: false,
                                    label: "number",
                                    reduce: function (value) {
                                      return value.number
                                    },
                                    options: _vm.roomNumber,
                                    name: "room number",
                                    "data-vv-scope": "moveRoom",
                                  },
                                  model: {
                                    value: _vm.vMoveRoom.new_room_number,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vMoveRoom,
                                        "new_room_number",
                                        $$v
                                      )
                                    },
                                    expression: "vMoveRoom.new_room_number",
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
                                          "moveRoom.room number"
                                        ),
                                        expression:
                                          "errors.has('moveRoom.room number')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first(
                                          "guestInHouse.moveRoom.room number"
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
                        class: _vm.rowMarginBottom,
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c("input-number", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t(
                              "guestInHouse.moveRoom.currentWeekday"
                            ),
                          },
                          model: {
                            value: _vm.vMoveRoom.current_weekday,
                            callback: function ($$v) {
                              _vm.$set(_vm.vMoveRoom, "current_weekday", $$v)
                            },
                            expression: "vMoveRoom.current_weekday",
                          },
                        }),
                        _vm._v(" "),
                        _c("input-number", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t(
                              "guestInHouse.moveRoom.currentWeekend"
                            ),
                          },
                          model: {
                            value: _vm.vMoveRoom.current_weekend,
                            callback: function ($$v) {
                              _vm.$set(_vm.vMoveRoom, "current_weekend", $$v)
                            },
                            expression: "vMoveRoom.current_weekend",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        class: _vm.rowMarginBottom,
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
                            _c(
                              "vs-row",
                              [
                                _c("vs-row", [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t("guestInHouse.moveRoom.roomRate")
                                      )
                                    ),
                                  ]),
                                ]),
                                _vm._v(" "),
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
                                    resetOnOptionsChange:
                                      _vm.resetOptionsChangeMoveRoom,
                                    clearable: false,
                                    label: "name",
                                    reduce: function (value) {
                                      return value.code
                                    },
                                    options: _vm.dataLookup.room_rate,
                                    name: "room rate",
                                    "data-vv-scope": "moveRoom",
                                  },
                                  on: {
                                    input: function ($event) {
                                      _vm.getDailyRate(_vm.vMoveRoom)
                                      _vm.handleChangeRate()
                                    },
                                  },
                                  model: {
                                    value: _vm.vMoveRoom.room_rate_code,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vMoveRoom,
                                        "room_rate_code",
                                        $$v
                                      )
                                    },
                                    expression: "vMoveRoom.room_rate_code",
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
                                          _vm.errors.has("moveRoom.room rate"),
                                        expression:
                                          "errors.has('moveRoom.room rate')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("moveRoom.room rate")
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
                          { staticClass: "wrap-form-select w-full md:w-1/2" },
                          [
                            _c("vs-row", [_vm._v(".")]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              { staticClass: "wrap-form-select w-full" },
                              [
                                _c(
                                  "vs-checkbox",
                                  {
                                    staticClass: "w-full",
                                    staticStyle: {
                                      padding: "0px",
                                      margin: "inherit",
                                    },
                                    on: {
                                      input: function ($event) {
                                        return _vm.handleChangeRate()
                                      },
                                    },
                                    model: {
                                      value: _vm.vMoveRoom.change_rate,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.vMoveRoom,
                                          "change_rate",
                                          $$v
                                        )
                                      },
                                      expression: "vMoveRoom.change_rate",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "guestInHouse.moveRoom.changeRate"
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
                        class: _vm.rowMarginBottom,
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c("input-number", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.moveRoom.newWeekday"),
                          },
                          model: {
                            value: _vm.vMoveRoom.weekday_rate,
                            callback: function ($$v) {
                              _vm.$set(_vm.vMoveRoom, "weekday_rate", $$v)
                            },
                            expression: "vMoveRoom.weekday_rate",
                          },
                        }),
                        _vm._v(" "),
                        _c("input-number", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.moveRoom.newWeekend"),
                          },
                          model: {
                            value: _vm.vMoveRoom.weekend_rate,
                            callback: function ($$v) {
                              _vm.$set(_vm.vMoveRoom, "weekend_rate", $$v)
                            },
                            expression: "vMoveRoom.weekend_rate",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider", [
                      _vm._v(
                        _vm._s(
                          _vm.$t("guestInHouse.moveRoom.roomStatusMoveRoom")
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mb-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: { "vs-value": _vm.global.roomStatus.ready },
                            model: {
                              value: _vm.vMoveRoom.room_status,
                              callback: function ($$v) {
                                _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                              },
                              expression: "vMoveRoom.room_status",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("roomStatus.ready")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "success",
                              "vs-value": _vm.global.roomStatus.clean,
                            },
                            model: {
                              value: _vm.vMoveRoom.room_status,
                              callback: function ($$v) {
                                _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                              },
                              expression: "vMoveRoom.room_status",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("roomStatus.clean")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "brown",
                              "vs-value": _vm.global.roomStatus.dirty,
                            },
                            model: {
                              value: _vm.vMoveRoom.room_status,
                              callback: function ($$v) {
                                _vm.$set(_vm.vMoveRoom, "room_status", $$v)
                              },
                              expression: "vMoveRoom.room_status",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("roomStatus.dirty")))]
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
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title: _vm.$t("guestInHouse.switchRoom.title"),
          width: 500,
          active: _vm.modalSwitchRoom,
          idButton1: "button-save-switch",
          buttonDisabled1: _vm.btnSaveMoveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveSwitchRoom()
          },
          close: function (val) {
            return (_vm.modalSwitchRoom = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "div",
                  [
                    _c("vs-divider", [
                      _vm._v(
                        _vm._s(_vm.$t("guestInHouse.switchRoom.switchFrom"))
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c("vs-input", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.switchRoom.room"),
                          },
                          model: {
                            value: _vm.vSwitchRoom.room_number_from,
                            callback: function ($$v) {
                              _vm.$set(_vm.vSwitchRoom, "room_number_from", $$v)
                            },
                            expression: "vSwitchRoom.room_number_from",
                          },
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.switchRoom.fullName"),
                          },
                          model: {
                            value: _vm.vSwitchRoom.full_name_from,
                            callback: function ($$v) {
                              _vm.$set(_vm.vSwitchRoom, "full_name_from", $$v)
                            },
                            expression: "vSwitchRoom.full_name_from",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        staticClass: "mt-3 mb-3",
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c("vs-input", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.switchRoom.roomType"),
                          },
                          model: {
                            value: _vm.vSwitchRoom.room_type_from,
                            callback: function ($$v) {
                              _vm.$set(_vm.vSwitchRoom, "room_type_from", $$v)
                            },
                            expression: "vSwitchRoom.room_type_from",
                          },
                        }),
                        _vm._v(" "),
                        _c("vs-input", {
                          staticClass: "w-full md:w-1/2",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("guestInHouse.switchRoom.roomRate"),
                          },
                          model: {
                            value: _vm.vSwitchRoom.room_rate_from,
                            callback: function ($$v) {
                              _vm.$set(_vm.vSwitchRoom, "room_rate_from", $$v)
                            },
                            expression: "vSwitchRoom.room_rate_from",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider", [
                      _vm._v(
                        _vm._s(_vm.$t("guestInHouse.switchRoom.switchTo"))
                      ),
                    ]),
                    _vm._v(" "),
                    _c("switch-room", {
                      attrs: { data: _vm.switchRooms },
                      on: {
                        selected: function (value) {
                          return Object.assign.apply(
                            Object,
                            [_vm.vSwitchRoom].concat(value)
                          )
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c("credential", {
        attrs: {
          value: _vm.credential,
          specialAccessType: _vm.specialAccessType,
          activeCredential: _vm.activeCredentialPrompt,
          isCredential: _vm.isCredential,
          isReason: true,
          title: _vm.credentialTitle,
        },
        on: {
          "update:active-credential": function (val) {
            return (_vm.activeCredentialPrompt = val)
          },
          acceptReason: function ($event) {
            return _vm.acceptReason()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca& ***!
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
    [
      _c("ag-grid-vue", {
        class: _vm.global.themeAgGrid,
        style: _vm.global.styleAgGridFrame1,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
          rowSelection: _vm.rowSelection,
          defaultColDef: _vm.global.colDef1,
        },
        on: {
          "grid-ready": _vm.onGridReady,
          "selection-changed": _vm.getSelectedRow,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/incognito_icon.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/incognito_icon.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:2.5px\">\n        <img v-if=\"data === true\" src=\"/images/icons/inc.png\" width=\"20\" height=\"20\">\n    </div>\n         ",
  data: function data() {
    return {
      data: null
    };
  },
  mounted: function mounted() {
    if (this.params.data) {
      this.data = this.params.data.is_incognito;
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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/source-status.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/source-status.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div v-if=\"params.data\" style=\"margin-top:2.5px\" class=\"reservation-status-grid\">\n\n        <vs-chip v-if=\"date.departure == auditDate && data > 0\" color=\"#FF002A\">\n            Checked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != auditDate && data > 0\" color=\"#2494C6\">\n            Checked In\n        </vs-chip>\n        <span v-else-if=\"date.departure == null && data == null\" >\n\n        </span>\n        <vs-chip v-else-if=\"date.departure == auditDate && data == 0\" color=\"#FF002A\">\n            Walked In\n        </vs-chip>\n\n        <vs-chip v-else-if=\"date.departure != auditDate && data == 0\" color=\"#C62583\">\n            Walked In\n        </vs-chip>\n\n\n    </div>\n         ",
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
    if (this.params.data) {
      this.data = this.params.data.reservation_number;
      this.date = {
        arrival: this.params.data.date_arrival,
        departure: this.params.data.date_departure
      };
    }
  },
  computed: {
    auditDate: {
      get: function get() {
        return this.$store.state.auditLog.auditDate;
      }
    }
  },
  methods: {}
}));

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuestInHouse.vue?vue&type=template&id=318b13c0& */ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&");
/* harmony import */ var _GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuestInHouse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/GuestInHouse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./GuestInHouse.vue?vue&type=template&id=318b13c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/GuestInHouse.vue?vue&type=template&id=318b13c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuestInHouse_vue_vue_type_template_id_318b13c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=template&id=33ebfeca& */ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca&");
/* harmony import */ var _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoom.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SwitchRoom.vue?vue&type=template&id=33ebfeca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/guest-in-house/components/SwitchRoom.vue?vue&type=template&id=33ebfeca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoom_vue_vue_type_template_id_33ebfeca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);