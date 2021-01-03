/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main1": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_welcome_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/welcome.JPG */ "./src/images/welcome.JPG");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_welcome_JPG__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app {\n  height: 300px;\n  background: yellowgreen;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  transform: rotate(15deg); }\n  .app .good {\n    font-size: 14px;\n    color: red;\n    transform: scale(0.5); }\n  .app input ::-moz-placeholder {\n    color: lightcoral; }\n  .app input :-ms-input-placeholder {\n    color: lightcoral; }\n  .app input ::placeholder {\n    color: lightcoral; }\n\n.test {\n  color: pink; }\n", "",{"version":3,"sources":["webpack://./src/App.scss"],"names":[],"mappings":"AAEA;EACI,aAAa;EACb,uBAAuB;EACvB,yDAA6C;EAC7C,wBAAwB,EAAA;EAJ5B;IAOQ,eAAe;IACf,UAVQ;IAWR,qBAAqB,EAAA;EAT7B;IAcY,iBAAiB,EAAA;EAd7B;IAcY,iBAAiB,EAAA;EAd7B;IAcY,iBAAiB,EAAA;;AAK7B;EACI,WAAW,EAAA","sourcesContent":["$body-color: red;\n\n.app {\n    height: 300px;\n    background: yellowgreen;\n    background-image: url(\"./images/welcome.JPG\");\n    transform: rotate(15deg);\n\n    .good {\n        font-size: 14px;\n        color: $body-color;\n        transform: scale(0.5);\n    }\n\n    input {\n        ::placeholder {\n            color: lightcoral;\n        }\n    }\n}\n\n.test {\n    color: pink;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/FirstLevel.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/FirstLevel.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sky_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sky.png */ "./src/images/sky.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_sky_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".first-level {\n  height: 200px;\n  background-size: 100%;\n  color: black;\n  border: 4px solid yellowgreen;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n\n.a {\n  color: green; }\n", "",{"version":3,"sources":["webpack://./src/FirstLevel.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,6BAA6B;EAC7B,mDAAmC,EAAA;;AAEvC;EACI,YAAY,EAAA","sourcesContent":[".first-level {\n    height: 200px;\n    background-size: 100%;\n    color: black;\n    border: 4px solid yellowgreen;\n    background: url(\"./images/sky.png\");\n}\n.a {\n    color: green;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sum */ "./src/sum.js");
/* harmony import */ var _FirstLevel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FirstLevel */ "./src/FirstLevel.jsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var imgsrc = __webpack_require__(/*! ./images/small.png */ "./src/images/small.png");

var imgsrc2 = __webpack_require__(/*! ./images/dog.png */ "./src/images/dog.png");

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var x = Object(_sum__WEBPACK_IMPORTED_MODULE_15__["default"])(1, 1);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", {
        className: "app"
      }, "welcome to my test env ", x, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
        className: "good"
      }, " let's go"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
        placeholder: "whose money"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_FirstLevel__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        src: imgsrc["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
        src: imgsrc2["default"]
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/App.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/FirstLevel.jsx":
/*!****************************!*\
  !*** ./src/FirstLevel.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FirstLevel; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _FirstLevel_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FirstLevel.scss */ "./src/FirstLevel.scss");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FirstLevel = /*#__PURE__*/function (_React$Component) {
  _inherits(FirstLevel, _React$Component);

  var _super = _createSuper(FirstLevel);

  function FirstLevel() {
    var _this;

    _classCallCheck(this, FirstLevel);

    _this.state = {
      x: 1
    };
    return _possibleConstructorReturn(_this);
  }

  _createClass(FirstLevel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('you did a great job!');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "first-level test"
      }, "She is a genuine person and the food is authentic Sichuan cuisine, and the process is legitimate!");
    }
  }]);

  return FirstLevel;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);



function test() {
  var _useState = useState("Click me,   please"),
      _useState2 = _slicedToArray(_useState, 2),
      buttonText = _useState2[0],
      setButtonText = _useState2[1];

  var value = this.state.buttonText ? 100 : 200;
  return value;
}

/***/ }),

/***/ "./src/FirstLevel.scss":
/*!*****************************!*\
  !*** ./src/FirstLevel.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FirstLevel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./FirstLevel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/FirstLevel.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FirstLevel_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FirstLevel_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/images/dog.png":
/*!****************************!*\
  !*** ./src/images/dog.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/dog.0af5f2f.png");

/***/ }),

/***/ "./src/images/sky.png":
/*!****************************!*\
  !*** ./src/images/sky.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/sky.f1fa346.png");

/***/ }),

/***/ "./src/images/small.png":
/*!******************************!*\
  !*** ./src/images/small.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/welcome.JPG":
/*!********************************!*\
  !*** ./src/images/welcome.JPG ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/welcome.df0ce90.JPG");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ })

/******/ });
//# sourceMappingURL=main1.3cab3c21.js.map