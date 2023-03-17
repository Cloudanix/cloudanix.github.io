"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[67782],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97721:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),s=["components"],l={slug:"esmonitoring",title:"Elastic Search Audit",sidebar_label:"Elastic Search Audit"},o=void 0,c={unversionedId:"aws/audit/esmonitoring",id:"aws/audit/esmonitoring",title:"Elastic Search Audit",description:"Checks performed",source:"@site/docs/aws/audit/esmonitoring.md",sourceDirName:"aws/audit",slug:"/aws/audit/esmonitoring",permalink:"/aws/audit/esmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"esmonitoring",title:"Elastic Search Audit",sidebar_label:"Elastic Search Audit"},sidebar:"sidebar",previous:{title:"EC2 Audit",permalink:"/aws/audit/ec2monitoring"},next:{title:"ELB Audit",permalink:"/aws/audit/elbmonitoring"}},u={},p=[{value:"Checks performed",id:"checks-performed",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_encrypted_domain"},"ElasticSearch Domains Should Be Encrypted")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_https_only"},"ElasticSearch Should Use HTTPS Only")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_logging_enabled"},"ElasticSearch Should Have Logging Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_node_to_node_encryption"},"ElasticSearch Domains Should Have Node To Node Encryption")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_public_service_domain"},"ElasticSearch Domains Should Be Launched With Private VPC Endpoints")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_upgrade_available"},"ElasticSearch Domains Should Use The Latest Service Software")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_cluster_status"},"ElasticSearch Cluster Status Should Be Healthy")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_encrypted_with_cmks"},"Elasticsearch Domain Should Be Encrypted with KMS CMKs")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_free_storage"},"Elasticsearch Should Have Free Storage Space")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_whitelisted_ips_only"},"Elasticsearch Domains Should Be Accessible Only From Whitelisted IP Addresses")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_cross_account_access"},"Elasticsearch Domains Should Not Allow Cross Account Access")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_dedicated_master_enabled"},"Elasticsearch Clusters Should Have Dedicated Master Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_desired_instance_type"},"Elasticsearch Should Use The Desired Instance Type")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_domain_exposed"},"Elasticsearch Domains Should Not Be Publicly Exposed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_general_purpose_ssd"},"Elasticsearch Should Use General Purpose SSD")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_instance_counts"},"Elasticsearch Instance Count")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_ri_lease_expiration_30_days"},"Elasticsearch Reserved Instance Lease Expiration In The Next 30 Days")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_ri_lease_expiration_7_days"},"Elasticsearch Reserved Instance Lease Expiration In The Next 7 Days")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_ri_payment_failed"},"Elasticsearch Reserved Instance Should Not Have Status - Payment Failed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_ri_payment_pending"},"Elasticsearch Reserved Instance Should Not Have Status - Payment Pending")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_ri_recent_purchases"},"Elasticsearch Reserved Instance Recent Purchases Should Be Reviewed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_zone_awareness_enabled"},"Elasticsearch Should Have Zone Awareness Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"esmonitoring/rules/es_idle_clusters"},"Elasticsearch Clusters Should Not Be Idle"))))}d.isMDXComponent=!0}}]);