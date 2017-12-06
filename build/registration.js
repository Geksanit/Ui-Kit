var scripts =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ripple effect
var buttonClick = function buttonClick(event) {
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY - 25 + 'px';
  div.style.left = event.pageX - 25 + 'px';

  document.body.appendChild(div);
  setTimeout(function () {
    document.body.removeChild(div);
  }, 550);
};

(function initButtons() {
  var elements = document.querySelectorAll('.standart-button');
  elements.forEach(function (element) {
    element.onclick = buttonClick;
  });
})();

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// search
var searchClick = function searchClick(_ref) {
  var target = _ref.target;

  target.className = 'search__input';
  target.attributes.placeholder.value = 'Search';
};

(function initSearch() {
  var elements = document.querySelectorAll('.js-search');
  elements.forEach(function (element) {
    element.children[0].onfocus = searchClick;
  });
})();

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// slider
var sliderChange = function sliderChange(element) {
  var value = element.value;

  var width = element.parentElement.clientWidth - 20;
  var min = element.attributes.min.value;
  var max = element.attributes.max.value;
  element.previousElementSibling.innerText = value;
  element.previousElementSibling.style.left = width / (max - min) * (value - min) - 8.75 + 'px';
};

var sliderInput = function sliderInput(event) {
  sliderChange(event.target);
};

(function initSliders() {
  var elements = document.querySelectorAll('.js-slider__input');
  elements.forEach(function (element) {
    sliderChange(element);
    element.oninput = sliderInput;
  });
})();

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(28);

__webpack_require__(2);

__webpack_require__(1);

__webpack_require__(0);

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });