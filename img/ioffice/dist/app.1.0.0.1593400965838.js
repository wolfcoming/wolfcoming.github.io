(function(t){function e(e){for(var r,a,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"2a3e":function(t,e,n){"use strict";var r=n("d336"),o=n.n(r);o.a},3738:function(t,e,n){"use strict";var r=n("3c29"),o=n.n(r);o.a},"3c29":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["prompt"==t.type?n("Prompt"):t._e(),"download"==t.type?n("Download"):t._e()],1)},i=[],a=(n("c975"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prompt"},[r("img",{attrs:{src:n("dd86"),width:"100%"}})])}],u={name:"Prompt"},l=u,s=(n("2a3e"),n("2877")),f=Object(s["a"])(l,a,c,!1,null,"e7859c92",null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download"},[n("a",{attrs:{href:t.downloadUrl}},[t._m(0),n("span",[t._v("点击下载手机客户端")])])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"img-container"},[r("img",{attrs:{src:n("cf05"),width:"100%"}})])}],v={name:"Download",data:function(){return{downloadUrl:""}},created:function(){/Android/gi.test(navigator.userAgent)?this.downloadUrl="itms-services://?action=download-manifest&url=http://192.168.1.115:8080/IOffice.plist":this.downloadUrl="itms-services://?action=download-manifest&url=https://wolfcoming.github.io/img/ioffice/IOffice.plist"}},h=v,g=(n("3738"),Object(s["a"])(h,d,m,!1,null,"19d5eaae",null)),w=g.exports,b={name:"App",components:{Prompt:p,Download:w},data:function(){return{type:""}},mounted:function(){var t=function(){return-1!==navigator.userAgent.toLowerCase().indexOf("micromessenger")}();this.type=t?"prompt":"download"}},y=b,_=(n("034f"),Object(s["a"])(y,o,i,!1,null,null,null)),O=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.f131bf0d.png"},d336:function(t,e,n){},dd86:function(t,e,n){t.exports=n.p+"img/prompt.bc4301e0.jpg"}});
//# sourceMappingURL=app.1.0.0.1593400965838.js.map