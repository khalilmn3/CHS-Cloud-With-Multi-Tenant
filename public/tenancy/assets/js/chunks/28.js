(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
//
//
//
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
  props: ['idData', 'theData'],
  components: {
    'ag-grid-vue': ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowGroupPanelShow: null,
      statusBar: null,
      sideBar: null,
      paginationPageSize: null,
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//

    this.columnDefs = [{
      headerName: this.$t('tracking.logDate'),
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDate"]
    }, {
      headerName: this.$t('tracking.logTime'),
      field: 'log_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"]
    }, {
      headerName: this.$t('tracking.mode'),
      field: 'mode',
      width: 100
    }, {
      headerName: this.$t('tracking.userID'),
      field: 'user_id',
      width: 120
    }, {
      headerName: this.$t('tracking.tableName'),
      field: 'table_name_log',
      width: 150
    }, {
      headerName: this.$t('tracking.data'),
      field: 'data_query',
      width: 350
    }];
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_transaction */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_transaction.js");
/* harmony import */ var _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/Tracking.vue */ "./resources/js/src/views/pages/components/Tracking.vue");
/* harmony import */ var _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/Credential */ "./resources/js/src/views/pages/components/Credential.vue");
/* harmony import */ var _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/pages/components/Number */ "./resources/js/src/views/pages/components/Number.vue");
/* harmony import */ var _views_pages_components_transaction_components_UpdateDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/pages/components/transaction/components/UpdateDialog */ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue");
/* harmony import */ var _views_pages_components_transaction_components_Properties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/transaction/components/Properties */ "./resources/js/src/views/pages/components/transaction/components/Properties.vue");
/* harmony import */ var _views_pages_components_ag_grid_framework_checklist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/checklist */ "./resources/js/src/views/pages/components/ag_grid-framework/checklist.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_statusbar_total__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/statusbar_total */ "./resources/js/src/views/pages/components/ag_grid-framework/statusbar_total.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");
/* harmony import */ var _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/guestinhouse/guestInHouse */ "./resources/js/src/api/guestinhouse/guestInHouse.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting.js */ "./resources/js/src/api/tools/user-setting/userSetting.js");
/* harmony import */ var _api_trackingData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/api/trackingData */ "./resources/js/src/api/trackingData.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _transfer_account_TransferAccount__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transfer/account/TransferAccount */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue");
/* harmony import */ var _transfer_return_ReturnTransfer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transfer/return/ReturnTransfer */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue");
/* harmony import */ var _transfer_routing_AutomaticRouting__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transfer/routing/AutomaticRouting */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue");
/* harmony import */ var _components_InformationHeader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/InformationHeader */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue");
/* harmony import */ var _components_InformationFooter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/InformationFooter */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue");
/* harmony import */ var _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/NavigationHeader */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue");
/* harmony import */ var _components_FilterHeader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/FilterHeader */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue");
/* harmony import */ var _components_PackageBreakdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/PackageBreakdown */ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue");
/* harmony import */ var _components_AdvancedCorrection__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/AdvancedCorrection */ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















 // ------for format----- //











