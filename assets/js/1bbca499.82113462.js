"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[44123],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83427:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],s={slug:"kms_key_associated_with_minimum_users",title:"KMS Key Should Be Associated With Minimum Users",sidebar_label:"KMS Key Should Be Associated With Minimum Users"},u=void 0,c={unversionedId:"gcp/audit/gcpkmsmonitoring/rules/kms_key_associated_with_minimum_users",id:"gcp/audit/gcpkmsmonitoring/rules/kms_key_associated_with_minimum_users",title:"KMS Key Should Be Associated With Minimum Users",description:"Back",source:"@site/docs/gcp/audit/gcpkmsmonitoring/rules/kms_key_associated_with_minimum_users.md",sourceDirName:"gcp/audit/gcpkmsmonitoring/rules",slug:"/gcp/audit/gcpkmsmonitoring/rules/kms_key_associated_with_minimum_users",permalink:"/gcp/audit/gcpkmsmonitoring/rules/kms_key_associated_with_minimum_users",draft:!1,tags:[],version:"current",frontMatter:{slug:"kms_key_associated_with_minimum_users",title:"KMS Key Should Be Associated With Minimum Users",sidebar_label:"KMS Key Should Be Associated With Minimum Users"}},l={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],m={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../gcpkmsmonitoring"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"KMS keys should be monitored to ensure that they are not overexposed i.e. there is at most a certain number of users associated with a key."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"Medium"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Security"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"CBP"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}p.isMDXComponent=!0}}]);