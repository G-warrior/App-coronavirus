(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var i=s[r];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},o=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0ea70bc"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=r(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,s[1](u)}n[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/app-coronavirus/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3a7d":function(e,t,s){},4458:function(e,t,s){"use strict";s("77c8")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Header"),s("router-view")],1)},o=[],r=s("5530"),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"w-100 bg-dark p-2 "},[e._m(0),s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"h4 text-center text-primary"},[s("i",{staticClass:"fas fa-head-side-mask"}),e._v("Coronavirus")])}],u={name:"Header"},l=u,d=s("2877"),f=Object(d["a"])(l,c,i,!1,null,null,null),b=f.exports,j=s("2f62"),m={name:"App",components:{Header:b},methods:Object(r["a"])(Object(r["a"])({},Object(j["b"])(["obtenerDatos"])),Object(j["c"])(["traerDatos"])),computed:Object(r["a"])({},Object(j["d"])(["cargarDatos, titulo, Fecha, Estado, Ciudades, cosas, dataApi,spinner"])),created:function(){return this.spinner=!0,this.obtenerDatos()}},p=m,v=Object(d["a"])(p,n,o,!1,null,null,null),h=v.exports,_=s("1da1"),g=(s("96cf"),s("bc3a")),O=s.n(g);a["a"].use(j["a"]);var y=new j["a"].Store({state:{cargaDatos:!0,Titulo:"Global",Fecha:"",Estado:{},Paises:[],dataApi:[],spinner:!0,nuevosCasos:"",nuevosmuertos:"",totalMuertos:"",totalCasos:""},actions:{obtenerDatos:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.next=3,O.a.get("https://api.covid19api.com/summary").then((function(e){var t=e;return console.log(t),s("traerDatos",t.data)}));case 3:case"end":return t.stop()}}),t)})))()},tomarPais:function(e,t){var s=e.commit;return console.log(t),s("ponerPais",t)}},mutations:{traerDatos:function(e,t){e.dataApi=t,e.Fecha=t.Date,e.Paises=t.Countries,e.Estado=t.Global,e.spinner=!1,e.nuevosCasos=t.Global.NewConfirmed,e.nuevosMuertos=t.Global.NewDeaths,e.totalCasos=t.Global.TotalConfirmed,e.totalMuertos=t.Global.TotalDeaths,console.log("estos son todos lo muertos"+e.totalMuertos),console.log(e.totalCasos),console.log(e.dataApi)},ponerPais:function(e){console.log(e.ID)}},getters:{}}),D=(s("f9e3"),s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("main",[e.spinner?e._e():s("Main"),e._l(e.traerDatos,(function(t,a){return s("div",{key:a},[s("p",[e._v(e._s(t))])])}))],2),e.spinner?s("main",[s("div",{staticClass:"spinner-6"})]):e._e()])},w=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main my-5"},[s("div",{staticClass:"text-center"},[s("p",[e._v(e._s(e.fechaActual))])]),s("Datos1")],1)},P=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"text-bold text-center"},[e._v(e._s(e.mostrarDatosDePais.Country))]),s("div",{staticClass:"d-flex mb-5 text-center"},[s("div",{staticClass:"alert-primary w-25 mx-auto my-3 h-25 rounded text-center"},[s("h3",[e._v("Casos")]),s("p",[e._v("Nuevos:"),e.mostrarDatosDePais?e._e():s("strong",[e._v(" "+e._s(e.nuevosCasos))]),s("strong",[e._v(" "+e._s(e.mostrarDatosDePais.NewConfirmed))])]),s("p",[e._v("Total:"),e.mostrarDatosDePais?e._e():s("strong",[e._v(" "+e._s(e.totalCasos))]),s("strong",[e._v(" "+e._s(e.mostrarDatosDePais.TotalConfirmed))])]),s("strong")]),s("div",{staticClass:"alert-primary w-25 mx-auto my-3 h-25 rounded text-center"},[s("h3",[e._v("Muertes")]),s("p",[e._v("Nuevos:"),e.mostrarDatosDePais?e._e():s("strong",[e._v(" "+e._s(e.nuevosMuertos))]),s("strong",[e._v(" "+e._s(e.mostrarDatosDePais.NewDeaths))])]),s("p",[e._v("Total:"),e.mostrarDatosDePais?e._e():s("strong",[e._v(" "+e._s(e.totalMuertos))]),s("strong",[e._v(" "+e._s(e.mostrarDatosDePais.TotalDeaths))])])])]),s("Opciones",{on:{datosPaisSeleccionado:function(t){e.mostrarDatosDePais=t}}})],1)},z=[],M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"m-auto w-50"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.seleccionado,expression:"seleccionado"}],staticClass:"form-control",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.seleccionado=t.target.multiple?s:s[0]},function(t){return e.switchPais()}]}},[s("option",{attrs:{value:"0"}},[e._v("Seleccione un pais")]),e._l(e.dataApi.Countries,(function(t){return s("option",{key:t.ID},[e._v(e._s(t.Country))])}))],2)])},A=[],T=(s("7db0"),{name:"Opciones",props:["datosPaisSeleccionado"],data:function(){return{seleccionado:"",Titulo:"",dataApi:this.dataApi,Paises:this.dataApi.Countries.Country}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(j["c"])(["traerDatos","ponerPais"])),Object(j["b"])(["obtenerDatos","tomarPais"])),{},{chequiar:function(e){console.log(e)},switchPais:function(){var e=this,t=this.Paises.find((function(t){return t.Country===e.seleccionado}));return this.$emit("datosPaisSeleccionado",t),console.log(t)}}),computed:Object(r["a"])({},Object(j["d"])({Paises:function(e){return e.Paises},dataApi:function(e){return e.dataApi}})),created:{setPaises:function(){}}}),E=T,S=Object(d["a"])(E,M,A,!1,null,null,null),N=S.exports,$={name:"Datos1",data:function(){return{mostrarDatosDePais:""}},components:{Opciones:N},methods:Object(r["a"])(Object(r["a"])({},Object(j["c"])(["traerDatos"])),Object(j["b"])(["obtenerDatos"])),computed:Object(r["a"])({},Object(j["d"])(["Titulo","nuevosCasos","nuevosMuertos","totalCasos","totalMuertos"]))},G=$,H=Object(d["a"])(G,x,z,!1,null,null,null),q=H.exports,F=s("c1df"),Y=s.n(F),L={name:"Main",components:{Datos1:q},computed:Object(r["a"])({fechaActual:function(){return Y()(this.fecha).format("MMMM Do YYYY h:mm:ss a")}},Object(j["d"])({Titulo:function(e){return e.Titulo}})),methods:Object(r["a"])(Object(r["a"])({},Object(j["c"])(["traerDatos"])),Object(j["b"])(["obtenerDatos"]))},I=L,J=(s("c266"),Object(d["a"])(I,C,P,!1,null,null,null)),R=J.exports,U={name:"Home",components:{Main:R},methods:Object(r["a"])(Object(r["a"])({},Object(j["b"])(["obtenerDatos"])),Object(j["c"])(["traerDatos"])),computed:Object(r["a"])(Object(r["a"])({},Object(j["d"])(["dataApi","spinner"])),{},{Paises:function(){return this.dataApi}})},B=U,K=(s("4458"),Object(d["a"])(B,k,w,!1,null,"816c32c4",null)),Q=K.exports;a["a"].use(D["a"]);var V=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],W=new D["a"]({routes:V}),X=W;a["a"].config.productionTip=!1,new a["a"]({store:y,router:X,render:function(e){return e(h)}}).$mount("#app")},"77c8":function(e,t,s){},c266:function(e,t,s){"use strict";s("3a7d")}});
//# sourceMappingURL=app.56ff2368.js.map