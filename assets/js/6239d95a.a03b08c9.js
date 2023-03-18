"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[79937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,m=f["".concat(d,".").concat(p)]||f[p]||c[p]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={slug:"deferred_maintenance",title:"Redshift Clusters Should Have Deferred Maintenance Enabled",sidebar_label:"Redshift Clusters Should Have Deferred Maintenance Enabled"},d=void 0,s={unversionedId:"aws/audit/redshiftmonitoring/rules/deferred_maintenance",id:"aws/audit/redshiftmonitoring/rules/deferred_maintenance",title:"Redshift Clusters Should Have Deferred Maintenance Enabled",description:"Back",source:"@site/docs/aws/audit/redshiftmonitoring/rules/deferred_maintenance.md",sourceDirName:"aws/audit/redshiftmonitoring/rules",slug:"/aws/audit/redshiftmonitoring/rules/deferred_maintenance",permalink:"/aws/audit/redshiftmonitoring/rules/deferred_maintenance",draft:!1,tags:[],version:"current",frontMatter:{slug:"deferred_maintenance",title:"Redshift Clusters Should Have Deferred Maintenance Enabled",sidebar_label:"Redshift Clusters Should Have Deferred Maintenance Enabled"}},u={},c=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],f={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../redshiftmonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Deferred maintenance should be enabled for all your AWS Redshift clusters in order to keep your data warehouse running without interruption during critical business periods. Amazon Redshift service gives you the option to defer maintenance for your clusters by up to 14 days."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"Medium"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Reliability"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"NIST"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html"},"https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html"))))}p.isMDXComponent=!0}}]);