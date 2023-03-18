"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[30250],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return s}});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=o.createContext({}),c=function(t){var e=o.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),f=c(r),s=n,p=f["".concat(u,".").concat(s)]||f[s]||d[s]||i;return r?o.createElement(p,a(a({ref:e},m),{},{components:r})):o.createElement(p,a({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1080:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),a=["components"],l={slug:"cloudformationmonitoring",title:"Cloudformation Audit",sidebar_label:"Cloudformation Audit"},u=void 0,c={unversionedId:"aws/audit/cloudformationmonitoring",id:"aws/audit/cloudformationmonitoring",title:"Cloudformation Audit",description:"Checks performed",source:"@site/docs/aws/audit/cloudformationmonitoring.md",sourceDirName:"aws/audit",slug:"/aws/audit/cloudformationmonitoring",permalink:"/aws/audit/cloudformationmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"cloudformationmonitoring",title:"Cloudformation Audit",sidebar_label:"Cloudformation Audit"},sidebar:"sidebar",previous:{title:"API Gateway Audit",permalink:"/aws/audit/apigatewaymonitoring"},next:{title:"CloudFront Audit",permalink:"/aws/audit/cloudfrontmonitoring"}},m={},d=[{value:"Checks performed",id:"checks-performed",level:3}],f={toc:d};function s(t){var e=t.components,r=(0,n.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/deletion_policy_in_use"},"CloudFormation Deletion Policy Should Be in Use")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/drift_detection"},"AWS CloudFormation Drift Detection")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/cloudformation_in_use"},"CloudFormation (or IaC) Should Be Used")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/stack_failed_status"},"CloudFormation Stacks Should Not Have A Failed Status")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/stack_policy"},"CloudFormation Stack Policy Should Use A Fail-Safe Mechanism")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/stack_with_iam_role"},"CloudFormation Stack Should Have An IAM Role")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/enable_stack_notifications"},"AWS CloudFormation Stack Should Have Notifications Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudformationmonitoring/rules/enable_stack_termination_protection"},"AWS CloudFormation Stacks Should Have Termination Protection Enabled"))))}s.isMDXComponent=!0}}]);