"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[10160],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,y=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39098:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var n=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],u={slug:"azure_audit_networksecurity_security_group_unrestricted_rdp_access",title:"Unrestricted RDP Access",sidebar_label:"Unrestricted RDP Access"},c=void 0,s={unversionedId:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rdp_access",id:"azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rdp_access",title:"Unrestricted RDP Access",description:"Back",source:"@site/docs/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rdp_access.md",sourceDirName:"azure/audit/azurenetworkaudit/rules",slug:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rdp_access",permalink:"/azure/audit/azurenetworkaudit/rules/azure_audit_networksecurity_security_group_unrestricted_rdp_access",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_networksecurity_security_group_unrestricted_rdp_access",title:"Unrestricted RDP Access",sidebar_label:"Unrestricted RDP Access"}},d={},l=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../azurenetworkaudit"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Ensure that Microsoft Azure network security groups (NSGs) do not allow unrestricted access (i.e. 0.0.0.0/0) on TCP port 3389 in order to protect against attackers that use brute force techniques to gain access to the Azure virtual machines associated with the NSGs. TCP port 3389 is used for secure remote GUI login to Microsoft VMs by connecting a Remote Desktop Protocol (RDP) client application with an RDP server."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CBP, CISMicrosoftAzureFoundations, CIS, SOC2, NIST, PCIDSS, ISO27001, SOC1, HIPAA"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}f.isMDXComponent=!0}}]);