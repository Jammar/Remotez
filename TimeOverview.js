!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=69)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){var r=n(15)("wks"),a=n(17),o=n(3).Symbol,l="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=l&&o[e]||(l?o:a)("Symbol."+e))}).store=r},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){e.exports=!n(14)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(8),a=n(27);e.exports=n(4)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){var r=n(13),a=n(37),o=n(38),l=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),a)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(28),a=n(29);e.exports=function(e){return r(a(e))}},function(e,t,n){var r=n(3),a=n(5),o=n(12),l=n(17)("src"),u=n(43),c=(""+u).split("toString");n(16).inspectSource=function(e){return u.call(e)},(e.exports=function(e,t,n,u){var i="function"==typeof n;i&&(o(n,"name")||a(n,"name",t)),e[t]!==n&&(i&&(o(n,l)||a(n,l,e[t]?""+e[t]:c.join(String(t)))),e===r?e[t]=n:u?e[t]?e[t]=n:a(e,t,n):(delete e[t],a(e,t,n)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[l]||u.call(this)}))},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(9);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(16),a=n(3),o=a["__core-js_shared__"]||(a["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(26)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports={}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(3),a=n(16),o=n(5),l=n(11),u=n(30),c=function(e,t,n){var i,s,f,m,p=e&c.F,d=e&c.G,v=e&c.S,y=e&c.P,h=e&c.B,x=d?r:v?r[t]||(r[t]={}):(r[t]||{}).prototype,b=d?a:a[t]||(a[t]={}),g=b.prototype||(b.prototype={});for(i in d&&(n=t),n)f=((s=!p&&x&&void 0!==x[i])?x:n)[i],m=h&&s?u(f,r):y&&"function"==typeof f?u(Function.call,f):f,x&&l(x,i,f,e&c.U),b[i]!=f&&o(b,i,m),y&&g[i]!=f&&(g[i]=f)};r.core=a,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){var r=n(48),a=n(33);e.exports=Object.keys||function(e){return r(e,a)}},function(e,t,n){var r=n(15)("keys"),a=n(17);e.exports=function(e){return r[e]||(r[e]=a(e))}},function(e,t,n){var r=n(8).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(4)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},function(e,t,n){var r=n(9),a=n(3).document,o=r(a)&&r(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,n){"use strict";var r=n(40),a=n(41),o=n(18),l=n(10);e.exports=n(42)(Array,"Array",(function(e,t){this._t=l(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,a(1)):a(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=!1},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(19);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(44);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){var r=n(32),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,a=n(12),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){var r=n(29);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(64),a=n(65),o=n(66),l=n(68);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||l()}},function(e,t,n){e.exports=!n(4)&&!n(14)((function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(9);e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){for(var r=n(25),a=n(21),o=n(11),l=n(3),u=n(5),c=n(18),i=n(2),s=i("iterator"),f=i("toStringTag"),m=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=a(p),v=0;v<d.length;v++){var y,h=d[v],x=p[h],b=l[h],g=b&&b.prototype;if(g&&(g[s]||u(g,s,m),g[f]||u(g,f,h),c[h]=m,x))for(y in r)g[y]||o(g,y,r[y],!0)}},function(e,t,n){var r=n(2)("unscopables"),a=Array.prototype;null==a[r]&&n(5)(a,r,{}),e.exports=function(e){a[r][e]=!0}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){"use strict";var r=n(26),a=n(20),o=n(11),l=n(5),u=n(18),c=n(45),i=n(34),s=n(52),f=n(2)("iterator"),m=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,d,v,y,h){c(n,t,d);var x,b,g,E=function(e){if(!m&&e in S)return S[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},w=t+" Iterator",N="values"==v,j=!1,S=e.prototype,O=S[f]||S["@@iterator"]||v&&S[v],k=O||E(v),P=v?N?E("entries"):k:void 0,T="Array"==t&&S.entries||O;if(T&&(g=s(T.call(new e)))!==Object.prototype&&g.next&&(i(g,w,!0),r||"function"==typeof g[f]||l(g,f,p)),N&&O&&"values"!==O.name&&(j=!0,k=function(){return O.call(this)}),r&&!h||!m&&!j&&S[f]||l(S,f,k),u[t]=k,u[w]=p,v)if(x={values:N?k:E("values"),keys:y?k:E("keys"),entries:P},h)for(b in x)b in S||o(S,b,x[b]);else a(a.P+a.F*(m||j),t,x);return x}},function(e,t,n){e.exports=n(15)("native-function-to-string",Function.toString)},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(46),a=n(27),o=n(34),l={};n(5)(l,n(2)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(l,{next:a(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(13),a=n(47),o=n(33),l=n(22)("IE_PROTO"),u=function(){},c=function(){var e,t=n(24)("iframe"),r=o.length;for(t.style.display="none",n(51).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[l]=e):n=c(),void 0===t?n:a(n,t)}},function(e,t,n){var r=n(8),a=n(13),o=n(21);e.exports=n(4)?Object.defineProperties:function(e,t){a(e);for(var n,l=o(t),u=l.length,c=0;u>c;)r.f(e,n=l[c++],t[n]);return e}},function(e,t,n){var r=n(12),a=n(10),o=n(49)(!1),l=n(22)("IE_PROTO");e.exports=function(e,t){var n,u=a(e),c=0,i=[];for(n in u)n!=l&&r(u,n)&&i.push(n);for(;t.length>c;)r(u,n=t[c++])&&(~o(i,n)||i.push(n));return i}},function(e,t,n){var r=n(10),a=n(31),o=n(50);e.exports=function(e){return function(t,n,l){var u,c=r(t),i=a(c.length),s=o(l,i);if(e&&n!=n){for(;i>s;)if((u=c[s++])!=u)return!0}else for(;i>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}}},function(e,t,n){var r=n(32),a=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?a(e+t,0):o(e,t)}},function(e,t,n){var r=n(3).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(12),a=n(35),o=n(22)("IE_PROTO"),l=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},function(e,t,n){"use strict";var r=n(54),a={};a[n(2)("toStringTag")]="z",a+""!="[object z]"&&n(11)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(e,t,n){var r=n(19),a=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),a))?n:o?r(t):"Object"==(l=r(t))&&"function"==typeof t.callee?"Arguments":l}},function(e,t,n){var r=n(20),a=n(56)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},function(e,t,n){var r=n(4),a=n(21),o=n(10),l=n(57).f;e.exports=function(e){return function(t){for(var n,u=o(t),c=a(u),i=c.length,s=0,f=[];i>s;)n=c[s++],r&&!l.call(u,n)||f.push(e?[n,u[n]]:u[n]);return f}}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";var r=n(20),a=n(59)(1);r(r.P+r.F*!n(63)([].map,!0),"Array",{map:function(e){return a(this,e,arguments[1])}})},function(e,t,n){var r=n(30),a=n(28),o=n(35),l=n(31),u=n(60);e.exports=function(e,t){var n=1==e,c=2==e,i=3==e,s=4==e,f=6==e,m=5==e||f,p=t||u;return function(t,u,d){for(var v,y,h=o(t),x=a(h),b=r(u,d,3),g=l(x.length),E=0,w=n?p(t,g):c?p(t,0):void 0;g>E;E++)if((m||E in x)&&(y=b(v=x[E],E,h),e))if(n)w[E]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:w.push(v)}else if(s)return!1;return f?-1:i||s?s:w}}},function(e,t,n){var r=n(61);e.exports=function(e,t){return new(r(e))(t)}},function(e,t,n){var r=n(9),a=n(62),o=n(2)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},function(e,t,n){var r=n(19);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}},function(e,t,n){var r=n(67);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);n(23);var r=n(0),a=n.n(r),o=(n(39),n(25),n(53),n(55),n(58),n(36)),l=n.n(o),u=n(1),c=n(6),i=n(7),s=n.n(i),f=a.a.createContext({});f.Consumer,f.Provider;function m(e,t){var n=Object(r.useContext)(f);return e||n[t]||t}var p=["xl","lg","md","sm","xs"],d=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,l=void 0===o?"div":o,i=Object(c.a)(e,["bsPrefix","className","as"]),f=m(n,"col"),d=[],v=[];return p.forEach((function(e){var t,n,r,a=i[e];if(delete i[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var l="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+f+l:""+f+l+"-"+t),null!=r&&v.push("order"+l+"-"+r),null!=n&&v.push("offset"+l+"-"+n)})),d.length||d.push(f),a.a.createElement(l,Object(u.a)({},i,{ref:t,className:s.a.apply(void 0,[r].concat(d,v))}))}));d.displayName="Col";var v=d,y=["xl","lg","md","sm","xs"],h=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.noGutters,l=e.as,i=void 0===l?"div":l,f=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),p=m(n,"row"),d=p+"-cols",v=[];return y.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&v.push(""+d+r+"-"+t)})),a.a.createElement(i,Object(u.a)({ref:t},f,{className:s.a.apply(void 0,[r,p,o&&"no-gutters"].concat(v))}))}));h.displayName="Row",h.defaultProps={noGutters:!1};var x=h,b=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.striped,l=e.bordered,i=e.borderless,f=e.hover,p=e.size,d=e.variant,v=e.responsive,y=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=m(n,"table"),x=s()(r,h,d&&h+"-"+d,p&&h+"-"+p,o&&h+"-striped",l&&h+"-bordered",i&&h+"-borderless",f&&h+"-hover"),b=a.a.createElement("table",Object(u.a)({},y,{className:x,ref:t}));if(v){var g=h+"-responsive";return"string"==typeof v&&(g=g+"-"+v),a.a.createElement("div",{className:g},b)}return b}));var g={weekNumber:36,weekPart:"B",year:2020,employee:{swecoId:"SELUMM",firstName:"Joachim",lastName:"Lummer"},totalHours:-31,billingRatio:null,flex:{flexWeek:null,flexBalanceDate:"07/31/2020 00:00:00",flexBalanceHours:null},calendarHours:{monday:-1,tuesday:8,wednesday:8,thursday:8,friday:8,saturday:null,sunday:null},normalTimeHours:{monday:null,tuesday:null,wednesday:null,thursday:null,friday:null,saturday:null,sunday:null},overtimeHours:{monday:null,tuesday:null,wednesday:null,thursday:null,friday:null,saturday:null,sunday:null},absenceHours:{monday:null,tuesday:null,wednesday:null,thursday:null,friday:null,saturday:null,sunday:null}},E=function(e){var t,n,o,u,c,i,s,f,m,p=e.name,d=Object(r.useState)(),y=l()(d,2),h=y[0],E=y[1];if(Object(r.useEffect)((function(){var e;switch(null==g?void 0:g.status){case"Reclaimed":e="pink-dark";break;case"Rejected":e="maconomy-yellow";break;case"Submitted":e="maconomy-green";break;case"Approved":case"Transferred":e="maconomy-blue";break;default:e="light-gray"}E(e)}),[g]),null!=g&&g.loading)return a.a.createElement(v,{md:8,lg:6,className:"offset-lg-1 d-flex"},a.a.createElement(x,{className:"align-items-stretch flex-fill"},a.a.createElement(v,{className:h+" w-100 col-4"}),a.a.createElement(v,{className:"gray-ultralight col-4 w-100"}),a.a.createElement(v,{className:"gray-ultralight col-4 w-100 "}),a.a.createElement(v,{className:"d-block white skeletonpulse overskeleton",role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading..."))));if(null!=g&&g.error)return a.a.createElement(v,{md:8,lg:6,className:"offset-lg-1 d-flex"},a.a.createElement(x,{className:"align-items-stretch flex-fill"},a.a.createElement(v,{className:h+" w-100 p-0 col-4"}),a.a.createElement(v,{className:"gray-ultralight col-4 w-100"}),a.a.createElement(v,{className:"gray-ultralight col-4 w-100 "}),a.a.createElement(v,{className:"d-flex align-self-stretch justify-content-center white"},a.a.createElement("span",{className:"text-danger"},"Something went wrong, please try again."))));var w=function(e){var t=e.object,n=[];return Object.entries(t).map((function(e){if("__typename"===e[0])return null;n.push(a.a.createElement("td",{key:e[0]+"tdrow"+(null==g?void 0:g.id),className:"0:00"==e[1]?"gray-light-color":null},e[1]))})),n},N=function(e){var t=e.hours,n="font-weight-bold ";return"0:00"===t&&(n+="gray-light-color"),a.a.createElement("td",{className:n},t)},j=function(e){var t=e.checkSum,n="font-weight-bold ";return n+=t<"0:00"?"text-danger":"text-success",a.a.createElement("td",{className:n},t)};return a.a.createElement(v,{className:"h-100 d-flex"},a.a.createElement(x,{className:"border"},a.a.createElement(v,{className:h+" p-0 pt-2 col-4 noborderradiusright"},a.a.createElement("h6",{className:"pl-4"},"Week"),a.a.createElement("h3",{className:"text-center m-0"},null==g?void 0:g.weekNumber,null==g?void 0:g.weekPart),a.a.createElement("h5",{className:"p-2 m-0 text-center"},null==g?void 0:g.status)),a.a.createElement(v,{className:"gray-ultralight pt-2 col-4 noborderradius"},a.a.createElement("h6",null,"Employee"),a.a.createElement("h3",{className:"text-center"},p)),a.a.createElement(v,{className:"gray-ultralight pt-2 col-4 noborderradiusleft"},a.a.createElement("h6",null,"Employee no."),a.a.createElement("h3",{className:"text-center"},null==g||null===(t=g.employee)||void 0===t?void 0:t.swecoId)),a.a.createElement(v,{className:"white pt-1 pt-lg-2 text-center col-12"},a.a.createElement(b,{borderless:!0,striped:!0,hover:!0,size:"xs"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"text-left"},"Times"),a.a.createElement("th",null,"Week"),a.a.createElement("th",null,"Mon"),a.a.createElement("th",null,"Tue"),a.a.createElement("th",null,"Wed"),a.a.createElement("th",null,"Thu"),a.a.createElement("th",null,"Fri"),a.a.createElement("th",null,"Sat"),a.a.createElement("th",null,"Sun"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{className:"text-left"},"Calendar"),a.a.createElement(N,{hours:null==g||null===(n=g.weekTotals)||void 0===n?void 0:n.calendar}),a.a.createElement(w,{object:null==g?void 0:g.calendarHours})),a.a.createElement("tr",null,a.a.createElement("td",{className:"text-left"},"Normal"),a.a.createElement(N,{hours:null==g||null===(o=g.weekTotals)||void 0===o?void 0:o.normalTime}),a.a.createElement(w,{object:null==g?void 0:g.normalTimeHours})),a.a.createElement("tr",null,a.a.createElement("td",{className:"text-left"},"Overtime"),a.a.createElement(N,{hours:null==g||null===(u=g.weekTotals)||void 0===u?void 0:u.overtime}),a.a.createElement(w,{object:null==g?void 0:g.overtimeHours})),a.a.createElement("tr",null,a.a.createElement("td",{className:"text-left"},"Absence"),a.a.createElement(N,{hours:null==g||null===(c=g.weekTotals)||void 0===c?void 0:c.absence}),a.a.createElement(w,{object:null==g?void 0:g.absenceHours})),a.a.createElement("tr",null,a.a.createElement("td",{className:"text-left"},"Checksum"),a.a.createElement(j,{checkSum:null==g?void 0:g.checkSum}))))),a.a.createElement(x,{noGutters:!0,className:"d-flex flex-fill white font-size-xs text-center pb-2 px-4"},a.a.createElement(v,{xs:2},a.a.createElement(x,{noGutters:!0,className:""},a.a.createElement(v,{xs:12},a.a.createElement("span",{className:"font-weight-bold"},"Billing ratio")),a.a.createElement(v,null,null==g?void 0:g.billingRatio))),a.a.createElement(v,null,a.a.createElement(x,{noGutters:!0,className:""},a.a.createElement(v,{xs:12},a.a.createElement("span",{className:"font-weight-bold"},"Flex hour balance in payroll")),a.a.createElement(v,{xs:8},"At ",null==g||null===(i=g.payrollFlex)||void 0===i?void 0:i.flexDate),a.a.createElement(v,{xs:4},null==g||null===(s=g.payrollFlex)||void 0===s?void 0:s.flexHours," hours"))),a.a.createElement(v,null,a.a.createElement(x,{noGutters:!0,className:""},a.a.createElement(v,{xs:12},a.a.createElement("span",{className:"font-weight-bold"},"Flex hours from timesheet")),a.a.createElement(v,{xs:8},"Since ",null==g||null===(f=g.maconomyFlex)||void 0===f?void 0:f.flexDate),a.a.createElement(v,{xs:4},null==g||null===(m=g.maconomyFlex)||void 0===m?void 0:m.flexHours," hours"))))))};t.default=function(e){var t=e.name,n=e.timeInformation;return a.a.createElement(E,{name:t,timeInformation:n})}}]));