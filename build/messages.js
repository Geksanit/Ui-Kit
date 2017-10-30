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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports) {

//search
window.searchClick = function (event) {
    var element = event.target;
    //console.log(event);
    element.className = '';
    element.attributes.placeholder.value = 'Search';
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {


var play = function (element) {
    element.parentElement.parentElement.getElementsByTagName('video')[0].play();
    element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
    element.classList.toggle('video__button-pause');
};
var pause = function (element) {
    element.parentElement.parentElement.getElementsByTagName('video')[0].pause();
    element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
    element.classList.toggle('video__button-pause');
};
var full = function (element) {
    element.parentElement.parentElement.parentElement.classList.toggle('video__frame-full');
    element.parentElement.parentElement.classList.toggle('video-full');
    videoInput(element.previousElementSibling.children[2]);
};
window.videoClick = function (event){
    //console.log(event);
    var target = event.target;
    if(target.classList[0]=='video__button'){
        if(target.classList[2]!='video__button-pause'){play(target)}
        else{pause(target)};
    };
    if(target.classList[0]=='video__button-full'){full(target)};
    if(target.classList[0]=='video__input'){
        target.parentElement.parentElement.parentElement.getElementsByTagName('video')[0].currentTime = target.value;
        };

};
window.videoUpdate = function (event) {
    var target = event.target;
    var input = target.parentElement.getElementsByClassName('video__input')[0];
    input.attributes.max.value = target.duration;
    input.value = target.currentTime;
    videoInput(input);
};
//slider
window.videoInput = function(element){
    var value = element.value;

    var width = element.parentElement.clientWidth-20;
    var min = element.attributes.min.value;
    var max = element.attributes.max.value;
    element.previousElementSibling.style.width = width/(max-min)*(value-min)+1+'px';
};
/*window.sliderPercentageInput = function (event) {
    sliderPercentageChange(event.target);
};*/
/*
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508065708&token=051659edd81b941ae3418
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072035&token=0fc8c817e5244efb39fab
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072164&token=01df9ab46b3f2cf2e6f4f
 https://16-lvl3-pdl.vimeocdn.com/01/2596/2/62980495/156181927.mp4?expires=1508072298&token=0494e9e1b1aa5024dddae
 */

/***/ }),
/* 3 */
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
var tableOnclick = function(event) {
    var target = event.target;
    if (target.tagName != 'TD') return;
    var oldElement = target.parentElement.parentElement.getElementsByClassName("calendar__today")[0];
    oldElement.classList.remove("calendar__today");
    target.classList.add("calendar__today");
    var today = target.innerHTML;
    target.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML = today;
};
var date = new Date();
var today = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

var calendarChange = function(element,year,month){
    var calendar = new Date(year, month);
    calendar.weekDay = weekDay;
    month = calendar.getMonth();
    year = calendar.getFullYear();

    //console.log(element);
    //console.log(calendar.getFullYear(), calendar.getMonth(),calendar.getDate());
    //выбранная дата предыдущего месяца, если есть
    var List = element.getElementsByClassName("calendar__today");
    var today = date.getDate();
    if (List.length !== 0){
        today = Number(element.getElementsByClassName("calendar__today")[0].innerHTML);
    }
    //если нет даты в месяце
    var testDate = new Date(year, month, today);
    if(testDate.getMonth() !== month){today = 28};



    element.children[0].innerHTML = today;
    element.children[1].childNodes[0].data = monthNames[month];
    element.children[2].innerHTML = year;

    var table = document.createElement('tbody');
    table.setAttribute('data-month', month);
    table.setAttribute('data-year', calendar.getFullYear());

    calendar.setDate(1-calendar.weekDay());//последний понедельник предыдущего месяца

    for(var j=0; j<6; j++){//заполнение таблицы
        var tr = document.createElement('tr');
        for(var i=0; i<7; i++){//неделя

            var  td = document.createElement('td');
            td.innerHTML = calendar.getDate();
            if(calendar.getMonth() == month){
                td.classList.add("calendar__days-month");};
            if(calendar.getDate() == today &&
                calendar.getMonth() == month){
                td.classList.add("calendar__today");};
            calendar.setDate(calendar.getDate() + 1);
            tr.appendChild(td);
        };
        table.appendChild(tr);
      };
    element.children[4].replaceChild(table, element.children[4].children[0]);
};

var calendarInit = function (){
     var elements = document.querySelectorAll('.calendar');
     for(var i=0; i<elements.length; i++){
         elements[i].onclick = tableOnclick;
         calendarChange(elements[i],year,month);//календарь текущего месяца
     }
 }();

document.left = function(event){
    //console.log('clocked left');
    var element = event.target.parentElement.parentElement;
    var year = Number(element.children[4].children[0].getAttribute('data-year'));
    var month = Number(element.children[4].children[0].getAttribute('data-month'));
    calendarChange(element,year,month-1);
};
document.right = function (event) {
    //console.log('clicked right');
    var element = event.target.parentElement.parentElement;
    var year = Number(element.children[4].children[0].getAttribute('data-year'));
    var month = Number(element.children[4].children[0].getAttribute('data-month'));
    calendarChange(element,year,month+1);
};
document.today = function(event){
    var element = event.target.parentElement;
    var oldElement = element.getElementsByClassName("calendar__today")[0];
    oldElement.classList.remove("calendar__today");
    calendarChange(element,year,month);
};


/***/ }),
/* 4 */
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

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_messages_styl__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_messages_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_messages_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_slider_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_slider_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_search_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_video__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_video_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_calendar_calendar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_calendar_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_calendar_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_standart_button_standart_button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_standart_button_standart_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_standart_button_standart_button__);





//import '../components/map/map'



/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);