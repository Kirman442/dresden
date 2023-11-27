import{is as rt,bC as F,bz as j,iF as b,iv as O,h as st,iE as ot,f as lt,qz as $,iw as z,qA as ft,qB as N,qC as X,ok as K,iB as ut}from"./index-Ag4O5CUz.js";import{r as ct}from"./vec4f32-NvfHy9q7.js";import{e as A,a as et,r as J}from"./definitions-r4s07KTk.js";import{T as k}from"./enums-uBkgX7tf.js";import{M as H}from"./number-sTjsTbdA.js";import{c as Z}from"./GeometryUtils-b9mbMeHJ.js";class Y{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(i,e){}draw(i,e,t){}drawMany(i,e,t){for(const o of e)o.visible&&this.draw(i,o,t)}}let ht=class extends Y{constructor(){super(...arguments),this._color=ct(1,0,0,1),this._patternMatrix=rt(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(i,e){const{context:t,painter:o,styleLayerUID:l,requestRender:n,allowDelayedRender:v}=i;this._loadWGLResources(i);const _=i.displayLevel,f=i.styleLayer,E=f.backgroundMaterial,y=o.vectorTilesMaterialManager,P=f.getPaintValue("background-color",_),m=f.getPaintValue("background-opacity",_),R=f.getPaintValue("background-pattern",_),D=R!==void 0,h=P[3]*m,I=1|window.devicePixelRatio,U=i.spriteMosaic;let x,T;const u=I>et?2:1,d=i.drawPhase===k.HITTEST,p=this._programOptions;p.id=d,p.pattern=D;const r=y.getMaterialProgram(t,E,p);if(!v||n==null||r.compiled){if(t.bindVAO(this._vao),t.useProgram(r),D){const s=U.getMosaicItemPosition(R,!0);if(s!=null){const{tl:c,br:a,page:M}=s;x=a[0]-c[0],T=a[1]-c[1];const g=U.getPageSize(M);g!=null&&(U.bind(t,F.LINEAR,M,A),r.setUniform4f("u_tlbr",c[0],c[1],a[0],a[1]),r.setUniform2fv("u_mosaicSize",g),r.setUniform1i("u_texture",A))}r.setUniform1f("u_opacity",m)}else this._color[0]=h*P[0],this._color[1]=h*P[1],this._color[2]=h*P[2],this._color[3]=h,r.setUniform4fv("u_color",this._color);if(r.setUniform1f("u_depth",f.z||0),d){const s=H(l+1);r.setUniform4fv("u_id",s)}for(const s of e){if(r.setUniform1f("u_coord_range",s.rangeX),r.setUniformMatrix3fv("u_dvsMat3",s.transforms.dvs),D){const c=Math.max(2**(Math.round(_)-s.key.level),1),a=u*s.width*c,M=a/j(x),g=a/j(T);this._patternMatrix[0]=M,this._patternMatrix[4]=g,r.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(b.EQUAL,0,255),t.drawArrays(O.TRIANGLE_STRIP,0,4)}}else n()}_loadWGLResources(i){if(this._vao)return;const{context:e,styleLayer:t}=i,o=t.backgroundMaterial,l=new Int8Array([0,0,1,0,0,1,1,1]),n=st.createVertex(e,ot.STATIC_DRAW,l),v=new lt(e,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:n});this._vao=v}};class Ut extends Y{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(i,e){const{context:t,displayLevel:o,requiredLevel:l,state:n,drawPhase:v,painter:_,spriteMosaic:f,styleLayerUID:E,requestRender:y,allowDelayedRender:P}=i;if(!e.some(p=>{var r;return((r=p.layerData.get(E))==null?void 0:r.circleIndexCount)??!1}))return;const m=i.styleLayer,R=m.circleMaterial,D=_.vectorTilesMaterialManager,h=1.2,I=m.getPaintValue("circle-translate",o),U=m.getPaintValue("circle-translate-anchor",o),x=v===k.HITTEST,T=this._programOptions;T.id=x;const u=D.getMaterialProgram(t,R,T);if(P&&y!=null&&!u.compiled)return void y();t.useProgram(u),u.setUniformMatrix3fv("u_displayMat3",U===$.VIEWPORT?n.displayMat3:n.displayViewMat3),u.setUniform2fv("u_circleTranslation",I),u.setUniform1f("u_depth",m.z),u.setUniform1f("u_antialiasingWidth",h);let d=-1;if(x){const p=H(E+1);u.setUniform4fv("u_id",p)}for(const p of e){if(!p.layerData.has(E))continue;p.key.level!==d&&(d=p.key.level,R.setDataUniforms(u,o,m,d,f));const r=p.layerData.get(E);if(!r.circleIndexCount)continue;r.prepareForRendering(t);const s=r.vao;s!=null&&(t.bindVAO(s),u.setUniformMatrix3fv("u_dvsMat3",p.transforms.dvs),l!==p.key.level?t.setStencilFunction(b.EQUAL,p.stencilRef,255):t.setStencilFunction(b.GREATER,255,255),t.drawElements(O.TRIANGLES,r.circleIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r.circleIndexStart),p.triangleCount+=r.circleIndexCount/3)}}}const tt=1/65536;class Et extends Y{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(i,e){const{displayLevel:t,drawPhase:o,renderPass:l,spriteMosaic:n,styleLayerUID:v}=i;let _=!1;for(const u of e)if(u.layerData.has(v)){const d=u.layerData.get(v);if(d.fillIndexCount>0||d.outlineIndexCount>0){_=!0;break}}if(!_)return;const f=i.styleLayer,E=f.getPaintProperty("fill-pattern"),y=E!==void 0,P=y&&E.isDataDriven;let m;if(y&&!P){const u=E.getValue(t);m=n.getMosaicItemPosition(u,!0)}const R=!y&&f.getPaintValue("fill-antialias",t);let D=!0,h=1;if(!y){const u=f.getPaintProperty("fill-color"),d=f.getPaintProperty("fill-opacity");if(!(u!=null&&u.isDataDriven)&&!(d!=null&&d.isDataDriven)){const p=f.getPaintValue("fill-color",t);h=f.getPaintValue("fill-opacity",t)*p[3],h>=1&&(D=!1)}}if(D&&l==="opaque")return;let I;o===k.HITTEST&&(I=H(v+1));const U=f.getPaintValue("fill-translate",t),x=f.getPaintValue("fill-translate-anchor",t);(D||l!=="translucent")&&this._drawFill(i,v,f,e,U,x,y,m,P,I);const T=!f.hasDataDrivenOutlineColor&&f.outlineUsesFillColor&&h<1;R&&l!=="opaque"&&!T&&this._drawOutline(i,v,f,e,U,x,I)}_drawFill(i,e,t,o,l,n,v,_,f,E){if(v&&!f&&_==null)return;const{context:y,displayLevel:P,state:m,drawPhase:R,painter:D,pixelRatio:h,spriteMosaic:I,requestRender:U,allowDelayedRender:x}=i,T=t.fillMaterial,u=D.vectorTilesMaterialManager,d=h>et?2:1,p=R===k.HITTEST,r=this._fillProgramOptions;r.id=p,r.pattern=v;const s=u.getMaterialProgram(y,T,r);if(x&&U!=null&&!s.compiled)return void U();if(y.useProgram(s),_!=null){const{page:a}=_,M=I.getPageSize(a);M!=null&&(I.bind(y,F.LINEAR,a,A),s.setUniform2fv("u_mosaicSize",M),s.setUniform1i("u_texture",A))}s.setUniformMatrix3fv("u_displayMat3",n===$.VIEWPORT?m.displayMat3:m.displayViewMat3),s.setUniform2fv("u_fillTranslation",l),s.setUniform1f("u_depth",t.z+tt),p&&s.setUniform4fv("u_id",E);let c=-1;for(const a of o){if(!a.layerData.has(e))continue;a.key.level!==c&&(c=a.key.level,T.setDataUniforms(s,P,t,c,I));const M=a.layerData.get(e);if(!M.fillIndexCount)continue;M.prepareForRendering(y);const g=M.fillVAO;if(g!=null){if(y.bindVAO(g),s.setUniformMatrix3fv("u_dvsMat3",a.transforms.dvs),y.setStencilFunction(b.EQUAL,a.stencilRef,255),v){const L=Math.max(2**(Math.round(P)-a.key.level),1),w=a.rangeX/(d*a.width*L);s.setUniform1f("u_patternFactor",w)}if(f){const L=M.patternMap;if(!L)continue;for(const[w,C]of L){const G=I.getPageSize(w);G!=null&&(I.bind(y,F.LINEAR,w,A),s.setUniform2fv("u_mosaicSize",G),s.setUniform1i("u_texture",A),y.drawElements(O.TRIANGLES,C[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else y.drawElements(O.TRIANGLES,M.fillIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*M.fillIndexStart);a.triangleCount+=M.fillIndexCount/3}}}_drawOutline(i,e,t,o,l,n,v){const{context:_,displayLevel:f,state:E,drawPhase:y,painter:P,pixelRatio:m,spriteMosaic:R,requestRender:D,allowDelayedRender:h}=i,I=t.outlineMaterial,U=P.vectorTilesMaterialManager,x=.75/m,T=y===k.HITTEST,u=this._outlineProgramOptions;u.id=T;const d=U.getMaterialProgram(_,I,u);if(h&&D!=null&&!d.compiled)return void D();_.useProgram(d),d.setUniformMatrix3fv("u_displayMat3",n===$.VIEWPORT?E.displayMat3:E.displayViewMat3),d.setUniform2fv("u_fillTranslation",l),d.setUniform1f("u_depth",t.z+tt),d.setUniform1f("u_outline_width",x),T&&d.setUniform4fv("u_id",v);let p=-1;for(const r of o){if(!r.layerData.has(e))continue;r.key.level!==p&&(p=r.key.level,I.setDataUniforms(d,f,t,p,R));const s=r.layerData.get(e);if(s.prepareForRendering(_),!s.outlineIndexCount)continue;const c=s.outlineVAO;c!=null&&(_.bindVAO(c),d.setUniformMatrix3fv("u_dvsMat3",r.transforms.dvs),_.setStencilFunction(b.EQUAL,r.stencilRef,255),_.drawElements(O.TRIANGLES,s.outlineIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*s.outlineIndexStart),r.triangleCount+=s.outlineIndexCount/3)}}}class Pt extends Y{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(i,e){const{context:t,displayLevel:o,state:l,drawPhase:n,painter:v,pixelRatio:_,spriteMosaic:f,styleLayerUID:E,requestRender:y,allowDelayedRender:P}=i;if(!e.some(g=>{var L;return((L=g.layerData.get(E))==null?void 0:L.lineIndexCount)??!1}))return;const m=i.styleLayer,R=m.lineMaterial,D=v.vectorTilesMaterialManager,h=m.getPaintValue("line-translate",o),I=m.getPaintValue("line-translate-anchor",o),U=m.getPaintProperty("line-pattern"),x=U!==void 0,T=x&&U.isDataDriven;let u,d;if(x&&!T){const g=U.getValue(o);u=f.getMosaicItemPosition(g)}let p=!1;if(!x){const g=m.getPaintProperty("line-dasharray");if(d=g!==void 0,p=d&&g.isDataDriven,d&&!p){const L=g.getValue(o),w=m.getDashKey(L,m.getLayoutValue("line-cap",o));u=f.getMosaicItemPosition(w)}}const r=1/_,s=n===k.HITTEST,c=this._programOptions;c.id=s,c.pattern=x,c.sdf=d;const a=D.getMaterialProgram(t,R,c);if(P&&y!=null&&!a.compiled)return void y();if(t.useProgram(a),a.setUniformMatrix3fv("u_displayViewMat3",l.displayViewMat3),a.setUniformMatrix3fv("u_displayMat3",I===$.VIEWPORT?l.displayMat3:l.displayViewMat3),a.setUniform2fv("u_lineTranslation",h),a.setUniform1f("u_depth",m.z),a.setUniform1f("u_antialiasing",r),s){const g=H(E+1);a.setUniform4fv("u_id",g)}if(u&&u!=null){const{page:g}=u,L=f.getPageSize(g);L!=null&&(f.bind(t,F.LINEAR,g,A),a.setUniform2fv("u_mosaicSize",L),a.setUniform1i("u_texture",A))}let M=-1;for(const g of e){if(!g.layerData.has(E))continue;g.key.level!==M&&(M=g.key.level,R.setDataUniforms(a,o,m,M,f));const L=2**(o-M)/_;a.setUniform1f("u_zoomFactor",L);const w=g.layerData.get(E);if(!w.lineIndexCount)continue;w.prepareForRendering(t);const C=w.vao;if(C!=null){if(t.bindVAO(C),a.setUniformMatrix3fv("u_dvsMat3",g.transforms.dvs),t.setStencilFunction(b.EQUAL,g.stencilRef,255),T||p){const G=w.patternMap;if(!G)continue;for(const[B,S]of G){const W=f.getPageSize(B);W!=null&&(f.bind(t,F.LINEAR,B,A),a.setUniform2fv("u_mosaicSize",W),a.setUniform1i("u_texture",A),t.drawElements(O.TRIANGLES,S[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*S[0]))}}else t.drawElements(O.TRIANGLES,w.lineIndexCount,z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.lineIndexStart);g.triangleCount+=w.lineIndexCount/3}}}}const dt=1/65536;class Tt extends Y{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=ft()}dispose(){}drawMany(i,e){const{drawPhase:t,styleLayerUID:o}=i,l=i.styleLayer;let n;t===k.HITTEST&&(n=H(o+1)),this._drawIcons(i,l,e,n),this._drawText(i,l,e,n)}_drawIcons(i,e,t,o){const{context:l,displayLevel:n,drawPhase:v,painter:_,spriteMosaic:f,state:E,styleLayerUID:y,requestRender:P,allowDelayedRender:m}=i,R=e.iconMaterial,D=_.vectorTilesMaterialManager;let h,I=!1;for(const M of t)if(M.layerData.has(y)&&(h=M.layerData.get(y),h.iconPerPageElementsMap.size>0)){I=!0;break}if(!I)return;const U=e.getPaintValue("icon-translate",n),x=e.getPaintValue("icon-translate-anchor",n);let T=e.getLayoutValue("icon-rotation-alignment",n);T===N.AUTO&&(T=e.getLayoutValue("symbol-placement",n)===X.POINT?N.VIEWPORT:N.MAP);const u=T===N.MAP,d=e.getLayoutValue("icon-keep-upright",n)&&u,p=h.isIconSDF,r=v===k.HITTEST,s=this._iconProgramOptions;s.id=r,s.sdf=p;const c=D.getMaterialProgram(l,R,s);if(m&&P!=null&&!c.compiled)return void P();l.useProgram(c),c.setUniformMatrix3fv("u_displayViewMat3",T===N.MAP?E.displayViewMat3:E.displayMat3),c.setUniformMatrix3fv("u_displayMat3",x===$.VIEWPORT?E.displayMat3:E.displayViewMat3),c.setUniform2fv("u_iconTranslation",U),c.setUniform1f("u_depth",e.z),c.setUniform1f("u_mapRotation",Z(E.rotation)),c.setUniform1f("u_keepUpright",d?1:0),c.setUniform1f("u_level",10*n),c.setUniform1i("u_texture",A),c.setUniform1f("u_fadeDuration",K/1e3),r&&c.setUniform4fv("u_id",o);let a=-1;for(const M of t){if(!M.layerData.has(y)||(M.key.level!==a&&(a=M.key.level,R.setDataUniforms(c,n,e,a,f)),h=M.layerData.get(y),h.iconPerPageElementsMap.size===0))continue;h.prepareForRendering(l),h.updateOpacityInfo();const g=h.iconVAO;if(g!=null){l.bindVAO(g),c.setUniformMatrix3fv("u_dvsMat3",M.transforms.dvs),c.setUniform1f("u_time",(performance.now()-h.lastOpacityUpdate)/1e3);for(const[L,w]of h.iconPerPageElementsMap)this._renderIconRange(i,c,w,L,M)}}}_renderIconRange(i,e,t,o,l){const{context:n,spriteMosaic:v}=i;this._spritesTextureSize[0]=v.getWidth(o)/4,this._spritesTextureSize[1]=v.getHeight(o)/4,e.setUniform2fv("u_mosaicSize",this._spritesTextureSize),v.bind(n,F.LINEAR,o,A),this._setStencilState(i,l),n.drawElements(O.TRIANGLES,t[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3}_drawText(i,e,t,o){const{context:l,displayLevel:n,drawPhase:v,glyphMosaic:_,painter:f,pixelRatio:E,spriteMosaic:y,state:P,styleLayerUID:m,requestRender:R,allowDelayedRender:D}=i,h=e.textMaterial,I=f.vectorTilesMaterialManager;let U,x=!1;for(const V of t)if(V.layerData.has(m)&&(U=V.layerData.get(m),U.glyphPerPageElementsMap.size>0)){x=!0;break}if(!x)return;const T=e.getPaintProperty("text-opacity");if(T&&!T.isDataDriven&&T.getValue(n)===0)return;const u=e.getPaintProperty("text-color"),d=!u||u.isDataDriven||u.getValue(n)[3]>0,p=e.getPaintProperty("text-halo-width"),r=e.getPaintProperty("text-halo-color"),s=(!p||p.isDataDriven||p.getValue(n)>0)&&(!r||r.isDataDriven||r.getValue(n)[3]>0);if(!d&&!s)return;const c=24/8;let a=e.getLayoutValue("text-rotation-alignment",n);a===N.AUTO&&(a=e.getLayoutValue("symbol-placement",n)===X.POINT?N.VIEWPORT:N.MAP);const M=a===N.MAP,g=e.getLayoutValue("text-keep-upright",n)&&M,L=v===k.HITTEST,w=.8*c/E;this._glyphTextureSize||(this._glyphTextureSize=ut(_.width/4,_.height/4));const C=e.getPaintValue("text-translate",n),G=e.getPaintValue("text-translate-anchor",n),B=this._sdfProgramOptions;B.id=L;const S=I.getMaterialProgram(l,h,B);if(D&&R!=null&&!S.compiled)return void R();l.useProgram(S),S.setUniformMatrix3fv("u_displayViewMat3",a===N.MAP?P.displayViewMat3:P.displayMat3),S.setUniformMatrix3fv("u_displayMat3",G===$.VIEWPORT?P.displayMat3:P.displayViewMat3),S.setUniform2fv("u_textTranslation",C),S.setUniform1f("u_depth",e.z+dt),S.setUniform2fv("u_mosaicSize",this._glyphTextureSize),S.setUniform1f("u_mapRotation",Z(P.rotation)),S.setUniform1f("u_keepUpright",g?1:0),S.setUniform1f("u_level",10*n),S.setUniform1i("u_texture",J),S.setUniform1f("u_antialiasingWidth",w),S.setUniform1f("u_fadeDuration",K/1e3),L&&S.setUniform4fv("u_id",o);let W=-1;for(const V of t){if(!V.layerData.has(m)||(V.key.level!==W&&(W=V.key.level,h.setDataUniforms(S,n,e,W,y)),U=V.layerData.get(m),U.glyphPerPageElementsMap.size===0))continue;U.prepareForRendering(l),U.updateOpacityInfo();const Q=U.textVAO;if(Q==null)continue;l.bindVAO(Q),S.setUniformMatrix3fv("u_dvsMat3",V.transforms.dvs),this._setStencilState(i,V);const it=(performance.now()-U.lastOpacityUpdate)/1e3;S.setUniform1f("u_time",it),U.glyphPerPageElementsMap.forEach((at,nt)=>{this._renderGlyphRange(l,at,nt,_,S,s,d,V)})}}_renderGlyphRange(i,e,t,o,l,n,v,_){o.bind(i,F.LINEAR,t,J),n&&(l.setUniform1f("u_halo",1),i.drawElements(O.TRIANGLES,e[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),_.triangleCount+=e[1]/3),v&&(l.setUniform1f("u_halo",0),i.drawElements(O.TRIANGLES,e[1],z.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*e[0]),_.triangleCount+=e[1]/3)}_setStencilState(i,e){const{context:t,is3D:o,stencilSymbols:l}=i;if(t.setStencilTestEnabled(!0),l)return t.setStencilWriteMask(255),void t.setStencilFunction(b.ALWAYS,e.stencilRef,255);t.setStencilWriteMask(0),o?t.setStencilFunction(b.EQUAL,e.stencilRef,255):t.setStencilFunction(b.GREATER,255,255)}}export{ht as _,Tt as a,Et as d,Pt as f,Ut as o,Y as t};