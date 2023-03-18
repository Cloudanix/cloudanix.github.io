"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[15967],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},44886:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),l=["components"],i={slug:"is_k8s_logging_enabled",title:"EKS Clusters Should Have Logging Enabled",sidebar_label:"EKS Clusters Should Have Logging Enabled"},s=void 0,u={unversionedId:"aws/audit/kubernetesmonitoring/rules/is_k8s_logging_enabled",id:"aws/audit/kubernetesmonitoring/rules/is_k8s_logging_enabled",title:"EKS Clusters Should Have Logging Enabled",description:"Back",source:"@site/docs/aws/audit/kubernetesmonitoring/rules/is_k8s_logging_enabled.md",sourceDirName:"aws/audit/kubernetesmonitoring/rules",slug:"/aws/audit/kubernetesmonitoring/rules/is_k8s_logging_enabled",permalink:"/aws/audit/kubernetesmonitoring/rules/is_k8s_logging_enabled",draft:!1,tags:[],version:"current",frontMatter:{slug:"is_k8s_logging_enabled",title:"EKS Clusters Should Have Logging Enabled",sidebar_label:"EKS Clusters Should Have Logging Enabled"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../kubernetesmonitoring"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"EKS clusters should have their control plane logs enabled and publish their API, audit, controller manager, scheduler or authenticator logs to AWS CloudWatch."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"Low"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Security, Reliability"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"PCIDSS, HIPAA, GDPR, APRA"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html"},"https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html"))))}g.isMDXComponent=!0}}]);