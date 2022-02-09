/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ \"./src/assets/js/burger.js\");\n/* harmony import */ var _descrMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descrMore */ \"./src/assets/js/descrMore.js\");\n/* harmony import */ var _featureMore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featureMore */ \"./src/assets/js/featureMore.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/assets/js/modal.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider */ \"./src/assets/js/slider.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const descrMoreTrigger = document.querySelector('.descr__more');\n    const articleMoreTrigger = document.querySelector('.article__more');\n    const featureMoreTrigger = document.querySelector('.feature__more');\n\n    (0,_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n    if(descrMoreTrigger) {\n        (0,_descrMore__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.descr__more', '.descr__text');\n    }\n\n    if(articleMoreTrigger) {\n        (0,_descrMore__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.article__more', '.article__text');\n    }\n\n    if(featureMoreTrigger) {\n        (0,_featureMore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n    }\n\n    AOS.init();\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst burger = () => {\n    const burgerTrigger = document.querySelector('.burger');\n    const navMobile = document.querySelector('.nav-mob');\n    const navMobileClose = document.querySelector('.nav-mob__close');\n\n    burgerTrigger.addEventListener('click', () => {\n        navMobile.classList.add('active-nav-mob');\n    });\n\n    navMobileClose.addEventListener('click', () => {\n        navMobile.classList.remove('active-nav-mob');\n    })\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (burger);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/descrMore.js":
/*!************************************!*\
  !*** ./src/assets/js/descrMore.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst descrMore = (trigger, text) => {\n    const descrMoreTrigger = document.querySelector(trigger);\n    const descrText = document.querySelector(text);\n\n    descrMoreTrigger.addEventListener('click', () => {\n        descrText.querySelectorAll('p').forEach(item => {\n            item.classList.add('more-show');\n        });\n\n        descrMoreTrigger.classList.add('more-show');\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (descrMore);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/descrMore.js?");

/***/ }),