var guestInHouseResource = new _api_guestinhouse_guestInHouse__WEBPACK_IMPORTED_MODULE_12__["default"]();
var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_13__["default"]();
var userSettingResource = new _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_14__["default"]();
var trackingDataResource = new _api_trackingData__WEBPACK_IMPORTED_MODULE_15__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Transaction',
  props: {
    titleForm: String,
    routeApi: String,
    mainTableName: String,
    stayInformations: Object,
    folioNumber: String,
    isDayendClose: Boolean,
    isCheckOut: Boolean,
    form: String
  },
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    InformationHeader: _components_InformationHeader__WEBPACK_IMPORTED_MODULE_22__["default"],
    InformationFooter: _components_InformationFooter__WEBPACK_IMPORTED_MODULE_23__["default"],
    NavigationHeader: _components_NavigationHeader__WEBPACK_IMPORTED_MODULE_24__["default"],
    FilterHeader: _components_FilterHeader__WEBPACK_IMPORTED_MODULE_25__["default"],
    Credential: _views_pages_components_Credential__WEBPACK_IMPORTED_MODULE_4__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17___default.a,
    Tracking: _views_pages_components_Tracking_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InputNumber: _views_pages_components_Number__WEBPACK_IMPORTED_MODULE_5__["default"],
    TransferAccount: _transfer_account_TransferAccount__WEBPACK_IMPORTED_MODULE_19__["default"],
    ReturnTransfer: _transfer_return_ReturnTransfer__WEBPACK_IMPORTED_MODULE_20__["default"],
    AutomaticRouting: _transfer_routing_AutomaticRouting__WEBPACK_IMPORTED_MODULE_21__["default"],
    UpdateTransaction: _views_pages_components_transaction_components_UpdateDialog__WEBPACK_IMPORTED_MODULE_6__["default"],
    Properties: _views_pages_components_transaction_components_Properties__WEBPACK_IMPORTED_MODULE_7__["default"],
    PackageBreakdown: _components_PackageBreakdown__WEBPACK_IMPORTED_MODULE_26__["default"],
    AdvancedCorrection: _components_AdvancedCorrection__WEBPACK_IMPORTED_MODULE_27__["default"]
  },
  data: function data() {
    return {
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
      rowClassRules: null,
      dataTracking: null,
      // Parameter From Child
      idData: '',
      // Mode Edit Or Insert(assign insert from parent, update from child)
      modeDataValue: 0,
      modeDataValueTracking: 0,
      modeChildValue: '',
      // data error handling from laravel validation//
      dbErrors: {},
      // ------------------need setting manual-----------------//
      searchOption: [{
        code: 'sub_folio.id_log',
        name: this.$t('common.filter.id')
      }, {
        code: 'guest_detail.room_number',
        name: this.$t('common.filter.roomNumber')
      }, {
        code: 'cfg_init_account.name',
        name: this.$t('common.filter.account')
      }, {
        code: 'company.name',
        name: this.$t('common.filter.company')
      }, {
        code: 'sub_folio.remark',
        name: this.$t('common.filter.remark')
      }, {
        code: 'sub_folio.document_number',
        name: this.$t('common.filter.docNumber')
      }, {
        code: 'sub_folio.voucher_number',
        name: this.$t('common.filter.voucherNumber')
      }, {
        code: 'cfg_init_sub_department.name',
        name: this.$t('common.filter.subDepartment')
      }, {
        code: 'sub_folio.ref_number',
        name: this.$t('common.filter.refNumber')
      }, {
        code: 'sub_folio.insert_by',
        name: this.$t('common.filter.insertBy')
      }, {
        code: 'sub_folio.void_by',
        name: this.$t('common.filter.voidBy')
      }, {
        code: 'sub_folio.void_reason',
        name: this.$t('common.filter.voidReason')
      }, {
        code: 'sub_folio.user_id',
        name: this.$t('common.filter.lastUpdate')
      }],
      searchDefault: 'sub_folio.id_log',
      // ------CREDENTIAL-------//
      specialAccessType: 1000,
      userValidation: false,
      activeCredentialPrompt: false,
      activeCredentialReasonPrompt: false,
      credentialTitle: '',
      isCredential: true,
      credential: {
        user: '',
        pass: '',
        reason: ''
      },
      reasonTypeValue: '',
      resvStatus: '',
      paramsData: '',
      idLog: '',
      reqDocNumber: '',
      reqDirectBill: '',
      reqCard: '',
      reqTransfer: '',
      search: {
        searchBy: 'sub_folio.id_log',
        keyword: '',
        limit: 1000,
        subFolio: 'All',
        possession: '',
        transfered: '',
        "void": '',
        correction: ''
      },
      vTransaction: {},
      vDirectBill: null,
      vOutstanding: 0,
      vArLimit: 0,
      listTransferTransaction: [],
      listTransaction: [],
      listFolio: [],
      listReturnTransfer: [],
      balanceData: {
        debit: 0,
        credit: 0,
        balance: 0
      },
      balanceAmount: {},
      showInputForm: false,
      showPaymentOption: false,
      showTransferForm: false,
      showAdvancedCorrection: false,
      isRefund: false,
      resetOptionsChange: false,
      titleInputForm: '',
      form1: 'form1',
      accounts: [],
      dataLookup: {},
      account: {
        code: ''
      },
      folioType: [],
      subGroupAccount: '',
      groupAccount: '',
      activeTab: 1,
      tfType: null,
      tfBalance: '',
      tfAccount: 'subFolio',
      tfFolioType: '',
      vReturn: {},
      vTransfer: {
        option: 1
      },
      vRouting: {},
      disabledFolioList: false,
      selectedAccount: null,
      listRouting: [],
      nFolioType: '',
      // folio type of folio number
      isFolioOpen: false,
      oldCorrectionValue: 0,
      newCorrectionValue: 0,
      correctionPrompt: false,
      sidebarOption: false,
      btnPaymentOptionDisabled: false,
      btnSaveDisabled: false,
      btnSaveTransfer1: false,
      btnSaveTransfer2: false,
      isShowProperties: false,
      isAdvancedCorrection: false,
      userAccess: {
        charge: false,
        cash: false,
        card: false,
        directBill: false,
        updateDirectBill: false,
        cashRefund: false,
        otherPayment: false,
        "void": false,
        correction: false,
        transfer: false,
        updateSubDepartment: false,
        updateRemark: false,
        updateDocumentNumber: false,
        checkOut: false,
        printFolio: false
      },
      // Package
      dlPackage: [],
      packageBreakdownData: [],
      vPackage: {
        "package": {}
      },
      modalPackage: false,
      btnPakcageDisabled: false // ------------------end need setting manual-----------------//

    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightReservation
    };
    this.rowClassRules = {
      correction: ' data && data.is_correction === "-1"',
      "void": 'data && data.void === "-1"'
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
      width: 100
    }, {
      headerName: this.$t('transaction.table.id'),
      field: 'id_log',
      width: 70
    }, {
      headerName: this.$t('transaction.table.auditDate'),
      field: 'audit_date',
      width: 100,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatDate"]
    }, {
      headerName: this.$t('transaction.table.transferStatus'),
      field: 'transfer_status',
      width: 150
    }, {
      headerName: this.$t('transaction.table.roomNumber'),
      field: 'room_number',
      width: 90
    }, {
      headerName: this.$t('transaction.table.account'),
      field: 'account',
      width: 200
    }, {
      headerName: this.$t('transaction.table.debit'),
      field: 'debit',
      width: 160,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.credit'),
      field: 'credit',
      width: 160,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.currency'),
      field: 'currency_code',
      width: 100
    }, {
      headerName: this.$t('transaction.table.exchangeRate'),
      field: 'exchange_rate',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.debitForeign'),
      field: 'debitForeign',
      width: 160,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.creditForeign'),
      field: 'creditForeign',
      width: 160,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.remark'),
      field: 'remark',
      width: 300
    }, {
      headerName: this.$t('transaction.table.company'),
      field: 'company',
      width: 150
    }, {
      headerName: this.$t('transaction.table.docNumber'),
      field: 'document_number',
      width: 140
    }, {
      headerName: this.$t('transaction.table.type'),
      field: 'type',
      width: 90
    }, {
      headerName: this.$t('transaction.table.remark'),
      field: 'remark',
      width: 150
    }, {
      headerName: this.$t('transaction.table.documentNumber'),
      field: 'document_number',
      width: 150
    }, {
      headerName: this.$t('transaction.table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('transaction.table.void'),
      field: 'void',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checkListRenderer',
      pinnedRowCellRenderer: 'statusBarTotal',
      pinnedRowCellRendererParams: {
        style: {
          display: 'none'
        }
      }
    }, {
      headerName: this.$t('transaction.table.correction'),
      field: 'is_correction',
      width: 90,
      cellStyle: {
        textAlign: 'center'
      },
      cellRenderer: 'checkListRenderer',
      pinnedRowCellRenderer: 'statusBarTotal',
      pinnedRowCellRendererParams: {
        style: {
          display: 'none'
        }
      }
    }, {
      headerName: this.$t('transaction.table.refNumber'),
      field: 'ref_number',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.insertBy'),
      field: 'insert_by',
      width: 150
    }, {
      headerName: this.$t('transaction.table.voidDate'),
      field: 'void_date',
      width: 150,
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatDateTime"],
      pinnedRowCellRenderer: 'statusBarTotal'
    }, {
      headerName: this.$t('transaction.table.voidBy'),
      field: 'void_by',
      width: 150
    }, {
      headerName: this.$t('transaction.table.voidReason'),
      field: 'void_reason',
      width: 200
    }, {
      headerName: this.$t('transaction.table.insertBy'),
      field: 'insert_by',
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
      actionGrid: _views_pages_components_ag_grid_framework_action_grid_transaction__WEBPACK_IMPORTED_MODULE_2__["default"],
      checkListRenderer: _views_pages_components_ag_grid_framework_checklist__WEBPACK_IMPORTED_MODULE_8__["default"],
      statusBarTotal: _views_pages_components_ag_grid_framework_statusbar_total__WEBPACK_IMPORTED_MODULE_9__["default"]
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
    this.checkFolioNumber();
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
        name: this.$t('common.contextMenu.charge'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('charge_icon24'),
        disabled: !this.userAccess.charge,
        action: function action() {
          return _this.showForm(null, _this.global.groupAccount.charge, _this.$t('transaction.title.charge'));
        }
      }, {
        name: this.$t('common.contextMenu.package'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('package_icon24'),
        disabled: !this.userAccess.charge,
        action: function action() {
          return _this.handleShowPackage();
        }
      }, {
        name: this.$t('common.contextMenu.apTransaction'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('ap_transaction_icon24'),
        disabled: !this.userAccess.charge,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.accountPayable], _this.global.groupAccount.charge, _this.$t('transaction.title.apTransaction'));
        }
      }, {
        name: this.$t('common.contextMenu.autoPostRoomCharge'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('autopost_icon24'),
        disabled: !this.userAccess.charge,
        action: function action() {
          return _this.handlePostingRoomCharge();
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.cashPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('cash_icon24'),
        disabled: !this.userAccess.cash,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.cashPayment], _this.global.groupAccount.payment, _this.$t('transaction.title.cashPayment'));
        }
      }, {
        name: this.$t('common.contextMenu.cashRefund'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('cash_refund_icon24'),
        disabled: !this.userAccess.cashRefund,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.cashPayment], _this.global.groupAccount.payment, _this.$t('transaction.title.cashRefund'), true);
        }
      }, {
        name: this.$t('common.contextMenu.creditOrDebitCardPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('card_icon24'),
        disabled: !this.userAccess.card,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.creditOrDebitCard], _this.global.groupAccount.payment, _this.$t('transaction.title.creditOrDebitCardPayment'));
        }
      }, {
        name: this.$t('common.contextMenu.directBillPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('direct_bill_icon24'),
        disabled: !this.userAccess.directBill,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.accountReceiveable], _this.global.groupAccount.payment, _this.$t('transaction.title.directBillPayment'));
        }
      }, {
        name: this.$t('common.contextMenu.otherPayment'),
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('other_payment_icon24'),
        disabled: !this.userAccess.otherPayment,
        action: function action() {
          return _this.showForm([_this.global.subGroupAccount.otherPayment, _this.global.subGroupAccount.bankTransfer], _this.global.groupAccount.payment, _this.$t('transaction.title.otherPayment'));
        }
      }, {
        name: this.$t('common.contextMenu.printReceipt'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintReceipt(_this.paramsData);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.move'),
        disabled: !this.paramsData,
        subMenu: [{
          name: "".concat(this.$t('common.contextMenu.subFolio'), " A"),
          action: function action() {
            return _this.handleMoveSubFolioGroup('A');
          }
        }, {
          name: "".concat(this.$t('common.contextMenu.subFolio'), " B"),
          action: function action() {
            return _this.handleMoveSubFolioGroup('B');
          }
        }, {
          name: "".concat(this.$t('common.contextMenu.subFolio'), " C"),
          action: function action() {
            return _this.handleMoveSubFolioGroup('C');
          }
        }, {
          name: "".concat(this.$t('common.contextMenu.subFolio'), " D"),
          action: function action() {
            return _this.handleMoveSubFolioGroup('D');
          }
        }]
      }, 'separator', {
        name: this.$t('common.contextMenu.void'),
        disabled: !this.paramsData || !this.userAccess["void"],
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('delete_icon24'),
        action: function action() {
          return _this.handleCorrectionVoid(_this.paramsData, false, false);
        }
      }, {
        name: this.$t('common.contextMenu.correction'),
        disabled: !this.paramsData || !this.userAccess.correction,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('correction_icon24'),
        action: function action() {
          return _this.handleCorrectionVoid(_this.paramsData, true, false);
        }
      }, {
        name: this.$t('common.contextMenu.advancedCorrection'),
        disabled: !this.paramsData || !this.userAccess.correction,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('correction_icon24'),
        action: function action() {
          return _this.handleCorrectionVoid(_this.paramsData, true, true);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.properties'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('properties_icon24'),
        action: function action() {
          return _this.handleShowProperties(_this.paramsData.id_log);
        }
      }, {
        name: this.$t('common.contextMenu.updateDirectBillOrCompany'),
        disabled: !this.paramsData || this.paramsData.sub_group_code !== this.global.subGroupAccount.accountReceiveable || !this.userAccess.updateDirectBill,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 4);
        }
      }, {
        name: this.$t('common.contextMenu.updateSubDepartment'),
        disabled: !this.paramsData || !this.userAccess.updateSubDepartment,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 1);
        }
      }, {
        name: this.$t('common.contextMenu.updateRemark'),
        disabled: !this.paramsData || !this.userAccess.updateRemark,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 2);
        }
      }, {
        name: this.$t('common.contextMenu.updateDocumentNumber'),
        disabled: !this.paramsData || !this.userAccess.updateDocumentNumber,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 3);
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.transfer'),
        disabled: !this.userAccess.transfer,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('transfer_icon24'),
        action: function action() {
          return _this.handleTransfer();
        }
      }, 'separator', {
        name: this.$t('common.contextMenu.checkOut'),
        disabled: !this.userAccess.checkOut,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('check_out_icon24'),
        action: function action() {
          return _this.handleCheckOut();
        }
      }, {
        name: this.$t('common.contextMenu.printFolio'),
        disabled: !this.userAccess.printFolio,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('print_icon24'),
        action: function action() {
          return _this.handlePrintFolio();
        }
      }, {
        name: this.$t('common.contextMenu.trackingData'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["generateIconContextMenuAgGrid"])('tracking_icon24'),
        action: function action() {
          return _this.showForm('', '', 'Tracking Data ID: ', '', _this.global.modeData.tracking);
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
    checkFolioNumber: function checkFolioNumber() {
      if (this.stayInformations == undefined) {
        this.$router.go(-1);
      } else {
        this.getTransactionList();
        this.getFolioTypeStatusByNumber();
      }
    },
    // ------------------need setting manual for crud-----------------//
    getFolioTypeStatusByNumber: function getFolioTypeStatusByNumber() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var params, _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  folio_number: _this2.stayInformations.number
                };
                _context.next = 3;
                return transactionResource.getFolioType(params);

              case 3:
                _yield$transactionRes = _context.sent;
                data = _yield$transactionRes.data;
                _this2.nFolioType = data.type;
                _this2.isFolioOpen = data.status;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getTransactionList: function getTransactionList() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var selectedNodes, _yield$transactionRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.search.folio_number = _this3.stayInformations.number;
                _context2.prev = 1;
                selectedNodes = _this3.gridApi != null ? _this3.gridApi.getSelectedRows() : [];
                selectedNodes = selectedNodes.length > 0 ? selectedNodes[0] : {};
                _context2.next = 6;
                return transactionResource.list(_this3.search);

              case 6:
                _yield$transactionRes2 = _context2.sent;
                data = _yield$transactionRes2.data;
                _this3.listTransaction = data.data;
                _this3.balanceData = data.footer;

                _this3.$nextTick(function () {
                  Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_16__["rowSelectedAfterRefresh"])(_this3, selectedNodes, 'id_log');
                });

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);

                _this3.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 14]]);
      }))();
    },
    getBalance: function getBalance() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$transactionRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.$loadingIndicator(_this4);

                _context3.next = 4;
                return transactionResource.balance({
                  q: _this4.stayInformations.number
                });

              case 4:
                _yield$transactionRes3 = _context3.sent;
                data = _yield$transactionRes3.data;
                _this4.balanceAmount = data.balance;
                _this4.balanceData = data;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    showForm: function showForm(subGroupAccount, groupAccount, title, refund, modeData) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.modeDataValue = modeData;

                if (!(subGroupAccount == _this5.global.subGroupAccount.cashPayment && _this5.userAccess.cash || subGroupAccount == _this5.global.subGroupAccount.creditOrDebitCard && _this5.userAccess.card || subGroupAccount == _this5.global.subGroupAccount.accountReceiveable && _this5.userAccess.directBill || subGroupAccount == _this5.global.subGroupAccount.otherPayment && _this5.userAccess.otherPayment || subGroupAccount == null && _this5.userAccess.charge || subGroupAccount == _this5.global.subGroupAccount.accountPayable && _this5.userAccess.charge)) {
                  _context4.next = 26;
                  break;
                }

                _this5.$loadingIndicator(_this5);

                _this5.btnPaymentOptionDisabled = true;

                _this5.resetTransaction(subGroupAccount);

                _this5.reqDocNumber = groupAccount == _this5.global.groupAccount.payment ? subGroupAccount == _this5.global.subGroupAccount.accountReceiveable || subGroupAccount == _this5.global.subGroupAccount.accountPayable ? '' : 'required' : '';
                _this5.reqDirectBill = subGroupAccount == _this5.global.subGroupAccount.accountReceiveable || subGroupAccount == _this5.global.subGroupAccount.accountPayable ? 'required' : '';
                _this5.reqCard = subGroupAccount == _this5.global.subGroupAccount.creditOrDebitCard ? 'required' : '';
                _this5.titleInputForm = title;
                _this5.isRefund = refund;
                _this5.groupAccount = groupAccount;
                _this5.subGroupAccount = subGroupAccount;

                _this5.getAccount(subGroupAccount, groupAccount);

                _this5.getExchangeRate();

                _context4.next = 16;
                return _this5.getLookup();

              case 16:
                _this5.showPaymentOption = false;

                if (!(groupAccount === _this5.global.groupAccount.payment)) {
                  _context4.next = 22;
                  break;
                }

                _context4.next = 20;
                return _this5.getBalance();

              case 20:
                if (refund === true) {
                  _this5.vTransaction.remark = 'Refund';
                  _this5.vTransaction.isRefund = refund;

                  if (_this5.balanceAmount < 0) {
                    _this5.vTransaction.amount_foreign = -_this5.balanceAmount;
                  }
                } else if (_this5.balanceAmount > 0) {
                  _this5.vTransaction.amount_foreign = _this5.balanceAmount;
                }

                _this5.getTotalAmount();

              case 22:
                _this5.$vs.loading.close('#layout--main>.con-vs-loading');

                _this5.showInputForm = true;
                _context4.next = 27;
                break;

              case 26:
                if (modeData == _this5.global.modeData.tracking) {
                  _this5.titleInputForm = title + _this5.paramsData.id_log;

                  _this5.trackingData(_this5.paramsData);
                }

              case 27:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    searchData: function searchData(params) {
      this.search = params;
      this.$loadingIndicator(this);
      this.getTransactionList();
    },
    handleCorrectionVoid: function handleCorrectionVoid(paramsData, isCorrection, isAdvancedCorrection) {
      this.isAdvancedCorrection = false;

      if (isCorrection && this.userAccess.correction || !isCorrection && this.userAccess["void"]) {
        var transactionDate = paramsData.audit_date;

        if (isCorrection && transactionDate != this.auditDate) {
          this.isAdvancedCorrection = isAdvancedCorrection;

          if (paramsData.account_code == this.transferDepositReservationToFolio) {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.cannotProcessTypeTransactionFromFolio'));
            return;
          }

          this.showCredential(paramsData, isCorrection);
        } else if (!isCorrection && transactionDate == this.auditDate) {
          if (paramsData.account_code == this.transferDepositReservationToFolio) {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.cannotProcessTypeTransactionFromFolio'));
            return;
          }

          this.showCredential(paramsData, isCorrection);
        } else {
          this.cannotCorrectionVoidDialog(isCorrection);
        }
      }
    },
    cannotCorrectionVoidDialog: function cannotCorrectionVoidDialog(isCorrection) {
      var message = isCorrection ? this.$t('transaction.popup.cannotCorrection') : this.$t('transaction.popup.cannotVoid');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: message,
        acceptText: this.$t('button.close')
      });
    },
    correctionVoid: function correctionVoid() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var data, amount;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!_this6.isAdvancedCorrection) {
                  _context5.next = 4;
                  break;
                }

                _this6.handleShowAdvancedCorrection();

                _context5.next = 18;
                break;

              case 4:
                data = {
                  folioNumber: _this6.stayInformations.number,
                  isShowCorrection: _this6.$refs.filterHeader.vCorrection,
                  userId: _this6.global.userInfo.code,
                  userBy: _this6.credential.user,
                  reason: _this6.credential.reason,
                  idLog: _this6.idLog
                };

                if (!_this6.isCorrection) {
                  _context5.next = 15;
                  break;
                }

                _context5.next = 8;
                return _this6.getAmountBefore(_this6.idLog);

              case 8:
                amount = _context5.sent;

                if (amount < 0) {
                  amount = -amount;
                }

                _this6.oldCorrectionValue = amount;
                _this6.newCorrectionValue = amount;
                _this6.correctionPrompt = true;
                _context5.next = 18;
                break;

              case 15:
                _context5.next = 17;
                return transactionResource["void"](data);

              case 17:
                _this6.getTransactionList();

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    // Advanced Correction
    handleShowAdvancedCorrection: function handleShowAdvancedCorrection() {
      this.$refs.advancedCorrection.handleShowAdvancedCorrection(this.paramsData.id_log);
    },
    getAmountBefore: function getAmountBefore(id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$transactionRes4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return transactionResource.amountBefore({
                  idLog: id
                });

              case 2:
                _yield$transactionRes4 = _context6.sent;
                data = _yield$transactionRes4.data;
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    correctionData: function correctionData() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                data = {
                  userId: _this7.global.userInfo.code,
                  userBy: _this7.credential.user,
                  reason: _this7.credential.reason,
                  amount: _this7.newCorrectionValue,
                  idLog: _this7.paramsData.id_log
                };
                _context7.next = 3;
                return transactionResource.correction(data);

              case 3:
                _this7.getTransactionList();

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    handleBackButton: function handleBackButton() {
      this.$loadingIndicator(this);
      this.$router.go(-1);
    },
    // -------------- CRUD TRANSFER-----------------//
    handleTransfer: function handleTransfer() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!_this8.userAccess.transfer) {
                  _context8.next = 23;
                  break;
                }

                _this8.$loadingIndicator(_this8);

                _this8.resetTransfer();

                _context8.next = 5;
                return _this8.getTransferTransactionList();

              case 5:
                _this8.showTransferForm = true;

                _this8.getRoutingList();

                _this8.getFolioList();

                _this8.getReturnTransferList();

                _this8.getFolioType();

                _this8.groupAccount = _this8.global.groupAccount.charge;

                _this8.getAccount();

                _this8.tfType = '';
                _this8.tfAccount = '';
                _this8.tfFolioType = '';
                _this8.tfBalance = '';
                _this8.activeTab = 1;

                _this8.$nextTick(function () {
                  var eleTransfer = document.getElementById('transfer');
                  if (eleTransfer) eleTransfer.click();
                });

                _this8.tfType = 'account';
                _this8.tfAccount = 'subFolio';
                _this8.tfFolioType = '';
                _this8.tfBalance = !(_this8.balanceData.debit > 0) ? 'deposit' : 'charge';

                _this8.handleChangeRadioChargeDeposit();

              case 23:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getTransferTransactionList: function getTransferTransactionList() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _yield$transactionRes5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return transactionResource.list({
                  folio_number: _this9.stayInformations.number
                });

              case 3:
                _yield$transactionRes5 = _context9.sent;
                data = _yield$transactionRes5.data;
                _this9.listTransferTransaction = data.data;

                _this9.$vs.loading.close('#layout--main>.con-vs-loading');

                _context9.next = 13;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);

                _this9.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 9]]);
      }))();
    },
    resetTransfer: function resetTransfer() {
      var _this10 = this;

      this.vTransfer = {
        folio_number_from: this.stayInformations.number,
        option: 1,
        room_number: this.stayInformations.room_number,
        folio_number_to: null,
        amount: 0,
        user_id: this.global.userInfo.code
      };
      this.vRouting = {
        folio_number: this.stayInformations.number,
        folio_transfer: null,
        sub_folio: 'A',
        selected: [],
        user_id: this.global.userInfo.code
      };
      this.vReturn = {
        folio_number: this.stayInformations.number,
        sub_folio: 'A',
        type: '1',
        selected: [],
        user_id: this.global.userInfo.code
      };
      this.selectedAccount = null;
      this.search.subFolio = 'All';
      this.reqTransfer = 'required';
      this.$validator.pause();
      this.$nextTick(function () {
        _this10.$validator.errors.clear();

        _this10.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this10.$validator.fields.items.forEach(function (field) {
          return _this10.errors.remove(field);
        });

        _this10.$validator.resume();
      });
    },
    handleChangeRadioChargeDeposit: function handleChangeRadioChargeDeposit() {
      if (this.tfBalance == 'charge') {
        var bal = this.balanceData.debit - this.balanceData.credit;
        this.vTransfer.amount = bal > 0 ? this.balanceData.balance : 0;
      } else {
        var _bal = this.balanceData.credit - this.balanceData.debit;

        this.vTransfer.amount = _bal > 0 ? -this.balanceData.balance : 0;
      }
    },
    handleProcessTransfer: function handleProcessTransfer() {
      var _this11 = this;

      this.$validator.validateAll('transfer').then(function (result) {
        if (result) {
          if (_this11.vTransfer.option == _this11.global.transfer.transferSelected && _this11.selectedAccount == 0 && _this11.tfType == 'account') {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this11.$t('message.selectTransaction'));
          } else if (_this11.tfType == 'account') {
            _this11.transferTransaction();
          } else if (_this11.tfType == 'balance') {
            _this11.transferBalance();
          }
        }
      });
    },
    handleInsertRouting: function handleInsertRouting() {
      var _this12 = this;

      this.$validator.validateAll('routing').then(function (result) {
        if (result) {
          _this12.$vs.loading({
            container: '#btn-add-routing',
            scale: _this12.global.scaleLoadingButton
          });

          _this12.insertRouting();
        }
      });
    },
    handleRemoveRouting: function handleRemoveRouting(status) {
      this.vRouting.remove = status;

      if (status == 2 && this.vRouting.selected <= 0) {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(this.$t('message.selectAccount'));
      } else {
        this.removeRouting();
      }
    },
    handleReturnTransfer: function handleReturnTransfer() {
      var _this13 = this;

      this.$validator.validateAll('return').then(function (result) {
        if (result) {
          if (_this13.vReturn.selected <= 0) {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this13.$t('message.selectFolio'));
          } else {
            _this13.$vs.loading({
              container: '#btn-return',
              scale: _this13.global.scaleLoadingButton
            });

            _this13.returnTransfer();
          }
        }
      });
    },
    getRoutingList: function getRoutingList() {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var _yield$transactionRes6, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return transactionResource.listRouting({
                  folio_number: _this14.stayInformations.number
                });

              case 2:
                _yield$transactionRes6 = _context10.sent;
                data = _yield$transactionRes6.data;
                _this14.listRouting = data;

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getReturnTransferList: function getReturnTransferList() {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var _yield$transactionRes7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return transactionResource.listReturnTransfer({
                  q: _this15.stayInformations.number
                });

              case 2:
                _yield$transactionRes7 = _context11.sent;
                data = _yield$transactionRes7.data;
                _this15.listReturnTransfer = data;

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    getFolioType: function getFolioType() {
      var _this16 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var _yield$transactionRes8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return transactionResource.folioType();

              case 2:
                _yield$transactionRes8 = _context12.sent;
                data = _yield$transactionRes8.data;
                _this16.folioType = data;

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    getFolioList: function getFolioList() {
      var _this17 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var params, _yield$transactionRes9, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                params = {
                  type: _this17.tfFolioType
                };
                _context13.next = 3;
                return transactionResource.listFolio(params);

              case 3:
                _yield$transactionRes9 = _context13.sent;
                data = _yield$transactionRes9.data;
                _this17.listFolio = data;

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    transferTransaction: function transferTransaction() {
      var _this18 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _this18.vTransfer.selected_account = _this18.selectedAccount;

                _this18.$vs.loading({
                  container: '#btn-transfer',
                  scale: _this18.global.scaleLoadingButton
                });

                _context14.prev = 2;
                _context14.next = 5;
                return transactionResource.transferTransaction(_this18.vTransfer);

              case 5:
                _this18.$vs.loading.close('#btn-transfer>.con-vs-loading');

                _this18.showTransferForm = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                _context14.next = 14;
                break;

              case 10:
                _context14.prev = 10;
                _context14.t0 = _context14["catch"](2);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

                _this18.$vs.loading.close('#btn-transfer>.con-vs-loading');

              case 14:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[2, 10]]);
      }))();
    },
    transferBalance: function transferBalance() {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var _yield$transactionRes10, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _this19.vTransfer.selected_account = _this19.selectedAccount;
                _this19.vTransfer.balance_type = _this19.tfBalance;

                _this19.$vs.loading({
                  container: '#btn-transfer',
                  scale: _this19.global.scaleLoadingButton
                });

                _context15.prev = 3;
                _this19.btnSaveTransfer1 = true;
                _context15.next = 7;
                return transactionResource.transferBalance(_this19.vTransfer);

              case 7:
                _yield$transactionRes10 = _context15.sent;
                data = _yield$transactionRes10.data;

                if (data == 0) {
                  _this19.$vs.loading.close('#btn-transfer>.con-vs-loading');

                  _this19.showTransferForm = false;
                  _this19.btnSaveTransfer1 = false;
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _this19.btnSaveTransfer1 = false;

                  _this19.$vs.loading.close('#btn-transfer>.con-vs-loading');

                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this19.$t("responseStatus.transferBalance.".concat(data)));
                }

                _context15.next = 16;
                break;

              case 12:
                _context15.prev = 12;
                _context15.t0 = _context15["catch"](3);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

                _this19.$vs.loading.close('#btn-transfer>.con-vs-loading');

              case 16:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[3, 12]]);
      }))();
    },
    insertRouting: function insertRouting() {
      var _this20 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var _yield$transactionRes11, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return transactionResource.routing(_this20.vRouting);

              case 3:
                _yield$transactionRes11 = _context16.sent;
                data = _yield$transactionRes11.data;

                if (data.status == 'success') {
                  _this20.getRoutingList();

                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert(data.status);
                }

                _this20.$vs.loading.close('#btn-add-routing>.con-vs-loading');

                _context16.next = 13;
                break;

              case 9:
                _context16.prev = 9;
                _context16.t0 = _context16["catch"](0);

                _this20.$vs.loading.close('#btn-add-routing>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[0, 9]]);
      }))();
    },
    removeRouting: function removeRouting() {
      var _this21 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _this21.btnSaveTransfer1 = true;
                _this21.btnSaveTransfer2 = true;
                _context17.next = 5;
                return transactionResource.removeRouting(_this21.vRouting);

              case 5:
                _this21.getRoutingList();

                _this21.btnSaveTransfer1 = false;
                _this21.btnSaveTransfer2 = false;
                _this21.showTransferForm = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].deleteAlertSuccess();

                _this21.$vs.loading.close('#btn-add-routing>.con-vs-loading');

                _context17.next = 17;
                break;

              case 13:
                _context17.prev = 13;
                _context17.t0 = _context17["catch"](0);

                _this21.$vs.loading.close('#btn-add-routing>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorDeleteDataAlert();

              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[0, 13]]);
      }))();
    },
    returnTransfer: function returnTransfer() {
      var _this22 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _this22.btnSaveTransfer1 = true;
                _context18.next = 4;
                return transactionResource.returnTransfer(_this22.vReturn);

              case 4:
                _this22.showTransferForm = false;
                _this22.btnSaveTransfer1 = false;
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();

                _this22.$vs.loading.close('#btn-return>.con-vs-loading');

                _context18.next = 14;
                break;

              case 10:
                _context18.prev = 10;
                _context18.t0 = _context18["catch"](0);

                _this22.$vs.loading.close('#btn-return>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorDeleteDataAlert();

              case 14:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[0, 10]]);
      }))();
    },
    // -------------------- CRUD FOR DEPOSIT/CHARGE---------------------------//
    getAccount: function getAccount(subGroupAccount, groupAccount) {
      var _this23 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var params, _yield$transactionRes12, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                params = {
                  group: _this23.groupAccount,
                  sub_group: _this23.subGroupAccount,
                  sub_department_code: _this23.vTransaction.sub_department_code,
                  currency_code: _this23.vTransaction.currency_code
                };
                _context19.prev = 1;
                _context19.next = 4;
                return transactionResource.account(params);

              case 4:
                _yield$transactionRes12 = _context19.sent;
                data = _yield$transactionRes12.data;
                _this23.accounts = data;
                setTimeout(function () {
                  _this23.account = subGroupAccount === _this23.global.subGroupAccount.cashPayment ? _this23.accounts[0] : _this23.account;
                }, 100);
                _context19.next = 13;
                break;

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[1, 10]]);
      }))();
    },
    getExchangeRate: function getExchangeRate() {
      var _this24 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var params, _yield$transactionRes13, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                params = {
                  code: _this24.vTransaction.currency_code
                };
                _context20.prev = 1;
                _context20.next = 4;
                return transactionResource.exchangeRate(params);

              case 4:
                _yield$transactionRes13 = _context20.sent;
                data = _yield$transactionRes13.data;
                _this24.resetOptionsChange = true;
                _this24.vTransaction.exchange_rate = data;
                _this24.vTransaction.amount = _this24.vTransaction.amount_foreign * _this24.vTransaction.exchange_rate;
                _context20.next = 14;
                break;

              case 11:
                _context20.prev = 11;
                _context20.t0 = _context20["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[1, 11]]);
      }))();
    },
    getLookup: function getLookup() {
      var _this25 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var _yield$transactionRes14, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.prev = 0;
                _context21.next = 3;
                return transactionResource.lookup();

              case 3:
                _yield$transactionRes14 = _context21.sent;
                data = _yield$transactionRes14.data;
                _this25.dataLookup = data;

                _this25.$vs.loading.close('.popup-body>.con-vs-loading');

                _context21.next = 13;
                break;

              case 9:
                _context21.prev = 9;
                _context21.t0 = _context21["catch"](0);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

                _this25.$vs.loading.close('#layout--main>.con-vs-loading');

              case 13:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, null, [[0, 9]]);
      }))();
    },
    trackingDeposit: function trackingDeposit(val) {
      var _this26 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var _yield$transactionRes15, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.prev = 0;
                _context22.next = 3;
                return transactionResource.list(val.id_log);

              case 3:
                _yield$transactionRes15 = _context22.sent;
                data = _yield$transactionRes15.data;
                _this26.dataTracking = data.modelGrid;
                _this26.showInputForm = true;

                _this26.$vs.loading.close('.popup-body>.con-vs-loading');

                _context22.next = 14;
                break;

              case 10:
                _context22.prev = 10;
                _context22.t0 = _context22["catch"](0);

                _this26.$vs.loading.close('.popup-body>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 14:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[0, 10]]);
      }))();
    },
    insertPayment: function insertPayment() {
      var _this27 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var _yield$transactionRes16, data, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _this27.vTransaction.form = _this27.form;
                _context23.prev = 1;
                _context23.next = 4;
                return transactionResource.payment(_this27.vTransaction);

              case 4:
                _yield$transactionRes16 = _context23.sent;
                data = _yield$transactionRes16.data;

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0 && _this27.form == _this27.global.formType.guestInHouse) {
                  _this27.statusDialog(_this27.$t("responseStatus.insertGuestInHouseTransaction.".concat(data)));
                } else if (data > 0 && _this27.form == _this27.global.formType.folioHistory) {
                  _this27.statusDialog(_this27.$t("responseStatus.insertFolioHistoryTransaction.".concat(data)));
                }

                _this27.btnSaveDisabled = false;
                _this27.showInputForm = false;

                _this27.$vs.loading.close('#layout--main>.con-vs-loading');

                _context23.next = 18;
                break;

              case 12:
                _context23.prev = 12;
                _context23.t0 = _context23["catch"](1);
                message = _context23.t0.response.data.errors;
                _this27.dbErrors = message == undefined ? '' : message;

                _this27.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert(message);

              case 18:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[1, 12]]);
      }))();
    },
    insertCharge: function insertCharge() {
      var _this28 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _yield$transactionRes17, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.prev = 0;
                _this28.vTransaction.form = _this28.form;
                _context24.next = 4;
                return transactionResource.charge(_this28.vTransaction);

              case 4:
                _yield$transactionRes17 = _context24.sent;
                data = _yield$transactionRes17.data;

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0 && _this28.form == _this28.global.formType.guestInHouse) {
                  _this28.statusDialog(_this28.$t("responseStatus.insertGuestInHouseTransaction.".concat(data)));
                } else if (data > 0 && _this28.form == _this28.global.formType.folioHistory) {
                  _this28.statusDialog(_this28.$t("responseStatus.insertFolioHistoryTransaction.".concat(data)));
                }

                _this28.btnSaveDisabled = false;
                _this28.showInputForm = false;

                _this28.$vs.loading.close('#layout--main>.con-vs-loading');

                _context24.next = 16;
                break;

              case 12:
                _context24.prev = 12;
                _context24.t0 = _context24["catch"](0);

                _this28.$vs.loading.close('#layout--main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

              case 16:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, null, [[0, 12]]);
      }))();
    },
    statusDialog: function statusDialog(text) {
      var _this29 = this;

      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: 'OK',
        accept: function accept() {
          return _this29.$router.go(-1);
        }
      });
    },
    resetTransaction: function resetTransaction(subGroupAccount) {
      var _this30 = this;

      this.vTransaction = {
        folio_number: this.stayInformations.number,
        room_number: this.stayInformations.room_number,
        currency_code: this.defaultCurrency,
        default_currency_code: this.defaultCurrency,
        exchange_rate: 1,
        sub_department_code: this.sdFrontOffice,
        amount_foreign: 0,
        amount: 0,
        charge_percent: 0,
        charge_amount: 0,
        total_amount: 0,
        sub_folio: 'A',
        audit_date: this.auditDate,
        user_id: this.global.userInfo.code
      };
      this.btnSaveDisabled = false;
      this.resetOptionsChange = false;
      this.account = subGroupAccount == this.global.subGroupAccount.cashPayment ? {
        code: '200',
        charge_percent: null,
        name: '200 - Cash'
      } : '';
      this.vDirectBill = null;
      this.isRefund = false;
      this.$validator.pause();
      this.$nextTick(function () {
        _this30.$validator.errors.clear();

        _this30.$validator.fields.items.forEach(function (field) {
          return field.reset();
        });

        _this30.$validator.fields.items.forEach(function (field) {
          return _this30.errors.remove(field);
        });

        _this30.$validator.resume();
      });
      this.dbErrors = {};
    },
    getTotalAmount: function getTotalAmount() {
      var chargePercent = this.vTransaction.charge_percent >= 0 ? this.vTransaction.charge_percent : 0;
      this.vTransaction.amount = this.vTransaction.amount_foreign * this.vTransaction.exchange_rate;
      this.vTransaction.charge_amount = this.vTransaction.amount_foreign * chargePercent / 100;
      this.vTransaction.total_amount = this.vTransaction.charge_amount + this.vTransaction.amount_foreign;
    },
    handleSaveForm1: function handleSaveForm1() {
      var _this31 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _this31.$validator.validateAll(_this31.form1).then(function (result) {
                  if (result) {
                    if (_this31.isRefund === true && _this31.vTransaction.amount_foreign > _this31.balance) {
                      _this31.$vs.dialog({
                        color: 'danger',
                        title: _this31.$t('message.errorTitle'),
                        text: "".concat(_this31.$t('message.maxRefund'), " ").concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_18__["formatNumberValue"])(_this31.balance)),
                        accept: function accept() {
                          _this31.vTransaction.amount_foreign = _this31.balance;

                          _this31.getTotalAmount();
                        }
                      });

                      return;
                    }

                    _this31.btnSaveDisabled = true;

                    _this31.$loadingIndicator(_this31);

                    if (_this31.groupAccount === _this31.global.groupAccount.payment) {
                      _this31.insertPayment();
                    } else if (_this31.groupAccount === _this31.global.groupAccount.charge) {
                      _this31.insertCharge();
                    }
                  } else {
                    _this31.showInputForm = true;
                  }
                });

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }))();
    },
    handlePostingRoomCharge: function handlePostingRoomCharge() {
      if (this.userAccess.charge) {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].confirmation(this, 'autoPostingRoomCharge');
      }
    },
    autoPostingRoomCharge: function autoPostingRoomCharge() {
      var _this32 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var params, _yield$guestInHouseRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                params = {
                  folio_number: _this32.stayInformations.number,
                  user_id: _this32.global.userInfo.code
                };
                _context26.prev = 1;

                _this32.$loadingIndicator(_this32);

                _context26.next = 5;
                return guestInHouseResource.autoRoomCharge(params);

              case 5:
                _yield$guestInHouseRe = _context26.sent;
                data = _yield$guestInHouseRe.data;

                if (data >= 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this32.$t("responseStatus.postingRoomCharge.".concat(data)));
                }

                _this32.$vs.loading.close('#layout--main>.con-vs-loading');

                _this32.getTransactionList();

                _context26.next = 16;
                break;

              case 12:
                _context26.prev = 12;
                _context26.t0 = _context26["catch"](1);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

                _this32.$vs.loading.close('#layout--main>.con-vs-loading');

              case 16:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, null, [[1, 12]]);
      }))();
    },
    // ---------------------END CRUD DEPOSIT/CHARGE---------------------------//
    handleUpdateType: function handleUpdateType(params, type) {
      if (type == 1 && this.userAccess.updateSubDepartment || type == 2 && this.userAccess.updateRemark || type == 3 && this.userAccess.updateDocumentNumber || type == 4 && this.userAccess.updateDirectBill) {
        this.isShowProperties = false;
        this.$refs.updateType.handleUpdateType(params, type);
      }
    },
    handleShowProperties: function handleShowProperties(idLog) {
      this.$refs.properties.handleShowProperties(idLog);
    },
    handleSidebarOption: function handleSidebarOption(data) {
      this.idLog = data.id_log;
      this.paramsData = data;
      this.sidebarOption = true;
    },
    handleCheckOut: function handleCheckOut() {
      var _this33 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!_this33.userAccess.checkOut) {
                  _context27.next = 5;
                  break;
                }

                _context27.next = 3;
                return _this33.getBalance();

              case 3:
                balance = _this33.balanceAmount;

                if (balance == 'null' || balance == null) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].confirmationW8Text(_this33.$t('message.checkOutWithoutTransaction'), _this33, 'checkOut');
                } else if (balance < 0 || balance > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this33.$t('message.cannotCheckFolioUnbalance'));
                } else if (balance == 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].confirmation(_this33, 'checkOut');
                }

              case 5:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }))();
    },
    checkOut: function checkOut() {
      var _this34 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var params, _yield$guestInHouseRe2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                params = {
                  number: _this34.stayInformations.number,
                  user_id: _this34.global.userInfo.code
                };

                _this34.$loadingIndicator(_this34);

                _context28.next = 4;
                return guestInHouseResource.checkOut(params);

              case 4:
                _yield$guestInHouseRe2 = _context28.sent;
                data = _yield$guestInHouseRe2.data;

                if (data.value === 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSuccesWithText(_this34.$t('responseStatus.checkOut.0'));

                  _this34.$router.go(-1);
                } else if (data.value > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information("".concat(_this34.$t("responseStatus.checkOut.".concat(data.value)), "\n").concat(data.message));
                }

                _this34.$vs.loading.close('#layout--main>.con-vs-loading');

              case 8:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28);
      }))();
    },
    handleMoveSubFolioGroup: function handleMoveSubFolioGroup(groupCode) {
      var _this35 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var params, _yield$transactionRes18, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                params = {
                  folio_number: _this35.stayInformations.number,
                  correction_breakdown: _this35.paramsData.correction_breakdown,
                  group_code: groupCode,
                  user_id: _this35.global.userInfo.code
                };

                _this35.$loadingIndicator(_this35);

                _context29.next = 4;
                return transactionResource.moveSubFolioGroup(params);

              case 4:
                _yield$transactionRes18 = _context29.sent;
                data = _yield$transactionRes18.data;

                _this35.searchData(_this35.search);

              case 7:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }))();
    },
    // PRINT
    handlePrintFolio: function handlePrintFolio() {
      if (this.userAccess.printFolio) {
        var newTabReport = this.$router.resolve({
          path: "/report/preview?reportId=".concat(this.global.reportID.folio, "&folioNumber=").concat(this.stayInformations.number, "&template=").concat(this.global.stimulsoftReportFileDirectory.folio)
        });
        window.open(newTabReport.href, '_blank');
      }
    },
    handlePrint: function handlePrint(id, reportDirectory) {
      var newTabReport = this.$router.resolve({
        path: "/report/preview?reportId=".concat(this.global.reportID.receiptFolio, "&subFolioId=").concat(id, "&template=").concat(reportDirectory)
      });
      window.open(newTabReport.href, '_blank');
    },
    handlePrintReceipt: function handlePrintReceipt(paramsData) {
      if (paramsData !== undefined) {
        if (paramsData.isPayment == '-1') {
          this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptFolio);
        } else if (paramsData.isPayment == '0') {
          this.handlePrint(paramsData.id_log, this.global.stimulsoftReportFileDirectory.receiptFolioRefund);
        }
      }
    },
    // Package
    handleShowPackage: function handleShowPackage() {
      var _this36 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _this36.resetPackage();

                _context30.next = 3;
                return _this36.getPackageLookup();

              case 3:
                _this36.modalPackage = true;

              case 4:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30);
      }))();
    },
    handleSavePackage: function handleSavePackage() {
      var _this37 = this;

      this.$validator.validateAll('package').then(function (result) {
        if (result) {
          _this37.insertPackage();
        }
      });
    },
    insertPackage: function insertPackage() {
      var _this38 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var params, _yield$transactionRes19, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                params = {
                  room_number: _this38.stayInformations.room_number,
                  package_code: _this38.vPackage["package"].code,
                  folio_number: _this38.stayInformations.number,
                  commission_value: _this38.vPackage.commission_value,
                  commission_type_code: _this38.vPackage.commission_type_code,
                  business_source_code: _this38.vPackage.business_source_code,
                  adult: _this38.vPackage.adult,
                  child: _this38.vPackage.child,
                  sub_folio: (_this38.$refs.filterHeader.vSubFolio == 'All' ? 'A' : _this38.$refs.filterHeader.vSubFolio) || 'A',
                  user_id: _this38.global.userInfo.code
                };
                _context31.prev = 1;

                _this38.$loadingIndicator(_this38);

                _context31.next = 5;
                return transactionResource.insertPackage(params);

              case 5:
                _yield$transactionRes19 = _context31.sent;
                data = _yield$transactionRes19.data;
                _context31.next = 9;
                return _this38.searchData(_this38.search);

              case 9:
                _this38.$closeLoadingIndicator(_this38);

                _this38.modalPackage = false;

                if (data == 0) {
                  _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].acceptAlertSucces();
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this38.$t("responseStatus.insertPackage.".concat(data)));
                }

                _context31.next = 18;
                break;

              case 14:
                _context31.prev = 14;
                _context31.t0 = _context31["catch"](1);

                _this38.$closeLoadingIndicator(_this38);

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorSaveDataAlert();

              case 18:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, null, [[1, 14]]);
      }))();
    },
    handleChangePackage: function handleChangePackage() {
      if (this.vPackage["package"]) {
        this.getPackageBreakdown();

        if (this.vPackage.business_source_code) {
          this.vPackage.commission_type_code = this.vPackage["package"].commission_type_code;
          this.vPackage.commission_value = this.vPackage["package"].commission_value;
          this.vPackage.account = this.vPackage["package"].account;
        }

        this.vPackage.quantity = this.vPackage["package"].quantity;
        this.vPackage.amount = this.vPackage["package"].amount;
      } else {
        this.packageBreakdownData = [];
        this.vPackage.quantity = 0;
        this.vPackage.amount = '';
        this.vPackage.commission_type_code = '';
        this.vPackage.commission_value = '';
        this.vPackage.account = '';
      }
    },
    resetPackage: function resetPackage() {
      this.vPackage = {
        business_source_code: '',
        commission_type_code: '',
        commission_value: 0,
        account_code: '',
        quantity: 0,
        "package": '',
        adult: 1,
        child: 0,
        amount: 0,
        user_id: this.global.userInfo.code
      };
    },
    getPackageBreakdown: function getPackageBreakdown() {
      var _this39 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32() {
        var _yield$transactionRes20, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return transactionResource.packageBreakdown(_this39.vPackage["package"].code);

              case 2:
                _yield$transactionRes20 = _context32.sent;
                data = _yield$transactionRes20.data;
                _this39.packageBreakdownData = data;

              case 5:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32);
      }))();
    },
    getPackageLookup: function getPackageLookup() {
      var _this40 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33() {
        var params, _yield$transactionRes21, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                params = {
                  business_source_code: _this40.vPackage.business_source_code || ''
                };
                _context33.next = 3;
                return transactionResource.packageLookup(params);

              case 3:
                _yield$transactionRes21 = _context33.sent;
                data = _yield$transactionRes21.data;
                _this40.dlPackage = data;

              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33);
      }))();
    },
    // ------------------end need setting manual for crud-----------------//
    // --------------------CREDENTIAL----------------------------------------//
    showCredential: function showCredential(val, isCorrection) {
      this.resetCredential();
      this.paramsData = val;
      this.isCorrection = isCorrection;
      this.activeCredentialPrompt = true;
      this.isCredential = true;
      this.idLog = val.id_log;
      this.credentialTitle = isCorrection ? this.$t('transaction.title.correction') : this.$t('transaction.title.void');
      this.specialAccessType = isCorrection ? this.global.accessSpecialOrder.correctSubFolio : this.global.accessSpecialOrder.voidSubFolio;
    },
    acceptReason: function acceptReason() {
      this.correctionVoid();
    },
    resetCredential: function resetCredential() {
      this.credential = {
        user: '',
        pass: '',
        reason: ''
      };
    },
    getFolioAccess: function getFolioAccess() {
      var _this41 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34() {
        var _yield$userSettingRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return userSettingResource.getOtherAccess({
                  code: _this41.global.userInfo.code
                });

              case 2:
                _yield$userSettingRes = _context34.sent;
                data = _yield$userSettingRes.data;

                if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                  _this41.userAccess.charge = data.otherAccess[_this41.global.otherAccessOrder.chargeTransaction] == 1;
                  _this41.userAccess.cash = data.otherAccess[_this41.global.otherAccessOrder.cashTransaction] == 1;
                  _this41.userAccess.card = data.otherAccess[_this41.global.otherAccessOrder.cardTransaction] == 1;
                  _this41.userAccess.directBill = data.otherAccess[_this41.global.otherAccessOrder.directBillTransaction] == 1;
                  _this41.userAccess.updateDirectBill = data.otherAccess[_this41.global.otherAccessOrder.updateDirectBillTransaction] == 1;
                  _this41.userAccess.cashRefund = data.otherAccess[_this41.global.otherAccessOrder.cashRefundTransaction] == 1;
                  _this41.userAccess.otherPayment = data.otherAccess[_this41.global.otherAccessOrder.otherPaymentTransaction] == 1;
                  _this41.userAccess["void"] = data.otherAccess[_this41.global.otherAccessOrder.voidTransaction] == 1;
                  _this41.userAccess.correction = data.otherAccess[_this41.global.otherAccessOrder.correctionTransaction] == 1;
                  _this41.userAccess.transfer = data.otherAccess[_this41.global.otherAccessOrder.transferTransaction] == 1;
                  _this41.userAccess.updateSubDepartment = data.otherAccess[_this41.global.otherAccessOrder.updateSubDepartmentTransaction] == 1;
                  _this41.userAccess.updateRemark = data.otherAccess[_this41.global.otherAccessOrder.updateRemarkTransaction] == 1;
                  _this41.userAccess.updateDocumentNumber = data.otherAccess[_this41.global.otherAccessOrder.updateDocumentNumberTransaction] == 1;
                  _this41.userAccess.checkOut = data.otherAccess[_this41.global.otherAccessOrder.checkOut] == 1;
                  _this41.userAccess.printFolio = data.otherAccess[_this41.global.otherAccessOrder.printFolio] == 1;
                }

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34);
      }))();
    },
    trackingData: function trackingData(idData) {
      var _this42 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35() {
        var params, _yield$trackingDataRe, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                params = {
                  id_log: idData.id_log,
                  table: _this42.global.tableName.subFolio
                };
                _this42.titlePopup = "Tracking Data - ID: ".concat(params.id_log);

                _this42.$loadingIndicator(_this42);

                _context35.prev = 3;
                _context35.next = 6;
                return trackingDataResource.getData(params);

              case 6:
                _yield$trackingDataRe = _context35.sent;
                data = _yield$trackingDataRe.data;
                _this42.dataTracking = data.modelGrid;
                _this42.showInputForm = true;
                _context35.next = 15;
                break;

              case 12:
                _context35.prev = 12;
                _context35.t0 = _context35["catch"](3);
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_10__["default"].errorFetchDataAlert();

              case 15:
                _this42.$closeLoadingIndicator(_this42);

              case 16:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, null, [[3, 12]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.onPageSizeChanged(this.global.paginationDataPerPage);
    this.getFolioAccess();

    if (this.isDayendClose) {
      if (this.isCheckOut) {
        this.handleCheckOut();
      }
    }
  },
  watch: {
    showTransferForm: function showTransferForm() {
      if (this.showTransferForm == false) {
        this.searchData(this.search);
      }
    },
    showInputForm: function showInputForm() {
      var _this43 = this;

      if (this.showInputForm == false) {
        setTimeout(function () {
          _this43.searchData(_this43.search);
        }, 500);
      }
    },
    account: function account() {
      if (this.account !== null) {
        this.vTransaction.account_code = this.account.code;
        this.vTransaction.charge_percent = this.account.charge_percent;
        this.getTotalAmount();
      }
    },
    selectedAccount: function selectedAccount() {
      if (this.selectedAccount != null) {// this.vTransfer.option = this.global.transfer.transferSelected;
      }
    }
  },
  computed: {
    balance: function balance() {
      if (this.balanceData.balance < 0) {
        return -this.balanceData.balance;
      }

      return 0;
    },
    sdFrontOffice: function sdFrontOffice() {
      return this.$store.getters.sdFrontOffice;
    },
    subFolioGroup: function subFolioGroup() {
      return this.$store.state.subFolioGroup;
    },
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    ccAdm: function ccAdm() {
      return this.$store.getters.cCAdmin;
    },
    defaultCurrency: function defaultCurrency() {
      return this.$store.getters.defaultCurrency;
    },
    transferDepositReservationToFolio: function transferDepositReservationToFolio() {
      return this.$store.getters.transferDepositReservationToFolio;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    var _this44 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
        while (1) {
          switch (_context36.prev = _context36.next) {
            case 0:
              if (!(_this44.showInputForm || _this44.showPaymentOption || _this44.showTransferForm)) {
                _context36.next = 7;
                break;
              }

              _this44.showInputForm = false;
              _this44.showPaymentOption = false;
              _this44.showTransferForm = false;
              next(false);
              _context36.next = 14;
              break;

            case 7:
              if (!(_this44.form == _this44.global.formType.folioHistory)) {
                _context36.next = 13;
                break;
              }

              _context36.next = 10;
              return _this44.getBalance();

            case 10:
              if (_this44.balanceAmount > 0 || _this44.balanceAmount < 0) {
                _utils_dialog_js__WEBPACK_IMPORTED_MODULE_11__["default"].information(_this44.$t('message.cannotCloseFolioUnbalance'));
                next(false);
              } else {
                next();
              }

              _context36.next = 14;
              break;

            case 13:
              next();

            case 14:
            case "end":
              return _context36.stop();
          }
        }
      }, _callee36);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_checklist2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/checklist2 */ "./resources/js/src/views/pages/components/ag_grid-framework/checklist2.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");


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
 // <!------------------additional element---------------------->
// ------for format----- //




 // import { RichSelectModule } from 'ag-grid-enterprise/rich-select';

var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_3__["default"](); // <!------------------end additional element---------------------->

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdvancedCorrection',
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null,
      rowData: [],
      rowDataTemp: null,
      pinnedBottomRowData: null,
      vModel: {},
      vTemp: {},
      isFixedAmount: 'true',
      activeModal: false,
      btnSaveDisabled: false,
      totalAmountAfter: 0,
      totalAmountBefore: 0,
      changedData: {},
      canProsesAmount: true,
      dataHasChanged: false,
      idData: '',
      modules: {
        RichSelectModule: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["RichSelectModule"]
      }
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('transaction.table.subDepartment'),
      field: 'sub_department',
      width: 150,
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.account'),
      field: 'account',
      width: 180,
      cellStyle: {
        textAlign: 'right'
      },
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.amountBefore'),
      field: 'amount_before',
      width: 165,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatNumber"],
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.amount'),
      field: 'amount',
      width: 165,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_2__["formatNumber"],
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false,
      editable: true
    }, {
      headerName: this.$t('transaction.table.fixedAmount'),
      field: 'fixed_amount',
      width: 102,
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false,
      editable: true,
      cellRenderer: 'checklistRenderer',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: [true, false],
        cellRenderer: 'checklistRenderer'
      }
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      checklistRenderer: _views_pages_components_ag_grid_framework_checklist2__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {
      this.pinnedBottomRowData = this.getPinnedBottomData();
    },
    handleShowAdvancedCorrection: function handleShowAdvancedCorrection(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$loadingIndicator(_this);

                _this.handleReset();

                _this.isFixedAmount = 'true';
                _context.next = 5;
                return _this.getBreakdownData(id);

              case 5:
                _this.$closeLoadingIndicator(_this);

                _this.activeModal = true;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getBreakdownData: function getBreakdownData(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.idData = id;
                _context2.next = 3;
                return transactionResource.getAdvancedCorrectionBreakdown(id);

              case 3:
                _yield$transactionRes = _context2.sent;
                data = _yield$transactionRes.data;
                _this2.vModel = data;
                _this2.vTemp = data;
                _context2.next = 9;
                return data.data;

              case 9:
                _context2.t0 = _context2.sent;

                if (_context2.t0) {
                  _context2.next = 12;
                  break;
                }

                _context2.t0 = [];

              case 12:
                _this2.rowData = _context2.t0;
                _this2.rowDataTemp = data.data || [];
                _this2.totalAmountBefore = data.amount;
                _this2.totalAmountAfter = [{
                  amount: data.amount
                }];

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getPinnedBottomData: function getPinnedBottomData() {
      // this.gridOptions.api.forEachNode((rowNode, index) => {
      //     amount += rowNode.data.amount;
      // });
      return [{
        amount: this.vModel.amount
      }];
    },
    handleReset: function handleReset() {
      this.dataHasChanged = false;
      this.changedData = {};

      if (this.rowData.length > 0 && this.activeModal) {
        this.gridOptions.api.forEachNode(function (rowNode, index) {
          rowNode.setDataValue('amount', rowNode.data.amount_before);
        });
        this.gridOptions.api.setPinnedBottomRowData([{
          amount: this.totalAmountBefore
        }]);
      }
    },
    handleSave: function handleSave() {
      this.gridOptions.api.stopEditing();

      if (this.dataHasChanged) {
        this.updateData(this.changedData);
      } else {
        _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].information(this.$t('responseStatus.advancedCorrection.3'));
      }
    },
    updateData: function updateData(params) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$transactionRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this3.$loadingIndicator(_this3);

                _context3.next = 4;
                return transactionResource.updateAdvancedCorrection(params);

              case 4:
                _yield$transactionRes2 = _context3.sent;
                data = _yield$transactionRes2.data;

                if (data === 0) {
                  _this3.refreshData();

                  _this3.activeModal = false;
                } else if (data > 0) {
                  _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].information(_this3.$t("responseStatus.advancedCorrection.".concat(data)));

                  _this3.$closeLoadingIndicator(_this3);
                }

                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

                _this3.$closeLoadingIndicator(_this3);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    handleValueChanged: function handleValueChanged(params) {
      var _this4 = this;

      if (this.canProsesAmount) {
        var amount = 0;
        var data = [];
        var rowData = this.getAllRows();

        if (this.isFixedAmount == 'true') {
          this.canProsesAmount = false;
          var totalFixedAmount = 0;
          var totalNonFixedAmount = 0;
          this.gridOptions.api.forEachNode(function (rowNode, index) {
            if (rowNode.data.fixed_amount || rowNode.data.id == params.data.id) {
              totalFixedAmount += parseFloat(rowNode.data.amount);
            } else {
              totalNonFixedAmount += parseFloat(rowNode.data.amount_before);
            }
          });

          if (totalFixedAmount > this.totalAmountBefore) {
            _utils_dialog_js__WEBPACK_IMPORTED_MODULE_5__["default"].information(this.$t('responseStatus.advancedCorrection.4'));
          } else {
            var firstRowNode = null;
            var totalAmountTemp = this.totalAmountBefore - totalFixedAmount;
            this.gridOptions.api.forEachNode(function (rowNode, index) {
              var amountBefore = parseFloat(rowNode.data.amount_before);

              if (!rowNode.data.fixed_amount && rowNode.data.id != params.data.id) {
                if (firstRowNode == null) {
                  firstRowNode = rowNode;
                }

                var newVal = parseFloat(amountBefore / totalNonFixedAmount * (_this4.totalAmountBefore - totalFixedAmount)).toFixed(3);
                rowNode.setDataValue('amount', newVal);
                totalAmountTemp = parseFloat(totalAmountTemp).toFixed(3) - parseFloat(newVal).toFixed(3);
              }
            });

            if (firstRowNode != null && totalAmountTemp != 0) {
              firstRowNode.setDataValue('amount', parseFloat(firstRowNode.data.amount_before) + parseFloat(totalAmountTemp).toFixed(3));
            }
          }
        }

        this.gridOptions.api.forEachNode(function (rowNode, index) {
          var newVal = parseFloat(rowNode.data.amount);

          if (isNaN(newVal)) {
            amount += 0;
          } else {
            amount += parseFloat(rowNode.data.amount);
          }

          data.push({
            id: rowNode.data.id,
            breakdown2: rowNode.data.breakdown2,
            amount_before: rowNode.data.amount_before,
            amount_after: newVal
          });
        });
        this.gridOptions.api.setPinnedBottomRowData([{
          amount: parseFloat(amount).toFixed(3)
        }]);
        this.dataHasChanged = true;
        this.changedData = {
          id: this.idData,
          fixed_total_amount: this.isFixedAmount,
          amount_before: this.totalAmountBefore,
          amount_after: parseFloat(amount).toFixed(3),
          user_id: this.global.userInfo.code,
          data: data
        };
        this.canProsesAmount = true;
      }
    },
    getDataValue: function getDataValue(id, status) {
      // use on group check in form
      var rowNode = this.gridApi.getRowNode(id);
      rowNode.setDataValue('result', this.$t("responseStatus.checkInReservation.".concat(status)));
    },
    getAllRows: function getAllRows() {
      var rowData = [];
      this.gridOptions.api.forEachNode(function (node) {
        return rowData.push(node.data);
      });
      return rowData;
    },
    refreshData: function refreshData() {
      this.$emit('refreshData');
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    searchDefault: String
  },
  data: function data() {
    return {
      mWalkedIn: true,
      mCheckedIn: true,
      mDeparture: true,
      all: true,
      vPossession: false,
      vTransfered: false,
      vCorrection: false,
      vVoid: false,
      vModelSelectLimitData: 0,
      vModelSearchData: '',
      vModelTextSearchData: '',
      vSubFolio: 'All',
      subFolio: [{
        code: 'All',
        name: 'All Sub Folio'
      }, {
        code: 'A',
        name: 'Sub Folio A'
      }, {
        code: 'B',
        name: 'Sub Folio B'
      }, {
        code: 'C',
        name: 'Sub Folio C'
      }, {
        code: 'D',
        name: 'Sub Folio D'
      }]
    };
  },
  methods: {
    onRefreshData: function onRefreshData() {
      var _this = this;

      var search = {
        searchBy: this.vModelSearchData,
        keyword: this.vModelTextSearchData,
        limit: this.vModelSelectLimitData,
        subFolio: this.vSubFolio,
        possession: this.vPossession,
        transfered: this.vTransfered,
        "void": this.vVoid,
        correction: this.vCorrection
      };
      setTimeout(function () {
        _this.$emit('search', search);
      }, 200);
    },
    selectAll: function selectAll() {
      this.mWalkedIn = !!this.all;
      this.mCheckedIn = !!this.all;
      this.mDeparture = !!this.all;
      this.onRefreshData();
    },
    onEnter: function onEnter() {
      this.onRefreshData();
    }
  },
  beforeMount: function beforeMount() {
    // Assign limit data with variable Global
    this.vModelSearchData = this.searchDefault;
    this.vModelSelectLimitData = this.global.limitDefaultPageSize; // this.onRefreshData()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    stayInformations: Object
  },
  data: function data() {
    return {
      informations: {
        number: '',
        room_number: '',
        full_name: '',
        adress: '',
        phone1: '',
        group: '',
        guest_type_code: '',
        arrival: '',
        departure: '',
        adult: '',
        room_type_code: '',
        room_rate_amount: '',
        discount_amount: '',
        room_charge: ''
      }
    };
  },
  methods: {},
  beforeMount: function beforeMount() {
    this.value = this.stayInformations === undefined ? this.informations : this.stayInformations;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    folioType: String,
    isFolioOpen: Boolean,
    access: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PackageBreakdown',
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
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('transaction.table.name'),
      field: 'account',
      width: 250,
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.quantity'),
      field: 'quantity',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.amount'),
      field: 'amount',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"],
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }, {
      headerName: this.$t('transaction.table.remark'),
      field: 'remark',
      enableRowGroup: false,
      suppressMenu: true,
      filter: false,
      sortable: false,
      rowGroup: false
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {}
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_general_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/general.js */ "./resources/js/src/utils/general.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_properties1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_properties1 */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties1.js");
/* harmony import */ var _views_pages_components_ag_grid_framework_action_grid_properties2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/pages/components/ag_grid-framework/action_grid_properties2 */ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties2.js");
/* harmony import */ var _api_transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/transaction */ "./resources/js/src/api/transaction.js");
/* harmony import */ var _UpdateDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateDialog */ "./resources/js/src/views/pages/components/transaction/components/UpdateDialog.vue");


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






