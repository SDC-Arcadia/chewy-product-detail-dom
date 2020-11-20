module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/server.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/components/AddToCardComponent.jsx":
/*!**************************************************!*\
  !*** ./public/components/AddToCardComponent.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable jsx-a11y/mouse-events-have-key-events */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */


var AddToCardComponent = function AddToCardComponent(_ref) {
  var stock = _ref.stock;
  var options = [];

  for (var i = 1; i <= stock; i += 1) {
    options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: i
    }, i));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "add-to-cart-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "border-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "quantity-select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "quantity",
    className: "quantity"
  }, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "quantity",
    id: "quantity",
    className: "js-quantity-dropdown"
  }, options))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    className: "cw-btn",
    value: "Add to Cart"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "add-to-fav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "td3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "heart",
    src: "https://fec-kwame-picture-service.s3.amazonaws.com/stars/heart.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "td2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "span-text"
  }, "Add to Favorites")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCardComponent);

/***/ }),

/***/ "./public/components/AutoshipComponent.jsx":
/*!*************************************************!*\
  !*** ./public/components/AutoshipComponent.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/prop-types */

/* eslint-disable no-mixed-operators */

/* eslint-disable jsx-a11y/alt-text */


var AutoshipComponent = function AutoshipComponent(_ref) {
  var fullPrice = _ref.fullPrice;
  var discounted = (fullPrice - fullPrice / 100 * 5).toFixed(2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "our-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "table-auto1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    type: "image/png"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "icon",
    src: "https://fec-kwame-picture-service.s3.amazonaws.com/stars/icon.png"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "autoship"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "autoship-span1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Autoship:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "autoship-span2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "$Save"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    id: "table-auto2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "price"
  }, "$".concat(discounted, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "save-with-price1"
  }, "(Save an extra 5%)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "tdp1"
  }, "Simply select Autoship at checkout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "tdp1"
  }, "for easy regular deliveries."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AutoshipComponent);

/***/ }),

/***/ "./public/components/ItemStockComponent.jsx":
/*!**************************************************!*\
  !*** ./public/components/ItemStockComponent.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/mouse-events-have-key-events */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */


var ItemStockComponent = function ItemStockComponent(_ref) {
  var sizeHandler = _ref.sizeHandler,
      itemsStock = _ref.itemsStock,
      currentSize = _ref.currentSize,
      opts = _ref.opts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "stock"
  }, itemsStock > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "in-stock"
  }, "In stock") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "out-of-stock"
  }, "Out of stock"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "current-size"
  }, "Size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "size-option"
  }, "  ".concat(currentSize))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stock-container"
  }, opts.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: index,
      className: "button",
      onClick: sizeHandler,
      type: "button",
      id: index
    }, option);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    hfer: "",
    id: "stock"
  }, "Compare Similar Items "));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemStockComponent);

/***/ }),

/***/ "./public/components/PriceBeforeDiscount.jsx":
/*!***************************************************!*\
  !*** ./public/components/PriceBeforeDiscount.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react/prop-types */


var PriceBeforeDiscount = function PriceBeforeDiscount(_ref) {
  var priceBefore = _ref.priceBefore;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "our-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "Was:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "before-discount-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strike", null, "$".concat(priceBefore))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceBeforeDiscount);

/***/ }),

/***/ "./public/components/PriceComponent.jsx":
/*!**********************************************!*\
  !*** ./public/components/PriceComponent.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PriceBeforeDiscount_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceBeforeDiscount.jsx */ "./public/components/PriceBeforeDiscount.jsx");
/* harmony import */ var _YouSaveOnPriceComponent_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YouSaveOnPriceComponent.jsx */ "./public/components/YouSaveOnPriceComponent.jsx");
/* harmony import */ var _AutoshipComponent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutoshipComponent.jsx */ "./public/components/AutoshipComponent.jsx");
/* harmony import */ var _ItemStockComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemStockComponent.jsx */ "./public/components/ItemStockComponent.jsx");
/* eslint-disable no-mixed-operators */

/* eslint-disable max-len */

/* eslint-disable radix */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable import/extensions */






