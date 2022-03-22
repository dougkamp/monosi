"use strict";(self.webpackChunkmonosi_documentation=self.webpackChunkmonosi_documentation||[]).push([[2741],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(t,e,n){n(7294)},6396:function(t,e,n){n(7294),n(2389),n(9443);n(3616)},8925:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(8215),n(6396),["components"]),c={id:"getting-started",title:"Getting Started",description:"Data quality in minutes",sidebar_label:"Getting Started"},l=void 0,s={unversionedId:"user-guide/getting-started",id:"user-guide/getting-started",title:"Getting Started",description:"Data quality in minutes",source:"@site/docs/user-guide/getting-started.md",sourceDirName:"user-guide",slug:"/user-guide/getting-started",permalink:"/docs/user-guide/getting-started",editUrl:"https://github.com/monosidev/monosi/tree/master/documentation/docs/user-guide/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",description:"Data quality in minutes",sidebar_label:"Getting Started"},sidebar:"sidebarUserGuide",previous:{title:"What is Monosi?",permalink:"/docs/user-guide/introduction"},next:{title:"Metrics",permalink:"/docs/user-guide/table-health"}},u=[{value:"1. Deploy Monosi",id:"1-deploy-monosi",children:[],level:2},{value:"2. Connect a Data Source",id:"2-connect-a-data-source",children:[],level:2},{value:"3. Connect Alerts",id:"3-connect-alerts",children:[],level:2},{value:"4. Track data quality monitors",id:"4-track-data-quality-monitors",children:[],level:2}],d={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to use Monosi successfully, you will need to complete the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deploy Monosi"),(0,a.kt)("li",{parentName:"ol"},"Connect a data source"),(0,a.kt)("li",{parentName:"ol"},"Connect an alerting destination"),(0,a.kt)("li",{parentName:"ol"},"Track data quality monitors")),(0,a.kt)("h2",{id:"1-deploy-monosi"},"1. Deploy Monosi"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Docker on your computer, and ensure that you have Docker Compose v2 installed."),(0,a.kt)("li",{parentName:"ol"},"Run the following commands")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/monosidev/monosi.git\ncd monosi\nmake compose\n")),(0,a.kt)("p",null,"Navigate to http://localhost:3000 to access the web application once it has started."),(0,a.kt)("h2",{id:"2-connect-a-data-source"},"2. Connect a Data Source"),(0,a.kt)("p",null,"To add a data source, click \u201cAdd Data\u201d on the Home screen."),(0,a.kt)("img",{src:"/img/datasource/connect.png",height:"700",alt:"Connect Datasource"}),(0,a.kt)("p",null,"Then, click the button \u201cCreate Data Source\u201d in order to enter the details for your data warehouse and connect. You can verify the connection after by clicking \u201cTest\u201d."),(0,a.kt)("img",{src:"/img/datasource/create-1.png",height:"700",alt:"Create datasource 1"}),(0,a.kt)("img",{src:"/img/datasource/create-2.png",height:"700",alt:"Create datasource 2"}),(0,a.kt)("p",null,"More detailed information about connecting to your specific data source and a list of supported integrations can be found ",(0,a.kt)("a",{href:"/docs/integrations/snowflake"},"here"),"."),(0,a.kt)("h2",{id:"3-connect-alerts"},"3. Connect Alerts"),(0,a.kt)("p",null,"Navigate to alerts by clicking \u201cAdd Alerts\u201d on the Home screen."),(0,a.kt)("img",{src:"/img/alerts/alerts.png",height:"700",alt:"Alerts"}),(0,a.kt)("p",null,"Then, click the button \u201cCreate Data Source\u201d in order to enter the details for your alert destination and hit submit. "),(0,a.kt)("img",{src:"/img/alerts/create.png",height:"700",alt:"Create alert"}),(0,a.kt)("h2",{id:"4-track-data-quality-monitors"},"4. Track data quality monitors"),(0,a.kt)("p",null,"Navigate to Monitors from the Home screen by clicking \u201cCentralize & Monitor\u201d. If you don't see any monitors in the list, check the jobs page to ensure that a job has started. If there are no jobs running, wait a few minutes for Monosi to start (if there are no jobs after a few minutes, reach out in our ",(0,a.kt)("a",{parentName:"p",href:"https://monosi.dev/slack"},"Slack"),")"),(0,a.kt)("img",{src:"/img/monitors/monitors.png",height:"700",alt:"Monitors"}),(0,a.kt)("p",null,"If you've previously connected a datasource, you should see a list of created monitors that Monosi has automatically profiled for you. Monosi analyzes the historical data related to the data quality of the detected tables and columns, then begins regularly monitoring and alerting you of future issues."),(0,a.kt)("img",{src:"/img/monitors/monitors_index.png",height:"700",alt:"Monitor Index"}))}p.isMDXComponent=!0}}]);