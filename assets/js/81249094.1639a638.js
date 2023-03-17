"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[63626],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53382:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={slug:"instance_in_auto_scaling_group",title:"Instance Should Be Launched In Auto Scaling Group",sidebar_label:"Instance Should Be Launched In Auto Scaling Group"},u=void 0,l={unversionedId:"aws/audit/ec2monitoring/rules/instance_in_auto_scaling_group",id:"aws/audit/ec2monitoring/rules/instance_in_auto_scaling_group",title:"Instance Should Be Launched In Auto Scaling Group",description:"Back",source:"@site/docs/aws/audit/ec2monitoring/rules/instance_in_auto_scaling_group.md",sourceDirName:"aws/audit/ec2monitoring/rules",slug:"/aws/audit/ec2monitoring/rules/instance_in_auto_scaling_group",permalink:"/aws/audit/ec2monitoring/rules/instance_in_auto_scaling_group",draft:!1,tags:[],version:"current",frontMatter:{slug:"instance_in_auto_scaling_group",title:"Instance Should Be Launched In Auto Scaling Group",sidebar_label:"Instance Should Be Launched In Auto Scaling Group"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../ec2monitoring"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"Every EC2 instance should be launched inside an Auto Scaling Group (ASG) in order to follow the best AWS reliability and security practices."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"Medium"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Reliability, Security"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"MAS, NIST"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html"},"https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html"))))}f.isMDXComponent=!0}}]);