var PriceComponent = function PriceComponent(_ref) {
  var price = _ref.price,
      discount = _ref.discount,
      changeSize = _ref.changeSize,
      stock = _ref.stock,
      csize = _ref.csize,
      options = _ref.options,
      buttonOption = _ref.buttonOption;
  var parsed = parseInt(price).toFixed(2);
  var discounted = parsed / 100 * discount;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "product-vitals",
    className: "product-vitals"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "pricing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, discount === 0 ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceBeforeDiscount_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    priceBefore: parsed
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "our-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "Price:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "price"
  }, discount === 0 ? "$".concat(parsed) : "$".concat((parsed - discounted).toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "free-shipping"
  }, "FREE 1-3 DAY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "SHIPPING OVER $49"))))))), discount === 0 ? '' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YouSaveOnPriceComponent_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    discountedAmount: discounted,
    discountPercentage: discount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr1"
  }), discount === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoshipComponent_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fullPrice: price
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoshipComponent_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fullPrice: price - discounted
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "hr2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "shipping-options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemStockComponent_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sizeHandler: changeSize,
    itemsStock: stock,
    currentSize: csize,
    opts: options,
    sizeOption: buttonOption
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceComponent);

/***/ }),

/***/ "./public/components/ProductDetail.jsx":
/*!*********************************************!*\
  !*** ./public/components/ProductDetail.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ "./public/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PriceComponent_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceComponent.jsx */ "./public/components/PriceComponent.jsx");
/* harmony import */ var _ProductHeaderlInfo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductHeaderlInfo.jsx */ "./public/components/ProductHeaderlInfo.jsx");
/* harmony import */ var _AddToCardComponent_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddToCardComponent.jsx */ "./public/components/AddToCardComponent.jsx");
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

/* eslint-disable no-console */

/* eslint-disable no-undef */

/* eslint-disable react/no-unused-state */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/sort-comp */

/* eslint-disable camelcase */

/* eslint-disable import/extensions */

/* eslint-disable import/no-extraneous-dependencies */
 // import axios from 'axios';




 // const SERVER_URL = 'http://localhost:3001';
// const SERVER_URL = 'http://sdc-api.dominicsilvia.com';

var ProductDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductDetail, _React$Component);

  var _super = _createSuper(ProductDetail);

  function ProductDetail(props) {
    var _this;

    _classCallCheck(this, ProductDetail);

    // eslint-disable-next-line no-unused-expressions
    _this = _super.call(this, props);
    var _props$product = props.product,
        name = _props$product.name,
        brand = _props$product.brand,
        seller = _props$product.seller,
        review_count = _props$product.review_count,
        average_stars = _props$product.average_stars,
        size_options = _props$product.size_options;
    var sizes = size_options.map(function (option) {
      return option.size;
    });
    _this.state = {
      itemBrand: brand || '',
      itemSeller: seller || '',
      itemName: name || '',
      itemSizes: size_options || [],
      currentSize: '0',
      average_stars: average_stars || '0',
      QA: '17',
      count: review_count || 0,
      sizes: sizes || [],
      sizeButton: size_options[0].size || 0
    }; // this.getProductFullData = this.getProductFullData.bind(this);

    _this.handleDifferentSizeOptions = _this.handleDifferentSizeOptions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductDetail, [{
    key: "handleDifferentSizeOptions",
    value: function handleDifferentSizeOptions(event) {
      event.preventDefault();
      this.setState({
        currentSize: event.target.id
      });
    } // getProductFullData(productId) {
    //   console.log('about to fetch data');
    //   axios.get(`${SERVER_URL}/productFullData/${productId}`)
    //     .then((result) => {
    //       console.log('\\\\\\\\\\\\\\', result.data);
    //       const sizes = result.data.size_options.map((option) => option.size);
    //       const {
    //         brand,
    //         seller,
    //         name,
    //         size_options,
    //         review_count,
    //         average_stars,
    //       } = result.data;
    //       this.setState({
    //         itemBrand: brand,
    //         itemSeller: seller,
    //         itemName: name,
    //         itemSizes: size_options,
    //         count: review_count,
    //         average_stars,
    //         sizes,
    //         sizeButton: result.data.size_options[0].size,
    //       });
    //     })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }
    //    componentDidMount() {
    //   //  const productId = this.props.productId || new URLSearchParams(window.location.search).get('productId');
    //       const urlParams = new URLSearchParams(window.location.search);
    //       const id = urlParams.get('productId');
    //       console.log('PROPS', this.propProductId);
    //       console.log('productId-ssr', id);
    //       this.getProductFullData(id === null ? '1' : id);
    //     this.getProductFullData(productId);
    //  }

  }, {
    key: "render",
    value: function render() {
      var itemSizes = this.state.itemSizes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        id: "right-column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "zoom-container"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductHeaderlInfo_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: this.state.itemName,
        seller: this.state.itemSeller,
        brand: this.state.itemBrand,
        count: this.state.count,
        averageStars: this.state.average_stars,
        answersCount: this.state.QA
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriceComponent_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        price: itemSizes[this.state.currentSize].price,
        discount: itemSizes[this.state.currentSize].discount,
        stock: itemSizes[this.state.currentSize].item_stock,
        csize: itemSizes[this.state.currentSize].size,
        changeSize: this.handleDifferentSizeOptions,
        options: this.state.sizes,
        buttonOption: this.state.sizeButton
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        id: "td1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCardComponent_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        stock: itemSizes[this.state.currentSize].item_stock
      })))))));
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ }),

