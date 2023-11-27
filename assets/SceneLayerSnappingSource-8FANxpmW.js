import{aC as s,aD as n,aF as g,aJ as _,f4 as C,hC as k,ob as b,no as m,fL as S,aA as H,lt as L,fn as $,oc as E,fq as w,fo as O,dp as I,a$ as V}from"./index-Ag4O5CUz.js";import{r as R}from"./VertexSnappingCandidate-T-QcagHU.js";import"./PointSnappingHint-AkFArMe8.js";let d=class extends _{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new x(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const i=e.coordinateHelper,{point:c}=e,a=P;this.renderCoordsHelper.toRenderCoords(c,i.spatialReference,a);const u=e.distance,l=typeof u=="number"?u:u.distance,p=await this._workerHandle.invoke({bounds:C(a[0],a[1],a[2],l),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return p.candidates.sort((y,f)=>y.distance-f.distance),p.candidates.map(y=>this._convertCandidate(i,y))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new k({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new R({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const i=S();return this.renderCoordsHelper.fromRenderCoords(t,i,e),b(i)}async _fetchAllEdgeLocations(e,t){const i=[],c=[];for(const{id:a,uid:u}of e.components)this._ids.has(a)&&i.push((async()=>{const l=await this.fetchEdgeLocations(a,t.signal),p=l.locations.buffer;return c.push(p),{id:a,uid:u,objectIds:l.objectIds,locations:p,origin:l.origin,type:l.type}})());return{result:{components:(await Promise.all(i)).filter(({id:a})=>this._ids.has(a))},transferList:c}}};s([n({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),s([n({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),s([n({constructOnly:!0})],d.prototype,"schedule",void 0),s([n({readOnly:!0})],d.prototype,"availability",void 0),d=s([g("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class x extends m{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const P=S();let o=class extends _{get updating(){return this._updatingHandles.updating}constructor(r){super(r),this.availability=1,this._updatingHandles=new H,this._abortController=new AbortController}destroy(){this._tracker=L(this._tracker),this._abortController=$(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:r}=this,e=r.resourceController;this._edgeWorker=new E(v(e)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:v(e),fetchEdgeLocations:async(t,i)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(t,this._edgeWorker,i)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([w(this._workerHandle),w(this._edgeWorker)])}async fetchCandidates(r,e){return this._workerHandle.fetchCandidates(r,e)}refresh(){}async _setupLayerView(){var t;if(this.destroyed)return;const r=(t=this._abortController)==null?void 0:t.signal,e=await this.getLayerView();e==null||O(r)||(this._tracker=e.trackSnappingSources({add:(i,c)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:i,bounds:c},r))},remove:i=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:i},r))}}))}};function v(r){return e=>r.immediate.schedule(e)}s([n({constructOnly:!0})],o.prototype,"getLayerView",void 0),s([n({constructOnly:!0})],o.prototype,"view",void 0),s([n({readOnly:!0})],o.prototype,"updating",null),s([n({readOnly:!0})],o.prototype,"availability",void 0),o=s([g("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],o);let h=class extends _{get updating(){return this._i3sSources.some(r=>r.updating)}constructor(r){super(r),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(r=>r.destroy()),this._i3sSources.length=0}initialize(){const{view:r}=this,e=this.layerSource.layer;this._i3sSources=e.type==="building-scene"?this._getBuildingSceneI3SSources(r,e):[this._getSceneLayerI3SSource(r,e)]}async fetchCandidates(r,e){const t=await Promise.all(this._i3sSources.map(i=>i.fetchCandidates(r,e)));return I(e),t.flat()}refresh(){this._i3sSources.forEach(r=>r.refresh())}_getBuildingSceneI3SSources(r,e){return e.allSublayers.toArray().map(t=>t.type==="building-component"?new o({getLayerView:async()=>(await r.whenLayerView(e)).whenSublayerView(t),view:r}):null).filter(V)}_getSceneLayerI3SSource(r,e){return new o({getLayerView:async()=>{const t=await r.whenLayerView(e);return t.type==="scene-layer-graphics-3d"?void 0:t},view:r})}};s([n({constructOnly:!0})],h.prototype,"layerSource",void 0),s([n({constructOnly:!0})],h.prototype,"view",void 0),s([n({readOnly:!0})],h.prototype,"updating",null),s([n({readOnly:!0})],h.prototype,"availability",void 0),h=s([g("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],h);export{h as SceneLayerSnappingSource};
