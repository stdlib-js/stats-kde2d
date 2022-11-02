// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-numeric-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-matrix-like@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number-array@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@esm/index.mjs";import{isPrimitive as x}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-two-pi@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@esm/index.mjs";function N(e,r){return e-r}function T(e,r){var t,n,s=e.length;return e[t=h(n=(s-1)*r+1)-1]+(n-h(n))*(e[t+1]-e[t])}function A(e,r){var t,n,s,i;return s=function(e,r){var t,n;for(t=new Array(e.shape[0]),n=0;n<e.shape[0];n++)t[n]=e.get(n,r);return t.sort(N),T(t,.75)-T(t,.25)}(e,r)/1.34,n=function(e,r){var t,n,s,i,o;for(t=0,n=0,s=0,i=0;i<e.shape[0];i++)s+=(t=(o=e.get(i,r))-n)*(o-(n+=t/(i+1)));return d(s/(i-1))}(e,r),t=a(s,n),0===(i=1.06*o(e.shape[0],-.2)*t)&&(i=m),i}var R=1/v;function q(e){return b(e)?NaN:R*y(-.5*o(e,2))}var O={};function L(e,r){if(!f(r))return new TypeError(i("0fg2h",r));if(l(r,"h")){if(e.h=r.h,!u(e.h))return new TypeError(i("invalid option. `%s` option must be an array of positive numbers. Option: `%s`.","h",e.h));if(2!==e.h.length)return new TypeError(i("invalid option. `%s` option must be an array of length two. Option: `%s`.","h",e.h))}if(l(r,"n")&&(e.n=r.n,!j(e.n)))return new TypeError(i("0fg3b","n",e.n));if(l(r,"xMax")&&(e.xMax=r.xMax,!x(e.xMax)||b(e.xMax)))return new TypeError(i("0fg8h","xMax",e.xMax));if(l(r,"xMin")&&(e.xMin=r.xMin,!x(e.xMin)||b(e.xMin)))return new TypeError(i("0fg8h","xMin",e.xMin));if(l(r,"yMax")&&(e.yMax=r.yMax,!x(e.yMax)||b(e.yMax)))return new TypeError(i("0fg8h","yMax",e.yMax));if(l(r,"yMin")&&(e.yMin=r.yMin,!x(e.yMin)||b(e.yMin)))return new TypeError(i("0fg8h","yMin",e.yMin));if(l(r,"kernel"))if(e.kernel=r.kernel,p(e.kernel)){if(e.kernel=(t=e.kernel,void 0===(n=O[t])?new Error(i("0fgAK",t)):n),c(e.kernel))return e.kernel}else if(!g(e.kernel))return new TypeError(i("invalid option. `%s` option must be a string denoting a known kernel function or a custom function. Option: `%s`.","kernel",e.kernel));var t,n;return null}function z(e,r){if(!n(e))throw new TypeError(i("0fg8j",e));if(!n(r))throw new TypeError(i("0fgAa",r));if(e.length!==r.length)throw new RangeError(i("0fg1H"));return{get:function(t,n){if(0===n)return e[t];return r[t]},shape:[e.length,2]}}function F(e,r,t){var n,s,i;for(n=e.get(0,r),i=1;i<t;i++)(s=e.get(i,r))<n&&(n=s);return n}function H(e,r,t){var n,s,i;for(n=e.get(0,r),i=1;i<t;i++)(s=e.get(i,r))>n&&(n=s);return n}function K(){var o,a,m,d,h,p,l,f,j,u,g,c,x,b,v,y,w,M,E,k,N,T,R,O,K,B;if(g={},s(arguments[0]))c=arguments[0],a=1;else{if(R=arguments[1],!n(T=arguments[0]))throw new TypeError(i("0fg8j",T));if(!n(R))throw new TypeError(i("0fgAa",R));if(T.length!==R.length)throw new RangeError("invalid arguments. First and second arguments must be arrays having the same length.");c=z(T,R),a=2}if(arguments.length>a&&(x=L(g,arguments[a])))throw x;if(g.h?(M=g.h[0],E=g.h[1]):(M=A(c,0),E=A(c,1)),K=g.n||25,p=g.xMin||F(c,0,c.shape[0]),l=g.xMax||H(c,0,c.shape[0]),f=g.yMin||F(c,1,c.shape[0]),j=g.yMax||H(c,1,c.shape[0]),p>=l)throw new RangeError(i("invalid option. Lower bound `%s` must be strictly less than the upper bound `%s`.","xMin","xMax"));if(f>=j)throw new RangeError(i("invalid option. Lower bound `%s` must be strictly less than the upper bound `%s`.","yMin","yMax"));for(o=g.kernel||q,B=e({shape:[K,K]}),d=r(p,l,K),h=r(f,j,K),k=0;k<d.length;k++)for(y=d[k],N=0;N<h.length;N++){for(w=h[N],b=0,O=0;O<c.shape[0];O++)u=c.get(O,0),m=(c.get(O,1)-w)/E,b+=1/M*o((u-y)/M)*(1/E*o(m));B.set(k,N,b/c.shape[0])}return t(v={},"x",d),t(v,"y",h),t(v,"z",B),v}O.gaussian=q,O.epanechnikov=function(e){return b(e)?NaN:w(e)>1?0:.75*(1-o(e,2))},O.cosine=function(e){return b(e)?NaN:w(e)>1?0:M*k(E*e)},O.quartic=function(e){return b(e)?NaN:w(e)>1?0:15/16*o(1-o(e,2),2)},O.triangular=function(e){var r;return b(e)?NaN:(r=w(e))>1?0:1-r},O.tricube=function(e){var r;return b(e)?NaN:(r=w(e))>1?0:.8641975308641975*o(1-o(r,3),3)},O.triweight=function(e){return b(e)?NaN:w(e)>1?0:35/32*o(1-o(e,2),3)},O.uniform=function(e){return b(e)?NaN:e<0||e>1?0:.5};export{K as default};
//# sourceMappingURL=index.mjs.map
