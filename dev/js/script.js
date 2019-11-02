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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/js/building/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/js/building/modules/burger.js":
/*!*******************************************!*\
  !*** ./dev/js/building/modules/burger.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Burger; });\nclass Burger {\n  constructor() {\n    this.burgerEl = document.querySelector('.js-burger');\n    this.init();\n  }\n\n  init() {\n    this.burgerEl.addEventListener('click', (e) => {\n      document.body.classList.toggle('burgeropen');\n      if (this.burgerEl.classList.contains('open')) {\n        this.burgerEl.classList.add('remove');\n        setTimeout(() => {\n          this.burgerEl.classList.remove('open', 'remove');\n        }, 1000);\n      } else {\n        this.burgerEl.classList.add('open');\n      }\n      e.preventDefault();\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9idXJnZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9idXJnZXIuanM/ZmRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXJnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJ1cmdlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ1cmdlcicpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJ1cmdlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2Vyb3BlbicpO1xuICAgICAgaWYgKHRoaXMuYnVyZ2VyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgdGhpcy5idXJnZXJFbC5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5idXJnZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJywgJ3JlbW92ZScpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVyZ2VyRWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/building/modules/burger.js\n");

/***/ }),

/***/ "./dev/js/building/modules/contacts.js":
/*!*********************************************!*\
  !*** ./dev/js/building/modules/contacts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contacts; });\nclass Contacts {\n  constructor(mapId) {\n    this.el = document.querySelector('.js-contacts-map');\n    this.mapId = mapId;\n  }\n\n  init() {\n    const t = this;\n\n    function mapInit() {\n      const pinCoord = t.el.getAttribute('data-coords').split(', ');\n\n      const myMap = new ymaps.Map(t.mapId, {\n        center: [parseFloat(pinCoord[0]), parseFloat(pinCoord[1])],\n        zoom: window.innerWidth <= 1000 ? 15 : 17,\n        controls: ['smallMapDefaultSet']\n      });\n\n      const PMitem = new ymaps.Placemark([parseFloat(pinCoord[0]), parseFloat(pinCoord[1])], {}, {\n        iconLayout: 'default#image',\n        iconImageSize: [54, 67],\n        iconImageHref: '/static/i/pin.png',\n        iconImageOffset: [-32, -42],\n      });\n\n      myMap.behaviors.disable('scrollZoom');\n      myMap.geoObjects.add(PMitem);\n    }\n\n    ymaps.ready(mapInit);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9jb250YWN0cy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Rldi9qcy9idWlsZGluZy9tb2R1bGVzL2NvbnRhY3RzLmpzPzc5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFjdHMge1xuICBjb25zdHJ1Y3RvcihtYXBJZCkge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY29udGFjdHMtbWFwJyk7XG4gICAgdGhpcy5tYXBJZCA9IG1hcElkO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB0ID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIG1hcEluaXQoKSB7XG4gICAgICBjb25zdCBwaW5Db29yZCA9IHQuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkcycpLnNwbGl0KCcsICcpO1xuXG4gICAgICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAodC5tYXBJZCwge1xuICAgICAgICBjZW50ZXI6IFtwYXJzZUZsb2F0KHBpbkNvb3JkWzBdKSwgcGFyc2VGbG9hdChwaW5Db29yZFsxXSldLFxuICAgICAgICB6b29tOiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDAwID8gMTUgOiAxNyxcbiAgICAgICAgY29udHJvbHM6IFsnc21hbGxNYXBEZWZhdWx0U2V0J11cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBQTWl0ZW0gPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFtwYXJzZUZsb2F0KHBpbkNvb3JkWzBdKSwgcGFyc2VGbG9hdChwaW5Db29yZFsxXSldLCB7fSwge1xuICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgICAgIGljb25JbWFnZVNpemU6IFs1NCwgNjddLFxuICAgICAgICBpY29uSW1hZ2VIcmVmOiAnL3N0YXRpYy9pL3Bpbi5wbmcnLFxuICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMzIsIC00Ml0sXG4gICAgICB9KTtcblxuICAgICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKFBNaXRlbSk7XG4gICAgfVxuXG4gICAgeW1hcHMucmVhZHkobWFwSW5pdCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/building/modules/contacts.js\n");

/***/ }),

/***/ "./dev/js/building/modules/helpers.js":
/*!********************************************!*\
  !*** ./dev/js/building/modules/helpers.js ***!
  \********************************************/
