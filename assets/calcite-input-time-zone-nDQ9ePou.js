import{ar as L,as as P,at as l,au as d,aw as F,di as g}from"./index-Ag4O5CUz.js";import{c as w,d as M}from"./label2-8JXm_Mem.js";import{u as _}from"./interactive-j2obaBIq.js";import{u as S,c as k,a as z,d as B,b as V,s as $,g as H}from"./t9n-wN44maAn.js";import{c as R,s as U,a as W}from"./loadable-IPfk-FSr.js";import{c as A,d as G,a as q,H as j}from"./form-YFS8qu6O.js";import{d as N}from"./chip-G7jihG2x.js";import{d as J}from"./combobox-R9JGyl0f.js";import{d as K}from"./combobox-item-Rf3vWoD6.js";import{d as Q}from"./icon-WLICO4Bo.js";import"./key-qdHumIlA.js";import"./observers-4as_h_Yq.js";import"./conditionalSlot-ZTAfLztA.js";import"./component-dtiBfYiX.js";import"./filter2-0ERNrRpl.js";import"./debounce-HnHf1UOZ.js";import"./floating-ui-JZUPDvd1.js";import"./guid-6vN-YNJI.js";import"./openCloseComponent-W_dPBBE2.js";import"./utils2-WRdITcZo.js";const X=60,Z=["CET","CST6CDT","EET","EST","EST5EDT","Factory","HST","MET","MST","MST7MDT","PST8PDT","UTC","WET"];function v(e){const t="−",o="-";return e.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace(t,o)}function Y(e,t){const o=x(e,"en-US",t).replace("GMT","");return o===""?0:Number(v(o))*X}function ee(){return new Date().getTimezoneOffset()*-1}function te(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}let b;async function oe(e,t,o,a){const r=a.getTime(),h=Intl.supportedValuesOf("timeZone");return o==="offset"?(b||(b=Promise.all([g(()=>import("./index3-tBQmP4KM.js"),__vite__mapDeps([])),g(()=>import("./index4-t9tyIww6.js"),__vite__mapDeps([]))])),b.then(async([{groupTimeZones:c},{DateEngine:T}])=>{const f=await c({dateEngine:new T,groupDateRange:1,startDate:new Date(r).toISOString()}),O=new Intl.ListFormat(e,{style:"long",type:"conjunction"});return f.forEach(s=>{const n=[];let m=0;s.tzs.forEach((i,u)=>{Z.includes(i)&&m++,n[u]=m}),s.tzs=s.tzs.filter(i=>!Z.includes(i)),s.labelTzIndices=s.labelTzIndices.map(i=>i-n[i]).filter(i=>i>=0&&i<s.tzs.length)}),f.map(({labelTzIndices:s,tzs:n})=>{const m=n[0],i=v(x(m,e,r)),u=Y(m,r),y=s.map(p=>{const C=n[p];return t[C]||C.split("/").pop()});return{label:se(t,i,O.format(y)),value:u,filterValue:n.map(p=>I(p))}}).filter(s=>!!s).sort((s,n)=>s.value-n.value)})):h.map(c=>({label:I(c),value:c,filterValue:c})).filter(c=>!!c).sort()}function I(e){return e.replace(/_/g," ")}function se(e,t,o){return e.timeZoneLabel.replace("{offset}",t).replace("{cities}",o)}function x(e,t,o=Date.now()){return H(t,{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(o).find(({type:h})=>h==="timeZoneName").value}const ie=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}",E=L(class extends P{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInputTimeZoneBeforeClose=l(this,"calciteInputTimeZoneBeforeClose",6),this.calciteInputTimeZoneBeforeOpen=l(this,"calciteInputTimeZoneBeforeOpen",6),this.calciteInputTimeZoneChange=l(this,"calciteInputTimeZoneChange",6),this.calciteInputTimeZoneClose=l(this,"calciteInputTimeZoneClose",6),this.calciteInputTimeZoneOpen=l(this,"calciteInputTimeZoneOpen",6),this.setComboboxRef=e=>{this.comboboxEl=e},this.onComboboxBeforeClose=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeClose.emit()},this.onComboboxBeforeOpen=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeOpen.emit()},this.onComboboxChange=e=>{e.stopPropagation();const t=e.target,o=this.findTimeZoneItem(t.selectedItems[0].getAttribute("data-value")),a=`${o.value}`;this.value!==a&&(this.value=a,this.selectedTimeZoneItem=o,this.calciteInputTimeZoneChange.emit())},this.onComboboxClose=e=>{e.stopPropagation(),this.open=!1,this.calciteInputTimeZoneClose.emit()},this.onComboboxOpen=e=>{this.open=!0,e.stopPropagation(),this.calciteInputTimeZoneOpen.emit()},this.disabled=!1,this.form=void 0,this.maxItems=0,this.messages=void 0,this.messageOverrides=void 0,this.mode="offset",this.name=void 0,this.open=!1,this.overlayPositioning="absolute",this.referenceDate=void 0,this.required=!1,this.scale="m",this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.createTimeZoneItems()}handleValueChange(e,t){const o=this.findTimeZoneItem(e);if(!o){this.value=t;return}this.selectedTimeZoneItem=o}async setFocus(){await R(this),await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){S(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}findTimeZoneItem(e){const t=e;return this.timeZoneItems.find(({value:o})=>o==t)}async createTimeZoneItems(){return!this.effectiveLocale||!this.messages?[]:oe(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(this.referenceDate??Date.now()))}connectedCallback(){A(this),w(this),k(this),z(this)}disconnectedCallback(){G(this),M(this),B(this),V(this)}async componentWillLoad(){U(this),await $(this),this.timeZoneItems=await this.createTimeZoneItems();const e=this.mode==="offset"?ee():te(),t=this.value??e;this.selectedTimeZoneItem=this.findTimeZoneItem(t),this.selectedTimeZoneItem||(this.selectedTimeZoneItem=this.findTimeZoneItem(e));const o=`${this.selectedTimeZoneItem.value}`;q(this,o),this.value=o}componentDidLoad(){W(this)}componentDidRender(){_(this)}render(){return d(F,null,d("calcite-combobox",{clearDisabled:!0,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,open:this.open,overlayPositioning:this.overlayPositioning,scale:this.scale,selectionMode:"single-persist",ref:this.setComboboxRef},this.timeZoneItems.map(e=>{const t=this.selectedTimeZoneItem===e,{label:o,value:a}=e;return d("calcite-combobox-item",{"data-value":a,key:o,selected:t,textLabel:o,value:`${e.filterValue}`})})),d(j,{component:this}))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["handleTimeZoneItemPropsChange","effectiveLocaleWatcher"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"]}}static get style(){return ie}},[17,"calcite-input-time-zone",{disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],value:[1025],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]}]);function D(){if(typeof customElements>"u")return;["calcite-input-time-zone","calcite-chip","calcite-combobox","calcite-combobox-item","calcite-icon"].forEach(t=>{switch(t){case"calcite-input-time-zone":customElements.get(t)||customElements.define(t,E);break;case"calcite-chip":customElements.get(t)||N();break;case"calcite-combobox":customElements.get(t)||J();break;case"calcite-combobox-item":customElements.get(t)||K();break;case"calcite-icon":customElements.get(t)||Q();break}})}D();const ye=E,Le=D;export{ye as CalciteInputTimeZone,Le as defineCustomElement};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}