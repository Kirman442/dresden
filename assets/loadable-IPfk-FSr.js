import{cl as t}from"./index-Ag4O5CUz.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const n=new WeakMap,o=new WeakMap;function c(e){o.set(e,new Promise(a=>n.set(e,a)))}function i(e){n.get(e)()}function s(e){return o.get(e)}async function p(e){return await s(e),t(e),new Promise(a=>requestAnimationFrame(()=>a()))}export{i as a,s as b,p as c,c as s};
