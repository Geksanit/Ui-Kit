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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ripple effect
var rippleEffect = function rippleEffect(event) {
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
    element.onclick = rippleEffect;
  });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// search
var modNotFoundRemove = function modNotFoundRemove(_ref) {
  var target = _ref.target;

  target.className = 'search__input';
  target.attributes.placeholder.value = 'Search';
};

(function initSearch() {
  var elements = document.querySelectorAll('.js-search');
  elements.forEach(function (element) {
    element.children[0].onfocus = modNotFoundRemove;
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

var setDate = function setDate(_ref) {
  var target = _ref.target;

  if (target.tagName !== 'TD') return;
  var oldElement = target.parentElement.parentElement.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  target.classList.add('calendar__today');
  var today = target.innerHTML;
  target.parentElement.parentElement.parentElement.parentElement.children[0].innerHTML = today;
};

var nextMonth = function nextMonth(event) {
  var element = event.target.parentElement.parentElement;
  var year = Number(element.children[4].children[0].getAttribute('data-year'));
  var month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month - 1);
};

var previousMonth = function previousMonth(event) {
  var element = event.target.parentElement.parentElement;
  var year = Number(element.children[4].children[0].getAttribute('data-year'));
  var month = Number(element.children[4].children[0].getAttribute('data-month'));
  calendarChange(element, year, month + 1);
};

var setToday = function setToday(event) {
  var element = event.target.parentElement;
  var oldElement = element.getElementsByClassName('calendar__today')[0];
  oldElement.classList.remove('calendar__today');
  calendarChange(element, date.getFullYear(), date.getMonth());
};

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar');
  elements.forEach(function (element) {
    element.onclick = setDate;
    calendarChange(element, date.getFullYear(), date.getMonth()); // календарь текущего месяца
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__left');
  elements.forEach(function (element) {
    element.onclick = nextMonth;
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__right');
  elements.forEach(function (element) {
    element.onclick = previousMonth;
  });
})();

(function calendarInit() {
  var elements = document.querySelectorAll('.calendar__data');
  elements.forEach(function (element) {
    element.onclick = setToday;
  });
})();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// двигает слайдер
var sliderChange = function sliderChange(element) {
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
  element.parentElement.parentElement.classList.toggle('video_full');
  sliderChange(element.previousElementSibling.children[2]);
};

var playPauseFull = function playPauseFull(_ref) {
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
  sliderChange(input);
};

(function initVideos() {
  var blocks = document.querySelectorAll('.js-video');
  blocks.forEach(function (element) {
    element.children[1].ontimeupdate = videoUpdate;
    element.children[2].onclick = playPauseFull;
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
      element.nextElementSibling.children[1].innerHTML = '\u043E\u0448\u0438\u0431\u043A\u0430: ' + (this.status ? this.statusText : 'запрос не удался');
      return;
    }
    var result = JSON.parse(this.response);
    var address = result.results[0].address_components[0].short_name + ' ' + result.results[0].address_components[1].short_name;
    address = address + ', ' + result.results[0].address_components[3].short_name + ', ' + result.results[0].address_components[4].short_name;
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

__webpack_require__(8);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

__webpack_require__(0);

__webpack_require__(2);

__webpack_require__(20);

__webpack_require__(1);

__webpack_require__(5);

__webpack_require__(3);

__webpack_require__(4);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var faviconsContext = __webpack_require__(10);

faviconsContext.keys().forEach(faviconsContext);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./android-chrome-48x48.png": 11,
	"./apple-touch-icon.png": 12,
	"./browserconfig.xml": 13,
	"./favicon-16x16.png": 14,
	"./favicon-32x32.png": 15,
	"./favicon.ico": 16,
	"./manifest.json": 17,
	"./mstile-150x150.png": 18,
	"./safari-pinned-tab.svg": 19
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/android-chrome-48x48.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/apple-touch-icon.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/browserconfig.xml";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-16x16.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon-32x32.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/favicon.ico";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/manifest.json";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/mstile-150x150.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicons/safari-pinned-tab.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// slider-percentage
var sliderPercentageChange = function sliderPercentageChange(element) {
  var value = element.value;

  var width = element.parentElement.clientWidth - 20;
  var min = element.attributes.min.value;
  var max = element.attributes.max.value;
  element.previousElementSibling.style.width = width / (max - min) * (value - min) + 1 + 'px';
};

var sliderPercentageInput = function sliderPercentageInput(event) {
  sliderPercentageChange(event.target);
};

(function initSliders() {
  var elements = document.querySelectorAll('input.js-slider-percent__input');
  elements.forEach(function (element) {
    sliderPercentageChange(element);
    element.oninput = sliderPercentageInput;
  });
})();

/***/ })
/******/ ]);