"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[872],{34292:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});let i=n(8932),r=n(50026);t.default=function(e){let{html:t,height:n=null,width:o=null,children:a,dataNtpc:s=""}=e;return(0,r.useEffect)(()=>{s&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(s)}})},[s]),(0,i.jsxs)(i.Fragment,{children:[a,t?(0,i.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=o?"".concat(o,"px"):"auto"},"data-ntpc":s,dangerouslySetInnerHTML:{__html:t}}):null]})}},56388:function(e,t,n){var i;let r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let o=n(8932),a=n(50026),s=(i=n(27906))&&i.__esModule?i:{default:i};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===r&&(r=n),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,o.jsx)(s.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))}},13758:function(e,t,n){var i;let r;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let o=n(8932),a=n(50026),s=(i=n(27906))&&i.__esModule?i:{default:i};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:i,preview:l,dataLayer:c}=e;void 0===r&&(r=n);let u="dataLayer"!==n?"&l=".concat(n):"";return(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(n,"');")}}),(0,o.jsx)(s.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(u).concat(i?"&gtm_auth=".concat(i):"").concat(l?"&gtm_preview=".concat(l,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===r){console.warn("@next/third-parties: GTM has not been initialized");return}window[r]?window[r].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(r," does not exist"))}},27906:function(e,t,n){n.r(t),n.d(t,{default:function(){return r.a}});var i=n(94876),r=n.n(i),o={};for(var a in i)"default"!==a&&(o[a]=(function(e){return i[e]}).bind(0,a));n.d(t,o)},97497:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return i},default:function(){return a},isEqualNode:function(){return o}});let i={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function r(e){let{type:t,props:n}=e,r=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=i[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?r[o]=!!n[e]:r.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?r.innerHTML=a.__html||"":o&&(r.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),r}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let i=t.cloneNode(!0);return i.setAttribute("nonce",""),i.nonce=n,n===e.nonce&&e.isEqualNode(i)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let i=t.title?t.title[0]:null,r="";if(i){let{children:e}=i.props;r="string"==typeof e?e:Array.isArray(e)?e.join(""):""}r!==document.title&&(document.title=r),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],i=n.querySelector("meta[name=next-head-count]"),a=Number(i.content),s=[];for(let t=0,n=i.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&s.push(n)}let c=t.map(r).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(o(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,i)),i.content=(a-s.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},94876:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return m}});let i=n(44267),r=n(49496),o=n(8932),a=i._(n(36845)),s=r._(n(50026)),l=n(52862),c=n(97497),u=n(99315),d=new Map,h=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],f=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},w=e=>{let{src:t,id:n,onLoad:i=()=>{},onReady:r=null,dangerouslySetInnerHTML:o,children:a="",strategy:s="afterInteractive",onError:l,stylesheets:u}=e,w=n||t;if(w&&h.has(w))return;if(d.has(t)){h.add(w),d.get(t).then(i,l);return}let g=()=>{r&&r(),h.add(w)},m=document.createElement("script"),y=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),i&&i.call(this,t),g()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[n,i]of(o?(m.innerHTML=o.__html||"",g()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",g()):t&&(m.src=t,d.set(t,y)),Object.entries(e))){if(void 0===i||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,i)}"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),u&&f(u),document.body.appendChild(m)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>w(e))}):w(e)}function m(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function y(e){let{id:t,src:n="",onLoad:i=()=>{},onReady:r=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...f}=e,{updateScripts:g,scripts:m,getIsSsr:y,appDir:b,nonce:v}=(0,s.useContext)(l.HeadManagerContext),C=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||n;C.current||(r&&e&&h.has(e)&&r(),C.current=!0)},[r,t,n]);let x=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{!x.current&&("afterInteractive"===c?w(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>w(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>w(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(m[c]=(m[c]||[]).concat([{id:t,src:n,onLoad:i,onReady:r,onError:d,...f}]),g(m)):y&&y()?h.add(t||n):y&&!y()&&w(e)),b){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity,nonce:v,crossOrigin:f.crossOrigin}:{as:"script",nonce:v,crossOrigin:f.crossOrigin}),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...f,id:t}])+")"}})):(f.dangerouslySetInnerHTML&&(f.children=f.dangerouslySetInnerHTML.__html,delete f.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...f,id:t}])+")"}}));"afterInteractive"===c&&n&&a.default.preload(n,f.integrity?{as:"script",integrity:f.integrity,nonce:v,crossOrigin:f.crossOrigin}:{as:"script",nonce:v,crossOrigin:f.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},65257:function(e,t,n){n.d(t,{aU:function(){return et},x8:function(){return en},dk:function(){return ee},zt:function(){return G},fC:function(){return J},Dx:function(){return Z},l_:function(){return X}});var i=n(50026),r=n(36845),o=n(31535),a=n(59675),s=n(22841),l=n(36967),c=n(8932),u=n(54204),d=n(69783),h=n(34659),p=n(49004),f=n(27979),w=n(61621),g=n(55272),m=n(71562),y="ToastProvider",[b,v,C]=function(e){let t=e+"CollectionProvider",[n,r]=(0,s.b)(t),[o,u]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,r=i.useRef(null),a=i.useRef(new Map).current;return(0,c.jsx)(o,{scope:t,itemMap:a,collectionRef:r,children:n})};d.displayName=t;let h=e+"CollectionSlot",p=i.forwardRef((e,t)=>{let{scope:n,children:i}=e,r=u(h,n),o=(0,a.e)(t,r.collectionRef);return(0,c.jsx)(l.g7,{ref:o,children:i})});p.displayName=h;let f=e+"CollectionItemSlot",w="data-radix-collection-item",g=i.forwardRef((e,t)=>{let{scope:n,children:r,...o}=e,s=i.useRef(null),d=(0,a.e)(t,s),h=u(f,n);return i.useEffect(()=>(h.itemMap.set(s,{ref:s,...o}),()=>void h.itemMap.delete(s))),(0,c.jsx)(l.g7,{[w]:"",ref:d,children:r})});return g.displayName=f,[{Provider:d,Slot:p,ItemSlot:g},function(t){let n=u(e+"CollectionConsumer",t);return i.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(w,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[x,A]=(0,s.b)("Toast",[C]),[k,T]=x(y),S=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:a=50,children:s}=e,[l,u]=i.useState(null),[d,h]=i.useState(0),p=i.useRef(!1),f=i.useRef(!1);return n.trim()||console.error("Invalid prop `label` supplied to `".concat(y,"`. Expected non-empty `string`.")),(0,c.jsx)(b.Provider,{scope:t,children:(0,c.jsx)(k,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:a,toastCount:d,viewport:l,onViewportChange:u,onToastAdd:i.useCallback(()=>h(e=>e+1),[]),onToastRemove:i.useCallback(()=>h(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f,children:s})})};S.displayName=y;var E="ToastViewport",I=["F8"],R="toast.viewportPause",O="toast.viewportResume",N=i.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=I,label:o="Notifications ({hotkey})",...s}=e,l=T(E,n),d=v(n),h=i.useRef(null),f=i.useRef(null),w=i.useRef(null),g=i.useRef(null),m=(0,a.e)(t,g,l.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),C=l.toastCount>0;i.useEffect(()=>{let e=e=>{var t;r.every(t=>e[t]||e.code===t)&&(null===(t=g.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),i.useEffect(()=>{let e=h.current,t=g.current;if(C&&e&&t){let n=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(R);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},i=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(O);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},r=t=>{e.contains(t.relatedTarget)||i()},o=()=>{e.contains(document.activeElement)||i()};return e.addEventListener("focusin",n),e.addEventListener("focusout",r),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",o),window.addEventListener("blur",n),window.addEventListener("focus",i),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",r),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",n),window.removeEventListener("focus",i)}}},[C,l.isClosePausedRef]);let x=i.useCallback(e=>{let{tabbingDirection:t}=e,n=d().map(e=>{let n=e.ref.current,i=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?i:i.reverse()});return("forwards"===t?n.reverse():n).flat()},[d]);return i.useEffect(()=>{let e=g.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var i,r,o;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(i=f.current)||void 0===i||i.focus();return}let s=x({tabbingDirection:a?"backwards":"forwards"}),l=s.findIndex(e=>e===n);_(s.slice(l+1))?t.preventDefault():a?null===(r=f.current)||void 0===r||r.focus():null===(o=w.current)||void 0===o||o.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,x]),(0,c.jsxs)(u.I0,{ref:h,role:"region","aria-label":o.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:C?void 0:"none"},children:[C&&(0,c.jsx)(D,{ref:f,onFocusFromOutsideViewport:()=>{_(x({tabbingDirection:"forwards"}))}}),(0,c.jsx)(b.Slot,{scope:n,children:(0,c.jsx)(p.WV.ol,{tabIndex:-1,...s,ref:m})}),C&&(0,c.jsx)(D,{ref:w,onFocusFromOutsideViewport:()=>{_(x({tabbingDirection:"backwards"}))}})]})});N.displayName=E;var P="ToastFocusProxy",D=i.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=e,o=T(P,n);return(0,c.jsx)(m.T,{"aria-hidden":!0,tabIndex:0,...r,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;(null===(t=o.viewport)||void 0===t?void 0:t.contains(n))||i()}})});D.displayName=P;var B="Toast",$=i.forwardRef((e,t)=>{let{forceMount:n,open:i,defaultOpen:r,onOpenChange:a,...s}=e,[l=!0,u]=(0,w.T)({prop:i,defaultProp:r,onChange:a});return(0,c.jsx)(h.z,{present:n||l,children:(0,c.jsx)(M,{open:l,...s,ref:t,onClose:()=>u(!1),onPause:(0,f.W)(e.onPause),onResume:(0,f.W)(e.onResume),onSwipeStart:(0,o.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,o.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:(0,o.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,o.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),u(!1)})})})});$.displayName=B;var[U,j]=x(B,{onClose(){}}),M=i.forwardRef((e,t)=>{let{__scopeToast:n,type:s="foreground",duration:l,open:d,onClose:h,onEscapeKeyDown:w,onPause:g,onResume:m,onSwipeStart:y,onSwipeMove:v,onSwipeCancel:C,onSwipeEnd:x,...A}=e,k=T(B,n),[S,E]=i.useState(null),I=(0,a.e)(t,e=>E(e)),N=i.useRef(null),P=i.useRef(null),D=l||k.duration,$=i.useRef(0),j=i.useRef(D),M=i.useRef(0),{onToastAdd:q,onToastRemove:W}=k,Q=(0,f.W)(()=>{var e;(null==S?void 0:S.contains(document.activeElement))&&(null===(e=k.viewport)||void 0===e||e.focus()),h()}),F=i.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(M.current),$.current=new Date().getTime(),M.current=window.setTimeout(Q,e))},[Q]);i.useEffect(()=>{let e=k.viewport;if(e){let t=()=>{F(j.current),null==m||m()},n=()=>{let e=new Date().getTime()-$.current;j.current=j.current-e,window.clearTimeout(M.current),null==g||g()};return e.addEventListener(R,n),e.addEventListener(O,t),()=>{e.removeEventListener(R,n),e.removeEventListener(O,t)}}},[k.viewport,D,g,m,F]),i.useEffect(()=>{d&&!k.isClosePausedRef.current&&F(D)},[d,D,k.isClosePausedRef,F]),i.useEffect(()=>(q(),()=>W()),[q,W]);let K=i.useMemo(()=>S?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let i=t.ariaHidden||t.hidden||"none"===t.style.display,r=""===t.dataset.radixToastAnnounceExclude;if(!i){if(r){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(S):null,[S]);return k.viewport?(0,c.jsxs)(c.Fragment,{children:[K&&(0,c.jsx)(L,{__scopeToast:n,role:"status","aria-live":"foreground"===s?"assertive":"polite","aria-atomic":!0,children:K}),(0,c.jsx)(U,{scope:n,onClose:Q,children:r.createPortal((0,c.jsx)(b.ItemSlot,{scope:n,children:(0,c.jsx)(u.fC,{asChild:!0,onEscapeKeyDown:(0,o.M)(w,()=>{k.isFocusedToastEscapeKeyDownRef.current||Q(),k.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,c.jsx)(p.WV.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":k.swipeDirection,...A,ref:I,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,o.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==w||w(e.nativeEvent),e.nativeEvent.defaultPrevented||(k.isFocusedToastEscapeKeyDownRef.current=!0,Q()))}),onPointerDown:(0,o.M)(e.onPointerDown,e=>{0===e.button&&(N.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,o.M)(e.onPointerMove,e=>{if(!N.current)return;let t=e.clientX-N.current.x,n=e.clientY-N.current.y,i=!!P.current,r=["left","right"].includes(k.swipeDirection),o=["left","up"].includes(k.swipeDirection)?Math.min:Math.max,a=r?o(0,t):0,s=r?0:o(0,n),l="touch"===e.pointerType?10:2,c={x:a,y:s},u={originalEvent:e,delta:c};i?(P.current=c,V("toast.swipeMove",v,u,{discrete:!1})):Y(c,k.swipeDirection,l)?(P.current=c,V("toast.swipeStart",y,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(N.current=null)}),onPointerUp:(0,o.M)(e.onPointerUp,e=>{let t=P.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),P.current=null,N.current=null,t){let n=e.currentTarget,i={originalEvent:e,delta:t};Y(t,k.swipeDirection,k.swipeThreshold)?V("toast.swipeEnd",x,i,{discrete:!0}):V("toast.swipeCancel",C,i,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),k.viewport)})]}):null}),L=e=>{let{__scopeToast:t,children:n,...r}=e,o=T(B,t),[a,s]=i.useState(!1),[l,u]=i.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,f.W)(e);(0,g.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>s(!0)),i.useEffect(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,c.jsx)(d.h,{asChild:!0,children:(0,c.jsx)(m.T,{...r,children:a&&(0,c.jsxs)(c.Fragment,{children:[o.label," ",n]})})})},q=i.forwardRef((e,t)=>{let{__scopeToast:n,...i}=e;return(0,c.jsx)(p.WV.div,{...i,ref:t})});q.displayName="ToastTitle";var W=i.forwardRef((e,t)=>{let{__scopeToast:n,...i}=e;return(0,c.jsx)(p.WV.div,{...i,ref:t})});W.displayName="ToastDescription";var Q="ToastAction",F=i.forwardRef((e,t)=>{let{altText:n,...i}=e;return n.trim()?(0,c.jsx)(H,{altText:n,asChild:!0,children:(0,c.jsx)(z,{...i,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(Q,"`. Expected non-empty `string`.")),null)});F.displayName=Q;var K="ToastClose",z=i.forwardRef((e,t)=>{let{__scopeToast:n,...i}=e,r=j(K,n);return(0,c.jsx)(H,{asChild:!0,children:(0,c.jsx)(p.WV.button,{type:"button",...i,ref:t,onClick:(0,o.M)(e.onClick,r.onClose)})})});z.displayName=K;var H=i.forwardRef((e,t)=>{let{__scopeToast:n,altText:i,...r}=e;return(0,c.jsx)(p.WV.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:t})});function V(e,t,n,i){let{discrete:r}=i,o=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,p.jH)(o,a):o.dispatchEvent(a)}var Y=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=Math.abs(e.x),r=Math.abs(e.y),o=i>r;return"left"===t||"right"===t?o&&i>n:!o&&r>n};function _(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var G=S,X=N,J=$,Z=q,ee=W,et=F,en=z},24018:function(e,t,n){n.d(t,{Gm:function(){return r},Qy:function(){return s},ZF:function(){return l}});var i=n(99681);function r(e){return{onFetch:(t,n)=>{let r=async()=>{let n;let r=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,l=t.state.data?.pages||[],c=t.state.data?.pageParams||[],u=!1,d=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?u=!0:t.signal.addEventListener("abort",()=>{u=!0}),t.signal)})},h=(0,i.cG)(t.options,t.fetchOptions),p=async(e,n,r)=>{if(u)return Promise.reject();if(null==n&&e.pages.length)return Promise.resolve(e);let o={queryKey:t.queryKey,pageParam:n,direction:r?"backward":"forward",meta:t.options.meta};d(o);let a=await h(o),{maxPages:s}=t.options,l=r?i.Ht:i.VX;return{pages:l(e.pages,a,s),pageParams:l(e.pageParams,n,s)}};if(s&&l.length){let e="backward"===s,t={pages:l,pageParams:c},i=(e?a:o)(r,t);n=await p(t,i,e)}else{n=await p({pages:[],pageParams:[]},c[0]??r.initialPageParam);let t=e??l.length;for(let e=1;e<t;e++){let e=o(r,n);if(null==e)break;n=await p(n,e)}}return n};t.options.persister?t.fetchFn=()=>t.options.persister?.(r,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=r}}}function o(e,{pages:t,pageParams:n}){let i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,n[i],n):void 0}function a(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}function s(e,t){return!!t&&null!=o(e,t)}function l(e,t){return!!t&&!!e.getPreviousPageParam&&null!=a(e,t)}},11116:function(e,t,n){n.d(t,{A:function(){return s},z:function(){return l}});var i=n(99681),r=n(92156),o=n(31696),a=n(6726),s=class extends a.F{#e;#t;#n;#i;#r;#o;constructor(e){super(),this.#o=!1,this.#r=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#n=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,i=n?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(e){this.options={...this.#r,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#n.remove(this)}setData(e,t){let n=(0,i.oE)(this.state.data,e,this.options);return this.#a({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e,t){this.#a({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#i?.promise;return this.#i?.cancel(e),t?t.then(i.ZT).catch(i.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>!1!==(0,i.Nc)(e.options.enabled,this))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,i.Kp)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){let e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#i&&(this.#o?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},a={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let e=(0,i.cG)(this.options,t),n={queryKey:this.queryKey,meta:this.meta};return(r(n),this.#o=!1,this.options.persister)?this.options.persister(e,n,this):e(n)}};r(a),this.options.behavior?.onFetch(a,this),this.#t=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#a({type:"fetch",meta:a.fetchOptions?.meta});let s=e=>{(0,o.DV)(e)&&e.silent||this.#a({type:"error",error:e}),(0,o.DV)(e)||(this.#n.config.onError?.(e,this),this.#n.config.onSettled?.(this.state.data,e,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.#i=(0,o.Mz)({initialPromise:t?.initialPromise,fn:a.fetchFn,abort:n.abort.bind(n),onSuccess:e=>{if(void 0===e){s(Error(`${this.queryHash} data is undefined`));return}try{this.setData(e)}catch(e){s(e);return}this.#n.config.onSuccess?.(e,this),this.#n.config.onSettled?.(e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:s,onFail:(e,t)=>{this.#a({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#i.start()}#a(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...l(t.data,this.options),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=e.error;if((0,o.DV)(n)&&n.revert&&this.#t)return{...this.#t,fetchStatus:"idle"};return{...t,error:n,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),r.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:e})})}};function l(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,o.Kw)(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}},46014:function(e,t,n){n.d(t,{S:function(){return f}});var i=n(99681),r=n(11116),o=n(92156),a=n(22826),s=class extends a.l{constructor(e={}){super(),this.config=e,this.#s=new Map}#s;build(e,t,n){let o=t.queryKey,a=t.queryHash??(0,i.Rm)(o,t),s=this.get(a);return s||(s=new r.A({cache:this,queryKey:o,queryHash:a,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(o)}),this.add(s)),s}add(e){this.#s.has(e.queryHash)||(this.#s.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#s.get(e.queryHash);t&&(e.destroy(),t===e&&this.#s.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){o.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#s.get(e)}getAll(){return[...this.#s.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,i._x)(e,t)):t}notify(e){o.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){o.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){o.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},l=n(49166),c=class extends a.l{constructor(e={}){super(),this.config=e,this.#l=new Map,this.#c=Date.now()}#l;#c;build(e,t,n){let i=new l.m({mutationCache:this,mutationId:++this.#c,options:e.defaultMutationOptions(t),state:n});return this.add(i),i}add(e){let t=u(e),n=this.#l.get(t)??[];n.push(e),this.#l.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=u(e);if(this.#l.has(t)){let n=this.#l.get(t)?.filter(t=>t!==e);n&&(0===n.length?this.#l.delete(t):this.#l.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#l.get(u(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#l.get(u(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){o.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#l.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,i.X7)(e,t))}notify(e){o.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return o.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(i.ZT))))}};function u(e){return e.options.scope?.id??String(e.mutationId)}var d=n(95116),h=n(40525),p=n(24018),f=class{#u;#d;#r;#h;#p;#f;#w;#g;constructor(e={}){this.#u=e.queryCache||new s,this.#d=e.mutationCache||new c,this.#r=e.defaultOptions||{},this.#h=new Map,this.#p=new Map,this.#f=0}mount(){this.#f++,1===this.#f&&(this.#w=d.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#u.onFocus())}),this.#g=h.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#u.onOnline())}))}unmount(){this.#f--,0===this.#f&&(this.#w?.(),this.#w=void 0,this.#g?.(),this.#g=void 0)}isFetching(e){return this.#u.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#d.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#u.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),r=this.#u.build(this,n);return e.revalidateIfStale&&r.isStaleByTime((0,i.KC)(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#u.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let r=this.defaultQueryOptions({queryKey:e}),o=this.#u.get(r.queryHash),a=o?.state.data,s=(0,i.SE)(t,a);if(void 0!==s)return this.#u.build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return o.V.batch(()=>this.#u.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#u.get(t.queryHash)?.state}removeQueries(e){let t=this.#u;o.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#u,i={type:"active",...e};return o.V.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){let n={revert:!0,...t};return Promise.all(o.V.batch(()=>this.#u.findAll(e).map(e=>e.cancel(n)))).then(i.ZT).catch(i.ZT)}invalidateQueries(e={},t={}){return o.V.batch(()=>{if(this.#u.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){let n={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(o.V.batch(()=>this.#u.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(i.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(i.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=this.#u.build(this,t);return n.isStaleByTime((0,i.KC)(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(e){return e.behavior=(0,p.Gm)(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return h.N.isOnline()?this.#d.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#u}getMutationCache(){return this.#d}getDefaultOptions(){return this.#r}setDefaultOptions(e){this.#r=e}setQueryDefaults(e,t){this.#h.set((0,i.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#h.values()],n={};return t.forEach(t=>{(0,i.to)(e,t.queryKey)&&(n={...n,...t.defaultOptions})}),n}setMutationDefaults(e,t){this.#p.set((0,i.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#p.values()],n={};return t.forEach(t=>{(0,i.to)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#r.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,i.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===i.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#r.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#u.clear(),this.#d.clear()}}},61726:function(e,t,n){n.d(t,{$:function(){return r}});var i=n(43691);async function r(e,t){let n;if((n="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new i.wi;try{e.setState(e=>({...e,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});let i=await n.connect({chainId:t.chainId}),r=i.accounts;return n.emitter.off("connect",e._internal.events.connect),n.emitter.on("change",e._internal.events.change),n.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,connections:new Map(e.connections).set(n.uid,{accounts:r,chainId:i.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:r,chainId:i.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}},76759:function(e,t,n){n.d(t,{z:function(){return i}});async function i(e,t={}){let n;if(t.connector)n=t.connector;else{let{connections:t,current:i}=e.state,r=t.get(i);n=r?.connector}let i=e.state.connections;n&&(await n.disconnect(),n.emitter.off("change",e._internal.events.change),n.emitter.off("disconnect",e._internal.events.disconnect),n.emitter.on("connect",e._internal.events.connect),i.delete(n.uid)),e.setState(e=>{if(0===i.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=i.values().next().value;return{...e,connections:new Map(i),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let n=e.state.connections.get(t)?.connector;if(!n)return;await e.storage?.setItem("recentConnectorId",n.id)}}},72868:function(e,t,n){n.d(t,{Q:function(){return a}});var i=n(9190),r=n(57139),o=n(91229);async function a(e,t){let n;let{chainId:a,connector:s,...l}=t;n=t.account?t.account:(await (0,o.e)(e,{account:t.account,chainId:a,connector:s})).account;let c=e.getClient({chainId:a});return(0,r.s)(c,i.Q,"estimateGas")({...l,account:n})}},43148:function(e,t,n){n.d(t,{s:function(){return d}});var i=n(17803),r=n(72116),o=n(86030),a=n(88113),s=n(29980),l=n(57139),c=n(52277),u=n(3770);async function d(e,t){let{address:n,blockNumber:u,blockTag:d,chainId:p,token:f,unit:w="ether"}=t;if(f)try{return h(e,{balanceAddress:n,chainId:p,symbolType:"string",tokenAddress:f})}catch(t){if(t instanceof i.uq){let t=await h(e,{balanceAddress:n,chainId:p,symbolType:"bytes32",tokenAddress:f}),i=(0,r.rR)((0,o.f)(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw t}let g=e.getClient({chainId:p}),m=(0,l.s)(g,s.s,"getBalance"),y=await m(u?{address:n,blockNumber:u}:{address:n,blockTag:d}),b=e.chains.find(e=>e.id===p)??g.chain;return{decimals:b.nativeCurrency.decimals,formatted:(0,a.b)(y,(0,c.W)(w)),symbol:b.nativeCurrency.symbol,value:y}}async function h(e,t){let{balanceAddress:n,chainId:i,symbolType:r,tokenAddress:o,unit:s}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:r}]}],address:o},[d,h,p]=await (0,u.J)(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[n],chainId:i},{...l,functionName:"decimals",chainId:i},{...l,functionName:"symbol",chainId:i}]}),f=(0,a.b)(d??"0",(0,c.W)(s??h));return{decimals:h,formatted:f,symbol:p,value:d}}},80363:function(e,t,n){n.d(t,{s:function(){return i}});function i(e,t={}){let n;try{n=e.getClient(t)}catch{}return n}},25011:function(e,t,n){n.d(t,{E:function(){return o}});var i=n(18640);let r=[];function o(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,i.v)(r,t)?r:(r=t,t)}},53119:function(e,t,n){n.d(t,{O:function(){return o}});var i=n(2416),r=n(57139);function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.O,"getEnsAddress")(o)}},62643:function(e,t,n){n.d(t,{r:function(){return o}});var i=n(57950),r=n(57139);function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.r,"getEnsAvatar")(o)}},41833:function(e,t,n){n.d(t,{w:function(){return o}});var i=n(6789),r=n(57139);function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.w,"getEnsName")(o)}},40706:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(479),r=n(57139),o=n(50911);async function a(e,t){let{account:n,chainId:a,...s}=t,l=n??(0,o.D)(e).address,c=e.getClient({chainId:a});return(0,r.s)(c,i.Z,"prepareTransactionRequest")({...s,...l?{account:l}:{}})}},3770:function(e,t,n){n.d(t,{J:function(){return l}});var i=n(17803),r=n(16111),o=n(57139);async function a(e,t){let{allowFailure:n=!0,chainId:i,contracts:a,...s}=t,l=e.getClient({chainId:i});return(0,o.s)(l,r.A,"multicall")({allowFailure:n,contracts:a,...s})}var s=n(36927);async function l(e,t){let{allowFailure:n=!0,blockNumber:r,blockTag:o,...l}=t,c=t.contracts;try{let t={};for(let[n,i]of c.entries()){let r=i.chainId??e.state.chainId;t[r]||(t[r]=[]),t[r]?.push({contract:i,index:n})}let i=(await Promise.all(Object.entries(t).map(([t,i])=>a(e,{...l,allowFailure:n,blockNumber:r,blockTag:o,chainId:Number.parseInt(t),contracts:i.map(({contract:e})=>e)})))).flat(),s=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return i.reduce((e,t,n)=>(e&&(e[s[n]]=t),e),[])}catch(a){if(a instanceof i.uq)throw a;let t=()=>c.map(t=>(0,s.L)(e,{...t,blockNumber:r,blockTag:o}));if(n)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}},6869:function(e,t,n){n.d(t,{T:function(){return l}});var i=n(9190),r=n(45505),o=n(57139),a=n(50911),s=n(91229);async function l(e,t){let n;let{account:l,chainId:c,connector:u,gas:d,...h}=t;n="object"==typeof l&&"local"===l.type?e.getClient({chainId:c}):await (0,s.e)(e,{account:l,chainId:c,connector:u});let{connector:p}=(0,a.D)(e),f=await (async()=>{if(!(!("data"in t)||!t.data||(u??p)?.supportsSimulation)&&null!==d)return void 0===d?(0,o.s)(n,i.Q,"estimateGas")({...h,account:l,chain:c?{id:c}:null}):d})(),w=(0,o.s)(n,r.T,"sendTransaction");return await w({...h,...l?{account:l}:{},gas:f,chain:c?{id:c}:null})}},45856:function(e,t,n){n.d(t,{l:function(){return a}});var i=n(68432),r=n(57139),o=n(91229);async function a(e,t){let n;let{account:a,connector:s,...l}=t;return n="object"==typeof a&&"local"===a.type?e.getClient():await (0,o.e)(e,{account:a,connector:s}),(0,r.s)(n,i.l,"signMessage")({...l,...a?{account:a}:{}})}},27991:function(e,t,n){n.d(t,{y:function(){return r}});var i=n(43691);async function r(e,t){let{connector:n}=t,r=e.state.connections.get(n.uid);if(!r)throw new i.aH;return await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,current:n.uid})),{accounts:r.accounts,chainId:r.chainId}}},35671:function(e,t,n){n.d(t,{f:function(){return i}});function i(e,t){let{onChange:n}=t;return e._internal.connectors.subscribe((e,t)=>{n(Object.values(e),t)})}},42798:function(e,t,n){n.d(t,{OP:function(){return l},if:function(){return o},kq:function(){return a}});var i=n(99681),r=n(18640);function o(e,t){return(0,r.v)(e,t)?e:(0,i.Q$)(e,t)}function a(e){return JSON.stringify(e,(e,t)=>!function(e){if(!s(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(s(n)&&n.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}))}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function l(e){let{_defaulted:t,behavior:n,gcTime:i,initialData:r,initialDataUpdatedAt:o,maxPages:a,meta:s,networkMode:l,queryFn:c,queryHash:u,queryKey:d,queryKeyHashFn:h,retry:p,retryDelay:f,structuralSharing:w,getPreviousPageParam:g,getNextPageParam:m,initialPageParam:y,_optimisticResults:b,enabled:v,notifyOnChangeProps:C,placeholderData:x,refetchInterval:A,refetchIntervalInBackground:k,refetchOnMount:T,refetchOnReconnect:S,refetchOnWindowFocus:E,retryOnMount:I,select:R,staleTime:O,suspense:N,throwOnError:P,config:D,connector:B,query:$,...U}=e;return U}},52277:function(e,t,n){n.d(t,{W:function(){return r}});var i=n(87852);function r(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(i.Bd[e])}},41406:function(e,t,n){let i,r,o,a,s,l,c,u,d,h,p,f,w,g,m,y,b,v;n.d(t,{OY:function(){return r_},k_:function(){return rY}});let C={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",AUTH_CONNECTOR_ID:"w3mAuth",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",VERSION:"5.1.9"},x={ConnectorExplorerIds:{[C.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[C.COINBASE_SDK_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[C.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[C.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[C.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[C.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[C.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[C.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[C.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[C.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[C.INJECTED_CONNECTOR_ID]:"Browser Wallet",[C.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[C.COINBASE_CONNECTOR_ID]:"Coinbase",[C.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[C.LEDGER_CONNECTOR_ID]:"Ledger",[C.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[C.INJECTED_CONNECTOR_ID]:"INJECTED",[C.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[C.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[C.AUTH_CONNECTOR_ID]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},A={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,n])=>{t[`${C.EIP155}:${e}`]=n}),t}};(k=T||(T={})).Google="google",k.Github="github",k.Apple="apple",k.Facebook="facebook",k.X="x",k.Discord="discord",k.Farcaster="farcaster";var k,T,S=n(68001),E=n(93690),I=n(48387);let R=!1;class O{constructor(e){this.initPromise=void 0,this.setIsConnected=(e,t)=>{S.AccountController.setIsConnected(e,t)},this.getIsConnectedState=()=>S.AccountController.state.isConnected,this.setAllAccounts=(e,t)=>{S.AccountController.setAllAccounts(e,t),S.OptionsController.setHasMultipleAddresses(e?.length>1)},this.addAddressLabel=(e,t,n)=>{S.AccountController.addAddressLabel(e,t,n)},this.removeAddressLabel=(e,t)=>{S.AccountController.removeAddressLabel(e,t)},this.getCaipAddress=()=>S.AccountController.state.caipAddress,this.setCaipAddress=(e,t)=>{S.AccountController.setCaipAddress(e,t)},this.setBalance=(e,t,n)=>{S.AccountController.setBalance(e,t,n)},this.setProfileName=(e,t)=>{S.AccountController.setProfileName(e,t)},this.setProfileImage=(e,t)=>{S.AccountController.setProfileImage(e,t)},this.resetAccount=e=>{S.AccountController.resetAccount(e)},this.setCaipNetwork=e=>{S.fB.setCaipNetwork(e)},this.getCaipNetwork=()=>S.fB.state.caipNetwork,this.setRequestedCaipNetworks=(e,t)=>{S.fB.setRequestedCaipNetworks(e,t)},this.getApprovedCaipNetworkIds=()=>S.fB.getApprovedCaipNetworkIds(),this.setApprovedCaipNetworksData=e=>S.fB.setApprovedCaipNetworksData(e),this.resetNetwork=()=>{S.fB.resetNetwork()},this.setConnectors=e=>{S.ConnectorController.setConnectors(e)},this.addConnector=e=>{S.ConnectorController.addConnector(e)},this.getConnectors=()=>S.ConnectorController.getConnectors(),this.resetWcConnection=()=>{S.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>S.Lr.fetchIdentity(e),this.setAddressExplorerUrl=(e,t)=>{S.AccountController.setAddressExplorerUrl(e,t)},this.setSmartAccountDeployed=(e,t)=>{S.AccountController.setSmartAccountDeployed(e,t)},this.setConnectedWalletInfo=(e,t)=>{S.AccountController.setConnectedWalletInfo(e,t)},this.setSmartAccountEnabledNetworks=(e,t)=>{S.fB.setSmartAccountEnabledNetworks(e,t)},this.setPreferredAccountType=(e,t)=>{S.AccountController.setPreferredAccountType(e,t)},this.getWalletConnectName=e=>S.a.getNamesForAddress(e),this.resolveWalletConnectName=async e=>{let t=e.replace(I.bq.WC_NAME_SUFFIX,""),n=await S.a.resolveName(t),i=Object.values(n?.addresses)||[];return i[0]?.address||!1},this.setEIP6963Enabled=e=>{S.OptionsController.setEIP6963Enabled(e)},this.setClientId=e=>{S.Lr.setClientId(e)},this.getConnectorImage=e=>S.fz.getConnectorImage(e),this.handleUnsafeRPCRequest=()=>{this.isOpen()?this.isTransactionStackEmpty()||(this.isTransactionShouldReplaceView()?this.replace("ApproveTransaction"):this.redirect("ApproveTransaction")):this.open({view:"ApproveTransaction"})},this.adapter=e.adapters?.[0],this.initControllers(e),this.initOrContinue()}static getInstance(){return this.instance}async open(e){await this.initOrContinue(),S.IN.open(e)}async close(){await this.initOrContinue(),S.IN.close()}setLoading(e){S.IN.setLoading(e)}getError(){return this.adapter?.getError?.()}getChainId(){return this.adapter?.getChainId?.()}getAddress(){return this.adapter?.getAddress?.()}switchNetwork(e){return this.adapter?.switchNetwork?.(e)}getIsConnected(){return this.adapter?.getIsConnected?.()}getWalletProvider(){return this.adapter?.getWalletProvider?.()}getWalletProviderType(){return this.adapter?.getWalletProviderType?.()}subscribeProvider(e){return this.adapter?.subscribeProvider?.(e)}getThemeMode(){return S.ThemeController.state.themeMode}getThemeVariables(){return S.ThemeController.state.themeVariables}setThemeMode(e){S.ThemeController.setThemeMode(e),(0,E.setColorTheme)(S.ThemeController.state.themeMode)}setThemeVariables(e){S.ThemeController.setThemeVariables(e),(0,E.setThemeVariables)(S.ThemeController.state.themeVariables)}subscribeTheme(e){return S.ThemeController.subscribe(e)}getWalletInfo(){return S.AccountController.state.connectedWalletInfo}subscribeWalletInfo(e){return S.AccountController.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){S.AccountController.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){S.fB.subscribeKey("caipNetwork",e)}getState(){return S.Ie.state}subscribeState(e){return S.Ie.subscribe(e)}showErrorMessage(e){S.SnackController.showError(e)}showSuccessMessage(e){S.SnackController.showSuccess(e)}getEvent(){return{...S.Xs.state}}subscribeEvents(e){return S.Xs.subscribe(e)}replace(e){S.RouterController.replace(e)}redirect(e){S.RouterController.push(e)}popTransactionStack(e){S.RouterController.popTransactionStack(e)}isOpen(){return S.IN.state.open}isTransactionStackEmpty(){return 0===S.RouterController.state.transactionStack.length}isTransactionShouldReplaceView(){return S.RouterController.state.transactionStack[S.RouterController.state.transactionStack.length-1]?.replace}async initControllers(e){if(S.OptionsController.setProjectId(e.projectId),S.OptionsController.setSdkVersion(e.sdkVersion),S.RY.initialize(e.adapters||[]),e.adapters?.forEach(t=>{t.construct?.(this,e),S.fB.setAllowUnsupportedChain(e.allowUnsupportedChain,t.chain),S.fB.setDefaultCaipNetwork(e.defaultChain)}),S.OptionsController.setAllWallets(e.allWallets),S.OptionsController.setIncludeWalletIds(e.includeWalletIds),S.OptionsController.setExcludeWalletIds(e.excludeWalletIds),S.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),S.OptionsController.setTokens(e.tokens),S.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),S.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),S.OptionsController.setCustomWallets(e.customWallets),S.OptionsController.setEnableAnalytics(e.enableAnalytics),S.OptionsController.setOnrampEnabled(!1!==e.enableOnramp),S.OptionsController.setEnableSwaps(!1!==e.enableSwaps),e.metadata&&S.OptionsController.setMetadata(e.metadata),e.themeMode&&S.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&S.ThemeController.setThemeVariables(e.themeVariables),e.disableAppend&&S.OptionsController.setDisableAppend(!!e.disableAppend),e.adapters?.find(e=>e.chain===I.bq.CHAIN.EVM)&&e.siweConfig){let{SIWEController:t}=await Promise.resolve().then(n.bind(n,65852));t.setSIWEClient(e.siweConfig)}}async initOrContinue(){return!this.initPromise&&!R&&S.j1.isClient()&&(R=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(n.bind(n,93690)),n.e(625).then(n.bind(n,44625))]);let t=document.createElement("w3m-modal");S.OptionsController.state.disableAppend||document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}var N=n(73089),P=n(47964),D=n(83395),B=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let $=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=S.AccountController.state.address,this.balanceVal=S.AccountController.state.balance,this.balanceSymbol=S.AccountController.state.balanceSymbol,this.profileName=S.AccountController.state.profileName,this.profileImage=S.AccountController.state.profileImage,this.network=S.fB.state.caipNetwork,this.networkImage=this.network?S.fz.getNetworkImage(this.network):void 0,this.isUnsupportedChain=S.fB.state.isUnsupportedChain,this.unsubscribe.push(S.WM.subscribeNetworkImages(()=>{this.networkImage=this.network?.imageId?S.fz.getNetworkImage(this.network):void 0}),S.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),S.fB.subscribeKey("caipNetwork",e=>{this.network=e,this.networkImage=e?.imageId?S.fz.getNetworkImage(e):void 0}),S.fB.subscribeKey("isUnsupportedChain",e=>{this.isUnsupportedChain=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e="show"===this.balance;return(0,N.dy)`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${(0,D.o)(this.address)}
        profileName=${(0,D.o)(this.profileName)}
        networkSrc=${(0,D.o)(this.networkImage)}
        avatarSrc=${(0,D.o)(this.profileImage)}
        balance=${e?S.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?S.IN.open({view:"UnsupportedChain"}):S.IN.open()}};B([(0,P.Cb)({type:Boolean})],$.prototype,"disabled",void 0),B([(0,P.Cb)()],$.prototype,"balance",void 0),B([(0,P.Cb)()],$.prototype,"charsStart",void 0),B([(0,P.Cb)()],$.prototype,"charsEnd",void 0),B([(0,P.SB)()],$.prototype,"address",void 0),B([(0,P.SB)()],$.prototype,"balanceVal",void 0),B([(0,P.SB)()],$.prototype,"balanceSymbol",void 0),B([(0,P.SB)()],$.prototype,"profileName",void 0),B([(0,P.SB)()],$.prototype,"profileImage",void 0),B([(0,P.SB)()],$.prototype,"network",void 0),B([(0,P.SB)()],$.prototype,"networkImage",void 0),B([(0,P.SB)()],$.prototype,"isUnsupportedChain",void 0),$=B([(0,E.customElement)("w3m-account-button")],$);var U=(0,N.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,j=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let M=class extends N.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=S.AccountController.state.isConnected,this.isLoading=S.IN.state.loading}firstUpdated(){this.unsubscribe.push(S.AccountController.subscribe(e=>{this.isAccount=e.isConnected}),S.IN.subscribeKey("loading",e=>{this.isLoading=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount&&!this.isLoading?(0,N.dy)`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,D.o)(this.balance)}
            .charsStart=${(0,D.o)(this.charsStart)}
            .charsEnd=${(0,D.o)(this.charsEnd)}
          >
          </w3m-account-button>
        `:(0,N.dy)`
          <w3m-connect-button
            size=${(0,D.o)(this.size)}
            label=${(0,D.o)(this.label)}
            loadingLabel=${(0,D.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};M.styles=U,j([(0,P.Cb)({type:Boolean})],M.prototype,"disabled",void 0),j([(0,P.Cb)()],M.prototype,"balance",void 0),j([(0,P.Cb)()],M.prototype,"size",void 0),j([(0,P.Cb)()],M.prototype,"label",void 0),j([(0,P.Cb)()],M.prototype,"loadingLabel",void 0),j([(0,P.Cb)()],M.prototype,"charsStart",void 0),j([(0,P.Cb)()],M.prototype,"charsEnd",void 0),j([(0,P.SB)()],M.prototype,"isAccount",void 0),j([(0,P.SB)()],M.prototype,"isLoading",void 0),M=j([(0,E.customElement)("w3m-button")],M);var L=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let q=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=S.IN.state.open,this.loading=S.IN.state.loading,this.unsubscribe.push(S.IN.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.loading||this.open;return(0,N.dy)`
      <wui-connect-button
        size=${(0,D.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?S.IN.close():this.loading||S.IN.open()}};L([(0,P.Cb)()],q.prototype,"size",void 0),L([(0,P.Cb)()],q.prototype,"label",void 0),L([(0,P.Cb)()],q.prototype,"loadingLabel",void 0),L([(0,P.SB)()],q.prototype,"open",void 0),L([(0,P.SB)()],q.prototype,"loading",void 0),q=L([(0,E.customElement)("w3m-connect-button")],q);var W=(0,N.iv)`
  :host {
    display: block;
    width: max-content;
  }
`,Q=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let F=class extends N.oi{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.network=S.fB.state.caipNetwork,this.networkImage=this.network?S.fz.getNetworkImage(this.network):void 0,this.connected=S.AccountController.state.isConnected,this.loading=S.IN.state.loading,this.isUnsupportedChain=S.fB.state.isUnsupportedChain}firstUpdated(){this.unsubscribe.push(S.WM.subscribeNetworkImages(()=>{this.networkImage=this.network?.imageId?S.fz.getNetworkImage(this.network):void 0}),S.fB.subscribeKey("caipNetwork",e=>{this.network=e,this.networkImage=e?.imageId?S.fz.getNetworkImage(e):void 0}),S.AccountController.subscribeKey("isConnected",e=>this.connected=e),S.IN.subscribeKey("loading",e=>this.loading=e),S.fB.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-network-button
        data-testid="wui-network-button"
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${(0,D.o)(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.label?this.label:this.isUnsupportedChain?"Switch Network":this.network?this.network.name:this.connected?"Unknown Network":"Select Network"}onClick(){this.loading||(S.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),S.IN.open({view:"Networks"}))}};F.styles=W,Q([(0,P.Cb)({type:Boolean})],F.prototype,"disabled",void 0),Q([(0,P.Cb)({type:String})],F.prototype,"label",void 0),Q([(0,P.SB)()],F.prototype,"network",void 0),Q([(0,P.SB)()],F.prototype,"networkImage",void 0),Q([(0,P.SB)()],F.prototype,"connected",void 0),Q([(0,P.SB)()],F.prototype,"loading",void 0),Q([(0,P.SB)()],F.prototype,"isUnsupportedChain",void 0),F=Q([(0,E.customElement)("w3m-network-button")],F);var K=(0,N.iv)`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;let z={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:n(47973).env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};var H=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let V=class extends N.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=S.RouterController.state.view,this.viewDirection="",this.unsubscribe.push(S.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},z.ANIMATION_DURATIONS.ModalHeight)}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return(0,N.dy)`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return(0,N.dy)`<w3m-account-view></w3m-account-view>`;case"AllWallets":return(0,N.dy)`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return(0,N.dy)`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return(0,N.dy)`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return(0,N.dy)`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return(0,N.dy)`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return(0,N.dy)`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return(0,N.dy)`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return(0,N.dy)`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return(0,N.dy)`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return(0,N.dy)`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return(0,N.dy)`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return(0,N.dy)`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return(0,N.dy)`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return(0,N.dy)`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return(0,N.dy)`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return(0,N.dy)`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return(0,N.dy)`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return(0,N.dy)`<w3m-profile-view></w3m-profile-view>`;case"SelectAddresses":return(0,N.dy)`<w3m-select-addresses-view></w3m-select-addresses-view>`;case"SwitchAddress":return(0,N.dy)`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return(0,N.dy)`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return(0,N.dy)`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return(0,N.dy)`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return(0,N.dy)`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return(0,N.dy)`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return(0,N.dy)`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return(0,N.dy)`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return(0,N.dy)`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return(0,N.dy)`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return(0,N.dy)`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return(0,N.dy)`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return(0,N.dy)`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return(0,N.dy)`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return(0,N.dy)`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return(0,N.dy)`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return(0,N.dy)`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return(0,N.dy)`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return(0,N.dy)`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return(0,N.dy)`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return(0,N.dy)`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return(0,N.dy)`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return(0,N.dy)`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return(0,N.dy)`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return(0,N.dy)`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return(0,N.dy)`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return(0,N.dy)`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return(0,N.dy)`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`}}onViewChange(e){S.fw.hide();let t=z.VIEW_DIRECTION.Next,{history:n}=S.RouterController.state;n.length<this.prevHistoryLength&&(t=z.VIEW_DIRECTION.Prev),this.prevHistoryLength=n.length,this.viewDirection=t,setTimeout(()=>{this.view=e},z.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};V.styles=K,H([(0,P.SB)()],V.prototype,"view",void 0),H([(0,P.SB)()],V.prototype,"viewDirection",void 0),V=H([(0,E.customElement)("w3m-router")],V);var Y=(0,N.iv)`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,_=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let G={USD:"$",EUR:"€",GBP:"\xa3"},X=[100,250,500,1e3],J=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=S.AccountController.state.isConnected,this.loading=S.IN.state.loading,this.paymentCurrency=S.ph.state.paymentCurrency,this.paymentAmount=S.ph.state.paymentAmount,this.purchaseAmount=S.ph.state.purchaseAmount,this.quoteLoading=S.ph.state.quotesLoading,this.unsubscribe.push(S.AccountController.subscribeKey("isConnected",e=>{this.connected=e}),S.IN.subscribeKey("loading",e=>{this.loading=e}),S.ph.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${X.map(e=>(0,N.dy)`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${G[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?(0,N.dy)`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:(0,N.dy)`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||S.IN.open({view:"OnRampProviders"})}openModal(){S.IN.open({view:"Connect"})}async onPaymentAmountChange(e){S.ph.setPaymentAmount(Number(e.detail)),await S.ph.getQuote()}async selectPresetAmount(e){S.ph.setPaymentAmount(e),await S.ph.getQuote()}};J.styles=Y,_([(0,P.Cb)({type:Boolean})],J.prototype,"disabled",void 0),_([(0,P.SB)()],J.prototype,"connected",void 0),_([(0,P.SB)()],J.prototype,"loading",void 0),_([(0,P.SB)()],J.prototype,"paymentCurrency",void 0),_([(0,P.SB)()],J.prototype,"paymentAmount",void 0),_([(0,P.SB)()],J.prototype,"purchaseAmount",void 0),_([(0,P.SB)()],J.prototype,"quoteLoading",void 0),J=_([(0,E.customElement)("w3m-onramp-widget")],J);var Z=n(39468),ee=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let et=class extends N.oi{constructor(){super(),this.usubscribe=[],this.networkImages=S.WM.state.networkImages,this.address=S.AccountController.state.address,this.profileImage=S.AccountController.state.profileImage,this.profileName=S.AccountController.state.profileName,this.network=S.fB.state.caipNetwork,this.preferredAccountType=S.AccountController.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(S.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):S.IN.close()}),S.AccountController.subscribeKey("preferredAccountType",e=>this.preferredAccountType=e),S.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.imageId??""],t=this.profileName?.split(".")[0];return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,D.o)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${t?E.UiHelperUtil.getTruncateString({string:t,charsStart:20,charsEnd:0,truncate:"end"}):E.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,D.o)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=S.MO.getConnectedConnector();return!S.ConnectorController.getAuthConnector()||"AUTH"!==e||this.profileName?null:(0,N.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=S.MO.getConnectedConnector(),t=S.ConnectorController.getAuthConnector(),{origin:n}=location;return!t||"AUTH"!==e||n.includes(S.bq.SECURE_SITE)?null:(0,N.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=S.fB.getRequestedCaipNetworks(),t=!!e&&e.length>1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onCopyAddress(){try{this.profileName?(S.j1.copyToClopboard(this.profileName),S.SnackController.showSuccess("Name copied")):this.address&&(S.j1.copyToClopboard(this.address),S.SnackController.showSuccess("Address copied"))}catch{S.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=S.fB.checkIfSmartAccountEnabled(),t=S.MO.getConnectedConnector();return S.ConnectorController.getAuthConnector()&&"AUTH"===t&&e?(this.switched||(this.text=this.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),(0,N.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){S.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){let e=S.fB.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&e?Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT:Z.y_.ACCOUNT_TYPES.EOA;S.ConnectorController.getAuthConnector()&&(this.loading=!0,await S.ConnectionController.setPreferredAccountType(t),this.text=t===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,S.Si.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&S.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await S.ConnectionController.disconnect(),S.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),S.IN.close()}catch{S.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),S.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){S.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),S.RouterController.push("UpgradeEmailWallet")}};ee([(0,P.SB)()],et.prototype,"address",void 0),ee([(0,P.SB)()],et.prototype,"profileImage",void 0),ee([(0,P.SB)()],et.prototype,"profileName",void 0),ee([(0,P.SB)()],et.prototype,"network",void 0),ee([(0,P.SB)()],et.prototype,"preferredAccountType",void 0),ee([(0,P.SB)()],et.prototype,"disconnecting",void 0),ee([(0,P.SB)()],et.prototype,"loading",void 0),ee([(0,P.SB)()],et.prototype,"switched",void 0),ee([(0,P.SB)()],et.prototype,"text",void 0),et=ee([(0,E.customElement)("w3m-account-settings-view")],et);let en=class extends N.oi{render(){let e=S.MO.getConnectedConnector(),t=S.ConnectorController.getAuthConnector();return(0,N.dy)`
      ${t?.walletFeatures&&"AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return(0,N.dy)`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return(0,N.dy)`<w3m-account-default-widget></w3m-account-default-widget>`}};en=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-account-view")],en);var ei=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let er=class extends N.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=S.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return(0,N.dy)`
      <wui-flex .padding=${["0","s","s","s"]} gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?(0,N.dy)`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:(0,N.dy)`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return S.j1.isMobile()?(0,N.dy)`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){S.RouterController.push("ConnectingWalletConnect")}};ei([(0,P.SB)()],er.prototype,"search",void 0),er=ei([(0,E.customElement)("w3m-all-wallets-view")],er);var eo=(0,N.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,ea=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let es=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=S.ph.state.selectedProvider,this.uri=S.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(S.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return(0,N.dy)`
      <wui-flex
        data-error=${(0,D.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,D.o)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name&&(this.startTime=Date.now(),this.initializeCoinbaseTransactions())}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{let e=S.AccountController.state.address,t=S.OptionsController.state.projectId;if(!e)throw Error("No address found");(await S.Lr.fetchTransactions({account:e,onramp:"coinbase",projectId:t})).data.filter(e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length?(clearInterval(this.intervalId),S.RouterController.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){S.SnackController.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,S.j1.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?(0,N.dy)`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=S.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,N.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){S.SnackController.showError("No link found"),S.RouterController.goBack();return}try{S.j1.copyToClopboard(this.selectedOnRampProvider.url),S.SnackController.showSuccess("Link copied")}catch{S.SnackController.showError("Failed to copy")}}};es.styles=eo,ea([(0,P.SB)()],es.prototype,"intervalId",void 0),ea([(0,P.SB)()],es.prototype,"selectedOnRampProvider",void 0),ea([(0,P.SB)()],es.prototype,"uri",void 0),ea([(0,P.SB)()],es.prototype,"ready",void 0),ea([(0,P.SB)()],es.prototype,"showRetry",void 0),ea([(0,P.SB)()],es.prototype,"buffering",void 0),ea([(0,P.SB)()],es.prototype,"error",void 0),ea([(0,P.SB)()],es.prototype,"startTime",void 0),ea([(0,P.Cb)({type:Boolean})],es.prototype,"isMobile",void 0),ea([(0,P.Cb)()],es.prototype,"onRetry",void 0),es=ea([(0,E.customElement)("w3m-buy-in-progress-view")],es);var el=(0,N.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }
`,ec=n(80404),eu=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ed=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["3xs","s","s","s"]}>
        <w3m-email-login-widget></w3m-email-login-widget>
        <w3m-social-login-widget></w3m-social-login-widget>
        ${this.walletListTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletListTemplate(){let e=this.connectors.find(e=>"AUTH"===e.type);return e?.socials?e?.showWallets?(0,N.dy)`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:(0,N.dy)`<wui-list-button
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:(0,N.dy)`<w3m-wallet-login-list></w3m-wallet-login-list>`}onContinueWalletClick(){S.RouterController.push("ConnectWallets")}};ed.styles=el,eu([(0,ec.S)()],ed.prototype,"connectors",void 0),ed=eu([(0,E.customElement)("w3m-connect-view")],ed);var eh=(0,N.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,ep=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};class ef extends N.oi{constructor(){super(),this.wallet=S.RouterController.state.data?.wallet,this.connector=S.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=S.fz.getWalletImage(this.wallet)??S.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=S.ConnectionController.state.wcUri,this.error=S.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(S.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),S.ConnectionController.subscribeKey("wcError",e=>this.error=e),S.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),(0,N.dy)`
      <wui-flex
        data-error=${(0,D.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,D.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          size="md"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?(0,N.dy)`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(S.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=S.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,N.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(S.j1.copyToClopboard(this.uri),S.SnackController.showSuccess("Link copied"))}catch{S.SnackController.showError("Failed to copy")}}}ef.styles=eh,ep([(0,P.SB)()],ef.prototype,"uri",void 0),ep([(0,P.SB)()],ef.prototype,"error",void 0),ep([(0,P.SB)()],ef.prototype,"ready",void 0),ep([(0,P.SB)()],ef.prototype,"showRetry",void 0),ep([(0,P.SB)()],ef.prototype,"buffering",void 0),ep([(0,P.Cb)({type:Boolean})],ef.prototype,"isMobile",void 0),ep([(0,P.Cb)()],ef.prototype,"onRetry",void 0);let ew=class extends ef{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id!==C.COINBASE_SDK_CONNECTOR_ID||!this.error)&&(await S.ConnectionController.connectExternal(this.connector,this.connector.chain),S.OptionsController.state.isSiweEnabled?S.RouterController.push("ConnectingSiwe"):S.IN.close(),S.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){S.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ew=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-external-view")],ew);var eg=(0,N.iv)`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,em=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ey=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.activeConnector=S.RY.state.activeConnector,this.unsubscribe.push(S.RY.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,D.o)(S.fz.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.providers?.map(e=>N.dy`
        <wui-list-wallet
          imageSrc=${D.o(S.fz.getChainImage(e.chain))}
          name=${e.name}
          @click=${()=>this.onConnector(e)}
        ></wui-list-wallet>
      `)}onConnector(e){S.RY.setActiveChain(e.chain);let t=this.activeConnector?.providers?.find(t=>t.chain===e.chain);if(!t){S.SnackController.showError("Failed to find connector");return}"WALLET_CONNECT"===t.type?S.j1.isMobile()?S.RouterController.push("AllWallets"):S.RouterController.push("ConnectingWalletConnect"):S.RouterController.push("ConnectingExternal",{connector:t})}};ey.styles=eg,em([(0,P.SB)()],ey.prototype,"activeConnector",void 0),ey=em([(0,E.customElement)("w3m-connecting-multi-chain-view")],ey);var eb=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ev=class extends N.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=S.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),S.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),(0,N.dy)`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):(0,N.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=S.ConnectionController.state;if(e||S.j1.isPairingExpired(t)){if(await S.ConnectionController.connectWalletConnect(),this.finalizeConnection(),"AUTH"===S.MO.getConnectedConnector()&&S.OptionsController.state.hasMultipleAddresses)S.RouterController.push("SelectAddresses");else if(S.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await Promise.resolve().then(n.bind(n,65852));"success"===e.state.status?S.IN.close():S.RouterController.push("ConnectingSiwe")}else S.IN.close()}}catch(e){S.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),S.ConnectionController.setWcError(!0),S.j1.isAllowedRetry(this.lastRetry)&&(S.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=S.ConnectionController.state;e&&S.MO.setWalletConnectDeepLink(e),t&&S.MO.setWeb3ModalRecent(t),S.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:n,injected:i,rdns:r}=this.wallet,o=i?.map(({injected_id:e})=>e).filter(Boolean),a=r?[r]:o??[],s=!S.OptionsController.state.isUniversalProvider&&a.length,l=S.ConnectionController.checkInstalled(a),c=s&&l,u=t&&!S.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(S.j1.isMobile()?"mobile":"qrcode"),n&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return(0,N.dy)`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return(0,N.dy)`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return(0,N.dy)`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return(0,N.dy)`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return(0,N.dy)`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return(0,N.dy)`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?(0,N.dy)`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eb([(0,P.SB)()],ev.prototype,"platform",void 0),eb([(0,P.SB)()],ev.prototype,"platforms",void 0),ev=eb([(0,E.customElement)("w3m-connecting-wc-view")],ev);var eC=(0,N.iv)`
  .continue-button-container {
    width: 100%;
  }
`,ex=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eA=class extends N.oi{constructor(){super(...arguments),this.loading=!1}render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{S.j1.openHref(I.UE.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,N.dy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){S.RouterController.push("RegisterAccountName"),S.Xs.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};eA.styles=eC,ex([(0,P.SB)()],eA.prototype,"loading",void 0),eA=ex([(0,E.customElement)("w3m-choose-account-name-view")],eA);let ek=class extends N.oi{constructor(){super(...arguments),this.wallet=S.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return(0,N.dy)`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?(0,N.dy)`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?(0,N.dy)`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?(0,N.dy)`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?(0,N.dy)`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&S.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&S.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&S.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&S.j1.openHref(this.wallet.homepage,"_blank")}};ek=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-downloads-view")],ek);let eT=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{S.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=S.ApiController.state,{customWallets:n}=S.OptionsController.state;return[...t,...n??[],...e].slice(0,4).map(e=>(0,N.dy)`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,D.o)(S.fz.getWalletImage(e))}
          @click=${()=>{S.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eT=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-get-wallet-view")],eT);var eS=(0,N.iv)`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`,eE=n(16110),eI=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eR=class extends N.oi{constructor(){super(),this.formRef=(0,eE.V)(),this.usubscribe=[],this.name="",this.error="",this.loading=S.a.state.loading,this.suggestions=S.a.state.suggestions,this.registered=!1,this.profileName=S.AccountController.state.profileName,this.onDebouncedNameInputChange=S.j1.debounce(e=>{S.a.validateName(e)?(this.error="",this.name=e,S.a.getSuggestions(e),S.a.isNameRegistered(e).then(e=>{this.registered=e})):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(S.a.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),S.AccountController.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,eE.i)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?(0,N.dy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?(0,N.dy)`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?(0,N.dy)`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:(0,N.dy)`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;let e=this.registered?this.suggestions.filter(e=>e.name!==this.name):[];return(0,N.dy)`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map(e=>this.availableNameTemplate(e.name))}
    </wui-flex>`}availableNameTemplate(e){return(0,N.dy)` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&S.a.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;S.Xs.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}}),await S.a.registerName(this.name),S.Xs.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name}})}catch(e){S.SnackController.showError(e.message),S.Xs.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:this.name,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};eR.styles=eS,eI([(0,P.Cb)()],eR.prototype,"errorMessage",void 0),eI([(0,P.SB)()],eR.prototype,"name",void 0),eI([(0,P.SB)()],eR.prototype,"error",void 0),eI([(0,P.SB)()],eR.prototype,"loading",void 0),eI([(0,P.SB)()],eR.prototype,"suggestions",void 0),eI([(0,P.SB)()],eR.prototype,"registered",void 0),eI([(0,P.SB)()],eR.prototype,"profileName",void 0),eR=eI([(0,E.customElement)("w3m-register-account-name-view")],eR);var eO=(0,N.iv)`
  .continue-button-container {
    width: 100%;
  }
`;let eN=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{S.j1.openHref(I.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,N.dy)`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){S.RouterController.replace("Account")}};eN.styles=eO,eN=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-register-account-name-success-view")],eN);var eP=(0,N.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;let eD={onNetworkChange:async()=>{if(S.OptionsController.state.isSiweEnabled){let{SIWEController:e}=await Promise.resolve().then(n.bind(n,65852));e.state._client?.options?.signOutOnNetworkChange?await e.signOut():S._4.navigateAfterNetworkSwitch()}else S._4.navigateAfterNetworkSwitch()}};var eB=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let e$=class extends N.oi{constructor(){super(),this.network=S.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return(0,N.dy)`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,D.o)(S.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:(0,N.dy)`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=S.MO.getConnectedConnector();return S.ConnectorController.getAuthConnector()&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=S.MO.getConnectedConnector();return S.ConnectorController.getAuthConnector()&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await S.fB.switchActiveNetwork(this.network),await eD.onNetworkChange())}catch{this.error=!0}}};e$.styles=eP,eB([(0,P.SB)()],e$.prototype,"showRetry",void 0),eB([(0,P.SB)()],e$.prototype,"error",void 0),e$=eB([(0,E.customElement)("w3m-network-switch-view")],e$);var eU=(0,N.iv)`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,ej=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eM=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.network=S.fB.state.caipNetwork,this.requestedCaipNetworks=S.fB.getRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=S.j1.debounce(e=>{this.search=e},100),this.unsubscribe.push(S.fB.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return(0,N.dy)`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){S.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),S.RouterController.push("WhatIsANetwork")}networksTemplate(){let e=S.fB.getRequestedCaipNetworks(),t=S.fB.state.approvedCaipNetworkIds,n=S.fB.state.supportsAllNetworks,i=S.j1.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=i?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=i,this.filteredNetworks?.map(e=>N.dy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${D.o(S.fz.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${!n&&!t?.includes(e.id)&&e.chain===S.RY.state.activeChain}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}async onSwitchNetwork(e){let t=S.AccountController.state.isConnected,n=S.AccountController.getChainIsConnected(e.chain),i=S.fB.state.approvedCaipNetworkIds,r=S.fB.state.supportsAllNetworks,o=S.fB.state.caipNetwork,a=S.RouterController.state.data;if(t&&o?.id!==e.id){if(!n){S.RouterController.push("SwitchActiveChain",{switchToChain:e.chain,navigateTo:"Connect",navigateWithReplace:!0});return}i?.includes(e.id)?(await S.fB.switchActiveNetwork(e),await eD.onNetworkChange()):r&&S.RouterController.push("SwitchNetwork",{...a,network:e})}else t||(S.fB.setActiveCaipNetwork(e),n||S.RouterController.push("Connect"))}};eM.styles=eU,ej([(0,P.SB)()],eM.prototype,"network",void 0),ej([(0,P.SB)()],eM.prototype,"requestedCaipNetworks",void 0),ej([(0,P.SB)()],eM.prototype,"filteredNetworks",void 0),ej([(0,P.SB)()],eM.prototype,"search",void 0),eM=ej([(0,E.customElement)("w3m-networks-view")],eM);var eL=(0,N.iv)`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`,eq=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eW=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=S.ph.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=S.sl.state.coinbaseTransactions,this.tokenImages=S.WM.state.tokenImages,this.unsubscribe.push(S.ph.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),S.WM.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},S.sl.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),S.sl.clearCursor(),this.fetchTransactions()}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map(e=>{let t=I.Em.formatDate(e?.metadata?.minedAt),n=e.transfers[0],i=n?.fungible_info;if(!i)return null;let r=i?.icon?.url||this.tokenImages?.[i.symbol||""];return N.dy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${D.o(i.symbol)}
          purchaseValue=${n.quantity.numeric}
          date=${t}
          icon=${D.o(r)}
          symbol=${D.o(i.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(e=>{let t=parseInt(e,10);return Array(12).fill(null).map((e,t)=>t).reverse().map(e=>{let n=E.TransactionUtil.getTransactionGroupTitle(t,e),i=this.coinbaseTransactions[t]?.[e];return i?(0,N.dy)`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(i)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){let e=S.AccountController.state.address,t=S.OptionsController.state.projectId;if(!e)throw Error("No address found");if(!t)throw Error("No projectId found");this.loading=!0,await S.sl.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){let e=new Date;if(0===(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter(e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status).length){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{let e=S.AccountController.state.address;await S.sl.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(7).fill((0,N.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};eW.styles=eL,eq([(0,P.SB)()],eW.prototype,"selectedOnRampProvider",void 0),eq([(0,P.SB)()],eW.prototype,"loading",void 0),eq([(0,P.SB)()],eW.prototype,"coinbaseTransactions",void 0),eq([(0,P.SB)()],eW.prototype,"tokenImages",void 0),eW=eq([(0,E.customElement)("w3m-onramp-activity-view")],eW);var eQ=(0,N.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eF=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eK=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=S.ph.state.paymentCurrency,this.currencies=S.ph.state.paymentCurrencies,this.currencyImages=S.WM.state.currencyImages,this.unsubscribe.push(S.ph.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),S.WM.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>(0,N.dy)`
        <wui-list-item
          imageSrc=${(0,D.o)(this.currencyImages?.[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(S.ph.setPaymentCurrency(e),S.IN.close())}};eK.styles=eQ,eF([(0,P.SB)()],eK.prototype,"selectedCurrency",void 0),eF([(0,P.SB)()],eK.prototype,"currencies",void 0),eF([(0,P.SB)()],eK.prototype,"currencyImages",void 0),eK=eF([(0,E.customElement)("w3m-onramp-fiat-select-view")],eK);var ez=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eH=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.providers=S.ph.state.providers,this.unsubscribe.push(S.ph.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){Promise.all(this.providers.map(async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url))).then(e=>{this.providers=this.providers.map((t,n)=>({...t,url:e[n]||""}))})}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(S.RY.state.activeChain??"evm")).map(e=>(0,N.dy)`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){S.ph.setSelectedProvider(e),S.RouterController.push("BuyInProgress"),S.j1.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),S.Xs.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){let e=S.AccountController.state.address,t=S.fB.state.caipNetwork;if(!e)throw Error("No address found");if(!t?.name)throw Error("No network found");let n=S.bq.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??S.bq.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=S.ph.state.purchaseCurrency,r=i?[i.symbol]:S.ph.state.purchaseCurrencies.map(e=>e.symbol);return await S.Lr.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:S.bq.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:S.ph.state.purchaseAmount})}};ez([(0,P.SB)()],eH.prototype,"providers",void 0),eH=ez([(0,E.customElement)("w3m-onramp-providers-view")],eH);var eV=(0,N.iv)`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`,eY=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let e_=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=S.ph.state.purchaseCurrencies,this.tokens=S.ph.state.purchaseCurrencies,this.tokenImages=S.WM.state.tokenImages,this.unsubscribe.push(S.ph.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),S.WM.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>(0,N.dy)`
        <wui-list-item
          imageSrc=${(0,D.o)(this.tokenImages?.[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(S.ph.setPurchaseCurrency(e),S.IN.close())}};e_.styles=eV,eY([(0,P.SB)()],e_.prototype,"selectedCurrency",void 0),eY([(0,P.SB)()],e_.prototype,"tokens",void 0),eY([(0,P.SB)()],e_.prototype,"tokenImages",void 0),e_=eY([(0,E.customElement)("w3m-onramp-token-select-view")],e_);var eG=(0,N.iv)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,eX=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let eJ=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=S.fB.state.caipNetwork?.id,this.initialized=S.nY.state.initialized,this.loadingQuote=S.nY.state.loadingQuote,this.loadingPrices=S.nY.state.loadingPrices,this.loadingTransaction=S.nY.state.loadingTransaction,this.sourceToken=S.nY.state.sourceToken,this.sourceTokenAmount=S.nY.state.sourceTokenAmount,this.sourceTokenPriceInUSD=S.nY.state.sourceTokenPriceInUSD,this.toToken=S.nY.state.toToken,this.toTokenAmount=S.nY.state.toTokenAmount,this.toTokenPriceInUSD=S.nY.state.toTokenPriceInUSD,this.inputError=S.nY.state.inputError,this.gasPriceInUSD=S.nY.state.gasPriceInUSD,this.fetchError=S.nY.state.fetchError,this.onDebouncedGetSwapCalldata=S.j1.debounce(async()=>{await S.nY.swapTokens()},200),S.fB.subscribeKey("caipNetwork",e=>{this.caipNetworkId!==e?.id&&(this.caipNetworkId=e?.id,S.nY.resetState(),S.nY.initializeState())}),this.unsubscribe.push(S.IN.subscribeKey("open",e=>{e||S.nY.resetState()}),S.RouterController.subscribeKey("view",e=>{e.includes("Swap")||S.nY.resetValues()}),S.nY.subscribe(e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError}))}firstUpdated(){S.nY.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{S.nY.getNetworkTokenPrice(),S.nY.getMyTokensWithBalance(),S.nY.swapTokens()},1e4)}templateSwap(){return(0,N.dy)`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return(0,N.dy)`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return(0,N.dy)`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){let n=S.nY.state.myTokensWithBalance?.find(e=>e?.address===t?.address),i="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,r="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,o=parseFloat(i)*r;return"toToken"===e&&(o-=this.gasPriceInUSD||0),(0,N.dy)`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${n?.quantity?.numeric}
      .price=${n?.price}
      .marketValue=${o}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){let n="sourceToken"===e?this.sourceToken:this.toToken,i=n?.address===S.fB.getActiveNetworkTokenAddress(),r="0";if(!t){r="0",this.handleChangeAmount(e,r);return}if(!this.gasPriceInUSD){r=t,this.handleChangeAmount(e,r);return}let o=I.C6.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=i?I.C6.bigNumber(t).minus(o):I.C6.bigNumber(t);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,N.dy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){S.nY.clearError(),"sourceToken"===e?S.nY.setSourceTokenAmount(t):S.nY.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){let e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,n=this.loadingQuote||this.loadingPrices||this.loadingTransaction,i=n||e||t||this.inputError;return(0,N.dy)` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${n}
        .disabled=${i}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){S.nY.switchTokens()}onSwapPreview(){if(this.fetchError){S.nY.swapTokens();return}S.Xs.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("SwapPreview")}};eJ.styles=eG,eX([(0,P.SB)()],eJ.prototype,"interval",void 0),eX([(0,P.SB)()],eJ.prototype,"detailsOpen",void 0),eX([(0,P.SB)()],eJ.prototype,"caipNetworkId",void 0),eX([(0,P.SB)()],eJ.prototype,"initialized",void 0),eX([(0,P.SB)()],eJ.prototype,"loadingQuote",void 0),eX([(0,P.SB)()],eJ.prototype,"loadingPrices",void 0),eX([(0,P.SB)()],eJ.prototype,"loadingTransaction",void 0),eX([(0,P.SB)()],eJ.prototype,"sourceToken",void 0),eX([(0,P.SB)()],eJ.prototype,"sourceTokenAmount",void 0),eX([(0,P.SB)()],eJ.prototype,"sourceTokenPriceInUSD",void 0),eX([(0,P.SB)()],eJ.prototype,"toToken",void 0),eX([(0,P.SB)()],eJ.prototype,"toTokenAmount",void 0),eX([(0,P.SB)()],eJ.prototype,"toTokenPriceInUSD",void 0),eX([(0,P.SB)()],eJ.prototype,"inputError",void 0),eX([(0,P.SB)()],eJ.prototype,"gasPriceInUSD",void 0),eX([(0,P.SB)()],eJ.prototype,"fetchError",void 0),eJ=eX([(0,E.customElement)("w3m-swap-view")],eJ);var eZ=(0,N.iv)`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`,e0=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let e1=class extends N.oi{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=S.RouterController.state.data?.switchToChain,this.navigateTo=S.RouterController.state.data?.navigateTo,this.navigateWithReplace=S.RouterController.state.data?.navigateWithReplace,this.activeChain=S.RY.state.activeChain}firstUpdated(){this.unsubscribe.push(S.RY.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.activeChain?I.bq.CHAIN_NAME_MAP[this.activeChain]:"current",t=this.switchToChain?I.bq.CHAIN_NAME_MAP[this.switchToChain]:"supported";return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name="eth"></wui-visual>
          <wui-text variant="paragraph-500" color="fg-100" align="center">Switch to EVM</wui-text>
          <wui-text variant="small-400" color="fg-200" align="center">
            This feature is not supported on the ${e} chain. Switch to
            ${t} chain to proceed using it.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}switchActiveChain(){this.switchToChain&&(S.RY.setActiveChain(this.switchToChain),this.navigateTo?this.navigateWithReplace?S.RouterController.replace(this.navigateTo):S.RouterController.push(this.navigateTo):S.RouterController.goBack())}};e1.styles=eZ,e0([(0,P.Cb)()],e1.prototype,"activeChain",void 0),e1=e0([(0,E.customElement)("w3m-switch-active-chain-view")],e1);var e3=(0,N.iv)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,e2=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let e5=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=S.nY.state.approvalTransaction,this.swapTransaction=S.nY.state.swapTransaction,this.sourceToken=S.nY.state.sourceToken,this.sourceTokenAmount=S.nY.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=S.nY.state.sourceTokenPriceInUSD,this.toToken=S.nY.state.toToken,this.toTokenAmount=S.nY.state.toTokenAmount??"",this.toTokenPriceInUSD=S.nY.state.toTokenPriceInUSD,this.caipNetwork=S.fB.state.caipNetwork,this.balanceSymbol=S.AccountController.state.balanceSymbol,this.gasPriceInUSD=S.nY.state.gasPriceInUSD,this.inputError=S.nY.state.inputError,this.loadingQuote=S.nY.state.loadingQuote,this.loadingApprovalTransaction=S.nY.state.loadingApprovalTransaction,this.loadingBuildTransaction=S.nY.state.loadingBuildTransaction,this.loadingTransaction=S.nY.state.loadingTransaction,this.unsubscribe.push(S.AccountController.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&S.RouterController.goBack()}),S.fB.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),S.nY.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&S.RouterController.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction}))}firstUpdated(){S.nY.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(e=>e?.()),clearInterval(this.interval)}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{S.nY.getApprovalLoadingState()||S.nY.getTransaction()},1e4)}templateSwap(){let e=`${E.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${E.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,n=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,i=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),r=E.UiHelperUtil.formatNumberToLocalString(n),o=E.UiHelperUtil.formatNumberToLocalString(i),a=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return(0,N.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${o}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${a}
            ?disabled=${a}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,N.dy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){S.RouterController.goBack()}onSendTransaction(){this.approvalTransaction?S.nY.sendTransactionForApproval(this.approvalTransaction):S.nY.sendTransactionForSwap(this.swapTransaction)}};e5.styles=e3,e2([(0,P.SB)()],e5.prototype,"interval",void 0),e2([(0,P.SB)()],e5.prototype,"detailsOpen",void 0),e2([(0,P.SB)()],e5.prototype,"approvalTransaction",void 0),e2([(0,P.SB)()],e5.prototype,"swapTransaction",void 0),e2([(0,P.SB)()],e5.prototype,"sourceToken",void 0),e2([(0,P.SB)()],e5.prototype,"sourceTokenAmount",void 0),e2([(0,P.SB)()],e5.prototype,"sourceTokenPriceInUSD",void 0),e2([(0,P.SB)()],e5.prototype,"toToken",void 0),e2([(0,P.SB)()],e5.prototype,"toTokenAmount",void 0),e2([(0,P.SB)()],e5.prototype,"toTokenPriceInUSD",void 0),e2([(0,P.SB)()],e5.prototype,"caipNetwork",void 0),e2([(0,P.SB)()],e5.prototype,"balanceSymbol",void 0),e2([(0,P.SB)()],e5.prototype,"gasPriceInUSD",void 0),e2([(0,P.SB)()],e5.prototype,"inputError",void 0),e2([(0,P.SB)()],e5.prototype,"loadingQuote",void 0),e2([(0,P.SB)()],e5.prototype,"loadingApprovalTransaction",void 0),e2([(0,P.SB)()],e5.prototype,"loadingBuildTransaction",void 0),e2([(0,P.SB)()],e5.prototype,"loadingTransaction",void 0),e5=e2([(0,E.customElement)("w3m-swap-preview-view")],e5);var e4=(0,N.iv)`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,e6=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let e9=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.targetToken=S.RouterController.state.data?.target,this.sourceToken=S.nY.state.sourceToken,this.sourceTokenAmount=S.nY.state.sourceTokenAmount,this.toToken=S.nY.state.toToken,this.myTokensWithBalance=S.nY.state.myTokensWithBalance,this.popularTokens=S.nY.state.popularTokens,this.searchValue="",this.unsubscribe.push(S.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?S.nY.setSourceToken(e):(S.nY.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&S.nY.swapTokens()),S.RouterController.goBack()}templateSearchInput(){return(0,N.dy)`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],n=this.filterTokensWithText(e,this.searchValue),i=this.filterTokensWithText(t,this.searchValue);return(0,N.dy)`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${n?.length>0?(0,N.dy)`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${n.map(e=>{let t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return(0,N.dy)`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${i?.length>0?i.map(e=>(0,N.dy)`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let e=S.nY.state.suggestedTokens?S.nY.state.suggestedTokens.slice(0,8):null;return e?(0,N.dy)`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map(e=>(0,N.dy)`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){let e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",E.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",E.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){let e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",E.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",E.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter(e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase()))}};e9.styles=e4,e6([(0,P.SB)()],e9.prototype,"interval",void 0),e6([(0,P.SB)()],e9.prototype,"targetToken",void 0),e6([(0,P.SB)()],e9.prototype,"sourceToken",void 0),e6([(0,P.SB)()],e9.prototype,"sourceTokenAmount",void 0),e6([(0,P.SB)()],e9.prototype,"toToken",void 0),e6([(0,P.SB)()],e9.prototype,"myTokensWithBalance",void 0),e6([(0,P.SB)()],e9.prototype,"popularTokens",void 0),e6([(0,P.SB)()],e9.prototype,"searchValue",void 0),e9=e6([(0,E.customElement)("w3m-swap-select-token-view")],e9);var e8=(0,N.iv)`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let e7=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};e7.styles=e8,e7=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-transactions-view")],e7);let te=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],tt=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${te}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{S.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tt=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-what-is-a-network-view")],tt);let tn=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ti=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${tn}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){S.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),S.RouterController.push("GetWallet")}};ti=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-what-is-a-wallet-view")],ti);let tr=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${S.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};tr=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-what-is-a-buy-view")],tr);var to=(0,N.iv)`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`,ta=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ts=class extends N.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=Z.$D.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=S.RouterController.state.data?.email,this.authConnector=S.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?(0,N.dy)`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:(0,N.dy)` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?(0,N.dy)`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Z.$D.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Z.$D.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=S.j1.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!S.ConnectorController.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),S.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){S.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};ts.styles=to,ta([(0,P.SB)()],ts.prototype,"loading",void 0),ta([(0,P.SB)()],ts.prototype,"timeoutTimeLeft",void 0),ta([(0,P.SB)()],ts.prototype,"error",void 0),ts=ta([(0,E.customElement)("w3m-email-otp-widget")],ts);var tl=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tc=class extends ts{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=S.AccountController.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=S.fB.checkIfSmartAccountEnabled();await this.authConnector.provider.connectOtp({otp:e}),S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await S.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain),S.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),S.AccountController.state.allAccounts.length>1?S.RouterController.push("SelectAddresses"):t&&!this.smartAccountDeployed?S.RouterController.push("UpgradeToSmartAccount"):S.IN.close()}}catch(e){throw S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(S.AccountController.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};tl([(0,P.SB)()],tc.prototype,"smartAccountDeployed",void 0),tc=tl([(0,E.customElement)("w3m-email-verify-otp-view")],tc);var tu=(0,N.iv)`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`,td=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let th=class extends N.oi{constructor(){super(),this.email=S.RouterController.state.data?.email,this.authConnector=S.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),S.Xs.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),S.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){S.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),S.SnackController.showSuccess("Code email resent")}}catch(e){S.SnackController.showError(e)}finally{this.loading=!1}}};th.styles=tu,td([(0,P.SB)()],th.prototype,"loading",void 0),th=td([(0,E.customElement)("w3m-email-verify-device-view")],th);var tp=(0,N.iv)`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,tf=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tw=class extends N.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(S.IN.subscribeKey("open",e=>{e||(this.onHideIframe(),S.RouterController.popTransactionStack())}),S.IN.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(e=>{let t=e?.[0]?.contentBoxSize,n=t?.[0]?.inlineSize;this.iframe.style.height="400px",n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 200px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return(0,N.dy)`<div data-ready=${this.ready}></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){let e=S.ConnectorController.getAuthConnector();if(e){let t=S.ThemeController.getSnapshot().themeMode,n=S.ThemeController.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:(0,I.tU)(n,t)})}}};tw.styles=tp,tf([(0,P.SB)()],tw.prototype,"ready",void 0),tw=tf([(0,E.customElement)("w3m-approve-transaction-view")],tw);let tg=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${S.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${S.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};tg=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-upgrade-wallet-view")],tg);var tm=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ty=class extends N.oi{constructor(){super(...arguments),this.authConnector=S.ConnectorController.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await S.ConnectionController.setPreferredAccountType(Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,S._4.navigateAfterPreferredAccountTypeSelect()}catch(e){S.SnackController.showError("Error upgrading to smart account")}}}render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{S.j1.openHref(I.UE.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return(0,N.dy)`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){S.RouterController.push("Account")}};tm([(0,P.SB)()],ty.prototype,"authConnector",void 0),tm([(0,P.SB)()],ty.prototype,"loading",void 0),ty=tm([(0,E.customElement)("w3m-upgrade-to-smart-account-view")],ty);var tb=(0,N.iv)`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`,tv=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tC=class extends N.oi{constructor(){super(...arguments),this.formRef=(0,eE.V)(),this.initialEmail=S.RouterController.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return(0,N.dy)`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,eE.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${S.RouterController.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=S.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let n=await t.provider.updateEmail({email:this.email});S.Xs.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===n.action?S.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):S.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){S.SnackController.showError(e),this.loading=!1}}};tC.styles=tb,tv([(0,P.SB)()],tC.prototype,"email",void 0),tv([(0,P.SB)()],tC.prototype,"loading",void 0),tC=tv([(0,E.customElement)("w3m-update-email-wallet-view")],tC);let tx=class extends ts{constructor(){super(),this.email=S.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),S.RouterController.replace("UpdateEmailSecondaryOtp",S.RouterController.state.data))}catch(e){throw S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{S.RouterController.replace("UpdateEmailWallet",S.RouterController.state.data)}}};tx=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-update-email-primary-otp-view")],tx);let tA=class extends ts{constructor(){super(),this.email=S.RouterController.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),S.RouterController.reset("Account"))}catch(e){throw S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{S.RouterController.replace("UpdateEmailWallet",S.RouterController.state.data)}}};tA=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-update-email-secondary-otp-view")],tA);var tk=(0,N.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,tT=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tS=class extends N.oi{constructor(){super(...arguments),this.swapUnsupportedChain=S.RouterController.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return(0,N.dy)`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?(0,N.dy)`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:(0,N.dy)`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=S.fB.getRequestedCaipNetworks(),t=S.fB.state.approvedCaipNetworkIds,n=S.j1.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter(e=>S.bq.SWAP_SUPPORTED_NETWORKS.includes(e.id)):n).map(e=>(0,N.dy)`
        <wui-list-network
          imageSrc=${(0,D.o)(S.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await S.ConnectionController.disconnect(),S.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),S.IN.close()}catch{S.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),S.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){let t=S.AccountController.state.isConnected,n=S.fB.state.approvedCaipNetworkIds,i=S.fB.state.supportsAllNetworks,r=S.fB.state.caipNetwork,o=S.RouterController.state.data;t&&r?.id!==e.id?n?.includes(e.id)?(await S.fB.switchActiveNetwork(e),await eD.onNetworkChange()):i&&S.RouterController.push("SwitchNetwork",{...o,network:e}):t||(S.fB.setActiveCaipNetwork(e),S.RouterController.push("Connect"))}};tS.styles=tk,tT([(0,P.SB)()],tS.prototype,"disconecting",void 0),tS=tT([(0,E.customElement)("w3m-unsupported-chain-view")],tS);var tE=(0,N.iv)`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,tI=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tR=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.address=S.AccountController.state.address,this.profileName=S.AccountController.state.profileName,this.network=S.fB.state.caipNetwork,this.preferredAccountType=S.AccountController.state.preferredAccountType,this.unsubscribe.push(S.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):S.SnackController.showError("Account not found")}),S.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=S.fz.getNetworkImage(this.network);return(0,N.dy)` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${E.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${S.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=S.fB.getRequestedCaipNetworks(),t=S.fB.checkIfSmartAccountEnabled(),n=S.fB.state.caipNetwork;if(this.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return n?(0,N.dy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[S.fz.getNetworkImage(n)??""]}
      ></wui-compatible-network>`:null;let i=(e?.filter(e=>e?.imageId)?.slice(0,5)).map(S.fz.getNetworkImage).filter(Boolean);return(0,N.dy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${i}
    ></wui-compatible-network>`}onReceiveClick(){S.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(S.j1.copyToClopboard(this.address),S.SnackController.showSuccess("Address copied"))}catch{S.SnackController.showError("Failed to copy")}}};tR.styles=tE,tI([(0,P.SB)()],tR.prototype,"address",void 0),tI([(0,P.SB)()],tR.prototype,"profileName",void 0),tI([(0,P.SB)()],tR.prototype,"network",void 0),tI([(0,P.SB)()],tR.prototype,"preferredAccountType",void 0),tR=tI([(0,E.customElement)("w3m-wallet-receive-view")],tR);var tO=(0,N.iv)`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,tN=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tP=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=S.AccountController.state.preferredAccountType,this.unsubscribe.push(S.AccountController.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=S.fB.getRequestedCaipNetworks(),t=S.fB.state.approvedCaipNetworkIds,n=S.fB.state.caipNetwork,i=S.fB.checkIfSmartAccountEnabled(),r=S.j1.sortRequestedNetworks(t,e);if(i&&this.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;r=[n]}return r.map(e=>(0,N.dy)`
        <wui-list-network
          imageSrc=${(0,D.o)(S.fz.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};tP.styles=tO,tN([(0,P.SB)()],tP.prototype,"preferredAccountType",void 0),tP=tN([(0,E.customElement)("w3m-wallet-compatible-networks-view")],tP);var tD=(0,N.iv)`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,tB=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let t$=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.token=S.Si.state.token,this.sendTokenAmount=S.Si.state.sendTokenAmount,this.receiverAddress=S.Si.state.receiverAddress,this.receiverProfileName=S.Si.state.receiverProfileName,this.loading=S.Si.state.loading,this.gasPriceInUSD=S.Si.state.gasPriceInUSD,this.gasPrice=S.Si.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(S.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),(0,N.dy)` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await S.nY.getNetworkTokenPrice();let e=await S.nY.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(S.Si.setGasPrice(e.gasPrice),S.Si.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){S.RouterController.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!S.j1.isAddress(this.receiverAddress,S.RY.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price&&!(this.sendTokenAmount*this.token.price)&&(this.message="Incorrect Value"),this.token||(this.message="Select Token")}};t$.styles=tD,tB([(0,P.SB)()],t$.prototype,"token",void 0),tB([(0,P.SB)()],t$.prototype,"sendTokenAmount",void 0),tB([(0,P.SB)()],t$.prototype,"receiverAddress",void 0),tB([(0,P.SB)()],t$.prototype,"receiverProfileName",void 0),tB([(0,P.SB)()],t$.prototype,"loading",void 0),tB([(0,P.SB)()],t$.prototype,"gasPriceInUSD",void 0),tB([(0,P.SB)()],t$.prototype,"gasPrice",void 0),tB([(0,P.SB)()],t$.prototype,"message",void 0),t$=tB([(0,E.customElement)("w3m-wallet-send-view")],t$);var tU=(0,N.iv)`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`,tj=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tM=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=S.AccountController.state.tokenBalance,this.search="",this.onDebouncedSearch=S.j1.debounce(e=>{this.search=e}),this.unsubscribe.push(S.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return(0,N.dy)`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter(e=>e.chainId===S.fB.state.caipNetwork?.id),this.search?this.filteredTokens=this.tokenBalance?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,(0,N.dy)`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>(0,N.dy)`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):(0,N.dy)`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){S.RouterController.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){S.Si.setToken(e),S.Si.setTokenAmount(void 0),S.RouterController.goBack()}};tM.styles=tU,tj([(0,P.SB)()],tM.prototype,"tokenBalance",void 0),tj([(0,P.SB)()],tM.prototype,"tokens",void 0),tj([(0,P.SB)()],tM.prototype,"filteredTokens",void 0),tj([(0,P.SB)()],tM.prototype,"search",void 0),tM=tj([(0,E.customElement)("w3m-wallet-send-select-token-view")],tM);var tL=(0,N.iv)`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`,tq=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tW=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.token=S.Si.state.token,this.sendTokenAmount=S.Si.state.sendTokenAmount,this.receiverAddress=S.Si.state.receiverAddress,this.receiverProfileName=S.Si.state.receiverProfileName,this.receiverProfileImageUrl=S.Si.state.receiverProfileImageUrl,this.gasPriceInUSD=S.Si.state.gasPriceInUSD,this.caipNetwork=S.fB.state.caipNetwork,this.unsubscribe.push(S.Si.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl}),S.fB.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?E.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?E.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):E.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return(0,N.dy)`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){S.Si.sendToken()}onCancelClick(){S.RouterController.goBack()}};tW.styles=tL,tq([(0,P.SB)()],tW.prototype,"token",void 0),tq([(0,P.SB)()],tW.prototype,"sendTokenAmount",void 0),tq([(0,P.SB)()],tW.prototype,"receiverAddress",void 0),tq([(0,P.SB)()],tW.prototype,"receiverProfileName",void 0),tq([(0,P.SB)()],tW.prototype,"receiverProfileImageUrl",void 0),tq([(0,P.SB)()],tW.prototype,"gasPriceInUSD",void 0),tq([(0,P.SB)()],tW.prototype,"caipNetwork",void 0),tW=tq([(0,E.customElement)("w3m-wallet-send-preview-view")],tW);var tQ=(0,N.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let tF=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-wallet-login-list></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tF.styles=tQ,tF=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connect-wallets-view")],tF);var tK=(0,N.iv)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let tz=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-social-login-list></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};tz.styles=tK,tz=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connect-socials-view")],tz);var tH=(0,N.iv)`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,tV=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tY=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.socialProvider=S.AccountController.state.socialProvider,this.socialWindow=S.AccountController.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=S.ConnectorController.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===z.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),S.AccountController.setSocialWindow(void 0,S.RY.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&(S.MO.setConnectedSocialProvider(this.socialProvider),await S.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain),S.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&S.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else S.RouterController.goBack(),S.SnackController.showError("Untrusted Origin"),this.socialProvider&&S.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}},this.unsubscribe.push(S.AccountController.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&S.IN.state.open&&S.IN.close()})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return(0,N.dy)`
      <wui-flex
        data-error=${(0,D.o)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,D.o)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=S.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,N.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==S.RouterController.state.view||S.RouterController.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};tY.styles=tH,tV([(0,P.SB)()],tY.prototype,"socialProvider",void 0),tV([(0,P.SB)()],tY.prototype,"socialWindow",void 0),tV([(0,P.SB)()],tY.prototype,"error",void 0),tV([(0,P.SB)()],tY.prototype,"connecting",void 0),tV([(0,P.SB)()],tY.prototype,"message",void 0),tY=tV([(0,E.customElement)("w3m-connecting-social-view")],tY);var t_=(0,N.iv)`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`,tG=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let tX=class extends N.oi{constructor(){super(),this.usubscribe=[],this.address=S.AccountController.state.address,this.profileImage=S.AccountController.state.profileImage,this.profileName=S.AccountController.state.profileName,this.accounts=S.AccountController.state.allAccounts,this.usubscribe.push(S.AccountController.subscribeKey("address",e=>{e?this.address=e:S.IN.close()})),this.usubscribe.push(S.AccountController.subscribeKey("profileImage",e=>{this.profileImage=e})),this.usubscribe.push(S.AccountController.subscribeKey("profileName",e=>{this.profileName=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-profile-view: No account provided");let e=this.profileName?.split(".")[0];return(0,N.dy)`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,D.o)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${e?E.UiHelperUtil.getTruncateString({string:e,charsStart:20,charsEnd:0,truncate:"end"}):E.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>S.RouterController.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return(0,N.dy)`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map(e=>this.accountTemplate(e))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){S.AccountController.setShouldUpdateToAddress(e.address,S.RY.state.activeChain);let t=S.ConnectorController.getAuthConnector();t&&(await t.provider.setPreferredAccount(e.type),await t.provider.connect())}accountTemplate(e){return(0,N.dy)`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":(0,N.dy)`<wui-button
            slot="action"
            textVariant="small-600"
            size="sm"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(S.j1.copyToClopboard(this.profileName),S.SnackController.showSuccess("Name copied")):this.address&&(S.j1.copyToClopboard(this.address),S.SnackController.showSuccess("Address copied"))}catch{S.SnackController.showError("Failed to copy")}}};tX.styles=t_,tG([(0,P.SB)()],tX.prototype,"address",void 0),tG([(0,P.SB)()],tX.prototype,"profileImage",void 0),tG([(0,P.SB)()],tX.prototype,"profileName",void 0),tG([(0,P.SB)()],tX.prototype,"accounts",void 0),tX=tG([(0,E.customElement)("w3m-profile-view")],tX);var tJ=(0,N.iv)`
  input[type='checkbox'] {
    all: revert;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    accent-color: var(--wui-color-accent-100);
  }
`,tZ=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let t0=class extends N.oi{constructor(){super(),this.metadata=S.OptionsController.state.metadata,this.allAccounts=S.AccountController.state.allAccounts,this.selectedAccounts=S.AccountController.state.allAccounts,this.selectAll=!0,this.approved=!1,this.isApproving=!1,this.getAddressTemplate=e=>{let t=this.selectedAccounts.some(t=>t.address===e.address);return(0,N.dy)`<wui-list-account accountAddress="${e.address}" accountType="${e.type}">
      <input
        id="${e.address}"
        slot="action"
        type="checkbox"
        .checked="${t}"
        @change="${this.handleClick(e)}"
      />
    </wui-list-account>`},this.onSelectAll=e=>{let t=e.target.checked;this.selectAll=this.selectedAccounts.length===this.allAccounts.length,this.allAccounts.forEach(e=>{this.onSelect(e,t)})},this.onSelect=(e,t)=>{t?this.selectedAccounts.push(e):this.selectedAccounts=this.selectedAccounts.filter(t=>t.address!==e.address),this.selectedAccounts.length>0&&(this.selectAll=this.selectedAccounts.length===this.allAccounts.length)},S.AccountController.subscribeKey("allAccounts",e=>{this.allAccounts=e})}render(){return(0,N.dy)`
    <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
      <wui-banner-img imageSrc="${(0,D.o)(this.metadata?.icons[0])}" text="${(0,D.o)(this.metadata?.url)}" size="sm"></wui-banner>
    </wui-flex>
    <wui-flex .padding=${["0","xl","0","xl"]} flexDirection="row" justifyContent="space-between">
        <wui-text variant="paragraph-400" color="fg-200">Select all</wui-text>
        <input type="checkbox" .checked=${this.selectAll}  @click=${this.onSelectAll.bind(this)} />
    </wui-flex>
      <wui-flex flexDirection="column" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(e=>this.getAddressTemplate(e))}
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="neutral"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="main"
          .disabled=${0===this.selectedAccounts.length}
          @click=${this.onContinue.bind(this)}
          ?loading=${this.isApproving}
        >
          ${this.isApproving?"Signing...":"Continue"}
        </wui-button>
      </wui-flex>
    `}handleClick(e){return t=>{let n=t.target;this.onSelect?.({...e},n?.checked)}}onContinue(){this.selectedAccounts.length>0?(this.isApproving=!0,S.AccountController.setAllAccounts(this.selectedAccounts,S.RY.state.activeChain),S.AccountController.setShouldUpdateToAddress(this.selectedAccounts[0]?.address??"",S.RY.state.activeChain),this.approved=!0,this.isApproving=!1,S.IN.close()):this.onCancel()}async onCancel(){let{isConnected:e}=S.AccountController.state;e?(await S.ConnectionController.disconnect(),S.IN.close()):S.RouterController.push("Connect")}disconnectedCallback(){super.disconnectedCallback(),this.approved||this.onCancel()}};t0.styles=tJ,tZ([(0,P.SB)()],t0.prototype,"allAccounts",void 0),tZ([(0,P.SB)()],t0.prototype,"selectedAccounts",void 0),tZ([(0,P.SB)()],t0.prototype,"selectAll",void 0),tZ([(0,P.SB)()],t0.prototype,"approved",void 0),tZ([(0,P.SB)()],t0.prototype,"isApproving",void 0),t0=tZ([(0,E.customElement)("w3m-select-addresses-view")],t0);var t1=(0,N.iv)`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`,t3=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let t2=class extends N.oi{constructor(){super(),this.metadata=S.OptionsController.state.metadata,this.allAccounts=S.AccountController.state.allAccounts||[],this.balances={},this.labels=S.AccountController.state.addressLabels,this.currentAddress=S.AccountController.state.address||"",this.connectedConnector=S.MO.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector,this.caipNetwork=S.fB.state.caipNetwork,S.AccountController.subscribeKey("allAccounts",e=>{this.allAccounts=e})}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach(e=>{S.Lr.getBalance(e.address,this.caipNetwork?.id).then(t=>{let n=this.balances[e.address]||0;t.balances.length>0&&(n=t.balances.reduce((e,t)=>e+(t?.value||0),0)),this.balances[e.address]=n,this.requestUpdate()})})}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return(0,N.dy)`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,D.o)(this.metadata?.icons[0])}
          text=${(0,D.o)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map((e,t)=>this.getAddressTemplate(e,t))}
      </wui-flex>
    `}getAddressTemplate(e,t){let n=this.labels?.get(e.address);return(0,N.dy)`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?(0,N.dy)`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:(0,N.dy)`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${n||E.UiHelperUtil.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:(0,N.dy)`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":(0,N.dy)`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){S.AccountController.setShouldUpdateToAddress(e,S.RY.state.activeChain),S.IN.close()}};t2.styles=t1,t3([(0,P.SB)()],t2.prototype,"allAccounts",void 0),t3([(0,P.SB)()],t2.prototype,"balances",void 0),t2=t3([(0,E.customElement)("w3m-switch-address-view")],t2);var t5=(0,N.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`,t4=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let t6=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=S.AccountController.state.socialProvider,this.uri=S.AccountController.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=S.ConnectorController.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(S.AccountController.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),S.AccountController.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,N.dy)`${this.platformTemplate()}`}platformTemplate(){return S.j1.isMobile()?(0,N.dy)`${this.mobileTemplate()}`:(0,N.dy)`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?(0,N.dy)`${this.loadingTemplate()}`:(0,N.dy)`${this.qrTemplate()}`}qrTemplate(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=S.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,N.dy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&S.MO.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await S.ConnectionController.connectExternal(this.authConnector,this.authConnector.chain),this.loading=!1,S.IN.close()}catch(e){S.RouterController.goBack(),S.SnackController.showError(e)}}mobileLinkTemplate(){return(0,N.dy)`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&S.j1.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return(0,N.dy)` <wui-qr-code
      size=${e}
      theme=${S.ThemeController.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,N.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(S.j1.copyToClopboard(this.uri),S.SnackController.showSuccess("Link copied"))}catch{S.SnackController.showError("Failed to copy")}}};t6.styles=t5,t4([(0,P.SB)()],t6.prototype,"socialProvider",void 0),t4([(0,P.SB)()],t6.prototype,"uri",void 0),t4([(0,P.SB)()],t6.prototype,"ready",void 0),t4([(0,P.SB)()],t6.prototype,"loading",void 0),t6=t4([(0,E.customElement)("w3m-connecting-farcaster-view")],t6);var t9=(0,N.iv)`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function t8(e){let{connectors:t}=S.ConnectorController.state,n=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!n[e.rdns??""]})).sort((e,t)=>Number(t.installed)-Number(e.installed))}var t7=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ne="local-paginator",nt=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!S.ApiController.state.wallets.length,this.wallets=S.ApiController.state.wallets,this.recommended=S.ApiController.state.recommended,this.featured=S.ApiController.state.featured,this.unsubscribe.push(S.ApiController.subscribeKey("wallets",e=>this.wallets=e),S.ApiController.subscribeKey("recommended",e=>this.recommended=e),S.ApiController.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return(0,N.dy)`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await S.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>(0,N.dy)`
        <wui-card-select-loader type="wallet" id=${(0,D.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return t8([...this.featured,...this.recommended,...this.wallets]).map(e=>(0,N.dy)`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:n,count:i}=S.ApiController.state,r=window.innerWidth<352?3:4,o=e.length+t.length,a=Math.ceil(o/r)*r-o+r;return(a-=e.length?n.length%r:0,0===i&&n.length>0)?null:0===i||[...n,...e,...t].length<i?this.shimmerTemplate(a,ne):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${ne}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:n}=S.ApiController.state;n.length<t&&S.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let t=S.ConnectorController.getConnector(e.id,e.rdns);t?S.RouterController.push("ConnectingExternal",{connector:t}):S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};nt.styles=t9,t7([(0,P.SB)()],nt.prototype,"initial",void 0),t7([(0,P.SB)()],nt.prototype,"wallets",void 0),t7([(0,P.SB)()],nt.prototype,"recommended",void 0),t7([(0,P.SB)()],nt.prototype,"featured",void 0),nt=t7([(0,E.customElement)("w3m-all-wallets-list")],nt);var nn=(0,N.iv)`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`,ni=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nr=class extends N.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){return(0,N.dy)`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color="inherit">${this.wallet?.name}</wui-text>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?(0,N.dy)`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,D.o)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return(0,N.dy)`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=S.fz.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await S.fz.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};nr.styles=nn,ni([(0,P.SB)()],nr.prototype,"visible",void 0),ni([(0,P.SB)()],nr.prototype,"imageSrc",void 0),ni([(0,P.SB)()],nr.prototype,"imageLoading",void 0),ni([(0,P.Cb)()],nr.prototype,"wallet",void 0),nr=ni([(0,E.customElement)("w3m-all-wallets-list-item")],nr);var no=(0,N.iv)`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,na=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ns=class extends N.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?(0,N.dy)`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()!==this.prevQuery.trim()&&(this.prevQuery=this.query,this.loading=!0,await S.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=S.ApiController.state,t=t8(e);return e.length?(0,N.dy)`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(e=>(0,N.dy)`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:(0,N.dy)`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let t=S.ConnectorController.getConnector(e.id,e.rdns);t?S.RouterController.push("ConnectingExternal",{connector:t}):S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};ns.styles=no,na([(0,P.SB)()],ns.prototype,"loading",void 0),na([(0,P.Cb)()],ns.prototype,"query",void 0),ns=na([(0,E.customElement)("w3m-all-wallets-search")],ns);var nl=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nc=class extends N.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(S.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return(0,N.dy)`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};nl([(0,P.Cb)({type:Array})],nc.prototype,"platforms",void 0),nl([(0,P.Cb)()],nc.prototype,"onSelectPlatfrom",void 0),nl([(0,P.SB)()],nc.prototype,"buffering",void 0),nc=nl([(0,E.customElement)("w3m-connecting-header")],nc);let nu=class extends ef{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=S.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),n=e.find(e=>"INJECTED"===e.type);t?await S.ConnectionController.connectExternal(t,t.chain):n&&await S.ConnectionController.connectExternal(n,n.chain),S.IN.close(),S.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){S.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};nu=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-browser")],nu);let nd=class extends ef{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:n,href:i}=S.j1.formatNativeUrl(e,this.uri);S.ConnectionController.setWcLinking({name:t,href:i}),S.ConnectionController.setRecentWallet(this.wallet),S.j1.openHref(n,"_blank")}catch{this.error=!0}}};nd=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-desktop")],nd);let nh=class extends ef{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:n,href:i}=S.j1.formatNativeUrl(e,this.uri);S.ConnectionController.setWcLinking({name:t,href:i}),S.ConnectionController.setRecentWallet(this.wallet),S.j1.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){let e=S.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(S.ConnectionController.setBuffering(!0),setTimeout(()=>{S.ConnectionController.setBuffering(!1)},5e3))}};nh=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-mobile")],nh);var np=(0,N.iv)`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let nf=class extends ef{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return S.ConnectionController.setWcLinking(void 0),S.ConnectionController.setRecentWallet(this.wallet),(0,N.dy)` <wui-qr-code
      size=${e}
      theme=${S.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,D.o)(S.fz.getWalletImage(this.wallet))}
      alt=${(0,D.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,N.dy)`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};nf.styles=np,nf=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-qrcode")],nf);let nw=class extends N.oi{constructor(){if(super(),this.wallet=S.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return(0,N.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,D.o)(S.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};nw=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-unsupported")],nw);let ng=class extends ef{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",S.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:n,href:i}=S.j1.formatUniversalUrl(e,this.uri);S.ConnectionController.setWcLinking({name:t,href:i}),S.ConnectionController.setRecentWallet(this.wallet),S.j1.openHref(n,"_blank")}catch{this.error=!0}}};ng=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connecting-wc-web")],ng);var nm=(0,N.iv)`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,ny=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nb=S.bq.CONVERT_SLIPPAGE_TOLERANCE,nv=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.networkName=S.fB.state.caipNetwork?.name,this.detailsOpen=!1,this.sourceToken=S.nY.state.sourceToken,this.toToken=S.nY.state.toToken,this.toTokenAmount=S.nY.state.toTokenAmount,this.sourceTokenPriceInUSD=S.nY.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=S.nY.state.toTokenPriceInUSD,this.gasPriceInUSD=S.nY.state.gasPriceInUSD,this.priceImpact=S.nY.state.priceImpact,this.maxSlippage=S.nY.state.maxSlippage,this.networkTokenSymbol=S.nY.state.networkTokenSymbol,this.inputError=S.nY.state.inputError,this.unsubscribe.push(S.nY.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){let e=this.toTokenAmount&&this.maxSlippage?I.C6.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return(0,N.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${E.UiHelperUtil.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${E.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?(0,N.dy)`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${E.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?(0,N.dy)` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${E.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?(0,N.dy)`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${e?`Transaction will be reversed if you receive less than ${E.UiHelperUtil.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${E.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${nb}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};nv.styles=[nm],ny([(0,P.SB)()],nv.prototype,"networkName",void 0),ny([(0,P.Cb)()],nv.prototype,"detailsOpen",void 0),ny([(0,P.SB)()],nv.prototype,"sourceToken",void 0),ny([(0,P.SB)()],nv.prototype,"toToken",void 0),ny([(0,P.SB)()],nv.prototype,"toTokenAmount",void 0),ny([(0,P.SB)()],nv.prototype,"sourceTokenPriceInUSD",void 0),ny([(0,P.SB)()],nv.prototype,"toTokenPriceInUSD",void 0),ny([(0,P.SB)()],nv.prototype,"gasPriceInUSD",void 0),ny([(0,P.SB)()],nv.prototype,"priceImpact",void 0),ny([(0,P.SB)()],nv.prototype,"maxSlippage",void 0),ny([(0,P.SB)()],nv.prototype,"networkTokenSymbol",void 0),ny([(0,P.SB)()],nv.prototype,"inputError",void 0),nv=ny([(0,E.customElement)("w3m-swap-details")],nv);var nC=(0,N.iv)`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,nx=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nA=class extends N.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let e=this.marketValue||"0",t=I.C6.bigNumber(e).isGreaterThan("0");return(0,N.dy)`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${E.UiHelperUtil.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return I.kg.numericInputKeyDown(e,this.value,e=>this.onSetAmount?.(this.target,e))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;let t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?(0,N.dy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:(0,N.dy)` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let e=I.C6.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return(0,N.dy)`
      ${t?(0,N.dy)`<wui-text variant="small-400" color="fg-200">
            ${E.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?(0,N.dy)` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:(0,N.dy)` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){S.Xs.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),S.RouterController.push("SwapSelectToken",{target:this.target})}onBuyToken(){S.RouterController.push("OnRampProviders")}};nA.styles=[nC],nx([(0,P.Cb)()],nA.prototype,"focused",void 0),nx([(0,P.Cb)()],nA.prototype,"balance",void 0),nx([(0,P.Cb)()],nA.prototype,"value",void 0),nx([(0,P.Cb)()],nA.prototype,"price",void 0),nx([(0,P.Cb)()],nA.prototype,"marketValue",void 0),nx([(0,P.Cb)()],nA.prototype,"disabled",void 0),nx([(0,P.Cb)()],nA.prototype,"target",void 0),nx([(0,P.Cb)()],nA.prototype,"token",void 0),nx([(0,P.Cb)()],nA.prototype,"onSetAmount",void 0),nx([(0,P.Cb)()],nA.prototype,"onSetMaxValue",void 0),nA=nx([(0,E.customElement)("w3m-swap-input")],nA);var nk=(0,N.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,nT=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nS=class extends N.oi{constructor(){super(...arguments),this.target="sourceToken"}render(){return(0,N.dy)`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return(0,N.dy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};nS.styles=[nk],nT([(0,P.Cb)()],nS.prototype,"target",void 0),nS=nT([(0,E.customElement)("w3m-swap-input-skeleton")],nS);var nE=(0,N.iv)`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,nI=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nR=["Swap","SwapSelectToken","SwapPreview"];function nO(){let e=S.RouterController.state.data?.connector?.name,t=S.RouterController.state.data?.wallet?.name,n=S.RouterController.state.data?.network?.name,i=t??e,r=S.ConnectorController.getConnectors(),o=1===r.length&&r[0]?.id==="w3m-email";return{Connect:`Connect ${o?"Email":""} Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SelectAddresses:"Select accounts",SwitchNetwork:n??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:S.AccountController.state.socialProvider?S.AccountController.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain"}}let nN=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.heading=nO()[S.RouterController.state.view],this.network=S.fB.state.caipNetwork,this.buffering=!1,this.showBack=!1,this.isSiweEnabled=S.OptionsController.state.isSiweEnabled,this.prevHistoryLength=1,this.view=S.RouterController.state.view,this.viewDirection="",this.headerText=nO()[S.RouterController.state.view],this.unsubscribe.push(S.RouterController.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=nO()[e]},z.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),S.ConnectionController.subscribeKey("buffering",e=>this.buffering=e),S.fB.subscribeKey("caipNetwork",e=>this.network=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()} ${this.closeButtonTemplate()}
      </wui-flex>
    `}onWalletHelp(){S.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),S.RouterController.push("WhatIsAWallet")}async onClose(){if(this.isSiweEnabled){let{SIWEController:e}=await Promise.resolve().then(n.bind(n,65852)),t="ApproveTransaction"===S.RouterController.state.view;"success"!==e.state.status&&t?S.RouterController.popTransactionStack(!0):S.IN.close()}else S.IN.close()}closeButtonTemplate(){let e="ConnectingSiwe"===S.RouterController.state.view;return this.isSiweEnabled&&e?(0,N.dy)`<div style="width:40px" />`:(0,N.dy)`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){let e=nR.includes(this.view);return(0,N.dy)`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100">${this.headerText}</wui-text>
        ${e?(0,N.dy)`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}dynamicButtonTemplate(){let{view:e}=S.RouterController.state;return"Account"===e?(0,N.dy)`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${this.network?.name}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,D.o)(S.fz.getNetworkImage(this.network))}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===e||"UpgradeToSmartAccount"===e||"ConnectingSiwe"===e)?(0,N.dy)`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:(0,N.dy)`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(S.Xs.sendEvent({type:"track",event:"CLICK_NETWORKS"}),S.RouterController.push("Networks"))}isAllowedNetworkSwitch(){let e=S.fB.getRequestedCaipNetworks(),t=!!e&&e.length>1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){let{history:e}=S.RouterController.state,t=z.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=z.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=S.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){S.RouterController.goBack()}};nN.styles=nE,nI([(0,P.SB)()],nN.prototype,"heading",void 0),nI([(0,P.SB)()],nN.prototype,"network",void 0),nI([(0,P.SB)()],nN.prototype,"buffering",void 0),nI([(0,P.SB)()],nN.prototype,"showBack",void 0),nI([(0,P.SB)()],nN.prototype,"isSiweEnabled",void 0),nI([(0,P.SB)()],nN.prototype,"prevHistoryLength",void 0),nI([(0,P.SB)()],nN.prototype,"view",void 0),nI([(0,P.SB)()],nN.prototype,"viewDirection",void 0),nI([(0,P.SB)()],nN.prototype,"headerText",void 0),nN=nI([(0,E.customElement)("w3m-header")],nN);var nP=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nD=class extends N.oi{constructor(){super(...arguments),this.data=[]}render(){return(0,N.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>(0,N.dy)`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>(0,N.dy)`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};nP([(0,P.Cb)({type:Array})],nD.prototype,"data",void 0),nD=nP([(0,E.customElement)("w3m-help-widget")],nD);var nB=(0,N.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,n$=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nU=class extends N.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return(0,N.dy)`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?(0,N.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,N.dy)`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await S.ApiController._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return(0,N.dy)`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){let e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return(0,N.dy)`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return(0,N.dy)`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};nU.styles=[nB],n$([(0,P.Cb)({type:Boolean})],nU.prototype,"disabled",void 0),n$([(0,P.Cb)()],nU.prototype,"color",void 0),n$([(0,P.Cb)()],nU.prototype,"label",void 0),n$([(0,P.Cb)()],nU.prototype,"purchaseValue",void 0),n$([(0,P.Cb)()],nU.prototype,"purchaseCurrency",void 0),n$([(0,P.Cb)()],nU.prototype,"date",void 0),n$([(0,P.Cb)({type:Boolean})],nU.prototype,"completed",void 0),n$([(0,P.Cb)({type:Boolean})],nU.prototype,"inProgress",void 0),n$([(0,P.Cb)({type:Boolean})],nU.prototype,"failed",void 0),n$([(0,P.Cb)()],nU.prototype,"onClick",void 0),n$([(0,P.Cb)()],nU.prototype,"symbol",void 0),n$([(0,P.Cb)()],nU.prototype,"icon",void 0),nU=n$([(0,E.customElement)("w3m-onramp-activity-item")],nU);var nj=(0,N.iv)`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,nM=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nL=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=S.WM.state.currencyImages,this.tokenImages=S.WM.state.tokenImages,this.unsubscribe.push(S.ph.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),S.ph.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),S.ph.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),S.WM.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){S.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return(0,N.dy)`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?(0,N.dy)` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>S.IN.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,D.o)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:(0,N.dy)`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};nL.styles=nj,nM([(0,P.Cb)({type:String})],nL.prototype,"type",void 0),nM([(0,P.Cb)({type:Number})],nL.prototype,"value",void 0),nM([(0,P.SB)()],nL.prototype,"currencies",void 0),nM([(0,P.SB)()],nL.prototype,"selectedCurrency",void 0),nM([(0,P.SB)()],nL.prototype,"currencyImages",void 0),nM([(0,P.SB)()],nL.prototype,"tokenImages",void 0),nL=nM([(0,E.customElement)("w3m-onramp-input")],nL);var nq=(0,N.iv)`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,nW=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nQ=class extends N.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return(0,N.dy)`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${(0,D.o)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?(0,N.dy)`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:(0,N.dy)`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=S.fB.getRequestedCaipNetworks(),t=e?.filter(e=>e?.imageId)?.slice(0,5);return(0,N.dy)`
      <wui-flex class="networks">
        ${t?.map(e=>N.dy`
            <wui-flex class="network-icon">
              <wui-image src=${D.o(S.fz.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};nQ.styles=[nq],nW([(0,P.Cb)({type:Boolean})],nQ.prototype,"disabled",void 0),nW([(0,P.Cb)()],nQ.prototype,"color",void 0),nW([(0,P.Cb)()],nQ.prototype,"name",void 0),nW([(0,P.Cb)()],nQ.prototype,"label",void 0),nW([(0,P.Cb)()],nQ.prototype,"feeRange",void 0),nW([(0,P.Cb)({type:Boolean})],nQ.prototype,"loading",void 0),nW([(0,P.Cb)()],nQ.prototype,"onClick",void 0),nQ=nW([(0,E.customElement)("w3m-onramp-provider-item")],nQ);var nF=(0,N.iv)`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let nK=class extends N.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=S.OptionsController.state;return e||t?(0,N.dy)`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=S.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=S.OptionsController.state;return e?(0,N.dy)`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=S.OptionsController.state;return e?(0,N.dy)`<a href=${e}>Privacy Policy</a>`:null}};nK.styles=[nF],nK=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-legal-footer")],nK);var nz=(0,N.iv)`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,nH=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nV=class extends N.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:n,chrome_store:i,homepage:r}=this.wallet,o=S.j1.isMobile(),a=S.j1.isIos(),s=S.j1.isAndroid(),l=[t,n,r,i].filter(Boolean).length>1,c=E.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!o?(0,N.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>S.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&r?(0,N.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&a?(0,N.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?(0,N.dy)`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&S.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&S.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&S.j1.openHref(this.wallet.homepage,"_blank")}};nV.styles=[nz],nH([(0,P.Cb)({type:Object})],nV.prototype,"wallet",void 0),nV=nH([(0,E.customElement)("w3m-mobile-download-links")],nV);var nY=(0,N.iv)`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let n_=class extends N.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=S.OptionsController.state;return e||t?(0,N.dy)`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return(0,N.dy)` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){S.Xs.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("WhatIsABuy")}};n_.styles=[nY],n_=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-onramp-providers-footer")],n_);var nG=(0,N.iv)`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,nX=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let nJ={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},nZ=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=S.SnackController.state.open,this.unsubscribe.push(S.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=S.SnackController.state,n=nJ[t];return(0,N.dy)`
      <wui-snackbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${n?.iconColor}
        icon=${n?.icon}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>S.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};nZ.styles=nG,nX([(0,P.SB)()],nZ.prototype,"open",void 0),nZ=nX([(0,E.customElement)("w3m-snackbar")],nZ);var n0=(0,N.iv)`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`,n1=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let n3=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.formRef=(0,eE.V)(),this.connectors=S.ConnectorController.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=this.connectors.find(e=>"AUTH"===e.type),t=this.connectors.length>1;return e?.email?(0,N.dy)`
      <form ${(0,eE.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e.socials||!t?null:(0,N.dy)`<wui-flex .padding=${["xxs","0","0","0"]}>
            <wui-separator text="or"></wui-separator>
          </wui-flex>`}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?(0,N.dy)`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?(0,N.dy)`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(![I.bq.CHAIN.EVM,I.bq.CHAIN.SOLANA].find(e=>e===S.RY.state.activeChain)){S.RouterController.push("SwitchActiveChain",{switchToChain:I.bq.CHAIN.EVM});return}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=S.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:n}=await t.provider.connectEmail({email:this.email});S.Xs.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===n?(S.Xs.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),S.RouterController.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===n&&S.RouterController.push("EmailVerifyDevice",{email:this.email})}catch(t){let e=S.j1.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":S.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){S.Xs.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};n3.styles=n0,n1([(0,P.SB)()],n3.prototype,"connectors",void 0),n1([(0,P.SB)()],n3.prototype,"email",void 0),n1([(0,P.SB)()],n3.prototype,"loading",void 0),n1([(0,P.SB)()],n3.prototype,"error",void 0),n3=n1([(0,E.customElement)("w3m-email-login-widget")],n3);var n2=(0,N.iv)`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,n5=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let n4=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.address=S.AccountController.state.address,this.profileImage=S.AccountController.state.profileImage,this.profileName=S.AccountController.state.profileName,this.disconnecting=!1,this.balance=S.AccountController.state.balance,this.balanceSymbol=S.AccountController.state.balanceSymbol,this.unsubscribe.push(S.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||S.SnackController.showError("Account not found")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");return(0,N.dy)`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${S.RY.state.activeChain===I.bq.CHAIN.EVM?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${S.j1.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){let{enableOnramp:e}=S.OptionsController.state;return e?(0,N.dy)`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}activityTemplate(){let e=S.RY.state.activeChain===I.bq.CHAIN.SOLANA;return(0,N.dy)` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?(0,N.dy)`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){let{enableSwaps:e}=S.OptionsController.state;return e&&S.RY.state.activeChain!==I.bq.CHAIN.SOLANA?(0,N.dy)`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=S.MO.getConnectedConnector(),t=S.ConnectorController.getAuthConnector(),{origin:n}=location;return!t||"AUTH"!==e||n.includes(S.bq.SECURE_SITE)?null:(0,N.dy)`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){S.RouterController.push("SwitchAddress")}handleClickPay(){S.RouterController.push("OnRampProviders")}handleClickSwap(){S.RouterController.push("Swap")}explorerBtnTemplate(){return S.AccountController.state.addressExplorerUrl?(0,N.dy)`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return(0,N.dy)`
      <wui-avatar
        alt=${(0,D.o)(this.address)}
        address=${(0,D.o)(this.address)}
        imageSrc=${(0,D.o)(null===this.profileImage?void 0:this.profileImage)}
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?E.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):E.UiHelperUtil.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=S.AccountController.state.allAccounts?.find(e=>e.address===this.address),t=S.AccountController.state.addressLabels.get(this.address);return(0,N.dy)`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,D.o)(this.address)}
        icon="${e?.type===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&S.RY.state.activeChain===I.bq.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,D.o)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,D.o)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}onCopyAddress(){try{this.address&&(S.j1.copyToClopboard(this.address),S.SnackController.showSuccess("Address copied"))}catch{S.SnackController.showError("Failed to copy")}}onTransactions(){S.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await S.ConnectionController.disconnect(),S.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),S.IN.close()}catch{S.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),S.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=S.AccountController.state.addressExplorerUrl;e&&S.j1.openHref(e,"_blank")}onGoToUpgradeView(){S.Xs.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),S.RouterController.push("UpgradeEmailWallet")}};n4.styles=n2,n5([(0,P.SB)()],n4.prototype,"address",void 0),n5([(0,P.SB)()],n4.prototype,"profileImage",void 0),n5([(0,P.SB)()],n4.prototype,"profileName",void 0),n5([(0,P.SB)()],n4.prototype,"disconnecting",void 0),n5([(0,P.SB)()],n4.prototype,"balance",void 0),n5([(0,P.SB)()],n4.prototype,"balanceSymbol",void 0),n4=n5([(0,E.customElement)("w3m-account-default-widget")],n4);var n6=(0,N.iv)`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,n9=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let n8=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.address=S.AccountController.state.address,this.profileImage=S.AccountController.state.profileImage,this.profileName=S.AccountController.state.profileName,this.smartAccountDeployed=S.AccountController.state.smartAccountDeployed,this.network=S.fB.state.caipNetwork,this.currentTab=S.AccountController.state.currentTab,this.tokenBalance=S.AccountController.state.tokenBalance,this.preferredAccountType=S.AccountController.state.preferredAccountType,this.unsubscribe.push(S.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):S.IN.close()}),S.fB.subscribeKey("caipNetwork",e=>{this.network=e})),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){S.AccountController.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=S.fz.getNetworkImage(this.network);return(0,N.dy)`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&(0,N.dy)`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,D.o)(this.address)}
        networkSrc=${(0,D.o)(e)}
        icon="chevronBottom"
        avatarSrc=${(0,D.o)(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${S.j1.isMobile()&&window.innerWidth<430?`${(window.innerWidth-48)/3}px`:"104px"}
        .tabs=${z.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){let{enableSwaps:e}=S.OptionsController.state;return e?(0,N.dy)`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>S.AccountController.fetchTokenBalance(),1e4)}listContentTemplate(){return 0===this.currentTab?(0,N.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?(0,N.dy)`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?(0,N.dy)`<w3m-account-activity-widget></w3m-account-activity-widget>`:(0,N.dy)`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=S.j1.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:n="00"}=S.j1.formatTokenBalance(e);return(0,N.dy)`<wui-balance dollars=${t} pennies=${n}></wui-balance>`}return(0,N.dy)`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!S.fB.checkIfSmartAccountEnabled()||this.preferredAccountType!==Z.y_.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:(0,N.dy)` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){S.AccountController.setCurrentTab(e)}onProfileButtonClick(){S.RouterController.push("Profile")}onBuyClick(){S.RouterController.push("OnRampProviders")}onSwapClick(){this.network?.id&&!S.bq.SWAP_SUPPORTED_NETWORKS.includes(this.network?.id)?S.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(S.Xs.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.id||"",isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("Swap"))}onReceiveClick(){S.RouterController.push("WalletReceive")}onSendClick(){S.Xs.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.id||"",isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("WalletSend")}onUpdateToSmartAccount(){S.RouterController.push("UpgradeToSmartAccount")}};n8.styles=n6,n9([(0,P.SB)()],n8.prototype,"watchTokenBalance",void 0),n9([(0,P.SB)()],n8.prototype,"address",void 0),n9([(0,P.SB)()],n8.prototype,"profileImage",void 0),n9([(0,P.SB)()],n8.prototype,"profileName",void 0),n9([(0,P.SB)()],n8.prototype,"smartAccountDeployed",void 0),n9([(0,P.SB)()],n8.prototype,"network",void 0),n9([(0,P.SB)()],n8.prototype,"currentTab",void 0),n9([(0,P.SB)()],n8.prototype,"tokenBalance",void 0),n9([(0,P.SB)()],n8.prototype,"preferredAccountType",void 0),n8=n9([(0,E.customElement)("w3m-account-wallet-features-widget")],n8);var n7=(0,N.iv)`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;let ie=class extends N.oi{render(){return(0,N.dy)`<w3m-activity-list page="account"></w3m-activity-list>`}};ie.styles=n7,ie=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-account-activity-widget")],ie);var it=(0,N.iv)`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;let ii=class extends N.oi{render(){return(0,N.dy)`${this.nftTemplate()}`}nftTemplate(){return(0,N.dy)` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){S.RouterController.push("WalletReceive")}};ii.styles=it,ii=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-account-nfts-widget")],ii);var ir=(0,N.iv)`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,io=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ia=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalance=S.AccountController.state.tokenBalance,this.unsubscribe.push(S.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?(0,N.dy)`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:(0,N.dy)` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map(e=>N.dy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){S.RouterController.push("WalletReceive")}onBuyClick(){S.Xs.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.RouterController.push("OnRampProviders")}};ia.styles=ir,io([(0,P.SB)()],ia.prototype,"tokenBalance",void 0),ia=io([(0,E.customElement)("w3m-account-tokens-widget")],ia);var is=(0,N.iv)`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`,il=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ic="last-transaction",iu=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=S.AccountController.state.address,this.transactionsByYear=S.sl.state.transactionsByYear,this.loading=S.sl.state.loading,this.empty=S.sl.state.empty,this.next=S.sl.state.next,S.sl.clearCursor(),this.unsubscribe.push(S.AccountController.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,S.sl.resetTransactions(),S.sl.fetchTransactions(e.address))}),S.fB.subscribeKey("caipNetwork",()=>{this.updateTransactionView()}),S.sl.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return(0,N.dy)` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){let e=S.fB.state.caipNetwork?.id;S.sl.state.lastNetworkInView!==e&&(S.sl.resetTransactions(),S.sl.fetchTransactions(this.address)),S.sl.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{let t=parseInt(e,10),n=Array(12).fill(null).map((e,n)=>({groupTitle:E.TransactionUtil.getTransactionGroupTitle(t,n),transactions:this.transactionsByYear[t]?.[n]})).filter(({transactions:e})=>e).reverse();return n.map(({groupTitle:e,transactions:t},i)=>{let r=i===n.length-1;return t?(0,N.dy)`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${r?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${e}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(t,r)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){let{date:n,descriptions:i,direction:r,isAllNFT:o,images:a,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=l?.length>1;return l?.length!==2||o?u?l.map((e,i)=>{let r=E.TransactionUtil.getTransferDescription(e),o=t&&i===l.length-1;return(0,N.dy)` <wui-transaction-list-item
          date=${n}
          direction=${e.direction}
          id=${o&&this.next?ic:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[a[i]]}
          .descriptions=${[r]}
        ></wui-transaction-list-item>`}):(0,N.dy)`
      <wui-transaction-list-item
        date=${n}
        .direction=${r}
        id=${t&&this.next?ic:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:(0,N.dy)`
        <wui-transaction-list-item
          date=${n}
          .direction=${r}
          id=${t&&this.next?ic:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(e,t){return e.map((n,i)=>{let r=t&&i===e.length-1;return(0,N.dy)`${this.templateRenderTransaction(n,r)}`})}emptyStateActivity(){return(0,N.dy)`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return(0,N.dy)`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?(0,N.dy)`${this.emptyStateAccount()}`:(0,N.dy)`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill((0,N.dy)` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){S.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:e}=S.OptionsController.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(S.sl.fetchTransactions(this.address),S.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next,isSmartAccount:S.AccountController.state.preferredAccountType===Z.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let e=this.shadowRoot?.querySelector(`#${ic}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){let t=I.Em.formatDate(e?.metadata?.minedAt),n=E.TransactionUtil.getTransactionDescriptions(e),i=e?.transfers,r=e?.transfers?.[0],o=!!r&&e?.transfers?.every(e=>!!e.nft_info),a=E.TransactionUtil.getTransactionImages(i);return{date:t,direction:r?.direction,descriptions:n,isAllNFT:o,images:a,status:e.metadata?.status,transfers:i,type:e.metadata?.operationType}}};iu.styles=is,il([(0,P.Cb)()],iu.prototype,"page",void 0),il([(0,P.SB)()],iu.prototype,"address",void 0),il([(0,P.SB)()],iu.prototype,"transactionsByYear",void 0),il([(0,P.SB)()],iu.prototype,"loading",void 0),il([(0,P.SB)()],iu.prototype,"empty",void 0),il([(0,P.SB)()],iu.prototype,"next",void 0),iu=il([(0,E.customElement)("w3m-activity-list")],iu);var id=(0,N.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,ih=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ip=class extends N.oi{render(){return(0,N.dy)` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?(0,N.dy)`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:(0,N.dy)`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){S.RouterController.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return(0,N.dy)`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${e?`$${E.UiHelperUtil.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,N.dy)` <wui-text variant="small-400" color="error-100">
          ${E.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:(0,N.dy)` <wui-text variant="small-400" color="fg-200">
        ${E.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?(0,N.dy)`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:(0,N.dy)`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){S.Si.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&void 0!==this.gasPrice){let e=void 0===this.token.address||Object.values(S.bq.NATIVE_TOKEN_ADDRESS).some(e=>this.token?.address===e),t=I.C6.bigNumber(this.gasPrice).shiftedBy(-this.token.quantity.decimals),n=e?I.C6.bigNumber(this.token.quantity.numeric).minus(t):I.C6.bigNumber(this.token.quantity.numeric);S.Si.setTokenAmount(Number(n.toFixed(20)))}}onBuyClick(){S.RouterController.push("OnRampProviders")}};ip.styles=id,ih([(0,P.Cb)({type:Object})],ip.prototype,"token",void 0),ih([(0,P.Cb)({type:Number})],ip.prototype,"sendTokenAmount",void 0),ih([(0,P.Cb)({type:Number})],ip.prototype,"gasPriceInUSD",void 0),ih([(0,P.Cb)({type:Number})],ip.prototype,"gasPrice",void 0),ip=ih([(0,E.customElement)("w3m-input-token")],ip);var iw=(0,N.iv)`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,ig=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let im=class extends N.oi{constructor(){super(...arguments),this.inputElementRef=(0,eE.V)(),this.instructionElementRef=(0,eE.V)(),this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=S.j1.debounce(async e=>{let t=await S.ConnectionController.getEnsAddress(e);if(S.Si.setLoading(!1),t){S.Si.setReceiverProfileName(e),S.Si.setReceiverAddress(t);let n=await S.ConnectionController.getEnsAvatar(e);n&&S.Si.setReceiverProfileImageUrl(n)}else S.Si.setReceiverAddress(e),S.Si.setReceiverProfileName(void 0),S.Si.setReceiverProfileImageUrl(void 0)})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return(0,N.dy)` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,eE.i)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,eE.i)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let e=await navigator.clipboard.readText();S.Si.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;let t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),S.Si.setLoading(!0),this.onDebouncedSearch(t.value)}};im.styles=iw,ig([(0,P.Cb)()],im.prototype,"value",void 0),ig([(0,P.SB)()],im.prototype,"instructionHidden",void 0),ig([(0,P.SB)()],im.prototype,"pasting",void 0),im=ig([(0,E.customElement)("w3m-input-address")],im);var iy=(0,N.iv)`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`,ib=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iv=class extends N.oi{render(){return(0,N.dy)` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0,D.o)(E.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${E.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?(0,N.dy)` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,D.o)(S.fz.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&S.RouterController.push("Networks",{network:e})}};iv.styles=iy,ib([(0,P.Cb)()],iv.prototype,"receiverAddress",void 0),ib([(0,P.Cb)({type:Object})],iv.prototype,"caipNetwork",void 0),ib([(0,P.Cb)({type:Number})],iv.prototype,"networkFee",void 0),iv=ib([(0,E.customElement)("w3m-wallet-send-details")],iv);var iC=(0,N.iv)`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,ix=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iA=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.open=S.fw.state.open,this.message=S.fw.state.message,this.triggerRect=S.fw.state.triggerRect,this.variant=S.fw.state.variant,this.unsubscribe.push(S.fw.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,(0,N.dy)`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};iA.styles=[iC],ix([(0,P.SB)()],iA.prototype,"open",void 0),ix([(0,P.SB)()],iA.prototype,"message",void 0),ix([(0,P.SB)()],iA.prototype,"triggerRect",void 0),ix([(0,P.SB)()],iA.prototype,"variant",void 0),iA=ix([(0,E.customElement)("w3m-tooltip")],iA);var ik=(0,N.iv)`
  :host {
    width: 100%;
    display: block;
  }
`,iT=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iS=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=S.fw.state.open,this.unsubscribe.push(S.RouterController.subscribeKey("view",()=>{S.fw.hide()}),S.IN.subscribeKey("open",e=>{e||S.fw.hide()}),S.fw.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),S.fw.hide()}render(){return(0,N.dy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,N.dy)`<slot></slot> `}onMouseEnter(){let e=this.getBoundingClientRect();this.open||S.fw.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||S.fw.hide()}};iS.styles=[ik],iT([(0,P.Cb)()],iS.prototype,"text",void 0),iT([(0,P.SB)()],iS.prototype,"open",void 0),iS=iT([(0,E.customElement)("w3m-tooltip-trigger")],iS);var iE=(0,N.iv)`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,iI=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iR=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?(0,N.dy)`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){return this.connector?.socials?.length?2===this.connector.socials.length?(0,N.dy)` <wui-flex gap="xs">
        ${this.connector.socials.slice(0,2).map(e=>(0,N.dy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
      </wui-flex>`:(0,N.dy)` <wui-list-social
      data-testid=${`social-selector-${this.connector?.socials?.[0]}`}
      @click=${()=>{this.onSocialClick(this.connector?.socials?.[0])}}
      logo=${(0,D.o)(this.connector.socials[0])}
      align="center"
      name=${`Continue with ${this.connector.socials[0]}`}
    ></wui-list-social>`:null}bottomViewTemplate(){return!this.connector?.socials?.length||this.connector?.socials.length<=2?null:this.connector?.socials.length>6?(0,N.dy)`<wui-flex gap="xs">
        ${this.connector.socials.slice(1,5).map(e=>(0,N.dy)`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
            ></wui-logo-select>`)}
        <wui-logo-select logo="more" @click=${this.onMoreSocialsClick.bind(this)}></wui-logo-select>
      </wui-flex>`:(0,N.dy)`<wui-flex gap="xs">
      ${this.connector.socials.slice(1,this.connector.socials.length).map(e=>(0,N.dy)`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
          ></wui-logo-select>`)}
    </wui-flex>`}separatorTemplate(){return this.connectors.find(e=>"WALLET_CONNECT"===e.type)?(0,N.dy)`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){S.RouterController.push("ConnectSocials")}async onSocialClick(e){if(e&&(S.AccountController.setSocialProvider(e,S.RY.state.activeChain),S.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===T.Farcaster){S.RouterController.push("ConnectingFarcaster");let e=S.ConnectorController.getAuthConnector();if(e&&!S.AccountController.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();S.AccountController.setFarcasterUrl(t,S.RY.state.activeChain)}catch(e){S.RouterController.goBack(),S.SnackController.showError(e)}}else{S.RouterController.push("ConnectingSocial");let t=S.ConnectorController.getAuthConnector();this.popupWindow=S.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){let{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)S.AccountController.setSocialWindow(this.popupWindow,S.RY.state.activeChain),this.popupWindow.location.href=n;else throw this.popupWindow?.close(),Error("Something went wrong")}}catch(e){this.popupWindow?.close(),S.SnackController.showError("Something went wrong")}}}};iR.styles=iE,iI([(0,P.SB)()],iR.prototype,"connectors",void 0),iR=iI([(0,E.customElement)("w3m-social-login-widget")],iR);let iO=class extends N.oi{render(){return(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list></w3m-connector-list>
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>
    `}};iO=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-wallet-login-list")],iO);var iN=(0,N.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,iP=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iD=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.connector=this.connectors.find(e=>"AUTH"===e.type),this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.connector=this.connectors.find(e=>"AUTH"===e.type)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.connector?.socials?(0,N.dy)` <wui-flex flexDirection="column" gap="xs">
      ${this.connector.socials.map(e=>(0,N.dy)`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
          ></wui-list-social>`)}
    </wui-flex>`:null}async onSocialClick(e){if(e&&(S.AccountController.setSocialProvider(e,S.RY.state.activeChain),S.Xs.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===T.Farcaster){S.RouterController.push("ConnectingFarcaster");let e=S.ConnectorController.getAuthConnector();if(e&&!S.AccountController.state.farcasterUrl)try{let{url:t}=await e.provider.getFarcasterUri();S.AccountController.setFarcasterUrl(t,S.RY.state.activeChain)}catch(e){S.RouterController.goBack(),S.SnackController.showError(e)}}else{S.RouterController.push("ConnectingSocial");let t=S.ConnectorController.getAuthConnector();this.popupWindow=S.j1.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){let{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(this.popupWindow&&n)S.AccountController.setSocialWindow(this.popupWindow,S.RY.state.activeChain),this.popupWindow.location.href=n;else throw this.popupWindow?.close(),Error("Something went wrong")}}catch(e){this.popupWindow?.close(),S.SnackController.showError("Something went wrong")}}}};iD.styles=iN,iP([(0,P.SB)()],iD.prototype,"connectors",void 0),iD=iP([(0,E.customElement)("w3m-social-login-list")],iD);var iB=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let i$=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>e.info?.rdns&&S.ApiController.state.excludedRDNS&&S.ApiController.state.excludedRDNS.includes(e?.info?.rdns)?null:(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?S.j1.isMobile()?S.RouterController.push("AllWallets"):S.RouterController.push("ConnectingWalletConnect"):S.RouterController.push("ConnectingExternal",{connector:e})}};iB([(0,P.SB)()],i$.prototype,"connectors",void 0),i$=iB([(0,E.customElement)("w3m-connect-announced-widget")],i$);var iU=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let ij=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=S.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e);return(0,N.dy)`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>(0,N.dy)`
          <wui-list-wallet
            imageSrc=${(0,D.o)(S.fz.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=S.MO.getRecentWallets(),n=this.connectors.map(e=>e.info?.rdns).filter(Boolean),i=t.map(e=>e.rdns).filter(Boolean),r=n.concat(i);if(r.includes("io.metamask.mobile")&&S.j1.isMobile()){let e=r.indexOf("io.metamask.mobile");r[e]="io.metamask"}return e.filter(e=>!r.includes(String(e?.rdns)))}onConnectWallet(e){S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iU([(0,P.SB)()],ij.prototype,"connectors",void 0),ij=iU([(0,E.customElement)("w3m-connect-custom-widget")],ij);let iM={filterOutDuplicatesByRDNS(e){let t=S.OptionsController.state.enableEIP6963?S.ConnectorController.state.connectors:[],n=S.MO.getRecentWallets(),i=t.map(e=>e.info?.rdns).filter(Boolean),r=n.map(e=>e.rdns).filter(Boolean),o=i.concat(r);if(o.includes("io.metamask.mobile")&&S.j1.isMobile()){let e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter(e=>!o.includes(String(e?.rdns)))},filterOutDuplicatesByIds(e){let t=S.ConnectorController.state.connectors,n=S.MO.getRecentWallets(),i=t.map(e=>e.explorerId),r=n.map(e=>e.id),o=i.concat(r);return e.filter(e=>!o.includes(e?.id))},filterOutDuplicateWallets(e){let t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)}},iL=class extends N.oi{constructor(){super(...arguments),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{featured:e}=S.ApiController.state;if(!e.length)return this.style.cssText="display: none",null;let t=iM.filterOutDuplicateWallets(e);return(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){let t=S.ConnectorController.getConnector(e.id,e.rdns);t?S.RouterController.push("ConnectingExternal",{connector:t}):S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iL=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connect-featured-widget")],iL);var iq=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iW=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"INJECTED"===e.type);return e?.length&&(1!==e.length||e[0]?.name!=="Browser Wallet"||S.j1.isMobile())?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>S.j1.isMobile()||"Browser Wallet"!==e.name?S.ConnectionController.checkInstalled(void 0,e.chain)?e.info?.rdns&&S.ApiController.state.excludedRDNS&&S.ApiController.state.excludedRDNS.includes(e?.info?.rdns)?null:(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null):null)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){S.RY.setActiveConnector(e),S.RouterController.push("ConnectingExternal",{connector:e})}};iq([(0,P.SB)()],iW.prototype,"connectors",void 0),iW=iq([(0,E.customElement)("w3m-connect-injected-widget")],iW);var iQ=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iF=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){S.RY.setActiveConnector(e),S.RouterController.push("ConnectingMultiChain")}};iQ([(0,P.SB)()],iF.prototype,"connectors",void 0),iF=iQ([(0,E.customElement)("w3m-connect-multi-chain-widget")],iF);var iK=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iz=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(e=>"coinbaseWalletSDK"!==e.id);return e?.length?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){S.RouterController.push("ConnectingExternal",{connector:e})}};iK([(0,P.SB)()],iz.prototype,"connectors",void 0),iz=iK([(0,E.customElement)("w3m-connect-external-widget")],iz);let iH=class extends N.oi{render(){let e=S.MO.getRecentWallets();return e?.length?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iH=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-connect-recent-widget")],iH);var iV=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iY=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.connectors.find(e=>"WALLET_CONNECT"===e.type))return null;let{recommended:e}=S.ApiController.state,{customWallets:t,featuredWalletIds:n}=S.OptionsController.state,{connectors:i}=S.ConnectorController.state,r=S.MO.getRecentWallets(),o=i.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type).filter(e=>"Browser Wallet"!==e.name);if(n||t||!e.length)return this.style.cssText="display: none",null;let a=o.length+r.length,s=iM.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-a));return s.length?(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        ${s.map(e=>(0,N.dy)`
            <wui-list-wallet
              imageSrc=${(0,D.o)(S.fz.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){let t=S.ConnectorController.getConnector(e.id,e.rdns);t?S.RouterController.push("ConnectingExternal",{connector:t}):S.RouterController.push("ConnectingWalletConnect",{wallet:e})}};iV([(0,P.SB)()],iY.prototype,"connectors",void 0),iY=iV([(0,E.customElement)("w3m-connect-recommended-widget")],iY);var i_=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iG=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(S.j1.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?(0,N.dy)`
      <wui-list-wallet
        imageSrc=${(0,D.o)(S.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){"WALLET_CONNECT"===e.type?S.j1.isMobile()?S.RouterController.push("AllWallets"):S.RouterController.push("ConnectingWalletConnect"):S.RouterController.push("ConnectingExternal",{connector:e})}};i_([(0,P.SB)()],iG.prototype,"connectors",void 0),iG=i_([(0,E.customElement)("w3m-connect-walletconnect-widget")],iG);var iX=(0,N.iv)`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,iJ=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let iZ=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{custom:e,recent:t,announced:n,injected:i,multiChain:r,recommended:o,featured:a,external:s}=this.getConnectorsByType();return(0,N.dy)`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connect-walletconnect-widget></w3m-connect-walletconnect-widget>
        ${t.length?(0,N.dy)`<w3m-connect-recent-widget></w3m-connect-recent-widget>`:null}
        ${r.length?(0,N.dy)`<w3m-connect-multi-chain-widget></w3m-connect-multi-chain-widget>`:null}
        ${n.length?(0,N.dy)`<w3m-connect-announced-widget></w3m-connect-announced-widget>`:null}
        ${i.length?(0,N.dy)`<w3m-connect-injected-widget></w3m-connect-injected-widget>`:null}
        ${a.length?(0,N.dy)`<w3m-connect-featured-widget></w3m-connect-featured-widget>`:null}
        ${e?.length?(0,N.dy)`<w3m-connect-custom-widget></w3m-connect-custom-widget>`:null}
        ${s.length?(0,N.dy)`<w3m-connect-external-widget></w3m-connect-external-widget>`:null}
        ${o.length?(0,N.dy)`<w3m-connect-recommended-widget></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){let{featured:e,recommended:t}=S.ApiController.state,{customWallets:n}=S.OptionsController.state,i=S.MO.getRecentWallets(),r=iM.filterOutDuplicateWallets(t),o=iM.filterOutDuplicateWallets(e),a=this.connectors.filter(e=>"MULTI_CHAIN"===e.type),s=this.connectors.filter(e=>"ANNOUNCED"===e.type),l=this.connectors.filter(e=>"INJECTED"===e.type),c=this.connectors.filter(e=>"EXTERNAL"===e.type),u=S.RY.state.activeChain!==I.bq.CHAIN.EVM||S.OptionsController.state.enableEIP6963;return{custom:n,recent:i,external:c,multiChain:a,announced:u?s:[],injected:u?l:[],recommended:r,featured:o}}};iZ.styles=iX,iJ([(0,P.SB)()],iZ.prototype,"connectors",void 0),iZ=iJ([(0,E.customElement)("w3m-connector-list")],iZ);var i0=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let i1=class extends N.oi{constructor(){super(),this.unsubscribe=[],this.connectors=S.ConnectorController.state.connectors,this.count=S.ApiController.state.count,this.unsubscribe.push(S.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),S.ApiController.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type),{allWallets:t}=S.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!S.j1.isMobile())return null;let n=S.ApiController.state.featured.length,i=this.count+n,r=i<10?i:10*Math.floor(i/10),o=r<i?`${r}+`:`${r}`;return(0,N.dy)`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}onAllWallets(){S.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),S.RouterController.push("AllWallets")}};i0([(0,P.SB)()],i1.prototype,"connectors",void 0),i0([(0,P.SB)()],i1.prototype,"count",void 0),i1=i0([(0,E.customElement)("w3m-all-wallets-widget")],i1);let i3=class extends N.oi{constructor(){super(...arguments),this.socialProvider=S.MO.getConnectedSocialProvider(),this.socialUsername=S.MO.getConnectedSocialUsername()}render(){let e=S.MO.getConnectedConnector(),t=S.ConnectorController.getAuthConnector();if(!t||"AUTH"!==e)return this.style.cssText="display: none",null;let n=t.provider.getEmail()??"";return(0,N.dy)`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||S.RouterController.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};i3=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}([(0,E.customElement)("w3m-account-auth-button")],i3),n(11557);var i2=n(79862),i5=n(91495),i4=n(61726),i6=n(76759),i9=n(45856),i8=n(72868),i7=n(50911),re=n(16535),rt=n(38914),rn=n(53119),ri=n(62643),rr=n(35671),ro=n(75063),ra=n(25011),rs=n(27991),rl=n(41833),rc=n(43148),ru=n(24990);let rd={id:1};var rh=n(40706),rp=n(6869),rf=n(79146),rw=n(88113),rg=n(7197);async function rm(e){if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let t=await e?.getProvider(),n=t?.signer?.session?.namespaces,i=n?.[C.EIP155]?.methods,r=(0,rg.YHE)(n?.[C.EIP155]?.accounts||[]);return{supportsAllNetworks:!!i?.includes(C.ADD_CHAIN_METHOD),approvedCaipNetworkIds:r}}function ry(e){if(!e)throw Error("No CAIP address provided");let t=e.split(":")[2];if(!t)throw Error("Invalid CAIP address");return t}let rb=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function rv(e){var t;let n;return t=function(e){let t=0;function n(){return e[t++]<<8|e[t++]}let i=n(),r=1,o=[0,1];for(let e=1;e<i;e++)o.push(r+=n());let a=n(),s=t;t+=a;let l=0,c=0;function u(){return 0==l&&(c=c<<8|e[t++],l=8),c>>--l&1}let d=2147483648-1,h=0;for(let e=0;e<31;e++)h=h<<1|u();let p=[],f=0,w=2147483648;for(;;){let e=Math.floor(((h-f+1)*r-1)/w),t=0,n=i;for(;n-t>1;){let i=t+n>>>1;e<o[i]?n=i:t=i}if(0==t)break;p.push(t);let a=f+Math.floor(w*o[t]/r),s=f+Math.floor(w*o[t+1]/r)-1;for(;((a^s)&1073741824)==0;)h=h<<1&d|u(),a=a<<1&d,s=s<<1&d|1;for(;a&~s&536870912;)h=1073741824&h|h<<1&d>>>1|u(),a=a<<1^1073741824,s=(1073741824^s)<<1|1073741825;f=a,w=1+s-a}let g=i-4;return p.map(t=>{switch(t-g){case 3:return g+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return g+256+(e[s++]<<8|e[s++]);case 1:return g+e[s++];default:return t-1}})}(function(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e,n)=>t[e.charCodeAt(0)]=n);let n=e.length,i=new Uint8Array(6*n>>3);for(let r=0,o=0,a=0,s=0;r<n;r++)s=s<<6|t[e.charCodeAt(r)],(a+=6)>=8&&(i[o++]=s>>(a-=8));return i}(e)),n=0,()=>t[n++]}function rC(e,t=0){let n=[];for(;;){let i=e(),r=e();if(!r)break;t+=i;for(let e=0;e<r;e++)n.push(t+e);t+=r+1}return n}function rx(e){return rk(()=>{let t=rC(e);if(t.length)return t})}function rA(e){let t=[];for(;;){let n=e();if(0==n)break;t.push(function(e,t){let n=1+t(),i=t(),r=rk(t);return rT(r.length,1+e,t).flatMap((e,t)=>{let[o,...a]=e;return Array(r[t]).fill().map((e,t)=>{let r=t*i;return[o+t*n,a.map(e=>e+r)]})})}(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(rT(1+e(),1+n,e).map(e=>[e[0],e.slice(1)]))}return t.flat()}function rk(e){let t=[];for(;;){let n=e(t.length);if(!n)break;t.push(n)}return t}function rT(e,t,n){let i=Array(e).fill().map(()=>[]);for(let r=0;r<t;r++)(function(e,t){let n=Array(e);for(let r=0,o=0;r<e;r++){var i;n[r]=o+=1&(i=t())?~i>>1:i>>1}return n})(e,n).forEach((e,t)=>i[t].push(e));return i}function rS(e){return`{${e.toString(16).toUpperCase().padStart(2,"0")}}`}function rE(e){let t=e.length;if(t<4096)return String.fromCodePoint(...e);let n=[];for(let i=0;i<t;)n.push(String.fromCodePoint(...e.slice(i,i+=4096)));return n.join("")}function rI(e,t){let n=e.length,i=n-t.length;for(let r=0;0==i&&r<n;r++)i=e[r]-t[r];return i}function rR(e){return e>>24&255}function rO(e){return 16777215&e}function rN(e){return e>=44032&&e<55204}function rP(e){i||function(){let e=rv("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");for(let[t,n]of(i=new Map(rx(e).flatMap((e,t)=>e.map(e=>[e,t+1<<24]))),r=new Set(rC(e)),o=new Map,a=new Map,rA(e))){if(!r.has(t)&&2==n.length){let[e,i]=n,r=a.get(e);r||(r=new Map,a.set(e,r)),r.set(i,t)}o.set(t,n.reverse())}}();let t=[],n=[],s=!1;function l(e){let n=i.get(e);n&&(s=!0,e|=n),t.push(e)}for(let i of e)for(;;){if(i<128)t.push(i);else if(rN(i)){let e=i-44032,t=e/588|0,n=e%588/28|0,r=e%28;l(4352+t),l(4449+n),r>0&&l(4519+r)}else{let e=o.get(i);e?n.push(...e):l(i)}if(!n.length)break;i=n.pop()}if(s&&t.length>1){let e=rR(t[0]);for(let n=1;n<t.length;n++){let i=rR(t[n]);if(0==i||e<=i){e=i;continue}let r=n-1;for(;;){let n=t[r+1];if(t[r+1]=t[r],t[r]=n,!r||(e=rR(t[--r]))<=i)break}e=rR(t[n])}}return t}function rD(e){return function(e){let t=[],n=[],i=-1,r=0;for(let o of e){let e=rR(o),s=rO(o);if(-1==i)0==e?i=s:t.push(s);else if(r>0&&r>=e)0==e?(t.push(i,...n),n.length=0,i=s):n.push(s),r=e;else{let o=function(e,t){if(e>=4352&&e<4371&&t>=4449&&t<4470)return 44032+(e-4352)*588+(t-4449)*28;if(rN(e)&&t>4519&&t<4547&&(e-44032)%28==0)return e+(t-4519);{let n=a.get(e);return n&&(n=n.get(t))?n:-1}}(i,s);o>=0?i=o:0==r&&0==e?(t.push(i),i=s):(n.push(s),r=e)}}return i>=0&&t.push(i,...n),t}(rP(e))}let rB=e=>Array.from(e);function r$(e,t){return e.P.has(t)||e.Q.has(t)}class rU extends Array{get is_emoji(){return!0}}function rj(){let e,t;if(s)return;let n=rv("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"),i=()=>rC(n),r=()=>new Set(i());s=new Map(rA(n)),l=r(),c=i(),u=new Set(i().map(e=>c[e])),c=new Set(c),d=r(),r();let o=rx(n),a=n(),y=()=>new Set(i().flatMap(e=>o[e]).concat(i()));h=rk(e=>{let t=rk(n).map(e=>e+96);if(t.length){let i=e>=a;return t[0]-=32,t=rE(t),i&&(t=`Restricted[${t}]`),{N:t,P:y(),Q:y(),M:!n(),R:i}}}),p=r(),f=new Map;let b=i().concat(rB(p)).sort((e,t)=>e-t);for(let{V:e,M:t}of(b.forEach((e,t)=>{let i=n(),r=b[t]=i?b[t-i]:{V:[],M:new Map};r.V.push(e),p.has(e)||f.set(e,r)}),new Set(f.values()))){let n=[];for(let t of e){let e=h.filter(e=>r$(e,t)),i=n.find(({G:t})=>e.some(e=>t.has(e)));i||(i={G:new Set,V:[]},n.push(i)),i.V.push(t),e.forEach(e=>i.G.add(e))}let i=n.flatMap(e=>rB(e.G));for(let{G:e,V:r}of n){let n=new Set(i.filter(t=>!e.has(t)));for(let e of r)t.set(e,n)}}let v=new Set,C=new Set,x=e=>v.has(e)?C.add(e):v.add(e);for(let e of h){for(let t of e.P)x(t);for(let t of e.Q)x(t)}for(let e of v)f.has(e)||C.has(e)||f.set(e,1);for(let i of(w=new Set(rB(v).concat(rB(rP(v).map(rO)))),g=(e=[],t=rC(n),function t({S:n,B:i},r,o){if(!(4&n)||o!==r[r.length-1])for(let a of(2&n&&(o=r[r.length-1]),1&n&&e.push(r),i))for(let e of a.Q)t(a,[...r,e],o)}(function e(i){return{S:n(),B:rk(()=>{let i=rC(n).map(e=>t[e]);if(i.length)return e(i)}),Q:i}}([]),[]),e).map(e=>rU.from(e)).sort(rI),m=new Map,g)){let e=[m];for(let t of i){let n=e.map(e=>{let n=e.get(t);return n||(n=new Map,e.set(t,n)),n});65039===t?e.push(...n):e=n}for(let t of e)t.V=i}}function rM(e){return(rW(e)?"":`${rL(rq([e]))} `)+rS(e)}function rL(e){return`"${e}"\u200E`}function rq(e,t=rS){var n;let i=[];n=e[0],rj(),c.has(n)&&i.push("◌");let r=0,o=e.length;for(let n=0;n<o;n++){let o=e[n];rW(o)&&(i.push(rE(e.slice(r,n))),i.push(t(o)),r=n+1)}return i.push(rE(e.slice(r,o))),i.join("")}function rW(e){return rj(),d.has(e)}function rQ(e){return Error(`disallowed character: ${rM(e)}`)}function rF(e,t){let n=rM(t),i=h.find(e=>e.P.has(t));return i&&(n=`${i.N} ${n}`),Error(`illegal mixture: ${e.N} + ${n}`)}function rK(e){return Error(`illegal placement: ${e}`)}function rz(e){return e.filter(e=>65039!=e)}function rH(e){var t;return(t=function(e,t,n){if(!e)return[];rj();let i=0;return e.split(".").map(e=>{let r=function(e){let t=[];for(let n=0,i=e.length;n<i;){let i=e.codePointAt(n);n+=i<65536?1:2,t.push(i)}return t}(e),o={input:r,offset:i};i+=r.length+1;try{let e,i=o.tokens=function(e,t,n){let i=[],r=[];for(e=e.slice().reverse();e.length;){let o=function(e,t){let n,i=m,r=e.length;for(;r&&(i=i.get(e[--r]));){let{V:t}=i;t&&(n=t,e.length=r)}return n}(e);if(o)r.length&&(i.push(t(r)),r=[]),i.push(n(o));else{let t=e.pop();if(w.has(t))r.push(t);else{let e=s.get(t);if(e)r.push(...e);else if(!l.has(t))throw rQ(t)}}}return r.length&&i.push(t(r)),i}(r,t,n),a=i.length;if(!a)throw Error("empty label");let d=o.output=i.flat();if(!function(e){for(let t=e.lastIndexOf(95);t>0;)if(95!==e[--t])throw Error("underscore allowed only at start")}(d),!(o.emoji=a>1||i[0].is_emoji)&&d.every(e=>e<128))!function(e){if(e.length>=4&&45==e[2]&&45==e[3])throw Error(`invalid label extension: "${rE(e.slice(0,4))}"`)}(d),e="ASCII";else{let t=i.flatMap(e=>e.is_emoji?[]:e);if(t.length){if(c.has(d[0]))throw rK("leading combining mark");for(let e=1;e<a;e++){let t=i[e];if(!t.is_emoji&&c.has(t[0]))throw rK(`emoji + combining mark: "${rE(i[e-1])} + ${rq([t[0]])}"`)}!function(e){let t=e[0],n=rb.get(t);if(n)throw rK(`leading ${n}`);let i=e.length,r=-1;for(let o=1;o<i;o++){t=e[o];let i=rb.get(t);if(i){if(r==o)throw rK(`${n} + ${i}`);r=o+1,n=i}}if(r==i)throw rK(`trailing ${n}`)}(d);let n=rB(new Set(t)),[r]=function(e){let t=h;for(let n of e){let e=t.filter(e=>r$(e,n));if(!e.length){if(h.some(e=>r$(e,n)))throw rF(t[0],n);throw rQ(n)}if(t=e,1==e.length)break}return t}(n);(function(e,t){for(let n of t)if(!r$(e,n))throw rF(e,n);if(e.M){let e=rP(t).map(rO);for(let t=1,n=e.length;t<n;t++)if(u.has(e[t])){let i=t+1;for(let r;i<n&&u.has(r=e[i]);i++)for(let n=t;n<i;n++)if(e[n]==r)throw Error(`duplicate non-spacing marks: ${rM(r)}`);if(i-t>4)throw Error(`excessive non-spacing marks: ${rL(rq(e.slice(t-1,i)))} (${i-t}/4)`);t=i}}})(r,t),function(e,t){let n;let i=[];for(let e of t){let t=f.get(e);if(1===t)return;if(t){let i=t.M.get(e);if(!(n=n?n.filter(e=>i.has(e)):rB(i)).length)return}else i.push(e)}if(n){for(let t of n)if(i.every(e=>r$(t,e)))throw Error(`whole-script confusable: ${e.N}/${t.N}`)}}(r,n),e=r.N}else e="Emoji"}o.type=e}catch(e){o.error=e}return o})}(e,rD,rz)).map(({input:e,error:n,output:i})=>{if(n){let i=n.message;throw Error(1==t.length?i:`Invalid label ${rL(rq(e))}: ${i}`)}return rE(i)}).join(".")}class rV{constructor(e){this.appKit=void 0,this.options=void 0,this.chain=I.bq.CHAIN.EVM,this.defaultChain=void 0,this.tokens=A.getCaipTokens(this.options?.tokens),this.getCaipDefaultChain=this.options?.defaultChain,this.siweControllerClient=this.options?.siweConfig;let{wagmiConfig:t,defaultChain:i}=e;if(!t)throw Error("wagmiConfig is undefined");this.wagmiConfig=t,this.defaultChain=function(e){if(e)return{id:`${C.EIP155}:${e.id}`,name:e.name,imageId:x.EIP155NetworkImageIds[e.id],chain:I.bq.CHAIN.EVM}}(i),this.siweControllerClient=e.siweConfig,this.networkControllerClient={switchCaipNetwork:async e=>{let t=I.p1.caipNetworkIdToNumber(e?.id);t&&await (0,i5.c)(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise(e=>{let t=new Map(this.wagmiConfig.state.connections).get(this.wagmiConfig.state.current||"");t?.connector?.id===C.AUTH_CONNECTOR_ID?e({supportsAllNetworks:!1,approvedCaipNetworkIds:x.WalletConnectRpcChainIds.map(e=>`${C.EIP155}:${e}`)}):t?.connector?.id===C.WALLET_CONNECT_CONNECTOR_ID&&e(rm(this.wagmiConfig.connectors.find(e=>e.id===C.WALLET_CONNECT_CONNECTOR_ID))),e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},this.connectionControllerClient={connectWalletConnect:async e=>{let t=this.options?.siweConfig,i=this.wagmiConfig.connectors.find(e=>e.id===C.WALLET_CONNECT_CONNECTOR_ID);if(!i)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");let r=await i.getProvider();r.on("display_uri",t=>{e(t)});let o=await r.signer?.client?.core?.crypto?.getClientId();o&&this.appKit?.setClientId(o);let a=I.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id),s=await t?.getMessageParams?.();if(t?.options?.enabled&&"function"==typeof r?.authenticate&&s&&Object.keys(s||{}).length>0){let{SIWEController:e,getDidChainId:o,getDidAddress:l}=await Promise.resolve().then(n.bind(n,65852));await i.setRequestedChainsIds(s.chains);let c=s.chains;a&&(c=[a,...s.chains.filter(e=>e!==a)]);let u=await r.authenticate({nonce:await t.getNonce(),methods:[...i2.lI],...s,chains:c}),d=u?.auths?.[0];if(d){let{p:t,s:n}=d,i=o(t.iss)||"",a=l(t.iss);a&&i&&e.setSession({address:a,chainId:parseInt(i,10)});try{let i=r.signer.client.formatAuthMessage({request:t,iss:t.iss});await e.verifyMessage({message:i,signature:n.s,cacao:d})}catch(t){throw console.error("Error verifying message",t),await r.disconnect().catch(console.error),await e.signOut().catch(console.error),t}}this.wagmiConfig.state.current=""}await (0,i4.$)(this.wagmiConfig,{connector:i,chainId:a})},connectExternal:async({id:e,provider:t,info:n})=>{let i=this.wagmiConfig.connectors.find(t=>t.id===e);if(!i)throw Error("connectionControllerClient:connectExternal - connector is undefined");this.appKit?.setClientId(null),t&&n&&i.id===C.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:t,info:n});let r=I.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id);await (0,i4.$)(this.wagmiConfig,{connector:i,chainId:r})},checkInstalled:e=>{let t=this.appKit?.getConnectors().find(e=>"INJECTED"===e.type);return e?!!t&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)]):!!window.ethereum},disconnect:async()=>{if(await (0,i6.z)(this.wagmiConfig),this.appKit?.setClientId(null),this.options?.siweConfig?.options?.signOutOnDisconnect){let{SIWEController:e}=await Promise.resolve().then(n.bind(n,65852));await e.signOut()}},signMessage:async e=>{let t=ry(this.appKit?.getCaipAddress()||"");return(0,i9.l)(this.wagmiConfig,{message:e,account:t})},estimateGas:async e=>{if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error("connectionControllerClient:estimateGas - invalid chain namespace");try{return await (0,i8.Q)(this.wagmiConfig,{account:e.address,to:e.to,data:e.data,type:"legacy"})}catch(e){return 0n}},sendTransaction:async e=>{if(e.chainNamespace&&"eip155"!==e.chainNamespace)throw Error("connectionControllerClient:sendTransaction - invalid chain namespace");let{chainId:t}=(0,i7.D)(this.wagmiConfig),n={account:e.address,to:e.to,value:e.value,gas:e.gas,gasPrice:e.gasPrice,data:e.data,chainId:t,type:"legacy"};await (0,rh.Z)(this.wagmiConfig,n);let i=await (0,rp.T)(this.wagmiConfig,n);return await (0,re.e)(this.wagmiConfig,{hash:i,timeout:25e3}),i},writeContract:async e=>{let t=ry(this.appKit?.getCaipAddress()||""),n=I.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id);return await (0,rt.n)(this.wagmiConfig,{chainId:n,address:e.tokenAddress,account:t,abi:e.abi,functionName:e.method,args:[e.receiverAddress,e.tokenAmount]})},getEnsAddress:async e=>{try{let t=I.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id),n=!1,i=!1;return e?.endsWith(I.bq.WC_NAME_SUFFIX)&&(i=await this.appKit?.resolveWalletConnectName(e)||!1),t===rd.id&&(n=await (0,rn.O)(this.wagmiConfig,{name:rH(e),chainId:t})),n||i||!1}catch{return!1}},getEnsAvatar:async e=>{let t=I.p1.caipNetworkIdToNumber(this.appKit?.getCaipNetwork()?.id);return t===rd.id&&(await (0,ri.r)(this.wagmiConfig,{name:rH(e),chainId:t})||!1)},parseUnits:rf.v,formatUnits:rw.b}}construct(e,t){if(!t.projectId)throw Error("projectId is undefined");this.appKit=e,this.options=t,this.tokens=A.getCaipTokens(t.tokens),this.syncRequestedNetworks([...this.wagmiConfig.chains]),this.syncConnectors(this.wagmiConfig.connectors),this.initAuthConnectorListeners([...this.wagmiConfig.connectors]),(0,rr.f)(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),(0,ro.u)(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})}),this.appKit?.setEIP6963Enabled(!1!==t.enableEIP6963),this.appKit?.subscribeShouldUpdateToAddress(e=>{if(e){let t=ra.E(this.wagmiConfig),n=t[0]?.connector;n&&rs.y(this.wagmiConfig,{connector:n}).then(t=>this.syncAccount({address:e,isConnected:!0,addresses:t.accounts,connector:n,chainId:t.chainId}))}})}subscribeState(e){return this.appKit?.subscribeState(t=>e({...t,selectedNetworkId:I.p1.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${C.EIP155}:${e.id}`,name:e.name,imageId:x.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id],chain:this.chain}));this.appKit?.setRequestedCaipNetworks(t??[],this.chain)}async syncAccount({address:e,chainId:t,connector:n,addresses:i,status:r}){let o=`${C.EIP155}:${t}:${e}`;this.appKit?.getCaipAddress()!==o&&("connected"===r&&e&&t?(this.syncNetwork(e,t,!0),this.appKit?.setIsConnected(!0,this.chain),this.appKit?.setCaipAddress(o,this.chain),await Promise.all([this.syncProfile(e,t),this.syncBalance(e,t),this.syncConnectedWalletInfo(n),this.appKit?.setApprovedCaipNetworksData(this.chain)]),n&&this.syncConnectedWalletInfo(n),n?.id!==C.AUTH_CONNECTOR_ID&&i?.length&&this.appKit?.setAllAccounts(i.map(e=>({address:e,type:"eoa"})),this.chain)):"disconnected"===r&&(this.appKit?.resetAccount(this.chain),this.appKit?.resetWcConnection(),this.appKit?.resetNetwork(),this.appKit?.setAllAccounts([],this.chain),this.appKit?.setIsConnected(!1,this.chain)))}async syncNetwork(e,t,n){let i=this.wagmiConfig.chains.find(e=>e.id===t);if(i||t){let r=i?.name??t?.toString(),o=Number(i?.id??t),a=`${C.EIP155}:${o}`;if(this.appKit?.setCaipNetwork({id:a,name:r,imageId:x.EIP155NetworkImageIds[o],imageUrl:this.options?.chainImages?.[o],chain:this.chain}),n&&e&&t){let n=`${C.EIP155}:${o}:${e}`;if(this.appKit?.setCaipAddress(n,this.chain),i?.blockExplorers?.default?.url){let t=`${i.blockExplorers.default.url}/address/${e}`;this.appKit?.setAddressExplorerUrl(t,this.chain)}else this.appKit?.setAddressExplorerUrl(void 0,this.chain);await this.syncBalance(e,t)}}}async syncWalletConnectName(e){if(!this.appKit)throw Error("syncWalletConnectName - appKit is undefined");try{let t=await this.appKit.getWalletConnectName(e);if(t[0]){let e=t[0];this.appKit?.setProfileName(e.name,this.chain)}else this.appKit?.setProfileName(null,this.chain)}catch{this.appKit?.setProfileName(null,this.chain)}}async syncProfile(e,t){if(!this.appKit)throw Error("syncProfile - appKit is undefined");try{let{name:t,avatar:n}=await this.appKit.fetchIdentity({address:e});this.appKit?.setProfileName(t,this.chain),this.appKit?.setProfileImage(n,this.chain),t||await this.syncWalletConnectName(e)}catch{if(t===rd.id){let n=await (0,rl.w)(this.wagmiConfig,{address:e,chainId:t});if(n){this.appKit?.setProfileName(n,this.chain);let e=await (0,ri.r)(this.wagmiConfig,{name:n,chainId:t});e&&this.appKit?.setProfileImage(e,this.chain)}else await this.syncWalletConnectName(e),this.appKit?.setProfileImage(null,this.chain)}else await this.syncWalletConnectName(e),this.appKit?.setProfileImage(null,this.chain)}}async syncBalance(e,t){let n=this.wagmiConfig.chains.find(e=>e.id===t);if(n){let t=await (0,rc.s)(this.wagmiConfig,{address:e,chainId:n.id,token:this.options?.tokens?.[n.id]?.address});this.appKit?.setBalance(t.formatted,t.symbol,this.chain);return}this.appKit?.setBalance(void 0,void 0,this.chain)}async syncConnectedWalletInfo(e){if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===C.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){let t=await e.getProvider();t.session&&this.appKit?.setConnectedWalletInfo({...t.session.peer.metadata,name:t.session.peer.metadata.name,icon:t.session.peer.metadata.icons?.[0]},this.chain)}else{let t=this.appKit?.getConnectors().find(t=>t.id===e.id);this.appKit?.setConnectedWalletInfo({name:e.name,icon:e.icon||this.appKit.getConnectorImage(t)},this.chain)}}syncConnectors(e){let t=new Set,n=e.filter(e=>!t.has(e.id)&&t.add(e.id)),i=[];n.forEach(({id:e,name:t,type:n,icon:r})=>{C.AUTH_CONNECTOR_ID!==e&&i.push({id:e,explorerId:x.ConnectorExplorerIds[e],imageUrl:this.options?.connectorImages?.[e]??r,name:x.ConnectorNamesMap[e]??t,imageId:x.ConnectorImageIds[e],type:x.ConnectorTypesMap[n]??"EXTERNAL",info:{rdns:e},chain:this.chain})}),this.appKit?.setConnectors(i),this.syncAuthConnector(n)}async syncAuthConnector(e){let t=e.find(({id:e})=>e===C.AUTH_CONNECTOR_ID);if(t){let e=await t.getProvider();this.appKit?.addConnector({id:C.AUTH_CONNECTOR_ID,type:"AUTH",name:"Auth",provider:e,email:t.email,socials:t.socials,showWallets:t.showWallets,chain:this.chain,walletFeatures:t.walletFeatures})}}async initAuthConnectorListeners(e){let t=e.find(({id:e})=>e===C.AUTH_CONNECTOR_ID);t&&(await this.listenAuthConnector(t),await this.listenModal(t))}async listenAuthConnector(e){if("undefined"!=typeof window&&e){this.appKit?.setLoading(!0);let t=await e.getProvider(),n=t.getLoginEmailUsed();this.appKit?.setLoading(n),n&&this.appKit?.setIsConnected(!1,this.chain),t.onRpcRequest(e=>{Z.$D.checkIfRequestExists(e)?Z.$D.checkIfRequestIsSafe(e)||this.appKit?.handleUnsafeRPCRequest():(this.appKit?.open(),console.error(Z.y_.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:e.method}),setTimeout(()=>{this.appKit?.showErrorMessage(Z.y_.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),t.rejectRpcRequests())}),t.onRpcError(()=>{this.appKit?.isOpen()&&(this.appKit?.isTransactionStackEmpty()?this.appKit?.close():this.appKit?.popTransactionStack(!0))}),t.onRpcSuccess((e,t)=>{Z.$D.checkIfRequestIsSafe(t)||(this.appKit?.isTransactionStackEmpty()?this.appKit?.close():this.appKit?.popTransactionStack())}),t.onNotConnected(()=>{this.appKit?.getIsConnectedState()||(this.appKit?.setIsConnected(!1,this.chain),this.appKit?.setLoading(!1))}),t.onIsConnected(e=>{this.appKit?.setIsConnected(!0,this.chain),this.appKit?.setSmartAccountDeployed(!!e.smartAccountDeployed,this.chain),this.appKit?.setPreferredAccountType(e.preferredAccountType,this.chain),this.appKit?.setLoading(!1),this.appKit?.setAllAccounts(e.accounts||[{address:e.address,type:e.preferredAccountType||"eoa"}],this.chain)}),t.onGetSmartAccountEnabledNetworks(e=>{this.appKit?.setSmartAccountEnabledNetworks(e,this.chain)}),t.onSetPreferredAccount(({address:t,type:n})=>{t&&(this.appKit?.setPreferredAccountType(n,this.chain),(0,ru.G)(this.wagmiConfig,{connectors:[e]}))})}}async listenModal(e){let t=await e.getProvider();this.subscribeState(e=>{e.open||t.rejectRpcRequests()})}}function rY(){if(!y)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await y?.open(e)},close:async function(){await y?.close()}}}function r_(e){return v=new rV({wagmiConfig:e.wagmiConfig,siweConfig:e.siweConfig,defaultChain:e.defaultChain}),y=b=new O({...e,defaultChain:v.defaultChain,adapters:[v],sdkType:"w3m",sdkVersion:`react-wagmi-${C.VERSION}`}),b}n(50026)},2416:function(e,t,n){n.d(t,{O:function(){return f}});var i=n(78258),r=n(65281),o=n(98056),a=n(7919),s=n(86030),l=n(66206),c=n(76461),u=n(60311),d=n(46190),h=n(2630),p=n(2762);async function f(e,{blockNumber:t,blockTag:n,coinType:f,name:w,gatewayUrls:g,strict:m,universalResolverAddress:y}){let b=y;if(!b){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");b=(0,a.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a=(0,o.R)({abi:i.X$,functionName:"addr",...null!=f?{args:[(0,u.V)(w),BigInt(f)]}:{args:[(0,u.V)(w)]}}),c={address:b,abi:i.k3,functionName:"resolve",args:[(0,l.NC)((0,d.T)(w)),a],blockNumber:t,blockTag:n},m=(0,h.s)(e,p.L,"readContract"),y=g?await m({...c,args:[...c.args,g]}):await m(c);if("0x"===y[0])return null;let v=(0,r.k)({abi:i.X$,args:null!=f?[(0,u.V)(w),BigInt(f)]:void 0,functionName:"addr",data:y[0]});if("0x"===v||"0x00"===(0,s.f)(v))return null;return v}catch(e){if(m)throw e;if((0,c.c)(e,"resolve"))return null;throw e}}},57950:function(e,t,n){n.d(t,{r:function(){return k}});var i=n(2762),r=n(50628);class o extends r.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`],name:"EnsAvatarInvalidMetadataError"})}}class a extends r.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:"EnsAvatarInvalidNftUriError"})}}class s extends r.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:"EnsAvatarUriResolutionError"})}}class l extends r.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:"EnsAvatarUnsupportedNamespaceError"})}}let c=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,u=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,d=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,h=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function p(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e})}}function f(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function w({uri:e,gatewayUrls:t}){let n=d.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};let i=f(t?.ipfs,"https://ipfs.io"),r=f(t?.arweave,"https://arweave.net"),o=e.match(c),{protocol:a,subpath:l,target:p,subtarget:w=""}=o?.groups||{},g="ipns:/"===a||"ipns/"===l,m="ipfs:/"===a||"ipfs/"===l||u.test(e);if(e.startsWith("http")&&!g&&!m){let n=e;return t?.arweave&&(n=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((g||m)&&p)return{uri:`${i}/${g?"ipns":"ipfs"}/${p}${w}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&p)return{uri:`${r}/${p}${w||""}`,isOnChain:!1,isEncoded:!1};let y=e.replace(h,"");if(y.startsWith("<svg")&&(y=`data:image/svg+xml;base64,${btoa(y)}`),y.startsWith("data:")||y.startsWith("{"))return{uri:y,isOnChain:!0,isEncoded:!1};throw new s({uri:e})}function g(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new o({data:e});return e.image||e.image_url||e.image_data}async function m({gatewayUrls:e,uri:t}){try{let n=await fetch(t).then(e=>e.json());return await y({gatewayUrls:e,uri:g(n)})}catch{throw new s({uri:t})}}async function y({gatewayUrls:e,uri:t}){let{uri:n,isOnChain:i}=w({uri:t,gatewayUrls:e});if(i||await p(n))return n;throw new s({uri:t})}async function b(e,{nft:t}){if("erc721"===t.namespace)return(0,i.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,i.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new l({namespace:t.namespace})}async function v(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?C(e,{gatewayUrls:t,record:n}):y({uri:n,gatewayUrls:t})}async function C(e,{gatewayUrls:t,record:n}){let i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[n,i,r]=t.split("/"),[o,s]=n.split(":"),[l,c]=i.split(":");if(!o||"eip155"!==o.toLowerCase())throw new a({reason:"Only EIP-155 supported"});if(!s)throw new a({reason:"Chain ID not found"});if(!c)throw new a({reason:"Contract address not found"});if(!r)throw new a({reason:"Token ID not found"});if(!l)throw new a({reason:"ERC namespace not found"});return{chainID:Number.parseInt(s),namespace:l.toLowerCase(),contractAddress:c,tokenID:r}}(n),{uri:r,isOnChain:o,isEncoded:s}=w({uri:await b(e,{nft:i}),gatewayUrls:t});if(o&&(r.includes("data:application/json;base64,")||r.startsWith("{")))return y({uri:g(JSON.parse(s?atob(r.replace("data:application/json;base64,","")):r)),gatewayUrls:t});let l=i.tokenID;return"erc1155"===i.namespace&&(l=l.replace("0x","").padStart(64,"0")),m({gatewayUrls:t,uri:r.replace(/(?:0x)?{id}/,l)})}var x=n(2630),A=n(2615);async function k(e,{blockNumber:t,blockTag:n,assetGatewayUrls:i,name:r,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,x.s)(e,A.g,"getEnsText")({blockNumber:t,blockTag:n,key:"avatar",name:r,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await v(e,{record:l,gatewayUrls:i})}catch{return null}}},6789:function(e,t,n){n.d(t,{w:function(){return u}});var i=n(78258),r=n(7919),o=n(66206),a=n(76461),s=n(46190),l=n(2630),c=n(2762);async function u(e,{address:t,blockNumber:n,blockTag:u,gatewayUrls:d,strict:h,universalResolverAddress:p}){let f=p;if(!f){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");f=(0,r.L)({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}let w=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let r={address:f,abi:i.du,functionName:"reverse",args:[(0,o.NC)((0,s.T)(w))],blockNumber:n,blockTag:u},a=(0,l.s)(e,c.L,"readContract"),[h,p]=d?await a({...r,args:[...r.args,d]}):await a(r);if(t.toLowerCase()!==p.toLowerCase())return null;return h}catch(e){if(h)throw e;if((0,a.c)(e,"reverse"))return null;throw e}}},88452:function(e,t,n){n.d(t,{S:function(){return l}});var i=n(7919),r=n(66206),o=n(46190),a=n(2630),s=n(2762);async function l(e,{blockNumber:t,blockTag:n,name:l,universalResolverAddress:c}){let u=c;if(!u){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");u=(0,i.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[d]=await (0,a.s)(e,s.L,"readContract")({address:u,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,r.NC)((0,o.T)(l))],blockNumber:t,blockTag:n});return d}},2615:function(e,t,n){n.d(t,{g:function(){return p}});var i=n(78258),r=n(65281),o=n(98056),a=n(7919),s=n(66206),l=n(76461),c=n(60311),u=n(46190),d=n(2630),h=n(2762);async function p(e,{blockNumber:t,blockTag:n,name:p,key:f,gatewayUrls:w,strict:g,universalResolverAddress:m}){let y=m;if(!y){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");y=(0,a.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let a={address:y,abi:i.k3,functionName:"resolve",args:[(0,s.NC)((0,u.T)(p)),(0,o.R)({abi:i.nZ,functionName:"text",args:[(0,c.V)(p),f]})],blockNumber:t,blockTag:n},l=(0,d.s)(e,h.L,"readContract"),g=w?await l({...a,args:[...a.args,w]}):await l(a);if("0x"===g[0])return null;let m=(0,r.k)({abi:i.nZ,functionName:"text",data:g[0]});return""===m?null:m}catch(e){if(g)throw e;if((0,l.c)(e,"resolve"))return null;throw e}}},54576:function(e,t,n){n.d(t,{A:function(){return a}});var i=n(79149),r=n(66206),o=n(47855);async function a(e,t){let{address:n,abi:a,args:s,eventName:l,fromBlock:c,strict:u,toBlock:d}=t,h=(0,o.g)(e,{method:"eth_newFilter"}),p=l?(0,i.O)({abi:a,args:s,eventName:l}):void 0,f=await e.request({method:"eth_newFilter",params:[{address:n,fromBlock:"bigint"==typeof c?(0,r.eC)(c):c,toBlock:"bigint"==typeof d?(0,r.eC)(d):d,topics:p}]});return{abi:a,args:s,eventName:l,id:f,request:h(f),strict:!!u,type:"event"}}},89466:function(e,t,n){n.d(t,{W:function(){return r}});var i=n(47855);async function r(e){let t=(0,i.g)(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}},65252:function(e,t,n){n.d(t,{c:function(){return o}});var i=n(72116),r=n(66206);async function o(e,{blockHash:t,blockNumber:n,blockTag:o="latest"}={}){let a;let s=void 0!==n?(0,r.eC)(n):void 0;return a=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]},{dedupe:!0}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[s||o]},{dedupe:!!s}),(0,i.ly)(a)}},92788:function(e,t,n){n.d(t,{C:function(){return r}});var i=n(66206);async function r(e,{address:t,blockNumber:n,blockTag:r="latest"}){let o=void 0!==n?(0,i.eC)(n):void 0,a=await e.request({method:"eth_getCode",params:[t,o||r]},{dedupe:!!o});if("0x"!==a)return a}},44191:function(e,t,n){n.d(t,{m:function(){return a}});var i=n(8710),r=n(2630),o=n(46624);async function a(e,t){let{abi:n,address:a,args:s,blockHash:l,eventName:c,fromBlock:u,toBlock:d,strict:h}=t,p=c?(0,i.mE)({abi:n,name:c}):void 0,f=p?void 0:n.filter(e=>"event"===e.type);return(0,r.s)(e,o.y,"getLogs")({address:a,args:s,blockHash:l,event:p,events:f,fromBlock:u,toBlock:d,strict:h})}},71019:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(66206);async function r(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:o}){var a;let s=n?(0,i.eC)(n):void 0;return{baseFeePerGas:(a=await e.request({method:"eth_feeHistory",params:[(0,i.eC)(t),s||r,o]},{dedupe:!!s})).baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:a.gasUsedRatio,oldestBlock:BigInt(a.oldestBlock),reward:a.reward?.map(e=>e.map(e=>BigInt(e)))}}},27201:function(e,t,n){n.d(t,{K:function(){return o}});var i=n(95149),r=n(7181);async function o(e,{filter:t}){let n="strict"in t&&t.strict,o=await t.request({method:"eth_getFilterChanges",params:[t.id]});if("string"==typeof o[0])return o;let a=o.map(e=>(0,r.U)(e));return"abi"in t&&t.abi?(0,i.h)({abi:t.abi,logs:a,strict:n}):a}},46624:function(e,t,n){n.d(t,{y:function(){return s}});var i=n(79149),r=n(95149),o=n(66206),a=n(7181);async function s(e,{address:t,blockHash:n,fromBlock:s,toBlock:l,event:c,events:u,args:d,strict:h}={}){let p=u??(c?[c]:void 0),f=[];p&&(f=[p.flatMap(e=>(0,i.O)({abi:[e],eventName:e.name,args:u?void 0:d}))],c&&(f=f[0]));let w=(n?await e.request({method:"eth_getLogs",params:[{address:t,topics:f,blockHash:n}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:f,fromBlock:"bigint"==typeof s?(0,o.eC)(s):s,toBlock:"bigint"==typeof l?(0,o.eC)(l):l}]})).map(e=>(0,a.U)(e));return p?(0,r.h)({abi:p,args:d,logs:w,strict:h??!1}):w}},35240:function(e,t,n){n.d(t,{S:function(){return o}});var i=n(66206),r=n(72116);async function o(e,{address:t,blockNumber:n,blockTag:o,storageKeys:a}){var s;let l=void 0!==n?(0,i.eC)(n):void 0;return{...s=await e.request({method:"eth_getProof",params:[t,a,l||(o??"latest")]}),balance:s.balance?BigInt(s.balance):void 0,nonce:s.nonce?(0,r.ly)(s.nonce):void 0,storageProof:s.storageProof?s.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}},5154:function(e,t,n){n.d(t,{Y:function(){return r}});var i=n(66206);async function r(e,{address:t,blockNumber:n,blockTag:r="latest",slot:o}){let a=void 0!==n?(0,i.eC)(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,o,a||r]})}},98854:function(e,t,n){n.d(t,{a:function(){return a}});var i=n(2630),r=n(39404),o=n(28886);async function a(e,{hash:t,transactionReceipt:n}){let[a,s]=await Promise.all([(0,i.s)(e,r.z,"getBlockNumber")({}),t?(0,i.s)(e,o.f,"getTransaction")({hash:t}):void 0]),l=n?.blockNumber||s?.blockNumber;return l?a-l+1n:0n}},16111:function(e,t,n){n.d(t,{A:function(){return p}});var i=n(78258),r=n(34666),o=n(50628),a=n(17803),s=n(65281),l=n(98056),c=n(7919),u=n(95595),d=n(2630),h=n(2762);async function p(e,t){let{allowFailure:n=!0,batchSize:p,blockNumber:f,blockTag:w,multicallAddress:g,stateOverride:m}=t,y=t.contracts,b=p??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),v=g;if(!v){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");v=(0,c.L)({blockNumber:f,chain:e.chain,contract:"multicall3"})}let C=[[]],x=0,A=0;for(let e=0;e<y.length;e++){let{abi:t,address:i,args:r,functionName:o}=y[e];try{let e=(0,l.R)({abi:t,args:r,functionName:o});A+=(e.length-2)/2,b>0&&A>b&&C[x].length>0&&(x++,A=(e.length-2)/2,C[x]=[]),C[x]=[...C[x],{allowFailure:!0,callData:e,target:i}]}catch(a){let e=(0,u.S)(a,{abi:t,address:i,args:r,docsPath:"/docs/contract/multicall",functionName:o});if(!n)throw e;C[x]=[...C[x],{allowFailure:!0,callData:"0x",target:i}]}}let k=await Promise.allSettled(C.map(t=>(0,d.s)(e,h.L,"readContract")({abi:i.F8,address:v,args:[t],blockNumber:f,blockTag:w,functionName:"aggregate3",stateOverride:m}))),T=[];for(let e=0;e<k.length;e++){let t=k[e];if("rejected"===t.status){if(!n)throw t.reason;for(let n=0;n<C[e].length;n++)T.push({status:"failure",error:t.reason,result:void 0});continue}let i=t.value;for(let t=0;t<i.length;t++){let{returnData:o,success:l}=i[t],{callData:c}=C[e][t],{abi:d,address:h,functionName:p,args:f}=y[T.length];try{if("0x"===c)throw new r.wb;if(!l)throw new a.VQ({data:o});let e=(0,s.k)({abi:d,args:f,data:o,functionName:p});T.push(n?{result:e,status:"success"}:e)}catch(t){let e=(0,u.S)(t,{abi:d,address:h,args:f,docsPath:"/docs/contract/multicall",functionName:p});if(!n)throw e;T.push({error:e,result:void 0,status:"failure"})}}}if(T.length!==y.length)throw new o.G("multicall results mismatch");return T}},99265:function(e,t,n){n.d(t,{W:function(){return i}});async function i(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}},84007:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(78258),r=n(86287),o=n(17803),a=n(17445),s=n(64681),l=n(76634),c=n(68285),u=n(66504),d=n(38112),h=n(66206),p=n(2630);let f="0x6492649264926492649264926492649264926492649264926492649264926492";var w=n(45113),g=n(20890),m=n(19879),y=n(17491),b=n(35177),v=n(72116),C=n(87435);async function x(e,t){let{address:n,factory:x,factoryData:A,hash:k,signature:T,...S}=t,E=(0,d.v)(T)?T:"object"==typeof T&&"r"in T&&"s"in T?function({r:e,s:t,to:n="hex",v:i,yParity:r}){let o=(()=>{if(0===r||1===r)return r;if(i&&(27n===i||28n===i||i>=35n))return i%2n===0n?1:0;throw Error("Invalid `v` or `yParity` value")})(),a=`0x${new b.secp256k1.Signature((0,v.y_)(e),(0,v.y_)(t)).toCompactHex()}${0===o?"1b":"1c"}`;return"hex"===n?a:(0,u.nr)(a)}(T):(0,h.ci)(T),I=await (async()=>x||A?(0,w.p5)(E,-32)===f?E:function(e){let{address:t,data:n,signature:i,to:r="hex"}=e,o=(0,y.SM)([(0,m.E)([{type:"address"},{type:"bytes"},{type:"bytes"}],[t,n,i]),f]);return"hex"===r?o:(0,u.nr)(o)}({address:x,data:A,signature:E}):E)();try{let{data:t}=await (0,p.s)(e,C.R,"call")({data:(0,a.w)({abi:i.$o,args:[n,k,I],bytecode:r.ST}),...S});return function(e,t){let n=(0,d.v)(e)?(0,u.O0)(e):e,i=(0,d.v)("0x1")?(0,u.O0)("0x1"):"0x1";return(0,c.Wd)(n,i)}(t??"0x0","0x1")}catch(e){try{if((0,l.E)((0,s.K)(n),await (0,g.R)({hash:k,signature:T})))return!0}catch{}if(e instanceof o.cg)return!1;throw e}}},30844:function(e,t,n){n.d(t,{n:function(){return o}});var i=n(20099),r=n(84007);async function o(e,{address:t,message:n,factory:o,factoryData:a,signature:s,...l}){let c=(0,i.r)(n);return(0,r.Z)(e,{address:t,factory:o,factoryData:a,hash:c,signature:s,...l})}},30440:function(e,t,n){n.d(t,{B:function(){return u}});var i=n(19879),r=n(17491),o=n(66206),a=n(63183),s=n(64635);function l({data:e,primaryType:t,types:n}){let r=function e({data:t,primaryType:n,types:r}){let s=[{type:"bytes32"}],l=[function({primaryType:e,types:t}){let n=(0,o.NC)(function({primaryType:e,types:t}){let n="",i=function e({primaryType:t,types:n},i=new Set){let r=t.match(/^\w*/u),o=r?.[0];if(i.has(o)||void 0===n[o])return i;for(let t of(i.add(o),n[o]))e({primaryType:t.type,types:n},i);return i}({primaryType:e,types:t});for(let r of(i.delete(e),[e,...Array.from(i).sort()]))n+=`${r}(${t[r].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return n}({primaryType:e,types:t}));return(0,a.w)(n)}({primaryType:n,types:r})];for(let c of r[n]){let[n,u]=function t({types:n,name:r,type:s,value:l}){if(void 0!==n[s])return[{type:"bytes32"},(0,a.w)(e({data:l,primaryType:s,types:n}))];if("bytes"===s){let e=l.length%2?"0":"";return l=`0x${e+l.slice(2)}`,[{type:"bytes32"},(0,a.w)(l)]}if("string"===s)return[{type:"bytes32"},(0,a.w)((0,o.NC)(l))];if(s.lastIndexOf("]")===s.length-1){let e=s.slice(0,s.lastIndexOf("[")),o=l.map(i=>t({name:r,type:e,types:n,value:i}));return[{type:"bytes32"},(0,a.w)((0,i.E)(o.map(([e])=>e),o.map(([,e])=>e)))]}return[{type:s},l]}({types:r,name:c.name,type:c.type,value:t[c.name]});s.push(n),l.push(u)}return(0,i.E)(s,l)}({data:e,primaryType:t,types:n});return(0,a.w)(r)}var c=n(84007);async function u(e,t){let{address:n,factory:i,factoryData:o,signature:u,message:d,primaryType:h,types:p,domain:f,...w}=t,g=function(e){let{domain:t={},message:n,primaryType:i}=e,o={EIP712Domain:(0,s.cj)({domain:t}),...e.types};(0,s.iC)({domain:t,message:n,primaryType:i,types:o});let c=["0x1901"];return t&&c.push(function({domain:e,types:t}){return l({data:e,primaryType:"EIP712Domain",types:t})}({domain:t,types:o})),"EIP712Domain"!==i&&c.push(l({data:n,primaryType:i,types:o})),(0,a.w)((0,r.zo)(c))}({message:d,primaryType:h,types:p,domain:f});return(0,c.Z)(e,{address:n,factory:i,factoryData:o,hash:g,signature:u,...w})}},52594:function(e,t,n){n.d(t,{p:function(){return c}});var i=n(6513),r=n(2630),o=n(11932),a=n(75472),s=n(30728),l=n(19142);function c(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:c=!1,onBlock:u,onError:d,includeTransactions:h,poll:p,pollingInterval:f=e.pollingInterval}){let w,g,m;let y=void 0!==p?p:"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type),b=h??!1;return y?(()=>{let i=(0,s.P)(["watchBlocks",e.uid,t,n,c,b,f]);return(0,o.N7)(i,{onBlock:u,onError:d},i=>(0,a.$)(async()=>{try{let o=await (0,r.s)(e,l.Q,"getBlock")({blockTag:t,includeTransactions:b});if(o.number&&w?.number){if(o.number===w.number)return;if(o.number-w.number>1&&n)for(let t=w?.number+1n;t<o.number;t++){let n=await (0,r.s)(e,l.Q,"getBlock")({blockNumber:t,includeTransactions:b});i.onBlock(n,w),w=n}}(!w?.number||"pending"===t&&!o?.number||o.number&&o.number>w.number)&&(i.onBlock(o,w),w=o)}catch(e){i.onError?.(e)}},{emitOnBegin:c,interval:f}))})():(g=!0,m=()=>g=!1,(async()=>{try{let t=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:n}=await t.subscribe({params:["newHeads"],onData(t){if(!g)return;let n=(e.chain?.formatters?.block?.format||i.Z)(t.result);u(n,w),w=n},onError(e){d?.(e)}});m=n,g||m()}catch(e){d?.(e)}})(),()=>m())}},57032:function(e,t,n){n.d(t,{Y:function(){return m}});var i=n(34666),r=n(49145),o=n(16722),a=n(79149),s=n(7181),l=n(2630),c=n(11932),u=n(75472),d=n(30728),h=n(54576),p=n(39404),f=n(44191),w=n(27201),g=n(99265);function m(e,t){let{abi:n,address:m,args:y,batch:b=!0,eventName:v,fromBlock:C,onError:x,onLogs:A,poll:k,pollingInterval:T=e.pollingInterval,strict:S}=t;return(void 0!==k?k:"bigint"==typeof C||"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type))?(()=>{let t=S??!1,i=(0,d.P)(["watchContractEvent",m,y,b,e.uid,v,T,t,C]);return(0,c.N7)(i,{onLogs:A,onError:x},i=>{let o,a;void 0!==C&&(o=C-1n);let s=!1,c=(0,u.$)(async()=>{if(!s){try{a=await (0,l.s)(e,h.A,"createContractEventFilter")({abi:n,address:m,args:y,eventName:v,strict:t,fromBlock:C})}catch{}s=!0;return}try{let r;if(a)r=await (0,l.s)(e,w.K,"getFilterChanges")({filter:a});else{let i=await (0,l.s)(e,p.z,"getBlockNumber")({});r=o&&o<i?await (0,l.s)(e,f.m,"getContractEvents")({abi:n,address:m,args:y,eventName:v,fromBlock:o+1n,toBlock:i,strict:t}):[],o=i}if(0===r.length)return;if(b)i.onLogs(r);else for(let e of r)i.onLogs([e])}catch(e){a&&e instanceof r.yR&&(s=!1),i.onError?.(e)}},{emitOnBegin:!0,interval:T});return async()=>{a&&await (0,l.s)(e,g.W,"uninstallFilter")({filter:a}),c()}})})():(()=>{let t=(0,d.P)(["watchContractEvent",m,y,b,e.uid,v,T,S??!1]),r=!0,l=()=>r=!1;return(0,c.N7)(t,{onLogs:A,onError:x},t=>((async()=>{try{let c=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),u=v?(0,a.O)({abi:n,eventName:v,args:y}):[],{unsubscribe:d}=await c.subscribe({params:["logs",{address:m,topics:u}],onData(e){if(!r)return;let a=e.result;try{let{eventName:e,args:i}=(0,o.F)({abi:n,data:a.data,topics:a.topics,strict:S}),r=(0,s.U)(a,{args:i,eventName:e});t.onLogs([r])}catch(o){let e,n;if(o instanceof i.SM||o instanceof i.Gy){if(S)return;e=o.abiItem.name,n=o.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let r=(0,s.U)(a,{args:n?[]:{},eventName:e});t.onLogs([r])}},onError(e){t.onError?.(e)}});l=d,r||l()}catch(e){x?.(e)}})(),()=>l()))})()}},23796:function(e,t,n){n.d(t,{O:function(){return u}});var i=n(2630),r=n(11932),o=n(75472),a=n(30728),s=n(89466),l=n(27201),c=n(99265);function u(e,{batch:t=!0,onError:n,onTransactions:u,poll:d,pollingInterval:h=e.pollingInterval}){let p,f;return(void 0!==d?d:"webSocket"!==e.transport.type)?(()=>{let d=(0,a.P)(["watchPendingTransactions",e.uid,t,h]);return(0,r.N7)(d,{onTransactions:u,onError:n},n=>{let r;let a=(0,o.$)(async()=>{try{if(!r)try{r=await (0,i.s)(e,s.W,"createPendingTransactionFilter")({});return}catch(e){throw a(),e}let o=await (0,i.s)(e,l.K,"getFilterChanges")({filter:r});if(0===o.length)return;if(t)n.onTransactions(o);else for(let e of o)n.onTransactions([e])}catch(e){n.onError?.(e)}},{emitOnBegin:!0,interval:h});return async()=>{r&&await (0,i.s)(e,c.W,"uninstallFilter")({filter:r}),a()}})})():(p=!0,f=()=>p=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!p)return;let t=e.result;u([t])},onError(e){n?.(e)}});f=t,p||f()}catch(e){n?.(e)}})(),()=>f())}},89108:function(e,t,n){n.d(t,{P:function(){return o}});var i=n(17445),r=n(45505);function o(e,t){let{abi:n,args:o,bytecode:a,...s}=t,l=(0,i.w)({abi:n,args:o,bytecode:a});return(0,r.T)(e,{...s,data:l})}},68432:function(e,t,n){n.d(t,{l:function(){return a}});var i=n(28854),r=n(78100),o=n(66206);async function a(e,{account:t=e.account,message:n}){if(!t)throw new r.o({docsPath:"/docs/actions/wallet/signMessage"});let a=(0,i.T)(t);if(a.signMessage)return a.signMessage({message:n});let s="string"==typeof n?(0,o.$G)(n):n.raw instanceof Uint8Array?(0,o.NC)(n.raw):n.raw;return e.request({method:"personal_sign",params:[s,a.address]},{retryCount:0})}},93649:function(e,t,n){n.d(t,{x:function(){return a}});var i=n(28854),r=n(78100),o=n(64635);async function a(e,t){let{account:n=e.account,domain:a,message:s,primaryType:l}=t;if(!n)throw new r.o({docsPath:"/docs/actions/wallet/signTypedData"});let c=(0,i.T)(n),u={EIP712Domain:(0,o.cj)({domain:a}),...t.types};if((0,o.iC)({domain:a,message:s,primaryType:l,types:u}),c.signTypedData)return c.signTypedData({domain:a,message:s,primaryType:l,types:u});let d=(0,o.H6)({domain:a,message:s,primaryType:l,types:u});return e.request({method:"eth_signTypedData_v4",params:[c.address,d]},{retryCount:0})}},25756:function(e,t,n){n.d(t,{d:function(){return i}});async function i(e,t){return await e.request({method:"wallet_watchAsset",params:t},{retryCount:0})}},16722:function(e,t,n){n.d(t,{F:function(){return u}});var i=n(34666),r=n(37809),o=n(13997),a=n(75272),s=n(67929),l=n(17818);let c="/docs/contract/decodeEventLog";function u(e){let{abi:t,data:n,strict:u,topics:d}=e,h=u??!0,[p,...f]=d;if(!p)throw new i.FM({docsPath:c});let w=1===t.length?t[0]:t.find(e=>"event"===e.type&&p===(0,o.n)((0,l.t)(e)));if(!(w&&"name"in w)||"event"!==w.type)throw new i.lC(p,{docsPath:c});let{name:g,inputs:m}=w,y=m?.some(e=>!("name"in e&&e.name)),b=y?[]:{},v=m.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<v.length;e++){let t=v[e],n=f[e];if(!n)throw new i.Gy({abiItem:w,param:t});b[y?e:t.name||e]=function({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,s.r)([e],t)||[])[0]}({param:t,value:n})}let C=m.filter(e=>!("indexed"in e&&e.indexed));if(C.length>0){if(n&&"0x"!==n)try{let e=(0,s.r)(C,n);if(e){if(y)b=[...b,...e];else for(let t=0;t<C.length;t++)b[C[t].name]=e[t]}}catch(e){if(h){if(e instanceof i.xB||e instanceof a.lQ)throw new i.SM({abiItem:w,data:n,params:C,size:(0,r.d)(n)});throw e}}else if(h)throw new i.SM({abiItem:w,data:"0x",params:C,size:0})}return{eventName:g,args:Object.values(b).length>0?b:void 0}}},79149:function(e,t,n){n.d(t,{O:function(){return p}});var i=n(34666),r=n(50628);class o extends r.G{constructor(e){super(`Filter type "${e}" is not supported.`,{name:"FilterTypeNotSupportedError"})}}var a=n(66504),s=n(63183),l=n(13997),c=n(19879),u=n(17818),d=n(8710);let h="/docs/contract/encodeEventTopics";function p(e){let{abi:t,eventName:n,args:r}=e,o=t[0];if(n){let e=(0,d.mE)({abi:t,name:n});if(!e)throw new i.mv(n,{docsPath:h});o=e}if("event"!==o.type)throw new i.mv(void 0,{docsPath:h});let a=(0,u.t)(o),s=(0,l.n)(a),c=[];if(r&&"inputs"in o){let e=o.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(c=e?.map((e,n)=>Array.isArray(t[n])?t[n].map((i,r)=>f({param:e,value:t[n][r]})):t[n]?f({param:e,value:t[n]}):null)??[])}return[s,...c]}function f({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,s.w)((0,a.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new o(e.type);return(0,c.E)([e],[t])}},95149:function(e,t,n){n.d(t,{h:function(){return c}});var i=n(34666),r=n(76634),o=n(66504),a=n(63183),s=n(13997),l=n(16722);function c(e){let{abi:t,args:n,logs:c,strict:u=!0}=e,d=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})();return c.map(e=>{try{let i=t.find(t=>"event"===t.type&&e.topics[0]===(0,s.n)(t));if(!i)return null;let c=(0,l.F)({...e,abi:[i],strict:u});if(d&&!d.includes(c.eventName)||!function(e){let{args:t,inputs:n,matchArgs:i}=e;if(!i)return!0;if(!t)return!1;function s(e,t,n){try{if("address"===e.type)return(0,r.E)(t,n);if("string"===e.type||"bytes"===e.type)return(0,a.w)((0,o.O0)(t))===n;return t===n}catch{return!1}}return Array.isArray(t)&&Array.isArray(i)?i.every((e,i)=>{if(!e)return!0;let r=n[i];return!!r&&(Array.isArray(e)?e:[e]).some(e=>s(r,e,t[i]))}):!("object"!=typeof t||Array.isArray(t)||"object"!=typeof i||Array.isArray(i))&&Object.entries(i).every(([e,i])=>{if(!i)return!0;let r=n.find(t=>t.name===e);return!!r&&(Array.isArray(i)?i:[i]).some(n=>s(r,n,t[e]))})}({args:c.args,inputs:i.inputs,matchArgs:n}))return null;return{...c,...e}}catch(r){let t,n;if(r instanceof i.lC)return null;if(r instanceof i.SM||r instanceof i.Gy){if(u)return null;t=r.abiItem.name,n=r.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return{...e,args:n?[]:{},eventName:t}}}).filter(Boolean)}},76634:function(e,t,n){n.d(t,{E:function(){return o}});var i=n(52602),r=n(63569);function o(e,t){if(!(0,r.U)(e,{strict:!1}))throw new i.b({address:e});if(!(0,r.U)(t,{strict:!1}))throw new i.b({address:t});return e.toLowerCase()===t.toLowerCase()}},40383:function(e,t,n){n.d(t,{i:function(){return r}});var i=n(38112);function r(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,i.v)(t)?t:null}},76461:function(e,t,n){n.d(t,{c:function(){return a}});var i=n(58094),r=n(50628),o=n(17803);function a(e,t){if(!(e instanceof r.G))return!1;let n=e.walk(e=>e instanceof o.Lu);return n instanceof o.Lu&&(!!(n.data?.errorName==="ResolverNotFound"||n.data?.errorName==="ResolverWildcardNotSupported"||n.data?.errorName==="ResolverNotContract"||n.data?.errorName==="ResolverError"||n.data?.errorName==="HttpError"||n.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&n.reason===i.$[50])}},60311:function(e,t,n){n.d(t,{V:function(){return l}});var i=n(17491),r=n(66504),o=n(66206),a=n(63183),s=n(40383);function l(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,o.ci)(t);let n=e.split(".");for(let e=n.length-1;e>=0;e-=1){let o=(0,s.i)(n[e]),l=o?(0,r.O0)(o):(0,a.w)((0,r.qX)(n[e]),"bytes");t=(0,a.w)((0,i.zo)([t,l]),"bytes")}return(0,o.ci)(t)}},46190:function(e,t,n){n.d(t,{T:function(){return s}});var i=n(66504),r=n(66206),o=n(63183),a=n(40383);function s(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let n=new Uint8Array((0,i.qX)(t).byteLength+2),s=0,l=t.split(".");for(let e=0;e<l.length;e++){let t=(0,i.qX)(l[e]);if(t.byteLength>255){var c;t=(0,i.qX)((c=function(e){let t=new Uint8Array(32).fill(0);return e?(0,a.i)(e)||(0,o.w)((0,i.qX)(e)):(0,r.ci)(t)}(l[e]),`[${c.slice(2)}]`))}n[s]=t.length,n.set(t,s+1),s+=t.length+1}return n.byteLength!==s+1?n.slice(0,s+1):n}},47855:function(e,t,n){n.d(t,{g:function(){return i}});function i(e,{method:t}){let n={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:i,status:r,transport:o})=>{"success"===r&&t===e&&(n[i]=o.request)}),t=>n[t]||e.request}},20099:function(e,t,n){n.d(t,{r:function(){return s}});var i=n(63183),r=n(17491),o=n(37809),a=n(66206);function s(e,t){return(0,i.w)(function(e){let t="string"==typeof e?(0,a.$G)(e):"string"==typeof e.raw?e.raw:(0,a.ci)(e.raw),n=(0,a.$G)(`\x19Ethereum Signed Message:
${(0,o.d)(t)}`);return(0,r.zo)([n,t])}(e),t)}},64635:function(e,t,n){n.d(t,{cj:function(){return p},H6:function(){return d},iC:function(){return h}});var i=n(34666),r=n(52602),o=n(63569),a=n(37809),s=n(66206);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;var u=n(30728);function d(e){let{domain:t,message:n,primaryType:i,types:r}=e,o=(e,t)=>{let n={...t};for(let t of e){let{name:e,type:i}=t;"address"===i&&(n[e]=n[e].toLowerCase())}return n},a=r.EIP712Domain&&t?o(r.EIP712Domain,t):{},s=(()=>{if("EIP712Domain"!==i)return o(r[i],n)})();return(0,u.P)({domain:a,message:s,primaryType:i,types:r})}function h(e){let{domain:t,message:n,primaryType:u,types:d}=e,h=(e,t)=>{for(let n of e){let{name:e,type:u}=n,p=t[e],f=u.match(c);if(f&&("number"==typeof p||"bigint"==typeof p)){let[e,t,n]=f;(0,s.eC)(p,{signed:"int"===t,size:Number.parseInt(n)/8})}if("address"===u&&"string"==typeof p&&!(0,o.U)(p))throw new r.b({address:p});let w=u.match(l);if(w){let[e,t]=w;if(t&&(0,a.d)(p)!==Number.parseInt(t))throw new i.KY({expectedSize:Number.parseInt(t),givenSize:(0,a.d)(p)})}let g=d[u];g&&h(g,p)}};d.EIP712Domain&&t&&h(d.EIP712Domain,t),"EIP712Domain"!==u&&h(d[u],n)}function p({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},36744:function(e,t,n){n.d(t,{useAccountEffect:function(){return a}});var i=n(75063),r=n(50026),o=n(81089);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{onConnect:t,onDisconnect:n}=e,a=(0,o.useConfig)(e);(0,r.useEffect)(()=>(0,i.u)(a,{onChange(e,i){if(("reconnecting"===i.status||"connecting"===i.status&&void 0===i.address)&&"connected"===e.status){let{address:n,addresses:r,chain:o,chainId:a,connector:s}=e,l="reconnecting"===i.status||void 0===i.status;null==t||t({address:n,addresses:r,chain:o,chainId:a,connector:s,isReconnected:l})}else"connected"===i.status&&"disconnected"===e.status&&(null==n||n())}}),[a,t,n])}},93204:function(e,t,n){n.d(t,{useBalance:function(){return l}});var i=n(43148),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:r,...o}=t[1];if(!n)throw Error("address is required");return await (0,i.s)(e,{...o,address:n})??null},queryKey:function(e={}){return["balance",(0,r.OP)(e)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},60019:function(e,t,n){n.d(t,{useBlock:function(){return h}});var i=n(97518),r=n(19142),o=n(57139);async function a(e,t={}){let{chainId:n,...i}=t,a=e.getClient({chainId:n}),s=(0,o.s)(a,r.Q,"getBlock");return{...await s(i),chainId:a.chain.id}}var s=n(42798),l=n(52530),c=n(35296),u=n(81089),d=n(42059);function h(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:r={},watch:o}=n,h=(0,u.useConfig)(n),p=(0,i.NL)(),f=(0,c.useChainId)({config:h}),w=null!==(e=n.chainId)&&void 0!==e?e:f,g=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...i}=t[1];return await a(e,i)??null},queryKey:function(e={}){return["block",(0,s.OP)(e)]}(t)}}(h,{...n,chainId:w}),m=!!(null===(t=r.enabled)||void 0===t||t);return(0,d.useWatchBlocks)({...{config:n.config,chainId:n.chainId,..."object"==typeof o?o:{}},enabled:!!(m&&("object"==typeof o?o.enabled:o)),onBlock(e){p.setQueryData(g.queryKey,e)}}),(0,l.aM)({...r,...g,enabled:m})}},62793:function(e,t,n){n.d(t,{useBlockNumber:function(){return d}});var i=n(97518),r=n(39404),o=n(57139),a=n(42798),s=n(52530),l=n(35296),c=n(81089),u=n(98431);function d(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:d={},watch:h}=n,p=(0,c.useConfig)(n),f=(0,i.NL)(),w=(0,l.useChainId)({config:p}),g=null!==(e=n.chainId)&&void 0!==e?e:w,m=function(e,t={}){return{gcTime:0,async queryFn({queryKey:t}){let{scopeKey:n,...i}=t[1];return await function(e,t={}){let{chainId:n,...i}=t,a=e.getClient({chainId:n});return(0,o.s)(a,r.z,"getBlockNumber")(i)}(e,i)??null},queryKey:function(e={}){return["blockNumber",(0,a.OP)(e)]}(t)}}(p,{...n,chainId:g});return(0,u.useWatchBlockNumber)({...{config:n.config,chainId:n.chainId,..."object"==typeof h?h:{}},enabled:!!((null===(t=d.enabled)||void 0===t||t)&&("object"==typeof h?h.enabled:h)),onBlockNumber(e){f.setQueryData(m.queryKey,e)}}),(0,s.aM)({...d,...m})}},19784:function(e,t,n){n.d(t,{useBlockTransactionCount:function(){return c}});var i=n(65252),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:n={}}=t,c=(0,l.useConfig)(t),u=(0,s.useChainId)({config:c}),d=null!==(e=t.chainId)&&void 0!==e?e:u,h=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...o}=t[1];return await function(e,t={}){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.c,"getBlockTransactionCount")(o)}(e,o)??null},queryKey:function(e={}){return["blockTransactionCount",(0,o.OP)(e)]}(t)}}(c,{...t,chainId:d});return(0,a.aM)({...n,...h})}},36066:function(e,t,n){n.d(t,{useBytecode:function(){return u}});var i=n(92788),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.C,"getBytecode")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,query:r={}}=n,u=(0,c.useConfig)(n),d=(0,l.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:i,...r}=t[1];if(!n)throw Error("address is required");return await o(e,{...r,address:n})??null},queryKey:["getBytecode",(0,a.OP)(t)]}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(i&&(null===(t=r.enabled)||void 0===t||t));return(0,s.aM)({...r,...h,enabled:p})}},74338:function(e,t,n){n.d(t,{useCall:function(){return u}});var i=n(87435),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.R,"call")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:n={}}=t,i=(0,c.useConfig)(t),r=(0,l.useChainId)({config:i}),u=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...i}=t[1];return await o(e,{...i})??null},queryKey:["call",(0,a.OP)(t)]}}(i,{...t,chainId:null!==(e=t.chainId)&&void 0!==e?e:r});return(0,s.aM)({...n,...u})}},35296:function(e,t,n){function i(e){return e.state.chainId}n.d(t,{useChainId:function(){return a}});var r=n(50026),o=n(81089);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.useConfig)(e);return(0,r.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(e=>e.chainId,n)})(t,{onChange:e}),()=>i(t),()=>i(t))}},76874:function(e,t,n){n.d(t,{useClient:function(){return a}});var i=n(80363),r=n(7481),o=n(81089);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.useConfig)(e);return(0,r.useSyncExternalStoreWithSelector)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>(0,i.s)(e),n,{equalityFn:(e,t)=>e?.uid===t?.uid})})(t,{onChange:e}),()=>(0,i.s)(t,e),()=>(0,i.s)(t,e),e=>e,(e,t)=>(null==e?void 0:e.uid)===(null==t?void 0:t.uid))}},51166:function(e,t,n){n.d(t,{useConnect:function(){return l}});var i=n(20819),r=n(61726),o=n(50026),a=n(81089),s=n(39685);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,a.useConfig)(e),{mutate:l,mutateAsync:c,...u}=(0,i.D)({...t,mutationFn:e=>(0,r.$)(n,e),mutationKey:["connect"]});return(0,o.useEffect)(()=>n.subscribe(e=>{let{status:t}=e;return t},(e,t)=>{"connected"===t&&"disconnected"===e&&u.reset()}),[n,u.reset]),{...u,connect:l,connectAsync:c,connectors:(0,s.useConnectors)({config:n})}}},68185:function(e,t,n){n.d(t,{useConnections:function(){return s}});var i=n(18640),r=n(25011),o=n(50026),a=n(81089);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useConfig)(e);return(0,o.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>(0,r.E)(e),n,{equalityFn:i.v})})(t,{onChange:e}),()=>(0,r.E)(t),()=>(0,r.E)(t))}},79612:function(e,t,n){n.d(t,{useConnectorClient:function(){return d}});var i=n(97518),r=n(91229),o=n(42798),a=n(50026),s=n(52530),l=n(53946),c=n(35296),u=n(81089);function d(){var e,t,n;let d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:h={},...p}=d,f=(0,u.useConfig)(p),w=(0,i.NL)(),{address:g,connector:m,status:y}=(0,l.useAccount)({config:f}),b=(0,c.useChainId)({config:f}),v=null!==(e=d.connector)&&void 0!==e?e:m,{queryKey:C,...x}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:i}=t,{connectorUid:o,scopeKey:a,...s}=n[1];return(0,r.e)(e,{...s,connector:i})},queryKey:function(e={}){let{connector:t,...n}=e;return["connectorClient",{...(0,o.OP)(n),connectorUid:t?.uid}]}(t)}}(f,{...d,chainId:null!==(t=d.chainId)&&void 0!==t?t:b,connector:v}),A=!!(("connected"===y||"reconnecting"===y&&(null==v?void 0:v.getProvider))&&(null===(n=h.enabled)||void 0===n||n)),k=(0,a.useRef)(g);return(0,a.useEffect)(()=>{let e=k.current;!g&&e?(w.removeQueries({queryKey:C}),k.current=void 0):g!==e&&(w.invalidateQueries({queryKey:C}),k.current=g)},[g,w]),(0,s.aM)({...h,...x,queryKey:C,enabled:A,staleTime:Number.POSITIVE_INFINITY})}},39685:function(e,t,n){n.d(t,{useConnectors:function(){return c}});var i=n(35671),r=n(18640);let o=[];function a(e){let t=e.connectors;return(0,r.v)(o,t)?o:(o=t,t)}var s=n(50026),l=n(81089);function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.useConfig)(e);return(0,s.useSyncExternalStore)(e=>(0,i.f)(t,{onChange:e}),()=>a(t),()=>a(t))}},23694:function(e,t,n){n.d(t,{useDeployContract:function(){return c}});var i=n(20819),r=n(89108),o=n(57139),a=n(91229);async function s(e,t){let n;let{account:i,chainId:s,connector:l,...c}=t;n="object"==typeof i&&"local"===i.type?e.getClient({chainId:s}):await (0,a.e)(e,{account:i,chainId:s,connector:l});let u=(0,o.s)(n,r.P,"deployContract");return await u({...c,...i?{account:i}:{},chain:s?{id:s}:null})}var l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,r=(e=(0,l.useConfig)(t),{mutationFn:t=>s(e,t),mutationKey:["deployContract"]}),{mutate:o,mutateAsync:a,...c}=(0,i.D)({...n,...r});return{...c,deployContract:o,deployContractAsync:a}}},56489:function(e,t,n){n.d(t,{useDisconnect:function(){return s}});var i=n(20819),r=n(76759),o=n(81089),a=n(68185);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,o.useConfig)(e),{mutate:s,mutateAsync:l,...c}=(0,i.D)({...t,mutationFn:e=>(0,r.z)(n,e),mutationKey:["disconnect"]});return{...c,connectors:(0,a.useConnections)({config:n}).map(e=>e.connector),disconnect:s,disconnectAsync:l}}},30593:function(e,t,n){n.d(t,{useEnsAddress:function(){return l}});var i=n(53119),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{name:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{name:n,scopeKey:r,...o}=t[1];if(!n)throw Error("name is required");return(0,i.O)(e,{...o,name:n})},queryKey:function(e={}){return["ensAddress",(0,r.OP)(e)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},24222:function(e,t,n){n.d(t,{useEnsAvatar:function(){return l}});var i=n(62643),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{name:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{name:n,scopeKey:r,...o}=t[1];if(!n)throw Error("name is required");return(0,i.r)(e,{...o,name:n})},queryKey:function(e={}){return["ensAvatar",(0,r.OP)(e)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},76475:function(e,t,n){n.d(t,{useEnsName:function(){return l}});var i=n(41833),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:r,...o}=t[1];if(!n)throw Error("address is required");return(0,i.w)(e,{...o,address:n})},queryKey:function(e={}){return["ensName",(0,r.OP)(e)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},15169:function(e,t,n){n.d(t,{useEnsResolver:function(){return c}});var i=n(88452),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{name:c,query:u={}}=n,d=(0,l.useConfig)(n),h=(0,s.useChainId)({config:d}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{name:n,scopeKey:o,...a}=t[1];if(!n)throw Error("name is required");return function(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.S,"getEnsResolver")(o)}(e,{...a,name:n})},queryKey:function(e={}){return["ensResolver",(0,o.OP)(e)]}(t)}}(d,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:h}),f=!!(c&&(null===(t=u.enabled)||void 0===t||t));return(0,a.aM)({...u,...p,enabled:f})}},90788:function(e,t,n){n.d(t,{useEnsText:function(){return c}});var i=n(2615),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{key:c,name:u,query:d={}}=n,h=(0,l.useConfig)(n),p=(0,s.useChainId)({config:h}),f=function(e,t={}){return{async queryFn({queryKey:t}){let{key:n,name:o,scopeKey:a,...s}=t[1];if(!n||!o)throw Error("key and name are required");return function(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.g,"getEnsText")(o)}(e,{...s,key:n,name:o})},queryKey:function(e={}){return["ensText",(0,o.OP)(e)]}(t)}}(h,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:p}),w=!!(c&&u&&(null===(t=d.enabled)||void 0===t||t));return(0,a.aM)({...d,...f,enabled:w})}},39489:function(e,t,n){n.d(t,{useEstimateFeesPerGas:function(){return h}});var i=n(88113),r=n(42214),o=n(57139),a=n(52277);async function s(e,t={}){let{chainId:n,formatUnits:s="gwei",...l}=t,c=e.getClient({chainId:n}),u=(0,o.s)(c,r.X,"estimateFeesPerGas"),{gasPrice:d,maxFeePerGas:h,maxPriorityFeePerGas:p}=await u({...l,chain:c.chain}),f=(0,a.W)(s);return{formatted:{gasPrice:d?(0,i.b)(d,f):void 0,maxFeePerGas:h?(0,i.b)(h,f):void 0,maxPriorityFeePerGas:p?(0,i.b)(p,f):void 0},gasPrice:d,maxFeePerGas:h,maxPriorityFeePerGas:p}}var l=n(42798),c=n(52530),u=n(35296),d=n(81089);function h(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:n={}}=t,i=(0,d.useConfig)(t),r=(0,u.useChainId)({config:i}),o=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...i}=t[1];return s(e,i)},queryKey:function(e={}){return["estimateFeesPerGas",(0,l.OP)(e)]}(t)}}(i,{...t,chainId:null!==(e=t.chainId)&&void 0!==e?e:r});return(0,c.aM)({...n,...o})}},52177:function(e,t,n){n.d(t,{useEstimateGas:function(){return c}});var i=n(72868),r=n(42798),o=n(52530),a=n(35296),s=n(81089),l=n(79612);function c(){var e,t,n;let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{connector:u,query:d={}}=c,h=(0,s.useConfig)(c),{data:p}=(0,l.useConnectorClient)({connector:u,query:{enabled:void 0===c.account}}),f=null!==(e=c.account)&&void 0!==e?e:null==p?void 0:p.account,w=(0,a.useChainId)({config:h}),g=function(e,t={}){return{async queryFn({queryKey:n}){let{connector:r}=t,{account:o,scopeKey:a,...s}=n[1];if(!o&&!r)throw Error("account or connector is required");return(0,i.Q)(e,{account:o,connector:r,...s})},queryKey:function(e={}){let{connector:t,...n}=e;return["estimateGas",(0,r.OP)(n)]}(t)}}(h,{...c,account:f,chainId:null!==(t=c.chainId)&&void 0!==t?t:w,connector:u}),m=!!((f||u)&&(null===(n=d.enabled)||void 0===n||n));return(0,o.aM)({...d,...g,enabled:m})}},33920:function(e,t,n){n.d(t,{useEstimateMaxPriorityFeePerGas:function(){return u}});var i=n(18860),r=n(57139);async function o(e,t={}){let{chainId:n}=t,o=e.getClient({chainId:n});return(0,r.s)(o,i._,"estimateMaxPriorityFeePerGas")({chain:o.chain})}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:n={}}=t,i=(0,c.useConfig)(t),r=(0,l.useChainId)({config:i}),u=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...i}=t[1];return o(e,i)},queryKey:function(e={}){return["estimateMaxPriorityFeePerGas",(0,a.OP)(e)]}(t)}}(i,{...t,chainId:null!==(e=t.chainId)&&void 0!==e?e:r});return(0,s.aM)({...n,...u})}},35918:function(e,t,n){n.d(t,{useFeeHistory:function(){return c}});var i=n(71019),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{blockCount:c,rewardPercentiles:u,query:d={}}=n,h=(0,l.useConfig)(n),p=(0,s.useChainId)({config:h}),f=function(e,t={}){return{async queryFn({queryKey:t}){let{blockCount:n,rewardPercentiles:o,scopeKey:a,...s}=t[1];if(!n)throw Error("blockCount is required");if(!o)throw Error("rewardPercentiles is required");return await function(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.Z,"getFeeHistory")(o)}(e,{...s,blockCount:n,rewardPercentiles:o})??null},queryKey:function(e={}){return["feeHistory",(0,o.OP)(e)]}(t)}}(h,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:p}),w=!!(c&&u&&(null===(t=d.enabled)||void 0===t||t));return(0,a.aM)({...d,...f,enabled:w})}},53245:function(e,t,n){n.d(t,{useGasPrice:function(){return c}});var i=n(47781),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:n={}}=t,c=(0,l.useConfig)(t),u=(0,s.useChainId)({config:c}),d=null!==(e=t.chainId)&&void 0!==e?e:u,h=function(e,t={}){return{async queryFn({queryKey:t}){let{scopeKey:n,...o}=t[1];return await function(e,t={}){let{chainId:n}=t,o=e.getClient({chainId:n});return(0,r.s)(o,i.o,"getGasPrice")({})}(e,o)??null},queryKey:function(e={}){return["gasPrice",(0,o.OP)(e)]}(t)}}(c,{...t,chainId:d});return(0,a.aM)({...n,...h})}},35668:function(e,t,n){n.d(t,{useInfiniteReadContracts:function(){return l}});var i=n(3770),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(e){var t,n;let{contracts:l=[],query:c}=e,u=(0,s.useConfig)(e),d=(0,a.useChainId)({config:u}),h={...(n={...e,chainId:d,contracts:l,query:c}).query,async queryFn({pageParam:e,queryKey:t}){let{contracts:r}=n,{cacheKey:o,scopeKey:a,...s}=t[1];return await (0,i.J)(u,{...s,contracts:r(e)})},queryKey:function(e){let{contracts:t,query:n,...i}=e;return["infiniteReadContracts",(0,r.OP)(i)]}(n)};return(0,o.NS)({...c,...h,initialPageParam:h.initialPageParam,structuralSharing:null!==(t=c.structuralSharing)&&void 0!==t?t:r.if})}},1681:function(e,t,n){n.d(t,{usePrepareTransactionRequest:function(){return l}});var i=n(40706),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{to:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{queryFn({queryKey:t}){let{scopeKey:n,to:r,...o}=t[1];if(!r)throw Error("to is required");return(0,i.Z)(e,{to:r,...o})},queryKey:["prepareTransactionRequest",(0,r.OP)(t)]}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},87767:function(e,t,n){n.d(t,{useProof:function(){return u}});var i=n(35240),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.S,"getProof")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,storageKeys:r,query:u={}}=n,d=(0,c.useConfig)(n),h=(0,l.useChainId)({config:d}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:i,storageKeys:r,...a}=t[1];if(!n||!r)throw Error("address and storageKeys are required");return o(e,{...a,address:n,storageKeys:r})},queryKey:["getProof",(0,a.OP)(t)]}}(d,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:h}),f=!!(i&&r&&(null===(t=u.enabled)||void 0===t||t));return(0,s.aM)({...u,...p,enabled:f})}},75127:function(e,t,n){n.d(t,{usePublicClient:function(){return eT}});var i=n(2416),r=n(57950),o=n(6789),a=n(88452),s=n(2615),l=n(87435),c=n(47855);async function u(e){let t=(0,c.g)(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}var d=n(54576),h=n(79149),p=n(66206);async function f(e,{address:t,args:n,event:i,events:r,fromBlock:o,strict:a,toBlock:s}={}){let l=r??(i?[i]:void 0),u=(0,c.g)(e,{method:"eth_newFilter"}),d=[];l&&(d=[l.flatMap(e=>(0,h.O)({abi:[e],eventName:e.name,args:n}))],i&&(d=d[0]));let f=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,p.eC)(o):o,toBlock:"bigint"==typeof s?(0,p.eC)(s):s,...d.length?{topics:d}:{}}]});return{abi:l,args:n,eventName:i?i.name:void 0,fromBlock:o,id:f,request:u(f),strict:!!a,toBlock:s,type:"event"}}var w=n(89466),g=n(28854),m=n(98056),y=n(95595),b=n(2630),v=n(9190);async function C(e,t){let{abi:n,address:i,args:r,functionName:o,...a}=t,s=(0,m.R)({abi:n,args:r,functionName:o});try{return await (0,b.s)(e,v.Q,"estimateGas")({data:s,to:i,...a})}catch(t){let e=a.account?(0,g.T)(a.account):void 0;throw(0,y.S)(t,{abi:n,address:i,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:o,sender:e?.address})}}var x=n(42214),A=n(18860),k=n(29980);async function T(e){return BigInt(await e.request({method:"eth_blobBaseFee"}))}var S=n(19142),E=n(39404),I=n(65252),R=n(13664),O=n(92788),N=n(44191),P=n(50628);class D extends P.G{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:["Ensure that:",`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:"Eip712DomainNotFoundError"})}}var B=n(2762);async function $(e,t){let{address:n,factory:i,factoryData:r}=t;try{let[t,o,a,s,l,c,u]=await (0,b.s)(e,B.L,"readContract")({abi:U,address:n,functionName:"eip712Domain",factory:i,factoryData:r});return{domain:{name:o,version:a,chainId:Number(s),verifyingContract:l,salt:c},extensions:u,fields:t}}catch(e){if("ContractFunctionExecutionError"===e.name&&"ContractFunctionZeroDataError"===e.cause.name)throw new D({address:n});throw e}}let U=[{inputs:[],name:"eip712Domain",outputs:[{name:"fields",type:"bytes1"},{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"},{name:"salt",type:"bytes32"},{name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"}];var j=n(71019),M=n(27201),L=n(95149),q=n(7181);async function W(e,{filter:t}){let n=t.strict??!1,i=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(e=>(0,q.U)(e));return t.abi?(0,L.h)({abi:t.abi,logs:i,strict:n}):i}var Q=n(47781),F=n(46624),K=n(35240),z=n(5154),H=n(28886),V=n(98854),Y=n(99410),_=n(52798),G=n(16111),X=n(7452),J=n(99265),Z=n(30844),ee=n(30440),et=n(38890),en=n(97779),ei=n(52594),er=n(57032),eo=n(11932),ea=n(75472),es=n(30728),el=n(34666),ec=n(49145),eu=n(16722),ed=n(23796),eh=n(20099);let ep=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,ef=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;var ew=n(76634),eg=n(84007);async function em(e,t){let{address:n,domain:i,message:r,nonce:o,scheme:a,signature:s,time:l=new Date,...c}=t,u=function(e){let{scheme:t,statement:n,...i}=e.match(ep)?.groups??{},{chainId:r,expirationTime:o,issuedAt:a,notBefore:s,requestId:l,...c}=e.match(ef)?.groups??{},u=e.split("Resources:")[1]?.split("\n- ").slice(1);return{...i,...c,...r?{chainId:Number(r)}:{},...o?{expirationTime:new Date(o)}:{},...a?{issuedAt:new Date(a)}:{},...s?{notBefore:new Date(s)}:{},...l?{requestId:l}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...n?{statement:n}:{}}}(r);if(!u.address||!function(e){let{address:t,domain:n,message:i,nonce:r,scheme:o,time:a=new Date}=e;if(n&&i.domain!==n||r&&i.nonce!==r||o&&i.scheme!==o||i.expirationTime&&a>=i.expirationTime||i.notBefore&&a<i.notBefore)return!1;try{if(!i.address||t&&!(0,ew.E)(i.address,t))return!1}catch{return!1}return!0}({address:n,domain:i,message:u,nonce:o,scheme:a,time:l}))return!1;let d=(0,eh.r)(r);return(0,eg.Z)(e,{address:u.address,hash:d,signature:s,...c})}var ey=n(479),eb=n(55824);function ev(e){return{call:t=>(0,l.R)(e,t),createBlockFilter:()=>u(e),createContractEventFilter:t=>(0,d.A)(e,t),createEventFilter:t=>f(e,t),createPendingTransactionFilter:()=>(0,w.W)(e),estimateContractGas:t=>C(e,t),estimateGas:t=>(0,v.Q)(e,t),getBalance:t=>(0,k.s)(e,t),getBlobBaseFee:()=>T(e),getBlock:t=>(0,S.Q)(e,t),getBlockNumber:t=>(0,E.z)(e,t),getBlockTransactionCount:t=>(0,I.c)(e,t),getBytecode:t=>(0,O.C)(e,t),getChainId:()=>(0,R.L)(e),getCode:t=>(0,O.C)(e,t),getContractEvents:t=>(0,N.m)(e,t),getEip712Domain:t=>$(e,t),getEnsAddress:t=>(0,i.O)(e,t),getEnsAvatar:t=>(0,r.r)(e,t),getEnsName:t=>(0,o.w)(e,t),getEnsResolver:t=>(0,a.S)(e,t),getEnsText:t=>(0,s.g)(e,t),getFeeHistory:t=>(0,j.Z)(e,t),estimateFeesPerGas:t=>(0,x.X)(e,t),getFilterChanges:t=>(0,M.K)(e,t),getFilterLogs:t=>W(e,t),getGasPrice:()=>(0,Q.o)(e),getLogs:t=>(0,F.y)(e,t),getProof:t=>(0,K.S)(e,t),estimateMaxPriorityFeePerGas:t=>(0,A._)(e,t),getStorageAt:t=>(0,z.Y)(e,t),getTransaction:t=>(0,H.f)(e,t),getTransactionConfirmations:t=>(0,V.a)(e,t),getTransactionCount:t=>(0,Y.K)(e,t),getTransactionReceipt:t=>(0,_.a)(e,t),multicall:t=>(0,G.A)(e,t),prepareTransactionRequest:t=>(0,ey.Z)(e,t),readContract:t=>(0,B.L)(e,t),sendRawTransaction:t=>(0,eb.p)(e,t),simulateContract:t=>(0,X.a)(e,t),verifyMessage:t=>(0,Z.n)(e,t),verifySiweMessage:t=>em(e,t),verifyTypedData:t=>(0,ee.B)(e,t),uninstallFilter:t=>(0,J.W)(e,t),waitForTransactionReceipt:t=>(0,et.e)(e,t),watchBlocks:t=>(0,ei.p)(e,t),watchBlockNumber:t=>(0,en.q)(e,t),watchContractEvent:t=>(0,er.Y)(e,t),watchEvent:t=>(function(e,{address:t,args:n,batch:i=!0,event:r,events:o,fromBlock:a,onError:s,onLogs:l,poll:c,pollingInterval:u=e.pollingInterval,strict:d}){let p,w;let g=void 0!==c?c:"bigint"==typeof a||"webSocket"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type),m=d??!1;return g?(()=>{let c=(0,es.P)(["watchEvent",t,n,i,e.uid,r,u,a]);return(0,eo.N7)(c,{onLogs:l,onError:s},s=>{let l,c;void 0!==a&&(l=a-1n);let d=!1,h=(0,ea.$)(async()=>{if(!d){try{c=await (0,b.s)(e,f,"createEventFilter")({address:t,args:n,event:r,events:o,strict:m,fromBlock:a})}catch{}d=!0;return}try{let a;if(c)a=await (0,b.s)(e,M.K,"getFilterChanges")({filter:c});else{let i=await (0,b.s)(e,E.z,"getBlockNumber")({});a=l&&l!==i?await (0,b.s)(e,F.y,"getLogs")({address:t,args:n,event:r,events:o,fromBlock:l+1n,toBlock:i}):[],l=i}if(0===a.length)return;if(i)s.onLogs(a);else for(let e of a)s.onLogs([e])}catch(e){c&&e instanceof ec.yR&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{c&&await (0,b.s)(e,J.W,"uninstallFilter")({filter:c}),h()}})})():(p=!0,w=()=>p=!1,(async()=>{try{let i=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type);return t?t.value:e.transport}return e.transport})(),a=o??(r?[r]:void 0),c=[];a&&(c=[a.flatMap(e=>(0,h.O)({abi:[e],eventName:e.name,args:n}))],r&&(c=c[0]));let{unsubscribe:u}=await i.subscribe({params:["logs",{address:t,topics:c}],onData(e){if(!p)return;let t=e.result;try{let{eventName:e,args:n}=(0,eu.F)({abi:a??[],data:t.data,topics:t.topics,strict:m}),i=(0,q.U)(t,{args:n,eventName:e});l([i])}catch(r){let e,n;if(r instanceof el.SM||r instanceof el.Gy){if(d)return;e=r.abiItem.name,n=r.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=(0,q.U)(t,{args:n?[]:{},eventName:e});l([i])}},onError(e){s?.(e)}});w=u,p||w()}catch(e){s?.(e)}})(),()=>w())})(e,t),watchPendingTransactions:t=>(0,ed.O)(e,t)}}var eC=n(80363);function ex(e,t={}){let n=(0,eC.s)(e,t);return n?.extend(ev)}var eA=n(7481),ek=n(81089);function eT(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,ek.useConfig)(e);return(0,eA.useSyncExternalStoreWithSelector)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>ex(e),n,{equalityFn:(e,t)=>e?.uid===t?.uid})})(t,{onChange:e}),()=>ex(t,e),()=>ex(t,e),e=>e,(e,t)=>(null==e?void 0:e.uid)===(null==t?void 0:t.uid))}},52186:function(e,t,n){n.d(t,{useReadContract:function(){return l}});var i=n(36927),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t,n;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{abi:c,address:u,functionName:d,query:h={}}=l,p=l.code,f=(0,s.useConfig)(l),w=(0,a.useChainId)({config:f}),g=function(e,t={}){return{async queryFn({queryKey:n}){let r=t.abi;if(!r)throw Error("abi is required");let{functionName:o,scopeKey:a,...s}=n[1],l=(()=>{let e=n[1];if(e.address)return{address:e.address};if(e.code)return{code:e.code};throw Error("address or code is required")})();if(!o)throw Error("functionName is required");return(0,i.L)(e,{abi:r,functionName:o,args:s.args,...l,...s})},queryKey:function(e={}){let{abi:t,...n}=e;return["readContract",(0,r.OP)(n)]}(t)}}(f,{...l,chainId:null!==(e=l.chainId)&&void 0!==e?e:w}),m=!!((u||p)&&c&&d&&(null===(t=h.enabled)||void 0===t||t));return(0,o.aM)({...h,...g,enabled:m,structuralSharing:null!==(n=h.structuralSharing)&&void 0!==n?n:r.if})}},80961:function(e,t,n){n.d(t,{useReadContracts:function(){return c}});var i=n(3770),r=n(42798),o=n(50026),a=n(52530),s=n(35296),l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{contracts:n=[],query:c={}}=t,u=(0,l.useConfig)(t),d=(0,s.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:n}){let r=[],o=n[1].contracts.length;for(let e=0;e<o;e++){let i=n[1].contracts[e],o=(t.contracts?.[e]).abi;r.push({...i,abi:o})}let{scopeKey:a,...s}=n[1];return(0,i.J)(e,{...s,contracts:r})},queryKey:function(e={}){let t=[];for(let n of e.contracts??[]){let{abi:i,...r}=n;t.push({...r,chainId:r.chainId??e.chainId})}return["readContracts",(0,r.OP)({...e,contracts:t})]}(t)}}(u,{...t,chainId:d}),p=(0,o.useMemo)(()=>{var e;let t=!1;for(let e of n){let{abi:n,address:i,functionName:r}=e;if(!n||!i||!r){t=!1;break}t=!0}return!!(t&&(null===(e=c.enabled)||void 0===e||e))},[n,c.enabled]);return(0,a.aM)({...h,...c,enabled:p,structuralSharing:null!==(e=c.structuralSharing)&&void 0!==e?e:r.if})}},76236:function(e,t,n){n.d(t,{useReconnect:function(){return a}});var i=n(20819),r=n(24990),o=n(81089);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,o.useConfig)(e),{mutate:a,mutateAsync:s,...l}=(0,i.D)({...t,mutationFn:e=>(0,r.G)(n,e),mutationKey:["reconnect"]});return{...l,connectors:n.connectors,reconnect:a,reconnectAsync:s}}},34060:function(e,t,n){n.d(t,{useSendTransaction:function(){return a}});var i=n(20819),r=n(6869),o=n(81089);function a(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,a=(e=(0,o.useConfig)(t),{mutationFn:t=>(0,r.T)(e,t),mutationKey:["sendTransaction"]}),{mutate:s,mutateAsync:l,...c}=(0,i.D)({...n,...a});return{...c,sendTransaction:s,sendTransactionAsync:l}}},96764:function(e,t,n){n.d(t,{useSignMessage:function(){return a}});var i=n(20819),r=n(45856),o=n(81089);function a(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,a=(e=(0,o.useConfig)(t),{mutationFn:t=>(0,r.l)(e,t),mutationKey:["signMessage"]}),{mutate:s,mutateAsync:l,...c}=(0,i.D)({...n,...a});return{...c,signMessage:s,signMessageAsync:l}}},69607:function(e,t,n){n.d(t,{useSignTypedData:function(){return c}});var i=n(20819),r=n(93649),o=n(57139),a=n(91229);async function s(e,t){let n;let{account:i,connector:s,...l}=t;return n="object"==typeof i&&"local"===i.type?e.getClient():await (0,a.e)(e,{account:i,connector:s}),(0,o.s)(n,r.x,"signTypedData")({...l,...i?{account:i}:{}})}var l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,r=(e=(0,l.useConfig)(t),{mutationFn:t=>s(e,t),mutationKey:["signTypedData"]}),{mutate:o,mutateAsync:a,...c}=(0,i.D)({...n,...r});return{...c,signTypedData:o,signTypedDataAsync:a}}},88593:function(e,t,n){n.d(t,{useSimulateContract:function(){return c}});var i=n(64583),r=n(42798),o=n(52530),a=n(35296),s=n(81089),l=n(79612);function c(){var e,t,n;let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{abi:u,address:d,connector:h,functionName:p,query:f={}}=c,w=(0,s.useConfig)(c),{data:g}=(0,l.useConnectorClient)({connector:h,query:{enabled:void 0===c.account}}),m=(0,a.useChainId)({config:w}),y=function(e,t={}){return{async queryFn({queryKey:n}){let{abi:r,connector:o}=t;if(!r)throw Error("abi is required");let{scopeKey:a,...s}=n[1],{address:l,functionName:c}=s;if(!l)throw Error("address is required");if(!c)throw Error("functionName is required");return(0,i.a)(e,{abi:r,connector:o,...s})},queryKey:function(e={}){let{abi:t,connector:n,...i}=e;return["simulateContract",(0,r.OP)(i)]}(t)}}(w,{...c,account:null!==(e=c.account)&&void 0!==e?e:null==g?void 0:g.account,chainId:null!==(t=c.chainId)&&void 0!==t?t:m}),b=!!(u&&d&&p&&(null===(n=f.enabled)||void 0===n||n));return(0,o.aM)({...f,...y,enabled:b})}},51449:function(e,t,n){n.d(t,{useStorageAt:function(){return u}});var i=n(5154),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.Y,"getStorageAt")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,slot:r,query:u={}}=n,d=(0,c.useConfig)(n),h=(0,l.useChainId)({config:d}),p=function(e,t={}){return{queryFn({queryKey:t}){let{address:n,slot:i,scopeKey:r,...a}=t[1];if(!n||!i)throw Error("address and slot are required");return o(e,{...a,address:n,slot:i})},queryKey:["getStorageAt",(0,a.OP)(t)]}}(d,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:h}),f=!!(i&&r&&(null===(t=u.enabled)||void 0===t||t));return(0,s.aM)({...u,...p,enabled:f})}},32735:function(e,t,n){n.d(t,{useSwitchAccount:function(){return s}});var i=n(20819),r=n(27991),o=n(81089),a=n(68185);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,o.useConfig)(e),{mutate:s,mutateAsync:l,...c}=(0,i.D)({...t,mutationFn:e=>(0,r.y)(n,e),mutationKey:["switchAccount"]});return{...c,connectors:(0,a.useConnections)({config:n}).map(e=>e.connector),switchAccount:s,switchAccountAsync:l}}},31151:function(e,t,n){n.d(t,{useToken:function(){return f}});var i=n(17803),r=n(88113),o=n(72116),a=n(86030),s=n(52277),l=n(3770);async function c(e,t){let{address:n,chainId:c,formatUnits:u=18}=t;function d(e){return[{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:e}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:e}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]}]}try{let t=d("string"),o={address:n,abi:t,chainId:c},[a,h,p,f]=await (0,l.J)(e,{allowFailure:!0,contracts:[{...o,functionName:"decimals"},{...o,functionName:"name"},{...o,functionName:"symbol"},{...o,functionName:"totalSupply"}]});if(h.error instanceof i.uq)throw h.error;if(p.error instanceof i.uq)throw p.error;if(a.error)throw a.error;if(f.error)throw f.error;return{address:n,decimals:a.result,name:h.result,symbol:p.result,totalSupply:{formatted:(0,r.b)(f.result,(0,s.W)(u)),value:f.result}}}catch(t){if(t instanceof i.uq){let t={address:n,abi:d("bytes32"),chainId:c},[i,h,p,f]=await (0,l.J)(e,{allowFailure:!1,contracts:[{...t,functionName:"decimals"},{...t,functionName:"name"},{...t,functionName:"symbol"},{...t,functionName:"totalSupply"}]});return{address:n,decimals:i,name:(0,o.rR)((0,a.f)(h,{dir:"right"})),symbol:(0,o.rR)((0,a.f)(p,{dir:"right"})),totalSupply:{formatted:(0,r.b)(f,(0,s.W)(u)),value:f}}}throw t}}var u=n(42798),d=n(52530),h=n(35296),p=n(81089);function f(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,query:r={}}=n,o=(0,p.useConfig)(n),a=(0,h.useChainId)({config:o}),s=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:i,...r}=t[1];if(!n)throw Error("address is required");return c(e,{...r,address:n})},queryKey:function(e={}){return["token",(0,u.OP)(e)]}(t)}}(o,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:a}),l=!!(i&&(null===(t=r.enabled)||void 0===t||t));return(0,d.aM)({...r,...s,enabled:l})}},80324:function(e,t,n){n.d(t,{useTransaction:function(){return c}});var i=n(28886),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{blockHash:c,blockNumber:u,blockTag:d,hash:h,query:p={}}=n,f=(0,l.useConfig)(n),w=(0,s.useChainId)({config:f}),g=function(e,t={}){return{async queryFn({queryKey:t}){let{blockHash:n,blockNumber:o,blockTag:a,hash:s,index:l}=t[1];if(!n&&!o&&!a&&!s)throw Error("blockHash, blockNumber, blockTag, or hash is required");if(!s&&!l)throw Error("index is required for blockHash, blockNumber, or blockTag");let{scopeKey:c,...u}=t[1];return function(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.f,"getTransaction")(o)}(e,u)},queryKey:function(e={}){return["transaction",(0,o.OP)(e)]}(t)}}(f,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:w}),m=!!(!(c&&u&&d&&h)&&(null===(t=p.enabled)||void 0===t||t));return(0,a.aM)({...p,...g,enabled:m})}},76497:function(e,t,n){n.d(t,{useTransactionConfirmations:function(){return c}});var i=n(98854),r=n(57139),o=n(42798),a=n(52530),s=n(35296),l=n(81089);function c(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{hash:c,transactionReceipt:u,query:d={}}=n,h=(0,l.useConfig)(n),p=(0,s.useChainId)({config:h}),f=function(e,t={}){return{async queryFn({queryKey:t}){let{hash:n,transactionReceipt:o,scopeKey:a,...s}=t[1];if(!n&&!o)throw Error("hash or transactionReceipt is required");return await function(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.a,"getTransactionConfirmations")(o)}(e,{hash:n,transactionReceipt:o,...s})??null},queryKey:function(e={}){return["transactionConfirmations",(0,o.OP)(e)]}(t)}}(h,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:p}),w=!!(!(c&&u)&&(c||u)&&(null===(t=d.enabled)||void 0===t||t));return(0,a.aM)({...d,...f,enabled:w})}},6234:function(e,t,n){n.d(t,{useTransactionCount:function(){return u}});var i=n(99410),r=n(57139);async function o(e,t){let{address:n,blockNumber:o,blockTag:a,chainId:s}=t,l=e.getClient({chainId:s});return(0,r.s)(l,i.K,"getTransactionCount")(o?{address:n,blockNumber:o}:{address:n,blockTag:a})}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,query:r={}}=n,u=(0,c.useConfig)(n),d=(0,l.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,scopeKey:i,...r}=t[1];if(!n)throw Error("address is required");return await o(e,{...r,address:n})??null},queryKey:function(e={}){return["transactionCount",(0,a.OP)(e)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(i&&(null===(t=r.enabled)||void 0===t||t));return(0,s.aM)({...r,...h,enabled:p})}},52007:function(e,t,n){n.d(t,{useTransactionReceipt:function(){return u}});var i=n(52798),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.a,"getTransactionReceipt")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{hash:i,query:r={}}=n,u=(0,c.useConfig)(n),d=(0,l.useChainId)({config:u}),h=function(e,t={}){return{queryFn({queryKey:t}){let{hash:n,scopeKey:i,...r}=t[1];if(!n)throw Error("hash is required");return o(e,{...r,hash:n})},queryKey:["getTransactionReceipt",(0,a.OP)(t)]}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(i&&(null===(t=r.enabled)||void 0===t||t));return(0,s.aM)({...r,...h,enabled:p})}},32047:function(e,t,n){n.d(t,{useVerifyMessage:function(){return u}});var i=n(30844),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.n,"verifyMessage")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,message:r,signature:u,query:d={}}=n,h=(0,c.useConfig)(n),p=(0,l.useChainId)({config:h}),f=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,message:i,signature:r}=t[1];if(!n||!i||!r)throw Error("address, message, and signature are required");let{scopeKey:a,...s}=t[1];return await o(e,s)??null},queryKey:["verifyMessage",(0,a.OP)(t)]}}(h,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:p}),w=!!(i&&r&&u&&(null===(t=d.enabled)||void 0===t||t));return(0,s.aM)({...d,...f,enabled:w})}},90309:function(e,t,n){n.d(t,{useVerifyTypedData:function(){return u}});var i=n(30440),r=n(57139);async function o(e,t){let{chainId:n,...o}=t,a=e.getClient({chainId:n});return(0,r.s)(a,i.B,"verifyTypedData")(o)}var a=n(42798),s=n(52530),l=n(35296),c=n(81089);function u(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{address:i,message:r,primaryType:u,signature:d,types:h,query:p={}}=n,f=(0,c.useConfig)(n),w=(0,l.useChainId)({config:f}),g=function(e,t={}){return{async queryFn({queryKey:t}){let{address:n,message:i,primaryType:r,signature:a,types:s,scopeKey:l,...c}=t[1];if(!n)throw Error("address is required");if(!i)throw Error("message is required");if(!r)throw Error("primaryType is required");if(!a)throw Error("signature is required");if(!s)throw Error("types is required");return await o(e,{...c,address:n,message:i,primaryType:r,signature:a,types:s})??null},queryKey:["verifyTypedData",(0,a.OP)(t)]}}(f,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:w}),m=!!(i&&r&&u&&d&&h&&(null===(t=p.enabled)||void 0===t||t));return(0,s.aM)({...p,...g,enabled:m})}},92324:function(e,t,n){n.d(t,{useWaitForTransactionReceipt:function(){return l}});var i=n(16535),r=n(42798),o=n(52530),a=n(35296),s=n(81089);function l(){var e,t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{hash:l,query:c={}}=n,u=(0,s.useConfig)(n),d=(0,a.useChainId)({config:u}),h=function(e,t={}){return{async queryFn({queryKey:n}){let{hash:r,...o}=n[1];if(!r)throw Error("hash is required");return(0,i.e)(e,{...o,onReplaced:t.onReplaced,hash:r})},queryKey:function(e={}){let{onReplaced:t,...n}=e;return["waitForTransactionReceipt",(0,r.OP)(n)]}(t)}}(u,{...n,chainId:null!==(e=n.chainId)&&void 0!==e?e:d}),p=!!(l&&(null===(t=c.enabled)||void 0===t||t));return(0,o.aM)({...c,...h,enabled:p})}},56544:function(e,t,n){n.d(t,{useWalletClient:function(){return j}});var i=n(97518),r=n(13664),o=n(66206);async function a(e,{chain:t}){let{id:n,name:i,nativeCurrency:r,rpcUrls:a,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,o.eC)(n),chainName:i,nativeCurrency:r,rpcUrls:a.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}var s=n(89108),l=n(64681);async function c(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"},{dedupe:!0})).map(e=>(0,l.x)(e))}async function u(e){return await e.request({method:"wallet_getPermissions"},{dedupe:!0})}var d=n(479);async function h(e){return(await e.request({method:"eth_requestAccounts"},{dedupe:!0,retryCount:0})).map(e=>(0,l.K)(e))}async function p(e,t){return e.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}var f=n(55824),w=n(45505),g=n(68432),m=n(28854),y=n(78100),b=n(91077),v=n(59193),C=n(2630),x=n(30658);async function A(e,t){let{account:n=e.account,chain:i=e.chain,...a}=t;if(!n)throw new y.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,m.T)(n);(0,x.F)({account:s,...t});let l=await (0,C.s)(e,r.L,"getChainId")({});null!==i&&(0,b.q)({currentChainId:l,chain:i});let c=i?.formatters||e.chain?.formatters,u=c?.transactionRequest?.format||v.tG;return s.signTransaction?s.signTransaction({...a,chainId:l},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...u(a),chainId:(0,o.eC)(l),from:s.address}]},{retryCount:0})}var k=n(93649);async function T(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.eC)(t)}]},{retryCount:0})}var S=n(25756),E=n(58358);function I(e){return{addChain:t=>a(e,t),deployContract:t=>(0,s.P)(e,t),getAddresses:()=>c(e),getChainId:()=>(0,r.L)(e),getPermissions:()=>u(e),prepareTransactionRequest:t=>(0,d.Z)(e,t),requestAddresses:()=>h(e),requestPermissions:t=>p(e,t),sendRawTransaction:t=>(0,f.p)(e,t),sendTransaction:t=>(0,w.T)(e,t),signMessage:t=>(0,g.l)(e,t),signTransaction:t=>A(e,t),signTypedData:t=>(0,k.x)(e,t),switchChain:t=>T(e,t),watchAsset:t=>(0,S.d)(e,t),writeContract:t=>(0,E.n)(e,t)}}var R=n(91229);async function O(e,t={}){let n=await (0,R.e)(e,t);return n.extend(I),n.extend(I)}var N=n(42798),P=n(50026),D=n(52530),B=n(53946),$=n(35296),U=n(81089);function j(){var e,t,n,r;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:a={},...s}=o,l=(0,U.useConfig)(s),c=(0,i.NL)(),{address:u,connector:d,status:h}=(0,B.useAccount)({config:l}),p=(0,$.useChainId)({config:l}),f=null!==(e=o.connector)&&void 0!==e?e:d,{queryKey:w,...g}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:i}=t,{connectorUid:r,scopeKey:o,...a}=n[1];return O(e,{...a,connector:i})},queryKey:function(e={}){let{connector:t,...n}=e;return["walletClient",{...(0,N.OP)(n),connectorUid:t?.uid}]}(t)}}(l,{...o,chainId:null!==(t=o.chainId)&&void 0!==t?t:p,connector:null!==(n=o.connector)&&void 0!==n?n:d}),m=!!(("connected"===h||"reconnecting"===h&&(null==f?void 0:f.getProvider))&&(null===(r=a.enabled)||void 0===r||r)),y=(0,P.useRef)(u);return(0,P.useEffect)(()=>{let e=y.current;!u&&e?(c.removeQueries({queryKey:w}),y.current=void 0):u!==e&&(c.invalidateQueries({queryKey:w}),y.current=u)},[u,c]),(0,D.aM)({...a,...g,queryKey:w,enabled:m,staleTime:Number.POSITIVE_INFINITY})}},33157:function(e,t,n){n.d(t,{useWatchAsset:function(){return c}});var i=n(20819),r=n(25756),o=n(57139),a=n(91229);async function s(e,t){let{connector:n,...i}=t,s=await (0,a.e)(e,{connector:n});return(0,o.s)(s,r.d,"watchAsset")(i)}var l=n(81089);function c(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,r=(e=(0,l.useConfig)(t),{mutationFn:t=>s(e,t),mutationKey:["watchAsset"]}),{mutate:o,mutateAsync:a,...c}=(0,i.D)({...n,...r});return{...c,watchAsset:o,watchAssetAsync:a}}},98431:function(e,t,n){n.d(t,{useWatchBlockNumber:function(){return l}});var i=n(97779),r=n(57139),o=n(50026),a=n(35296),s=n(81089);function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:n=!0,onBlockNumber:l,config:c,...u}=t,d=(0,s.useConfig)(t),h=(0,a.useChainId)({config:d}),p=null!==(e=t.chainId)&&void 0!==e?e:h;(0,o.useEffect)(()=>{if(n&&l)return function(e,t){let n,o;let{syncConnectedChain:a=e._internal.syncConnectedChain,...s}=t,l=t=>{n&&n();let o=e.getClient({chainId:t});return n=(0,r.s)(o,i.q,"watchBlockNumber")(s)},c=l(t.chainId);return a&&!t.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>l(e))),()=>{c?.(),o?.()}}(d,{...u,chainId:p,onBlockNumber:l})},[p,d,n,l,u.onError,u.emitMissed,u.emitOnBegin,u.poll,u.pollingInterval,u.syncConnectedChain])}},42059:function(e,t,n){n.d(t,{useWatchBlocks:function(){return l}});var i=n(52594),r=n(57139),o=n(50026),a=n(35296),s=n(81089);function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:n=!0,onBlock:l,config:c,...u}=t,d=(0,s.useConfig)(t),h=(0,a.useChainId)({config:d}),p=null!==(e=t.chainId)&&void 0!==e?e:h;(0,o.useEffect)(()=>{if(n&&l)return function(e,t){let n,o;let{syncConnectedChain:a=e._internal.syncConnectedChain,...s}=t,l=t=>{n&&n();let o=e.getClient({chainId:t});return n=(0,r.s)(o,i.p,"watchBlocks")(s)},c=l(t.chainId);return a&&!t.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>l(e))),()=>{c?.(),o?.()}}(d,{...u,chainId:p,onBlock:l})},[p,d,n,l,u.blockTag,u.emitMissed,u.emitOnBegin,u.includeTransactions,u.onError,u.poll,u.pollingInterval,u.syncConnectedChain])}},1106:function(e,t,n){n.d(t,{useWatchContractEvent:function(){return l}});var i=n(57032),r=n(57139),o=n(50026),a=n(35296),s=n(81089);function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:n=!0,onLogs:l,config:c,...u}=t,d=(0,s.useConfig)(t),h=(0,a.useChainId)({config:d}),p=null!==(e=t.chainId)&&void 0!==e?e:h;(0,o.useEffect)(()=>{if(n&&l)return function(e,t){let n,o;let{syncConnectedChain:a=e._internal.syncConnectedChain,...s}=t,l=t=>{n&&n();let o=e.getClient({chainId:t});return n=(0,r.s)(o,i.Y,"watchContractEvent")(s)},c=l(t.chainId);return a&&!t.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>l(e))),()=>{c?.(),o?.()}}(d,{...u,chainId:p,onLogs:l})},[p,d,n,l,u.abi,u.address,u.args,u.batch,u.eventName,u.fromBlock,u.onError,u.poll,u.pollingInterval,u.strict,u.syncConnectedChain])}},17307:function(e,t,n){n.d(t,{useWatchPendingTransactions:function(){return l}});var i=n(23796),r=n(57139),o=n(50026),a=n(35296),s=n(81089);function l(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:n=!0,onTransactions:l,config:c,...u}=t,d=(0,s.useConfig)(t),h=(0,a.useChainId)({config:d}),p=null!==(e=t.chainId)&&void 0!==e?e:h;(0,o.useEffect)(()=>{if(n&&l)return function(e,t){let n,o;let{syncConnectedChain:a=e._internal.syncConnectedChain,...s}=t,l=t=>{n&&n();let o=e.getClient({chainId:t});return n=(0,r.s)(o,i.O,"watchPendingTransactions")(s)},c=l(t.chainId);return a&&!t.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>l(e))),()=>{c?.(),o?.()}}(d,{...u,chainId:p,onTransactions:l})},[p,d,n,l,u.batch,u.onError,u.poll,u.pollingInterval,u.syncConnectedChain])}},70945:function(e,t,n){n.d(t,{useWriteContract:function(){return a}});var i=n(20819),r=n(38914),o=n(81089);function a(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=t,a=(e=(0,o.useConfig)(t),{mutationFn:t=>(0,r.n)(e,t),mutationKey:["writeContract"]}),{mutate:s,mutateAsync:l,...c}=(0,i.D)({...n,...a});return{...c,writeContract:s,writeContractAsync:l}}},52530:function(e,t,n){let i;n.d(t,{NS:function(){return P},aM:function(){return N}});var r=n(99681),o=n(92156),a=n(95116),s=n(22826),l=n(11116),c=class extends s.l{constructor(e,t){super(),this.options=t,this.#m=e,this.#y=null,this.bindMethods(),this.setOptions(t)}#m;#b=void 0;#v=void 0;#C=void 0;#x;#A;#y;#k;#T;#S;#E;#I;#R;#O=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#b.addObserver(this),u(this.#b,this.options)?this.#N():this.updateResult(),this.#P())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return d(this.#b,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.#b,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#D(),this.#B(),this.#b.removeObserver(this)}setOptions(e,t){let n=this.options,i=this.#b;if(this.options=this.#m.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,r.Nc)(this.options.enabled,this.#b))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#$(),this.#b.setOptions(this.options),n._defaulted&&!(0,r.VS)(this.options,n)&&this.#m.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#b,observer:this});let o=this.hasListeners();o&&h(this.#b,i,this.options,n)&&this.#N(),this.updateResult(t),o&&(this.#b!==i||(0,r.Nc)(this.options.enabled,this.#b)!==(0,r.Nc)(n.enabled,this.#b)||(0,r.KC)(this.options.staleTime,this.#b)!==(0,r.KC)(n.staleTime,this.#b))&&this.#U();let a=this.#j();o&&(this.#b!==i||(0,r.Nc)(this.options.enabled,this.#b)!==(0,r.Nc)(n.enabled,this.#b)||a!==this.#R)&&this.#M(a)}getOptimisticResult(e){let t=this.#m.getQueryCache().build(this.#m,e),n=this.createResult(t,e);return(0,r.VS)(this.getCurrentResult(),n)||(this.#C=n,this.#A=this.options,this.#x=this.#b.state),n}getCurrentResult(){return this.#C}trackResult(e,t){let n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(i),t?.(i),e[i])})}),n}trackProp(e){this.#O.add(e)}getCurrentQuery(){return this.#b}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#m.defaultQueryOptions(e),n=this.#m.getQueryCache().build(this.#m,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#N({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#C))}#N(e){this.#$();let t=this.#b.fetch(this.options,e);return e?.throwOnError||(t=t.catch(r.ZT)),t}#U(){this.#D();let e=(0,r.KC)(this.options.staleTime,this.#b);if(r.sk||this.#C.isStale||!(0,r.PN)(e))return;let t=(0,r.Kp)(this.#C.dataUpdatedAt,e);this.#E=setTimeout(()=>{this.#C.isStale||this.updateResult()},t+1)}#j(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#b):this.options.refetchInterval)??!1}#M(e){this.#B(),this.#R=e,!r.sk&&!1!==(0,r.Nc)(this.options.enabled,this.#b)&&(0,r.PN)(this.#R)&&0!==this.#R&&(this.#I=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.#N()},this.#R))}#P(){this.#U(),this.#M(this.#j())}#D(){this.#E&&(clearTimeout(this.#E),this.#E=void 0)}#B(){this.#I&&(clearInterval(this.#I),this.#I=void 0)}createResult(e,t){let n;let i=this.#b,o=this.options,a=this.#C,s=this.#x,c=this.#A,d=e!==i?e.state:this.#v,{state:f}=e,w={...f},g=!1;if(t._optimisticResults){let n=this.hasListeners(),r=!n&&u(e,t),a=n&&h(e,i,t,o);(r||a)&&(w={...w,...(0,l.z)(f.data,e.options)}),"isRestoring"===t._optimisticResults&&(w.fetchStatus="idle")}let{error:m,errorUpdatedAt:y,status:b}=w;if(t.select&&void 0!==w.data){if(a&&w.data===s?.data&&t.select===this.#k)n=this.#T;else try{this.#k=t.select,n=t.select(w.data),n=(0,r.oE)(a?.data,n,t),this.#T=n,this.#y=null}catch(e){this.#y=e}}else n=w.data;if(void 0!==t.placeholderData&&void 0===n&&"pending"===b){let e;if(a?.isPlaceholderData&&t.placeholderData===c?.placeholderData)e=a.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#S?.state.data,this.#S):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#y=null}catch(e){this.#y=e}void 0!==e&&(b="success",n=(0,r.oE)(a?.data,e,t),g=!0)}this.#y&&(m=this.#y,n=this.#T,y=Date.now(),b="error");let v="fetching"===w.fetchStatus,C="pending"===b,x="error"===b,A=C&&v,k=void 0!==n;return{status:b,fetchStatus:w.fetchStatus,isPending:C,isSuccess:"success"===b,isError:x,isInitialLoading:A,isLoading:A,data:n,dataUpdatedAt:w.dataUpdatedAt,error:m,errorUpdatedAt:y,failureCount:w.fetchFailureCount,failureReason:w.fetchFailureReason,errorUpdateCount:w.errorUpdateCount,isFetched:w.dataUpdateCount>0||w.errorUpdateCount>0,isFetchedAfterMount:w.dataUpdateCount>d.dataUpdateCount||w.errorUpdateCount>d.errorUpdateCount,isFetching:v,isRefetching:v&&!C,isLoadingError:x&&!k,isPaused:"paused"===w.fetchStatus,isPlaceholderData:g,isRefetchError:x&&k,isStale:p(e,t),refetch:this.refetch}}updateResult(e){let t=this.#C,n=this.createResult(this.#b,this.options);if(this.#x=this.#b.state,this.#A=this.options,void 0!==this.#x.data&&(this.#S=this.#b),(0,r.VS)(n,t))return;this.#C=n;let i={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,n="function"==typeof e?e():e;if("all"===n||!n&&!this.#O.size)return!0;let i=new Set(n??this.#O);return this.options.throwOnError&&i.add("error"),Object.keys(this.#C).some(e=>this.#C[e]!==t[e]&&i.has(e))})()&&(i.listeners=!0),this.#L({...i,...e})}#$(){let e=this.#m.getQueryCache().build(this.#m,this.options);if(e===this.#b)return;let t=this.#b;this.#b=e,this.#v=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#P()}#L(e){o.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#C)}),this.#m.getQueryCache().notify({query:this.#b,type:"observerResultsUpdated"})})}};function u(e,t){return!1!==(0,r.Nc)(t.enabled,e)&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)||void 0!==e.state.data&&d(e,t,t.refetchOnMount)}function d(e,t,n){if(!1!==(0,r.Nc)(t.enabled,e)){let i="function"==typeof n?n(e):n;return"always"===i||!1!==i&&p(e,t)}return!1}function h(e,t,n,i){return(e!==t||!1===(0,r.Nc)(i.enabled,e))&&(!n.suspense||"error"!==e.state.status)&&p(e,n)}function p(e,t){return!1!==(0,r.Nc)(t.enabled,e)&&e.isStaleByTime((0,r.KC)(t.staleTime,e))}var f=n(50026);n(8932);var w=f.createContext((i=!1,{clearReset:()=>{i=!1},reset:()=>{i=!0},isReset:()=>i})),g=()=>f.useContext(w),m=n(97518),y=f.createContext(!1),b=()=>f.useContext(y);y.Provider;var v=n(77225),C=(e,t)=>{(e.suspense||e.throwOnError)&&!t.isReset()&&(e.retryOnMount=!1)},x=e=>{f.useEffect(()=>{e.clearReset()},[e])},A=e=>{let{result:t,errorResetBoundary:n,throwOnError:i,query:r}=e;return t.isError&&!n.isReset()&&!t.isFetching&&r&&(0,v.L)(i,[t.error,r])},k=e=>{e.suspense&&("number"!=typeof e.staleTime&&(e.staleTime=1e3),"number"==typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3)))},T=(e,t)=>e?.suspense&&t.isPending,S=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function E(e,t,n){var i,r,a,s;let l=(0,m.NL)(n),c=b(),u=g(),d=l.defaultQueryOptions(e);null===(r=l.getDefaultOptions().queries)||void 0===r||null===(i=r._experimental_beforeQuery)||void 0===i||i.call(r,d),d._optimisticResults=c?"isRestoring":"optimistic",k(d),C(d,u),x(u);let[h]=f.useState(()=>new t(l,d)),p=h.getOptimisticResult(d);if(f.useSyncExternalStore(f.useCallback(e=>{let t=c?()=>void 0:h.subscribe(o.V.batchCalls(e));return h.updateResult(),t},[h,c]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),f.useEffect(()=>{h.setOptions(d,{listeners:!1})},[d,h]),T(d,p))throw S(d,h,u);if(A({result:p,errorResetBoundary:u,throwOnError:d.throwOnError,query:l.getQueryCache().get(d.queryHash)}))throw p.error;return null===(s=l.getDefaultOptions().queries)||void 0===s||null===(a=s._experimental_afterQuery)||void 0===a||a.call(s,d,p),d.notifyOnChangeProps?p:h.trackResult(p)}var I=n(24018),R=class extends c{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,I.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,I.Gm)(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){let{state:n}=e,i=super.createResult(e,t),{isFetching:r,isRefetching:o,isError:a,isRefetchError:s}=i,l=n.fetchMeta?.fetchMore?.direction,c=a&&"forward"===l,u=r&&"forward"===l,d=a&&"backward"===l,h=r&&"backward"===l;return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,I.Qy)(t,n.data),hasPreviousPage:(0,I.ZF)(t,n.data),isFetchNextPageError:c,isFetchingNextPage:u,isFetchPreviousPageError:d,isFetchingPreviousPage:h,isRefetchError:s&&!c&&!d,isRefetching:o&&!u&&!h}}},O=n(42798);function N(e){let t=E({...e,queryKeyHashFn:O.kq},c,void 0);return t.queryKey=e.queryKey,t}function P(e){let t=E({...e,queryKeyHashFn:O.kq},R,void 0);return t.queryKey=e.queryKey,t}}}]);