(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6106],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4973:function(e,t,r){"use strict";r.d(t,{Z:function(){return p},I:function(){return u}});var n=r(7294),o=/{\w+}/g,a="{}";function s(e,t){var r=[],s=e.replace(o,(function(e){var o=e.substr(1,e.length-2),s=null==t?void 0:t[o];if(void 0!==s){var i=n.isValidElement(s)?s:String(s);return r.push(i),a}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?s.split(a).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):s.split(a).reduce((function(e,t,o){return[].concat(e,[n.createElement(n.Fragment,{key:o},t,r[o])])}),[])}function i(e){return s(e.children,e.values)}var c=r(4644);function l(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function u(e,t){var r,n=e.message;return s(null!==(r=l({message:n,id:e.id}))&&void 0!==r?r:n,t)}function p(e){var t,r=e.children,o=e.id,a=e.values,s=null!==(t=l({message:r,id:o}))&&void 0!==t?t:r;return n.createElement(i,{values:a},s)}},983:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(7294),o=r(9205),a="titleOffset_2I3u",s="iconContainer_1xRA",i=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:s},e.icon&&n.createElement(o.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&a},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,r){"use strict";r.d(t,{A:function(){return l}});var n=r(7294),o="hidden_2JtY",a="iconContainer_2Rnc",s="visible_2147",i="link_Lh4h",c="clickable_3vcc",l=function(e){var t=" "+(e.active?s:o),r=i+" "+(e.link&&c);return n.createElement("div",{className:a+t},n.createElement("a",{href:e.link,className:r},e.icon||"\ud83d\ude80"))}},5308:function(e,t,r){"use strict";r.d(t,{Q:function(){return a}});var n=r(7294),o=r(4973),a=function(e){return n.createElement("div",null,e.image,n.createElement("a",{target:"_blank",href:e.ifcLink}," ",n.createElement("i",null,function(e){return e.hideSource?null:n.createElement(o.Z,{description:"The source of an image of the blog"},"Source")}(e))," "))}},6649:function(e,t,r){"use strict";r.d(t,{x:function(){return a}});var n=r(7294),o="threeScene_3QXR",a=function(e){return n.createElement("iframe",{className:o,width:"100%",height:"600px",key:Math.random(),src:e.link,frameBorder:"0"})}},329:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=(r(6649),r(983)),i=r(5308),c=["components"],l={title:"Getting started",sidebar_position:0},u={unversionedId:"Courses/Getting-started",id:"Courses/Getting-started",isDocsHomePage:!1,title:"Getting started",description:"Learn BIM development with us",source:"@site/docs/Courses/Getting-started.mdx",sourceDirName:"Courses",slug:"/Courses/Getting-started",permalink:"/info/ja/docs/Courses/Getting-started",version:"current",sidebarPosition:0,frontMatter:{title:"Getting started",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u30cf\u30ed\u30fc\u30ef\u30fc\u30eb\u30c9",permalink:"/info/ja/docs/Hello world"},next:{title:"IFC.js crash course",permalink:"/info/ja/docs/Courses/Crash-course"}},p=[{value:"Learn BIM development with us",id:"learn-bim-development-with-us",children:[]},{value:"Why aren&#39;t these courses free?",id:"why-arent-these-courses-free",children:[]},{value:"How much do they cost?",id:"how-much-do-they-cost",children:[{value:"For non-patreons",id:"for-non-patreons",children:[]},{value:"For patreons",id:"for-patreons",children:[]},{value:"For corporate patreons",id:"for-corporate-patreons",children:[]},{value:"Adaptative discount",id:"adaptative-discount",children:[]}]},{value:"How do I enroll?",id:"how-do-i-enroll",children:[]}],d={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"learn-bim-development-with-us"},"Learn BIM development with us"),(0,a.kt)("p",null,"\ud83c\udf31 Whether you ",(0,a.kt)("strong",{parentName:"p"},"know nothing about programming")," but you'd like to get started or you're an ",(0,a.kt)("strong",{parentName:"p"},"experienced developer")," but would like to take your BIM applications to the next level, we've got you covered!"),(0,a.kt)(i.Q,{hideSource:!0,image:(0,a.kt)("img",{src:r(1632).Z,alt:"PC image"}),alt:"PC image",mdxType:"IfcImage"}),(0,a.kt)("p",null,"\ud83d\ude80 We offer ",(0,a.kt)("strong",{parentName:"p"},"BIM courses for all levels"),". These courses include:"),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udcfa In-depth video lessons in english."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc69\u200d\ud83d\udcbb Scripts of all the theory."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udccb All the commented code."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83d\udc69\u200d\ud83c\udfeb Answers from the teachers."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udfc6 Access to exclusive hackathons."),(0,a.kt)(s.M,{mdxType:"IfcCard"},"\ud83c\udf81 Exclusive IFC.js merchandising."),(0,a.kt)("h2",{id:"why-arent-these-courses-free"},"Why aren't these courses free?"),(0,a.kt)("p",null,"\ud83e\udd1d ",(0,a.kt)("strong",{parentName:"p"},"IFC.js is, and always will be, free for everyone.")," However, in order to keep growing the project, we need funds to organize events, pay project expenses, reward the active community and much more. These courses are a way to get those funds."),(0,a.kt)("p",null,"\ud83c\udf08 ",(0,a.kt)("strong",{parentName:"p"},"The money from the courses is reinvested entirely in the project.")," You can see how we manage the funds in a totally transparent way at ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"Open Collective"),"."),(0,a.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbb ",(0,a.kt)("strong",{parentName:"p"},"Would you like us to spend this money somewhere else?")," You can join the project as ",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/docs/Contribute"},"sponsor")," or ",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/docs/Contribute"},"patreon")," and have a say in where we spend these funds."),(0,a.kt)("h2",{id:"how-much-do-they-cost"},"How much do they cost?"),(0,a.kt)("h3",{id:"for-non-patreons"},"For non-patreons"),(0,a.kt)("p",null,"\ud83e\uddd1 Each course costs ",(0,a.kt)("strong",{parentName:"p"},"$100")," for non-patreons. But that money doesn't go to us, it goes to the project. Therefore, to purchase a course you just need to ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"make a donation of $100 in open collective")," and send us the voucher, as well as the course (or courses) you want to get access to."),(0,a.kt)("h3",{id:"for-patreons"},"For patreons"),(0,a.kt)("p",null,"\ud83e\uddd1\ud83d\udd25 Patreons can purchase courses at a great discount based on their patreon membership. Each uninterrupted month's stay in the patreon discounts all the courses by $15, up to a maximum of $25."),(0,a.kt)("p",null,"\ud83c\udf89 In other words, a community member who commits to stay in the patreon for 6 months can purchase ",(0,a.kt)("strong",{parentName:"p"},"any course for $25"),"."),(0,a.kt)("p",null,"\ud83c\udfc6 In addition, they will have ",(0,a.kt)("strong",{parentName:"p"},"exclusive content")," to which general users do not have access and the power to decide on the subject matter of the next courses."),(0,a.kt)("p",null,"\ud83d\udc9b Of course, patreons also have ",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/docs/Patreon"},"all other advantages included in the patreon tier"),"."),(0,a.kt)("h3",{id:"for-corporate-patreons"},"For corporate patreons"),(0,a.kt)("p",null,"\ud83d\udc68\u200d\ud83d\udcbc\ud83d\udcbc Corporate patreons have ",(0,a.kt)("strong",{parentName:"p"},"free")," access to all courses for up to 20 employees, as well as live webinars from the creators of the library to their development teams, prime support and all other benefits granted by the ",(0,a.kt)("a",{parentName:"p",href:"https://ifcjs.github.io/info/docs/Patreon"},"corporate patreon"),"."),(0,a.kt)("h3",{id:"adaptative-discount"},"Adaptative discount"),(0,a.kt)("p",null,"\ud83e\udd1d We are aware that the world is diverse and not all countries have the same purchasing power. However, ",(0,a.kt)("strong",{parentName:"p"},"we do not want to leave out people due to global economic reasons"),". If the average salary in your country is less than $1000, you can apply the ",(0,a.kt)("strong",{parentName:"p"},"adaptative discount"),"."),(0,a.kt)("p",null,"\ud83d\ude0a This discount gives access to the courses for a price equal to the ",(0,a.kt)("strong",{parentName:"p"},"proportional difference between the average salary in your country and $1000"),". For example, if the average salary is $800, you get a 20% discount. If the average salary is $400, the discount would be 60%."),(0,a.kt)("h2",{id:"how-do-i-enroll"},"How do I enroll?"),(0,a.kt)("p",null,"\ud83d\udea7 The courses are not ready yet! We are working really hard to make them happen as soon as possible. In the meantime, you can ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"become a patreon")," and get a great discount when they get out (as described above). We estimate that they will be released in ",(0,a.kt)("strong",{parentName:"p"},"March"),"."),(0,a.kt)("p",null,"\ud83d\udc4c Once they are released, make a donation to our ",(0,a.kt)("a",{parentName:"p",href:"https://opencollective.com/ifcjs"},"open-collective account")," and we will give you access to everything."))}h.isMDXComponent=!0},1632:function(e,t,r){"use strict";t.Z=r.p+"assets/images/lesson-2b16f54cf0d25be8426670f0f3c79e9a.png"}}]);