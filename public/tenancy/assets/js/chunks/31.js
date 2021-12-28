(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showDialog: false,
      title: '',
      text: '',
      acceptText: '',
      classDialog: '',
      btnDisabled: false,
      showCancelButton: false,
      cancelText: ''
    };
  },
  methods: {
    showDialogWarning: function showDialogWarning(title, text, classDialog) {
      this.title = title, this.text = text;
      this.acceptText = 'Ok';
      this.classDialog = classDialog != null && classDialog != undefined ? classDialog : 'dialog-second';
      this.showDialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/format.js */ "./resources/js/src/utils/format.js");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-tree-halower */ "./node_modules/vue-tree-halower/dist/v2-tree.js");
/* harmony import */ var vue_tree_halower__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/pages/components/report/Template.vue */ "./resources/js/src/views/pages/components/report/Template.vue");
/* harmony import */ var _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/pages/components/DialogSecond.vue */ "./resources/js/src/views/pages/components/DialogSecond.vue");
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");
/* harmony import */ var _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/tools/user-setting/userSetting.js */ "./resources/js/src/api/tools/user-setting/userSetting.js");
/* harmony import */ var _components_report_filter1_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/report-filter1.vue */ "./resources/js/src/views/pages/report/components/report-filter1.vue");
/* harmony import */ var _components_ReportEditor_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ReportEditor.vue */ "./resources/js/src/views/pages/report/components/ReportEditor.vue");
var _components$data$watc;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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












