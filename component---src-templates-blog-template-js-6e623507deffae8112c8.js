(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(u,D,t){var e=t("X8hv");u.exports={MDXRenderer:e}},Bl7J:function(u,D,t){"use strict";var e=t("2A+t"),n=t("q1tI"),r=t("zLVn"),c=t("izhR"),o=t("9Koi"),i=t("10BB"),F=t("Frpm"),a=t("6Gk8"),l=function(u){var D=Object.assign({},u);return Object(e.c)(F.a,Object.assign({sx:{variant:"navlink"}},D))},s=function(u){u.children;var D=u.handleClose,t=void 0===D?null:D,n=Object(r.a)(u,["children","handleClose"]),c=Object(o.a)("navigation").t;return Object(e.c)("div",Object.assign({sx:{width:["15em","18em"],height:"100vh"}},n),Object(e.c)(a.a,{sx:{alignItems:"flex-start"}}),Object(e.c)("nav",{sx:{p:3,display:"grid",alignItems:"flex-start",fontSize:"1.2rem"}},Object(e.c)(l,{onClick:t,to:"/"},c(["navigation:home","Home"])),Object(e.c)(l,{onClick:t,to:"/blog/"},c(["navigation:blog","Blog"])),Object(e.c)(l,{onClick:t,to:"/about/"},c(["navigation:about","About"]))))},E=function(u){u.children;var D=Object(r.a)(u,["children"]),t=Object(o.a)("buttons").t,F=Object(n.useState)(!1),a=F[0],l=F[1];return Object(e.c)("div",Object.assign({sx:{display:["block","none"]}},D),Object(e.c)(c.b,{sx:{outlineStyle:"none",cursor:"pointer"},"aria-label":t(["buttons:nav.open","Open navigation"]),onClick:function(){return l(!0)}},Object(e.c)(i.d,{sx:{fill:"text"}})),Object(e.c)("div",{sx:{display:a?"flex":"none",alignItems:"flex-start",height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,backgroundColor:"rgba(0, 0, 0, 0.7)"}},Object(e.c)("div",{sx:{display:"flex",height:"inherit",animation:"drawer 0.2s ease-out 0s"}},Object(e.c)(s,{sx:{backgroundColor:"background"},handleClose:function(){return l(!1)}}),Object(e.c)("div",{sx:{height:"3.5em",display:"flex",alignItems:"center",pl:1}},Object(e.c)(c.b,{"aria-label":t(["buttons:nav.close","Close navigation"]),onClick:function(){return l(!1)},sx:{color:"hsl(210, 50%, 96%)",outlineStyle:"none",cursor:"pointer"}},Object(e.c)(i.a,{sx:{fill:"currentColor"}})))),Object(e.c)("div",{"aria-label":t(["buttons:nav.close","Close navigation"]),sx:{height:"inherit",flexGrow:"1"},onClick:function(){return l(!1)}})))},b=function(){return Object(e.c)(s,{sx:{display:["none","block"],position:"fixed",top:0,left:0,backgroundColor:"muted"}})},C=t("jDMg"),f=t("u9tI");D.a=function(u){var D=u.children,t=u.path;return Object(e.c)(n.Fragment,null,Object(e.c)(b,null),Object(e.c)("div",{sx:{marginLeft:[0,"18em"]}},Object(e.c)("header",{sx:{display:"flex",alignItems:"center",height:"3.5rem",position:"fixed",width:["100%","calc(100% - 18em)"],top:0,px:3,backgroundColor:"background",borderBottom:"1px solid",borderColor:"muted",zIndex:1}},Object(e.c)(E,null),Object(e.c)("div",{sx:{mx:"auto"}}),Object(e.c)(f.a,{path:t}),Object(e.c)(C.a,null)),Object(e.c)("div",{sx:{py:"3.5rem",px:3}},D)))}},Bnag:function(u,D){u.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(u,D){u.exports=function(u){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(u))return Array.from(u)}},Ijbi:function(u,D,t){var e=t("WkPL");u.exports=function(u){if(Array.isArray(u))return e(u)}},RIqP:function(u,D,t){var e=t("Ijbi"),n=t("EbDI"),r=t("ZhPi"),c=t("Bnag");u.exports=function(u){return e(u)||n(u)||r(u)||c()}},Roim:function(u,D){u.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},SksO:function(u,D){function t(D,e){return u.exports=t=Object.setPrototypeOf||function(u,D){return u.__proto__=D,u},t(D,e)}u.exports=t},X8hv:function(u,D,t){var e=t("sXyB"),n=t("RIqP"),r=t("lSNA"),c=t("8OQS");function o(u,D){var t=Object.keys(u);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(u);D&&(e=e.filter((function(D){return Object.getOwnPropertyDescriptor(u,D).enumerable}))),t.push.apply(t,e)}return t}function i(u){for(var D=1;D<arguments.length;D++){var t=null!=arguments[D]?arguments[D]:{};D%2?o(Object(t),!0).forEach((function(D){r(u,D,t[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(D){Object.defineProperty(u,D,Object.getOwnPropertyDescriptor(t,D))}))}return u}var F=t("q1tI"),a=t("7ljp").mdx,l=t("BfwJ").useMDXScope;u.exports=function(u){var D=u.scope,t=u.children,r=c(u,["scope","children"]),o=l(D),s=F.useMemo((function(){if(!t)return null;var u=i({React:F,mdx:a},o),D=Object.keys(u),r=D.map((function(D){return u[D]}));return e(Function,["_fn"].concat(n(D),[""+t])).apply(void 0,[{}].concat(n(r)))}),[t,D]);return F.createElement(s,i({},r))}},ZVJz:function(u,D,t){var e=t("Roim");u.exports=o;var n=Object.hasOwnProperty,r=/\s/g,c=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;function o(){if(!(this instanceof o))return new o;this.reset()}function i(u,D){return"string"!=typeof u?"":(D||(u=u.toLowerCase()),u.trim().replace(c,"").replace(e(),"").replace(r,"-"))}o.prototype.slug=function(u,D){for(var t=i(u,!0===D),e=t;n.call(this.occurrences,t);)this.occurrences[e]++,t=e+"-"+this.occurrences[e];return this.occurrences[t]=0,t},o.prototype.reset=function(){this.occurrences=Object.create(null)},o.slug=i},b48C:function(u,D){u.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(u){return!1}}},sXyB:function(u,D,t){var e=t("SksO"),n=t("b48C");function r(D,t,c){return n()?u.exports=r=Reflect.construct:u.exports=r=function(u,D,t){var n=[null];n.push.apply(n,D);var r=new(Function.bind.apply(u,n));return t&&e(r,t.prototype),r},r.apply(null,arguments)}u.exports=r},xCRD:function(u,D,t){"use strict";t.r(D),t.d(D,"query",(function(){return l}));var e=t("2A+t"),n=t("MXbp"),r=t("q1tI"),c=t("ZVJz"),o=t("A2+M"),i=t("9Koi"),F=t("Bl7J"),a=t("vrFN");D.default=function(u){var D=u.data.mdx,t=Object(i.a)("blog").t;return Object(e.c)(r.Fragment,null,Object(e.c)(a.a,{title:D.frontmatter.title,description:D.frontmatter.description}),Object(e.c)(F.a,{path:D.frontmatter.slug},Object(e.c)("div",{sx:{maxWidth:768}},Object(e.c)(n.b.h1,null,D.frontmatter.title),"📅 ",Object(e.c)("b",null,D.frontmatter.date),Object(e.c)("br",null),"⌚ ",Object(e.c)("i",null,D.timeToRead+" "+t(["blog:m","min read"])),Object(e.c)(n.b.p,null,D.frontmatter.foreword),Object(e.c)("div",{sx:{variant:"paper"}},Object(e.c)("b",null,t(["blog:content","Content"])),Object(e.c)(n.b.ul,null,D.headings.filter((function(u){return 2===u.depth})).map((function(u,D){return Object(e.c)("li",{key:D},Object(e.c)(n.b.a,{href:"#"+Object(c.slug)(u.value)},u.value))})))),Object(e.c)("div",null,Object(e.c)(o.MDXRenderer,null,D.body)))))};var l="929670892"}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-6e623507deffae8112c8.js.map