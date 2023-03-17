"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[28997],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return v}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),v=o,f=d["".concat(a,".").concat(v)]||d[v]||s[v]||i;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61741:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return v},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),c=["components"],l={slug:"open_vnc_server",title:"VNC Server Port Should Not Be Open",sidebar_label:"VNC Server Port Should Not Be Open"},a=void 0,u={unversionedId:"gcp/audit/gcpvpcmonitoring/rules/open_vnc_server",id:"gcp/audit/gcpvpcmonitoring/rules/open_vnc_server",title:"VNC Server Port Should Not Be Open",description:"Back",source:"@site/docs/gcp/audit/gcpvpcmonitoring/rules/open_vnc_server.md",sourceDirName:"gcp/audit/gcpvpcmonitoring/rules",slug:"/gcp/audit/gcpvpcmonitoring/rules/open_vnc_server",permalink:"/gcp/audit/gcpvpcmonitoring/rules/open_vnc_server",draft:!1,tags:[],version:"current",frontMatter:{slug:"open_vnc_server",title:"VNC Server Port Should Not Be Open",sidebar_label:"VNC Server Port Should Not Be Open"}},p={},s=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],d={toc:s};function v(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../gcpvpcmonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Determines if TCP port 5900 for VNC Server is open to the public. While some ports such as HTTP and HTTPS are required to be open to the public to function properly, more sensitive services such as VNC Server should be restricted to known IP addresses."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"Medium"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CBP"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/vpc/docs/using-firewalls"},"https://cloud.google.com/vpc/docs/using-firewalls"))))}v.isMDXComponent=!0}}]);