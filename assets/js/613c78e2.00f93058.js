"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[30013],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),c={},l=void 0,u={unversionedId:"aws/audit/iamcompliance/rules/root_account_mfa_remediation",id:"aws/audit/iamcompliance/rules/root_account_mfa_remediation",title:"root_account_mfa_remediation",description:"Remediation",source:"@site/docs/aws/audit/iamcompliance/rules/root_account_mfa_remediation.md",sourceDirName:"aws/audit/iamcompliance/rules",slug:"/aws/audit/iamcompliance/rules/root_account_mfa_remediation",permalink:"/aws/audit/iamcompliance/rules/root_account_mfa_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to enable root account MFA?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: Click on the AWS account name/number available in the upper-right corner of the Management Console and select My Security Credentials from the dropdown menu.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: On Your Security Credentials page, click on the Multi-factor authentication (MFA) tab to expand the panel with the MFA configuration settings available for the root account.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 3: On the Multi-factor authentication (MFA) panel choose Activate MFA to initiate the MFA setup process.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: In the MFA management section click the Activate MFA button to initiate the MFA device setup.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 5: In the Manage MFA device configuration box, select Virtual MFA device from Choose the type of MFA device to assign, then click Continue.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 6: Install the MFA-compatible device. The MFA virtual device used in this example is Google Authenticator. This guide assumes that you have already installed the Google Authenticator application on your smartphone, otherwise follow the Google documentation to install the required application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Step 7: In the Set up virtual MFA device configuration box, perform the following actions:\nA: Click on the Show QR code link under Use your virtual MFA app and your device\'s camera to scan the QR code.\nB: Scan the QR code using the Google Authenticator application.\nC: Enter two consecutive authentication passcodes in the MFA code 1 and MFA code 2 text fields.\nD: Choose Assign MFA to complete the Multi-Factor Authentication (MFA) setup process. If successful, the following message will be displayed: "You have successfully assigned virtual MFA". Choose Close to return to the Amazon IAM console. The new virtual MFA device will be required during AWS root account sign-in.'))))}d.isMDXComponent=!0}}]);