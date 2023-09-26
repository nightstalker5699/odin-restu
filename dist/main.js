/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/button.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/button.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
    position: relative;
  padding: 16px 30px;
  font-size: 1.5rem;
  color: var(--color);
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-shadow: 0 0 15px var(--color);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  z-index: 1;
}
.button:hover {
    color: #fff;
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 0 0 0px var(--color);
  }
  
  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color);
    z-index: -1;
    transform: scale(0);
    transition: 0.5s;
  }
  
  .button:hover::before {
    transform: scale(1);
    transition-delay: 0.5s;
    box-shadow: 0 0 10px var(--color),
      0 0 30px var(--color),
      0 0 60px var(--color);
  }
  
  .button span {
    position: absolute;
    background: var(--color);
    pointer-events: none;
    border-radius: 2px;
    box-shadow: 0 0 10px var(--color),
      0 0 20px var(--color),
      0 0 30px var(--color),
      0 0 50px var(--color),
      0 0 100px var(--color);
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
  }
  
  .button:hover span {
    opacity: 0;
    transition-delay: 0s;
  }
  
  .button span:nth-child(1),
  .button span:nth-child(3) {
    width: 40px;
    height: 4px;
  }
  
  .button:hover span:nth-child(1),
  .button:hover span:nth-child(3) {
    transform: translateX(0);
  }
  
  .button span:nth-child(2),
  .button span:nth-child(4) {
    width: 4px;
    height: 40px;
  }
  
  .button:hover span:nth-child(1),
  .button:hover span:nth-child(3) {
    transform: translateY(0);
  }
  
  .button span:nth-child(1) {
    top: calc(50% - 2px);
    left: -50px;
    transform-origin: left;
  }
  
  .button:hover span:nth-child(1) {
    left: 50%;
  }
  
  .button span:nth-child(3) {
    top: calc(50% - 2px);
    right: -50px;
    transform-origin: right;
  }
  
  .button:hover span:nth-child(3) {
    right: 50%;
  }
  
  .button span:nth-child(2) {
    left: calc(50% - 2px);
    top: -50px;
    transform-origin: top;
  }
  
  .button:hover span:nth-child(2) {
    top: 50%;
  }
  
  .button span:nth-child(4) {
    left: calc(50% - 2px);
    bottom: -50px;
    transform-origin: bottom;
  }
  
  .button:hover span:nth-child(4 ) {
    bottom: 50%;
  }`, "",{"version":3,"sources":["webpack://./src/button.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oCAAoC;EACpC,kBAAkB;EAClB,kCAAkC;EAClC,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;AACZ;AACA;IACI,WAAW;IACX,kCAAkC;IAClC,gCAAgC;EAClC;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,WAAW;IACX,mBAAmB;IACnB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,sBAAsB;IACtB;;2BAEuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,wBAAwB;IACxB,oBAAoB;IACpB,kBAAkB;IAClB;;;;4BAIwB;IACxB,4BAA4B;IAC5B,uBAAuB;EACzB;;EAEA;IACE,UAAU;IACV,oBAAoB;EACtB;;EAEA;;IAEE,WAAW;IACX,WAAW;EACb;;EAEA;;IAEE,wBAAwB;EAC1B;;EAEA;;IAEE,UAAU;IACV,YAAY;EACd;;EAEA;;IAEE,wBAAwB;EAC1B;;EAEA;IACE,oBAAoB;IACpB,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;EACzB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,qBAAqB;IACrB,UAAU;IACV,qBAAqB;EACvB;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,qBAAqB;IACrB,aAAa;IACb,wBAAwB;EAC1B;;EAEA;IACE,WAAW;EACb","sourcesContent":[".button {\n    position: relative;\n  padding: 16px 30px;\n  font-size: 1.5rem;\n  color: var(--color);\n  border: 2px solid rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  text-shadow: 0 0 15px var(--color);\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  transition: 0.5s;\n  z-index: 1;\n}\n.button:hover {\n    color: #fff;\n    border: 2px solid rgba(0, 0, 0, 0);\n    box-shadow: 0 0 0px var(--color);\n  }\n  \n  .button::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: var(--color);\n    z-index: -1;\n    transform: scale(0);\n    transition: 0.5s;\n  }\n  \n  .button:hover::before {\n    transform: scale(1);\n    transition-delay: 0.5s;\n    box-shadow: 0 0 10px var(--color),\n      0 0 30px var(--color),\n      0 0 60px var(--color);\n  }\n  \n  .button span {\n    position: absolute;\n    background: var(--color);\n    pointer-events: none;\n    border-radius: 2px;\n    box-shadow: 0 0 10px var(--color),\n      0 0 20px var(--color),\n      0 0 30px var(--color),\n      0 0 50px var(--color),\n      0 0 100px var(--color);\n    transition: 0.5s ease-in-out;\n    transition-delay: 0.25s;\n  }\n  \n  .button:hover span {\n    opacity: 0;\n    transition-delay: 0s;\n  }\n  \n  .button span:nth-child(1),\n  .button span:nth-child(3) {\n    width: 40px;\n    height: 4px;\n  }\n  \n  .button:hover span:nth-child(1),\n  .button:hover span:nth-child(3) {\n    transform: translateX(0);\n  }\n  \n  .button span:nth-child(2),\n  .button span:nth-child(4) {\n    width: 4px;\n    height: 40px;\n  }\n  \n  .button:hover span:nth-child(1),\n  .button:hover span:nth-child(3) {\n    transform: translateY(0);\n  }\n  \n  .button span:nth-child(1) {\n    top: calc(50% - 2px);\n    left: -50px;\n    transform-origin: left;\n  }\n  \n  .button:hover span:nth-child(1) {\n    left: 50%;\n  }\n  \n  .button span:nth-child(3) {\n    top: calc(50% - 2px);\n    right: -50px;\n    transform-origin: right;\n  }\n  \n  .button:hover span:nth-child(3) {\n    right: 50%;\n  }\n  \n  .button span:nth-child(2) {\n    left: calc(50% - 2px);\n    top: -50px;\n    transform-origin: top;\n  }\n  \n  .button:hover span:nth-child(2) {\n    top: 50%;\n  }\n  \n  .button span:nth-child(4) {\n    left: calc(50% - 2px);\n    bottom: -50px;\n    transform-origin: bottom;\n  }\n  \n  .button:hover span:nth-child(4 ) {\n    bottom: 50%;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu-item.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu-item.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
    width: 300px;
    height: 280px;
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 3rem;;
  }
  
  .card * {
    transition: 0.5s ease all;
  }
  
  .card img {
    margin: 0;
    width: 300px;
    height: 224px;
    object-fit: cover;
    display: block;
  }
  
  .card h3 {
    margin: 0;
    padding: 12px 12px 48px;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
  }
  
  .card .focus-content {
    display: block;
    padding: 8px 12px;
  }
  
  .card p {
    margin: 0;
    line-height: 1.5;
    font-size: 0.8rem;
  }
  
  .card:hover img, .card:focus-within img {
    margin-top: -100px;
  }
  
  .card:hover h3, .card:focus-within h3 {
    padding: 8px 12px 0;
  }`, "",{"version":3,"sources":["webpack://./src/menu-item.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,uCAAuC;IACvC,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,SAAS;IACT,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,SAAS;IACT,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,SAAS;IACT,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB","sourcesContent":[".card {\n    width: 300px;\n    height: 280px;\n    padding: 0;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);\n    border-radius: 8px;\n    box-sizing: border-box;\n    overflow: hidden;\n    margin-bottom: 3rem;;\n  }\n  \n  .card * {\n    transition: 0.5s ease all;\n  }\n  \n  .card img {\n    margin: 0;\n    width: 300px;\n    height: 224px;\n    object-fit: cover;\n    display: block;\n  }\n  \n  .card h3 {\n    margin: 0;\n    padding: 12px 12px 48px;\n    line-height: 32px;\n    font-weight: 500;\n    font-size: 20px;\n  }\n  \n  .card .focus-content {\n    display: block;\n    padding: 8px 12px;\n  }\n  \n  .card p {\n    margin: 0;\n    line-height: 1.5;\n    font-size: 0.8rem;\n  }\n  \n  .card:hover img, .card:focus-within img {\n    margin-top: -100px;\n  }\n  \n  .card:hover h3, .card:focus-within h3 {\n    padding: 8px 12px 0;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    padding:0;
    margin:0;
    height: 100vh;
    background-image:url(https://images.unsplash.com/photo-1626082915404-d5143f14b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.content {
    height: 100%;
    display:flex;
    flex-direction: column;

}
.icon {
    height: 3rem;
    width: 3rem;
    vertical-align: middle;
    margin-right: 1rem;
}
.phoneicon {
    height: 3rem;
    width: 3rem;
    vertical-align: middle;
    
}
.num {
    vertical-align: middle;
    display: inline; }
 

footer ,header {
    height: 3rem;
    background-color: rgb(20,20,20,0.5);
    text-align: center;
    color:white;
    font-size: 1.5rem;
    padding:10px;
    box-sizing: border-box;
}
header{
    font-family: 'Fuggles', cursive;
    height: 5rem;
    font-size: 3rem;
    margin-bottom: 4rem;
}
.body {
    flex:1;
}
.btngroup {
    display: flex;
    justify-content: center;
    gap:10rem
}

.secondhalf {
    display:flex;
    justify-content: center;
}

.home, .menu , .contact {
    display:block;
    text-align: center;
    width: 50vw;
    padding:3rem;
    color:aliceblue;
    background-color: rgb(20,20,20,0.5);
    margin:3.2rem;
    font-size: 2rem;
    font-family: 'Croissant One', cursive;
}
.menu {
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
}

.hidden {
    display:none
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,QAAQ;IACR,aAAa;IACb,4LAA4L;IAC5L,sBAAsB;IACtB,4BAA4B;IAC5B,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;;AAE1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;;AAE1B;AACA;IACI,sBAAsB;IACtB,eAAe,EAAE;;;AAGrB;IACI,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,sBAAsB;AAC1B;AACA;IACI,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,MAAM;AACV;AACA;IACI,aAAa;IACb,uBAAuB;IACvB;AACJ;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,mCAAmC;IACnC,aAAa;IACb,eAAe;IACf,qCAAqC;AACzC;AACA;IACI,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;AACJ","sourcesContent":["body{\n    padding:0;\n    margin:0;\n    height: 100vh;\n    background-image:url(https://images.unsplash.com/photo-1626082915404-d5143f14b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n.content {\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n\n}\n.icon {\n    height: 3rem;\n    width: 3rem;\n    vertical-align: middle;\n    margin-right: 1rem;\n}\n.phoneicon {\n    height: 3rem;\n    width: 3rem;\n    vertical-align: middle;\n    \n}\n.num {\n    vertical-align: middle;\n    display: inline; }\n \n\nfooter ,header {\n    height: 3rem;\n    background-color: rgb(20,20,20,0.5);\n    text-align: center;\n    color:white;\n    font-size: 1.5rem;\n    padding:10px;\n    box-sizing: border-box;\n}\nheader{\n    font-family: 'Fuggles', cursive;\n    height: 5rem;\n    font-size: 3rem;\n    margin-bottom: 4rem;\n}\n.body {\n    flex:1;\n}\n.btngroup {\n    display: flex;\n    justify-content: center;\n    gap:10rem\n}\n\n.secondhalf {\n    display:flex;\n    justify-content: center;\n}\n\n.home, .menu , .contact {\n    display:block;\n    text-align: center;\n    width: 50vw;\n    padding:3rem;\n    color:aliceblue;\n    background-color: rgb(20,20,20,0.5);\n    margin:3.2rem;\n    font-size: 2rem;\n    font-family: 'Croissant One', cursive;\n}\n.menu {\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    grid-auto-rows: 1fr;\n}\n\n.hidden {\n    display:none\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/button.css":
/*!************************!*\
  !*** ./src/button.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu-item.css":
/*!***************************!*\
  !*** ./src/menu-item.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_item_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu-item.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu-item.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_item_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_item_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_item_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images}

const images = importAll(__webpack_require__("./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$"));
    const content = {
        "ham":{
            url:images["hamburger.jpg"],
            name:"hamburger",
            descr: "The original and for many still the best"
        },
        "Turkey":{
            url:images["Turkey_burger.jpg"],
            name:"Turkey burger",
            descr:"Turkey is a delicious, tasty and dry meat that is packed full of flavour, making it a perfect alternative to red meat for a burger patty"
        },
        "Portobello":{
            url:images["mushroom_burger.jpg"],
            name:"Portobello mushroom burger",
            descr:"Substituting the meat patty for a delicious, meaty, umami-packed grilled portobello mushroom will give you a vegan burger that will satisfy even the hungriest carnivore."

        },
        "elk":{
            url:images["elk.jpg"],
            name:"Elk burger",
            descr: "Elk meat, recently rising in popularity because of a certain bow-hunting podcast celebrity,"
        },
        "veggie":{
            url:images["vegie.jpg"],
            name:"Veggie burger",
            descr: "Once the lonely refuge of the only vegetarian in your group, the veggie burger now threatens to knock the beef burger off its perch."
        },
        "salmon":{
            url:images["salmon.jpg"],
            name:"Wild salmon burger",
            descr: "Of all fish, salmon makes probably the best fish patty for a burger. The main thing to consider is the source of your salmon and in general"
        },
    }


function Menu() {
    const menu = document.createElement("div")
    menu.classList.add("menu","hidden")
    document.querySelector(".secondhalf").appendChild(menu)
    
    for(const item in content) {
        const div = document.createElement("div")
        div.className = "card"
        const img = new Image()
        img.src = content[item].url
        const main = document.createElement("h3")
        main.innerHTML= content[item].name
        const sub = document.createElement("div")
        sub.innerHTML = `<p>${content[item].descr}</p>`
        sub.className = "focus-content"
        div.append(img,main,sub)
        menu.appendChild(div)
    }
}




/***/ }),

/***/ "./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*******************************************************************!*\
  !*** ./src/assets/menu/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Turkey_burger.jpg": "./src/assets/menu/Turkey_burger.jpg",
	"./elk.jpg": "./src/assets/menu/elk.jpg",
	"./hamburger.jpg": "./src/assets/menu/hamburger.jpg",
	"./mushroom_burger.jpg": "./src/assets/menu/mushroom_burger.jpg",
	"./salmon.jpg": "./src/assets/menu/salmon.jpg",
	"./vegie.jpg": "./src/assets/menu/vegie.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/menu sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _assets_phoneicon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/phoneicon.png */ "./src/assets/phoneicon.png");
/* harmony import */ var _assets_address_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/address.png */ "./src/assets/address.png");


function contact(){
    const phoneIcon = new Image()
    phoneIcon.src = _assets_phoneicon_png__WEBPACK_IMPORTED_MODULE_0__
    phoneIcon.className = "phoneicon"
    const addressIcon = new Image()
    addressIcon.src = _assets_address_png__WEBPACK_IMPORTED_MODULE_1__
    addressIcon.className = "phoneicon"
    const contactCON = document.createElement("div")
    contactCON.classList.add("contact","hidden")
    const phone = document.createElement("div")
    phone.innerHTML = `<h1>Phone number </h1>
                        <div class = "num">0115-2345-5968 </div>`
    phone.appendChild(phoneIcon)
    const address = document.createElement("div")
    address.innerHTML = `<h1>Address </h1>
                        <div class = "num">644 NE. Lincoln St.Germantown, MD 20874 </div>`
                        address.appendChild(addressIcon)
    contactCON.append(phone,address)
    document.querySelector(".secondhalf").appendChild(contactCON)
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   toggle: () => (/* binding */ toggle)
/* harmony export */ });


function home() {
    const home = document.createElement("div")
    home.classList.toggle("home")
    home.textContent = "this is papa burger the best burger seller Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt"
    document.querySelector(".secondhalf").appendChild(home)
}


function toggle() {
    document.querySelector(".home").classList.toggle = "hid"
}

 

/***/ }),

