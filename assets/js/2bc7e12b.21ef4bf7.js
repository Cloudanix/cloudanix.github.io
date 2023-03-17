"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[67436],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),s={},c=void 0,l={unversionedId:"aws/audit/ec2monitoring/rules/ebs_snapshots_not_public_remediation",id:"aws/audit/ec2monitoring/rules/ebs_snapshots_not_public_remediation",title:"ebs_snapshots_not_public_remediation",description:"Remediation",source:"@site/docs/aws/audit/ec2monitoring/rules/ebs_snapshots_not_public_remediation.md",sourceDirName:"aws/audit/ec2monitoring/rules",slug:"/aws/audit/ec2monitoring/rules/ebs_snapshots_not_public_remediation",permalink:"/aws/audit/ec2monitoring/rules/ebs_snapshots_not_public_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4},{value:"To Restrict Completely",id:"to-restrict-completely",level:4},{value:"To Restrict Public Access But Share Them With Specific AWS Accounts",id:"to-restrict-public-access-but-share-them-with-specific-aws-accounts",level:4}],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to secure your EC2 instance snapshot from public access?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("h4",{id:"to-restrict-completely"},"To Restrict Completely"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: Navigate to EC2 dashboard at ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"https://console.aws.amazon.com/ec2/"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: In the navigation panel, under Elastic Block Store, click Snapshots. Select the EBS snapshot that you want to make private.\n(see Audit section part I to identify the right resource).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Select the Permissions tab from the dashboard bottom panel and click the Edit button to update the access permissions for the selected volume snapshot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Step 4: Inside Modify Permissions dialog box, within This snapshot is currently section, select Private then click Save. The selected snapshot permissions status should change to "This snapshot is currently Private.".'))),(0,i.kt)("h4",{id:"to-restrict-public-access-but-share-them-with-specific-aws-accounts"},"To Restrict Public Access But Share Them With Specific AWS Accounts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, under ELASTIC BLOCK STORE section, choose Snapshots. Select the EBS snapshot that you want to make private (see Audit section part I to identify the right resource).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Select Permissions tab from the dashboard bottom panel and click the Edit button to update the selected volume snapshot access permissions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Inside Modify Image Permissions dialog box, perform the following actions:\nA: Select Private to make the selected EBS snapshot private.\nB: Within the AWS Account Number box, enter the ID number (e.g. 123456789012) of the AWS account with whom you want to share the selected volume snapshot and click Add Permission to confirm the action.\nC: Click Save to apply the changes."))))}h.isMDXComponent=!0}}]);