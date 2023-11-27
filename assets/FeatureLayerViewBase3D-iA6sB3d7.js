import{d5 as w,no as R,ep as S,a_ as D,mp as x,aC as a,aD as l,aF as f,aJ as F,dp as T,l0 as $,oz as O,aH as b,aU as v,c8 as C,b$ as g,aB as M,fj as P,oA as V,f0 as N,bx as E}from"./index-Ag4O5CUz.js";import{I as Q,E as Z,T as I}from"./FeatureLikeLayerView3D-sj_Df38w.js";import{n as j}from"./LayerView3D-IyGAvWG7.js";import{E as A,c as H}from"./query-liAbjY0u.js";import{r as k}from"./EventedSet-EJomKfKL.js";import{P as J}from"./FeatureLayerView-v-kaYV9V.js";import{u as L}from"./LayerView-LmaagB7Y.js";import{a as B}from"./RefreshableLayerView-WQUtIr6V.js";class U{constructor(t){this._controller=t,this._handle=new z(r=>t.schedule(r))}destroy(){this._handle.destroy()}invoke(t,r){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof w&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,r).then(s=>{let i=0,o=0;const n=w.fromJSON(s.spatialReference);s.spatialReference=n;const u=async h=>{if(s.fields){for(;i<s.fields.length;)if(s.fields[i]=S.fromJSON(s.fields[i]),i++,h.madeProgress())return this._controller.reschedule(y=>u(y))}for(;o<s.features.length;){const y=s.features[o];if(++o,y.uid=D.generateUID(),y.geometry!=null&&(y.geometry.spatialReference=n,Y(y.geometry),h.madeProgress()))return this._controller.reschedule(q=>u(q))}return s};return this._controller.schedule(h=>u(h))})):Promise.resolve(null)}}function Y(e){switch(e.type){case"polyline":e.paths.reduce((t,r)=>t+r.length,0)<x&&(e.paths=e.hasZ||e.hasM?e.paths.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.paths.map(t=>t.map(r=>[r[0],r[1]])));break;case"polygon":e.rings.reduce((t,r)=>t+r.length,0)<x&&(e.rings=e.hasZ||e.hasM?e.rings.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.rings.map(t=>t.map(r=>[r[0],r[1]])))}}let z=class extends R{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:r=>[r.buffer]},t)}},p=class extends F{constructor(e){super(e)}get queryFeaturesDehydrated(){var i;const e=this.layer.capabilities,t=e&&e.query,r=t&&t.supportsFormatPBF,s=this.layer.parsedUrl;if(r){this._decoder==null&&(this._decoder=new U(this.controller));const o={sourceSpatialReference:((i=this.layer.spatialReference)==null?void 0:i.toJSON())??null,applyTransform:!0,maxStringAttributeLength:1024};return(n,u)=>A(s,n,"pbf",this._createRequestOptions(u)).then(h=>(T(u),this._decoder!=null?this._decoder.invoke({buffer:h.data,options:o},u.signal):Promise.reject($())))}return(o,n)=>H(s,o,this.layer.spatialReference,this._createRequestOptions(n)).then(u=>O(u.data))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=b(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query}}}};a([l({constructOnly:!0})],p.prototype,"layer",void 0),a([l({constructOnly:!0})],p.prototype,"controller",void 0),a([l({readOnly:!0})],p.prototype,"queryFeaturesDehydrated",null),p=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],p);let d=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};a([l({constructOnly:!0})],d.prototype,"layer",void 0),a([l({readOnly:!0})],d.prototype,"queryFeaturesDehydrated",null),d=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],d);let _=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};a([l({constructOnly:!0})],_.prototype,"layer",void 0),_=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],_);let m=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(O,r=>{if(r&&r.name==="query-features-json:unsupported")return this.layer.queryFeatures(e,t);throw r})}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};function G(e,t){return e.type==="feature"&&e.source.type==="feature-layer"?e.infoFor3D!=null?new d({layer:e}):new p({layer:e,controller:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="oriented-imagery"||e.type==="wfs"?new m({layer:e,source:e.source}):e.type==="ogc-feature"?new _({layer:e}):null}a([l({constructOnly:!0})],m.prototype,"layer",void 0),a([l({constructOnly:!0})],m.prototype,"source",void 0),m=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],m);class K{constructor(t){this._memoryCache=null,this._capabilities=null;const r=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const s=this._layerView.view.resourceController;this.query=G(r,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(`fl-${r.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=b(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this._layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=Q(this._layerView.layer)),this._capabilities}logFetchError(t,r){t.error("#fetchTile()",this._layerView.layer,(r==null?void 0:r.message)??r)}}let c=class extends B(Z(J(j(L)))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.addHandles(v(()=>this._updatingRequiredFieldsPromise,e=>this._updatingHandles.addPromise(e),C))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=b(this._fetcherContext)}get maximumNumberOfFeatures(){var e;return((e=this.controller)==null?void 0:e.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var r,s;let e=0;if((r=this.controller)!=null&&r.updating){const i=this.controller.updatingRemaining,o=Math.max(this.controller.updatingTotal,this._controllerTotal);o>0&&(e=(o-i)/o,this._controllerTotal=o)}let t=0;if((s=this.processor)!=null&&s.updating){const i=this.processor.updatingRemaining,o=Math.max(i,this._processorTotal);o>0&&(t=(o-i)/o,this._processorTotal=o)}return .5*(e+t)}get updatePolicy(){if(!this.controller)return g.ASYNC;switch(this.controller.mode){case"snapshot":{const e=W.get(this.layer.geometryType);return e==null||this.controller.serviceDataCount>e?g.ASYNC:g.SYNC}case"tiles":return g.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&e.returnZ!=null?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&e.returnM!=null&&e.returnM}setVisibility(e,t){var r;(r=this.processor)==null||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new K({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new I({layerView:this,context:this._fetcherContext,graphics:new k,extent:this.clippingExtent});return this._updatingHandles.add(()=>e.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},M),this.addHandles(v(()=>this.suspended,t=>{t?e.suspend():e.resume()},C)),this._updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>e.displayFeatureLimit=t,M),this.addHandles(P(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.refreshFilter()}get usedMemory(){var e,t;return(((e=this.processor)==null?void 0:e.usedMemory)??0)+(((t=this.controller)==null?void 0:t.memoryForUnusedFeatures)??0)}get unloadedMemory(){var i,o,n,u;const e=((i=this.processor)==null?void 0:i.unprocessedMemoryEstimate)??0,t=((o=this.controller)==null?void 0:o.expectedFeatureDiff)??0,r=((n=this.processor)==null?void 0:n.loadedFeatures)??0,s=r+t>0?r/(r+t):1;return e+t*(((u=this.processor)==null?void 0:u.usedMemoryPerFeature)??0)*s}get ignoresMemoryFactor(){var e;return(e=this.controller)==null?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e!=null&&e.outStatistics||this.graphics3DProcessor==null)return r;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,o=[];for(const n of r.features)if(n.geometry){const u=i.get(n.attributes[s]);u&&(n.geometry=V(u.graphic.geometry),o.push(n))}else o.push(n);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=s=>{throw new E("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of r)e[s]!=null&&t(s);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),e.outSpatialReference==null||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get performanceInfo(){var s,i,o,n;const e=(s=this.controller)==null?void 0:s.displayFeatureLimit,t=e!=null?e.averageSymbolComplexity:void 0,r=t!=null?`f:${t.verticesPerFeature},v:${t.verticesPerCoordinate}`:"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:((i=this.controller)==null?void 0:i.mode)??"n/a",symbolComplexity:r,nodes:((o=this.controller)==null?void 0:o.tileDescriptors.length)??0,...((n=this.controller)==null?void 0:n.performanceInfo)??{storedFeatures:0,totalVertices:0}}}get test(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:(e=this.controller)==null?void 0:e.graphics}}};a([l()],c.prototype,"layer",void 0),a([l()],c.prototype,"controller",void 0),a([l()],c.prototype,"_controllerTotal",void 0),a([l()],c.prototype,"_processorTotal",void 0),a([l()],c.prototype,"maximumNumberOfFeatures",null),a([l()],c.prototype,"maximumNumberOfFeaturesExceeded",null),a([l(N)],c.prototype,"updatingProgress",void 0),a([l({readOnly:!0})],c.prototype,"updatingProgressValue",null),a([l({readOnly:!0})],c.prototype,"updatePolicy",null),a([l({readOnly:!0})],c.prototype,"hasZ",null),a([l({readOnly:!0})],c.prototype,"hasM",null),a([l()],c.prototype,"suspendResumeExtentMode",void 0),c=a([f("esri.views.3d.layers.FeatureLayerViewBase3D")],c);const W=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),ne=c;export{ne as _};
