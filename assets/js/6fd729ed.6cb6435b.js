"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[31374],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9150:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],s={slug:"es_cluster_status",title:"ElasticSearch Cluster Status Should Be Healthy",sidebar_label:"ElasticSearch Cluster Status Should Be Healthy"},i=void 0,u={unversionedId:"aws/audit/esmonitoring/rules/es_cluster_status",id:"aws/audit/esmonitoring/rules/es_cluster_status",title:"ElasticSearch Cluster Status Should Be Healthy",description:"Back",source:"@site/docs/aws/audit/esmonitoring/rules/es_cluster_status.md",sourceDirName:"aws/audit/esmonitoring/rules",slug:"/aws/audit/esmonitoring/rules/es_cluster_status",permalink:"/aws/audit/esmonitoring/rules/es_cluster_status",draft:!1,tags:[],version:"current",frontMatter:{slug:"es_cluster_status",title:"ElasticSearch Cluster Status Should Be Healthy",sidebar_label:"ElasticSearch Cluster Status Should Be Healthy"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../esmonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,'AWS ElasticSearch (ES) clusters should be healthy, i.e. they all have shard allocation status set to "Green"'),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"High"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Reliability"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"NIST"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/elasticsearch-red-yellow-status/"},"https://aws.amazon.com/premiumsupport/knowledge-center/elasticsearch-red-yellow-status/"))))}f.isMDXComponent=!0}}]);