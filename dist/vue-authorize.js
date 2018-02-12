module.exports=function(t){function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=7)}([function(t,r,e){"use strict";function n(t){return t.replace(/([\:\-\_]+(.))/g,function(t,r,e,n){return n?e.toUpperCase():e})}function i(t){return void 0===t}function o(t){return void 0!==t}function u(t){return null!==t&&"object"===(void 0===t?"undefined":E(t))}function f(t){return null!==t&&"object"===(void 0===t?"undefined":E(t))&&!d(t)}function s(t){return Array.isArray(t)}function a(t){if(null==t||y(t))return!1;if(s(t)||h(t))return!0;var r="length"in Object(t)&&t.length;return c(r)&&(r>=0&&(r-1 in t||t instanceof Array)||"function"==typeof t.item)}function h(t){return"string"==typeof t}function c(t){return"number"==typeof t}function l(t){return"function"==typeof t}function p(t){return t&&l(t.then)}function y(t){return t&&t.window===t}function d(t){return Object.getPrototypeOf(t)}function g(t,r){return null==t||null==r?t:(Object.keys(r).forEach(function(e){"[object Object]"==Object.prototype.toString.call(r[e])?"[object Object]"!=Object.prototype.toString.call(t[e])?t[e]=r[e]:t[e]=g(t[e],r[e]):t[e]=r[e]}),t)}function v(t,r,e){var n,i;if(t)if(l(t))for(n in t)"prototype"!==n&&"length"!==n&&"name"!==n&&t.hasOwnProperty(n)&&r.call(e,t[n],n,t);else if(s(t)||a(t)){var o="object"!==(void 0===t?"undefined":E(t));for(n=0,i=t.length;n<i;n++)(o||n in t)&&r.call(e,t[n],n,t)}else if(t.forEach&&t.forEach!==v)t.forEach(r,e,t);else if(f(t))for(n in t)r.call(e,t[n],n,t);else if("function"==typeof t.hasOwnProperty)for(n in t)t.hasOwnProperty(n)&&r.call(e,t[n],n,t);else for(n in t)hasOwnProperty.call(t,n)&&r.call(e,t[n],n,t);return t}function w(t,r){if(/^(?:[a-z]+:)?\/\//i.test(r))return r;var e=[t,r].join("/");return function(t){return t.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")}(e)}function b(t){var r="https:"===t.protocol;return t.protocol+"//"+t.hostname+":"+(t.port||(r?"443":"80"))+(/^\//.test(t.pathname)?t.pathname:"/"+t.pathname)}function m(t){var r={},e=void 0,n=void 0;return(t||"").split("&").forEach(function(t){t&&(n=t.split("="),e=decodeURIComponent(n[0]),r[e]=!n[1]||decodeURIComponent(n[1]))}),r}function A(r){var n=void 0;if(void 0!==t&&t.exports)try{n=e(10).Buffer}catch(t){}var i=String.fromCharCode,o=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),u=function(t){switch(t.length){case 4:var r=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),e=r-65536;return i(55296+(e>>>10))+i(56320+(1023&e));case 3:return i((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return i((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},f=function(t){return t.replace(o,u)};return(n?function(t){return(t.constructor===n.constructor?t:new n(t,"base64")).toString()}:function(t){return f(atob(t))})(String(r).replace(/[-_]/g,function(t){return"-"===t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))}Object.defineProperty(r,"__esModule",{value:!0});var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r.camelCase=n,r.isUndefined=i,r.isDefined=o,r.isObject=u,r.isBlankObject=f,r.isArray=s,r.isString=h,r.isNumber=c,r.isFunction=l,r.isPromise=p,r.isWindow=y,r.getPrototypeOf=d,r.objectExtend=g,r.forEach=v,r.joinUrl=w,r.getFullUrlPath=b,r.parseQueryString=m,r.decodeBase64=A,"function"!=typeof Object.assign&&(Object.assign=function(t,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e})},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.Promise_any=function(t){if(!(t&&t instanceof Array))throw new Error("Must pass Promise_any an array");if(0===t.length)return Promise.resolve([]);var r=t.map(function(t){return t.then(function(t){return{resolve:!0,result:t}},function(t){return{resolve:!1,result:t}})});return Promise.all(r).then(function(t){var r=[],e=[],n=!0;if(t.forEach(function(t){t.resolve&&(n=!1),r.push(t.resolve?t.result:null),e.push(t.resolve?null:t.result)}),n)throw e;return r})}},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),u=e(1),f=e(0),s=e(8),a=n(s),h=e(6),c=n(h),l=e(5),p=n(l),y=function(){function t(r){var e=this;i(this,t);var n=(0,f.objectExtend)({},a.default);n=(0,f.objectExtend)(n,r);var o={},u={};Object.defineProperties(this,{options:{get:function(){return n}},roles:{get:function(){return o}},permissions:{get:function(){return u}}}),(0,f.forEach)(this.options.permissions,function(t,r){e.definePermission(r,t)},this),(0,f.forEach)(this.options.roles,function(t,r){(0,f.isObject)(t)?e.defineRole(r,t.handler,t.permissions):e.defineRole(r,t)})}return o(t,[{key:"defineRole",value:function(t,r,e){var n=this;if(this.roles[t])throw new Error('Role "'+t+'" already defined');if(!(0,f.isFunction)(r))throw new Error("Role handler must be function");var i=[];(0,f.isArray)(e)&&e.map(function(t){if(!n.permissions[t])throw new Error('Unknown permission "'+t+'"');i.push(n.permissions[t])}),this.roles[t]=new c.default(t,r,i)}},{key:"definePermission",value:function(t,r){if(this.permissions[t])throw new Error('Permission "'+t+'" already defined');this.permissions[t]=new p.default(t,r)}},{key:"isAuthorized",value:function(t,r){var e=this,n=[];return t?((0,f.isArray)(t)||(t=[t]),(0,f.forEach)(this.roles,function(r,e){t.indexOf(r.name)>=0&&n.push(r)})):(0,f.forEach)(this.roles,function(t){n.push(t)}),r&&!(0,f.isArray)(r)&&(r=[r]),new Promise(function(t,i){return 0===n.length&&i(),(0,u.Promise_any)(n.map(function(t){return t.invoke(r,e)})).then(t).catch(i)})}}]),t}();r.default=y},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={template:'\n    <div v-if="isVisible" class="is-authorized-component">\n      <slot></slot>\n    </div>\n  ',props:["roles","permissions"],data:function(){return{isVisible:!1}},created:function(){this.authorize()},updated:function(){this.authorize()},methods:{authorize:function(){var t=this;this.$authorize.isAuthorized(this.roles,this.permissions).then(function(){t.isVisible=!0}).catch(function(){t.isVisible=!1})}}}},function(t,r,e){"use strict";function n(t,r,e){var n=r.value.roles||null,i=r.value.permissions||null;e.context.$authorize.isAuthorized(n,i).then(function(){t.style.display=null}).catch(function(){t.style.display="none"})}Object.defineProperty(r,"__esModule",{value:!0}),r.default={bind:function(t,r,e){t.style.display="none",n(t,r,e)},update:function(t,r,e){n(t,r,e)},componentUpdated:function(t,r,e){n(t,r,e)},unbind:function(t){t.style.display=null}}},function(t,r,e){"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),o=e(0),u=function(){function t(r,e){if(n(this,t),this.name=r,!(0,o.isFunction)(e))throw new Error("Permission handler must be function.");this.handler=e}return i(t,[{key:"invoke",value:function(t){var r=this.handler.call(t||this);return(0,o.isPromise)(r)?r:new Promise(function(t,e){r?t():e()})}}]),t}();r.default=u},function(t,r,e){"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}(),o=e(1),u=e(0),f=function(){function t(r,e,i){n(this,t),this.name=r,this.handler=e,this.permissions=i}return i(t,[{key:"invoke",value:function(t,r){var e=this;r||(r=t,t=null),t&&!(0,u.isArray)(t)&&(t=[t]);var n=null;t&&(n=this.permissions.filter(function(r){return t.indexOf(r.name)>=0}),0===n.length&&(n=null));var i=this.handler.call(r||this);return(0,u.isPromise)(i)?t?n?i.then(function(){return(0,o.Promise_any)(n.map(function(t){return t.invoke(r||e)})).then(function(){return Promise.resolve()},function(){return Promise.reject()})}):void Promise.reject():i:new Promise(function(e,u){var f=this;if(i)if(t){if(n)return(0,o.Promise_any)(n.map(function(t){return t.invoke(r||f)})).then(e,u);u()}else e();else u()})}}]),t}();r.default=f},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,r){if(!i.installed){t.directive("isAuthorized",s.default),t.component("isAuthorized",h.default);var e=null;Object.defineProperties(t.prototype,{$authorize:{get:function(){if(!e){if(!this.$auth)throw new Error('Missing "vue-authenticate" library');e=new u.default(this.$auth,r)}return e}}})}}Object.defineProperty(r,"__esModule",{value:!0}),r.VueAuthorize=void 0;var o=(e(0),e(2)),u=n(o),f=e(4),s=n(f),a=e(3),h=n(a);r.default=i,r.VueAuthorize=u.default},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={}},function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,u,f=t.length;o=n(t),u=new c(3*f/4-o),e=o>0?f-4:f;var s=0;for(r=0;r<e;r+=4)i=h[t.charCodeAt(r)]<<18|h[t.charCodeAt(r+1)]<<12|h[t.charCodeAt(r+2)]<<6|h[t.charCodeAt(r+3)],u[s++]=i>>16&255,u[s++]=i>>8&255,u[s++]=255&i;return 2===o?(i=h[t.charCodeAt(r)]<<2|h[t.charCodeAt(r+1)]>>4,u[s++]=255&i):1===o&&(i=h[t.charCodeAt(r)]<<10|h[t.charCodeAt(r+1)]<<4|h[t.charCodeAt(r+2)]>>2,u[s++]=i>>8&255,u[s++]=255&i),u}function u(t){return a[t>>18&63]+a[t>>12&63]+a[t>>6&63]+a[63&t]}function f(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(u(n));return i.join("")}function s(t){for(var r,e=t.length,n=e%3,i="",o=[],u=0,s=e-n;u<s;u+=16383)o.push(f(t,u,u+16383>s?s:u+16383));return 1===n?(r=t[e-1],i+=a[r>>2],i+=a[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=a[r>>10],i+=a[r>>4&63],i+=a[r<<2&63],i+="="),o.push(i),o.join("")}r.byteLength=i,r.toByteArray=o,r.fromByteArray=s;for(var a=[],h=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,y=l.length;p<y;++p)a[p]=l[p],h[l.charCodeAt(p)]=p;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},function(t,r,e){"use strict";(function(t){function n(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,r){if(n()<r)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=o.prototype):(null===t&&(t=new o(r)),t.length=r),t}function o(t,r,e){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return a(this,t)}return u(this,t,r,e)}function u(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?h(t,r,e):p(t,r)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function s(t,r,e,n){return f(r),r<=0?i(t,r):void 0!==e?"string"==typeof n?i(t,r).fill(e,n):i(t,r).fill(e):i(t,r)}function a(t,r){if(f(r),t=i(t,r<0?0:0|y(r)),!o.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function h(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!o.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(r,e);t=i(t,n);var u=t.write(r,e);return u!==n&&(t=t.slice(0,u)),t}function c(t,r){var e=r.length<0?0:0|y(r.length);t=i(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),o.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=o.prototype):t=c(t,r),t}function p(t,r){if(o.isBuffer(r)){var e=0|y(r.length);return t=i(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Q(r.length)?i(t,0):c(t,r);if("Buffer"===r.type&&H(r.data))return c(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function d(t){return+t!=t&&(t=0),o.alloc(+t)}function g(t,r){if(o.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return q(t).length;default:if(n)return $(t).length;r=(""+r).toLowerCase(),n=!0}}function v(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return j(this,r,e);case"utf8":case"utf-8":return B(this,r,e);case"ascii":return S(this,r,e);case"latin1":case"binary":return C(this,r,e);case"base64":return T(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function b(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=o.from(r,n)),o.isBuffer(r))return 0===r.length?-1:m(t,r,e,n,i);if("number"==typeof r)return r&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):m(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function m(t,r,e,n,i){function o(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}var u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}var a;if(i){var h=-1;for(a=e;a<f;a++)if(o(t,a)===o(r,-1===h?0:a-h)){if(-1===h&&(h=a),a-h+1===s)return h*u}else-1!==h&&(a-=a-h),h=-1}else for(e+s>f&&(e=f-s),a=e;a>=0;a--){for(var c=!0,l=0;l<s;l++)if(o(t,a+l)!==o(r,l)){c=!1;break}if(c)return a}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function E(t,r,e,n){return J($(r,t.length-e),t,e,n)}function _(t,r,e,n){return J(X(r),t,e,n)}function P(t,r,e,n){return _(t,r,e,n)}function R(t,r,e,n){return J(q(r),t,e,n)}function O(t,r,e,n){return J(Z(r,t.length-e),t,e,n)}function T(t,r,e){return 0===r&&e===t.length?W.fromByteArray(t):W.fromByteArray(t.slice(r,e))}function B(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],u=null,f=o>239?4:o>223?3:o>191?2:1;if(i+f<=e){var s,a,h,c;switch(f){case 1:o<128&&(u=o);break;case 2:s=t[i+1],128==(192&s)&&(c=(31&o)<<6|63&s)>127&&(u=c);break;case 3:s=t[i+1],a=t[i+2],128==(192&s)&&128==(192&a)&&(c=(15&o)<<12|(63&s)<<6|63&a)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:s=t[i+1],a=t[i+2],h=t[i+3],128==(192&s)&&128==(192&a)&&128==(192&h)&&(c=(15&o)<<18|(63&s)<<12|(63&a)<<6|63&h)>65535&&c<1114112&&(u=c)}}null===u?(u=65533,f=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=f}return U(n)}function U(t){var r=t.length;if(r<=K)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=K));return e}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function C(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function j(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=V(t[o]);return i}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function M(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function I(t,r,e,n,i,u){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<u)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function x(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function k(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function L(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function D(t,r,e,n,i){return i||L(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),G.write(t,r,e,n,23,4),e+4}function z(t,r,e,n,i){return i||L(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),G.write(t,r,e,n,52,8),e+8}function N(t){if(t=F(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function X(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function Z(t,r){for(var e,n,i,o=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function q(t){return W.toByteArray(N(t))}function J(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function Q(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var W=e(9),G=e(12),H=e(11);r.Buffer=o,r.SlowBuffer=d,r.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=n(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,r,e){return u(null,t,r,e)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,r,e){return s(null,t,r,e)},o.allocUnsafe=function(t){return a(null,t)},o.allocUnsafeSlow=function(t){return a(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,r){if(!o.isBuffer(t)||!o.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,u=Math.min(e,n);i<u;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,r){if(!H(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=o.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var u=t[e];if(!o.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},o.byteLength=g,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)w(this,r,r+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)w(this,r,r+3),w(this,r+1,r+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)w(this,r,r+7),w(this,r+1,r+6),w(this,r+2,r+5),w(this,r+3,r+4);return this},o.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?B(this,0,t):v.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,r,e,n,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var u=i-n,f=e-r,s=Math.min(u,f),a=this.slice(n,i),h=t.slice(r,e),c=0;c<s;++c)if(a[c]!==h[c]){u=a[c],f=h[c];break}return u<f?-1:f<u?1:0},o.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},o.prototype.indexOf=function(t,r,e){return b(this,t,r,e,!0)},o.prototype.lastIndexOf=function(t,r,e){return b(this,t,r,e,!1)},o.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return E(this,t,r,e);case"ascii":return _(this,t,r,e);case"latin1":case"binary":return P(this,t,r,e);case"base64":return R(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var K=4096;o.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n;if(o.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=o.prototype;else{var i=r-t;n=new o(i,void 0);for(var u=0;u<i;++u)n[u]=this[u+t]}return n},o.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},o.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},o.prototype.readUInt8=function(t,r){return r||M(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,r){return r||M(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,r){return r||M(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,r){return r||M(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,r){return r||M(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},o.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||M(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},o.prototype.readInt8=function(t,r){return r||M(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,r){r||M(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},o.prototype.readInt16BE=function(t,r){r||M(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},o.prototype.readInt32LE=function(t,r){return r||M(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,r){return r||M(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,r){return r||M(t,4,this.length),G.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,r){return r||M(t,4,this.length),G.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,r){return r||M(t,8,this.length),G.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,r){return r||M(t,8,this.length),G.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){I(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},o.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){I(this,t,r,e,Math.pow(2,8*e)-1,0)}var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},o.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},o.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):x(this,t,r,!0),r+2},o.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):x(this,t,r,!1),r+2},o.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):k(this,t,r,!0),r+4},o.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):k(this,t,r,!1),r+4},o.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);I(this,t,r,e,i-1,-i)}var o=0,u=1,f=0;for(this[r]=255&t;++o<e&&(u*=256);)t<0&&0===f&&0!==this[r+o-1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},o.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);I(this,t,r,e,i-1,-i)}var o=e-1,u=1,f=0;for(this[r+o]=255&t;--o>=0&&(u*=256);)t<0&&0===f&&0!==this[r+o+1]&&(f=1),this[r+o]=(t/u>>0)-f&255;return r+e},o.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},o.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):x(this,t,r,!0),r+2},o.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):x(this,t,r,!1),r+2},o.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):k(this,t,r,!0),r+4},o.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):k(this,t,r,!1),r+4},o.prototype.writeFloatLE=function(t,r,e){return D(this,t,r,!0,e)},o.prototype.writeFloatBE=function(t,r,e){return D(this,t,r,!1,e)},o.prototype.writeDoubleLE=function(t,r,e){return z(this,t,r,!0,e)},o.prototype.writeDoubleBE=function(t,r,e){return z(this,t,r,!1,e)},o.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,u=n-e;if(this===t&&e<r&&r<n)for(i=u-1;i>=0;--i)t[i+r]=this[i+e];else if(u<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<u;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+u),r);return u},o.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var u;if("number"==typeof t)for(u=r;u<e;++u)this[u]=t;else{var f=o.isBuffer(t)?t:$(new o(t,n).toString()),s=f.length;for(u=0;u<e-r;++u)this[u+r]=f[u%s]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(13))},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},function(t,r){r.read=function(t,r,e,n,i){var o,u,f=8*i-n-1,s=(1<<f)-1,a=s>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=f;h>0;o=256*o+t[r+c],c+=l,h-=8);for(u=o&(1<<-h)-1,o>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=a}return(p?-1:1)*u*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var u,f,s,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,y=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-u))<1&&(u--,s*=2),r+=u+c>=1?l/s:l*Math.pow(2,1-c),r*s>=2&&(u++,s/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(r*s-1)*Math.pow(2,i),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,i),u=0));i>=8;t[e+p]=255&f,p+=y,f/=256,i-=8);for(u=u<<i|f,a+=i;a>0;t[e+p]=255&u,p+=y,u/=256,a-=8);t[e+p-y]|=128*d}},function(t,r){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e}]);