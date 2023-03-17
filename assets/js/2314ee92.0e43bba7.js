"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[34667],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),l={},p=void 0,c={unversionedId:"aws/audit/cloudfrontmonitoring/rules/cloudfront_fieldlevel_encryption_remediation",id:"aws/audit/cloudfrontmonitoring/rules/cloudfront_fieldlevel_encryption_remediation",title:"cloudfront_fieldlevel_encryption_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudfrontmonitoring/rules/cloudfront_fieldlevel_encryption_remediation.md",sourceDirName:"aws/audit/cloudfrontmonitoring/rules",slug:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_fieldlevel_encryption_remediation",permalink:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_fieldlevel_encryption_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],s={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to enable field-level encryption for CloudFront web distributions?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: Create an RSA key pair. Use OpenSSL or another tool to create your own key pair and Sign in to the AWS Management Console.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Go to CloudFront dashboard at ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudfront/"},"https://console.aws.amazon.com/cloudfront/"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: In the left navigation panel, under Security, choose Public key. Click Add public key button to initiate the key setup process.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: In the Add public key dialog box, perform the following:\nA: In the Key name box, enter a unique name for your public key."),(0,i.kt)("p",{parentName:"li"},'   B: In the Key value box, paste the encoded key value for your public key, generated at step no. 1. The key value must include the "-----BEGIN PUBLIC KEY-----" and "-----END PUBLIC KEY-----" lines.'),(0,i.kt)("p",{parentName:"li"},"   C: In the Comment box, provide an optional comment."),(0,i.kt)("p",{parentName:"li"},"   D: Click Add to add your public key.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 5: In the left navigation panel, choose Field-level encryption. Click Create profile button to start the field-level encryption profile setup.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 6: On Create encryption profile page, provide the following information:\nA: Type a unique name for the new field-level encryption profile."),(0,i.kt)("p",{parentName:"li"},"   B: (Optional) In the Comment box type a comment about the profile."),(0,i.kt)("p",{parentName:"li"},"   C: Select the name of a public key created earlier in the process from Public key name dropdown list."),(0,i.kt)("p",{parentName:"li"},"   D: For the Provider name type a phrase to help identify the key."),(0,i.kt)("p",{parentName:"li"},"   E: For the Field name pattern to match, type the names of the data fields, or patterns that identify data field names in the request, that you want CloudFront to encrypt. Choose the + option to add all the fields that you want to encrypt with this key."),(0,i.kt)("p",{parentName:"li"},"   F: Click Create profile to save the changes and create your new field-level encryption profile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 7: In the Encryption configurations section, click Create configuration button to initiate the configuration setup.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 8: On Create configuration page, perform the following actions:\nA: From the Default profile ID dropdown list, choose the newly created field-level encryption profile."),(0,i.kt)("p",{parentName:"li"},"   B: Select Forward request to origin when request\u2019s content type is not configured checkbox if you want to allow the request to go to your origin, if you have not specified a profile to use for the content type of the request."),(0,i.kt)("p",{parentName:"li"},"   C: Select Override the profile for a content type with a provided query argument checkbox if you want to allow a profile provided in a query argument to override the profile that you have specified for a content type."),(0,i.kt)("p",{parentName:"li"},"   D: (Optional) Provide a short description in the Comment box."),(0,i.kt)("p",{parentName:"li"},"   E: Click Create configuration to create the new field-level encryption configuration to associate with the cache behavior set for your CloudFront distribution.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 8: Go back to the navigation panel and choose Distributions. On the CloudFront Distribution page, in the main menu, select Web and Enabled from Viewing dropdown menus to list all active web distributions available in your AWS account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 9: Select the web distribution that you want to reconfigure and Click the Distribution Settings button from the dashboard menu to access the resource configuration page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 10: Choose the Behaviors tab and select the default behavior for the distribution. Click the Edit button to edit the configuration settings for the selected distribution behavior.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 11: On the Edit Behavior page, select the name/ID of the field-level encryption configuration created at step no. 11 from the Field-level Encryption Config dropdown list. Note that you can set the field-level encryption configuration only when Viewer Protocol Policy and Origin Protocol Policy settings are using HTTPS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 12: Click Yes, Edit to save the changes and enable field-level encryption for the selected AWS CloudFront web distribution."))))}f.isMDXComponent=!0}}]);