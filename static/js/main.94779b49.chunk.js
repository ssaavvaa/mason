(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(76),r=a.n(o),i=(a(86),a(23)),l=(a(87),a(80)),s=a(78),m=a(79),u=a.n(m),d=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(10),m=Object(i.a)(r,2),d=m[0],h=m[1],g=Object(n.useState)(""),p=Object(i.a)(g,2),f=p[0],b=p[1];Object(n.useEffect)(function(){fetch("https://pixabay.com/api/?key=13085519-d16216777a86c832ae99bc2be"+"&q=".concat(f,"&per_page=").concat(d)).then(function(e){return e.json()}).then(function(e){o(e)})},[d,f]);var v=a.hits;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Search for images"),c.a.createElement(s.Debounce,{time:"400",handler:"onChange"},c.a.createElement("input",{style:{padding:"10px 30px"},placeholder:"search query",onChange:function(e){b(e.target.value),h(30)}})),c.a.createElement("div",{className:"center"},c.a.createElement(u.a,{className:"mason",elementType:"ul",disableImagesLoaded:!1,updateOnEachImageLoad:!0},void 0!==v&&a.hits.map(function(e,t){return c.a.createElement(l.a,{className:"inViewStyle",threshold:0,key:t,triggerOnce:!0,as:"div",onChange:function(e){return!(!e||t!==d-1)&&void h(d+5)}},c.a.createElement("li",{className:"li",style:{listStyle:"none"}},c.a.createElement("img",{className:"imageStyle",alt:e.tags[0],src:e.largeImageURL})))}))),void 0!==v&&!v.length&&c.a.createElement("h3",null,"nothing was found"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(224)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.94779b49.chunk.js.map