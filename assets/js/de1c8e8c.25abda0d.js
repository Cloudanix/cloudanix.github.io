"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[85245],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(b,a(a({ref:t},s),{},{components:r})):n.createElement(b,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66451:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),a=["components"],l={slug:"object_lock",title:"S3 Buckets Should Have Object Lock Enabled",sidebar_label:"S3 Buckets Should Have Object Lock Enabled"},i=void 0,u={unversionedId:"aws/audit/s3publiccheck/rules/object_lock",id:"aws/audit/s3publiccheck/rules/object_lock",title:"S3 Buckets Should Have Object Lock Enabled",description:"Back",source:"@site/docs/aws/audit/s3publiccheck/rules/object_lock.md",sourceDirName:"aws/audit/s3publiccheck/rules",slug:"/aws/audit/s3publiccheck/rules/object_lock",permalink:"/aws/audit/s3publiccheck/rules/object_lock",draft:!1,tags:[],version:"current",frontMatter:{slug:"object_lock",title:"S3 Buckets Should Have Object Lock Enabled",sidebar_label:"S3 Buckets Should Have Object Lock Enabled"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"../../s3publiccheck"},"Back"))),(0,c.kt)("h3",{id:"more-info"},"More Info:"),(0,c.kt)("p",null,"AWS S3 buckets should use Object Lock for data protection and/or regulatory compliance and in order to prevent the objects they store from being deleted."),(0,c.kt)("h3",{id:"risk-level"},"Risk Level"),(0,c.kt)("p",null,"Medium"),(0,c.kt)("h3",{id:"address"},"Address"),(0,c.kt)("p",null,"Security"),(0,c.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,c.kt)("p",null,"NIST"),(0,c.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html"))))}f.isMDXComponent=!0}}]);