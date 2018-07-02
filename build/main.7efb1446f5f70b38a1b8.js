!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,u=0,a=[],c=n(0);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(h(o.parts[s],e))}else{var u=[];for(s=0;s<o.parts.length;s++)u.push(h(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:u}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(u):n.push(r[s]={id:s,parts:[u]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function b(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function h(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;n=s||(s=b(e)),r=g.bind(null,n,a,!1),o=g.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i];(u=r[s.id]).refs--,o.push(u)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete r[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){(t.exports=n(2)(!0)).push([t.i,"*,:after,:before{box-sizing:inherit}body,h1,h2,h3,h4,h5,h6,ol,p,ul{margin:0;padding:0;font-weight:400}#pixels{width:340px;height:460px}","",{version:3,sources:["/Users/Jaime/apps/git-cat/app/style.css"],names:[],mappings:"AAAA,iBACE,kBAAoB,CACrB,AAED,+BACE,SAAU,AACV,UAAW,AACX,eAAoB,CACrB,AAED,QACE,YAAa,AACb,YAAc,CACf",file:"style.css",sourcesContent:["*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\n#pixels {\n  width: 340px;\n  height: 460px;\n}"],sourceRoot:""}])},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";n.r(e);n(4);var r=document.querySelector("#bottom-left-eye"),o=document.querySelector("#top-left-eye"),i=document.querySelector("#bottom-right-eye"),s=document.querySelector("#top-right-eye"),u=document.querySelector("#bottom-left-eye-marker"),a=document.querySelector("#top-left-eye-marker"),c=document.querySelector("#bottom-right-eye-marker"),f=document.querySelector("#top-right-eye-marker"),l=.3,p=function(t,e,n){return(n-e)*t+e},d=275,b=225,y=240,h=249,m=null,g=function(){r.style.display="block",r.setAttribute("d","M175,230 Q185,"+p(l,y,d).toString()+" 245,265"),u.setAttribute("cy",""+p(l,y,d).toString()),o.style.display="block",o.setAttribute("d","M175,230 Q225,"+p(l,h,b).toString()+" 245,265"),a.setAttribute("cy",""+p(l,h,b).toString()),i.style.display="block",i.setAttribute("d","M267,265 Q327 "+p(l,y,d).toString()+" 337,230"),c.setAttribute("cy",""+p(l,y,d).toString()),s.style.display="block",s.setAttribute("d","M267, 265 Q287,"+p(l,h,b).toString()+" 337,230"),f.setAttribute("cy",""+p(l,h,b).toString()),m=requestAnimationFrame(g),(l+=.019)>1&&(cancelAnimationFrame(m),l=.3,d=260,b=235,y=275,h=225,setTimeout(A,1e3))},A=function(){r.setAttribute("d","M175,230 Q185,"+p(l,y,d).toString()+" 245,265"),u.setAttribute("cy",""+p(l,y,d).toString()),o.setAttribute("d","M175,230 Q225,"+p(l,h,b).toString()+" 245,265"),a.setAttribute("cy",""+p(l,h,b).toString()),i.setAttribute("d","M267,265 Q327 "+p(l,y,d).toString()+" 337,230"),c.setAttribute("cy",""+p(l,y,d).toString()),s.setAttribute("d","M267, 265 Q287,"+p(l,h,b).toString()+" 337,230"),f.setAttribute("cy",""+p(l,h,b).toString()),m=requestAnimationFrame(A),(l+=.06)>1&&(cancelAnimationFrame(m),l=.3,d=232,b=252,y=260,h=235,setTimeout(v,1e3))},v=function(){r.setAttribute("d","M175,230 Q185,"+p(l,y,d).toString()+" 245,265"),u.setAttribute("cy",""+p(l,y,d).toString()),o.setAttribute("d","M175,230 Q225,"+p(l,h,b).toString()+" 245,265"),a.setAttribute("cy",""+p(l,h,b).toString()),i.setAttribute("d","M267,265 Q327 "+p(l,y,d).toString()+" 337,230"),c.setAttribute("cy",""+p(l,y,d).toString()),s.setAttribute("d","M267, 265 Q287,"+p(l,h,b).toString()+" 337,230"),f.setAttribute("cy",""+p(l,h,b).toString()),m=requestAnimationFrame(v),(l+=.05)>1&&(cancelAnimationFrame(m),l=.3,d=260,b=235,y=232,h=252,S())},S=function(){console.log("blinkOpen"),r.setAttribute("d","M175,230 Q185,"+p(l,y,d).toString()+" 245,265"),u.setAttribute("cy",""+p(l,y,d).toString()),o.setAttribute("d","M175,230 Q225,"+p(l,h,b).toString()+" 245,265"),a.setAttribute("cy",""+p(l,h,b).toString()),i.setAttribute("d","M267,265 Q327 "+p(l,y,d).toString()+" 337,230"),c.setAttribute("cy",""+p(l,y,d).toString()),s.setAttribute("d","M267, 265 Q287,"+p(l,h,b).toString()+" 337,230"),f.setAttribute("cy",""+p(l,h,b).toString()),m=requestAnimationFrame(S),(l+=.05)>1&&(cancelAnimationFrame(m),l=.3,d=232,b=252,y=260,h=235,setTimeout(v,3e3))};setTimeout(g,1e3)},function(t,e,n){t.exports=n(5)}]);
//# sourceMappingURL=main.7efb1446f5f70b38a1b8.js.map