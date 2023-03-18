"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[91844],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=n(83117),o=n(80102),s=(n(67294),n(3905)),i=["components"],a={slug:"is_cross_account_access",title:"SES Identities Should Not Allow Cross-Account Access",sidebar_label:"SES Identities Should Not Allow Cross-Account Access"},c=void 0,l={unversionedId:"aws/audit/sesmonitoring/rules/is_cross_account_access",id:"aws/audit/sesmonitoring/rules/is_cross_account_access",title:"SES Identities Should Not Allow Cross-Account Access",description:"Back",source:"@site/docs/aws/audit/sesmonitoring/rules/is_cross_account_access.md",sourceDirName:"aws/audit/sesmonitoring/rules",slug:"/aws/audit/sesmonitoring/rules/is_cross_account_access",permalink:"/aws/audit/sesmonitoring/rules/is_cross_account_access",draft:!1,tags:[],version:"current",frontMatter:{slug:"is_cross_account_access",title:"SES Identities Should Not Allow Cross-Account Access",sidebar_label:"SES Identities Should Not Allow Cross-Account Access"}},u={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"../../sesmonitoring"},"Back"))),(0,s.kt)("h3",{id:"more-info"},"More Info:"),(0,s.kt)("p",null,"AWS SES identities (domains and/or email addresses) should not allow unknown cross-account access via authorization policies. Your SES identities should be configured to allow access only to trusted (friendly) AWS accounts in order to prevent unauthorized users from sending emails on your behalf."),(0,s.kt)("h3",{id:"risk-level"},"Risk Level"),(0,s.kt)("p",null,"High"),(0,s.kt)("h3",{id:"address"},"Address"),(0,s.kt)("p",null,"Security"),(0,s.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,s.kt)("p",null,"APRA, MAS, NIST"),(0,s.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-overview.html"},"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-overview.html"))))}f.isMDXComponent=!0}}]);