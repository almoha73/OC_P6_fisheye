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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/down-arrow.png */ \"./assets/icons/down-arrow.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"main {\\n  width: 100%;\\n}\\nmain .photographer_section {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 70px;\\n  margin-top: 100px;\\n}\\nmain .photographer_section a {\\n  text-decoration: none;\\n}\\nmain .photographer_section article {\\n  cursor: pointer;\\n  justify-self: center;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n}\\nmain .photographer_section article img {\\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);\\n  transition: all 0.2s;\\n  height: 200px;\\n  width: 200px;\\n  border-radius: 50%;\\n  object-fit: cover;\\n}\\nmain .photographer_section article img:hover {\\n  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.5);\\n  transform: scale(1.03);\\n}\\nmain .photographer_section article h2 {\\n  color: #D3573C;\\n  font-size: 36px;\\n}\\nmain .photographer_section article h4 {\\n  color: #D3573C;\\n  font-size: 13px;\\n}\\nmain .photographer_section article p {\\n  font-size: 10px;\\n}\\nmain .photographer_section article p:last-child {\\n  font-size: 9px;\\n  color: #757575;\\n}\\n\\nsection.like-storage {\\n  cursor: all-scroll;\\n  z-index: 250;\\n  width: 376px;\\n  height: 80px;\\n  border-radius: 5px;\\n  position: fixed;\\n  background-color: #D3573C;\\n  bottom: 0;\\n  right: 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\nsection.like-storage h2.like-total-count i {\\n  margin-left: 15px;\\n}\\n\\nheader {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 90px;\\n}\\nheader .logo {\\n  height: 50px;\\n  margin-left: 100px;\\n}\\nheader h1 {\\n  color: #901C1C;\\n  margin-right: 100px;\\n}\\n\\nmain .photograph-header {\\n  background-color: #FAFAFA;\\n  height: 313px;\\n  margin: auto;\\n  border-radius: 5px;\\n  width: calc(100% - 200px);\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  justify-items: center;\\n  align-items: center;\\n}\\nmain .photograph-header .presentation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: center;\\n  margin-left: 40px;\\n}\\nmain .photograph-header .presentation h1 {\\n  font-size: 64px;\\n  color: #D3573C;\\n}\\nmain .photograph-header .presentation h3 {\\n  font-size: 24px;\\n  color: #D3573C;\\n}\\nmain .photograph-header .presentation p {\\n  font-size: 18px;\\n  color: #525252;\\n}\\nmain .photograph-header button {\\n  width: 170px;\\n  height: 69px;\\n  background-color: #901C1C;\\n  color: #fff;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  font-size: 20px;\\n  font-weight: bold;\\n  padding: 11px;\\n  border: none;\\n  outline: none;\\n}\\nmain .photograph-header button:hover {\\n  background-color: #D3573C;\\n  transform: scale(1.03);\\n}\\nmain .photograph-header img {\\n  width: 200px;\\n  height: 200px;\\n  border-radius: 50%;\\n  object-fit: cover;\\n}\\nmain nav {\\n  display: flex;\\n}\\nmain nav > label {\\n  margin-left: 100px;\\n  margin-top: 10px;\\n  line-height: 50px;\\n  font-weight: 600;\\n}\\nmain nav .select-box {\\n  z-index: 10;\\n  border-radius: 5px;\\n  margin-left: 100px;\\n  margin-top: 10px;\\n  display: flex;\\n  flex-direction: column;\\n  width: 170px;\\n  background-color: #901C1C;\\n  color: white;\\n  position: absolute;\\n}\\nmain nav .select-box hr {\\n  width: 90%;\\n  margin: auto;\\n}\\nmain nav .select-box .selected {\\n  position: relative;\\n  padding: 12px 24px;\\n  cursor: pointer;\\n  order: -1;\\n}\\nmain nav .select-box .selected::after {\\n  content: \\\"\\\";\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  position: absolute;\\n  height: 100%;\\n  width: 24px;\\n  right: 10px;\\n  top: 11px;\\n  transition: all 0.4s;\\n}\\nmain nav .select-box .options-container {\\n  background-color: #901C1C;\\n  color: white;\\n  height: 0;\\n  width: 100%;\\n  opacity: 0;\\n  transition: all 0.4s;\\n  border-radius: 8px;\\n  overflow: hidden;\\n}\\nmain nav .select-box .options-container .option {\\n  padding: 12px 24px;\\n  cursor: pointer;\\n}\\nmain nav .select-box .options-container .option .radio {\\n  display: none;\\n}\\nmain nav .select-box .options-container .option:hover {\\n  background-color: #D3573C;\\n}\\nmain nav .select-box .options-container.active {\\n  height: 90px;\\n  opacity: 1;\\n}\\nmain nav .select-box .options-container.active + .selected::after {\\n  transform: rotateX(180deg);\\n  top: -10px;\\n}\\n\\n#contact_modal {\\n  display: none;\\n}\\n#contact_modal .modal {\\n  position: fixed;\\n  z-index: 500;\\n  top: 30px;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  overflow: hidden;\\n  border-radius: 5px;\\n  background-color: #DB8876;\\n  width: 569px;\\n  max-height: 850px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: flex-start;\\n  padding: 35px;\\n  margin: auto;\\n}\\n#contact_modal .modal header {\\n  justify-content: space-between;\\n  width: 100%;\\n  margin-top: 20px;\\n  margin-bottom: 30px;\\n}\\n#contact_modal .modal header button {\\n  cursor: pointer;\\n  background-color: transparent;\\n  border: none;\\n  outline: none;\\n}\\n#contact_modal .modal header h2, #contact_modal .modal header p {\\n  font-size: 45px;\\n  font-weight: normal;\\n}\\n#contact_modal .modal form {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n  align-items: flex-start;\\n}\\n#contact_modal .modal form div {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  margin-bottom: 10px;\\n}\\n#contact_modal .modal form div label {\\n  color: #312E2E;\\n  font-size: 25px;\\n}\\n#contact_modal .modal form div input.greenBorder {\\n  border: 3px solid green !important;\\n}\\n#contact_modal .modal form div input.input-control.redBorder {\\n  border: 3px solid red;\\n}\\n#contact_modal .modal form div input.input-control.blueBorder {\\n  border: 3px solid blue;\\n}\\n#contact_modal .modal form div input:nth-child(1), #contact_modal .modal form div input:nth-child(2), #contact_modal .modal form div input:nth-child(3) {\\n  width: 100%;\\n  height: 55px;\\n  padding: 8px;\\n  border: 0.8px solid blue;\\n  outline: none;\\n  border-radius: 5px;\\n  font-size: 20px;\\n  margin: 0;\\n}\\n#contact_modal .modal form div p {\\n  font-size: 16px;\\n  width: 100%;\\n  height: 18px;\\n}\\n#contact_modal .modal form div p.red {\\n  color: red;\\n}\\n#contact_modal .modal form div p.green {\\n  color: green;\\n}\\n#contact_modal .modal form div.formData-message input.input-control.input-message {\\n  height: 170px;\\n}\\n#contact_modal .modal form button {\\n  width: 170px;\\n  height: 59px;\\n  font-size: 18px;\\n  background-color: #901C1C;\\n  color: white;\\n  border-radius: 5px;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  font-family: \\\"DM Sans\\\", sans-serif;\\n}\\n\\n.gallery {\\n  width: calc(100% - 200px);\\n  margin: 20px auto;\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap;\\n}\\n.gallery figure {\\n  width: 350px;\\n  height: 350px;\\n  border-radius: 5px;\\n  margin-bottom: 15px;\\n  position: relative;\\n}\\n.gallery figure img {\\n  cursor: pointer;\\n  width: 100%;\\n  height: 300px;\\n  object-fit: cover;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);\\n  transition: all 0.2s;\\n}\\n.gallery figure img:hover {\\n  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.5);\\n  transform: scale(1.03);\\n}\\n.gallery figure video {\\n  cursor: pointer;\\n  position: relative;\\n  border-radius: 5px;\\n  width: 100%;\\n  height: 300px;\\n  width: 350px;\\n  object-fit: cover;\\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);\\n  transition: all 0.2s;\\n}\\n.gallery figure video:hover {\\n  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.5);\\n}\\n.gallery figure .bar {\\n  position: absolute;\\n  height: 7px;\\n  bottom: 50px;\\n  left: 0;\\n  width: 100%;\\n}\\n.gallery figure .bar .bar-line {\\n  height: 100%;\\n  background-color: #D3573C;\\n  opacity: 0.6;\\n}\\n.gallery figcaption {\\n  width: 100%;\\n  height: 44px;\\n  display: flex;\\n}\\n.gallery figcaption p:first-child {\\n  font-size: 24px;\\n  color: #901C1C;\\n  width: 80%;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n  line-height: 44px;\\n}\\n.gallery figcaption p:nth-child(2) {\\n  font-size: 18px;\\n  color: #901C1C;\\n  width: 10%;\\n  line-height: 44px;\\n  text-align: right;\\n}\\n.gallery figcaption p:nth-child(3) {\\n  width: 10%;\\n  line-height: 48px;\\n  text-align: right;\\n}\\n.gallery figcaption p:nth-child(3) i {\\n  color: #901C1C;\\n  font-size: 20px;\\n}\\n\\n.bground {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  top: -50px;\\n  background-color: rgba(211, 87, 60, 0.5);\\n  z-index: -1;\\n}\\n\\n.wrapper {\\n  display: block;\\n}\\n\\n.wrapper-content {\\n  z-index: 999;\\n  position: fixed;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n  width: 1000px;\\n  height: calc(100vh - 90px);\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: rgb(211, 87, 60);\\n  border-radius: 3px;\\n}\\n.wrapper-content button {\\n  border: none;\\n  outline: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n.wrapper-content p {\\n  font-size: 24px;\\n  color: #fff;\\n  line-height: 40px;\\n}\\n.wrapper-content .wrapper-left {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 100%;\\n}\\n.wrapper-content .wrapper-left .previous {\\n  width: 60px;\\n  height: 60px;\\n  font-size: 48px;\\n  color: #fff;\\n}\\n.wrapper-content .wrapper-right {\\n  flex-direction: column-reverse;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100px;\\n  height: 50%;\\n}\\n.wrapper-content .wrapper-right .next {\\n  width: 60px;\\n  height: 60px;\\n}\\n.wrapper-content .wrapper-right .next i {\\n  font-size: 48px;\\n  color: #fff;\\n}\\n.wrapper-content .wrapper-right .close-lightbox {\\n  margin-top: 15px;\\n  width: 35%;\\n  color: #901C1C;\\n}\\n.wrapper-content .wrapper-right .close-lightbox svg path {\\n  fill: #fff;\\n}\\n.wrapper-content .lightbox_container {\\n  background-color: rgb(211, 87, 60);\\n  justify-content: center;\\n  align-items: center;\\n  width: 800px;\\n  height: 100%;\\n}\\n.wrapper-content .lightbox_container div {\\n  background-color: rgba(211, 87, 60, 0.5);\\n  display: flex;\\n  flex-direction: column;\\n}\\n.wrapper-content .lightbox_container div img {\\n  display: block;\\n  object-fit: contain;\\n  width: 100%;\\n  height: calc(90vh - 90px);\\n  margin-top: 10px;\\n  border-radius: 5px;\\n}\\n.wrapper-content .lightbox_container div video {\\n  width: 100%;\\n  height: calc(90vh - 90px);\\n  border-radius: 5px;\\n}\\n.wrapper-content .lightbox_container div p {\\n  margin: auto;\\n  margin-top: 20px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n*, ::before, ::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_essai/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_essai/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_essai/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_essai/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_essai/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_essai/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/factories/lightbox.js":
/*!*******************************************!*\
  !*** ./src/scripts/factories/lightbox.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lightbox\": () => (/* binding */ Lightbox)\n/* harmony export */ });\n/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/api */ \"./src/scripts/pages/api.js\");\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/photographer */ \"./src/scripts/pages/photographer.js\");\n/* harmony import */ var _factories_lightboxImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/lightboxImage */ \"./src/scripts/factories/lightboxImage.js\");\n/* harmony import */ var _factories_lightboxVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../factories/lightboxVideo */ \"./src/scripts/factories/lightboxVideo.js\");\n\r\n\r\n\r\n\r\n\r\nclass Lightbox {\r\n  static async init() {\r\n    const dataMedia = await (0,_pages_api__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographersMedias)();\r\n    await (0,_pages_photographer__WEBPACK_IMPORTED_MODULE_1__.displayMedias)();\r\n    \r\n    const links = Array.from(document.querySelectorAll(\".media\"));\r\n    console.log(links);\r\n    \r\n    for (let i = 0; i < links.length; i++) {\r\n      let newIndex = i;\r\n      \r\n      links[i].onclick = () => {\r\n        //AFFICHAGE DU WRAPPER DE LA LIGHTBOX SANS IMAGES/VIDEO \r\n        const newLightbox = new Lightbox;\r\n        newLightbox.buildDom();\r\n\r\n        //AFFICHAGE DE LA LIGHTBOX AVEC IMAGES ET/OU VIDEO\r\n              function preview() {\r\n                let selectedImgUrl = links[newIndex].getAttribute(\"src\");\r\n                console.log(selectedImgUrl);\r\n                console.log(links[newIndex]);\r\n              \r\n                if (links[newIndex].nodeName === \"IMG\") {\r\n                  const lightboxImage = new _factories_lightboxImage__WEBPACK_IMPORTED_MODULE_2__.Lightboximage(\r\n                    selectedImgUrl, links[newIndex].nextElementSibling.firstChild.nextElementSibling.innerText);\r\n                    lightboxImage.buildDom();\r\n\r\n                } else if (links[newIndex].nodeName === \"VIDEO\") {\r\n                  const lightboxVideo = new _factories_lightboxVideo__WEBPACK_IMPORTED_MODULE_3__.Lightboxvideo(\r\n                    selectedImgUrl, links[newIndex].nextElementSibling.nextElementSibling.firstChild.nextElementSibling.innerText);\r\n                    lightboxVideo.buildDom();\r\n                }\r\n              \r\n              }\r\n              preview();\r\n\r\n                    const lightboxContainer = document.querySelector(\".lightbox_container\");\r\n\r\n                    //NEXT AU CLIC SOURIS\r\n                    const next = document.querySelector(\".next\");\r\n                    next.addEventListener(\"click\", (e) => {\r\n                      e.preventDefault();\r\n                      lightboxContainer.firstChild.remove();\r\n                      console.log(links.length);\r\n                     \r\n                      console.log(newIndex);\r\n                      if(newIndex < links.length - 1){\r\n                        newIndex++;\r\n                        preview();\r\n\r\n                      }else {\r\n                        newIndex = 0;\r\n                        preview()\r\n                      }\r\n                    \r\n                    })\r\n\r\n                    //PREVIOUS AU CLIC SOURIS\r\n                    const previous = document.querySelector(\".previous\");\r\n                    previous.addEventListener(\"click\", (e) => {\r\n                      e.preventDefault();\r\n                      lightboxContainer.firstChild.remove();\r\n                      console.log(links.length);\r\n                     \r\n                      console.log(newIndex);\r\n                      if(newIndex > 0){\r\n                        newIndex--;\r\n                        preview();\r\n\r\n                      }else {\r\n                        newIndex = links.length - 1;\r\n                        preview()\r\n                      }\r\n                    \r\n                    })\r\n      }\r\n    }\r\n  }\r\n\r\n  constructor() {\r\n    this.element = this.buildDom();\r\n    document.body.appendChild(this.element);\r\n  }\r\n\r\n  buildDom() {\r\n    const wrapper = document.createElement(\"div\");\r\n    wrapper.classList.add(\"wrapper\");\r\n\r\n    wrapper.innerHTML = `\r\n          <div class=\"wrapper-content\">\r\n          <div class=\"bground\"></div>\r\n          <div class=\"wrapper-left\">\r\n            <button class=\"previous\">\r\n              <i class=\"fas fa-solid fa-angle-left\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"lightbox_container\">\r\n            \r\n          </div>\r\n          <div class=\"wrapper-right\">\r\n            <button class=\"next\">\r\n              <i class=\"fas fa-solid fa-angle-right\"></i>\r\n            </button>\r\n            <button class=\"close-lightbox\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z\"/></svg>\r\n            </button>\r\n          </div>\r\n          </div>\r\n          \r\n      `;\r\n    wrapper\r\n      .querySelector(\".close-lightbox\")\r\n      .addEventListener(\"click\", this.close.bind(this));\r\n\r\n    // wrapper.querySelector(\".next\").addEventListener('click', this.next.bind(this));\r\n    return wrapper;\r\n  }\r\n\r\n  close(e) {\r\n    e.preventDefault();\r\n    document.body.removeChild(this.element);\r\n  }\r\n}\r\n\r\n\r\n\r\nLightbox.init();\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/lightbox.js?");