/***/ "./public/components/ProductHeaderlInfo.jsx":
/*!**************************************************!*\
  !*** ./public/components/ProductHeaderlInfo.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */


var ProductHeaderComponent = function ProductHeaderComponent(_ref) {
  var name = _ref.name,
      seller = _ref.seller,
      brand = _ref.brand,
      count = _ref.count,
      averageStars = _ref.averageStars,
      answersCount = _ref.answersCount;
  var startSvgFilePath = "https://fec-kwame-picture-service.s3.amazonaws.com/stars/rating-".concat(averageStars, ".svg");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "".concat(brand, " ").concat(name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "product-header-extras"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, '                            By ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    itemProp: "brand"
  }, seller)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-header-extras"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ugc-head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    type: "image/svg+xml"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    id: "stars",
    src: startSvgFilePath
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, count, ' Reviews  ')), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: ""
  }, answersCount, ' Answered Questions'))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductHeaderComponent);

/***/ }),

/***/ "./public/components/YouSaveOnPriceComponent.jsx":
/*!*******************************************************!*\
  !*** ./public/components/YouSaveOnPriceComponent.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable radix */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */


var YouSaveOnPriceComponent = function YouSaveOnPriceComponent(_ref) {
  var discountedAmount = _ref.discountedAmount,
      discountPercentage = _ref.discountPercentage;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "our-price"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "You Save:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "save-with-price"
  }, "$".concat(discountedAmount.toFixed(2), " (").concat(discountPercentage, "%)")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (YouSaveOnPriceComponent);

/***/ }),

/***/ "./public/server.jsx":
/*!***************************!*\
  !*** ./public/server.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProductDetail_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProductDetail.jsx */ "./public/components/ProductDetail.jsx");



/* harmony default export */ __webpack_exports__["default"] = (function (product) {
  return react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductDetail_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product
  }));
});

/***/ }),

