"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[87516],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),l={},c=void 0,u={unversionedId:"aws/audit/elbmonitoring/rules/classic_elb_listener_security_remediation",id:"aws/audit/elbmonitoring/rules/classic_elb_listener_security_remediation",title:"classic_elb_listener_security_remediation",description:"Remediation",source:"@site/docs/aws/audit/elbmonitoring/rules/classic_elb_listener_security_remediation.md",sourceDirName:"aws/audit/elbmonitoring/rules",slug:"/aws/audit/elbmonitoring/rules/classic_elb_listener_security_remediation",permalink:"/aws/audit/elbmonitoring/rules/classic_elb_listener_security_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to remove any insecure protocol definitions from ELB SSL negotiation settings?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: In the navigation panel, under Load balancing, click Load Balancers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Select your Elastic Load Balancer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Select the Listeners tab from the bottom panel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: In the Cipher column of the HTTPS listener click Change.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 5: In the Select a Cipher dialog box, select one of the following options configurations:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 6: Predefined Security Policy:\nSelect the latest predefined security policy from the list named ELBSecurityPolicy-TLS-1-2-2017-01 or ELBSecurityPolicy-TLS-1-1-2017-01 or ELBSecurityPolicy-2016-08: and then click Save. The selected predefined policy does NOT include the Protocol-SSLv2, Protocol-SSLv3, and Protocol-TLSv1 unsafe protocols.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 7: Custom Security Policy:\nUncheck Protocol-SSLv2 and/or Protocol-SSLv3 and/or Protocol-TLSv1 from the SSL Protocols section found in your SSL custom policy and then click Save."))))}m.isMDXComponent=!0}}]);