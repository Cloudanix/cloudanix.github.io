"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[71525],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),y=a,f=p["".concat(l,".").concat(y)]||p[y]||d[y]||i;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},29982:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),u=["components"],o={slug:"azure_audit_keyvault_keys_need_expiration",title:"Keys should have an expiration time",sidebar_label:"Keys should have an expiration time"},l=void 0,s={unversionedId:"azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration",id:"azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration",title:"Keys should have an expiration time",description:"Back",source:"@site/docs/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration.md",sourceDirName:"azure/audit/azurekeyvaultaudit/rules",slug:"/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration",permalink:"/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_keyvault_keys_need_expiration",title:"Keys should have an expiration time",sidebar_label:"Keys should have an expiration time"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function y(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../azurekeyvaultaudit"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"In Microsoft Azure Key Vault, check for any keys that does not have any expiration time set."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"Medium"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security, Operational Maturity"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CISMicrosoftAzureFoundations, CIS, GDPR, ISO27001"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"},"https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates"))))}y.isMDXComponent=!0}}]);