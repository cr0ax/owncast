(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{1481:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/federation/followers",function(){return n(38403)}])},38403:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(28520),a=n.n(r),c=n(85893),i=n(67294),o=n(87462),s=n(4942),l=n(71002),u=n(97685),d=n(94184),f=n.n(d),p=n(48555),m=n(42550),h=n(59844),v=n(21687),g=n(24308),x=n(25378),y=i.createContext("default"),w=function(e){var t=e.children,n=e.size;return i.createElement(y.Consumer,null,(function(e){return i.createElement(y.Provider,{value:n||e},t)}))},k=y,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},j=function(e,t){var n,r,a=i.useContext(k),c=i.useState(1),d=(0,u.Z)(c,2),y=d[0],w=d[1],j=i.useState(!1),Z=(0,u.Z)(j,2),E=Z[0],S=Z[1],C=i.useState(!0),O=(0,u.Z)(C,2),P=O[0],T=O[1],z=i.useRef(),N=i.useRef(),A=(0,m.sQ)(t,z),_=i.useContext(h.E_).getPrefixCls,D=function(){if(N.current&&z.current){var t=N.current.offsetWidth,n=z.current.offsetWidth;if(0!==t&&0!==n){var r=e.gap,a=void 0===r?4:r;2*a<n&&w(n-2*a<t?(n-2*a)/t:1)}}};i.useEffect((function(){S(!0)}),[]),i.useEffect((function(){T(!0),w(1)}),[e.src]),i.useEffect((function(){D()}),[e.gap]);var I=e.prefixCls,R=e.shape,Q=e.size,F=e.src,M=e.srcSet,q=e.icon,H=e.className,B=e.alt,U=e.draggable,W=e.children,X=e.crossOrigin,K=b(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),Y="default"===Q?a:Q,G=(0,x.Z)(),L=i.useMemo((function(){if("object"!==(0,l.Z)(Y))return{};var e=g.c4.find((function(e){return G[e]})),t=Y[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:q?t/2:18}:{}}),[G,Y]);(0,v.Z)(!("string"===typeof q&&q.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(q,"` at https://ant.design/components/icon"));var V,J=_("avatar",I),$=f()((n={},(0,s.Z)(n,"".concat(J,"-lg"),"large"===Y),(0,s.Z)(n,"".concat(J,"-sm"),"small"===Y),n)),ee=i.isValidElement(F),te=f()(J,$,(r={},(0,s.Z)(r,"".concat(J,"-").concat(R),!!R),(0,s.Z)(r,"".concat(J,"-image"),ee||F&&P),(0,s.Z)(r,"".concat(J,"-icon"),!!q),r),H),ne="number"===typeof Y?{width:Y,height:Y,lineHeight:"".concat(Y,"px"),fontSize:q?Y/2:18}:{};if("string"===typeof F&&P)V=i.createElement("img",{src:F,draggable:U,srcSet:M,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&T(!1)},alt:B,crossOrigin:X});else if(ee)V=F;else if(q)V=q;else if(E||1!==y){var re="scale(".concat(y,") translateX(-50%)"),ae={msTransform:re,WebkitTransform:re,transform:re},ce="number"===typeof Y?{lineHeight:"".concat(Y,"px")}:{};V=i.createElement(p.default,{onResize:D},i.createElement("span",{className:"".concat(J,"-string"),ref:function(e){N.current=e},style:(0,o.Z)((0,o.Z)({},ce),ae)},W))}else V=i.createElement("span",{className:"".concat(J,"-string"),style:{opacity:0},ref:function(e){N.current=e}},W);return delete K.onError,delete K.gap,i.createElement("span",(0,o.Z)({},K,{style:(0,o.Z)((0,o.Z)((0,o.Z)({},ne),L),K.style),className:te,ref:A}),V)},Z=i.forwardRef(j);Z.displayName="Avatar",Z.defaultProps={shape:"circle",size:"default"};var E=Z,S=n(50344),C=n(96159),O=n(55241),P=function(e){var t=i.useContext(h.E_),n=t.getPrefixCls,r=t.direction,a=e.prefixCls,c=e.className,o=void 0===c?"":c,l=e.maxCount,u=e.maxStyle,d=e.size,p=n("avatar-group",a),m=f()(p,(0,s.Z)({},"".concat(p,"-rtl"),"rtl"===r),o),v=e.children,g=e.maxPopoverPlacement,x=void 0===g?"top":g,y=e.maxPopoverTrigger,k=void 0===y?"hover":y,b=(0,S.Z)(v).map((function(e,t){return(0,C.Tm)(e,{key:"avatar-key-".concat(t)})})),j=b.length;if(l&&l<j){var Z=b.slice(0,l),P=b.slice(l,j);return Z.push(i.createElement(O.Z,{key:"avatar-popover-key",content:P,trigger:k,placement:x,overlayClassName:"".concat(p,"-popover")},i.createElement(E,{style:u},"+".concat(j-l)))),i.createElement(w,{size:d},i.createElement("div",{className:m,style:e.style},Z))}return i.createElement(w,{size:d},i.createElement("div",{className:m,style:e.style},b))},T=E;T.Group=P;var z=T,N=n(87961),A=n(88829),_=n(71577),D=n(58091),I=n(1413),R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},Q=n(42135),F=function(e,t){return i.createElement(Q.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:R}))};F.displayName="UserAddOutlined";var M=i.forwardRef(F),q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 901.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534zM880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-delete",theme:"outlined"},H=function(e,t){return i.createElement(Q.Z,(0,I.Z)((0,I.Z)({},e),{},{ref:t,icon:q}))};H.displayName="UserDeleteOutlined";var B=i.forwardRef(H),U=n(35159),W=n(58827),X=n(2766);function K(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function Y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function i(e){K(c,r,a,i,o,"next",e)}function o(e){K(c,r,a,i,o,"throw",e)}i(void 0)}))}}function G(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var L=N.Z.TabPane;function V(){var e=function(e,t){return(0,c.jsx)(A.Z,{dataSource:e,columns:t,size:"small",rowKey:function(e){return e.link},pagination:{pageSize:20}})},t=(0,i.useState)([]),n=t[0],r=t[1],o=(0,i.useState)([]),s=o[0],l=o[1],u=(0,i.useState)([]),d=u[0],f=u[1],p=((0,i.useContext)(U.aC)||{}).serverConfig.federation.isPrivate,m=Y(a().mark((function e(){var t,n,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.rQ)(W.HP,{auth:!0});case 3:return t=e.sent,(0,X.Qr)(t)?f([]):f(t),e.next=7,(0,W.rQ)(W.E8,{auth:!0});case 7:return n=e.sent,(0,X.Qr)(n)?r([]):r(n),e.next=11,(0,W.rQ)(W.Y9,{auth:!0});case 11:c=e.sent,(0,X.Qr)(s)?l([]):l(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("==== error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));(0,i.useEffect)((function(){m()}),[]);var h=[{title:"",dataIndex:"image",key:"image",width:90,render:function(e){return(0,c.jsx)(z,{size:40,src:e||"/img/logo.svg"})}},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.name||t.username})}},{title:"URL",dataIndex:"link",key:"link",render:function(e,t){return(0,c.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})}}];function v(e){return g.apply(this,arguments)}function g(){return(g=Y(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.rQ)(W.kb,{auth:!0,method:"POST",data:{actorIRI:t.link,approved:!0}});case 3:m(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=Y(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,W.rQ)(W.kb,{auth:!0,method:"POST",data:{actorIRI:t.link,approved:!1}});case 3:m(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var w=G(h);w.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(_.Z,{type:"primary",icon:(0,c.jsx)(M,{}),onClick:function(){v(e)}})},width:50},{title:"Reject",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(_.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(B,{}),onClick:function(){x(e)}})},width:50}),w.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,D.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var k=G(h);k.unshift({title:"Approve",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(_.Z,{type:"primary",icon:(0,c.jsx)(M,{}),size:"large",onClick:function(){v(e)}})},width:50}),k.push({title:"Requested",dataIndex:"timestamp",key:"requested",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,D.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Rejected/Blocked",dataIndex:"timestamp",key:"disabled_at",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,D.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"});var b=G(h);b.push({title:"Added",dataIndex:"timestamp",key:"timestamp",width:200,render:function(e){var t=new Date(e);return(0,c.jsx)(c.Fragment,{children:(0,D.Z)(t,"P")})},sorter:function(e,t){return new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Remove",dataIndex:null,key:null,render:function(e){return(0,c.jsx)(_.Z,{type:"primary",danger:!0,icon:(0,c.jsx)(B,{}),onClick:function(){x(e)}})},width:50});var j=p&&(0,c.jsxs)(L,{tab:(0,c.jsxs)("span",{children:["Requests ",n.length>0&&"(".concat(n.length,")")]}),children:[(0,c.jsxs)("p",{children:["The following people are requesting to follow your Owncast server on the"," ",(0,c.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",target:"_blank",rel:"noopener noreferrer",children:"Fediverse"})," ","and be alerted to when you go live. Each must be approved."]}),e(n,w)]},"2");return(0,c.jsx)("div",{className:"followers-section",children:(0,c.jsxs)(N.Z,{defaultActiveKey:"1",children:[(0,c.jsxs)(L,{tab:(0,c.jsxs)("span",{children:["Followers ",d.length>0&&"(".concat(d.length,")")]}),children:[(0,c.jsx)("p",{children:"The following accounts get notified when you go live or send a post."}),e(d,b)," "]},"1"),j,(0,c.jsxs)(L,{tab:(0,c.jsxs)("span",{children:["Blocked ",s.length>0&&"(".concat(s.length,")")]}),children:[(0,c.jsx)("p",{children:"The following people were either rejected or blocked by you. You can approve them as a follower."}),(0,c.jsx)("p",{children:e(s,k)})]},"3")]})})}}},function(e){e.O(0,[829,91,961,774,888,179],(function(){return t=1481,e(e.s=t);var t}));var t=e.O();_N_E=t}]);