(self.webpackChunkcomponent65c64e0e3d65ba0c4c96f2064c6c9b2d6bf345b6870351ba71b18cbf=self.webpackChunkcomponent65c64e0e3d65ba0c4c96f2064c6c9b2d6bf345b6870351ba71b18cbf||[]).push([[144,616],{9751:(H,p,n)=>{n.d(p,{y:()=>R});var o=n(930),l=n(727),h=n(8822),f=n(9635),d=n(2416),M=n(576),O=n(2806);let R=(()=>{class D{constructor(v){v&&(this._subscribe=v)}lift(v){const A=new D;return A.source=this,A.operator=v,A}subscribe(v,A,k){const K=function T(D){return D&&D instanceof o.Lv||function b(D){return D&&(0,M.m)(D.next)&&(0,M.m)(D.error)&&(0,M.m)(D.complete)}(D)&&(0,l.Nn)(D)}(v)?v:new o.Hp(v,A,k);return(0,O.x)(()=>{const{operator:J,source:q}=this;K.add(J?J.call(K,q):q?this._subscribe(K):this._trySubscribe(K))}),K}_trySubscribe(v){try{return this._subscribe(v)}catch(A){v.error(A)}}forEach(v,A){return new(A=P(A))((k,K)=>{const J=new o.Hp({next:q=>{try{v(q)}catch(oe){K(oe),J.unsubscribe()}},error:K,complete:k});this.subscribe(J)})}_subscribe(v){var A;return null===(A=this.source)||void 0===A?void 0:A.subscribe(v)}[h.L](){return this}pipe(...v){return(0,f.U)(v)(this)}toPromise(v){return new(v=P(v))((A,k)=>{let K;this.subscribe(J=>K=J,J=>k(J),()=>A(K))})}}return D.create=B=>new D(B),D})();function P(D){var B;return null!==(B=D??d.config.Promise)&&void 0!==B?B:Promise}},930:(H,p,n)=>{n.d(p,{Hp:()=>k,Lv:()=>D});var o=n(576),l=n(727),h=n(2416),f=n(7849),d=n(5032);const M=P("C",void 0,void 0);function P(g,y,x){return{kind:g,value:y,error:x}}var b=n(3410),T=n(2806);class D extends l.w0{constructor(y){super(),this.isStopped=!1,y?(this.destination=y,(0,l.Nn)(y)&&y.add(this)):this.destination=oe}static create(y,x,W){return new k(y,x,W)}next(y){this.isStopped?q(function R(g){return P("N",g,void 0)}(y),this):this._next(y)}error(y){this.isStopped?q(function O(g){return P("E",void 0,g)}(y),this):(this.isStopped=!0,this._error(y))}complete(){this.isStopped?q(M,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(y){this.destination.next(y)}_error(y){try{this.destination.error(y)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const B=Function.prototype.bind;function v(g,y){return B.call(g,y)}class A{constructor(y){this.partialObserver=y}next(y){const{partialObserver:x}=this;if(x.next)try{x.next(y)}catch(W){K(W)}}error(y){const{partialObserver:x}=this;if(x.error)try{x.error(y)}catch(W){K(W)}else K(y)}complete(){const{partialObserver:y}=this;if(y.complete)try{y.complete()}catch(x){K(x)}}}class k extends D{constructor(y,x,W){let S;if(super(),(0,o.m)(y)||!y)S={next:y??void 0,error:x??void 0,complete:W??void 0};else{let w;this&&h.config.useDeprecatedNextContext?(w=Object.create(y),w.unsubscribe=()=>this.unsubscribe(),S={next:y.next&&v(y.next,w),error:y.error&&v(y.error,w),complete:y.complete&&v(y.complete,w)}):S=y}this.destination=new A(S)}}function K(g){h.config.useDeprecatedSynchronousErrorHandling?(0,T.O)(g):(0,f.h)(g)}function q(g,y){const{onStoppedNotification:x}=h.config;x&&b.z.setTimeout(()=>x(g,y))}const oe={closed:!0,next:d.Z,error:function J(g){throw g},complete:d.Z}},727:(H,p,n)=>{n.d(p,{Lc:()=>M,w0:()=>d,Nn:()=>O});var o=n(576);const h=(0,n(3888).d)(P=>function(T){P(this),this.message=T?`${T.length} errors occurred during unsubscription:\n${T.map((D,B)=>`${B+1}) ${D.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=T});var f=n(8737);class d{constructor(b){this.initialTeardown=b,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let b;if(!this.closed){this.closed=!0;const{_parentage:T}=this;if(T)if(this._parentage=null,Array.isArray(T))for(const v of T)v.remove(this);else T.remove(this);const{initialTeardown:D}=this;if((0,o.m)(D))try{D()}catch(v){b=v instanceof h?v.errors:[v]}const{_finalizers:B}=this;if(B){this._finalizers=null;for(const v of B)try{R(v)}catch(A){b=b??[],A instanceof h?b=[...b,...A.errors]:b.push(A)}}if(b)throw new h(b)}}add(b){var T;if(b&&b!==this)if(this.closed)R(b);else{if(b instanceof d){if(b.closed||b._hasParent(this))return;b._addParent(this)}(this._finalizers=null!==(T=this._finalizers)&&void 0!==T?T:[]).push(b)}}_hasParent(b){const{_parentage:T}=this;return T===b||Array.isArray(T)&&T.includes(b)}_addParent(b){const{_parentage:T}=this;this._parentage=Array.isArray(T)?(T.push(b),T):T?[T,b]:b}_removeParent(b){const{_parentage:T}=this;T===b?this._parentage=null:Array.isArray(T)&&(0,f.P)(T,b)}remove(b){const{_finalizers:T}=this;T&&(0,f.P)(T,b),b instanceof d&&b._removeParent(this)}}d.EMPTY=(()=>{const P=new d;return P.closed=!0,P})();const M=d.EMPTY;function O(P){return P instanceof d||P&&"closed"in P&&(0,o.m)(P.remove)&&(0,o.m)(P.add)&&(0,o.m)(P.unsubscribe)}function R(P){(0,o.m)(P)?P():P.unsubscribe()}},2416:(H,p,n)=>{n.d(p,{config:()=>o});const o={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:(H,p,n)=>{n.d(p,{E:()=>l});const l=new(n(9751).y)(d=>d.complete())},2076:(H,p,n)=>{n.d(p,{D:()=>W});var o=n(8421),l=n(9672),h=n(4482),f=n(5403);function d(S,w=0){return(0,h.e)((z,X)=>{z.subscribe((0,f.x)(X,ie=>(0,l.f)(X,S,()=>X.next(ie),w),()=>(0,l.f)(X,S,()=>X.complete(),w),ie=>(0,l.f)(X,S,()=>X.error(ie),w)))})}function M(S,w=0){return(0,h.e)((z,X)=>{X.add(S.schedule(()=>z.subscribe(X),w))})}var P=n(9751),T=n(2202),D=n(576);function v(S,w){if(!S)throw new Error("Iterable cannot be null");return new P.y(z=>{(0,l.f)(z,w,()=>{const X=S[Symbol.asyncIterator]();(0,l.f)(z,w,()=>{X.next().then(ie=>{ie.done?z.complete():z.next(ie.value)})},0,!0)})})}var A=n(3670),k=n(8239),K=n(1144),J=n(6495),q=n(2206),oe=n(4532),g=n(3260);function W(S,w){return w?function x(S,w){if(null!=S){if((0,A.c)(S))return function O(S,w){return(0,o.Xf)(S).pipe(M(w),d(w))}(S,w);if((0,K.z)(S))return function b(S,w){return new P.y(z=>{let X=0;return w.schedule(function(){X===S.length?z.complete():(z.next(S[X++]),z.closed||this.schedule())})})}(S,w);if((0,k.t)(S))return function R(S,w){return(0,o.Xf)(S).pipe(M(w),d(w))}(S,w);if((0,q.D)(S))return v(S,w);if((0,J.T)(S))return function B(S,w){return new P.y(z=>{let X;return(0,l.f)(z,w,()=>{X=S[T.h](),(0,l.f)(z,w,()=>{let ie,ue;try{({value:ie,done:ue}=X.next())}catch(V){return void z.error(V)}ue?z.complete():z.next(ie)},0,!0)}),()=>(0,D.m)(X?.return)&&X.return()})}(S,w);if((0,g.L)(S))return function y(S,w){return v((0,g.Q)(S),w)}(S,w)}throw(0,oe.z)(S)}(S,w):(0,o.Xf)(S)}},8421:(H,p,n)=>{n.d(p,{Xf:()=>B});var o=n(1230),l=n(1144),h=n(8239),f=n(9751),d=n(3670),M=n(2206),O=n(4532),R=n(6495),P=n(3260),b=n(576),T=n(7849),D=n(8822);function B(g){if(g instanceof f.y)return g;if(null!=g){if((0,d.c)(g))return function v(g){return new f.y(y=>{const x=g[D.L]();if((0,b.m)(x.subscribe))return x.subscribe(y);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(g);if((0,l.z)(g))return function A(g){return new f.y(y=>{for(let x=0;x<g.length&&!y.closed;x++)y.next(g[x]);y.complete()})}(g);if((0,h.t)(g))return function k(g){return new f.y(y=>{g.then(x=>{y.closed||(y.next(x),y.complete())},x=>y.error(x)).then(null,T.h)})}(g);if((0,M.D)(g))return J(g);if((0,R.T)(g))return function K(g){return new f.y(y=>{for(const x of g)if(y.next(x),y.closed)return;y.complete()})}(g);if((0,P.L)(g))return function q(g){return J((0,P.Q)(g))}(g)}throw(0,O.z)(g)}function J(g){return new f.y(y=>{(function oe(g,y){var x,W,S,w;return(0,o.mG)(this,void 0,void 0,function*(){try{for(x=(0,o.KL)(g);!(W=yield x.next()).done;)if(y.next(W.value),y.closed)return}catch(z){S={error:z}}finally{try{W&&!W.done&&(w=x.return)&&(yield w.call(x))}finally{if(S)throw S.error}}y.complete()})})(g,y).catch(x=>y.error(x))})}},9646:(H,p,n)=>{n.d(p,{of:()=>h});var o=n(7669),l=n(2076);function h(...f){const d=(0,o.yG)(f);return(0,l.D)(f,d)}},5403:(H,p,n)=>{n.d(p,{x:()=>l});var o=n(930);function l(f,d,M,O,R){return new h(f,d,M,O,R)}class h extends o.Lv{constructor(d,M,O,R,P,b){super(d),this.onFinalize=P,this.shouldUnsubscribe=b,this._next=M?function(T){try{M(T)}catch(D){d.error(D)}}:super._next,this._error=R?function(T){try{R(T)}catch(D){d.error(D)}finally{this.unsubscribe()}}:super._error,this._complete=O?function(){try{O()}catch(T){d.error(T)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var d;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:M}=this;super.unsubscribe(),!M&&(null===(d=this.onFinalize)||void 0===d||d.call(this))}}}},4351:(H,p,n)=>{n.d(p,{b:()=>h});var o=n(5577),l=n(576);function h(f,d){return(0,l.m)(d)?(0,o.z)(f,d,1):(0,o.z)(f,1)}},6590:(H,p,n)=>{n.d(p,{d:()=>h});var o=n(4482),l=n(5403);function h(f){return(0,o.e)((d,M)=>{let O=!1;d.subscribe((0,l.x)(M,R=>{O=!0,M.next(R)},()=>{O||M.next(f),M.complete()}))})}},9300:(H,p,n)=>{n.d(p,{h:()=>h});var o=n(4482),l=n(5403);function h(f,d){return(0,o.e)((M,O)=>{let R=0;M.subscribe((0,l.x)(O,P=>f.call(d,P,R++)&&O.next(P)))})}},590:(H,p,n)=>{n.d(p,{P:()=>O});var o=n(6805),l=n(9300),h=n(5698),f=n(6590),d=n(8068),M=n(4671);function O(R,P){const b=arguments.length>=2;return T=>T.pipe(R?(0,l.h)((D,B)=>R(D,B,T)):M.y,(0,h.q)(1),b?(0,f.d)(P):(0,d.T)(()=>new o.K))}},4004:(H,p,n)=>{n.d(p,{U:()=>h});var o=n(4482),l=n(5403);function h(f,d){return(0,o.e)((M,O)=>{let R=0;M.subscribe((0,l.x)(O,P=>{O.next(f.call(d,P,R++))}))})}},5577:(H,p,n)=>{n.d(p,{z:()=>R});var o=n(4004),l=n(8421),h=n(4482),f=n(9672),d=n(5403),O=n(576);function R(P,b,T=1/0){return(0,O.m)(b)?R((D,B)=>(0,o.U)((v,A)=>b(D,v,B,A))((0,l.Xf)(P(D,B))),T):("number"==typeof b&&(T=b),(0,h.e)((D,B)=>function M(P,b,T,D,B,v,A,k){const K=[];let J=0,q=0,oe=!1;const g=()=>{oe&&!K.length&&!J&&b.complete()},y=W=>J<D?x(W):K.push(W),x=W=>{v&&b.next(W),J++;let S=!1;(0,l.Xf)(T(W,q++)).subscribe((0,d.x)(b,w=>{B?.(w),v?y(w):b.next(w)},()=>{S=!0},void 0,()=>{if(S)try{for(J--;K.length&&J<D;){const w=K.shift();A?(0,f.f)(b,A,()=>x(w)):x(w)}g()}catch(w){b.error(w)}}))};return P.subscribe((0,d.x)(b,y,()=>{oe=!0,g()})),()=>{k?.()}}(D,B,P,T)))}},3900:(H,p,n)=>{n.d(p,{w:()=>f});var o=n(8421),l=n(4482),h=n(5403);function f(d,M){return(0,l.e)((O,R)=>{let P=null,b=0,T=!1;const D=()=>T&&!P&&R.complete();O.subscribe((0,h.x)(R,B=>{P?.unsubscribe();let v=0;const A=b++;(0,o.Xf)(d(B,A)).subscribe(P=(0,h.x)(R,k=>R.next(M?M(B,k,A,v++):k),()=>{P=null,D()}))},()=>{T=!0,D()}))})}},5698:(H,p,n)=>{n.d(p,{q:()=>f});var o=n(515),l=n(4482),h=n(5403);function f(d){return d<=0?()=>o.E:(0,l.e)((M,O)=>{let R=0;M.subscribe((0,h.x)(O,P=>{++R<=d&&(O.next(P),d<=R&&O.complete())}))})}},8505:(H,p,n)=>{n.d(p,{b:()=>d});var o=n(576),l=n(4482),h=n(5403),f=n(4671);function d(M,O,R){const P=(0,o.m)(M)||O||R?{next:M,error:O,complete:R}:M;return P?(0,l.e)((b,T)=>{var D;null===(D=P.subscribe)||void 0===D||D.call(P);let B=!0;b.subscribe((0,h.x)(T,v=>{var A;null===(A=P.next)||void 0===A||A.call(P,v),T.next(v)},()=>{var v;B=!1,null===(v=P.complete)||void 0===v||v.call(P),T.complete()},v=>{var A;B=!1,null===(A=P.error)||void 0===A||A.call(P,v),T.error(v)},()=>{var v,A;B&&(null===(v=P.unsubscribe)||void 0===v||v.call(P)),null===(A=P.finalize)||void 0===A||A.call(P)}))}):f.y}},8068:(H,p,n)=>{n.d(p,{T:()=>f});var o=n(6805),l=n(4482),h=n(5403);function f(M=d){return(0,l.e)((O,R)=>{let P=!1;O.subscribe((0,h.x)(R,b=>{P=!0,R.next(b)},()=>P?R.complete():R.error(M())))})}function d(){return new o.K}},3410:(H,p,n)=>{n.d(p,{z:()=>o});const o={setTimeout(l,h,...f){const{delegate:d}=o;return d?.setTimeout?d.setTimeout(l,h,...f):setTimeout(l,h,...f)},clearTimeout(l){const{delegate:h}=o;return(h?.clearTimeout||clearTimeout)(l)},delegate:void 0}},2202:(H,p,n)=>{n.d(p,{h:()=>l});const l=function o(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(H,p,n)=>{n.d(p,{L:()=>o});const o="function"==typeof Symbol&&Symbol.observable||"@@observable"},6805:(H,p,n)=>{n.d(p,{K:()=>l});const l=(0,n(3888).d)(h=>function(){h(this),this.name="EmptyError",this.message="no elements in sequence"})},7669:(H,p,n)=>{n.d(p,{_6:()=>M,jO:()=>f,yG:()=>d});var o=n(576);function h(O){return O[O.length-1]}function f(O){return(0,o.m)(h(O))?O.pop():void 0}function d(O){return function l(O){return O&&(0,o.m)(O.schedule)}(h(O))?O.pop():void 0}function M(O,R){return"number"==typeof h(O)?O.pop():R}},8737:(H,p,n)=>{function o(l,h){if(l){const f=l.indexOf(h);0<=f&&l.splice(f,1)}}n.d(p,{P:()=>o})},3888:(H,p,n)=>{function o(l){const f=l(d=>{Error.call(d),d.stack=(new Error).stack});return f.prototype=Object.create(Error.prototype),f.prototype.constructor=f,f}n.d(p,{d:()=>o})},2806:(H,p,n)=>{n.d(p,{O:()=>f,x:()=>h});var o=n(2416);let l=null;function h(d){if(o.config.useDeprecatedSynchronousErrorHandling){const M=!l;if(M&&(l={errorThrown:!1,error:null}),d(),M){const{errorThrown:O,error:R}=l;if(l=null,O)throw R}}else d()}function f(d){o.config.useDeprecatedSynchronousErrorHandling&&l&&(l.errorThrown=!0,l.error=d)}},9672:(H,p,n)=>{function o(l,h,f,d=0,M=!1){const O=h.schedule(function(){f(),M?l.add(this.schedule(null,d)):this.unsubscribe()},d);if(l.add(O),!M)return O}n.d(p,{f:()=>o})},4671:(H,p,n)=>{function o(l){return l}n.d(p,{y:()=>o})},1144:(H,p,n)=>{n.d(p,{z:()=>o});const o=l=>l&&"number"==typeof l.length&&"function"!=typeof l},2206:(H,p,n)=>{n.d(p,{D:()=>l});var o=n(576);function l(h){return Symbol.asyncIterator&&(0,o.m)(h?.[Symbol.asyncIterator])}},576:(H,p,n)=>{function o(l){return"function"==typeof l}n.d(p,{m:()=>o})},3670:(H,p,n)=>{n.d(p,{c:()=>h});var o=n(8822),l=n(576);function h(f){return(0,l.m)(f[o.L])}},6495:(H,p,n)=>{n.d(p,{T:()=>h});var o=n(2202),l=n(576);function h(f){return(0,l.m)(f?.[o.h])}},8239:(H,p,n)=>{n.d(p,{t:()=>l});var o=n(576);function l(h){return(0,o.m)(h?.then)}},3260:(H,p,n)=>{n.d(p,{L:()=>f,Q:()=>h});var o=n(1230),l=n(576);function h(d){return(0,o.FC)(this,arguments,function*(){const O=d.getReader();try{for(;;){const{value:R,done:P}=yield(0,o.qq)(O.read());if(P)return yield(0,o.qq)(void 0);yield yield(0,o.qq)(R)}}finally{O.releaseLock()}})}function f(d){return(0,l.m)(d?.getReader)}},4482:(H,p,n)=>{n.d(p,{A:()=>l,e:()=>h});var o=n(576);function l(f){return(0,o.m)(f?.lift)}function h(f){return d=>{if(l(d))return d.lift(function(M){try{return f(M,this)}catch(O){this.error(O)}});throw new TypeError("Unable to lift unknown Observable type")}}},5032:(H,p,n)=>{function o(){}n.d(p,{Z:()=>o})},9635:(H,p,n)=>{n.d(p,{U:()=>h,z:()=>l});var o=n(4671);function l(...f){return h(f)}function h(f){return 0===f.length?o.y:1===f.length?f[0]:function(M){return f.reduce((O,R)=>R(O),M)}}},7849:(H,p,n)=>{n.d(p,{h:()=>h});var o=n(2416),l=n(3410);function h(f){l.z.setTimeout(()=>{const{onUnhandledError:d}=o.config;if(!d)throw f;d(f)})}},4532:(H,p,n)=>{function o(l){return new TypeError(`You provided ${null!==l&&"object"==typeof l?"an invalid object":`'${l}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}n.d(p,{z:()=>o})},1230:(H,p,n)=>{function D(s,i,a,u){return new(a||(a=Promise))(function(m,j){function N($){try{U(u.next($))}catch(ee){j(ee)}}function ne($){try{U(u.throw($))}catch(ee){j(ee)}}function U($){$.done?m($.value):function E(m){return m instanceof a?m:new a(function(j){j(m)})}($.value).then(N,ne)}U((u=u.apply(s,i||[])).next())})}function g(s){return this instanceof g?(this.v=s,this):new g(s)}function y(s,i,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var E,u=a.apply(s,i||[]),m=[];return E={},j("next"),j("throw"),j("return"),E[Symbol.asyncIterator]=function(){return this},E;function j(G){u[G]&&(E[G]=function(ae){return new Promise(function(le,ce){m.push([G,ae,le,ce])>1||N(G,ae)})})}function N(G,ae){try{!function ne(G){G.value instanceof g?Promise.resolve(G.value.v).then(U,$):ee(m[0][2],G)}(u[G](ae))}catch(le){ee(m[0][3],le)}}function U(G){N("next",G)}function $(G){N("throw",G)}function ee(G,ae){G(ae),m.shift(),m.length&&N(m[0][0],m[0][1])}}function W(s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,i=s[Symbol.asyncIterator];return i?i.call(s):(s=function k(s){var i="function"==typeof Symbol&&Symbol.iterator,a=i&&s[i],u=0;if(a)return a.call(s);if(s&&"number"==typeof s.length)return{next:function(){return s&&u>=s.length&&(s=void 0),{value:s&&s[u++],done:!s}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}(s),a={},u("next"),u("throw"),u("return"),a[Symbol.asyncIterator]=function(){return this},a);function u(m){a[m]=s[m]&&function(j){return new Promise(function(N,ne){!function E(m,j,N,ne){Promise.resolve(ne).then(function(U){m({value:U,done:N})},j)}(N,ne,(j=s[m](j)).done,j.value)})}}}n.d(p,{FC:()=>y,KL:()=>W,mG:()=>D,qq:()=>g})},3144:(H,p,n)=>{n.r(p),n.d(p,{HTTP_INTERCEPTORS:()=>ne,HttpBackend:()=>B,HttpClient:()=>E,HttpClientJsonpModule:()=>et,HttpClientModule:()=>qe,HttpClientXsrfModule:()=>Qe,HttpContext:()=>W,HttpContextToken:()=>x,HttpErrorResponse:()=>a,HttpEventType:()=>V,HttpFeatureKind:()=>Z,HttpHandler:()=>D,HttpHeaderResponse:()=>s,HttpHeaders:()=>v,HttpParams:()=>y,HttpRequest:()=>ue,HttpResponse:()=>i,HttpResponseBase:()=>me,HttpUrlEncodingCodec:()=>k,HttpXhrBackend:()=>be,HttpXsrfTokenExtractor:()=>Pe,JsonpClientBackend:()=>Oe,JsonpInterceptor:()=>Je,provideHttpClient:()=>xe,withInterceptors:()=>Ye,withInterceptorsFromDi:()=>je,withJsonpSupport:()=>Be,withNoXsrfProtection:()=>He,withRequestsMadeViaParent:()=>Ze,withXsrfConfiguration:()=>Te,\u0275HttpInterceptingHandler:()=>G,\u0275HttpInterceptorHandler:()=>G,\u0275withHttpTransferCache:()=>it});var o=n(1060),l=n(9646),h=n(9751),f=n(2076),d=n(4351),M=n(9300),O=n(4004),R=n(3900),P=n(8505),b=n(590),T=n(655);class D{}class B{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const c=t.indexOf(":");if(c>0){const _=t.slice(0,c),C=_.toLowerCase(),L=t.slice(c+1).trim();this.maybeSetNormalizedName(_,C),this.headers.has(C)?this.headers.get(C).push(L):this.headers.set(C,[L])}})}:()=>{this.headers=new Map,Object.entries(e).forEach(([t,c])=>{let _;if(_="string"==typeof c?[c]:"number"==typeof c?[c.toString()]:c.map(C=>C.toString()),_.length>0){const C=t.toLowerCase();this.headers.set(C,_),this.maybeSetNormalizedName(t,C)}})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let c=e.value;if("string"==typeof c&&(c=[c]),0===c.length)return;this.maybeSetNormalizedName(e.name,t);const _=("a"===e.op?this.headers.get(t):void 0)||[];_.push(...c),this.headers.set(t,_);break;case"d":const C=e.value;if(C){let L=this.headers.get(t);if(!L)return;L=L.filter(I=>-1===C.indexOf(I)),0===L.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,L)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class k{encodeKey(e){return oe(e)}encodeValue(e){return oe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const J=/%(\d[a-f0-9])/gi,q={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function oe(r){return encodeURIComponent(r).replace(J,(e,t)=>q[t]??e)}function g(r){return`${r}`}class y{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new k,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function K(r,e){const t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(_=>{const C=_.indexOf("="),[L,I]=-1==C?[e.decodeKey(_),""]:[e.decodeKey(_.slice(0,C)),e.decodeValue(_.slice(C+1))],F=t.get(L)||[];F.push(I),t.set(L,F)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const c=e.fromObject[t],_=Array.isArray(c)?c.map(g):[g(c)];this.map.set(t,_)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(c=>{const _=e[c];Array.isArray(_)?_.forEach(C=>{t.push({param:c,value:C,op:"a"})}):t.push({param:c,value:_,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(c=>t+"="+this.encoder.encodeValue(c)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new y({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(g(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let c=this.map.get(e.param)||[];const _=c.indexOf(g(e.value));-1!==_&&c.splice(_,1),c.length>0?this.map.set(e.param,c):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class x{constructor(e){this.defaultValue=e}}class W{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function w(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function z(r){return typeof Blob<"u"&&r instanceof Blob}function X(r){return typeof FormData<"u"&&r instanceof FormData}class ue{constructor(e,t,c,_){let C;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function S(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||_?(this.body=void 0!==c?c:null,C=_):C=c,C&&(this.reportProgress=!!C.reportProgress,this.withCredentials=!!C.withCredentials,C.responseType&&(this.responseType=C.responseType),C.headers&&(this.headers=C.headers),C.context&&(this.context=C.context),C.params&&(this.params=C.params)),this.headers||(this.headers=new v),this.context||(this.context=new W),this.params){const L=this.params.toString();if(0===L.length)this.urlWithParams=t;else{const I=t.indexOf("?");this.urlWithParams=t+(-1===I?"?":I<t.length-1?"&":"")+L}}else this.params=new y,this.urlWithParams=t}serializeBody(){return null===this.body?null:w(this.body)||z(this.body)||X(this.body)||function ie(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||X(this.body)?null:z(this.body)?this.body.type||null:w(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,c=e.url||this.url,_=e.responseType||this.responseType,C=void 0!==e.body?e.body:this.body,L=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,I=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let F=e.headers||this.headers,re=e.params||this.params;const pe=e.context??this.context;return void 0!==e.setHeaders&&(F=Object.keys(e.setHeaders).reduce((fe,te)=>fe.set(te,e.setHeaders[te]),F)),e.setParams&&(re=Object.keys(e.setParams).reduce((fe,te)=>fe.set(te,e.setParams[te]),re)),new ue(t,c,C,{params:re,headers:F,context:pe,reportProgress:I,responseType:_,withCredentials:L})}}var V=(()=>((V=V||{})[V.Sent=0]="Sent",V[V.UploadProgress=1]="UploadProgress",V[V.ResponseHeader=2]="ResponseHeader",V[V.DownloadProgress=3]="DownloadProgress",V[V.Response=4]="Response",V[V.User=5]="User",V))();class me{constructor(e,t=200,c="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||c,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class s extends me{constructor(e={}){super(e),this.type=V.ResponseHeader}clone(e={}){return new s({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class i extends me{constructor(e={}){super(e),this.type=V.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new i({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class a extends me{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function u(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let E=(()=>{class r{constructor(t){this.handler=t}request(t,c,_={}){let C;if(t instanceof ue)C=t;else{let F,re;F=_.headers instanceof v?_.headers:new v(_.headers),_.params&&(re=_.params instanceof y?_.params:new y({fromObject:_.params})),C=new ue(t,c,void 0!==_.body?_.body:null,{headers:F,context:_.context,params:re,reportProgress:_.reportProgress,responseType:_.responseType||"json",withCredentials:_.withCredentials})}const L=(0,l.of)(C).pipe((0,d.b)(F=>this.handler.handle(F)));if(t instanceof ue||"events"===_.observe)return L;const I=L.pipe((0,M.h)(F=>F instanceof i));switch(_.observe||"body"){case"body":switch(C.responseType){case"arraybuffer":return I.pipe((0,O.U)(F=>{if(null!==F.body&&!(F.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return F.body}));case"blob":return I.pipe((0,O.U)(F=>{if(null!==F.body&&!(F.body instanceof Blob))throw new Error("Response is not a Blob.");return F.body}));case"text":return I.pipe((0,O.U)(F=>{if(null!==F.body&&"string"!=typeof F.body)throw new Error("Response is not a string.");return F.body}));default:return I.pipe((0,O.U)(F=>F.body))}case"response":return I;default:throw new Error(`Unreachable: unhandled observe type ${_.observe}}`)}}delete(t,c={}){return this.request("DELETE",t,c)}get(t,c={}){return this.request("GET",t,c)}head(t,c={}){return this.request("HEAD",t,c)}jsonp(t,c){return this.request("JSONP",t,{params:(new y).append(c,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,c={}){return this.request("OPTIONS",t,c)}patch(t,c,_={}){return this.request("PATCH",t,u(_,c))}post(t,c,_={}){return this.request("POST",t,u(_,c))}put(t,c,_={}){return this.request("PUT",t,u(_,c))}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(D))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();function m(r,e){return e(r)}function j(r,e){return(t,c)=>e.intercept(t,{handle:_=>r(_,c)})}const ne=new o.InjectionToken(""),U=new o.InjectionToken(""),$=new o.InjectionToken("");function ee(){let r=null;return(e,t)=>(null===r&&(r=((0,o.inject)(ne,{optional:!0})??[]).reduceRight(j,m)),r(e,t))}let le,G=(()=>{class r extends D{constructor(t,c){super(),this.backend=t,this.injector=c,this.chain=null}handle(t){if(null===this.chain){const c=Array.from(new Set([...this.injector.get(U),...this.injector.get($,[])]));this.chain=c.reduceRight((_,C)=>function N(r,e,t){return(c,_)=>t.runInContext(()=>e(c,C=>r(C,_)))}(_,C,this.injector),m)}return this.chain(t,c=>this.backend.handle(c))}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(B),o.\u0275\u0275inject(o.EnvironmentInjector))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})(),ae=0;class Me{}function ke(){return"object"==typeof window?window:{}}let Oe=(()=>{class r{constructor(t,c){this.callbackMap=t,this.document=c,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+ae++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new h.y(c=>{const _=this.nextCallback(),C=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${_}$1`),L=this.document.createElement("script");L.src=C;let I=null,F=!1;this.callbackMap[_]=te=>{delete this.callbackMap[_],I=te,F=!0};const re=()=>{L.parentNode&&L.parentNode.removeChild(L),delete this.callbackMap[_]};return L.addEventListener("load",te=>{this.resolvedPromise.then(()=>{re(),F?(c.next(new i({body:I,status:200,statusText:"OK",url:C})),c.complete()):c.error(new a({url:C,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),L.addEventListener("error",te=>{re(),c.error(new a({error:te,status:0,statusText:"JSONP Error",url:C}))}),this.document.body.appendChild(L),c.next({type:V.Sent}),()=>{F||this.removeListeners(L),re()}})}removeListeners(t){le||(le=this.document.implementation.createHTMLDocument()),le.adoptNode(t)}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(Me),o.\u0275\u0275inject(T.DOCUMENT))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();function De(r,e){return"JSONP"===r.method?(0,o.inject)(Oe).handle(r):e(r)}let Je=(()=>{class r{constructor(t){this.injector=t}intercept(t,c){return this.injector.runInContext(()=>De(t,_=>c.handle(_)))}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(o.EnvironmentInjector))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();const Ve=/^\)\]\}',?\n/;let be=(()=>{class r{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new o.\u0275RuntimeError(-2800,!1);const c=function Ge(){const r=()=>{};if(typeof Zone<"u"){const e=Zone.current,t=e.scheduleMacroTask("httpMacroTask",r,void 0,r,r);return()=>e.cancelTask(t)}return r}(),_=this.xhrFactory;return(_.\u0275loadImpl?(0,f.D)(_.\u0275loadImpl()):(0,l.of)(null)).pipe((0,R.w)(()=>new h.y(L=>{const I=_.build();if(I.open(t.method,t.urlWithParams),t.withCredentials&&(I.withCredentials=!0),t.headers.forEach((Y,Q)=>I.setRequestHeader(Y,Q.join(","))),t.headers.has("Accept")||I.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const Y=t.detectContentTypeHeader();null!==Y&&I.setRequestHeader("Content-Type",Y)}if(t.responseType){const Y=t.responseType.toLowerCase();I.responseType="json"!==Y?Y:"text"}const F=t.serializeBody();let re=null;const pe=()=>{if(null!==re)return re;const Y=I.statusText||"OK",Q=new v(I.getAllResponseHeaders()),_e=function $e(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}(I)||t.url;return re=new s({headers:Q,status:I.status,statusText:Y,url:_e}),re},fe=()=>{let{headers:Y,status:Q,statusText:_e,url:ze}=pe(),se=null;204!==Q&&(se=typeof I.response>"u"?I.responseText:I.response),0===Q&&(Q=se?200:0);let ge=Q>=200&&Q<300;if("json"===t.responseType&&"string"==typeof se){const at=se;se=se.replace(Ve,"");try{se=""!==se?JSON.parse(se):null}catch(lt){se=at,ge&&(ge=!1,se={error:lt,text:se})}}ge?(L.next(new i({body:se,headers:Y,status:Q,statusText:_e,url:ze||void 0})),L.complete()):L.error(new a({error:se,headers:Y,status:Q,statusText:_e,url:ze||void 0}))},te=Y=>{const{url:Q}=pe(),_e=new a({error:Y,status:I.status||0,statusText:I.statusText||"Unknown Error",url:Q||void 0});L.error(_e),c()};let Fe=!1;const Ke=Y=>{Fe||(L.next(pe()),Fe=!0);let Q={type:V.DownloadProgress,loaded:Y.loaded};Y.lengthComputable&&(Q.total=Y.total),"text"===t.responseType&&I.responseText&&(Q.partialText=I.responseText),L.next(Q)},Ne=Y=>{let Q={type:V.UploadProgress,loaded:Y.loaded};Y.lengthComputable&&(Q.total=Y.total),L.next(Q)};I.addEventListener("load",fe),I.addEventListener("error",te),I.addEventListener("timeout",te),I.addEventListener("abort",te),t.reportProgress&&(I.addEventListener("progress",Ke),null!==F&&I.upload&&I.upload.addEventListener("progress",Ne));const We=()=>c();I.addEventListener("loadend",We);try{I.send(F)}catch(Y){te(Y)}return L.next({type:V.Sent}),()=>{I.removeEventListener("loadend",We),I.removeEventListener("error",te),I.removeEventListener("abort",te),I.removeEventListener("load",fe),I.removeEventListener("timeout",te),c(),t.reportProgress&&(I.removeEventListener("progress",Ke),null!==F&&I.upload&&I.upload.removeEventListener("progress",Ne)),I.readyState!==I.DONE&&I.abort()}})))}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(T.XhrFactory))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();const ve=new o.InjectionToken("XSRF_ENABLED"),Ce="XSRF-TOKEN",Ie=new o.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Ce}),Re="X-XSRF-TOKEN",we=new o.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>Re});class Pe{}let Se=(()=>{class r{constructor(t,c,_){this.doc=t,this.platform=c,this.cookieName=_,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,T.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(T.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(Ie))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();function Ae(r,e){const t=r.url.toLowerCase();if(!(0,o.inject)(ve)||"GET"===r.method||"HEAD"===r.method||t.startsWith("http://")||t.startsWith("https://"))return e(r);const c=(0,o.inject)(Pe).getToken(),_=(0,o.inject)(we);return null!=c&&!r.headers.has(_)&&(r=r.clone({headers:r.headers.set(_,c)})),e(r)}let Le=(()=>{class r{constructor(t){this.injector=t}intercept(t,c){return this.injector.runInContext(()=>Ae(t,_=>c.handle(_)))}}return r.\u0275fac=function(t){return new(t||r)(o.\u0275\u0275inject(o.EnvironmentInjector))},r.\u0275prov=o.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})();var Z=(()=>((Z=Z||{})[Z.Interceptors=0]="Interceptors",Z[Z.LegacyInterceptors=1]="LegacyInterceptors",Z[Z.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",Z[Z.NoXsrfProtection=3]="NoXsrfProtection",Z[Z.JsonpSupport=4]="JsonpSupport",Z[Z.RequestsMadeViaParent=5]="RequestsMadeViaParent",Z))();function ye(r,e){return{\u0275kind:r,\u0275providers:e}}function xe(...r){const e=[E,be,G,{provide:D,useExisting:G},{provide:B,useExisting:be},{provide:U,useValue:Ae,multi:!0},{provide:ve,useValue:!0},{provide:Pe,useClass:Se}];for(const t of r)e.push(...t.\u0275providers);return(0,o.makeEnvironmentProviders)(e)}function Ye(r){return ye(Z.Interceptors,r.map(e=>({provide:U,useValue:e,multi:!0})))}const Ue=new o.InjectionToken("LEGACY_INTERCEPTOR_FN");function je(){return ye(Z.LegacyInterceptors,[{provide:Ue,useFactory:ee},{provide:U,useExisting:Ue,multi:!0}])}function Te({cookieName:r,headerName:e}){const t=[];return void 0!==r&&t.push({provide:Ie,useValue:r}),void 0!==e&&t.push({provide:we,useValue:e}),ye(Z.CustomXsrfConfiguration,t)}function He(){return ye(Z.NoXsrfProtection,[{provide:ve,useValue:!1}])}function Be(){return ye(Z.JsonpSupport,[Oe,{provide:Me,useFactory:ke},{provide:U,useValue:De,multi:!0}])}function Ze(){return ye(Z.RequestsMadeViaParent,[{provide:B,useFactory:()=>(0,o.inject)(D,{skipSelf:!0,optional:!0})}])}let Qe=(()=>{class r{static disable(){return{ngModule:r,providers:[He().\u0275providers]}}static withOptions(t={}){return{ngModule:r,providers:Te(t).\u0275providers}}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[Le,{provide:ne,useExisting:Le,multi:!0},{provide:Pe,useClass:Se},Te({cookieName:Ce,headerName:Re}).\u0275providers,{provide:ve,useValue:!0}]}),r})(),qe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[xe(je())]}),r})(),et=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=o.\u0275\u0275defineInjector({providers:[Be().\u0275providers]}),r})();const Ee=new o.InjectionToken(""),tt=["GET","HEAD"];function nt(r,e){const{isCacheActive:t}=(0,o.inject)(Ee);if(!t||!tt.includes(r.method))return e(r);const c=(0,o.inject)(o.TransferState),_=function ot(r){const{params:e,method:t,responseType:c,url:_}=r,I=function st(r){let e=0;for(const t of r)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}(t+"."+c+"."+_+"?"+e.keys().sort().map(F=>`${F}=${e.getAll(F)}`).join("&"));return(0,o.makeStateKey)(I)}(r),C=c.get(_,null);if(C){let L=C.body;switch(C.responseType){case"arraybuffer":L=(new TextEncoder).encode(C.body).buffer;break;case"blob":L=new Blob([C.body])}return(0,l.of)(new i({body:L,headers:new v(C.headers),status:C.status,statusText:C.statusText,url:C.url}))}return e(r).pipe((0,P.b)(L=>{L instanceof i&&c.set(_,{body:L.body,headers:rt(L.headers),status:L.status,statusText:L.statusText,url:L.url||"",responseType:r.responseType})}))}function rt(r){const e={};for(const t of r.keys()){const c=r.getAll(t);null!==c&&(e[t]=c)}return e}function it(){return[{provide:Ee,useFactory:()=>((0,o.inject)(o.\u0275ENABLED_SSR_FEATURES).add("httpcache"),{isCacheActive:!0})},{provide:$,useValue:nt,multi:!0,deps:[o.TransferState,Ee]},{provide:o.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const r=(0,o.inject)(o.ApplicationRef),e=(0,o.inject)(Ee),t=(0,o.inject)(o.\u0275InitialRenderPendingTasks);return()=>{r.isStable.pipe((0,b.P)(_=>_)).toPromise().then(()=>t.whenAllTasksComplete).then(()=>{e.isCacheActive=!1})}},deps:[o.ApplicationRef,Ee,o.\u0275InitialRenderPendingTasks]}]}}}]);