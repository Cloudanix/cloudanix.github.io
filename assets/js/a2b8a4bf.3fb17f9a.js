"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[41361],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),g=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=g(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var g=2;g<i;g++)a[g]=r[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91441:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={slug:"storage_permissions_logging",title:"Storage Permissions Logging",sidebar_label:"Storage Permissions Logging"},l=void 0,g={unversionedId:"gcp/audit/gcpstoragemonitoring/rules/storage_permissions_logging",id:"gcp/audit/gcpstoragemonitoring/rules/storage_permissions_logging",title:"Storage Permissions Logging",description:"Back",source:"@site/docs/gcp/audit/gcpstoragemonitoring/rules/storage_permissions_logging.md",sourceDirName:"gcp/audit/gcpstoragemonitoring/rules",slug:"/gcp/audit/gcpstoragemonitoring/rules/storage_permissions_logging",permalink:"/gcp/audit/gcpstoragemonitoring/rules/storage_permissions_logging",draft:!1,tags:[],version:"current",frontMatter:{slug:"storage_permissions_logging",title:"Storage Permissions Logging",sidebar_label:"Storage Permissions Logging"}},c={},u=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../gcpstoragemonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Ensures that logging and log alerts exist for storage permission changes. Storage permissions include access to the buckets that store the logs, any changes in storage permissions should be heavily monitored to prevent unauthorized changes."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"HIPAA PCI"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/logging/docs/logs-based-metrics/"},"https://cloud.google.com/logging/docs/logs-based-metrics/"))))}d.isMDXComponent=!0}}]);