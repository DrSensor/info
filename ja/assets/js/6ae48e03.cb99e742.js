(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9559],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(o,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3878:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(7294),i="icon_1PGw",c=n(9205),a=function(e){return r.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},r.createElement("div",{className:i},r.createElement(c.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r=n(7294),i=n(9205),c="titleOffset_2I3u",a="iconContainer_1xRA",l=function(e){var t=e.title?r.createElement("div",{className:"card__header"},r.createElement("span",{className:a},e.icon&&r.createElement(i.A,{icon:e.icon,link:e.link,active:"true"})),r.createElement("h3",{className:e.icon&&c},e.title)):"";return r.createElement("div",{className:"card-demo",style:{margin:"2rem"}},r.createElement("div",{className:"card"},t,r.createElement("div",{className:"card__body"},r.createElement("p",null," ",e.children," "))))}},9205:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7294),i="hidden_2JtY",c="iconContainer_2Rnc",a="visible_2147",l="link_Lh4h",o="clickable_3vcc",s=function(e){var t=" "+(e.active?a:i),n=l+" "+(e.link&&o);return r.createElement("div",{className:c+t},r.createElement("a",{href:e.link,className:n},e.icon||"\ud83d\ude80"))}},6649:function(e,t,n){"use strict";n.d(t,{x:function(){return c}});var r=n(7294),i="threeScene_3QXR",c=function(e){return r.createElement("iframe",{className:i,width:"100%",height:"300",key:Math.random(),src:e.link,frameBorder:"0"})}},9163:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j},frontMatter:function(){return I},metadata:function(){return C},toc:function(){return b}});var r=n(2122),i=n(9756),c=n(7294),a=n(3905),l=n(983),o=n(3878),s=n(6649),u="ifcTabItem_3jhz",d="ifcTabContent_2OBh",p="linkContainer_2bzd",f="iconSpacing_2WTy",m=n(9205),k=function(e){var t,n=0,r=(0,c.useState)(e.items.map((function(e){return{name:e.name,selected:0===n,content:e.content,key:n++,icon:e.icon,link:e.link}}))),i=r[0],a=r[1],l=(0,c.useState)(!1),o=l[0],s=l[1];function k(e){return e.selected?" tabs__item--active ":""}function h(){return i.find((function(e){return e.selected}))}return c.createElement("div",null,c.createElement("ul",{className:"tabs ifc-tab"},i.map((function(e){return c.createElement("li",{onClick:function(){return t=e.key,(n=[].concat(i)).forEach((function(e){return e.selected=!1})),n.find((function(e){return e.key===t})).selected=!0,void a(n);var t,n},className:"tabs__item "+u+k(e),key:e.key},function(e){return e.icon?c.createElement("div",{className:f},c.createElement(m.A,{icon:e.icon,active:"true"})):e.name}(e))}))),c.createElement("div",{className:d,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},h().content,(t=h()).link?c.createElement("div",{className:p},c.createElement(m.A,{link:t.link,active:t.link&&o})):null))},h=["components"],I={title:"\u306f\u3058\u3081\u306b",sidebar_position:1},C={unversionedId:"Introduction",id:"Introduction",isDocsHomePage:!1,title:"\u306f\u3058\u3081\u306b",description:"\ud83c\udfae",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/info/ja/docs/Introduction",version:"current",sidebarPosition:1,frontMatter:{title:"\u306f\u3058\u3081\u306b",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Sponsoring",permalink:"/info/ja/docs/Sponsoring"}},b=[{value:"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f55\u3067\u3059\u304b\uff1f",id:"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f55\u3067\u3059\u304b\uff1f",children:[{value:"IFC\u3068\u306f\uff1f",id:"ifc\u3068\u306f\uff1f",children:[]},{value:"IFC\u306e\u554f\u984c\u70b9",id:"ifc\u306e\u554f\u984c\u70b9",children:[]},{value:"IFC.js\u306e\u6551\u51fa",id:"ifcjs\u306e\u6551\u51fa",children:[]}]},{value:"IFC.js\u3092\u7c21\u5358\u306b\u8aac\u660e\u3059\u308b\u3068",id:"ifcjs\u3092\u7c21\u5358\u306b\u8aac\u660e\u3059\u308b\u3068",children:[]},{value:"\u8ab0\u306e\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u306e\u304b",id:"\u8ab0\u306e\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u306e\u304b",children:[]},{value:"IFC.js\u306f\u306a\u305c\u9055\u3046\u306e\u3067\u3059\u304b\uff1f",id:"ifcjs\u306f\u306a\u305c\u9055\u3046\u306e\u3067\u3059\u304b\uff1f",children:[{value:"\u30de\u30eb\u30c1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u30de\u30eb\u30c1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",children:[]},{value:"\u30b9\u30d4\u30fc\u30c9",id:"\u30b9\u30d4\u30fc\u30c9",children:[]},{value:"\u7279\u5fb4",id:"\u7279\u5fb4",children:[]}]},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",children:[]},{value:"\u8ca2\u732e\u3059\u308b",id:"\u8ca2\u732e\u3059\u308b",children:[]}],v={toc:b};function j(e){var t=e.components,n=(0,i.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"  \ud83c\udfae\nIFC.js\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067IFC\u30e2\u30c7\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u3001\u8868\u793a\u30fb\u7de8\u96c6\u3059\u308b\u305f\u3081\u306eJavaScript\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u304a\u624b\u6301\u3061\u306eIFC\u30e2\u30c7\u30eb\u3067",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/web-ifc-viewer/example/index"},"\u30e9\u30a4\u30d6\u30c7\u30e2"),"\u3092\u304a\u8a66\u3057\u3044\u305f\u3060\u304d\u3001IFC.js\u306e\u5b9f\u529b\u3092\u5b9f\u611f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f55\u3067\u3059\u304b\uff1f"},"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u4f55\u3067\u3059\u304b\uff1f"),(0,a.kt)("h3",{id:"ifc\u3068\u306f\uff1f"},"IFC\u3068\u306f\uff1f"),(0,a.kt)("p",null,"  \ud83c\udfe0\n\u5efa\u7bc9\u5bb6\u306f\u3082\u306f\u3084\u5efa\u7269\u306e\u8a2d\u8a08\u56f3\u3092\u4e00\u679a\u4e00\u679a\u63cf\u304f\u306e\u3067\u306f\u306a\u304f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://www.ea.com/es-es/games/the-sims"},"The SIMS"),"\u3067\u30e2\u30c7\u30eb\u5316\u3055\u308c\u305f\u4f4f\u5b85\u306e\u3088\u3046\u306b\u3001\u5efa\u7269\u306e3D\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u4f5c\u6210\u3055\u308c\u305f\u30e2\u30c7\u30eb\u306b\u306f\u5f62\u72b6\u3068\u60c5\u5831\u306e\u4e21\u65b9\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u3053\u306e\u4f5c\u696d\u65b9\u6cd5\u306fBIM\uff08Building Information Model\uff09\u3068\u547c\u3070\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"  \ud83d\udd25\n\u3057\u304b\u3057\u3001\u5efa\u7269\u306f\u975e\u5e38\u306b\u8907\u96d1\u306a\u306e\u3067\u3001\u3053\u308c\u3089\u306e\u30e2\u30c7\u30eb\u3092\u3059\u3079\u3066\u4f5c\u6210\u3067\u304d\u308b\u5358\u4e00\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u305d\u308c\u305e\u308c\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u306f\u3001\u5f62\u72b6\u306e\u30e2\u30c7\u30ea\u30f3\u30b0\u3001\u69cb\u9020\u306e\u8a08\u7b97\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u4f5c\u6210\u306a\u3069\u306e\u30df\u30c3\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"  \ud83d\udc40\n\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u306f\u4e16\u754c\u4e2d\u306e\u8907\u6570\u306e\u958b\u767a\u8005\u304b\u3089\u63d0\u4f9b\u3055\u308c\u3066\u304a\u308a\u3001\u305d\u308c\u305e\u308c\u304c\u72ec\u81ea\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u52d5\u4f5c\u3057\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u69cb\u9020\u8a08\u7b97\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f5c\u6210\u3057\u305f\u69cb\u9020\u30e2\u30c7\u30eb\u306f\u3001\u30a8\u30cd\u30eb\u30ae\u30fc\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u30bd\u30d5\u30c8\u3067\u306f\u8aad\u3081\u307e\u305b\u3093\u3057\u3001\u305d\u306e\u9006\u3082\u307e\u305f\u7136\u308a\u3067\u3059\u3002\u3067\u306f\u3001\u306a\u305c\u8907\u6570\u306e\u30c4\u30fc\u30eb\u304b\u3089\u5efa\u7269\u306e\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("p",null,"  \ud83c\udf89\n\u305d\u306e\u7b54\u3048\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"},(0,a.kt)("strong",{parentName:"a"},"IFC")),"\u3067\u3059\u3002BuildingSMART\u793e\u304c\u4f5c\u6210\u3057\u305f\u3001\u5efa\u7269\u306e3D\u30e2\u30c7\u30eb\u3092\u683c\u7d0d\u3059\u308b\u305f\u3081\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002\u30aa\u30fc\u30d7\u30f3\u306a\u306e\u3067\u3001\u8ab0\u3067\u3082\u8aad\u307f\u66f8\u304d\u3067\u304d\u307e\u3059\u3002\u3084\u3063\u305f\u30fc!"),(0,a.kt)(o.r,{mdxType:"IfcAlert"},"IFC\u306e\u304a\u304b\u3052\u3067\u3001\u958b\u767a\u8005\u306f\u8ab0\u3067\u3082\u81ea\u7531\u306bBIM\u30a2\u30d7\u30ea\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u5efa\u8a2d\u5206\u91ce\u306e\u5927\u624b\u958b\u767a\u4f1a\u793e\u306e\u30a2\u30d7\u30ea\u3068\u901a\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"ifc\u306e\u554f\u984c\u70b9"},"IFC\u306e\u554f\u984c\u70b9"),(0,a.kt)("p",null,"BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u308d\u3046\u3068\u3059\u308b\u4eba\u306f\u3001\u4ed6\u306e\u30c4\u30fc\u30eb\u304b\u3089\u60c5\u5831\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u30fb\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u305f\u3081\u306b\u3001",(0,a.kt)("strong",{parentName:"p"},"IFC\u30d5\u30a1\u30a4\u30eb"),"\u3092\u8aad\u307f\u66f8\u304d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6b8b\u5ff5\u306a\u304c\u3089\u3001IFC\u306f\u8aad\u307f\u66f8\u304d\u304c\u56f0\u96e3\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u3059\u3002\u4f55\u5343\u30da\u30fc\u30b8\u3082\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u304c\u3042\u308a\u3001\u81ea\u4f5c\u306eIFC\u30d1\u30fc\u30b5\u30fc\u3092\u4f5c\u6210\u30fb\u7dad\u6301\u3059\u308b\u306e\u306f\u5927\u5909\u306a\u4f5c\u696d\u3067\u3059\u3002"),(0,a.kt)(l.M,{title:"\nIFC\u3092\u8cb7\u3048\u308b\u306e\u304b\uff1f",mdxType:"IfcCard"},"\ud83d\udcb8 \u3053\u308c\u306f\u3001\u4f55\u4eba\u3082\u306e\u958b\u767a\u8005\u304c\u30d5\u30eb\u30bf\u30a4\u30e0\u3067\u50cd\u3044\u3066\u3044\u308b\u4f01\u696d\u3067\u306a\u3051\u308c\u3070\u3067\u304d\u306a\u3044\u3053\u3068\u3067\u3059\u3002\u3082\u3046\u3001\u305d\u3093\u306a\u306b\u30aa\u30fc\u30d7\u30f3\u306a\u611f\u3058\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3088\u306d\uff1f"),(0,a.kt)("p",null,"IFC\u306e\u5185\u90e8\u304c\u3069\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u6c17\u306b\u306a\u308b\u65b9\u306e\u305f\u3081\u306b\u3001\u4f8b\u3092\u6319\u3052\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u3053\u306e\u3088\u3046\u306a\u4f55\u5341\u4e07\u884c\u3082\u306e\u30c7\u30fc\u30bf\u3092\u89e3\u6790\u3059\u308b\u3053\u3068\u3092\u60f3\u50cf\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"#6699= IFCCARTESIANPOINT((0.,-1.7053025E-13));\n#6701= IFCAXIS2PLACEMENT2D(#6699,#23);\n#6703= IFCCARTESIANPOINT((892.,-253.399999,150.));\n#6705= IFCAXIS2PLACEMENT3D(#6703,#15,#19);\n#6706= IFCEXTRUDEDAREASOLID(#6702,#6705,#19,506.8);\n#6707= IFCCOLOURRGB($,0.50196,0.501913,0.501960);\n")),(0,a.kt)("p",null,"  \ud83d\udc80\n\u30d1\u30fc\u30b5\u30fc\u3092\u4e00\u304b\u3089\u4f5c\u308a\u3001IFC\u30b9\u30ad\u30fc\u30de\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3059\u308b\u6c17\u304c\u3042\u3063\u305f\u3068\u3057\u3066\u3082\u3001\u3053\u306e\u554f\u984c\u306b\u53d6\u308a\u7d44\u3080\u306b\u306f\u3044\u304f\u3064\u304b\u306e\u81ea\u660e\u3067\u306f\u306a\u3044\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\u975e\u5e38\u306b\u5927\u304d\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u30e1\u30e2\u30ea\u3092\u3069\u306e\u3088\u3046\u306b\u7ba1\u7406\u3059\u308b\u304b\uff1f\u5e7e\u4f55\u5b66\u7684\u306a\u751f\u6210\u3092\u3044\u304b\u306b\u52b9\u7387\u7684\u306b\u5b9f\u88c5\u3059\u308b\u304b\uff1fIFC\u304c\u6b63\u3057\u304f\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306e\u5bfe\u51e6\u6cd5\u306f\uff1f"),(0,a.kt)("h3",{id:"ifcjs\u306e\u6551\u51fa"},"IFC.js\u306e\u6551\u51fa"),(0,a.kt)("p",null,"\u3059\u3079\u3066\u306e\u958b\u767a\u8005\u304c\u81ea\u5206\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306bIFC\u30d5\u30a1\u30a4\u30eb\u306e\u30ea\u30fc\u30c0\u30fc\u3068\u30e9\u30a4\u30bf\u30fc\u3092\u72ec\u81ea\u306b\u5b9f\u88c5\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u306e\u306f\u610f\u5473\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u7279\u306b\u3001\u79c1\u305f\u3061\u306f\u7686\u3001\u540c\u3058\u3053\u3068\u3092\u3057\u3066\u3044\u307e\u3059\u3002**\u30b8\u30aa\u30e1\u30c8\u30ea\u3084\u30c7\u30fc\u30bf\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3067\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"IFC.js\u306f\u3001",(0,a.kt)("b",null,"IFC\u30d5\u30a1\u30a4\u30eb\u306e\u8aad\u307f\u66f8\u304d"),"\u3092\u975e\u5e38\u306b\u7c21\u5358\u306b\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u308bJavaScript\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u306b\u3088\u308a\u3001\u5efa\u7bc9\u30fb\u5efa\u8a2d\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u8005\u306f\u3001IFC\u3067\u306e\u4f5c\u696d\u304c\u5bb9\u6613\u306b\u306a\u308a\u3001\u30d3\u30b8\u30cd\u30b9\u306b\u771f\u306b\u4ed8\u52a0\u4fa1\u5024\u3092\u4e0e\u3048\u308b\u6a5f\u80fd\u6027\u306b\u96c6\u4e2d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"ifcjs\u3092\u7c21\u5358\u306b\u8aac\u660e\u3059\u308b\u3068"},"IFC.js\u3092\u7c21\u5358\u306b\u8aac\u660e\u3059\u308b\u3068"),(0,a.kt)("p",null,"IFC.js\u306b\u306f2\u3064\u306e\u7126\u70b9\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(l.M,{icon:"\ud83d\udc8e",title:"\u30b8\u30aa\u30e1\u30c8\u30ea",mdxType:"IfcCard"}," IFC.js\u304c3D\u30b7\u30fc\u30f3\u3092\u751f\u6210\u3067\u304d\u308b\u306e\u306f\u3001Three.js\u3084Babylon.js\u306a\u3069\u306e3D\u30e9\u30a4\u30d6\u30e9\u30ea\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002\u3064\u307e\u308a\u30013D\u306eBIM\u30c4\u30fc\u30eb\u3092\u3059\u3050\u306b\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3059\u3002"),(0,a.kt)(l.M,{icon:"\ud83d\udd17",title:"\u30c7\u30fc\u30bf",mdxType:"IfcCard"}," \u305d\u306e\u30b8\u30aa\u30e1\u30c8\u30ea\u306b\u95a2\u9023\u3059\u308b\u3059\u3079\u3066\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3078\u306e\u30cf\u30a4\u30ec\u30d9\u30eb\u306a\u30a2\u30af\u30bb\u30b9\u3002\u3064\u307e\u308a\u3001\u5efa\u7bc9\u7269\u306e\u69cb\u6210\u8981\u7d20\u3084\u305d\u306e\u6750\u6599\u3001\u71b1\u7279\u6027\u3001\u69cb\u9020\u5f37\u5ea6\u306a\u3069\u306e\u30c7\u30fc\u30bf\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u306e\u3067\u3059\u3002"),(0,a.kt)("p",null,"IFC.js\u3092\u4f7f\u3063\u305fBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306f\u3001JavaScript\u3001HTML\u3001CSS\u3067Web\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b\u306e\u3068\u540c\u3058\u304f\u3089\u3044\u7c21\u5358\u3067\u3059\u3002"),(0,a.kt)(s.x,{link:"https://ifcjs.github.io/hello-world/examples/web-ifc-three/introduction/",mdxType:"Scene"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { IfcLoader } from 'web-ifc-three';\nimport { Scene } from 'three';\n\n//THREE.js\u306e\u30b7\u30fc\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\nconst scene = new Scene();\n\n//...\n\n//IFC\u3092\u30ed\u30fc\u30c9\u3057\u3001\u30b7\u30fc\u30f3\u306b\u8ffd\u52a0\u3059\u308b\nconst ifcLoader = new IfcLoader();\nifcLoader.load(ifcURL, (geometry) => scene.add(geometry));\n")),(0,a.kt)("h2",{id:"\u8ab0\u306e\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u306e\u304b"},"\u8ab0\u306e\u305f\u3081\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306a\u306e\u304b"),(0,a.kt)("p",null,"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u3057\u3088\u3046\u3068\u3059\u308b\u4eba\u306e\u305f\u3081\u306e\u3082\u306e\u3067\u3059\u3002\u5efa\u8a2d\u696d\u754c\u5411\u3051\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u958b\u767a\u8005\u3084\u3001IFC\u30d5\u30a1\u30a4\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u6d3b\u7528\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u308b\u5efa\u7bc9\u5bb6\u3084\u305d\u306e\u4ed6\u306e\u5c02\u9580\u5bb6\u304c\u5bfe\u8c61\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001JavaScript\u3001HTML\u3001CSS\u306e\u57fa\u672c\u7684\u306a\u77e5\u8b58\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u306e\u77e5\u8b58\u306f\u3001\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u7bc4\u56f2\u3092\u8d85\u3048\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001IFC\u306e\u30b8\u30aa\u30e1\u30c8\u30ea\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u3001\u4f55\u3089\u304b\u306e3D\u30e9\u30a4\u30d6\u30e9\u30ea\uff08Three.js\u307e\u305f\u306fBabylon.js\uff09\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"  \ud83d\ude0a\n\u4f55\u304b\u3089\u59cb\u3081\u308c\u3070\u3044\u3044\u306e\u304b\u308f\u304b\u3089\u306a\u3044\u3068\u3044\u3046\u65b9\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://threejsfundamentals.org/"},"\u3053\u3061\u3089"),"\u3092\u3054\u89a7\u306b\u306a\u308b\u304b\u3001",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord Channel"),"\u306b\u53c2\u52a0\u3057\u3066\u3001\u3054\u6328\u62f6\u3057\u3066\u307f\u3066\u306f\u3044\u304b\u304c\u3067\u3057\u3087\u3046\u304b\u3002"),(0,a.kt)("h2",{id:"ifcjs\u306f\u306a\u305c\u9055\u3046\u306e\u3067\u3059\u304b\uff1f"},"IFC.js\u306f\u306a\u305c\u9055\u3046\u306e\u3067\u3059\u304b\uff1f"),(0,a.kt)("p",null,"IFC.js\u306f\u3001\u6700\u3082\u30e6\u30d3\u30ad\u30bf\u30b9\u306a\u8a00\u8a9e\u306e\u4e00\u3064\u3067\u3042\u308bJavaScript\u306e\u305f\u3081\u306b\u958b\u767a\u3055\u308c\u305f\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u3064\u307e\u308a\u3001Web\u30d6\u30e9\u30a6\u30b6\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u306e\u4e92\u63db\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u307e\u305f\u3001JavaScript\u306f\u6700\u3082\u7c21\u5358\u306b\u7fd2\u5f97\u3067\u304d\u308b\u8a00\u8a9e\u306e\u4e00\u3064\u3067\u3042\u308a\u3001HTML\u3084CSS\u3092\u7528\u3044\u3066\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u8a00\u3044\u63db\u3048\u308c\u3070\u3001IFC.js\u3092\u4f7f\u3063\u305fBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306f\u3001\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u3092\u4f5c\u6210\u3059\u308b\u306e\u3068\u540c\u3058\u304f\u3089\u3044\u7c21\u5358\u306a\u306e\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"\u30de\u30eb\u30c1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"},"\u30de\u30eb\u30c1\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"),(0,a.kt)("p",null,"IFC.js\u3092\u4f7f\u3048\u3070\u3001\u3042\u3089\u3086\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5bfe\u5fdc\u3057\u305f\u30aa\u30fc\u30d7\u30f3\u306aBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(k,{items:[{icon:"\ud83c\udf0f",content:(0,a.kt)("p",null,(0,a.kt)("b",null,"\u30b5\u30fc\u30d0\u30fc\u901a\u4fe1\u306b\u983c\u3089\u305a\u306bIFC\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u66f8\u304d\u3057\u30013D\u3092\u8868\u793a\u3059\u308b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u306eWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),"\u306f\u3001",(0,a.kt)("b",null,"\u30d0\u30cb\u30e9JavaScript"),"\u3084\u3001",(0,a.kt)("b",null,"React\u3001Vue\u3001Angular\u3001Svelte\u306a\u3069"),"\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u3063\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3064\u307e\u308a\u3001",(0,a.kt)("i",null,"IFC.js\u3092\u4f7f\u3048\u3070\u3001\u3042\u3089\u3086\u308bWeb\u30d6\u30e9\u30a6\u30b6\u3092\u30aa\u30fc\u30d7\u30f3\u306aBIM\u30a2\u30d7\u30ea\u306b\u5909\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3059\u3002"))},{icon:"\ud83c\udfe2",content:(0,a.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067IFC\u30d5\u30a1\u30a4\u30eb\u3092\u51e6\u7406\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30e2\u30d0\u30a4\u30eb\u6a5f\u5668\u3067\u306f\u3001\u8907\u6570\u306e\u4e2d\u898f\u6a21\u307e\u305f\u306f\u5927\u898f\u6a21\u306aIFC\u3092\u8868\u793a\u3059\u308b\u30d1\u30ef\u30fc\u304c\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u306f\u3001",(0,a.kt)("a",{href:"https://nodejs.org/en/"},"Node.js"),"\u3092\u4ecb\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u4e0a\u3067",(0,a.kt)("b",null,"IFC.js\u3092\u4f7f\u7528\u3057\u3001\u3059\u3067\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u308bThree.js\u306e\u30b7\u30fc\u30f3\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059"),"\u3002")},{icon:"\ud83d\udcbb",content:(0,a.kt)("p",null,"\u6642\u306b\u306f\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306f\u306a\u304f\u3001Windows\u3001iOS\u3001Linux\u4e0a\u3067\u52d5\u4f5c\u3059\u308b",(0,a.kt)("b",null,"\u30cd\u30a4\u30c6\u30a3\u30d6\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),"\u3092\u4f5c\u308a\u305f\u3044\u3068\u601d\u3046\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001",(0,a.kt)("a",{href:"https://www.electronjs.org/"},"Electron"),"\u306e\u3088\u3046\u306a\u6280\u8853\u306e\u304a\u304b\u3052\u3067\u53ef\u80fd\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u3053\u308c\u3089\u306e\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u3058\u3088\u3046\u306b\u3001HTML\u3001CSS\u3001JavaScript\u3001React\u3001Vue\u306a\u3069\u3092\u4f7f\u3063\u3066\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3055\u308c\u307e\u3059")},{icon:"\ud83d\udcf1",content:(0,a.kt)("p",null,"IFC.js\u306f\u3001WebGL\u306e\u30b3\u30fc\u30c9\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u306eOpenGL\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b",(0,a.kt)("a",{href:"https://reactnative.dev/"},"React Native"),"\u3082\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3064\u307e\u308a\u3001Android\u3084iOS\u3067\u52d5\u4f5c\u3059\u308bIFC\u4e92\u63db\u306e",(0,a.kt)("b",null,"Open BIM\u30a2\u30d7\u30ea"),"\u3092\u7c21\u5358\u306b\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3059\u3002")}],mdxType:"IfcTab"}),(0,a.kt)("h3",{id:"\u30b9\u30d4\u30fc\u30c9"},"\u30b9\u30d4\u30fc\u30c9"),(0,a.kt)("p",null,"  \u26a1\ufe0f\nWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u7d4c\u9a13\u304c\u3042\u308b\u65b9\u306f\u3001JavaScript\u30d9\u30fc\u30b9\u306eIFC\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u5f31\u70b9\u306f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3060\u3068\u601d\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3057\u304b\u3057\u3001IFC.js\u306e\u30b3\u30a2\u90e8\u5206\u306f\u3001WebAssembly\u3068",(0,a.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),"\u3092\u7d44\u307f\u5408\u308f\u305b\u305fC\u8a00\u8a9e\u3067\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u7279\u306b",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5927\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"),"\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u3066\u304a\u308a\u3001IFC.js\u306f\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u76f4\u63a5\u5b9f\u884c\u3055\u308c\u306a\u304c\u3089\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u901f\u5ea6\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u8fd1\u3065\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u7279\u5fb4"},"\u7279\u5fb4"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udc53 IFC.js\u306f\u3001IFC\u30d5\u30a1\u30a4\u30eb\u3092\u30b7\u30fc\u30e0\u30ec\u30b9\u306b",(0,a.kt)("b",null,"\u8aad\u307f\u8fbc\u3080"),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfd0 \u30d6\u30e9\u30a6\u30b6\u4e0a\u306760fps\u3067\u52d5\u4f5c\u3059\u308b",(0,a.kt)("b",null,"3D\u30b8\u30aa\u30e1\u30c8\u30ea"),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udc84 Three.js\u306e\u529b\u3067\u30b8\u30aa\u30e1\u30c8\u30ea\u306e",(0,a.kt)("b",null,"\u5916\u89b3"),"\u3092\u7c21\u5358\u306b\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83c\udfe0\ud83c\udfe0\ud83c\udfe0 \u9023\u643a\u3057\u305f",(0,a.kt)("b",null,"\u8907\u6570"),"\u306eIFC\u30e2\u30c7\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\ud83d\udcc3 \u30ec\u30dd\u30fc\u30c8\u3084\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e",(0,a.kt)("b",null,"IFC\u30d7\u30ed\u30d1\u30c6\u30a3"),"\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,a.kt)(l.M,{mdxType:"IfcCard"},"\u270d \u307e\u305f\u3001IFC.js\u306fIFC\u30d5\u30a1\u30a4\u30eb\u3092\u4e00\u304b\u3089",(0,a.kt)("b",null,"\u7de8\u96c6\u30fb\u66f8\u304d\u8fbc\u307f"),"\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"IFC.js\u306f\u5927\u898f\u6a21\u306a\u591a\u8a00\u8a9e\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\uff08C++ , TypeScript JavaScript\u306a\u3069\uff09\u3002\u305d\u308c\u3092\u4e00\u3064\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u53ce\u3081\u308b\u306e\u306f\u96e3\u3057\u304f\u3001\u6271\u3044\u306b\u304f\u3044\u3082\u306e\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u8907\u6570\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u5b58\u5728\u3057\u3001\u305d\u308c\u305e\u308c\u304c\u72ec\u81ea\u306e\u76ee\u7684\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u3089\u306f",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IFCjs"},"\u3053\u3053"),"\u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)(k,{items:[{name:"web-ifc",link:"https://github.com/tomvandig/web-ifc",content:(0,a.kt)("p",null,"\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u4e2d\u6838\u3068\u306a\u308b\u306e\u306f\u3001C\u8a00\u8a9e\u3067\u30bc\u30ed\u304b\u3089\u66f8\u304b\u308c\u3001Emscripten\u3092\u4ecb\u3057\u3066WebAssembly\u306b\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305fIFC\u306e",(0,a.kt)("b",null,"\u30d1\u30fc\u30b5\u30fc\u3068\u30b8\u30aa\u30e1\u30c8\u30ea\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf"),"\u3067\u3059\u3002\u3053\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f\u3001IFC \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u305d\u306e\u30c7\u30fc\u30bf\u3092\u30e1\u30e2\u30ea\u306b\u30ed\u30fc\u30c9\u3059\u308b\u3068\u3044\u3046\u8907\u96d1\u306a\u4f5c\u696d\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3057\u3066\u3044\u307e\u3059\u3002")},{name:"web-ifc-three",link:"https://github.com/IFCjs/web-ifc-three",content:(0,a.kt)("p",null,"web-ifc\u3092Three.js\u306b\u9069\u5fdc\u3055\u305b\u3001\u30e6\u30fc\u30b6\u30fc\u304cIFC\u3068\u76f4\u63a5\u5bfe\u8a71\u3067\u304d\u308b",(0,a.kt)("b",null,"\u6700\u9069\u5316\u3055\u308c\u305f3D\u30b7\u30fc\u30f3"),"\u3092\u751f\u6210\u3059\u308b\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u3001",(0,a.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"\u516c\u5f0f\u306eThree.js IFC Loader"),"\u3067\u3059\u3002\u3053\u306e\u30a2\u30c0\u30d7\u30bf\u30fc\u306e\u304a\u304b\u3052\u3067\u3001Three.js\u3092\u4f7f\u3063\u3066\u30aa\u30fc\u30d7\u30f3\u306aBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u308f\u305a\u304b2\u884c\u306e\u30b3\u30fc\u30c9\u3067\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")},{name:"web-ifc-viewer",link:"https://github.com/IFCjs/web-ifc-viewer",content:(0,a.kt)("p",null,"\u3053\u308c\u306f\u30d6\u30e9\u30a6\u30b6\u30d9\u30fc\u30b9\u306e",(0,a.kt)("a",{href:"https://ifcjs.github.io/web-ifc-viewer/example/index"},"IFC\u30d3\u30e5\u30fc\u30a2"),"\u3067\u3001",(0,a.kt)("b",null,"IFC.js\u3067\u3067\u304d\u308b\u3053\u3068\u306e\u591a\u304f\u306e\u4f8b"),"\u304c\u3042\u308a\u307e\u3059\u3002\u30b7\u30fc\u30f3\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u5909\u66f4\u3001\u30af\u30ea\u30c3\u30af\u306b\u3088\u308b\u8981\u7d20\u306e\u9078\u629e\u3001\u30bb\u30af\u30b7\u30e7\u30f3\u30d7\u30e9\u30f3\u306a\u3069\u3002\u3053\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u306f\u3001\u3053\u308c\u3089\u3059\u3079\u3066\u306e\u6a5f\u80fd\u6027\u306e\u4f8b\u304c\u3042\u308b\u306e\u3067\u3001\u30aa\u30fc\u30d7\u30f3\u306aBIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3050\u306b\u518d\u5229\u7528\u3067\u304d\u307e\u3059\u3002")}],mdxType:"IfcTab"}),(0,a.kt)("h2",{id:"\u8ca2\u732e\u3059\u308b"},"\u8ca2\u732e\u3059\u308b"),(0,a.kt)("p",null,"IFC.js\u3067\u30aa\u30fc\u30d7\u30f3BIM\u958b\u767a\u306e\u4e16\u754c\u3092\u3069\u3093\u3069\u3093\u826f\u304f\u3057\u3066\u3044\u304d\u305f\u3044\u3068\u601d\u3044\u307e\u305b\u3093\u304b\uff1f\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u5927\u304d\u3044\u306e\u3067\u3001\u3069\u3053\u306b\u53c2\u52a0\u3057\u305f\u3044\u304b\u3092\u9078\u629e\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(l.M,{icon:"\ud83e\udd1d",title:"\u30b3\u30fc\u30c9\u306f\u66f8\u3051\u306a\u3044\u3051\u3069\u3001\u5165\u3063\u3066\u307f\u305f\u3044",mdxType:"IfcCard"},"\u305d\u308c\u306f\u3044\u3044\u3067\u3059\u306d\u3002\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4ee5\u5916\u306b\u3082\u3001\u3067\u304d\u308b\u3053\u3068\u306f\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\u30c1\u30e3\u30f3\u30cd\u30eb"),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)(l.M,{icon:"\ud83e\udde0",title:"\u30d1\u30fc\u30b7\u30f3\u30b0\u3001\u30b8\u30aa\u30e1\u30c8\u30ea\u3001C++",mdxType:"IfcCard"},"C++ , WebAssembly, \u30d1\u30fc\u30b7\u30f3\u30b0\u3084IFC\u306e\u7d30\u304b\u3044\u90e8\u5206\u306b\u60c5\u71b1\u3092\u6301\u3063\u3066\u3044\u308b\u65b9\u306f\u3001\u696d\u754c\u6700\u901f\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9BIM\u30d1\u30fc\u30b5\u30fc\u3067\u79c1\u305f\u3061\u3092\u52a9\u3051\u3066\u304f\u3060\u3055\u3044\u3002",(0,a.kt)("a",{href:"https://github.com/tomvandig/web-ifc"},"web-ifc"),"\u3067\u3059\u3002"),(0,a.kt)(l.M,{icon:"\u2728",title:"Three.js\u3001\u30b8\u30aa\u30e1\u30c8\u30ea\u3001Typescript",mdxType:"IfcCard"},"\u3042\u306a\u305f\u304cThree.js\u306e\u958b\u767a\u8005\u3067\u3042\u308c\u3070\u3001",(0,a.kt)("a",{href:"https://github.com/IFCjs/web-ifc-three"},"web-ifc-three"),",which is ",(0,a.kt)("a",{href:"https://threejs.org/examples/webgl_loader_ifc.html"},"\u306f\u3001\u516c\u5f0f\u306eThree.js IFC Loader"),"\u3067\u3059\u3002"),(0,a.kt)(l.M,{icon:"\ud83c\udf08",title:"BIM\u30c4\u30fc\u30eb\u3001\u30d6\u30ec\u30a4\u30f3\u30b9\u30c8\u30fc\u30df\u30f3\u30b0\u3001UX",mdxType:"IfcCard"},"\u30af\u30fc\u30eb\u306a\u30aa\u30fc\u30d7\u30f3BIM\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u306b\u8208\u5473\u304c\u3042\u308a\u3001BIM\u30c4\u30fc\u30eb\u3084\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u306e\u7d20\u6674\u3089\u3057\u3044\u30a2\u30a4\u30c7\u30a2\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3001",(0,a.kt)("a",{href:"https://github.com/IFCjs/web-ifc-viewer"},"web-ifc-viewer"),"\u3092\u5e02\u5834\u3067\u6700\u9ad8\u306eIFC\u30d3\u30e5\u30fc\u30a2\u306b\u3059\u308b\u305f\u3081\u306b\u3054\u5354\u529b\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u3044\u305a\u308c\u306b\u3057\u3066\u3082\u3001",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/g7Uzn2KSwB"},"Discord\u30c1\u30e3\u30f3\u30cd\u30eb"),"\u306b\u7acb\u3061\u5bc4\u3063\u3066\u3044\u305f\u3060\u304d\u3001\u3054\u6328\u62f6\u3092\u3057\u3066\u3001\u6c17\u306b\u306a\u308b\u3053\u3068\u3092\u6559\u3048\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u3001\u3054\u6848\u5185\u304c\u3067\u304d\u308b\u3068\u601d\u3044\u307e\u3059\u3002"))}j.isMDXComponent=!0}}]);