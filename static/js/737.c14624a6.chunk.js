"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[737],{1737:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ie}});var o,a,r,i,s,c,l,u,d,f=n(168),p=n(6444),m=n(1087),v=p.ZP.nav(o||(o=(0,f.Z)(["\n  height: 600px;\n  width: 150px;\n  margin: 5px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 0;\n  border: 1px solid black;\n"]))),g=p.ZP.nav(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n"]))),h=(0,p.ZP)(m.OL)(r||(r=(0,f.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: red;\n  }\n  :hover,\n  .navLink:focus {\n    color: red;\n  }\n"]))),y=n(184),E=function(){return(0,y.jsxs)(v,{children:[(0,y.jsxs)(g,{children:[(0,y.jsx)(h,{to:"/",children:"Oficina"}),(0,y.jsx)(h,{to:"/albaran",children:"Albaran"}),(0,y.jsx)(h,{to:"/factura",children:"Factura"}),(0,y.jsx)(h,{to:"/renta",children:"Renta"}),(0,y.jsx)(h,{to:"/statistic",children:"Statistic"})]}),(0,y.jsx)("div",{children:(0,y.jsx)(h,{to:"/ajustes",children:"Ajustes"})})]})},T=p.ZP.header(i||(i=(0,f.Z)(["\n  border: 1px solid black;\n"]))),x=p.ZP.div(s||(s=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n  padding-bottom: 20px;\n"]))),b=p.ZP.img(c||(c=(0,f.Z)(["\n  width: 390px;\n"]))),Z=p.ZP.a(l||(l=(0,f.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 55px;\n  line-height: 60px;\n  font-weight: 700;\n"]))),C=p.ZP.p(u||(u=(0,f.Z)(["\n  margin: 0px 0 5px 0;\n  font-size: 18px;\n"]))),I=p.ZP.button(d||(d=(0,f.Z)(["\n  margin-left: auto;\n  margin-right: 20px;\n  display: block;\n  margin-bottom: 30px;\n"]))),_=n(2791);var O=n.p+"static/media/logo.f17c99d86ad36b193c19a874d39863c7.svg",L=n(9434),w=n(9273),j=function(){var e=(0,L.I0)();return(0,y.jsxs)(T,{children:[(0,y.jsxs)(x,{children:[(0,y.jsx)(b,{src:O,alt:"logo"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(Z,{href:"tel:692827473",children:"692 82 74 73"}),(0,y.jsx)(C,{children:"c/ Reino, 18-2- (local) \xb7 50003 ZARAGOZA "})]})]}),(0,y.jsx)(I,{type:"button",onClick:function(){return e((0,w.ni)())},children:"LogOut"})]})},k=n(7689),R=n(4942),P=n(9439),N=n(1413);function M(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=n(3433);function B(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=B(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var D=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=B(e))&&(o&&(o+=" "),o+=t);return o},z=["theme","type"],S=["delay","staleId"],F=function(e){return"number"==typeof e&&!isNaN(e)},H=function(e){return"string"==typeof e},q=function(e){return"function"==typeof e},Q=function(e){return H(e)||q(e)?e:null},V=function(e){return(0,_.isValidElement)(e)||H(e)||q(e)||F(e)};function G(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,i=void 0===r||r,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var o=e.children,r=e.position,s=e.preventExitTransition,l=e.done,u=e.nodeRef,d=e.isIn,f=a?"".concat(t,"--").concat(r):t,p=a?"".concat(n,"--").concat(r):n,m=(0,_.useRef)(0);return(0,_.useLayoutEffect)((function(){var e,t=u.current,n=f.split(" "),o=function e(o){var a;o.target===u.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===m.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,A.Z)(n)))};(e=t.classList).add.apply(e,(0,A.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,_.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,l,c):l()};d||(s?t():(m.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[d]),_.createElement(_.Fragment,null,o)}}function U(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var W={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,A.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},X=function(e){var t=e.theme,n=e.type,o=M(e,z);return _.createElement("svg",(0,N.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},Y={info:function(e){return _.createElement(X,(0,N.Z)({},e),_.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return _.createElement(X,(0,N.Z)({},e),_.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return _.createElement(X,(0,N.Z)({},e),_.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return _.createElement(X,(0,N.Z)({},e),_.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return _.createElement("div",{className:"Toastify__spinner"})}};function K(e){var t=(0,_.useReducer)((function(e){return e+1}),0),n=(0,P.Z)(t,2)[1],o=(0,_.useState)([]),a=(0,P.Z)(o,2),r=a[0],i=a[1],s=(0,_.useRef)(null),c=(0,_.useRef)(new Map).current,l=function(e){return-1!==r.indexOf(e)},u=(0,_.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return c.get(e)}}).current;function d(e){var t=e.containerId;!u.props.limit||t&&u.containerId!==t||(u.count-=u.queue.length,u.queue=[])}function f(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function p(){var e=u.queue.shift();v(e.toastContent,e.toastProps,e.staleId)}function m(e,t){var o=t.delay,a=t.staleId,r=M(t,S);if(V(e)&&!function(e){return!s.current||u.props.enableMultiContainer&&e.containerId!==u.props.containerId||c.has(e.toastId)&&null==e.updateId}(r)){var i=r.toastId,l=r.updateId,d=r.data,m=u.props,g=function(){return f(i)},h=null==l;h&&u.count++;var y,E,T=(0,N.Z)((0,N.Z)((0,N.Z)({},m),{},{style:m.toastStyle,key:u.toastKey++},Object.fromEntries(Object.entries(r).filter((function(e){var t=(0,P.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:i,updateId:l,data:d,closeToast:g,isIn:!1,className:Q(r.className||m.toastClassName),bodyClassName:Q(r.bodyClassName||m.bodyClassName),progressClassName:Q(r.progressClassName||m.progressClassName),autoClose:!r.isLoading&&(y=r.autoClose,E=m.autoClose,!1===y||F(y)&&y>0?y:E),deleteToast:function(){var e=U(c.get(i),"removed");c.delete(i),W.emit(4,e);var t=u.queue.length;if(u.count=null==i?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),t>0){var o=null==i?u.props.limit:1;if(1===t||1===o)u.displayedToast++,p();else{var a=o>t?t:o;u.displayedToast=a;for(var r=0;r<a;r++)p()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,i={theme:t,type:n};return!1===a||(q(a)?r=a(i):(0,_.isValidElement)(a)?r=(0,_.cloneElement)(a,i):H(a)||F(a)?r=a:o?r=Y.spinner():function(e){return e in Y}(n)&&(r=Y[n](i))),r}(T),q(r.onOpen)&&(T.onOpen=r.onOpen),q(r.onClose)&&(T.onClose=r.onClose),T.closeButton=m.closeButton,!1===r.closeButton||V(r.closeButton)?T.closeButton=r.closeButton:!0===r.closeButton&&(T.closeButton=!V(m.closeButton)||m.closeButton);var x=e;(0,_.isValidElement)(e)&&!H(e.type)?x=(0,_.cloneElement)(e,{closeToast:g,toastProps:T,data:d}):q(e)&&(x=e({closeToast:g,toastProps:T,data:d})),m.limit&&m.limit>0&&u.count>m.limit&&h?u.queue.push({toastContent:x,toastProps:T,staleId:a}):F(o)?setTimeout((function(){v(x,T,a)}),o):v(x,T,a)}}function v(e,t,n){var o=t.toastId;n&&c.delete(n);var a={content:e,props:t};c.set(o,a),i((function(e){return[].concat((0,A.Z)(e),[o]).filter((function(e){return e!==n}))})),W.emit(4,U(a,null==a.props.updateId?"added":"updated"))}return(0,_.useEffect)((function(){return u.containerId=e.containerId,W.cancelEmit(3).on(0,m).on(1,(function(e){return s.current&&f(e)})).on(5,d).emit(2,u),function(){c.clear(),W.emit(3,u)}}),[]),(0,_.useEffect)((function(){u.props=e,u.isToastActive=l,u.displayedToast=r.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(c.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:s,isToastActive:l}}function J(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function $(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ee(e){var t=(0,_.useState)(!1),n=(0,P.Z)(t,2),o=n[0],a=n[1],r=(0,_.useState)(!1),i=(0,P.Z)(r,2),s=i[0],c=i[1],l=(0,_.useRef)(null),u=(0,_.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,_.useRef)(e),f=e.autoClose,p=e.pauseOnHover,m=e.closeToast,v=e.onClick,g=e.closeOnClick;function h(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),u.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",b),document.addEventListener("touchmove",x),document.addEventListener("touchend",b);var n=l.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=J(t.nativeEvent),u.y=$(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(u.boundingRect){var n=u.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&u.x>=r&&u.x<=i&&u.y>=o&&u.y<=a?T():E()}}function E(){a(!0)}function T(){a(!1)}function x(t){var n=l.current;u.canDrag&&n&&(u.didMove=!0,o&&T(),u.x=J(t),u.y=$(t),u.delta="x"===e.draggableDirection?u.x-u.start:u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(u.delta,"px)"),n.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance)))}function b(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",b);var t=l.current;if(u.canDrag&&u.didMove&&t){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,_.useEffect)((function(){d.current=e})),(0,_.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),q(e.onOpen)&&e.onOpen((0,_.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;q(e.onClose)&&e.onClose((0,_.isValidElement)(e.children)&&e.children.props)}}),[]),(0,_.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var Z={onMouseDown:h,onTouchStart:h,onMouseUp:y,onTouchEnd:y};return f&&p&&(Z.onMouseEnter=T,Z.onMouseLeave=E),g&&(Z.onClick=function(e){v&&v(e),u.canCloseOnClick&&m()}),{playToast:E,pauseToast:T,isRunning:o,preventExitTransition:s,toastRef:l,eventHandlers:Z}}function te(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return _.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},_.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},_.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function ne(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,r=void 0===a?"default":a,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,u=e.progress,d=e.rtl,f=e.isIn,p=e.theme,m=i||l&&0===u,v=(0,N.Z)((0,N.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:m?0:1});l&&(v.transform="scaleX(".concat(u,")"));var g=D("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(p),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":d}),h=q(s)?s({rtl:d,type:r,defaultClassName:g}):D(g,s);return _.createElement("div",(0,R.Z)({role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:h,style:v},l&&u>=1?"onTransitionEnd":"onAnimationEnd",l&&u<1?null:function(){f&&o()}))}var oe=function(e){var t=ee(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,r=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,l=e.onClick,u=e.type,d=e.hideProgressBar,f=e.closeToast,p=e.transition,m=e.position,v=e.className,g=e.style,h=e.bodyClassName,y=e.bodyStyle,E=e.progressClassName,T=e.progressStyle,x=e.updateId,b=e.role,Z=e.progress,C=e.rtl,I=e.toastId,O=e.deleteToast,L=e.isIn,w=e.isLoading,j=e.iconOut,k=e.closeOnClick,R=e.theme,P=D("Toastify__toast","Toastify__toast-theme--".concat(R),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":k}),M=q(v)?v({rtl:C,position:m,type:u,defaultClassName:P}):D(P,v),A=!!Z||!c,B={closeToast:f,type:u,theme:R},z=null;return!1===i||(z=q(i)?i(B):(0,_.isValidElement)(i)?(0,_.cloneElement)(i,B):te(B)),_.createElement(p,{isIn:L,done:O,position:m,preventExitTransition:o,nodeRef:a},_.createElement("div",(0,N.Z)((0,N.Z)({id:I,onClick:l,className:M},r),{},{style:g,ref:a}),_.createElement("div",(0,N.Z)((0,N.Z)({},L&&{role:b}),{},{className:q(h)?h({type:u}):D("Toastify__toast-body",h),style:y}),null!=j&&_.createElement("div",{className:D("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!w})},j),_.createElement("div",null,s)),z,_.createElement(ne,(0,N.Z)((0,N.Z)({},x&&!A?{key:"pb-".concat(x)}:{}),{},{rtl:C,theme:R,delay:c,isRunning:n,isIn:L,closeToast:f,hide:d,type:u,style:T,className:E,controlledProgress:A,progress:Z||0}))))},ae=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},re=G(ae("bounce",!0)),ie=(G(ae("slide",!0)),G(ae("zoom")),G(ae("flip")),(0,_.forwardRef)((function(e,t){var n=K(e),o=n.getToastToRender,a=n.containerRef,r=n.isToastActive,i=e.className,s=e.style,c=e.rtl,l=e.containerId;function u(e){var t=D("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return q(i)?i({position:e,rtl:c,defaultClassName:t}):D(t,Q(i))}return(0,_.useEffect)((function(){t&&(t.current=a.current)}),[]),_.createElement("div",{ref:a,className:"Toastify",id:l},o((function(e,t){var n=t.length?(0,N.Z)({},s):(0,N.Z)((0,N.Z)({},s),{},{pointerEvents:"none"});return _.createElement("div",{className:u(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return _.createElement(oe,(0,N.Z)((0,N.Z)({},a),{},{isIn:r(a.toastId),style:(0,N.Z)((0,N.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));ie.displayName="ToastContainer",ie.defaultProps={position:"top-right",transition:re,autoClose:5e3,closeButton:te,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var se,ce,le,ue,de,fe=new Map,pe=[],me=1;function ve(){return""+me++}function ge(e){return e&&(H(e.toastId)||F(e.toastId))?e.toastId:ve()}function he(e,t){return fe.size>0?W.emit(0,e,t):pe.push({content:e,options:t}),t.toastId}function ye(e,t){return(0,N.Z)((0,N.Z)({},t),{},{type:t&&t.type||e,toastId:ge(t)})}function Ee(e){return function(t,n){return he(t,ye(e,n))}}function Te(e,t){return he(e,ye("default",t))}Te.loading=function(e,t){return he(e,ye("default",(0,N.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Te.promise=function(e,t,n){var o,a=t.pending,r=t.error,i=t.success;a&&(o=H(a)?Te.loading(a,n):Te.loading(a.render,(0,N.Z)((0,N.Z)({},n),a)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,a){if(null!=t){var r=(0,N.Z)((0,N.Z)((0,N.Z)({type:e},s),n),{},{data:a}),i=H(t)?{render:t}:t;return o?Te.update(o,(0,N.Z)((0,N.Z)({},r),i)):Te(i.render,(0,N.Z)((0,N.Z)({},r),i)),a}Te.dismiss(o)},l=q(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",r,e)})),l},Te.success=Ee("success"),Te.info=Ee("info"),Te.error=Ee("error"),Te.warning=Ee("warning"),Te.warn=Te.warning,Te.dark=function(e,t){return he(e,ye("default",(0,N.Z)({theme:"dark"},t)))},Te.dismiss=function(e){fe.size>0?W.emit(1,e):pe=pe.filter((function(t){return null!=e&&t.options.toastId!==e}))},Te.clearWaitingQueue=function(e){return void 0===e&&(e={}),W.emit(5,e)},Te.isActive=function(e){var t=!1;return fe.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Te.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=fe.get(n||se);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,N.Z)((0,N.Z)((0,N.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:ve()});r.toastId!==e&&(r.staleId=e);var i=r.render||a;delete r.render,he(i,r)}}),0)},Te.done=function(e){Te.update(e,{progress:1})},Te.onChange=function(e){return W.on(4,e),function(){W.off(4,e)}},Te.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Te.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},W.on(2,(function(e){se=e.containerId||e,fe.set(se,e),pe.forEach((function(e){W.emit(0,e.content,e.options)})),pe=[]})).on(3,(function(e){fe.delete(e.containerId||e),0===fe.size&&W.off(0).off(1).off(5)}));var xe=p.ZP.div(ce||(ce=(0,f.Z)(["\n  width: 960px;\n  margin: 0;\n  padding: 0 16px;\n  border: 1px solid red;\n"]))),be=(p.ZP.header(le||(le=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border: 1px solid black;\n"]))),p.ZP.div(ue||(ue=(0,f.Z)(["\n  display: flex;\n"])))),Ze=p.ZP.main(de||(de=(0,f.Z)(["\n  margin: 5px;\n  border: 1px solid blue;\n  height: 600px;\n  width: 100%;\n"]))),Ce=n(3614),Ie=function(){return(0,y.jsxs)(xe,{children:[(0,y.jsx)(ie,{autoClose:3e3,pauseOnHover:!1}),(0,y.jsx)(j,{}),(0,y.jsxs)(be,{children:[(0,y.jsx)(E,{}),(0,y.jsx)(Ze,{children:(0,y.jsx)(_.Suspense,{fallback:(0,y.jsx)(Ce.H,{}),children:(0,y.jsx)(k.j3,{})})})]})]})}}}]);
//# sourceMappingURL=737.c14624a6.chunk.js.map