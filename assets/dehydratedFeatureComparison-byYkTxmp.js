import{aQ as u}from"./index-Ag4O5CUz.js";function l(e,r){if(e===r)return!0;if(e==null||r==null||e.length!==r.length)return!1;for(let t=0;t<e.length;t++){const n=e[t],a=r[t];if(n.length!==a.length)return!1;for(let i=0;i<n.length;i++)if(n[i]!==a[i])return!1}return!0}function s(e,r){if(e===r)return!0;if(e==null||r==null||e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(!l(e[t],r[t]))return!1;return!0}function f(e,r){return e===r||e!=null&&r!=null&&u(e.spatialReference,r.spatialReference)&&e.x===r.x&&e.y===r.y&&e.z===r.z&&e.m===r.m}function c(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&!!u(e.spatialReference,r.spatialReference)&&s(e.paths,r.paths)}function o(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&!!u(e.spatialReference,r.spatialReference)&&s(e.rings,r.rings)}function h(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&!!u(e.spatialReference,r.spatialReference)&&l(e.points,r.points)}function p(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&!!u(e.spatialReference,r.spatialReference)&&e.xmin===r.xmin&&e.ymin===r.ymin&&e.zmin===r.zmin&&e.xmax===r.xmax&&e.ymax===r.ymax&&e.zmax===r.zmax}function m(e,r){if(e===r)return!0;if(e==null||r==null||e.type!==r.type)return!1;switch(e.type){case"point":return f(e,r);case"extent":return p(e,r);case"polyline":return c(e,r);case"polygon":return o(e,r);case"multipoint":return h(e,r);case"mesh":return!1;default:return}}function g(e,r){if(e===r)return!0;if(!e||!r)return!1;const t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(const a of t)if(e[a]!==r[a])return!1;return!0}function x(e,r){return e===r||e!=null&&r!=null&&e.objectId===r.objectId&&!!m(e.geometry,r.geometry)&&!!g(e.attributes,r.attributes)}export{x as c,f as r};
