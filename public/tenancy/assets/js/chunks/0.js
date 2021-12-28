(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/utils/alert.js":
/*!*****************************************!*\
  !*** ./resources/js/src/utils/alert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lang */ "./resources/js/src/lang/index.js");
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/store.js */ "./resources/js/src/store/store.js");
/* harmony import */ var _utils_dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/dialog.js */ "./resources/js/src/utils/dialog.js");



var vm = new Vue({
  i18n: _lang__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    acceptAlertSucces: function acceptAlertSucces() {
      var _this = this;

      setTimeout(function () {
        return _this.$vs.notify({
          color: 'success',
          title: _this.$t('message.saveTitleSuccess'),
          text: _this.$t('message.saveSuccess'),
          position: _this.global.notifPosition
        });
      }, 1000);
    },
    acceptAlertSuccesCancelCheckIn: function acceptAlertSuccesCancelCheckIn() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.$vs.notify({
          color: 'success',
          title: _this2.$t('message.saveTitleSuccess'),
          text: _this2.$t('message.saveSuccessCancelCheckIn'),
          position: _this2.global.notifPosition
        });
      }, 1000);
    },
    acceptAlertSuccesWithText: function acceptAlertSuccesWithText(text) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.$vs.notify({
          color: 'success',
          title: _this3.$t('message.saveTitleSuccess'),
          text: text,
          position: _this3.global.notifPosition
        });
      }, 1000);
    },
    inputRequiredAlert: function inputRequiredAlert() {
      this.$vs.notify({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: this.$t('message.inputRequired'),
        position: this.global.notifPosition
      });
    },
    deleteAlertSuccess: function deleteAlertSuccess() {
      var _this4 = this;

      setTimeout(function () {
        return _this4.$vs.notify({
          color: 'danger',
          title: _this4.$t('message.informationTitle'),
          text: _this4.$t('message.deleteSuccess'),
          position: _this4.global.notifPosition
        });
      }, 1000);
    },
    errorFetchDataAlert: function errorFetchDataAlert(error) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: error,
        // || this.$t('message.errorFetchData'),
        position: this.global.notifPosition
      });
    },
    errorSaveDataAlert: function errorSaveDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message || this.$t('message.errorSaveData'),
        position: this.global.notifPosition
      });
    },
    errorSaveExistAccountData: function errorSaveExistAccountData(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message ? message : this.$t('message.errorSaveExistAccountData'),
        position: this.global.notifPosition
      });
    },
    errorDeleteDataAlert: function errorDeleteDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorDeleteData'),
        position: this.global.notifPosition
      });
    },
    errorModifyingDataAlert: function errorModifyingDataAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorModifyingData'),
        position: this.global.notifPosition
      });
    },
    errorCashRefundAlert: function errorCashRefundAlert(message) {
      this.$vs.notify({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: message ? message : this.$t('message.errorModifyingData'),
        position: this.global.notifPosition
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ }),

/***/ "./resources/js/src/utils/dialog.js":
/*!******************************************!*\
  !*** ./resources/js/src/utils/dialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lang */ "./resources/js/src/lang/index.js");


var vm = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  i18n: _lang__WEBPACK_IMPORTED_MODULE_1__["default"],
  methods: {
    completeField: function completeField(message) {
      var text = message || this.$t('message.completeText');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    selectField: function selectField(message) {
      var text = message || this.$t('message.selectData');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    noRoomAvailable: function noRoomAvailable(message) {
      var text = message || this.$t('message.roomNotAvailable');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNumberNotAvailable: function roomNumberNotAvailable(message) {
      var text = message || this.$t('message.roomNumberNotAvailable');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    existAccount: function existAccount(message) {
      var text = message || this.$t('message.existAccount');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    existData: function existData(message, procedure) {
      var text = message || this.$t('message.existAccount');
      this.$vs.dialog({
        color: 'danger',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.yes'),
        accept: function accept() {
          if (procedure) procedure;
        }
      });
    },
    dialogInsertMasterSuccessfully: function dialogInsertMasterSuccessfully(message, data) {
      var text = message || this.$t('message.insertMasterSuccessfully') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNumberCannotExtend: function roomNumberCannotExtend(message, data) {
      var text = message || this.$t('message.roomNumberCannotExtend') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    information: function information(message, thisData, event, data1, data2) {
      var text = message || this.$t('message.informationTitle');
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    informationError: function informationError(message, thisData, event, data1, data2) {
      var text = message || this.$t('message.errorTitle');
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.errorTitle'),
        text: text,
        acceptText: this.$t('button.ok'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    confirmation: function confirmation(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: this.$t('message.confirmTitle'),
        text: this.$t('message.confirmation'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    confirmationW8Text: function confirmationW8Text(message, thisData, event, data1, data2, data3) {
      var text = message || this.$t('message.confirmTitle');
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: this.$t('message.confirmTitle'),
        text: text,
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2, data3);
        }
      });
    },
    confirmationDelete: function confirmationDelete(thisData, event, data1, data2) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('message.confirmTitle'),
        text: this.$t('message.deleteConfirm'),
        acceptText: this.$t('message.yes'),
        cancelText: this.$t('message.no'),
        accept: function accept() {
          if (thisData) thisData[event](data1, data2);
        }
      });
    },
    informationNoDetail: function informationNoDetail(message) {
      var text = message || this.$t('message.informationNoDetailData');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    roomNotAvailable: function roomNotAvailable(message, data) {
      var text = message || this.$t('message.roomNotAvailable') + data;
      this.$vs.dialog({
        color: 'primary',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    statusCheckInReservation: function statusCheckInReservation(message) {
      this.$vs.dialog({
        color: 'danger',
        title: this.$t('message.informationTitle'),
        text: message,
        acceptText: this.$t('button.ok')
      });
    },
    reservationSaveSuccess: function reservationSaveSuccess(message, data, procedure) {
      this.$vs.dialog({
        color: 'primary',
        type: 'confirm',
        title: this.$t('message.informationTitle'),
        text: 'Reservation successfully saved, continue?',
        acceptText: this.$t('button.yes'),
        cancelText: this.$t('button.no'),
        cancel: function cancel() {
          procedure;
        }
      });
    },
    reportTemplateNotFound: function reportTemplateNotFound(message, data) {
      var text = message || this.$t('message.reportTemplateNotFound');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    reportDataNotFound: function reportDataNotFound(message, data) {
      var text = message || this.$t('message.reportDataNotFound');
      this.$vs.dialog({
        color: 'warning',
        title: this.$t('message.informationTitle'),
        text: text,
        acceptText: this.$t('button.ok')
      });
    },
    unauthorized: function unauthorized(message, data) {
      var text = message || this.$t('message.unauthorized') + data;
      this.$vs.dialog({
        color: 'warning',
        title: 'Unauthorized',
        text: text,
        acceptText: this.$t('button.ok')
      });
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (vm);

/***/ })

}]);