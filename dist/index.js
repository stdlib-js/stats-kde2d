"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var X=u(function(Ce,U){
var Fr=require('@stdlib/math-base-special-sqrt/dist');function Ir(r,e){var a,i,n,t,v;for(a=0,i=0,n=0,t=0;t<r.shape[0];t++)v=r.get(t,e),a=v-i,i+=a/(t+1),n+=a*(v-i);return Fr(n/(t-1))}U.exports=Ir
});var K=u(function(Je,B){
var Y=require('@stdlib/math-base-special-floor/dist');function Lr(r,e){return r-e}function H(r,e){var a=r.length,i,n;return n=(a-1)*e+1,i=Y(n)-1,r[i]+(n-Y(n))*(r[i+1]-r[i])}function Sr(r,e){var a,i;for(a=new Array(r.shape[0]),i=0;i<r.shape[0];i++)a[i]=r.get(i,e);return a.sort(Lr),H(a,.75)-H(a,.25)}B.exports=Sr
});var W=u(function(Ze,Q){
var _r=require('@stdlib/math-base-special-pow/dist'),Ar=require('@stdlib/math-base-special-min/dist'),zr=require('@stdlib/constants-float64-eps/dist'),Ur=X(),Xr=K();function Yr(r,e){var a,i,n,t,v;return t=Xr(r,e)/1.34,i=Ur(r,e),a=Ar(t,i),n=_r(r.shape[0],-1/5),v=1.06*n*a,v===0&&(v=zr),v}Q.exports=Yr
});var R=u(function($e,D){
var Hr=require('@stdlib/assert-is-nan/dist'),Br=require('@stdlib/math-base-special-pow/dist'),Kr=require('@stdlib/constants-float64-sqrt-two-pi/dist'),Qr=require('@stdlib/math-base-special-exp/dist'),Wr=1/Kr;function Dr(r){return Hr(r)?NaN:Wr*Qr(-.5*Br(r,2))}D.exports=Dr
});var C=u(function(je,G){
var Gr=require('@stdlib/math-base-special-abs/dist'),Cr=require('@stdlib/assert-is-nan/dist'),Jr=require('@stdlib/math-base-special-pow/dist');function Zr(r){return Cr(r)?NaN:Gr(r)>1?0:.75*(1-Jr(r,2))}G.exports=Zr
});var Z=u(function(ri,J){
var $r=require('@stdlib/math-base-special-abs/dist'),jr=require('@stdlib/assert-is-nan/dist'),re=require('@stdlib/constants-float64-fourth-pi/dist'),ee=require('@stdlib/constants-float64-half-pi/dist'),ie=require('@stdlib/math-base-special-cos/dist');function ne(r){return jr(r)?NaN:$r(r)>1?0:re*ie(ee*r)}J.exports=ne
});var rr=u(function(ei,j){
var ae=require('@stdlib/math-base-special-abs/dist'),te=require('@stdlib/assert-is-nan/dist'),$=require('@stdlib/math-base-special-pow/dist');function ue(r){return te(r)?NaN:ae(r)>1?0:15/16*$(1-$(r,2),2)}j.exports=ue
});var ir=u(function(ii,er){
var se=require('@stdlib/math-base-special-abs/dist'),ve=require('@stdlib/assert-is-nan/dist');function oe(r){var e;return ve(r)?NaN:(e=se(r),e>1?0:1-e)}er.exports=oe
});var tr=u(function(ni,ar){
var fe=require('@stdlib/math-base-special-abs/dist'),le=require('@stdlib/assert-is-nan/dist'),nr=require('@stdlib/math-base-special-pow/dist'),ce=70/81;function qe(r){var e;return le(r)?NaN:(e=fe(r),e>1?0:ce*nr(1-nr(e,3),3))}ar.exports=qe
});var vr=u(function(ai,sr){
var ge=require('@stdlib/math-base-special-abs/dist'),me=require('@stdlib/assert-is-nan/dist'),ur=require('@stdlib/math-base-special-pow/dist');function xe(r){var e;return me(r)?NaN:(e=ge(r),e>1?0:35/32*ur(1-ur(r,2),3))}sr.exports=xe
});var fr=u(function(ti,or){
var he=require('@stdlib/assert-is-nan/dist');function ye(r){return he(r)?NaN:r<0||r>1?0:.5}or.exports=ye
});var cr=u(function(ui,lr){
var de=R(),pe=C(),we=Z(),be=rr(),Me=ir(),ke=tr(),Ee=vr(),Ne=fr(),f={};f.gaussian=de;f.epanechnikov=pe;f.cosine=we;f.quartic=be;f.triangular=Me;f.tricube=ke;f.triweight=Ee;f.uniform=Ne;lr.exports=f
});var gr=u(function(si,qr){
var Te=require('@stdlib/error-tools-fmtprodmsg/dist'),Oe=cr();function Ve(r){var e=Oe[r];return e===void 0?new Error(Te('1LZ9j',r)):e;}qr.exports=Ve
});var xr=u(function(vi,mr){
var Pe=require('@stdlib/assert-is-string/dist'),c=require('@stdlib/assert-has-own-property/dist'),Re=require('@stdlib/assert-is-plain-object/dist'),Fe=require('@stdlib/assert-is-positive-integer/dist'),Ie=require('@stdlib/assert-is-positive-number-array/dist'),Le=require('@stdlib/assert-is-function/dist'),Se=require('@stdlib/assert-is-error/dist'),b=require('@stdlib/assert-is-number/dist').isPrimitive,l=require('@stdlib/error-tools-fmtprodmsg/dist'),M=require('@stdlib/assert-is-nan/dist'),_e=gr();function Ae(r,e){if(!Re(e))return new TypeError(l('1LZ2V',e));if(c(e,"h")){if(r.h=e.h,!Ie(r.h))return new TypeError(l('1LZ9m',"h",r.h));if(r.h.length!==2)return new TypeError(l('1LZ9n',"h",r.h));}if(c(e,"n")&&(r.n=e.n,!Fe(r.n)))return new TypeError(l('1LZ3P',"n",r.n));if(c(e,"xMax")&&(r.xMax=e.xMax,!b(r.xMax)||M(r.xMax)))return new TypeError(l('1LZ8P',"xMax",r.xMax));if(c(e,"xMin")&&(r.xMin=e.xMin,!b(r.xMin)||M(r.xMin)))return new TypeError(l('1LZ8P',"xMin",r.xMin));if(c(e,"yMax")&&(r.yMax=e.yMax,!b(r.yMax)||M(r.yMax)))return new TypeError(l('1LZ8P',"yMax",r.yMax));if(c(e,"yMin")&&(r.yMin=e.yMin,!b(r.yMin)||M(r.yMin)))return new TypeError(l('1LZ8P',"yMin",r.yMin));if(c(e,"kernel")){if(r.kernel=e.kernel,Pe(r.kernel)){if(r.kernel=_e(r.kernel),Se(r.kernel))return r.kernel}else if(!Le(r.kernel))return new TypeError(l('1LZ9o',"kernel",r.kernel));}return null}mr.exports=Ae
});var pr=u(function(oi,dr){
var hr=require('@stdlib/assert-is-numeric-array/dist'),yr=require('@stdlib/error-tools-fmtprodmsg/dist');function ze(r,e){if(!hr(r))throw new TypeError(yr('1LZ8R',r));if(!hr(e))throw new TypeError(yr('1LZ9k',e));if(r.length!==e.length)throw new RangeError(format('1LZ1E'));return{get:a,shape:[r.length,2]};function a(i,n){return n===0?r[i]:e[i]}}dr.exports=ze
});var br=u(function(fi,wr){
function Ue(r,e,a){var i,n,t;for(i=r.get(0,e),t=1;t<a;t++)n=r.get(t,e),n<i&&(i=n);return i}wr.exports=Ue
});var kr=u(function(li,Mr){
function Xe(r,e,a){var i,n,t;for(i=r.get(0,e),t=1;t<a;t++)n=r.get(t,e),n>i&&(i=n);return i}Mr.exports=Xe
});var Rr=u(function(ci,Pr){
var Ye=require('@stdlib/ndarray-array/dist'),Er=require('@stdlib/array-base-linspace/dist'),F=require('@stdlib/utils-define-read-only-property/dist'),Nr=require('@stdlib/assert-is-numeric-array/dist'),He=require('@stdlib/assert-is-matrix-like/dist'),k=require('@stdlib/error-tools-fmtprodmsg/dist'),Tr=W(),Be=xr(),Ke=pr(),Or=br(),Vr=kr(),Qe=R();function We(){var r,e,a,i,n,t,v,E,N,T,I,L,S,_,o,s,O,V,q,A,z,p,w,g,m,x,h,y,d,P;if(o={},He(arguments[0]))s=arguments[0],e=1;else{if(x=arguments[0],h=arguments[1],!Nr(x))throw new TypeError(k('1LZ8R',x));if(!Nr(h))throw new TypeError(k('1LZ9k',h));if(x.length!==h.length)throw new RangeError(format('1LZ1F'));s=Ke(x,h),e=2}if(arguments.length>e&&(O=Be(o,arguments[e]),O))throw O;if(o.h?(p=o.h[0],w=o.h[1]):(p=Tr(s,0),w=Tr(s,1)),d=o.n||25,v=o.xMin||Or(s,0,s.shape[0]),E=o.xMax||Vr(s,0,s.shape[0]),N=o.yMin||Or(s,1,s.shape[0]),T=o.yMax||Vr(s,1,s.shape[0]),v>=E)throw new RangeError(k('1LZ9l',"xMin","xMax"));if(N>=T)throw new RangeError(k('1LZ9l',"yMin","yMax"));for(r=o.kernel||Qe,P=Ye({shape:[d,d]}),n=Er(v,E,d),t=Er(N,T,d),g=0;g<n.length;g++)for(A=n[g],m=0;m<t.length;m++){for(z=t[m],V=0,y=0;y<s.shape[0];y++)I=s.get(y,0),L=s.get(y,1),a=(I-A)/p,i=(L-z)/w,S=1/p*r(a),_=1/w*r(i),V+=S*_;P.set(g,m,V/s.shape[0])}return q={},F(q,"x",n),F(q,"y",t),F(q,"z",P),q}Pr.exports=We
});var De=Rr();module.exports=De;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
