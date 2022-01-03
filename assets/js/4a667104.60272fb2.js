"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5507],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(4137)),a=["components"],s={title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md"},l="Configuring Database Retention",p={unversionedId:"docs/advanced/db-retention",id:"docs/advanced/db-retention",isDocsHomePage:!1,title:"Configuring Database Retention",description:"Goal",source:"@site/genDocs/docs/advanced/db-retention.md",sourceDirName:"docs/advanced",slug:"/advanced/db-retention",permalink:"/docs/advanced/db-retention",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md",tags:[],version:"current",frontMatter:{title:"Configuring Database Retention",sidebar_label:"Configuring Database Retention",slug:"/advanced/db-retention",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/advanced/db-retention.md"},sidebar:"overviewSidebar",previous:{title:"No Code Metadata",permalink:"/docs/advanced/no-code-modeling"},next:{title:"Aspect Versioning",permalink:"/docs/advanced/aspect-versioning"}},c=[{value:"Goal",id:"goal",children:[],level:2},{value:"What type of retention policies are supported?",id:"what-type-of-retention-policies-are-supported",children:[],level:2},{value:"When is the retention policy applied?",id:"when-is-the-retention-policy-applied",children:[],level:2},{value:"How to configure?",id:"how-to-configure",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-database-retention"},"Configuring Database Retention"),(0,r.kt)("h2",{id:"goal"},"Goal"),(0,r.kt)("p",null,"DataHub uses a database (or key-value store) to store different versions of the aspects as they get ingested. Storing\nmultiple versions of the aspects allows us to look at the history of how the aspect changed and to rollback to previous\nversion when incorrect metadata gets ingested. However, each version takes up space in the database, while bringing less\nvalue to the system. We need to be able to impose ",(0,r.kt)("strong",{parentName:"p"},"retention")," on these records to keep the size of the DB in check."),(0,r.kt)("p",null,"Goal of the retention system is to be able to ",(0,r.kt)("strong",{parentName:"p"},"configure and enforce retention policies")," on documents in various\nlevels (\nglobal, entity-level, aspect-level)"),(0,r.kt)("h2",{id:"what-type-of-retention-policies-are-supported"},"What type of retention policies are supported?"),(0,r.kt)("p",null,"We support 3 types of retention policies."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Indefinite retention: Keep all versions of aspects"),(0,r.kt)("li",{parentName:"ol"},"Version-based retention: Keep the latest N versions"),(0,r.kt)("li",{parentName:"ol"},"Time-based retention: Keep versions that have been ingested in the last N seconds")),(0,r.kt)("p",null,"Note, the latest version of each aspect (version 0) is never deleted. This is to ensure that we do not impact the core\nfunctionality of DataHub while applying retention."),(0,r.kt)("h2",{id:"when-is-the-retention-policy-applied"},"When is the retention policy applied?"),(0,r.kt)("p",null,"As of now, retention policies are applied in two places"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"GMS boot-up"),": On boot, it runs a bootstrap step to ingest the predefined set of retention policies. If there were\nno existing policies or the existing policies got updated, it will trigger an asynchronous call to apply retention\nto ",(0,r.kt)("strong",{parentName:"li"},"\nall")," records in the database."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ingest"),": On every ingest, if an existing aspect got updated, it applies retention to the urn, aspect pair being\ningested.")),(0,r.kt)("p",null,"We are planning to support a cron-based application of retention in the near future to ensure that the time-based\nretention is applied correctly."),(0,r.kt)("h2",{id:"how-to-configure"},"How to configure?"),(0,r.kt)("p",null,"For the initial iteration, we have made this feature opt-in. Please set ",(0,r.kt)("strong",{parentName:"p"},"ENTITY_SERVICE_ENABLE_RETENTION=true")," when\ncreating the datahub-gms container/k8s pod."),(0,r.kt)("p",null,"On GMS start up, it fetches the list of retention policies to ingest from two sources. First is the default we provide,\nwhich adds a version-based retention to keep 20 latest aspects for all entity-aspect pairs. Second, we read YAML files\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins/retention")," directory and overlay them on the default set of policies we provide."),(0,r.kt)("p",null,"For docker, we set docker-compose to mount ",(0,r.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/datahub/plugins")," directory\nwithin the containers, so you can customize the initial set of retention policies by creating\na ",(0,r.kt)("inlineCode",{parentName:"p"},"${HOME}/.datahub/plugins/retention/retention.yaml")," file."),(0,r.kt)("p",null,"We will support a standardized way to do this in kubernetes setup in the near future. "),(0,r.kt)("p",null,"The format for the YAML file is as follows. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- entity: "*" # denotes that policy will be applied to all entities\n  aspect: "*" # denotes that policy will be applied to all aspects\n  config:\n    retention:\n      version:\n        maxVersions: 20\n- entity: "dataset"\n  aspect: "datasetProperties"\n  config:\n    retention:\n      version:\n        maxVersions: 20\n      time:\n        maxAgeInSeconds: 2592000 # 30 days\n')),(0,r.kt)("p",null,"Note, it searches for the policies corresponding to the entity, aspect pair in the following order"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"entity, aspect"),(0,r.kt)("li",{parentName:"ol"},"*, aspect"),(0,r.kt)("li",{parentName:"ol"},"entity, *"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},", "))),(0,r.kt)("p",null,"By restarting datahub-gms after creating the plugin yaml file, the new set of retention policies will be applied."))}u.isMDXComponent=!0}}]);