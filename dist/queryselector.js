!function(r,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():r.Queryselector=e()}(this,function(){"use strict";function r(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}var e=function(e,t){if("string"!=typeof e)throw new Error("Required argument selector is not a String or undefined");var o=t.querySelectorAll(e);return 0!==o.length&&"#"===[].concat(r(e.split(" "))).pop().charAt(0)?o[0]:o};return Node.prototype.$||(window.$=Node.prototype.$=NodeList.prototype.$=function(r){return e(r,this)}),e});