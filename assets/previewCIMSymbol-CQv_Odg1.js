import{gz as w,hh as b,hq as O,hg as v,hm as j}from"./index-Ag4O5CUz.js";import{b as G,n as d}from"./cimAnalyzer-Y6KRRNJw.js";import{CIMSymbolRasterizer as R}from"./CIMSymbolRasterizer-R2zJOnQH.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-BKkv7j8P.js";import"./GeometryUtils-CEMOhUyj.js";import"./alignmentUtils-XT3TYmYW.js";import"./definitions-r4s07KTk.js";import"./number-sTjsTbdA.js";import"./Rect-pT1ASav_.js";import"./CIMResourceManager-0li5W5tt.js";import"./Rasterizer-Xuz92Dca.js";import"./rasterizingUtils-lTSAjcCA.js";const h=new R(null,!0),u=w(b.size),S=w(b.maxSize),C=w(b.lineWidth),q=1;async function V(a,e,r){const i=e==null?void 0:e.size;let t=i!=null&&typeof i=="object"&&"width"in i?i.width:i,n=i!=null&&typeof i=="object"&&"height"in i?i.height:i;if(t==null||n==null)if(r==="esriGeometryPolygon")t=u,n=u;else{const l=await $(a,e,r);l&&(t=l.width,n=l.height),r==="esriGeometryPolyline"&&(t=C),t=t!=null&&isFinite(t)?Math.min(t,S):u,n=n!=null&&isFinite(n)?Math.max(Math.min(n,S),q):u}return e.style==="legend"&&r==="esriGeometryPolyline"&&(t=C),{width:t,height:n}}async function $(a,e,r){const{feature:i,fieldMap:t,viewParams:n}=e.cimOptions||e,l=await G.resolveSymbolOverrides(a.data,i,null,t,r,null,n);if(!l)return null;(a=a.clone()).data={type:"CIMSymbolReference",symbol:l},a.data.primitiveOverrides=void 0;const o=[];return d.fetchResources(l,h.resourceManager,o),d.fetchFonts(l,h.resourceManager,o),o.length>0&&await Promise.all(o),d.getEnvelope(l,null,h.resourceManager)}async function X(a,e={}){var M;const{node:r,opacity:i,symbolConfig:t}=e,n=t!=null&&typeof t=="object"&&"isSquareFill"in t&&t.isSquareFill,l=e.cimOptions||e,o=l.geometryType||O((M=a==null?void 0:a.data)==null?void 0:M.symbol),p=await V(a,e,o),{feature:P,fieldMap:z}=l,I=n||o!=="esriGeometryPolygon"?"preview":"legend",y=await h.rasterizeCIMSymbolAsync(a,P,p,I,z,o,null,l.viewParams,l.allowScalingUp);if(!y)return null;const{width:L,height:x}=y,m=document.createElement("canvas");m.width=L,m.height=x,m.getContext("2d").putImageData(y,0,0);const f=v(p.width),g=v(p.height),s=new Image(f,g);s.src=m.toDataURL(),s.ariaLabel=e.ariaLabel??null,s.alt=e.ariaLabel??"",i!=null&&(s.style.opacity=`${i}`);let c=s;if(e.effectView!=null){const F={shape:{type:"image",x:0,y:0,width:f,height:g,src:s.src},fill:null,stroke:null,offset:[0,0]};c=j([[F]],[f,g],{effectView:e.effectView,ariaLabel:e.ariaLabel})}return r&&c&&r.appendChild(c),c}export{X as previewCIMSymbol};
