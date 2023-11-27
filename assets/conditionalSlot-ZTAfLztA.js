import{cl as c}from"./index-Ag4O5CUz.js";import{c as i}from"./observers-4as_h_Yq.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const n=new Set;let e;const r={childList:!0};function d(o){e||(e=i("mutation",s)),e.observe(o.el,r)}function f(o){n.delete(o.el),s(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,r)}function s(o){o.forEach(({target:t})=>{c(t)})}export{d as c,f as d};
