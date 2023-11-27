import{dy as g,dt as d,aC as t,aD as r,aF as f,bS as b,ey as _,a_ as h,aH as c,aU as p,aB as y}from"./index-Ag4O5CUz.js";import{m as T}from"./LayerView2D-t-lM3hiI.js";import{i as v}from"./GraphicContainer-8EVnXLpi.js";import{r as O}from"./GraphicsView2D-pQlnNisq.js";import{u as C}from"./LayerView-LmaagB7Y.js";import"./Container-i0iG4pPG.js";import"./EffectView-CpL-etqN.js";import"./definitions-r4s07KTk.js";import"./enums-uBkgX7tf.js";import"./BaseGraphicContainer-Hk7TxtgM.js";import"./FeatureContainer-eOZG_ihV.js";import"./AttributeStoreView-EvCsjkg3.js";import"./color-Mz_2dK3W.js";import"./number-sTjsTbdA.js";import"./WGLContainer-FkPO4eNj.js";import"./WGLBrushVTLSymbol-2K_O0P3b.js";import"./vec4f32-NvfHy9q7.js";import"./GeometryUtils-b9mbMeHJ.js";import"./ShaderCompiler-doWIo4Qy.js";import"./ProgramTemplate-pbHI2j_B.js";import"./MaterialKey-6vvrvzpD.js";import"./alignmentUtils-XT3TYmYW.js";import"./heatmapTextureUtils-FcQOheWo.js";import"./visualVariablesUtils-TpPKwbEa.js";import"./cimAnalyzer-Y6KRRNJw.js";import"./BidiEngine-8z8MVveq.js";import"./labelPoint-BKkv7j8P.js";import"./GeometryUtils-CEMOhUyj.js";import"./Rect-pT1ASav_.js";import"./ExpandedCIM-TbbD2lL4.js";import"./util-m4-l98Hn.js";import"./TileContainer-VCi3xp5C.js";import"./normalizeUtilsSync-MAQDu-hV.js";import"./projectionSupport-y9S6TKgH.js";import"./json-v6EOeNTY.js";import"./Matcher-rvZTEIgz.js";import"./tileUtils-pcBJnprf.js";import"./TurboLine-p1LlI5H8.js";import"./ComputedAttributeStorage-ox8g39Fk.js";let o=class extends g(d){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([r({type:Boolean})],o.prototype,"frameCenter",void 0),t([r({type:Boolean})],o.prototype,"frameOutline",void 0),t([r({type:Boolean})],o.prototype,"lineOfSight",void 0),t([r({type:Boolean})],o.prototype,"sensorLocation",void 0),t([r({type:Boolean})],o.prototype,"sensorTrail",void 0),o=t([f("esri.layers.support.TelemetryDisplay")],o);const u=o,m=new b([255,127,0]);let n=class extends T(C){constructor(){super(...arguments),this._graphicsLayer=new _,this._frameOutlineGraphic=new h({symbol:{type:"simple-fill",outline:{type:"simple-line",color:m}}}),this._sensorTrailGraphic=new h({symbol:{type:"simple-line",color:m}}),this._lineOfSightGraphic=new h({symbol:{type:"simple-line",color:m}}),this._sensorLocationGraphic=new h({symbol:{type:"simple-marker",color:m}}),this._frameCenterGraphic=new h({symbol:{type:"simple-marker",color:m}}),this.layer=null,this.symbolColor=m,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=c(this._graphicsLayer)}initialize(){var e,i,s,l,a;this.addHandles(p(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},y)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline)??!0,lineOfSight:((s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight)??!0,sensorLocation:((l=this.layer.telemetryDisplay)==null?void 0:l.sensorLocation)??!0,sensorTrail:((a=this.layer.telemetryDisplay)==null?void 0:a.sensorTrail)??!0})}attach(){this.graphicsView=new O({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new v(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([p(()=>{var e,i,s,l,a;return[(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline,(s=this.layer.telemetryDisplay)==null?void 0:s.sensorLocation,(l=this.layer.telemetryDisplay)==null?void 0:l.sensorTrail,(a=this.layer.telemetryDisplay)==null?void 0:a.lineOfSight]},()=>this._updateVisibleTelemetryElements(),y),p(()=>{var e,i,s,l,a;return[this.layer.telemetry,(e=this.visibleTelemetryElements)==null?void 0:e.frameCenter,(i=this.visibleTelemetryElements)==null?void 0:i.frameOutline,(s=this.visibleTelemetryElements)==null?void 0:s.sensorLocation,(l=this.visibleTelemetryElements)==null?void 0:l.sensorTrail,(a=this.visibleTelemetryElements)==null?void 0:a.lineOfSight]},()=>this._updateGraphicGeometries(),y)])}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([r()],n.prototype,"graphicsView",void 0),t([r()],n.prototype,"layer",void 0),t([r()],n.prototype,"symbolColor",void 0),t([r({type:u})],n.prototype,"visibleTelemetryElements",void 0),n=t([f("esri.views.2d.layers.VideoLayerView2D")],n);const me=n;export{me as default};