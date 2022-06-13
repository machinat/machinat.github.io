"use strict";(self.webpackChunkmachinat_github_io=self.webpackChunkmachinat_github_io||[]).push([[1846],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3550:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={title:"Introducing JSX"},l=void 0,c={unversionedId:"introducing-jsx",id:"introducing-jsx",title:"Introducing JSX",description:"In Machinat, we use the JSX API to build Chat UI in a more expressive way.",source:"@site/docs/introducing-jsx.md",sourceDirName:".",slug:"/introducing-jsx",permalink:"/docs/introducing-jsx",draft:!1,editUrl:"https://github.com/machinat/machinat/edit/master/website/docs/introducing-jsx.md",tags:[],version:"current",frontMatter:{title:"Introducing JSX"},sidebar:"docs",previous:{title:"Receiving Events",permalink:"/docs/receiving-events"},next:{title:"Rendering Messages",permalink:"/docs/rendering-messages"}},p={},u=[{value:"JSX Syntax",id:"jsx-syntax",level:2},{value:"Why JSX?",id:"why-jsx",level:2},{value:"Declarative View",id:"declarative-view",level:3},{value:"Rich Messages",id:"rich-messages",level:3},{value:"Pause and Action",id:"pause-and-action",level:3},{value:"Cross-platform UI",id:"cross-platform-ui",level:3}],m={toc:u};function d(e){var n=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Machinat, we use the ",(0,i.kt)("em",{parentName:"p"},"JSX")," API to build ",(0,i.kt)("em",{parentName:"p"},"Chat UI")," in a more expressive way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'app.onEvent(async ({ reply }) => {\n  await reply(\n    <>\n      <p>Hello World!</p>\n      <img src="https://machinat.io/greeting.jpg" />\n    </>\n  );\n});\n')),(0,i.kt)("p",null,"The code above that looks like HTML is ",(0,i.kt)("em",{parentName:"p"},"JSX"),".\nEach JSX element may represent a part of the chat UI.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"<p>...</p>")," represents a message bubble in the chatroom."),(0,i.kt)("h2",{id:"jsx-syntax"},"JSX Syntax"),(0,i.kt)("p",null,"This section is WIP. You can check the introduction in ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx"},"React document"),"\nsince Machinat shares the same JSX syntax with React."),(0,i.kt)("h2",{id:"why-jsx"},"Why JSX?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Chat UI")," is not that much different from ",(0,i.kt)("em",{parentName:"p"},"Graphical UI"),".\nIt may also contain nesting details and logic no less than a graphical view.\nWe believe a rendering process is necessary to make dynamic and complicated chat UI,\nwhich helps to ship the best user experiences in chat."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"JSX")," brings some significant advantages while building chat UI:"),(0,i.kt)("h3",{id:"declarative-view"},"Declarative View"),(0,i.kt)("p",null,"In instant messaging, we usually express a collection of messages once.\nThey look like a ",(0,i.kt)("em",{parentName:"p"},"view")," in the chatroom:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example Message as view",src:t(1606).Z,width:"395",height:"402"})),(0,i.kt)("p",null,"Such an expression is the basic unit to advance a conversation.\nIn Machinat, we build an ",(0,i.kt)("em",{parentName:"p"},"expression view")," like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await reply(\n  <>\n    <p>This is my cat!</p>\n    <img src="http://foo.bar/cat.jpg" />\n    <p>Do you like it?</p>\n  </>\n);\n')),(0,i.kt)("p",null,"In this way we make a declarative UI of the ",(0,i.kt)("em",{parentName:"p"},"view"),",\ninstead of making many imperative API calls.\nThis brings some advantages:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Describe the content better in codes."),(0,i.kt)("li",{parentName:"ol"},"Isolate the presentation logic."),(0,i.kt)("li",{parentName:"ol"},"Leave all the sending jobs to the framework.")),(0,i.kt)("h3",{id:"rich-messages"},"Rich Messages"),(0,i.kt)("p",null,"On many platforms, we can reply with formatted text and in-chat widgets.\nJSX works much better to use these graphical features in code.\nLike:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await reply(\n  <>\n    <p>\n      <b>foo</b>\n      <i>bar</i>\n      <code>baz</code>\n    </p>\n\n    <Messenger.GenericTemplate>\n      <Messenger.GenericItem\n        title="Hello"\n        subtitile="world"\n        imageUrl="http://..."\n      />\n    </Messenger.GenericTemplate>\n  </>\n);\n')),(0,i.kt)("h3",{id:"pause-and-action"},"Pause and Action"),(0,i.kt)("p",null,"Adding proper pauses and actions brings better experience in chat.\nThese in-chat behaviors can be well described in JSX too.\nLike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await reply(\n  <>\n    <Messenger.MarkSeen />\n    <Machinat.Pause time={1000} />\n\n    <p>Hakuna Matata!</p>\n    <Messenger.TypingOn />\n\n    <Machinat.Pause time={2000} />\n    <p>It means no worry!</p>\n  </>\n);\n")),(0,i.kt)("h3",{id:"cross-platform-ui"},"Cross-platform UI"),(0,i.kt)("p",null,"To make cross-platform apps, you'll need cross-platform UI.\nThanks to the flexibility of JSX,\nwe can use several manners to achieve that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await reply(\n  <>\n    These videos all work:\n\n    <video src="http://..." />\n\n    {platform === \'messenger\'\n      ? <Messenger.Video attachmentId="_UPLOADED_VIDEO_" />\n      : null}\n  \n    <MyCrossPlatformVideo />\n  </>\n);\n')),(0,i.kt)("p",null,"The expression above works on every platform.\nWe'll introduce these APIs in later chapters."))}d.isMDXComponent=!0},1606:function(e,n,t){n.Z=t.p+"assets/images/example-message-as-view-04facef38ff36a495591ead11479edf1.png"}}]);