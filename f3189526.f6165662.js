(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(138)),c=r(137),i={id:"cal1",title:"Calendar",sidebar_label:"Calendar"},s={id:"cal1",title:"Calendar",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs\\cal1.md",permalink:"/docs/docs/cal1",sidebar_label:"Calendar",sidebar:"someSidebar",previous:{title:"Activity Overview",permalink:"/docs/docs/act1"},next:{title:"Reports",permalink:"/docs/docs/rep1"}},l=[{value:"Calendar",id:"calendar",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"calendar"},"Calendar"),Object(o.b)("p",null,"The Calendar page provides a view of different tasks, their associated ",Object(o.b)("strong",{parentName:"p"},"due date"),", and ",Object(o.b)("strong",{parentName:"p"},"status"),"."),Object(o.b)("p",null,"Tasks displayed on the calendar can be filtered here to view \u201c",Object(o.b)("strong",{parentName:"p"},"My Tasks"),"\u201d - tasks assigned specifically to you - and \u201c",Object(o.b)("strong",{parentName:"p"},"All Tasks"),"\u201d - tasks relating to all users."),Object(o.b)("p",null,"At a \u2018",Object(o.b)("strong",{parentName:"p"},"Superuser"),"\u2019 level, you can drag and drop tasks across the calendar to different dates, assigning them to different users."),Object(o.b)("p",null,"You can traverse through months using the forward and backward arrows above the calendar on the top right."),Object(o.b)("p",null,"Subtasks are currently differentiated from parent tasks on the calendar with a preceding(s)."),Object(o.b)("img",{alt:"Calendar",src:Object(c.a)("img/calendar.png")}))}p.isMDXComponent=!0},136:function(e,t,r){"use strict";var n=r(0),a=r(35);t.a=function(){return Object(n.useContext)(a.a)}},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(136);function a(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,i({ref:t},l,{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);