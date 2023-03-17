"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[12343],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=(n(44996),["components"]),l={},c=void 0,s={unversionedId:"aws/audit/cloudwatchmonitoring/rules/cmk_disabled_or_scheduled_for_deletion_alarm_remediation",id:"aws/audit/cloudwatchmonitoring/rules/cmk_disabled_or_scheduled_for_deletion_alarm_remediation",title:"cmk_disabled_or_scheduled_for_deletion_alarm_remediation",description:"Remediation",source:"@site/docs/aws/audit/cloudwatchmonitoring/rules/cmk_disabled_or_scheduled_for_deletion_alarm_remediation.md",sourceDirName:"aws/audit/cloudwatchmonitoring/rules",slug:"/aws/audit/cloudwatchmonitoring/rules/cmk_disabled_or_scheduled_for_deletion_alarm_remediation",permalink:"/aws/audit/cloudwatchmonitoring/rules/cmk_disabled_or_scheduled_for_deletion_alarm_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4},{value:"Create SNS topic and necessary subscription to send email notifications whenever the appropriate AWS CloudWatch alarm is triggered:",id:"create-sns-topic-and-necessary-subscription-to-send-email-notifications-whenever-the-appropriate-aws-cloudwatch-alarm-is-triggered",level:5},{value:"Create the necessary metric filter and the CloudWatch alarm that will fire and send email notifications whenever an AWS CMK configuration will change:",id:"create-the-necessary-metric-filter-and-the-cloudwatch-alarm-that-will-fire-and-send-email-notifications-whenever-an-aws-cmk-configuration-will-change",level:5}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"remediation"},"Remediation"),(0,i.kt)("p",null,"How to ensure there is an Amazon CloudWatch alarm created and configured in your AWS account to fire each time an AWS CMK configuration change is made?"),(0,i.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,i.kt)("h5",{id:"create-sns-topic-and-necessary-subscription-to-send-email-notifications-whenever-the-appropriate-aws-cloudwatch-alarm-is-triggered"},"Create SNS topic and necessary subscription to send email notifications whenever the appropriate AWS CloudWatch alarm is triggered:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: In the navigation panel, select Topics and click the Create new topic button.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: In the Create new topic dialog box, enter a name and a display name for your topic then click Create Topic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: Open the newly created SNS topic configuration page by clicking on its Amazon Resource Name (ARN):")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: Under Subscription section click Create Subscription.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 5: Select Email as subscription protocol from the Protocol dropdown list.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 6: In the Endpoint box, enter the email address where you want to receive the CloudWatch alarm notifications then click Create Subscription to create the required subscription.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 7: Use your preferred email client application to open the message received from AWS Notifications, then click on the appropriate link to confirm your new subscription."))),(0,i.kt)("h5",{id:"create-the-necessary-metric-filter-and-the-cloudwatch-alarm-that-will-fire-and-send-email-notifications-whenever-an-aws-cmk-configuration-will-change"},"Create the necessary metric filter and the CloudWatch alarm that will fire and send email notifications whenever an AWS CMK configuration will change:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1: In the left navigation panel, select Logs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2: Select the log group created for your CloudTrail trail event logs and click Create Metric Filter button.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3: On the Define Logs Metric Filter page, paste the following pattern inside the Filter Pattern box: { ($.eventSource = kms.amazonaws.com) && (($.eventName = DisableKey) || ($.eventName = ScheduleKeyDeletion)) }")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 4: Review the metric filter config details then click Assign Metric.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 5: On the Create Metric Filter and Assign a Metric page, perform the following:\nA: In the Filter Name box, enter a unique name for the new filter, e.g. AWSCMKChanges."),(0,i.kt)("p",{parentName:"li"},"  B: In the Metric Namespace box, type CloudTrailMetrics."),(0,i.kt)("p",{parentName:"li"},"  C: In the Metric Name box, type CMKEventCount for the metric identifier."),(0,i.kt)("p",{parentName:"li"},"  D: Click Show advanced metric settings to slide down the advanced settings section."),(0,i.kt)("p",{parentName:"li"},"  E: In the Metric Value box, enter 1.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 6: Review the details then click Create Filter to generate your new CloudWatch Logs metric filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 7: On the current page click Create Alarm:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 8: In the Create Alarm dialog box, provide the following information\nA: Within the Alarm Threshold section, in the Name and Description fields, enter a unique name and a short description for the new CloudWatch alarm."),(0,i.kt)("p",{parentName:"li"},"  B: Under Whenever: Metric Name, select >= (greater than or equal to) from the is dropdown list and enter 1 as the threshold value in the box next to the dropdown list to trigger the alarm every time a configuration change involving an AWS CMK within your account is made."),(0,i.kt)("p",{parentName:"li"},"  C: In the Actions section, click the + Notification button, select State is ALARM from the Whenever this alarm dropdown menu and choose the AWS SNS topic name created at Step 1 from Send notification to."),(0,i.kt)("p",{parentName:"li"},"  D: In the Alarm Preview section, select 5 Minutes from the Period dropdown list and Sum from the Statistic list."),(0,i.kt)("p",{parentName:"li"},"  E: Review the CloudWatch alarm configuration details then click Create Alarm. Once created, the new alarm will be listed on the Alarms page."))))}m.isMDXComponent=!0}}]);