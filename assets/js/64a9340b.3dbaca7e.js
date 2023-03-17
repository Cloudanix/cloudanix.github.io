"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[36889],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return t?r.createElement(f,l(l({ref:n},g),{},{components:t})):r.createElement(f,l({ref:n},g))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},72904:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),l=["components"],a={slug:"sql_configuration_logging",title:"SQL Configuration Logging",sidebar_label:"SQL Configuration Logging"},c=void 0,u={unversionedId:"gcp/audit/gcpsqlmonitoring/rules/sql_configuration_logging",id:"gcp/audit/gcpsqlmonitoring/rules/sql_configuration_logging",title:"SQL Configuration Logging",description:"Back",source:"@site/docs/gcp/audit/gcpsqlmonitoring/rules/sql_configuration_logging.md",sourceDirName:"gcp/audit/gcpsqlmonitoring/rules",slug:"/gcp/audit/gcpsqlmonitoring/rules/sql_configuration_logging",permalink:"/gcp/audit/gcpsqlmonitoring/rules/sql_configuration_logging",draft:!1,tags:[],version:"current",frontMatter:{slug:"sql_configuration_logging",title:"SQL Configuration Logging",sidebar_label:"SQL Configuration Logging"}},g={},s=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../gcpsqlmonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Ensures that logging and log alerts exist for SQL configuration changes. Project Ownership is the highest level of privilege on a project, any changes in SQL configurations should be heavily monitored to prevent unauthorized changes."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"HIPAA"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/logging/docs/logs-based-metrics"},"https://cloud.google.com/logging/docs/logs-based-metrics"))))}d.isMDXComponent=!0}}]);