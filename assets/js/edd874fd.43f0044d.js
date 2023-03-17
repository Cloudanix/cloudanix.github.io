"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[52486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},24282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),s={},u=void 0,c={unversionedId:"aws/audit/rdsmonitoring/rules/rds_reserved_instance_payment_pending_remediation",id:"aws/audit/rdsmonitoring/rules/rds_reserved_instance_payment_pending_remediation",title:"rds_reserved_instance_payment_pending_remediation",description:"Remediation",source:"@site/docs/aws/audit/rdsmonitoring/rules/rds_reserved_instance_payment_pending_remediation.md",sourceDirName:"aws/audit/rdsmonitoring/rules",slug:"/aws/audit/rdsmonitoring/rules/rds_reserved_instance_payment_pending_remediation",permalink:"/aws/audit/rdsmonitoring/rules/rds_reserved_instance_payment_pending_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],l={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to identify any pending RDS Reserved Instance (RI) purchases within your AWS account?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: On the Support Center page, click Create a case to initiate the support request process.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Step 2: On the Create Case page, perform the following:\nA: Under Regarding, select Account and Billing Support.\nB: Choose Billing (Service dropdown list) to send your request to AWS Billing department.\nC: Select Reserved Instances from the Category dropdown list.\nD: Inside the Subject box, enter a subject for your request such as "Retry RDS Reserved Instance pending payment".\nE: Within Description textbox, enter a small description for your request so that AWS support can evaluate properly your request.\nF: Under Contact method, select a preferred contact method that the AWS support team can use to respond to your request.\nG: Click Submit to send the request for your RDS Reserved Instance(s) to AWS.'))))}m.isMDXComponent=!0}}]);