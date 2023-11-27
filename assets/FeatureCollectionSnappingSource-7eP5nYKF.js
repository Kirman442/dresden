import{aJ as F,hG as E,aU as h,aB as d,b3 as V,hH as C,hI as D,dp as p,aC as o,aD as r,aF as I,hJ as $}from"./index-9slH3TG2.js";import{t as A}from"./memoize-uBdPJ80n.js";import{o as G,a as P}from"./queryEngineUtils-h3prS296.js";import{i as v,r as q,n as S}from"./symbologySnappingCandidates-kVYbH7wi.js";import"./VertexSnappingCandidate-6RjEjNwn.js";import"./PointSnappingHint-8Ry2pMVI.js";let a=class extends F{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return v();const n=async(s,l)=>(await $(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(s,l);return v(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return q(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?S(this._symbologySnappingSupported,async(i,n)=>{const s=await e.whenLayerView(t);return p(n),s.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):S()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;E(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.processor)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),V(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=A(G)}refresh(){}async fetchCandidates(e,t){var c;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const s=C(i),l=D(e,((c=this.view)==null?void 0:c.type)??"2d",s),m=await n.querySnapping(l,{signal:t});p(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(m.candidates,u,t);p(t);const g=await this._symbologySnappingFetcher.fetch(y,t);p(t);const w=g.length===0?y:[...y,...g],_=this._snappingElevationFilter.filter(l,w),f=this._memoizedMakeGetGroundElevation(this.view,u);return _.map(b=>P(b,f))}};o([r({constructOnly:!0})],a.prototype,"layerSource",void 0),o([r({constructOnly:!0})],a.prototype,"view",void 0),o([r()],a.prototype,"_snappingElevationAligner",null),o([r()],a.prototype,"_snappingElevationFilter",null),o([r()],a.prototype,"_symbologySnappingFetcher",null),o([r()],a.prototype,"_layerView3D",void 0),o([r()],a.prototype,"_symbologySnappingSupported",null),a=o([I("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};