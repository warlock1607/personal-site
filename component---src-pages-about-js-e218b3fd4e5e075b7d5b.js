(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3XHS":function(e,t,a){"use strict";a.r(t);var r=a("JM8f"),i=a("txSG"),s=a("q1tI"),n=a.n(s),d=a("9eSz"),o=a.n(d),l=a("vrFN"),A=a("L+ta"),c=function(){var e=r.data;return Object(i.d)(o.a,{sx:{zIndex:-1},fluid:e.placeholderImage.childImageSharp.fluid,alt:"my foto"})};t.default=function(){var e=Object(A.a)().about;return Object(i.d)(n.a.Fragment,null,Object(i.d)(l.a,{title:e.title,description:e.description}),Object(i.d)(i.b.h1,null,e.title),Object(i.d)("div",{sx:{maxWidth:640}},Object(i.d)(c,null)),Object(i.d)("div",{sx:{maxWidth:"container"}},Object(i.d)("p",null,e.content)))}},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),A=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=c(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),l.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",A=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?v(e,!0):"")+v(e)})).join("")+"<img "+l+n+d+a+r+t+s+i+o+A+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=l.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?l.default.createElement("picture",null,r(a),s):s},O=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,A=e.onError,c=e.loading,u=e.draggable,f=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},f,{onLoad:n,onError:A,ref:t,loading:c,draggable:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));O.propTypes={style:A.default.object,onError:A.default.func,onLoad:A.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&m&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,d=void 0===n?{}:n,A=e.placeholderStyle,u=void 0===A?{}:A,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,E=e.itemProp,v=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,B=(0,o.default)({opacity:x?1:0,transition:R?"opacity "+m+"ms":"none"},d),z="boolean"==typeof h?"lightgray":h,N={transitionDelay:m+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&N,{},d,{},u),Q={title:t,alt:this.state.isVisible?"":a,style:C,className:f,itemProp:E};if(g){var V=g,P=V[0];return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),z&&l.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&N)}),P.base64&&l.default.createElement(L,{src:P.base64,spreadProps:Q,imageVariants:V,generateSources:w}),P.tracedSVG&&l.default.createElement(L,{src:P.tracedSVG,spreadProps:Q,imageVariants:V,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,S(V),l.default.createElement(O,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:v},P,{imageVariants:V}))}}))}if(p){var Y=p,T=Y[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},s);return"inherit"===s.display&&delete G.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},z&&l.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:z,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},R&&N)}),T.base64&&l.default.createElement(L,{src:T.base64,spreadProps:Q,imageVariants:Y,generateSources:w}),T.tracedSVG&&l.default.createElement(L,{src:T.tracedSVG,spreadProps:Q,imageVariants:Y,generateSources:y}),this.state.isVisible&&l.default.createElement("picture",null,S(Y),l.default.createElement(O,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:B,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:v,draggable:j})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:v},T,{imageVariants:Y}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=A.default.shape({width:A.default.number.isRequired,height:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string,media:A.default.string}),B=A.default.shape({aspectRatio:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,sizes:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string,media:A.default.string});x.propTypes={resolutions:R,sizes:B,fixed:A.default.oneOfType([R,A.default.arrayOf(R)]),fluid:A.default.oneOfType([B,A.default.arrayOf(B)]),fadeIn:A.default.bool,durationFadeIn:A.default.number,title:A.default.string,alt:A.default.string,className:A.default.oneOfType([A.default.string,A.default.object]),critical:A.default.bool,crossOrigin:A.default.oneOfType([A.default.string,A.default.bool]),style:A.default.object,imgStyle:A.default.object,placeholderStyle:A.default.object,placeholderClassName:A.default.string,backgroundColor:A.default.oneOfType([A.default.string,A.default.bool]),onLoad:A.default.func,onError:A.default.func,onStartLoad:A.default.func,Tag:A.default.string,itemProp:A.default.string,loading:A.default.oneOf(["auto","lazy","eager"]),draggable:A.default.bool};var z=x;t.default=z},JM8f:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGlM9Zm8zw//8QAGxAAAQQDAAAAAAAAAAAAAAAAAAECBBEQEyH/2gAIAQEAAQUCSQo6R3eXiz//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERL/2gAIAQMBAT8Byj//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEhP/2gAIAQIBAT8B0W//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAbEAEBAQACAwAAAAAAAAAAAAABEQAQIUFRYf/aAAgBAQABPyH4plYDxdfrje6KOZd//9oADAMBAAIAAwAAABDk3//EABYRAAMAAAAAAAAAAAAAAAAAAAARUf/aAAgBAwEBPxBKLT//xAAXEQEAAwAAAAAAAAAAAAAAAAAAEVFx/9oACAECAQE/EMJ0/8QAGxAAAwEAAwEAAAAAAAAAAAAAAAERITFBUZH/2gAIAQEAAT8QS5beIKu56QbXWjfsFjPpN9mRxC4U/9k=","aspectRatio":1.3333333333333333,"src":"/static/43d48520268c2383247998729d8783f2/4dbff/me.jpg","srcSet":"/static/43d48520268c2383247998729d8783f2/0ea08/me.jpg 160w,\\n/static/43d48520268c2383247998729d8783f2/b754d/me.jpg 320w,\\n/static/43d48520268c2383247998729d8783f2/4dbff/me.jpg 640w,\\n/static/43d48520268c2383247998729d8783f2/76319/me.jpg 960w,\\n/static/43d48520268c2383247998729d8783f2/e3107/me.jpg 1280w,\\n/static/43d48520268c2383247998729d8783f2/9782f/me.jpg 2560w","sizes":"(max-width: 640px) 100vw, 640px"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),s=a("ap2Z"),n=/"/g,d=function(e,t,a,r){var i=String(s(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(n,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-about-js-e218b3fd4e5e075b7d5b.js.map