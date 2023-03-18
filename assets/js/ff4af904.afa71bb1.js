"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[57123],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),f=s(n),m=r,p=f["".concat(u,".").concat(m)]||f[m]||d[m]||a;return n?o.createElement(p,i(i({ref:e},c),{},{components:n})):o.createElement(p,i({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44616:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={slug:"stack_failed_status",title:"CloudFormation Stacks Should Not Have A Failed Status",sidebar_label:"CloudFormation Stacks Should Not Have A Failed Status"},u=void 0,s={unversionedId:"aws/audit/cloudformationmonitoring/rules/stack_failed_status",id:"aws/audit/cloudformationmonitoring/rules/stack_failed_status",title:"CloudFormation Stacks Should Not Have A Failed Status",description:"Back",source:"@site/docs/aws/audit/cloudformationmonitoring/rules/stack_failed_status.md",sourceDirName:"aws/audit/cloudformationmonitoring/rules",slug:"/aws/audit/cloudformationmonitoring/rules/stack_failed_status",permalink:"/aws/audit/cloudformationmonitoring/rules/stack_failed_status",draft:!1,tags:[],version:"current",frontMatter:{slug:"stack_failed_status",title:"CloudFormation Stacks Should Not Have A Failed Status",sidebar_label:"CloudFormation Stacks Should Not Have A Failed Status"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],f={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../cloudformationmonitoring"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"None of your Amazon CloudFormation stacks should be in Failed mode for more than 6 hours. Any failed CloudFormation stacks that are not fixed on time can lead to application downtime, security issues or unexpected costs on your AWS bill."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"Medium"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Operational Maturity"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"APRA, MAS"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html"},"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html"))))}m.isMDXComponent=!0}}]);