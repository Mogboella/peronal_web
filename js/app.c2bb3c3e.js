(function(t){function e(e){for(var r,o,i=e[0],u=e[1],l=e[2],c=0,h=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"cfd8d424"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t);var l=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",l.name="ChunkLoadError",l.type=r,l.request=s,a[1](l)}n[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/personal_web/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var f=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("7496"),s=a("40dc"),o=a("8336"),i=a("132d"),u=a("adda"),l=a("f6c4"),c=a("2fa4"),f=function(){var t=this,e=t._self._c;return e(n["a"],[e(s["a"],{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u["a"],{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u["a"],{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c["a"]),e(o["a"],{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(i["a"],[t._v("mdi-open-in-new")])],1)],1),e(l["a"],[e("router-view")],1)],1)},h=[],p={name:"App",data:()=>({})},d=p,m=a("2877"),v=Object(m["a"])(d,f,h,!1,null,null,null),y=v.exports,b=a("8c4f"),g=function(){var t=this,e=t._self._c;return e("hello-world")},w=[],_=a("62ad"),x=a("a523"),j=a("0fd9"),k=function(){var t=this,e=t._self._c;return e(x["a"],[e(j["a"],{staticClass:"text-center"},[e(_["a"],{attrs:{cols:"12"}},[e(u["a"],{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),e(_["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(_["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(j["a"],{attrs:{justify:"center"}},t._l(t.whatsNext,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(_["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(j["a"],{attrs:{justify:"center"}},t._l(t.importantLinks,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1),e(_["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(j["a"],{attrs:{justify:"center"}},t._l(t.ecosystem,(function(a,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:a.href,target:"_blank"}},[t._v(" "+t._s(a.text)+" ")])})),0)],1)],1)],1)},C=[],O={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},P=O,L=Object(m["a"])(P,k,C,!1,null,null,null),S=L.exports,T={name:"Home",components:{HelloWorld:S}},E=T,M=Object(m["a"])(E,g,w,!1,null,null,null),V=M.exports;r["a"].use(b["a"]);const q=[{path:"/",name:"home",component:V},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"d7a9"))}],A=new b["a"]({routes:q});var W=A,H=a("f309");r["a"].use(H["a"]);var N=new H["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:W,vuetify:N,render:t=>t(y)}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.c2bb3c3e.js.map