/*! For license information please see index.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{var t={184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},334:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,".btn{width:100px;padding:10px 18px;border-radius:7px;border:none;font-size:14px;cursor:pointer;margin:.3rem}.btn-primary{background-color:#4c88f3;color:#fff}",""]);const s=a},257:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,".my-input{border:none;outline:none}.my-input[type=text],.my-input[type=number],.my-input[type=email]{padding:10px 20px;border:1px solid #d4dde3;border-radius:7px;width:20%;font-size:14px}.my-input::placeholder{font-size:14px}.my-input-block[type=text],.my-input-block[type=number],.my-input-block[type=email]{width:100%}.my-input[type=text]:hover,.my-input[type=number]:hover,.my-input[type=email]:hover,.my-input[type=text]:focus,.my-input[type=number]:focus,.my-input[type=email]:focus{box-shadow:0 0 2px 0 #4c88f3}.my-input-column{display:flex;flex-direction:column;align-items:flex-start}.label{margin:0 10px 10px 0}",""]);const s=a},800:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,"*{margin:0;padding:0;box-sizing:border-box}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},657:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(379),o=r.n(n),i=r(795),a=r.n(i),s=r(569),u=r.n(s),c=r(565),l=r.n(c),p=r(216),d=r.n(p),f=r(589),y=r.n(f),m=r(334),b={};b.styleTagTransform=y(),b.setAttributes=l(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(m.Z,b);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},839:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(379),o=r.n(n),i=r(795),a=r.n(i),s=r(569),u=r.n(s),c=r(565),l=r.n(c),p=r(216),d=r.n(p),f=r(589),y=r.n(f),m=r(257),b={};b.styleTagTransform=y(),b.setAttributes=l(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(m.Z,b);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},620:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(379),o=r.n(n),i=r(795),a=r.n(i),s=r(569),u=r.n(s),c=r(565),l=r.n(c),p=r(216),d=r.n(p),f=r(589),y=r.n(f),m=r(800),b={};b.styleTagTransform=y(),b.setAttributes=l(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(m.Z,b);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var u=e[s],c=n.base?u[0]+n.base:u[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=r(p),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var y=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:y,references:1})}a.push(p)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var u=n(e,o),c=0;c<i.length;c++){var l=r(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},683:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(r(156));r(657),r(620);const a=o(r(184));t.default=e=>{var{variant:t,disabled:r,outline:o,block:s}=e,u=n(e,["variant","disabled","outline","block"]);const c=(0,a.default)(["btn",{[`btn-${t}`]:t,"btn-disabled":r,[`btn-outline-${t}`]:t&&o,"my-button-large":s}]);return i.default.createElement("button",Object.assign({},u,{className:c}),u.label)}},196:function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=o(r(156));r(839),r(620);const a=o(r(184));t.default=e=>{var{type:t,column:r,block:o}=e,s=n(e,["type","column","block"]);const u=(0,a.default)(["my-input"],{"my-input-block":o}),c=(0,a.default)({"my-input-column":r});return i.default.createElement("div",{className:c,style:{margin:"1rem"}},i.default.createElement("label",{className:"label"}," ",s.label," "),i.default.createElement("input",Object.assign({type:"text"},s,{className:u})))}},607:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=t.Button=void 0;const o=n(r(683));t.Button=o.default;const i=n(r(196));t.Input=i.default},156:t=>{"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(607)})()));