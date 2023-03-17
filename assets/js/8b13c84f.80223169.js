"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[30756],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72616:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),l={},c=void 0,u={unversionedId:"aws/audit/cloudtrailmonitoring/rules/cloudtrail_management_events_remediation",id:"aws/audit/cloudtrailmonitoring/rules/cloudtrail_management_events_remediation",title:"cloudtrail_management_events_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudtrailmonitoring/rules/cloudtrail_management_events_remediation.md",sourceDirName:"aws/audit/cloudtrailmonitoring/rules",slug:"/aws/audit/cloudtrailmonitoring/rules/cloudtrail_management_events_remediation",permalink:"/aws/audit/cloudtrailmonitoring/rules/cloudtrail_management_events_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to enable Management events for all CloudTrail trails inside AWS account?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: In the navigation panel, select Trails. Choose the CloudTrail trail that you want to reconfigure.\n(see Audit section part I to identify the right resource) then click on its identifier to access the configuration page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: Click the Edit icon: available next to the Management events section, to include Management events into the selected trail logging configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 3: For Read/Write events setting, choose Read-only option for read API operations such as EC2 DescribeInstances, Write-only option for create, update and delete API operations or All option (recommended) for both read and write API operations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: Click Save to apply the changes and save the trail configuration. The selected AWS Cloudtrail trail will begin to record Management events."))))}m.isMDXComponent=!0}}]);