"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[76777],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66002:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),s=(n(44996),["components"]),a={},c=void 0,u={unversionedId:"aws/audit/cloudfrontmonitoring/rules/cloudfront_origin_access_s3_origins_remediation",id:"aws/audit/cloudfrontmonitoring/rules/cloudfront_origin_access_s3_origins_remediation",title:"cloudfront_origin_access_s3_origins_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudfrontmonitoring/rules/cloudfront_origin_access_s3_origins_remediation.md",sourceDirName:"aws/audit/cloudfrontmonitoring/rules",slug:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_origin_access_s3_origins_remediation",permalink:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_origin_access_s3_origins_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"remediation"},"Remediation"),(0,o.kt)("p",null,"How to enable origin access identity for Cloudfront CDN distribution and restrict the user access to the S3 bucket?"),(0,o.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1: On the Distributions page, select the CDN distribution that you want to reconfigure. (see Audit section part I to identify the right Cloudfront resource).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2: Click the Distribution Settings button from the dashboard top menu to access the configuration page. On the Origins tab, select the entry with the Origin Type set to S3 Origin, then click the Edit button.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 3: On the Origin Settings page, perform the following actions:\nA: Select Yes next to the Restrict Bucket Access setting to enforce application users to always access your AWS S3 origin content using CloudFront URLs instead of S3 URLs.\nB: Select Create a New Identity option next to Origin Access Identity to create the necessary origin access identity for the S3 origin.\nC: In the Comment box, enter a unique comment that you can use later to identify the new origin access identity.\nD: Select Yes, Update Bucket Policy for Grant Read Permissions on Bucket setting to automatically grant read permission to the new origin access identity associated with the distribution S3 origin. When AWS CloudFront updates the origin bucket policy, it does not remove existing permissions so if your application users have permission to access the objects in your origin S3 bucket using S3 URLs, you will need to remove the existing bucket permissions.\nE: Click Yes, Edit to apply the configuration changes and enable origin access identity for the selected Cloudfront distribution."))))}f.isMDXComponent=!0}}]);