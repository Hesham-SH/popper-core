(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7oih":function(e,t,n){"use strict";n("zTTH"),n("sC2a");var a=n("wTIg"),o=n("q1tI"),r=n.n(o),s=n("Wbzz"),c=n("7ljp"),i=n("qKvR"),l=n("eVhr"),p=n("4FWg"),d=n("9Yco"),b=function(e){var t=e.children;return Object(i.d)(s.StaticQuery,{query:"3609520525",render:function(e){var n=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(n)},data:d})};n("HQhv");function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(0===e.slug.indexOf(a.slug+"/"))return void u(e,a.children)}t.push({title:e.title,slug:e.slug,children:[]})}n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("gu/5"),n("eoYm"),n("zGcK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=new Set(["/404/"]),g=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],O=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function j(e){var t=e.filter((function(e){return!f.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return O.indexOf(e.title)-O.indexOf(t.title)}));return[].concat(m(t.filter((function(e){return!g.some((function(t){return e.slug.includes(t)}))}))),m(g.reduce((function(e,n){return[].concat(m(e),m(t.filter((function(e){return e.slug.includes(n)}))))}),[])))}var h=n("vUvN"),N=n.n(h),y=(n("Ggvi"),n("sc67"),n("E5k/"),n("17x9")),k=n.n(y);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.color,n=e.size,a=x(e,["color","size"]);return r.a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};w.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},w.defaultProps={color:"currentColor",size:"24"};var z=w,S={name:"80dmy3",styles:"display:block;transform:translateX(0);"},P=Object(a.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&S})," ",p.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),T={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},C=Object(a.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&T})),L=Object(a.a)(s.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),E=Object(a.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",p.d.lg,"{display:none;}"),I={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},H=Object(a.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",p.d.md,"{display:block;}",(function(e){return e.scrolled&&I})),q=function(e){var t=e.mobile;return Object(i.d)("img",{src:N.a,draggable:"false",alt:"Popper Logo",css:Object(i.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},A=Object(a.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),B=Object(a.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:25px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",p.d.lg,"{display:none;}"),F=Object(a.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",p.d.lg,"{margin-top:15px;}"),G=function e(t){var n=t.route;return Object(i.d)(r.a.Fragment,null,Object(i.d)(C,{root:!0},Object(i.d)("li",null,Object(i.d)(L,{to:n.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},n.title)),Object(i.d)(C,{root:1===n.slug.split("/").length},n.children.map((function(t,n){return Object(i.d)(e,{key:n,route:t})})))))},M=0;function D(e){e.description,e.lang,e.meta,e.title;var t=Object(o.useState)(!1),n=t[0],a=t[1],s=Object(o.useState)(!1),c=s[0],l=s[1],p=Object(o.useRef)();function d(){a(!0)}function m(){a(!1)}function f(){var e=p.current.scrollTop;M=e,l(e>10)}return Object(o.useLayoutEffect)((function(){var e=p.current;e.scrollTop=M;var t=e.querySelector('[aria-current="page"]');if(t){var n=t.getBoundingClientRect();(n.bottom>window.innerHeight||n.top<0)&&t.scrollIntoView()}}),[]),Object(i.d)(b,null,(function(e){return Object(i.d)(r.a.Fragment,null,Object(i.d)(E,null,Object(i.d)(A,{onClick:d,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(i.d)(z,{size:30})),Object(i.d)(q,{mobile:!0})),Object(i.d)(P,{open:n,ref:p,onScroll:f},Object(i.d)(H,{scrolled:c},Object(i.d)(q,null)),Object(i.d)(B,{onClick:m},"Close Menu"),Object(i.d)(F,null,function(e){for(var t=[],n=0;n<e.length;n++){u(e[n],t)}return t}(j(e)).map((function(e,t){return Object(i.d)(G,{route:e,key:t})})))))}))}var V=n("9CUm");n("8ypT"),n("cu9l");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var X=function(e){var t=e.color,n=e.size,a=U(e,["color","size"]);return r.a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};X.propTypes={color:k.a.string,size:k.a.oneOfType([k.a.string,k.a.number])},X.defaultProps={color:"currentColor",size:"24"};var K=X,W=n("EAKA"),Y=Object(a.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",p.d.lg,"{padding-top:0;margin-left:",260,"px;}"),J=Object(a.a)(p.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",p.d.lg,"{margin-left:",260,"px;}"),Q=Object(a.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),Z=Object(a.a)(p.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",p.d.md,"{padding:0 40px;}"),$=Object(a.a)("div",{target:"e1fogcta4"})({name:"dltnlo",styles:"padding:50px 25px;border:none;min-width:50%;"}),_=Object(a.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",p.d.md,"{display:block;}"),ee=Object(a.a)(s.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;border-bottom:2px solid transparent;flex-grow:1;word-break:break-word;",p.d.md,"{font-size:22px;width:100%;}",p.d.lg,"{font-size:24px;}&:first-of-type{&:not(:last-of-type){padding-right:15px;}}&:last-of-type{border-bottom-color:transparent;text-align:right;&:not(:first-of-type){padding-left:15px;}}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),te=Object(i.c)("vertical-align:3px;",p.d.md,"{vertical-align:0;}"),ne=Object(a.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",p.d.md,"{top:54px;}",p.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ae={"x-ad":l.a};t.a=function(e){var t=e.children,n=e.path,a=e.pageResources;return Object(o.useLayoutEffect)((function(){try{document.querySelector(window.location.hash).scrollIntoView()}catch(e){}}),[]),Object(i.d)(c.a,{components:ae},Object(i.d)(i.a,{styles:Object(i.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",p.d.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",p.d.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(i.d)("div",null,a&&Object(i.d)(V.a,{title:a.json.pageContext.frontmatter.title}),Object(i.d)(D,{root:"/",target:"location"}),Object(i.d)(Y,null,Object(i.d)(p.a,null,t),Object(i.d)(b,null,(function(e){var t=function(e){var t=j(e),a=n.replace(/\/$/,""),o=t.findIndex((function(e){return e.slug===a}));return{prev:t[o-1],next:t[o+1]}}(e),a=t.prev,o=t.next;return Object(i.d)(Q,null,Object(i.d)(Z,null,a?Object(i.d)(ee,{to:a.slug,key:"prev"},Object(i.d)(ne,{"data-prev":!0},Object(i.d)(K,{size:28,css:te})),a.title):Object(i.d)($,{key:"prev"}),Object(i.d)(_,{key:"divider"}),o?Object(i.d)(ee,{to:o.slug,key:"next"},o.title,Object(i.d)(ne,{"data-next":!0},Object(i.d)(W.a,{size:28,css:te}))):Object(i.d)($,{key:"next"})))}))),Object(i.d)(J,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}}]}}}')},DK3D:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("q1tI");var a=n("7ljp"),o=n("7oih");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},c={_frontmatter:s},i=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,r({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tree-shaking",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h1"},{href:"#tree-shaking","aria-label":"tree shaking permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Tree-shaking"),Object(a.b)("p",null,"While Popper v2 saw a sizeable decrease in bundle size from v1 (-2 kB from ~7 kB\nminzipped to ~5 kB minzipped), this is still not optimal."),Object(a.b)("p",null,'Popper addresses a lot of use cases and complexity, but to help keep consumers\'\nbundle sizes small, we made the library tree-shakable. "Tree-shaking" is the\nprocess of eliminating unused code from your bundles, which is achieved by\nbundlers such as webpack, Rollup and Parcel.'),Object(a.b)("p",null,"If you're using the CDN, tree-shaking will not be available."),Object(a.b)("h2",{id:"popper-lite",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h2"},{href:"#popper-lite","aria-label":"popper lite permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Lite"),Object(a.b)("p",null,"The most straightforward way to enable tree-shaking is to use Popper Lite and\nconfigure it with your needs."),Object(a.b)("p",null,"Instead of:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",r({parentName:"code"},{className:"token comment"}),"// ❌ Imports all of Popper!"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";")))),Object(a.b)("p",null,"Use:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",r({parentName:"code"},{className:"token comment"}),"// ✅"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";")))),Object(a.b)("p",null,"Popper Lite only comes with the following modifiers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"popperOffsets")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"computeStyles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"applyStyles")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"eventListeners"))),Object(a.b)("p",null,"This effectively achieves the bare minimum functionality, and is around 3 kB\nminzipped. If 3 kB is still too much for your application, we recommend trying\nout CSS tooltip alternatives which are as tiny as 1 kB. Please note that such\nlibraries have many disadvantages that Popper doesn't, so assess the trade-offs\nwhere necessary."),Object(a.b)("p",null,"Now, you'll need to add the modifiers you need. These are accessible under the\n",Object(a.b)("code",r({parentName:"p"},{className:"language-text"}),"@popperjs/core/lib/modifiers/")," directory."),Object(a.b)("p",null,"Generally, we recommend ",Object(a.b)("code",r({parentName:"p"},{className:"language-text"}),"flip")," and ",Object(a.b)("code",r({parentName:"p"},{className:"language-text"}),"preventOverflow")," since these are the most\nattractive reasons for using Popper in the first place:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{")," createPopper ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",r({parentName:"code"},{className:"token function"}),"createPopper"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"reference",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," popper ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  modifiers",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"flip",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),")")))),Object(a.b)("h3",{id:"popper-generator",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h3"},{href:"#popper-generator","aria-label":"popper generator permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Popper Generator"),Object(a.b)("p",null,"To pass these extra modifiers as default, you can use the ",Object(a.b)("code",r({parentName:"p"},{className:"language-text"}),"popperGenerator"),"\nfunction:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",r({parentName:"div"},{className:"language-js"}),Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  popperGenerator",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n  defaultModifiers",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/popper-lite'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," flip ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/flip'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"import")," preventOverflow ",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"from")," ",Object(a.b)("span",r({parentName:"code"},{className:"token string"}),"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",r({parentName:"code"},{className:"token keyword"}),"const")," createPopper ",Object(a.b)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",r({parentName:"code"},{className:"token function"}),"popperGenerator"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n  defaultModifiers",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"["),Object(a.b)("span",r({parentName:"code"},{className:"token operator"}),"..."),"defaultModifiers",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," flip",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),",")," preventOverflow",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",r({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",r({parentName:"code"},{className:"token comment"}),"// Now you can use `createPopper`")))))}l.isMDXComponent=!0},vUvN:function(e,t,n){e.exports=n.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,n){"use strict";var a=n("P8UN"),o=n("Wadk")(6),r="findIndex",s=!0;r in[]&&Array(1)[r]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-tree-shaking-mdx-602e5afebbb5ae5e1aa1.js.map