"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[8775],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),_=s(r),p=i,y=_["".concat(c,".").concat(p)]||_[p]||d[p]||a;return r?n.createElement(y,u(u({ref:t},l),{},{components:r})):n.createElement(y,u({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,u=new Array(a);u[0]=_;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},45978:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),u=["components"],o={slug:"azuresecuritycenteraudit",title:"Security Center Audit",sidebar_label:"Security Center Audit"},c=void 0,s={unversionedId:"azure/audit/azuresecuritycenteraudit",id:"azure/audit/azuresecuritycenteraudit",title:"Security Center Audit",description:"Checks performed",source:"@site/docs/azure/audit/azuresecuritycenteraudit.md",sourceDirName:"azure/audit",slug:"/azure/audit/azuresecuritycenteraudit",permalink:"/azure/audit/azuresecuritycenteraudit",draft:!1,tags:[],version:"current",frontMatter:{slug:"azuresecuritycenteraudit",title:"Security Center Audit",sidebar_label:"Security Center Audit"},sidebar:"sidebar",previous:{title:"Network Audit",permalink:"/azure/audit/azurenetworkaudit"},next:{title:"Sql Audit",permalink:"/azure/audit/azuresqlaudit"}},l={},d=[{value:"Checks performed",id:"checks-performed",level:3}],_={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_agent_not_provisioned"},"Monitoring Agent is not provisioned")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_security_contacts_not_set"},"No Security Contact Set")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_security_contacts_email_not_set"},"No Security Contact Email Set")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_security_contacts_phone_not_set"},"No Security Contact Phone Set")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_security_contacts_alert_notification_not_set"},"Sending Email to Security Contact on Alert Is Off")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_security_contacts_alert_to_admins_not_set"},"Sending Email to Administrators on Alert Is Off")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_system_updates_disabled"},"Monitor System Updates setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_os_vulnerabilities_disabled"},"Monitor OS Vulnerabilities setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_endpoint_protection_disabled"},"Monitor Endpoint Protection setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_disk_encryption_disabled"},"Monitor Disk Encryption setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_network_security_groups_disabled"},"Monitor Network Security Group setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_web_application_firewall_disabled"},"Monitor Web Application Firewall setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_next_generation_firewall_disabled"},"Monitor Next Generation Firewall (NGFW) setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_vulnerability_assessment_disabled"},"Monitor Vulnerability Assessment setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_storage_blob_encryption_disabled"},"Monitor Storage Blob Encryption setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_jit_network_access_disabled"},"Monitor JIT Network Access setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_adaptive_application_whitelisting_disabled"},"Monitor Adaptive Application Whitelisting setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_sql_auditing_disabled"},"Monitor SQL Auditing setting is not enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"azuresecuritycenteraudit/rules/azure_audit_securitycenter_monitor_sql_encryption_disabled"},"Monitor SQL Encryption setting is not enabled"))))}p.isMDXComponent=!0}}]);