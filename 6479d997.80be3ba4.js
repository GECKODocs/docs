(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),c=(r(0),r(176)),i=r(177),a={id:"fol1",title:"Document Repository Overview",sidebar_label:"Document Repository"},s={id:"fol1",title:"Document Repository Overview",description:"## Folder Structure",source:"@site/docs/fol1.md",permalink:"/docs/docs/fol1",sidebar_label:"Document Repository",sidebar:"someSidebar",previous:{title:"Audits Overview",permalink:"/docs/docs/dlt1"},next:{title:"Users",permalink:"/docs/docs/usr1"}},u=[{value:"Folder Structure",id:"folder-structure",children:[]}],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"folder-structure"},"Folder Structure"),Object(c.b)("p",null,"The Document Repository allows you to ",Object(c.b)("strong",{parentName:"p"},"access and download digitally stored documents")," that relate to specific tasks within your processes."),Object(c.b)("p",null,"Documents are stored within a folder structure. You can ",Object(c.b)("strong",{parentName:"p"},"quickly drill down to find the documents")," you require."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"How do I access the Document Repository?")),Object(c.b)("p",null,"You can access the Document Repository by ",Object(c.b)("strong",{parentName:"p"},"clicking on the \u2018Folders\u2019 tab")," on the main navigation. To find specific files or documents you first ",Object(c.b)("strong",{parentName:"p"},"select a Project")," and then ",Object(c.b)("strong",{parentName:"p"},"select the specific task")," that the documents relate to."),Object(c.b)("p",null,"All documentation uploaded to that task will be displayed."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": Task visibility is based on user permissions."),Object(c.b)("img",{alt:"Folder",src:Object(i.a)("img/folder.png")}))}p.isMDXComponent=!0},175:function(e,t,r){"use strict";var n=r(0),o=r(52);t.a=function(){return Object(n.useContext)(o.a)}},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return r?o.a.createElement(b,a({ref:t},u,{components:r})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(178);var n=r(175);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},178:function(e,t,r){"use strict";var n=r(12),o=r(24),c=r(179),i="".startsWith;n(n.P+n.F*r(180)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},179:function(e,t,r){var n=r(77),o=r(25);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},180:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);