/***/ }),

/***/ "./src/scripts/factories/lightboxImage.js":
/*!************************************************!*\
  !*** ./src/scripts/factories/lightboxImage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lightboximage\": () => (/* binding */ Lightboximage)\n/* harmony export */ });\nclass Lightboximage {\r\n    constructor(url, title) {\r\n      this.title = title;\r\n      this.url = url;\r\n    }\r\n  \r\n    buildDom() {\r\n      const lightboxContainer = document.querySelector('.lightbox_container');\r\n      console.log(lightboxContainer);\r\n      lightboxContainer.innerHTML = ''\r\n      lightboxContainer.innerHTML = `\r\n      <div>\r\n        <img src=\"${this.url}\" alt=\"\">\r\n        <p>${this.title}</p>\r\n      </div>\r\n      `\r\n      // wrapper.querySelector(\".next\").addEventListener('click', this.next.bind(this));\r\n      return lightboxContainer;\r\n    }\r\n  }\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/lightboxImage.js?");

/***/ }),

/***/ "./src/scripts/factories/lightboxVideo.js":
/*!************************************************!*\
  !*** ./src/scripts/factories/lightboxVideo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lightboxvideo\": () => (/* binding */ Lightboxvideo)\n/* harmony export */ });\nclass Lightboxvideo {\r\n    constructor(url, title) {\r\n      this.title = title;\r\n      this.url = url;\r\n    }\r\n  \r\n    buildDom() {\r\n      const lightboxContainer = document.querySelector('.lightbox_container');\r\n      console.log(lightboxContainer);\r\n      lightboxContainer.innerHTML = ''\r\n      lightboxContainer.innerHTML = `\r\n      <div>\r\n        <video src=\"${this.url}\" alt=\"\" controls></video>\r\n        <p>${this.title}</p>\r\n      </div>\r\n      `\r\n      // wrapper.querySelector(\".next\").addEventListener('click', this.next.bind(this));\r\n      return lightboxContainer;\r\n    }\r\n  }\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/lightboxVideo.js?");

/***/ }),

