import{l5 as P,d5 as D,l6 as q,l7 as E,dp as z,l8 as G,l9 as A,la as B,lb as H,lc as J,cO as N}from"./index-etWHd6DB.js";async function $(a,l,d,p,o){const{elevationProvider:u,renderCoordsHelper:c}=a,{elevationInfo:g}=l,{pointsInFeatures:w,spatialReference:h}=p,y=D.fromJSON(h),I=q(g,!0),m=await E(I,y,o);z(o);const i=[],e=new Set,t=new Set;f.spatialReference=y;const s=a.elevationProvider.spatialReference??a.spatialReference;for(const{objectId:n,points:r}of w){const b=d(n);if(b==null){for(const R of r)i.push(R.z??0);e.add(n);continue}b.isDraped&&t.add(n);const O=b.graphic.geometry;S.setFromElevationInfo(G(O,g)),S.updateFeatureExpressionInfoContext(m,b.graphic,l);for(const{x:R,y:C,z:F}of r)f.x=R,f.y=C,f.z=F??0,await A(f,j,s,0,{signal:o}),B(j,u,S,c,v),i.push(v.z)}return{elevations:i,drapedObjectIds:t,failedObjectIds:e}}const S=new H,f=P(0,0,0,D.WGS84),v=new J,j=[0,0,0];async function k(a,l,d){if(a==null||l.candidates.length===0)return x;const p=a.graphics3DGraphicsByObjectID??a.graphics3DGraphics,o=[],u=[],{renderer:c}=a,g=c!=null&&"arcadeRequired"in c&&c.arcadeRequired?N():null,w=async(e,{graphic:t,graphics3DSymbol:s})=>{const n=await g,r=await a.getRenderingInfoAsync(t,c,n,{signal:d});return r==null?[]:s.queryForSnapping(e,y,r,d)},{candidates:h,spatialReference:y}=l;for(let e=0;e<h.length;++e){const t=h[e],{objectId:s}=t,n=typeof s=="number"?p==null?void 0:p.get(s):void 0;if(n==null)continue;const{graphics3DSymbol:r}=n;r.symbologySnappingSupported&&(o.push(w(t,n)),u.push(e))}if(o.length===0)return x;const I=await Promise.all(o);z(d);const m=[],i=[];for(let e=0;e<I.length;++e){const t=I[e],s=u[e];for(const n of t)m.push(n),i.push(s)}return{candidates:m,sourceCandidateIndices:i}}const x={candidates:[],sourceCandidateIndices:[]};export{$ as c,k as r};