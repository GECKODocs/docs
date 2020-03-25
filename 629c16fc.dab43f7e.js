(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),a=(r(0),r(138)),c=r(137),i={id:"rep1",title:"Reports",sidebar_label:"Reports"},p={id:"rep1",title:"Reports",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs\\rep1.md",permalink:"/docs/docs/rep1",sidebar_label:"Reports",sidebar:"someSidebar",previous:{title:"Calendar",permalink:"/docs/docs/cal1"},next:{title:"Audits Overview",permalink:"/docs/docs/dlt1"}},u=[{value:"Reports",id:"reports",children:[]}],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"reports"},"Reports"),Object(a.b)("p",null,"Generate/Run Reports by selecting a project and an individual user via drop down menus"),Object(a.b)("p",null,"Select Generate when you are happy to run a report based on the data selected"),Object(a.b)("p",null,"Generated report (below)"),Object(a.b)("img",{alt:"Reports",src:Object(c.a)("img/report.png")}),Object(a.b)("p",null,"You can click \u2018Return\u2019 to go back to \u2018Task Reports\u2019 and run another report"),Object(a.b)("img",{alt:"Reports",src:Object(c.a)("img/reportUser.png")}),Object(a.b)("p",null,"Or you can export the report in ",Object(a.b)("strong",{parentName:"p"},"PDF")," format too."))}l.isMDXComponent=!0},136:function(e,t,r){"use strict";var n=r(0),o=r(35);t.a=function(){return Object(n.useContext)(o.a)}},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(136);function o(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,f=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(f,i({ref:t},u,{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);