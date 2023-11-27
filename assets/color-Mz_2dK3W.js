import{aT as _,iE as b,bx as E,iG as I,iH as S,bB as m,iI as v,iw as d}from"./index-Ag4O5CUz.js";import{E as i,S as T,I as g}from"./enums-uBkgX7tf.js";import{x as U}from"./number-sTjsTbdA.js";const y=_.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",C=[{name:c,strideInBytes:12}],O=[{name:c,strideInBytes:36}],$=[{name:c,strideInBytes:24}],F=[{name:c,strideInBytes:12}],x=[{name:c,strideInBytes:40}],P=[{name:c,strideInBytes:36}],z=[{name:c,strideInBytes:36}];function l(t){const n={};for(const e of t)n[e.name]=e.strideInBytes;return n}const G=l([{name:c,strideInBytes:36}]),k=l(C),H=l(O),V=l($),Y=l(F),q=l(x),K=l(P),W=l(z);function ft(t,n){switch(t){case i.MARKER:return n===T.HEATMAP?k:G;case i.FILL:switch(n){case T.DOT_DENSITY:return Y;case T.SIMPLE:case T.OUTLINE_FILL_SIMPLE:return V;default:return H}case i.LINE:return q;case i.TEXT:return K;case i.LABEL:return W}}const X=[c],J=[c],Q=[c],Z=[c],j=[c];function tt(t){switch(t){case i.MARKER:return X;case i.FILL:return J;case i.LINE:return Q;case i.TEXT:return Z;case i.LABEL:return j}}function nt(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function dt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function mt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function yt(t){return t!=null}function pt(t){return typeof t=="number"}function It(t){switch(t){case"butt":return I.BUTT;case"round":return I.ROUND;case"square":return I.SQUARE;default:return y.error(new E("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),I.ROUND}}function St(t){switch(t){case"miter":return S.MITER;case"bevel":return S.BEVEL;case"round":return S.ROUND;default:return y.error(new E("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),S.ROUND}}function Tt(t){switch(t){case"opacity":return g.OPACITY;case"color":return g.COLOR;case"rotation":return g.ROTATION;case"size":return g.SIZE;default:return y.error(`Cannot interpret unknown vv: ${t}`),null}}function gt(t,n,e,r,a,u,s){for(const f in u){const o=u[f].stride,w=nt(o),L=u[f].data,N=e[f].data;if(L==null||N==null)continue;const M=o*a.vertexCount/w,B=o*t/w,R=o*a.vertexFrom/w;for(let p=0;p<M;++p)N[p+B]=L[p+R]}if(s!=null&&r!=null){const f=a.indexCount;for(let o=0;o<f;++o)r[o+n]=s[o+a.indexFrom]-a.vertexFrom+t}}const Et={[c]:b.STATIC_DRAW};function wt(t,n){const e=[];for(let r=0;r<5;++r){const a=tt(r),u={};for(const s of a)u[s]={data:n(r,s)};e.push({data:t(r),buffers:u})}return e}function et(t){switch(t){case d.BYTE:case d.UNSIGNED_BYTE:return 1;case d.SHORT:case d.UNSIGNED_SHORT:return 2;case d.FLOAT:case d.INT:case d.UNSIGNED_INT:return 4}}function ht(t){switch(t){case m.UNSIGNED_BYTE:return 1;case m.UNSIGNED_SHORT_4_4_4_4:return 2;case m.FLOAT:return 4;default:return void y.error(new E("webgl-utils",`Unable to handle type ${t}`))}}function Lt(t){switch(t){case m.UNSIGNED_BYTE:return Uint8Array;case m.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case m.FLOAT:return Float32Array;default:return void y.error(new E("webgl-utils",`Unable to handle type ${t}`))}}function rt(t){var e;const n={};for(const r in t){const a=t[r];let u=0;n[r]=a.map(s=>{const f=new v(s.name,s.count,s.type,u,0,s.normalized||!1);return u+=s.count*et(s.type),f}),(e=n[r])==null||e.forEach(s=>s.stride=u)}return n}const at=t=>{const n=new Map;for(const e in t)for(const r of t[e])n.set(r.name,r.location);return n},st=t=>{const n={};for(const e in t){const r=t[e];n[e]=r!=null&&r.length?r[0].stride:0}return n},h=new Map,Nt=(t,n)=>{if(!h.has(t)){const e=rt(n),r={strides:st(e),bufferLayouts:e,attributes:at(n)};h.set(t,r)}return h.get(t)};function Dt(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const At=t=>"path"in t&&it(t.path),Ut=t=>!(!("url"in t)||!t.url)||!(!("imageData"in t)||!t.imageData),Mt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,D=t=>t!=null&&t.startsWith("data:image/gif"),Bt=t=>"url"in t&&t.url&&(t.url.includes(".gif")||D(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&D(t.imageData),A=t=>t!=null&&t.startsWith("data:image/png"),Rt=t=>"url"in t&&t.url&&(t.url.includes(".png")||A(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&A(t.imageData),_t=t=>t.type&&t.type.toLowerCase().includes("3d");function bt(t){switch(t.type){case"line":{const n=t;return n.cim.type==="CIMSolidStroke"&&!n.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}function vt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return ct(t);default:return!0}}function Ct(t){const n="maxVVSize"in t&&t.maxVVSize,e="width"in t&&t.width||"size"in t&&t.size||0;return n||e}function Ot(t){const n=[];for(let e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}const it=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),ct=t=>{var n,e;return t.type==="fill"&&((e=(n=t==null?void 0:t.cim)==null?void 0:n.markerPlacement)==null?void 0:e.type)==="CIMMarkerPlacementInsidePolygon"};function $t(t,n=0,e=!1){const r=t[n+3];return t[n]*=r,t[n+1]*=r,t[n+2]*=r,e||(t[n+3]*=255),t}function Ft(t){if(!t)return 0;const{r:n,g:e,b:r,a}=t;return U(n*a,e*a,r*a,255*a)}function xt(t){if(!t)return 0;const[n,e,r,a]=t;return U(n*(a/255),e*(a/255),r*(a/255),a)}function Pt(t,n,e=0){if(n==null)return t[e]=0,t[e+1]=0,t[e+2]=0,void(t[e+3]=0);const{r,g:a,b:u,a:s}=n;t[e]=r*s/255,t[e+1]=a*s/255,t[e+2]=u*s/255,t[e+3]=s}export{pt as $,nt as F,St as G,wt as H,ht as K,dt as P,ft as R,Tt as V,Lt as W,Et as Y,Ut as a,Pt as b,xt as c,Ot as d,Nt as e,vt as f,Ft as g,Bt as i,gt as j,It as k,bt as l,Ct as m,At as n,Rt as o,$t as r,Mt as s,Dt as t,_t as u,mt as x,ct as y,yt as z};