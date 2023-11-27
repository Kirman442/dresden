import{aC as _,aD as p,aF as W,aJ as K,nw as N,bS as S,nx as f,j6 as Y,ny as I,nz as $,nA as U,nB as Q,nC as Z,aU as tt,jC as j,gw as et,fL as u,nD as D,nE as L,lM as V,nF as B,nG as w,fJ as R,nH as st,jB as it,l$ as M,fG as C,i2 as ot,g0 as rt,c$ as at,nI as nt,nJ as ht}from"./index-Ag4O5CUz.js";import{t as ct}from"./LineVisualElement-UTpBtwDK.js";import{t as P,x as lt}from"./TextOverlayItem-Y-JEeUoO.js";let l=class extends K{get startPosition(){return[this.startX,this.startY]}set startPosition(i){this._set("startX",i[0]),this._set("startY",i[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(i){this._set("endX",i[0]),this._set("endY",i[1])}constructor(i){super(i),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const i=this.color;return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`}get _lineCap(){return"round"}render(){const{height:i,left:t,top:e,width:s,x1:a,x2:r,y1:m,y2:c}=this._calculateCoordinates(z),h=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return P("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:e+"px",width:s+"px",height:i+"px",visibility:this.visible?"visible":"hidden"}},[P("svg",{width:s,height:i},[P("line",{x1:a,y1:m,x2:r,y2:c,style:h})])])}renderCanvas(i){if(!this.visible)return;i.strokeStyle=this._strokeStyle,i.lineWidth=this.width,i.lineCap=this._lineCap;const t=this._calculateCoordinates(z);i.beginPath(),i.moveTo(t.left+t.x1,t.top+t.y1),i.lineTo(t.left+t.x2,t.top+t.y2),i.stroke()}_calculateCoordinates(i){const t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),a=Math.max(this.startY,this.endY),r=this.width;return i.left=t-r,i.top=s-r,i.width=e-t+2*r,i.height=Math.max(20,a-s+2*r),i.x1=this.startX-t+r,i.y1=this.startY-s+r,i.x2=this.endX-t+r,i.y2=this.endY-s+r,i}};_([p()],l.prototype,"startX",void 0),_([p()],l.prototype,"startY",void 0),_([p()],l.prototype,"endX",void 0),_([p()],l.prototype,"endY",void 0),_([p()],l.prototype,"startPosition",null),_([p()],l.prototype,"endPosition",null),_([p()],l.prototype,"width",void 0),_([p()],l.prototype,"color",void 0),_([p()],l.prototype,"visible",void 0),_([p()],l.prototype,"isDecoration",void 0),_([p({readOnly:!0})],l.prototype,"_strokeStyle",null),l=_([W("esri.views.overlay.LineOverlayItem")],l);const z={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},dt=l;class bt extends ct{constructor(t){super(t),this._handles=new N,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new S([0,0,0,.6]),this._calloutColor=new S([0,0,0,.5]),this._textColor=new S([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){var e;return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!((e=this.view.overlay)!=null&&e.overlaps(this._textItem,t.textItem))}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(t!=null&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,x))break;if(t.callout){const a=this._camera,r=t.callout.distance;f(n,n,[0,t.callout.offset]),a.renderToScreen(n,x),Y(o,0,1),I(o,o,r),f(o,o,n),a.renderToScreen(o,b),this._showCallout=this._updatePosition(x,b)}else this._textItem.position=[x[0],x[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,x,b))break;this._showCallout=this._updatePosition(x,b),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,x,b))break;this._showText=!0;const a=this._updatePosition(x,b);this._showCallout=t.callout!==!1&&a,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this._camera;return s.projectToRenderScreen(t,n),!(n[2]<0||n[2]>1)&&(s.renderToScreen(n,e),!0)}_computeLabelPositionFromCorner(t,e,s,a){if(!t)return!1;const r=this._camera;return F(t.left,1,r,g),$(g,g),F(t.right,0,r,G),f(o,g,G),$(o,o),U(o,o),r.projectToRenderScreen(t.left.endRenderSpace,n),!(n[2]<0||n[2]>1)&&(r.renderToScreen(n,s),I(o,o,e),f(o,o,n),r.renderToScreen(o,a),!0)}_computeLabelPositionFromSegment(t,e,s,a,r){if(!t)return!1;const m=t.segment,c=this._camera;Q(m.startRenderSpace,m.endRenderSpace,c,g),Y(o,-g[1],g[0]);let h=!1;switch(s){case"top":h=o[1]<0;break;case"bottom":h=o[1]>0;break;case"left":h=o[0]>0;break;case"right":h=o[0]<0}if(h&&$(o,o),Z(o)===0)switch(s){case"top":o[1]=1;break;case"bottom":o[1]=-1;break;case"left":o[0]=-1;break;case"right":o[0]=1}return m.eval(ut[t.sampleLocation],J),c.projectToRenderScreen(J,n),!(n[2]<0||n[2]>1)&&(c.renderToScreen(n,a),I(o,o,e),f(o,o,n),c.renderToScreen(o,r),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],a=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(a)?s>0?"left":"right":a>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){var t;this._textItem=new lt({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new dt({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),(t=this.view.overlay)==null||t.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(tt(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function F(i,t,e,s){i.eval(t,k,O),j(A,k,O),e.projectToRenderScreen(k,q),e.projectToRenderScreen(A,E),et(s,pt,_t),U(s,s)}function yt(i){switch(i){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const k=u(),A=u(),O=u(),g=D(),G=D(),o=D(),J=u(),n=L(),x=V(),b=V(),q=L(),_t=q,E=L(),pt=E,ut={start:0,center:.5,end:1};class H{constructor(t=u(),e=u()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return B(e,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),R(s,s)),e}createRenderGeometry(t,e){const s=[],a=[],r=(c,h)=>{const d=T;w(d,c,t),s.push([d[0],d[1],d[2]]),a.push([h[0],h[1],h[2]])},m=e.worldUpAtPosition(this.eval(.5,y),st.get());return r(this.startRenderSpace,m),r(this.endRenderSpace,m),{points:s,normals:a}}static fromPositionAndVector(t,e,s=1){return it(y,e,s),j(y,t,y),new H(M(t),M(y))}}class ft{_projectIn(t,e){this._project?C(t,this.renderSpatialReference,e,this._pcpf):ot(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=u(),this._end=u(),this._pcpf=rt(s),this._project=at(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const a=T;nt(this._start,this._end,t,e,a),j(v,e,a),C(e,this._pcpf,e,this.renderSpatialReference),C(v,this._pcpf,v,this.renderSpatialReference),w(s,v,e),R(s,s)}else ht(this._start,this._end,t,e),C(e,this._pcpf,e,this.renderSpatialReference);else B(e,this._start,this._end,t),s&&(w(s,this._end,this._start),R(s,s));return e}createRenderGeometry(t,e){const s=[],a=[],r=(c,h)=>{const d=v;w(d,c,t),s.push([d[0],d[1],d[2]]),a.push([h[0],h[1],h[2]])};for(let c=0;c<128;++c){const h=c/127,d=y,X=T;this.eval(h,d),e.worldUpAtPosition(d,X),r(d,X)}return{points:s,normals:a}}}const y=u(),T=u(),v=u();export{yt as C,ft as _,bt as g,H as m};