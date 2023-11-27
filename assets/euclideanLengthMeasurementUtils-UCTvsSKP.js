import{aQ as D,g3 as s,g4 as L,g5 as v,fG as Z,g6 as y,fK as M,fL as f}from"./index-9slH3TG2.js";import{i as V}from"./measurementUtils-AyBjfTNd.js";var u;function q(t){return S(t,u.Direct)}function w(t){return S(t,u.Horizontal)}function S(t,n){const{hasZ:r,spatialReference:i}=t,c=V(i);let o=0;const a=v(c);if(a==null)return null;const h=n===u.Direct?b:G;for(const z of t.paths){if(z.length<2)continue;const K=z.length-1;for(let p=0;p<K;++p){const g=z[p];e[0]=g[0],e[1]=g[1],e[2]=r?g[2]:0;const R=z[p+1];l[0]=R[0],l[1]=R[1],l[2]=r?R[2]:0;const m=h(e,l,i);if(m==null)return null;o+=m.value}}return s(o,a)}function A(t,n){const{spatialReference:r}=t;return D(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,b(e,l,r)):null}function B(t,n){const{spatialReference:r}=t;return D(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,G(e,l,r)):null}function C(t,n){const{spatialReference:r}=t;return D(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,Q(e,l,r)):null}function E(t){return e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,U(e,t.spatialReference)}function b(t,n,r){const i=H(t,n,r,u.Direct);return i!=null?s(i.direct,i.unit):null}function G(t,n,r){const i=H(t,n,r,u.Horizontal);return i!=null?s(i.horizontal,i.unit):null}function Q(t,n,r){const i=H(t,n,r,u.Vertical);return i!=null?s(i.verticalSigned,i.unit):null}function U(t,n){const r=L(n);return r!=null?s(t[2],r):null}function H(t,n,r,i){const c=V(r),o=v(c);if(o==null)return null;const a=n[2]-t[2];if(i===u.Vertical)return{verticalSigned:a,unit:o};if(!Z(t,r,d,c)||!Z(n,r,x,c))return null;if(i===u.Direct)return{direct:y(x,d),unit:o};if(M($,t[0],t[1],n[2]),!Z($,r,$,c))return null;const h=y($,x);return i===u.Horizontal?{horizontal:h,unit:o}:{direct:y(x,d),horizontal:h,vertical:Math.abs(a),unit:o}}(function(t){t[t.Direct=0]="Direct",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"})(u||(u={}));const e=f(),l=f(),d=f(),x=f(),$=f();export{E as R,G as Z,Q as d,w as f,B as m,q as s,b as x,C as y,A as z};