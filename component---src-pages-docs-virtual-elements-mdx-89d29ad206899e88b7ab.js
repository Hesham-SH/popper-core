(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7oih":function(e,t,n){"use strict";n("zTTH"),n("sC2a");var a=n("wTIg"),o=n("q1tI"),r=n.n(o),c=n("Wbzz"),s=n("7ljp"),i=n("qKvR"),p=n("eVhr"),l=n("4FWg"),d=n("9Yco"),u=function(e){var t=e.children;return Object(i.d)(c.StaticQuery,{query:"3609520525",render:function(e){var n=e.allMdx.edges.map((function(e){return{title:e.node.frontmatter.title,slug:e.node.fields.slug}}));return t(n)},data:d})};n("HQhv");function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(0===e.slug.indexOf(a.slug+"/"))return void b(e,a.children)}t.push({title:e.title,slug:e.slug,children:[]})}n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("gu/5"),n("eoYm"),n("zGcK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("ToIb");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=new Set(["/404/"]),g=["tippy","constructors","modifiers","utils","virtual-elements","tree-shaking","faq","typings","browser-support"],O=["Popper Offsets","Offset","Prevent Overflow","Arrow","Flip","Hide","Compute Styles","Apply Styles","Event Listeners"];function N(e){var t=e.filter((function(e){return!f.has(e.slug)})).map((function(e){return e.slug=e.slug.replace(/\/$/,""),e})).sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).sort((function(e,t){return O.indexOf(e.title)-O.indexOf(t.title)}));return[].concat(m(t.filter((function(e){return!g.some((function(t){return e.slug.includes(t)}))}))),m(g.reduce((function(e,n){return[].concat(m(e),m(t.filter((function(e){return e.slug.includes(n)}))))}),[])))}var j=n("vUvN"),h=n.n(j),k=(n("Ggvi"),n("sc67"),n("E5k/"),n("17x9")),x=n.n(k);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.color,n=e.size,a=v(e,["color","size"]);return r.a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};w.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},w.defaultProps={color:"currentColor",size:"24"};var z=w,C={name:"80dmy3",styles:"display:block;transform:translateX(0);"},S=Object(a.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&C})," ",l.d.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),E={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},T=Object(a.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&E})),P=Object(a.a)(c.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),R=Object(a.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",l.d.lg,"{display:none;}"),A={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},H=Object(a.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",l.d.md,"{display:block;}",(function(e){return e.scrolled&&A})),q=function(e){var t=e.mobile;return Object(i.d)("img",{src:h.a,draggable:"false",alt:"Popper Logo",css:Object(i.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},B=Object(a.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),L=Object(a.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:25px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",l.d.lg,"{display:none;}"),D=Object(a.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",l.d.lg,"{margin-top:15px;}"),F=function e(t){var n=t.route;return Object(i.d)(r.a.Fragment,null,Object(i.d)(T,{root:!0},Object(i.d)("li",null,Object(i.d)(P,{to:n.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},n.title)),Object(i.d)(T,{root:1===n.slug.split("/").length},n.children.map((function(t,n){return Object(i.d)(e,{key:n,route:t})})))))},I=0;function V(e){e.description,e.lang,e.meta,e.title;var t=Object(o.useState)(!1),n=t[0],a=t[1],c=Object(o.useState)(!1),s=c[0],p=c[1],l=Object(o.useRef)();function d(){a(!0)}function m(){a(!1)}function f(){var e=l.current.scrollTop;I=e,p(e>10)}return Object(o.useLayoutEffect)((function(){var e=l.current;e.scrollTop=I;var t=e.querySelector('[aria-current="page"]');if(t){var n=t.getBoundingClientRect();(n.bottom>window.innerHeight||n.top<0)&&t.scrollIntoView()}}),[]),Object(i.d)(u,null,(function(e){return Object(i.d)(r.a.Fragment,null,Object(i.d)(R,null,Object(i.d)(B,{onClick:d,"aria-expanded":n?"true":"false","aria-label":"Click to open navigation menu"},Object(i.d)(z,{size:30})),Object(i.d)(q,{mobile:!0})),Object(i.d)(S,{open:n,ref:l,onScroll:f},Object(i.d)(H,{scrolled:s},Object(i.d)(q,null)),Object(i.d)(L,{onClick:m},"Close Menu"),Object(i.d)(D,null,function(e){for(var t=[],n=0;n<e.length;n++){b(e[n],t)}return t}(N(e)).map((function(e,t){return Object(i.d)(F,{route:e,key:t})})))))}))}var M=n("9CUm");n("8ypT"),n("cu9l");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var K=function(e){var t=e.color,n=e.size,a=X(e,["color","size"]);return r.a.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};K.propTypes={color:x.a.string,size:x.a.oneOfType([x.a.string,x.a.number])},K.defaultProps={color:"currentColor",size:"24"};var U=K,Y=n("EAKA"),W=Object(a.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",l.d.lg,"{padding-top:0;margin-left:",260,"px;}"),J=Object(a.a)(l.b,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",l.d.lg,"{margin-left:",260,"px;}"),Q=Object(a.a)("div",{target:"e1fogcta2"})({name:"17w03cj",styles:"display:flex;justify-content:space-between;border-top:1px solid #44395d;margin-top:50px;"}),Z=Object(a.a)(l.a,{target:"e1fogcta3"})("display:flex;width:100%;padding:0;",l.d.md,"{padding:0 40px;}"),$=Object(a.a)("div",{target:"e1fogcta4"})({name:"dltnlo",styles:"padding:50px 25px;border:none;min-width:50%;"}),_=Object(a.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",l.d.md,"{display:block;}"),ee=Object(a.a)(c.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;border-bottom:2px solid transparent;flex-grow:1;word-break:break-word;",l.d.md,"{font-size:22px;width:100%;}",l.d.lg,"{font-size:24px;}&:first-of-type{&:not(:last-of-type){padding-right:15px;}}&:last-of-type{border-bottom-color:transparent;text-align:right;&:not(:first-of-type){padding-left:15px;}}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),te=Object(i.c)("vertical-align:3px;",l.d.md,"{vertical-align:0;}"),ne=Object(a.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",l.d.md,"{top:54px;}",l.d.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),ae={"x-ad":p.a};t.a=function(e){var t=e.children,n=e.path,a=e.pageResources;return Object(o.useLayoutEffect)((function(){try{document.querySelector(window.location.hash).scrollIntoView()}catch(e){}}),[]),Object(i.d)(s.a,{components:ae},Object(i.d)(i.a,{styles:Object(i.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",l.d.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",l.d.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(i.d)("div",null,a&&Object(i.d)(M.a,{title:a.json.pageContext.frontmatter.title}),Object(i.d)(V,{root:"/",target:"location"}),Object(i.d)(W,null,Object(i.d)(l.a,null,t),Object(i.d)(u,null,(function(e){var t=function(e){var t=N(e),a=n.replace(/\/$/,""),o=t.findIndex((function(e){return e.slug===a}));return{prev:t[o-1],next:t[o+1]}}(e),a=t.prev,o=t.next;return Object(i.d)(Q,null,Object(i.d)(Z,null,a?Object(i.d)(ee,{to:a.slug,key:"prev"},Object(i.d)(ne,{"data-prev":!0},Object(i.d)(U,{size:28,css:te})),a.title):Object(i.d)($,{key:"prev"}),Object(i.d)(_,{key:"divider"}),o?Object(i.d)(ee,{to:o.slug,key:"next"},o.title,Object(i.d)(ne,{"data-next":!0},Object(i.d)(Y.a,{size:28,css:te}))):Object(i.d)($,{key:"next"})))}))),Object(i.d)(J,null,"© ",(new Date).getFullYear()," MIT License")))}},"9Yco":function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"title":"Not Found"}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"title":"Home"}}},{"node":{"fields":{"slug":"/docs/browser-support/"},"frontmatter":{"title":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/constructors/"},"frontmatter":{"title":"Constructors"}}},{"node":{"fields":{"slug":"/docs/faq/"},"frontmatter":{"title":"FAQ"}}},{"node":{"fields":{"slug":"/docs/tippy/"},"frontmatter":{"title":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/tree-shaking/"},"frontmatter":{"title":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/typings/"},"frontmatter":{"title":"Typings"}}},{"node":{"fields":{"slug":"/docs/virtual-elements/"},"frontmatter":{"title":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/utils/detect-overflow/"},"frontmatter":{"title":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/utils/"},"frontmatter":{"title":"Utils"}}},{"node":{"fields":{"slug":"/docs/modifiers/apply-styles/"},"frontmatter":{"title":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/arrow/"},"frontmatter":{"title":"Arrow"}}},{"node":{"fields":{"slug":"/docs/modifiers/compute-styles/"},"frontmatter":{"title":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/modifiers/event-listeners/"},"frontmatter":{"title":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/modifiers/flip/"},"frontmatter":{"title":"Flip"}}},{"node":{"fields":{"slug":"/docs/modifiers/hide/"},"frontmatter":{"title":"Hide"}}},{"node":{"fields":{"slug":"/docs/modifiers/"},"frontmatter":{"title":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/modifiers/offset/"},"frontmatter":{"title":"Offset"}}},{"node":{"fields":{"slug":"/docs/modifiers/popper-offsets/"},"frontmatter":{"title":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/modifiers/prevent-overflow/"},"frontmatter":{"title":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/"},"frontmatter":{"title":"Documentation"}}}]}}}')},mnCZ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("q1tI");var a=n("7ljp"),o=n("7oih"),r=n("KK5/");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},i={_frontmatter:s},p=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,c({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"virtual-elements",style:{position:"relative"}},Object(a.b)("a",c({parentName:"h1"},{href:"#virtual-elements","aria-label":"virtual elements permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",c({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Virtual Elements"),Object(a.b)("p",null,"You can use a virtual element instead of a real DOM element as the reference.\nThis allows you to position the popper relative to a virtual area defined by any\ncoordinates you desire."),Object(a.b)("p",null,"A common use case for this is making the popper follow the mouse cursor, where\nthe cursor acts as a point reference."),Object(a.b)("p",null,"A virtual element is a plain object with only one property – a custom\n",Object(a.b)("code",c({parentName:"p"},{className:"language-text"}),"getBoundingClientRect")," function that returns a custom ",Object(a.b)("code",c({parentName:"p"},{className:"language-text"}),"ClientRect")," object:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(a.b)("pre",c({parentName:"div"},{className:"language-flow"}),Object(a.b)("code",c({parentName:"pre"},{className:"language-flow"}),Object(a.b)("span",c({parentName:"code"},{className:"token keyword"}),"type")," VirtualElement ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"code"},{className:"token flow-punctuation punctuation"}),"{|"),"\n  getBoundingClientRect",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=>")," ClientRect ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"|")," DOMRect",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",c({parentName:"code"},{className:"token flow-punctuation punctuation"}),"|}"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))),Object(a.b)("h2",{id:"demo",style:{position:"relative"}},Object(a.b)("a",c({parentName:"h2"},{href:"#demo","aria-label":"demo permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",c({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Demo"),Object(a.b)(r.f,{mdxType:"VirtualElementDemo"}),Object(a.b)("h2",{id:"usage",style:{position:"relative"}},Object(a.b)("a",c({parentName:"h2"},{href:"#usage","aria-label":"usage permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",c({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Usage"),Object(a.b)("p",null,"This will make the popper follow the mouse cursor as seen in the demo above:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(a.b)("pre",c({parentName:"div"},{className:"language-js"}),Object(a.b)("code",c({parentName:"pre"},{className:"language-js"}),Object(a.b)("span",c({parentName:"code"},{className:"token keyword"}),"function")," ",Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token parameter"}),"x ",Object(a.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"span"},{className:"token number"}),"0"),Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," y ",Object(a.b)("span",c({parentName:"span"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"span"},{className:"token number"}),"0")),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(a.b)("span",c({parentName:"code"},{className:"token keyword"}),"return")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=>")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n    width",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    height",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",c({parentName:"code"},{className:"token number"}),"0"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    top",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," y",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    right",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," x",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    bottom",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," y",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n    left",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," x",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(a.b)("span",c({parentName:"code"},{className:"token keyword"}),"const")," virtualElement ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  getBoundingClientRect",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),":")," ",Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(a.b)("span",c({parentName:"code"},{className:"token keyword"}),"const")," instance ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"createPopper"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"virtualElement",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," popper",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n\ndocument",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"addEventListener"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token string"}),"'mousemove'"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token parameter"}),Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),"{")," clientX",Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),":")," x",Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),",")," clientY",Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),":")," y ",Object(a.b)("span",c({parentName:"span"},{className:"token punctuation"}),"}")),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=>")," ",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"{"),"\n  virtualElement",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"getBoundingClientRect ",Object(a.b)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"generateGetBoundingClientRect"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"x",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),",")," y",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n  instance",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"."),Object(a.b)("span",c({parentName:"code"},{className:"token function"}),"update"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"("),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),"}"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),")"),Object(a.b)("span",c({parentName:"code"},{className:"token punctuation"}),";")))))}l.isMDXComponent=!0},vUvN:function(e,t,n){e.exports=n.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,n){"use strict";var a=n("P8UN"),o=n("Wadk")(6),r="findIndex",c=!0;r in[]&&Array(1)[r]((function(){c=!1})),a(a.P+a.F*c,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-virtual-elements-mdx-89d29ad206899e88b7ab.js.map