"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[20656],{3905:function(e,t,c){c.d(t,{Zo:function(){return u},kt:function(){return b}});var n=c(67294);function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function i(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)c=l[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),c=t;return e&&(c="function"==typeof e?e(t):a(a({},t),e)),c},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var c=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(c),b=r,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||l;return c?n.createElement(f,a(a({ref:t},u),{},{components:c})):n.createElement(f,a({ref:t},u))}));function b(e,t){var c=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=c.length,a=new Array(l);a[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=c[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,c)}d.displayName="MDXCreateElement"},99873:function(e,t,c){c.r(t),c.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=c(83117),r=c(80102),l=(c(67294),c(3905)),a=["components"],i={slug:"s3_public_access_via_policy",title:"S3 Buckets Should Not Allow Public Access Via Policy",sidebar_label:"S3 Buckets Should Not Allow Public Access Via Policy"},o=void 0,s={unversionedId:"aws/audit/s3publiccheck/rules/s3_public_access_via_policy",id:"aws/audit/s3publiccheck/rules/s3_public_access_via_policy",title:"S3 Buckets Should Not Allow Public Access Via Policy",description:"Back",source:"@site/docs/aws/audit/s3publiccheck/rules/s3_public_access_via_policy.md",sourceDirName:"aws/audit/s3publiccheck/rules",slug:"/aws/audit/s3publiccheck/rules/s3_public_access_via_policy",permalink:"/aws/audit/s3publiccheck/rules/s3_public_access_via_policy",draft:!1,tags:[],version:"current",frontMatter:{slug:"s3_public_access_via_policy",title:"S3 Buckets Should Not Allow Public Access Via Policy",sidebar_label:"S3 Buckets Should Not Allow Public Access Via Policy"}},u={},p=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],d={toc:p};function b(e){var t=e.components,c=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../s3publiccheck"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"AWS S3 buckets should not be publicly accessible via bucket policies in order to protect against unauthorized access. Granting public access to your S3 buckets via bucket policies can allow malicious users to view, get, upload, modify and delete S3 objects, actions that can lead to data loss and unexpected charges on your AWS bill."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"High"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Security"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"CBP, SOC2, GDPR, ISO27001"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html"))))}b.isMDXComponent=!0}}]);