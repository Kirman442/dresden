import{aC as y,aF as d,bx as l,cM as f,fB as w}from"./index-Ag4O5CUz.js";import{p as o,n as F}from"./popupUtils-5pOMZLzx.js";const v=h=>{let r=class extends h{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:t}=e;if(!t)throw new l("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e});if(!o(e,p))throw new l("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){this._validateFetchPopupFeatures(e);const t=e!=null?e.clientGraphics:null;if(!t||t.length===0)return[];const u=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=f(this.layer.fieldsIndex,await F(u,o(this.layer,e)))),await this.prepareFetchPopupFeatures(i);const c=new Set,n=[],s=[];for(const a of t)w(i,a,c)?s.push(a):n.push(a);return s.length===0?n:this.whenGraphicAttributes(s,[...c]).catch(()=>s).then(a=>n.concat(a))}};return r=y([d("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{v as i};
