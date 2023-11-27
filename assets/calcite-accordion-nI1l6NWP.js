import{ar as o,as as a,at as r,au as t}from"./index-Ag4O5CUz.js";import{c as s}from"./observers-4as_h_Yq.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const d=":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}",i=o(class extends a{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionChange=r(this,"calciteInternalAccordionChange",6),this.mutationObserver=s("mutation",()=>this.updateAccordionItems()),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect()}render(){const e=this.appearance==="transparent";return t("div",{class:{"accordion--transparent":e,accordion:!e}},t("slot",null))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach(e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale}),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return this}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}static get style(){return d}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]]]);function n(){if(typeof customElements>"u")return;["calcite-accordion"].forEach(c=>{switch(c){case"calcite-accordion":customElements.get(c)||customElements.define(c,i);break}})}n();const h=i,p=n;export{h as CalciteAccordion,p as defineCustomElement};
