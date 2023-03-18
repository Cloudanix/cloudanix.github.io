"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[98820],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34957:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),l={},c=void 0,s={unversionedId:"aws/audit/lambdamonitoring/rules/multiple_functions_with_same_iam_remediation",id:"aws/audit/lambdamonitoring/rules/multiple_functions_with_same_iam_remediation",title:"multiple_functions_with_same_iam_remediation",description:"Remediation",source:"@site/docs/aws/audit/lambdamonitoring/rules/multiple_functions_with_same_iam_remediation.md",sourceDirName:"aws/audit/lambdamonitoring/rules",slug:"/aws/audit/lambdamonitoring/rules/multiple_functions_with_same_iam_remediation",permalink:"/aws/audit/lambdamonitoring/rules/multiple_functions_with_same_iam_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},m=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],p={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to implement the Principle of Least Privilege (POLP) and create a separate IAM role for each individual Lambda function?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, under AWS Lambda, choose Functions. Click on the name of the function that you want to reconfigure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Select the Configuration tab and choose Permissions from the left menu. In the Execution role section, choose Edit to change the role that defines the permissions for the selected function (i.e. execution role).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: On the Edit basic settings configuration page, perform one of the following operations:\nA: To associate the function with an existing IAM role, choose Use an existing role from the Execution role, and select the required role from the Existing role dropdown list. The chosen IAM role can't be associated with another Lambda function and must follow the Principle of Least Privilege (POLP). Choose Save to apply the configuration changes."),(0,i.kt)("p",{parentName:"li"},"  B: To apply a new execution role to your Lambda function, choose Create a new role from AWS policy templates to create a new execution role for the selected Amazon Lambda function. Provide a unique name for the new role in the Role name box and select one or more policy templates from the Policy templates dropdown list. Based on your function's access requirements, select the necessary permission sets from the Policy templates - optional dropdown list. Choose Save to apply the changes."))))}f.isMDXComponent=!0}}]);