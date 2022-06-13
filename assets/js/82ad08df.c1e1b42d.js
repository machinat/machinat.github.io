"use strict";(self.webpackChunkmachinat_github_io=self.webpackChunkmachinat_github_io||[]).push([[4831],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),p=a(7094),s=a(2466),u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,a,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,k=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,p.U)(),y=C.tabGroupChoices,w=C.setTabGroupChoices,E=(0,r.useState)(b),T=E[0],S=E[1],I=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=y[k];null!=P&&P!==T&&g.some((function(e){return e.value===P}))&&S(P)}var D=function(e){var t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==T&&(A(t),S(n),null!=k&&w(k,String(n)))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;a=null!=(l=I[o])?l:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:O,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8144:function(e,t,a){a.r(t),a.d(t,{HackTabsChoices:function(){return v},assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return k}});var n=a(7462),r=a(3366),l=a(7294),o=a(3905),i=a(5488),p=a(5162),s=a(7094),u=["components"],c={title:"Create a Machinat App"},d=void 0,m={unversionedId:"learn/create-app",id:"learn/create-app",title:"Create a Machinat App",description:"Let's create our first app and run it up! In this lesson, we'll create a",source:"@site/docs/learn/create-app.mdx",sourceDirName:"learn",slug:"/learn/create-app",permalink:"/docs/learn/create-app",draft:!1,editUrl:"https://github.com/machinat/machinat/edit/master/website/docs/learn/create-app.mdx",tags:[],version:"current",frontMatter:{title:"Create a Machinat App"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/learn"},next:{title:"Event and Reply",permalink:"/docs/learn/event-and-reply"}},h={},k=[{value:"Chat Platform",id:"chat-platform",level:2},{value:"Platform Setup",id:"platform-setup",level:3},{value:"Create a Facebook app",id:"create-a-facebook-app",level:4},{value:"Use Messenger in you app",id:"use-messenger-in-you-app",level:4},{value:"Create a Facebook page if you don&#39;t have one:",id:"create-a-facebook-page-if-you-dont-have-one",level:4},{value:"Connect your page to the app",id:"connect-your-page-to-the-app",level:4},{value:"Get page token",id:"get-page-token",level:3},{value:"Start App",id:"start-app",level:2},{value:"Start Dev Server",id:"start-dev-server",level:3},{value:"Run Migrations",id:"run-migrations",level:3},{value:"Create a bot",id:"create-a-bot",level:4},{value:"Set domain of the bot",id:"set-domain-of-the-bot",level:4},{value:"Start App",id:"start-app-1",level:2},{value:"Run Migrations",id:"run-migrations-1",level:3},{value:"Start Dev Server",id:"start-dev-server-1",level:3},{value:"Create Provider",id:"create-provider",level:4},{value:"Create Messaging API Channel",id:"create-messaging-api-channel",level:4},{value:"Create a LIFF App",id:"create-a-liff-app",level:4},{value:"Start App",id:"start-app-2",level:2},{value:"Run Migrations",id:"run-migrations-2",level:3},{value:"Start Dev Server",id:"start-dev-server-2",level:3}],v=function(){var e=(0,s.U)(),t=e.tabGroupChoices,a=e.setTabGroupChoices;return"undefined"==typeof window||l.useEffect((function(){var e="chat-platforms",n=new URL(window.location.href).searchParams.get("p");n!==t[e]&&["messenger","telegram","line"].includes(n)&&a(e,n)}),[]),null},f={toc:k,HackTabsChoices:v};function g(e){var t=e.components,l=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Let's create our first app and run it up! In this lesson, we'll create a\nhello-world chatbot and make it available on the chat platform."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Time to accomplish: 15 minutes"))),(0,o.kt)("h2",{id:"chat-platform"},"Chat Platform"),(0,o.kt)("p",null,"Machinat now supports three chat platforms: ",(0,o.kt)("inlineCode",{parentName:"p"},"messenger"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"telegram")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"line"),".\nPick one platform to use in the lessons and run this command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @machinat/app@latest -- -p <platform> --webview my-todo-bot\n")),(0,o.kt)("p",null,"The command initiates a new project of a hello-world bot.\nTry ",(0,o.kt)("inlineCode",{parentName:"p"},"cd my-todo-bot")," and take a look."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To support multiple chat platforms, add more ",(0,o.kt)("inlineCode",{parentName:"p"},"-p <platform>")," flag."))),(0,o.kt)("h3",{id:"platform-setup"},"Platform Setup"),(0,o.kt)("p",null,"Before starting the app, you need to set up the chat platform first. Please\nfollow the guide of the platform you choose:"),(0,o.kt)(v,{mdxType:"HackTabsChoices"}),(0,o.kt)(i.Z,{groupId:"chat-platforms",defaultValue:"messenger",values:[{label:"Messenger",value:"messenger"},{label:"Telegram",value:"telegram"},{label:"LINE",value:"line"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"messenger",mdxType:"TabItem"},(0,o.kt)("h4",{id:"create-a-facebook-app"},"Create a Facebook app"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://developers.facebook.com/apps"},"https://developers.facebook.com/apps"),", tap ",(0,o.kt)("inlineCode",{parentName:"li"},"Create App")," to create a new app."),(0,o.kt)("li",{parentName:"ol"},"Go to: ",(0,o.kt)("inlineCode",{parentName:"li"},"App Dashboard")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Basic"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"App ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"App Secret"),". Paste them in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),"\nfile in the project. Like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MESSENGER_APP_ID= 1234567890\nMESSENGER_APP_SECRET= abcdef123456...\n")),(0,o.kt)("h4",{id:"use-messenger-in-you-app"},"Use Messenger in you app"),(0,o.kt)("p",null,"  Go to: ",(0,o.kt)("inlineCode",{parentName:"p"},"App Dashboard")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Add a Product")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Messenger")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Set Up")),(0,o.kt)("h4",{id:"create-a-facebook-page-if-you-dont-have-one"},"Create a Facebook page if you don't have one:"),(0,o.kt)("p",null,"  Go to: ",(0,o.kt)("inlineCode",{parentName:"p"},"Messenger Setting")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Access Tokens")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Create New Page"),".\nThen follow the instructions to create a page."),(0,o.kt)("h4",{id:"connect-your-page-to-the-app"},"Connect your page to the app"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to: ",(0,o.kt)("inlineCode",{parentName:"li"},"Messenger Setting")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Access Tokens")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Add or Remove Pages"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the page you just created. After confirmation, you page should be\nlisted in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Access Tokens")," area."),(0,o.kt)("li",{parentName:"ol"},"Copy the id of the page and paste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MESSENGER_PAGE_ID= 1234567890\n")),(0,o.kt)("h3",{id:"get-page-token"},"Get page token"),(0,o.kt)("p",null,"  Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Token")," at the connected page. Copy the generated token and\npaste it in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MESSENGER_ACCESS_TOKEN= AaBbCcDdEeFf123456...\n")),(0,o.kt)("h2",{id:"start-app"},"Start App"),(0,o.kt)("h3",{id:"start-dev-server"},"Start Dev Server"),(0,o.kt)("p",null,"Now run this command in the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("p",null,"Your app should be successfully running if all the required settings are filled."),(0,o.kt)("h3",{id:"run-migrations"},"Run Migrations"),(0,o.kt)("p",null,"There is one more step for the first time starting. Keep the dev server\nrunning, and execute this command in ",(0,o.kt)("strong",{parentName:"p"},"another command line tab"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrate\n")),(0,o.kt)("p",null,"The command registers some necessary settings to the Messenger platform. Now try\nmessaging your Facebook page, the app should work like this:")),(0,o.kt)(p.Z,{value:"telegram",mdxType:"TabItem"},(0,o.kt)("h4",{id:"create-a-bot"},"Create a bot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Talk to ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/botfather"},"@BotFather")," in the ",(0,o.kt)("a",{parentName:"li",href:"https://telegram.org/"},"Telegram")," app."),(0,o.kt)("li",{parentName:"ol"},"Send '/newbot' command to create a bot. Follow the BotFather's instructions."),(0,o.kt)("li",{parentName:"ol"},"Copy the token of your bot and paste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file in the project, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TELEGRAM_BOT_TOKEN= 654321:AaBbCcDdEdFf123456...\n")),(0,o.kt)("h4",{id:"set-domain-of-the-bot"},"Set domain of the bot"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the '.env' file in the project and copy the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"DOMAIN")," field. It\nshould look like ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx-xxx-123.t.machinat.dev"),"."),(0,o.kt)("li",{parentName:"ol"},"Go back to ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/botfather"},"@BotFather")," and send ",(0,o.kt)("inlineCode",{parentName:"li"},"/mybot")," command. Choose the bot you just created."),(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Bot Settings")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Domain")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Edit Domain"),". Send the copied domain to BotFather.")),(0,o.kt)("h2",{id:"start-app-1"},"Start App"),(0,o.kt)("h3",{id:"run-migrations-1"},"Run Migrations"),(0,o.kt)("p",null,"Before the first time starting, you have to run this command in the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrate\n")),(0,o.kt)("p",null,"The command registers some necessary settings to the Telegram platform."),(0,o.kt)("h3",{id:"start-dev-server-1"},"Start Dev Server"),(0,o.kt)("p",null,"Now we can start app in development mode with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("p",null,"Keep the dev server running while developing. Now try messaging your bot, the\napp should work like this:")),(0,o.kt)(p.Z,{value:"line",mdxType:"TabItem"},(0,o.kt)("h4",{id:"create-provider"},"Create Provider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Provider at ",(0,o.kt)("a",{parentName:"li",href:"https://developers.line.biz/console/"},"https://developers.line.biz/console/")),(0,o.kt)("li",{parentName:"ol"},"Under the provider page, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Provider ID"),". Copy the value and\npaste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file in the project, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LINE_PROVIDER_ID= 1234567890\n")),(0,o.kt)("h4",{id:"create-messaging-api-channel"},"Create Messaging API Channel"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Channels")," tab at the provider page. Tap '+' and create a new\n",(0,o.kt)("inlineCode",{parentName:"li"},"Messaging API")," channel."),(0,o.kt)("li",{parentName:"ol"},"Copy the values of ",(0,o.kt)("inlineCode",{parentName:"li"},"Channel ID")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Channel secret")," under ",(0,o.kt)("inlineCode",{parentName:"li"},"Basic settings"),".\nPaste them in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LINE_CHANNEL_ID= 1234567890\nLINE_CHANNEL_SECRET = abcdef123456...\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Messaging API")," tab, issue an access token at ",(0,o.kt)("inlineCode",{parentName:"li"},"Channel access token"),".\nCopy the token and paste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LINE_ACCESS_TOKEN= AaBbCcDdEeFf123456...\n")),(0,o.kt)("h4",{id:"create-a-liff-app"},"Create a LIFF App"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Channels")," tab at the provider page. Tap '+' and create a new\n",(0,o.kt)("inlineCode",{parentName:"li"},"LINE Login")," channel."),(0,o.kt)("li",{parentName:"ol"},"Go to the '.env' file in your project and copy the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"DOMAIN")," field. It\nshould look like ",(0,o.kt)("inlineCode",{parentName:"li"},"xxx-xxx-123.t.machinat.dev"),"."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"LIFF")," tab, create a new LIFF app."),(0,o.kt)("li",{parentName:"ol"},"Fill the ",(0,o.kt)("inlineCode",{parentName:"li"},"Endpoint URL")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"https://{DOMAIN}/webview?platform=line")),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"profile")," option of ",(0,o.kt)("inlineCode",{parentName:"li"},"Scopes"),"."),(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"LIFF ID")," of the created LIFF app. Paste it in the ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file, like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LINE_LIFF_ID= 1234567890-abcdef123456\n")),(0,o.kt)("h2",{id:"start-app-2"},"Start App"),(0,o.kt)("h3",{id:"run-migrations-2"},"Run Migrations"),(0,o.kt)("p",null,"Before the first time starting, you have to run this command in the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run migrate\n")),(0,o.kt)("p",null,"The command registers some necessary settings to the LINE platform."),(0,o.kt)("h3",{id:"start-dev-server-2"},"Start Dev Server"),(0,o.kt)("p",null,"Now we can start app in development mode with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,o.kt)("p",null,"Keep the dev server running while developing. Now try messaging your LINE\nofficial account, the app should work like:"))),(0,o.kt)("img",{width:400,src:a(5229).Z}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Our first bot is running! Next, you'll learn how to receive messages and\nmake the reply."))}g.isMDXComponent=!0},5229:function(e,t,a){t.Z=a.p+"assets/images/hello-world-bot-4a632610f663d5b53442ab31f7f67b40.png"}}]);