/***/ "./src/assets/address.png":
/*!********************************!*\
  !*** ./src/assets/address.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c537329835a2d58cb2b8.png";

/***/ }),

/***/ "./src/assets/burger.png":
/*!*******************************!*\
  !*** ./src/assets/burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7f13afe9265c6e6ae67c.png";

/***/ }),

/***/ "./src/assets/menu/Turkey_burger.jpg":
/*!*******************************************!*\
  !*** ./src/assets/menu/Turkey_burger.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6c4ce9f0993c7349d314.jpg";

/***/ }),

/***/ "./src/assets/menu/elk.jpg":
/*!*********************************!*\
  !*** ./src/assets/menu/elk.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "821bbeca78d7187c9df7.jpg";

/***/ }),

/***/ "./src/assets/menu/hamburger.jpg":
/*!***************************************!*\
  !*** ./src/assets/menu/hamburger.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e942e3b6e88a5db04756.jpg";

/***/ }),

/***/ "./src/assets/menu/mushroom_burger.jpg":
/*!*********************************************!*\
  !*** ./src/assets/menu/mushroom_burger.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "22f0530f712358637a62.jpg";

/***/ }),

/***/ "./src/assets/menu/salmon.jpg":
/*!************************************!*\
  !*** ./src/assets/menu/salmon.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "94a4a98016d8ca91c319.jpg";

/***/ }),

