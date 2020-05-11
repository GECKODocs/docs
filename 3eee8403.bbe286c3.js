(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),a=(r(0),r(176)),o=r(177),c={id:"dlt1",title:"Audits Overview",sidebar_label:"Audits Overview"},u={id:"dlt1",title:"Audits Overview",description:"## Audits",source:"@site/docs/dlt1.md",permalink:"/docs/docs/dlt1",sidebar_label:"Audits Overview",sidebar:"someSidebar",previous:{title:"Reports",permalink:"/docs/docs/rep1"},next:{title:"Document Repository Overview",permalink:"/docs/docs/fol1"}},s=[{value:"Audits",id:"audits",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"audits"},"Audits"),Object(a.b)("p",null,"On the Audits page it can be seen how any ",Object(a.b)("strong",{parentName:"p"},"changes made can be tracked")," within a given Project (or fund) and Task."),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"full audit trail")," of activity is available for each ",Object(a.b)("strong",{parentName:"p"},"Project/Fund/Task")," with the exact time and date a given field has been modified."),Object(a.b)("img",{alt:"DLT",src:Object(o.a)("img/dlt.png")}))}p.isMDXComponent=!0},175:function(e,t,r){"use strict";var n=r(0),i=r(52);t.a=function(){return Object(n.useContext)(i.a)}},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return r?i.a.createElement(b,c({ref:t},s,{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(178);var n=r(175);function i(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},178:function(e,t,r){"use strict";var n=r(12),i=r(24),a=r(179),o="".startsWith;n(n.P+n.F*r(180)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},179:function(e,t,r){var n=r(77),i=r(25);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},180:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);