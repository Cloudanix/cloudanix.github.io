"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[48014],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74214:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(83117),o=r(80102),l=(r(67294),r(3905)),a=["components"],i={slug:"sql_log_lock_waits_flag",title:"PostgreSQL Log Lock Waits Flag Should Be Disabled",sidebar_label:"PostgreSQL Log Lock Waits Flag Should Be Disabled"},c=void 0,s={unversionedId:"gcp/audit/gcpsqlmonitoring/rules/sql_log_lock_waits_flag",id:"gcp/audit/gcpsqlmonitoring/rules/sql_log_lock_waits_flag",title:"PostgreSQL Log Lock Waits Flag Should Be Disabled",description:"Back",source:"@site/docs/gcp/audit/gcpsqlmonitoring/rules/sql_log_lock_waits_flag.md",sourceDirName:"gcp/audit/gcpsqlmonitoring/rules",slug:"/gcp/audit/gcpsqlmonitoring/rules/sql_log_lock_waits_flag",permalink:"/gcp/audit/gcpsqlmonitoring/rules/sql_log_lock_waits_flag",draft:!1,tags:[],version:"current",frontMatter:{slug:"sql_log_lock_waits_flag",title:"PostgreSQL Log Lock Waits Flag Should Be Disabled",sidebar_label:"PostgreSQL Log Lock Waits Flag Should Be Disabled"}},u={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../gcpsqlmonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"Ensure that the log_lock_waits database flag for Cloud SQL PostgreSQL instance is set to on."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"Medium"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Security"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"CIS"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}g.isMDXComponent=!0}}]);