"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[25701],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={slug:"elb_no_deletion_policy",title:"ELBs Should Have Deletion Protection Flag Enabled",sidebar_label:"ELBs Should Have Deletion Protection Flag Enabled"},c=void 0,u={unversionedId:"aws/audit/elbmonitoring/rules/elb_no_deletion_policy",id:"aws/audit/elbmonitoring/rules/elb_no_deletion_policy",title:"ELBs Should Have Deletion Protection Flag Enabled",description:"Back",source:"@site/docs/aws/audit/elbmonitoring/rules/elb_no_deletion_policy.md",sourceDirName:"aws/audit/elbmonitoring/rules",slug:"/aws/audit/elbmonitoring/rules/elb_no_deletion_policy",permalink:"/aws/audit/elbmonitoring/rules/elb_no_deletion_policy",draft:!1,tags:[],version:"current",frontMatter:{slug:"elb_no_deletion_policy",title:"ELBs Should Have Deletion Protection Flag Enabled",sidebar_label:"ELBs Should Have Deletion Protection Flag Enabled"}},d={},s=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../elbmonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"Deletion Protection flag should be enabled in order to prevent accidental deletions."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"Medium"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Reliability, Operational Maturity"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"CBP"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/elb/index.html"},"https://docs.aws.amazon.com/cli/latest/reference/elb/index.html"))))}f.isMDXComponent=!0}}]);