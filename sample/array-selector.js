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
	            }).toArray();
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

	var _query2 = __webpack_require__(2);

	var _select = (function () {
	    function _select() {
	        _classCallCheck(this, _select);
	    }

	    _createClass(_select, [{
	        key: 'from',
	        value: function from(list) {
	            return new _query2._query(list);
	        }
	    }]);

	    return _select;
	})();

	exports._select = _select;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _whereClause2 = __webpack_require__(3);

	var _query = (function () {
	    function _query(list) {
	        _classCallCheck(this, _query);

	        this.list = list;
	    }

	    _createClass(_query, [{
	        key: 'where',
	        value: function where(expr) {

	            var w = new _whereClause2._whereClause(this.list);
	            return w.filter(expr);
	        }
	    }, {
	        key: 'any',
	        value: function any(expr) {

	            var found = false;
	            this.list.some(function (i) {

	                if (expr(i) === true) {
	                    found = true;
	                    return false;
	                }
	            });

	            return found;
	        }
	    }, {
	        key: 'all',
	        value: (function (_all) {
	            function all(_x) {
	                return _all.apply(this, arguments);
	            }

	            all.toString = function () {
	                return _all.toString();
	            };

	            return all;
	        })(function (expr) {

	            var all = true;
	            this.list.some(function (i) {

	                if (expr(i) === false) {
	                    all = false;
	                }
	            });

	            return all;
	        })
	    }, {
	        key: 'first',
	        value: (function (_first) {
	            function first(_x2) {
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

	            this.list.some(function (i) {

	                if (expr(i) === true) {
	                    first = i;
	                    return true;
	                }
	            });

	            return first;
	        })
	    }]);

	    return _query;
	})();

	exports._query = _query;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _queryResult2 = __webpack_require__(4);

	var _whereClause = (function () {
	    function _whereClause(list) {
	        _classCallCheck(this, _whereClause);

	        this.list = list;
	    }

	    _createClass(_whereClause, [{
	        key: 'filter',
	        value: function filter(expr) {

	            var res = [];

	            if (this.list) {
	                this.list.map(function (i) {

	                    if (expr(i) === true) {
	                        res.push(i);
	                    }
	                });
	            }

	            return new _queryResult2._queryResult(res);
	        }
	    }]);

	    return _whereClause;
	})();

	exports._whereClause = _whereClause;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _queryResult = (function () {
	    function _queryResult(list) {
	        _classCallCheck(this, _queryResult);

	        this.list = list;
	    }

	    _createClass(_queryResult, [{
	        key: "toArray",
	        value: function toArray() {
	            return this.list;
	        }
	    }]);

	    return _queryResult;
	})();

	exports._queryResult = _queryResult;

/***/ }
/******/ ]);