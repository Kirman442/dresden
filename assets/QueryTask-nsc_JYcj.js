import{cF as y,c7 as _,cC as T,aC as a,aD as c,kf as D,aF as A,aJ as w,bL as Q,b6 as P,aV as j,hJ as d,di as n,ff as f,fg as h,bx as q}from"./index-Ag4O5CUz.js";import{n as L,s as C}from"./executeForIds-ZpyK1iQ7.js";import{x as J}from"./query-liAbjY0u.js";import{a as $}from"./executeQueryJSON-rAFaSyvU.js";import{n as N}from"./executeQueryPBF-0M2S7Bbc.js";async function z(e,t,r){const o=y(e);return J(o,_.from(t),{...r}).then(s=>({count:s.data.count,extent:T.fromJSON(s.data.extent)}))}let i=class extends w{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var u;const r=this._normalizeQuery(e),o=((u=e.outStatistics)==null?void 0:u[0])!=null,s=P("featurelayer-pbf-statistics"),l=!o||s;let p;if(this.pbfSupported&&l)try{p=await N(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&l||(p=await $(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return j.fromJSON(t);const{meshFeatureSetFromJSON:o}=await d(n(()=>import("./meshFeatureSet-woJemvxG.js"),__vite__mapDeps([0,1,2,3,4])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return z(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return C(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await d(Promise.all([n(()=>import("./index-Ag4O5CUz.js").then(s=>s.C9),__vite__mapDeps([1,2])),n(()=>import("./executeRelationshipQuery-cq2xndGc.js"),__vite__mapDeps([5,1,2,6,7,8]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await d(Promise.all([n(()=>import("./index-Ag4O5CUz.js").then(s=>s.C9),__vite__mapDeps([1,2])),n(()=>import("./executeRelationshipQuery-cq2xndGc.js"),__vite__mapDeps([5,1,2,6,7,8]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:s}=await d(n(()=>import("./queryAttachments-7-LbFCm4.js"),__vite__mapDeps([9,1,2,6,7,8])),t),l=y(this.url);return s(l,await(this.queryAttachmentsSupported?r(l,e,t):o(l,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await d(n(()=>import("./executeTopFeaturesQuery-QeQcXTb5.js"),__vite__mapDeps([10,1,2,11,6,7,8])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await d(n(()=>import("./executeForTopIds-8ZA0njWf.js"),__vite__mapDeps([12,1,2,11,6,7,8])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await d(n(()=>import("./executeForTopExtents-OT-iiUkW.js"),__vite__mapDeps([13,1,2,11,6,7,8])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await d(n(()=>import("./executeForTopCount-jMcPTl6x.js"),__vite__mapDeps([14,1,2,11,6,7,8])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:s}=r,l=f("model/gltf-binary",o)??h("glb",o),p=f("model/gltf+json",o)??h("gtlf",o);for(const u of s){if(u===l){t.formatOf3DObjects=u;break}u!==p||t.formatOf3DObjects||(t.formatOf3DObjects=u)}if(!t.formatOf3DObjects)throw new q("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:u,originY:m,originZ:S,translationX:F,translationY:b,translationZ:x,scaleX:O,scaleY:g,scaleZ:V,rotationX:E,rotationY:R,rotationZ:I,rotationDeg:v}=r.transformFieldRoles;t.outFields.push(u,m,S,F,b,x,O,g,V,E,R,I,v)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([c({type:D})],i.prototype,"dynamicDataSource",void 0),a([c()],i.prototype,"fieldsIndex",void 0),a([c()],i.prototype,"gdbVersion",void 0),a([c()],i.prototype,"infoFor3D",void 0),a([c({readOnly:!0})],i.prototype,"parsedUrl",null),a([c()],i.prototype,"pbfSupported",void 0),a([c()],i.prototype,"queryAttachmentsSupported",void 0),a([c()],i.prototype,"sourceSpatialReference",void 0),a([c({type:String})],i.prototype,"url",void 0),i=a([A("esri.tasks.QueryTask")],i);const G=i;export{G as x};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/meshFeatureSet-woJemvxG.js","assets/index-Ag4O5CUz.js","assets/index-2jScoq2u.css","assets/Mesh-morq5kpt.js","assets/External-8Vjq980v.js","assets/executeRelationshipQuery-cq2xndGc.js","assets/query-liAbjY0u.js","assets/pbfQueryUtils-t2dHGnYS.js","assets/pbf-3jGGaSMd.js","assets/queryAttachments-7-LbFCm4.js","assets/executeTopFeaturesQuery-QeQcXTb5.js","assets/queryTopFeatures-RGyaP_to.js","assets/executeForTopIds-8ZA0njWf.js","assets/executeForTopExtents-OT-iiUkW.js","assets/executeForTopCount-jMcPTl6x.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}