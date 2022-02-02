!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var r=t(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),e.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.container h1 {\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n\n  margin-bottom: 40px;\n  font-weight: bold;\n\n  letter-spacing:4px;\n}\n\n.container button {\n  border: 3px solid var(--primary-color);\n  padding: 15px 20%;\n\n  border-radius: 4px;\n\n\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&r[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="(".concat(c[2],") and (").concat(t,")")),e.push(c))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function c(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function u(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(h(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(n,e){var t,r,o;if(e.singleton){var i=v++;t=m||(m=s(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=c(n,e);return u(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],s=o[a.id];s&&(s.refs--,r.push(s))}n&&u(c(n,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var o=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{enumerable:!0,writable:!1,configurable:!1,value:e.replace(/\D+/g,"")})}var e,t,o;return e=n,o=[{key:"criaDigito",value:function(n){var e=Array.from(n),t=e.length+1,r=11-e.reduce((function(n,e){return n+=t*Number(e),t--,n}),0)%11;return r>9?"0":String(r)}}],(t=[{key:"isSequencia",value:function(){return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo}},{key:"valida",value:function(){if(void 0===this.cpfLimpo)return!1;if(11!==this.cpfLimpo.length)return!1;if(this.isSequencia())return!1;var e=this.cpfLimpo.slice(0,-2),t=n.criaDigito(e);return e+t+n.criaDigito(e+t)===this.cpfLimpo}}])&&r(e.prototype,t),o&&r(e,o),n}();function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}console.log("Cheguei aqui");var a=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(e-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(0,3)}},{key:"geraNovoCPF",value:function(){var n=this.rand(),e=o.criaDigito(n),t=n+e+o.criaDigito(n+e);return this.formatado(t)}}])&&i(e.prototype,t),r&&i(e,r),n}();t(0);document.querySelector(".cria").addEventListener("click",(function(n){var e;e=new a,document.querySelector(".cpf-gerado").innerHTML=e.geraNovoCPF()}))}]);
//# sourceMappingURL=bundle.js.map