"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[79566],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10975:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],u={slug:"azure_audit_compute_vms_using_premium_SSD",title:"Virtual Machines should user Standard SSD for Cost Effective storage",sidebar_label:"Virtual Machines should user Standard SSD for Cost Effective storage"},s=void 0,l={unversionedId:"azure/audit/azurecomputeaudit/rules/azure_audit_compute_vms_using_premium_SSD",id:"azure/audit/azurecomputeaudit/rules/azure_audit_compute_vms_using_premium_SSD",title:"Virtual Machines should user Standard SSD for Cost Effective storage",description:"Back",source:"@site/docs/azure/audit/azurecomputeaudit/rules/azure_audit_compute_vms_using_premium_SSD.md",sourceDirName:"azure/audit/azurecomputeaudit/rules",slug:"/azure/audit/azurecomputeaudit/rules/azure_audit_compute_vms_using_premium_SSD",permalink:"/azure/audit/azurecomputeaudit/rules/azure_audit_compute_vms_using_premium_SSD",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_compute_vms_using_premium_SSD",title:"Virtual Machines should user Standard SSD for Cost Effective storage",sidebar_label:"Virtual Machines should user Standard SSD for Cost Effective storage"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../azurecomputeaudit"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"Ensure that your Microsoft Azure virtual machines (VMs) are using Standard SSD disk volumes instead of Premium SSD volumes for cost-effective storage that fits a broad range of workloads from web servers to enterprise applications that need consistent performance at lower IOPS levels. Unless you are running mission-critical applications or performance sensitive workloads that need more than 6000 IOPS or 750 MiB/s of throughput per VM disk volume, it's recommends converting your Premium SSD volumes to Standard SSD in order to lower the cost of your Azure monthly bill."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"High"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Cost Optimization"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"CBP, CISMicrosoftAzureFoundations"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/convert-disk-storage"},"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/convert-disk-storage"))))}m.isMDXComponent=!0}}]);