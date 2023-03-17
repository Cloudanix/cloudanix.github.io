"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[63934],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=(n(44996),["components"]),s={},c=void 0,l={unversionedId:"aws/audit/sesmonitoring/rules/is_identity_exposed_remediation",id:"aws/audit/sesmonitoring/rules/is_identity_exposed_remediation",title:"is_identity_exposed_remediation",description:"Remediation",source:"@site/docs/aws/audit/sesmonitoring/rules/is_identity_exposed_remediation.md",sourceDirName:"aws/audit/sesmonitoring/rules",slug:"/aws/audit/sesmonitoring/rules/is_identity_exposed_remediation",permalink:"/aws/audit/sesmonitoring/rules/is_identity_exposed_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"remediation"},"Remediation"),(0,o.kt)("p",null,"How to update the sending authorization policies associated with your Amazon SES identities?"),(0,o.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, within Identity Management section, select Domains to update the sending authorization policies defined for your existing Amazon SES domains or Email Addresses to update the policies defined for your AWS SES email addresses.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 2: Select the domain/email address to reconfigure then click View Details from the dashboard top menu to access the resource configuration details page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 3: Click Identity Policies to expand the panel with the sending authorization policies defined for the selected domain/email address.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Step 4: In the Policy Actions column, click Edit Policy to edit the associated policy document. On the Edit Policy page, inside Policy Document box, perform one of the following actions:\nA: Replace the "Everyone" grantee, i.e. "*", from the Principal element value with a trusted AWS account ID\n(e.g. { "AWS": "123456789012" } ),\nan AWS account ARN (e.g. { "AWS": "arn:aws:iam::123456789012:root" } )\nor an IAM user ARN\n(e.g. { "AWS": "arn:aws:iam::123456789012:user/ses-delegate-sender" } ).\nB: Add a Condition clause to the existing policy statement to grant cross-account access only to a specific AWS account\n(e.g. "Condition": { "StringEquals": { "aws:SourceAccount": "123456789012" } }).')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Step 5: Click Apply Policy to apply the changes. In the Overwrite Existing Policy dialog box, click Overwrite to confirm the action."))))}m.isMDXComponent=!0}}]);