import{dB as n,dC as p,eR as d,aC as r,aD as i,aF as l,c4 as u,bx as y}from"./index-9slH3TG2.js";let t=class extends n(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{d(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unsupported layer type";s&&(a+=" "+s),o(new y("layer:unsupported-layer-type",a,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],t.prototype,"listMode",void 0),r([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=r([l("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};