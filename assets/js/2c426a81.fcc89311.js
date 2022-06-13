"use strict";(self.webpackChunkmachinat_github_io=self.webpackChunkmachinat_github_io||[]).push([[8710],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),i=n(7294),o=n(6010),l=n(2389),r=n(7392),s=n(7094),d=n(2466),p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,v=e.groupId,b=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,r.l)(w,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!w.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),x=N.tabGroupChoices,y=N.setTabGroupChoices,T=(0,i.useState)(k),C=T[0],E=T[1],W=[],M=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=x[v];null!=O&&O!==C&&w.some((function(e){return e.value===O}))&&E(O)}var j=function(e){var t=e.currentTarget,n=W.indexOf(t),a=w[n].value;a!==C&&(M(t),E(a),null!=v&&y(v,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=W.indexOf(e.currentTarget)+1;n=null!=(a=W[i])?a:W[0];break;case"ArrowLeft":var o,l=W.indexOf(e.currentTarget)-1;n=null!=(o=W[l])?o:W[W.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},w.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return W.push(e)},onKeyDown:I,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},6864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(5488),r=n(5162),s=["components"],d={title:"Webview in Chat"},p=void 0,u={unversionedId:"learn/webview-in-chat",id:"learn/webview-in-chat",title:"Webview in Chat",description:"We have learned how to ship features in chat,",source:"@site/docs/learn/webview-in-chat.mdx",sourceDirName:"learn",slug:"/learn/webview-in-chat",permalink:"/docs/learn/webview-in-chat",draft:!1,editUrl:"https://github.com/machinat/machinat/edit/master/website/docs/learn/webview-in-chat.mdx",tags:[],version:"current",frontMatter:{title:"Webview in Chat"},sidebar:"docs",previous:{title:"Dialog Script",permalink:"/docs/learn/dialog-script"}},c={},m=[{value:"Extend a Webview",id:"extend-a-webview",level:2},{value:"Open Webview",id:"open-webview",level:3},{value:"Webview Client",id:"webview-client",level:3},{value:"Webview Page",id:"webview-page",level:3},{value:"Communicate to Webview",id:"communicate-to-webview",level:3},{value:"Send Event to Server",id:"send-event-to-server",level:3}],h={toc:m};function v(e){var t=e.components,d=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have learned how to ship features in chat,\nbut sometimes chat UI is not suitable for every feature.\nIn this lesson, you'll learn how to open a webview to provide more features in GUI."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Time to accomplish: 15 minutes"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some ",(0,o.kt)("em",{parentName:"p"},"Next.js")," and ",(0,o.kt)("em",{parentName:"p"},"React.js")," features are used in this lesson.\nYou can learn more about them here:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/getting-started.html"},"React.js")," - A JavaScript library for building user interfaces."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/getting-started"},"Next.js")," - The React Framework for Production.")))),(0,o.kt)("h2",{id:"extend-a-webview"},"Extend a Webview"),(0,o.kt)("p",null,"Finally let's implement the deleting todo feature.\nBut this time, we are going to use a webview to display all the finished and unfinished todos."),(0,o.kt)("h3",{id:"open-webview"},"Open Webview"),(0,o.kt)("p",null,"Follow the guide of the platform to add a button for opening the webview:"),(0,o.kt)(l.Z,{groupId:"chat-platforms",defaultValue:"messenger",values:[{label:"Messenger",value:"messenger"},{label:"Telegram",value:"telegram"},{label:"LINE",value:"line"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"messenger",mdxType:"TabItem"},(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"WithMenu")," component like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/WithMenu.tsx"',title:'"src/components/WithMenu.tsx"'},"// highlight-next-line\nimport { WebviewButton as MessengerWebviewButton } from '@machinat/messenger/webview';\n  //...\n  if (platform === 'messenger') {\n    return (\n      <>\n        {children}\n        <Messenger.ButtonTemplate\n            buttons={\n              <>\n                <Messenger.PostbackButton\n                  title={listLabel}\n                  payload={listData}\n                />\n                <Messenger.PostbackButton\n                  title={addLabel}\n                  payload={addData}\n                />\n                {/* highlight-next-line */}\n                <MessengerWebviewButton title=\"Edit \ud83d\udce4\" />\n              </>\n            }\n        >\n            {info}\n        </Messenger.ButtonTemplate>\n      </>\n    );\n  }\n  //...\n"))),(0,o.kt)(r.Z,{value:"telegram",mdxType:"TabItem"},(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"WithMenu")," component like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/WithMenu.tsx"',title:'"src/components/WithMenu.tsx"'},"// highlight-next-line\nimport { WebviewButton as TelegramWebviewButton } from '@machinat/telegram/webview';\n  //...\n  if (platform === 'telegram') {\n    return (\n      <>\n        {children}\n        <Telegram.Text\n          replyMarkup={\n            <Telegram.InlineKeyboard>\n              <Telegram.CallbackButton\n                text={listLabel}\n                data={listData}\n              />\n              <Telegram.CallbackButton\n                text={addLabel}\n                data={addData}\n              />\n              {/* highlight-next-line */}\n              <TelegramWebviewButton text=\"Edit \ud83d\udce4\" />\n            </Telegram.InlineKeyboard>\n          }\n        >\n          {info}\n        </Telegram.Text>\n      </>\n    );\n  }\n  //...\n"))),(0,o.kt)(r.Z,{value:"line",mdxType:"TabItem"},(0,o.kt)("p",null,"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"WithMenu")," component like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/WithMenu.tsx"',title:'"src/components/WithMenu.tsx"'},"// highlight-next-line\nimport { WebviewAction as LineWebviewAction } from '@machinat/line/webview';\n  //...\n  if (platform === 'line') {\n    return (\n      <>\n        {children}\n        <Line.ButtonTemplate\n          altText={`You have ${todoCount} todos now.`}\n          actions={\n            <>\n              <Line.PostbackAction\n                label={listLabel}\n                displayText={listLabel}\n                data={listData}\n              />\n              <Line.PostbackAction\n                label={addLabel}\n                displayText={addLabel}\n                data={addData}\n              />\n              {/* highlight-next-line */}\n              <LineWebviewAction label=\"Edit \ud83d\udce4\" />\n            </>\n          }\n        >\n          {info}\n        </Line.ButtonTemplate>\n      </>\n    );\n  }\n  //...\n")))),(0,o.kt)("p",null,"Now an ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit \ud83d\udce4")," button is added in the menu like this:"),(0,o.kt)("img",{width:200,src:n(3172).Z}),(0,o.kt)("p",null,"Try tapping the button and you should see the default webview is already working!"),(0,o.kt)("h3",{id:"webview-client"},"Webview Client"),(0,o.kt)("p",null,"The web front-end codes are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webview")," directory.\nCheck ",(0,o.kt)("inlineCode",{parentName:"p"},"webview/pages/index.tsx")," file and you'll see a ",(0,o.kt)("inlineCode",{parentName:"p"},"WebviewClient")," is created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useClient")," hook.\nLike:"),(0,o.kt)(l.Z,{groupId:"chat-platforms",defaultValue:"messenger",values:[{label:"Messenger",value:"messenger"},{label:"Telegram",value:"telegram"},{label:"LINE",value:"line"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"messenger",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="webview/pages/index.tsx"',title:'"webview/pages/index.tsx"'},"  // ...\n  const client = useClient({\n    mockupMode: typeof window === 'undefined',\n    authPlatforms: [\n      new MessengerAuth({ pageId: MESSENGER_PAGE_ID }),\n    ],\n  });\n  // ...\n"))),(0,o.kt)(r.Z,{value:"telegram",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="webview/pages/index.tsx"',title:'"webview/pages/index.tsx"'},"  // ...\n  const client = useClient({\n    mockupMode: typeof window === 'undefined',\n    authPlatforms: [\n      new TelegramAuth({ botName: TELEGRAM_BOT_NAME }),\n    ],\n  });\n  // ...\n"))),(0,o.kt)(r.Z,{value:"line",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="webview/pages/index.tsx"',title:'"webview/pages/index.tsx"'},"  // ...\n  const client = useClient({\n    mockupMode: typeof window === 'undefined',\n    authPlatforms: [\n      new LineAuth({ liffId: LINE_LIFF_ID }),\n    ],\n  });\n  // ...\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," will log in the user and opens a connection to the server.\nWe can then use it to communicate with the server."),(0,o.kt)("h3",{id:"webview-page"},"Webview Page"),(0,o.kt)("p",null,"Let's display all the todos in the webview. Edit the index page to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="webview/pages/index.tsx"',title:'"webview/pages/index.tsx"'},"// highlight-next-line\nimport { TodoState } from '../../src/types';\n// ...\n\nconst WebAppHome = () => {\n  // ...\n  // highlight-start\n  const data = useEventReducer<null | TodoState>(\n    client,\n    (currentData, { event }) => {\n      if (event.type === 'app_data') {\n        return event.payload.data;\n      }\n      return currentData;\n    },\n    null\n  );\n  // highlight-end\n\n  return (\n    <div>\n      <Head>\n        {/* highlight-next-line */}\n        <title>Edit Todos</title>\n        <link\n          rel=\"stylesheet\"\n          href=\"https://cdn.jsdelivr.net/npm/water.css@2/out/water.css\"\n        />\n      </Head>\n\n      <main>\n        {/* highlight-start */}\n        <h4>You have {data ? data.todos.length : '?'} Todo:</h4>\n        <table>\n          <tbody>\n            {data?.todos.map((todo) => <tr><td>{todo.name}</td></tr>)}\n          </tbody>\n        </table>\n\n        <h4>You have {data ? data.finishedTodos.length : '?'} finished Todo:</h4>\n        <table>\n          <tbody>\n            {data?.finishedTodos.map((todo) => <tr><td>{todo.name}</td></tr>)}\n          </tbody>\n        </table>\n        {/* highlight-end */}\n      </main>\n    </div>\n  );\n};\n// ...\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The JSX in the webview is ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React.js")," element.\nWhile the ",(0,o.kt)("em",{parentName:"p"},"Machinat")," JSX is rendered into chat messages,\nthe ",(0,o.kt)("em",{parentName:"p"},"React")," JSX is rendered into HTML content."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useEventReducer")," ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.htm"},"hook"),"\nis the simplest way to handle events from the server. Every time a event is received,\nthe reducer function is called to update the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const data = useEventReducer(client, reducerFn, initialValue);\n")),(0,o.kt)("p",null,"Because there is no data now, the webview should look like this:"),(0,o.kt)("img",{width:500,src:n(3801).Z}),(0,o.kt)("h3",{id:"communicate-to-webview"},"Communicate to Webview"),(0,o.kt)("p",null,"On the server side, we have to send the todos data to the webview.\nEdit the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleWebview")," handlers to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/handlers/handleWebview.tsx"',title:'"src/handlers/handleWebview.tsx"'},"import { makeContainer } from '@machinat/core/service';\nimport TodoController from '../services/TodoController';\nimport { WebAppEventContext } from '../types';\n\nconst handleWebview = makeContainer({\n  deps: [TodoController],\n})(\n  (todoController) =>\n    async (ctx: WebAppEventContext & { platform: 'webview' }) => {\n      const { event, bot, metadata: { auth } } = ctx;\n\n      if (event.type === 'connect') {\n        const { data } = await todoController.getTodos(auth.channel);\n\n        return bot.send(event.channel, {\n          type: 'app_data',\n          payload: { data },\n        });\n      }\n    }\n);\n\nexport default handleWebview;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bot.send(channel, eventObj)")," method sends an event to the webview.\nHere we emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"'app_data'")," event every time a webview ",(0,o.kt)("inlineCode",{parentName:"p"},"'connect'"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.auth")," object contains the authorization infos.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.channel")," refers to the original chatroom,\nso we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoController")," to get todos data."),(0,o.kt)("p",null,"Now the webview should display the todos like this:"),(0,o.kt)("img",{width:500,src:n(4424).Z}),(0,o.kt)("h3",{id:"send-event-to-server"},"Send Event to Server"),(0,o.kt)("p",null,"Let's add a button to delete a todo. Edit the index page like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="webview/pages/index.tsx"',title:'"webview/pages/index.tsx"'},"// ...\nconst WebAppHome = () => {\n  // ...\n  // highlight-start\n  const TodoRow = ({ todo }) => (\n      <tr>\n        <td style={{ verticalAlign: 'middle' }}>{todo.name}</td>\n        <td style={{ textAlign: 'right' }}>\n          <button\n            onClick={() => {\n              client.send({\n                type: 'delete_todo',\n                payload: { id: todo.id },\n              })\n            }}\n          >\n            \u274c\n          </button>\n        </td>\n      </tr>\n  );\n  // highlight-end\n\n  return (\n    <div>\n      <Head>\n        <title>Edit Todos</title>\n        <link\n          rel=\"stylesheet\"\n          href=\"https://cdn.jsdelivr.net/npm/water.css@2/out/water.css\"\n        />\n      </Head>\n\n      <main>\n        {/* highlight-next-line */}\n        <h3>Press \u274c to delete todos</h3>\n\n        <h4>You have {data ? data.todos.length : '?'} Todo:</h4>\n        <table>\n          <tbody>\n            {/* highlight-next-line */}\n            {data?.todos.map((todo) => <TodoRow todo={todo} />)}\n          </tbody>\n        </table>\n\n        <h4>You have {data ? data.finishedTodos.length : '?'} finished Todo:</h4>\n        <table>\n          <tbody>\n            {/* highlight-next-line */}\n            {data?.finishedTodos.map((todo) => <TodoRow todo={todo} />)}\n          </tbody>\n        </table>\n      </main>\n    </div>\n  );\n};\n//...\n")),(0,o.kt)("p",null,"We add a ",(0,o.kt)("inlineCode",{parentName:"p"},"\u274c")," button on every ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoRow")," to delete the todo.\nNow the webview should look like this :"),(0,o.kt)("img",{width:500,src:n(8388).Z}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"client.send(eventObj)")," method sends an event back to the server.\nHere we emit a ",(0,o.kt)("inlineCode",{parentName:"p"},"'delete_todo'")," event when the ",(0,o.kt)("inlineCode",{parentName:"p"},"\u274c")," button is tapped."),(0,o.kt)("p",null,"We can then handle it at server side like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/handlers/handleWebview.tsx"',title:'"src/handlers/handleWebview.tsx"'},"  // ...\n  if (event.type === 'delete_todo') {\n    const { todo, data } = await todoController.deleteTodo(\n      auth.channel,\n      event.payload.id\n    );\n\n    return bot.send(event.channel, {\n      type: 'app_data',\n      payload: { data },\n    });\n  }\n  //...\n")),(0,o.kt)("p",null,"We delete the todo in the state when a ",(0,o.kt)("inlineCode",{parentName:"p"},"'delete_todo'")," event is received.\nThen emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"'app_data'")," event to refresh the data."),(0,o.kt)("p",null,"Now the todos can be deleted in the webview like this:"),(0,o.kt)("video",{width:450,autoplay:"autoplay",loop:!0,inline:!0,muted:!0},(0,o.kt)("source",{src:n(6176).Z,type:"video/webm"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Congratulations! \ud83c\udf89 You have finished the Machinat app tutorial. Now you are able to\ncombine ",(0,o.kt)("strong",{parentName:"p"},"JSX Chat UI"),", ",(0,o.kt)("strong",{parentName:"p"},"Services"),", ",(0,o.kt)("strong",{parentName:"p"},"Dialog Scripts")," and ",(0,o.kt)("strong",{parentName:"p"},"Webview")," to build\na feature-rich app with amazing experiences in chat."),(0,o.kt)("p",null,"Here are some resources you can go next:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more about Machinat at our ",(0,o.kt)("a",{parentName:"li",href:"/docs"},"Documents"),"."),(0,o.kt)("li",{parentName:"ul"},"Check the complete ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/todo-example/"},"Todo Example"),".\nYou can find some omitted features there, like ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/todo-example/blob/main/src/components/ShowTodos.tsx"},"paging"),"\nand ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/todo-example/blob/main/webview/pages/index.tsx#L46-L65"},"editing todo"),"."),(0,o.kt)("li",{parentName:"ul"},"Check more examples:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/note-example"},"Note Example")," - take notes in the webview."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/pomodoro-example"},"Pomodoro Eample")," - pomodoro timer in chat."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/4digits-example"},"4digits Example")," - play guessing 4 digits game in chat."))),(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/machinat/machinat/discussions"},"GitHub discussions")," to ask a question."),(0,o.kt)("li",{parentName:"ul"},"Follow our ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/machinatjs"},"Twitter")," to know any updates.")))}v.isMDXComponent=!0},3801:function(e,t,n){t.Z=n.p+"assets/images/webview-1-d3630f241bc20c6a586b2b23fd4ccc35.png"},4424:function(e,t,n){t.Z=n.p+"assets/images/webview-2-14f6e1717703fb0b67f3badd9c324c7d.png"},8388:function(e,t,n){t.Z=n.p+"assets/images/webview-3-b52c7c9607f615679688c784412fa71a.png"},3172:function(e,t,n){t.Z=n.p+"assets/images/webview-button-3fc7f312991dd46e75092c80751d8b96.png"},6176:function(e,t,n){t.Z=n.p+"assets/medias/webview-delete-00164357714ed6183f39fe7cf1611ced.webm"}}]);