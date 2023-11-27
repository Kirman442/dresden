import{aG as C,b_ as q,b$ as $,oN as z,aC as _,aD as m,aF as V,aJ as A,fp as v,oO as c,oE as E,oF as H,aU as F,aB as I,fL as R,oI as b,oH as g,oP as G,g6 as f,fJ as D,nG as O,i2 as l,oQ as w,oG as x,gb as M,oJ as j,fv as L,oR as N,jC as Q,nH as p,nO as S,oS as P,fx as U,fs as J,ft as Y,fu as k,i4 as B,l5 as K}from"./index-Ag4O5CUz.js";import{t as W}from"./LineVisualElement-UTpBtwDK.js";class X{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=z.Outline}destroy(){this._destroyResources()}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){var t;this._renderGroup=e;const r=(t=this._resources)==null?void 0:t.layerView;r&&(r.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?this._resources!=null&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?this._resources==null&&this._createResources():this._destroyResources()}_createResources(){var s;this._destroyResources();const e=this._resourceFactory.createResources(),r=new n({view:this._resourceFactory.view,renderGroup:this._renderGroup}),t=(s=this._resourceFactory.view.basemapTerrain)==null?void 0:s.overlayManager;this._resources={layerView:new n({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},t&&(this._resources.drapeSourceRenderer=t.registerGeometryDrapeSource(r)),this._syncGeometriesToRenderer()}_destroyResources(){var r;if(this._resources==null)return;this._ensureRenderGeometriesRemoved();const e=(r=this._resourceFactory.view.basemapTerrain)==null?void 0:r.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,v.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&(this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,v.UPDATE),this._resources.geometriesAdded=!0))}}let n=class extends C(A){constructor(h){super(h),this.drapeSourceType=q.Features,this.updatePolicy=$.SYNC,this.renderGroup=z.Outline}};_([m({constructOnly:!0})],n.prototype,"view",void 0),_([m({readOnly:!0})],n.prototype,"drapeSourceType",void 0),_([m()],n.prototype,"renderGroup",void 0),n=_([V("DrapedVisualElementLayerView")],n);class Z{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return this._resources!=null?this._resources.object:null}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(this._resources==null||!e)return;const r=this._resources.object;this._resources.external.forEach(t=>{t.type!==c.Mesh&&t.type!==c.Line&&t.type!==c.Point||e.remove(t)}),r.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer),this._resources.external.forEach(t=>{t.type!==c.Mesh&&t.type!==c.Line&&t.type!==c.Point||e.add(t)})}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,r=e.view,t=r._stage;if(!t)return;const s=new E(t,{pickable:!1,updatePolicy:$.SYNC}),i=new H({castShadow:!1}),o=e.createResources(i,s);o.forEach(a=>{t.add(a),a.type===c.Texture&&a.load(t.renderView.renderingContext)}),t.add(i),s.add(i);const d=e.cameraChanged,y=d?F(()=>r.state.camera,a=>d(a),I):null;this._resources={layer:s,object:i,external:o,cameraHandle:y},this._syncVisible()}_destroyResources(){var r;if(this._resources==null)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach(t=>{e.remove(t),t.type===c.Texture&&t.unload()})),this._resources.object.dispose(),(r=this._resources.cameraHandle)==null||r.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){this._resources!=null&&(this._resources.object.visible=this._visible)}}class ee extends W{constructor(e){super(e),this._isDraped=!1,this.object3dResources=new Z(this.createObject3DResourceFactory(e.view)),this.drapedResources=new X(this.createDrapedResourceFactory(e.view)),this.isDraped=e.isDraped??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}class ie extends ee{constructor(e){super(e),this._maxSize=0,this._position=R(),this._up=R(),this._right=R(),this._renderOccluded=b.OccludeAndTransparent,this._color=g(1,0,0,1),this._outlineColor=g(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=b.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:r=>this._createObject3DResources(r),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:r=>this._destroyDrapedResources(r)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){G(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){G(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const r=this._outlineSize===0!=(e===0);this._outlineSize=e,r?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:r,next:t}){this._maxSize=Math.min(f(r,e),f(r,t))/3,D(this._up,O(this._up,e,r)),D(this._right,O(this._right,t,r)),l(this._position,r),this.recreateGeometry()}_createObject3DResources(e){const r=new w(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new x(this._outlineMaterialParameters);return this._createObject3DGeometries(e,r,t),{quadMaterial:r,outlineMaterial:t,forEach:s=>{s(r),t&&s(t)}}}_createObject3DGeometries(e,r,t){if(M(this._up,j)&&M(this._right,j))return;const s=this._createGeometries(r,t);for(const i of s)e.addGeometry(i);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new w(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new x(this._outlineMaterialParameters),t=this._createGeometries(e,r).map(s=>new L(s));return this._setTransformDraped(t),{quadMaterial:e,outlineMaterial:r,geometries:t,pixelRatioHandle:F(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_createGeometries(e,r){const{up:t,right:s,corner:i}=this._getVertices(),o=this._quadGeometryData(t,s,i,e);return r?[o,N(r,[t,i,s])]:[o]}_getVertices(){let e=this._up,r=this._right;const t=Q(p.get(),e,r);return this.isDraped&&(e=l(p.get(),e),r=l(p.get(),r),e[2]=0,r[2]=0,t[2]=0),{up:e,right:r,corner:t}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const r=this.view.state.camera,t=this._size*r.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,t);S(u,this._position),P(u,u,[s,s,s]),e.transformation=u}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:r},state:{contentPixelRatio:t}}}=this,{_position:s,_size:i}=this,o=l(p.get(),s);o[2]=U;const d=re;d.spatialReference=r.renderer.spatialReference,d.x=o[0],d.y=o[1];const y=i*(this.view.overlayPixelSizeInMapUnits(d)*t),a=Math.min(this._maxSize,y);S(u,o),P(u,u,[a,a,1]);for(const T of e)T.transformation=u}_quadGeometryData(e,r,t,s){return new J(s,[[Y.POSITION,new k([0,0,0,...r,...e,...t],[0,1,2,1,2,3],3,!0)]])}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,r;(e=this.object3dResources.resources)==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(r=this.drapedResources.resources)==null||r.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,r,t,s;(r=(e=this.object3dResources.resources)==null?void 0:e.outlineMaterial)==null||r.setParameters(this._outlineMaterialParameters),(s=(t=this.drapedResources.resources)==null?void 0:t.outlineMaterial)==null||s.setParameters(this._outlineMaterialParameters)}}const u=B(),re=K(0,0,void 0,null);export{ee as t,ie as z};