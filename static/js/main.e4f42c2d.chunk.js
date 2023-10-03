/*! For license information please see main.e4f42c2d.chunk.js.LICENSE.txt */
(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{113:function(t,e,r){},114:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(8),i=r.n(o),c=r(17),u=r(33),l=r(79),s=r(80),f=Object(u.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_ALL":return e.payload;case"LIKE":return t.map((function(t){return t._id===e.payload._id?e.payload:t}));case"CREATE":return[].concat(Object(s.a)(t),[e.payload]);case"UPDATE":return t.map((function(t){return t._id===e.payload._id?e.payload:t}));case"DELETE":return t.filter((function(t){return t._id!==e.payload}));default:return t}}}),h=r(48),p=r(154),m=r(155),d=r(149),v=r(158),y=r(153),g=r(152),b=r(146),w=r(148),E=r(157),x=r(150),j=r(151),L=r(75),O=r.n(L),k=r(76),_=r.n(k),C=r(74),N=r.n(C),T=r(69),I=r.n(T),S=r(22),F=r(34),P=r.n(F),G="http://localhost:5000/posts",A=function(t){return P.a.patch("".concat(G,"/").concat(t,"/likePost"))},D=function(t,e){return P.a.patch("".concat(G,"/").concat(t),e)},z=function(t){return P.a.delete("".concat(G,"/").concat(t))};function W(){W=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="executing",m="completed",d={};function v(){}function y(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=g.prototype=v.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var a=h;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var l=f(e,r,n);if("normal"===l.type){if(a=n.done?m:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=m,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},j(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}var B=function(t){return function(){var e=Object(S.a)(W().mark((function e(r){var n,a;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o=t,P.a.post(G,o);case 3:n=e.sent,a=n.data,r({type:"CREATE",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}var o}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},M=function(t,e){return function(){var r=Object(S.a)(W().mark((function r(n){var a,o;return W().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,D(t,e);case 3:a=r.sent,o=a.data,n({type:"UPDATE",payload:o}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},R=r(143),Y=Object(R.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),H=function(t){var e=t.post,r=t.setCurrentId,n=Object(c.b)(),o=Y();return a.a.createElement(b.a,{className:o.card},a.a.createElement(w.a,{className:o.media,image:e.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:e.title}),a.a.createElement("div",{className:o.overlay},a.a.createElement(d.a,{variant:"h6"},e.creator),a.a.createElement(d.a,{variant:"body2"},I()(e.createdAt).fromNow())),a.a.createElement("div",{className:o.overlay2},a.a.createElement(E.a,{style:{color:"white"},size:"small",onClick:function(){return r(e._id)}},a.a.createElement(N.a,{fontSize:"medium"}))),a.a.createElement("div",{className:o.details},a.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"h2"},e.tags.map((function(t){return"#".concat(t," ")})))),a.a.createElement(d.a,{className:o.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),a.a.createElement(x.a,null,a.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},e.message)),a.a.createElement(j.a,{className:o.cardActions},a.a.createElement(E.a,{size:"small",color:"primary",onClick:function(){return n((t=e._id,function(){var e=Object(S.a)(W().mark((function e(r){var n,a;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:n=e.sent,a=n.data,r({type:"LIKE",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()));var t}},a.a.createElement(O.a,{fontSize:"small"})," \xa0 Like\xa0",e.likeCount," "),a.a.createElement(E.a,{size:"small",color:"primary",onClick:function(){return n((t=e._id,function(){var e=Object(S.a)(W().mark((function e(r){return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t);case 3:r({type:"DELETE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var t}},a.a.createElement(_.a,{fontSize:"small"})," Delete")))},J=Object(R.a)((function(t){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:t.spacing(1)},actionDiv:{textAlign:"center"}}})),K=function(t){var e=t.setCurrentId,r=Object(c.c)((function(t){return t.posts})),n=J();return r.length?a.a.createElement(y.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},r.map((function(t){return a.a.createElement(y.a,{key:t._id,item:!0,xs:12,sm:6,md:6},a.a.createElement(H,{post:t,setCurrentId:e}))}))):a.a.createElement(g.a,null)},U=r(18),V=r(82),q=r(156),Q=r(77),X=r.n(Q),Z=Object(R.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1)}},paper:{padding:t.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}}));function $(){$=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var h="suspendedStart",p="executing",m="completed",d={};function v(){}function y(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(T([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=g.prototype=v.prototype=Object.create(b);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,c){var u=f(t[a],t,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function O(e,r,n){var a=h;return function(o,i){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var l=f(e,r,n);if("normal"===l.type){if(a=n.done?m:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a=m,n.method="throw",n.arg=l.arg)}}}function k(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=l(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},j(L.prototype),l(L.prototype,c,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(x),l(x,u,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}var tt=function(t){var e=t.currentId,r=t.setCurrentId,o=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(h.a)(o,2),u=i[0],l=i[1],s=Object(c.c)((function(t){return e?t.posts.find((function(t){return t._id===e})):null})),f=Object(c.b)(),p=Z();Object(n.useEffect)((function(){s&&l(s)}),[s]);var m=function(){r(0),l({creator:"",title:"",message:"",tags:"",selectedFile:""})},v=function(){var t=Object(S.a)($().mark((function t(r){return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),0===e?(f(B(u)),m()):(f(M(e,u)),m());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return a.a.createElement(V.a,{className:p.paper},a.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:v},a.a.createElement(d.a,{variant:"h6"},e?'Editing "'.concat(s.title,'"'):"Creating a Memory"),a.a.createElement(q.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:u.creator,onChange:function(t){return l(Object(U.a)(Object(U.a)({},u),{},{creator:t.target.value}))}}),a.a.createElement(q.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:u.title,onChange:function(t){return l(Object(U.a)(Object(U.a)({},u),{},{title:t.target.value}))}}),a.a.createElement(q.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,minRows:4,value:u.message,onChange:function(t){return l(Object(U.a)(Object(U.a)({},u),{},{message:t.target.value}))}}),a.a.createElement(q.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:u.tags,onChange:function(t){return l(Object(U.a)(Object(U.a)({},u),{},{tags:t.target.value.split(",")}))}}),a.a.createElement("div",{className:p.fileInput},a.a.createElement(X.a,{type:"file",multiple:!1,onDone:function(t){var e=t.base64;return l(Object(U.a)(Object(U.a)({},u),{},{selectedFile:e}))}})),a.a.createElement(E.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),a.a.createElement(E.a,{variant:"contained",color:"secondary",size:"small",onClick:m,fullWidth:!0},"Clear")))},et=r(47),rt=Object(R.a)((function(t){return Object(et.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},t.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),nt=r(78),at=r.n(nt),ot=function(){var t=Object(n.useState)(0),e=Object(h.a)(t,2),r=e[0],o=e[1],i=Object(c.b)(),u=rt();return Object(n.useEffect)((function(){i(function(){var t=Object(S.a)(W().mark((function t(e){var r,n;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.a.get(G);case 3:r=t.sent,n=r.data,e({type:"FETCH_ALL",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[r,i]),a.a.createElement(p.a,{maxWidth:"lg"},a.a.createElement(m.a,{className:u.appBar,position:"static",color:"inherit"},a.a.createElement(d.a,{className:u.heading,variant:"h2",align:"center"},"Memories"),a.a.createElement("img",{className:u.image,src:at.a,alt:"icon",height:"60"})),a.a.createElement(v.a,{in:!0},a.a.createElement(p.a,null,a.a.createElement(y.a,{className:u.mainContainer,container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3},a.a.createElement(y.a,{item:!0,xs:12,sm:7},a.a.createElement(K,{setCurrentId:o})),a.a.createElement(y.a,{item:!0,xs:12,sm:4},a.a.createElement(tt,{currentId:r,setCurrentId:o}))))))},it=(r(113),Object(u.d)(f,Object(u.c)(Object(u.a)(l.a))));i.a.render(a.a.createElement(c.a,{store:it},a.a.createElement(ot,null)),document.getElementById("root"))},78:function(t,e,r){t.exports=r.p+"static/media/memories.5c0c63fb.png"},87:function(t,e,r){t.exports=r(114)}},[[87,1,2]]]);
//# sourceMappingURL=main.e4f42c2d.chunk.js.map