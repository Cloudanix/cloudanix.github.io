"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[99603],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=(n(44996),["components"]),u={},c=void 0,l={unversionedId:"aws/audit/cloudfrontmonitoring/rules/cloudfront_insecure_ssl_remediation",id:"aws/audit/cloudfrontmonitoring/rules/cloudfront_insecure_ssl_remediation",title:"cloudfront_insecure_ssl_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudfrontmonitoring/rules/cloudfront_insecure_ssl_remediation.md",sourceDirName:"aws/audit/cloudfrontmonitoring/rules",slug:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_insecure_ssl_remediation",permalink:"/aws/audit/cloudfrontmonitoring/rules/cloudfront_insecure_ssl_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to remove the deprecated SSLv3 protocol from your Cloudfront distributions origin?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: Select the CDN distribution that is using insecure protocols for its origin(s) from the Distributions page, ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: From the dashboard top menu, click the Distribution Settings button.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Click the Origins tab. Now choose the distribution origin from the Origins list. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: Click the Edit button to access the selected origin configuration page.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 5: On the Origin Settings page and Origin SSL Protocols section uncheck the SSLv3 checkbox.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 6: Click Yes, Edit to save the changes."))))}f.isMDXComponent=!0}}]);