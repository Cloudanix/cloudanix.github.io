"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[45467],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),u=["components"],s={slug:"sgaudit",title:"Security Groups Audit",sidebar_label:"Security Groups Audit"},l=void 0,o={unversionedId:"aws/audit/sgaudit",id:"aws/audit/sgaudit",title:"Security Groups Audit",description:"Checks performed",source:"@site/docs/aws/audit/sgaudit.md",sourceDirName:"aws/audit",slug:"/aws/audit/sgaudit",permalink:"/aws/audit/sgaudit",draft:!1,tags:[],version:"current",frontMatter:{slug:"sgaudit",title:"Security Groups Audit",sidebar_label:"Security Groups Audit"},sidebar:"sidebar",previous:{title:"S3 Audit",permalink:"/aws/audit/s3publiccheck"},next:{title:"SES Audit",permalink:"/aws/audit/sesmonitoring"}},c={},p=[{value:"Checks performed",id:"checks-performed",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/vpc_unused_exists"},"Unused Virtual Private Gateways Should Be Removed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/vpc_exists_without_flow_logs"},"Flow Logs on VPC Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/subnet_exists_without_flow_logs"},"Flow Logs Should be Enabled on Subnet")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/network_acl_unused_exists"},"Unused Network ACLs Should Be Removed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/security_group_unused_exists"},"Unused Security Groups Should Be Removed")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/default_sg_unrestricted"},"Default Security Groups Should Not Allow Unrestricted Inbound Access")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_exist_with_default_groups"},"Default Security Groups Should Block All Traffic")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_exist_with_default_groups_and_public"},"Default Security Group Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_exist_with_multiple_security_groups"},"Excessive Number of Security Groups Should Not Be Present")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_public_instances_exist"},"EC2 instances Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_exist_with_ports_open"},"Ports Should Not Be Open for External Traffic")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_exist_with_ports_open_for_internal"},"Ports Should Not Be Open for Internal Traffic")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/ec2_instances_with_icmp_exist"},"EC2 Instance Should Not Have Open ICMP ports")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/rds_public_instance_exists"},"RDS Instances Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/redshift_public_instance_exists"},"Redshift Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"sgaudit/rules/mq_publicly_accessible"},"MQ Broker Should Not Be Publicly Accessible"))))}f.isMDXComponent=!0}}]);