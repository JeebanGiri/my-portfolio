import './polyfills.server.mjs';
var d=(e,n)=>{e.componentOnReady?e.componentOnReady().then(t=>n(t)):u(()=>n(e))};var c=(e,n,t,r)=>{var a;if(typeof window<"u"){let o=window,i=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(i){let s=i.get("_ael");if(s)return s(e,n,t,r);if(i._ael)return i._ael(e,n,t,r)}}return e.addEventListener(n,t,r)},l=(e,n,t,r)=>{var a;if(typeof window<"u"){let o=window,i=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(i){let s=i.get("_rel");if(s)return s(e,n,t,r);if(i._rel)return i._rel(e,n,t,r)}}return e.removeEventListener(n,t,r)};var u=e=>typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(e):typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e);var f=(e,n,t)=>Math.max(e,Math.min(n,t));var h=e=>{if(e){let n=e.changedTouches;if(n&&n.length>0){let t=n[0];return{x:t.clientX,y:t.clientY}}if(e.pageX!==void 0)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}};export{d as a,c as b,l as c,u as d,f as e,h as f};