/***/ "./public/styles.scss":
/*!****************************!*\
  !*** ./public/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0RGV0YWlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvY29tcG9uZW50cy9BZGRUb0NhcmRDb21wb25lbnQuanN4Iiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvY29tcG9uZW50cy9BdXRvc2hpcENvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC8uL3B1YmxpYy9jb21wb25lbnRzL0l0ZW1TdG9ja0NvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC8uL3B1YmxpYy9jb21wb25lbnRzL1ByaWNlQmVmb3JlRGlzY291bnQuanN4Iiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvY29tcG9uZW50cy9QcmljZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC8uL3B1YmxpYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwuanN4Iiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvY29tcG9uZW50cy9Qcm9kdWN0SGVhZGVybEluZm8uanN4Iiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvY29tcG9uZW50cy9Zb3VTYXZlT25QcmljZUNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC8uL3B1YmxpYy9zZXJ2ZXIuanN4Iiwid2VicGFjazovL3Byb2R1Y3REZXRhaWwvLi9wdWJsaWMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvZHVjdERldGFpbC9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJBZGRUb0NhcmRDb21wb25lbnQiLCJzdG9jayIsIm9wdGlvbnMiLCJpIiwicHVzaCIsIkF1dG9zaGlwQ29tcG9uZW50IiwiZnVsbFByaWNlIiwiZGlzY291bnRlZCIsInRvRml4ZWQiLCJJdGVtU3RvY2tDb21wb25lbnQiLCJzaXplSGFuZGxlciIsIml0ZW1zU3RvY2siLCJjdXJyZW50U2l6ZSIsIm9wdHMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIlByaWNlQmVmb3JlRGlzY291bnQiLCJwcmljZUJlZm9yZSIsIlByaWNlQ29tcG9uZW50IiwicHJpY2UiLCJkaXNjb3VudCIsImNoYW5nZVNpemUiLCJjc2l6ZSIsImJ1dHRvbk9wdGlvbiIsInBhcnNlZCIsInBhcnNlSW50IiwiUHJvZHVjdERldGFpbCIsInByb3BzIiwicHJvZHVjdCIsIm5hbWUiLCJicmFuZCIsInNlbGxlciIsInJldmlld19jb3VudCIsImF2ZXJhZ2Vfc3RhcnMiLCJzaXplX29wdGlvbnMiLCJzaXplcyIsInNpemUiLCJzdGF0ZSIsIml0ZW1CcmFuZCIsIml0ZW1TZWxsZXIiLCJpdGVtTmFtZSIsIml0ZW1TaXplcyIsIlFBIiwiY291bnQiLCJzaXplQnV0dG9uIiwiaGFuZGxlRGlmZmVyZW50U2l6ZU9wdGlvbnMiLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwiaWQiLCJpdGVtX3N0b2NrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9kdWN0SGVhZGVyQ29tcG9uZW50IiwiYXZlcmFnZVN0YXJzIiwiYW5zd2Vyc0NvdW50Iiwic3RhcnRTdmdGaWxlUGF0aCIsIllvdVNhdmVPblByaWNlQ29tcG9uZW50IiwiZGlzY291bnRlZEFtb3VudCIsImRpc2NvdW50UGVyY2VudGFnZSIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdHJpbmciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Q0E7QUFFZSx5RUFBQy9CLE9BQUQ7QUFBQSxTQUFha0MsdURBQWMsQ0FBQ0MsY0FBZixlQUMxQiwyREFBQyxxRUFBRDtBQUNFLFdBQU8sRUFBRW5DO0FBRFgsSUFEMEIsQ0FBYjtBQUFBLENBQWYsRTs7Ozs7Ozs7Ozs7QUNKQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9zZXJ2ZXIuanN4XCIpO1xuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWFzc29jaWF0ZWQtY29udHJvbCAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L21vdXNlLWV2ZW50cy1oYXZlLWtleS1ldmVudHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBZGRUb0NhcmRDb21wb25lbnQgPSAoeyBzdG9jayB9KSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RvY2s7IGkgKz0gMSkge1xuICAgIG9wdGlvbnMucHVzaCg8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPik7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiYWRkLXRvLWNhcnQtYm94XCI+XG4gICAgICA8ZGl2IGlkPVwiYm9yZGVyLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1YW50aXR5XCIgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5RdWFudGl0eTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJxdWFudGl0eVwiIGlkPVwicXVhbnRpdHlcIiBjbGFzc05hbWU9XCJqcy1xdWFudGl0eS1kcm9wZG93blwiPlxuICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImN3LWJ0blwiIHZhbHVlPVwiQWRkIHRvIENhcnRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aHIgY2xhc3NOYW1lPVwiaHIzXCIgLz5cbiAgICAgIDxhIGlkPVwiYWRkLXRvLWZhdlwiPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgaWQ9XCJ0ZDNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwiaGVhcnRcIiBzcmM9XCJodHRwczovL2ZlYy1rd2FtZS1waWN0dXJlLXNlcnZpY2UuczMuYW1hem9uYXdzLmNvbS9zdGFycy9oZWFydC5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgaWQ9XCJ0ZDJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInNwYW4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgQWRkIHRvIEZhdm9yaXRlc1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FyZENvbXBvbmVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWx0LXRleHQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEF1dG9zaGlwQ29tcG9uZW50ID0gKHsgZnVsbFByaWNlIH0pID0+IHtcbiAgY29uc3QgZGlzY291bnRlZCA9IChmdWxsUHJpY2UgLSAoZnVsbFByaWNlIC8gMTAwICogNSkpLnRvRml4ZWQoMik7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm91ci1wcmljZVwiPlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGlkPVwidGFibGUtYXV0bzFcIj5cbiAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgIDxwaWN0dXJlIHR5cGU9XCJpbWFnZS9wbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpY29uXCIgc3JjPVwiaHR0cHM6Ly9mZWMta3dhbWUtcGljdHVyZS1zZXJ2aWNlLnMzLmFtYXpvbmF3cy5jb20vc3RhcnMvaWNvbi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGlkPVwiYXV0b3NoaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImF1dG9zaGlwLXNwYW4xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PkF1dG9zaGlwOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImF1dG9zaGlwLXNwYW4yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiRTYXZlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBpZD1cInRhYmxlLWF1dG8yXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAge2AkJHtkaXNjb3VudGVkfSBgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwic2F2ZS13aXRoLXByaWNlMVwiPlxuICAgICAgICAgICAgICAgICAgKFNhdmUgYW4gZXh0cmEgNSUpXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGlkPVwidGRwMVwiPlNpbXBseSBzZWxlY3QgQXV0b3NoaXAgYXQgY2hlY2tvdXQ8L3A+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwidGRwMVwiPmZvciBlYXN5IHJlZ3VsYXIgZGVsaXZlcmllcy48L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRvc2hpcENvbXBvbmVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbW91c2UtZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEl0ZW1TdG9ja0NvbXBvbmVudCA9ICh7XG4gIHNpemVIYW5kbGVyLCBpdGVtc1N0b2NrLCBjdXJyZW50U2l6ZSwgb3B0cyxcbn0pID0+IChcbiAgPGRpdiBpZD1cInN0b2NrXCI+XG4gICAge2l0ZW1zU3RvY2sgPiAwID8gPGRpdiBpZD1cImluLXN0b2NrXCI+SW4gc3RvY2s8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cIm91dC1vZi1zdG9ja1wiPk91dCBvZiBzdG9jazwvZGl2PiB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50LXNpemVcIj5cbiAgICAgIFNpemU6XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXplLW9wdGlvblwiPntgICAke2N1cnJlbnRTaXplfWB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvY2stY29udGFpbmVyXCI+XG4gICAgICB7IG9wdHMubWFwKChvcHRpb24sIGluZGV4KSA9PiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NpemVIYW5kbGVyfSB0eXBlPVwiYnV0dG9uXCIgaWQ9e2luZGV4fT57b3B0aW9ufTwvYnV0dG9uPikgfVxuICAgIDwvZGl2PlxuICAgIDxhIGhmZXI9XCJcIiBpZD1cInN0b2NrXCI+Q29tcGFyZSBTaW1pbGFyIEl0ZW1zIDwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtU3RvY2tDb21wb25lbnQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQcmljZUJlZm9yZURpc2NvdW50ID0gKHsgcHJpY2VCZWZvcmUgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwib3VyLXByaWNlXCI+XG4gICAgPHRhYmxlPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5XYXM6PC9wPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHAgaWQ9XCJiZWZvcmUtZGlzY291bnQtcHJpY2VcIj5cbiAgICAgICAgICAgICAgPHN0cmlrZT5cbiAgICAgICAgICAgICAgICB7YCQke3ByaWNlQmVmb3JlfWB9XG4gICAgICAgICAgICAgIDwvc3RyaWtlPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZUJlZm9yZURpc2NvdW50O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmljZUJlZm9yZURpc2NvdW50IGZyb20gJy4vUHJpY2VCZWZvcmVEaXNjb3VudC5qc3gnO1xuaW1wb3J0IFlvdVNhdmVPblByaWNlQ29tcG9uZW50IGZyb20gJy4vWW91U2F2ZU9uUHJpY2VDb21wb25lbnQuanN4JztcbmltcG9ydCBBdXRvc2hpcENvbXBvbmVudCBmcm9tICcuL0F1dG9zaGlwQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgSXRlbVN0b2NrQ29tcG9uZW50IGZyb20gJy4vSXRlbVN0b2NrQ29tcG9uZW50LmpzeCc7XG5cbmNvbnN0IFByaWNlQ29tcG9uZW50ID0gKHtcbiAgcHJpY2UsIGRpc2NvdW50LCBjaGFuZ2VTaXplLCBzdG9jaywgY3NpemUsIG9wdGlvbnMsIGJ1dHRvbk9wdGlvbixcbn0pID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocHJpY2UpLnRvRml4ZWQoMik7XG4gIGNvbnN0IGRpc2NvdW50ZWQgPSBwYXJzZWQgLyAxMDAgKiBkaXNjb3VudDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwicHJvZHVjdC12aXRhbHNcIiBjbGFzc05hbWU9XCJwcm9kdWN0LXZpdGFsc1wiPlxuICAgICAgPGRpdiBpZD1cInByaWNpbmdcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtkaXNjb3VudCA9PT0gMCA/ICcnIDogPFByaWNlQmVmb3JlRGlzY291bnQgcHJpY2VCZWZvcmU9e3BhcnNlZH0gLz59XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm91ci1wcmljZVwiPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFByaWNlOlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGlzY291bnQgPT09IDAgPyBgJCR7cGFyc2VkfWAgOiBgJCR7KHBhcnNlZCAtIGRpc2NvdW50ZWQpLnRvRml4ZWQoMil9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmcmVlLXNoaXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRlJFRSAxLTMgREFZXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNISVBQSU5HIE9WRVIgJDQ5XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAge2Rpc2NvdW50ID09PSAwID8gJycgOiA8WW91U2F2ZU9uUHJpY2VDb21wb25lbnQgZGlzY291bnRlZEFtb3VudD17ZGlzY291bnRlZH0gZGlzY291bnRQZXJjZW50YWdlPXtkaXNjb3VudH0gLz59XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhyMVwiIC8+XG4gICAgICAgICAge2Rpc2NvdW50ID09PSAwID8gPEF1dG9zaGlwQ29tcG9uZW50IGZ1bGxQcmljZT17cHJpY2V9IC8+IDogPEF1dG9zaGlwQ29tcG9uZW50IGZ1bGxQcmljZT17cHJpY2UgLSBkaXNjb3VudGVkfSAvPn1cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaHIyXCIgLz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cInNoaXBwaW5nLW9wdGlvbnNcIj5cbiAgICAgICAgPEl0ZW1TdG9ja0NvbXBvbmVudCBzaXplSGFuZGxlcj17Y2hhbmdlU2l6ZX0gaXRlbXNTdG9jaz17c3RvY2t9IGN1cnJlbnRTaXplPXtjc2l6ZX0gb3B0cz17b3B0aW9uc30gc2l6ZU9wdGlvbj17YnV0dG9uT3B0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZUNvbXBvbmVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bnVzZWQtc3RhdGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rlc3RydWN0dXJpbmctYXNzaWdubWVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvc29ydC1jb21wICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcbmltcG9ydCBQcmljZUNvbXBvbmVudCBmcm9tICcuL1ByaWNlQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgUHJvZHVjdEhlYWRlciBmcm9tICcuL1Byb2R1Y3RIZWFkZXJsSW5mby5qc3gnO1xuaW1wb3J0IEFkZFRvQ2FyZENvbXBvbmVudCBmcm9tICcuL0FkZFRvQ2FyZENvbXBvbmVudC5qc3gnO1xuXG4vLyBjb25zdCBTRVJWRVJfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSc7XG5cbi8vIGNvbnN0IFNFUlZFUl9VUkwgPSAnaHR0cDovL3NkYy1hcGkuZG9taW5pY3NpbHZpYS5jb20nO1xuXG5jbGFzcyBQcm9kdWN0RGV0YWlsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBicmFuZCxcbiAgICAgIHNlbGxlcixcbiAgICAgIHJldmlld19jb3VudCxcbiAgICAgIGF2ZXJhZ2Vfc3RhcnMsXG4gICAgICBzaXplX29wdGlvbnMsXG4gICAgfSA9IHByb3BzLnByb2R1Y3Q7XG5cbiAgICBjb25zdCBzaXplcyA9IHNpemVfb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnNpemUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1CcmFuZDogYnJhbmQgfHwgJycsXG4gICAgICBpdGVtU2VsbGVyOiBzZWxsZXIgfHwgJycsXG4gICAgICBpdGVtTmFtZTogbmFtZSB8fCAnJyxcbiAgICAgIGl0ZW1TaXplczogc2l6ZV9vcHRpb25zIHx8IFtdLFxuICAgICAgY3VycmVudFNpemU6ICcwJyxcbiAgICAgIGF2ZXJhZ2Vfc3RhcnM6IGF2ZXJhZ2Vfc3RhcnMgfHwgJzAnLFxuICAgICAgUUE6ICcxNycsXG4gICAgICBjb3VudDogcmV2aWV3X2NvdW50IHx8IDAsXG4gICAgICBzaXplczogc2l6ZXMgfHwgW10sXG4gICAgICBzaXplQnV0dG9uOiBzaXplX29wdGlvbnNbMF0uc2l6ZSB8fCAwLFxuICAgIH07XG5cbiAgICAvLyB0aGlzLmdldFByb2R1Y3RGdWxsRGF0YSA9IHRoaXMuZ2V0UHJvZHVjdEZ1bGxEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEaWZmZXJlbnRTaXplT3B0aW9ucyA9IHRoaXMuaGFuZGxlRGlmZmVyZW50U2l6ZU9wdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZURpZmZlcmVudFNpemVPcHRpb25zKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTaXplOiBldmVudC50YXJnZXQuaWQsXG4gICAgfSk7XG4gIH1cblxuICAvLyBnZXRQcm9kdWN0RnVsbERhdGEocHJvZHVjdElkKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2Fib3V0IHRvIGZldGNoIGRhdGEnKTtcbiAgLy8gICBheGlvcy5nZXQoYCR7U0VSVkVSX1VSTH0vcHJvZHVjdEZ1bGxEYXRhLyR7cHJvZHVjdElkfWApXG4gIC8vICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcJywgcmVzdWx0LmRhdGEpO1xuICAvLyAgICAgICBjb25zdCBzaXplcyA9IHJlc3VsdC5kYXRhLnNpemVfb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnNpemUpO1xuICAvLyAgICAgICBjb25zdCB7XG4gIC8vICAgICAgICAgYnJhbmQsXG4gIC8vICAgICAgICAgc2VsbGVyLFxuICAvLyAgICAgICAgIG5hbWUsXG4gIC8vICAgICAgICAgc2l6ZV9vcHRpb25zLFxuICAvLyAgICAgICAgIHJldmlld19jb3VudCxcbiAgLy8gICAgICAgICBhdmVyYWdlX3N0YXJzLFxuICAvLyAgICAgICB9ID0gcmVzdWx0LmRhdGE7XG5cbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICAgICAgaXRlbUJyYW5kOiBicmFuZCxcbiAgLy8gICAgICAgICBpdGVtU2VsbGVyOiBzZWxsZXIsXG4gIC8vICAgICAgICAgaXRlbU5hbWU6IG5hbWUsXG4gIC8vICAgICAgICAgaXRlbVNpemVzOiBzaXplX29wdGlvbnMsXG4gIC8vICAgICAgICAgY291bnQ6IHJldmlld19jb3VudCxcbiAgLy8gICAgICAgICBhdmVyYWdlX3N0YXJzLFxuICAvLyAgICAgICAgIHNpemVzLFxuICAvLyAgICAgICAgIHNpemVCdXR0b246IHJlc3VsdC5kYXRhLnNpemVfb3B0aW9uc1swXS5zaXplLFxuXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAvLyAgICAgfSk7XG4gIC8vIH1cblxuICAvLyAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgLy8gICAvLyAgY29uc3QgcHJvZHVjdElkID0gdGhpcy5wcm9wcy5wcm9kdWN0SWQgfHwgbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3Byb2R1Y3RJZCcpO1xuICAvLyAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAvLyAgICAgICBjb25zdCBpZCA9IHVybFBhcmFtcy5nZXQoJ3Byb2R1Y3RJZCcpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnUFJPUFMnLCB0aGlzLnByb3BQcm9kdWN0SWQpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZygncHJvZHVjdElkLXNzcicsIGlkKTtcbiAgLy8gICAgICAgdGhpcy5nZXRQcm9kdWN0RnVsbERhdGEoaWQgPT09IG51bGwgPyAnMScgOiBpZCk7XG4gIC8vICAgICB0aGlzLmdldFByb2R1Y3RGdWxsRGF0YShwcm9kdWN0SWQpO1xuICAvLyAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1TaXplcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJyaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiem9vbS1jb250YWluZXJcIiAvPlxuICAgICAgICAgIDxQcm9kdWN0SGVhZGVyXG4gICAgICAgICAgICBuYW1lPXt0aGlzLnN0YXRlLml0ZW1OYW1lfVxuICAgICAgICAgICAgc2VsbGVyPXt0aGlzLnN0YXRlLml0ZW1TZWxsZXJ9XG4gICAgICAgICAgICBicmFuZD17dGhpcy5zdGF0ZS5pdGVtQnJhbmR9XG4gICAgICAgICAgICBjb3VudD17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgIGF2ZXJhZ2VTdGFycz17dGhpcy5zdGF0ZS5hdmVyYWdlX3N0YXJzfVxuICAgICAgICAgICAgYW5zd2Vyc0NvdW50PXt0aGlzLnN0YXRlLlFBfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPFByaWNlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtU2l6ZXNbdGhpcy5zdGF0ZS5jdXJyZW50U2l6ZV0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50PXtpdGVtU2l6ZXNbdGhpcy5zdGF0ZS5jdXJyZW50U2l6ZV0uZGlzY291bnR9XG4gICAgICAgICAgICAgICAgICAgIHN0b2NrPXtpdGVtU2l6ZXNbdGhpcy5zdGF0ZS5jdXJyZW50U2l6ZV0uaXRlbV9zdG9ja31cbiAgICAgICAgICAgICAgICAgICAgY3NpemU9e2l0ZW1TaXplc1t0aGlzLnN0YXRlLmN1cnJlbnRTaXplXS5zaXplfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VTaXplPXt0aGlzLmhhbmRsZURpZmZlcmVudFNpemVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnN0YXRlLnNpemVzfVxuICAgICAgICAgICAgICAgICAgICBidXR0b25PcHRpb249e3RoaXMuc3RhdGUuc2l6ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgaWQ9XCJ0ZDFcIj5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb0NhcmRDb21wb25lbnQgc3RvY2s9e2l0ZW1TaXplc1t0aGlzLnN0YXRlLmN1cnJlbnRTaXplXS5pdGVtX3N0b2NrfSAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FsdC10ZXh0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUHJvZHVjdEhlYWRlckNvbXBvbmVudCA9ICh7XG4gIG5hbWUsIHNlbGxlciwgYnJhbmQsIGNvdW50LCBhdmVyYWdlU3RhcnMsIGFuc3dlcnNDb3VudCxcbn0pID0+IHtcbiAgY29uc3Qgc3RhcnRTdmdGaWxlUGF0aCA9IGBodHRwczovL2ZlYy1rd2FtZS1waWN0dXJlLXNlcnZpY2UuczMuYW1hem9uYXdzLmNvbS9zdGFycy9yYXRpbmctJHthdmVyYWdlU3RhcnN9LnN2Z2A7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiPlxuICAgICAgICA8aDU+XG4gICAgICAgICAge2Ake2JyYW5kfSAke25hbWV9YH1cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3QtaGVhZGVyLWV4dHJhc1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgIHsnICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5ICd9XG4gICAgICAgICAgICA8c3BhbiBpdGVtUHJvcD1cImJyYW5kXCI+XG4gICAgICAgICAgICAgIHtzZWxsZXJ9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWhlYWRlci1leHRyYXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1Z2MtaGVhZFwiPlxuICAgICAgICAgIDxwaWN0dXJlIHR5cGU9XCJpbWFnZS9zdmcreG1sXCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwic3RhcnNcIiBzcmM9e3N0YXJ0U3ZnRmlsZVBhdGh9IC8+XG4gICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICB7Y291bnR9XG4gICAgICAgICAgICAgIHsnIFJldmlld3MgICd9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHsnIHwgJ31cbiAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICB7YW5zd2Vyc0NvdW50fVxuICAgICAgICAgICAgeycgQW5zd2VyZWQgUXVlc3Rpb25zJ31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SGVhZGVyQ29tcG9uZW50O1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlYWN0LWluLWpzeC1zY29wZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgWW91U2F2ZU9uUHJpY2VDb21wb25lbnQgPSAoeyBkaXNjb3VudGVkQW1vdW50LCBkaXNjb3VudFBlcmNlbnRhZ2UgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwib3VyLXByaWNlXCI+XG4gICAgPHRhYmxlPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3UgU2F2ZTo8L3A+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8cCBpZD1cInNhdmUtd2l0aC1wcmljZVwiPlxuICAgICAgICAgICAgICB7YCQke2Rpc2NvdW50ZWRBbW91bnQudG9GaXhlZCgyKX0gKCR7ZGlzY291bnRQZXJjZW50YWdlfSUpYH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgWW91U2F2ZU9uUHJpY2VDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgKHByb2R1Y3QpID0+IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKFxuICA8UHJvZHVjdERldGFpbFxuICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gIC8+LFxuKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==