var transactionResource = new _api_transaction__WEBPACK_IMPORTED_MODULE_5__["default"](); // import StatusBarTotal from './statusbar_total';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Properties',
  components: {
    UpdateDialog: _UpdateDialog__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      // Ag-Grid
      columnDefs: null,
      columnDefs2: null,
      rowData: null,
      rowData2: null,
      gridOptions: null,
      gridOptions2: null,
      gridApi: null,
      columnApi: null,
      gridApi2: null,
      columnApi2: null,
      frameworkComponents: null,
      contex: null,
      rowGroupPanelShow: null,
      statusBar: null,
      paginationPageSize: null,
      rowSelection: null,
      bottomRowTotal: [],
      showType: null,
      rowClassRules: null,
      paramsData: null,
      title: '',
      title2: '',
      title3: '',
      idLog: '',
      modalMain: false,
      modalChild: false,
      modalChild2: false,
      vInformation: {},
      vInformation2: {},
      vInformation3: {}
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions2 = {
      rowHeight: this.global.rowHeightDefault
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
      cellRenderer: 'actionGrid1',
      colId: 'params',
      width: 62
    }, {
      headerName: this.$t('transaction.table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('transaction.table.account'),
      field: 'account',
      width: 250
    }, {
      headerName: this.$t('transaction.table.debit'),
      field: 'debit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.credit'),
      field: 'credit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.currency'),
      field: 'default_currency',
      width: 100
    }, {
      headerName: this.$t('transaction.table.debitForeign'),
      field: 'debit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.creditForeign'),
      field: 'credit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.currencyForeign'),
      field: 'currency_code',
      width: 100
    }, {
      headerName: this.$t('transaction.table.exchangeRate'),
      field: 'exchange_rate',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.directBillOrCompany'),
      field: 'company',
      width: 200
    }];
    this.columnDefs2 = [{
      headerName: this.$t('common.table.action'),
      field: 'number',
      enableRowGroup: false,
      suppressMenu: true,
      resizable: false,
      filter: false,
      sortable: false,
      rowGroup: false,
      cellRenderer: 'actionGrid2',
      colId: 'params',
      width: 62
    }, {
      headerName: this.$t('transaction.table.subDepartment'),
      field: 'sub_department',
      width: 200
    }, {
      headerName: this.$t('transaction.table.account'),
      field: 'account',
      width: 250
    }, {
      headerName: this.$t('transaction.table.debit'),
      field: 'debit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.credit'),
      field: 'credit',
      width: 100,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.currency'),
      field: 'default_currency',
      width: 100
    }, {
      headerName: this.$t('transaction.table.debitForeign'),
      field: 'debit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.creditForeign'),
      field: 'credit_foreign',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('transaction.table.currencyForeign'),
      field: 'currency_code',
      width: 100
    }, {
      headerName: this.$t('transaction.table.exchangeRate'),
      field: 'exchange_rate',
      width: 120,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {
      actionGrid1: _views_pages_components_ag_grid_framework_action_grid_properties1__WEBPACK_IMPORTED_MODULE_3__["default"],
      actionGrid2: _views_pages_components_ag_grid_framework_action_grid_properties2__WEBPACK_IMPORTED_MODULE_4__["default"]
    };
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'single';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {
      this.bottomRowTotal = this.total;
    },
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
        name: this.$t('common.contextMenu.properties'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_2__["generateIconContextMenuAgGrid"])('properties_icon24'),
        action: function action() {
          return _this.handleShowProperties2(_this.paramsData.id_log);
        }
      }, {
        name: this.$t('common.contextMenu.updateDirectBillOrCompany'),
        disabled: !this.paramsData || this.paramsData.sub_group_code !== this.global.subGroupAccount.accountPayable,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_2__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 4);
        }
      }, {
        name: this.$t('common.contextMenu.updateSubDepartment'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_2__["generateIconContextMenuAgGrid"])('edit_icon24'),
        action: function action() {
          return _this.handleUpdateType(_this.paramsData, 1);
        }
      }];
      return result;
    },
    getContextMenu2: function getContextMenu2(params) {
      var _this2 = this;

      var node = params.node;

      if (node) {
        this.paramsData = node.data;
      } else {
        this.paramsData = null;
      }

      var result = [{
        name: this.$t('common.contextMenu.properties'),
        disabled: !this.paramsData,
        icon: Object(_utils_general_js__WEBPACK_IMPORTED_MODULE_2__["generateIconContextMenuAgGrid"])('properties_icon24'),
        action: function action() {
          return _this2.handleShowProperties3(_this2.paramsData.id_log);
        }
      }];
      return result;
    },
    handleRowRightClicked: function handleRowRightClicked() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi.forEachNode(function (node) {
          if (node.data.id_log == vm.paramsData.id_log) {
            node.setSelected(true, true); // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
          }
        });
      }
    },
    handleRowRightClicked2: function handleRowRightClicked2() {
      if (this.paramsData) {
        var vm = this;
        vm.gridApi2.forEachNode(function (node) {
          if (node.data.id_log == vm.paramsData.id_log) {
            node.setSelected(true, true); // vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle')
          }
        });
      }
    },
    handleRowDobleClicked1: function handleRowDobleClicked1(params) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return params.data;

              case 2:
                _this3.paramsData = _context.sent;

                _this3.handleShowProperties2(_this3.paramsData.id_log);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleRowDobleClicked2: function handleRowDobleClicked2(params) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return params.data;

              case 2:
                _this4.paramsData = _context2.sent;

                _this4.handleShowProperties3(_this4.paramsData.id_log);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    handleUpdateType: function handleUpdateType(params, type) {
      this.$refs.updateType.handleUpdateType(params, type);
    },
    handleClose: function handleClose(t) {
      if (t == 1) {
        this.modalMain = false;
      } else {
        this.modalChild = false;
      }
    },
    formatDate: function formatDate(date) {
      return Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date);
    },
    handleShowProperties: function handleShowProperties(idLog) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.idLog = idLog;

                _this5.$loadingIndicator(_this5);

                _context3.next = 4;
                return _this5.getProperties1(idLog);

              case 4:
                _this5.modalMain = true;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getProperties1: function getProperties1(idLog) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$transactionRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return transactionResource.getProperties1(idLog);

              case 2:
                _yield$transactionRes = _context4.sent;
                data = _yield$transactionRes.data;
                _this6.vInformation = data.information;
                _this6.rowData = data.list;

                _this6.$closeLoadingIndicator(_this6);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    handleShowProperties2: function handleShowProperties2(idLog) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this7.$loadingIndicator(_this7);

                _context5.next = 3;
                return _this7.getProperties2(idLog);

              case 3:
                _this7.modalChild = true;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getProperties2: function getProperties2(idLog) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _yield$transactionRes2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return transactionResource.getProperties2(idLog);

              case 2:
                _yield$transactionRes2 = _context6.sent;
                data = _yield$transactionRes2.data;
                _this8.vInformation2 = data.information;
                _this8.rowData2 = data.list;

                _this8.$closeLoadingIndicator(_this8);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    handleShowProperties3: function handleShowProperties3(idLog) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this9.$loadingIndicator(_this9);

                _context7.next = 3;
                return _this9.getProperties3(idLog);

              case 3:
                _this9.modalChild2 = true;

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getProperties3: function getProperties3(idLog) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$transactionRes3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return transactionResource.getProperties3(idLog);

              case 2:
                _yield$transactionRes3 = _context8.sent;
                data = _yield$transactionRes3.data;
                _this10.vInformation3 = data.information;

                _this10.$closeLoadingIndicator(_this10);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.gridApi2 = this.gridOptions2.api;
    this.ColumnApi2 = this.gridOptions2.columnApi;
  },
  computed: {
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TransferAccountTable',
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
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('common.table.id'),
      field: 'id_log',
      width: 80,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('common.table.auditDate'),
      field: 'audit_date',
      width: 100
    }, {
      headerName: this.$t('common.table.subFolio'),
      field: 'group_code',
      width: 70
    }, {
      headerName: "".concat(this.$t('common.table.room'), "#"),
      field: 'room_number',
      width: 80
    }, {
      headerName: this.$t('common.table.account'),
      field: 'account'
    }, {
      headerName: this.$t('common.table.debit'),
      field: 'debit',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('common.table.credit'),
      field: 'credit',
      width: 115,
      cellStyle: {
        textAlign: 'right'
      },
      valueFormatter: _utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatNumber"]
    }, {
      headerName: this.$t('common.table.subDepartment'),
      field: 'sub_department',
      width: 200
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.correction_breakdown;
      });
      this.$emit('selected', selected);
    },
    selectAll: function selectAll() {
      this.gridApi.selectAll();
    },
    deselectAll: function deselectAll() {
      this.gridApi.deselectAll();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReturnTransferTable',
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
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('transaction.table.folioNumber'),
      field: 'folio',
      width: 150,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('transaction.table.roomNumber'),
      field: 'room_number',
      width: 150
    }, {
      headerName: this.$t('transaction.table.fullName'),
      field: 'full_name',
      width: 300
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.folio;
      });
      this.$emit('selected', selected);
    },
    selectAll: function selectAll() {
      this.gridApi.selectAll();
    },
    deselectAll: function deselectAll() {
      this.gridApi.deselectAll();
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
    this.selectAll();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AutomaticRoutingTable',
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
      rowSelection: null
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    }; // ------------------need setting manual for column table-----------------//
    // use this.$t("value") for transaltion localization------//
    // see value in @/lang/en.js //

    this.columnDefs = [{
      headerName: this.$t('transaction.table.id'),
      field: 'code',
      width: 80,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true
    }, {
      headerName: this.$t('transaction.table.account'),
      field: 'account',
      width: 250
    }, {
      headerName: this.$t('transaction.folio'),
      field: 'folio',
      width: 250
    }, {
      headerName: this.$t('transaction.sf'),
      field: 'sub_folio',
      width: 80
    }]; // ------------------end need setting manual for column table-----------------//

    this.context = {
      componentParent: this
    };
    this.frameworkComponents = {};
    this.paginationPageSize = this.global.limitDefaultPageSize;
    this.rowSelection = 'multiple';
    this.rowModelType = 'serverSide';
  },
  methods: {
    onGridReady: function onGridReady() {},
    getSelectedRow: function getSelectedRow() {
      var array = this.gridApi.getSelectedRows();
      var selected = array.map(function (result) {
        return result.id_log;
      });
      this.$emit('selected', selected);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  watch: {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form_deposit_charge.two_column.con-vs-popup .vs-popup {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-popup .vs-popup .form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n  width: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #transaction {\n  width: 450px;\n}\n.form_deposit_charge.two_column.con-vs-dialog .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-popup {\n  width: auto;\n}\n.form_deposit_charge .vs-popup .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-popup .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-popup .vs-popup--content {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-popup div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-popup .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-popup #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.form_deposit_charge .vs-dialog {\n  width: auto;\n}\n.form_deposit_charge .vs-dialog .form-content {\n  width: 450px;\n}\n.form_deposit_charge .vs-dialog .form-content .sub-folio {\n  font-size: 0.8rem;\n}\n.form_deposit_charge .vs-dialog .vs-dialog-text {\n  overflow: auto;\n}\n@media only screen and (min-width: 600px) {\n.form_deposit_charge .vs-dialog {\n    max-width: 950px;\n}\n.form_deposit_charge .vs-dialog div.content-left {\n    border-right: 1px dashed #c5c5c5;\n    padding-right: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-col.content-right {\n    padding-left: 10px;\n    width: 450px;\n}\n.form_deposit_charge .vs-dialog .vs-divider.divider-title {\n    margin: 0px;\n}\n}\n.form_deposit_charge .vs-dialog #expDate .vs__dropdown-menu {\n  min-width: 30px;\n}\n.payment-option .vs-dialog {\n  width: 450px;\n  max-width: 450px !important;\n}\n.payment-option .box .vs-button:not(.vs-radius):not(.includeIconOnly):not(.small):not(.large) {\n  width: 170px;\n}\n@media screen and (min-width: 600px) {\n.payment-option .box #row1 {\n    margin-bottom: 15px;\n}\n.payment-option .box .button1 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button2 {\n    margin-left: 15px !important;\n}\n.payment-option .box .button3 {\n    margin-left: 20px !important;\n}\n.payment-option .box .button4 {\n    margin-left: 15px !important;\n}\n}\n@media screen and (max-width: 579px) {\n.payment-option .box #card {\n    margin-top: 5px;\n}\n.payment-option .box #direct-bill {\n    margin-top: 5px;\n}\n.payment-option .box #other-payment {\n    margin-top: 5px;\n}\n}\n.transfer .sub-folio .vs__dropdown-menu {\n  min-width: 30px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ag-theme-balham .correction {\n  background-color: yellow;\n}\n.ag-theme-balham .void {\n  background-color: #ff6868;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-bottom {\n  bottom: 0;\n  margin-top: 11px;\n}\n.payment-option span.vs-button-text.vs-button--text {\n  display: flex !important;\n  justify-content: center;\n}\n.payment-option span.vs-button-text.vs-button--text img {\n  margin-right: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media only screen and (min-width: 900px) {\n.navigation-header .navigation-transaction {\n    display: flex;\n    justify-content: flex-end;\n}\n.navigation-header #btn {\n    width: 135px !important;\n    margin-right: 10px;\n}\n.navigation-header #btn-last {\n    width: 135px !important;\n    margin-right: 0px;\n}\n.navigation-header .navigation-transaction {\n    width: 85%;\n}\n.navigation-header .navigation-back {\n    width: 15%;\n}\n}\n@media only screen and (max-width: 899px) {\n.navigation-header #btn {\n    margin-bottom: 5px;\n}\n}\n.navigation-header button.btn-left-drop {\n  margin: 0px !important;\n  border-radius: 5px 0px 0px 5px;\n  width: calc(100% - 38px) !important;\n}\n.navigation-header button.btn-drop {\n  border-radius: 0px 5px 5px 0px;\n  border-left: 1px solid rgba(255, 255, 255, 0.2);\n}\n.navigation-header .examplex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navigation-header .dropdown {\n  cursor: pointer;\n}\n.navigation-header span.vs-button-text.vs-button--text {\n  display: flex !important;\n  justify-content: center;\n}\n.navigation-header span.vs-button-text.vs-button--text img {\n  margin-right: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { "min-width": "800px" } },
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
          columnDefs: _vm.columnDefs,
          enableCellChangeFlash: true,
          rowSelection: _vm.rowSelection,
          rowData: _vm.theData,
          defaultColDef: _vm.global.defColDef,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction" },
    [
      _c("navigation-header", {
        attrs: {
          access: _vm.userAccess,
          folioType: _vm.nFolioType,
          isFolioOpen: _vm.isFolioOpen,
        },
        on: {
          charge: function ($event) {
            _vm.showForm(
              null,
              _vm.global.groupAccount.charge,
              _vm.$t("transaction.title.charge")
            )
          },
          roomCharge: function ($event) {
            return _vm.handlePostingRoomCharge()
          },
          package: function ($event) {
            return _vm.handleShowPackage()
          },
          apTransaction: function ($event) {
            _vm.showForm(
              [_vm.global.subGroupAccount.accountPayable],
              _vm.global.groupAccount.charge,
              _vm.$t("transaction.title.charge")
            )
          },
          payment: function ($event) {
            _vm.btnPaymentOptionDisabled = false
            _vm.showPaymentOption = true
          },
          refund: function ($event) {
            _vm.showForm(
              [_vm.global.subGroupAccount.cashPayment],
              _vm.global.groupAccount.payment,
              _vm.$t("transaction.title.cashRefund"),
              true
            )
          },
          transfer: function ($event) {
            return _vm.handleTransfer()
          },
          checkOut: function ($event) {
            return _vm.handleCheckOut()
          },
          back: function ($event) {
            return _vm.handleBackButton()
          },
          printFolio: function ($event) {
            return _vm.handlePrintFolio()
          },
        },
      }),
      _vm._v(" "),
      _c("information-header", {
        attrs: { stayInformations: _vm.stayInformations },
      }),
      _vm._v(" "),
      _c("filter-header", {
        ref: "filterHeader",
        attrs: {
          searchOption: _vm.searchOption,
          searchDefault: _vm.searchDefault,
        },
        on: { search: _vm.searchData },
      }),
      _vm._v(" "),
      _c(
        "vx-card",
        {
          staticClass: "vs-con-loading__container mb-1",
          attrs: { id: "main-container" },
        },
        [
          _c("ag-grid-vue", {
            ref: "mainContainer",
            class: _vm.global.themeAgGrid,
            style: _vm.global.styleAgGridFrame2,
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
              rowData: _vm.listTransaction,
              defaultColDef: _vm.global.defColDef,
              getContextMenuItems: _vm.getContextMenu,
              rowClassRules: _vm.rowClassRules,
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
      _c("information-footer", { attrs: { data: _vm.balanceData } }),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: _vm.modeDataValue !== _vm.global.modeData.tracking,
          paymentForm: "",
          title: _vm.titleInputForm,
          width: 500,
          active: _vm.showInputForm,
          idButton1: "button-save-form1",
          buttonDisabled1: _vm.btnSaveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSaveForm1()
          },
          close: function (val) {
            return (_vm.showInputForm = val)
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
                          },
                        }),
                      ],
                      1
                    )
                  : _c("div", { staticClass: "popup-body" }, [
                      _c(
                        "div",
                        [
                          _c(
                            "vs-row",
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "form-content",
                                  class: {
                                    "content-left vs-lg-6 vs-xs-12":
                                      _vm.subGroupAccount ==
                                      _vm.global.subGroupAccount
                                        .creditOrDebitCard,
                                  },
                                },
                                [
                                  _c(
                                    "vs-row",
                                    {
                                      staticClass: "sub-folio",
                                      attrs: {
                                        "vs-type": "flex",
                                        "vs-justify": "space-between",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "form-check-inline" },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-check-label",
                                              attrs: { for: "radio1" },
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.vTransaction
                                                        .sub_folio,
                                                    expression:
                                                      "vTransaction.sub_folio",
                                                  },
                                                ],
                                                staticClass: "form-check-input",
                                                attrs: {
                                                  type: "radio",
                                                  id: "radio1",
                                                  name: "optradio",
                                                  value: "A",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.vTransaction.sub_folio,
                                                    "A"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.vTransaction,
                                                      "sub_folio",
                                                      "A"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.subFolio"
                                                  ) + " A"
                                                ) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-check-inline" },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-check-label",
                                              attrs: { for: "radio2" },
                                            },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.vTransaction
                                                        .sub_folio,
                                                    expression:
                                                      "vTransaction.sub_folio",
                                                  },
                                                ],
                                                staticClass: "form-check-input",
                                                attrs: {
                                                  type: "radio",
                                                  id: "radio2",
                                                  name: "optradio",
                                                  value: "B",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.vTransaction.sub_folio,
                                                    "B"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.vTransaction,
                                                      "sub_folio",
                                                      "B"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.subFolio"
                                                  ) + " B"
                                                ) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-check-inline" },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "form-check-label" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.vTransaction
                                                        .sub_folio,
                                                    expression:
                                                      "vTransaction.sub_folio",
                                                  },
                                                ],
                                                staticClass: "form-check-input",
                                                attrs: {
                                                  type: "radio",
                                                  id: "radio3",
                                                  name: "optradio",
                                                  value: "C",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.vTransaction.sub_folio,
                                                    "C"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.vTransaction,
                                                      "sub_folio",
                                                      "C"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.subFolio"
                                                  ) + " C"
                                                ) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-check-inline" },
                                        [
                                          _c(
                                            "label",
                                            { staticClass: "form-check-label" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.vTransaction
                                                        .sub_folio,
                                                    expression:
                                                      "vTransaction.sub_folio",
                                                  },
                                                ],
                                                staticClass: "form-check-input",
                                                attrs: {
                                                  type: "radio",
                                                  id: "radio4",
                                                  name: "optradio",
                                                  value: "D",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.vTransaction.sub_folio,
                                                    "D"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.vTransaction,
                                                      "sub_folio",
                                                      "D"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.subFolio"
                                                  ) + " D"
                                                ) +
                                                  "\n                                        "
                                              ),
                                            ]
                                          ),
                                        ]
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
                                                _vm.$t("transaction.currency")
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
                                                staticClass: "w-full height150",
                                                attrs: {
                                                  id: "form-select",
                                                  clearable: false,
                                                  label: "code",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup.currency,
                                                  name: "currency",
                                                  "data-vv-scope": _vm.form1,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    _vm.getExchangeRate()
                                                    _vm.getAccount()
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vTransaction
                                                      .currency_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vTransaction,
                                                      "currency_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vTransaction.currency_code",
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
                                                          "deposit.currency"
                                                        ),
                                                      expression:
                                                        "errors.has('deposit.currency')",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "error-text text-danger",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "deposit.currency"
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
                                          disabled: "",
                                          label: _vm.$t("transaction.excRate"),
                                          description: _vm._f("toString")(
                                            _vm.errors.first(
                                              _vm.form1 + ".exc.rate"
                                            ) || _vm.dbErrors.exchange_rate
                                          ),
                                          name: "exc.rate",
                                          "data-vv-scope": _vm.form1,
                                        },
                                        model: {
                                          value: _vm.vTransaction.exchange_rate,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "exchange_rate",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vTransaction.exchange_rate",
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
                                                  "transaction.subDepartment"
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
                                                staticClass: "w-full height150",
                                                attrs: {
                                                  id: "form-select",
                                                  clearable: false,
                                                  label: "name",
                                                  reduce: function (value) {
                                                    return value.code
                                                  },
                                                  options:
                                                    _vm.dataLookup
                                                      .sub_department,
                                                  name: "sub department",
                                                  "data-vv-scope": _vm.form1,
                                                },
                                                on: {
                                                  input: function ($event) {
                                                    _vm.getAccount()
                                                    _vm.resetOptionsChange = true
                                                  },
                                                },
                                                model: {
                                                  value:
                                                    _vm.vTransaction
                                                      .sub_department_code,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      _vm.vTransaction,
                                                      "sub_department_code",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "vTransaction.sub_department_code",
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
                                                        _vm.form1 +
                                                          ".sub department"
                                                      ),
                                                      expression:
                                                        "errors.has(form1+'.sub department')",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "error-text text-danger",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        _vm.form1 +
                                                          ".sub department"
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
                                            "wrap-form-select w-full md:w-1/2",
                                        },
                                        [
                                          _c("vs-row", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("transaction.account")
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
                                                staticClass: "w-full height150",
                                                attrs: {
                                                  id: "form-select",
                                                  resetOnOptionsChange:
                                                    _vm.resetOptionsChange,
                                                  clearable: false,
                                                  label: "name",
                                                  options: _vm.accounts,
                                                  name: "account",
                                                  "data-vv-scope": _vm.form1,
                                                },
                                                model: {
                                                  value: _vm.account,
                                                  callback: function ($$v) {
                                                    _vm.account = $$v
                                                  },
                                                  expression: "account",
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
                                                        _vm.form1 + ".account"
                                                      ),
                                                      expression:
                                                        "errors.has(form1+'.account')",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "error-text text-danger",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        _vm.form1 + ".account"
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
                                      _c("input-number", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required|min_value:0.001",
                                            expression:
                                              "'required|min_value:0.001'",
                                          },
                                        ],
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          label:
                                            _vm.$t("transaction.amount") +
                                            " " +
                                            _vm.vTransaction.currency_code,
                                          description: _vm._f("toString")(
                                            _vm.errors.first(
                                              _vm.form1 + ".amount"
                                            ) || _vm.dbErrors.quantity
                                          ),
                                          name: "amount",
                                          "data-vv-scope": _vm.form1,
                                        },
                                        on: {
                                          input: function ($event) {
                                            return _vm.getTotalAmount()
                                          },
                                        },
                                        model: {
                                          value:
                                            _vm.vTransaction.amount_foreign,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "amount_foreign",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "vTransaction.amount_foreign",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c("input-number", {
                                        staticClass: "w-full md:w-1/2",
                                        attrs: {
                                          disabled: "",
                                          label:
                                            _vm.$t("transaction.amount") +
                                            " " +
                                            _vm.defaultCurrency,
                                        },
                                        model: {
                                          value: _vm.vTransaction.amount,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "amount",
                                              $$v
                                            )
                                          },
                                          expression: "vTransaction.amount",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.subGroupAccount ==
                                    _vm.global.subGroupAccount
                                      .accountReceiveable ||
                                  _vm.subGroupAccount ==
                                    _vm.global.subGroupAccount.accountPayable
                                    ? _c(
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
                                                "wrap-form-select w-full",
                                            },
                                            [
                                              _vm.subGroupAccount ==
                                              _vm.global.subGroupAccount
                                                .accountReceiveable
                                                ? _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "transaction.directBill"
                                                        )
                                                      )
                                                    ),
                                                  ])
                                                : _c("vs-row", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "transaction.company"
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
                                                        value:
                                                          _vm.reqDirectBill,
                                                        expression:
                                                          "reqDirectBill",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "w-full height100",
                                                    attrs: {
                                                      id: "form-select",
                                                      clearable: false,
                                                      label: "name",
                                                      options:
                                                        _vm.dataLookup
                                                          .direct_bill,
                                                      name: "company",
                                                      "data-vv-scope":
                                                        _vm.form1,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        _vm.vArLimit =
                                                          _vm.vDirectBill.ar_limit
                                                        _vm.vTransaction.direct_bill_code =
                                                          _vm.vDirectBill.code
                                                      },
                                                    },
                                                    model: {
                                                      value: _vm.vDirectBill,
                                                      callback: function ($$v) {
                                                        _vm.vDirectBill = $$v
                                                      },
                                                      expression: "vDirectBill",
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
                                                            _vm.form1 +
                                                              ".company"
                                                          ),
                                                          expression:
                                                            "errors.has(form1+'.company')",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "error-text text-danger",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            _vm.form1 +
                                                              ".company"
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.subGroupAccount ==
                                  _vm.global.subGroupAccount.accountReceiveable
                                    ? _c(
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
                                              disabled: "",
                                              label: _vm.$t(
                                                "transaction.outstanding"
                                              ),
                                            },
                                            model: {
                                              value: _vm.vOutstanding,
                                              callback: function ($$v) {
                                                _vm.vOutstanding = $$v
                                              },
                                              expression: "vOutstanding",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("input-number", {
                                            staticClass: "w-full md:w-1/2",
                                            attrs: {
                                              disabled: "",
                                              label: _vm.$t(
                                                "transaction.arLimit"
                                              ),
                                            },
                                            model: {
                                              value: _vm.vArLimit,
                                              callback: function ($$v) {
                                                _vm.vArLimit = $$v
                                              },
                                              expression: "vArLimit",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
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
                                          label: _vm.$t("transaction.remark"),
                                          maxLength: 50,
                                        },
                                        model: {
                                          value: _vm.vTransaction.remark,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.vTransaction,
                                              "remark",
                                              $$v
                                            )
                                          },
                                          expression: "vTransaction.remark",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.subGroupAccount !=
                                    _vm.global.subGroupAccount
                                      .accountReceiveable &&
                                  _vm.subGroupAccount !=
                                    _vm.global.subGroupAccount.accountPayable
                                    ? _c(
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
                                                value: _vm.reqDocNumber,
                                                expression: "reqDocNumber",
                                              },
                                            ],
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.docNumber"
                                              ),
                                              maxLength: 50,
                                              description: _vm.errors.first(
                                                _vm.form1 + ".doc number"
                                              ),
                                              name: "doc number",
                                              "data-vv-scope": _vm.form1,
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction
                                                  .document_number,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "document_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.document_number",
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
                                                    _vm.form1 + ".doc number"
                                                  ),
                                                  expression:
                                                    "errors.has(form1+'.doc number')",
                                                },
                                              ],
                                              staticClass:
                                                "error-text text-danger",
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    _vm.form1 + ".doc number"
                                                  )
                                                )
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.subGroupAccount ==
                              _vm.global.subGroupAccount.creditOrDebitCard
                                ? _c(
                                    "vs-col",
                                    {
                                      staticClass: "content-right",
                                      attrs: { "vs-lg": "6", "vs-xs": "12" },
                                    },
                                    [
                                      _c(
                                        "h4",
                                        {
                                          staticStyle: {
                                            "margin-bottom": "5px",
                                          },
                                        },
                                        [_vm._v("Card Information")]
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
                                                      "transaction.cardType"
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
                                                        value: _vm.reqCard,
                                                        expression: "reqCard",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "w-full height250",
                                                    attrs: {
                                                      id: "form-select",
                                                      clearable: false,
                                                      label: "name",
                                                      reduce: function (value) {
                                                        return value.code
                                                      },
                                                      options:
                                                        _vm.dataLookup
                                                          .card_bank,
                                                      name: "card bank",
                                                      "data-vv-scope":
                                                        _vm.form1,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vTransaction
                                                          .card_bank_code,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vTransaction,
                                                          "card_bank_code",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vTransaction.card_bank_code",
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
                                                            _vm.form1 +
                                                              ".card bank"
                                                          ),
                                                          expression:
                                                            "errors.has(form1+'.card bank')",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "error-text text-danger",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            _vm.form1 +
                                                              ".card bank"
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
                                                "wrap-form-select w-full md:w-1/2",
                                            },
                                            [
                                              _c("vs-row", [_vm._v(".")]),
                                              _vm._v(" "),
                                              _c(
                                                "vs-row",
                                                [
                                                  _c("v-select", {
                                                    directives: [
                                                      {
                                                        name: "validate",
                                                        rawName: "v-validate",
                                                        value: _vm.reqCard,
                                                        expression: "reqCard",
                                                      },
                                                    ],
                                                    staticClass: "w-full",
                                                    attrs: {
                                                      id: "form-select",
                                                      clearable: false,
                                                      reduce: function (value) {
                                                        return value.code
                                                      },
                                                      label: "name",
                                                      options:
                                                        _vm.dataLookup
                                                          .card_type,
                                                      name: "card type",
                                                      "data-vv-scope":
                                                        _vm.form1,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vTransaction
                                                          .card_type_code,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vTransaction,
                                                          "card_type_code",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vTransaction.card_type_code",
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
                                                            _vm.form1 +
                                                              ".card type"
                                                          ),
                                                          expression:
                                                            "errors.has(form1+'.card type')",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "error-text text-danger",
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.errors.first(
                                                            _vm.form1 +
                                                              ".card type"
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
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.cardNumber"
                                              ),
                                              maxLength: 50,
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction.card_number,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "card_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.card_number",
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
                                                "transaction.cardHolder"
                                              ),
                                              maxLength: 50,
                                            },
                                            model: {
                                              value: _vm.vTransaction.holder,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "holder",
                                                  $$v
                                                )
                                              },
                                              expression: "vTransaction.holder",
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
                                                      "transaction.expirationDate"
                                                    )
                                                  )
                                                ),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "vs-row",
                                                [
                                                  _c(
                                                    "vs-col",
                                                    { attrs: { "vs-lg": "6" } },
                                                    [
                                                      _c("v-select", {
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "expDate",
                                                          placeholder: "MM",
                                                          clearable: false,
                                                          options:
                                                            _vm.global.mt,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vTransaction
                                                              .exp_month,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vTransaction,
                                                              "exp_month",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vTransaction.exp_month",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "vs-col",
                                                    { attrs: { "vs-lg": "6" } },
                                                    [
                                                      _c("v-select", {
                                                        staticClass:
                                                          "w-full height200",
                                                        attrs: {
                                                          id: "expDate",
                                                          placeholder: "YY",
                                                          clearable: false,
                                                          options:
                                                            _vm.global.yr,
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.vTransaction
                                                              .exp_year,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.vTransaction,
                                                              "exp_year",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "vTransaction.exp_year",
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
                                              label:
                                                _vm.$t("transaction.charge") +
                                                " (%)",
                                              description: _vm._f("toString")(
                                                _vm.errors.first(
                                                  _vm.form1 + ".amount"
                                                ) || _vm.dbErrors.quantity
                                              ),
                                              name: "amount",
                                              "data-vv-scope": _vm.form1,
                                            },
                                            on: { input: _vm.getTotalAmount },
                                            model: {
                                              value:
                                                _vm.vTransaction.charge_percent,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "charge_percent",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.charge_percent",
                                            },
                                          }),
                                          _vm._v(" "),
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
                                              disabled: "",
                                              label: ".",
                                              description: _vm._f("toString")(
                                                _vm.errors.first(
                                                  _vm.form1 + ".amount"
                                                ) || _vm.dbErrors.amount
                                              ),
                                              name: "amount",
                                              "data-vv-scope": _vm.form1,
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction.charge_amount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "charge_amount",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.charge_amount",
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
                                              disabled: "",
                                              label: _vm.$t(
                                                "transaction.totalAmount"
                                              ),
                                              description: _vm._f("toString")(
                                                _vm.errors.first(
                                                  _vm.form1 + ".amount"
                                                ) || _vm.dbErrors.quantity
                                              ),
                                              name: "amount",
                                              "data-vv-scope": _vm.form1,
                                            },
                                            model: {
                                              value:
                                                _vm.vTransaction.total_amount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vTransaction,
                                                  "total_amount",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vTransaction.total_amount",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          staticClass: "payment-option",
          attrs: {
            "buttons-hidden": "",
            active: _vm.showPaymentOption,
            title: _vm.$t("transaction.title.paymentOption"),
          },
          on: {
            "update:active": function ($event) {
              _vm.showPaymentOption = $event
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "box" },
            [
              _c(
                "vs-row",
                {
                  attrs: {
                    id: "row1",
                    "vs-type": "flex",
                    "vs-justify": "flex-start",
                  },
                },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "button1",
                      attrs: {
                        id: "cash",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12",
                      },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled:
                              _vm.btnPaymentOptionDisabled ||
                              !_vm.userAccess.cash,
                            type: "border",
                            color: "success",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showForm(
                                [_vm.global.subGroupAccount.cashPayment],
                                _vm.global.groupAccount.payment,
                                _vm.$t("transaction.title.cashPayment")
                              )
                            },
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/cash_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.cash"))),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "button2",
                      attrs: {
                        id: "card",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12",
                      },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled:
                              _vm.btnPaymentOptionDisabled ||
                              !_vm.userAccess.card,
                            type: "border",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showForm(
                                [_vm.global.subGroupAccount.creditOrDebitCard],
                                _vm.global.groupAccount.payment,
                                _vm.$t(
                                  "transaction.title.creditOrDebitCardPayment"
                                )
                              )
                            },
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/card_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.card"))),
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
                  attrs: {
                    id: "row2",
                    "vs-type": "flex",
                    "vs-justify": "flex-start",
                  },
                },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "button3",
                      attrs: {
                        id: "direct-bill",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12",
                      },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled:
                              _vm.btnPaymentOptionDisabled ||
                              !_vm.userAccess.directBill,
                            type: "border",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showForm(
                                [_vm.global.subGroupAccount.accountReceiveable],
                                _vm.global.groupAccount.payment,
                                _vm.$t("transaction.title.directBillPayment")
                              )
                            },
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/direct_bill_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.directBill"))),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "button4",
                      attrs: {
                        id: "other-payment",
                        "vs-type": "flex",
                        "vs-lg": "5",
                        "vs-sm": "5",
                        "vs-xs": "12",
                      },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled:
                              _vm.btnPaymentOptionDisabled ||
                              !_vm.userAccess.otherPayment,
                            type: "border",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showForm(
                                [
                                  _vm.global.subGroupAccount.otherPayment,
                                  _vm.global.subGroupAccount.bankTransfer,
                                ],
                                _vm.global.groupAccount.payment,
                                _vm.$t("transaction.title.otherPayment")
                              )
                            },
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "mr-1",
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/other_payment_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.otherPayment"))),
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
        ]
      ),
      _vm._v(" "),
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          button2: _vm.activeTab == 2,
          scrollOff: "",
          title: _vm.$t("transaction.title.transferTransaction"),
          width: 800,
          active: _vm.showTransferForm,
          idButton1: "btn-transfer",
          idButton2: "btn-return",
          iconButton1: _vm.activeTab == 2 ? "delete" : "save",
          iconButton2: _vm.activeTab == 2 ? "delete" : "save",
          buttonDisabled1: _vm.btnSaveTransfer1,
          buttonDisabled2: _vm.btnSaveTransfer2,
          textButton1:
            _vm.activeTab == 3
              ? _vm.$t("button.processReturn")
              : _vm.activeTab == 1
              ? _vm.$t("button.processTransfer")
              : _vm.$t("button.removeSelectedRouting"),
          textButton2: _vm.$t("button.removeRouting"),
        },
        on: {
          button1: function ($event) {
            _vm.activeTab == 3
              ? _vm.handleReturnTransfer()
              : _vm.activeTab == 1
              ? _vm.handleProcessTransfer()
              : _vm.handleRemoveRouting(2)
          },
          button2: function ($event) {
            return _vm.handleRemoveRouting(1)
          },
          close: function (val) {
            return (_vm.showTransferForm = val)
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
                      "vs-tabs",
                      { staticClass: "form-content" },
                      [
                        _c(
                          "vs-tab",
                          {
                            attrs: {
                              id: "transfer",
                              label: _vm.$t("transaction.transfer"),
                            },
                            on: {
                              click: function ($event) {
                                _vm.activeTab = 1
                              },
                            },
                          },
                          [
                            _c(
                              "VuePerfectScrollbar",
                              {
                                staticClass: "scroll-area-popup-form pt-2",
                                attrs: {
                                  settings: _vm.global.perfectScrollbarSettings,
                                },
                              },
                              [
                                _c(
                                  "vs-radio",
                                  {
                                    attrs: { "vs-value": "account" },
                                    model: {
                                      value: _vm.tfType,
                                      callback: function ($$v) {
                                        _vm.tfType = $$v
                                      },
                                      expression: "tfType",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t("transaction.transferAccount")
                                        ) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-radio",
                                  {
                                    attrs: { "vs-value": "balance" },
                                    model: {
                                      value: _vm.tfType,
                                      callback: function ($$v) {
                                        _vm.tfType = $$v
                                      },
                                      expression: "tfType",
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t("transaction.transferBalance")
                                        ) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vx-card",
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
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "wrap-form-select",
                                            attrs: {
                                              "vs-type": "flex",
                                              "vs-justify": "center",
                                              "vs-align": "center",
                                              "vs-lg": "2",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.transferTo"
                                                  ) + ":"
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "wrap-form-select",
                                            attrs: {
                                              "vs-lg": "3",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.folioType"
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
                                                      value:
                                                        (_vm.vTransfer.option >
                                                          1 &&
                                                          _vm.tfType ==
                                                            "account") ||
                                                        _vm.tfType == "balance"
                                                          ? "required"
                                                          : "",
                                                      expression:
                                                        "(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    disabled:
                                                      _vm.vTransfer.option ==
                                                        _vm.global.transfer
                                                          .combineAll &&
                                                      _vm.tfType == "account",
                                                    clearable: false,
                                                    reduce: function (value) {
                                                      return value.code
                                                    },
                                                    label: "name",
                                                    options: _vm.folioType,
                                                    name: "folio type",
                                                    "data-vv-scope": "transfer",
                                                  },
                                                  on: {
                                                    input: function ($event) {
                                                      return _vm.getFolioList()
                                                    },
                                                  },
                                                  model: {
                                                    value: _vm.tfFolioType,
                                                    callback: function ($$v) {
                                                      _vm.tfFolioType = $$v
                                                    },
                                                    expression: "tfFolioType",
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
                                                          "transfer.folio type"
                                                        ),
                                                        expression:
                                                          "errors.has('transfer.folio type')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "transfer.folio type"
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
                                              "vs-lg": "5",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.folio")
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
                                                      value:
                                                        (_vm.vTransfer.option >
                                                          1 &&
                                                          _vm.tfType ==
                                                            "account") ||
                                                        _vm.tfType == "balance"
                                                          ? "required"
                                                          : "",
                                                      expression:
                                                        "(vTransfer.option > 1 && tfType == 'account') || tfType == 'balance' ? 'required' : ''",
                                                    },
                                                  ],
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    disabled:
                                                      _vm.vTransfer.option ==
                                                        _vm.global.transfer
                                                          .combineAll &&
                                                      _vm.tfType == "account",
                                                    clearable: false,
                                                    resetOnOptionsChange: true,
                                                    reduce: function (value) {
                                                      return value.number
                                                    },
                                                    label: "folio",
                                                    options: _vm.listFolio,
                                                    name: "folio",
                                                    "data-vv-scope": "transfer",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vTransfer
                                                        .folio_number_to,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vTransfer,
                                                        "folio_number_to",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vTransfer.folio_number_to",
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
                                                            "transfer.folio"
                                                          ),
                                                        expression:
                                                          "errors.has('transfer.folio')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "transfer.folio"
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
                                              "vs-lg": "2",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.subFolio")
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
                                                  staticClass:
                                                    "sub-folio w-full",
                                                  attrs: {
                                                    clearable: false,
                                                    options:
                                                      _vm.global.subFolioGroup,
                                                    name: "sub folio",
                                                    "data-vv-scope": "transfer",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vTransfer.group_code,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vTransfer,
                                                        "group_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vTransfer.group_code",
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
                                                            "transfer.sub folio"
                                                          ),
                                                        expression:
                                                          "errors.has('transfer.sub folio')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "transfer.sub folio"
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
                                    _c("vs-divider", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("transaction.transaction")
                                        )
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm.tfType == "account"
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "vs-row",
                                              [
                                                _c(
                                                  "vs-radio",
                                                  {
                                                    attrs: {
                                                      "vs-value":
                                                        _vm.global.transfer
                                                          .combineAll,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        _vm.$refs.tableAccount.deselectAll()
                                                        _vm.$validator.reset()
                                                        _vm.disabledFolioList = true
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vTransfer.option,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vTransfer,
                                                          "option",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vTransfer.option",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "transaction.combineAllSubFolio"
                                                          )
                                                        ) +
                                                        "\n                                            "
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
                                                _c(
                                                  "vs-radio",
                                                  {
                                                    attrs: {
                                                      "vs-value":
                                                        _vm.global.transfer
                                                          .transferAll,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        _vm.$refs.tableAccount.selectAll()
                                                        _vm.$validator.reset()
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vTransfer.option,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vTransfer,
                                                          "option",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vTransfer.option",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "transaction.moveAllTransaction"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    ),
                                                  ]
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
                                                  "vs-radio",
                                                  {
                                                    attrs: {
                                                      "vs-value":
                                                        _vm.global.transfer
                                                          .transferSelected,
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        _vm.$refs.tableAccount.deselectAll()
                                                        _vm.$validator.reset()
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vTransfer.option,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vTransfer,
                                                          "option",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vTransfer.option",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "transaction.moveSelectedTransaction"
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("transfer-account", {
                                              ref: "tableAccount",
                                              attrs: {
                                                data: _vm.listTransferTransaction,
                                              },
                                              on: {
                                                selected: function (result) {
                                                  return (_vm.selectedAccount =
                                                    result)
                                                },
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
                                                  "vs-radio",
                                                  {
                                                    attrs: {
                                                      disabled: !(
                                                        _vm.balanceData.debit >
                                                        0
                                                      ),
                                                      "vs-value": "charge",
                                                    },
                                                    on: {
                                                      change:
                                                        _vm.handleChangeRadioChargeDeposit,
                                                    },
                                                    model: {
                                                      value: _vm.tfBalance,
                                                      callback: function ($$v) {
                                                        _vm.tfBalance = $$v
                                                      },
                                                      expression: "tfBalance",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "transaction.charge"
                                                          )
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
                                                  "vs-radio",
                                                  {
                                                    attrs: {
                                                      disabled: !(
                                                        _vm.balanceData.credit >
                                                        0
                                                      ),
                                                      "vs-value": "deposit",
                                                    },
                                                    on: {
                                                      change:
                                                        _vm.handleChangeRadioChargeDeposit,
                                                    },
                                                    model: {
                                                      value: _vm.tfBalance,
                                                      callback: function ($$v) {
                                                        _vm.tfBalance = $$v
                                                      },
                                                      expression: "tfBalance",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.$t(
                                                            "transaction.deposit"
                                                          )
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
                                              "vs-row",
                                              [
                                                _c("input-number", {
                                                  staticClass:
                                                    "w-full md:w-1/2",
                                                  attrs: {
                                                    disabled:
                                                      !(
                                                        _vm.balanceData.credit >
                                                        0
                                                      ) &&
                                                      !(
                                                        _vm.balanceData.debit >
                                                        0
                                                      ),
                                                    label: _vm.$t(
                                                      "transaction.amountOfBalance"
                                                    ),
                                                  },
                                                  model: {
                                                    value: _vm.vTransfer.amount,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vTransfer,
                                                        "amount",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vTransfer.amount",
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
                        _vm._v(" "),
                        _c(
                          "vs-tab",
                          {
                            attrs: {
                              label: _vm.$t("transaction.automaticRouting"),
                            },
                            on: {
                              click: function ($event) {
                                _vm.activeTab = 2
                              },
                            },
                          },
                          [
                            _c(
                              "VuePerfectScrollbar",
                              {
                                staticClass: "scroll-area-popup-form pt-2",
                                attrs: {
                                  settings: _vm.global.perfectScrollbarSettings,
                                },
                              },
                              [
                                _c(
                                  "vx-card",
                                  [
                                    _c(
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "wrap-form-select",
                                            attrs: {
                                              "vs-lg": "5",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.account")
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
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    clearable: false,
                                                    reduce: function (value) {
                                                      return value.code
                                                    },
                                                    label: "name",
                                                    options: _vm.accounts,
                                                    name: "account",
                                                    "data-vv-scope": "routing",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vRouting.account_code,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vRouting,
                                                        "account_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vRouting.account_code",
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
                                                            "routing.account"
                                                          ),
                                                        expression:
                                                          "errors.has('routing.account')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "routing.account"
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
                                            attrs: {
                                              "vs-lg": "3",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.folioType"
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
                                                  staticClass:
                                                    "w-full height200",
                                                  attrs: {
                                                    clearable: false,
                                                    reduce: function (value) {
                                                      return value.code
                                                    },
                                                    label: "name",
                                                    options: _vm.folioType,
                                                    name: "folio type",
                                                    "data-vv-scope": "routing",
                                                  },
                                                  on: {
                                                    input: function ($event) {
                                                      return _vm.getFolioList()
                                                    },
                                                  },
                                                  model: {
                                                    value: _vm.tfFolioType,
                                                    callback: function ($$v) {
                                                      _vm.tfFolioType = $$v
                                                    },
                                                    expression: "tfFolioType",
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
                                                    staticClass:
                                                      "error-text text-danger",
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
                                            attrs: {
                                              "vs-lg": "6",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.folio")
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
                                                  staticClass:
                                                    "w-full height200",
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
                                                    value:
                                                      _vm.vRouting
                                                        .folio_transfer,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vRouting,
                                                        "folio_transfer",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vRouting.folio_transfer",
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
                                                            "routing.folio"
                                                          ),
                                                        expression:
                                                          "errors.has('routing.folio')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "routing.folio"
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
                                              "vs-lg": "2",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.subFolio")
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
                                                  staticClass:
                                                    "sub-folio w-full",
                                                  attrs: {
                                                    clearable: false,
                                                    options:
                                                      _vm.global.subFolioGroup,
                                                    name: "sub folio",
                                                    "data-vv-scope": "routing",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vRouting.sub_folio,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vRouting,
                                                        "sub_folio",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vRouting.sub_folio",
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
                                                    staticClass:
                                                      "error-text text-danger",
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
                                            attrs: {
                                              "vs-lg": "1",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("vs-button", {
                                              staticClass:
                                                "w-full btn-bottom vs-con-loading__container",
                                              attrs: {
                                                id: "btn-add-routing",
                                                icon: "add",
                                                color: "success",
                                              },
                                              on: {
                                                click: function ($event) {
                                                  return _vm.handleInsertRouting()
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
                                    _c("automatic-routing", {
                                      attrs: { data: _vm.listRouting },
                                      on: {
                                        selected: function (value) {
                                          return (_vm.vRouting.selected = value)
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
                        _vm._v(" "),
                        _c(
                          "vs-tab",
                          {
                            attrs: {
                              label: _vm.$t("transaction.returnTransfer"),
                            },
                            on: {
                              click: function ($event) {
                                _vm.activeTab = 3
                              },
                            },
                          },
                          [
                            _c(
                              "VuePerfectScrollbar",
                              {
                                staticClass: "scroll-area-popup-form pt-2",
                                attrs: {
                                  settings: _vm.global.perfectScrollbarSettings,
                                },
                              },
                              [
                                _c(
                                  "vx-card",
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
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "wrap-form-select",
                                            attrs: {
                                              "vs-type": "flex",
                                              "vs-justify": "center",
                                              "vs-align": "center",
                                              "vs-lg": "2",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.returnTo"
                                                  ) + ":"
                                                )
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-col",
                                          {
                                            staticClass: "wrap-form-select",
                                            attrs: {
                                              "vs-lg": "2",
                                              "vs-xs": "12",
                                            },
                                          },
                                          [
                                            _c("label", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("transaction.subFolio")
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
                                                  staticClass:
                                                    "sub-folio w-full",
                                                  attrs: {
                                                    clearable: false,
                                                    options:
                                                      _vm.global.subFolioGroup,
                                                    name: "sub folio",
                                                    "data-vv-scope": "return",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.vReturn.sub_folio,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.vReturn,
                                                        "sub_folio",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "vReturn.sub_folio",
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
                                                            "return.sub folio"
                                                          ),
                                                        expression:
                                                          "errors.has('return.sub folio')",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "error-text text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.errors.first(
                                                          "return.sub folio"
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
                                    _c("return-transfer", {
                                      attrs: { data: _vm.listReturnTransfer },
                                      on: {
                                        selected: function (value) {
                                          return (_vm.vReturn.selected = value)
                                        },
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("vs-divider", [
                                      _vm._v(
                                        _vm._s(_vm.$t("transaction.option"))
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vs-row",
                                      [
                                        _c(
                                          "vs-radio",
                                          {
                                            attrs: { "vs-value": "1" },
                                            model: {
                                              value: _vm.vReturn.type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vReturn,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "vReturn.type",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.returnTransaction"
                                                  )
                                                ) +
                                                "\n                                            "
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
                                        _c(
                                          "vs-radio",
                                          {
                                            attrs: { "vs-value": "2" },
                                            model: {
                                              value: _vm.vReturn.type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vReturn,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "vReturn.type",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.removeAutoRouting"
                                                  )
                                                ) +
                                                "\n                                            "
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
                                        _c(
                                          "vs-radio",
                                          {
                                            attrs: { "vs-value": "3" },
                                            model: {
                                              value: _vm.vReturn.type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vReturn,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "vReturn.type",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "transaction.removeTransactionAndAutoRouting"
                                                  )
                                                ) +
                                                "\n                                            "
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
          title: "",
          width: 600,
          active: _vm.modalPackage,
          idButton1: "button-save-package-form",
          buttonDisabled1: _vm.btnPakcageDisabled,
        },
        on: {
          button1: _vm.handleSavePackage,
          close: function (val) {
            return (_vm.modalPackage = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "div",
                  { ref: "form" },
                  [
                    _c(
                      "vs-row",
                      {
                        class: _vm.global.formConfig.rowMarginBottom,
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-between",
                        },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "wrap-form-select w-full required" },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(
                                  _vm._s(_vm.$t("transaction.businessSource"))
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
                                    reduce: function (val) {
                                      return val.code
                                    },
                                    options: _vm.dlPackage.business_source,
                                  },
                                  on: {
                                    input: function ($event) {
                                      return _vm.getPackageLookup()
                                    },
                                  },
                                  model: {
                                    value: _vm.vPackage.business_source_code,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vPackage,
                                        "business_source_code",
                                        $$v
                                      )
                                    },
                                    expression: "vPackage.business_source_code",
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
                        class: _vm.global.formConfig.rowMarginBottom,
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
                                  _vm._s(_vm.$t("transaction.commissionType"))
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
                                    reduce: function (val) {
                                      return val.code
                                    },
                                    options: _vm.dlPackage.commission_type,
                                  },
                                  model: {
                                    value: _vm.vPackage.commission_type_code,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vPackage,
                                        "commission_type_code",
                                        $$v
                                      )
                                    },
                                    expression: "vPackage.commission_type_code",
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
                              "wrap-form-select w-full md:w-1/2 required",
                          },
                          [
                            _c(
                              "vs-row",
                              [
                                _c("input-number", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t(
                                      "transaction.commissionValue"
                                    ),
                                  },
                                  model: {
                                    value: _vm.vPackage.commission_value,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vPackage,
                                        "commission_value",
                                        $$v
                                      )
                                    },
                                    expression: "vPackage.commission_value",
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
                        class: _vm.global.formConfig.rowMarginBottom,
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
                                _vm._v(_vm._s(_vm.$t("transaction.account"))),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: { disabled: "", id: "form-select" },
                                  model: {
                                    value: _vm.vPackage.account,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vPackage, "account", $$v)
                                    },
                                    expression: "vPackage.account",
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
                              "wrap-form-select w-full md:w-1/2 required",
                          },
                          [
                            _c("vs-row", [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("transaction.package"))),
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
                                    label: "name",
                                    resetOnOptionsChange: true,
                                    options: _vm.dlPackage.package,
                                    name: "package",
                                    "data-vv-scope": "package",
                                  },
                                  on: { input: _vm.handleChangePackage },
                                  model: {
                                    value: _vm.vPackage.package,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vPackage, "package", $$v)
                                    },
                                    expression: "vPackage.package",
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
                                          _vm.errors.has("package.package"),
                                        expression:
                                          "errors.has('package.package')",
                                      },
                                    ],
                                    staticClass: "error-text text-danger",
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("package.package")
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
                        class: _vm.global.formConfig.rowMarginBottom,
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-around",
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
                          staticClass: "number-input md:w-4/12",
                          attrs: {
                            label: _vm.$t("transaction.adult"),
                            min: "1",
                            name: "adult",
                            "data-vv-scope": "package",
                          },
                          model: {
                            value: _vm.vPackage.adult,
                            callback: function ($$v) {
                              _vm.$set(_vm.vPackage, "adult", $$v)
                            },
                            expression: "vPackage.adult",
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
                                value: _vm.errors.has("package.adult"),
                                expression: "errors.has('package.adult')",
                              },
                            ],
                            staticClass: "error-text text-danger",
                          },
                          [_vm._v(_vm._s(_vm.errors.first("package.adult")))]
                        ),
                        _vm._v(" "),
                        _c("vs-input-number", {
                          staticClass: "number-input md:w-4/12",
                          attrs: {
                            label: _vm.$t("transaction.child"),
                            min: "1",
                          },
                          model: {
                            value: _vm.vPackage.child,
                            callback: function ($$v) {
                              _vm.$set(_vm.vPackage, "child", $$v)
                            },
                            expression: "vPackage.child",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      {
                        class: _vm.global.formConfig.rowMarginBottom,
                        attrs: {
                          "vs-type": "flex",
                          "vs-justify": "space-around",
                        },
                      },
                      [
                        _c("input-number", {
                          staticClass: "w-full md:w-4/12",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("transaction.quantity"),
                          },
                          model: {
                            value: _vm.vPackage.quantity,
                            callback: function ($$v) {
                              _vm.$set(_vm.vPackage, "quantity", $$v)
                            },
                            expression: "vPackage.quantity",
                          },
                        }),
                        _vm._v(" "),
                        _c("input-number", {
                          staticClass: "w-full md:w-4/12",
                          attrs: {
                            disabled: "",
                            label: _vm.$t("transaction.amount"),
                          },
                          model: {
                            value: _vm.vPackage.amount,
                            callback: function ($$v) {
                              _vm.$set(_vm.vPackage, "amount", $$v)
                            },
                            expression: "vPackage.amount",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider", [
                      _vm._v(_vm._s(_vm.$t("transaction.breakdown"))),
                    ]),
                    _vm._v(" "),
                    _c("package-breakdown", {
                      attrs: { data: _vm.packageBreakdownData },
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
      _c("update-transaction", {
        ref: "updateType",
        attrs: {
          formType: _vm.global.formType.transaction,
          isShowCorrectionOrProperties: _vm.isShowProperties,
        },
        on: { refreshData: _vm.getTransactionList },
      }),
      _vm._v(" "),
      _c("properties", { ref: "properties" }),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: {
            title: _vm.$t("transaction.correction"),
            active: _vm.correctionPrompt,
          },
          on: {
            cancel: function ($event) {
              _vm.newCorrectionValue = 0
            },
            accept: _vm.correctionData,
            "update:active": function ($event) {
              _vm.correctionPrompt = $event
            },
          },
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _c("input-number", {
                staticClass: "w-full",
                attrs: {
                  disabled: "",
                  label: _vm.$t("transaction.correctionAmountBefore"),
                },
                model: {
                  value: _vm.oldCorrectionValue,
                  callback: function ($$v) {
                    _vm.oldCorrectionValue = $$v
                  },
                  expression: "oldCorrectionValue",
                },
              }),
              _vm._v(" "),
              _c("input-number", {
                staticClass: "w-full",
                attrs: { label: _vm.$t("transaction.correctionAmountAfter") },
                model: {
                  value: _vm.newCorrectionValue,
                  callback: function ($$v) {
                    _vm.newCorrectionValue = $$v
                  },
                  expression: "newCorrectionValue",
                },
              }),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("advanced-correction", {
        ref: "advancedCorrection",
        on: { refreshData: _vm.getTransactionList },
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
          acceptReason: _vm.acceptReason,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4& ***!
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
  return _c(
    "div",
    [
      _c("dialog-prompt", {
        attrs: {
          button1: "",
          title: "",
          width: 800,
          active: _vm.activeModal,
          idButton1: "button-save",
          buttonDisabled1: _vm.btnSaveDisabled,
        },
        on: {
          button1: function ($event) {
            return _vm.handleSave()
          },
          close: function (val) {
            return (_vm.activeModal = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "vs-row",
                  {
                    attrs: {
                      "vs-type": "flex",
                      "vs-align": "center",
                      "vs-justify": "space-between",
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "w-32" },
                      [
                        _c("vs-row", [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("transaction.auditDate"))),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("date-picker", {
                          staticClass: "w-full",
                          attrs: {
                            disabled: "",
                            clearable: false,
                            type: "date",
                            confirm: "",
                            "confirm-text": "ok",
                            lang: _vm.$t("lang"),
                            "value-type": "YYYY-MM-DD",
                            format: "DD/MM/YYYY",
                            label: "name",
                          },
                          model: {
                            value: _vm.vModel.audit_date,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModel, "audit_date", $$v)
                            },
                            expression: "vModel.audit_date",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("input-number", {
                      staticClass: "w-48",
                      attrs: {
                        disabled: "",
                        label: _vm.$t("transaction.totalAmountBefore"),
                      },
                      model: {
                        value: _vm.vModel.amount,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModel, "amount", $$v)
                        },
                        expression: "vModel.amount",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-radio",
                      {
                        staticClass: "mr-1",
                        attrs: { "vs-value": "true" },
                        on: {
                          change: function ($event) {
                            _vm.changedData.fixed_total_amount =
                              _vm.isFixedAmount
                          },
                        },
                        model: {
                          value: _vm.isFixedAmount,
                          callback: function ($$v) {
                            _vm.isFixedAmount = $$v
                          },
                          expression: "isFixedAmount",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("transaction.fixedTotalAmount")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-radio",
                      {
                        staticClass: "mr-1",
                        attrs: { "vs-value": "false" },
                        on: {
                          change: function ($event) {
                            _vm.changedData.fixed_total_amount =
                              _vm.isFixedAmount
                          },
                        },
                        model: {
                          value: _vm.isFixedAmount,
                          callback: function ($$v) {
                            _vm.isFixedAmount = $$v
                          },
                          expression: "isFixedAmount",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("transaction.changeTotalAmount")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.handleReset()
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("button.reset")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-row",
                  { staticClass: "mt-2" },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.global.themeAgGrid,
                      style: _vm.global.styleAgGridFrame1,
                      attrs: {
                        gridOptions: _vm.gridOptions,
                        columnDefs: _vm.columnDefs,
                        rowData: _vm.rowData,
                        stopEditingWhenGridLosesFocus: true,
                        suppressRowClickSelection: true,
                        frameworkComponents: _vm.frameworkComponents,
                        rowSelection: _vm.rowSelection,
                        defaultColDef: _vm.global.colDef1,
                        pinnedBottomRowData: _vm.totalAmountAfter,
                      },
                      on: {
                        "grid-ready": _vm.onGridReady,
                        cellEditingStopped: _vm.handleValueChanged,
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-search-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: {
                "vs-align": "start",
                "vs-type": "flex",
                "vs-justify": "space-between",
                "vs-w": "12",
              },
            },
            [
              _c(
                "vs-col",
                { staticClass: "lg:w-4/12 search-part" },
                [
                  _c(
                    "vs-row",
                    {
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
                          attrs: { "vs-lg": "5", "vs-md": "5", "vs-xs": "12" },
                        },
                        [
                          _c("v-select", {
                            staticClass: "transaction-search",
                            attrs: {
                              clearable: false,
                              reduce: function (searchOption) {
                                return searchOption.code
                              },
                              label: "name",
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
                          attrs: { "vs-lg": "7", "vs-md": "7", "vs-xs": "12" },
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
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "filter-checkbox",
                  attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" },
                },
                [
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vPossession,
                        callback: function ($$v) {
                          _vm.vPossession = $$v
                        },
                        expression: "vPossession",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("transaction.filter.possessionOnly"))
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vTransfered,
                        callback: function ($$v) {
                          _vm.vTransfered = $$v
                        },
                        expression: "vTransfered",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("transaction.filter.showTransfered"))
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
                  staticClass: "filter-checkbox",
                  attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" },
                },
                [
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vCorrection,
                        callback: function ($$v) {
                          _vm.vCorrection = $$v
                        },
                        expression: "vCorrection",
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("transaction.filter.showCorrection"))
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-checkbox",
                    {
                      on: { change: _vm.onRefreshData },
                      model: {
                        value: _vm.vVoid,
                        callback: function ($$v) {
                          _vm.vVoid = $$v
                        },
                        expression: "vVoid",
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("transaction.filter.showVoid")))]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { "vs-lg": "2", "vs-md": "2", "vs-xs": "12" } },
                [
                  _c("v-select", {
                    staticClass: "transaction-search",
                    attrs: {
                      clearable: false,
                      reduce: function (data) {
                        return data.code
                      },
                      label: "name",
                      options: _vm.subFolio,
                    },
                    on: { input: _vm.onRefreshData },
                    model: {
                      value: _vm.vSubFolio,
                      callback: function ($$v) {
                        _vm.vSubFolio = $$v
                      },
                      expression: "vSubFolio",
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-footer mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: {
                "vs-type": "flex",
                "vs-align": "center",
                "vs-justify": "space-between",
              },
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4",
                  },
                },
                [
                  _c("vs-textarea", {
                    attrs: {
                      disabled: "",
                      label: _vm.$t("transaction.footer.billInstruction"),
                      height: "100px",
                    },
                    model: {
                      value: _vm.data.bill_instruction,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "bill_instruction", $$v)
                      },
                      expression: "data.bill_instruction",
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
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4",
                  },
                },
                [
                  _c("vs-textarea", {
                    attrs: {
                      disabled: "",
                      label: _vm.$t("transaction.footer.notes"),
                      height: "100px",
                    },
                    model: {
                      value: _vm.data.notes,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "notes", $$v)
                      },
                      expression: "data.notes",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  staticClass: "balance",
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.footer.totalCharge"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.debit))
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.footer.totalDeposit"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.credit))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("vs-divider"),
                    ],
                    1
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.footer.balance"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("currency_format")(_vm.data.balance))
                        ),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "transaction-guest-information-bar mb-3" },
    [
      _c(
        "vx-card",
        { staticClass: "box", attrs: { title: "Stay Information" } },
        [
          _c(
            "vs-row",
            {
              staticClass: "box-body",
              attrs: { "vs-type": "flex", "vs-justify": "flex-start" },
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "2",
                    "vs-lg": "2",
                  },
                },
                [
                  _c(
                    "vs-row",
                    {
                      staticClass: "folio-number",
                      attrs: {
                        "vs-align": "bottom",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [_c("span", [_vm._v("F-" + _vm._s(_vm.value.number))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      staticClass: "room-number",
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _vm.value.room_number
                        ? _c("span", [
                            _vm._v("R-" + _vm._s(_vm.value.room_number)),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "4",
                  },
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [_c("h6", [_vm._v(_vm._s(_vm.value.full_name))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.address"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.address))]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.phone"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.phone1))]),
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.group"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(": " + _vm._s(_vm.value.group))]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.guestType"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(": " + _vm._s(_vm.value.guest_type_code)),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("h5", [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.header.stayInformation"))
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.header.arrivalDate"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " + _vm._s(_vm._f("fulldate")(_vm.value.arrival))
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.header.departureDate"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " + _vm._s(_vm._f("fulldate")(_vm.value.departure))
                        ),
                      ]),
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.header.adultOrChild"))
                        ),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          ": " +
                            _vm._s(_vm.value.adult) +
                            " / " +
                            _vm._s(_vm.value.child)
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.roomType"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(": " + _vm._s(_vm.value.room_type_code)),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-xs": "12",
                    "vs-sm": "12",
                    "vs-md": "4",
                    "vs-lg": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("h5", [
                        _vm._v(
                          _vm._s(_vm.$t("transaction.header.rateInformation"))
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.rateCode"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(" " + _vm._s(_vm.value.room_rate_code)),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.rateAmount"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("number")(_vm.value.room_rate_amount))
                        ),
                      ]),
                    ]
                  ),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.discount"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " +
                            _vm._s(_vm._f("number")(_vm.value.discount_amount))
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-type": "flex",
                        "vs-justify": "space-between",
                        "vs-w": "12",
                      },
                    },
                    [
                      _c("label", { staticClass: "title-width" }, [
                        _vm._v(_vm._s(_vm.$t("transaction.header.roomCharge"))),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(
                          " " + _vm._s(_vm._f("number")(_vm.value.room_charge))
                        ),
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content-header navigation-header" },
    [
      _c(
        "vs-row",
        {
          staticClass: "navigation mb-2",
          attrs: {
            "vs-w": "12",
            "vs-type": "flex",
            "vs-justify": "space-between",
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "navigation-back",
              attrs: { id: "btn", "vs-sm": "12", "vs-justify": "flex-start" },
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "w-full",
                  attrs: { color: "black", icon: "keyboard_backspace" },
                  on: {
                    click: function ($event) {
                      return _vm.$emit("back")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("button.back")))]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "navigation-transaction" },
            [
              _c(
                "vs-col",
                { attrs: { id: "btn", "vs-sm": "12" } },
                [
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "w-full dropdown",
                      attrs: { "vs-trigger-click": true },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: { "vs-justify": "flex-end", color: "primary" },
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/print_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.print"))),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              attrs: { disabled: !_vm.access.printFolio },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("printFolio")
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/print_icon24.png",
                                },
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.$t("transaction.menu.printFolio")
                                  ) +
                                  "\n                        "
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
              _vm.isFolioOpen
                ? _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-type": "flex",
                        "vs-align": "center",
                        id: "btn",
                        "vs-sm": "12",
                      },
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled: !_vm.access.checkOut,
                            "vs-justify": "flex-end",
                            color: "danger",
                            type: "filled",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("checkOut")
                            },
                          },
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/check_out_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.checkOut"))),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolioOpen
                ? _c(
                    "vs-col",
                    { attrs: { id: "btn", "vs-sm": "12" } },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "w-full",
                          attrs: {
                            disabled:
                              _vm.isFolioOpen == false || !_vm.access.transfer,
                            "vs-justify": "flex-end",
                            color: "warning",
                            type: "filled",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.$emit("transfer")
                            },
                          },
                        },
                        [
                          _c("img", {
                            attrs: {
                              border: "0",
                              width: "16",
                              height: "16",
                              src: "/images/icons/transfer_icon24.png",
                            },
                          }),
                          _vm._v(_vm._s(_vm.$t("button.transfer"))),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-col",
                { attrs: { id: "btn", "vs-type": "flex", "vs-sm": "12" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "btn-left-drop",
                      attrs: {
                        disabled:
                          !_vm.access.cash &&
                          !_vm.access.card &&
                          !_vm.access.directBill &&
                          !_vm.access.otherPayment,
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("payment")
                        },
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          border: "0",
                          width: "16",
                          height: "16",
                          src: "/images/icons/other_payment_icon24.png",
                        },
                      }),
                      _vm._v(_vm._s(_vm.$t("button.payment"))),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "dropdown",
                      attrs: { "vs-trigger-click": true },
                    },
                    [
                      _c("vs-button", {
                        staticClass: "btn-drop dropdown-toogle",
                        attrs: {
                          disabled:
                            !_vm.access.cash &&
                            !_vm.access.card &&
                            !_vm.access.directBill &&
                            !_vm.access.otherPayment,
                          "data-toogle": "con-vs-dropdown--menu",
                          type: "filled",
                          color: "success",
                          icon: "expand_more",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              attrs: { disabled: !_vm.access.cashRefund },
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("refund")
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/cash_refund_icon24.png",
                                },
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("button.cashRefund")) +
                                  "\n                        "
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
                "vs-col",
                { attrs: { id: "btn-last", "vs-type": "flex", "vs-sm": "12" } },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "btn-left-drop",
                      attrs: {
                        disabled: !_vm.access.charge,
                        "vs-justify": "flex-end",
                        color: "success",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.$emit("charge")
                        },
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          border: "0",
                          width: "16",
                          height: "16",
                          src: "/images/icons/charge_icon24.png",
                        },
                      }),
                      _vm._v(_vm._s(_vm.$t("button.charge"))),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "dropdown",
                      attrs: {
                        disabled: !_vm.access.charge,
                        "vs-trigger-click": true,
                      },
                    },
                    [
                      _c("vs-button", {
                        staticClass: "btn-drop dropdown-toogle",
                        attrs: {
                          disabled: !_vm.access.charge,
                          "data-toogle": "con-vs-dropdown--menu",
                          type: "filled",
                          color: "success",
                          icon: "expand_more",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("package")
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/package_icon24.png",
                                },
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("button.package")) +
                                  "\n                        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.$emit("apTransaction")
                                },
                              },
                            },
                            [
                              _c("img", {
                                staticClass: "mr-1",
                                attrs: {
                                  border: "0",
                                  width: "16",
                                  height: "16",
                                  src: "/images/icons/ap_transaction_icon24.png",
                                },
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("button.apTransaction")) +
                                  "\n                        "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.folioType == _vm.global.folioType.guestFolio
                            ? _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function ($event) {
                                      return _vm.$emit("roomCharge")
                                    },
                                  },
                                },
                                [
                                  _c("img", {
                                    staticClass: "mr-1",
                                    attrs: {
                                      border: "0",
                                      width: "16",
                                      height: "16",
                                      src: "/images/icons/autopost_icon24.png",
                                    },
                                  }),
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.$t("button.autoPostingRoomCharge")
                                      ) +
                                      "\n                        "
                                  ),
                                ]
                              )
                            : _vm._e(),
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
          suppressRowClickSelection: true,
          rowSelection: _vm.rowSelection,
          defaultColDef: _vm.global.colDef1,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      _c("dialog-prompt", {
        attrs: {
          "scroll-off": "",
          title: _vm.title,
          width: 80,
          active: _vm.modalMain,
        },
        on: {
          close: function (val) {
            return (_vm.modalMain = val)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "body",
            fn: function () {
              return [
                _c(
                  "div",
                  { staticClass: "flex" },
                  [
                    _c(
                      "vx-card",
                      {
                        staticClass: "md:w-1/3",
                        attrs: {
                          title: _vm.$t("transaction.detailTransaction"),
                        },
                      },
                      [
                        _c(
                          _vm.scrollbarTag,
                          {
                            tag: "component",
                            staticClass: "scroll-area-popup-form pt-2",
                            attrs: {
                              settings: _vm.global.perfectScrollbarSettings,
                            },
                          },
                          [
                            _c(
                              "vs-row",
                              {
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "space-between",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "mr-2",
                                  attrs: {
                                    label: _vm.$t("transaction.transactionID"),
                                  },
                                  model: {
                                    value: _vm.vInformation.id_log,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "id_log", $$v)
                                    },
                                    expression: "vInformation.id_log",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  attrs: {
                                    label: _vm.$t("transaction.userID"),
                                  },
                                  model: {
                                    value: _vm.vInformation.user_id,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "user_id", $$v)
                                    },
                                    expression: "vInformation.user_id",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.directBillTo"),
                                  },
                                  model: {
                                    value: _vm.vInformation.company,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "company", $$v)
                                    },
                                    expression: "vInformation.company",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", [
                              _vm._v(
                                _vm._s(_vm.$t("transaction.folioInformation"))
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-align": "center",
                                  "vs-justify": "space-between",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label: _vm.$t("transaction.folioNumber"),
                                  },
                                  model: {
                                    value: _vm.vInformation.folio_number,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "folio_number",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.folio_number",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label: _vm.$t("transaction.subFolio"),
                                  },
                                  model: {
                                    value: _vm.vInformation.sub_folio,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "sub_folio",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.sub_folio",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label: _vm.$t("transaction.roomNumber"),
                                  },
                                  model: {
                                    value: _vm.vInformation.room_number,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "room_number",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.room_number",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.guestName"),
                                  },
                                  model: {
                                    value: _vm.vInformation.full_name,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "full_name",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.full_name",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", [
                              _vm._v(_vm._s(_vm.$t("transaction.belongsTo"))),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "space-between",
                                },
                              },
                              [
                                _c("vs-input", {
                                  attrs: {
                                    label: _vm.$t("transaction.folioNumber"),
                                  },
                                  model: {
                                    value: _vm.vInformation.belongs_to,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "belongs_to",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.belongs_to",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  attrs: {
                                    label: _vm.$t("transaction.roomNumber"),
                                  },
                                  model: {
                                    value:
                                      _vm.vInformation.room_number_original,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "room_number_original",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "vInformation.room_number_original",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.guestName"),
                                  },
                                  model: {
                                    value: _vm.vInformation.full_name_origin,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "full_name_origin",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.full_name_origin",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-divider", [
                              _vm._v(_vm._s(_vm.$t("transaction.information"))),
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.account"),
                                  },
                                  model: {
                                    value: _vm.vInformation.account,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "account", $$v)
                                    },
                                    expression: "vInformation.account",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.subDepartment"),
                                  },
                                  model: {
                                    value: _vm.vInformation.sub_department,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "sub_department",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.sub_department",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "space-between",
                                },
                              },
                              [
                                _c("input-number", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label:
                                      _vm.$t("transaction.amount") +
                                      "  " +
                                      _vm.vInformation.default_currency_code,
                                  },
                                  model: {
                                    value: _vm.vInformation.total_amount,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "total_amount",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.total_amount",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: { label: _vm.$t("transaction.type") },
                                  model: {
                                    value: _vm.vInformation.type,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "type", $$v)
                                    },
                                    expression: "vInformation.type",
                                  },
                                }),
                                _vm._v(" "),
                                _c("input-number", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label: _vm.$t("transaction.exchangeRate"),
                                  },
                                  model: {
                                    value: _vm.vInformation.exchange_rate,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "exchange_rate",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.exchange_rate",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "space-between",
                                },
                              },
                              [
                                _c("input-number", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label:
                                      _vm.$t("transaction.amount") +
                                      "  " +
                                      _vm.vInformation.currency_code,
                                  },
                                  model: {
                                    value:
                                      _vm.vInformation.total_amount_foreign,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "total_amount_foreign",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "vInformation.total_amount_foreign",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: { label: _vm.$t("transaction.type") },
                                  model: {
                                    value: _vm.vInformation.type,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "type", $$v)
                                    },
                                    expression: "vInformation.type",
                                  },
                                }),
                                _vm._v(" "),
                                _c("vs-input", {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    label: _vm.$t("transaction.auditDate"),
                                  },
                                  model: {
                                    value: _vm.vInformation.audit_date,
                                    callback: function ($$v) {
                                      _vm.$set(
                                        _vm.vInformation,
                                        "audit_date",
                                        $$v
                                      )
                                    },
                                    expression: "vInformation.audit_date",
                                  },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-row",
                              {
                                staticClass: "w-full",
                                class: _vm.global.formConfig.rowMarginBottom,
                                attrs: {
                                  "vs-type": "flex",
                                  "vs-justify": "flex-start",
                                },
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "w-full",
                                  attrs: {
                                    label: _vm.$t("transaction.remark"),
                                  },
                                  model: {
                                    value: _vm.vInformation.remark,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.vInformation, "remark", $$v)
                                    },
                                    expression: "vInformation.remark",
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
                      "vx-card",
                      {
                        staticClass: "md:w-2/3",
                        attrs: { title: _vm.$t("transaction.breakdownDetail") },
                      },
                      [
                        _c(
                          _vm.scrollbarTag,
                          {
                            tag: "component",
                            staticClass: "scroll-area-popup-form pt-2",
                            attrs: {
                              settings: _vm.global.perfectScrollbarSettings,
                            },
                          },
                          [
                            _c("ag-grid-vue", {
                              class: _vm.global.themeAgGrid,
                              style: _vm.global.styleAgGridFrame3,
                              attrs: {
                                pagination: "true",
                                paginationPageSize: _vm.paginationPageSize,
                                enableRangeSelection: true,
                                gridOptions: _vm.gridOptions,
                                context: _vm.context,
                                columnDefs: _vm.columnDefs,
                                frameworkComponents: _vm.frameworkComponents,
                                rowData: _vm.rowData,
                                defaultColDef: _vm.global.defColDef,
                                getContextMenuItems: _vm.getContextMenu,
                                animateRows: _vm.global.animatedRows,
                                suppressDragLeaveHidesColumns: true,
                                suppressMakeColumnVisibleAfterUnGroup: true,
                                rowGroupPanelShow: _vm.rowGroupPanelShow,
                                enableCellChangeFlash: true,
                                rowSelection: _vm.rowSelection,
                                statusBar: _vm.statusBar,
                                pinnedBottomRowData: _vm.bottomRowTotal,
                                rowClassRules: _vm.rowClassRules,
                              },
                              on: {
                                "grid-ready": _vm.onGridReady,
                                rowDoubleClicked: _vm.handleRowDobleClicked1,
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
                _c("update-dialog", {
                  ref: "updateType",
                  attrs: {
                    formType: _vm.global.formType.transaction,
                    isShowCorrectionOrProperties: true,
                  },
                  on: {
                    refreshData: function ($event) {
                      return _vm.getProperties1(_vm.idLog)
                    },
                  },
                }),
                _vm._v(" "),
                _c("dialog-prompt", {
                  attrs: {
                    "scroll-off": "",
                    child: 1,
                    title: _vm.title2,
                    width: 80,
                    active: _vm.modalChild,
                  },
                  on: {
                    close: function (val) {
                      return (_vm.modalChild = val)
                    },
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "body",
                      fn: function () {
                        return [
                          _c(
                            "div",
                            { staticClass: "flex" },
                            [
                              _c(
                                "vx-card",
                                {
                                  staticClass: "md:w-1/3",
                                  attrs: {
                                    title: _vm.$t(
                                      "transaction.detailTransaction"
                                    ),
                                  },
                                },
                                [
                                  _c(
                                    _vm.scrollbarTag,
                                    {
                                      tag: "component",
                                      staticClass:
                                        "scroll-area-popup-form pt-2",
                                      attrs: {
                                        settings:
                                          _vm.global.perfectScrollbarSettings,
                                      },
                                    },
                                    [
                                      _c(
                                        "vs-row",
                                        {
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-between",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "mr-2",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.transactionID"
                                              ),
                                            },
                                            model: {
                                              value: _vm.vInformation2.id_log,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "id_log",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.id_log",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            attrs: {
                                              label:
                                                _vm.$t("transaction.userID"),
                                            },
                                            model: {
                                              value: _vm.vInformation2.user_id,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "user_id",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.user_id",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.directBillTo"
                                              ),
                                            },
                                            model: {
                                              value: _vm.vInformation2.company,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "company",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.company",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-divider", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "transaction.folioInformation"
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-align": "center",
                                            "vs-justify": "space-between",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.folioNumber"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.folio_number,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "folio_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.folio_number",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.subFolio"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.sub_folio,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "sub_folio",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.sub_folio",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.roomNumber"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.room_number,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "room_number",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.room_number",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.guestName"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.full_name,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "full_name",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.full_name",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-divider", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("transaction.belongsTo")
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-between",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.folioNumber"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.belongs_to,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "belongs_to",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.belongs_to",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.roomNumber"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2
                                                  .room_number_original,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "room_number_original",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.room_number_original",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.guestName"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2
                                                  .full_name_origin,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "full_name_origin",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.full_name_origin",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-divider", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("transaction.information")
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.account"
                                              ),
                                            },
                                            model: {
                                              value: _vm.vInformation2.account,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "account",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.account",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.subDepartment"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2
                                                  .sub_department,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "sub_department",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.sub_department",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-between",
                                          },
                                        },
                                        [
                                          _c("input-number", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label:
                                                _vm.$t("transaction.amount") +
                                                "  " +
                                                _vm.vInformation2
                                                  .default_currency_code,
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.total_amount,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "total_amount",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.total_amount",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t("transaction.type"),
                                            },
                                            model: {
                                              value: _vm.vInformation2.type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "vInformation2.type",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("input-number", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.exchangeRate"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.exchange_rate,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "exchange_rate",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.exchange_rate",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "space-between",
                                          },
                                        },
                                        [
                                          _c("input-number", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label:
                                                _vm.$t("transaction.amount") +
                                                "  " +
                                                _vm.vInformation2.currency_code,
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2
                                                  .total_amount_foreign,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "total_amount_foreign",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.total_amount_foreign",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t("transaction.type"),
                                            },
                                            model: {
                                              value: _vm.vInformation2.type,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "type",
                                                  $$v
                                                )
                                              },
                                              expression: "vInformation2.type",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("vs-input", {
                                            staticClass: "md:w-1/3",
                                            attrs: {
                                              label: _vm.$t(
                                                "transaction.auditDate"
                                              ),
                                            },
                                            model: {
                                              value:
                                                _vm.vInformation2.audit_date,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "audit_date",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.audit_date",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-row",
                                        {
                                          staticClass: "w-full",
                                          class:
                                            _vm.global.formConfig
                                              .rowMarginBottom,
                                          attrs: {
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                          },
                                        },
                                        [
                                          _c("vs-input", {
                                            staticClass: "w-full",
                                            attrs: {
                                              label:
                                                _vm.$t("transaction.remark"),
                                            },
                                            model: {
                                              value: _vm.vInformation2.remark,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vInformation2,
                                                  "remark",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vInformation2.remark",
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
                                "vx-card",
                                {
                                  staticClass: "md:w-2/3",
                                  attrs: {
                                    title: _vm.$t(
                                      "transaction.breakdownDetail"
                                    ),
                                  },
                                },
                                [
                                  _c(
                                    _vm.scrollbarTag,
                                    {
                                      tag: "component",
                                      staticClass:
                                        "scroll-area-popup-form pt-2",
                                      attrs: {
                                        settings:
                                          _vm.global.perfectScrollbarSettings,
                                      },
                                    },
                                    [
                                      _c("ag-grid-vue", {
                                        class: _vm.global.themeAgGrid,
                                        style: _vm.global.styleAgGridFrame3,
                                        attrs: {
                                          pagination: "true",
                                          paginationPageSize:
                                            _vm.paginationPageSize,
                                          enableRangeSelection: true,
                                          gridOptions: _vm.gridOptions2,
                                          context: _vm.context,
                                          columnDefs: _vm.columnDefs2,
                                          frameworkComponents:
                                            _vm.frameworkComponents,
                                          rowData: _vm.rowData2,
                                          defaultColDef: _vm.global.defColDef,
                                          getContextMenuItems:
                                            _vm.getContextMenu2,
                                          animateRows: _vm.global.animatedRows,
                                          suppressDragLeaveHidesColumns: true,
                                          suppressMakeColumnVisibleAfterUnGroup: true,
                                          rowGroupPanelShow:
                                            _vm.rowGroupPanelShow,
                                          enableCellChangeFlash: true,
                                          rowSelection: _vm.rowSelection,
                                          statusBar: _vm.statusBar,
                                          pinnedBottomRowData:
                                            _vm.bottomRowTotal,
                                          rowClassRules: _vm.rowClassRules,
                                        },
                                        on: {
                                          "grid-ready": _vm.onGridReady,
                                          rowDoubleClicked:
                                            _vm.handleRowDobleClicked2,
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
                          _c("dialog-prompt", {
                            attrs: {
                              "scroll-off": "",
                              child: 2,
                              title: _vm.title3,
                              width: 500,
                              active: _vm.modalChild2,
                            },
                            on: {
                              close: function (val) {
                                return (_vm.modalChild2 = val)
                              },
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "body",
                                fn: function () {
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "flex" },
                                      [
                                        _c(
                                          "vx-card",
                                          {
                                            staticClass: "w-full",
                                            attrs: {
                                              title: _vm.$t(
                                                "transaction.detailTransaction"
                                              ),
                                            },
                                          },
                                          [
                                            _c(
                                              _vm.scrollbarTag,
                                              {
                                                tag: "component",
                                                staticClass:
                                                  "scroll-area-popup-form pt-2",
                                                attrs: {
                                                  settings:
                                                    _vm.global
                                                      .perfectScrollbarSettings,
                                                },
                                              },
                                              [
                                                _c(
                                                  "vs-row",
                                                  {
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "space-between",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "mr-2",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.transactionID"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .id_log,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "id_log",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.id_log",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.userID"
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .user_id,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "user_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.user_id",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.directBillTo"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .company,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "company",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.company",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("vs-divider", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "transaction.folioInformation"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-align": "center",
                                                      "vs-justify":
                                                        "space-between",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.folioNumber"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .folio_number,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "folio_number",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.folio_number",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.subFolio"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .sub_folio,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "sub_folio",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.sub_folio",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.roomNumber"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .room_number,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "room_number",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.room_number",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.guestName"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .full_name,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "full_name",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.full_name",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("vs-divider", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "transaction.belongsTo"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "space-between",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.folioNumber"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .belongs_to,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "belongs_to",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.belongs_to",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.roomNumber"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .room_number_original,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "room_number_original",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.room_number_original",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.guestName"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .full_name_origin,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "full_name_origin",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.full_name_origin",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("vs-divider", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "transaction.information"
                                                      )
                                                    )
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.account"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .account,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "account",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.account",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.subDepartment"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .sub_department,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "sub_department",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.sub_department",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "space-between",
                                                    },
                                                  },
                                                  [
                                                    _c("input-number", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.amount"
                                                          ) +
                                                          "  " +
                                                          _vm.vInformation3
                                                            .default_currency_code,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .total_amount,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "total_amount",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.total_amount",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.type"
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .type,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "type",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.type",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("input-number", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.exchangeRate"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .exchange_rate,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "exchange_rate",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.exchange_rate",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "space-between",
                                                    },
                                                  },
                                                  [
                                                    _c("input-number", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.amount"
                                                          ) +
                                                          "  " +
                                                          _vm.vInformation3
                                                            .currency_code,
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .total_amount_foreign,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "total_amount_foreign",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.total_amount_foreign",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.type"
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .type,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "type",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.type",
                                                      },
                                                    }),
                                                    _vm._v(" "),
                                                    _c("vs-input", {
                                                      staticClass: "md:w-1/3",
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "transaction.auditDate"
                                                        ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .audit_date,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "audit_date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.audit_date",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "vs-row",
                                                  {
                                                    staticClass: "w-full",
                                                    class:
                                                      _vm.global.formConfig
                                                        .rowMarginBottom,
                                                    attrs: {
                                                      "vs-type": "flex",
                                                      "vs-justify":
                                                        "flex-start",
                                                    },
                                                  },
                                                  [
                                                    _c("vs-input", {
                                                      staticClass: "w-full",
                                                      attrs: {
                                                        label:
                                                          _vm.$t(
                                                            "transaction.remark"
                                                          ),
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.vInformation3
                                                            .remark,
                                                        callback: function (
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.vInformation3,
                                                            "remark",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "vInformation3.remark",
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
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
          suppressRowClickSelection: true,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
          suppressRowClickSelection: true,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3& ***!
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
      _c("ag-grid-vue", {
        class: _vm.global.themeAgGrid,
        style: _vm.global.styleAgGridFrame2,
        attrs: {
          gridOptions: _vm.gridOptions,
          columnDefs: _vm.columnDefs,
          rowData: _vm.data,
          suppressRowClickSelection: true,
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

/***/ "./resources/js/src/views/pages/components/Tracking.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tracking.vue?vue&type=template&id=ba816e6a& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony import */ var _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tracking.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/Tracking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tracking.vue?vue&type=template&id=ba816e6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/Tracking.vue?vue&type=template&id=ba816e6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tracking_vue_vue_type_template_id_ba816e6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties1.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties1.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"handleProperties()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/properties_icon24.png\"/>{{ $t('transaction.menu.properties') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.data.folio_number\" @click=\"handleUpdateType(1)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateSubDepartment') }}</vs-dropdown-item>\n                            <vs-dropdown-item v-if=\"params.data.folio_number && params.data.sub_group_code === global.subGroupAccount.accountPayable\" @click=\"handleUpdateType(4)\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/edit_icon24.png\"/>{{ $t('transaction.menu.updateDirectBillOrCompany') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                </div>\n            ",
  data: function data() {
    return {
      data: ''
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    handleUpdateType: function handleUpdateType(type) {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleUpdateType(this.params.data, type);
      } else {
        this.openUndefinedAlert();
      }
    },
    handleProperties: function handleProperties() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleShowProperties2(this.params.data.id_log);
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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties2.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/action_grid_properties2.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n                <div v-if=\"params.data\" class=\"flex action-button\">\n                    <vs-dropdown vs-trigger-click class=\"cursor-pointer\">\n                        <vs-button :color=\"global.iconActionColor.menuColor\" type=\"flat\"><vs-icon icon=\"menu\" size=\"small\"></vs-icon></vs-button>\n                        <vs-dropdown-menu>\n                            <vs-dropdown-item @click=\"handleProperties()\"><img border=\"0\" width=\"20\" height=\"20\" src=\"/images/icons/properties_icon24.png\"/>{{ $t('transaction.menu.properties') }}</vs-dropdown-item>\n                        </vs-dropdown-menu>\n                    </vs-dropdown>\n                </div>\n            ",
  data: function data() {
    return {
      data: ''
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  methods: {
    handleProperties: function handleProperties() {
      if (this.params.data !== undefined) {
        this.params.context.componentParent.handleShowProperties3(this.params.data.id_log);
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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/checklist2.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/checklist2.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n    <div style=\"margin-top:3px\">\n        <check-square-icon size=\"1.5x\" class=\"custom-class\" v-if=\"data == true\"></check-square-icon>\n        <x-square-icon size=\"1.5x\" class=\"custom-class\" v-else-if=\"data == false\"></x-square-icon>\n    </div>\n         ",
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

/***/ "./resources/js/src/views/pages/components/ag_grid-framework/statusbar_total.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/ag_grid-framework/statusbar_total.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  template: "\n            <div class=\"ag-name-value\">\n                <span class=\"ag-name-value-value\"></span>\n            </div>\n    ",
  data: function data() {
    return {
      count: null
    };
  },
  beforeMount: function beforeMount() {},
  mounted: function mounted() {
    this.onGridReady();
  },
  methods: {
    onGridReady: function onGridReady() {
      this.count = this.params.data;
    }
  }
}));

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaction.vue?vue&type=template&id=2d5146c9& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&");
/* harmony import */ var _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaction.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/Transaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Transaction.vue?vue&type=template&id=2d5146c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/Transaction.vue?vue&type=template&id=2d5146c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Transaction_vue_vue_type_template_id_2d5146c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedCorrection.vue?vue&type=template&id=15c008a4& */ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4&");
/* harmony import */ var _AdvancedCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdvancedCorrection.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdvancedCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedCorrection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedCorrection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedCorrection.vue?vue&type=template&id=15c008a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/AdvancedCorrection.vue?vue&type=template&id=15c008a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedCorrection_vue_vue_type_template_id_15c008a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=template&id=c5bdc3ae& */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&");
/* harmony import */ var _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/FilterHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FilterHeader.vue?vue&type=template&id=c5bdc3ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/FilterHeader.vue?vue&type=template&id=c5bdc3ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterHeader_vue_vue_type_template_id_c5bdc3ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationFooter.vue?vue&type=template&id=44fbda93& */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&");
/* harmony import */ var _InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/InformationFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationFooter.vue?vue&type=template&id=44fbda93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationFooter.vue?vue&type=template&id=44fbda93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationFooter_vue_vue_type_template_id_44fbda93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationHeader.vue?vue&type=template&id=662e3e85& */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&");
/* harmony import */ var _InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/InformationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InformationHeader.vue?vue&type=template&id=662e3e85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/InformationHeader.vue?vue&type=template&id=662e3e85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InformationHeader_vue_vue_type_template_id_662e3e85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=template&id=1388f3c5& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&");
/* harmony import */ var _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=style&index=0&scope=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_style_index_0_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationHeader.vue?vue&type=template&id=1388f3c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/NavigationHeader.vue?vue&type=template&id=1388f3c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationHeader_vue_vue_type_template_id_1388f3c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageBreakdown.vue?vue&type=template&id=0e2d6502& */ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502&");
/* harmony import */ var _PackageBreakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageBreakdown.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageBreakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageBreakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageBreakdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageBreakdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PackageBreakdown.vue?vue&type=template&id=0e2d6502& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/PackageBreakdown.vue?vue&type=template&id=0e2d6502&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageBreakdown_vue_vue_type_template_id_0e2d6502___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/Properties.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/Properties.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Properties.vue?vue&type=template&id=0bc3df37& */ "./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37&");
/* harmony import */ var _Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Properties.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/components/Properties.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Properties.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Properties.vue?vue&type=template&id=0bc3df37& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/components/Properties.vue?vue&type=template&id=0bc3df37&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_0bc3df37___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransferAccount.vue?vue&type=template&id=74ae13a1& */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&");
/* harmony import */ var _TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransferAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransferAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransferAccount.vue?vue&type=template&id=74ae13a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/account/TransferAccount.vue?vue&type=template&id=74ae13a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransferAccount_vue_vue_type_template_id_74ae13a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReturnTransfer.vue?vue&type=template&id=062aed8a& */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&");
/* harmony import */ var _ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReturnTransfer.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReturnTransfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReturnTransfer.vue?vue&type=template&id=062aed8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/return/ReturnTransfer.vue?vue&type=template&id=062aed8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReturnTransfer_vue_vue_type_template_id_062aed8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutomaticRouting.vue?vue&type=template&id=662122d3& */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&");
/* harmony import */ var _AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutomaticRouting.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutomaticRouting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AutomaticRouting.vue?vue&type=template&id=662122d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/transaction/transfer/routing/AutomaticRouting.vue?vue&type=template&id=662122d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AutomaticRouting_vue_vue_type_template_id_662122d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);