/*! exports provided: fadeIn, fadeOut, scrollTo, visChecker, resizeWatcher, elemVisCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollTo\", function() { return scrollTo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"visChecker\", function() { return visChecker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resizeWatcher\", function() { return resizeWatcher; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elemVisCheck\", function() { return elemVisCheck; });\nfunction fadeIn(elem, ms, cb, d = 'block') {\n  if (!elem) return;\n\n  elem.style.opacity = 0;\n  elem.style.display = d;\n\n  if (ms) {\n    let opacity = 0;\n    const timer = setInterval(() => {\n      opacity += 50 / ms;\n      if (opacity >= 1) {\n        clearInterval(timer);\n        opacity = 1;\n        if (cb) cb()\n      }\n      elem.style.opacity = opacity;\n    }, 50);\n  } else {\n    elem.style.opacity = 1;\n    if (cb) cb();\n  }\n}\n\nfunction fadeOut(elem, ms, cb) {\n  if (!elem) return;\n\n  elem.style.opacity = 1;\n\n  if (ms) {\n    let opacity = 1;\n    const timer = setInterval(() => {\n      opacity -= 50 / ms;\n      if (opacity <= 0) {\n        clearInterval(timer);\n        opacity = 0;\n        elem.style.display = 'none';\n        if (cb) cb();\n      }\n      elem.style.opacity = opacity;\n    }, 50);\n  } else {\n    elem.style.opacity = 0;\n    elem.style.display = 'none';\n    if (cb) cb();\n  }\n}\n\nfunction scrollTo(to, duration) {\n  if (duration <= 0) return;\n  const element = document.documentElement;\n  const difference = to - element.scrollTop;\n  const perTick = difference / duration * 10;\n\n  setTimeout(() => {\n    element.scrollTop += perTick;\n    window.animation.scrollTo(to, duration - 10);\n  }, 10);\n}\n\nfunction visChecker(el) {\n  const rect = el.getBoundingClientRect();\n  const wHeight = window.innerHeight || document.documentElement.clientHeight;\n  const wWidth = window.innerWidth || document.documentElement.clientWidth;\n  return (\n    rect.bottom - el.offsetHeight * 0.35 <= wHeight\n    && rect.right <= wWidth\n  );\n}\n\nfunction resizeWatcher() {\n  const tableSel = document.querySelectorAll('table');\n  const scrollArray = [];\n  if (tableSel.length) {\n    tableSel.forEach((item, i) => {\n      const orgHtml = item.outerHTML;\n\n      item.outerHTML = `<div class='table-scroller${i}'>${orgHtml}</div>`;\n      const ps = new PerfectScrollbar(`.table-scroller${i}`, {\n        wheelPropagation: true,\n      });\n\n      scrollArray.push(ps);\n    });\n\n    window.addEventListener('resize', () => {\n      if (scrollArray.length) {\n        scrollArray.forEach((item) => {\n          item.update();\n        });\n      }\n    });\n  }\n}\n\nfunction elemVisCheck(elArray) {\n  window.addEventListener('scroll', () => {\n    if (elArray.length) {\n      elArray.forEach((item) => {\n        if (document.querySelectorAll(item).length) {\n          document.querySelectorAll(item).forEach((elem) => {\n            if (visChecker(elem)) {\n              elem.setAttribute('visible', true)\n            }\n          });\n        }\n      });\n    }\n  });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9oZWxwZXJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2J1aWxkaW5nL21vZHVsZXMvaGVscGVycy5qcz9hNGYzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZhZGVJbihlbGVtLCBtcywgY2IsIGQgPSAnYmxvY2snKSB7XG4gIGlmICghZWxlbSkgcmV0dXJuO1xuXG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGQ7XG5cbiAgaWYgKG1zKSB7XG4gICAgbGV0IG9wYWNpdHkgPSAwO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgb3BhY2l0eSArPSA1MCAvIG1zO1xuICAgICAgaWYgKG9wYWNpdHkgPj0gMSkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgb3BhY2l0eSA9IDE7XG4gICAgICAgIGlmIChjYikgY2IoKVxuICAgICAgfVxuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICB9LCA1MCk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmFkZU91dChlbGVtLCBtcywgY2IpIHtcbiAgaWYgKCFlbGVtKSByZXR1cm47XG5cbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICBpZiAobXMpIHtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBvcGFjaXR5IC09IDUwIC8gbXM7XG4gICAgICBpZiAob3BhY2l0eSA8PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICBvcGFjaXR5ID0gMDtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoY2IpIGNiKCk7XG4gICAgICB9XG4gICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH0sIDUwKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZiAoY2IpIGNiKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8odG8sIGR1cmF0aW9uKSB7XG4gIGlmIChkdXJhdGlvbiA8PSAwKSByZXR1cm47XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICBjb25zdCBwZXJUaWNrID0gZGlmZmVyZW5jZSAvIGR1cmF0aW9uICogMTA7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gcGVyVGljaztcbiAgICB3aW5kb3cuYW5pbWF0aW9uLnNjcm9sbFRvKHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgfSwgMTApO1xufVxuXG5mdW5jdGlvbiB2aXNDaGVja2VyKGVsKSB7XG4gIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJldHVybiAoXG4gICAgcmVjdC5ib3R0b20gLSBlbC5vZmZzZXRIZWlnaHQgKiAwLjM1IDw9IHdIZWlnaHRcbiAgICAmJiByZWN0LnJpZ2h0IDw9IHdXaWR0aFxuICApO1xufVxuXG5mdW5jdGlvbiByZXNpemVXYXRjaGVyKCkge1xuICBjb25zdCB0YWJsZVNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlJyk7XG4gIGNvbnN0IHNjcm9sbEFycmF5ID0gW107XG4gIGlmICh0YWJsZVNlbC5sZW5ndGgpIHtcbiAgICB0YWJsZVNlbC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBvcmdIdG1sID0gaXRlbS5vdXRlckhUTUw7XG5cbiAgICAgIGl0ZW0ub3V0ZXJIVE1MID0gYDxkaXYgY2xhc3M9J3RhYmxlLXNjcm9sbGVyJHtpfSc+JHtvcmdIdG1sfTwvZGl2PmA7XG4gICAgICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGAudGFibGUtc2Nyb2xsZXIke2l9YCwge1xuICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIHNjcm9sbEFycmF5LnB1c2gocHMpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgc2Nyb2xsQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0udXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1WaXNDaGVjayhlbEFycmF5KSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYgKGVsQXJyYXkubGVuZ3RoKSB7XG4gICAgICBlbEFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaXRlbSkubGVuZ3RoKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpdGVtKS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAodmlzQ2hlY2tlcihlbGVtKSkge1xuICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgndmlzaWJsZScsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7XG4gIGZhZGVJbixcbiAgZmFkZU91dCxcbiAgc2Nyb2xsVG8sXG4gIHZpc0NoZWNrZXIsXG4gIHJlc2l6ZVdhdGNoZXIsXG4gIGVsZW1WaXNDaGVjayxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dev/js/building/modules/helpers.js\n");

/***/ }),

