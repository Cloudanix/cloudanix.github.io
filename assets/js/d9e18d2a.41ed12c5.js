"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[90957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,y=m["".concat(d,".").concat(p)]||m[p]||c[p]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={slug:"ddb_customer_kms_keys",title:"AWS DynamoDB Tables Should Use KMS CMKs for Encryption",sidebar_label:"AWS DynamoDB Tables Should Use KMS CMKs for Encryption"},d=void 0,l={unversionedId:"aws/audit/dynamodbmonitoring/rules/ddb_customer_kms_keys",id:"aws/audit/dynamodbmonitoring/rules/ddb_customer_kms_keys",title:"AWS DynamoDB Tables Should Use KMS CMKs for Encryption",description:"Back",source:"@site/docs/aws/audit/dynamodbmonitoring/rules/ddb_customer_kms_keys.md",sourceDirName:"aws/audit/dynamodbmonitoring/rules",slug:"/aws/audit/dynamodbmonitoring/rules/ddb_customer_kms_keys",permalink:"/aws/audit/dynamodbmonitoring/rules/ddb_customer_kms_keys",draft:!1,tags:[],version:"current",frontMatter:{slug:"ddb_customer_kms_keys",title:"AWS DynamoDB Tables Should Use KMS CMKs for Encryption",sidebar_label:"AWS DynamoDB Tables Should Use KMS CMKs for Encryption"}},u={},c=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../dynamodbmonitoring"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"Amazon DynamoDB tables should be using AWS-managed Customer Master Keys (CMKs) instead of AWS-owned CMKs for Server-Side Encryption (SSE), in order to meet strict encryption compliance and regulatory requirements. DynamoDB supports to switch from AWS-owned CMKs to customer-managed CMKs managed using Amazon Key Management Service (KMS), without any code to encrypt the data."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"High"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Security"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"SOC2, GDPR, HIPAA, NIST, ISO27001"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html"},"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/EncryptionAtRest.html")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/about-aws/whats-new/2019/02/amazon-dynamodb-adds-support-for-switching-encryption-keys-to-encrypt-your-data-at-rest/"},"https://aws.amazon.com/about-aws/whats-new/2019/02/amazon-dynamodb-adds-support-for-switching-encryption-keys-to-encrypt-your-data-at-rest/"))))}p.isMDXComponent=!0}}]);