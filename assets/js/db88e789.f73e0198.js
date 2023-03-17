"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[56875],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58361:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),c={},u=void 0,s={unversionedId:"aws/audit/lambdamonitoring/rules/check_vpc_access_remediation",id:"aws/audit/lambdamonitoring/rules/check_vpc_access_remediation",title:"check_vpc_access_remediation",description:"Remediation",source:"@site/docs/aws/audit/lambdamonitoring/rules/check_vpc_access_remediation.md",sourceDirName:"aws/audit/lambdamonitoring/rules",slug:"/aws/audit/lambdamonitoring/rules/check_vpc_access_remediation",permalink:"/aws/audit/lambdamonitoring/rules/check_vpc_access_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to Ensure that your Amazon Lambda functions have access to VPC-based resources?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, under AWS Lambda, choose Functions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: Click on the name of the function that you want to reconfigure. Select the Configuration tab and choose VPC from the left menu.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 3: In the VPC section, choose Edit to change the network configuration for the selected function.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: On the Edit VPC configuration page, perform the following actions:\nA: Select the ID of the VPC network that you want to associate with the selected function from the VPC dropdown list."),(0,a.kt)("p",{parentName:"li"},"  B: Choose the VPC subnets that Amazon Lambda will use to set up your VPC configuration from the Subnets dropdown list. Select at least two VPC subnets so that Amazon Lambda can execute your function in high-availability mode."),(0,a.kt)("p",{parentName:"li"},"  C: Select the security group(s) that Amazon Lambda service will use to set up your VPC network configuration from the Security groups dropdown list. When you connect a function to a VPC network in your AWS account, it does not have access to the Internet unless your VPC provides Internet access. To give your function access to the Internet, route outbound traffic to a NAT Gateway in a public subnet."),(0,a.kt)("p",{parentName:"li"},"  D: Choose Save to apply the network configuration changes and connect the selected Amazon Lambda function to your VPC network."))))}d.isMDXComponent=!0}}]);