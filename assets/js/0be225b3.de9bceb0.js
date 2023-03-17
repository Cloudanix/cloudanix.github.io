"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[21485],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68034:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),c=["components"],l={slug:"instance_level_ssh_only",title:"SSH Keys Should Be Instance Specific",sidebar_label:"SSH Keys Should Be Instance Specific"},a=void 0,s={unversionedId:"gcp/audit/gcpcomputemonitoring/rules/instance_level_ssh_only",id:"gcp/audit/gcpcomputemonitoring/rules/instance_level_ssh_only",title:"SSH Keys Should Be Instance Specific",description:"Back",source:"@site/docs/gcp/audit/gcpcomputemonitoring/rules/instance_level_ssh_only.md",sourceDirName:"gcp/audit/gcpcomputemonitoring/rules",slug:"/gcp/audit/gcpcomputemonitoring/rules/instance_level_ssh_only",permalink:"/gcp/audit/gcpcomputemonitoring/rules/instance_level_ssh_only",draft:!1,tags:[],version:"current",frontMatter:{slug:"instance_level_ssh_only",title:"SSH Keys Should Be Instance Specific",sidebar_label:"SSH Keys Should Be Instance Specific"}},u={},p=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../gcpcomputemonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Instances should not be configured to allow project-wide SSH keys. To support the principle of least privilege and prevent potential privilege escalation, instances should not be given access to project-wide SSH keys."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CBP, CIS"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys"},"https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys"))))}f.isMDXComponent=!0}}]);