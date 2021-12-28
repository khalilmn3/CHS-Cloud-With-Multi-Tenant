(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/src/api/guestinhouse/guestInHouse.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/api/guestinhouse/guestInHouse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestInHouseResource; });
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



var tableName = 'Folio';
var uri = 'guestinhouse';

var GuestInHouseResource = /*#__PURE__*/function (_Resource) {
  _inherits(GuestInHouseResource, _Resource);

  var _super = _createSuper(GuestInHouseResource);

  function GuestInHouseResource() {
    _classCallCheck(this, GuestInHouseResource);

    return _super.call(this, 'guestinhouse');
  }

  _createClass(GuestInHouseResource, [{
    key: "checkOut",
    value: function checkOut(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/checkout',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "complimentHu",
    value: function complimentHu(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/compliment',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "autoRoomCharge",
    value: function autoRoomCharge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/posting/autoroomcharge',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "moveRoom",
    value: function moveRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/moveroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "switchRoom",
    value: function switchRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/switchroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "listSwitchRoom",
    value: function listSwitchRoom(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/list/switchroom',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "lock",
    value: function lock(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/lock',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "incognito",
    value: function incognito(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/incognito',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "cancelCheckIn",
    value: function cancelCheckIn(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/cancel',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "message",
    value: function message(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/message',
        method: 'post',
        data: data
      });
    }
  }, {
    key: "toDo",
    value: function toDo(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/' + uri + '/other/todo',
        method: 'post',
        data: data
      });
    }
  }, {
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
        url: '/reservation/form/datalookup',
        method: 'get',
        params: params
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
    key: "logUserUpdateGuestInHouse",
    value: function logUserUpdateGuestInHouse(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: '/guestinhouse/loguserupdateguestinhouse',
        method: 'post',
        data: params
      });
    }
  }]);

  return GuestInHouseResource;
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

/***/ "./resources/js/src/api/transaction.js":
/*!*********************************************!*\
  !*** ./resources/js/src/api/transaction.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionResource; });
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



var tableName = 'sub_folio';
var uri = 'transaction';

var TransactionResource = /*#__PURE__*/function (_Resource) {
  _inherits(TransactionResource, _Resource);

  var _super = _createSuper(TransactionResource);

  function TransactionResource() {
    _classCallCheck(this, TransactionResource);

    return _super.call(this, uri);
  }

  _createClass(TransactionResource, [{
    key: "log",
    value: function log(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/tracking/log/".concat(tableName, "/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "lookup",
    value: function lookup(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/form/lookup"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "account",
    value: function account(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/form/account"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "folioType",
    value: function folioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/form/foliotype"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listRouting",
    value: function listRouting(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/list/routing"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listFolio",
    value: function listFolio(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/list/folio"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "listReturnTransfer",
    value: function listReturnTransfer(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/list/return"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "transferTransaction",
    value: function transferTransaction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/transaction"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "transferBalance",
    value: function transferBalance(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/balance"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "routing",
    value: function routing(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/routing"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "removeRouting",
    value: function removeRouting(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/routing/remove"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "returnTransfer",
    value: function returnTransfer(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/transfer/return"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "moveSubFolioGroup",
    value: function moveSubFolioGroup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/move"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "exchangeRate",
    value: function exchangeRate(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/form/exchrate"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "charge",
    value: function charge(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/charge"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "payment",
    value: function payment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/payment"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "amountBefore",
    value: function amountBefore(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/correction/amountbefore"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "correction",
    value: function correction(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/correction"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "void",
    value: function _void(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/void"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "balance",
    value: function balance(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/balance"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "getFolioType",
    value: function getFolioType(params) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/foliotype"),
        method: 'get',
        params: params
      });
    }
  }, {
    key: "editSubDepartment",
    value: function editSubDepartment(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/subdepartment/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "editRemark",
    value: function editRemark(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/remark/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "editDocumentNumber",
    value: function editDocumentNumber(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/documentnumber/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "editDirectBill",
    value: function editDirectBill(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/directbill/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "getSubDepartment",
    value: function getSubDepartment(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/lookup/subdepartment/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "getCompany",
    value: function getCompany(id) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/lookup/company/").concat(id),
        method: 'get'
      });
    }
  }, {
    key: "updateSubDepartment",
    value: function updateSubDepartment(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/subdepartment"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "updateRemark",
    value: function updateRemark(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/remark"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "updateDocumentNumber",
    value: function updateDocumentNumber(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/documentnumber"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "updateDirectBill",
    value: function updateDirectBill(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/update/directbill"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "getProperties1",
    value: function getProperties1(idLog) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/properties/list1/").concat(idLog),
        method: 'get'
      });
    }
  }, {
    key: "getProperties2",
    value: function getProperties2(idLog) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/properties/list2/").concat(idLog),
        method: 'get'
      });
    }
  }, {
    key: "getProperties3",
    value: function getProperties3(idLog) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/properties/list3/").concat(idLog),
        method: 'get'
      });
    }
  }, {
    key: "getPackageList",
    value: function getPackageList() {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/package/list"),
        method: 'get'
      });
    }
  }, {
    key: "packageLookup",
    value: function packageLookup(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/package/package-lookup"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "insertPackage",
    value: function insertPackage(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/package/package"),
        method: 'post',
        data: data
      });
    }
  }, {
    key: "packageBreakdown",
    value: function packageBreakdown(idLog) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/package/package-breakdown/").concat(idLog),
        method: 'get'
      });
    }
  }, {
    key: "getAdvancedCorrectionBreakdown",
    value: function getAdvancedCorrectionBreakdown(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/advanced-correction/").concat(data),
        method: 'get'
      });
    }
  }, {
    key: "updateAdvancedCorrection",
    value: function updateAdvancedCorrection(data) {
      return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
        url: "/".concat(uri, "/advanced-correction"),
        method: 'post',
        data: data
      });
    }
  }]);

  return TransactionResource;
}(_api_resource__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);