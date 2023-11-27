import{ar as a,as as n,bO as s,au as t,cx as o}from"./index-Ag4O5CUz.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const l=":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-app-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-ui-border-3)}.bar{z-index:var(--calcite-app-z-index);background-color:var(--calcite-ui-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",c=a(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="determinate",this.value=0,this.label=void 0,this.text=void 0,this.reversed=!1}render(){const e=this.type==="determinate"?{width:`${this.value*100}%`}:{},r=s(this.el);return t("div",{"aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},t("div",{class:"track"},t("div",{class:{bar:!0,indeterminate:this.type==="indeterminate",[o.rtl]:r==="rtl",reversed:this.reversed},style:e})),this.text?t("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return l}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function d(){if(typeof customElements>"u")return;["calcite-progress"].forEach(e=>{switch(e){case"calcite-progress":customElements.get(e)||customElements.define(e,c);break}})}d();export{d};
