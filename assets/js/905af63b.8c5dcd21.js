"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[6902],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(y,u(u({ref:r},l),{},{components:t})):n.createElement(y,u({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,u=new Array(a);u[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var s=2;s<a;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20235:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=t(83117),i=t(80102),a=(t(67294),t(3905)),u=["components"],o={slug:"azure_audit_networksecurity_security_group_unrestricted_rpc_access",title:"Unrestricted RPC Access",sidebar_label:"Unrestricted RPC Access"},c=void 0,s={unversionedId:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rpc_access",id:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rpc_access",title:"Unrestricted RPC Access",description:"Back",source:"@site/docs/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rpc_access.md",sourceDirName:"azure/audit/azurenetworkaudit/rules",slug:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rpc_access",permalink:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rpc_access",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_networksecurity_security_group_unrestricted_rpc_access",title:"Unrestricted RPC Access",sidebar_label:"Unrestricted RPC Access"}},l={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var r=e.components,t=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../azurenetworkaudit"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"Ensure that Microsoft Azure network security groups (NSGs) do not allow unrestricted access (i.e. 0.0.0.0/0) on TCP port 135 in order to implement the principle of least privilege and effectively reduce the attack surface. Remote Procedure Call (RPC) TCP port 135 is used for client-server communications by Microsoft Message Queuing (MSMQ) as well as other Microsoft Windows/Windows Server software."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"High"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Security"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"CBP, CISMicrosoftAzureFoundations, SOC2, GDPR, PCIDSS, NIST, ISO27001, CIS, SOC1, HIPAA"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}f.isMDXComponent=!0}}]);