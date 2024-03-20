(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2657:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,8590)),Promise.resolve().then(n.bind(n,2152)),Promise.resolve().then(n.bind(n,1667))},8590:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXWrapper:function(){return p}});var r={};n.r(r),n.d(r,{MDXContext:function(){return o},MDXProvider:function(){return m},useMDXComponents:function(){return a},withMDXComponents:function(){return s}});var l=n(3827),i=n(4090),u=n(5994);let o=i.createContext({});function s(e){return function(t){let n=a(t.components);return i.createElement(e,{...t,allComponents:n})}}function a(e){let t=i.useContext(o);return i.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let c={};function m(e){let t,{components:n,children:r,disableParentContext:l}=e;return t=l?"function"==typeof n?n({}):n||c:a(n),i.createElement(o.Provider,{value:t},r)}function d(e){let{compiledSource:t,frontmatter:n,scope:l,components:o={},lazy:s}=e,[a,c]=(0,i.useState)(!s);(0,i.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let d=(0,i.useMemo)(()=>{let e=Object.assign({opts:{...r,...u.jsxRuntime}},{frontmatter:n},l),i=Object.keys(e),o=Object.values(e),s=Reflect.construct(Function,i.concat("".concat(t)));return s.apply(s,o).default},[l,t]);if(!a)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=i.createElement(m,{components:o},i.createElement(d,null));return s?i.createElement("div",null,f):f}window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)};let f={},p=e=>{let{source:t}=e;return(0,l.jsx)(d,{...t,components:f})}},2152:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeSwitch:function(){return u}});var r=n(3827),l=n(4090),i=n(1774);let u=()=>{let[e,t]=(0,l.useState)(!1),{theme:n,setTheme:u,resolvedTheme:o}=(0,i.F)();return(0,l.useEffect)(()=>t(!0),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4 focus:outline-none",onClick:()=>u("dark"===n||"dark"===o?"light":"dark"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-yellow-500 dark:text-gray-100",children:e&&("dark"===n||"dark"===o)?(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})}},1667:function(e,t,n){"use strict";n.r(t),n.d(t,{TypeWriter:function(){return s}});var r=n(3827),l=n(4090),i=n(8491),u=n.n(i),o=n(8318);let s=e=>{let{messages:t}=e,[n,i]=(0,l.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:o.Wc.TYPING_SPEED});return(0,l.useEffect)(()=>{let e="",t=()=>{i(e=>({...e,text:e.isDeleting?e.message.substring(0,e.text.length-1):e.message.substring(0,e.text.length+1),typingSpeed:e.isDeleting?o.Wc.TYPING_SPEED:o.Wc.DELETING_SPEED})),e=setTimeout(t,n.typingSpeed)};return t(),()=>clearTimeout(e)},[n.isDeleting,n.typingSpeed]),(0,l.useEffect)(()=>{let e="";return n.isDeleting||n.text!==n.message?n.isDeleting&&""===n.text&&i(e=>({...e,isDeleting:!1,loopNum:e.loopNum+1,message:t[Number(e.loopNum)%Number(t.length)]})):e=setTimeout(()=>{i(e=>({...e,isDeleting:!0}))},o.Wc.DELAY_SPEED),()=>clearTimeout(e)},[n.text,n.message,n.isDeleting,t]),(0,r.jsxs)("h1",{children:[(0,r.jsx)("span",{children:n.text}),(0,r.jsx)("span",{className:u().cursor})]})}},8318:function(e,t,n){"use strict";n.d(t,{Wc:function(){return r}});let r={DELETING_SPEED:50,TYPING_SPEED:250,DELAY_SPEED:2500,MESSAGES:["Human","Developer","Foodie","Gamer"]}},8491:function(e){e.exports={cursor:"Typewriter_cursor__3kRVy",blink:"Typewriter_blink__nsrRp"}},5994:function(e,t,n){"use strict";e.exports.jsxRuntime=n(3827)}},function(e){e.O(0,[874,971,69,744],function(){return e(e.s=2657)}),_N_E=e.O()}]);