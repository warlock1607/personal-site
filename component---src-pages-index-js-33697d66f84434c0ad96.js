/*! For license information please see component---src-pages-index-js-33697d66f84434c0ad96.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return n.isMemo(e)?c:i[e.$$typeof]||o}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=c;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var i=s(t),h=s(r),m=0;m<c.length;++m){var b=c[m];if(!(a[b]||n&&n[b]||h&&h[b]||i&&i[b])){var v=p(r,b);try{u(t,b,v)}catch(g){}}}}return t}},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("2A+t"),o=r("izhR"),a=r("q1tI"),c=r.n(a),i=r("Frpm"),s=r("zLVn");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=r("JX7q"),f=r("dI71"),p=r("TOwV"),d=r("2mql"),y=r.n(d);function h(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var m=c.a.createContext();var b={initialChunks:{}};var v=function(e){return e};function g(e){var t=e.defaultResolveComponent,r=void 0===t?v:t,n=e.render,o=e.onLoad;function a(e,t){void 0===t&&(t={});var a=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),i={};function d(e){return t.cacheKey?t.cacheKey(e):a.resolve?a.resolve(e):"static"}function v(e,n,o){var a=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!Object(p.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return y()(o,a,{preload:!0}),a}var g,S=function(e){function r(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:d(r)},h(!r.__chunkExtractor||a.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?(!1===t.ssr||(a.requireAsync(r).catch((function(){return null})),n.loadSync(),r.__chunkExtractor.addChunk(a.chunkName(r))),Object(l.a)(n)):(!1!==t.ssr&&(a.isReady&&a.isReady(r)||a.chunkName&&b.initialChunks[a.chunkName(r)])&&n.loadSync(),n)}Object(f.a)(r,e),r.getDerivedStateFromProps=function(e,t){var r=d(e);return u({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var c=r.prototype;return c.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},c.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},c.componentWillUnmount=function(){this.mounted=!1},c.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},c.getCacheKey=function(){return d(this.props)},c.getCache=function(){return i[this.getCacheKey()]},c.setCache=function(e){void 0===e&&(e=void 0),i[this.getCacheKey()]=e},c.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},c.loadSync=function(){if(this.state.loading)try{var e=v(a.requireSync(this.props),this.props,O);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:a.resolve(this.props),chunkName:a.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},c.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var r=v(t,e.props,{Loadable:O});e.safeSetState({result:r,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},c.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,Object(s.a)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=a.requireAsync(r)).status="PENDING",this.setCache(n),n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:a.resolve(e.props),chunkName:a.chunkName(e.props),error:t?t.message:t}),n.status="REJECTED"}))),n},c.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,a=(e.__chunkExtractor,Object(s.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,i=c.error,l=c.loading,f=c.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(i)throw i;var p=o||t.fallback||null;return l?p:n({fallback:p,result:f,options:t,props:u({},a,{ref:r})})},r}(c.a.Component),w=(g=S,function(e){return c.a.createElement(m.Consumer,null,(function(t){return c.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),O=c.a.forwardRef((function(e,t){return c.a.createElement(w,Object.assign({forwardedRef:t},e))}));return O.preload=function(e){a.requireAsync(e)},O.load=function(e){return a.requireAsync(e)},O}return{loadable:a,lazy:function(e,t){return a(e,u({},t,{suspense:!0}))}}}var S=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return c.a.createElement(t,r)}}),w=S.loadable,O=S.lazy,C=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),x=C.loadable,j=C.lazy;var $=w;$.lib=x,O.lib=j;var E=$,k=r("9Koi"),R=r("vrFN"),_=r("6Gk8"),P=r("jDMg"),N=r("u9tI"),T=E((function(){return Promise.all([r.e(2),r.e(13)]).then(r.bind(null,"OWyv"))}));t.default=function(){var e=Object(k.a)(["index","navigation"]).t;return Object(n.c)(a.Fragment,null,Object(n.c)(R.a,{title:e(["index:title","Vladimir Zhelvis"]),description:e(["index:description","My personal website"])}),Object(n.c)(T,null),Object(n.c)("div",{sx:{width:"100vw",height:"100vh"}},Object(n.c)("header",{sx:{px:3,height:"3.5rem",display:"flex",alignItems:"center",flexDirection:"row-reverse"}},Object(n.c)(P.a,null),Object(n.c)(N.a,{path:"/"})),Object(n.c)("main",{sx:{mt:[3,4],display:"flex",flexDirection:"column",alignItems:"center"}},Object(n.c)(_.a,null),Object(n.c)("div",{sx:{mt:3,display:"grid",gap:[3,2],gridTemplateColumns:["1fr","1fr 1fr"]}},Object(n.c)(o.a,{variant:"primary",as:i.a,to:"/blog/"},e(["navigation:blog","Blog"])),Object(n.c)(o.a,{variant:"primary",as:i.a,to:"/about/"},e(["navigation:about","About"]))))))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,S=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case s:case i:case y:return e;default:switch(e=e&&e.$$typeof){case l:case d:case b:case m:case u:return e;default:return t}}case a:return t}}}function C(e){return O(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=b,t.Memo=m,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=y,t.isAsyncMode=function(e){return C(e)||O(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===d},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===m},t.isPortal=function(e){return O(e)===a},t.isProfiler=function(e){return O(e)===s},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===s||e===i||e===y||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d||e.$$typeof===g||e.$$typeof===S||e.$$typeof===w||e.$$typeof===v)},t.typeOf=O}}]);
//# sourceMappingURL=component---src-pages-index-js-33697d66f84434c0ad96.js.map