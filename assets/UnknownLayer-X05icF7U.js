import{dB as i,dC as y,eR as l,aC as s,aD as t,aF as p,c4 as u,bx as d}from"./index-etWHd6DB.js";let e=class extends i(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{l(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";n&&(a+=" "+n),o(new d("layer:unknown-layer-type",a,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([t({type:["show","hide"]})],e.prototype,"listMode",void 0),s([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const w=e;export{w as default};