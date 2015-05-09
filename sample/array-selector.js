/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _select2 = __webpack_require__(1);

	var sample = (function () {
	    function sample() {
	        _classCallCheck(this, sample);
	    }

	    _createClass(sample, [{
	        key: 'getResults',
	        value: function getResults() {
	            var $select = new _select2._select();
	            var res = $select.from([1, 2, 3]).where(function (a) {
	                return a === 3 || a === 1;
	            });
	            console.log(res);
	        }
	    }]);

	    return sample;
	})();

	var s = new sample();
	s.getResults();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _where2 = __webpack_require__(2);

	var _select = (function () {
	    function _select() {
	        _classCallCheck(this, _select);
	    }

	    _createClass(_select, [{
	        key: 'from',
	        value: function from(list) {
	            return new _where2._where(list);
	        }
	    }]);

	    return _select;
	})();

	exports._select = _select;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _where = (function () {
	    function _where(list) {
	        _classCallCheck(this, _where);

	        this.list = list;
	    }

	    _createClass(_where, [{
	        key: "where",
	        value: function where(expr) {

	            if (!this.list) {
	                return [];
	            }

	            var res = [];
	            this.list.map(function (i) {

	                if (expr(i) === true) {
	                    res.push(i);
	                }
	            });

	            return res;
	        }
	    }, {
	        key: "first",
	        value: (function (_first) {
	            function first(_x) {
	                return _first.apply(this, arguments);
	            }

	            first.toString = function () {
	                return _first.toString();
	            };

	            return first;
	        })(function (expr) {

	            if (!this.list || this.list.length === 0) {
	                return undefined;
	            }

	            var first = undefined;

	            if (!expr) {
	                return this.list[0];
	            }

	            this.list.map(function (i) {

	                if (expr(i) === true) {
	                    first = i;
	                }
	            });
	            return first;
	        })
	    }]);

	    return _where;
	})();

	exports._where = _where;

/***/ }
/******/ ]);