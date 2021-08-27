(window["webpackJsonp_info_screen"] = window["webpackJsonp_info_screen"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_info_screen"] = window["webpackJsonp_info_screen"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/InfoScreen/GoogleMapsRow.js":
/*!*****************************************!*\
  !*** ./src/InfoScreen/GoogleMapsRow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleMapsRow; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");


function GoogleMapsRow({
  content
}) {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.googleMapsClassesOuter(content.size)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.googleMapsClassesInner(),
    id: "google-map"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "This is the google maps row")));
}

/***/ }),

/***/ "./src/InfoScreen/InfoImage.js":
/*!*************************************!*\
  !*** ./src/InfoScreen/InfoImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoImage; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");


function InfoImage({
  content
}) {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.infoImageClassesOuter(content.size)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("image", {
    src: content.contents.url,
    className: style.infoImageClassesInner(content.size)
  }));
}

/***/ }),

/***/ "./src/InfoScreen/InfoSection.js":
/*!***************************************!*\
  !*** ./src/InfoScreen/InfoSection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoSection; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");
/* harmony import */ var _TitleRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TitleRow */ "./src/InfoScreen/TitleRow.js");
/* harmony import */ var _KeyValueRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyValueRow */ "./src/InfoScreen/KeyValueRow.js");
/* harmony import */ var _ListTextRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListTextRow */ "./src/InfoScreen/ListTextRow.js");





function InfoSection({
  content
}) {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.infoSectionOuterClasses(content.size)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.infoSectionInnerClasses(content.size),
    style: style.infoSectionStyle()
  }, content.contents.map((content, i) => {
    if (content.type === 'title') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_TitleRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        content: content
      });
    } else if (content.type === 'keyValue') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_KeyValueRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content
      });
    } else if (content.type === 'textlist') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ListTextRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        content: content
      });
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    }
  })));
}

/***/ }),

/***/ "./src/InfoScreen/KeyValueRow.js":
/*!***************************************!*\
  !*** ./src/InfoScreen/KeyValueRow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyValueRow; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");


function KeyValueRow({
  content
}) {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, content.hrt ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, `${content.key ? `${content.key} ` : ''}${content.value}`));
}

/***/ }),

/***/ "./src/InfoScreen/ListTextRow.js":
/*!***************************************!*\
  !*** ./src/InfoScreen/ListTextRow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListTextRow; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");


function ListTextRow({
  content
}) {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, content.hrt ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    style: style.listTextInnerStyle({
      columns: content.columns
    }),
    className: style.listTextClassesInner()
  }, content.values.map((value, i) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, value));
  })));
}

/***/ }),

/***/ "./src/InfoScreen/TitleRow.js":
/*!************************************!*\
  !*** ./src/InfoScreen/TitleRow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleRow; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");


function TitleRow({
  content
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "section-title-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "title"
  }, content.title), content.subtitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, content.subtitle) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null));
}

/***/ }),

/***/ "./src/InfoScreen/index.js":
/*!*********************************!*\
  !*** ./src/InfoScreen/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoScreen; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoData */ "./src/InfoScreen/infoData.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/InfoScreen/style.js");
/* harmony import */ var _InfoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoSection */ "./src/InfoScreen/InfoSection.js");
/* harmony import */ var _InfoImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoImage */ "./src/InfoScreen/InfoImage.js");
/* harmony import */ var _GoogleMapsRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GoogleMapsRow */ "./src/InfoScreen/GoogleMapsRow.js");






function InfoScreen() {
  let style = Object(_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: style.outerClasses()
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, _infoData__WEBPACK_IMPORTED_MODULE_1__["default"].screenTitle), _infoData__WEBPACK_IMPORTED_MODULE_1__["default"].contents.map((content, i) => {
    if (content.type === 'text') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
        content: content
      });
    } else if (content.type === 'image') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        content: content
      });
    } else if (content.type === 'googleMap') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_GoogleMapsRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
        content: content
      });
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    }
  }));
}

/***/ }),

