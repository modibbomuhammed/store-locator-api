(this["webpackJsonpstore-locator-client"]=this["webpackJsonpstore-locator-client"]||[]).push([[0],{29:function(e,t,a){e.exports=a(60)},34:function(e,t,a){},41:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),c=(a(34),a(10)),s=a(4),i={stores:[]};a(41);var u=a(15),m=a.n(u),d=a(26),p=a(7);var E=a(27),f=a.n(E),v=Object(s.b)(null,{sendStores:function(e){return{type:"loadStores",payload:e}}})((function(e){var t=e.sendStores,a=Object(n.useState)(""),o=Object(p.a)(a,2),l=o[0],c=o[1],s=function(){var e=Object(d.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="production"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).node_env?"/api/store/closest?post_code=".concat(l):"http://localhost:3000/api/store/closest?post_code=".concat(l),e.next=3,f.a.get(a);case 3:n=e.sent,t(n.data),c("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search-wrapper ui action input"},r.a.createElement("input",{id:"search",type:"text",value:l,placeholder:"Enter your postcode",autoFocus:!0,style:{padding:"12px"},onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"ui button",style:{backgroundColor:"#58B2B5",color:"white"},onClick:function(){return s()}},"Search for store"))}));var h=Object(s.b)((function(e){return e}))((function(e){var t=e.stores.map((function(e,t){var a=e.opening_time.split(";")[0].split("-")[1];return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,r.a.createElement("span",{className:"index"},t+1,"."),"Payzone"),r.a.createElement("i",{className:"fas fa-angle-down"})),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"addy"},e.location.address_three),r.a.createElement("div",{className:"details"},r.a.createElement("span",{className:"close"},r.a.createElement("i",{className:"fas fa-clock",style:{color:"blue",marginLeft:"4px"}}),r.a.createElement("p",{style:{display:"inline-block",marginLeft:"4px"}},"Open until ",a)),r.a.createElement("span",{className:"distance",style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("i",{className:"fas fa-map-marker-alt",style:{color:"blue"}}),r.a.createElement("p",{style:{display:"inline-block",marginLeft:"4px",marginRight:"4px"}},Math.floor(e.distance)," Miles"),r.a.createElement("i",{className:"fas fa-walking"})))))}));return r.a.createElement("div",{style:{flexBasis:"30%"},className:"content-wrapper"},r.a.createElement("div",{className:"store-list"},r.a.createElement("h2",null,"Closest Stores"),r.a.createElement("p",null,"To get the closest stores, enter your postcode."),r.a.createElement("div",{className:"ui styled fluid accordion",style:{paddingRight:"13px"}},t)))})),y=a(62),g=a(63),b=a(64),_=a(65);var N=Object(s.b)((function(e){return e}))((function(e){var t=e.stores.map((function(e){var t=e.location,a=t.lat,n=t.long,o=t.id,l=t.address_three,c=e.phone_number;return r.a.createElement(y.a,{key:o,position:[a,n]},r.a.createElement(g.a,null,"Payzone. ",r.a.createElement("br",null)," ","".concat(l," ").concat(c)))}));return r.a.createElement("div",{style:{flexBasis:"70%"}},r.a.createElement(b.a,{center:[51.505,-.09],zoom:9,scrollWheelZoom:!1},r.a.createElement(_.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t))}));var O=function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"header"},r.a.createElement(v,null)),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(h,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"loadStores":return{stores:n};default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(s.a,{store:w},r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.7926a426.chunk.js.map