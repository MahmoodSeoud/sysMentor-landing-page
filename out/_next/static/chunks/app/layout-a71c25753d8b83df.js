(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5059:function(e,t,n){Promise.resolve().then(n.bind(n,2223)),Promise.resolve().then(n.t.bind(n,7028,23)),Promise.resolve().then(n.t.bind(n,6141,23))},2223:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7437),i=n(2265),l=n(6726),s=n(7856),a=n(1396),o=n.n(a);function u(){let[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(null),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let r=r=>{let{target:i}=r;l.current&&n.current&&(!e||l.current.contains(i)||n.current.contains(i)||t(!1))};return document.addEventListener("click",r),()=>document.removeEventListener("click",r)}),(0,i.useEffect)(()=>{let n=n=>{let{keyCode:r}=n;e&&27===r&&t(!1)};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)}),(0,r.jsxs)("div",{className:"flex md:hidden",children:[(0,r.jsxs)("button",{ref:n,className:"hamburger ".concat(e&&"active"),"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>t(!e),children:[(0,r.jsx)("span",{className:"sr-only",children:"Menu"}),(0,r.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-900",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{y:"4",width:"24",height:"2"}),(0,r.jsx)("rect",{y:"11",width:"24",height:"2"}),(0,r.jsx)("rect",{y:"18",width:"24",height:"2"})]})]}),(0,r.jsx)("div",{ref:l,children:(0,r.jsx)(s.u,{show:e,as:"nav",id:"mobile-nav",className:"absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsxs)("ul",{className:"px-5 py-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/signin",className:"flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center",onClick:()=>t(!1),children:"Sign in"})}),(0,r.jsx)("li",{children:(0,r.jsxs)(o(),{href:"/signup",className:"btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2",onClick:()=>t(!1),children:[(0,r.jsx)("span",{children:"Sign up"}),(0,r.jsx)("svg",{className:"w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z",fill:"#999",fillRule:"nonzero"})})]})})]})})})]})}function c(){let[e,t]=(0,i.useState)(!0),n=()=>{window.pageYOffset>10?t(!1):t(!0)};return(0,i.useEffect)(()=>(n(),window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[e]),(0,r.jsx)("header",{className:"fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ".concat(e?"":"bg-white backdrop-blur-sm shadow-lg"),children:(0,r.jsx)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6",children:(0,r.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,r.jsxs)("div",{className:"flex shrink-0 mr-4",children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)("p",{className:"h3",children:"sysMentor"})]}),(0,r.jsx)("nav",{className:"hidden md:flex md:grow",children:(0,r.jsx)("ul",{className:"flex grow justify-end flex-wrap items-center",children:(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"btn text-white bg-blue-600 hover:bg-blue-700 shadow",href:"#0",children:"Join SysMentor"})})})}),(0,r.jsx)(u,{})]})})})}},6726:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7437),i=n(1396),l=n.n(i),s=n(6691),a=n.n(s);let o=e=>{let{src:t}=e;return t};function u(){return(0,r.jsx)(l(),{href:"/",className:"block","aria-label":"SysMentor",children:(0,r.jsx)(a(),{src:"/sysMentorIcon.png",alt:"SysMentor",width:64,height:64,loader:o})})}},6141:function(){},7028:function(e){e.exports={style:{fontFamily:"'__Inter_d47a6f', '__Inter_Fallback_d47a6f'",fontStyle:"normal"},className:"__className_d47a6f",variable:"__variable_d47a6f"}},7856:function(e,t,n){"use strict";n.d(t,{u:function(){return Q}});var r,i,l,s,a=n(2265),o=n.t(a,2);function u(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}function c(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,c),r}var d=((r=d||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),f=((i=f||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function m({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:l=!0,name:s}){let a=v(t,e);if(l)return h(a,n,r,s);let o=null!=i?i:0;if(2&o){let{static:e=!1,...t}=a;if(e)return h(t,n,r,s)}if(1&o){let{unmount:e=!0,...t}=a;return c(e?0:1,{0:()=>null,1:()=>h({...t,hidden:!0,style:{display:"none"}},n,r,s)})}return h(a,n,r,s)}function h(e,t={},n,r){let{as:i=n,children:l,refName:s="ref",...o}=b(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let f={};if(t){let e=!1,n=[];for(let[r,i]of Object.entries(t))"boolean"==typeof i&&(e=!0),!0===i&&n.push(r);e&&(f["data-headlessui-state"]=n.join(" "))}if(i===a.Fragment&&Object.keys(g(o)).length>0){if(!(0,a.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>u(null==e?void 0:e.className(...t),o.className):u(null==e?void 0:e.className,o.className);return(0,a.cloneElement)(d,Object.assign({},v(d.props,g(b(o,["ref"]))),f,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,a.createElement)(i,Object.assign({},b(o,["ref"]),i!==a.Fragment&&c,i!==a.Fragment&&f),d)}function v(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let i of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;i(t,...r)}}});return t}function p(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function b(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let y=(0,a.createContext)(null);y.displayName="OpenClosedContext";var x=((l=x||{})[l.Open=1]="Open",l[l.Closed=2]="Closed",l[l.Closing=4]="Closing",l[l.Opening=8]="Opening",l);function w(){return(0,a.useContext)(y)}function E({value:e,children:t}){return a.createElement(y.Provider,{value:e},t)}var j=Object.defineProperty,N=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(N(e,"symbol"!=typeof t?t+"":t,n),n);class F{constructor(){S(this,"current",this.detect()),S(this,"handoffState","pending"),S(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let C=new F,T=(e,t)=>{C.isServer?(0,a.useEffect)(e,t):(0,a.useLayoutEffect)(e,t)};function O(){let e=(0,a.useRef)(!1);return T(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function k(e){let t=(0,a.useRef)(e);return T(()=>{t.current=e},[e]),t}function L(){let e;let t=(e="undefined"==typeof document,(0,o.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=a.useState(C.isHandoffComplete);return n&&!1===C.isHandoffComplete&&r(!1),a.useEffect(()=>{!0!==n&&r(!0)},[n]),a.useEffect(()=>C.handoff(),[]),!t&&n}let P=function(e){let t=k(e);return a.useCallback((...e)=>t.current(...e),[t])},R=Symbol();function _(...e){let t=(0,a.useRef)(e);(0,a.useEffect)(()=>{t.current=e},[e]);let n=P(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[R]))?void 0:n}function A(){let e=[],t={addEventListener:(e,n,r,i)=>(e.addEventListener(n,r,i),t.add(()=>e.removeEventListener(n,r,i))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=A();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function M(e,...t){e&&t.length>0&&e.classList.add(...t)}function H(e,...t){e&&t.length>0&&e.classList.remove(...t)}function I(){let[e]=(0,a.useState)(A);return(0,a.useEffect)(()=>()=>e.dispose(),[e]),e}function q(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let $=(0,a.createContext)(null);$.displayName="TransitionContext";var B=((s=B||{}).Visible="visible",s.Hidden="hidden",s);let U=(0,a.createContext)(null);function z(e){return"children"in e?z(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function D(e,t){let n=k(e),r=(0,a.useRef)([]),i=O(),l=I(),s=P((e,t=f.Hidden)=>{let s=r.current.findIndex(({el:t})=>t===e);-1!==s&&(c(t,{[f.Unmount](){r.current.splice(s,1)},[f.Hidden](){r.current[s].state="hidden"}}),l.microTask(()=>{var e;!z(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),o=P(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>s(e,f.Unmount)}),u=(0,a.useRef)([]),d=(0,a.useRef)(Promise.resolve()),m=(0,a.useRef)({enter:[],leave:[],idle:[]}),h=P((e,n,r)=>{u.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{u.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?d.current=d.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),v=P((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=u.current.shift())||e()}).then(()=>n(t))});return(0,a.useMemo)(()=>({children:r,register:o,unregister:s,onStart:h,onStop:v,wait:d,chains:m}),[o,s,r,h,v,m,d])}function V(){}U.displayName="NestingContext";let Y=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Z(e){var t;let n={};for(let r of Y)n[r]=null!=(t=e[r])?t:V;return n}let J=d.RenderStrategy,W=p(function(e,t){let{show:n,appear:r=!1,unmount:i=!0,...l}=e,s=(0,a.useRef)(null),o=_(s,t);L();let u=w();if(void 0===n&&null!==u&&(n=(u&x.Open)===x.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=(0,a.useState)(n?"visible":"hidden"),f=D(()=>{d("hidden")}),[h,v]=(0,a.useState)(!0),p=(0,a.useRef)([n]);T(()=>{!1!==h&&p.current[p.current.length-1]!==n&&(p.current.push(n),v(!1))},[p,n]);let g=(0,a.useMemo)(()=>({show:n,appear:r,initial:h}),[n,r,h]);(0,a.useEffect)(()=>{if(n)d("visible");else if(z(f)){let e=s.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")},[n,f]);let b={unmount:i},y=P(()=>{var t;h&&v(!1),null==(t=e.beforeEnter)||t.call(e)}),E=P(()=>{var t;h&&v(!1),null==(t=e.beforeLeave)||t.call(e)});return a.createElement(U.Provider,{value:f},a.createElement($.Provider,{value:g},m({ourProps:{...b,as:a.Fragment,children:a.createElement(G,{ref:o,...b,...l,beforeEnter:y,beforeLeave:E})},theirProps:{},defaultTag:a.Fragment,features:J,visible:"visible"===c,name:"Transition"})))}),G=p(function(e,t){var n,r,i;let l;let{beforeEnter:s,afterEnter:o,beforeLeave:d,afterLeave:h,enter:v,enterFrom:p,enterTo:g,entered:b,leave:y,leaveFrom:w,leaveTo:j,...N}=e,S=(0,a.useRef)(null),F=_(S,t),C=null==(n=N.unmount)||n?f.Unmount:f.Hidden,{show:R,appear:B,initial:V}=function(){let e=(0,a.useContext)($);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Y,W]=(0,a.useState)(R?"visible":"hidden"),G=function(){let e=(0,a.useContext)(U);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:Q}=G;(0,a.useEffect)(()=>K(S),[K,S]),(0,a.useEffect)(()=>{if(C===f.Hidden&&S.current){if(R&&"visible"!==Y){W("visible");return}return c(Y,{hidden:()=>Q(S),visible:()=>K(S)})}},[Y,S,K,Q,R,C]);let X=k({base:q(N.className),enter:q(v),enterFrom:q(p),enterTo:q(g),entered:q(b),leave:q(y),leaveFrom:q(w),leaveTo:q(j)}),ee=(i={beforeEnter:s,afterEnter:o,beforeLeave:d,afterLeave:h},l=(0,a.useRef)(Z(i)),(0,a.useEffect)(()=>{l.current=Z(i)},[i]),l),et=L();(0,a.useEffect)(()=>{if(et&&"visible"===Y&&null===S.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[S,Y,et]);let en=B&&R&&V,er=et&&(!V||B)?R?"enter":"leave":"idle",ei=function(e=0){let[t,n]=(0,a.useState)(e),r=O(),i=(0,a.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),l=(0,a.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:l,removeFlag:(0,a.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,a.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),el=P(e=>c(e,{enter:()=>{ei.addFlag(x.Opening),ee.current.beforeEnter()},leave:()=>{ei.addFlag(x.Closing),ee.current.beforeLeave()},idle:()=>{}})),es=P(e=>c(e,{enter:()=>{ei.removeFlag(x.Opening),ee.current.afterEnter()},leave:()=>{ei.removeFlag(x.Closing),ee.current.afterLeave()},idle:()=>{}})),ea=D(()=>{W("hidden"),Q(S)},G);!function({immediate:e,container:t,direction:n,classes:r,onStart:i,onStop:l}){let s=O(),a=I(),o=k(n);T(()=>{e&&(o.current="enter")},[e]),T(()=>{let e=A();a.add(e.dispose);let n=t.current;if(n&&"idle"!==o.current&&s.current){var u,d,f;let t,s,a,m,h,v,p;return e.dispose(),i.current(o.current),e.add((u=r.current,d="enter"===o.current,f=()=>{e.dispose(),l.current(o.current)},s=d?"enter":"leave",a=A(),m=void 0!==f?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,f(...e)}):()=>{},"enter"===s&&(n.removeAttribute("hidden"),n.style.display=""),h=c(s,{enter:()=>u.enter,leave:()=>u.leave}),v=c(s,{enter:()=>u.enterTo,leave:()=>u.leaveTo}),p=c(s,{enter:()=>u.enterFrom,leave:()=>u.leaveFrom}),H(n,...u.base,...u.enter,...u.enterTo,...u.enterFrom,...u.leave,...u.leaveFrom,...u.leaveTo,...u.entered),M(n,...u.base,...h,...p),a.nextFrame(()=>{H(n,...u.base,...h,...p),M(n,...u.base,...h,...v),function(e,t){let n=A();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[l,s]=[r,i].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),a=l+s;if(0!==a){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},a),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(H(n,...u.base,...h),M(n,...u.base,...u.entered),m()))}),a.dispose)),e.dispose}},[n])}({immediate:en,container:S,classes:X,direction:er,onStart:k(e=>{ea.onStart(S,e,el)}),onStop:k(e=>{ea.onStop(S,e,es),"leave"!==e||z(ea)||(W("hidden"),Q(S))})});let eo=N;return en?eo={...eo,className:u(N.className,...X.current.enter,...X.current.enterFrom)}:(eo.className=u(N.className,null==(r=S.current)?void 0:r.className),""===eo.className&&delete eo.className),a.createElement(U.Provider,{value:ea},a.createElement(E,{value:c(Y,{visible:x.Open,hidden:x.Closed})|ei.flags},m({ourProps:{ref:F},theirProps:eo,defaultTag:"div",features:J,visible:"visible"===Y,name:"Transition.Child"})))}),K=p(function(e,t){let n=null!==(0,a.useContext)($),r=null!==w();return a.createElement(a.Fragment,null,!n&&r?a.createElement(W,{ref:t,...e}):a.createElement(G,{ref:t,...e}))}),Q=Object.assign(W,{Child:K,Root:W})}},function(e){e.O(0,[986,396,971,938,744],function(){return e(e.s=5059)}),_N_E=e.O()}]);