/***/ "./src/assets/menu/vegie.jpg":
/*!***********************************!*\
  !*** ./src/assets/menu/vegie.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c9677945ef0a411dd70f.jpg";

/***/ }),

/***/ "./src/assets/phoneicon.png":
/*!**********************************!*\
  !*** ./src/assets/phoneicon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ebb13c06cf7823c8b019.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./src/button.css");
/* harmony import */ var _menu_item_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item.css */ "./src/menu-item.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _assets_burger_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/burger.png */ "./src/assets/burger.png");







const content = document.querySelector(".content")

const header = document.createElement("header")
const MyIcon = new Image()
    MyIcon.src = _assets_burger_png__WEBPACK_IMPORTED_MODULE_6__
    MyIcon.classList = "icon"
    header.appendChild(MyIcon)
header.innerHTML += "papa burger"

const body = document.createElement("div")
body.className = "body"

const footer = document.createElement("footer")
footer.textContent = "Made by Night"

const second = document.createElement("div")
second.className = "secondhalf"

const btnGroup = document.createElement("div")
btnGroup.className = "btngroup"
btnGroup.innerHTML = `<a  data-but = "home" class="button" href="#" style="--color:gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Home
</a>
<a data-but = "menu" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Menu
</a>
<a data-but = "contact" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Contact US`
body.append(btnGroup,second)

