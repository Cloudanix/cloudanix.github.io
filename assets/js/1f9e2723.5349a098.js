"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[7939],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,_=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(_,s(s({ref:t},l),{},{components:r})):n.createElement(_,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24617:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],u={slug:"azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",title:"Unrestricted PostgreSQL Database Access",sidebar_label:"Unrestricted PostgreSQL Database Access"},i=void 0,c={unversionedId:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",id:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",title:"Unrestricted PostgreSQL Database Access",description:"Back",source:"@site/docs/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access.md",sourceDirName:"azure/audit/azurenetworkaudit/rules",slug:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",permalink:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_networksecurity_security_group_unrestricted_postgresql_database_access",title:"Unrestricted PostgreSQL Database Access",sidebar_label:"Unrestricted PostgreSQL Database Access"}},l={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../azurenetworkaudit"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"Ensure that your Microsoft Azure network security groups (NSGs) allow inbound/ingress access on TCP port 5432 to trusted IP addresses only, in order to implement the principle of least privilege and greatly reduce the attack surface. TCP port 5432 is used by the PostgreSQL Database Server, an object-relational database management system (RDBMS) server developed by PostgreSQL Global Development Group."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"High"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Security"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"CBP, CISMicrosoftAzureFoundations, SOC2, NIST, GDPR, ISO27001, PCIDSS, SOC1, HIPAA"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}f.isMDXComponent=!0}}]);