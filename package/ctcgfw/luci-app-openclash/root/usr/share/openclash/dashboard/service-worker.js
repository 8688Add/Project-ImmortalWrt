if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}})).then(e=>{const s=c(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-8a532145"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"b1a27ccef352baebb9667369555f9309"},{url:"./static/css/main.83e4b341.chunk.css",revision:"5a48466e5ff2a8ceec3348c3c498c260"},{url:"./static/js/2.4c19c7e9.chunk.js",revision:"d46b87667ddd715dd648d1ef8779c0b7"},{url:"./static/js/2.4c19c7e9.chunk.js.LICENSE.txt",revision:"176c1a1a28b19c611d9701905d8d60b7"},{url:"./static/js/main.33688145.chunk.js",revision:"62d6fab15c25a50205f635111e4e9e01"},{url:"./static/js/runtime-main.fefd5bb9.js",revision:"98f4f314ef9abb714a6c74c41e1e5a04"},{url:"./static/media/logo.45983944.png",revision:"198a55c9efe85ab0145d4402c07cfe65"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));