/***/ "./src/scripts/factories/mediasFactory.js":
/*!************************************************!*\
  !*** ./src/scripts/factories/mediasFactory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaFactory\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\nclass MediaFactory {\r\n        constructor(dataMedia){\r\n            if(dataMedia.video == undefined){\r\n                return  new MediaImages(dataMedia)\r\n                    \r\n            }else if (dataMedia.image == undefined){\r\n                return new Videos(dataMedia)\r\n            }\r\n        }       \r\n}\r\n\r\nclass Medias{\r\n\r\n    constructor(dataMedia){\r\n        this.id = dataMedia.id;\r\n        this.photographerId = dataMedia.photographerId;\r\n        this.title = dataMedia.title;\r\n        this.likes = dataMedia.likes;\r\n        this.date = dataMedia.date;\r\n        this.price = dataMedia.price;\r\n    }   \r\n}\r\n\r\nclass MediaImages extends Medias {\r\n    constructor(dataMedia){\r\n        super(dataMedia);\r\n        this.image = dataMedia.image;\r\n        \r\n    }\r\n\r\n    async getMedias(){\r\n        const gallery = document.querySelector('.gallery');\r\n        gallery.innerHTML += `\r\n        <figure>\r\n            <img id=\"${this.id}\" class=\"media visible\" src=\"assets/photographers/${this.photographerId}/${this.image}\" srcset=\"assets/photographers/${this.photographerId}/${this.image}_small.jpg 1x\" alt=\"\">    \r\n            <figcaption>\r\n            <p class=\"title\">${this.title}</p><p data-target=\"${this.likes}\" class=\"like-count\"></p><p class=\"like-button\"><i class=\"far fa-regular fa-heart\"></i></p>\r\n            </figcaption>\r\n        </figure>\r\n        \r\n        `\r\n        \r\n    }\r\n    \r\n    \r\n}\r\n\r\nclass Videos extends Medias {\r\n    constructor(dataMedia){\r\n        super(dataMedia);\r\n        this.video = dataMedia.video;\r\n        \r\n    }\r\n\r\n    async getMedias(){\r\n        const gallery = document.querySelector('.gallery');\r\n        gallery.innerHTML += `\r\n        <figure>\r\n            <video id=\"${this.id}\" class=\"media visible\" preload=\"metadata\" src=\"assets/photographers/videos/${this.video}\" type=\"video/mp4\" loop></video>\r\n            \r\n            <div class=\"bar\">\r\n                <div class=\"bar-line\"></div>\r\n            </div>\r\n            <figcaption>\r\n            <p class=\"title\">${this.title}</p><p data-target=\"${this.likes}\" class=\"like-count\"></p><p class=\"like-button\"><i class=\"far fa-regular fa-heart\"></i></p>\r\n            </figcaption>\r\n            </figcaption>\r\n        </figure>\r\n      `\r\n    }\r\n\r\n   \r\n      \r\n    \r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/mediasFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/photographerFactory.js":
/*!******************************************************!*\
  !*** ./src/scripts/factories/photographerFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotographerFactory\": () => (/* binding */ PhotographerFactory)\n/* harmony export */ });\nclass PhotographerFactory {\r\n\r\n    constructor(dataPh) {\r\n      this.name = dataPh.name;\r\n      this.id = dataPh.id;\r\n      this.city = dataPh.city;\r\n      this.country = dataPh.country;\r\n      this.tagline = dataPh.tagline;\r\n      this.price = dataPh.price;\r\n      this.portrait = dataPh.portrait;\r\n    }\r\n  \r\n  getUserCardDom() {\r\n      const photographerSection = document.querySelector('.photographer_section');\r\n      photographerSection.innerHTML += `\r\n           <a href=\"photographer.html?index=${this.id}\">\r\n                <article data-filter = \"${this.id}\" class=\"photographer_article\">\r\n                    <img src=\"assets/photographers/photo/${this.portrait}\" srcset=\"assets/photographers/photo/${this.portrait}_small.jpg 1x\" alt=\"\">\r\n                    <h2>${this.name}</h2>\r\n                    <h4>${this.city}, ${this.country}</h4>\r\n                    <p>${this.tagline}</p>\r\n                    <p>${this.price}€/jour</p>\r\n                </article>\r\n            </a>\r\n            `;   \r\n     }\r\n\r\n   getUserSpecific() {\r\n      const photographerHeader = document.querySelector('.photograph-header');\r\n\r\n      photographerHeader.innerHTML =\r\n    \r\n      `\r\n      <div class=\"presentation\">\r\n        <h1>${this.name}</h1>\r\n        <h3>${this.city}, ${this.country}</h3>\r\n        <p>${this.tagline}</p>\r\n      </div>\r\n      <button class=\"contact\">Contactez-moi</button>\r\n      <img src=\"assets/photographers/photo/${this.portrait}\" alt=\"\">\r\n      `\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/pages/api.js":
/*!**********************************!*\
  !*** ./src/scripts/pages/api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPhotographers\": () => (/* binding */ fetchPhotographers),\n/* harmony export */   \"fetchPhotographersMedias\": () => (/* binding */ fetchPhotographersMedias)\n/* harmony export */ });\nasync function fetchPhotographers() {\r\n    let dataPh;\r\n    return fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then((data) => (dataPh = data.photographers))\r\n    .catch(error => alert(error));\r\n  }\r\n\r\n  async function fetchPhotographersMedias() {\r\n    let dataMedia;\r\n    return fetch(\"./data/photographers.json\")\r\n      .then(res => res.json())\r\n      .then((data) => (dataMedia = data.media))\r\n      .catch(error => alert(error));\r\n      \r\n  }\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/pages/api.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMedias\": () => (/* binding */ displayMedias),\n/* harmony export */   \"displayPhotographerHeader\": () => (/* binding */ displayPhotographerHeader),\n/* harmony export */   \"getPhotographerId\": () => (/* binding */ getPhotographerId)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _factories_mediasFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/mediasFactory */ \"./src/scripts/factories/mediasFactory.js\");\n/* harmony import */ var _pages_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api.js */ \"./src/scripts/pages/api.js\");\n/* harmony import */ var _utils_contactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/contactForm */ \"./src/scripts/utils/contactForm.js\");\n/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dropdown */ \"./src/scripts/utils/dropdown.js\");\n/* harmony import */ var _factories_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factories/lightbox */ \"./src/scripts/factories/lightbox.js\");\n/* harmony import */ var _utils_draggableDiv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/draggableDiv */ \"./src/scripts/utils/draggableDiv.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//import { Likes } from \"../utils/likes\";\r\n\r\n\r\n\r\nfunction getPhotographerId(){\r\n    return new URL(location.href).searchParams.get('index');\r\n}\r\n\r\n///AFFICHAGE DU HEADER SUR LA PAGE PHOTOGRAPHE\r\nasync function displayPhotographerHeader (){\r\n    const articleId = getPhotographerId();\r\n    \r\n    const articles = await (0,_pages_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)();\r\n    console.log(articles);\r\n    for(let article of articles){\r\n        if(article.id == articleId){\r\n            const headerPhotographer = new _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_1__.PhotographerFactory(article);\r\n            headerPhotographer.getUserSpecific();\r\n\r\n            //AFFICHAGE DYNAMIQUE DU PRIX JOURNALIER\r\n            const tarifJour = document.querySelector('.tarif-jour');\r\n            tarifJour.innerHTML = article.price + '€/jour';\r\n            //AFFICHAGE DYNAMIQUE DU NOM DANS LE FORMULAIRE\r\n            const contactName = document.querySelector('.contact-name');\r\n            contactName.innerHTML = article.name;\r\n        }\r\n    }  \r\n}\r\n\r\ndisplayPhotographerHeader();  //AFFICHAGE DU HEADER PERSONNALISE POUR UN PHOTOGRAPHE\r\n\r\n(0,_utils_contactForm__WEBPACK_IMPORTED_MODULE_4__.contactForm)(); //GESTION DU FORMULAIRE \r\n\r\n(0,_utils_draggableDiv__WEBPACK_IMPORTED_MODULE_7__.move)();  //GESTION DU DRAG AND DROP DE LA DIV DU TOTAL DES COEURS\r\n\r\n(0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_5__.dropdown)();  //ANIMATION DU MENU DROPDOWN\r\n\r\n///AFFICHAGE DES MEDIAS CORRESPONDANT A CHAQUE PHOTOGRAPHE\r\nasync function displayMedias(){\r\n    \r\n    const dataMedia = await (0,_pages_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographersMedias)();\r\n    //console.log(dataMedia);\r\n    const mediaId = getPhotographerId(); \r\n    //console.log(mediaId);\r\n    \r\n    for(let media of dataMedia){\r\n        if(media.photographerId == mediaId){\r\n                \r\n                const mediaDisplay = new _factories_mediasFactory__WEBPACK_IMPORTED_MODULE_2__.MediaFactory(media);\r\n                 mediaDisplay.getMedias();\r\n                \r\n            } \r\n            /// GESTION DES LIKES\r\n            function likes (){\r\n                const likeCount = document.querySelectorAll('.like-count')\r\n                \r\n                const likeButton = document.querySelectorAll('.like-button');\r\n                \r\n                const likeTotal = document.querySelector('.like-total-count');\r\n                let sum = 0;\r\n                //incrémentation\r\n                for(let i = 0; i < likeButton.length; i++){\r\n                    sum += +likeCount[i].getAttribute('data-target');\r\n                   \r\n                    likeCount[i].innerHTML = likeCount[i].getAttribute('data-target')\r\n                    likeTotal.innerHTML = sum + `<i class=\"fas fa-solid fa-heart\"></i>`;\r\n                    let clicked = false;\r\n                    \r\n                    likeButton[i].addEventListener('click', () => {\r\n                        if(!clicked){//LIKE\r\n                            clicked = true;\r\n                            likeButton[i].innerHTML = `<i class=\"fas fa-solid fa-heart\"></i>`;\r\n                            const target = +likeCount[i].getAttribute('data-target');\r\n                            \r\n                            //total de likes sous chaque photo actualisé à chaque clic\r\n                            likeCount[i].innerHTML = target + 1;\r\n                            //total de likes général actualisé sur la page\r\n                            likeTotal.innerHTML = 1 + sum++  + `<i class=\"fas fa-solid fa-heart\"></i>`\r\n                        \r\n                        }else{ //DISLIKE\r\n                            clicked = false;\r\n                            likeButton[i].innerHTML = `<i class=\"far fa-regular fa-heart\"></i>`\r\n                            \r\n                            //total de likes sous chaque photo actualisé à chaque clic\r\n                            likeCount[i].innerHTML = +likeCount[i].innerHTML - 1;\r\n                            //total de likes général actualisé sur la page\r\n                            likeTotal.innerHTML =  -1 + sum--  + `<i class=\"fas fa-solid fa-heart\"></i>`\r\n                        }\r\n                    })\r\n                }\r\n\r\n                \r\n                \r\n            }\r\n            likes()\r\n        \r\n    }                     \r\n}           \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/utils/contactForm.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/contactForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactForm\": () => (/* binding */ contactForm)\n/* harmony export */ });\n/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/api */ \"./src/scripts/pages/api.js\");\n/* harmony import */ var _pages_photographer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/photographer */ \"./src/scripts/pages/photographer.js\");\n\r\n\r\n\r\nasync function contactForm(){\r\n     await (0,_pages_photographer__WEBPACK_IMPORTED_MODULE_1__.displayPhotographerHeader)();\r\n     const articles = await (0,_pages_api__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers)();\r\n    //Variables du formulaire\r\n    const formModal = document.querySelector(\"#contact_modal\")//formulaire\r\n    console.log(formModal);\r\n    const contactBtn = document.querySelector(\"button.contact\");//ouverture\r\n\tconsole.log(contactBtn);\r\n    const closeModal = document.querySelector(\".close-modal\");//fermeture\r\n    let inputField = document.querySelectorAll(\"input.input-control\"); // inputs\r\n    console.log(inputField);\r\n    // const sendButton = document.querySelector('.send_button')//bouton envoyer\r\n    // console.log(sendButton);\r\n\r\n    //ouverture du formulaire\r\n    contactBtn.addEventListener('click', () => {\r\n        formModal.style.display = 'inline-block'\r\n        focusBlur();\r\n    })\r\n\r\n    //fermeture du formulaire\r\n    closeModal.addEventListener('click', () => {\r\n        formModal.style.display = 'none'\r\n        setTimeout(() => {\r\n            resetField()\r\n          }, 1000);  \r\n    })\r\n\r\n    // sendButton.addEventListener('click', () => {\r\n    //       setTimeout(() => {\r\n    //         resetField();\r\n    //       }, 1000);  \r\n    //   })\r\n\r\n    // AFFICHAGE DYNAMIQUE DU NOM --> photographer.js\r\n   \r\n    //VALIDATION DES CHAMPS\r\n    \r\nfunction resetField (){\r\n  for(let i = 0; i < inputField.length; i++){\r\n    inputField[i].value = \"\";\r\n    inputField[i].classList.remove('redBorder');\r\n    inputField[i].classList.remove('greenBorder');\r\n    inputField[i].nextElementSibling.innerHTML = \"\";\r\n    \r\n  }\r\n \r\n}\r\n\r\nfunction focusBlur(){\r\n    for(let i = 0; i < inputField.length; i++){\r\n      inputField[i].addEventListener('focus', addColor);\r\n      inputField[i].addEventListener('blur', removeColor);\r\n  \r\n      function addColor(){\r\n        inputField[i].classList.add('blueBorder');\r\n       \r\n      }\r\n  \r\n      function removeColor(){\r\n        inputField[i].classList.remove('blueBorder');\r\n       \r\n      }\r\n    }  \r\n  }\r\n\r\n  function valideForm() {\r\n    let error = 0;\r\n    for (let i = 0; i < inputField.length; i++) {\r\n      const type = inputField[i].getAttribute(\"id\");\r\n      let paragraphe = inputField[i].nextElementSibling;\r\n  \r\n      switch (type) {\r\n        case \"first\":\r\n          if (inputField[i].value === \"\") {\r\n            error = error + 1;\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Veuillez inscrire votre prénom`, inputField[i]);\r\n          } else if (\r\n            /^[a-zA-Zéè ]+[\\-]?[a-zA-Zéè ]+$/.test(inputField[i].value.trim()) &&\r\n            inputField[i].value.length >= 2\r\n          ) {\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            okMessage(paragraphe, `Le prénom est valide`, inputField[i]);\r\n            inputField[i + 1].focus();\r\n          }else{\r\n            error = error + 1;\r\n            console.log(error);\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Le prénom est invalide`, inputField[i]);\r\n          }\r\n          \r\n          break;\r\n  \r\n        case \"last\":\r\n  \r\n          if (inputField[i].value === \"\"){\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Veuillez renseigner votre nom`, inputField[i]);\r\n            error = error + 1;\r\n          } else if (\r\n            /^[a-zA-Zéè ]+[\\-]?[a-zA-Zéè ]+$/.test(inputField[i].value.trim()) &&\r\n            inputField[i].value.length >= 2\r\n          ) {\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            okMessage(paragraphe, `Nom valide`, inputField[i]);\r\n            inputField[i + 1].focus();\r\n          }else{\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Nom invalide`, inputField[i]);\r\n            error = error + 1;\r\n          }\r\n  \r\n          break;\r\n  \r\n        case \"mail\":\r\n  \r\n          if (inputField[i].value === \"\") {\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Le mail est obligatoire`, inputField[i]);\r\n            error = error + 1;\r\n          } else if (\r\n            /^\\w+([\\.-]?\\w+)*@\\w+([\\-]?\\w+)*\\.(\\w{2,3})+$/.test(\r\n              inputField[i].value.trim())){\r\n                inputField[i].classList.remove('blueBorder');\r\n                okMessageRemove(paragraphe, inputField[i]);\r\n                okMessage(paragraphe, `Mail valide`, inputField[i]);\r\n                inputField[i + 1].focus();\r\n          }else{\r\n            inputField[i].classList.remove('blueBorder');\r\n            okMessageRemove(paragraphe, inputField[i]);\r\n            errorMessage(paragraphe, `Le mail est invalide`, inputField[i]);\r\n            error = error + 1;\r\n          }\r\n          \r\n          break;\r\n  \r\n        \r\n  \r\n        \r\n      }\r\n    }\r\n    return error <= 0;\r\n    \r\n  }\r\n\r\n  function errorMessage(nodeElt, message, input) {\r\n    nodeElt.innerHTML = message;\r\n    nodeElt.classList.add('red');\r\n    input.classList.add('redBorder')\r\n  }\r\n  \r\n  function okMessage(nodeElt, message, input){\r\n    nodeElt.innerHTML = message;\r\n    nodeElt.classList.add('green');\r\n    input.classList.add('greenBorder')\r\n  }\r\n  \r\n  function okMessageRemove(nodeElt, input){\r\n    nodeElt.classList.remove('green');\r\n    input.classList.remove('greenBorder')\r\n  }\r\n\r\n  formModal.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    \r\n      valideForm()\r\n  })\r\n     \r\n  \r\n  \r\n}\r\n\r\n   \r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/utils/contactForm.js?");

