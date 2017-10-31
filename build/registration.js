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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

//slider

var sliderChange = function(element){
    var value = element.value;
    element.previousSibling.innerText = value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.left = width/(max-min)*(value-min)-8.75+'px';
};
window.sliderInput = function (event) {
    sliderChange(event.target);
};
var sliderInit = function () {
    var elements = document.querySelectorAll('input.slider');
    for(var i=0; i<elements.length; i++){
        sliderChange(elements[i]);
    }
}();

//slider-percentage
var sliderPercentageChange = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};
var sliderPercentageInit = function(){
    var elements = document.querySelectorAll('input.slider-percentage');
    for(var i=0; i<elements.length; i++){
        sliderPercentageChange(elements[i]);
    }
}();

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

//search
window.searchClick = function (event) {
    var element = event.target;
    //console.log(event);
    element.className = '';
    element.attributes.placeholder.value = 'Search';
};


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_registration_styl__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_registration_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_registration_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_search_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_standart_button_standart_button__);







/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

//ripple effect
document.buttonClick = function (event) {
  //console.log(event.screenY,event.pageY,event.y,event);
  var div = document.createElement('div');
  div.id = 'ripple';
  div.style.top = event.pageY-25+'px';
  div.style.left = event.pageX-25+'px';

  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 550);
};

/***/ })

/******/ });