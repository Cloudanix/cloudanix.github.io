"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[4074],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},95947:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],s={slug:"kmsmonitoring",title:"KMS Audit",sidebar_label:"KMS Audit"},u=void 0,l={unversionedId:"aws/audit/kmsmonitoring",id:"aws/audit/kmsmonitoring",title:"KMS Audit",description:"Checks performed",source:"@site/docs/aws/audit/kmsmonitoring.md",sourceDirName:"aws/audit",slug:"/aws/audit/kmsmonitoring",permalink:"/aws/audit/kmsmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"kmsmonitoring",title:"KMS Audit",sidebar_label:"KMS Audit"},sidebar:"sidebar",previous:{title:"IAM Audit",permalink:"/aws/audit/iamcompliance"},next:{title:"Kubernetes Audit",permalink:"/aws/audit/kubernetesmonitoring"}},m={},c=[{value:"Checks performed",id:"checks-performed",level:3}],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_key_exposed"},"KMS Keys Should Not Be Exposed")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_key_rotation_enabled"},"KMS Key Rotation Should Be Enabled")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_unused_customer_keys"},"Unused Customer Master Key Should Be Removed")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_num_of_users"},"KMS Key Policies Should Be Designed To Limit Number Of KMS Admins")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_scheduled_deletion"},"KMS Keys Scheduled For Deletion Should Be Recovered")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_app_tier"},"App-tier KMS Key Should Be In Use")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_db_tier"},"Database-tier KMS Key Should Be In Use")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_specific_key"},"Existence Of Specific AWS KMS CMKs")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_cross_account"},"KMS Keys Should Not Allow Unknown Cross Account Access")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_key_use"},"KMS Customer Master Key Should Be In Use")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kmsmonitoring/rules/kms_web_tier"},"Web-tier KMS Key Should Be In Use"))))}d.isMDXComponent=!0}}]);