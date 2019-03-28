/*!
 * @fullpage/react-fullpage 0.1.13
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(13);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_SLIDE; });
var MAIN_SELECTOR='fullpage';var ID_SELECTOR="#".concat(MAIN_SELECTOR);var DEFAULT_SECTION='.section';var DEFAULT_SLIDE='.SLIDE';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(38);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(13)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(12).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(12);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(14);
var ctx = __webpack_require__(40);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(13);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(12);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(29);
var step = __webpack_require__(64);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(63)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(39);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(68).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(74);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(14);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(13);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(42);
var wksDefine = __webpack_require__(43);
var enumKeys = __webpack_require__(72);
var isArray = __webpack_require__(33);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(28);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(67);
var $GOPD = __webpack_require__(66);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(11);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(31).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(42);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(77);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){if(typeof window==='undefined'){return false;}try{var env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(75).default;}else{// NOTE: SSR support
exported=__webpack_require__(48).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.4
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(bt,wt){"use strict";var yt="fullpage-wrapper",Et="."+yt,Lt="fp-responsive",xt="fp-notransition",At="fp-destroyed",Tt="fp-enabled",kt="fp-viewing",Ot="active",Mt="."+Ot,Ct="fp-completely",It="fp-section",Ht="."+It,Bt=Ht+Mt,Rt="fp-tableCell",zt="."+Rt,jt="fp-auto-height",Nt="fp-normal-scroll",Pt="fp-nav",Dt="#"+Pt,Vt="fp-tooltip",Yt="fp-slide",Ft="."+Yt,Ut=Ft+Mt,Wt="fp-slides",Xt="."+Wt,_t="fp-slidesContainer",Kt="."+_t,qt="fp-table",$t="fp-slidesNav",Qt="."+$t,Gt=Qt+" a",e="fp-controlArrow",Jt="."+e,Zt="fp-prev",en=Jt+".fp-prev",tn=Jt+".fp-next";function nn(e,t){bt.console&&bt.console[e]&&bt.console[e]("fullPage: "+t)}function on(e,t){return(t=1<arguments.length?t:wt)?t.querySelectorAll(e):null}function rn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=rn(e[r],o[r]))}return e}function ln(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function an(){return"innerHeight"in bt?bt.innerHeight:wt.documentElement.offsetHeight}function cn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!In(o,t);)o=o[n];return o}function sn(e,t){return n(e,t,"previousElementSibling")}function un(e,t){return n(e,t,"nextElementSibling")}function fn(e){return e.previousElementSibling}function dn(e){return e.nextElementSibling}function vn(e){return e[e.length-1]}function pn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?on(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function hn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function gn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function mn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Sn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function bn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||wt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function wn(e,t){o(e,t,!0)}function yn(e,t){for("string"==typeof t&&(t=Bn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function En(e){for(var t=wt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Ln(e,t){return e&&1===e.nodeType?In(e,t)?e:Ln(e.parentNode,t):null}function xn(e,t){r(e,e.nextSibling,t)}function An(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=Bn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Tn(){var e=wt.documentElement;return(bt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function kn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function On(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Mn(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Cn(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof bt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=wt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function In(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Hn(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Bn(e){var t=wt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Rn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(In(o,t)||null==t)&&r.push(o),o=o[n];return r}function zn(e,t){return a(e,t,"nextElementSibling")}function jn(e,t){return a(e,t,"previousElementSibling")}return bt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||bt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),bt.fp_utils={$:on,deepExtend:rn,hasClass:ln,getWindowHeight:an,css:cn,until:n,prevUntil:sn,nextUntil:un,prev:fn,next:dn,last:vn,index:pn,getList:l,hide:hn,show:gn,isArrayOrList:i,addClass:mn,removeClass:Sn,appendTo:bn,wrap:o,wrapAll:wn,wrapInner:yn,unwrap:En,closest:Ln,after:xn,before:An,insertBefore:r,getScrollTop:Tn,siblings:kn,preventDefault:On,isFunction:Mn,trigger:Cn,matches:In,toggle:Hn,createElementFromHTML:Bn,remove:Rn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:zn,prevAll:jn,showError:nn},function(e,m){var t=m&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(m.licenseKey)||-1<wt.domain.indexOf("alvarotrigo.com");if(!ln(on("html"),Tt)){var r=on("html, body"),S=on("body")[0],a={};m=rn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:bt.fp_scrolloverflow?bt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},m);var b,i,s,u,c=!1,n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),o="ontouchstart"in bt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,f="string"==typeof e?on(e)[0]:e,w=an(),d=!1,l=!0,y=!0,v=[],p={m:{up:!0,down:!0,left:!0,right:!0}};p.k=rn({},p.m);var h,g,E,L,x,A,T,k,O=bt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},M={touchmove:"ontouchmove"in bt?"touchmove":O.move,touchstart:"ontouchstart"in bt?"touchstart":O.down},C='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',I=rn({},m),H=!1;vt(),bt.fp_easings=rn(bt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),f&&(a.version="3.0.4",a.setAutoScrolling=F,a.setRecordHistory=U,a.setScrollingSpeed=W,a.setFitToSection=X,a.setLockAnchors=function(e){m.lockAnchors=e},a.setMouseWheelScrolling=_,a.setAllowScrolling=K,a.setKeyboardScrolling=$,a.moveSectionUp=Q,a.moveSectionDown=G,a.silentMoveTo=J,a.moveTo=Z,a.moveSlideRight=ee,a.moveSlideLeft=te,a.fitToSection=fe,a.reBuild=ne,a.setResponsive=oe,a.getFullpageData=m,a.destroy=function(e){F(!1,"internal"),K(!0),q(!1),$(!1),mn(f,At),clearTimeout(L),clearTimeout(E),clearTimeout(g),clearTimeout(x),clearTimeout(A),bt.removeEventListener("scroll",ue),bt.removeEventListener("hashchange",Re),bt.removeEventListener("resize",Xe),wt.removeEventListener("keydown",je),wt.removeEventListener("keyup",Ne),["click","touchstart"].forEach(function(e){wt.removeEventListener(e,re)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){wt.removeEventListener(e,le,!0)}),clearTimeout(L),clearTimeout(E),e&&(st(0),on("img[data-src], source[data-src], audio[data-src], iframe[data-src]",f).forEach(function(e){ke(e,"src")}),on("img[data-srcset]").forEach(function(e){ke(e,"srcset")}),Rn(on(Dt+", "+Qt+", "+Jt)),cn(on(Ht),{height:"","background-color":"",padding:""}),cn(on(Ft),{width:""}),cn(f,{height:"",position:"","-ms-touch-action":"","touch-action":""}),cn(r,{overflow:"",height:""}),Sn(on("html"),Tt),Sn(S,Lt),S.className.split(/\s+/).forEach(function(e){0===e.indexOf(kt)&&Sn(S,e)}),on(Ht+", "+Ft).forEach(function(e){m.scrollOverflowHandler&&m.scrollOverflow&&m.scrollOverflowHandler.remove(e),Sn(e,qt+" "+Ot+" "+Ct);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),ln(e,It)&&!H&&e.removeAttribute("data-anchor")}),qe(f),[zt,Kt,Xt].forEach(function(e){on(e,f).forEach(function(e){En(e)})}),cn(f,{"-webkit-transition":"none",transition:"none"}),bt.scrollTo(0,0),[It,Yt,_t].forEach(function(e){Sn(on("."+e),e)}))},a.getActiveSection=function(){return new mt(on(Bt)[0])},a.getActiveSlide=function(){return xe(on(Ut,on(Bt)[0])[0])},a.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<on(m.sectionSelector,f).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<on(m.sectionSelector,f).length;t++)e.push(0);return e}(),options:m,setAutoScrolling:F},a.shared={afterRenderActions:se},bt.fullpage_api=a,m.css3&&(m.css3=function(){var e,t=wt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",wt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=bt.getComputedStyle(t).getPropertyValue(n[o]));return wt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),m.scrollBar=m.scrollBar||m.hybrid,function(){if(!m.anchors.length){var e="[data-anchor]",t=on(m.sectionSelector.split(",").join(e+",")+e,f);t.length&&(H=!0,t.forEach(function(e){m.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!m.navigationTooltips.length){var e="[data-tooltip]",n=on(m.sectionSelector.split(",").join(e+",")+e,f);n.length&&n.forEach(function(e){m.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){cn(f,{height:"100%",position:"relative"}),mn(f,yt),mn(on("html"),Tt),w=an(),Sn(f,At),mn(on(m.sectionSelector,f),It),mn(on(m.slideSelector,f),Yt);for(var e=on(Ht),t=0;t<e.length;t++){var n=t,o=e[t],r=on(Ft,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),c=o,(s=n)||null!=on(Bt)[0]||mn(c,Ot),u=on(Bt)[0],cn(c,{height:w+"px"}),m.paddingTop&&cn(c,{"padding-top":m.paddingTop}),m.paddingBottom&&cn(c,{"padding-bottom":m.paddingBottom}),void 0!==m.sectionsColor[s]&&cn(c,{"background-color":m.sectionsColor[s]}),void 0!==m.anchors[s]&&c.setAttribute("data-anchor",m.anchors[s]),l=o,a=n,void 0!==m.anchors[a]&&ln(l,Ot)&&$e(m.anchors[a],a),m.menu&&m.css3&&null!=Ln(on(m.menu)[0],Et)&&S.appendChild(on(m.menu)[0]),0<i?ae(o,r,i):m.verticalCentered&&Ge(o)}var l,a,c,s;m.fixedElements&&m.css3&&on(m.fixedElements).forEach(function(e){S.appendChild(e)}),m.navigation&&function(){var e=wt.createElement("div");e.setAttribute("id",Pt);var t=wt.createElement("ul");e.appendChild(t),bn(e,S);var n=on(Dt)[0];mn(n,"fp-"+m.navigationPosition),m.showActiveTooltip&&mn(n,"fp-show-active");for(var o="",r=0;r<on(Ht).length;r++){var i="";m.anchors.length&&(i=m.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ce(r,"Section")+"</span><span></span></a>";var l=m.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+Vt+" fp-"+m.navigationPosition+'">'+l+"</div>"),o+="</li>"}on("ul",n)[0].innerHTML=o,cn(on(Dt),{"margin-top":"-"+on(Dt)[0].offsetHeight/2+"px"}),mn(on("a",on("li",on(Dt)[0])[pn(on(Bt)[0],Ht)]),Ot)}(),on('iframe[src*="youtube.com/embed/"]',f).forEach(function(e){!function(e,t){var n=e.getAttribute("src");e.setAttribute("src",n+function(e){return/\?/.test(e)?"&":"?"}(n)+t)}(e,"enablejsapi=1")}),m.scrollOverflow&&(h=m.scrollOverflowHandler.init(m))}(),K(!0),q(!0),F(m.autoScrolling,"internal"),_e(),lt(),"complete"===wt.readyState&&Be(),bt.addEventListener("load",Be),m.scrollOverflow||se(),bt.addEventListener("scroll",ue),bt.addEventListener("hashchange",Re),bt.addEventListener("blur",Ye),bt.addEventListener("resize",Xe),wt.addEventListener("keydown",je),wt.addEventListener("keyup",Ne),["click","touchstart"].forEach(function(e){wt.addEventListener(e,re)}),m.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ie(e,!1)}),["mouseleave","touchend"].forEach(function(e){ie(e,!0)})));var B=!1,R=0,z=0,j=0,N=0,P=0,D=(new Date).getTime(),V=0,Y=0;return a}function F(e,t){e||st(0),dt("autoScrolling",e,t);var n=on(Bt)[0];if(m.autoScrolling&&!m.scrollBar)cn(r,{overflow:"hidden",height:"100%"}),U(I.recordHistory,"internal"),cn(f,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&st(n.offsetTop);else if(cn(r,{overflow:"visible",height:"initial"}),U(!1,"internal"),cn(f,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Ae(n.offsetTop);o.element.scrollTo(0,o.options)}}function U(e,t){dt("recordHistory",e,t)}function W(e,t){dt("scrollingSpeed",e,t)}function X(e,t){dt("fitToSection",e,t)}function _(e){e?(function(){var e,t="";bt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in wt.createElement("div")?"wheel":void 0!==wt.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==n?wt[e](t+"MozMousePixelScroll",Se,!1):wt[e](t+n,Se,!1)}(),f.addEventListener("mousedown",Pe),f.addEventListener("mouseup",De)):(wt.addEventListener?(wt.removeEventListener("mousewheel",Se,!1),wt.removeEventListener("wheel",Se,!1),wt.removeEventListener("MozMousePixelScroll",Se,!1)):wt.detachEvent("onmousewheel",Se),f.removeEventListener("mousedown",Pe),f.removeEventListener("mouseup",De))}function K(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){ft(t,e,"m")}):ft(t,"all","m")}function q(e){e?(_(!0),function(){if(n||o){m.autoScrolling&&(S.removeEventListener(M.touchmove,ve,{passive:!1}),S.addEventListener(M.touchmove,ve,{passive:!1}));var e=on(Et)[0];e&&(e.removeEventListener(M.touchstart,ge),e.removeEventListener(M.touchmove,pe,{passive:!1}),e.addEventListener(M.touchstart,ge),e.addEventListener(M.touchmove,pe,{passive:!1}))}}()):(_(!1),function(){if(n||o){m.autoScrolling&&(S.removeEventListener(M.touchmove,pe,{passive:!1}),S.removeEventListener(M.touchmove,ve,{passive:!1}));var e=on(Et)[0];e&&(e.removeEventListener(M.touchstart,ge),e.removeEventListener(M.touchmove,pe,{passive:!1}))}}())}function $(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){ft(t,e,"k")}):(ft(t,"all","k"),m.keyboardScrolling=t)}function Q(){var e=sn(on(Bt)[0],Ht);e||!m.loopTop&&!m.continuousVertical||(e=vn(on(Ht))),null!=e&&ye(e,null,!0)}function G(){var e=un(on(Bt)[0],Ht);e||!m.loopBottom&&!m.continuousVertical||(e=on(Ht)[0]),null!=e&&ye(e,null,!1)}function J(e,t){W(0,"internal"),Z(e,t),W(I.scrollingSpeed,"internal")}function Z(e,t){var n=et(e);void 0!==t?tt(e,t):null!=n&&ye(n)}function ee(e){be("right",e)}function te(e){be("left",e)}function ne(e){if(!ln(f,At)){d=!0,w=an();for(var t=on(Ht),n=0;n<t.length;++n){var o=t[n],r=on(Xt,o)[0],i=on(Ft,o);m.verticalCentered&&cn(on(zt,o),{height:Je(o)+"px"}),cn(o,{height:w+"px"}),1<i.length&&Ue(r,on(Ut,r)[0])}m.scrollOverflow&&h.createScrollBarForAll();var l=pn(on(Bt)[0],Ht);l&&J(l+1),d=!1,Mn(m.afterResize)&&e&&m.afterResize.call(f,bt.innerWidth,bt.innerHeight),Mn(m.afterReBuild)&&!e&&m.afterReBuild.call(f)}}function oe(e){var t=ln(S,Lt);e?t||(F(!1,"internal"),X(!1,"internal"),hn(on(Dt)),mn(S,Lt),Mn(m.afterResponsive)&&m.afterResponsive.call(f,e)):t&&(F(I.autoScrolling,"internal"),X(I.autoScrolling,"internal"),gn(on(Dt)),Sn(S,Lt),Mn(m.afterResponsive)&&m.afterResponsive.call(f,e))}function re(e){var t=e.target;t&&Ln(t,Dt+" a")?function(e){On(e);var t=pn(Ln(this,Dt+" li"));ye(on(Ht)[t])}.call(t,e):In(t,".fp-tooltip")?function(){Cn(fn(this),"click")}.call(t):In(t,Jt)?function(){var e=Ln(this,Ht);ln(this,Zt)?p.m.left&&te(e):p.m.right&&ee(e)}.call(t,e):In(t,Gt)||null!=Ln(t,Gt)?function(e){On(e);var t=on(Xt,Ln(this,Ht))[0],n=on(Ft,t)[pn(Ln(this,"li"))];Ue(t,n)}.call(t,e):Ln(t,m.menu+" [data-menuanchor]")&&function(e){!on(m.menu)[0]||!m.lockAnchors&&m.anchors.length||(On(e),Z(this.getAttribute("data-menuanchor")))}.call(t,e)}function ie(e,t){wt["fp_"+e]=t,wt.addEventListener(e,le,!0)}function le(t){t.target!=wt&&m.normalScrollElements.split(",").forEach(function(e){null!=Ln(t.target,e)&&q(wt["fp_"+t.type])})}function ae(e,t,n){var o=100*n,r=100/n,i=wt.createElement("div");i.className=Wt,wn(t,i);var l=wt.createElement("div");l.className=_t,wn(t,l),cn(on(Kt,e),{width:o+"%"}),1<n&&(m.controlArrows&&function(e){var t=[Bn('<div class="fp-controlArrow fp-prev"></div>'),Bn('<div class="fp-controlArrow fp-next"></div>')];xn(on(Xt,e)[0],t),"#fff"!==m.controlArrowColor&&(cn(on(tn,e),{"border-color":"transparent transparent transparent "+m.controlArrowColor}),cn(on(en,e),{"border-color":"transparent "+m.controlArrowColor+" transparent transparent"})),m.loopHorizontal||hn(on(en,e))}(e),m.slidesNavigation&&function(e,t){bn(Bn('<div class="'+$t+'"><ul></ul></div>'),e);var n=on(Qt,e)[0];mn(n,"fp-"+m.slidesNavPosition);for(var o=0;o<t;o++)bn(Bn('<li><a href="#"><span class="fp-sr-only">'+ce(o,"Slide")+"</span><span></span></a></li>"),on("ul",n)[0]);cn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),mn(on("a",on("li",n)[0]),Ot)}(e,n)),t.forEach(function(e){cn(e,{width:r+"%"}),m.verticalCentered&&Ge(e)});var a=on(Ut,e)[0];null!=a&&(0!==pn(on(Bt),Ht)||0===pn(on(Bt),Ht)&&0!==pn(a))?ct(a,"internal"):mn(t[0],Ot)}function ce(e,t){return m.navigationTooltips[e]||m.anchors[e]||t+" "+(e+1)}function se(){var e=on(Bt)[0];mn(e,Ct),Oe(e),Me(e),m.scrollOverflow&&m.scrollOverflowHandler.afterLoad(),function(){var e=et(ze().section);return!e||void 0!==e&&pn(e)===pn(u)}()&&Mn(m.afterLoad)&&Ee("afterLoad",{activeSection:null,element:e,direction:null,anchorLink:e.getAttribute("data-anchor"),sectionIndex:pn(e,Ht)}),Mn(m.afterRender)&&Ee("afterRender")}function ue(){var e;if(!m.autoScrolling||m.scrollBar){var t=Tn(),n=function(e){var t=R<e?"down":"up";return V=R=e,t}(t),o=0,r=t+an()/2,i=S.offsetHeight-an()===t,l=on(Ht);if(i)o=l.length-1;else if(t)for(var a=0;a<l.length;++a)l[a].offsetTop<=r&&(o=a);else o=0;if(function(e){var t=on(Bt)[0].offsetTop,n=t+an();return"up"!=e?t<=Tn():n>=Tn()+an()}(n)&&(ln(on(Bt)[0],Ct)||(mn(on(Bt)[0],Ct),Sn(kn(on(Bt)[0]),Ct))),!ln(e=l[o],Ot)){B=!0;var c,s,u=on(Bt)[0],f=pn(u,Ht)+1,d=Qe(e),v=e.getAttribute("data-anchor"),p=pn(e,Ht)+1,h=on(Ut,e)[0],g={activeSection:u,sectionIndex:p-1,anchorLink:v,element:e,leavingSection:f,direction:d};h&&(s=h.getAttribute("data-anchor"),c=pn(h)),y&&(mn(e,Ot),Sn(kn(e),Ot),Mn(m.onLeave)&&Ee("onLeave",g),Mn(m.afterLoad)&&Ee("afterLoad",g),Ie(u),Oe(e),Me(e),$e(v,p-1),m.anchors.length&&(b=v),ot(c,s,v)),clearTimeout(x),x=setTimeout(function(){B=!1},100)}m.fitToSection&&(clearTimeout(A),A=setTimeout(function(){m.fitToSection&&on(Bt)[0].offsetHeight<=w&&fe()},m.fitToSectionDelay))}}function fe(){y&&(d=!0,ye(on(Bt)[0]),d=!1)}function de(e){if(p.m[e]){var t="down"===e?G:Q;if(m.scrollOverflow){var n=m.scrollOverflowHandler.scrollable(on(Bt)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!m.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ve(e){m.autoScrolling&&he(e)&&On(e)}function pe(e){var t=Ln(e.target,Ht);if(he(e)){m.autoScrolling&&On(e);var n=at(e);N=n.y,P=n.x,on(Xt,t).length&&Math.abs(j-P)>Math.abs(z-N)?!c&&Math.abs(j-P)>bt.innerWidth/100*m.touchSensitivity&&(P<j?p.m.right&&ee(t):p.m.left&&te(t)):m.autoScrolling&&y&&Math.abs(z-N)>bt.innerHeight/100*m.touchSensitivity&&(N<z?de("down"):z<N&&de("up"))}}function he(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function ge(e){if(m.fitToSection&&(k=!1),he(e)){var t=at(e);z=t.y,j=t.x}}function me(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Se(e){var t=(new Date).getTime(),n=ln(on(".fp-completely")[0],Nt);if(!p.m.down&&!p.m.up)return On(e),!1;if(m.autoScrolling&&!s&&!n){var o=(e=e||bt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<v.length&&v.shift(),v.push(Math.abs(o)),m.scrollBar&&On(e);var a=t-D;if(D=t,200<a&&(v=[]),y){var c=me(v,10);me(v,70)<=c&&l&&de(r<0?"down":"up")}return!1}m.fitToSection&&(k=!1)}function be(e,t){var n=null==t?on(Bt)[0]:t,o=on(Xt,n)[0];if(!(null==o||c||on(Ft,o).length<2)){var r=on(Ut,o)[0],i=null;if(null==(i="left"===e?sn(r,Ft):un(r,Ft))){if(!m.loopHorizontal)return;var l=kn(r);i="left"===e?l[l.length-1]:l[0]}c=!a.test.isTesting,Ue(o,i,e)}}function we(){for(var e=on(Ut),t=0;t<e.length;t++)ct(e[t],"internal")}function ye(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=V<n,i=o-w+t,l=m.bigSectionsDestination;return w<t?(r||l)&&"bottom"!==l||(o=i):(r||d&&null==dn(e))&&(o=i),V=o}(e),yMovement:Qe(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:pn(e,Ht),activeSlide:on(Ut,e)[0],activeSection:on(Bt)[0],leavingSection:pn(on(Bt),Ht)+1,localIsResizing:d};if(!(i.activeSection==e&&!d||m.scrollBar&&Tn()===i.dtop&&!ln(e,jt))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=pn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,Mn(m.onLeave)&&!1===Ee("onLeave",i))return}m.autoScrolling&&m.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?An(on(Bt)[0],zn(e.activeSection,Ht)):xn(on(Bt)[0],jn(e.activeSection,Ht).reverse()),st(on(Bt)[0].offsetTop),we(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=Qe(e.element),e.leavingSection=pn(e.activeSection,Ht)+1,e.sectionIndex=pn(e.element,Ht),e}(i)),i.localIsResizing||Ie(i.activeSection),m.scrollOverflow&&m.scrollOverflowHandler.beforeLeave(),mn(e,Ot),Sn(kn(e),Ot),Oe(e),m.scrollOverflow&&m.scrollOverflowHandler.onLeave(),y=a.test.isTesting,ot(r,o,i.anchorLink,i.sectionIndex),function(e){if(m.css3&&m.autoScrolling&&!m.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Ze(t,!0),m.scrollingSpeed?(clearTimeout(E),E=setTimeout(function(){Te(e)},m.scrollingSpeed)):Te(e)}else{var n=Ae(e.dtop);a.test.top=-e.dtop+"px",pt(n.element,n.options,m.scrollingSpeed,function(){m.scrollBar?setTimeout(function(){Te(e)},30):Te(e)})}}(i),b=i.anchorLink,$e(i.anchorLink,i.sectionIndex)}}}function Ee(e,t){var n=function(e,t){var n;return(n=m.v2compatible?{afterRender:function(){return[f]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Le(on(Bt)[0]),slide:xe(on(Ut,on(Bt)[0])[0])}},onLeave:function(){return{origin:Le(t.activeSection),destination:Le(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Le(t.section),origin:xe(t.prevSlide),destination:xe(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(m.v2compatible){if(!1===m[e].apply(n[0],n.slice(1)))return!1}else if(Cn(f,e,n),!1===m[e].apply(n[Object.keys(n)[0]],function(t){return Object.keys(t).map(function(e){return t[e]})}(n)))return!1;return!0}function Le(e){return e?new mt(e):null}function xe(e){return e?new St(e):null}function Ae(e){var t={};return m.autoScrolling&&!m.scrollBar?(t.options=-e,t.element=on(Et)[0]):(t.options=e,t.element=bt),t}function Te(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?An(on(Ht)[0],e.wrapAroundElements):xn(on(Ht)[on(Ht).length-1],e.wrapAroundElements),st(on(Bt)[0].offsetTop),we())}(e),Mn(m.afterLoad)&&!e.localIsResizing&&Ee("afterLoad",e),m.scrollOverflow&&m.scrollOverflowHandler.afterLoad(),e.localIsResizing||Me(e.element),mn(e.element,Ct),Sn(kn(e.element),Ct),y=!0,Mn(e.callback)&&e.callback()}function ke(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Oe(e){m.lazyLoading&&on("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",He(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&ke(n,e)}),In(n,"source")){var e=Ln(n,"video, audio");e&&e.load()}})}function Me(e){var t=He(e);on("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),on('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ce(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ce(e)}})}function Ce(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ie(e){var t=He(e);on("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),on('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function He(e){var t=on(Ut,e);return t.length&&(e=t[0]),e}function Be(){var e=ze(),t=e.section,n=e.slide;t&&(m.animateAnchor?tt(t,n):J(t,n))}function Re(){if(!B&&!m.lockAnchors){var e=ze(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!c;t&&t.length&&(t&&t!==b&&!o||r||!c&&i!=n)&&tt(t,n)}}function ze(){var e,t,n=bt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function je(e){clearTimeout(T);var t=wt.activeElement,n=e.keyCode;9===n?function(e){var t=e.shiftKey,n=wt.activeElement,o=Ve(He(on(Bt)[0]));function r(e){return On(e),o[0]?o[0].focus():null}(function(e){var t=Ve(wt),n=t.indexOf(wt.activeElement),o=e.shiftKey?n-1:n+1,r=t[o],i=xe(Ln(r,Ft)),l=Le(Ln(r,Ht));return!i&&!l})(e)||(n?null==Ln(n,Bt+","+Bt+" "+Ut)&&(n=r(e)):r(e),(!t&&n==o[o.length-1]||t&&n==o[0])&&On(e))}(e):In(t,"textarea")||In(t,"input")||In(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!m.keyboardScrolling||!m.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&On(e),s=e.ctrlKey,T=setTimeout(function(){!function(e){var t=e.shiftKey;if(y||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:p.k.up&&Q();break;case 32:if(t&&p.k.up){Q();break}case 40:case 34:p.k.down&&G();break;case 36:p.k.up&&Z(1);break;case 35:p.k.down&&Z(on(Ht).length);break;case 37:p.k.left&&te();break;case 39:p.k.right&&ee()}}(e)},150))}function Ne(e){l&&(s=e.ctrlKey)}function Pe(e){2==e.which&&(Y=e.pageY,f.addEventListener("mousemove",Fe))}function De(e){2==e.which&&f.removeEventListener("mousemove",Fe)}function Ve(e){return[].slice.call(on(C,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function Ye(){s=l=!1}function Fe(e){y&&(e.pageY<Y&&p.m.up?Q():e.pageY>Y&&p.m.down&&G()),Y=e.pageY}function Ue(e,t,n){var o=Ln(e,Ht),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:pn(t),section:o,sectionIndex:pn(o,Ht),anchorLink:o.getAttribute("data-anchor"),slidesNav:on(Qt,o)[0],slideAnchor:it(t),prevSlide:on(Ut,o)[0],prevSlideIndex:pn(on(Ut,o)[0]),localIsResizing:d};r.xMovement=function(e,t){return e==t?"none":t<e?"left":"right"}(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(y=!1),m.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&Mn(m.onSlideLeave)&&!1===Ee("onSlideLeave",r)?c=!1:(mn(t,Ot),Sn(kn(t),Ot),r.localIsResizing||(Ie(r.prevSlide),Oe(t)),!m.loopHorizontal&&m.controlArrows&&(Hn(on(en,o),0!==r.slideIndex),Hn(on(tn,o),null!=dn(t))),ln(o,Ot)&&!r.localIsResizing&&ot(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),function(e,t,n){var o=t.destinyPos;if(m.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";a.test.translate3dH[t.sectionIndex]=r,cn(Ke(on(Kt,e)),ut(r)),L=setTimeout(function(){n&&We(t)},m.scrollingSpeed)}else a.test.left[t.sectionIndex]=Math.round(o.left),pt(e,Math.round(o.left),m.scrollingSpeed,function(){n&&We(t)})}(e,r,!0))}function We(e){!function(e,t){m.slidesNavigation&&null!=e&&(Sn(on(Mt,e),Ot),mn(on("a",on("li",e)[t]),Ot))}(e.slidesNav,e.slideIndex),e.localIsResizing||(Mn(m.afterSlideLoad)&&Ee("afterSlideLoad",e),y=!0,Me(e.destiny)),c=!1}function Xe(){if(_e(),n){wt.activeElement;an();g=setTimeout(function(){ne(!0)},navigator.userAgent.match("CriOS")?50:0)}else clearTimeout(g),g=setTimeout(function(){ne(!0)},350)}function _e(){var e=m.responsive||m.responsiveWidth,t=m.responsiveHeight,n=e&&bt.innerWidth<e,o=t&&bt.innerHeight<t;e&&t?oe(n||o):e?oe(n):t&&oe(o)}function Ke(e){var t="all "+m.scrollingSpeed+"ms "+m.easingcss3;return Sn(e,xt),cn(e,{"-webkit-transition":t,transition:t})}function qe(e){return mn(e,xt)}function $e(e,t){!function(e){var t=on(m.menu)[0];m.menu&&null!=t&&(Sn(on(Mt,t),Ot),mn(on('[data-menuanchor="'+e+'"]',t),Ot))}(e),function(e,t){m.navigation&&null!=on(Dt)[0]&&(Sn(on(Mt,on(Dt)[0]),Ot),mn(e?on('a[href="#'+e+'"]',on(Dt)[0]):on("a",on("li",on(Dt)[0])[t]),Ot))}(e,t)}function Qe(e){var t=pn(on(Bt)[0],Ht),n=pn(e,Ht);return t==n?"none":n<t?"up":"down"}function Ge(e){if(!ln(e,qt)){var t=wt.createElement("div");t.className=Rt,t.style.height=Je(e)+"px",mn(e,qt),yn(e,t)}}function Je(e){var t=w;if(m.paddingTop||m.paddingBottom){var n=e;ln(n,It)||(n=Ln(e,Ht));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=w-o}return t}function Ze(e,t){t?Ke(f):qe(f),cn(f,ut(e)),a.test.translate3d=e,setTimeout(function(){Sn(f,xt)},10)}function et(e){var t=on(Ht+'[data-anchor="'+e+'"]',f)[0];if(!t){var n=void 0!==e?e-1:0;t=on(Ht)[n]}return t}function tt(e,t){var n=et(e);if(null!=n){var o=function(e,t){var n=on(Ft+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=on(Ft,t)[e]),n}(t,n);it(n)===b||ln(n,Ot)?nt(o):ye(n,function(){nt(o)})}}function nt(e){null!=e&&Ue(Ln(e,Xt),e)}function ot(e,t,n,o){var r="";m.anchors.length&&!m.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),rt(r+"/"+(i=t))):(null!=e&&(i=t),rt(n))),lt()}function rt(e){if(m.recordHistory)location.hash=e;else if(n||o)bt.history.replaceState(void 0,void 0,"#"+e);else{var t=bt.location.href.split("#")[0];bt.location.replace(t+"#"+e)}}function it(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=pn(e);return null==t&&(t=n),t}function lt(){var e=on(Bt)[0],t=on(Ut,e)[0],n=it(e),o=it(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+kt+"-[^\\s]+\\b","g");S.className=S.className.replace(i,""),mn(S,kt+"-"+r)}function at(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,o&&he(e)&&m.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function ct(e,t){W(0,"internal"),void 0!==t&&(d=!0),Ue(Ln(e,Xt),e),void 0!==t&&(d=!1),W(I.scrollingSpeed,"internal")}function st(e){var t=Math.round(e);if(m.css3&&m.autoScrolling&&!m.scrollBar)Ze("translate3d(0px, -"+t+"px, 0px)",!1);else if(m.autoScrolling&&!m.scrollBar)cn(f,{top:-t+"px"}),a.test.top=-t+"px";else{var n=Ae(t);ht(n.element,n.options)}}function ut(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ft(t,e,n){"all"!==e?p[n][e]=t:Object.keys(p[n]).forEach(function(e){p[n][e]=t})}function dt(e,t,n){m[e]=t,"internal"!==n&&(I[e]=t)}function vt(){t||(nn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),nn("error","https://github.com/alvarotrigo/fullPage.js#options.")),ln(on("html"),Tt)?nn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(m.continuousVertical&&(m.loopTop||m.loopBottom)&&(m.continuousVertical=!1,nn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!m.scrollOverflow||!m.scrollBar&&m.autoScrolling||nn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!m.continuousVertical||!m.scrollBar&&m.autoScrolling||(m.continuousVertical=!1,nn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),m.scrollOverflow&&null==m.scrollOverflowHandler&&(m.scrollOverflow=!1,nn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"].forEach(function(e){m[e]&&nn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),m.anchors.forEach(function(t){var e=[].slice.call(on("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(on("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(nn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&nn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&nn("error",'"'+t+'" is is being used by another element `name` property'))}))}function pt(t,n,o,r){var i=function(e){return e.self!=bt&&ln(e,Wt)?e.scrollLeft:!m.autoScrolling||m.scrollBar?Tn():e.offsetTop}(t),l=n-i,a=0;k=!0;var c=function(){if(k){var e=n;a+=20,o&&(e=bt.fp_easings[m.easing](a,i,l,o)),ht(t,e),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function ht(e,t){!m.autoScrolling||m.scrollBar||e.self!=bt&&ln(e,Wt)?e.self!=bt&&ln(e,Wt)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function gt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=pn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function mt(e){gt.call(this,e,Ht)}function St(e){gt.call(this,e,Ft)}vt()}}),window.jQuery&&window.fullpage&&function(n,o){"use strict";n&&o?n.fn.fullpage=function(e){var t=new o(this[0],e);Object.keys(t).forEach(function(e){n.fn.fullpage[e]=t[e]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=fullpage.min.js.map


/***/ }),
/* 50 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(50);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.4\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(53);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(33);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(55);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(40);
var IObject = __webpack_require__(38);
var toObject = __webpack_require__(20);
var toLength = __webpack_require__(36);
var asc = __webpack_require__(56);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(15);
var $find = __webpack_require__(57)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(29)(KEY);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(12);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(20);
var $keys = __webpack_require__(11);

__webpack_require__(59)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(20);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(32);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(14);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(62);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(30);
var getKeys = __webpack_require__(11);
var redefine = __webpack_require__(14);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(21);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(22);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(31).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(11);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(70);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(22);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(13)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(49);_this.state={initialized:false,sectionCount:0,slideCount:0};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){this.log('React Lifecycle: componentDidUpdate()');var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// NOTE: if fullpage props have changed we need to rebuild
if(this.props.sectionsColor!==prevProps.sectionsColor){this.log('rebuilding due to a change in fullpage.js props');this.destroy();this.init(this.buildOptions());return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.destroy();this.init(this.buildOptions());}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?_selectors__WEBPACK_IMPORTED_MODULE_9__[/* DEFAULT_SECTION */ "a"]:_this$props$sectionSe;var _document$querySelect=document.querySelectorAll(sectionSelector),length=_document$querySelect.length;return length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?_selectors__WEBPACK_IMPORTED_MODULE_9__[/* DEFAULT_SLIDE */ "b"]:_this$props$slideSele;var _document$querySelect2=document.querySelectorAll(slideSelector),length=_document$querySelect2.length;return length;}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage(_selectors__WEBPACK_IMPORTED_MODULE_9__[/* ID_SELECTOR */ "c"],opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props2;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props2=this.props)[lastEvent].apply(_this$props2,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_9__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(3);
var redefine = __webpack_require__(14);
var fails = __webpack_require__(7);
var defined = __webpack_require__(27);
var wks = __webpack_require__(0);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(76)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })
/******/ ]);