/***/ "./src/assets/js/featureMore.js":
/*!**************************************!*\
  !*** ./src/assets/js/featureMore.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst featureMore = () => {\n    const featureMoreTrigger = document.querySelector('.feature__more');\n    const featureCol = document.querySelectorAll('.feature__col');\n\n    featureMoreTrigger.addEventListener('click', () => {\n        featureCol.forEach(col => {\n            col.classList.add('more-show');\n            col.querySelectorAll('.feature__item').forEach(i => {\n                i.classList.add('more-show');\n            });\n        });\n\n        featureMoreTrigger.classList.add('more-show');\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (featureMore);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/featureMore.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst modalFunc = () => {\r\n    const header = document.querySelector('.header');\r\n    const modal = document.querySelectorAll('.modal');\r\n    const modalTriggers = document.querySelectorAll('.nav__link-modal');\r\n\r\n    const modalFirst = document.querySelector('.modal--first');\r\n    const modalTriggerFirst = document.querySelector('.nav__link-modal--first');\r\n\r\n    const modalSec = document.querySelector('.modal--sec');\r\n    const modalTriggerSec = document.querySelector('.nav__link-modal--sec');\r\n\r\n    const modalThird = document.querySelector('.modal--third');\r\n    const modalTriggerThird = document.querySelector('.nav__link-modal--third');\r\n\r\n    const modalFourth = document.querySelector('.modal--fourth');\r\n    const modalTriggerFourth = document.querySelector('.nav__link-modal--fourth');\r\n\r\n\r\n\r\n    modal.forEach(item => {\r\n        item.style.top = header.offsetHeight + \"px\";\r\n    });\r\n\r\n    modalTriggerFirst.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        let target = e.target;\r\n\r\n        modal.forEach(i => {\r\n            if (i !== modalFirst) {\r\n                i.classList.remove('active-modal');   \r\n            }\r\n        });\r\n\r\n        \r\n        modalTriggers.forEach(i => {\r\n            if (i !== modalTriggerFirst) {\r\n                i.classList.remove('active-modal');\r\n            }\r\n        });\r\n\r\n        modalFirst.classList.toggle('active-modal');\r\n        modalTriggerFirst.classList.toggle('active-modal');\r\n    });\r\n\r\n    modalTriggerSec.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        modal.forEach(i => {\r\n            if (i !== modalSec) {\r\n                i.classList.remove('active-modal');   \r\n            }\r\n        });\r\n\r\n        \r\n        modalTriggers.forEach(i => {\r\n            if (i !== modalTriggerSec) {\r\n                i.classList.remove('active-modal');\r\n            }\r\n        });\r\n\r\n        modalSec.classList.toggle('active-modal');\r\n        modalTriggerSec.classList.toggle('active-modal');\r\n    });\r\n\r\n    modalTriggerThird.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        modal.forEach(i => {\r\n            if (i !== modalThird) {\r\n                i.classList.remove('active-modal');   \r\n            }\r\n        });\r\n\r\n        \r\n        modalTriggers.forEach(i => {\r\n            if (i !== modalTriggerThird) {\r\n                i.classList.remove('active-modal');\r\n            }\r\n        });\r\n\r\n        modalThird.classList.toggle('active-modal');\r\n        modalTriggerThird.classList.toggle('active-modal');\r\n    });\r\n\r\n    modalTriggerFourth.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        modal.forEach(i => {\r\n            if (i !== modalFourth) {\r\n                i.classList.remove('active-modal');   \r\n            }\r\n        });\r\n\r\n        \r\n        modalTriggers.forEach(i => {\r\n            if (i !== modalTriggerFourth) {\r\n                i.classList.remove('active-modal');\r\n            }\r\n        });\r\n\r\n        modalFourth.classList.toggle('active-modal');\r\n        modalTriggerFourth.classList.toggle('active-modal');\r\n    });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalFunc);\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst sliderFunc = () => {\n    const gallerySwiper = new Swiper('.gallery__inner',{\n        navigation: {\n            nextEl: \".gallery__arrow--next\",\n            prevEl: \".gallery__arrow--prev\",\n        },\n        pagination: {\n            el: \".swiper-pagination\",\n            clickable: true,\n            renderBullet: function (index, className) {\n              return '<span class=\"' + className + '\">' +  \"</span>\";\n            },\n        },\n    });\n    \n    const adsWrapper = document.querySelector('.additional__wrapper');\n    const adsInner = document.querySelector('.additional__inner');\n    const adsItems = document.querySelectorAll('.additional__item');\n    \n    if (window.innerWidth <= 415) {\n        try {\n            adsWrapper.classList.add('swiper');\n            adsInner.classList.add('swiper-wrapper');\n            adsItems.forEach(item => {\n                item.classList.add('swiper-slide');\n            });\n        \n            const swiper = new Swiper('.additional__wrapper',{\n                slidesPerView: \"auto\",\n                centeredSlides: true,\n                spaceBetween: 14,\n            });\n        } catch{}\n\n    }\n    \n    const newsWrapper = document.querySelector('.news__wrapper');\n    const newsInner = document.querySelector('.news__inner');\n    const newsItems = document.querySelectorAll('.news__item');\n    \n    if (window.innerWidth <= 415) {\n        try {\n            newsWrapper.classList.add('swiper');\n            newsInner.classList.add('swiper-wrapper');\n            newsItems.forEach(item => {\n                item.classList.add('swiper-slide');\n            });\n        \n            const swiper = new Swiper('.news__wrapper',{\n                slidesPerView: \"auto\",\n                centeredSlides: true,\n                spaceBetween: 14,\n            });\n        } catch{}\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sliderFunc);\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/burger.js");
/******/ 	__webpack_require__("./src/assets/js/descrMore.js");
/******/ 	__webpack_require__("./src/assets/js/featureMore.js");
/******/ 	__webpack_require__("./src/assets/js/modal.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/slider.js");
/******/ 	
/******/ })()
;