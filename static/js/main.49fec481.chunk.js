(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(77),r=a.n(o),l=(a(87),a(40)),i=a(23),s=(a(88),a(81)),m=a(79),u=a(80),h=a.n(u),p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(1),u=Object(i.a)(r,2),p=u[0],d=u[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),b=f[0],w=f[1];Object(n.useEffect)(function(){fetch("https://pixabay.com/api/?key=13085519-d16216777a86c832ae99bc2be"+"&q=".concat(b,"&per_page=4&page=").concat(p)).then(function(e){return e.json()}).then(function(e){o([].concat(Object(l.a)(a),Object(l.a)(e.hits)))})},[b,p]);return console.log(p),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Search for images"),c.a.createElement(m.Debounce,{time:"400",handler:"onChange"},c.a.createElement("input",{style:{padding:"10px 30px"},placeholder:"search query",onChange:function(e){o([]),w(e.target.value),d(1)}})),c.a.createElement("div",{className:"center"},c.a.createElement(h.a,{className:"mason",elementType:"ul"},void 0!==a&&a.map(function(e,t){return c.a.createElement(s.a,{className:"inViewStyle",threshold:0,key:t,as:"div",onChange:function(e){return!(!e||t!==a.length-1)&&void d(p+1)}},c.a.createElement("li",{className:"li",style:{listStyle:"none"}},c.a.createElement("img",{className:"imageStyle",alt:e.tags[0],src:e.largeImageURL})))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(225)},87:function(e,t,a){},88:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.49fec481.chunk.js.map