/***/ "./src/InfoScreen/infoData.js":
/*!************************************!*\
  !*** ./src/InfoScreen/infoData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let info = {
  screenTitle: 'Info and Credentials',
  contents: [{
    /* Data object */
    type: 'image',
    size: {
      xl: 4,
      lg: 4,
      md: 4,
      sm: 4,
      xs: 12
    },
    contents: {
      url: 'https://lmftanthony.com/wp-content/uploads/2021/08/AnthonyBio.jpg'
    }
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 8,
      lg: 8,
      md: 8,
      sm: 8,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'Anthony Cavuoti',
      subtitle: 'Psychotherapist'
    }, {
      type: 'keyValue',
      key: 'Phone:',
      value: '310-214-0525',
      hrt: true
    }, {
      type: 'keyValue',
      key: 'Email:',
      value: 'mftanthony@yahoo.com',
      hrt: true
    }, {
      type: 'keyValue',
      key: 'Credentials:',
      value: 'Licensed Marriage and Family Therapist - 33082',
      hrt: true
    }, {
      type: 'keyValue',
      key: 'Fees:',
      value: '100 to 150, sliding scale.',
      hrt: true
    }]
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'Billing and Insurance',
      subtitle: 'I am an in-network provider for'
    }, {
      type: 'keyValue',
      value: 'Beacon',
      hrt: true
    }, {
      type: 'keyValue',
      value: 'Cigna',
      hrt: false
    }]
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'SERVICES I PROVIDE',
      subtitle: 'Home-Based Therapy'
    }, {
      type: 'keyValue',
      value: 'Home-Based Therapy',
      hrt: true
    }, {
      type: 'keyValue',
      value: 'Telehealth',
      hrt: false
    }, {
      type: 'keyValue',
      value: 'Individual Therapy & Counseling',
      hrt: false
    }]
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'OFFICES',
      subtitle: '22219 Polos Verdes Boulevard'
    }, {
      type: 'keyValue',
      value: 'Torrance , California 90505',
      hrt: true
    }]
  }, {
    /* Data object */
    type: 'googleMap',
    size: {
      xl: 6,
      lg: 6,
      md: 6,
      sm: 6,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'OFFICES',
      subtitle: '22219 Polos Verdes Boulevard'
    }, {
      type: 'keyValue',
      value: 'Torrance , California 90505',
      hrt: true
    }]
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'Bio'
    }, {
      type: 'keyValue',
      value: 'Your feelings of uneasiness are warning you that your mind is not align with your heart. Your anxiety, depression, lack of satisfaction is your brain’s way of protecting you from pain, but the pain of not being who you are is worse than the pain of feeling what you must do to become who you are. What do you want? What are you afraid of?',
      hrt: false
    }, {
      type: 'keyValue',
      value: 'What comes to mind when imagining doing what you really want to do. What is running through your body now? Seriously imagine doing what you really want to do, what you really want to be and or express and doing it anyways, not caring about what anyone thinks, what’s running through your body now.',
      hrt: false
    }]
  }, {
    /* Data object */
    type: 'text',
    size: {
      xl: 6,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'CLIENT CONCERNS I TREAT'
    }, {
      type: 'textlist',
      columns: '2',
      values: ['Abuse / Abuse Survivor Issues', 'Adjusting to Change / Life Transitions', 'Attachment Issues', 'Identity Issues', 'Individuation', 'LGBT (Lesbian, Gay, Bisexual, and Transgender) Issues', 'Life Purpose / Meaning / Inner-Guidance', 'Midlife Crisis / Midlife Transition', 'Self-Actualization', 'Sexuality / Sex Therapy', 'Spirituality', 'Trust Issues', 'Young Adult Issues'],
      hrt: true
    }]
  },, {
    /* Data object */
    type: 'text',
    size: {
      xl: 6,
      lg: 12,
      md: 12,
      sm: 12,
      xs: 12
    },
    contents: [{
      type: 'title',
      title: 'TYPES OF THERAPY'
    }, {
      type: 'textlist',
      columns: '2',
      values: ['Attachment-Based Family Therapy (ABFT)', 'Core Process Psychotherapy (CPP)', 'Emotion Focused Therapy', 'Family Systems Therapy', 'Intensive Short-Term Dynamic Psychotherapy (ISTDP)', 'Person-Centered Therapy (Rogerian Therapy)', 'Transpersonal Psychotherapy'],
      hrt: true
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (info);

/***/ }),

/***/ "./src/InfoScreen/style.js":
/*!*********************************!*\
  !*** ./src/InfoScreen/style.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return style; });
function style() {
  return {
    outerClasses: () => {
      let classes = 'info-section-container pe-3 pb-3';
      return classes;
    },
    infoSectionOuterClasses: size => {
      let classes = `info-section-outer`;
      classes += getColsFromSizeObj(size);
      return classes;
    },
    infoSectionInnerClasses: size => {
      let classes = `info-section-inner generic-section-container`;
      return classes;
    },
    infoSectionStyle: () => {},
    infoImageClassesOuter: size => {
      let classes = 'info-image-outer';
      classes += getColsFromSizeObj(size);
      return classes;
    },
    infoImageClassesInner: size => {
      let classes = 'info-image-inner generic-section-container';
      return classes;
    },
    googleMapsClassesOuter: size => {
      let classes = 'google-maps-outer';
      classes += getColsFromSizeObj(size);
      return classes;
    },
    googleMapsClassesInner: () => {
      let classes = 'google-maps-inner generic-section-container';
      return classes;
    },
    listTextClassesOuter: size => {
      let classes = 'list-text-outer';
      return classes;
    },
    listTextClassesInner: () => {
      let classes = 'list-text-inner';
      return classes;
    },
    listTextInnerStyle: ({
      columns
    } = {}) => {
      console.log('columns: ' + columns);

      if (columns.indexOf('px') >= 0) {
        columns = columns.split('px')[0];
      }

      return {
        columns: columns
      };
    }
  };
}

function getColsFromSizeObj(size) {
  let classes = ` col-${size.xs} col-sm-${size.sm} col-md-${size.md} col-lg-${size.xl}`;
  return classes;
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoScreen */ "./src/InfoScreen/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoScreen__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/info-screen', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InfoScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoScreen */ "./src/InfoScreen/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_InfoScreen__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map