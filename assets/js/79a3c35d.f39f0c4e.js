"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[43212],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return d}});var l=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,l,c=function(e,t){if(null==e)return{};var r,l,c={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=l.createContext({}),s=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},o=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=s(r),d=c,h=k["".concat(i,".").concat(d)]||k[d]||p[d]||a;return r?l.createElement(h,n(n({ref:t},o),{},{components:r})):l.createElement(h,n({ref:t},o))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,n=new Array(a);n[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:c,n[1]=u;for(var s=2;s<a;s++)n[s]=r[s];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}k.displayName="MDXCreateElement"},30798:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var l=r(83117),c=r(80102),a=(r(67294),r(3905)),n=["components"],u={slug:"s3publiccheck",title:"S3 Audit",sidebar_label:"S3 Audit"},i=void 0,s={unversionedId:"aws/audit/s3publiccheck",id:"aws/audit/s3publiccheck",title:"S3 Audit",description:"Checks performed",source:"@site/docs/aws/audit/s3publiccheck.md",sourceDirName:"aws/audit",slug:"/aws/audit/s3publiccheck",permalink:"/aws/audit/s3publiccheck",draft:!1,tags:[],version:"current",frontMatter:{slug:"s3publiccheck",title:"S3 Audit",sidebar_label:"S3 Audit"},sidebar:"sidebar",previous:{title:"Route53 Audit",permalink:"/aws/audit/route53monitoring"},next:{title:"Security Groups Audit",permalink:"/aws/audit/sgaudit"}},o={},p=[{value:"Checks performed",id:"checks-performed",level:3}],k={toc:p};function d(e){var t=e.components,r=(0,c.Z)(e,n);return(0,a.kt)("wrapper",(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/access_logging"},"S3 Buckets Should Have Access Logging Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/public_access_block"},"S3 Block Public Access Feature Should Be Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/encryption_enabled"},"S3 Buckets Should Have Default Encryption Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/object_versioning_enabled"},"S3 Buckets Should Have Versioning Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_https"},"S3 Buckets Should Have A Secure Transport Policy")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_write"},"S3 Buckets Should Not Allow Public Writes")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_authenticated_write"},"S3 Bucket Should Not Allow WRITE Access to Authenticated Users")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/dns_compliant_s3_bucket_names"},"S3 Bucket Names Should Be DNS-compliant")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_mfa_delete_enabled"},"S3 Bucket Should Have MFA Delete Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_public_access_via_policy"},"S3 Buckets Should Not Allow Public Access Via Policy")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_encrypted_with_cmks"},"S3 Buckets Should Be Encrypted with Customer-Provided CMKs")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_lifecycle_config_enabled"},"S3 Buckets Should Have Lifecycle Configuration Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_website_config_enabled"},"S3 Buckets Should Have Website Configuration Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/object_lock"},"S3 Buckets Should Have Object Lock Enabled")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/transfer_acceleration"},"S3 Buckets Should Use Transfer Acceleration")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_full_control"},"S3 Bucket Should Not Allow Public FULL_CONTROL Access")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_authenticated_full_control"},"S3 Bucket Should Not Allow FULL_CONTROL Access to Authenticated Users")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_read"},"S3 Buckets Should Not Allow Public READ Access")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_authenticated_read"},"S3 Bucket Should Not Allow READ Access to Authenticated Users")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_read_acp"},"S3 Bucket Should Not Allow Public READ_ACP Access")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_authenticated_read_acp"},"S3 Bucket Should Not Allow READ_ACP Access For Authenticated Users")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_write_acp"},"S3 Bucket Should Not Allow Public WRITE_ACP Access")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/s3_allows_authenticated_write_acp"},"S3 Bucket Should Not Allow WRITE_ACP Access to Authenticated Users")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"s3publiccheck/rules/server_side_encryption"},"S3 Buckets Should Enforce Server Side Encryption"))))}d.isMDXComponent=!0}}]);