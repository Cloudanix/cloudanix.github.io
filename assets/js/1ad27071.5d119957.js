"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[77539],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=(n(44996),["components"]),s={},p=void 0,c={unversionedId:"aws/audit/rdsmonitoring/rules/rds_snapshot_encryption_remediation",id:"aws/audit/rdsmonitoring/rules/rds_snapshot_encryption_remediation",title:"rds_snapshot_encryption_remediation",description:"Remediation",source:"@site/docs/aws/audit/rdsmonitoring/rules/rds_snapshot_encryption_remediation.md",sourceDirName:"aws/audit/rdsmonitoring/rules",slug:"/aws/audit/rdsmonitoring/rules/rds_snapshot_encryption_remediation",permalink:"/aws/audit/rdsmonitoring/rules/rds_snapshot_encryption_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to enable snapshot encryption feature?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, under Amazon RDS, click Snapshots.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: Select a snapshot tab from the snapshot category tabs to list all related RDS snapshots owned by your AWS account.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 3: Select the unencrypted RDS snapshot that you want to encrypt (see Audit section part I to identify the right resource).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: Click the Actions dropdown button from the dashboard top menu and select Copy Snapshot.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 5: On the Copy Snapshot page, perform the following commands:\nA: From the Destination Region dropdown list, select the region to write the copy of the selected snapshot.\nB: In the New DB Snapshot Identifier box, type a unique name/identifier for the new RDS snapshot (copy).\nC: (Optional) From Target Option Group dropdown, select an option group to associate with your target database snapshot.\nD: (Optional) Select Copy Tags checkbox if you want your new snapshot to have the same tags as the source snapshot.\nE: In the Encryption section, select Enable encryption to turn on encryption at rest for the new RDS snapshot. Select (default) aws/rds from the Master Key dropdown list to use the default master key (also known as AWS Managed Key), a predefined key that protects your RDS database snapshot when no other key is defined for this purpose.\nF: Click Copy Snapshot to confirm the action. The process will take a couple of minutes to complete. Once created, you should see the encrypted RDS snapshot (copy) with the Status set to available, listed on the Snapshots page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 6: Now that your Amazon RDS database snapshot is encrypted, you can safely delete the unencrypted snapshot. To remove the required RDS snapshot from your AWS account, perform the following actions:\nA: Select the source AWS RDS snapshot that you want to delete.\nB: Click the Actions dropdown button from the dashboard top menu and select Delete Snapshot.\nC: Inside Delete snapshot-name Snapshot dialog box, click Delete to confirm your action."))))}h.isMDXComponent=!0}}]);