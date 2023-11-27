import{a_ as u,aW as f,a$ as w,aP as c,aU as h,aB as o,b3 as y,aC as _,aF as V}from"./index-etWHd6DB.js";import{m as v}from"./LayerView2D-B3sSUksF.js";import{i as g}from"./GraphicContainer-5B-blOuJ.js";import{r as d}from"./GraphicsView2D-oRdX6jS2.js";import{u as C}from"./LayerView-y8Ls0kgx.js";import"./Container-ot-iXvi9.js";import"./EffectView-M--JSyge.js";import"./definitions-X7mUrZzZ.js";import"./enums-uBkgX7tf.js";import"./BaseGraphicContainer-OPVIy5w8.js";import"./FeatureContainer-Lqj6L2Kk.js";import"./AttributeStoreView-S8mJF8W-.js";import"./color-XJAKXLaj.js";import"./number-sTjsTbdA.js";import"./WGLContainer-tOxU4qu2.js";import"./WGLBrushVTLSymbol-CNUtVfTC.js";import"./vec4f32-NvfHy9q7.js";import"./GeometryUtils-b9mbMeHJ.js";import"./ShaderCompiler-doWIo4Qy.js";import"./ProgramTemplate-sa5iKFgj.js";import"./MaterialKey-d6espSoX.js";import"./alignmentUtils-XT3TYmYW.js";import"./heatmapTextureUtils-18RCQJUA.js";import"./visualVariablesUtils-d0_FBHR8.js";import"./cimAnalyzer-EDb3tDQJ.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-zrkmPrsu.js";import"./GeometryUtils-CEMOhUyj.js";import"./Rect-pT1ASav_.js";import"./ExpandedCIM-SDObT16N.js";import"./util-6DK3Q6_e.js";import"./TileContainer-lt5jiSgj.js";import"./normalizeUtilsSync-j169evU0.js";import"./projectionSupport-9Dqdggdl.js";import"./json-v6EOeNTY.js";import"./Matcher-8ZyU24KW.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-d10djtqu.js";import"./ComputedAttributeStorage-aL5Ctzay.js";const m="sublayers",n="layerView";let l=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],n),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const pi=l;export{pi as default};