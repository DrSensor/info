(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7107],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3878:function(e,t,a){"use strict";a.d(t,{r:function(){return l}});var n=a(7294),r="icon_1PGw",i=a(9205),l=function(e){return n.createElement("div",{className:"alert alert--primary",role:"alert",style:{margin:"2rem"}},n.createElement("div",{className:r},n.createElement(i.A,{icon:"\ud83d\udca1",active:"true"})),e.children)}},983:function(e,t,a){"use strict";a.d(t,{M:function(){return o}});var n=a(7294),r=a(9205),i="titleOffset_2I3u",l="iconContainer_1xRA",o=function(e){var t=e.title?n.createElement("div",{className:"card__header"},n.createElement("span",{className:l},e.icon&&n.createElement(r.A,{icon:e.icon,link:e.link,active:"true"})),n.createElement("h3",{className:e.icon&&i},e.title)):"";return n.createElement("div",{className:"card-demo",style:{margin:"2rem"}},n.createElement("div",{className:"card"},t,n.createElement("div",{className:"card__body"},n.createElement("p",null," ",e.children," "))))}},9205:function(e,t,a){"use strict";a.d(t,{A:function(){return p}});var n=a(7294),r="hidden_2JtY",i="iconContainer_2Rnc",l="visible_2147",o="link_Lh4h",s="clickable_3vcc",p=function(e){var t=" "+(e.active?l:r),a=o+" "+(e.link&&s);return n.createElement("div",{className:i+t},n.createElement("a",{href:e.link,className:a},e.icon||"\ud83d\ude80"))}},5623:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(983),o=a(3878),s=["components"],p={title:"API",sidebar_position:3},m={unversionedId:"Guide/web-ifc-three/api",id:"Guide/web-ifc-three/api",isDocsHomePage:!1,title:"API",description:"The list of awesome things you can do with web-ifc-three",source:"@site/docs/Guide/web-ifc-three/api.mdx",sourceDirName:"Guide/web-ifc-three",slug:"/Guide/web-ifc-three/api",permalink:"/info/docs/Guide/web-ifc-three/api",version:"current",sidebarPosition:3,frontMatter:{title:"API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/info/docs/Guide/web-ifc-three/Setup"},next:{title:"\ud83e\udd0f Picking",permalink:"/info/docs/Guide/web-ifc-three/Tutorials/Picking"}},d=[{value:"The list of awesome things you can do with web-ifc-three",id:"the-list-of-awesome-things-you-can-do-with-web-ifc-three",children:[]},{value:"IfcLoader",id:"ifcloader",children:[]},{value:"\ud83e\uddf0 Setup",id:"\ud83e\uddf0-setup",children:[{value:"setWasmPath",id:"setwasmpath",children:[]},{value:"setupThreeMeshBVH",id:"setupthreemeshbvh",children:[]}]},{value:"\ud83d\udd0d Getters",id:"-getters",children:[{value:"getExpressId",id:"getexpressid",children:[]},{value:"getIfcType",id:"getifctype",children:[]},{value:"getAllItemsOfType",id:"getallitemsoftype",children:[]},{value:"getItemProperties",id:"getitemproperties",children:[]},{value:"getTypeProperties",id:"gettypeproperties",children:[]},{value:"getPropertySets",id:"getpropertysets",children:[]},{value:"getMaterialsProperties",id:"getmaterialsproperties",children:[]},{value:"getSpatialStructure",id:"getspatialstructure",children:[]}]},{value:"\ud83e\uddf1 Subsets",id:"\ud83e\uddf1-subsets",children:[{value:"getSubset",id:"getsubset",children:[]},{value:"createSubset",id:"createsubset",children:[]},{value:"removeSubset",id:"removesubset",children:[]}]},{value:"\ud83d\udc53 Visibility",id:"-visibility",children:[{value:"hideItems",id:"hideitems",children:[]},{value:"hideAllItems",id:"hideallitems",children:[]},{value:"showItems",id:"showitems",children:[]},{value:"showAllItems",id:"showallitems",children:[]}]}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-list-of-awesome-things-you-can-do-with-web-ifc-three"},"The list of awesome things you can do with web-ifc-three"),(0,i.kt)("p",null,"  \ud83d\udcc3\nAll APIs are documented, so when you use any of the objects or methods seen in this documentation, you should see help in Intellisense, regardless of the IDE you are using. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/web-ifc-three/blob/main/src/IFC/Components/IFCManager.ts"},"Check it out!")),(0,i.kt)("p",null,"  \ud83d\udc69\u200d\ud83c\udfeb\nHowever, we realise that reading intellisense or comments is not the most comfortable thing to do, so on this page we will make an overview of what the API can do. Everything will be covered in more detail in specific tutorials later on."),(0,i.kt)("h2",{id:"ifcloader"},"IfcLoader"),(0,i.kt)("p",null,"  \ud83d\udc8e\nThe only object we will import from the library. It contains all the logic needed to work with IFC. You can use its ",(0,i.kt)("inlineCode",{parentName:"p"},"load()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"loadAsync()")," methods to load IFCs from a URL, ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/loaders/Loader.load"},"just like any other Three.js Loader"),". For example, to load an IFC we can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { IFCLoader } from "web-ifc-three/IFCLoader";\n\nconst ifcLoader = new IFCLoader();\nifcLoader.load(\n    "models/Example_model.ifc",\n    (ifcModel) => scene.add(ifcModel.mesh));\n')),(0,i.kt)("p",null,"  \ud83c\udfe0\ud83c\udfe0\ud83c\udfe0\nWith ",(0,i.kt)("inlineCode",{parentName:"p"},"web-ifc-three")," you can load multiple models in the scene. Many of the API operations are executed on a specified model. To express on which model we want to operate we have to give its ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelID"),"."),(0,i.kt)("p",null,"  \ud83d\udd0d\nYou can get the ID of a model through the property ",(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," of the generated meshes. We add this property to ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/objects/Mesh"},"Three.js default mesh"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const modelID = ifcModel.mesh.modelID;\n")),(0,i.kt)("p",null,"  \u270c\nThere are two ways to access the API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Through the instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"IfcModel")," that the ",(0,i.kt)("inlineCode",{parentName:"p"},"IfcLoader")," generates with ",(0,i.kt)("inlineCode",{parentName:"p"},"load")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"loadAsync"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Through ",(0,i.kt)("inlineCode",{parentName:"p"},"IfcLoader.IfcManager"),"."))),(0,i.kt)(o.r,{mdxType:"IfcAlert"},"Both ",(0,i.kt)("b",null,"IfcModel")," instances and ",(0,i.kt)("b",null,"IfcLoader.IfcManager")," can be used interchangeably to access the API. There's one difference: when using ",(0,i.kt)("b",null,"IfcModel"),", the ModelID never has to be given as an argument (it's known implicitly)."),(0,i.kt)("h2",{id:"\ud83e\uddf0-setup"},"\ud83e\uddf0 Setup"),(0,i.kt)("h3",{id:"setwasmpath"},"setWasmPath"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.setWasmPath (\n                        path: string\n                        ): void;\n")),(0,i.kt)("p",null,"  \ud83e\udde0\nSpecifies the location of the web-ifc.wasm file. This file is the web-ifc file and is required to create any application with IFC.js. You can find it in node_modules/web-ifc/web-ifc.wasm."),(0,i.kt)(l.M,{icon:"\ud83d\udea7",title:"Careful with your tooling!",mdxType:"IfcCard"},"If you use frameworks or libraries like React, Angular, Vue or Svelte it is possible that the root path of the project doesn't correspond to the root path of the served application. You will have to check in ",(0,i.kt)("a",{href:"https://github.com/IFCjs/examples"},"each case")," how the paths of the statically served files are managed."),(0,i.kt)("h4",{id:"arguments"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," Route of ",(0,i.kt)("inlineCode",{parentName:"li"},"web-ifc.wasm"),".")),(0,i.kt)("h4",{id:"example"},"Example:"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"web-ifc.wasm")," is in dist/wasmDir:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  ifcLoader.setWasmPath("dist/wasmDir/");\n')),(0,i.kt)("h3",{id:"setupthreemeshbvh"},"setupThreeMeshBVH"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  ifcLoader.IfcManager.setupThreeMeshBVH (\n                        computeBoundsTree: any,\n                        disposeBoundsTree: any,\n                        acceleratedRaycast: any\n                        ): void;\n")),(0,i.kt)("p",null,"  \u26a1\u26a1\u26a1\nThis method allows object picking to be much faster, especially for very large models with heavy geometry. This method actually allows IFC.js to use the Garrett Johnson's amazing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh"},"library "),". u can install it with ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i three-mesh-bvh")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add three-mesh-bvh"),"."),(0,i.kt)(l.M,{mdxType:"IfcCard"},"\u261d Using this method not mandatory, but if you want to be able to select objects in medium / large IFC models at 60 fps, it's necessary."),(0,i.kt)("h4",{id:"arguments-1"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"computeBoundsTree")," Pre-made BufferGeometry extension function that builds a new BVH, assigns it to boundsTree, and applies the new index buffer to the geometry. - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh#computeboundstree"},"source"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disposeBoundsTree")," BufferGeometry extension function that disposes of the BVH. - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh#disposeboundstree"},"source"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"acceleratedRaycast"),"  Accelerated raycast function with the same signature as THREE.Mesh.raycast. Uses the BVH for raycasting if it's available otherwise it falls back to the built-in approach. - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gkjohnson/three-mesh-bvh#acceleratedraycast"},"source"),"."))),(0,i.kt)("h4",{id:"example-1"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n    IFCLoader\n} from 'web-ifc-three/dist/IFCLoader';\n\nimport {\n    acceleratedRaycast,\n    computeBoundsTree,\n    disposeBoundsTree\n} from 'three-mesh-bvh';\n\nconst ifcLoader = new IFCLoader();\nifcLoader.ifcManager.setupThreeMeshBVH(\n    acceleratedRaycast,\n    computeBoundsTree,\n    disposeBoundsTree);\n")),(0,i.kt)("h2",{id:"-getters"},"\ud83d\udd0d Getters"),(0,i.kt)("h3",{id:"getexpressid"},"getExpressId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getExpressId (\n                        geometry: BufferGeometry,\n                        faceIndex: number\n                        ): number;\n")),(0,i.kt)("p",null,"  \ud83d\udcb3\nGets the Express ID of an IFC element from a face index."),(0,i.kt)(l.M,{icon:"\ud83d\udcdc",title:"Why a face index?",mdxType:"IfcCard"},"Because when we select an object in 3d space with the mouse we get the index of that face. We usually want the ID of the object where that face belongs to in order to highlight it, isolate it or get all its properties."),(0,i.kt)("h4",{id:"arguments-2"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"geometry")," ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/BufferGeometry"},"Geometry")," of the model you clicked on with the mouse.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"faceIndex")," Index of the face intersected with the ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"raycaster"),". If you are not familiar with the raycaster, don't worry; we'll cover this in detail in the tutorial about picking."))),(0,i.kt)("h4",{id:"example-2"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const intersected = raycaster.intersectObject(mesh)[0];\n  const index = intersected.faceIndex;\n  const id = ifcLoader.ifcManager.getExpressId(mesh, index);\n")),(0,i.kt)("h3",{id:"getifctype"},"getIfcType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getIfcType (\n                        modelID: number,\n                        id: number,\n                        ): string;\n")),(0,i.kt)("p",null,"\ud83c\udfb8\ud83e\ude95\ud83c\udfbb\nGets the IFC type of the specified element (e.g. IFCWALL)."),(0,i.kt)(o.r,{mdxType:"IfcAlert"},"Elements in IFC always have an associated type: IfcWall, IfcSlab, IfcWindow, IfcDoor, etc."),(0,i.kt)("h4",{id:"arguments-3"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," Express ID of the item whose properties to obtain. You can get this either with ",(0,i.kt)("inlineCode",{parentName:"p"},"getExpressId")," (if you are picking an object in the 3d view) or traversing the model with ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getSpatialStructure"),"."))),(0,i.kt)("h4",{id:"example-3"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  const type = manager.getIfcType(model, id);\n")),(0,i.kt)("h3",{id:"getallitemsoftype"},"getAllItemsOfType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getAllItemsOfType (\n                            modelID: number,\n                            type: number,\n                            verbose: boolean\n                            ): number[] | object[];\n")),(0,i.kt)("p",null,"  \ud83c\udfb8\ud83c\udfb8\ud83c\udfb8\nReturns all objects of the specified IFC type (e.g. all walls, all floors, all windows, etc.) of a specific model. It can return an array of ",(0,i.kt)("inlineCode",{parentName:"p"},"expressIDs"),", or (if ",(0,i.kt)("inlineCode",{parentName:"p"},"verbose = true"),") an array of objects containing the properties of the items found."),(0,i.kt)("h4",{id:"arguments-4"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")," IFC type of the elements you want to get. You can import these types directly from ",(0,i.kt)("inlineCode",{parentName:"p"},"web-ifc")," (see example below).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"verbose")," If true, gets the properties of all the items found. Be careful, as this can be a slow operation in bigger models."))),(0,i.kt)("h4",{id:"example-4"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  import { IFCWALLSTANDARDCASE as W } from 'web-ifc';\n\n  const manager = loader.ifcLoader.ifcManager;\n  const walls = manager.getAllItemsOfType(0, W, false);\n")),(0,i.kt)("h3",{id:"getitemproperties"},"getItemProperties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getItemProperties (\n                            modelID: number,\n                            id: number,\n                            recursive = false\n                            ): object[];\n")),(0,i.kt)("p",null,"  \ud83d\udcd5\ud83d\udd0d\nGets the native properties of the given element. In the IFC schema there are two types of properties: direct and indirect. How to obtain the indirect properties (psets, qsets and type properties) will be discussed later."),(0,i.kt)(o.r,{mdxType:"IfcAlert"},"All methods related to properties return an array of objects where the keys are the name of the properties and the values are their values."),(0,i.kt)("h4",{id:"arguments-5"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," Express ID of the item whose properties to obtain. You can get this either with ",(0,i.kt)("inlineCode",{parentName:"p"},"getExpressId")," (if you are picking an object in the 3d view) or traversing the model with ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getSpatialStructure"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"recursive")," If true, gets the properties of all the referenced elements recursively. Be careful, as this can be a slow operation in bigger models."))),(0,i.kt)("h4",{id:"example-5"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  const props = manager.getItemProperties(model, id, false);\n")),(0,i.kt)("h3",{id:"gettypeproperties"},"getTypeProperties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getTypeProperties (\n                            modelID: number,\n                            id: number,\n                            recursive = false\n                            ): number[] | object[];\n")),(0,i.kt)("p",null,"  \ud83d\udcd8\ud83d\udd0d\nGets the type properties of the given element."),(0,i.kt)("h4",{id:"arguments-6"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," Express ID of the item whose properties to obtain. You can get this either with ",(0,i.kt)("inlineCode",{parentName:"p"},"getExpressId")," (if you are picking an object in the 3d view) or traversing the model with ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getSpatialStructure"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"recursive")," If true, gets the properties of all the referenced elements recursively. Be careful, as this can be a slow operation in bigger models."))),(0,i.kt)("h4",{id:"example-6"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  const props = manager.getTypeProperties(model, id, false);\n")),(0,i.kt)("h3",{id:"getpropertysets"},"getPropertySets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getPropertySets (\n                            modelID: number,\n                            id: number,\n                            recursive = false\n                            ): object[];\n")),(0,i.kt)("p",null,"\ud83d\udcd7\ud83d\udd0d\nGets the property sets and quantity sets of the given element."),(0,i.kt)(l.M,{icon:"\ud83d\udcc3",title:"Property sets?",mdxType:"IfcCard"},"Native and type properties are those that are predefined by the IFC schema: they always contain the same information. Property sets, on the other hand, are arbitrary and can be defined by the user."),(0,i.kt)("h4",{id:"arguments-7"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," Express ID of the item whose properties to obtain. You can get this either with ",(0,i.kt)("inlineCode",{parentName:"p"},"getExpressId")," (if you are picking an object in the 3d view) or traversing the model with ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getSpatialStructure"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"recursive")," If true, gets the properties of all the referenced elements recursively. Be careful, as this can be a slow operation in bigger models."))),(0,i.kt)("h4",{id:"example-7"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  const props = manager.getPropertySets(model, id, false);\n")),(0,i.kt)("h3",{id:"getmaterialsproperties"},"getMaterialsProperties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getMaterialsProperties (\n                            modelID: number,\n                            id: number,\n                            recursive = false\n                            ): object[];\n")),(0,i.kt)("p",null,"\ud83d\udcd2\ud83d\udd0d\nGets the material information of the given element."),(0,i.kt)("h4",{id:"arguments-8"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"id")," Express ID of the item whose properties to obtain. You can get this either with ",(0,i.kt)("inlineCode",{parentName:"p"},"getExpressId")," (if you are picking an object in the 3d view) or traversing the model with ",(0,i.kt)("inlineCode",{parentName:"p"},"getAllItemsOfType")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"getSpatialStructure"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"recursive")," If true, gets the properties of all the referenced elements recursively. Be careful, as this can be a slow operation in bigger models."))),(0,i.kt)("h4",{id:"example-8"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  const props = manager.getMaterialsProperties(model, id, false);\n")),(0,i.kt)("h3",{id:"getspatialstructure"},"getSpatialStructure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getSpatialStructure (\n                        modelID: number\n                        ): object;\n")),(0,i.kt)("p",null,"  \ud83d\udd17\ud83d\udd17\ud83d\udd17\nGets the spatial structure of the project."),(0,i.kt)(o.r,{mdxType:"IfcAlert"},"The ",(0,i.kt)("a",{href:"https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcproductextension/lexical/ifcspatialstructureelement.htm"},"spatial structure")," is the hierarchical structure that organizes every IFC project (all physical items are referenced to an element of the spatial structure)."),(0,i.kt)("h4",{id:"arguments-9"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modelID")," ID of the IFC model.")),(0,i.kt)("h4",{id:"example-9"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  const ifcProject = manager.getSpatialStructure(model);\n")),(0,i.kt)("h2",{id:"\ud83e\uddf1-subsets"},"\ud83e\uddf1 Subsets"),(0,i.kt)("h3",{id:"getsubset"},"getSubset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.getSubset (\n                        modelID: number,\n                        material?: Material\n                        ): object;\n")),(0,i.kt)("p",null,"  \ud83e\uddf1\ud83d\udd0d\nGets the mesh of the subset with the specified ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/materials/Material"},"material"),". If no material is given, this returns the subset with the original materials."),(0,i.kt)(o.r,{mdxType:"IfcAlert"},"Geometric subsets are extracts of the geometry of the model. For example, you could extract a subset with all the IfcDoors and IfcWindows that meet a certain condition and highlight or export them."),(0,i.kt)("h4",{id:"arguments-10"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"material")," (optional) Material assigned to the subset (if any)."))),(0,i.kt)("h4",{id:"example-10"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  const subset = manager.getSubset(model);\n")),(0,i.kt)("h3",{id:"createsubset"},"createSubset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.createSubset (\n                        config: HighlightConfigOfModel\n                        ): object;\n")),(0,i.kt)("p",null,"\ud83e\uddf1\u2728\nCreates a new geometric subset."),(0,i.kt)("h4",{id:"arguments-11"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"config")," A configuration object with the following options:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"scene")," Scene where the model is located.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ids")," Express IDs of the items of the model that will conform the subset.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"removePrevious")," Wether to remove the previous subset of this model with this material.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"material")," (optional) Material to apply to the subset. If no material is given, the subset has the original material."))))),(0,i.kt)("h4",{id:"example-11"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  const config = {\n        modelID: model\n        scene: scene,\n        ids: [id],\n        removePrevious: true\n  }\n  manager.createSubset(config);\n")),(0,i.kt)("h3",{id:"removesubset"},"removeSubset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.removeSubset (\n                        modelID: number,\n                        scene?: Scene,\n                        material?: Material\n                        ): object;\n")),(0,i.kt)("p",null,"  \ud83e\uddf1\ud83d\udca3\nRemoves the specified geometric subset."),(0,i.kt)("h4",{id:"arguments-12"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"scene")," (optional) Scene where the subset is located.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"material")," (optional) Material assigned to the subset (if any)."))),(0,i.kt)("h4",{id:"example-12"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  manager.removeSubset(model);\n")),(0,i.kt)("h2",{id:"-visibility"},"\ud83d\udc53 Visibility"),(0,i.kt)("h3",{id:"hideitems"},"hideItems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.hideItems (\n                        modelID: number,\n                        ids: number[]\n                        ): void;\n")),(0,i.kt)("p",null,"  \ud83c\udf12\nHides the selected items in the specified model."),(0,i.kt)("h4",{id:"arguments-13"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ids")," Express ID of the elements."))),(0,i.kt)("h4",{id:"example-13"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  manager.hideItems(model, [id]);\n")),(0,i.kt)("h3",{id:"hideallitems"},"hideAllItems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.hideAllItems (\n                        modelID: number\n                        ): void;\n")),(0,i.kt)("p",null,"  \ud83c\udf12\ud83c\udf12\ud83c\udf12\nHides all the items of the specified model."),(0,i.kt)("h4",{id:"arguments-14"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modelID")," ID of the IFC model.")),(0,i.kt)("h4",{id:"example-14"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  manager.hideAllItems(model);\n")),(0,i.kt)("h3",{id:"showitems"},"showItems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.showItems(\n                        modelID: number,\n                        ids: number[]\n                        ): void;\n")),(0,i.kt)("p",null,"  \ud83c\udf16\nShows the selected items in the specified model."),(0,i.kt)("h4",{id:"arguments-15"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modelID")," ID of the IFC model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ids")," Express ID of the elements."))),(0,i.kt)("h4",{id:"example-15"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const id = 2142;\n  const manager = loader.ifcLoader.ifcManager;\n  manager.showItems(model, [id]);\n")),(0,i.kt)("h3",{id:"showallitems"},"showAllItems"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  IfcLoader.IfcManager.showAllItems(\n                        modelID: number\n                        ): void;\n")),(0,i.kt)("p",null,"  \ud83c\udf16\ud83c\udf16\ud83c\udf16\nShows all the items of the specified model."),(0,i.kt)("h4",{id:"arguments-16"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modelID")," ID of the IFC model.")),(0,i.kt)("h4",{id:"example-16"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const model = ifcModel.mesh.modelID;\n  const manager = loader.ifcLoader.ifcManager;\n  manager.showAllItems(model);\n")))}u.isMDXComponent=!0}}]);