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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// search
var searchClick = function searchClick(_ref) {
  var target = _ref.target;

  target.className = '';
  target.attributes.placeholder.value = 'Search';
};

(function initSearch() {
  var elements = document.querySelectorAll('.js-search');
  elements.forEach(function (element) {
    element.children[0].onfocus = searchClick;
  });
})();

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// calendar
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekDay = function weekDay() {
  var n = this.getDay();
  n = n ? n - 1 : 6;
  return n;
};

var date = new Date();

var calendarChange = function calendarChange(element, year, month) {
  var calendar = new Date(year, month);
  calendar.weekDay = weekDay;
  month = calendar.getMonth();
  year = calendar.getFullYear();
  // выбранная дата предыдущего месяца, если есть
  var List = element.getElementsByClassName('calendar__today');
  var today = date.getDate();
  if (List.length !== 0) {
    today = Number(element.getElementsByClassName('calendar__today')[0].innerHTML);
  }
  // если нет даты в месяце
  var testDate = new Date(year, month, today);
  if (testDate.getMonth() !== month) today = 28;
  element.children[0].innerHTML = today;
  element.children[1].childNodes[0].data = monthNames[month];
  element.children[2].innerHTML = year;
  var table = document.createElement('tbody');
  table.setAttribute('data-month', month);
  table.setAttribute('data-year', calendar.getFullYear());
  calendar.setDate(1 - calendar.weekDay()); // последний понедельник предыдущего месяца
  for (var j = 0; j < 6; j += 1) {
    // заполнение таблицы
    var tr = document.createElement('tr');
    for (var i = 0; i < 7; i += 1) {
      // неделя
      var td = document.createElement('td');
      td.innerHTML = calendar.getDate();
      if (calendar.getMonth() === month) td.classList.add('calendar__days-month');
      if (calendar.getDate() === today && calendar.getMonth() === month) {
        td.classList.add('calendar__today');
      }
      calendar.setDate(calendar.getDate() + 1);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  element.children[4].replaceChild(table, element.children[4].children[0]);
};

var tableOnclick = function tableOnclick(_ref) {
  var target = _ref.target;

  if (target.tagName !== 'TD') return;
  var oldElement = target.parentElement.parentElement.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  target.classList.add('calendar__today');
  var today = target.innerHTML;
  target.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML = today;
};

var leftClick = function leftClick(event) {
  var element = event.target.parentElement.parentElement;
  var year = Number(element.children[4].children[0].getAttribute('data-year'));
  var month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month - 1);
};

var rightClick = function rightClick(event) {
  var element = event.target.parentElement.parentElement;
  var year = Number(element.children[4].children[0].getAttribute('data-year'));
  var month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month + 1);
};

var todayClick = function todayClick(event) {
  var element = event.target.parentElement;
  var oldElement = element.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  calendarChange(element, date.getFullYear(), date.getMonth());
};

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar');
  elements.forEach(function (element) {
    element.onclick = tableOnclick;
    calendarChange(element, date.getFullYear(), date.getMonth()); // календарь текущего месяца
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__left');
  elements.forEach(function (element) {
    element.onclick = leftClick;
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__right');
  elements.forEach(function (element) {
    element.onclick = rightClick;
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__data');
  elements.forEach(function (element) {
    element.onclick = todayClick;
  });
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// двигает слайдер
var videoInput = function videoInput(element) {
  var value = element.value;

  var width = element.parentElement.clientWidth - 20;
  var min = element.attributes.min.value;
  var max = element.attributes.max.value;
  element.previousElementSibling.style.width = width / (max - min) * (value - min) + 1 + 'px';
};

var play = function play(element) {
  element.parentElement.parentElement.getElementsByTagName('video')[0].play();
  element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
  element.classList.toggle('video__button-pause');
};

var pause = function pause(element) {
  element.parentElement.parentElement.getElementsByTagName('video')[0].pause();
  element.parentElement.parentElement.getElementsByClassName('video__title')[0].classList.toggle('video__title-hide');
  element.classList.toggle('video__button-pause');
};

var full = function full(element) {
  element.parentElement.parentElement.parentElement.classList.toggle('video__frame-full');
  element.parentElement.parentElement.classList.toggle('video-full');
  videoInput(element.previousElementSibling.children[2]);
};

var videoClick = function videoClick(_ref) {
  var target = _ref.target;

  if (target.classList.contains('video__button')) {
    if (!target.classList.contains('video__button-pause')) play(target);else pause(target);
  }
  if (target.classList.contains('video__button-full')) full(target);
  if (target.classList.contains('js-video__slider-input')) {
    target.parentElement.parentElement.parentElement.getElementsByTagName('video')[0].currentTime = target.value;
  }
};

var videoUpdate = function videoUpdate(_ref2) {
  var target = _ref2.target;

  var input = target.parentElement.getElementsByClassName('js-video__slider-input')[0];
  input.attributes.max.value = target.duration;
  input.value = target.currentTime;
  videoInput(input);
};

(function initVideos() {
  var elements = document.querySelectorAll('.js-video');
  elements.forEach(function (element) {
    element.children[1].ontimeupdate = videoUpdate;
    element.children[2].onclick = videoClick;
  });
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapLoad = function mapLoad(element) {
  var point = { // координаты
    lat: Number(element.getAttribute('data-lat')),
    lng: Number(element.getAttribute('data-lng'))
  };
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
    icon: image
  });
};

var mapChange = function mapChange(element) {
  var point = {
    lat: Number(element.getAttribute('data-lat')),
    lng: Number(element.getAttribute('data-lng'))
  };
  var xhr = new XMLHttpRequest();
  var src = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + point.lat + ',' + point.lng + '&key=AIzaSyBaRq2hOoLSW3DaHWf2aBP_xFlXdtYH0Oo';
  xhr.open('GET', src, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      // обработать ошибку
      element.nextElementSibling.children[1].innerHTML = 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался');
      return;
    }
    var result = JSON.parse(this.response);
    var address = result.results[0].address_components[0].short_name + ' ' + result.results[0].address_components[1].short_name;
    address += ', ' + result.results[0].address_components[3].short_name + ', ' + result.results[0].address_components[4].short_name;
    element.nextElementSibling.children[1].innerHTML = address.toUpperCase();
  };
};

window.initMap = function initMap() {
  var elements = document.querySelectorAll('.map__element');
  elements.forEach(function (element) {
    mapLoad(element);
    mapChange(element);
  });
};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

__webpack_require__(2);

__webpack_require__(1);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(3);

__webpack_require__(0);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);