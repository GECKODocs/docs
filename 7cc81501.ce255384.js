(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),s=(r(0),r(170)),i=r(172),a={id:"usr1",title:"User Configuration",sidebar_label:"User Configuration"},c={id:"usr1",title:"User Configuration",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs\\usr1.md",permalink:"/docs/docs/usr1",sidebar_label:"User Configuration",sidebar:"someSidebar",previous:{title:"Document Repository",permalink:"/docs/docs/fol1"},next:{title:"Getting Started With The API",permalink:"/docs/docs/api1"}},l=[{value:"User Roles",id:"user-roles",children:[]},{value:"Browse Users",id:"browse-users",children:[]},{value:"System Roles",id:"system-roles",children:[]},{value:"Add New System Role",id:"add-new-system-role",children:[]},{value:"Edit System Role",id:"edit-system-role",children:[]},{value:"Project Roles",id:"project-roles",children:[]},{value:"Groups",id:"groups",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"user-roles"},"User Roles"),Object(s.b)("p",null,"Here you can set up new users and set different user permissions/roles."),Object(s.b)("p",null,"The user menu gives you the option to ",Object(s.b)("strong",{parentName:"p"},"Browse users, View System roles, Project roles,")," and ",Object(s.b)("strong",{parentName:"p"},"Groups"),"."),Object(s.b)("h2",{id:"browse-users"},"Browse Users"),Object(s.b)("p",null,"The Users dashboard displays the number of users, and their aliases in the system."),Object(s.b)("p",null,"You can ",Object(s.b)("strong",{parentName:"p"},"Add"),", ",Object(s.b)("strong",{parentName:"p"},"Edit")," and ",Object(s.b)("strong",{parentName:"p"},"Remove")," users."),Object(s.b)("img",{alt:"System-Users",src:Object(i.a)("img/systemUsers.png")}),Object(s.b)("h2",{id:"system-roles"},"System Roles"),Object(s.b)("p",null,"This is a list of all predefined roles defining access to elements within the system."),Object(s.b)("p",null,"You can use the ",Object(s.b)("strong",{parentName:"p"},"search")," function to filter your search."),Object(s.b)("p",null,"Edit a name/role by clicking the edit icon (three horizontal lines) and clicking on ",Object(s.b)("strong",{parentName:"p"},"Edit"),"."),Object(s.b)("img",{alt:"System-Users",src:Object(i.a)("img/systemUsers.png")}),Object(s.b)("h2",{id:"add-new-system-role"},"Add New System Role"),Object(s.b)("p",null,"Click the ",Object(s.b)("strong",{parentName:"p"},"Add System Role")," button."),Object(s.b)("p",null,"Enter role name."),Object(s.b)("p",null,"Enter role description."),Object(s.b)("p",null,"Hit ",Object(s.b)("strong",{parentName:"p"},"Save")," to save changes or cancel to return to the Roles Dashboard."),Object(s.b)("h2",{id:"edit-system-role"},"Edit System Role"),Object(s.b)("p",null,"Edit a role name, description, and/or permissioning access."),Object(s.b)("p",null,"You can set permissions to allow a role to ",Object(s.b)("strong",{parentName:"p"},"view, create, update")," or ",Object(s.b)("strong",{parentName:"p"},"delete")," certain elements within the system. This is done through ticking the checkboxes."),Object(s.b)("p",null,"Hit ",Object(s.b)("strong",{parentName:"p"},"Save")," to save changes or cancel to return to the Roles Dashboard."),Object(s.b)("img",{alt:"Edit Roles",src:Object(i.a)("img/editRoles.png")}),Object(s.b)("h2",{id:"project-roles"},"Project Roles"),Object(s.b)("p",null,"The same process as used to edit system roles applies for adding and editing project roles."),Object(s.b)("h2",{id:"groups"},"Groups"),Object(s.b)("p",null,"A group is a collection of users that can be assigned to a Project as a team."),Object(s.b)("p",null,"Create and add groups by clicking ",Object(s.b)("strong",{parentName:"p"},"Add Group"),". From here you can also specify which users you wish to add to this group."),Object(s.b)("img",{alt:"Groups",src:Object(i.a)("img/groups.png")}),Object(s.b)("p",null,"Edit or delete existing groups, and users associated to that group, by clicking the three horizontal lines and choosing either ",Object(s.b)("strong",{parentName:"p"},"Edit")," or ",Object(s.b)("strong",{parentName:"p"},"Delete"),"."))}p.isMDXComponent=!0},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||s;return r?o.a.createElement(m,a({ref:t},l,{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},171:function(e,t,r){"use strict";var n=r(0),o=r(51);t.a=function(){return Object(n.useContext)(o.a)}},172:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(173);var n=r(171);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},173:function(e,t,r){"use strict";var n=r(17),o=r(36),s=r(174),i="".startsWith;n(n.P+n.F*r(175)("startsWith"),"String",{startsWith:function(e){var t=s(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},174:function(e,t,r){var n=r(70),o=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},175:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);