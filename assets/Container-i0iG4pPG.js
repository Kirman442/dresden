import{aT as M,im as b,fz as x,T,ir as O,is as v}from"./index-Ag4O5CUz.js";import{a as W}from"./EffectView-CpL-etqN.js";import{M as H}from"./definitions-r4s07KTk.js";const R=1,V=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],A=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],g=256,r={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0},m=M.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function y(o,t){t.fillColor[0]=o.color.r/255,t.fillColor[1]=o.color.g/255,t.fillColor[2]=o.color.b/255,t.fillColor[3]=o.color.a,o.haloColor?(t.outlineColor[0]=o.haloColor.r/255,t.outlineColor[1]=o.haloColor.g/255,t.outlineColor[2]=o.haloColor.b/255,t.outlineColor[3]=o.haloColor.a):(t.outlineColor[0]=t.fillColor[0],t.outlineColor[1]=t.fillColor[1],t.outlineColor[2]=t.fillColor[2],t.outlineColor[3]=t.fillColor[3]),t.fillColor[3]*=o.fillOpacity,t.outlineColor[3]*=o.haloOpacity,t.fillColor[0]*=t.fillColor[3],t.fillColor[1]*=t.fillColor[3],t.fillColor[2]*=t.fillColor[3],t.outlineColor[0]*=t.outlineColor[3],t.outlineColor[1]*=t.outlineColor[3],t.outlineColor[2]*=t.outlineColor[3],t.outlineWidth=r.outlineWidth,t.outerHaloWidth=r.outerHaloWidth,t.innerHaloWidth=r.innerHaloWidth,t.outlinePosition=r.outlinePosition}const D=[0,0,0,0];class P{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:r.outlinePosition,outlineWidth:r.outlineWidth,innerHaloWidth:r.innerHaloWidth,outerHaloWidth:r.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*g),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;y(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,a=e.outlinePosition-e.outlineWidth/2,C=e.outlinePosition+e.outlineWidth/2,d=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,f=Math.sqrt(Math.PI/2)*R,u=Math.abs(i)>f?Math.round(10*(Math.abs(i)-f))/10:0,c=Math.abs(d)>f?Math.round(10*(Math.abs(d)-f))/10:0;let l;u&&!c?m.error("The outer rim of the highlight is "+u+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!u&&c?m.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):u&&c&&m.error("The highlight is "+Math.max(u,c)+"px away from the edge of the feature; consider reducing some width values.");const h=[void 0,void 0,void 0,void 0];function w(s,_,n){h[0]=(1-n)*s[0]+n*_[0],h[1]=(1-n)*s[1]+n*_[1],h[2]=(1-n)*s[2]+n*_[2],h[3]=(1-n)*s[3]+n*_[3]}const{_texelData:p}=this;for(let s=0;s<g;++s)l=i+s/(g-1)*(d-i),l<i?(h[0]=0,h[1]=0,h[2]=0,h[3]=0):l<a?w(D,e.outlineColor,(l-i)/(a-i)):l<C?[h[0],h[1],h[2],h[3]]=e.outlineColor:l<d?w(e.outlineColor,e.fillColor,(l-C)/(d-C)):[h[0],h[1],h[2],h[3]]=e.fillColor,p[4*s]=255*h[0],p[4*s+1]=255*h[1],p[4*s+2]=255*h[2],p[4*s+3]=255*h[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=d,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const i=new b;i.wrapMode=x.CLAMP_TO_EDGE,i.width=g,i.height=1,this._shadeTex=new T(t,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,g,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,H),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){var t;(t=this._shadeTex)==null||t.dispose(),this._shadeTex=null}}class $ extends O{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t;return((t=this._effectView)==null?void 0:t.effects)??null}get effect(){var t;return((t=this._effectView)==null?void 0:t.effect)??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new W),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(t)||(this._highlightOptions=t,this._highlightGradient||(this._highlightGradient=new P),this._highlightGradient.setHighlightOptions(t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(t=>t.hasHighlight)}get hasLabels(){return this.children.some(t=>t.hasLabels)}get requiresDedicatedFBO(){return this.children.some(t=>"blendMode"in t&&t.blendMode&&t.blendMode!=="normal")}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){var a;const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,(a=this._clips)!=null&&a.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t||this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{dvs:v()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}export{$ as h,A as i,R as o,V as t};