/***/ "./dev/js/building/modules/index.js":
/*!******************************************!*\
  !*** ./dev/js/building/modules/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./dev/js/building/modules/helpers.js\");\n\n\nclass Index {\n  constructor() {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Rldi9qcy9idWlsZGluZy9tb2R1bGVzL2luZGV4LmpzPzdkNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmYWRlT3V0fSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev/js/building/modules/index.js\n");

/***/ }),

/***/ "./dev/js/building/modules/sticky.js":
/*!*******************************************!*\
  !*** ./dev/js/building/modules/sticky.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sticky; });\nclass Sticky {\n  constructor(topSpacing, bottomSpacing) {\n    this.ts = topSpacing;\n    this.bs = bottomSpacing;\n    this.init();\n  }\n\n  init() {\n    const sidebar = new StickySidebar('.js-sticky', {\n      containerSelector: '.js-sticky-parent',\n      innerWrapperSelector: '.js-sticky-inner',\n      topSpacing: this.ts,\n      bottomSpacing: this.bs,\n    });\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9zdGlja3kuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvanMvYnVpbGRpbmcvbW9kdWxlcy9zdGlja3kuanM/ZmY1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3kge1xuICBjb25zdHJ1Y3Rvcih0b3BTcGFjaW5nLCBib3R0b21TcGFjaW5nKSB7XG4gICAgdGhpcy50cyA9IHRvcFNwYWNpbmc7XG4gICAgdGhpcy5icyA9IGJvdHRvbVNwYWNpbmc7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBuZXcgU3RpY2t5U2lkZWJhcignLmpzLXN0aWNreScsIHtcbiAgICAgIGNvbnRhaW5lclNlbGVjdG9yOiAnLmpzLXN0aWNreS1wYXJlbnQnLFxuICAgICAgaW5uZXJXcmFwcGVyU2VsZWN0b3I6ICcuanMtc3RpY2t5LWlubmVyJyxcbiAgICAgIHRvcFNwYWNpbmc6IHRoaXMudHMsXG4gICAgICBib3R0b21TcGFjaW5nOiB0aGlzLmJzLFxuICAgIH0pO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/js/building/modules/sticky.js\n");

/***/ }),

