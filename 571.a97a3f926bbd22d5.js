(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[571],{9571:(B,y,i)=>{i.r(y),i.d(y,{default:()=>S});var r=i(1060),d=i(2478),_=i(8533),p=i(7760),h=i(655),b=i(9401);const C=function(){return{standalone:!0}};function w(x,E){if(1&x){const v=r.\u0275\u0275getCurrentView();r.\u0275\u0275elementStart(0,"div",1)(1,"div",2)(2,"p"),r.\u0275\u0275text(3),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(4,"mat-radio-group",3),r.\u0275\u0275listener("ngModelChange",function(F){r.\u0275\u0275restoreView(v);const U=r.\u0275\u0275nextContext();return r.\u0275\u0275resetView(U.data.runtime.data.selection=F)}),r.\u0275\u0275elementStart(5,"mat-radio-button",4),r.\u0275\u0275text(6,"Option 1"),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(7,"mat-radio-button",5),r.\u0275\u0275text(8,"Option 2"),r.\u0275\u0275elementEnd()()(),r.\u0275\u0275elementStart(9,"pre"),r.\u0275\u0275text(10),r.\u0275\u0275pipe(11,"json"),r.\u0275\u0275elementEnd()()}if(2&x){const v=r.\u0275\u0275nextContext();r.\u0275\u0275advance(3),r.\u0275\u0275textInterpolate(v.data.component.content.question),r.\u0275\u0275advance(1),r.\u0275\u0275property("ngModel",v.data.runtime.data.selection)("ngModelOptions",r.\u0275\u0275pureFunction0(6,C)),r.\u0275\u0275advance(6),r.\u0275\u0275textInterpolate1("",r.\u0275\u0275pipeBind1(11,4,v.data),"\n    ")}}let P=(()=>{class x{constructor(){}}return x.\u0275fac=function(v){return new(v||x)},x.\u0275cmp=r.\u0275\u0275defineComponent({type:x,selectors:[["fm-registerId"]],inputs:{data:"data"},standalone:!0,features:[r.\u0275\u0275StandaloneFeature],decls:1,vars:1,consts:[["class","flex flex-col flex-auto min-w-0",4,"ngIf"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto"],["ngDefaultControl","","aria-label","Select an option",3,"ngModel","ngModelOptions","ngModelChange"],["value","Option 1"],["value","Option 2"]],template:function(v,L){1&v&&r.\u0275\u0275template(0,w,12,7,"div",0),2&v&&r.\u0275\u0275property("ngIf",L.data)},dependencies:[h.CommonModule,h.NgIf,h.JsonPipe,b.u5,b.Fj,b.JJ,b.On,b.UX,p.MatRadioModule,p.MatRadioGroup,p.MatRadioButton],encapsulation:2}),x})();const V=["test"],S=[{path:"",component:(()=>{class x{constructor(){this.reactiveComponent={component:{content:{},ui:{}},runtime:{data:{},score:{},feedback:{}}}}StartTest(){console.log("container:"+this.testContainer);const v=this.testContainer.createComponent(P);v.instance.data=this.reactiveComponent,v.changeDetectorRef.markForCheck()}ngOnInit(){}}return x.\u0275fac=function(v){return new(v||x)},x.\u0275cmp=r.\u0275\u0275defineComponent({type:x,selectors:[["test"]],viewQuery:function(v,L){if(1&v&&r.\u0275\u0275viewQuery(V,5,r.ViewContainerRef),2&v){let F;r.\u0275\u0275queryRefresh(F=r.\u0275\u0275loadQuery())&&(L.testContainer=F.first)}},standalone:!0,features:[r.\u0275\u0275StandaloneFeature],decls:9,vars:2,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],["mat-flat-button","",1,"mt-8",3,"color","click"],[1,"ml-2","icon-size-5",3,"svgIcon"],[1,"flex-auto","p-6","sm:p-10"],["test",""]],template:function(v,L){1&v&&(r.\u0275\u0275elementStart(0,"div",0)(1,"div")(2,"a",1),r.\u0275\u0275listener("click",function(){return L.StartTest()}),r.\u0275\u0275elementStart(3,"span"),r.\u0275\u0275text(4,"Start Test"),r.\u0275\u0275elementEnd(),r.\u0275\u0275element(5,"mat-icon",2),r.\u0275\u0275elementEnd()(),r.\u0275\u0275elementStart(6,"div",3),r.\u0275\u0275element(7,"div",null,4),r.\u0275\u0275elementEnd()()),2&v&&(r.\u0275\u0275advance(2),r.\u0275\u0275property("color","primary"),r.\u0275\u0275advance(3),r.\u0275\u0275property("svgIcon","heroicons_mini:arrow-long-right"))},dependencies:[d.MatButtonModule,d.MatAnchor,_.MatIconModule,_.MatIcon],encapsulation:2}),x})()}]},9751:(B,y,i)=>{i.d(y,{y:()=>w});var r=i(930),d=i(727),_=i(8822),p=i(9635),h=i(2416),b=i(576),C=i(2806);let w=(()=>{class S{constructor(E){E&&(this._subscribe=E)}lift(E){const v=new S;return v.source=this,v.operator=E,v}subscribe(E,v,L){const F=function A(S){return S&&S instanceof r.Lv||function V(S){return S&&(0,b.m)(S.next)&&(0,b.m)(S.error)&&(0,b.m)(S.complete)}(S)&&(0,d.Nn)(S)}(E)?E:new r.Hp(E,v,L);return(0,C.x)(()=>{const{operator:U,source:z}=this;F.add(U?U.call(F,z):z?this._subscribe(F):this._trySubscribe(F))}),F}_trySubscribe(E){try{return this._subscribe(E)}catch(v){E.error(v)}}forEach(E,v){return new(v=P(v))((L,F)=>{const U=new r.Hp({next:z=>{try{E(z)}catch(q){F(q),U.unsubscribe()}},error:F,complete:L});this.subscribe(U)})}_subscribe(E){var v;return null===(v=this.source)||void 0===v?void 0:v.subscribe(E)}[_.L](){return this}pipe(...E){return(0,p.U)(E)(this)}toPromise(E){return new(E=P(E))((v,L)=>{let F;this.subscribe(U=>F=U,U=>L(U),()=>v(F))})}}return S.create=x=>new S(x),S})();function P(S){var x;return null!==(x=S??h.config.Promise)&&void 0!==x?x:Promise}},930:(B,y,i)=>{i.d(y,{Hp:()=>L,Lv:()=>S});var r=i(576),d=i(727),_=i(2416),p=i(7849),h=i(5032);const b=P("C",void 0,void 0);function P(D,g,R){return{kind:D,value:g,error:R}}var V=i(3410),A=i(2806);class S extends d.w0{constructor(g){super(),this.isStopped=!1,g?(this.destination=g,(0,d.Nn)(g)&&g.add(this)):this.destination=q}static create(g,R,K){return new L(g,R,K)}next(g){this.isStopped?z(function w(D){return P("N",D,void 0)}(g),this):this._next(g)}error(g){this.isStopped?z(function C(D){return P("E",void 0,D)}(g),this):(this.isStopped=!0,this._error(g))}complete(){this.isStopped?z(b,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(g){this.destination.next(g)}_error(g){try{this.destination.error(g)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const x=Function.prototype.bind;function E(D,g){return x.call(D,g)}class v{constructor(g){this.partialObserver=g}next(g){const{partialObserver:R}=this;if(R.next)try{R.next(g)}catch(K){F(K)}}error(g){const{partialObserver:R}=this;if(R.error)try{R.error(g)}catch(K){F(K)}else F(g)}complete(){const{partialObserver:g}=this;if(g.complete)try{g.complete()}catch(R){F(R)}}}class L extends S{constructor(g,R,K){let O;if(super(),(0,r.m)(g)||!g)O={next:g??void 0,error:R??void 0,complete:K??void 0};else{let N;this&&_.config.useDeprecatedNextContext?(N=Object.create(g),N.unsubscribe=()=>this.unsubscribe(),O={next:g.next&&E(g.next,N),error:g.error&&E(g.error,N),complete:g.complete&&E(g.complete,N)}):O=g}this.destination=new v(O)}}function F(D){_.config.useDeprecatedSynchronousErrorHandling?(0,A.O)(D):(0,p.h)(D)}function z(D,g){const{onStoppedNotification:R}=_.config;R&&V.z.setTimeout(()=>R(D,g))}const q={closed:!0,next:h.Z,error:function U(D){throw D},complete:h.Z}},727:(B,y,i)=>{i.d(y,{Lc:()=>b,w0:()=>h,Nn:()=>C});var r=i(576);const _=(0,i(3888).d)(P=>function(A){P(this),this.message=A?`${A.length} errors occurred during unsubscription:\n${A.map((S,x)=>`${x+1}) ${S.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=A});var p=i(8737);class h{constructor(V){this.initialTeardown=V,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let V;if(!this.closed){this.closed=!0;const{_parentage:A}=this;if(A)if(this._parentage=null,Array.isArray(A))for(const E of A)E.remove(this);else A.remove(this);const{initialTeardown:S}=this;if((0,r.m)(S))try{S()}catch(E){V=E instanceof _?E.errors:[E]}const{_finalizers:x}=this;if(x){this._finalizers=null;for(const E of x)try{w(E)}catch(v){V=V??[],v instanceof _?V=[...V,...v.errors]:V.push(v)}}if(V)throw new _(V)}}add(V){var A;if(V&&V!==this)if(this.closed)w(V);else{if(V instanceof h){if(V.closed||V._hasParent(this))return;V._addParent(this)}(this._finalizers=null!==(A=this._finalizers)&&void 0!==A?A:[]).push(V)}}_hasParent(V){const{_parentage:A}=this;return A===V||Array.isArray(A)&&A.includes(V)}_addParent(V){const{_parentage:A}=this;this._parentage=Array.isArray(A)?(A.push(V),A):A?[A,V]:V}_removeParent(V){const{_parentage:A}=this;A===V?this._parentage=null:Array.isArray(A)&&(0,p.P)(A,V)}remove(V){const{_finalizers:A}=this;A&&(0,p.P)(A,V),V instanceof h&&V._removeParent(this)}}h.EMPTY=(()=>{const P=new h;return P.closed=!0,P})();const b=h.EMPTY;function C(P){return P instanceof h||P&&"closed"in P&&(0,r.m)(P.remove)&&(0,r.m)(P.add)&&(0,r.m)(P.unsubscribe)}function w(P){(0,r.m)(P)?P():P.unsubscribe()}},2416:(B,y,i)=>{i.d(y,{config:()=>r});const r={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},4128:(B,y,i)=>{i.d(y,{D:()=>w});var r=i(9751),d=i(4742),_=i(8421),p=i(7669),h=i(5403),b=i(3268),C=i(1810);function w(...P){const V=(0,p.jO)(P),{args:A,keys:S}=(0,d.D)(P),x=new r.y(E=>{const{length:v}=A;if(!v)return void E.complete();const L=new Array(v);let F=v,U=v;for(let z=0;z<v;z++){let q=!1;(0,_.Xf)(A[z]).subscribe((0,h.x)(E,D=>{q||(q=!0,U--),L[z]=D},()=>F--,void 0,()=>{(!F||!q)&&(U||E.next(S?(0,C.n)(S,L):L),E.complete())}))}});return V?x.pipe((0,b.Z)(V)):x}},2076:(B,y,i)=>{i.d(y,{D:()=>K});var r=i(8421),d=i(9672),_=i(4482),p=i(5403);function h(O,N=0){return(0,_.e)((G,k)=>{G.subscribe((0,p.x)(k,Y=>(0,d.f)(k,O,()=>k.next(Y),N),()=>(0,d.f)(k,O,()=>k.complete(),N),Y=>(0,d.f)(k,O,()=>k.error(Y),N)))})}function b(O,N=0){return(0,_.e)((G,k)=>{k.add(O.schedule(()=>G.subscribe(k),N))})}var P=i(9751),A=i(2202),S=i(576);function E(O,N){if(!O)throw new Error("Iterable cannot be null");return new P.y(G=>{(0,d.f)(G,N,()=>{const k=O[Symbol.asyncIterator]();(0,d.f)(G,N,()=>{k.next().then(Y=>{Y.done?G.complete():G.next(Y.value)})},0,!0)})})}var v=i(3670),L=i(8239),F=i(1144),U=i(6495),z=i(2206),q=i(4532),D=i(3260);function K(O,N){return N?function R(O,N){if(null!=O){if((0,v.c)(O))return function C(O,N){return(0,r.Xf)(O).pipe(b(N),h(N))}(O,N);if((0,F.z)(O))return function V(O,N){return new P.y(G=>{let k=0;return N.schedule(function(){k===O.length?G.complete():(G.next(O[k++]),G.closed||this.schedule())})})}(O,N);if((0,L.t)(O))return function w(O,N){return(0,r.Xf)(O).pipe(b(N),h(N))}(O,N);if((0,z.D)(O))return E(O,N);if((0,U.T)(O))return function x(O,N){return new P.y(G=>{let k;return(0,d.f)(G,N,()=>{k=O[A.h](),(0,d.f)(G,N,()=>{let Y,oe;try{({value:Y,done:oe}=k.next())}catch(ae){return void G.error(ae)}oe?G.complete():G.next(Y)},0,!0)}),()=>(0,S.m)(k?.return)&&k.return()})}(O,N);if((0,D.L)(O))return function g(O,N){return E((0,D.Q)(O),N)}(O,N)}throw(0,q.z)(O)}(O,N):(0,r.Xf)(O)}},8421:(B,y,i)=>{i.d(y,{Xf:()=>x});var r=i(1230),d=i(1144),_=i(8239),p=i(9751),h=i(3670),b=i(2206),C=i(4532),w=i(6495),P=i(3260),V=i(576),A=i(7849),S=i(8822);function x(D){if(D instanceof p.y)return D;if(null!=D){if((0,h.c)(D))return function E(D){return new p.y(g=>{const R=D[S.L]();if((0,V.m)(R.subscribe))return R.subscribe(g);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(D);if((0,d.z)(D))return function v(D){return new p.y(g=>{for(let R=0;R<D.length&&!g.closed;R++)g.next(D[R]);g.complete()})}(D);if((0,_.t)(D))return function L(D){return new p.y(g=>{D.then(R=>{g.closed||(g.next(R),g.complete())},R=>g.error(R)).then(null,A.h)})}(D);if((0,b.D)(D))return U(D);if((0,w.T)(D))return function F(D){return new p.y(g=>{for(const R of D)if(g.next(R),g.closed)return;g.complete()})}(D);if((0,P.L)(D))return function z(D){return U((0,P.Q)(D))}(D)}throw(0,C.z)(D)}function U(D){return new p.y(g=>{(function q(D,g){var R,K,O,N;return(0,r.mG)(this,void 0,void 0,function*(){try{for(R=(0,r.KL)(D);!(K=yield R.next()).done;)if(g.next(K.value),g.closed)return}catch(G){O={error:G}}finally{try{K&&!K.done&&(N=R.return)&&(yield N.call(R))}finally{if(O)throw O.error}}g.complete()})})(D,g).catch(R=>g.error(R))})}},5403:(B,y,i)=>{i.d(y,{x:()=>d});var r=i(930);function d(p,h,b,C,w){return new _(p,h,b,C,w)}class _ extends r.Lv{constructor(h,b,C,w,P,V){super(h),this.onFinalize=P,this.shouldUnsubscribe=V,this._next=b?function(A){try{b(A)}catch(S){h.error(S)}}:super._next,this._error=w?function(A){try{w(A)}catch(S){h.error(S)}finally{this.unsubscribe()}}:super._error,this._complete=C?function(){try{C()}catch(A){h.error(A)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var h;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:b}=this;super.unsubscribe(),!b&&(null===(h=this.onFinalize)||void 0===h||h.call(this))}}}},4004:(B,y,i)=>{i.d(y,{U:()=>_});var r=i(4482),d=i(5403);function _(p,h){return(0,r.e)((b,C)=>{let w=0;b.subscribe((0,d.x)(C,P=>{C.next(p.call(h,P,w++))}))})}},3410:(B,y,i)=>{i.d(y,{z:()=>r});const r={setTimeout(d,_,...p){const{delegate:h}=r;return h?.setTimeout?h.setTimeout(d,_,...p):setTimeout(d,_,...p)},clearTimeout(d){const{delegate:_}=r;return(_?.clearTimeout||clearTimeout)(d)},delegate:void 0}},2202:(B,y,i)=>{i.d(y,{h:()=>d});const d=function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(B,y,i)=>{i.d(y,{L:()=>r});const r="function"==typeof Symbol&&Symbol.observable||"@@observable"},7669:(B,y,i)=>{i.d(y,{_6:()=>b,jO:()=>p,yG:()=>h});var r=i(576);function _(C){return C[C.length-1]}function p(C){return(0,r.m)(_(C))?C.pop():void 0}function h(C){return function d(C){return C&&(0,r.m)(C.schedule)}(_(C))?C.pop():void 0}function b(C,w){return"number"==typeof _(C)?C.pop():w}},4742:(B,y,i)=>{i.d(y,{D:()=>h});const{isArray:r}=Array,{getPrototypeOf:d,prototype:_,keys:p}=Object;function h(C){if(1===C.length){const w=C[0];if(r(w))return{args:w,keys:null};if(function b(C){return C&&"object"==typeof C&&d(C)===_}(w)){const P=p(w);return{args:P.map(V=>w[V]),keys:P}}}return{args:C,keys:null}}},8737:(B,y,i)=>{function r(d,_){if(d){const p=d.indexOf(_);0<=p&&d.splice(p,1)}}i.d(y,{P:()=>r})},3888:(B,y,i)=>{function r(d){const p=d(h=>{Error.call(h),h.stack=(new Error).stack});return p.prototype=Object.create(Error.prototype),p.prototype.constructor=p,p}i.d(y,{d:()=>r})},1810:(B,y,i)=>{function r(d,_){return d.reduce((p,h,b)=>(p[h]=_[b],p),{})}i.d(y,{n:()=>r})},2806:(B,y,i)=>{i.d(y,{O:()=>p,x:()=>_});var r=i(2416);let d=null;function _(h){if(r.config.useDeprecatedSynchronousErrorHandling){const b=!d;if(b&&(d={errorThrown:!1,error:null}),h(),b){const{errorThrown:C,error:w}=d;if(d=null,C)throw w}}else h()}function p(h){r.config.useDeprecatedSynchronousErrorHandling&&d&&(d.errorThrown=!0,d.error=h)}},9672:(B,y,i)=>{function r(d,_,p,h=0,b=!1){const C=_.schedule(function(){p(),b?d.add(this.schedule(null,h)):this.unsubscribe()},h);if(d.add(C),!b)return C}i.d(y,{f:()=>r})},4671:(B,y,i)=>{function r(d){return d}i.d(y,{y:()=>r})},1144:(B,y,i)=>{i.d(y,{z:()=>r});const r=d=>d&&"number"==typeof d.length&&"function"!=typeof d},2206:(B,y,i)=>{i.d(y,{D:()=>d});var r=i(576);function d(_){return Symbol.asyncIterator&&(0,r.m)(_?.[Symbol.asyncIterator])}},576:(B,y,i)=>{function r(d){return"function"==typeof d}i.d(y,{m:()=>r})},3670:(B,y,i)=>{i.d(y,{c:()=>_});var r=i(8822),d=i(576);function _(p){return(0,d.m)(p[r.L])}},6495:(B,y,i)=>{i.d(y,{T:()=>_});var r=i(2202),d=i(576);function _(p){return(0,d.m)(p?.[r.h])}},8239:(B,y,i)=>{i.d(y,{t:()=>d});var r=i(576);function d(_){return(0,r.m)(_?.then)}},3260:(B,y,i)=>{i.d(y,{L:()=>p,Q:()=>_});var r=i(1230),d=i(576);function _(h){return(0,r.FC)(this,arguments,function*(){const C=h.getReader();try{for(;;){const{value:w,done:P}=yield(0,r.qq)(C.read());if(P)return yield(0,r.qq)(void 0);yield yield(0,r.qq)(w)}}finally{C.releaseLock()}})}function p(h){return(0,d.m)(h?.getReader)}},4482:(B,y,i)=>{i.d(y,{A:()=>d,e:()=>_});var r=i(576);function d(p){return(0,r.m)(p?.lift)}function _(p){return h=>{if(d(h))return h.lift(function(b){try{return p(b,this)}catch(C){this.error(C)}});throw new TypeError("Unable to lift unknown Observable type")}}},3268:(B,y,i)=>{i.d(y,{Z:()=>p});var r=i(4004);const{isArray:d}=Array;function p(h){return(0,r.U)(b=>function _(h,b){return d(b)?h(...b):h(b)}(h,b))}},5032:(B,y,i)=>{function r(){}i.d(y,{Z:()=>r})},9635:(B,y,i)=>{i.d(y,{U:()=>_,z:()=>d});var r=i(4671);function d(...p){return _(p)}function _(p){return 0===p.length?r.y:1===p.length?p[0]:function(b){return p.reduce((C,w)=>w(C),b)}}},7849:(B,y,i)=>{i.d(y,{h:()=>_});var r=i(2416),d=i(3410);function _(p){d.z.setTimeout(()=>{const{onUnhandledError:h}=r.config;if(!h)throw p;h(p)})}},4532:(B,y,i)=>{function r(d){return new TypeError(`You provided ${null!==d&&"object"==typeof d?"an invalid object":`'${d}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}i.d(y,{z:()=>r})},1230:(B,y,i)=>{function S(a,l,u,c){return new(u||(u=Promise))(function(f,I){function j(W){try{T(c.next(W))}catch(X){I(X)}}function Q(W){try{T(c.throw(W))}catch(X){I(X)}}function T(W){W.done?f(W.value):function m(f){return f instanceof u?f:new u(function(I){I(f)})}(W.value).then(j,Q)}T((c=c.apply(a,l||[])).next())})}function D(a){return this instanceof D?(this.v=a,this):new D(a)}function g(a,l,u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var m,c=u.apply(a,l||[]),f=[];return m={},I("next"),I("throw"),I("return"),m[Symbol.asyncIterator]=function(){return this},m;function I($){c[$]&&(m[$]=function(ee){return new Promise(function(te,H){f.push([$,ee,te,H])>1||j($,ee)})})}function j($,ee){try{!function Q($){$.value instanceof D?Promise.resolve($.value.v).then(T,W):X(f[0][2],$)}(c[$](ee))}catch(te){X(f[0][3],te)}}function T($){j("next",$)}function W($){j("throw",$)}function X($,ee){$(ee),f.shift(),f.length&&j(f[0][0],f[0][1])}}function K(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u,l=a[Symbol.asyncIterator];return l?l.call(a):(a=function L(a){var l="function"==typeof Symbol&&Symbol.iterator,u=l&&a[l],c=0;if(u)return u.call(a);if(a&&"number"==typeof a.length)return{next:function(){return a&&c>=a.length&&(a=void 0),{value:a&&a[c++],done:!a}}};throw new TypeError(l?"Object is not iterable.":"Symbol.iterator is not defined.")}(a),u={},c("next"),c("throw"),c("return"),u[Symbol.asyncIterator]=function(){return this},u);function c(f){u[f]=a[f]&&function(I){return new Promise(function(j,Q){!function m(f,I,j,Q){Promise.resolve(Q).then(function(T){f({value:T,done:j})},I)}(j,Q,(I=a[f](I)).done,I.value)})}}}i.d(y,{FC:()=>g,KL:()=>K,mG:()=>S,qq:()=>D})},9401:(B,y,i)=>{i.d(y,{Fj:()=>E,JJ:()=>ke,JU:()=>w,On:()=>Re,UX:()=>hn,u5:()=>fn});var r=i(1060),d=i(655),_=i(2076),p=i(4128),h=i(4004);let b=(()=>{class n{constructor(e,o){this._renderer=e,this._elementRef=o,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(r.Renderer2),r.\u0275\u0275directiveInject(r.ElementRef))},n.\u0275dir=r.\u0275\u0275defineDirective({type:n}),n})(),C=(()=>{class n extends b{}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.\u0275\u0275getInheritedFactory(n)))(o||n)}}(),n.\u0275dir=r.\u0275\u0275defineDirective({type:n,features:[r.\u0275\u0275InheritDefinitionFeature]}),n})();const w=new r.InjectionToken("NgValueAccessor"),A={provide:w,useExisting:(0,r.forwardRef)(()=>E),multi:!0},x=new r.InjectionToken("CompositionEventMode");let E=(()=>{class n extends b{constructor(e,o,s){super(e,o),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function S(){const n=(0,d.\u0275getDOM)()?(0,d.\u0275getDOM)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(r.Renderer2),r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(x,8))},n.\u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){1&e&&r.\u0275\u0275listener("input",function(M){return o._handleInput(M.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(M){return o._compositionEnd(M.target.value)})},features:[r.\u0275\u0275ProvidersFeature([A]),r.\u0275\u0275InheritDefinitionFeature]}),n})();const F=new r.InjectionToken("NgValidators"),U=new r.InjectionToken("NgAsyncValidators");function oe(n){return null!=n}function ae(n){return(0,r.\u0275isPromise)(n)?(0,_.D)(n):n}function Ee(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function a(n,t){return t.map(e=>e(n))}function u(n){return n.map(t=>function l(n){return!n.validate}(t)?t:e=>t.validate(e))}function m(n){return null!=n?function c(n){if(!n)return null;const t=n.filter(oe);return 0==t.length?null:function(e){return Ee(a(e,t))}}(u(n)):null}function I(n){return null!=n?function f(n){if(!n)return null;const t=n.filter(oe);return 0==t.length?null:function(e){const o=a(e,t).map(ae);return(0,p.D)(o).pipe((0,h.U)(Ee))}}(u(n)):null}function j(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function W(n){return n?Array.isArray(n)?n:[n]:[]}function X(n,t){return Array.isArray(n)?n.includes(t):n===t}function $(n,t){const e=W(t);return W(n).forEach(s=>{X(e,s)||e.push(s)}),e}function ee(n,t){return W(t).filter(e=>!X(n,e))}class te{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=m(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=I(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class H extends te{get formDirective(){return null}get path(){return null}}class J extends te{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class re{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let ke=(()=>{class n extends re{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(J,2))},n.\u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){2&e&&r.\u0275\u0275classProp("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.\u0275\u0275InheritDefinitionFeature]}),n})();const ue="VALID",me="INVALID",le="PENDING",ce="DISABLED";function ge(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class $e{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===ue}get invalid(){return this.status===me}get pending(){return this.status==le}get disabled(){return this.status===ce}get enabled(){return this.status!==ce}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators($(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators($(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ee(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ee(t,this._rawAsyncValidators))}hasValidator(t){return X(this._rawValidators,t)}hasAsyncValidator(t){return X(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=le,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=ce,this.errors=null,this._forEachChild(o=>{o.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=ue,this._forEachChild(o=>{o.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ue||this.status===le)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ce:ue}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=le,this._hasOwnPendingAsyncValidator=!0;const e=ae(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((o,s)=>o&&o._find(s),this)}getError(t,e){const o=e?this.get(e):this;return o&&o.errors?o.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.EventEmitter,this.statusChanges=new r.EventEmitter}_calculateStatus(){return this._allControlsDisabled()?ce:this.errors?me:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(le)?le:this._anyControlsHaveStatus(me)?me:ue}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ge(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Mt(n){return Array.isArray(n)?m(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function At(n){return Array.isArray(n)?I(n):n||null}(this._rawAsyncValidators)}}const ie=new r.InjectionToken("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function fe(n,t,e=de){(function Fe(n,t){const e=function Q(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(j(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const o=function T(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(j(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const s=()=>n.updateValueAndValidity();ve(t._rawValidators,s),ve(t._rawAsyncValidators,s)})(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function wt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&ze(n,t)})}(n,t),function Pt(n,t){const e=(o,s)=>{t.valueAccessor.writeValue(o),s&&t.viewToModelUpdate(o)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function It(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&ze(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Ft(n,t){if(t.valueAccessor.setDisabledState){const e=o=>{t.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function ve(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ze(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ye(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Je(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const Qe=class extends $e{constructor(t=null,e,o){super(function Me(n){return(ge(n)?n.validators:n)||null}(e),function Ae(n,t){return(ge(t)?t.asyncValidators:n)||null}(o,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ge(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Je(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ye(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ye(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Je(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},jt={provide:J,useExisting:(0,r.forwardRef)(()=>Re)},tt=(()=>Promise.resolve())();let Re=(()=>{class n extends J{constructor(e,o,s,M,Z,ne){super(),this._changeDetectorRef=Z,this.callSetDisabledState=ne,this.control=new Qe,this._registered=!1,this.name="",this.update=new r.EventEmitter,this._parent=e,this._setValidators(o),this._setAsyncValidators(s),this.valueAccessor=function Pe(n,t){if(!t)return null;let e,o,s;return Array.isArray(t),t.forEach(M=>{M.constructor===E?e=M:function Nt(n){return Object.getPrototypeOf(n.constructor)===C}(M)?o=M:s=M}),s||o||e||null}(0,M)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const o=e.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Ie(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){fe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){tt.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const o=e.isDisabled.currentValue,s=0!==o&&(0,r.\u0275coerceToBoolean)(o);tt.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function _e(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(H,9),r.\u0275\u0275directiveInject(F,10),r.\u0275\u0275directiveInject(U,10),r.\u0275\u0275directiveInject(w,10),r.\u0275\u0275directiveInject(r.ChangeDetectorRef,8),r.\u0275\u0275directiveInject(ie,8))},n.\u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r.\u0275\u0275ProvidersFeature([jt]),r.\u0275\u0275InheritDefinitionFeature,r.\u0275\u0275NgOnChangesFeature]}),n})(),rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({}),n})();const Ne=new r.InjectionToken("NgModelWithFormControlWarning");let Ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({imports:[rt]}),n})(),fn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ie,useValue:e.callSetDisabledState??de}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({imports:[Ct]}),n})(),hn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ne,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:ie,useValue:e.callSetDisabledState??de}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=r.\u0275\u0275defineInjector({imports:[Ct]}),n})()}}]);