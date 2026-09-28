"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=n(function(l,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/stats-strided-smediansorted/dist').ndarray;function f(e){var r=e[0];return m(v(r,0),o(r),q(r,0),d(r))}a.exports=f
});var c=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=t(),i,s=g(c(__dirname,"./native.js"));j(s)?i=p:i=s;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
