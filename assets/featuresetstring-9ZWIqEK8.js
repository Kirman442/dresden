import{n as o,U as s,Z as T,d as u,H as c,_ as w,a as m,r as y,a0 as b,N as v,y as f,a1 as A,a2 as x,a3 as g,a4 as F,a5 as D,A as L,a6 as V,a7 as l}from"./arcadeUtils-Wg_YVsMM.js";import"./index-Ag4O5CUz.js";import"./number-nxAr1zIg.js";import"./hash-SS5GKVPY.js";function p(a,e){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:l[a.field.type],codedValues:a.domain.codedValues.map(t=>({name:t.name,code:t.code}))},f(e)):v.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:l[a.field.type],min:a.domain.min,max:a.domain.max},f(e)):null}function _(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,3,e,t),s(n[0]))return p(T(n[0],u(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),p(w(u(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new m(e,y.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0])){const r=b(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypes();return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new m(e,y.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return A(n[0],u(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=w(u(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return x(r,n[2])}throw new m(e,y.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return g(n[0],u(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=w(u(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return F(r,n[2])}throw new m(e,y.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(i,d,n)=>{if(o(n,1,2,e,t),!c(n[0]))return D(n[0],n[1]);{const r=L(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new m(e,y.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),f(e));if(s(n[0])){const r=V(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new m(e,y.InvalidParameter,t)})}}export{_ as registerFunctions};
