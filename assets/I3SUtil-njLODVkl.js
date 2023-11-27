import{jm as V,jn as X,i4 as G,fL as z,b8 as U,jo as ue,jp as fe,co as he,jq as pe,jr as de,b6 as ye,js as me,bx as S,jt as be,c7 as Se,d5 as Y,c$ as ge,g0 as v,ju as _,h8 as I,fK as T,jv as ee,i2 as D,jw as we,jx as te,jy as ne,jz as Me,ha as ae,jA as Te,hb as re,jB as A,jC as Ee,hc as ve,jD as Ie,jE as K,jF as xe,jG as Re,fA as je,jH as qe,ee as P,fG as B,i3 as E,jI as O,jJ as Ce}from"./index-9slH3TG2.js";import{I as Ne}from"./I3SBinaryReader-yXkzHnhU.js";function ze(e,t,n,a){const r=De(e,t,n),o=G();return V(n,r,o,a),o}const oe=1,H=5-oe;function De(e,t,n){const a=z(),r=e[3],o=2**(Math.ceil(Math.log(r)*Math.LOG2E/H)*H+oe);if(n.isGeographic){const s=o/X(n).radius*180/Math.PI,c=Math.round(e[1]/s),p=Math.max(-90,Math.min(90,c*s)),h=s/Math.cos((Math.abs(p)-s/2)/180*Math.PI),y=Math.round(e[0]/h)*h;a[0]=y,a[1]=p}else{const s=Math.round(e[0]/o),c=Math.round(e[1]/o);a[0]=s*o,a[1]=c*o}const i=e[2]+t,l=Math.round(i/o);return a[2]=l*o,a}function se(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function it(e){var t;if(ye("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const a of n.geometryBuffers)if(((t=a.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function lt(e,t,n,a){n.traverse(t,r=>{const o=r.mbs;return(o!=null&&$e(e,o))!==M.OUTSIDE&&(a(r),!0)})}function ct(e,t,n){let a=0,r=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(n(o)&&(e[r]=e[a],r++),a++);e.length=r}function ut(e,t,n){let a=0,r=0;for(;a<n.length;)me(e,n[a])>=0===t&&(n[r]=n[a],r++),a++;n.length=r}const x=U();function ft(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return x[0]=(e[0]-t.position[0])/t.rotationScale[0],x[1]=(e[1]-t.position[1])/t.rotationScale[4],x[2]=(e[2]-t.position[0])/t.rotationScale[0],x[3]=(e[3]-t.position[1])/t.rotationScale[4],x}var M;function $e(e,t){const n=t[0],a=t[1],r=t[3],o=e[0]-n,i=n-e[2],l=e[1]-a,s=a-e[3],c=Math.max(o,i,0),p=Math.max(l,s,0),h=c*c+p*p;return h>r*r?M.OUTSIDE:h>0?M.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,i,l,s)>r?M.INSIDE:M.INTERSECTS_CENTER_INSIDE}function Le(e,t,n){const a=[],r=n==null?void 0:n.missingFields,o=n==null?void 0:n.originalFields;for(const i of e){const l=i.toLowerCase();let s=!1;for(const c of t)if(l===c.name.toLowerCase()){a.push(c.name),s=!0,o&&o.push(i);break}!s&&r&&r.push(i)}return a}async function ht(e,t,n,a,r){if(t.length===0)return[];const o=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await We(e.associatedLayer,t,n,a)}catch(i){if(e.associatedLayer.loaded)throw i}if(o){const i=Oe(t,n,r);if(i==null)throw new S("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const l=e.parsedUrl.path;return(await Promise.all(i.map(s=>ke(l,o,s.node,s.indices,a).then(c=>{for(let p=0;p<s.graphics.length;p++){const h=s.graphics[p],y=c[p];if(h.attributes)for(const f in h.attributes)f in y||(y[f]=h.attributes[f]);h.attributes=y}return s.graphics})))).flat()}throw new S("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function Oe(e,t,n){const a=new Map,r=[],o=n();for(const i of e){const l=i.attributes[t];for(let s=0;s<o.length;s++){const c=o[s],p=c.featureIds.indexOf(l);if(p>=0){let h=a.get(c.node);h||(h={node:c.node,indices:[],graphics:[]},r.push(h),a.set(c.node,h)),h.indices.push(p),h.graphics.push(i);for(let y=s;y>0;y--)o[y]=o[y-1];o[0]=c;break}}}return r}async function We(e,t,n,a){t.sort((s,c)=>s.attributes[n]-c.attributes[n]);const r=t.map(s=>s.attributes[n]),o=[],i=Le(a,e.fields,{originalFields:o}),l=await ie(e,r,i);for(let s=0;s<t.length;s++){const c=t[s],p=l[s],h={};if(c.attributes)for(const y in c.attributes)h[y]=c.attributes[y];for(let y=0;y<o.length;y++)h[o[y]]=p[i[y]];c.attributes=h}return t}function ie(e,t,n){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const o=be(t,a);return Promise.all(o.map(i=>ie(e,i,n))).then(i=>i.flat())}const r=new Se({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(r).then(o=>{if(o&&o.features&&o.features.length===t.length)return o.features.map(i=>i.attributes);throw new S("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function ke(e,t,n,a,r){return Fe(e,t,n.resources.attributes,a,r)}async function Fe(e,t,n,a,r){const o=[];for(const s of t)if(s&&r.includes(s.name)){const c=`${e}/nodes/${n}/attributes/${s.key}/0`;o.push({url:c,storageInfo:s})}const i=await Promise.allSettled(o.map(s=>he(s.url,{responseType:"array-buffer"}).then(c=>Ne(s.storageInfo,c.data)))),l=[];for(const s of a){const c={};for(let p=0;p<i.length;p++){const h=i[p];if(h.status==="fulfilled"){const y=h.value;c[o[p].storageInfo.name]=_e(y,s)}}l.push(c)}return l}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(M||(M={}));const Ge=-32768,Ue=-(2**31);function _e(e,t){if(!e)return null;const n=e[t];return pe(e)?n===Ge?null:n:de(e)?n===Ue?null:n:n!=n?null:n}function Ae(e){const t=e.store,n=t.indexCRS||t.geographicCRS,a=n===void 0?t.indexWKT:void 0;if(a){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new Y(se(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function Ke(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,a=n===void 0?t.vertexWKT:void 0;if(a){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new Y(se(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function pt(e,t){return t==null?"@null":t===v(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function k(e,t,n){if(!ge(e,t))throw new S("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Pe(e,t))throw new S("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function dt(e,t,n){var a,r,o,i;if(((a=e.serviceUpdateTimeStamp)==null?void 0:a.lastUpdate)!==((r=t.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)||!n.isEmpty||((o=e.associatedLayer)==null?void 0:o.url)!==((i=t.associatedLayer)==null?void 0:i.url))throw new S("layerview:recycle-failed")}function Pe(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function Be(e,t,n){const a=Ae(e),r=Ke(e);k(a,t,n),k(r,t,n)}function He(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function yt(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!He(e.store.defaultGeometrySchema))throw new S("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function mt(e,t){Be(e,t.spatialReference,t.viewingMode)}function Je(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function bt(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Je(e.store.defaultGeometrySchema))throw new S("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function St(e,t){k(e.spatialReference,t.spatialReference,t.viewingMode)}function Ze(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function Qe(e){return e.type==="mesh-3d"}function gt(e){var n;if(e==null||!Ze(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const a of t){if(!Qe(a)||a.symbolLayers.length===0)return!0;for(const r of a.symbolLayers.items)if(r.type!=="fill"||((n=r.material)==null?void 0:n.color)==null||r.material.colorMixMode!=="replace")return!0}return!1}const wt=ue({color:[0,0,0,0],opacity:0});class Ve{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Mt(e){const t=new Ve;let n=!1,a=!1;for(const r of e.symbolLayers.items)if(r.type==="fill"&&r.enabled){const o=r.material,i=r.edges;if(o!=null&&!n){const l=o.color,s=Ie(o.colorMixMode);t.material=l!=null?{color:[l.r/255,l.g/255,l.b/255],alpha:l.a,colorMixMode:s}:{color:[1,1,1],alpha:1,colorMixMode:K.Multiply},t.castShadows=r.castShadows,n=!0}i==null||a||(t.edgeMaterial=xe(i,{}),a=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:K.Multiply}),t}function Tt(e,t){return(0|e)+(0|t)|0}function Xe(e,t,n,a,r=0){a===v(a)?t.isGeographic?rt(e,n,t,r):at(e,n,t,r):t.isWGS84&&(a.isWebMercator||_(a))?Ye(t,e,a,n,r):t.isWebMercator&&_(a)?nt(t,e,a,n,r):e===n?(n.center[2]+=r,I(n.center,t,0,n.center,a,0,1)):(T(n.center,e.center[0],e.center[1],e.center[2]+r),I(n.center,t,0,n.center,a,0,1),ee(n.quaternion,e.quaternion),D(n.halfSize,e.halfSize))}function Ye(e,t,n,a,r){D(w,t.center),w[2]+=r;const o=v(n);I(w,e,0,w,o,0,1),le(o,t,w,n,a)}const N=new Array(24),et=new Re(N,3),J=z(),w=z(),tt=je();function nt(e,t,n,a,r){D(w,t.center),w[2]+=r,le(e,t,w,n,a)}function le(e,t,n,a,r){const o=we(tt,t.quaternion);for(let i=0;i<8;++i){for(let l=0;l<3;++l)J[l]=t.halfSize[l]*(i&1<<l?-1:1);for(let l=0;l<3;++l){let s=n[l];for(let c=0;c<3;++c)s+=J[c]*o[3*c+l];N[3*i+l]=s}}I(N,e,0,N,a,0,8),te(et,r)}function at(e,t,n,a){ne(e,F),T(t.center,e.center[0],e.center[1],e.center[2]+a),V(n,t.center,b,v(n)),T(t.center,b[12],b[13],b[14]);const r=2*Math.sqrt(1+b[0]+b[5]+b[10]);g[0]=(b[6]-b[9])/r,g[1]=(b[8]-b[2])/r,g[2]=(b[1]-b[4])/r,g[3]=.25*r,Me(t.quaternion,g,e.quaternion),ae(g,t.quaternion);let o=0,i=0,l=0;for(const s of F)s[2]+=a,I(s,n,0,s,v(n),0,1),Te(u,s,t.center),re(u,u,g),o=Math.max(o,Math.abs(u[0])),i=Math.max(i,Math.abs(u[1])),l=Math.max(l,Math.abs(u[2]));T(t.halfSize,o,i,l)}function rt(e,t,n,a){const r=X(n),o=1+Math.max(0,a)/(r.radius+e.center[2]);T(t.center,e.center[0],e.center[1],e.center[2]+a),I(t.center,n,0,t.center,v(n),0,1),ee(t.quaternion,e.quaternion),ae(g,e.quaternion),T(u,0,0,1),re(u,u,g),T(u,e.halfSize[0]*Math.abs(u[0]),e.halfSize[1]*Math.abs(u[1]),e.halfSize[2]*Math.abs(u[2])),A(u,u,r.inverseFlattening),Ee(t.halfSize,e.halfSize,u),A(t.halfSize,t.halfSize,o)}function Et(e,t,n,a,r,o){if(!o||o.length===0||t==null||!e.mbs)return null;const i=ze(e.mbs,r,n,t);qe(C,i);let l=null;const s=()=>{if(!l)if(l=F,P(q),e.serviceObb!=null){Xe(e.serviceObb,n,Z,t,r),ne(Z,l);for(const f of l)E(f,f,C),O(q,f)}else{const f=e.mbs;if(!f)return;const d=f[3];B(f,n,u,t),E(u,u,C),u[2]+=r;for(let m=0;m<8;++m){const R=1&m?d:-d,$=2&m?d:-d,L=4&m?d:-d,j=l[m];D(j,[u[0]+R,u[1]+$,u[2]+L]),O(q,j)}}};let c=1/0,p=-1/0;const h=f=>{if(f.type!=="replace")return;const d=f.geometry;if(!(d!=null&&d.hasZ))return;P(W);const m=d.spatialReference||a,R=d.rings.reduce(($,L)=>L.reduce((j,ce)=>(B(ce,m,u,t),E(u,u,C),O(W,u),Math.min(u[2],j)),$),1/0);s(),Ce(q,W)&&(c=Math.min(c,R),p=Math.max(p,R))};if(o.forEach(f=>h(f)),c===1/0)return null;const y=(f,d,m)=>{E(u,m,i),f[d]=u[0],f[d+1]=u[1],f[d+2]=u[2],d+=24,m[2]=c,E(u,m,i),f[d]=u[0],f[d+1]=u[1],f[d+2]=u[2],d+=24,m[2]=p,E(u,m,i),f[d]=u[0],f[d+1]=u[1],f[d+2]=u[2]};for(let f=0;f<8;++f)y(Q.data,3*f,l[f]);return te(Q)}function vt(e){return e!=null&&e.halfSize[0]>=0}function It(e){return e[3]>=0}function xt(e){e!=null&&(e.halfSize[0]=-1)}function Rt(e){e!=null&&(e[3]=-1)}const b=G(),g=ve(),F=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],W=U(),q=U(),Z=fe(),u=z(),Q={data:new Array(72),size:3,exclusive:!0,stride:3},C=G();export{it as $,xt as B,St as E,vt as G,ft as J,It as K,Et as L,gt as M,Rt as P,ct as Q,wt as R,mt as S,bt as T,lt as V,M as X,$e as Y,ut as Z,De as a,yt as b,_e as c,Le as e,Ke as f,dt as h,Fe as i,Xe as k,k as m,pt as p,Tt as q,ze as r,ht as t,Ae as u,Mt as x,Be as y};