var userSettingResource = new _api_tools_user_setting_userSetting_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_9__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (_components$data$watc = {
  components: {
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    VTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__["VTree"],
    VSelectTree: vue_tree_halower__WEBPACK_IMPORTED_MODULE_5__["VSelectTree"],
    Report: _views_pages_components_report_Template_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    ReportFilter1: _components_report_filter1_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    ReportEditor: _components_ReportEditor_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    DialogSecond: _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      // Report Editor
      modeDataEditor: 0,
      isTemplateSystemDefault: true,
      vModelLookUpIdTemplate: 0,
      modalTitle: '',
      showModal: false,
      showModalSecond: false,
      firstDialog: 'firstDialog',
      secondDialog: 'secondDialog',
      reportCodeInt: 0,
      reportFileName: '',
      searchword: '',
      treeData: [],
      // PopUp
      vModelOptions: 1,
      vModelDateSelected: '',
      vModelDateStart: '',
      vModelDateEnd: '',
      vModelLookUp: {},
      vModelReservation: '',
      dataLookUpOptionDate: [],
      dataLookUpTemplate: [],
      dataLookUpYear: [],
      dataLookUpWeek: [],
      dataLookUpMonth: [{
        text: '1',
        value: '1'
      }, {
        text: '2',
        value: '2'
      }, {
        text: '3',
        value: '3'
      }, {
        text: '4',
        value: '4'
      }, {
        text: '5',
        value: '5'
      }, {
        text: '6',
        value: '6'
      }, {
        text: '7',
        value: '7'
      }, {
        text: '8',
        value: '8'
      }, {
        text: '9',
        value: '9'
      }, {
        text: '10',
        value: '10'
      }, {
        text: '11',
        value: '11'
      }, {
        text: '12',
        value: '12'
      }],
      dataLookUpQuarter: [{
        text: 'I',
        value: '1'
      }, {
        text: 'II',
        value: '2'
      }, {
        text: 'III',
        value: '3'
      }, {
        text: 'IV',
        value: '4'
      }],
      dataLookUpSemester: [{
        text: 'I',
        value: '1'
      }, {
        text: 'II',
        value: '2'
      }],
      query: {
        Condition1: '',
        Condition2: '',
        Condition3: '',
        Condition4: '',
        Condition5: '',
        Condition6: '',
        Condition7: '',
        Condition8: '',
        Condition9: ''
      },
      optionDisableTemplate: false,
      optionDisable: {
        date: true,
        range: true,
        week: true,
        month: true,
        quarter: true,
        semester: true,
        year: true
      },
      resolutionWidth: 0,
      element: 0,
      // User Access
      editReportAccess: '',
      exportReportAccess: '',
      customizeReportAccess: ''
    };
  },
  watch: {
    vModelLookUpIdTemplate: function vModelLookUpIdTemplate() {
      this.setVariableIsSystem();
    }
  },
  beforeMount: function beforeMount() {},
  methods: {
    previewReport: function previewReport() {
      if (this.reportCodeInt > 1000) {
        this.query.Condition1 = '';
        this.query.Condition2 = '';
        this.query.Condition3 = '';
        this.query.Condition4 = '';
        this.query.Condition5 = '';
        this.query.Condition6 = '';
        this.query.Condition7 = '';
        this.query.Condition8 = '';
        this.query.Condition9 = '';
        this.getFilterString(this.reportCodeInt);

        if (this.optionDisableTemplate) {
          // manual Template
          this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
        } else {
          // Auto template From Query
          var newTabReport = this.$router.resolve({
            path: "/report/preview?reportId=".concat(this.reportCodeInt, "&templateID=").concat(this.vModelLookUpIdTemplate, "&dateDescription=").concat(this.getDateDescription(), "&queryCondition1=").concat(this.query.Condition1, "&queryCondition2=").concat(this.query.Condition2, "&queryCondition3=").concat(this.query.Condition3, "&queryCondition4=").concat(this.query.Condition4, "&queryCondition5=").concat(this.query.Condition5, "&queryCondition6=").concat(this.query.Condition6, "&queryCondition7=").concat(this.query.Condition7, "&queryCondition8=").concat(this.query.Condition8, "&queryCondition9=").concat(this.query.Condition9)
          });
          window.open(newTabReport.href, '_blank');
        }
      } else this.$refs.dialogsecond.showDialogWarning(this.$t('message.informationTitle'), this.$t('message.reportFailedLoadData'));
    },
    addDialogCloseButton: function addDialogCloseButton(elementID) {
      if (this.global.dialog.typeDialog === 'confirm') {
        var firstDialog = document.getElementById(elementID);

        if (firstDialog !== null) {
          var headerDialog = firstDialog.getElementsByClassName('vs-dialog');
          var vm = this;
          var newElement = document.createElement('i');
          newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
          newElement.id = elementID;
          newElement.innerText = 'close';
          newElement.addEventListener('click', function () {
            vm.showModal = vm.showModalSecond;
            vm.showModalSecond = false;
          });
          headerDialog[0].children[0].appendChild(newElement);
        }
      }
    },
    setVariableIsSystem: function setVariableIsSystem() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$reportResource, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return reportResource.isTemplateSystemDefault({
                  id_log: _this.vModelLookUpIdTemplate
                });

              case 2:
                _yield$reportResource = _context.sent;
                data = _yield$reportResource.data;
                _this.isTemplateSystemDefault = data.is_system == '-1';

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showReportEditor: function showReportEditor(modeDataEditor) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(modeDataEditor == _this2.global.modeData.edit && _this2.isTemplateSystemDefault && _this2.global.userInfo.groupCode != 'SYSTEM')) {
                  _context2.next = 4;
                  break;
                }

                _this2.$refs.dialogsecond.showDialogWarning(_this2.$t('message.informationTitle'), _this2.$t('message.reportCanNotEditTemplate'));

                _context2.next = 19;
                break;

              case 4:
                if (!(modeDataEditor == _this2.global.modeData["delete"])) {
                  _context2.next = 16;
                  break;
                }

                if (!(_this2.isTemplateSystemDefault && _this2.global.userInfo.groupCode != 'SYSTEM')) {
                  _context2.next = 9;
                  break;
                }

                _this2.$refs.dialogsecond.showDialogWarning(_this2.$t('message.informationTitle'), _this2.$t('message.reportCanNotDeleteTemplate'));

                _context2.next = 14;
                break;

              case 9:
                params = {
                  id_log: _this2.vModelLookUpIdTemplate,
                  user_id: _this2.global.userInfo.code
                };
                _context2.next = 12;
                return reportResource.deleteTemplateReport(params);

              case 12:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteAlertSuccess();
                _this2.showModal = false;

              case 14:
                _context2.next = 19;
                break;

              case 16:
                _this2.modeDataEditor = modeDataEditor;
                _this2.showModalSecond = !_this2.showModalSecond;

                _this2.$nextTick(function () {
                  _this2.addDialogCloseButton(_this2.secondDialog);
                });

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    closeModalReport: function closeModalReport() {
      if (this.showModal) {
        this.showModal = false;
      }
    },
    getFilterString: function getFilterString(reportCode) {
      if (reportCode == this.global.reportList.guestInHouseListing) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
      } else if (reportCode == this.global.reportList.guestInHouseForecast) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
        this.query.Condition2 = this.query.Condition1; // Filter Individual and Group //1=All 2=Individual 3=Group

        var optionSelect = this.$refs.ReportFilter1.vModelGuestType;

        if (optionSelect == 2) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.group_code=\"\"");
          this.query.Condition2 = "".concat(this.query.Condition2, " AND folio.group_code=\"\"");
        } else if (optionSelect == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.group_code<>\"\"");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND folio.group_code<>\"\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.group_code=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\"");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND folio.group_code=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\"");
          }
        } // Filter Company


        var companyCode = this.$refs.ReportFilter1.vModelLookUp.company;

        if (companyCode != null && companyCode != undefined) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND contact_person.company_code=\"").concat(companyCode, "\"");
          this.query.Condition2 = "".concat(this.query.Condition2, " AND contact_person.company_code=\"").concat(companyCode, "\"");
        }

        this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus["new"], "\"");
        this.query.Condition2 = "".concat(this.query.Condition2, " AND folio.status_code<>\"").concat(this.global.folioStatus.cancelCheckIn, "\" AND folio.type_code=\"").concat(this.global.folioType.guestFolio, "\"");
      } else if (reportCode == this.global.reportList.reservationList || reportCode == this.global.reportList.waitListReservation || reportCode == this.global.reportList.cancelledReservation || reportCode == this.global.reportList.noShowReservation || reportCode == this.global.reportList.voidedReservation || reportCode == this.global.reportList.groupReservation || reportCode == this.global.reportList.expectedArrival || reportCode == this.global.reportList.arrivalList || reportCode == this.global.reportList.samedayReservation || reportCode == this.global.reportList.balanceDeposit // Front Desk
      || reportCode == this.global.reportList.currentInHouse || reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyBookingSource || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.guestInHousebyNationality || reportCode == this.global.reportList.folioList || reportCode == this.global.reportList.masterFolio || reportCode == this.global.reportList.deskFolio || reportCode == this.global.reportList.complimentGuest || reportCode == this.global.reportList.houseUseGuest) {
        if (reportCode == this.global.reportList.expectedArrival || reportCode == this.global.reportList.arrivalList || reportCode == this.global.reportList.samedayReservation || reportCode == this.global.reportList.folioList || reportCode == this.global.reportList.masterFolio || reportCode == this.global.reportList.deskFolio) {
          this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.arrival)');
        } else if (reportCode == this.global.reportList.cancelledReservation || reportCode == this.global.reportList.noShowReservation || reportCode == this.global.reportList.voidedReservation) {
          this.query.Condition1 = this.getDateCondition11('DATE(reservation.cancel_date)');
        } else if (reportCode == this.global.reportList.currentInHouse) {
          this.query.Condition1 = '';
        } else if (reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyBookingSource || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.guestInHousebyNationality || reportCode == this.global.reportList.complimentGuest || reportCode == this.global.reportList.houseUseGuest) {
          this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
        } else if (reportCode == this.global.reportList.balanceDeposit) {
          this.query.Condition1 = this.getDateCondition13('DATE(guest_deposit.audit_date)');
        } else {
          this.query.Condition1 = this.getDateCondition11('DATE(reservation.audit_date)');
        } // Filter Individual and Group //1=All 2=Individual 3=Group


        var _optionSelect = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect == 2) {
          if (reportCode == this.global.reportList.currentInHouse || reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.complimentGuest || reportCode == this.global.reportList.houseUseGuest) {
            if (reportCode == this.global.reportList.currentInHouse) {
              this.query.Condition1 = "".concat(this.query.Condition1, "IFNULL(folio.group_code,\"\")=\"\" ");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(guest_in_house.group_code,\"\")=\"\" ");
            }
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(reservation.group_code,\"\")=\"\" ");
          }
        }

        if (_optionSelect == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            if (reportCode == this.global.reportList.currentInHouse || reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.complimentGuest || reportCode == this.global.reportList.houseUseGuest) {
              if (reportCode == this.global.reportList.currentInHouse) {
                this.query.Condition1 = "".concat(this.query.Condition1, " IFNULL(folio.group_code,\"\")<>\"\" ");
              } else {
                this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(guest_in_house.group_code,\"\")<>\"\" ");
              }
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(reservation.group_code,\"\")<>\"\" ");
            }
          } else if (reportCode == this.global.reportList.currentInHouse || reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.complimentGuest || reportCode == this.global.reportList.houseUseGuest) {
            if (reportCode == this.global.reportList.currentInHouse) {
              this.query.Condition1 = "".concat(this.query.Condition1, " IFNULL(folio.group_code,\"\")=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\" ");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(guest_in_house.group_code,\"\")=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\" ");
            }
          } else if (reportCode != this.global.reportList.folioList && reportCode != this.global.reportList.masterFolio && reportCode != this.global.reportList.deskFolio) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(reservation.group_code,\"\")=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\" ");
          }
        } // Exculde House Use on Guest In House


        var showHouseUse = this.$refs.ReportFilter1.checkBox.showHouseUse;

        if (reportCode == this.global.reportList.guestInHouse || reportCode == this.global.reportList.guestInHousebyBusinessSource || reportCode == this.global.reportList.guestInHousebyMarket || reportCode == this.global.reportList.guestInHousebyBookingSource || reportCode == this.global.reportList.guestInHousebyGuestType || reportCode == this.global.reportList.guestInHousebyCountry || reportCode == this.global.reportList.guestInHousebyState || reportCode == this.global.reportList.guestInHousebyCity || reportCode == this.global.reportList.guestInHousebyNationality) {
          if (!showHouseUse) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.compliment_hu<>\"").concat(this.global.roomStatus.houseUse, "\"");
          }
        } else if (reportCode == this.global.reportList.complimentGuest) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.compliment_hu=\"").concat(this.global.roomStatus.compliment, "\"");
        } else if (reportCode == this.global.reportList.houseUseGuest) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.compliment_hu=\"").concat(this.global.roomStatus.houseUse, "\"");
        } // Filter Status Reservation


        if (reportCode == this.global.reportList.reservationList || reportCode == this.global.reportList.groupReservation) {
          var guestStatusCode = this.$refs.ReportFilter1.vModelLookUp.constGuestStatus;

          if (guestStatusCode != null || guestStatusCode != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(guestStatusCode, "\"");
          }
        } else if (reportCode == this.global.reportList.waitListReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus.waitList, "\"");
        } else if (reportCode == this.global.reportList.cancelledReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus.cancel, "\"");
        } else if (reportCode == this.global.reportList.noShowReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus.noShow, "\"");
        } else if (reportCode == this.global.reportList.voidedReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus["void"], "\"");
        } else if (reportCode == this.global.reportList.expectedArrival) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code=\"").concat(this.global.reservationStatus["new"], "\"");
        } else if (reportCode == this.global.reportList.arrivalList) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND (IFNULL(reservation.status_code,\"\")=\"\" OR reservation.status_code=\"").concat(this.global.reservationStatus.checkIn, "\" OR reservation.status_code=\"").concat(this.global.reservationStatus.checkOut, "\")");
        } else if (reportCode == this.global.reportList.samedayReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND (reservation.status_code=\"").concat(this.global.reservationStatus.checkIn, "\" OR reservation.status_code=\"").concat(this.global.reservationStatus.checkOut, "\")");
        } else if (reportCode == this.global.reportList.balanceDeposit) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND reservation.status_code<>\"").concat(this.global.reservationStatus["void"], "\"");
        } // Filter Arrival List


        if (reportCode == this.global.reportList.arrivalList) {
          var optionArrival = this.$refs.ReportFilter1.vModelOptionArrivalList;

          if (optionArrival == 2) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.reservation_number<>\"0\"");
          } else if (optionArrival == 3) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.reservation_number=\"0\"");
          } // User ID


          var userCode = this.$refs.ReportFilter1.vModelLookUp.user;

          if (userCode != null && userCode != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.insert_by=\"").concat(userCode, "\"");
          }
        } // Filter Business Source


        var businessSource = this.$refs.ReportFilter1.vModelLookUp.businessSource;

        if (businessSource != null && businessSource != undefined) {
          if (reportCode == this.global.reportList.guestInHousebyBusinessSource) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_detail.business_source_code=\"").concat(businessSource, "\"");
          }
        } // Filter Company


        var _companyCode = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode != null && _companyCode != undefined) {
          if (reportCode == this.global.reportList.guestInHouse) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.company_code=\"").concat(_companyCode, "\"");
          } else if (reportCode == this.global.reportList.expectedArrival || reportCode == this.global.reportList.arrivalList || reportCode == this.global.reportList.reservationList) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND contact_person.company_code=\"").concat(_companyCode, "\"");
          }
        } // Filter Guest Deposit


        if (reportCode == this.global.reportList.reservationList || reportCode == this.global.reportList.cancelledReservation || reportCode == this.global.reportList.noShowReservation || reportCode == this.global.reportList.voidedReservation || reportCode == this.global.reportList.groupReservation || reportCode == this.global.reportList.samedayReservation || reportCode == this.global.reportList.balanceDeposit || reportCode == this.global.reportList.waitListReservation) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(guest_deposit.void, \"0\")=\"0\" AND IFNULL(guest_deposit.system_code, \"").concat(this.global.constProgramVariable.defaultSystemCode, "\")=\"").concat(this.global.constProgramVariable.defaultSystemCode, "\"");
        } // Filter Market


        var market = this.$refs.ReportFilter1.vModelLookUp.market;

        if (reportCode == this.global.reportList.guestInHousebyMarket) {
          if (market != null && market != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.market_code=\"").concat(market, "\"");
          }
        } // Filter Booking Source


        var bookingSource = this.$refs.ReportFilter1.vModelLookUp.bookingSource;

        if (reportCode == this.global.reportList.guestInHousebyBookingSource) {
          if (bookingSource != null && bookingSource != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.booking_source_code=\"").concat(bookingSource, "\"");
          }
        } // Filter Nationality


        var nationality = this.$refs.ReportFilter1.vModelLookUp.nationality;

        if (reportCode == this.global.reportList.guestInHousebyNationality) {
          if (market != null && market != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_in_house.nationality_code=\"").concat(nationality, "\"");
          }
        } // Filter Folio Status


        var folioStatusOpen = this.$refs.ReportFilter1.checkBox.folioStatusClosed;
        var folioStatusClosed = this.$refs.ReportFilter1.checkBox.folioStatusClosed;

        if (reportCode == this.global.reportList.folioList || reportCode == this.global.reportList.masterFolio || reportCode == this.global.reportList.deskFolio) {
          if (folioStatusOpen) {
            if (folioStatusClosed) {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND (folio.status_code=\"").concat(this.global.folioStatus.open, "\" OR folio.status_code=\"").concat(this.global.folioStatus.closed, "\")");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"").concat(this.global.folioStatus.open, "\"");
            }
          } else if (folioStatusClosed) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"").concat(this.global.folioStatus.closed, "\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"X\"");
          }
        }
      } else if (reportCode == this.global.reportList.guestList) {
        this.query.Condition1 = this.getDateCondition21('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
      } else if (reportCode == this.global.reportList.incognitoGuest) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
      } else if (reportCode == this.global.reportList.earlyCheckIn) {
        this.query.Condition1 = this.getDateCondition22('DATE(guest_detail.arrival)', 'DATE(guest_detail.departure)');
        var checkOutLimit = this.$store.state.configurations.reservation.checkOutLimit;
        checkOutLimit = checkOutLimit.replace('.', ':');
        this.query.Condition1 = "".concat(this.query.Condition1, " AND TIME(guest_detail.arrival)<\"").concat(checkOutLimit, "\""); // Filter Individual and Group //1=All 2=Individual 3=Group

        var _optionSelect2 = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect2 == 2) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")=\"\"");
        } else if (_optionSelect2 == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")<>\"\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\"");
          }
        } // Filter Company


        var _companyCode2 = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode2 != null && _companyCode2 != undefined) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND contact_person.company_code=\"").concat(_companyCode2, "\"");
        }
      } else if (reportCode == this.global.reportList.dayUse || reportCode == this.global.reportList.earlyDeparture || reportCode == this.global.reportList.expectedDeparture || reportCode == this.global.reportList.extendedDeparture || reportCode == this.global.reportList.departureList || reportCode == this.global.reportList.actualDepartureGuestList) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)'); // Filter Individual and Group //1=All 2=Individual 3=Group

        var _optionSelect3 = this.$refs.ReportFilter1.vModelGuestType;

        if (_optionSelect3 == 2) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")=\"\"");
        } else if (_optionSelect3 == 3) {
          if (this.$refs.ReportFilter1.vModelLookUp.guestGroup == null || this.$refs.ReportFilter1.vModelLookUp.guestGroup == undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")<>\"\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(folio.group_code,\"\")=\"").concat(this.$refs.ReportFilter1.vModelLookUp.guestGroup, "\"");
          }
        } // Filter Company


        var _companyCode3 = this.$refs.ReportFilter1.vModelLookUp.company;

        if (_companyCode3 != null && _companyCode3 != undefined) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND contact_person.company_code=\"").concat(_companyCode3, "\"");
        }
      } else if (reportCode == this.global.reportList.advancedPaymentDeposit || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.cashierReport || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.dailySales || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed || reportCode == this.global.reportList.voidList) {
        // Filter Date
        if (reportCode == this.global.reportList.advancedPaymentDeposit) {
          this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
        } else if (reportCode == this.global.reportList.voidList) {
          this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.void_date)');
        } else {
          this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        }

        if (reportCode == this.global.reportList.dailySales) {
          this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
          this.query.Condition3 = "".concat(this.getDateCondition1YTD('sub_folio.audit_date'), " AND cfg_init_account.sub_group_code<>\"").concat(this.global.subGroupAccount.accountPayable, "\"");
          this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
          this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
          this.query.Condition6 = "".concat(this.getDateCondition1YTD('guest_deposit.audit_date'), " AND cfg_init_account.sub_group_code<>\"").concat(this.global.subGroupAccount.accountPayable, "\"");
        } else if (reportCode == this.global.reportList.voidList) {
          this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.void_date)');
        } else if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          this.query.Condition2 = this.getDateCondition11('guest_deposit.audit_date');
        } // Charge Condition


        this.query.Condition7 = this.query.Condition1;
        this.query.Condition8 = this.query.Condition2;

        if (reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          // if (ProgramConfiguration.ShowTransferOnCashierReport) {
          if (true) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.payment, "\"") + " OR (sub_folio.account_code=\"".concat(this.$store.state.configurations.globalAccount.transferCharge, "\" AND sub_folio.type_code=\"").concat(this.global.transactionType.credit, "\" AND sub_folio.is_correction=\"0\")") + " OR (sub_folio.account_code=\"".concat(this.$store.state.configurations.globalAccount.transferCharge, "\" AND sub_folio.is_correction=\"-1\"))");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.payment, "\"") + " OR (guest_deposit.account_code=\"".concat(this.$store.state.configurations.globalAccount.transferCharge, "\" AND guest_deposit.type_code=\"").concat(this.global.transactionType.credit, "\" AND guest_deposit.is_correction=\"0\")") + " OR (guest_deposit.account_code=\"".concat(this.$store.state.configurations.globalAccount.transferCharge, "\" AND guest_deposit.is_correction=\"-1\"))");
          } else {}
        }

        if (reportCode == this.global.reportList.advancedPaymentDeposit) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND IFNULL(guest_deposit.void, \"0\")=\"0\" AND IFNULL(guest_deposit.system_code, \"").concat(this.global.constProgramVariable.defaultSystemCode, "\")=\"").concat(this.global.constProgramVariable.defaultSystemCode, "\"");
        } // Filter User ID


        var userId = this.$refs.ReportFilter1.vModelLookUp.user;

        if (userId != '' && userId != undefined && userId != null) {
          if (reportCode == this.global.reportList.advancedPaymentDeposit) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_deposit.insert_by=\"").concat(userId, "\"");
          } else if (reportCode == this.global.reportList.dailySales) {
            this.query.Condition3 = "".concat(this.query.Condition3, " AND sub_folio.insert_by=\"").concat(userId, "\"");
            this.query.Condition6 = "".concat(this.query.Condition6, " AND guest_deposit.insert_by=\"").concat(userId, "\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.insert_by=\"").concat(userId, "\"");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND sub_folio.insert_by=\"").concat(userId, "\"");
          }

          if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.insert_by=\"").concat(userId, "\"");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.insert_by=\"").concat(userId, "\"");
          }
        } // Filter Shift


        var shiftCode = this.$refs.ReportFilter1.vModelLookUp.shift;

        if (shiftCode != '' && shiftCode != null && shiftCode != undefined) {
          if (reportCode == this.global.reportList.advancedPaymentDeposit) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_deposit.shift=\"").concat(shiftCode, "\"");
          } else if (reportCode == this.global.reportList.dailySales) {
            this.query.Condition3 = "".concat(this.query.Condition3, " AND sub_folio.shift=\"").concat(shiftCode, "\"");
            this.query.Condition6 = "".concat(this.query.Condition6, " AND guest_deposit.shift=\"").concat(shiftCode, "\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.shift=\"").concat(shiftCode, "\"");
            this.queryCondition7 = "".concat(this.queryCondition7, " AND sub_folio.shift=\"").concat(shiftCode, "\"");
          }

          if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.shift=\"").concat(shiftCode, "\"");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.shift=\"").concat(shiftCode, "\"");
          }
        } // Filter Sub Department


        var subDepartmentCode = this.$refs.ReportFilter1.vModelLookUp.subDepartment;

        if (subDepartmentCode != '' && subDepartmentCode != null && subDepartmentCode != undefined) {
          if (reportCode == this.global.reportList.advancedPaymentDeposit) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_deposit.sub_department_code=\"").concat(subDepartmentCode, "\"");
          } else if (reportCode == this.global.reportList.dailySales) {
            this.query.Condition3 = "".concat(this.query.Condition3, " AND sub_folio.sub_department_code=\"").concat(subDepartmentCode, "\"");
            this.query.Condition6 = "".concat(this.query.Condition6, " AND guest_deposit.sub_department_code=\"").concat(subDepartmentCode, "\"");
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.sub_department_code=\"").concat(subDepartmentCode, "\"");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND sub_folio.sub_department_code=\"").concat(subDepartmentCode, "\"");
          }

          if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.sub_department_code=\"").concat(subDepartmentCode, "\"");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.sub_department_code=\"").concat(subDepartmentCode, "\"");
          }
        } // Filter Account


        var accountCode = this.$refs.ReportFilter1.vModelLookUp.account;

        if (accountCode != '' && accountCode != null && accountCode != undefined) {
          if (reportCode == this.global.reportList.advancedPaymentDeposit) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_deposit.account_code=\"").concat(accountCode, "\"");
          } else if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.account_code=\"").concat(accountCode, "\"");
          } else if (reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode == this.global.reportList.taxBreakdownDetailed || reportCode == this.global.reportList.transactionByStaff) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND (sub_folio.account_code=\"").concat(accountCode, "\" OR cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.taxService, "\")");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND (sub_folio.account_code=\"").concat(accountCode, "\" OR cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.taxService, "\")");
          } else if (reportCode == this.global.reportList.dailySales) {
            this.query.Condition3 = "".concat(this.query.Condition3, " AND sub_folio.account_code=\"").concat(accountCode, "\"");
            this.query.Condition6 = "".concat(this.query.Condition6, " AND guest_deposit.account_code=\"").concat(accountCode, "\"");
          }

          if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.account_code=\"").concat(accountCode, "\"");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.account_code=\"").concat(accountCode, "\"");
          }

          if (reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition3 = "`Account Code`=\"".concat(accountCode, "\"");
          }
        } // Filter Account Sub Group


        var accountSubGroupCode = this.$refs.ReportFilter1.vModelLookUp.accountSubGroup;
        var showAccountPayable = this.$refs.ReportFilter1.checkBox.showAccountPayable;

        if (accountSubGroupCode != '' && accountSubGroupCode != null && accountSubGroupCode != undefined) {
          if (reportCode == this.global.reportList.advancedPaymentDeposit) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
          } else if (reportCode == this.global.reportList.dailySales) {
            this.query.Condition3 = "".concat(this.query.Condition3, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
            this.query.Condition6 = "".concat(this.query.Condition6, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
          } else if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
          } else if (reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
          }

          if (reportCode >= this.global.reportList.folioTransaction && reportCode <= this.global.reportList.yearlyTransaction || reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode >= this.global.reportList.paymentList && reportCode <= this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.cashierReport || reportCode == this.global.reportList.cashierReportReprint || reportCode == this.global.reportList.cashSummaryReport || reportCode == this.global.reportList.transactionByStaff) {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND cfg_init_account.sub_group_code=\"").concat(accountSubGroupCode, "\"");
          }

          if (reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
            this.query.Condition3 = "`Account Sub Group Code`=\"".concat(accountSubGroupCode, "\"");
          }
        }

        if (reportCode >= this.global.reportList.chargeList && reportCode <= this.global.reportList.yearlyChargeList) {
          if (showAccountPayable) {
            this.query.Condition1 = this.query.Condition1;
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND cfg_init_account.sub_group_code<>\"").concat(this.global.subGroupAccount.accountPayable, "\"");
          }
        } // Filter Folio Type


        if (reportCode != this.global.reportList.advancedPaymentDeposit && reportCode != this.global.reportList.dailySales) {
          this.query.ConditionGF = "folio.type_code=\"".concat(this.global.folioType.guestFolio, "\"");
          this.query.ConditionMF = "folio.type_code=\"".concat(this.global.folioType.masterFolio, "\"");
          this.query.ConditionDF = "folio.type_code=\"".concat(this.global.folioType.deskFolio, "\"");
          var guestFolio = this.$refs.ReportFilter1.checkBox.guestFolio;
          var masterFolio = this.$refs.ReportFilter1.checkBox.masterFolio;
          var deskFolio = this.$refs.ReportFilter1.checkBox.deskFolio;

          if (guestFolio) {
            if (masterFolio) {
              if (deskFolio) {
                this.query.Condition1 = "".concat(this.query.Condition1, " AND (").concat(this.query.ConditionGF, " OR ").concat(this.query.ConditionMF, " OR ").concat(this.query.ConditionDF, ")");
                this.query.Condition7 = "".concat(this.query.Condition7, " AND (").concat(this.query.ConditionGF, " OR ").concat(this.query.ConditionMF, " OR ").concat(this.query.ConditionDF, ")");
              }
            } else if (deskFolio) {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND (").concat(this.query.ConditionGF, " OR ").concat(this.query.ConditionDF, ")");
              this.query.Condition7 = "".concat(this.query.Condition7, " AND (").concat(this.query.ConditionGF, " OR ").concat(this.query.ConditionDF, ")");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND ").concat(this.query.ConditionGF);
              this.query.Condition7 = "".concat(this.query.Condition7, " AND ").concat(this.query.ConditionGF);
            }
          } else if (masterFolio) {
            if (deskFolio) {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND (").concat(this.query.ConditionMF, " OR ").concat(this.query.ConditionDF, ")");
              this.query.Condition7 = "".concat(this.query.Condition7, " AND (").concat(this.query.ConditionMF, " OR ").concat(this.query.ConditionDF, ")");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND ").concat(this.query.ConditionMF);
              this.query.Condition7 = "".concat(this.query.Condition7, " AND ").concat(this.query.ConditionMF);
            }
          } else if (deskFolio) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND ").concat(this.query.ConditionDF);
            this.query.Condition7 = "".concat(this.query.Condition7, " AND ").concat(this.query.ConditionDF);
          } else {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.type_code=\"\"");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND folio.type_code=\"\"");
          } // Filter Folio Status


          if (reportCode != this.global.reportList.voidList && reportCode != this.global.reportList.advancedPaymentDeposit && reportCode != this.global.reportList.dailySales) {
            var _folioStatusOpen = this.$refs.ReportFilter1.checkBox.folioStatusOpen;
            var _folioStatusClosed = this.$refs.ReportFilter1.checkBox.folioStatusClosed;

            if (_folioStatusOpen) {
              if (_folioStatusClosed) {
                this.query.Condition1 = "".concat(this.query.Condition1, " AND (folio.status_code=\"").concat(this.global.folioStatus.open, "\" OR folio.status_code=\"").concat(this.global.folioStatus.closed, "\")");
                this.query.Condition7 = "".concat(this.query.Condition7, " AND (folio.status_code=\"").concat(this.global.folioStatus.open, "\" OR folio.status_code=\"").concat(this.global.folioStatus.closed, "\")");
              } else {
                this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"").concat(this.global.folioStatus.open, "\"");
                this.query.Condition7 = "".concat(this.query.Condition7, " AND folio.status_code=\"").concat(this.global.folioStatus.open, "\"");
              }
            } else if (_folioStatusClosed) {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"").concat(this.global.folioStatus.closed, "\"");
              this.query.Condition7 = "".concat(this.query.Condition7, " AND folio.status_code=\"").concat(this.global.folioStatus.closed, "\"");
            } else {
              this.query.Condition1 = "".concat(this.query.Condition1, " AND folio.status_code=\"X\"");
              this.query.Condition7 = "".concat(this.query.Condition7, " AND folio.status_code=\"X\"");
            }
          }
        } // Filter Reservation Number


        if (reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          var reservationNumber = this.$refs.ReportFilter1.reservationNumber;

          if (reservationNumber > 0) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.folio_number = 0 ");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.reservation_number = ").concat(reservationNumber, " ");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND sub_folio.folio_number = 0 ");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.reservation_number = ").concat(reservationNumber, " ");
          }
        } // Filter Folio


        if (reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          var folioNumber = this.$refs.ReportFilter1.folioNumber;

          if (folioNumber > 0) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND sub_folio.folio_number = ").concat(folioNumber, " ");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND guest_deposit.reservation_number = 0 ");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND sub_folio.folio_number = ").concat(folioNumber, " ");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND guest_deposit.reservation_number = 0 ");
          }
        } // Filter Business Source


        if (reportCode == this.global.reportList.chargeList || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          var businessSourceCode = this.$refs.ReportFilter1.vModelLookUp.businessSource;

          if (businessSourceCode != '' && businessSourceCode != null && businessSourceCode != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND guest_detail.business_source_code = \"").concat(businessSourceCode, "\" ");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND (guest_detail.business_source_code = \"").concat(businessSourceCode, "\"  OR guest_detail1.business_source_code = \"").concat(businessSourceCode, "\") ");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND guest_detail.business_source_code = \"").concat(businessSourceCode, "\" ");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND (guest_detail.business_source_code = \"").concat(businessSourceCode, "\"  OR guest_detail1.business_source_code = \"").concat(businessSourceCode, "\") ");
          }
        } // //Filter Company


        if (reportCode == this.global.reportList.chargeList || reportCode == this.global.reportList.transactionByStaff || reportCode == this.global.reportList.taxBreakdownDetailed) {
          var _companyCode4 = this.$refs.ReportFilter1.vModelLookUp.company;

          if (_companyCode4 != '' && _companyCode4 != null && _companyCode4 != undefined) {
            this.query.Condition1 = "".concat(this.query.Condition1, " AND contact_person.company_code = \"").concat(_companyCode4, "\" ");
            this.query.Condition2 = "".concat(this.query.Condition2, " AND (contact_person.company_code = \"").concat(_companyCode4, "\" OR contact_person1.company_code = \"").concat(_companyCode4, "\") ");
            this.query.Condition7 = "".concat(this.query.Condition7, " AND contact_person.company_code = \"").concat(_companyCode4, "\" ");
            this.query.Condition8 = "".concat(this.query.Condition8, " AND (contact_person.company_code = \"").concat(_companyCode4, "\" OR contact_person1.company_code = \"").concat(_companyCode4, "\") ");
          }
        }
      } else if (reportCode == this.global.reportList.exportCSVbyDepartureDate) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
      } else if (reportCode == this.global.reportList.roomSalesbyRoomNumber) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition2 = this.getDateCondition11('folio.check_out_date');
        this.query.Condition3 = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
      } else if (reportCode == this.global.reportList.todayRoomRevenueBreakDown) {
        this.query.Condition1 = " AND ".concat(this.getDateCondition23(' DATE(guest_detail.arrival)', 'DATE(guest_detail.departure) '));
      } else if (reportCode == this.global.reportList.breakfastControl) {
        this.query.Condition1 = this.getDateCondition11('ADDDATE(guest_in_house.audit_date, INTERVAL 1 DAY)');
      } else if (reportCode == this.global.reportList.paymentBySubDepartment || reportCode == this.global.reportList.paymentByAccount) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
        this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
      } else if (reportCode == this.global.reportList.revenueBySubDepartment) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
        this.query.Condition2 = this.getDateCondition11('DATE(guest_deposit.audit_date)');
      } else if (reportCode == this.global.reportList.packageSales) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.global.reportList.guestLedger || reportCode == this.global.reportList.guestDeposit || reportCode == this.global.reportList.guestAccount) {
        var dateCondition = this.getDateCondition01();
        this.query.Condition1 = " DATE(guest_detail.departure)>\"".concat(dateCondition, "\"") + " AND sub_folio.audit_date<=\"".concat(dateCondition, "\"") + ' AND sub_folio.audit_date<DATE(guest_detail.departure)';

        if (reportCode == this.global.reportList.guestLedger) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND ((cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.charge, "\" OR cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.taxService, "\") OR (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.transfer, "\" AND sub_folio.account_code=\"").concat(this.$store.state.configurations.globalAccount.transferCharge, "\"))");
        } else if (reportCode == this.global.reportList.guestDeposit) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.payment, "\" OR (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.transfer, "\" AND (sub_folio.account_code=\"").concat(this.$store.state.configurations.globalAccount.transferDepositReservationToFolio, "\" OR sub_folio.account_code=\"").concat(this.$store.state.configurations.globalAccount.transferPayment, "\")))");
        } else if (reportCode == this.global.reportList.guestLedger) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND (cfg_init_account_sub_group.group_code<>\"").concat(this.global.groupAccount.transfer, "\" OR (cfg_init_account_sub_group.group_code=\"").concat(this.global.groupAccount.transfer, "\" AND sub_folio.account_code<>\"").concat(this.$store.state.configurations.globalAccount.transferDepositReservation, "\"))");
        }
      } else if (reportCode == this.global.reportList.dailyRevenueReport) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition2 = this.getDateCondition1MTD('sub_folio.audit_date');
        this.query.Condition3 = this.getDateCondition1YTD('sub_folio.audit_date');
        this.query.Condition4 = this.getDateCondition11('guest_deposit.audit_date');
        this.query.Condition5 = this.getDateCondition1MTD('guest_deposit.audit_date');
        this.query.Condition6 = this.getDateCondition1YTD('guest_deposit.audit_date');
      } else if (reportCode == this.global.reportList.correction) {
        this.query.Condition1 = this.getDateCondition11('guest_deposit.audit_date');
        this.query.Condition2 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.global.reportList.cancelCheckIn) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_detail.departure)');
      } else if (reportCode == this.global.reportList.lostandFound) {
        this.query.Condition1 = this.getDateCondition11('DATE(date_posting)');
      } else if (reportCode == this.global.reportList.cancelCheckOut) {
        this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');
      } else if (reportCode == this.global.reportList.voucher) {
        this.query.Condition1 = this.getDateCondition11('DATE(issued_date)');
      } else if (reportCode == this.global.reportList.voucherSRC) {
        this.query.Condition1 = this.getDateCondition11('IFNULL(acc_journal.`date`, "0000-00-00")');
      } else if (reportCode == this.global.reportList.roomRate) {
        var status = this.$refs.ReportFilter1.radios.status; // 1=All 2= Active 3= Non Active

        if (status == 2) {
          this.query.Condition1 = ' cfg_init_room_rate.is_active = "-1"';
        } else if (status == 3) {
          this.query.Condition1 = ' cfg_init_room_rate.is_active = "0"';
        }
      } else if (reportCode == this.global.reportList["package"]) {
        var _status = this.$refs.ReportFilter1.radios.status; // 1=All 2= Active 3= Non Active

        if (_status == 2) {
          this.query.Condition1 = ' cfg_init_package.is_active = "-1"';
        } else if (_status == 3) {
          this.query.Condition1 = ' cfg_init_package.is_active = "0"';
        }
      } else if (reportCode == this.global.reportList.roomUnavailable) {
        this.query.Condition1 = this.getDateCondition21('room_unavailable.from_date', 'room_unavailable.to_date');
      } else if (reportCode == this.global.reportList.roomRevenue) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition1 = "".concat(this.query.Condition1, " AND cfg_init_account.sub_group_code=\"").concat(this.global.subGroupAccount.room, "\" AND IFNULL(cfg_init_room.owner_code,\"\")<>\"\"");
      } else if (reportCode == this.global.reportList.roomHistory) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition2 = this.getDateCondition11('room_unavailable_history.audit_date');
      } else if (reportCode == this.global.reportList.roomStatus) {
        this.query.Condition1 = this.getDateConditionAuditDate2('DATE(from_date)', 'DATE(to_date)');
        var roomStatus = this.$refs.ReportFilter1.vModelLookUp.roomStatus;

        if (roomStatus != undefined && roomStatus != null) {
          if (roomStatus == this.global.roomStatus.dontDisturb || roomStatus == this.global.roomStatus.doubleLock || roomStatus == this.global.roomStatus.sleepOut) {
            this.query.Condition2 = "`Status Code Mix`=\"O\" AND `Status Occupied Code`=\"".concat(roomStatus, "\"");
          } else if (roomStatus == this.global.roomStatus.vacant) {
            this.query.Condition2 = '`Status Code Mix`="V"';
          } else if (roomStatus == this.global.roomStatus.occupied) {
            this.query.Condition2 = '`Status Code Mix`="O"';
          } else if (roomStatus == this.global.roomStatus.houseUse) {
            this.query.Condition2 = "`CPHUStatus`=\"".concat(this.global.roomStatus.houseUse, "\"");
          } else if (roomStatus == this.global.roomStatus.compliment) {
            this.query.Condition2 = "`CPHUStatus`=\"".concat(this.global.roomStatus.compliment, "\"");
          } else if (roomStatus == this.global.roomStatus.outOfOrder || roomStatus == this.global.roomStatus.officeUse || roomStatus == this.global.roomStatus.underConstruction) {
            this.query.Condition2 = "`Status Code Mix`=\"".concat(roomStatus, "\"");
          } else {
            this.query.Condition2 = "(`Status Code Mix`=\"V\" OR `Status Code Mix`=\"O\") AND `Room Status Code`=\"".concat(roomStatus, "\"");
          }
        }

        var building = this.$refs.ReportFilter1.vModelLookUp.building;

        if (building != undefined && building != null) {
          if (this.query.Condition2 == '') {
            this.query.Condition2 = "`Building`=\"".concat(building, "\"");
          } else {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND `Building`=\"").concat(building, "\"");
          }
        }

        var floor = this.$refs.ReportFilter1.vModelLookUp.floor;

        if (floor != undefined && floor != null) {
          if (this.query.Condition2 == '') {
            this.query.Condition2 = "`Floor`=\"".concat(floor, "\"");
          } else {
            this.query.Condition2 = "".concat(this.query.Condition2, " AND `Floor`=\"").concat(floor, "\"");
          }
        }
      } else if (reportCode == this.global.reportList.sales || reportCode == this.global.reportList.salesSummary || reportCode == this.global.reportList.frequentlySales || reportCode == this.global.reportList.voidedCheckList) {
        this.query.Condition1 = this.getDateCondition11('DATE(sub_folio.audit_date)');
      } else if (reportCode == this.global.reportList.captainOrderList || reportCode == this.global.reportList.cancelledCaptainOrderDetail) {
        this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order_transaction.audit_date)');
      } else if (reportCode == this.global.reportList.cancelledCaptainOrder) {
        this.query.Condition1 = this.getDateCondition11('DATE(pos_captain_order.audit_date)');
      } else if (reportCode == this.global.reportList.company) {
        var companyTypeCode = this.$refs.ReportFilter1.vModelLookUp.companyType;

        if (companyTypeCode != undefined && companyTypeCode != null) {
          this.query.Condition1 = " company.type_code = \"".concat(companyTypeCode, "\" ");
        }
      } else if (reportCode == this.global.reportList.phoneBook) {
        var phoneBookTypeCode = this.$refs.ReportFilter1.vModelLookUp.phoneBookType;

        if (phoneBookTypeCode != undefined && phoneBookTypeCode != null) {
          this.query.Condition1 = " phone_book.type_code = \"".concat(phoneBookTypeCode, "\" ");
        }
      } else if (reportCode == this.global.reportList.eventList) {
        this.query.Condition1 = this.getDateCondition21('DATE(events.Start)', 'DATE(events.Finish)');
      } else if (reportCode == this.global.reportList.occupiedGraphic || reportCode == this.global.reportList.occupiedbyBusinessSourceGraphic || reportCode == this.global.reportList.occupiedbyMarketGraphic || reportCode == this.global.reportList.occupiedbyGuestTypeGraphic || reportCode == this.global.reportList.occupiedbyCountryGraphic || reportCode == this.global.reportList.occupiedbyStateGraphic) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
      } else if (reportCode == this.global.reportList.occupancyGraphic) {
        this.query.Condition1 = this.getDateCondition11('date');
      } else if (reportCode == this.global.reportList.revenueGraphic) {
        this.query.Condition1 = this.getDateCondition11('sub_folio.audit_date');
      } else if (reportCode == this.global.reportList.roomStatistic || reportCode == this.global.reportList.dailyFlashReport || reportCode == this.global.reportList.fbStatistic || reportCode == this.global.reportList.dailyStatisticReport) {
        this.query.Condition1 = this.getDateCondition11('`date`');
        this.query.Condition2 = this.getDateCondition1MTD('`date`');
        this.query.Condition3 = this.getDateCondition1MTDLastMonth('`date`');
        this.query.Condition4 = this.getDateCondition1YTD('`date`');
        this.query.Condition5 = this.getDateCondition1YTDLastYear('`date`');
        this.query.Condition6 = this.getDateCondition1YTDFromLastYear('`date`');
      } else if (reportCode == this.global.reportList.roomProduction) {
        var _dateCondition = this.getDateCondition11('guest_in_house.audit_date');

        this.query.Condition1 = " WHERE ".concat(_dateCondition);
        _dateCondition = this.getDateCondition11('sub_folio.audit_date');
        this.query.Condition2 = " WHERE ".concat(_dateCondition);
        _dateCondition = this.getDateCondition11('guest_in_house.audit_date');
        this.query.Condition3 = _dateCondition;
        _dateCondition = this.getDateCondition11('folio.check_out_date');
        this.query.Condition4 = _dateCondition;
        _dateCondition = this.getDateCondition21('DATE(room_unavailable.from_date)', 'DATE(room_unavailable.to_date)');
        this.query.Condition5 = _dateCondition;
      } else if (reportCode == this.global.reportList.oTAProductivity) {
        this.query.Condition1 = this.getDateCondition11('guest_in_house.audit_date');
      } else if (reportCode == this.global.reportList.marketStatistic) {
        this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
      } else if (reportCode == this.global.reportList.dailyHotelCompetitor) {
        this.query.Condition1 = this.getDateCondition11('DATE(competitor_data.date)');
      } else if (reportCode == this.global.reportList.rateCodeAnalisys) {
        this.query.Condition1 = this.getDateCondition11('DATE(guest_in_house.audit_date)');
      } else if (reportCode == this.global.reportList.salesContributionAnalysis) {
        this.query.Condition1 = this.getDateCondition11('DATE(market_statistic.audit_date)');
      } else if (reportCode == this.global.reportList.leadList || reportCode == this.global.reportList.taskList || reportCode == this.global.reportList.proposalList || reportCode == this.global.reportList.activityLog || reportCode == this.global.reportList.salesActivityDetail) {//
      } else if (reportCode == this.global.reportList.cityLedgerList) {//
      } else if (reportCode == this.global.reportList.cityLedgerAgingReport || reportCode == this.global.reportList.cityLedgerAgingReportDetail) {//
      } else if (reportCode == this.global.reportList.cityLedgerInvoice || reportCode == this.global.reportList.cityLedgerInvoiceDetail || reportCode == this.global.reportList.cityLedgerInvoicePayment) {//
      } else if (reportCode == this.global.reportList.cityLedgerInvoiceMutation) {//
      } else if (reportCode == this.global.reportList.bankTransactionList) {//
      } else if (reportCode == this.global.reportList.bankTransactionAgingReport || reportCode == this.global.reportList.bankTransactionAgingReportDetail) {//
      } else if (reportCode == this.global.reportList.bankReconciliation) {//
      } else if (reportCode == this.global.reportList.bankTransactionMutation) {//
      } else if (reportCode == this.global.reportList.apRefundDepositList || reportCode == this.global.reportList.apCommissionList) {//
      } else if (reportCode == this.global.reportList.apRefundDepositAgingReport || reportCode == this.global.reportList.apRefundDepositAgingReportDetail || reportCode == this.global.reportList.apCommissionAgingReport || reportCode == this.global.reportList.apCommissionAgingReportDetail) {//
      } else if (reportCode == this.global.reportList.apRefundDepositPayment || reportCode == this.global.reportList.apCommissionPayment) {//
      } else if (reportCode == this.global.reportList.apRefundDepositMutation || reportCode == this.global.reportList.apCommissionMutation) {//
      } else if (reportCode == this.global.reportList.logUser || reportCode == this.global.reportList.logMoveRoom || reportCode == this.global.reportList.logVoidTransaction || reportCode == this.global.reportList.logHouseKeeping || reportCode == this.global.reportList.logTransferTransaction) {
        this.query.Condition1 = this.getDateCondition11('DATE(log_user.actual_date)');

        if (reportCode == this.global.reportList.logMoveRoom) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND log_user.action_id=\"").concat(this.global.logUserAction.moveRoom, "\"");
        } else if (reportCode == this.global.reportList.logVoidTransaction) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND log_user.action_id=\"").concat(this.global.logUserAction.voidTransaction, "\"");
        } else if (reportCode == this.global.reportList.logHouseKeeping) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND (log_user.action_id=\"").concat(this.global.logUserAction.dirtyRoom, "\" OR log_user.action_id=\"").concat(this.global.logUserAction.cleanRoom, "\" OR log_user.action_id=\"").concat(this.global.logUserAction.readyRoom, "\")");
        } else if (reportCode == this.global.reportList.logTransferTransaction) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND log_user.action_id=\"").concat(this.global.logUserAction.transferTransaction, "\"");
        } // Filter User ID


        var userID = this.$refs.ReportFilter1.vModelLookUp.user;

        if (userID != undefined && userID != null) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND log_user.user_id=\"").concat(userID, "\"");
        } // Filter Log User Action


        var logUserActionID = this.$refs.ReportFilter1.vModelLookUp.logUserAction;

        if (logUserActionID != undefined && logUserActionID != null) {
          this.query.Condition1 = "".concat(this.query.Condition1, " AND log_user.action_id=\"").concat(logUserActionID, "\"");
        }
      } else if (reportCode == this.global.reportList.logShift) {//
      } else if (reportCode == this.global.reportList.keyLockHistory) {//
      } else if (reportCode == this.global.reportList.logSpecialAccess) {//
      } else if (reportCode == this.global.reportList.logPABX) {//
      }
    },
    setDateRangeActive: function setDateRangeActive(reportCode) {
      var DateMode;
      var vModelOptionB4 = this.vModelOptions;
      DateMode = '1111111';

      if (reportCode == this.global.reportList.roomList || reportCode == this.global.reportList.roomStatus || reportCode == this.global.reportList.roomRate || reportCode == this.global.reportList.roomRateBreakdown || reportCode == this.global.reportList.roomRateStructure || reportCode == this.global.reportList["package"] || reportCode == this.global.reportList.packageBreakdown || reportCode == this.global.reportList.folioOpenBalance || reportCode == this.global.reportList.repeaterGuest || reportCode == this.global.reportList.currentInHouse || reportCode == this.global.reportList.guestProfile || reportCode == this.global.reportList.company || reportCode == this.global.reportList.phoneBook || reportCode == this.global.reportList.contractRate || reportCode == this.global.reportList.roomType) {
        DateMode = '0000000';
      } else if (reportCode == this.global.reportList.guestInHouseForecast || reportCode == this.global.reportList.dailyFolioTransaction || reportCode == this.global.reportList.dailyChargeList || reportCode == this.global.reportList.dailyPaymentList || reportCode == this.global.reportList.dailySales || reportCode == this.global.reportList.dailyRevenueReport || reportCode == this.global.reportList.dailyRevenueReportSummary || reportCode == this.global.reportList.roomCountSheet || reportCode == this.global.reportList.roomCountSheetByBuildingFloorRoomType || reportCode == this.global.reportList.roomCountSheetByRoomTypeBedType || reportCode == this.global.reportList.roomStatistic || reportCode == this.global.reportList.dailyFlashReport || reportCode == this.global.reportList.fbStatistic || reportCode == this.global.reportList.guestLedger || reportCode == this.global.reportList.guestDeposit || reportCode == this.global.reportList.guestAccount || reportCode == this.global.reportList.todayRoomRevenueBreakDown) {
        DateMode = '1000000';
      } else if (reportCode == this.global.reportList.monthlyFolioTransaction || reportCode == this.global.reportList.monthlyChargeList || reportCode == this.global.reportList.monthlyPaymentList) {} else if (reportCode == this.global.reportList.yearlyTransaction || reportCode == this.global.reportList.yearlyChargeList || reportCode == this.global.reportList.yearlyPaymentList || reportCode == this.global.reportList.guestForecastReportYearly) {
        DateMode = '0000001';
      } else if (reportCode == this.global.reportList.guestForecastComparison) {
        DateMode = '1111100';
      } else if (reportCode == this.global.reportList.oTAProductivity) {
        DateMode = '1011111';
      } else if (reportCode == this.global.reportList.roomProduction && ReportTemplate.RoomProduction == 'RoomProduction02.fr3') {
        DateMode = '1111001';
      }

      if (this.resolutionWidth < 900) {
        // For Small device
        var CanCangeActive = true;
        this.dataLookUpOptionDate = [];

        for (var i = 1; i <= 7; i++) {
          var textLookUp = '';

          if (DateMode[i - 1] == '1') {
            if (i == 1) {
              textLookUp = 'Date';
              this.optionDisable.date = false;

              if (CanCangeActive) {
                this.vModelOptions = 1;
                CanCangeActive = false;
              }
            } else if (i == 2) {
              textLookUp = 'Range';

              if (CanCangeActive) {
                this.vModelOptions = 2;
                CanCangeActive = false;
              }
            } else if (i == 3) {
              textLookUp = 'Week';

              if (CanCangeActive) {
                this.vModelOptions = 3;
                CanCangeActive = false;
              }
            } else if (i == 4) {
              textLookUp = 'Month';

              if (CanCangeActive) {
                this.vModelOptions = 4;
                CanCangeActive = false;
              }
            } else if (i == 5) {
              textLookUp = 'Quarter';

              if (CanCangeActive) {
                this.vModelOptions = 5;
                CanCangeActive = false;
              }
            } else if (i == 6) {
              textLookUp = 'Semester';

              if (CanCangeActive) {
                this.vModelOptions = 6;
                CanCangeActive = false;
              }
            } else if (i == 7) {
              textLookUp = 'Year';

              if (CanCangeActive) {
                this.vModelOptions = 7;
                CanCangeActive = false;
              }
            }

            this.item = {};
            this.item.value = i;
            this.item.text = textLookUp;
            this.dataLookUpOptionDate.push(this.item);
          }
        }

        if (DateMode == '0000000') {
          this.item = {};
          this.item.value = 1;
          this.item.text = 'Date';
          this.dataLookUpOptionDate.push(this.item);
          this.optionDisable.date = true;
          this.vModelOptions = 1;
        }
      } else if (this.resolutionWidth >= 900) {
        // For Large Device
        // Date
        this.optionDisable.date = DateMode[0] != '1'; // Date Range

        this.optionDisable.range = DateMode[1] != '1'; // Week

        this.optionDisable.week = DateMode[2] != '1'; // Month

        this.optionDisable.month = DateMode[3] != '1'; // Quarter

        this.optionDisable.quarter = DateMode[4] != '1'; // Semester

        this.optionDisable.semester = DateMode[5] != '1'; // Year

        this.optionDisable.year = DateMode[6] != '1';

        if (!this.optionDisable.date) {
          this.vModelOptions = 1;
        } else if (!this.optionDisable.range) {
          this.vModelOptions = 2;
        } else if (!this.optionDisable.week) {
          this.vModelOptions = 3;
        } else if (!this.optionDisable.month) {
          this.vModelOptions = 4;
        } else if (!this.optionDisable.quarter) {
          this.vModelOptions = 5;
        } else if (!this.optionDisable.semester) {
          this.vModelOptions = 6;
        } else if (!this.optionDisable.year) {
          this.vModelOptions = 7;
        } // If No options disabled check option date


        if (DateMode == '0000000') {
          this.vModelOptions = 1;
        }
      } // Check Options Before if now enabled change to option before


      if (vModelOptionB4 > 0 && DateMode[vModelOptionB4 - 1] == '1') {
        this.vModelOptions = vModelOptionB4;
      }
    },
    getDateDescription: function getDateDescription() {
      if (this.vModelOptions == 1) {
        return "Date ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).format('DD/MM/YYYY'));
      }

      if (this.vModelOptions == 2) {
        return "Date Range: ".concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateStart).format('DD/MM/YYYY'), " - ").concat(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateEnd).format('DD/MM/YYYY'));
      }

      if (this.vModelOptions == 3) {
        return "Week ".concat(this.vModelLookUp.week, " of Year ").concat(this.vModelLookUp.yearWeek);
      }

      if (this.vModelOptions == 4) {
        return "Month ".concat(this.vModelLookUp.month, " of Year ").concat(this.vModelLookUp.yearMonth);
      }

      if (this.vModelOptions == 5) {
        return "Quarter ".concat(this.vModelLookUp.quarter, " of Year ").concat(this.vModelLookUp.yearQuarter);
      }

      if (this.vModelOptions == 6) {
        return "Semester ".concat(this.vModelLookUp.semester, " of Year ").concat(this.vModelLookUp.yearSemester);
      }

      if (this.vModelOptions == 7) {
        return "Year ".concat(this.vModelLookUp.year);
      }
    },
    getDateConditionAuditDate: function getDateConditionAuditDate(dateParameter) {
      return "".concat(dateParameter, "=\"").concat(this.auditDate, "\"");
    },
    getDateConditionAuditDate2: function getDateConditionAuditDate2(dateParameter1, dateParameter2) {
      return "((".concat(dateParameter1, "<=").concat(this.auditDate, " AND ").concat(dateParameter2, ">=").concat(this.auditDate, "))");
    },
    getDateCondition01: function getDateCondition01() {
      // return Start Date
      if (this.vModelOptions == 1) {
        return this.vModelDateSelected;
      }

      if (this.vModelOptions == 2) {
        return this.vModelDateStart;
      }

      if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          return "".concat(this.vModelLookUp.yearWeek, "-01-01");
        }

        if (this.vModelLookUp.week == 53) {
          var _dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week + 1).toDate());

          return _dateFromWeek;
        }

        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return dateFromWeek;
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return dateFromMonth;
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return dateFromQuarter;
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return dateFromSemester;
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return dateFromYear;
      }
    },
    getDateCondition02: function getDateCondition02() {
      // return End Date
      if (this.vModelOptions == 1) {
        return this.vModelDateSelected;
      }

      if (this.vModelOptions == 2) {
        return this.vModelDateEnd;
      }

      if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 53) {
          return "".concat(this.vModelLookUp.yearWeek, "-01-01");
        }

        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
        return dateFromWeek;
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return dateFromMonth;
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return dateFromQuarter;
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return dateFromSemester;
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return dateFromYear;
      }
    },
    getDateCondition11: function getDateCondition11(dateParameter) {
      var resultTemp = '';

      if (this.vModelOptions == 1) {
        resultTemp = "".concat(dateParameter, "=\"").concat(this.vModelDateSelected, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 2) {
        resultTemp = "".concat(dateParameter, ">=\"").concat(this.vModelDateStart, "\" AND ").concat(dateParameter, "<=\"").concat(this.vModelDateEnd, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 3) {
        resultTemp = "WEEK(".concat(dateParameter, ", 3)=\"").concat(this.vModelLookUp.week, "\" AND YEAR(").concat(dateParameter, ")=\"").concat(this.vModelLookUp.yearWeek, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 4) {
        resultTemp = "MONTH(".concat(dateParameter, ")=\"").concat(this.vModelLookUp.month, "\" AND YEAR(").concat(dateParameter, ")=\"").concat(this.vModelLookUp.yearMonth, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 5) {
        resultTemp = "MONTH(".concat(dateParameter, ")>=\"").concat(this.vModelLookUp.quarter * 3 - 2, "\"") + " AND MONTH(".concat(dateParameter, ")<=\"").concat(this.vModelLookUp.quarter * 3, "\"") + " AND YEAR(".concat(dateParameter, ")=\"").concat(this.vModelLookUp.yearQuarter, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 6) {
        resultTemp = "MONTH(".concat(dateParameter, ")>=\"").concat(this.vModelLookUp.semester * 6 - 5, "\"") + " AND MONTH(".concat(dateParameter, ")<=\"").concat(this.vModelLookUp.semester * 6, "\"") + " AND YEAR(".concat(dateParameter, ")=\"").concat(this.vModelLookUp.yearSemester, "\"");
        return resultTemp;
      }

      if (this.vModelOptions == 7) {
        resultTemp = "YEAR(".concat(dateParameter, ")=\"").concat(this.vModelLookUp.year, "\"");
        return resultTemp;
      }
    },
    getDateCondition12A: function getDateCondition12A(dateParameter) {
      // DateParameter <= Start Date
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, "<=\"").concat(this.vModelDateSelected, "\"");
      }

      if (this.vModelOptions == 2) {
        return "".concat(dateParameter, "<=\"").concat(this.vModelDateStart, "\"");
      }

      if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return "".concat(dateParameter, "<=\"").concat(dateFromWeek, "\"");
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromMonth, "\"");
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromQuarter, "\"");
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromSemester, "\"");
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromYear, "\"");
      }
    },
    getDateCondition12B: function getDateCondition12B(dateParameter) {
      // DateParameter < Start Date
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, "<\"").concat(this.vModelDateSelected, "\"");
      }

      if (this.vModelOptions == 2) {
        return "".concat(dateParameter, "<\"").concat(this.vModelDateStart, "\"");
      }

      if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return "".concat(dateParameter, "<\"").concat(dateFromWeek, "\"");
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return "".concat(dateParameter, "<\"").concat(dateFromMonth, "\"");
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return "".concat(dateParameter, "<\"").concat(dateFromQuarter, "\"");
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return "".concat(dateParameter, "<\"").concat(dateFromSemester, "\"");
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return "".concat(dateParameter, "<\"").concat(dateFromYear, "\"");
      }
    },
    getDateCondition12C: function getDateCondition12C(dateParameter) {
      // DateParameter > Start Date
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, ">\"").concat(this.vModelDateSelected, "\"");
      }

      if (this.vModelOptions == 2) {
        return "".concat(dateParameter, ">\"").concat(this.vModelDateStart, "\"");
      }

      if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());
        return "".concat(dateParameter, ">\"").concat(dateFromWeek, "\"");
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromMonth, "\"");
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).startOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromQuarter, "\"");
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).startOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromSemester, "\"");
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).startOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromYear, "\"");
      }
    },
    getDateCondition13: function getDateCondition13(dateParameter) {
      // dateParameter <= End Date
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, "<=\"").concat(this.vModelDateSelected, "\"");
      }

      if (this.vModelOptions == 2) {
        return "".concat(dateParameter, "<=\"").concat(this.vModelDateEnd, "\"");
      }

      if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
        return "".concat(dateParameter, "<=\"").concat(dateFromWeek, "\"");
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromMonth, "\"");
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromQuarter, "\"");
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromSemester, "\"");
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return "".concat(dateParameter, "<=\"").concat(dateFromYear, "\"");
      }
    },
    getDateCondition13A: function getDateCondition13A(dateParameter) {
      // DateParameter > End Date
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, ">\"").concat(this.vModelDateSelected, "\"");
      }

      if (this.vModelOptions == 2) {
        return "".concat(dateParameter, ">\"").concat(this.vModelDateEnd, "\"");
      }

      if (this.vModelOptions == 3) {
        var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
        return "".concat(dateParameter, ">\"").concat(dateFromWeek, "\"");
      }

      if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        dateFromMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromMonth, "\"");
      }

      if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate();
        dateFromQuarter = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromQuarter).endOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromQuarter, "\"");
      }

      if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate();
        dateFromSemester = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromSemester).endOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromSemester, "\"");
      }

      if (this.vModelOptions == 7) {
        var dateFromYear = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(11).year(this.vModelLookUp.year).toDate();
        dateFromYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromYear).endOf('month'));
        return "".concat(dateParameter, ">\"").concat(dateFromYear, "\"");
      }
    },
    getDateCondition1MTD: function getDateCondition1MTD(dateParameter) {
      if (this.vModelOptions == 1) {
        return "".concat(dateParameter, ">=\"").concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).startOf('month')), "\" AND ").concat(dateParameter, "<=\"").concat(this.vModelDateSelected, "\"");
      }
    },
    getDateCondition1YTD: function getDateCondition1YTD(dateParameter) {
      if (this.vModelOptions == 1) {
        var startDateOfTheYear = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).month(0).toDate()).startOf('month');
        return "".concat(dateParameter, ">=\"").concat(Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(startDateOfTheYear), "\" AND ").concat(dateParameter, "<=\"").concat(this.vModelDateSelected, "\"");
      }
    },
    getDateCondition1YTDLastYear: function getDateCondition1YTDLastYear(dateParameter) {
      if (this.vModelOptions == 1) {
        var startOfDateMonthLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
        var dateLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M'));
        return "".concat(dateParameter, ">=\"").concat(startOfDateMonthLastYear, "\" AND ").concat(dateParameter, "<=\"").concat(dateLastYear, "\"");
      }
    },
    getDateCondition1YTDFromLastYear: function getDateCondition1YTDFromLastYear(dateParameter) {
      if (this.vModelOptions == 1) {
        var startOfDateMonthLastYear = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()(this.vModelDateSelected).add(-12, 'M')).startOf('month'));
        return "".concat(dateParameter, ">=\"").concat(startOfDateMonthLastYear, "\" AND ").concat(dateParameter, "<=\"").concat(this.vModelDateSelected, "\"");
      }
    },
    getDateCondition21: function getDateCondition21(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = "".concat(this.vModelLookUp.yearWeek, "-01-01");
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = "".concat(this.vModelLookUp.yearWeek, "-12-31");
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = "".concat(this.vModelLookUp.year, "-01-01");
        dateTo = "".concat(this.vModelLookUp.year, "-12-31");
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = "\"".concat(dateFrom, "\"");
        dateTo = "\"".concat(dateTo, "\"");
        return "((".concat(dateParameter1, "<=").concat(dateTo, " AND ").concat(dateParameter2, ">=").concat(dateFrom, "))");
      }
    },
    getDateCondition22: function getDateCondition22(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = "".concat(this.vModelLookUp.yearWeek, "-01-01");
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek2 = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek2;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = "".concat(this.vModelLookUp.yearWeek, "-12-31");
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = "".concat(this.vModelLookUp.year, "-01-01");
        dateTo = "".concat(this.vModelLookUp.year, "-12-31");
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = "\"".concat(dateFrom, "\"");
        dateTo = "\"".concat(dateTo, "\"");
        return "(((".concat(dateParameter1, "<").concat(dateParameter2, ") AND (").concat(dateParameter1, "<=").concat(dateTo, " AND ").concat(dateParameter2, ">").concat(dateFrom, ")) OR ") + "((".concat(dateParameter1, "=").concat(dateParameter2, ") AND (").concat(dateParameter1, ">=").concat(dateFrom, " AND ").concat(dateParameter2, "<=").concat(dateTo, ")))");
      }
    },
    getDateCondition23: function getDateCondition23(dateParameter1, dateParameter2) {
      var dateFrom = '';
      var dateTo = '';

      if (this.vModelOptions == 1) {
        dateFrom = this.vModelDateSelected;
        dateTo = this.vModelDateSelected;
      } else if (this.vModelOptions == 2) {
        dateFrom = this.vModelDateStart;
        dateTo = this.vModelDateEnd;
      } else if (this.vModelOptions == 3) {
        if (this.vModelLookUp.week == 1) {
          dateFrom = "".concat(this.vModelLookUp.yearWeek, "-01-01");
        } else if (this.vModelOptions == 53) {
          var dateFromStartWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek + 1).week(1).toDate());
          dateFrom = dateFromStartWeek;
        } else {
          var _dateFromStartWeek3 = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate());

          dateFrom = _dateFromStartWeek3;
        }

        if (this.vModelLookUp.week == 53) {
          dateTo = "".concat(this.vModelLookUp.yearWeek, "-12-31");
        } else {
          var dateFromWeek = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().day('Monday').year(this.vModelLookUp.yearWeek).week(this.vModelLookUp.week).toDate()).add(6, 'days'));
          dateTo = dateFromWeek;
        }
      } else if (this.vModelOptions == 4) {
        var dateFromMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.month - 1).year(this.vModelLookUp.yearMonth).toDate();
        var startOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).startOf('month'));
        var endOfMonth = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(moment__WEBPACK_IMPORTED_MODULE_6___default()(dateFromMonth).endOf('month'));
        dateFrom = startOfMonth;
        dateTo = endOfMonth;
      } else if (this.vModelOptions == 5) {
        var dateFromQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.quarter - 1) * 3).year(this.vModelLookUp.yearQuarter).toDate();
        var dateToQuarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.quarter * 3 - 1).year(this.vModelLookUp.yearQuarter).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromQuarter);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToQuarter);
      } else if (this.vModelOptions == 6) {
        var dateFromSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month((this.vModelLookUp.semester - 1) * 6).year(this.vModelLookUp.yearSemester).toDate();
        var dateToSemester = moment__WEBPACK_IMPORTED_MODULE_6___default()(moment__WEBPACK_IMPORTED_MODULE_6___default()().date(1).month(this.vModelLookUp.semester * 6 - 1).year(this.vModelLookUp.yearSemester).toDate()).endOf('month');
        dateFrom = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateFromSemester);
        dateTo = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["formatDateDatabase"])(dateToSemester);
      } else if (this.vModelOptions == 7) {
        dateFrom = "".concat(this.vModelLookUp.year, "-01-01");
        dateTo = "".concat(this.vModelLookUp.year, "-12-31");
      }

      if (dateFrom != '' && dateTo != '') {
        dateFrom = "\"".concat(dateFrom, "\"");
        dateTo = "\"".concat(dateTo, "\"");
        return "((".concat(dateFrom, ">=").concat(dateParameter1, " AND ").concat(dateTo, "<").concat(dateParameter2, "))");
      }
    },
    setRadioCheck: function setRadioCheck(param, changeFrom) {
      if (param != undefined) {
        this.vModelOptions = param;
      }

      var tempStartDate = new Date(this.vModelDateStart);
      var tempEndDate = new Date(this.vModelDateEnd); // 1=From Date Start 2=From Date End

      if (changeFrom != undefined) {
        if (changeFrom == 1 && tempStartDate > tempEndDate) {
          this.vModelDateEnd = this.vModelDateStart;
        } else if (changeFrom == 2 && tempEndDate < tempStartDate) {
          this.vModelDateStart = this.vModelDateEnd;
        }
      }
    },
    search: function search() {
      // Modify Search Capitalize word
      this.searchword = Object(_utils_format_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(this.searchword);
      this.$refs.tree.searchNodes(this.searchword);
    },
    nodeclick: function nodeclick() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _yield$reportResource2, data, $i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.reportFileName = '';
                _this3.reportCodeInt = 0;
                _this3.selectedNode = _this3.$refs.tree.getSelectedNodes();

                if (!(_this3.selectedNode.length > 0)) {
                  _context3.next = 22;
                  break;
                }

                _context3.next = 6;
                return _this3.selectedNode[0].id;

              case 6:
                _this3.reportCodeInt = _context3.sent;
                _this3.modalTitle = _this3.selectedNode[0].title;

                if (!(_this3.reportCodeInt > 1000)) {
                  _context3.next = 20;
                  break;
                }

                _this3.setDateRangeActive(_this3.reportCodeInt);

                _this3.$loadingIndicator(_this3);

                _context3.next = 13;
                return reportResource.reportTemplate({
                  reportCode: _this3.reportCodeInt
                });

              case 13:
                _yield$reportResource2 = _context3.sent;
                data = _yield$reportResource2.data;
                _this3.dataLookUpTemplate = data.reportTemplate;

                _this3.$vs.loading.close('#layout--main>.con-vs-loading'); // Report having Template


                if (data.reportTemplate.length > 0) {
                  _this3.optionDisableTemplate = false;

                  for ($i = 0; $i < _this3.dataLookUpTemplate.length; $i++) {
                    if (data.reportTemplate[$i].is_default == '-1') {
                      _this3.vModelLookUpIdTemplate = data.reportTemplate[$i].id_log;
                      _this3.isTemplateSystemDefault = data.reportTemplate[$i].is_system == '-1';
                    }
                  }
                } else {
                  // Setup File Name Report if Have No Template
                  _this3.optionDisableTemplate = true;
                  _this3.vModelLookUpIdTemplate = 0;
                  _this3.isTemplateSystemDefault = true;

                  if (_this3.reportCodeInt == _this3.global.reportList.dailyRevenueReport) {
                    _this3.reportFileName = 'DailyRevenueReport.mrt';
                  }
                }

                _this3.showModal = true;
                setTimeout(function () {
                  if (_this3.global.dialog.isAddHeaderCloseButton) {
                    _this3.addDialogCloseButton(_this3.firstDialog);

                    _this3.element = document.getElementsByClassName('filter-string').length;
                  }

                  _this3.$vs.loading.close('#layout--main>.con-vs-loading');
                }, 100);

              case 20:
                _context3.next = 23;
                break;

              case 22:
                _this3.reportCodeInt = 0;

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getDataReportList: function getDataReportList() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _yield$reportResource3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.$loadingIndicator(_this4);

                _context4.next = 3;
                return reportResource.reportListData({
                  userID: _this4.global.userInfo.code
                });

              case 3:
                _yield$reportResource3 = _context4.sent;
                data = _yield$reportResource3.data;
                _this4.treeData = data.dataTree;

                _this4.$vs.loading.close('#layout--main>.con-vs-loading');

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getYearSelect: function getYearSelect() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.auditDateStr = _this5.auditDate.split('-');
                _this5.yearInt = parseInt(_this5.auditDateStr[0]);
                _this5.jsonObj = [];

                for (i = _this5.yearInt - 5; i <= _this5.yearInt + 5; i++) {
                  _this5.item = {};
                  _this5.item.text = i;
                  _this5.item.value = i;

                  _this5.jsonObj.push(_this5.item);
                }

                _this5.dataLookUpYear = _this5.jsonObj;
                _this5.vModelLookUp.yearWeek = _this5.yearInt;
                _this5.vModelLookUp.yearMonth = _this5.yearInt;
                _this5.vModelLookUp.yearQuarter = _this5.yearInt;
                _this5.vModelLookUp.yearSemester = _this5.yearInt;
                _this5.vModelLookUp.year = _this5.yearInt;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getWeekSelect: function getWeekSelect() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.jsonObj = [];

                for (i = 1; i <= 53; i++) {
                  _this6.item = {};
                  _this6.item.text = i;
                  _this6.item.value = i;

                  _this6.jsonObj.push(_this6.item);
                }

                _this6.dataLookUpWeek = _this6.jsonObj;

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getResolution: function getResolution() {
      this.resolutionWidth = screen.width;
    },
    dispatchAuditDate: function dispatchAuditDate() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _this7.$store.dispatch('getAuditDate');

              case 2:
                _context7.next = 4;
                return _this7.auditDate;

              case 4:
                _this7.vModelDateSelected = _context7.sent;
                _this7.vModelDateStart = _this7.vModelDateSelected;
                _this7.vModelDateEnd = _this7.vModelDateSelected;

                _this7.getWeekSelect();

                _this7.getYearSelect();

                _this7.getDataReportList(); // get Audit Date week


                _this7.vModelLookUp.week = moment__WEBPACK_IMPORTED_MODULE_6___default()(_this7.auditDate).format('w'); // get Audit Date Month

                _this7.vModelLookUp.month = moment__WEBPACK_IMPORTED_MODULE_6___default()(_this7.auditDate).format('M'); // get Audit Date Quater

                _this7.vModelLookUp.quarter = moment__WEBPACK_IMPORTED_MODULE_6___default()(_this7.auditDate).format('Q'); // get Audit Date Semester

                _this7.vModelLookUp.semester = _this7.vModelLookUp.month <= 6 ? '1' : '2';

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // Preview report access
    getPreviewReportAccess: function getPreviewReportAccess() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var _yield$userSettingRes, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return userSettingResource.getOtherAccess({
                  code: _this8.userID
                });

              case 2:
                _yield$userSettingRes = _context8.sent;
                data = _yield$userSettingRes.data;

                if (data.otherAccess != undefined && data.otherAccess != null && data.otherAccess != '') {
                  _this8.editReportAccess = data.otherAccess[_this8.global.otherAccessOrder.editReport];
                  _this8.exportReportAccess = data.otherAccess[_this8.global.otherAccessOrder.exportReport];
                  _this8.customizeReportAccess = data.otherAccess[_this8.global.otherAccessOrder.customizeReport];
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    back: function back() {
      if (this.$refs.dialogsecond.showDialog) {
        this.$refs.dialogsecond.showDialog = false;
      } else {
        this.showModal = false;
      }
    }
  },
  computed: {
    auditDate: function auditDate() {
      return this.$store.state.auditLog.auditDate;
    },
    userID: function userID() {
      return this.$store.state.auth.accountCode;
    },
    scrollbarTag: function scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  created: function created() {
    var _this9 = this;

    // Handle Back Button & forward on browser create hook
    var unregisterRouterGuard = this.$router.beforeEach(function (to, from, next) {
      if (_this9.showModal || _this9.$refs.dialogsecond.showDialog) {
        _this9.back();

        next(false);
      } else {
        next();
      }
    }); // Destroyed hook

    this.$once('hook:destroyed', function () {
      unregisterRouterGuard();
    });
    this.dispatchAuditDate();
  }
}, _defineProperty(_components$data$watc, "beforeMount", function beforeMount() {
  this.getPreviewReportAccess();
}), _defineProperty(_components$data$watc, "mounted", function mounted() {
  var _this10 = this;

  return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _this10.getResolution();

            setTimeout(function () {
              var elem = document.getElementById('search');
              elem.click();
            }, 3000);
            _this10.element = document.getElementsByClassName('filter-string').length;

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }))();
}), _components$data$watc);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");
/* harmony import */ var _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/pages/components/DialogSecond.vue */ "./resources/js/src/views/pages/components/DialogSecond.vue");
/* harmony import */ var _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/alert.js */ "./resources/js/src/utils/alert.js");


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




