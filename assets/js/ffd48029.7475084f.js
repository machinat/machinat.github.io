"use strict";(self.webpackChunkmachinat_github_io=self.webpackChunkmachinat_github_io||[]).push([[4881],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4510:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"Receiving Events"},p=void 0,s={unversionedId:"receiving-events",id:"receiving-events",title:"Receiving Events",description:"A sociable app is actually an event-driven server behind the scene.",source:"@site/docs/receiving-events.md",sourceDirName:".",slug:"/receiving-events",permalink:"/docs/receiving-events",draft:!1,editUrl:"https://github.com/machinat/machinat/edit/master/website/docs/receiving-events.md",tags:[],version:"current",frontMatter:{title:"Receiving Events"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Introducing JSX",permalink:"/docs/introducing-jsx"}},m={},d=[{value:"Event Context Object",id:"event-context-object",level:2},{value:"The Channel",id:"the-channel",level:3},{value:"Identify Event",id:"identify-event",level:3},{value:"Event Mixins",id:"event-mixins",level:4},{value:"Text Message Event",id:"text-message-event",level:6},{value:"Media Message Event",id:"media-message-event",level:6},{value:"Location Message Event",id:"location-message-event",level:6},{value:"Postback Event",id:"postback-event",level:6},{value:"Serving for Multiple Platforms",id:"serving-for-multiple-platforms",level:3},{value:"Get Raw HTTP Request",id:"get-raw-http-request",level:3},{value:"Handle Exepetions",id:"handle-exepetions",level:2}],c={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A sociable app is actually an ",(0,l.kt)("em",{parentName:"p"},"event-driven")," server behind the scene.\nIt receives events from external platforms and makes reactions to the users."),(0,l.kt)("p",null,"In Machinat, you can listen to all the events in a single ",(0,l.kt)("inlineCode",{parentName:"p"},"app.onEvent()")," entry."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const app = Machinat.createApp({/*...*/});\n\napp\n  .onEvent(context => {\n    console.log(\n      `${context.event.type} from ${context.platform}`\n    );\n  })\n  .start();\n")),(0,l.kt)("h2",{id:"event-context-object"},"Event Context Object"),(0,l.kt)("p",null,"Events from every platform implement the event context interface.\nIt's a plain object with the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", the platform name.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"event"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", represent the happened event. More info is available depending on the event type. Check the ",(0,l.kt)("a",{parentName:"p",href:"#event-mixins"},"event mixins"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", platform of the event.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"category"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", rough classifications of the events. Here are some common categories:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'message'"),": a message sent by the user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'postback'"),": the user interacts with an UI defined by the app (like a button)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'action'"),": a non-message action triggered by an user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'system'"),": an event from the platform, no user activity is involved."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", the accurate event type.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"payload"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", the raw event data from the platform.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"channel"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", the location where the event happened. Check the ",(0,l.kt)("a",{parentName:"p",href:"#the-channel"},"details here"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"platform"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", platform of the channel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uid"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", unique id of the channel.")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"null | object"),", the user who triggered the event.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"platform"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", platform of the user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uid"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", unique id of the user.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", the transmission metadata of the event. More info is available depending on the implementation."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"source"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", the source type of the event, typically 'webhook'."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"bot"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null | object"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"Bot")," instance for making reactions. Check ",(0,l.kt)("a",{parentName:"p",href:"/docs/rendering-messages"},(0,l.kt)("em",{parentName:"a"},"Rendering Messages Doc"))," for more details."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"platform"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", platform of the bot."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"render(channel, message)"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),", send messages to a channel.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),", the channel object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string|element"),", the messages to be sent."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"reply(message)"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"function"),", a sugar to reply messages to the current channel. It works the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"bot.render(event.channel, messages)"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string|element"),", the messages to be replied.")))),(0,l.kt)("h3",{id:"the-channel"},"The Channel"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Channel")," is a special abstraction that refers to the location where events happen.\nIt could be a chat thread, a WebSocket connection or any place depending on the platform."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"channel.uid")," is the identifier string of the channel.\nIt's unique across all the platforms,\nso you can use it as the key to store data like the chat state."),(0,l.kt)("p",null,"Many services require the channel to work.\nThe most common one is sending reactions back,\nlike ",(0,l.kt)("inlineCode",{parentName:"p"},"bot.render(event.channel, <Hello />)"),"."),(0,l.kt)("h3",{id:"identify-event"},"Identify Event"),(0,l.kt)("p",null,"You can identify the received event type by the ",(0,l.kt)("inlineCode",{parentName:"p"},"platform"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," keys.\nFor example, this reply a mirrored text when a text message is met:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onEvent(async ({ event, reply }) => {\n  if (event.category === 'message' && event.type === 'text') {\n    await reply(event.text.toUpperCase() + '!!!');\n  }\n});\n")),(0,l.kt)("h4",{id:"event-mixins"},"Event Mixins"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"context.event")," also contains some details about each type of event.\nLike in the example above, we get ",(0,l.kt)("inlineCode",{parentName:"p"},"event.text")," from the events with ",(0,l.kt)("inlineCode",{parentName:"p"},"'message'")," category and ",(0,l.kt)("inlineCode",{parentName:"p"},"'text'")," type."),(0,l.kt)("p",null,"Here are the common event mixins:"),(0,l.kt)("h6",{id:"text-message-event"},"Text Message Event"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'message'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'text'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", the message text.")),(0,l.kt)("h6",{id:"media-message-event"},"Media Message Event"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'message'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'image' | 'video' | 'audio' | 'file'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined | string"),", URL of the media if available.")),(0,l.kt)("h6",{id:"location-message-event"},"Location Message Event"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'message'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'location'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"latitude"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),", the latitude."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"longitude"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),", the longitude.")),(0,l.kt)("h6",{id:"postback-event"},"Postback Event"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'postback'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"'postback'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined | string"),", the postback data.")),(0,l.kt)("p",null,"These common mixins are implemented by all the platforms.\nYou can use them to build platform-agnostic features as the example above."),(0,l.kt)("p",null,"Each platform also has its own event mixins, check ",(0,l.kt)("a",{parentName:"p",href:"pathname:///api"},"API references")," for the details.\nAlso we recommend using ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," to have types support the events while developing."),(0,l.kt)("h3",{id:"serving-for-multiple-platforms"},"Serving for Multiple Platforms"),(0,l.kt)("p",null,"Serving on multiple platforms is important on social media.\nYou can handle events from different platforms in two strategies:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Use common event mixins to make platform-agnostic reaction, like:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onEvent(async ({ event, reply }) => {\n  if (event.category === 'message' && event.type === 'text') {\n    // handle text messages\n    await reply(`Hello ${event.text}`);\n  } else if (event.category === 'message' && event.type === 'image') {\n    // handle image messages\n    await downloadImage(event.url);\n  }\n});\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Check ",(0,l.kt)("inlineCode",{parentName:"li"},"context.platform")," to make different reaction by platform, like:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onEvent(async ({ platform, reply }) => {\nif (platform === 'messenger') {\n    // handle events from Messenger\n    await reply('Hello Messenger!');\n  } else {\n    // handle events from Telegram\n    await reply('Hello Telegram!');\n  }\n})\n")),(0,l.kt)("h3",{id:"get-raw-http-request"},"Get Raw HTTP Request"),(0,l.kt)("p",null,"In most cases, events from platforms are transmitted through HTTP requests.\nCheck ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.request")," if you need details like the HTTP headers."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"context.metadata")," of a webhook event might look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  source: 'webhook',\n  request: {\n    method: 'POST',\n    url: 'https://machinat.io/webhook/messenger',\n    headers: {/*...*/},\n    body: '{\"some\":\"json\"}'\n  }\n}\n")),(0,l.kt)("h2",{id:"handle-exepetions"},"Handle Exepetions"),(0,l.kt)("p",null,"An unhandled error from the app exits the process in newer Node.js versions,\nso make sure you subscribe to them with ",(0,l.kt)("inlineCode",{parentName:"p"},"app.onError(handler)")," all the time."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.onError(err => {\n  console.error(err);\n});\n")),(0,l.kt)("p",null,"Note that the HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"4xx")," on the webhook,\nlike ",(0,l.kt)("inlineCode",{parentName:"p"},"Bad Request")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Unauthorized"),",\nare not treated as errors.\nThese invalid requests are not popped to either the ",(0,l.kt)("inlineCode",{parentName:"p"},"onEvent")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"onError")," method."))}k.isMDXComponent=!0}}]);