/***/ "./dev/js/building/script.js":
/*!***********************************!*\
  !*** ./dev/js/building/script.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helpers */ \"./dev/js/building/modules/helpers.js\");\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/index */ \"./dev/js/building/modules/index.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ \"./dev/js/building/modules/burger.js\");\n/* harmony import */ var _modules_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contacts */ \"./dev/js/building/modules/contacts.js\");\n/* harmony import */ var _modules_sticky__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sticky */ \"./dev/js/building/modules/sticky.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // const burger = new Burger();\n  const elVisArray = ['.about__img', '.about p, .about__clients, .catalog__img, .catalog__elem-img'];\n  if (document.body.classList.contains('index')) {\n    const index = new _modules_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"](30);\n    index.preload();\n  }\n\n  if (document.querySelector('.js-contacts-map')) {\n    const contacts = new _modules_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('contacts-map');\n    contacts.init();\n  }\n\n  if (document.querySelector('.js-sticky')) {\n    Object(_modules_sticky__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(20, 0);\n  }\n\n  if (document.querySelectorAll('.js-shave').length) {\n    document.querySelectorAll('.js-shave').forEach((sh) => {\n      shave(sh, sh.getAttribute('data-height'));\n    });\n  }\n\n  Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__[\"resizeWatcher\"])();\n  Object(_modules_helpers__WEBPACK_IMPORTED_MODULE_0__[\"elemVisCheck\"])(elVisArray);\n  let eventScroll;\n  try {\n    eventScroll = new Event('scroll');\n  } catch (e) {\n    eventScroll = document.createEvent('Event');\n    eventScroll.initEvent('scroll', false, false);\n  }\n  window.dispatchEvent(eventScroll);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvanMvYnVpbGRpbmcvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZGV2L2pzL2J1aWxkaW5nL3NjcmlwdC5qcz80ODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmFkZUluLCBmYWRlT3V0LCBzY3JvbGxUbywgdmlzQ2hlY2tlciwgcmVzaXplV2F0Y2hlciwgZWxlbVZpc0NoZWNrfSBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi9tb2R1bGVzL2luZGV4JztcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi9tb2R1bGVzL2J1cmdlcic7XG5pbXBvcnQgQ29udGFjdHMgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3RzJztcbmltcG9ydCBTdGlja3kgZnJvbSAnLi9tb2R1bGVzL3N0aWNreSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIGNvbnN0IGJ1cmdlciA9IG5ldyBCdXJnZXIoKTtcbiAgY29uc3QgZWxWaXNBcnJheSA9IFsnLmFib3V0X19pbWcnLCAnLmFib3V0IHAsIC5hYm91dF9fY2xpZW50cywgLmNhdGFsb2dfX2ltZywgLmNhdGFsb2dfX2VsZW0taW1nJ107XG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaW5kZXgnKSkge1xuICAgIGNvbnN0IGluZGV4ID0gbmV3IEluZGV4KDMwKTtcbiAgICBpbmRleC5wcmVsb2FkKCk7XG4gIH1cblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbnRhY3RzLW1hcCcpKSB7XG4gICAgY29uc3QgY29udGFjdHMgPSBuZXcgQ29udGFjdHMoJ2NvbnRhY3RzLW1hcCcpO1xuICAgIGNvbnRhY3RzLmluaXQoKTtcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3RpY2t5JykpIHtcbiAgICBTdGlja3koMjAsIDApO1xuICB9XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zaGF2ZScpLmxlbmd0aCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zaGF2ZScpLmZvckVhY2goKHNoKSA9PiB7XG4gICAgICBzaGF2ZShzaCwgc2guZ2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2l6ZVdhdGNoZXIoKTtcbiAgZWxlbVZpc0NoZWNrKGVsVmlzQXJyYXkpO1xuICBsZXQgZXZlbnRTY3JvbGw7XG4gIHRyeSB7XG4gICAgZXZlbnRTY3JvbGwgPSBuZXcgRXZlbnQoJ3Njcm9sbCcpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXZlbnRTY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudFNjcm9sbC5pbml0RXZlbnQoJ3Njcm9sbCcsIGZhbHNlLCBmYWxzZSk7XG4gIH1cbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnRTY3JvbGwpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dev/js/building/script.js\n");

/***/ })

/******/ });