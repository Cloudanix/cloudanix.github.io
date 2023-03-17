"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[35447],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(67294);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,u=function(e,t){if(null==e)return{};var a,r,u={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(u[a]=e[a]);return u}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(u[a]=e[a])}return u}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,u=e.mdxType,n=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),f=u,y=p["".concat(o,".").concat(f)]||p[f]||s[f]||n;return a?r.createElement(y,i(i({ref:t},d),{},{components:a})):r.createElement(y,i({ref:t},d))}));function f(e,t){var a=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:u,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=a(83117),u=a(80102),n=(a(67294),a(3905)),i=["components"],l={slug:"azurekeyvaultaudit",title:"Key Vault Audit",sidebar_label:"Key Vault Audit"},o=void 0,c={unversionedId:"azure/audit/azurekeyvaultaudit",id:"azure/audit/azurekeyvaultaudit",title:"Key Vault Audit",description:"Checks performed",source:"@site/docs/azure/audit/azurekeyvaultaudit.md",sourceDirName:"azure/audit",slug:"/azure/audit/azurekeyvaultaudit",permalink:"/azure/audit/azurekeyvaultaudit",draft:!1,tags:[],version:"current",frontMatter:{slug:"azurekeyvaultaudit",title:"Key Vault Audit",sidebar_label:"Key Vault Audit"},sidebar:"sidebar",previous:{title:"Storage Audit",permalink:"/azure/audit/azurestorageaudit"},next:{title:"Monitor Audit",permalink:"/azure/audit/azuremonitoraudit"}},d={},s=[{value:"Checks performed",id:"checks-performed",level:3}],p={toc:s};function f(e){var t=e.components,a=(0,u.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_enable_audit_event_logging"},"AuditEvent logging should be enabled")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_enable_recoverability"},"Key Vault Recoverability should be enabled")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_enable_trusted_services_access"},"Enable Trusted Microsoft Services access for Key Vault")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_default_network_access_enabled"},"Default Network Access should be restricted")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_entities_with_full_admin_privileges"},"User, Group or Applications have full administrator privileges")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_expiration"},"Keys should have an expiration time")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_keys_need_rotation"},"Keys are about to expire and need rotation")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_secrets_need_expiration"},"Secrets should have an expiration time")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_secrets_need_rotation"},"Secrets are about to expire and need rotation")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_enable_certificate_auto_renewal"},"Auto Renewal should be enabled for SSL Certificates")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period"},"Certificates have insufficient auto renewal period")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_right_key_size"},"Certificates key size is less than recommended key size")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"azurekeyvaultaudit/rules/azure_audit_keyvault_enable_certificate_transparency"},"Certificate Transparency should be enabled"))))}f.isMDXComponent=!0}}]);