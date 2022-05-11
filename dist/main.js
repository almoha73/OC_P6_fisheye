/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_essai/./src/styles/style.scss?");

/***/ }),

/***/ "./src/scripts/factories/photographerFactory.js":
/*!******************************************************!*\
  !*** ./src/scripts/factories/photographerFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotographerFactory\": () => (/* binding */ PhotographerFactory)\n/* harmony export */ });\nclass PhotographerFactory {\r\n\r\n    constructor(dataPh) {\r\n      this.name = dataPh.name;\r\n      this.id = dataPh.id;\r\n      this.city = dataPh.city;\r\n      this.country = dataPh.country;\r\n      this.tagline = dataPh.tagline;\r\n      this.price = dataPh.price;\r\n      this.portrait = dataPh.portrait;\r\n    }\r\n  \r\n  getUserCardDom() {\r\n      const photographerSection = document.querySelector('.photographer_section');\r\n      photographerSection.innerHTML += `\r\n      <div class=\"portrait\">\r\n           <a href=\"photographer.html?index=${this.id}\">\r\n                <article tabindex=\"0\" data-filter = \"${this.id}\" class=\"photographer_article\">\r\n                    <img src=\"assets/photographers/photo/${this.portrait}\" srcset=\"assets/photographers/photo/${this.portrait}_small.jpg 1x\" alt=\"${this.name}\">\r\n                    <h2 aria-label=\"${this.name}\">${this.name}</h2>\r\n                </article>\r\n          </a> \r\n                <article tabindex=\"0\">\r\n                    <h3>${this.city}, ${this.country}</h4>\r\n                    <p>${this.tagline}</p>\r\n                    <p>${this.price}€/jour</p>\r\n                </article>\r\n        </div>     \r\n            `;   \r\n     }\r\n\r\n   getUserSpecific() {\r\n      const photographerHeader = document.querySelector('.photograph-header');\r\n\r\n      photographerHeader.innerHTML =\r\n    \r\n      `\r\n      <div class=\"presentation\">\r\n        <h1 tabindex=\"0\">${this.name}</h1>\r\n        <h2 tabindex=\"0\">${this.city}, ${this.country}</h2>\r\n        <p tabindex=\"0\">${this.tagline}</p>\r\n      </div>\r\n      <button tabindex=\"0\" class=\"contact\">Contactez-moi</button>\r\n      <img src=\"assets/photographers/photo/${this.portrait}\" srcset=\"assets/photographers/photo/${this.portrait}_small.jpg 1x\" alt=\"${this.name}\" tabindex=\"0\">\r\n      `\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/pages/api.js":
/*!**********************************!*\
  !*** ./src/scripts/pages/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPhotographers\": () => (/* binding */ fetchPhotographers),\n/* harmony export */   \"fetchPhotographersMedias\": () => (/* binding */ fetchPhotographersMedias)\n/* harmony export */ });\nasync function fetchPhotographers() {\r\n    let dataPh;\r\n    return fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then((data) => (dataPh = data.photographers))\r\n    .catch(error => alert(error));\r\n  }\r\n\r\n  async function fetchPhotographersMedias() {\r\n    let dataMedia;\r\n    return fetch(\"./data/photographers.json\")\r\n      .then(res => res.json())\r\n      .then((data) => (dataMedia = data.media))\r\n      .catch(error => alert(error));\r\n      \r\n  }\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/pages/api.js?");

/***/ }),

/***/ "./src/scripts/pages/index.js":
/*!************************************!*\
  !*** ./src/scripts/pages/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _factories_photographerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographerFactory */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api */ \"./src/scripts/pages/api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/// AFFICHAGE DU PROFIL DE TOUS LES PHOTOGRAPHES SUR LA PAGE D'ACCUEIL  \r\ninit();\r\n\r\nasync function init(){\r\n  const articles = await (0,_pages_api__WEBPACK_IMPORTED_MODULE_2__.fetchPhotographers)();\r\n  articles.forEach(article => {\r\n    console.log(article);\r\n   displayPhotographers(article); \r\n   \r\n  });  \r\n}\r\n \r\n function displayPhotographers(article){\r\n    const photographersCards = new _factories_photographerFactory__WEBPACK_IMPORTED_MODULE_1__.PhotographerFactory(article);\r\n    photographersCards.getUserCardDom();\r\n}\r\n\r\n\r\n\r\n\r\n  \r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/pages/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/index.js");
/******/ 	
/******/ })()
;