/***/ }),

/***/ "./src/scripts/utils/draggableDiv.js":
/*!*******************************************!*\
  !*** ./src/scripts/utils/draggableDiv.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"move\": () => (/* binding */ move)\n/* harmony export */ });\n\r\n\r\nfunction move(){\r\n    let dragValue;\r\n const likeStorage = document.querySelector('.like-storage');\r\n likeStorage.style.position = 'absolute';\r\n        likeStorage.onmousedown = function(){\r\n            dragValue = likeStorage;\r\n        }\r\n\r\n        document.onmousemove = function(e){\r\n            const x = e.pageX;\r\n            const y = e.pageY;\r\n            dragValue.style.left = `${x}px`;\r\n            dragValue.style.top = `${y}px`;\r\n        }\r\n        document.onmouseup = function(){\r\n            dragValue = null;\r\n        }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/utils/draggableDiv.js?");

/***/ }),

/***/ "./src/scripts/utils/dropdown.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropdown\": () => (/* binding */ dropdown)\n/* harmony export */ });\n// dropdown menu\r\n\r\nfunction dropdown (){\r\n    const selected = document.querySelector(\".selected\");\r\nconst optionsContainer = document.querySelector(\".options-container\");\r\nconst label = document.querySelectorAll('.option label')\r\nconst optionsList = document.querySelectorAll('.option');\r\nconst body = document.querySelector('body');\r\n\r\nselected.addEventListener('click', () => {\r\n    optionsContainer.classList.toggle('active');\r\n});\r\n\r\n\r\n\r\noptionsList.forEach(elt => {\r\n    elt.addEventListener(\"click\", () => {\r\n        selected.innerHTML = elt.querySelector('label').innerHTML;\r\n\r\n        optionsContainer.classList.remove('active');\r\n    })\r\n});\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_essai/./src/scripts/utils/dropdown.js?");

/***/ }),

/***/ "./assets/icons/down-arrow.png":
/*!*************************************!*\
  !*** ./assets/icons/down-arrow.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d26a999c32e84014353d.png\";\n\n//# sourceURL=webpack://webpack_essai/./assets/icons/down-arrow.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"photographerDist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/photographer.js");
/******/ 	
/******/ })()
;