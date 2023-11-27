import{fT as f,g6 as g,jC as l,lU as E,lV as m,aC as w,aF as L,lW as b,lX as V,fL as u,dp as v,gW as y,lY as j,lZ as P,l_ as C,l$ as h}from"./index-Ag4O5CUz.js";const S=1e3;function I(t,e,n){const s=E(),o=m(s);return f(o,o,t,.5),f(o,o,e,.5),s[3]=g(o,t),l(o,o,n),s}let _=class{constructor(){this._idToComponent=new Map,this._components=new b(t=>t.bounds),this._edges=new b(t=>t.bounds),this._tmpLineSegment=V(),this._tmpP1=u(),this._tmpP2=u(),this._tmpP3=u(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),v(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor(s=>(this._addCandidates(t,s,n),n.length<S),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor(i=>{if(i.info==null){const{id:c,uid:d}=i;n.push({id:c,uid:d})}return!0},t.bounds),!n.length)return;const s={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",s,e??{});for(const i of o.components)this._setFetchEdgeLocations(i)}async add(t){const e=new p(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const n=[];this._edges.forEachNeighbor(s=>(s.component===e&&n.push(s),!0),e.bounds),this._edges.remove(n),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(e==null||t.uid!==e.uid)return;const n=y.createView(t.locations),s=new Array(n.count),o=u(),i=u();for(let a=0;a<n.count;a++){n.position0.getVec(a,o),n.position1.getVec(a,i);const r=I(o,i,t.origin),x=new T(e,a,r);s[a]=x}this._edges.add(s);const{objectIds:c,origin:d}=t;e.info={locations:n,objectIds:c,origin:d}}_addCandidates(t,e,n){const{info:s}=e.component,{origin:o,objectIds:i}=s,c=s.locations,d=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);l(d,d,o),l(a,a,o);const r=i[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,r,d,a,n),this._addVertexCandidate(t,r,d,n),this._addVertexCandidate(t,r,a,n)}_addEdgeCandidate(t,e,n,s,o){if(!t.returnEdge)return;const i=m(t.bounds),c=j(n,s,this._tmpLineSegment),d=P(c,i,this._tmpP3);C(t.bounds,d)&&o.push({type:"edge",objectId:e,target:h(d),distance:g(i,d),start:h(n),end:h(s)})}_addVertexCandidate(t,e,n,s){if(!t.returnVertex)return;const o=m(t.bounds);C(t.bounds,n)&&s.push({type:"vertex",objectId:e,target:h(n),distance:g(o,n)})}};_=w([L("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const $=_;class p{constructor(e,n){this.id=e,this.bounds=n,this.info=null,this.uid=++p.uid}}p.uid=0;class T{constructor(e,n,s){this.component=e,this.index=n,this.bounds=s}}export{$ as default};
