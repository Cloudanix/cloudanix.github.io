"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[19524],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=["components"],l={slug:"is_dkim_enabled",title:"DKIM Signing Should Be Enabled For AWS SES",sidebar_label:"DKIM Signing Should Be Enabled For AWS SES"},s=void 0,d={unversionedId:"aws/audit/sesmonitoring/rules/is_dkim_enabled",id:"aws/audit/sesmonitoring/rules/is_dkim_enabled",title:"DKIM Signing Should Be Enabled For AWS SES",description:"Back",source:"@site/docs/aws/audit/sesmonitoring/rules/is_dkim_enabled.md",sourceDirName:"aws/audit/sesmonitoring/rules",slug:"/aws/audit/sesmonitoring/rules/is_dkim_enabled",permalink:"/aws/audit/sesmonitoring/rules/is_dkim_enabled",draft:!1,tags:[],version:"current",frontMatter:{slug:"is_dkim_enabled",title:"DKIM Signing Should Be Enabled For AWS SES",sidebar_label:"DKIM Signing Should Be Enabled For AWS SES"}},u={},c=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../sesmonitoring"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"The DomainKeys Identified Mail (DKIM) feature should be enabled for domains and addresses in SES. DKIM is a security feature that allows recipients of an email to verify that the sender domain has authorized the message and that it has not been spoofed."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"Medium"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Security"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"CBP"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html"},"http://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html"))))}m.isMDXComponent=!0}}]);