var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_1__["AgGridVue"],
    DialogThree: _views_pages_components_DialogSecond_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ['modeDataEditor', 'idLogTemplate', 'reportCodeInt'],
  data: function data() {
    return {
      radiosOrientation: 1,
      dataLookUpPageSize: [{
        value: 0,
        text: '(Custom)'
      }, {
        value: 1,
        text: 'A4'
      }, {
        value: 2,
        text: 'Letter'
      }, {
        value: 3,
        text: 'Legal'
      }, {
        value: 4,
        text: 'Folio'
      }],
      vModel: {},
      vModelShowFooter: false,
      vModelHorizontalBorder: false,
      vModelVerticalBorder: false,
      disabledPaperHeightWidth: false,
      disabledButtonSave: false,
      // Validators
      regex: '',
      // Ag-Grid 1
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      rowSelection: null,
      // Ag-Grid 2
      columnDefs2: null,
      rowData2: null,
      gridOptions2: null,
      gridApi2: null,
      columnApi2: null,
      rowSelection2: null,
      // Ag-Grid 3
      columnDefs3: null,
      rowData3: null,
      gridOptions3: null,
      gridApi3: null,
      columnApi3: null,
      rowSelection3: null,
      // Ag-Grid 4
      columnDefs4: null,
      rowData4: null,
      gridOptions4: null,
      gridApi4: null,
      columnApi4: null,
      rowSelection4: null,
      // Ag-Grid 5
      columnDefs5: null,
      rowData5: null,
      gridOptions5: null,
      gridApi5: null,
      columnApi5: null,
      rowSelection5: null,
      // Footer Type Cell Lookup
      footerTypeCellLookUp: {
        0: '(None)',
        1: 'Text "Total"',
        2: 'SUM',
        3: 'COUNT',
        4: 'COUNT IF <> ""',
        5: 'COUNT IF <> 0'
      },
      // Const Format Cell Lookup
      constReportFormatCellLookup: {
        0: '(None)',
        1: '%2.0n',
        2: '%2.1n',
        3: '%2.2n',
        4: '%2.3n',
        5: 'dd/MM/yyyy',
        6: 'dd/MM/yy',
        7: 'dd-MM-yyyy',
        8: 'dd-MM-yy',
        9: 'dd/MM/yyyy HH:mm:ss',
        10: 'dd/MM/yy HH:mm:ss',
        11: 'dd/MM/yyyy HH:mm',
        12: 'dd/MM/yy HH:mm',
        13: 'HH:mm:ss',
        14: 'HH:mm'
      },
      // const Format Font Cell Lookup
      constReportFormatFontCellLookup: {
        0: 'Arial',
        1: 'Tahoma',
        2: 'Verdana',
        3: 'Microsoft Sans Serif',
        4: 'Times New Roman',
        5: 'Comic Sans MS',
        6: 'Lucida Console'
      },
      // const Aligment Cell LookUp
      constAligmentCellLookUp: {
        0: 'Left',
        1: 'Right',
        2: 'Center'
      },
      // Const Is Ascending Lookup
      constIsAscendingCellLookUp: {
        '-1': 'ASC',
        0: 'DESC'
      }
    };
  },
  beforeMount: function beforeMount() {
    this.gridOptions = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions2 = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions3 = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions4 = {
      rowHeight: this.global.rowHeightDefault
    };
    this.gridOptions5 = {
      rowHeight: this.global.rowHeightDefault
    }; // Ag grid

    this.defaultColDef = {
      // sortable: true,
      // filter: true,
      resizable: true
    }; // Ag grid 1

    this.columnDefs = [{
      headerName: '',
      valueGetter: "'Drag'",
      dndSource: true,
      suppressMenu: true,
      width: 40
    }, {
      headerName: this.$t('report.editor.table.availableFieldList'),
      field: 'field_name',
      suppressMenu: true,
      width: 170
    }]; // Ag grid 2

    this.columnDefs2 = [{
      headerName: this.$t('report.editor.table.groupFieldName'),
      field: 'field_name',
      suppressMenu: true,
      width: 180,
      rowDrag: true
    }]; // Ag grid 3

    this.columnDefs3 = [{
      headerName: this.$t('report.editor.table.orderFieldName'),
      field: 'field_name',
      suppressMenu: true,
      width: 123,
      rowDrag: true
    }, {
      headerName: '',
      field: 'is_ascending',
      width: 60,
      suppressMenu: true,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constIsAscendingCellLookUp)
      },
      refData: this.constIsAscendingCellLookUp
    }]; // Ag grid 4

    this.columnDefs4 = [{
      headerName: this.$t('report.editor.table.reportGrouping'),
      field: 'field_name',
      suppressMenu: true,
      width: 180,
      rowDrag: true
    }]; // Ag grid 5

    this.columnDefs5 = [{
      headerName: this.$t('report.editor.table.fieldName'),
      field: 'field_name',
      width: 120,
      suppressMenu: true,
      rowDrag: true
    }, {
      headerName: this.$t('report.editor.table.headerName'),
      field: 'header_name',
      width: 120,
      suppressMenu: true,
      editable: true
    }, {
      headerName: this.$t('report.editor.table.footerType'),
      field: 'footer_type',
      width: 120,
      suppressMenu: true,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.footerTypeCellLookUp)
      },
      refData: this.footerTypeCellLookUp
    }, {
      headerName: this.$t('report.editor.table.format'),
      field: 'format_code',
      width: 120,
      suppressMenu: true,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constReportFormatCellLookup)
      },
      refData: this.constReportFormatCellLookup
    }, {
      headerName: this.$t('report.editor.table.width'),
      field: 'width',
      width: 120,
      suppressMenu: true,
      editable: true
    }, {
      headerName: this.$t('report.editor.table.font'),
      field: 'font',
      width: 120,
      suppressMenu: true,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constReportFormatFontCellLookup)
      },
      refData: this.constReportFormatFontCellLookup
    }, {
      headerName: this.$t('report.editor.table.fontSize'),
      field: 'font_size',
      width: 120,
      suppressMenu: true,
      editable: true
    }, {
      headerName: 'Font Color',
      field: 'font_color',
      width: 120
    }, {
      headerName: this.$t('report.editor.table.alignment'),
      field: 'alignment',
      width: 120,
      suppressMenu: true,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constAligmentCellLookUp)
      },
      refData: this.constAligmentCellLookUp
    }, {
      headerName: this.$t('report.editor.table.headerFontSize'),
      field: 'header_font_size',
      suppressMenu: true,
      width: 150,
      editable: true
    }, {
      headerName: this.$t('report.editor.table.headerFontColor'),
      field: 'header_font_color',
      suppressMenu: true,
      width: 150
    }, {
      headerName: this.$t('report.editor.table.headerAlignment'),
      field: 'header_alignment',
      suppressMenu: true,
      width: 150,
      editable: true,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: this.extractValues(this.constAligmentCellLookUp)
      },
      refData: this.constAligmentCellLookUp
    }];
  },
  methods: {
    onDragOver: function onDragOver(event) {
      var dragSupported = event.dataTransfer.length;

      if (dragSupported) {
        event.dataTransfer.dropEffect = 'move';
      }

      event.preventDefault();
    },
    onDropReportGroup: function onDropReportGroup(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi2.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportOrder: function onDropReportOrder(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name,
        is_ascending: '-1'
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi3.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportGrouping: function onDropReportGrouping(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi4.applyTransaction(transaction);
      event.preventDefault();
    },
    onDropReportField: function onDropReportField(event) {
      var userAgent = window.navigator.userAgent;
      var isIE = userAgent.indexOf('Trident/') >= 0;
      var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
      var data = JSON.parse(jsonData);
      var newData = {
        field_name: data.field_name,
        header_name: data.field_name,
        footer_type: 0,
        format_code: 0,
        width: 100,
        font: 0,
        font_size: 9,
        font_color: 0,
        alignment: 0,
        header_font_size: 9,
        header_font_color: 0,
        header_alignment: 0
      };
      var transaction = {
        add: [newData]
      };
      this.gridApi5.applyTransaction(transaction);
      event.preventDefault();
    },
    onGridReady: function onGridReady(params) {},
    editReportEditor: function editReportEditor() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$reportResource, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return reportResource.editReportEditor({
                  id_log: _this.idLogTemplate
                });

              case 3:
                _yield$reportResource = _context.sent;
                data = _yield$reportResource.data;
                _this.vModel = data.reportTemplate;
                _this.vModelShowFooter = _this.vModel.show_footer == '-1';
                _this.vModelHorizontalBorder = _this.vModel.horizontal_border == '-1';
                _this.vModelVerticalBorder = _this.vModel.vertical_border == '-1';
                _this.disabledPaperHeightWidth = _this.vModel.paper_size !== 0; // Set data Ag Grid

                _this.rowData = data.reportDefaultField;

                if (_this.modeDataEditor == _this.global.modeData.edit || _this.modeDataEditor == _this.global.modeData.duplicate) {
                  _this.rowData2 = data.reportGroupField;
                  _this.rowData3 = data.reportOrderField;
                  _this.rowData4 = data.reportGroupingField;
                  _this.rowData5 = data.reportTemplateField;
                }

                if (_this.modeDataEditor == _this.global.modeData.insert) {
                  _this.rowData2 = [];
                  _this.rowData3 = [];
                  _this.rowData4 = [];
                  _this.rowData5 = [];
                  _this.vModel.group_level = 0;
                  _this.vModelShowFooter = true;
                  _this.vModelHorizontalBorder = false;
                  _this.vModelVerticalBorder = false;
                  _this.vModel.paper_size = 1;
                  _this.vModel.is_portrait = '-1';
                }

                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);

                _this.$refs.dialogthree.showDialogWarning(_this.$t('message.informationTitle'), _this.$t('message.errorFetchData'), 'dialog-three');

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }))();
    },
    handleInputPaperSize: function handleInputPaperSize() {
      this.disabledPaperHeightWidth = this.vModel.paper_size !== 0;
    },
    setAsDefaultTemplate: function setAsDefaultTemplate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$vs.loading({
                  container: '#button-default-template',
                  scale: _this2.global.scaleLoadingButton
                });

                _context2.prev = 1;
                _context2.next = 4;
                return reportResource.setAsDefaultTemplate({
                  report_code: _this2.reportCodeInt,
                  id_log: _this2.idLogTemplate,
                  user_id: _this2.global.userInfo.code
                });

              case 4:
                _this2.$vs.loading.close('#button-default-template>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                _this2.$vs.loading.close('#button-default-template>.con-vs-loading');

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    },
    setAsSystemDefaultTemplate: function setAsSystemDefaultTemplate(isSystem) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isSystem == '-1') {
                  _this3.$vs.loading({
                    container: '#button-default-system',
                    scale: _this3.global.scaleLoadingButton
                  });
                } else {
                  _this3.$vs.loading({
                    container: '#button-default-system-clear',
                    scale: _this3.global.scaleLoadingButton
                  });
                }

                _context3.prev = 1;
                _context3.next = 4;
                return reportResource.setAsSystemDefaultTemplate({
                  report_code: _this3.reportCodeInt,
                  is_system: isSystem,
                  id_log: _this3.idLogTemplate,
                  user_id: _this3.global.userInfo.code
                });

              case 4:
                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();

                _this3.$vs.loading.close('#button-default-system>.con-vs-loading');

                _this3.$vs.loading.close('#button-default-system-clear>.con-vs-loading');

                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);

                _this3.$vs.loading.close('#button-default-system>.con-vs-loading');

                _this3.$vs.loading.close('#button-default-system-clear>.con-vs-loading');

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }))();
    },
    saveAtributReportTemplate: function saveAtributReportTemplate(templateId) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var reportGroup, reportOrder, reportGrouping, reportField;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Report Group
                reportGroup = [];

                _this4.gridApi2.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportGroup.push(node.data);
                }); // Report Order


                reportOrder = [];

                _this4.gridApi3.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportOrder.push(node.data);
                }); // Report Grouping


                reportGrouping = [];

                _this4.gridApi4.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  reportGrouping.push(node.data);
                }); // Report Default Field


                reportField = [];

                _this4.gridApi5.forEachNode(function (node, index) {
                  node.data.template_id = templateId;
                  node.data.id_sort = index + 1;
                  node.data.alignment = node.data.alignment.toString();
                  node.data.header_alignment = node.data.header_alignment.toString();
                  reportField.push(node.data);
                });

                _context4.prev = 8;
                _context4.next = 11;
                return reportResource.updateTemplateDefaultReport({
                  templateId: templateId,
                  reportGroup: reportGroup,
                  reportOrder: reportOrder,
                  reportGrouping: reportGrouping,
                  reportField: reportField
                });

              case 11:
                _this4.$vs.loading.close('#button-save-main>.con-vs-loading');

                _utils_alert_js__WEBPACK_IMPORTED_MODULE_4__["default"].acceptAlertSucces();

                _this4.closeReportTemplateEditor();

                _this4.closeModalReportParent();

                _this4.disabledButtonSave = false;
                _context4.next = 22;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](8);

                _this4.$vs.loading.close('#button-save-main>.con-vs-loading');

                _this4.disabledButtonSave = false;

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[8, 18]]);
      }))();
    },
    saveReportTemplate: function saveReportTemplate() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this5.gridApi4.getDisplayedRowCount() != _this5.vModel.group_level) {
                  _this5.$refs.dialogthree.showDialogWarning(_this5.$t('message.informationTitle'), _this5.$t('message.reportGroupLevel'), 'dialog-three');
                } else {
                  _this5.$validator.validateAll().then( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(result) {
                      var _yield$reportResource2, data, _yield$reportResource3, _data;

                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              if (!result) {
                                _context5.next = 25;
                                break;
                              }

                              _this5.disabledButtonSave = true; // Change Variable Report Template

                              _this5.$vs.loading({
                                container: '#button-save-main',
                                scale: _this5.global.scaleLoadingButton
                              });

                              _this5.vModel.show_footer = _this5.vModelShowFooter ? '-1' : '0';
                              _this5.vModel.horizontal_border = _this5.vModelHorizontalBorder ? '-1' : '0';
                              _this5.vModel.vertical_border = _this5.vModelVerticalBorder ? '-1' : '0';
                              _this5.vModel.user_id = _this5.global.userInfo.code;

                              if (!(_this5.modeDataEditor == _this5.global.modeData.edit)) {
                                _context5.next = 15;
                                break;
                              }

                              _context5.next = 10;
                              return reportResource.updateTemplateReport(_this5.vModel);

                            case 10:
                              _yield$reportResource2 = _context5.sent;
                              data = _yield$reportResource2.data;

                              if (data.status == 0) {
                                _this5.saveAtributReportTemplate(_this5.idLogTemplate);
                              }

                              _context5.next = 23;
                              break;

                            case 15:
                              if (!(_this5.modeDataEditor == _this5.global.modeData.insert || _this5.modeDataEditor == _this5.global.modeData.duplicate)) {
                                _context5.next = 23;
                                break;
                              }

                              _context5.next = 18;
                              return reportResource.insertTemplateReport(_this5.vModel);

                            case 18:
                              _yield$reportResource3 = _context5.sent;
                              _data = _yield$reportResource3.data;

                              if (!(_data.status == 0)) {
                                _context5.next = 23;
                                break;
                              }

                              _context5.next = 23;
                              return _this5.saveAtributReportTemplate(_data.templateId);

                            case 23:
                              _context5.next = 26;
                              break;

                            case 25:
                              _this5.$refs.dialogthree.showDialogWarning(_this5.$t('message.informationTitle'), _this5.$t('message.required'), 'dialog-three');

                            case 26:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                }

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    closeReportTemplateEditor: function closeReportTemplateEditor() {
      this.$emit('showReportEditor');
    },
    closeModalReportParent: function closeModalReportParent() {
      this.$emit('closeModalReport');
    },
    getContextMenuItems2: function getContextMenuItems2(params) {
      var vm = this;
      var result = [{
        name: this.$t('report.editor.deleteField'),
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi2.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems3: function getContextMenuItems3(params) {
      var vm = this;
      var result = [{
        name: this.$t('report.editor.deleteField'),
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi3.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems4: function getContextMenuItems4(params) {
      var vm = this;
      var result = [{
        name: this.$t('report.editor.deleteField'),
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi4.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    getContextMenuItems5: function getContextMenuItems5(params) {
      var vm = this;
      var result = [{
        name: this.$t('report.editor.deleteField'),
        action: function action() {
          var dataSelected = [];
          dataSelected.push(params.node.data);
          vm.gridApi5.applyTransaction({
            remove: dataSelected
          });
        }
      }];
      return result;
    },
    extractValues: function extractValues(mappings) {
      return Object.keys(mappings);
    }
  },
  created: function created() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _this6.editReportEditor();

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    this.ColumnApi = this.gridOptions.columnApi;
    this.gridApi2 = this.gridOptions2.api;
    this.ColumnApi2 = this.gridOptions2.columnApi;
    this.gridApi3 = this.gridOptions3.api;
    this.ColumnApi3 = this.gridOptions3.columnApi;
    this.gridApi4 = this.gridOptions4.api;
    this.ColumnApi4 = this.gridOptions4.columnApi;
    this.gridApi5 = this.gridOptions5.api;
    this.ColumnApi5 = this.gridOptions5.columnApi;
  }
});

window.extractValues = function extractValues(mappings) {
  return Object.keys(mappings);
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_report_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/report.js */ "./resources/js/src/api/report.js");


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

var reportResource = new _api_report_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['reportCodeInt'],
  data: function data() {
    return {
      vModelGuestType: 1,
      vModelOptionArrivalList: 1,
      dataLookGuestGroup: [],
      dataLookConstGuestStatus: [],
      dataLookCompany: [],
      dataLookCompanyType: [],
      dataLookUser: [],
      dataLookSubDepartment: [],
      dataLookBusinessSource: [],
      dataLookShift: [],
      dataLookAccount: [],
      dataLookMarket: [],
      dataLookSubAccount: [],
      dataLookNationality: [],
      dataLookBookingSource: [],
      dataLookBuilding: [],
      dataLookFloor: [],
      dataLookRoomStatus: [],
      dataLookPhoneBookType: [],
      dataLookLogUserAction: [],
      vModelLookUp: {},
      radios: {
        status: 1
      },
      checkBox: {
        folioStatusOpen: true,
        folioStatusClosed: true,
        guestFolio: true,
        deskFolio: true,
        masterFolio: true
      }
    };
  },
  methods: {
    getDataLookUpReportFilter1: function getDataLookUpReportFilter1() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$reportResource, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return reportResource.ReportDataLookUpFilter1();

              case 2:
                _yield$reportResource = _context.sent;
                data = _yield$reportResource.data;
                _this.dataLookGuestGroup = data.guestGroup;
                _this.dataLookConstGuestStatus = data.constGuestStatus;
                _this.dataLookCompany = data.company;
                _this.dataLookCompanyType = data.companyType;
                _this.dataLookBookingSource = data.bookingSource;
                _this.dataLookBusinessSource = data.businessSource;
                _this.dataLookAccount = data.account;
                _this.dataLookSubAccount = data.subAccount;
                _this.dataLookNationality = data.nationality;
                _this.dataLookSubDepartment = data.subDepartment;
                _this.dataLookMarket = data.market;
                _this.dataLookUser = data.user;
                _this.dataLookShift = data.shift;
                _this.dataLookBuilding = data.building;
                _this.dataLookFloor = data.floor;
                _this.dataLookRoomStatus = data.roomStatus;
                _this.dataLookPhoneBookType = data.phoneBookType;
                _this.dataLookLogUserAction = data.logUserAction;

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    onSelectGuestType: function onSelectGuestType(param) {
      this.vModelGuestType = param;
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.getDataLookUpReportFilter1();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  mounted: function mounted() {//
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".is_system[data-v-87a41f2c] {\n  color: rgba(var(--vs-danger));\n}\n#filter-string[data-v-87a41f2c] {\n  padding-bottom: 10px;\n}\n#filter-string div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-string .vx-card[data-v-87a41f2c] {\n  height: 100%;\n}\n@media only screen and (min-width: 900px) {\n#filter-string[data-v-87a41f2c] {\n    padding-left: 10px;\n}\n.customize-dropdown[data-v-87a41f2c] {\n    cursor: pointer;\n    display: initial;\n}\n}\n@media only screen and (max-width: 899px) {\n.customize-dropdown[data-v-87a41f2c] {\n    display: none;\n}\n}\n#filter-date[data-v-87a41f2c] {\n  padding-bottom: 10px;\n}\n#filter-date div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date div .small-device[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date .large-device div[data-v-87a41f2c] {\n  height: 100%;\n}\n#filter-date .large-device div .vx-card[data-v-87a41f2c] {\n  height: 100%;\n}\n.customize-dropdown[data-v-87a41f2c] {\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".drop-col[data-v-1e992d14] {\n  padding-left: 10px;\n  box-sizing: border-box;\n  flex: 1 1 0px;\n  display: flex;\n  flex-direction: column;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970& ***!
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
    "vs-prompt",
    {
      class: _vm.classDialog,
      attrs: {
        type: "confirm",
        active: _vm.showDialog,
        color: "warning",
        title: _vm.title,
        "buttons-hidden": true,
      },
      on: {
        "update:active": function ($event) {
          _vm.showDialog = $event
        },
      },
    },
    [
      _c(
        "vs-row",
        {
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-w": "w-full",
          },
        },
        [
          _c("vs-icon", {
            attrs: { icon: "warning", size: "large", color: "warning" },
          }),
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
            "vs-justify": "center",
            "vs-w": "w-full",
          },
        },
        [
          _c("p", { staticStyle: { "text-align": "center" } }, [
            _vm._v(_vm._s(_vm.text)),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        {
          staticClass: "mt-4",
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-w": "w-full",
          },
        },
        [_c("vs-divider", { attrs: { color: "warning" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-row",
        {
          staticClass: "w-full",
          attrs: {
            "vs-align": "center",
            "vs-type": "flex",
            "vs-justify": "center",
          },
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "w-full md:w-1/3 ml-1 mr-1 mt-1",
              attrs: {
                disabled: _vm.btnDisabled,
                "vs-type": "flex",
                color: "warning",
              },
              on: {
                click: [
                  function ($event) {
                    return _vm.$emit("event")
                  },
                  function ($event) {
                    _vm.showDialog = false
                  },
                ],
              },
            },
            [_vm._v(_vm._s(_vm.acceptText))]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showCancelButton,
                  expression: "showCancelButton",
                },
              ],
              staticClass: "w-full md:w-1/3 ml-1 mr-1 mt-1",
              attrs: { "vs-type": "flex", color: "grey" },
              on: {
                click: function ($event) {
                  _vm.showDialog = false
                },
              },
            },
            [_vm._v(_vm._s(_vm.cancelText))]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
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
    {
      staticClass: "vs-con-loading__container",
      attrs: { id: "main-container" },
    },
    [
      _c(
        "vx-card",
        { staticClass: "box mb-2" },
        [
          _c(
            "vs-row",
            {
              staticClass: "mb-2",
              attrs: {
                "vs-align": "flext-start",
                "vs-type": "flex",
                "vs-justify": "flext-start",
                "vs-w": "12",
              },
            },
            [
              _c(
                "vs-col",
                { attrs: { "vs-type": "flex", "vs-align": "center" } },
                [
                  _c("vs-input", {
                    attrs: { placeholder: _vm.$t("placeholder.search") },
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
                        return _vm.search($event)
                      },
                    },
                    model: {
                      value: _vm.searchword,
                      callback: function ($$v) {
                        _vm.searchword = $$v
                      },
                      expression: "searchword",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      ref: "search",
                      staticClass: "ml-2",
                      attrs: { id: "search", color: "primary", type: "filled" },
                      on: { click: _vm.search },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.search")))]
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
              staticClass: "mb-2",
              attrs: {
                "vs-align": "flext-start",
                "vs-type": "flex",
                "vs-justify": "flext-start",
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
                    { attrs: { "vs-lg": "12", "vs-sm": "12", "vs-xs": "12" } },
                    [
                      _c("v-tree", {
                        ref: "tree",
                        attrs: {
                          data: _vm.treeData,
                          multiple: false,
                          radio: true,
                        },
                        on: {
                          "node-click": function ($event) {
                            return _vm.nodeclick()
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
        "vs-prompt",
        {
          class: {
            "width-500p": !(
              _vm.reportCodeInt == _vm.global.reportList.reservationList ||
              _vm.reportCodeInt == _vm.global.reportList.cancelledReservation ||
              _vm.reportCodeInt == _vm.global.reportList.noShowReservation ||
              _vm.reportCodeInt == _vm.global.reportList.voidedReservation ||
              _vm.reportCodeInt == _vm.global.reportList.groupReservation ||
              _vm.reportCodeInt == _vm.global.reportList.expectedArrival ||
              _vm.reportCodeInt == _vm.global.reportList.arrivalList ||
              _vm.reportCodeInt == _vm.global.reportList.samedayReservation ||
              _vm.reportCodeInt == _vm.global.reportList.balanceDeposit ||
              _vm.reportCodeInt == _vm.global.reportList.waitListReservation ||
              _vm.reportCodeInt ==
                _vm.global.reportList.advancedPaymentDeposit ||
              _vm.reportCodeInt == _vm.global.reportList.currentInHouse ||
              _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
              _vm.reportCodeInt ==
                _vm.global.reportList.guestInHousebyBusinessSource ||
              _vm.reportCodeInt == _vm.global.reportList.guestInHousebyMarket ||
              _vm.reportCodeInt ==
                _vm.global.reportList.guestInHousebyBookingSource ||
              _vm.reportCodeInt ==
                _vm.global.reportList.guestInHousebyGuestType ||
              _vm.reportCodeInt ==
                _vm.global.reportList.guestInHousebyCountry ||
              _vm.reportCodeInt == _vm.global.reportList.guestInHousebyState ||
              _vm.reportCodeInt == _vm.global.reportList.guestInHousebyCity ||
              _vm.reportCodeInt ==
                _vm.global.reportList.guestInHousebyNationality ||
              _vm.reportCodeInt == _vm.global.reportList.guestInHouseForecast ||
              _vm.reportCodeInt == _vm.global.reportList.earlyCheckIn ||
              _vm.reportCodeInt == _vm.global.reportList.complimentGuest ||
              _vm.reportCodeInt == _vm.global.reportList.houseUseGuest ||
              _vm.reportCodeInt == _vm.global.reportList.dayUse ||
              _vm.reportCodeInt == _vm.global.reportList.earlyDeparture ||
              _vm.reportCodeInt == _vm.global.reportList.expectedDeparture ||
              _vm.reportCodeInt == _vm.global.reportList.extendedDeparture ||
              _vm.reportCodeInt == _vm.global.reportList.departureList ||
              _vm.reportCodeInt ==
                _vm.global.reportList.actualDepartureGuestList ||
              _vm.reportCodeInt == _vm.global.reportList.folioTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.folioList ||
              _vm.reportCodeInt == _vm.global.reportList.masterFolio ||
              _vm.reportCodeInt == _vm.global.reportList.deskFolio ||
              _vm.reportCodeInt ==
                _vm.global.reportList.dailyFolioTransaction ||
              _vm.reportCodeInt ==
                _vm.global.reportList.monthlyFolioTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.yearlyTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.chargeList ||
              _vm.reportCodeInt == _vm.global.reportList.dailyChargeList ||
              _vm.reportCodeInt == _vm.global.reportList.monthlyChargeList ||
              _vm.reportCodeInt == _vm.global.reportList.yearlyChargeList ||
              _vm.reportCodeInt == _vm.global.reportList.cashierReport ||
              _vm.reportCodeInt == _vm.global.reportList.cashierReportReprint ||
              _vm.reportCodeInt == _vm.global.reportList.cashSummaryReport ||
              _vm.reportCodeInt == _vm.global.reportList.paymentList ||
              _vm.reportCodeInt == _vm.global.reportList.dailyPaymentList ||
              _vm.reportCodeInt == _vm.global.reportList.monthlyPaymentList ||
              _vm.reportCodeInt == _vm.global.reportList.yearlyPaymentList ||
              _vm.reportCodeInt == _vm.global.reportList.dailySales ||
              _vm.reportCodeInt == _vm.global.reportList.transactionByStaff ||
              _vm.reportCodeInt == _vm.global.reportList.taxBreakdownDetailed ||
              _vm.reportCodeInt == _vm.global.reportList.voidList ||
              _vm.reportCodeInt == _vm.global.reportList.roomRate ||
              _vm.reportCodeInt == _vm.global.reportList.package ||
              _vm.reportCodeInt == _vm.global.reportList.roomStatus ||
              _vm.reportCodeInt == _vm.global.reportList.company ||
              _vm.reportCodeInt == _vm.global.reportList.phoneBook ||
              _vm.reportCodeInt == _vm.global.reportList.logUser ||
              _vm.reportCodeInt == _vm.global.reportList.logShift ||
              _vm.reportCodeInt == _vm.global.reportList.logMoveRoom ||
              _vm.reportCodeInt ==
                _vm.global.reportList.logTransferTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.logSpecialAccess ||
              _vm.reportCodeInt == _vm.global.reportList.keyLockHistory ||
              _vm.reportCodeInt == _vm.global.reportList.logVoidTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.logVoidTransaction ||
              _vm.reportCodeInt == _vm.global.reportList.logHouseKeeping ||
              _vm.reportCodeInt == _vm.global.reportList.logPABX
            ),
            "options-report": _vm.element > 0 || _vm.resolutionWidth < 900,
          },
          attrs: {
            id: _vm.firstDialog,
            type: _vm.global.dialog.typeDialog,
            "buttons-hidden": true,
            active: _vm.showModal,
            title: _vm.modalTitle,
          },
          on: {
            "update:active": function ($event) {
              _vm.showModal = $event
            },
          },
        },
        [
          _c(
            _vm.scrollbarTag,
            {
              tag: "component",
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.global.perfectScrollbarSettings },
            },
            [
              _c(
                "vs-row",
                { attrs: { "vs-type": "flex" } },
                [
                  _c(
                    "vs-col",
                    {
                      class: { "vs-lg-6": _vm.element > 0 },
                      attrs: { id: "filter-date", "vs-sm": "12" },
                    },
                    [
                      _c(
                        "vx-card",
                        { staticClass: "box", attrs: { height: "300" } },
                        [
                          _vm.resolutionWidth < 900
                            ? _c(
                                "div",
                                { staticClass: "small-device" },
                                [
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "2",
                                            "vs-sm": "3",
                                            "vs-xs": "3",
                                          },
                                        },
                                        [
                                          _c("span", [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("report.template")
                                                )
                                              ),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "10",
                                            "vs-sm": "10",
                                            "vs-xs": "9",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              disabled:
                                                _vm.optionDisableTemplate,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpTemplate
                                              ) {
                                                return dataLookUpTemplate.id_log
                                              },
                                              label: "name",
                                              options: _vm.dataLookUpTemplate,
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "option",
                                                  fn: function (
                                                    dataLookUpTemplate
                                                  ) {
                                                    return [
                                                      dataLookUpTemplate.is_default ===
                                                        "-1" &&
                                                      dataLookUpTemplate.is_system ===
                                                        "-1"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w":
                                                                  "w-full",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "FileTextIcon",
                                                                    svgClasses:
                                                                      "stroke-current text-warning",
                                                                  },
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  ),
                                                                ]),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "-1" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "0"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w":
                                                                  "w-full",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "FileTextIcon",
                                                                  },
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  ),
                                                                ]),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "0" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "-1"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w":
                                                                  "w-full",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "FileTextIcon",
                                                                    svgClasses:
                                                                      "stroke-current text-warning",
                                                                  },
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : dataLookUpTemplate.is_default ===
                                                            "0" &&
                                                          dataLookUpTemplate.is_system ===
                                                            "0"
                                                        ? _c(
                                                            "vs-row",
                                                            {
                                                              attrs: {
                                                                "vs-align":
                                                                  "center",
                                                                "vs-justify":
                                                                  "flex-start",
                                                                "vs-w":
                                                                  "w-full",
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "feather-icon",
                                                                {
                                                                  attrs: {
                                                                    icon: "FileTextIcon",
                                                                  },
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c("span", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                ),
                                                              ]),
                                                            ],
                                                            1
                                                          )
                                                        : _vm._e(),
                                                    ]
                                                  },
                                                },
                                              ],
                                              null,
                                              false,
                                              4162197443
                                            ),
                                            model: {
                                              value: _vm.vModelLookUpIdTemplate,
                                              callback: function ($$v) {
                                                _vm.vModelLookUpIdTemplate = $$v
                                              },
                                              expression:
                                                "vModelLookUpIdTemplate",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "2",
                                            "vs-sm": "3",
                                            "vs-xs": "3",
                                          },
                                        },
                                        [
                                          _c("span", [
                                            _c("b", [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.options"))
                                              ),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "10",
                                            "vs-sm": "10",
                                            "vs-xs": "9",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpOptionDate
                                              ) {
                                                return dataLookUpOptionDate.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpOptionDate,
                                            },
                                            model: {
                                              value: _vm.vModelOptions,
                                              callback: function ($$v) {
                                                _vm.vModelOptions = $$v
                                              },
                                              expression: "vModelOptions",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 1
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.date")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "5",
                                                    "vs-xs": "5",
                                                  },
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      disabled:
                                                        _vm.optionDisable.date,
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelDateSelected,
                                                      callback: function ($$v) {
                                                        _vm.vModelDateSelected =
                                                          $$v
                                                      },
                                                      expression:
                                                        "vModelDateSelected",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("vs-col", {
                                                attrs: {
                                                  "vs-order": "3",
                                                  "vs-type": "flex",
                                                  "vs-justify": "flex-start",
                                                  "vs-align": "center",
                                                  "vs-lg": "5",
                                                  "vs-sm": "4",
                                                  "vs-xs": "4",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 2
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.range")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "5",
                                                    "vs-xs": "5",
                                                  },
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name",
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        return _vm.setRadioCheck(
                                                          undefined,
                                                          1
                                                        )
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelDateStart,
                                                      callback: function ($$v) {
                                                        _vm.vModelDateStart =
                                                          $$v
                                                      },
                                                      expression:
                                                        "vModelDateStart",
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
                                                    "vs-order": "3",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "5",
                                                    "vs-sm": "4",
                                                    "vs-xs": "4",
                                                  },
                                                },
                                                [
                                                  _c("date-picker", {
                                                    attrs: {
                                                      clearable: false,
                                                      lang: _vm.$t("lang"),
                                                      "value-type":
                                                        "YYYY-MM-DD",
                                                      placeholder: "DD/MM/YYYY",
                                                      format: "DD/MM/YYYY",
                                                      label: "name",
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        return _vm.setRadioCheck(
                                                          undefined,
                                                          2
                                                        )
                                                      },
                                                    },
                                                    model: {
                                                      value: _vm.vModelDateEnd,
                                                      callback: function ($$v) {
                                                        _vm.vModelDateEnd = $$v
                                                      },
                                                      expression:
                                                        "vModelDateEnd",
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 3
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.week")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9",
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpWeek
                                                      ) {
                                                        return dataLookUpWeek.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpWeek,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.week,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "week",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.week",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearWeek,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearWeek",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearWeek",
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 4
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.month")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9",
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpMonth
                                                      ) {
                                                        return dataLookUpMonth.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpMonth,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.month,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "month",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.month",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearMonth,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearMonth",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearMonth",
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 5
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.quarter")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9",
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpQuarter
                                                      ) {
                                                        return dataLookUpQuarter.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpQuarter,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .quarter,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "quarter",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.quarter",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearQuarter,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearQuarter",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearQuarter",
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 6
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "report.semester"
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9",
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-right": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpSemester
                                                      ) {
                                                        return dataLookUpSemester.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpSemester,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .semester,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "semester",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.semester",
                                                    },
                                                  }),
                                                  _vm._v(" "),
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "90px",
                                                      "min-width": "80px",
                                                      "padding-left": "10px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp
                                                          .yearSemester,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "yearSemester",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.yearSemester",
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.vModelOptions == 7
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "vs-row",
                                            { staticClass: "box-body mb-2" },
                                            [
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "1",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "center",
                                                    "vs-lg": "2",
                                                    "vs-sm": "3",
                                                    "vs-xs": "3",
                                                  },
                                                },
                                                [
                                                  _c("span", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t("report.year")
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "vs-col",
                                                {
                                                  attrs: {
                                                    "vs-order": "2",
                                                    "vs-type": "flex",
                                                    "vs-justify": "flex-start",
                                                    "vs-align": "flex-start",
                                                    "vs-lg": "10",
                                                    "vs-sm": "10",
                                                    "vs-xs": "9",
                                                  },
                                                },
                                                [
                                                  _c("v-select", {
                                                    staticStyle: {
                                                      width: "115px",
                                                      "min-width": "120px",
                                                    },
                                                    attrs: {
                                                      clearable: false,
                                                      reduce: function (
                                                        dataLookUpYear
                                                      ) {
                                                        return dataLookUpYear.value
                                                      },
                                                      label: "text",
                                                      options:
                                                        _vm.dataLookUpYear,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.vModelLookUp.year,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.vModelLookUp,
                                                          "year",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "vModelLookUp.year",
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
                                      )
                                    : _vm._e(),
                                ],
                                1
                              )
                            : _c(
                                "div",
                                { staticClass: "large-device" },
                                [
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "3",
                                            "vs-sm": "3",
                                            "vs-xs": "3",
                                          },
                                        },
                                        [
                                          _c("span", [
                                            _vm._v(
                                              _vm._s(_vm.$t("report.template"))
                                            ),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "center",
                                            "vs-lg": "9",
                                            "vs-sm": "9",
                                            "vs-xs": "9",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              disabled:
                                                _vm.optionDisableTemplate,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpTemplate
                                              ) {
                                                return dataLookUpTemplate.id_log
                                              },
                                              label: "name",
                                              options: _vm.dataLookUpTemplate,
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "option",
                                                fn: function (
                                                  dataLookUpTemplate
                                                ) {
                                                  return [
                                                    dataLookUpTemplate.is_default ===
                                                      "-1" &&
                                                    dataLookUpTemplate.is_system ===
                                                      "-1"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color: "red",
                                                                },
                                                              },
                                                              [
                                                                _c("b", [
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        dataLookUpTemplate.name
                                                                      )
                                                                  ),
                                                                ]),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "-1" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "0"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full",
                                                            },
                                                          },
                                                          [
                                                            _c("span", [
                                                              _c("b", [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                ),
                                                              ]),
                                                            ]),
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "0" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "-1"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full",
                                                            },
                                                          },
                                                          [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color: "red",
                                                                },
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      dataLookUpTemplate.name
                                                                    )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      : dataLookUpTemplate.is_default ===
                                                          "0" &&
                                                        dataLookUpTemplate.is_system ===
                                                          "0"
                                                      ? _c(
                                                          "vs-row",
                                                          {
                                                            attrs: {
                                                              "vs-align":
                                                                "center",
                                                              "vs-justify":
                                                                "flex-start",
                                                              "vs-w": "w-full",
                                                            },
                                                          },
                                                          [
                                                            _c("span", [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    dataLookUpTemplate.name
                                                                  )
                                                              ),
                                                            ]),
                                                          ]
                                                        )
                                                      : _vm._e(),
                                                  ]
                                                },
                                              },
                                            ]),
                                            model: {
                                              value: _vm.vModelLookUpIdTemplate,
                                              callback: function ($$v) {
                                                _vm.vModelLookUpIdTemplate = $$v
                                              },
                                              expression:
                                                "vModelLookUpIdTemplate",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.date,
                                                "vs-name": "radios1",
                                                "vs-value": "1",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.date"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.date,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name",
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(1)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelDateSelected,
                                              callback: function ($$v) {
                                                _vm.vModelDateSelected = $$v
                                              },
                                              expression: "vModelDateSelected",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-col", {
                                        attrs: {
                                          "vs-order": "3",
                                          "vs-type": "flex",
                                          "vs-justify": "flex-start",
                                          "vs-align": "flex-start",
                                          "vs-w": "4",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-row",
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.range,
                                                "vs-name": "radios1",
                                                "vs-value": "2",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.range"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.range,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name",
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(2, 1)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelDateStart,
                                              callback: function ($$v) {
                                                _vm.vModelDateStart = $$v
                                              },
                                              expression: "vModelDateStart",
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-end",
                                            "vs-w": "4",
                                          },
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              disabled: _vm.optionDisable.range,
                                              clearable: false,
                                              lang: _vm.$t("lang"),
                                              "value-type": "YYYY-MM-DD",
                                              placeholder: "DD/MM/YYYY",
                                              format: "DD/MM/YYYY",
                                              label: "name",
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(2, 2)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelDateEnd,
                                              callback: function ($$v) {
                                                _vm.vModelDateEnd = $$v
                                              },
                                              expression: "vModelDateEnd",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.week,
                                                "vs-name": "radios1",
                                                "vs-value": "3",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.week"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.week,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpWeek
                                              ) {
                                                return dataLookUpWeek.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpWeek,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(3)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.week,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "week",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.week",
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.week,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpYear
                                              ) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(3)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.yearWeek,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearWeek",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearWeek",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.month,
                                                "vs-name": "radios1",
                                                "vs-value": "4",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.month"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.month,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpMonth
                                              ) {
                                                return dataLookUpMonth.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpMonth,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(4)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.month,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "month",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.month",
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.month,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpYear
                                              ) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(4)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.yearMonth,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearMonth",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearMonth",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.quarter,
                                                "vs-name": "radios1",
                                                "vs-value": "5",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.quarter"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.quarter,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpQuarter
                                              ) {
                                                return dataLookUpQuarter.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpQuarter,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(5)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.quarter,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "quarter",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.quarter",
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.quarter,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpYear
                                              ) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(5)
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.vModelLookUp.yearQuarter,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearQuarter",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearQuarter",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.semester,
                                                "vs-name": "radios1",
                                                "vs-value": "6",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("report.semester")
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.semester,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpSemester
                                              ) {
                                                return dataLookUpSemester.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpSemester,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(6)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.semester,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "semester",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.semester",
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
                                            "vs-order": "3",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "4",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled:
                                                _vm.optionDisable.semester,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpYear
                                              ) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(6)
                                              },
                                            },
                                            model: {
                                              value:
                                                _vm.vModelLookUp.yearSemester,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "yearSemester",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "vModelLookUp.yearSemester",
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
                                    { staticClass: "box-body mb-2" },
                                    [
                                      _c(
                                        "vs-col",
                                        {
                                          attrs: {
                                            "vs-order": "1",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "3",
                                          },
                                        },
                                        [
                                          _c(
                                            "vs-radio",
                                            {
                                              attrs: {
                                                disabled:
                                                  _vm.optionDisable.year,
                                                "vs-name": "radios1",
                                                "vs-value": "7",
                                              },
                                              model: {
                                                value: _vm.vModelOptions,
                                                callback: function ($$v) {
                                                  _vm.vModelOptions = $$v
                                                },
                                                expression: "vModelOptions",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("report.year"))
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
                                          attrs: {
                                            "vs-order": "2",
                                            "vs-type": "flex",
                                            "vs-justify": "flex-start",
                                            "vs-align": "flex-start",
                                            "vs-w": "5",
                                          },
                                        },
                                        [
                                          _c("v-select", {
                                            staticStyle: {
                                              width: "115px",
                                              "min-width": "120px",
                                            },
                                            attrs: {
                                              disabled: _vm.optionDisable.year,
                                              clearable: false,
                                              reduce: function (
                                                dataLookUpYear
                                              ) {
                                                return dataLookUpYear.value
                                              },
                                              label: "text",
                                              options: _vm.dataLookUpYear,
                                            },
                                            on: {
                                              input: function ($event) {
                                                return _vm.setRadioCheck(7)
                                              },
                                            },
                                            model: {
                                              value: _vm.vModelLookUp.year,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.vModelLookUp,
                                                  "year",
                                                  $$v
                                                )
                                              },
                                              expression: "vModelLookUp.year",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("vs-col", {
                                        attrs: {
                                          "vs-order": "3",
                                          "vs-type": "flex",
                                          "vs-justify": "flex-start",
                                          "vs-align": "flex-start",
                                          "vs-w": "4",
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
                      attrs: {
                        id: "filter-string",
                        "vs-lg": "6",
                        "vs-sm": "12",
                      },
                    },
                    [
                      _vm.reportCodeInt ==
                        _vm.global.reportList.reservationList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.cancelledReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.noShowReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.voidedReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.groupReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.expectedArrival ||
                      _vm.reportCodeInt == _vm.global.reportList.arrivalList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.samedayReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.balanceDeposit ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.waitListReservation ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.advancedPaymentDeposit ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.currentInHouse ||
                      _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyBusinessSource ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyMarket ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyBookingSource ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyGuestType ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyCountry ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyState ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyCity ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHousebyNationality ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.guestInHouseForecast ||
                      _vm.reportCodeInt == _vm.global.reportList.earlyCheckIn ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.complimentGuest ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.houseUseGuest ||
                      _vm.reportCodeInt == _vm.global.reportList.dayUse ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.earlyDeparture ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.expectedDeparture ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.extendedDeparture ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.departureList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.actualDepartureGuestList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.folioTransaction ||
                      _vm.reportCodeInt == _vm.global.reportList.folioList ||
                      _vm.reportCodeInt == _vm.global.reportList.masterFolio ||
                      _vm.reportCodeInt == _vm.global.reportList.deskFolio ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.dailyFolioTransaction ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.monthlyFolioTransaction ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.yearlyTransaction ||
                      _vm.reportCodeInt == _vm.global.reportList.chargeList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.dailyChargeList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.monthlyChargeList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.yearlyChargeList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.cashierReport ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.cashierReportReprint ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.cashSummaryReport ||
                      _vm.reportCodeInt == _vm.global.reportList.paymentList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.dailyPaymentList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.monthlyPaymentList ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.yearlyPaymentList ||
                      _vm.reportCodeInt == _vm.global.reportList.dailySales ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.transactionByStaff ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.taxBreakdownDetailed ||
                      _vm.reportCodeInt == _vm.global.reportList.voidList ||
                      _vm.reportCodeInt == _vm.global.reportList.roomRate ||
                      _vm.reportCodeInt == _vm.global.reportList.package ||
                      _vm.reportCodeInt == _vm.global.reportList.roomStatus ||
                      _vm.reportCodeInt == _vm.global.reportList.company ||
                      _vm.reportCodeInt == _vm.global.reportList.phoneBook ||
                      _vm.reportCodeInt == _vm.global.reportList.logUser ||
                      _vm.reportCodeInt == _vm.global.reportList.logShift ||
                      _vm.reportCodeInt == _vm.global.reportList.logMoveRoom ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.logTransferTransaction ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.logSpecialAccess ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.keyLockHistory ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.logVoidTransaction ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.logVoidTransaction ||
                      _vm.reportCodeInt ==
                        _vm.global.reportList.logHouseKeeping ||
                      _vm.reportCodeInt == _vm.global.reportList.logPABX
                        ? _c(
                            "div",
                            [
                              _c("ReportFilter1", {
                                ref: "ReportFilter1",
                                attrs: { reportCodeInt: _vm.reportCodeInt },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
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
            [
              _c(
                "vs-col",
                { staticClass: "w-full flex box-body" },
                [
                  _vm.vModelLookUpIdTemplate > 0 &&
                  _vm.customizeReportAccess == 1
                    ? _c(
                        "div",
                        [
                          _vm.resolutionWidth >= 900
                            ? _c(
                                "vs-dropdown",
                                {
                                  staticClass: "customize-dropdown",
                                  attrs: { "vs-trigger-click": "" },
                                },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mb-3 ml-3",
                                      on: {
                                        click: function ($event) {
                                          return _vm.showReportEditor(
                                            _vm.global.modeData.edit
                                          )
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("button.costumizeTemplate")
                                        )
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-dropdown-menu",
                                    [
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.showReportEditor(
                                                _vm.global.modeData.insert
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "add",
                                              size: "small",
                                              color: "success",
                                            },
                                          }),
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("button.insertTemplate")
                                            )
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.showReportEditor(
                                                _vm.global.modeData.edit
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "edit",
                                              size: "small",
                                              color: "success",
                                            },
                                          }),
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("button.editTemplate")
                                            )
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          on: {
                                            click: function ($event) {
                                              return _vm.showReportEditor(
                                                _vm.global.modeData.duplicate
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "content_copy",
                                              size: "small",
                                              color: "blue",
                                            },
                                          }),
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("button.duplicateTemplate")
                                            )
                                          ),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "vs-dropdown-item",
                                        {
                                          attrs: { color: "danger" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.showReportEditor(
                                                _vm.global.modeData.delete
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c("vs-icon", {
                                            attrs: {
                                              icon: "delete_forever",
                                              size: "small",
                                              color: "danger",
                                            },
                                          }),
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("button.removeTemplate")
                                            )
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
                            : _vm._e(),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "ml-auto mr-3 mb-3",
                      attrs: {
                        "vs-align": "flex-end",
                        color: "primary",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.previewReport()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("button.preview")))]
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
        "vs-prompt",
        {
          staticClass: "dialog-second editor-report",
          attrs: {
            id: _vm.secondDialog,
            type: _vm.global.dialog.typeDialog,
            active: _vm.showModalSecond,
            "buttons-hidden": true,
            title: _vm.$t("report.title.templateEditor"),
          },
          on: {
            "update:active": function ($event) {
              _vm.showModalSecond = $event
            },
          },
        },
        [
          _c(
            _vm.scrollbarTag,
            {
              tag: "component",
              staticClass: "scroll-area p-4",
              attrs: { settings: _vm.global.perfectScrollbarSettings },
            },
            [
              _c("ReportEditor", {
                ref: "ReportEditor",
                attrs: {
                  modeDataEditor: this.modeDataEditor,
                  idLogTemplate: _vm.vModelLookUpIdTemplate,
                  reportCodeInt: _vm.reportCodeInt,
                },
                on: {
                  showReportEditor: function ($event) {
                    return _vm.showReportEditor()
                  },
                  closeModalReport: function ($event) {
                    return _vm.closeModalReport()
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
      _c("report", { ref: "report" }),
      _vm._v(" "),
      _c("dialog-second", { ref: "dialogsecond" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-con-loading__container",
      attrs: { id: "main-report-editor" },
    },
    [
      _c(
        "vs-card",
        { staticClass: "box" },
        [
          _c(
            "vs-row",
            { staticClass: "box-body" },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "mb-2" },
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
                          name: "name",
                          "label-placeholder": _vm.$t(
                            "report.editor.templateName"
                          ),
                        },
                        model: {
                          value: _vm.vModel.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "name", $$v)
                          },
                          expression: "vModel.name",
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
                              value: _vm.errors.has("name"),
                              expression: "errors.has('name')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("name")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    [
                      _c("vs-input", {
                        attrs: {
                          "label-placeholder": _vm.$t(
                            "report.editor.headerRemark"
                          ),
                        },
                        model: {
                          value: _vm.vModel.header_remark,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "header_remark", $$v)
                          },
                          expression: "vModel.header_remark",
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3",
                  },
                },
                [
                  _c("vs-row", { staticClass: "mb-1" }, [
                    _c("span", [
                      _vm._v(_vm._s(_vm.$t("report.editor.pageSize"))),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-1" },
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
                        attrs: {
                          name: "paper_size",
                          clearable: false,
                          reduce: function (dataLookUpPageSize) {
                            return dataLookUpPageSize.value
                          },
                          label: "text",
                          options: _vm.dataLookUpPageSize,
                        },
                        on: {
                          input: function ($event) {
                            return _vm.handleInputPaperSize()
                          },
                        },
                        model: {
                          value: _vm.vModel.paper_size,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "paper_size", $$v)
                          },
                          expression: "vModel.paper_size",
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
                              value: _vm.errors.has("paper_size"),
                              expression: "errors.has('paper_size')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_size")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
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
                        attrs: {
                          name: "paper_width",
                          min: "0",
                          label: _vm.$t("report.editor.width"),
                        },
                        model: {
                          value: _vm.vModel.paper_width,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "paper_width", $$v)
                          },
                          expression: "vModel.paper_width",
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
                              value: _vm.errors.has("paper_width"),
                              expression: "errors.has('paper_width')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_width")))]
                      ),
                      _vm._v(" "),
                      _c("vs-input-number", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'",
                          },
                        ],
                        attrs: {
                          name: "paper_height",
                          min: "0",
                          label: _vm.$t("report.editor.height"),
                        },
                        model: {
                          value: _vm.vModel.paper_height,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "paper_height", $$v)
                          },
                          expression: "vModel.paper_height",
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
                              value: _vm.errors.has("paper_height"),
                              expression: "errors.has('paper_height')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("paper_heigh")))]
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "mb-2 pt-5" },
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
                        attrs: {
                          name: "header_height",
                          min: "0",
                          label: _vm.$t("report.editor.headerHeight"),
                        },
                        model: {
                          value: _vm.vModel.header_row_height,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "header_row_height", $$v)
                          },
                          expression: "vModel.header_row_height",
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
                              value: _vm.errors.has("header_height"),
                              expression: "errors.has('header_height')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("header_height")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
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
                        attrs: {
                          name: "data_height",
                          min: "0",
                          label: _vm.$t("report.editor.rowHeight"),
                        },
                        model: {
                          value: _vm.vModel.row_height,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModel, "row_height", $$v)
                          },
                          expression: "vModel.row_height",
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
                              value: _vm.errors.has("data_height"),
                              expression: "errors.has('data_height')",
                            },
                          ],
                          staticClass: "text-danger text-sm",
                        },
                        [_vm._v(_vm._s(_vm.errors.first("data_height")))]
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
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "3",
                  },
                },
                [
                  _c(
                    "vs-row",
                    { staticClass: "pt-5 mb-2" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelShowFooter,
                            callback: function ($$v) {
                              _vm.vModelShowFooter = $$v
                            },
                            expression: "vModelShowFooter",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("report.editor.showFooter")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-1" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelHorizontalBorder,
                            callback: function ($$v) {
                              _vm.vModelHorizontalBorder = $$v
                            },
                            expression: "vModelHorizontalBorder",
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("report.editor.horizontalBorder"))
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { staticClass: "mb-2" },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          model: {
                            value: _vm.vModelVerticalBorder,
                            callback: function ($$v) {
                              _vm.vModelVerticalBorder = $$v
                            },
                            expression: "vModelVerticalBorder",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("report.editor.verticalBorder")))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-row",
                    { attrs: { "vs-type": "flex" } },
                    [
                      _c(
                        "vs-radio",
                        {
                          staticClass: "ml-1 mr-3",
                          attrs: { "vs-name": "radios1", "vs-value": "-1" },
                          model: {
                            value: _vm.vModel.is_portrait,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModel, "is_portrait", $$v)
                            },
                            expression: "vModel.is_portrait",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("report.editor.portrait")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-radio",
                        {
                          attrs: { "vs-name": "radios1", "vs-value": "0" },
                          model: {
                            value: _vm.vModel.is_portrait,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModel, "is_portrait", $$v)
                            },
                            expression: "vModel.is_portrait",
                          },
                        },
                        [_vm._v(_vm._s(_vm.$t("report.editor.landscape")))]
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
        "vs-row",
        [
          _c(
            "vs-row",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
              },
            },
            [
              _c("ag-grid-vue", {
                class: _vm.global.themeAgGrid,
                staticStyle: { width: "95%", height: "495px" },
                attrs: {
                  id: "Grid1",
                  gridOptions: _vm.gridOptions,
                  columnDefs: _vm.columnDefs,
                  defaultColDef: _vm.defaultColDef,
                  rowData: _vm.rowData,
                  rowDragManaged: true,
                  animateRows: true,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              attrs: {
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "3",
              },
            },
            [
              _c("vs-row", { staticClass: "mb-2" }, [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "140px" },
                    on: {
                      dragover: function ($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function ($event) {
                        return _vm.onDropReportGroup($event)
                      },
                    },
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.global.themeAgGrid,
                      staticStyle: { width: "98%", height: "140px" },
                      attrs: {
                        id: "Grid21",
                        gridOptions: _vm.gridOptions2,
                        columnDefs: _vm.columnDefs2,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData2,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems2,
                      },
                    }),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("vs-row", { staticClass: "mb-2" }, [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "155px" },
                    on: {
                      dragover: function ($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function ($event) {
                        return _vm.onDropReportOrder($event)
                      },
                    },
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.global.themeAgGrid,
                      staticStyle: { width: "98%", height: "155px" },
                      attrs: {
                        id: "Grid22",
                        gridOptions: _vm.gridOptions3,
                        columnDefs: _vm.columnDefs3,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData3,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems3,
                      },
                    }),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "mb-2" },
                [
                  _c("vs-input-number", {
                    attrs: {
                      min: "0",
                      max: "3",
                      label: _vm.$t("report.editor.groupingLevel"),
                    },
                    model: {
                      value: _vm.vModel.group_level,
                      callback: function ($$v) {
                        _vm.$set(_vm.vModel, "group_level", $$v)
                      },
                      expression: "vModel.group_level",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("vs-row", [
                _c(
                  "div",
                  {
                    staticStyle: { width: "98%", height: "140px" },
                    on: {
                      dragover: function ($event) {
                        return _vm.onDragOver($event)
                      },
                      drop: function ($event) {
                        return _vm.onDropReportGrouping($event)
                      },
                    },
                  },
                  [
                    _c("ag-grid-vue", {
                      class: _vm.global.themeAgGrid,
                      staticStyle: { width: "98%", height: "140px" },
                      attrs: {
                        id: "Grid23",
                        gridOptions: _vm.gridOptions4,
                        columnDefs: _vm.columnDefs4,
                        defaultColDef: _vm.defaultColDef,
                        rowData: _vm.rowData4,
                        rowDragManaged: true,
                        animateRows: true,
                        allowContextMenuWithControlKey: true,
                        getContextMenuItems: _vm.getContextMenuItems4,
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-row",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "6",
              },
            },
            [
              _c(
                "div",
                {
                  staticStyle: { width: "100%", height: "495px" },
                  on: {
                    dragover: function ($event) {
                      return _vm.onDragOver($event)
                    },
                    drop: function ($event) {
                      return _vm.onDropReportField($event)
                    },
                  },
                },
                [
                  _c("ag-grid-vue", {
                    class: _vm.global.themeAgGrid,
                    staticStyle: { width: "100%", height: "495px" },
                    attrs: {
                      id: "Grid3",
                      gridOptions: _vm.gridOptions5,
                      columnDefs: _vm.columnDefs5,
                      defaultColDef: _vm.defaultColDef,
                      rowSelection: _vm.rowSelection5,
                      rowData: _vm.rowData5,
                      rowDragManaged: true,
                      animateRows: true,
                      allowContextMenuWithControlKey: true,
                      getContextMenuItems: _vm.getContextMenuItems5,
                    },
                  }),
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
        "vs-row",
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "flex-start",
                "vs-align": "center",
                "vs-w": "9",
              },
            },
            [
              _vm.modeDataEditor == 1
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4",
                      attrs: {
                        id: "button-default-template",
                        color: "primary",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.setAsDefaultTemplate()
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("report.editor.setAsDefault")))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.modeDataEditor == 1 &&
              _vm.global.userInfo.groupCode == "SYSTEM"
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4 ml-2 mr-2",
                      attrs: {
                        id: "button-default-system",
                        color: "primary",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.setAsSystemDefaultTemplate("-1")
                        },
                      },
                    },
                    [_vm._v(_vm._s(_vm.$t("report.editor.setAsSystemDefault")))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.modeDataEditor == 1 &&
              _vm.global.userInfo.groupCode == "SYSTEM"
                ? _c(
                    "vs-button",
                    {
                      staticClass: "vs-con-loading__container mt-4",
                      attrs: {
                        id: "button-default-system-clear",
                        color: "primary",
                        type: "filled",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.setAsSystemDefaultTemplate("0")
                        },
                      },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("report.editor.clearAsSystemDefault"))
                      ),
                    ]
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "flex-end",
                "vs-align": "center",
                "vs-w": "3",
              },
            },
            [
              _c(
                "vs-button",
                {
                  staticClass: "vs-con-loading__container mt-4 mr-3",
                  attrs: {
                    disabled: _vm.disabledButtonSave,
                    id: "button-save-main",
                    icon: "save",
                    color: _vm.global.buttonColor.save,
                    type: "filled",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.saveReportTemplate()
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.$t("button.save")))]
              ),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mt-4",
                  attrs: {
                    color: _vm.global.buttonColor.close,
                    icon: "close",
                    type: "filled",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.closeReportTemplateEditor()
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
      _vm._v(" "),
      _c("dialog-three", { ref: "dialogthree" }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "filter-string box" }, [
    _vm.reportCodeInt == _vm.global.reportList.reservationList ||
    _vm.reportCodeInt == _vm.global.reportList.cancelledReservation ||
    _vm.reportCodeInt == _vm.global.reportList.noShowReservation ||
    _vm.reportCodeInt == _vm.global.reportList.voidedReservation ||
    _vm.reportCodeInt == _vm.global.reportList.groupReservation ||
    _vm.reportCodeInt == _vm.global.reportList.expectedArrival ||
    _vm.reportCodeInt == _vm.global.reportList.samedayReservation ||
    _vm.reportCodeInt == _vm.global.reportList.balanceDeposit ||
    _vm.reportCodeInt == _vm.global.reportList.waitListReservation ||
    _vm.reportCodeInt == _vm.global.reportList.currentInHouse ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyMarket ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyGuestType ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyCountry ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyState ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyCity ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHouseForecast ||
    _vm.reportCodeInt == _vm.global.reportList.earlyCheckIn ||
    _vm.reportCodeInt == this.global.reportList.dayUse ||
    _vm.reportCodeInt == this.global.reportList.earlyDeparture ||
    _vm.reportCodeInt == this.global.reportList.expectedDeparture ||
    _vm.reportCodeInt == this.global.reportList.extendedDeparture ||
    _vm.reportCodeInt == this.global.reportList.departureList ||
    _vm.reportCodeInt == this.global.reportList.actualDepartureGuestList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12",
                    },
                  },
                  [
                    _vm.reportCodeInt != _vm.global.reportList.groupReservation
                      ? _c("div", [
                          _c("span", [
                            _c("b", [
                              _vm._v(_vm._s(_vm.$t("report.filterGuestType"))),
                            ]),
                          ]),
                        ])
                      : _c("div", [
                          _c("span", [
                            _c("b", [
                              _vm._v(_vm._s(_vm.$t("report.filterGroup"))),
                            ]),
                          ]),
                        ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt != _vm.global.reportList.groupReservation
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3",
                            },
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "1",
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function ($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.all")))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9",
                            },
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "2",
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function ($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.individual")))]
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
              : _vm._e(),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [
                    _vm.reportCodeInt != _vm.global.reportList.groupReservation
                      ? _c(
                          "div",
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioFilter",
                                  "vs-value": "3",
                                },
                                model: {
                                  value: _vm.vModelGuestType,
                                  callback: function ($$v) {
                                    _vm.vModelGuestType = $$v
                                  },
                                  expression: "vModelGuestType",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.group")))]
                            ),
                          ],
                          1
                        )
                      : _c("div", [
                          _c("span", [_vm._v(_vm._s(_vm.$t("report.group")))]),
                        ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (dataLookGuestGroup) {
                          return dataLookGuestGroup.code
                        },
                        label: "name",
                        options: _vm.dataLookGuestGroup,
                      },
                      on: {
                        input: function ($event) {
                          return _vm.onSelectGuestType(3)
                        },
                      },
                      model: {
                        value: _vm.vModelLookUp.guestGroup,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "guestGroup", $$v)
                        },
                        expression: "vModelLookUp.guestGroup",
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
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.arrivalList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12",
                    },
                  },
                  [
                    _vm.reportCodeInt == _vm.global.reportList.arrivalList
                      ? _c("div", [
                          _c("span", [
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.$t("report.filterArrivalList"))
                              ),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.arrivalList
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4",
                            },
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "1",
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function ($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.all")))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4",
                            },
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "2",
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function ($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.byReservation")))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "3",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "4",
                              "vs-sm": "4",
                              "vs-xs": "4",
                            },
                          },
                          [
                            _c(
                              "vs-radio",
                              {
                                attrs: {
                                  "vs-name": "radioArrivalList",
                                  "vs-value": "3",
                                },
                                model: {
                                  value: _vm.vModelOptionArrivalList,
                                  callback: function ($$v) {
                                    _vm.vModelOptionArrivalList = $$v
                                  },
                                  expression: "vModelOptionArrivalList",
                                },
                              },
                              [_vm._v(_vm._s(_vm.$t("report.byWalkIn")))]
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
              : _vm._e(),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.arrivalList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12",
                    },
                  },
                  [
                    _vm.reportCodeInt == _vm.global.reportList.arrivalList
                      ? _c("div", [
                          _c("span", [
                            _c("b", [
                              _vm._v(_vm._s(_vm.$t("report.filterUserID"))),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.userID")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (dataLookUser) {
                          return dataLookUser.code
                        },
                        label: "code",
                        options: _vm.dataLookUser,
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user",
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
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", [
      _vm.reportCodeInt == _vm.global.reportList.reservationList ||
      _vm.reportCodeInt == _vm.global.reportList.groupReservation ||
      _vm.reportCodeInt == _vm.global.reportList.expectedArrival ||
      _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
      _vm.reportCodeInt == _vm.global.reportList.guestInHouseForecast ||
      _vm.reportCodeInt == _vm.global.reportList.earlyCheckIn ||
      _vm.reportCodeInt == _vm.global.reportList.earlyDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.expectedDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.extendedDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.departureList ||
      _vm.reportCodeInt == _vm.global.reportList.actualDepartureGuestList
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                {
                  staticClass: "box-body mb-2",
                  attrs: { "vs-align": "center" },
                },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "flex-start",
                        "vs-lg": "12",
                        "vs-sm": "12",
                        "vs-xs": "12",
                      },
                    },
                    [
                      _vm.reportCodeInt == _vm.global.reportList.reservationList
                        ? _c("div", [
                            _c("span", [
                              _c("b", [
                                _vm._v(
                                  _vm._s(_vm.$t("report.filterStatusCompany"))
                                ),
                              ]),
                            ]),
                          ])
                        : _vm.reportCodeInt ==
                          _vm.global.reportList.groupReservation
                        ? _c("div", [
                            _c("span", [
                              _c("b", [
                                _vm._v(_vm._s(_vm.$t("report.filterStatus"))),
                              ]),
                            ]),
                          ])
                        : _vm.reportCodeInt ==
                            _vm.global.reportList.expectedArrival ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.guestInHouse ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.guestInHouseForecast ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.earlyCheckIn ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.earlyDeparture ||
                          _vm.reportCodeInt == this.global.reportList.dayUse ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.expectedDeparture ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.extendedDeparture ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.departureList ||
                          _vm.reportCodeInt ==
                            _vm.global.reportList.actualDepartureGuestList
                        ? _c("div", [
                            _c("span", [
                              _c("b", [
                                _vm._v(_vm._s(_vm.$t("report.filterCompany"))),
                              ]),
                            ]),
                          ])
                        : _vm._e(),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.reportCodeInt == _vm.global.reportList.reservationList ||
      _vm.reportCodeInt == _vm.global.reportList.groupReservation
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                {
                  staticClass: "box-body mb-2",
                  attrs: { "vs-align": "center" },
                },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "3",
                        "vs-sm": "3",
                        "vs-xs": "3",
                      },
                    },
                    [_c("span", [_vm._v(_vm._s(_vm.$t("report.status")))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "2",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "9",
                        "vs-sm": "9",
                        "vs-xs": "9",
                      },
                    },
                    [
                      _c("v-select", {
                        staticClass: "w-full",
                        attrs: {
                          reduce: function (dataLookConstGuestStatus) {
                            return dataLookConstGuestStatus.code
                          },
                          label: "name",
                          options: _vm.dataLookConstGuestStatus,
                        },
                        model: {
                          value: _vm.vModelLookUp.constGuestStatus,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModelLookUp, "constGuestStatus", $$v)
                          },
                          expression: "vModelLookUp.constGuestStatus",
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
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.reportCodeInt == _vm.global.reportList.reservationList ||
      _vm.reportCodeInt == _vm.global.reportList.expectedArrival ||
      _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
      _vm.reportCodeInt == _vm.global.reportList.guestInHouseForecast ||
      _vm.reportCodeInt == _vm.global.reportList.earlyCheckIn ||
      _vm.reportCodeInt == this.global.reportList.dayUse ||
      _vm.reportCodeInt == _vm.global.reportList.earlyDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.expectedDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.extendedDeparture ||
      _vm.reportCodeInt == _vm.global.reportList.departureList ||
      _vm.reportCodeInt == _vm.global.reportList.actualDepartureGuestList
        ? _c(
            "div",
            [
              _c(
                "vs-row",
                {
                  staticClass: "box-body mb-2",
                  attrs: { "vs-align": "center" },
                },
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "1",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "3",
                        "vs-sm": "3",
                        "vs-xs": "3",
                      },
                    },
                    [_c("span", [_vm._v(_vm._s(_vm.$t("report.company")))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-order": "2",
                        "vs-type": "flex",
                        "vs-justify": "flex-start",
                        "vs-align": "center",
                        "vs-lg": "9",
                        "vs-sm": "9",
                        "vs-xs": "9",
                      },
                    },
                    [
                      _c("v-select", {
                        staticClass: "w-full",
                        attrs: {
                          reduce: function (dataLookCompany) {
                            return dataLookCompany.code
                          },
                          label: "name",
                          options: _vm.dataLookCompany,
                        },
                        model: {
                          value: _vm.vModelLookUp.company,
                          callback: function ($$v) {
                            _vm.$set(_vm.vModelLookUp, "company", $$v)
                          },
                          expression: "vModelLookUp.company",
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
          )
        : _vm._e(),
    ]),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyMarket ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyBookingSource ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyNationality
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12",
                    },
                  },
                  [
                    _c("div", [
                      _c("span", [
                        _c("b", [
                          _vm._v(_vm._s(_vm.$t("report.filterOptions"))),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt ==
            _vm.global.reportList.guestInHousebyBusinessSource
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("report.businessSource"))),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9",
                            },
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function (data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookBusinessSource,
                              },
                              model: {
                                value: _vm.vModelLookUp.businessSource,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.vModelLookUp,
                                    "businessSource",
                                    $$v
                                  )
                                },
                                expression: "vModelLookUp.businessSource",
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.guestInHousebyMarket
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("report.marketList"))),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9",
                            },
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function (data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookMarket,
                              },
                              model: {
                                value: _vm.vModelLookUp.market,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vModelLookUp, "market", $$v)
                                },
                                expression: "vModelLookUp.market",
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt ==
            _vm.global.reportList.guestInHousebyBookingSource
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("report.bookingSource"))),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9",
                            },
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function (data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookBookingSource,
                              },
                              model: {
                                value: _vm.vModelLookUp.bookingSource,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.vModelLookUp,
                                    "bookingSource",
                                    $$v
                                  )
                                },
                                expression: "vModelLookUp.bookingSource",
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
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.guestInHousebyNationality
              ? _c(
                  "div",
                  [
                    _c(
                      "vs-row",
                      {
                        staticClass: "box-body mb-2",
                        attrs: { "vs-align": "center" },
                      },
                      [
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "1",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "3",
                              "vs-sm": "3",
                              "vs-xs": "3",
                            },
                          },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.$t("report.nationality"))),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-order": "2",
                              "vs-type": "flex",
                              "vs-justify": "flex-start",
                              "vs-align": "center",
                              "vs-lg": "9",
                              "vs-sm": "9",
                              "vs-xs": "9",
                            },
                          },
                          [
                            _c("v-select", {
                              staticClass: "w-full",
                              attrs: {
                                reduce: function (data) {
                                  return data.code
                                },
                                label: "name",
                                options: _vm.dataLookNationality,
                              },
                              model: {
                                value: _vm.vModelLookUp.nationality,
                                callback: function ($$v) {
                                  _vm.$set(_vm.vModelLookUp, "nationality", $$v)
                                },
                                expression: "vModelLookUp.nationality",
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
                )
              : _vm._e(),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.guestInHouse ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyBusinessSource ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyMarket ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyBookingSource ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyGuestType ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyCountry ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyState ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyCity ||
    _vm.reportCodeInt == _vm.global.reportList.guestInHousebyNationality
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span")]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.showHouseUse,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "showHouseUse", $$v)
                          },
                          expression: "checkBox.showHouseUse",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.showHouseUse")))]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.advancedPaymentDeposit ||
    _vm.reportCodeInt == _vm.global.reportList.folioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.dailyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.chargeList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReport ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReportReprint ||
    _vm.reportCodeInt == _vm.global.reportList.cashSummaryReport ||
    _vm.reportCodeInt == _vm.global.reportList.paymentList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.dailySales ||
    _vm.reportCodeInt == _vm.global.reportList.transactionReportByStaff ||
    _vm.reportCodeInt == _vm.global.reportList.taxBreakdownDetailed ||
    _vm.reportCodeInt == _vm.global.reportList.voidList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "flex-start",
                      "vs-lg": "12",
                      "vs-sm": "12",
                      "vs-xs": "12",
                    },
                  },
                  [
                    _c("div", [
                      _c("span", [
                        _c("b", [
                          _vm._v(_vm._s(_vm.$t("report.filterOptions"))),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.userID")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (dataLookUser) {
                          return dataLookUser.code
                        },
                        label: "code",
                        options: _vm.dataLookUser,
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.shift")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.shift
                        },
                        label: "shift",
                        options: _vm.dataLookShift,
                      },
                      model: {
                        value: _vm.vModelLookUp.shift,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "shift", $$v)
                        },
                        expression: "vModelLookUp.shift",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.subDepartment")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookSubDepartment,
                      },
                      model: {
                        value: _vm.vModelLookUp.subDepartment,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "subDepartment", $$v)
                        },
                        expression: "vModelLookUp.subDepartment",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.account")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookAccount,
                      },
                      model: {
                        value: _vm.vModelLookUp.account,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "account", $$v)
                        },
                        expression: "vModelLookUp.account",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.$t("report.subGroupAccount"))),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookSubAccount,
                      },
                      model: {
                        value: _vm.vModelLookUp.accountSubGroup,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "accountSubGroup", $$v)
                        },
                        expression: "vModelLookUp.accountSubGroup",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.chargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3",
                        },
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.$t("report.company")))])]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9",
                        },
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function (data) {
                              return data.code
                            },
                            label: "name",
                            options: _vm.dataLookCompany,
                          },
                          model: {
                            value: _vm.vModelLookUp.company,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModelLookUp, "company", $$v)
                            },
                            expression: "vModelLookUp.company",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.chargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3",
                        },
                      },
                      [
                        _c("span", [
                          _vm._v(_vm._s(_vm.$t("report.businessSource"))),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9",
                        },
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function (data) {
                              return data.code
                            },
                            label: "name",
                            options: _vm.dataLookBusinessSource,
                          },
                          model: {
                            value: _vm.vModelLookUp.businessSource,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModelLookUp, "businessSource", $$v)
                            },
                            expression: "vModelLookUp.businessSource",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.chargeList ||
            _vm.reportCodeInt == _vm.global.reportList.yearlyChargeList
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3",
                        },
                      },
                      [_c("span")]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9",
                        },
                      },
                      [
                        _c(
                          "vs-checkbox",
                          {
                            model: {
                              value: _vm.checkBox.showAccountPayable,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.checkBox,
                                  "showAccountPayable",
                                  $$v
                                )
                              },
                              expression: "checkBox.showAccountPayable",
                            },
                          },
                          [_vm._v(_vm._s(_vm.$t("report.showAccountPayable")))]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.folioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.dailyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.chargeList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReport ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReportReprint ||
    _vm.reportCodeInt == _vm.global.reportList.cashSummaryReport ||
    _vm.reportCodeInt == _vm.global.reportList.paymentList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.transactionReportByStaff ||
    _vm.reportCodeInt == _vm.global.reportList.taxBreakdownDetailed ||
    _vm.reportCodeInt == _vm.global.reportList.voidList
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [
                        _vm._v(_vm._s(_vm.$t("report.folioTypeOptions"))),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body  mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "space-between" },
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.guestFolio,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "guestFolio", $$v)
                          },
                          expression: "checkBox.guestFolio",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.guestFolio")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.deskFolio,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "deskFolio", $$v)
                          },
                          expression: "checkBox.deskFolio",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.deskFolio")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.masterFolio,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "masterFolio", $$v)
                          },
                          expression: "checkBox.masterFolio",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.masterFolio")))]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.folioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.folioList ||
    _vm.reportCodeInt == _vm.global.reportList.masterFolio ||
    _vm.reportCodeInt == _vm.global.reportList.deskFolio ||
    _vm.reportCodeInt == _vm.global.reportList.dailyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyFolioTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.chargeList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyChargeList ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReport ||
    _vm.reportCodeInt == _vm.global.reportList.cashierReportReprint ||
    _vm.reportCodeInt == _vm.global.reportList.cashSummaryReport ||
    _vm.reportCodeInt == _vm.global.reportList.paymentList ||
    _vm.reportCodeInt == _vm.global.reportList.dailyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.monthlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.yearlyPaymentList ||
    _vm.reportCodeInt == _vm.global.reportList.transactionByStaff ||
    _vm.reportCodeInt == _vm.global.reportList.taxBreakdownDetailed
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [
                        _vm._v(_vm._s(_vm.$t("report.folioStatusOptions"))),
                      ]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "flex-start" },
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.folioStatusOpen,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "folioStatusOpen", $$v)
                          },
                          expression: "checkBox.folioStatusOpen",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.open")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "ml-5",
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-checkbox",
                      {
                        model: {
                          value: _vm.checkBox.folioStatusClosed,
                          callback: function ($$v) {
                            _vm.$set(_vm.checkBox, "folioStatusClosed", $$v)
                          },
                          expression: "checkBox.folioStatusClosed",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.closed")))]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.roomRate ||
    _vm.reportCodeInt == _vm.global.reportList.package
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(_vm.$t("report.status")))]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              {
                staticClass: "box-body mb-2",
                attrs: { "vs-type": "flex", "vs-justify": "flex-start" },
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "1" },
                        model: {
                          value: _vm.radios.status,
                          callback: function ($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.all")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "2" },
                        model: {
                          value: _vm.radios.status,
                          callback: function ($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.active")))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "3",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "4",
                      "vs-sm": "4",
                      "vs-xs": "4",
                    },
                  },
                  [
                    _c(
                      "vs-radio",
                      {
                        attrs: { "vs-name": "radiosStatus", "vs-value": "3" },
                        model: {
                          value: _vm.radios.status,
                          callback: function ($$v) {
                            _vm.$set(_vm.radios, "status", $$v)
                          },
                          expression: "radios.status",
                        },
                      },
                      [_vm._v(_vm._s(_vm.$t("report.nonActive")))]
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
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.roomStatus
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.building")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.building
                        },
                        label: "building",
                        options: _vm.dataLookBuilding,
                      },
                      model: {
                        value: _vm.vModelLookUp.building,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "building", $$v)
                        },
                        expression: "vModelLookUp.building",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.floor")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.floor
                        },
                        label: "floor",
                        options: _vm.dataLookFloor,
                      },
                      model: {
                        value: _vm.vModelLookUp.floor,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "floor", $$v)
                        },
                        expression: "vModelLookUp.floor",
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
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.status")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookRoomStatus,
                      },
                      model: {
                        value: _vm.vModelLookUp.roomStatus,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "roomStatus", $$v)
                        },
                        expression: "vModelLookUp.roomStatus",
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
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.company
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(_vm.$t("report.filterOptions")))]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.companyType")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookCompanyType,
                      },
                      model: {
                        value: _vm.vModelLookUp.companyType,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "companyType", $$v)
                        },
                        expression: "vModelLookUp.companyType",
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
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.phoneBook
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(_vm.$t("report.filterOptions")))]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.phoneBookType")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "name",
                        options: _vm.dataLookPhoneBookType,
                      },
                      model: {
                        value: _vm.vModelLookUp.phoneBookType,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "phoneBookType", $$v)
                        },
                        expression: "vModelLookUp.phoneBookType",
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
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.reportCodeInt == _vm.global.reportList.logUser ||
    _vm.reportCodeInt == _vm.global.reportList.logShift ||
    _vm.reportCodeInt == _vm.global.reportList.logMoveRoom ||
    _vm.reportCodeInt == _vm.global.reportList.logTransferTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.logSpecialAccess ||
    _vm.reportCodeInt == _vm.global.reportList.keyLockHistory ||
    _vm.reportCodeInt == _vm.global.reportList.logVoidTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.logVoidTransaction ||
    _vm.reportCodeInt == _vm.global.reportList.logHouseKeeping ||
    _vm.reportCodeInt == _vm.global.reportList.logPABX
      ? _c(
          "div",
          [
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                    },
                  },
                  [
                    _c("span", [
                      _c("b", [_vm._v(_vm._s(_vm.$t("report.filterOptions")))]),
                    ]),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-row",
              { staticClass: "box-body mb-2", attrs: { "vs-align": "center" } },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "1",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "3",
                      "vs-sm": "3",
                      "vs-xs": "3",
                    },
                  },
                  [_c("span", [_vm._v(_vm._s(_vm.$t("report.userID")))])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-order": "2",
                      "vs-type": "flex",
                      "vs-justify": "flex-start",
                      "vs-align": "center",
                      "vs-lg": "9",
                      "vs-sm": "9",
                      "vs-xs": "9",
                    },
                  },
                  [
                    _c("v-select", {
                      staticClass: "w-full",
                      attrs: {
                        reduce: function (data) {
                          return data.code
                        },
                        label: "code",
                        options: _vm.dataLookUser,
                      },
                      model: {
                        value: _vm.vModelLookUp.user,
                        callback: function ($$v) {
                          _vm.$set(_vm.vModelLookUp, "user", $$v)
                        },
                        expression: "vModelLookUp.user",
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _vm.reportCodeInt == _vm.global.reportList.logUser
              ? _c(
                  "vs-row",
                  { staticClass: "box-body  mb-2" },
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "1",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "3",
                          "vs-sm": "3",
                          "vs-xs": "3",
                        },
                      },
                      [_c("span", [_vm._v(_vm._s(_vm.$t("report.action")))])]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-order": "2",
                          "vs-type": "flex",
                          "vs-justify": "flex-start",
                          "vs-align": "center",
                          "vs-lg": "9",
                          "vs-sm": "9",
                          "vs-xs": "9",
                        },
                      },
                      [
                        _c("v-select", {
                          staticClass: "w-full",
                          attrs: {
                            reduce: function (data) {
                              return data.id
                            },
                            label: "name",
                            options: _vm.dataLookLogUserAction,
                          },
                          model: {
                            value: _vm.vModelLookUp.logUserAction,
                            callback: function ($$v) {
                              _vm.$set(_vm.vModelLookUp, "logUserAction", $$v)
                            },
                            expression: "vModelLookUp.logUserAction",
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
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogSecond.vue?vue&type=template&id=59ed4970& */ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&");
/* harmony import */ var _DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DialogSecond.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/components/DialogSecond.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogSecond.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DialogSecond.vue?vue&type=template&id=59ed4970& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/components/DialogSecond.vue?vue&type=template&id=59ed4970&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DialogSecond_vue_vue_type_template_id_59ed4970___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87a41f2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=style&index=0&id=87a41f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_87a41f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=87a41f2c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/Report.vue?vue&type=template&id=87a41f2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_87a41f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&");
/* harmony import */ var _ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e992d14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/ReportEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=style&index=0&id=1e992d14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_style_index_0_id_1e992d14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/ReportEditor.vue?vue&type=template&id=1e992d14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportEditor_vue_vue_type_template_id_1e992d14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-filter1.vue?vue&type=template&id=060f0313& */ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&");
/* harmony import */ var _report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-filter1.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["render"],
  _report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/report/components/report-filter1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./report-filter1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./report-filter1.vue?vue&type=template&id=060f0313& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/report/components/report-filter1.vue?vue&type=template&id=060f0313&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_filter1_vue_vue_type_template_id_060f0313___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);