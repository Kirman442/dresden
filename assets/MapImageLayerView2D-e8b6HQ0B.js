import{aK as g,aR as n,aT as d,aO as l,aU as u,aC as s,aD as o,aF as c}from"./index-Ag4O5CUz.js";import{a as f}from"./BitmapContainer-Yi1kwf8C.js";import{m as y}from"./LayerView2D-t-lM3hiI.js";import{r as _}from"./GraphicsView2D-pQlnNisq.js";import{a as H}from"./HighlightGraphicContainer-aBSmLEJr.js";import{v as w}from"./ExportStrategy-cM1xJltQ.js";import{u as v}from"./LayerView-LmaagB7Y.js";import{p as x}from"./MapImageLayerView-kJwb-wAQ.js";import{a as U}from"./RefreshableLayerView-WQUtIr6V.js";import{G as C}from"./MapServiceLayerViewHelper-Tj1g-ggX.js";import"./WGLContainer-FkPO4eNj.js";import"./definitions-r4s07KTk.js";import"./WGLBrushVTLSymbol-2K_O0P3b.js";import"./vec4f32-NvfHy9q7.js";import"./enums-uBkgX7tf.js";import"./number-sTjsTbdA.js";import"./GeometryUtils-b9mbMeHJ.js";import"./color-Mz_2dK3W.js";import"./ShaderCompiler-doWIo4Qy.js";import"./ProgramTemplate-pbHI2j_B.js";import"./MaterialKey-6vvrvzpD.js";import"./alignmentUtils-XT3TYmYW.js";import"./heatmapTextureUtils-FcQOheWo.js";import"./Container-i0iG4pPG.js";import"./EffectView-CpL-etqN.js";import"./cimAnalyzer-Y6KRRNJw.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-BKkv7j8P.js";import"./GeometryUtils-CEMOhUyj.js";import"./Rect-pT1ASav_.js";import"./normalizeUtilsSync-MAQDu-hV.js";import"./projectionSupport-y9S6TKgH.js";import"./json-v6EOeNTY.js";import"./AttributeStoreView-EvCsjkg3.js";import"./visualVariablesUtils-TpPKwbEa.js";import"./ExpandedCIM-TbbD2lL4.js";import"./util-m4-l98Hn.js";import"./Matcher-rvZTEIgz.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-p1LlI5H8.js";import"./ComputedAttributeStorage-ox8g39Fk.js";import"./BaseGraphicContainer-Hk7TxtgM.js";import"./FeatureContainer-eOZG_ihV.js";import"./TileContainer-VCi3xp5C.js";import"./Bitmap-1d0sF_GZ.js";import"./ExportImageParameters-f46jN4WV.js";import"./sublayerUtils-ofkStts2.js";import"./popupUtils-5pOMZLzx.js";let a=class extends x(U(y(v))){constructor(){super(...arguments),this._highlightGraphics=new g,this._updateHash=""}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{n(e)||d.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,r=e>=10.3,m=e>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new H(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new C({createFetchPopupFeaturesQueryGeometry:(h,p)=>l(h,p,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,p)=>{this._highlightView.graphicUpdateHandler({graphic:h,property:p})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new w({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:r,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(u(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,r){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,i,e,r){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};s([o()],a.prototype,"strategy",void 0),s([o()],a.prototype,"updating",void 0),a=s([c("esri.views.2d.layers.MapImageLayerView2D")],a);const Ht=a;export{Ht as default};