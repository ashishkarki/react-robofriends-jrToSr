(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{26:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(4),i=t.n(c),a=t(3),s=t(5),l=t(9),u=t(12),d=(t(26),t(1)),h=function(e){var n=e.name,t=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:t})]})]})},b=function(e){var n=e.robots;return console.log("CardList"),Object(d.jsx)("div",{children:n.map((function(e,t){return Object(d.jsx)(h,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},j=function(e){var n=e.searchChange;return console.log("SearchBox"),Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},f=function(e){return Object(d.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=t(10),g=t(11),p=t(14),v=t(13),m=function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(e){var r;return Object(O.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(g.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.a.Component),w=(t(28),"SET_SEARCH_TERM"),E="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED";function S(e){var n=e.title,t=void 0===n?"RoboFriends":n;return console.log("MyHeader.render()"),Object(d.jsx)("h1",{className:"f1",children:t})}var y=o.a.memo(S),T=function(){var e=Object(a.c)((function(e){return e.searchTermReducer})).searchTerm,n=Object(a.c)((function(e){return e.requestRobotsReducer})),t=Object(a.b)(),o=Object(r.useCallback)((function(){return t((function(e){console.log("actions.js - requestRobotsAction",e),e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})}))}),[])}));Object(r.useEffect)((function(){console.log("App.js useEffect, disptaching action"),o()}),[]);var c=n.robots.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return n.isPending?Object(d.jsx)("h1",{children:"Loading"}):Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)(y,{}),Object(d.jsx)(j,{searchChange:function(e){t(function(e){return{type:w,payload:e}}(e.target.value))}}),Object(d.jsx)(f,{children:Object(d.jsx)(m,{children:Object(d.jsx)(b,{robots:c})})})]})},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(29);var k=t(2),N={searchTerm:""},B={isPending:!1,robots:[],error:""},L=Object(l.createLogger)(),U=Object(s.b)({searchTermReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type===w?Object(k.a)(Object(k.a)({},e),{},{searchTerm:n.payload}):e},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("requestRobotsReducer, action:",n,e),n.type){case E:return Object(k.a)(Object(k.a)({},e),{},{isPending:!0});case x:return Object(k.a)(Object(k.a)({},e),{},{robots:n.payload,isPending:!1});case R:return Object(k.a)(Object(k.a)({},e),{},{error:n.payload,isPending:!1});default:return e}}}),P=Object(s.c)(U,Object(s.a)(u.a,L));i.a.render(Object(d.jsx)(a.a,{store:P,children:Object(d.jsx)(T,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-robofriends-jrToSr",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-robofriends-jrToSr","/service-worker.js");C?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):_(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.cff23a6e.chunk.js.map