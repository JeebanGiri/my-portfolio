import './polyfills.server.mjs';
var n=class{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,o){let t=this.m.get(e);return t!==void 0?t:o}getBoolean(e,o=!1){let t=this.m.get(e);return t===void 0?o:typeof t=="string"?t==="true":!!t}getNumber(e,o){let t=parseFloat(this.m.get(e));return isNaN(t)?o!==void 0?o:NaN:t}set(e,o){this.m.set(e,o)}},i=new n;export{i as a};
