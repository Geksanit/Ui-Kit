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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_search_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_video__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_video_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_map_map__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_map_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_map_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_calendar_calendar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_calendar_calendar__);








window.Test = function () {
    var elem = document.getElementsByClassName('slider-percentage')[0]
    console.log(elem.shadowRoot);
    //var root = elem.createShadowRoot();
    //root.innerHTML = "<p>Привет из подполья!</p>";
}




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

//search
window.searchClick = function (event) {
    var element = event.target;
    //console.log(event);
    element.className = '';
    element.attributes.placeholder.value = 'Search';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {


window.video = function () {
    console.log(document.getElementsByTagName('video'));

}();
window.play = function () {
    document.getElementsByTagName('video')[0].paused = false;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var point = {lat: -33.877685, lng: 151.207077};
var element = document.getElementById('map')
window.initMap = function() {
    var map = new google.maps.Map(element, {
        zoom: 14,
        center: point,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var image = 'img/marker.png';
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        icon: image,
    });
};
window.load = function() {
    var xhr = new XMLHttpRequest();
    var src = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+point.lat+','+point.lng+'&key=AIzaSyBaRq2hOoLSW3DaHWf2aBP_xFlXdtYH0Oo';
    xhr.open('GET', src, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status != 200) {
            // обработать ошибку
            element.nextElementSibling.children[1].innerHTML = 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
            return;
        }
        result = JSON.parse(this.response);
        address = result.results[0].address_components[0].short_name+' '+result.results[0].address_components[1].short_name;
        address+=', '+result.results[0].address_components[3].short_name+', '+result.results[0].address_components[4].short_name;
        //address = result.results[0].formatted_address;
        //console.log(result.results[0]);
        //console.log(address);
        element.nextElementSibling.children[1].innerHTML = address.toUpperCase();
    }
}();


/***/ }),
/* 6 */
/***/ (function(module, exports) {

//calendar
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var weekDay = function () {
    var n = this.getDay();
    n = n ? n-1 : 6;
    return n
};

var calendarChange = function(element){
    var date = new Date();
    var today = date.getDate();
    element.children[0].innerHTML = today;
    var month = date.getMonth();
    element.children[1].childNodes[0].data = monthNames[month];
    var calendar = new Date();
    calendar.weekDay = weekDay;

    calendar.setDate(1);
    calendar.setDate(1-calendar.weekDay());//последний понедельник предыдущего месяца
    var table = element.children[3].children[0];

    while(calendar.getMonth() <= month){//заполнение таблицы
        var tr = document.createElement('tr');
        for(var i=0; i<7; i++){//неделя

            var  td = document.createElement('td');
            td.innerHTML = calendar.getDate();
            if(calendar.getMonth() == month){
                td.className = "calendar__days-month";};
            if(calendar.getMonth() == month && calendar.getDate() == today){
                td.className = "calendar__today";};
            calendar.setDate(calendar.getDate() + 1);
            tr.appendChild(td);
        };
        table.appendChild(tr);
      };
};

var calendarInit = function (){
     var elements = document.querySelectorAll('.calendar');
     for(var i=0; i<elements.length; i++){
         calendarChange(elements[i]);
     }
 }();


/***/ })
/******/ ]);