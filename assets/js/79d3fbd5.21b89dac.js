"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[1937],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),b=i,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=r(83117),i=r(80102),l=(r(67294),r(3905)),a=["components"],o={slug:"elb_web_tier_listener_security",title:"Secure Listeners in Web-tier ELBs",sidebar_label:"Secure Listeners in Web-tier ELBs"},c=void 0,s={unversionedId:"aws/audit/elbmonitoring/rules/elb_web_tier_listener_security",id:"aws/audit/elbmonitoring/rules/elb_web_tier_listener_security",title:"Secure Listeners in Web-tier ELBs",description:"Back",source:"@site/docs/aws/audit/elbmonitoring/rules/elb_web_tier_listener_security.md",sourceDirName:"aws/audit/elbmonitoring/rules",slug:"/aws/audit/elbmonitoring/rules/elb_web_tier_listener_security",permalink:"/aws/audit/elbmonitoring/rules/elb_web_tier_listener_security",draft:!1,tags:[],version:"current",frontMatter:{slug:"elb_web_tier_listener_security",title:"Secure Listeners in Web-tier ELBs",sidebar_label:"Secure Listeners in Web-tier ELBs"}},u={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function b(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../elbmonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"Your web-tier Elastic Load Balancer (ELB) listeners should be using the HTTPS/SSL protocol to encrypt the communication between your application clients and the load balancer."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"High"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Security"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"PCIDSS, APRA, MAS"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html"))))}b.isMDXComponent=!0}}]);