content.append(header,body,footer)
;(0,_contact__WEBPACK_IMPORTED_MODULE_4__.contact)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home)();
(0,_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu)();

document.querySelectorAll(".button").forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        switchTab(event.target.dataset.but)
    })
})

function switchTab(tab){
    const contact = document.querySelector(".contact")
    const home = document.querySelector(".home")
    const menu = document.querySelector(".menu")
    for(const block of [contact,home,menu]) {
        if (block.classList.contains(tab)){
        block.classList.remove("hidden")
        }
       
       else {
        block.classList.add("hidden")
       }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNBO0FBQ0c7QUFDYTtBQUNKO0FBQ047QUFDVztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFJO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQU87QUFDUCw4Q0FBSTtBQUNKLDJDQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdHUvLi9zcmMvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1Ly4vc3JjL21lbnUtaXRlbS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdHUvLi9zcmMvYnV0dG9uLmNzcz9kMjgyIiwid2VicGFjazovL29kaW4tcmVzdHUvLi9zcmMvbWVudS1pdGVtLmNzcz8xZmU5Iiwid2VicGFjazovL29kaW4tcmVzdHUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdHUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdHUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL3NyYy9hc3NldHMvbWVudS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9vZGluLXJlc3R1Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdHUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3R1L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0dS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdHUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3R1L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdHUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdHUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTZweCAzMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgei1pbmRleDogMTtcbn1cbi5idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB2YXIoLS1jb2xvcik7XG4gIH1cbiAgXG4gIC5idXR0b246OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvcik7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCB2YXIoLS1jb2xvciksXG4gICAgICAwIDAgMzBweCB2YXIoLS1jb2xvciksXG4gICAgICAwIDAgNjBweCB2YXIoLS1jb2xvcik7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tY29sb3IpLFxuICAgICAgMCAwIDIwcHggdmFyKC0tY29sb3IpLFxuICAgICAgMCAwIDMwcHggdmFyKC0tY29sb3IpLFxuICAgICAgMCAwIDUwcHggdmFyKC0tY29sb3IpLFxuICAgICAgMCAwIDEwMHB4IHZhcigtLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMSksXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMykge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNHB4O1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpLFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMiksXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoNCkge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpLFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMSkge1xuICAgIHRvcDogY2FsYyg1MCUgLSAycHgpO1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICBcbiAgLmJ1dHRvbiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCk7XG4gICAgcmlnaHQ6IC01MHB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICByaWdodDogNTAlO1xuICB9XG4gIFxuICAuYnV0dG9uIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XG4gICAgdG9wOiAtNTBweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIHRvcDogNTAlO1xuICB9XG4gIFxuICAuYnV0dG9uIHNwYW46bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XG4gICAgYm90dG9tOiAtNTBweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoNCApIHtcbiAgICBib3R0b206IDUwJTtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztJQUNsQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCOzsyQkFFdUI7RUFDekI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEI7Ozs7NEJBSXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsd0JBQXdCO0VBQzFCOztFQUVBOztJQUVFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE2cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1jb2xvcik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggdmFyKC0tY29sb3IpO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICB9XFxuICBcXG4gIC5idXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHZhcigtLWNvbG9yKSxcXG4gICAgICAwIDAgMzBweCB2YXIoLS1jb2xvciksXFxuICAgICAgMCAwIDYwcHggdmFyKC0tY29sb3IpO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uIHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggdmFyKC0tY29sb3IpLFxcbiAgICAgIDAgMCAyMHB4IHZhcigtLWNvbG9yKSxcXG4gICAgICAwIDAgMzBweCB2YXIoLS1jb2xvciksXFxuICAgICAgMCAwIDUwcHggdmFyKC0tY29sb3IpLFxcbiAgICAgIDAgMCAxMDBweCB2YXIoLS1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbiBzcGFuOm50aC1jaGlsZCgxKSxcXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICB9XFxuICBcXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoMSksXFxuICAuYnV0dG9uOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uIHNwYW46bnRoLWNoaWxkKDIpLFxcbiAgLmJ1dHRvbiBzcGFuOm50aC1jaGlsZCg0KSB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbjpob3ZlciBzcGFuOm50aC1jaGlsZCgxKSxcXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICBcXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gICAgbGVmdDogLTUwcHg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICB9XFxuICBcXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoMSkge1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICBcXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMykge1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KTtcXG4gICAgcmlnaHQ6IC01MHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbjpob3ZlciBzcGFuOm50aC1jaGlsZCgzKSB7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICB9XFxuICBcXG4gIC5idXR0b24gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XFxuICAgIHRvcDogLTUwcHg7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbjpob3ZlciBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICAgIHRvcDogNTAlO1xcbiAgfVxcbiAgXFxuICAuYnV0dG9uIHNwYW46bnRoLWNoaWxkKDQpIHtcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAycHgpO1xcbiAgICBib3R0b206IC01MHB4O1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuICB9XFxuICBcXG4gIC5idXR0b246aG92ZXIgc3BhbjpudGgtY2hpbGQoNCApIHtcXG4gICAgYm90dG9tOiA1MCU7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2FyZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtOztcbiAgfVxuICBcbiAgLmNhcmQgKiB7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlIGFsbDtcbiAgfVxuICBcbiAgLmNhcmQgaW1nIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMjI0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5jYXJkIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTJweCAxMnB4IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5jYXJkIC5mb2N1cy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgfVxuICBcbiAgLmNhcmQgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5jYXJkOmhvdmVyIGltZywgLmNhcmQ6Zm9jdXMtd2l0aGluIGltZyB7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICB9XG4gIFxuICAuY2FyZDpob3ZlciBoMywgLmNhcmQ6Zm9jdXMtd2l0aGluIGgzIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweCAwO1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS1pdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTs7XFxuICB9XFxuICBcXG4gIC5jYXJkICoge1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgYWxsO1xcbiAgfVxcbiAgXFxuICAuY2FyZCBpbWcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyMjRweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAuY2FyZCBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTJweCAxMnB4IDQ4cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICBcXG4gIC5jYXJkIC5mb2N1cy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgfVxcbiAgXFxuICAuY2FyZCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG4gIFxcbiAgLmNhcmQ6aG92ZXIgaW1nLCAuY2FyZDpmb2N1cy13aXRoaW4gaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgfVxcbiAgXFxuICAuY2FyZDpob3ZlciBoMywgLmNhcmQ6Zm9jdXMtd2l0aGluIGgzIHtcXG4gICAgcGFkZGluZzogOHB4IDEycHggMDtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjYwODI5MTU0MDQtZDUxNDNmMTRiNDNlP2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIxMjgmcT04MCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLnBob25laWNvbiB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgXG59XG4ubnVtIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IGlubGluZTsgfVxuIFxuXG5mb290ZXIgLGhlYWRlciB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwyMCwyMCwwLjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmhlYWRlcntcbiAgICBmb250LWZhbWlseTogJ0Z1Z2dsZXMnLCBjdXJzaXZlO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbi5ib2R5IHtcbiAgICBmbGV4OjE7XG59XG4uYnRuZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOjEwcmVtXG59XG5cbi5zZWNvbmRoYWxmIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLCAubWVudSAsIC5jb250YWN0IHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTB2dztcbiAgICBwYWRkaW5nOjNyZW07XG4gICAgY29sb3I6YWxpY2VibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwyMCwyMCwwLjUpO1xuICAgIG1hcmdpbjozLjJyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnQ3JvaXNzYW50IE9uZScsIGN1cnNpdmU7XG59XG4ubWVudSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5Om5vbmVcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYiw0TEFBNEw7SUFDNUwsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlLEVBQUU7OztBQUdyQjtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxNQUFNO0FBQ1Y7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYyNjA4MjkxNTQwNC1kNTE0M2YxNGI0M2U/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjEyOCZxPTgwKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5waG9uZWljb24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBcXG59XFxuLm51bSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGRpc3BsYXk6IGlubGluZTsgfVxcbiBcXG5cXG5mb290ZXIgLGhlYWRlciB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLDIwLDIwLDAuNSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmhlYWRlcntcXG4gICAgZm9udC1mYW1pbHk6ICdGdWdnbGVzJywgY3Vyc2l2ZTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxufVxcbi5ib2R5IHtcXG4gICAgZmxleDoxO1xcbn1cXG4uYnRuZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOjEwcmVtXFxufVxcblxcbi5zZWNvbmRoYWxmIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUsIC5tZW51ICwgLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MHZ3O1xcbiAgICBwYWRkaW5nOjNyZW07XFxuICAgIGNvbG9yOmFsaWNlYmx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLDIwLDIwLDAuNSk7XFxuICAgIG1hcmdpbjozLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDcm9pc3NhbnQgT25lJywgY3Vyc2l2ZTtcXG59XFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5Om5vbmVcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LWl0ZW0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LWl0ZW0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgIGxldCBpbWFnZXMgPSB7fTtcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICAgIHJldHVybiBpbWFnZXN9XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4vYXNzZXRzL21lbnUnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XG4gICAgY29uc3QgY29udGVudCA9IHtcbiAgICAgICAgXCJoYW1cIjp7XG4gICAgICAgICAgICB1cmw6aW1hZ2VzW1wiaGFtYnVyZ2VyLmpwZ1wiXSxcbiAgICAgICAgICAgIG5hbWU6XCJoYW1idXJnZXJcIixcbiAgICAgICAgICAgIGRlc2NyOiBcIlRoZSBvcmlnaW5hbCBhbmQgZm9yIG1hbnkgc3RpbGwgdGhlIGJlc3RcIlxuICAgICAgICB9LFxuICAgICAgICBcIlR1cmtleVwiOntcbiAgICAgICAgICAgIHVybDppbWFnZXNbXCJUdXJrZXlfYnVyZ2VyLmpwZ1wiXSxcbiAgICAgICAgICAgIG5hbWU6XCJUdXJrZXkgYnVyZ2VyXCIsXG4gICAgICAgICAgICBkZXNjcjpcIlR1cmtleSBpcyBhIGRlbGljaW91cywgdGFzdHkgYW5kIGRyeSBtZWF0IHRoYXQgaXMgcGFja2VkIGZ1bGwgb2YgZmxhdm91ciwgbWFraW5nIGl0IGEgcGVyZmVjdCBhbHRlcm5hdGl2ZSB0byByZWQgbWVhdCBmb3IgYSBidXJnZXIgcGF0dHlcIlxuICAgICAgICB9LFxuICAgICAgICBcIlBvcnRvYmVsbG9cIjp7XG4gICAgICAgICAgICB1cmw6aW1hZ2VzW1wibXVzaHJvb21fYnVyZ2VyLmpwZ1wiXSxcbiAgICAgICAgICAgIG5hbWU6XCJQb3J0b2JlbGxvIG11c2hyb29tIGJ1cmdlclwiLFxuICAgICAgICAgICAgZGVzY3I6XCJTdWJzdGl0dXRpbmcgdGhlIG1lYXQgcGF0dHkgZm9yIGEgZGVsaWNpb3VzLCBtZWF0eSwgdW1hbWktcGFja2VkIGdyaWxsZWQgcG9ydG9iZWxsbyBtdXNocm9vbSB3aWxsIGdpdmUgeW91IGEgdmVnYW4gYnVyZ2VyIHRoYXQgd2lsbCBzYXRpc2Z5IGV2ZW4gdGhlIGh1bmdyaWVzdCBjYXJuaXZvcmUuXCJcblxuICAgICAgICB9LFxuICAgICAgICBcImVsa1wiOntcbiAgICAgICAgICAgIHVybDppbWFnZXNbXCJlbGsuanBnXCJdLFxuICAgICAgICAgICAgbmFtZTpcIkVsayBidXJnZXJcIixcbiAgICAgICAgICAgIGRlc2NyOiBcIkVsayBtZWF0LCByZWNlbnRseSByaXNpbmcgaW4gcG9wdWxhcml0eSBiZWNhdXNlIG9mIGEgY2VydGFpbiBib3ctaHVudGluZyBwb2RjYXN0IGNlbGVicml0eSxcIlxuICAgICAgICB9LFxuICAgICAgICBcInZlZ2dpZVwiOntcbiAgICAgICAgICAgIHVybDppbWFnZXNbXCJ2ZWdpZS5qcGdcIl0sXG4gICAgICAgICAgICBuYW1lOlwiVmVnZ2llIGJ1cmdlclwiLFxuICAgICAgICAgICAgZGVzY3I6IFwiT25jZSB0aGUgbG9uZWx5IHJlZnVnZSBvZiB0aGUgb25seSB2ZWdldGFyaWFuIGluIHlvdXIgZ3JvdXAsIHRoZSB2ZWdnaWUgYnVyZ2VyIG5vdyB0aHJlYXRlbnMgdG8ga25vY2sgdGhlIGJlZWYgYnVyZ2VyIG9mZiBpdHMgcGVyY2guXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzYWxtb25cIjp7XG4gICAgICAgICAgICB1cmw6aW1hZ2VzW1wic2FsbW9uLmpwZ1wiXSxcbiAgICAgICAgICAgIG5hbWU6XCJXaWxkIHNhbG1vbiBidXJnZXJcIixcbiAgICAgICAgICAgIGRlc2NyOiBcIk9mIGFsbCBmaXNoLCBzYWxtb24gbWFrZXMgcHJvYmFibHkgdGhlIGJlc3QgZmlzaCBwYXR0eSBmb3IgYSBidXJnZXIuIFRoZSBtYWluIHRoaW5nIHRvIGNvbnNpZGVyIGlzIHRoZSBzb3VyY2Ugb2YgeW91ciBzYWxtb24gYW5kIGluIGdlbmVyYWxcIlxuICAgICAgICB9LFxuICAgIH1cblxuXG5mdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiLFwiaGlkZGVuXCIpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRoYWxmXCIpLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgXG4gICAgZm9yKGNvbnN0IGl0ZW0gaW4gY29udGVudCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGRpdi5jbGFzc05hbWUgPSBcImNhcmRcIlxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBpbWcuc3JjID0gY29udGVudFtpdGVtXS51cmxcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBtYWluLmlubmVySFRNTD0gY29udGVudFtpdGVtXS5uYW1lXG4gICAgICAgIGNvbnN0IHN1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgc3ViLmlubmVySFRNTCA9IGA8cD4ke2NvbnRlbnRbaXRlbV0uZGVzY3J9PC9wPmBcbiAgICAgICAgc3ViLmNsYXNzTmFtZSA9IFwiZm9jdXMtY29udGVudFwiXG4gICAgICAgIGRpdi5hcHBlbmQoaW1nLG1haW4sc3ViKVxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGRpdilcbiAgICB9XG59XG5cbmV4cG9ydCB7TWVudX1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9UdXJrZXlfYnVyZ2VyLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9tZW51L1R1cmtleV9idXJnZXIuanBnXCIsXG5cdFwiLi9lbGsuanBnXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvZWxrLmpwZ1wiLFxuXHRcIi4vaGFtYnVyZ2VyLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9tZW51L2hhbWJ1cmdlci5qcGdcIixcblx0XCIuL211c2hyb29tX2J1cmdlci5qcGdcIjogXCIuL3NyYy9hc3NldHMvbWVudS9tdXNocm9vbV9idXJnZXIuanBnXCIsXG5cdFwiLi9zYWxtb24uanBnXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvc2FsbW9uLmpwZ1wiLFxuXHRcIi4vdmVnaWUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL21lbnUvdmVnaWUuanBnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9tZW51IHN5bmMgXFxcXC4ocG5nJTdDanBlP2clN0NzdmcpJFwiOyIsImltcG9ydCBpY29uMSBmcm9tIFwiLi9hc3NldHMvcGhvbmVpY29uLnBuZ1wiXG5pbXBvcnQgaWNvbjIgZnJvbSBcIi4vYXNzZXRzL2FkZHJlc3MucG5nXCJcbmZ1bmN0aW9uIGNvbnRhY3QoKXtcbiAgICBjb25zdCBwaG9uZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgIHBob25lSWNvbi5zcmMgPSBpY29uMVxuICAgIHBob25lSWNvbi5jbGFzc05hbWUgPSBcInBob25laWNvblwiXG4gICAgY29uc3QgYWRkcmVzc0ljb24gPSBuZXcgSW1hZ2UoKVxuICAgIGFkZHJlc3NJY29uLnNyYyA9IGljb24yXG4gICAgYWRkcmVzc0ljb24uY2xhc3NOYW1lID0gXCJwaG9uZWljb25cIlxuICAgIGNvbnN0IGNvbnRhY3RDT04gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGFjdENPTi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiLFwiaGlkZGVuXCIpXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcGhvbmUuaW5uZXJIVE1MID0gYDxoMT5QaG9uZSBudW1iZXIgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcIm51bVwiPjAxMTUtMjM0NS01OTY4IDwvZGl2PmBcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZUljb24pXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9IGA8aDE+QWRkcmVzcyA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibnVtXCI+NjQ0IE5FLiBMaW5jb2xuIFN0Lkdlcm1hbnRvd24sIE1EIDIwODc0IDwvZGl2PmBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0ljb24pXG4gICAgY29udGFjdENPTi5hcHBlbmQocGhvbmUsYWRkcmVzcylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZGhhbGZcIikuYXBwZW5kQ2hpbGQoY29udGFjdENPTilcbn1cblxuZXhwb3J0IHtjb250YWN0fSIsIlxuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaG9tZS5jbGFzc0xpc3QudG9nZ2xlKFwiaG9tZVwiKVxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcInRoaXMgaXMgcGFwYSBidXJnZXIgdGhlIGJlc3QgYnVyZ2VyIHNlbGxlciBMb3JlbSBpcHN1bSBkb2xvciBzaXRhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFuaW1pIGluLCBuZXF1ZSwgZGlnbmlzc2ltb3NwZXJzcGljaWF0aXMgaWxsbyBkZXNlcnVudCB0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBbmltaSBpbiwgbmVxdWUsZGlnbmlzc2ltb3MgcGVyc3BpY2lhdGlzIGlsbG8gZGVzZXJ1bnQgYWRpcGlzaWNpbmcgZWxpdC4gQW5pbWkgaW4sbmVxdWUsIGRpZ25pc3NpbW9zIHBlcnNwaWNpYXRpcyBpbGxvIGRlc2VydW50XCJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY29uZGhhbGZcIikuYXBwZW5kQ2hpbGQoaG9tZSlcbn1cblxuXG5mdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmNsYXNzTGlzdC50b2dnbGUgPSBcImhpZFwiXG59XG5cbmV4cG9ydHtob21lLHRvZ2dsZX0gIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgIFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IFwiLi9idXR0b24uY3NzXCJcbmltcG9ydCBcIi4vbWVudS1pdGVtLmNzc1wiXG5pbXBvcnQge2hvbWUsdG9nZ2xlfSBmcm9tIFwiLi9ob21lLmpzXCJcbmltcG9ydCB7Y29udGFjdH0gZnJvbSBcIi4vY29udGFjdFwiXG5pbXBvcnQge01lbnV9IGZyb20gXCIuL01lbnVcIlxuaW1wb3J0IGljb24gZnJvbSBcIi4vYXNzZXRzL2J1cmdlci5wbmdcIlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpXG5jb25zdCBNeUljb24gPSBuZXcgSW1hZ2UoKVxuICAgIE15SWNvbi5zcmMgPSBpY29uXG4gICAgTXlJY29uLmNsYXNzTGlzdCA9IFwiaWNvblwiXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKE15SWNvbilcbmhlYWRlci5pbm5lckhUTUwgKz0gXCJwYXBhIGJ1cmdlclwiXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5ib2R5LmNsYXNzTmFtZSA9IFwiYm9keVwiXG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcbmZvb3Rlci50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBOaWdodFwiXG5cbmNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnNlY29uZC5jbGFzc05hbWUgPSBcInNlY29uZGhhbGZcIlxuXG5jb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmJ0bkdyb3VwLmNsYXNzTmFtZSA9IFwiYnRuZ3JvdXBcIlxuYnRuR3JvdXAuaW5uZXJIVE1MID0gYDxhICBkYXRhLWJ1dCA9IFwiaG9tZVwiIGNsYXNzPVwiYnV0dG9uXCIgaHJlZj1cIiNcIiBzdHlsZT1cIi0tY29sb3I6Z3JheTtcIj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbkhvbWVcbjwvYT5cbjxhIGRhdGEtYnV0ID0gXCJtZW51XCIgY2xhc3M9XCJidXR0b25cIiBocmVmPVwiI1wiIHN0eWxlPVwiLS1jb2xvcjogZ3JheTtcIj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbk1lbnVcbjwvYT5cbjxhIGRhdGEtYnV0ID0gXCJjb250YWN0XCIgY2xhc3M9XCJidXR0b25cIiBocmVmPVwiI1wiIHN0eWxlPVwiLS1jb2xvcjogZ3JheTtcIj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbjxzcGFuPjwvc3Bhbj5cbkNvbnRhY3QgVVNgXG5ib2R5LmFwcGVuZChidG5Hcm91cCxzZWNvbmQpXG5cbmNvbnRlbnQuYXBwZW5kKGhlYWRlcixib2R5LGZvb3RlcilcbmNvbnRhY3QoKTtcbmhvbWUoKTtcbk1lbnUoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIikuZm9yRWFjaCgoYnRuKT0+e1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZXZlbnQpPT57XG4gICAgICAgIHN3aXRjaFRhYihldmVudC50YXJnZXQuZGF0YXNldC5idXQpXG4gICAgfSlcbn0pXG5cbmZ1bmN0aW9uIHN3aXRjaFRhYih0YWIpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIilcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKVxuICAgIGZvcihjb25zdCBibG9jayBvZiBbY29udGFjdCxob21lLG1lbnVdKSB7XG4gICAgICAgIGlmIChibG9jay5jbGFzc0xpc3QuY29udGFpbnModGFiKSl7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgIGVsc2Uge1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=