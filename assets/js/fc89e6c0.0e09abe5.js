"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[44293],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),l={},c=void 0,s={unversionedId:"aws/audit/cloudformationmonitoring/rules/stack_with_iam_role_remediation",id:"aws/audit/cloudformationmonitoring/rules/stack_with_iam_role_remediation",title:"stack_with_iam_role_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudformationmonitoring/rules/stack_with_iam_role_remediation.md",sourceDirName:"aws/audit/cloudformationmonitoring/rules",slug:"/aws/audit/cloudformationmonitoring/rules/stack_with_iam_role_remediation",permalink:"/aws/audit/cloudformationmonitoring/rules/stack_with_iam_role_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to update the permissions of IAM service roles associated with CloudFormation stacks to adhere to the principle of least privilege?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: Click Create role button from the dashboard top menu to create a new IAM role that will replace the existing service role within your CloudFormation stack configuration. If you don't create a new IAM service role, AWS CloudFormation uses the role that was previously associated with the stack, during the update process.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: On Trust panel, select AWS service category and choose CloudFormation from Choose the service that will use this role list. Click Next: Permissions to continue.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Step 3: On Permissions panel, perform one of the following actions:\nA: To attach well-defined managed policies (e.g. "AmazonEC2FullAccess"), select one or more policies from the list, then click Next: Review button to continue the setup process.'),(0,a.kt)("p",{parentName:"li"},"  B: To attach custom (inline) policies, click Create policy button and run the setup wizard to create a new inline IAM policy, based on your requirements. When you create a new policy, start with a minimum set of permissions and grant additional permissions as necessary. Once the inline IAM policy is created, return to the IAM role Permissions panel, click Refresh and select the newly created incline IAM policy. Once the custom policy is selected, click Next: Review button to continue the process.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: On Review panel, provide a unique name and a description for your new IAM service role, then click Create role to finish the setup process and create the IAM role.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 5: Navigate to CloudFormation dashboard at ",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/"},"https://console.aws.amazon.com/cloudformation/"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 6: Select the CloudFormation stack that you want to update.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 7: Click Actions button from the dashboard top menu and select Update stack option.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 8: On the Select Template panel, choose Use current template and click Next.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 9: On the Specify Details panel, leave the configuration parameters unchanged and click Next.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 10: On the Options panel, within Permissions section, select the newly created IAM service role from the IAM Role dropdown list to associate the new role with the selected stack. Leave the rest of the settings unchanged, then click Next.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 11: On the Review panel, review the stack details and click Update to update the selected CloudFormation stack. The resource status should change to UPDATE_IN_PROGRESS and once the process is finished, to UPDATE_COMPLETE."))))}d.isMDXComponent=!0}}]);