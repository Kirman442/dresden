import{mI as y,mJ as $,mK as I,ft as p,mL as c,mM as A,mN as O,mO as S,mP as b,mQ as n,mR as v,mS as C,mT as d,mU as x,iu as E,aC as r,mV as o,mW as _,mX as D,di as w,mY as N,mZ as R,m_ as V,m$ as L,n0 as M,n1 as F,n2 as U,n3 as B,n4 as W,n5 as z,n6 as G,n7 as j,n8 as H,n9 as Q,na as k,nb as q,nc as u,nd as J,ne as K,nf as X,ng as Y,nh as Z,ni as ee,nj as te,nk as se}from"./index-9slH3TG2.js";function ae(t){const e=new y,{vertex:s,fragment:a}=e;return $(s,t),e.include(I,t),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(c`
    void main(void) {
      vpos = position;
      ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(A,t),e.include(O,t),a.uniforms.add(new S("tex",l=>l.texture),new b("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),t.output===n.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(v)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(C),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(v)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${t.transparencyPassType===d.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:ae},Symbol.toStringTag,{value:"Module"}));class g extends R{initializeProgram(e){return new V(e.rctx,g.shader.get().build(this.configuration),T)}_setPipelineState(e,s){const a=this.configuration,l=e===d.NONE,h=e===d.FrontFace;return L({blending:a.output!==n.Color&&a.output!==n.Alpha||!a.transparent?null:l?re:M(e),culling:F(a.cullFace),depthTest:{func:U(e)},depthWrite:l?a.writeDepth?B:null:W(e),colorWrite:z,stencilWrite:a.hasOccludees?G:null,stencilTest:a.hasOccludees?s?j:H:null,polygonOffset:l||h?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}g.shader=new D(ie,()=>w(()=>import("./ImageMaterial.glsl-HBBUir2R.js"),__vite__mapDeps([0,1,2])));const re=x(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends N{constructor(){super(...arguments),this.output=n.Color,this.cullFace=_.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=d.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:n.COUNT})],i.prototype,"output",void 0),r([o({count:_.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:d.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const T=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);let ce=class extends k{constructor(e){super(e,new le),this.supportsEdges=!0,this._vertexAttributeLocations=T,this._configuration=new i}getConfiguration(e,s){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<q,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,s){return s===n.Color||s===n.Alpha||s===n.Highlight?e===u.DRAPED_MATERIAL?!0:s===n.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new oe(e)}createBufferWriter(){const e=J.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new ne(e)}};class oe extends K{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(g,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ne extends X{write(e,s,a,l,h){for(const m of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(m);if(f)if(m===p.PERSPECTIVEDIVIDE){Y(f.size===1);const P=l.getField(m,Z);P&&ee(f,P,h)}else te(m,f,e,s,l,h)}}}class le extends se{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=_.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}export{ce as g,ae as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ImageMaterial.glsl-HBBUir2R.js","assets/index-9slH3TG2.js","assets/index-2jScoq2u.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}