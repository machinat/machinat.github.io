"use strict";(self.webpackChunkmachinat_github_io=self.webpackChunkmachinat_github_io||[]).push([[5673],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9875:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],o={title:"Dialog Script"},s=void 0,p={unversionedId:"dialog-script",id:"dialog-script",title:"Dialog Script",description:"A conversation is often composed of several questions and answers.",source:"@site/docs/dialog-script.md",sourceDirName:".",slug:"/dialog-script",permalink:"/docs/dialog-script",draft:!1,editUrl:"https://github.com/machinat/machinat/edit/master/website/docs/dialog-script.md",tags:[],version:"current",frontMatter:{title:"Dialog Script"},sidebar:"docs",previous:{title:"Using State",permalink:"/docs/using-states"},next:{title:"Embedded Webview",permalink:"/docs/embedded-webview"}},c={},d=[{value:"What&#39;s Dialog Script?",id:"whats-dialog-script",level:2},{value:"Install",id:"install",level:2},{value:"Script Syntax",id:"script-syntax",level:2},{value:"Build a Script",id:"build-a-script",level:3},{value:"Script Body",id:"script-body",level:3},{value:"Content Node",id:"content-node",level:3},{value:"Script Environments",id:"script-environments",level:3},{value:"<code>vars</code>",id:"vars",level:3},{value:"Keyword Element",id:"keyword-element",level:3},{value:"Prompting in Chat",id:"prompting-in-chat",level:3},{value:"<code>key</code> Prop",id:"key-prop",level:3},{value:"Flow Control Keywords",id:"flow-control-keywords",level:3},{value:"<code>RETURN</code> a Value",id:"return-a-value",level:3},{value:"Use Scripts",id:"use-scripts",level:2},{value:"Register Scripts",id:"register-scripts",level:3},{value:"Handle Executing Runtimes",id:"handle-executing-runtimes",level:3},{value:"Start a Script",id:"start-a-script",level:3},{value:"Filter Event Type",id:"filter-event-type",level:3},{value:"Handle Return Value",id:"handle-return-value",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Use Containers",id:"use-containers",level:3},{value:"<code>CALL</code> a Script",id:"call-a-script",level:3},{value:"Macro Pattern",id:"macro-pattern",level:3},{value:"Execute a Side Effect",id:"execute-a-side-effect",level:3},{value:"<code>EFFECT.set</code>",id:"effectset",level:4},{value:"<code>RETURN.value</code>",id:"returnvalue",level:4},{value:"<code>EFFECT.yield</code>",id:"effectyield",level:4},{value:"The Saga Pattern",id:"the-saga-pattern",level:2}],u={toc:d};function m(e){var n=e.components,o=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A conversation is often composed of several questions and answers.\nSuch the ",(0,r.kt)("em",{parentName:"p"},"Q & A")," process is the key to make advanced features (like making an order)\nand experiences (like asking for confirmation)."),(0,r.kt)("p",null,"In Machinat, you can use a familiar way to build the conversation flows:\nwriting a ",(0,r.kt)("strong",{parentName:"p"},"script"),"."),(0,r.kt)("h2",{id:"whats-dialog-script"},"What's Dialog Script?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dialog Script")," works like a scripting language written in JSX.\nYou describe how a conversation should be processed in a ",(0,r.kt)("em",{parentName:"p"},"script"),".\nWhen it ",(0,r.kt)("em",{parentName:"p"},"runs")," up, the script processor takes over control and ",(0,r.kt)("em",{parentName:"p"},"process")," the dialog script on the chat."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"You have to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@machinat/script")," package to use dialog scripts.\nAnd make sure you have a state provider installed like ",(0,r.kt)("a",{parentName:"p",href:"https://machinat.com/api/modules/redis_state.html"},(0,r.kt)("inlineCode",{parentName:"a"},"RedisState"))," or ",(0,r.kt)("a",{parentName:"p",href:"https://machinat.com/api/modules/dev_tools.html#file-state"},(0,r.kt)("inlineCode",{parentName:"a"},"FileState")),"."),(0,r.kt)("h2",{id:"script-syntax"},"Script Syntax"),(0,r.kt)("h3",{id:"build-a-script"},"Build a Script"),(0,r.kt)("p",null,"Here is a dialog script for making an order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Machinat from '@machinat/core';\nimport { build } from '@machinat/script';\nimport * as $ from '@machinat/script/keywords';\nimport OrderSideDish from './OrderSideDish';\n\nexport default build(\n  {\n    name: 'Ordering',\n    initVars: (params) => ({\n      mainDishes: params.mainDishes,\n      mainDishChoice: undefined,\n    }),\n  },\n  <>\n    {() => <p>What main dish would you like?</p>}\n\n    <$.WHILE \n      condition={({ vars: { mainDishes, mainDishChoice } }) =>\n        !mainDishes.includes(mainDishChoice)\n      }\n    >\n      {({ vars }) => <p>We have {vars.mainDishes.join(', ')}.</p>}\n\n      <$.PROMPT\n        key=\"ask-main-dish\"\n        set={({ vars }, { event }) => ({\n          ...vars,\n          mainDish: event.text,\n        })}\n      />\n    </$.WHILE>\n\n    {({ vars }) => <p>Our {vars.mainDishChoice} is good!</p>}\n\n    <$.RETURN\n      value={({ vars: { mainDishChoice } }) => ({ mainDishChoice })}\n    />\n  </>\n);\n")),(0,r.kt)("p",null,"We ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," the script with the metadata object and the script body in JSX.\nNote that the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of a script has to be unique in your app."),(0,r.kt)("p",null,"Let's break down how it works."),(0,r.kt)("h3",{id:"script-body"},"Script Body"),(0,r.kt)("p",null,"The script body is a special JSX block\nwhich consist of a sequence of keyword elements and contents.\nThey are executed top-down as programming languages codes."),(0,r.kt)("p",null,"Notice that the keywords and contents shouldn't be dynamic in the script.\nFor example, ",(0,r.kt)("strong",{parentName:"p"},"DON'T")," do something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<>\n  {someCondition\n    ? <$.PROMPT\n        key="ask-main-dish"\n        set={({ vars }, { event }) => ({\n          ...vars,\n          mainDish: event.text,\n        })}\n      /> \n    : null}\n</>\n')),(0,r.kt)("h3",{id:"content-node"},"Content Node"),(0,r.kt)("p",null,"The messages UI cannot be placed in the script body directly.\nThey have to be wrapped into a ",(0,r.kt)("em",{parentName:"p"},"content node"),"."),(0,r.kt)("p",null,"A content node is a function that returns the messages to be sent.\nIt's placed in a script like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<>\n  {() => <p>Pick a main dish you like.</p>}\n</>\n")),(0,r.kt)("p",null,"The function is called when the node is met in the script runtime.\nAnd the returned messages are sent to continue the conversation."),(0,r.kt)("h3",{id:"script-environments"},"Script Environments"),(0,r.kt)("p",null,"The content function receives the current runtime environments,\nwhich can be used to generate messages.\nLike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<>\n  {({ vars }) => <p>We have {vars.mainDishes.join(', ')}.</p>}\n\n  {({ vars }) => <p>Our {vars.mainDishChoice} is good!</p>}\n</>\n")),(0,r.kt)("p",null,"The runtime environments object contains the following info:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platform")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", the platform where the dialog happens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),", the channel where the dialog happens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vars")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),", a state object for storing data. ")),(0,r.kt)("h3",{id:"vars"},(0,r.kt)("inlineCode",{parentName:"h3"},"vars")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vars")," is a special state that exists while a script is running.\nIt's used to store the required info for processing the conversation."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"vars")," is initiated by the ",(0,r.kt)("inlineCode",{parentName:"p"},"initVars")," function when the script starts.\nIt receives an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," object and returns the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"vars"),".\nLike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default build(\n  {\n    name: 'Ordering',\n    initVars: (params) => ({\n      mainDishes: params.mainDishes,\n      mainDishChoice: undefined,\n    }),\n  },\n  <>...</>\n);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," is passed in when the script is called.\nWe'll introduce that later."),(0,r.kt)("h3",{id:"keyword-element"},"Keyword Element"),(0,r.kt)("p",null,"The keyword elements describe how the conversation should be executed.\nHere are the available keywords:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"IF")," - define an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," flow."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"condition")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => boolean"),", go to the ",(0,r.kt)("inlineCode",{parentName:"li"},"THEN")," block if it returns true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"THEN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ELSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ELSE_IF")," blocks."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"THEN")," - enter children block if ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," of the parent ",(0,r.kt)("inlineCode",{parentName:"p"},"IF")," is met."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," - required, script block."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ELSE_IF")," - enter children block if ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," is met."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"condition")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," - required, script block."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ELSE")," - the fallback block."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," - required, script block."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"WHILE")," - define a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," flow."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"condition")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => boolean"),", loop the children block while it returns true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"children")," - required, script block."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," - stop the execution of runtime and wait for the user's input."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", an unique key for the stop point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv, Input) => Vars"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"vars")," value according to the input."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"EFFECT")," - define a side effect."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => Vars"),", execute a side effect and set the ",(0,r.kt)("inlineCode",{parentName:"li"},"vars")," value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yield")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv, Value) => Value"),", register a middleware to yield a value. Check the ",(0,r.kt)("a",{parentName:"li",href:"#yielding-value"},"yielding value")," section."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LABEL")," - label a start point which you can ",(0,r.kt)("inlineCode",{parentName:"p"},"goto")," while starting."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", an unique key for the start point."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," - execute a script in the current runtime."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - required, ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", an unique key for the stop point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"script")," - required, the script to be called."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => Params"),", get the params passed to the script."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goto")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", start execution from a label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv, Value) => Vars"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"vars")," value according to the result."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," - exit current script."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - optional, ",(0,r.kt)("inlineCode",{parentName:"li"},"(ScriptEnv) => Vars"),", the value to return.")))),(0,r.kt)("h3",{id:"prompting-in-chat"},"Prompting in Chat"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," keyword is the core of the conversation flow.\nIt stops the runtime and waits for the user's input.\nAfter the answer is received, the runtime continues from the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'  <$.PROMPT\n    key="ask-main-dish"\n    set={({ vars }, { event }) => ({\n      ...vars,\n      mainDish: event.text,\n    })}\n  />\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," prop is used to store info about the answer.\nIt receives the answer event context and returns the new ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," with the info."),(0,r.kt)("h3",{id:"key-prop"},(0,r.kt)("inlineCode",{parentName:"h3"},"key")," Prop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," prop labels an entry point in the script.\nIt has to be unique in the whole script.\nThat includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LABEL"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," of a ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," has to be ",(0,r.kt)("strong",{parentName:"p"},"fixed")," after your app is online.\nIf it's changed, the processor would fail to find the point to continue.\nWe'll support a mechanism for migrating in the future."))),(0,r.kt)("h3",{id:"flow-control-keywords"},"Flow Control Keywords"),(0,r.kt)("p",null,"Flow control keywords determine the flow of a conversation.\nLike ",(0,r.kt)("inlineCode",{parentName:"p"},"WHILE")," keyword in the example above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  <$.WHILE condition={({ vars }) => !MAIN_DISHES.includes(vars.mainDish)}>\n    {() => <p>We have {MAIN_DISHES.join(', ')}.</p>}\n\n    <$.PROMPT\n      key=\"ask-main-dish\"\n      set={({ vars }, { event }) => ({\n        ...vars,\n        mainDish: event.text,\n      })}\n    />\n  </$.WHILE>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WHILE")," keyword loops the children block while the ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," is met.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," is wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"WHILE"),",\nso the bot would keep asking until a valid answer is received."),(0,r.kt)("p",null,"There are other control flow keywords like ",(0,r.kt)("inlineCode",{parentName:"p"},"IF"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ELSE")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN"),".\nThey work the same as in the programming languages,\nso you can easily ",(0,r.kt)("em",{parentName:"p"},"program")," the conversation logic as coding."),(0,r.kt)("h3",{id:"return-a-value"},(0,r.kt)("inlineCode",{parentName:"h3"},"RETURN")," a Value"),(0,r.kt)("p",null,"A script can return a value with ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," keyword.\nLike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  <$.RETURN\n    value={({ vars: { mainDishChoice } }) => ({ mainDishChoice })}\n  />\n")),(0,r.kt)("p",null,"It passes the result of the conversation to the root handler or the parent script."),(0,r.kt)("h2",{id:"use-scripts"},"Use Scripts"),(0,r.kt)("p",null,"After a little setup, you can then use the scripts in your app."),(0,r.kt)("h3",{id:"register-scripts"},"Register Scripts"),(0,r.kt)("p",null,"The built scripts have to be registered while initiating the ",(0,r.kt)("inlineCode",{parentName:"p"},"@machinat/script")," module.\nLike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Machiant from '@machinat/core';\nimport Script from '@machinat/script';\n// the built scripts\nimport BeforeSunset from './scenes/BeforeSunset';\nimport BeforeSunrise from './scenes/BeforeSunrise';\nimport BeforeMidnight from './scenes/BeforeMidnight';\n\nconst app = Machiant.createApp({\n  modules: [\n    Script.initModule({\n      libs: [\n        BeforeSunset,\n        BeforeSunrise,\n        BeforeMidnight,\n      ],\n    }),\n    //...\n  ],\n  //...\n});\n")),(0,r.kt)("h3",{id:"handle-executing-runtimes"},"Handle Executing Runtimes"),(0,r.kt)("p",null,"Last, we have to delegate chats with an executing runtime to the processor.\nThe processor will continue the dialog from the stop point in the script."),(0,r.kt)("p",null,"You can add these codes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.onEvent")," handler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { makeContainer } from '@machinat/core';\nimport Script from '@machinat/script';\n\napp.onEvent(\n  makeContainer({ deps: [Script.Processor] })(\n    (processor) => async (context) => {\n      const { event, reply } = context;\n      const runtime = await processor.continue(event.channel, context);\n      if (runtime) {\n        return reply(runtime.output());\n      }\n\n      // default logic...\n    }\n  )\n);\n")),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("inlineCode",{parentName:"p"},"@machinat/stream"),", you can ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," the stream like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { makeContainer } from '@machinat/core';\nimport Script from '@machinat/script';\nimport { fromApp } from '@machinat/stream'\nimport { filter } from '@machinat/stream/operators'\n\nconst event$ = fromApp(app).pipe(\n  filter(\n    makeContainer({ deps: [Script.Processor] })(\n      (processor) => async (ctx) => {\n        const runtime = await processor.continue(ctx.event.channel, ctx);\n        if (runtime) {\n          await ctx.reply(runtime.output());\n        }\n        return !runtime;\n      }\n    )\n  )\n);\n\nevent$.subscribe(({ event }) => {\n  // default logic...\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"processor.continue()")," method returns the script runtime on a chat.\nIf there is an executing runtime, we continue the dialog by replying ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.output()"),"."),(0,r.kt)("p",null,"Finally, we should leave the chat to the processor and prevent further replying."),(0,r.kt)("h3",{id:"start-a-script"},"Start a Script"),(0,r.kt)("p",null,"If no script is currently running on a chat,\nyou can start a dialog script like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await reply(<Ordering.Start params={{ mainDishes: ['\ud83c\udf56', '\ud83c\udf5b', '\ud83c\udf5c'] }} />);\n")),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Start")," component is rendered,\nit executes the script and sends the beginning messages.\nAfter that, the chat is handled by the processor till the script is finished."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," prop is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"initVars")," of the script.\nIt works just like the function parameters that you can flexibly reuse the flow."),(0,r.kt)("h3",{id:"filter-event-type"},"Filter Event Type"),(0,r.kt)("p",null,"You can select which events should be handled by the processor,\nso only these events would push the dialog forward.\nLike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  if (event.category === 'message' && event.category === 'postback') {\n    const runtime = await processor.continue(event.channel, context);\n    if (runtime) {\n      return reply(runtime.output());\n    }\n  }\n")),(0,r.kt)("h3",{id:"handle-return-value"},"Handle Return Value"),(0,r.kt)("p",null,"If the script is finished with a returned value,\nit's available at ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.returnValue"),".\nYou can handle it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  const runtime = await processor.continue(event.channel, context);\n  if (runtime) {\n    await reply(runtime.output());\n\n    if (runtime.returnValue) {\n      // do something with `returnValue`\n      await cook(runtime.returnValue.mainDishChoice);\n    }\n  }\n")),(0,r.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,r.kt)("h3",{id:"use-containers"},"Use Containers"),(0,r.kt)("p",null,"The keywords can accept an asynchronized ",(0,r.kt)("a",{parentName:"p",href:"/docs/dependency-injection#service-container"},"service container"),"\nfor the function props.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Machinat, { makeContainer, IntentRecognizer } from '@machinat/core';\n//...\n<>\n  {() => <p>Would you like any side dish?</p>}\n  <$.PROMPT\n    key=\"ask-side-dish\"\n    set={\n      makeContainer({ deps: [IntentRecognizer] })(\n        (recognizer) =>\n        async ({ vars, channel }, { event }) => {\n          const intent = await recognizer.detectText(\n            channel,\n            event.text\n          );\n          return {\n            ...vars,\n            needSideDish: intent.type === 'yes'\n          };\n        }\n      )\n    }\n  />\n</>\n")),(0,r.kt)("p",null,"In the example, we check intent with ",(0,r.kt)("inlineCode",{parentName:"p"},"IntentRecognizer")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," prop.\nAlmost any operation in the script can use a container to require services,\nincluding content nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<>\n  {makeContainer({ deps:[BasicProfiler] })(\n    (profiler) => async ({ vars: { user, mainDishChoice } }) => {\n      const profile = await profiler.getUserProfile(user);\n      return <p>Hi, {profile.name}! Here's your {mainDishChoice}</p>;\n    }\n  )}\n</>\n")),(0,r.kt)("h3",{id:"call-a-script"},(0,r.kt)("inlineCode",{parentName:"h3"},"CALL")," a Script"),(0,r.kt)("p",null,"We might want to reuse the conversation flow while building a complicated dialog.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," keyword runs a script like a function call,\nso we can use a flow several times even in different scripts.\nLike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import OrderSideDish from './OrderSideDish';\n//...\n<>\n  <$.CALL\n    script={OrderSideDish}\n    key=\"order-side-dish\"\n    params={({ vars: { sideDishes } }) => ({ sideDishes })}\n    set={({ vars }, { sideDishChoice }) =>\n      ({ ...vars, sideDishChoice })\n    }\n  />\n</>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"params")," prop is called to get the script params,\nwhich is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"initVars")," of the called script."),(0,r.kt)("p",null,"After the called script returns,\n",(0,r.kt)("inlineCode",{parentName:"p"},"set")," prop receives the returned value and sets the new ",(0,r.kt)("inlineCode",{parentName:"p"},"vars"),".\nThe runtime then continues from the ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," point."),(0,r.kt)("h3",{id:"macro-pattern"},"Macro Pattern"),(0,r.kt)("p",null,"Another way to reuse the flow logic is using ",(0,r.kt)("em",{parentName:"p"},"macro"),".\nIt's a function that returns a section of flow.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ASKING_DISH = (dishType, choices) => (\n  <>\n    {() => <p>What would you like for {dishType}?</p>}\n\n    <$.WHILE condition={({ vars }) => !choices.includes(vars[dishType])}>\n      {() => <p>We have {choices.join(', ')}.</p>}\n\n      <$.PROMPT\n        key={`ask-${dishType}`}\n        set={({ vars }, { event }) => ({\n          ...vars,\n          [dishType]: event.text,\n        })}\n      />\n    </$.WHILE>\n  </>\n);\n")),(0,r.kt)("p",null,"The macro function can be used in the script like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<>\n  {() => <p>Welcome!</p>}\n  {ASKING_DISH('main dish', ['\ud83c\udf56', '\ud83c\udf5b', '\ud83c\udf5c'])}\n  {ASKING_DISH('dessert', ['\ud83c\udf70', '\ud83c\udf66', '\ud83c\udf6e'])}\n  {ASKING_DISH('drink', ['\ud83c\udf78', '\ud83c\udf75', '\ud83c\udf7a'])}\n  <$.RETURN value={({ vars }) => vars} />\n</>\n")),(0,r.kt)("p",null,"The macro is useful to reuse flow ",(0,r.kt)("em",{parentName:"p"},"within one script"),".\nIt's more lightweight but doesn't have its own ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," scope."),(0,r.kt)("p",null,"Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," has to be unique in the script,\nso you have to use a variable like ",(0,r.kt)("inlineCode",{parentName:"p"},"key={`ask-${dishType}`}"),"."),(0,r.kt)("h3",{id:"execute-a-side-effect"},"Execute a Side Effect"),(0,r.kt)("p",null,"While making a functional app, it's necessary to handle ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Side_effect_(computer_science)"},"side effects"),"\nin the flows.\nThe dialog script supports executing effects in several ways.\nEach one has its pros and cons."),(0,r.kt)("h4",{id:"effectset"},(0,r.kt)("inlineCode",{parentName:"h4"},"EFFECT.set")),(0,r.kt)("p",null,"The first is executing a side effect directly using ",(0,r.kt)("inlineCode",{parentName:"p"},"EFFECT.set"),".\nLike:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"  <$.EFFECT\n    set={makeContainer({ deps: [StateController] })(\n      (stateController) => async ({ vars, channel }) => {\n        const visitCount = await stateController\n          .channelState(channel)\n          .set('visit_count', (count=0) => count + 1);\n\n        return { ...vars, visitCount };\n      }\n    )}\n  />\n")),(0,r.kt)("p",null,"This is the simplest way. However while the scale of scripts grows,\nit's really hard to know what effects have happened.\nEspecially when the scripts are highly nested."),(0,r.kt)("p",null,"So you should only use this in a simple and not nested script."),(0,r.kt)("h4",{id:"returnvalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"RETURN.value")),(0,r.kt)("p",null,"The second is returning the value and executing the effect outside of the script.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// at the script\n  <$.RETURN\n    value={({ vars: { mainDishChoice } }) => ({ mainDishChoice })}\n  />\n// at the handler\n  const runtime = await processor.continue(event.channel, context);\n  if (runtime?.returnValue) {\n    await cook(runtime.returnValue.mainDishChoice);\n  }\n")),(0,r.kt)("p",null,"This way keeps the script itself ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pure_function"},"pure"),".\nBut the problem is you can only do this when a script is finished."),(0,r.kt)("h4",{id:"effectyield"},(0,r.kt)("inlineCode",{parentName:"h4"},"EFFECT.yield")),(0,r.kt)("p",null,"The final one is using ",(0,r.kt)("inlineCode",{parentName:"p"},"EFFECT.yield"),".\nIt registers a middleware to yield a value when the script is finished or stopped by a ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT"),".\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// parent script\n<>\n  <$.EFFECT\n    yield={({ vars }, prev) => ({...prev, a: 0, b: 0})}\n  />\n  <$.CALL script={ChildScript} key="child" />\n</>\n// child script\n<>\n  <$.EFFECT\n    yield={({ vars }, prev) => ({...prev, a: 1, c: 1})}\n  />\n  <$.PROMPT key="ask" />\n</>\n// handler\n  const runtime = await processor.continue(event.channel, context);\n  if (runtime.yieldValue) {\n    console.log(runtime.yieldValue); // { a: 0, b: 0, c: 1 }\n  }\n')),(0,r.kt)("p",null,"When the script stops, all the yield middlewares that have been met are called in a reverse order.\nThe middleware receives the value from previous middleware and passes a value up.\nThen we can use the final value in the handler."),(0,r.kt)("p",null,"This pattern is more complex, but it fixes the problems of the first two.\nThe scripts are pure and also every script in the calling chain can pop an effect when stopping."),(0,r.kt)("h2",{id:"the-saga-pattern"},"The Saga Pattern"),(0,r.kt)("p",null,"The dialog script is a ",(0,r.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/data/saga.html"},"saga pattern"),"\nimplementation with the scripting sugar.\nA saga is a sequence of asynchronized tasks to be executed in the defined order.\nIt's invented to handle long lived operations for server-side apps, like ",(0,r.kt)("inlineCode",{parentName:"p"},"PROMPT")," in chatting."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Script Saga Flow",src:t(6839).Z,width:"601",height:"281"})),(0,r.kt)("p",null,"When you write a ",(0,r.kt)("strong",{parentName:"p"},"script"),", you define a saga to process the dialog.\nAfter it's triggered, the orchestrator (script processor) executes all the tasks (dialog) in the programmed procedures."),(0,r.kt)("p",null,"The major benefit of saga pattern is to compose many operations (contents and keywords) into one atomic transaction (a script).\nYou only have to declare the flow in the script,\nand the script processor would handle the rest of all."))}m.isMDXComponent=!0},6839:function(e,n,t){n.Z=t.p+"assets/images/script-saga-flow-db3fd216c5a001c6eb4090683fa5f29e.png"}}]);