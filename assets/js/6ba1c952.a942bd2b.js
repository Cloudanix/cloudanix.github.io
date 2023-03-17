"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[66461],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(t),g=i,f=p["".concat(l,".").concat(g)]||p[g]||s[g]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33780:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],c={slug:"cdn_regional_backend_services_have_connection_draining",title:"Cloud CDN Regional Backend Services Should Have Connection Draining",sidebar_label:"Cloud CDN Regional Backend Services Should Have Connection Draining"},l=void 0,d={unversionedId:"gcp/audit/gcpcdnmonitoring/rules/cdn_regional_backend_services_have_connection_draining",id:"gcp/audit/gcpcdnmonitoring/rules/cdn_regional_backend_services_have_connection_draining",title:"Cloud CDN Regional Backend Services Should Have Connection Draining",description:"Back",source:"@site/docs/gcp/audit/gcpcdnmonitoring/rules/cdn_regional_backend_services_have_connection_draining.md",sourceDirName:"gcp/audit/gcpcdnmonitoring/rules",slug:"/gcp/audit/gcpcdnmonitoring/rules/cdn_regional_backend_services_have_connection_draining",permalink:"/gcp/audit/gcpcdnmonitoring/rules/cdn_regional_backend_services_have_connection_draining",draft:!1,tags:[],version:"current",frontMatter:{slug:"cdn_regional_backend_services_have_connection_draining",title:"Cloud CDN Regional Backend Services Should Have Connection Draining",sidebar_label:"Cloud CDN Regional Backend Services Should Have Connection Draining"}},u={},s=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:s};function g(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../gcpcdnmonitoring"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"Cloud CDN should not send any new requests to the unhealthy instance if an compute instance fails health checks"),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"Medium"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Reliability"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"CBP"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/load-balancing/docs/enabling-connection-draining"},"https://cloud.google.com/load-balancing/docs/enabling-connection-draining"))))}g.isMDXComponent=!0}}]);