"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[88205],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=l.createContext({}),c=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return r?l.createElement(f,o(o({ref:t},d),{},{components:r})):l.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54634:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var l=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],a={slug:"cloudtrailmonitoring",title:"CloudTrail Audit",sidebar_label:"CloudTrail Audit"},u=void 0,c={unversionedId:"aws/audit/cloudtrailmonitoring",id:"aws/audit/cloudtrailmonitoring",title:"CloudTrail Audit",description:"Checks performed",source:"@site/docs/aws/audit/cloudtrailmonitoring.md",sourceDirName:"aws/audit",slug:"/aws/audit/cloudtrailmonitoring",permalink:"/aws/audit/cloudtrailmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"cloudtrailmonitoring",title:"CloudTrail Audit",sidebar_label:"CloudTrail Audit"},sidebar:"sidebar",previous:{title:"CloudFront Audit",permalink:"/aws/audit/cloudfrontmonitoring"},next:{title:"Cloudwatch Audit",permalink:"/aws/audit/cloudwatchmonitoring"}},d={},s=[{value:"Checks performed",id:"checks-performed",level:3}],p={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_mfa_delete"},"CloudTrail Logging Bucket Should Use MFA Delete Feature")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_publicly_accessible"},"CloudTrail Logging Buckets Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_data_events"},"CloudTrail Must Log Data Events")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_delivery_failing"},"Log files Should Be Delivered Without Any Failures")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_enabled"},"CloudTrail Must Be Enabled For All Regions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_global_services_enabled"},"Trails Should Record Both Regional And Global Events")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_global_services_logging_duplicated"},"Duplicate Entries Should Be Avoided In CloudTrail Logs")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_integrated_cloudwatch"},"CloudTrail Events Should Be Monitored By CloudWatch Logs")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_log_file_integrity"},"File Integrity Validation Feature Should Be Enabled For Trails")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_logs_encrypted"},"CloudTrail Logs Should Be Encrypted")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_management_events"},"CloudTrails Must Log Management Events")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_s3_bucket"},"CloudTrail Should Be Configured To Use Appropriated S3 Bucket")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_s3_bucket_logging"},"Server Access Logging Feature Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"cloudtrailmonitoring/rules/cloudtrail_object_lock_s3_buckets"},"Object Lock Feature Should Be Enabled"))))}m.isMDXComponent=!0}}]);